import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const root = process.cwd();
const outPath = path.join(root, "Tracker_RecapitulareMathEn_2026-10-01.xlsx");
const asOfDate = new Date("2026-10-01T00:00:00");

function isYearDir(name) {
  return /^20\d\d$/.test(name);
}

function cleanLabel(stem, year) {
  if (year === "2007") return `Varianta ${stem.replace("varianta_", "")}`;
  return stem
    .replace(/_LRO$/, "")
    .replace(/_/g, " ")
    .replace(/Matematica/gi, "Matematică")
    .replace(/Subiect/gi, "Subiect")
    .replace(/Test/gi, "Test");
}

function classify(stem, year) {
  if (year === "2007") return "Testare Națională";
  if (/Model2/.test(stem)) return "Model 2";
  if (/Model/.test(stem)) return "Model";
  if (/Simulare2/.test(stem)) return "Simulare 2";
  if (/Simulare/.test(stem)) return "Simulare";
  if (/Sesiunea_Speciala/.test(stem)) return "Sesiunea specială";
  if (/Rezerva2/.test(stem)) return "Rezervă 2";
  if (/Rezerva/.test(stem)) return "Rezervă";
  if (/Test_/.test(stem)) return "Test";
  return "Examen";
}

async function inventory() {
  const years = (await fs.readdir(root, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && isYearDir(entry.name))
    .map((entry) => entry.name)
    .sort();
  const subjects = [];
  const baremStems = new Set();
  const excluded = [];

  for (const year of years) {
    const dir = path.join(root, year);
    const files = (await fs.readdir(dir)).filter((file) => /\.(md|pdf)$/i.test(file));
    for (const file of files) {
      const stem = file.replace(/\.(md|pdf)$/i, "");
      const ext = path.extname(file).slice(1).toLowerCase();
      const lower = stem.toLowerCase();
      if (lower.includes("barem")) {
        baremStems.add(`${year}|${stem}`);
        continue;
      }
      if (lower.includes("solutii")) {
        excluded.push({ year, file: `${year}/${file}`, reason: "Soluții / barem agregat; nu se filmează" });
        continue;
      }
      if (year === "2007" && !/^varianta_\d{3}$/i.test(stem)) {
        excluded.push({ year, file: `${year}/${file}`, reason: "Material auxiliar, nu subiect individual" });
        continue;
      }
      const key = `${year}|${stem}`;
      let row = subjects.find((item) => item.key === key);
      if (!row) {
        const baremStem = stem.replace("_Subiect", "_Barem").replace("_Test", "_Barem");
        row = {
          key,
          year: Number(year),
          type: classify(stem, year),
          title: cleanLabel(stem, year),
          stem,
          md: "",
          pdf: "",
          barem: baremStems.has(`${year}|${baremStem}`) ? `${year}/${baremStem}.md + .pdf` : "Nu există în folder",
        };
        subjects.push(row);
      }
      row[ext] = `${year}/${file}`;
    }
  }

  // The barem files may be encountered after the corresponding subject.
  for (const row of subjects) {
    const baremStem = row.stem.replace("_Subiect", "_Barem").replace("_Test", "_Barem");
    row.barem = baremStems.has(`${row.year}|${baremStem}`)
      ? `${row.year}/${baremStem}.md + .pdf`
      : "Nu există în folder";
  }

  subjects.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, "ro"));
  return { subjects, excluded, years };
}

const data = await inventory();
const workbook = Workbook.create();
const dashboard = workbook.worksheets.add("Dashboard");
const tracker = workbook.worksheets.add("Tracker");
const settings = workbook.worksheets.add("Setari");
const sources = workbook.worksheets.add("Surse");

const colors = {
  navy: "#1F4E78",
  blue: "#D9EAF7",
  lightBlue: "#EAF3F8",
  amber: "#FFF2CC",
  green: "#E2F0D9",
  red: "#FCE4D6",
  gray: "#F2F2F2",
  border: "#B7C9D6",
  text: "#1F2933",
};
const bodyFont = { name: "Arial", size: 10, color: colors.text };

function setFont(range, options = {}) {
  range.format.font = { ...bodyFont, ...options };
}
function title(sheet, range, text) {
  sheet.getRange(range).merge();
  const start = range.split(":")[0];
  sheet.getRange(start).values = [[text]];
  setFont(sheet.getRange(range), { name: "Arial", size: 15, bold: true, color: colors.navy });
}
function header(range) {
  range.format.fill = colors.navy;
  setFont(range, { bold: true, color: "#FFFFFF" });
  range.format.horizontalAlignment = "center";
  range.format.verticalAlignment = "center";
  range.format.wrapText = true;
  range.format.borders = { preset: "all", style: "thin", color: "#FFFFFF" };
}
function section(range) {
  range.format.fill = colors.blue;
  setFont(range, { bold: true, color: colors.navy });
  range.format.borders = { preset: "outside", style: "thin", color: colors.border };
}

// Settings / editable assumptions.
settings.showGridLines = false;
settings.tabColor = colors.amber;
title(settings, "A2:F2", "Setări și estimare de efort");
settings.getRange("A4:B14").values = [
  ["Parametru", "Valoare"],
  ["Data de referință", asOfDate],
  ["Filmarea unui subiect (minute)", 20],
  ["Editarea unui subiect (minute)", 15],
  ["Publicare + metadata (minute)", 8],
  ["Verificare finală / QA (minute)", 5],
  ["Ore productive disponibile / săptămână", 20],
  ["Minute totale / subiect", null],
  ["Număr subiecte", null],
  ["Ore totale estimate", null],
  ["Săptămâni estimate", null],
];
header(settings.getRange("A4:B4"));
settings.getRange("B5").setNumberFormat("yyyy-mm-dd");
settings.getRange("B11").formulas = [["=SUM(B6:B9)"]];
settings.getRange("B12").formulas = [[`=COUNTA(Tracker!$A$7:$A$${data.subjects.length + 6})`]];
settings.getRange("B13").formulas = [["=B11*B12/60"]];
settings.getRange("B14").formulas = [["=B13/B10"]];
settings.getRange("B6:B10").format.fill = colors.amber;
settings.getRange("B5:B13").format.horizontalAlignment = "right";
settings.getRange("B6:B11").setNumberFormat("0.0");
settings.getRange("B12").setNumberFormat("0");
settings.getRange("B13:B14").setNumberFormat("0.0");
settings.getRange("A16:F16").merge();
settings.getRange("A16").values = [["Cum folosești fișierul: schimbă minutele galbene, apoi actualizează statusul pe Tracker. Toate formulele de efort se recalculează automat."]];
settings.getRange("A16:F16").format.fill = colors.lightBlue;
settings.getRange("A16:F16").format.wrapText = true;
settings.getRange("A4:B13").format.borders = { preset: "outside", style: "thin", color: colors.border };
settings.getRange("A:A").format.columnWidth = 38;
settings.getRange("B:B").format.columnWidth = 18;
settings.getRange("C:F").format.columnWidth = 14;

// Tracker.
tracker.showGridLines = false;
tracker.tabColor = colors.navy;
title(tracker, "A2:P2", "Tracker filmare subiecte — Recapitulare Matematică");
tracker.getRange("A3:P3").merge();
tracker.getRange("A3").values = [["Baremele sunt inventariate pentru control, dar nu apar ca activități de filmare. MD și PDF sunt grupate ca un singur subiect logic."]];
tracker.getRange("A3:P3").format.fill = colors.lightBlue;
tracker.getRange("A3:P3").format.wrapText = true;
const trackerHeaders = [["ID", "An", "Tip", "Subiect / variantă", "Status", "Prioritate", "Film. min", "Edit. min", "Public. min", "QA min", "Total min", "Total ore", "Sursă MD", "Sursă PDF", "Barem (nu se filmează)", "Observații"]];
tracker.getRange("A6:P6").values = trackerHeaders;
header(tracker.getRange("A6:P6"));
const firstRow = 7;
const trackerValues = data.subjects.map((s, i) => [
  i + 1, s.year, s.type, s.title, "Neînceput", "Normal", null, null, null, null, null, null, s.md || "Lipsește", s.pdf || "Lipsește", s.barem, "",
]);
tracker.getRange(`A${firstRow}:P${firstRow + trackerValues.length - 1}`).values = trackerValues;
for (let i = 0; i < trackerValues.length; i++) {
  const r = firstRow + i;
  tracker.getRange(`G${r}:L${r}`).formulas = [[
    `=IF($E${r}="Amânat",0,Setari!$B$6)`,
    `=IF($E${r}="Amânat",0,Setari!$B$7)`,
    `=IF($E${r}="Amânat",0,Setari!$B$8)`,
    `=IF($E${r}="Amânat",0,Setari!$B$9)`,
    `=SUM(G${r}:J${r})`,
    `=K${r}/60`,
  ]];
}
tracker.getRange(`A${firstRow}:P${firstRow + trackerValues.length - 1}`).format.verticalAlignment = "center";
tracker.getRange(`G${firstRow}:L${firstRow + trackerValues.length - 1}`).format.numberFormat = "0.0";
tracker.getRange(`L${firstRow}:L${firstRow + trackerValues.length - 1}`).format.fill = colors.green;
tracker.getRange(`E${firstRow}:F${firstRow + trackerValues.length - 1}`).format.fill = colors.amber;
tracker.getRange(`A6:P${firstRow + trackerValues.length - 1}`).format.borders = { insideHorizontal: { style: "thin", color: "#E6EEF3" }, bottom: { style: "thin", color: colors.border } };
tracker.getRange(`E${firstRow}:E${firstRow + trackerValues.length - 1}`).dataValidation = { rule: { type: "list", values: ["Neînceput", "În lucru", "Gata", "Amânat"] } };
tracker.getRange(`F${firstRow}:F${firstRow + trackerValues.length - 1}`).dataValidation = { rule: { type: "list", values: ["Ridicată", "Normal", "Joasă"] } };
tracker.getRange(`E${firstRow}:E${firstRow + trackerValues.length - 1}`).conditionalFormats.add("containsText", { text: "Gata", format: { fill: colors.green, font: { color: "#27632A", bold: true } } });
tracker.getRange(`E${firstRow}:E${firstRow + trackerValues.length - 1}`).conditionalFormats.add("containsText", { text: "Amânat", format: { fill: colors.red, font: { color: "#9C0006", bold: true } } });
tracker.freezePanes.freezeRows(6);
tracker.freezePanes.freezeColumns(4);
const widths = { A: 7, B: 8, C: 19, D: 44, E: 14, F: 12, G: 10, H: 10, I: 11, J: 9, K: 10, L: 10, M: 42, N: 42, O: 46, P: 28 };
for (const [col, width] of Object.entries(widths)) tracker.getRange(`${col}:${col}`).format.columnWidth = width;

// Dashboard.
dashboard.showGridLines = false;
dashboard.tabColor = colors.navy;
title(dashboard, "A2:L2", "Dashboard proiect — Recapitulare Matematică");
dashboard.getRange("A3:L3").merge();
dashboard.getRange("A3").values = [["Situație la 1 octombrie 2026. Ajustează ipotezele pe Setari și statusurile pe Tracker."]];
dashboard.getRange("A3:L3").format.fill = colors.lightBlue;
dashboard.getRange("A5:B5").values = [["Indicator", "Valoare"]];
header(dashboard.getRange("A5:B5"));
dashboard.getRange("A6:A12").values = [["Subiecte totale"], ["Gata"], ["Rămase"], ["Progres"], ["Ore totale estimate"], ["Ore rămase"], ["Săptămâni rămase"]];
dashboard.getRange("B6:B12").formulas = [
  [`=COUNTA(Tracker!$A$${firstRow}:$A$${firstRow + data.subjects.length - 1})`],
  [`=COUNTIF(Tracker!$E$${firstRow}:$E$${firstRow + data.subjects.length - 1},"Gata")`],
  ["=B6-B7"],
  ["=IF(B6=0,0,B7/B6)"],
  ["=SUM(Tracker!$L$7:$L$242)"],
  [`=SUMIF(Tracker!$E$${firstRow}:$E$${firstRow + data.subjects.length - 1},"<>Gata",Tracker!$L$${firstRow}:$L$${firstRow + data.subjects.length - 1})`],
  ["=B11/Setari!$B$10"],
];
dashboard.getRange("A6:B12").format.borders = { preset: "outside", style: "thin", color: colors.border };
dashboard.getRange("B6:B12").format.fill = colors.green;
dashboard.getRange("B9").setNumberFormat("0%");
dashboard.getRange("B10:B12").setNumberFormat("0.0");
dashboard.getRange("D5:H5").values = [["An", "Subiecte", "Gata", "Ore totale", "Ore rămase"]];
header(dashboard.getRange("D5:H5"));
const yearRows = data.years.map((year, idx) => {
  const r = 6 + idx;
  return [Number(year), null, null, null, null];
});
dashboard.getRange(`D6:H${5 + yearRows.length}`).values = yearRows;
for (let i = 0; i < data.years.length; i++) {
  const r = 6 + i;
  dashboard.getRange(`E${r}:H${r}`).formulas = [[
    `=COUNTIF(Tracker!$B$${firstRow}:$B$${firstRow + data.subjects.length - 1},D${r})`,
    `=COUNTIFS(Tracker!$B$${firstRow}:$B$${firstRow + data.subjects.length - 1},D${r},Tracker!$E$${firstRow}:$E$${firstRow + data.subjects.length - 1},"Gata")`,
    `=SUMIF(Tracker!$B$${firstRow}:$B$${firstRow + data.subjects.length - 1},D${r},Tracker!$L$${firstRow}:$L$${firstRow + data.subjects.length - 1})`,
    `=SUMIFS(Tracker!$L$${firstRow}:$L$${firstRow + data.subjects.length - 1},Tracker!$B$${firstRow}:$B$${firstRow + data.subjects.length - 1},D${r},Tracker!$E$${firstRow}:$E$${firstRow + data.subjects.length - 1},"<>Gata")`,
  ]];
}
dashboard.getRange(`D5:H${5 + yearRows.length}`).format.borders = { preset: "outside", style: "thin", color: colors.border };
dashboard.getRange(`F6:H${5 + yearRows.length}`).setNumberFormat("0.0");
dashboard.getRange("A26:L26").merge();
dashboard.getRange("A26").values = [["Observații de eficientizare"]];
section(dashboard.getRange("A26:L26"));
dashboard.getRange("A27:L31").merge();
dashboard.getRange("A27").values = [[
  "• Lucrează în loturi: cele 100 de variante din 2007 pot fi filmate în sesiuni consecutive, cu aceeași structură de intro/outro.\n" +
  "• Păstrează baremele în folder pentru control, dar nu le transforma în clipuri: trackerul are 136 bareme logice separate.\n" +
  "• Folosește un șablon de editare și metadata; timpul de publicare și QA este cel mai ușor de redus prin proces repetabil.\n" +
  "• Începe cu prioritate ridicată și cu anii recenți; schimbă statusurile pe Tracker pentru o estimare live a orelor rămase."
]];
dashboard.getRange("A27:L31").format.wrapText = true;
dashboard.getRange("A27:L31").format.verticalAlignment = "top";
dashboard.getRange("A:A").format.columnWidth = 26;
dashboard.getRange("B:B").format.columnWidth = 16;
dashboard.getRange("C:C").format.columnWidth = 3;
dashboard.getRange("D:H").format.columnWidth = 14;
dashboard.getRange("I:L").format.columnWidth = 14;

// Source inventory / scope.
sources.showGridLines = false;
sources.tabColor = colors.gray;
title(sources, "A2:F2", "Inventar și delimitarea scopului");
sources.getRange("A4:B4").values = [["Categorie", "Fișiere / subiecte"]];
header(sources.getRange("A4:B4"));
sources.getRange("A5:B9").values = [
  ["Subiecte logice incluse", data.subjects.length],
  ["Fișiere subiect incluse (MD + PDF)", data.subjects.length * 2],
  ["Bareme logice excluse din filmare", 136],
  ["Fișiere barem excluse (MD + PDF)", 272],
  ["Soluții / materiale auxiliare excluse", 2],
];
sources.getRange("A5:B9").format.borders = { preset: "outside", style: "thin", color: colors.border };
sources.getRange("A12:F12").values = [["An", "Subiecte incluse", "Fișiere MD", "Fișiere PDF", "Barem disponibil", "Notă"]];
header(sources.getRange("A12:F12"));
const summaryRows = data.years.map((year) => {
  const items = data.subjects.filter((s) => String(s.year) === year);
  const baremCount = items.filter((s) => s.barem !== "Nu există în folder").length;
  return [Number(year), items.length, items.filter((s) => s.md).length, items.filter((s) => s.pdf).length, baremCount, year === "2007" ? "100 variante; fără barem asociat în folder" : "Subiectele sunt dublate MD/PDF"];
});
sources.getRange(`A13:F${12 + summaryRows.length}`).values = summaryRows;
sources.getRange(`A12:F${12 + summaryRows.length}`).format.borders = { preset: "outside", style: "thin", color: colors.border };
sources.getRange("A25:F25").merge();
sources.getRange("A25").values = [["Regulă de includere: se filmează doar subiectele / testele / variantele individuale. Baremele și soluțiile agregate sunt păstrate ca referință, dar nu intră în trackerul de filmare."]];
sources.getRange("A25:F25").format.fill = colors.lightBlue;
sources.getRange("A25:F25").format.wrapText = true;
sources.getRange("A:A").format.columnWidth = 34;
sources.getRange("B:E").format.columnWidth = 17;
sources.getRange("F:F").format.columnWidth = 46;

for (const sheet of [dashboard, tracker, settings, sources]) {
  const used = sheet.getUsedRange();
  used.format.font = { ...bodyFont, ...(used.format.font || {}) };
  used.format.verticalAlignment = "center";
}

await workbook.recalculate();
const inspect = await workbook.inspect({ kind: "sheet,region", maxChars: 3000, tableMaxRows: 8, tableMaxCols: 8 });
console.log(inspect.ndjson ?? inspect);
const preview = await workbook.render({ sheetName: "Dashboard", autoCrop: "all", scale: 1, format: "png" });
await fs.writeFile(path.join(root, "tracker_dashboard_preview.png"), new Uint8Array(await preview.arrayBuffer()));
const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outPath);
console.log(`Saved ${outPath}`);
