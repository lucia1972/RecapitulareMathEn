import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ExcelJS = require("exceljs");

const root = process.cwd();
const outPath = path.join(root, "Tracker_RecapitulareMathEn_2026-10-01.xlsx");
const asOfDate = new Date(2026, 10, 26);

const colors = {
  navy: "FF1F4E78",
  blue: "FFD9EAF7",
  lightBlue: "FFEAF3F8",
  amber: "FFFFF2CC",
  green: "FFE2F0D9",
  greenText: "FF27632A",
  red: "FFFCE4D6",
  redText: "FF9C0006",
  gray: "FFF2F2F2",
  border: "FFB7C9D6",
  white: "FFFFFFFF",
  text: "FF1F2933",
  ink: "FF3F2E22",
  sand: "FFF4F1EA",
  headerWarm: "FF7A4E2D",
  line: "FFE6DDD2",
  gold: "FFC4A574",
};

const modules = {
  cuprins: { name: "Cuprins", fill: "FFF4F1EA" },
  I: { name: "I — Numere și operații", fill: "FFF8EBD3" },
  II: { name: "II — Algebră", fill: "FFD9EAF7" },
  III: { name: "III — Geometrie plană", fill: "FFE3F1E6" },
  IV: { name: "IV — Geometrie în spațiu", fill: "FFEDE4F5" },
  V: { name: "V — Integrare și examen", fill: "FFFDE7D8" },
};

const same =
  "Cap-coadă: teorie, apoi fișa 1, apoi fișa 2. Dacă termini mai repede, timpul rămas rămâne pauză.";

const lessons = [
  ["cuprins", "—", "Cuprinsul cursului", "Ordinea celor 5 module și a celor 30 de lecții. Verifici că fiecare are teorie și două fișe.", "26.11.2026", "joi", "17:15", "17:30", 15, 1, "RecapitulareENMate/cuprins.md", "Deschiderea serii. Nu e lecție, e harta. După ea urmează doar două lecții.", false],
  ["I", "01", "Numere naturale și calcul numeric", "Ordinea operațiilor, paranteze, estimare, proprietăți ale operațiilor și probleme de calcul.", "26.11.2026", "joi", "17:30", "19:00", 90, 2, "RecapitulareENMate/Lectie01", "Cea mai lungă teorie din curs. O citești pe îndelete. Diseară nu mai faci a treia lecție.", true],
  ["I", "02", "Divizibilitate și numere prime", "Divizori, multipli, criterii de divizibilitate, numere prime, factori primi, c.m.m.d.c. și c.m.m.m.c.", "26.11.2026", "joi", "19:15", "20:30", 75, 3, "RecapitulareENMate/Lectie02", "Ultima de joi. La 20:30 se închide, chiar dacă mai ai chef.", true],
  ["I", "03", "Fracții ordinare și zecimale", "Fracții echivalente, simplificare, operații, transformări și probleme cu fracții.", "27.11.2026", "vineri", "09:30", "10:45", 75, 1, "RecapitulareENMate/Lectie03", same, true],
  ["I", "04", "Rapoarte, proporții și procente", "Rapoarte, proporții, mărimi direct proporționale, procente, reduceri, creșteri și împărțiri în raport dat.", "27.11.2026", "vineri", "11:00", "12:15", 75, 2, "RecapitulareENMate/Lectie04", "După ea urmează prânzul lung, până la 14:00. Nu sări peste pauză.", true],
  ["I", "05", "Numere întregi și numere raționale", "Comparare, modul, operații cu semne, fracții negative, numere zecimale periodice și probleme.", "27.11.2026", "vineri", "14:00", "15:15", 75, 3, "RecapitulareENMate/Lectie05", same, true],
  ["I", "06", "Puteri și radicali", "Regulile puterilor, notație științifică, radicali, simplificare, operații și ecuații simple.", "27.11.2026", "vineri", "15:30", "17:00", 90, 4, "RecapitulareENMate/Lectie06", "Închide Modulul I. Are 90 de minute, nu 75. Nu o înghesui ca să prinzi mai devreme algebra.", true],
  ["II", "07", "Expresii algebrice și calcul literal", "Termeni asemenea, distributivitate, paranteze, evaluarea expresiilor și domeniul de definiție.", "27.11.2026", "vineri", "17:15", "18:30", 75, 5, "RecapitulareENMate/Lectie07", "Doar intrarea în algebră. La 18:30 gata. Restul modulului e sâmbătă.", true],
  ["II", "08", "Formule de calcul prescurtat și descompunere", "Pătratul sumei, pătratul diferenței, diferența de pătrate, factor comun și identități.", "28.11.2026", "sâmbătă", "09:30", "10:45", 75, 1, "RecapitulareENMate/Lectie08", same, true],
  ["II", "09", "Ecuații de gradul I", "Ecuații cu paranteze, fracții, parametri simpli, verificarea soluțiilor și probleme cu o necunoscută.", "28.11.2026", "sâmbătă", "11:00", "12:15", 75, 2, "RecapitulareENMate/Lectie09", "După ea, prânz până la 14:00.", true],
  ["II", "10", "Inecuații de gradul I", "Regula inversării semnului, intervale, reprezentarea pe axă și probleme cu restricții.", "28.11.2026", "sâmbătă", "14:00", "15:15", 75, 3, "RecapitulareENMate/Lectie10", same, true],
  ["II", "11", "Sisteme de două ecuații", "Substituție, reducere, verificare și probleme cu prețuri, vârste, numere și animale.", "28.11.2026", "sâmbătă", "15:30", "16:45", 75, 4, "RecapitulareENMate/Lectie11", same, true],
  ["II", "12", "Funcții și reprezentarea grafică", "Funcția de gradul I, tabel de valori, pantă, monotonie, zerou și intersecția graficelor.", "28.11.2026", "sâmbătă", "17:00", "18:15", 75, 5, "RecapitulareENMate/Lectie12", "Ultima de sâmbătă. Statistica rămâne duminică dimineața, nu o trage diseară.", true],
  ["II", "13", "Statistică și probabilități", "Frecvență, medie, mediană, modă, amplitudine, grafice și probabilitate clasică.", "29.11.2026", "duminică", "10:00", "11:15", 75, 1, "RecapitulareENMate/Lectie13", "Închide Modulul II. Duminica începe la 10, nu la 9:30.", true],
  ["III", "14", "Puncte, drepte și unghiuri", "Poziții relative, segmente, unghiuri opuse la vârf, complementare, suplementare și drepte paralele.", "29.11.2026", "duminică", "11:30", "12:45", 75, 2, "RecapitulareENMate/Lectie14", "După ea, pauză lungă până la 15:00. Loc de plimbare.", true],
  ["III", "15", "Triunghiuri: clasificare și proprietăți", "Suma unghiurilor, unghi exterior, isoscel, echilateral, mediană, înălțime și bisectoare.", "29.11.2026", "duminică", "15:00", "16:15", 75, 3, "RecapitulareENMate/Lectie15", same, true],
  ["III", "16", "Congruența triunghiurilor", "Criteriile LLL, LUL, ULU și catetă-ipotenuză, corespondența și demonstrații.", "29.11.2026", "duminică", "16:30", "17:45", 75, 4, "RecapitulareENMate/Lectie16", "Ultima de duminică. La 17:45 se închide. Patrulaterele sunt luni.", true],
  ["III", "17", "Patrulatere", "Paralelogram, dreptunghi, romb, pătrat și trapez: proprietăți, diagonale, perimetre și arii.", "30.11.2026", "luni", "09:30", "10:45", 75, 1, "RecapitulareENMate/Lectie17", same, true],
  ["III", "18", "Poligoane și cerc", "Poligoane regulate, suma unghiurilor, elementele cercului, arce, coarde, tangente și unghiuri în cerc.", "30.11.2026", "luni", "11:00", "12:15", 75, 2, "RecapitulareENMate/Lectie18", "După ea, prânz până la 14:00.", true],
  ["III", "19", "Asemănarea triunghiurilor și Thales", "Criterii de asemănare, rapoarte, perimetre, arii, configurații cu paralele și aplicații.", "30.11.2026", "luni", "14:00", "15:15", 75, 3, "RecapitulareENMate/Lectie19", same, true],
  ["III", "20", "Teorema lui Pitagora și reciproca", "Triunghi dreptunghic, ipotenuză, catete, triplete pitagoreice, diagonale și aplicații.", "30.11.2026", "luni", "15:30", "16:45", 75, 4, "RecapitulareENMate/Lectie20", same, true],
  ["III", "21", "Relații metrice și trigonometrie", "Proiecții, înălțimea pe ipotenuză, sinus, cosinus, tangentă și valori unghiulare uzuale.", "30.11.2026", "luni", "17:00", "18:30", 90, 5, "RecapitulareENMate/Lectie21", "Slot de 90 de minute. Trigonometria nu se grăbește. La 18:30 gata.", true],
  ["III", "22", "Perimetre și arii în plan", "Formule, unități, figuri compuse, decupări și probleme de optimizare sau interpretare.", "01.12.2026", "marți", "09:30", "11:00", 90, 1, "RecapitulareENMate/Lectie22", "Fișele sunt mai lungi aici. 90 de minute dimineața. Închide geometria plană.", true],
  ["IV", "23", "Elemente de geometrie în spațiu", "Puncte, drepte, plane, paralelism, perpendicularitate, secțiuni, arii și volume.", "01.12.2026", "marți", "11:15", "12:45", 90, 2, "RecapitulareENMate/Lectie23", "Și fișa 2 e mai lungă. 90 de minute, apoi prânz până la 14:15.", true],
  ["IV", "24", "Cub și paralelipiped dreptunghic", "Fețe, muchii, diagonale, arie totală, volum și conversii de unități.", "01.12.2026", "marți", "14:15", "15:30", 75, 3, "RecapitulareENMate/Lectie24", "Fișele sunt scurte. Dacă termini devreme, nu trage lecția următoare în slot.", true],
  ["IV", "25", "Prisme și piramide", "Baze, înălțime, apotemă, arie laterală, arie totală și volum.", "01.12.2026", "marți", "15:45", "17:00", 75, 4, "RecapitulareENMate/Lectie25", same, true],
  ["IV", "26", "Cilindru, con și sferă", "Suprafețe, generatoare, rază, diametru, arii și volume ale corpurilor de rotație.", "01.12.2026", "marți", "17:15", "18:30", 75, 5, "RecapitulareENMate/Lectie26", "Închide Modulul IV. Marți seara nu se mai adaugă nimic.", true],
  ["V", "27", "Probleme integrate de algebră", "Probleme cu procente, proporții, ecuații, sisteme, funcții și interpretarea rezultatelor.", "02.12.2026", "miercuri", "09:30", "11:00", 90, 1, "RecapitulareENMate/Lectie27", "Ultima zi liberă. Integrarea are 90 de minute, chiar dacă fișele sunt scurte.", true],
  ["V", "28", "Probleme integrate de geometrie", "Configurații cu triunghiuri, patrulatere, cercuri, asemănare, Pitagora și corpuri.", "02.12.2026", "miercuri", "11:15", "12:45", 90, 2, "RecapitulareENMate/Lectie28", "După ea, prânz până la 14:15. Nu comprima ca să termini mai devreme cu forța.", true],
  ["V", "29", "Simulare completă și analiza greșelilor", "Rezolvare în timp real, barem, clasificarea erorilor și un program de remediere.", "02.12.2026", "miercuri", "14:15", "15:45", 90, 3, "RecapitulareENMate/Lectie29", same, true],
  ["V", "30", "Recapitulare finală și strategie de examen", "Formule esențiale, metode de verificare, gestionarea timpului și simulare finală.", "02.12.2026", "miercuri", "16:00", "17:30", 90, 4, "RecapitulareENMate/Lectie30", "Ultima. La 17:30 se oprește tot. Seara e liberă. Joi, 3 decembrie, e școala.", true],
].map((row, index) => ({
  id: index === 0 ? 0 : index,
  modulKey: row[0],
  nr: row[1],
  titlu: row[2],
  cuprinde: row[3],
  data: row[4],
  zi: row[5],
  start: row[6],
  end: row[7],
  minutes: row[8],
  pas: row[9],
  folder: row[10],
  nota: row[11],
  checks: row[12],
}));

const days = [
  ["joi", "26.11.2026", "17:15–20:30", "Start de seară. Două lecții și cuprinsul. La 20:30 te oprești. Nu recuperezi nimic diseară."],
  ["vineri", "27.11.2026", "09:30–12:15, apoi 14:00–18:30", "Închizi Modulul I și pui o lecție de algebră. Prânzul ține până la 14:00. Seara, de la 18:30, e liberă."],
  ["sâmbătă", "28.11.2026", "09:30–12:15, apoi 14:00–18:15", "Cinci lecții de algebră, același ritm. La 18:15 se închide caietul. Statistica rămâne pe duminică."],
  ["duminică", "29.11.2026", "10:00–12:45, apoi 15:00–17:45", "Ziua scurtă. Începi la 10, închizi algebra, te plimbi după prânz. Patru lecții, gata înainte de 18."],
  ["luni", "30.11.2026", "09:30–12:15, apoi 14:00–18:30", "Geometria plană. Ultima lecție, trigonometria, are 90 de minute. Nu o înghesui."],
  ["marți", "01.12.2026", "09:30–12:45, apoi 14:15–18:30", "Dimineața două lecții mai lungi: arii și spațiul. După-amiaza trei corpuri, cu fișe scurte. Se închide Modulul IV."],
  ["miercuri", "02.12.2026", "09:30–12:45, apoi 14:15–17:30", "Ultima zi liberă. Patru lecții de integrare. La 17:30 te oprești. Joi, 3 decembrie, e școala."],
];

const rules = [
  "O lecție se face cap-coadă în slotul ei: întâi teoria, apoi fișa 1, apoi fișa 2. Nu lași o fișă pe ziua următoare.",
  "Cinci lecții e plafonul unei zile pline. Duminica și miercuri sunt câte patru. Joi seara sunt două, plus cuprinsul.",
  "Prânzul e lung, aproape două ore. Între lecții sunt 15 minute. După ora de închidere nu se deschide lecția următoare.",
  "Dacă o fișă e scurtă și termini mai repede, timpul rămas e pauză. Nu tragi lecția următoare în slotul gol.",
  "Faza 1 se închide miercuri 2 decembrie la 17:30. Nimic nu se mută în noaptea de dinainte de școală.",
];

function isYearDir(name) {
  return /^20\d\d$/.test(name);
}

function cleanLabel(stem, year) {
  if (year === "2007") return `Varianta ${stem.replace("varianta_", "")}`;
  return stem
    .replace(/_LRO$/, "")
    .replace(/_/g, " ")
    .replace(/Matematica/gi, "Matematică");
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
  let baremFiles = 0;
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
        baremFiles += 1;
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
        row = {
          key,
          year: Number(year),
          type: classify(stem, year),
          title: cleanLabel(stem, year),
          stem,
          md: "",
          pdf: "",
          barem: "Nu există în folder",
        };
        subjects.push(row);
      }
      row[ext] = `${year}/${file}`;
    }
  }

  for (const row of subjects) {
    const baremStem = row.stem.replace("_Subiect", "_Barem").replace("_Test", "_Barem");
    row.barem = baremStems.has(`${row.year}|${baremStem}`)
      ? `${row.year}/${baremStem}.md + .pdf`
      : "Nu există în folder";
  }

  subjects.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, "ro"));
  return { subjects, excluded, years, baremLogical: baremStems.size, baremFiles };
}

function argb(hex) {
  return hex.startsWith("FF") ? hex : `FF${hex.replace("#", "")}`;
}

function solid(hex) {
  return { type: "pattern", pattern: "solid", fgColor: { argb: argb(hex) } };
}

function applyFont(cell, extra = {}) {
  cell.font = { name: "Arial", size: 10, color: { argb: colors.text }, ...extra };
}

function paint(cell, hex, font = {}) {
  cell.fill = solid(hex);
  applyFont(cell, font);
}

function align(cell, extra = {}) {
  cell.alignment = { vertical: "middle", wrapText: true, ...extra };
}

function grid(cell, color = colors.line) {
  const edge = { style: "thin", color: { argb: color } };
  cell.border = { top: edge, left: edge, bottom: edge, right: edge };
}

function writeHeader(sheet, rowNumber, labels, fillHex) {
  const row = sheet.getRow(rowNumber);
  labels.forEach((label, index) => {
    const cell = row.getCell(index + 1);
    cell.value = label;
    paint(cell, fillHex, { bold: true, color: { argb: colors.white }, size: 10 });
    align(cell, { horizontal: "center" });
    grid(cell, colors.white);
  });
  row.height = 32;
}

function listValidation(cell, values) {
  cell.dataValidation = {
    type: "list",
    allowBlank: false,
    formulae: [`"${values.join(",")}"`],
    showErrorMessage: true,
    errorStyle: "warning",
    errorTitle: "Alege din listă",
    error: values.join(", "),
  };
}

async function assertLessonsExist() {
  for (const lesson of lessons) {
    if (!lesson.checks) {
      await fs.access(path.join(root, lesson.folder));
      continue;
    }
    for (const file of ["teorie.md", "fisa01.md", "fisa02.md"]) {
      await fs.access(path.join(root, lesson.folder, file));
    }
  }
}

function buildLectii(workbook) {
  const sheet = workbook.addWorksheet("Lectii", {
    properties: { tabColor: { argb: colors.gold } },
    views: [{ state: "frozen", ySplit: 4, xSplit: 4, showGridLines: false, zoomScale: 110 }],
  });

  sheet.mergeCells("A1:R1");
  sheet.getCell("A1").value = "Faza 1 — revizie cap-coadă, 26 noiembrie – 2 decembrie";
  applyFont(sheet.getCell("A1"), { size: 18, bold: true, color: { argb: colors.headerWarm } });
  align(sheet.getCell("A1"));
  sheet.getRow(1).height = 30;

  sheet.mergeCells("A2:R2");
  sheet.getCell("A2").value =
    "Joi seara: 2 lecții, gata la 20:30. Vineri, sâmbătă, luni și marți: câte 5, cu prânz lung, închise până la 18:30. Duminică și miercuri: câte 4. Miercuri te oprești la 17:30. Joi 3 decembrie e școala.";
  paint(sheet.getCell("A2"), colors.sand, { size: 11, color: { argb: colors.ink } });
  align(sheet.getCell("A2"));
  sheet.getRow(2).height = 36;

  sheet.mergeCells("A3:R3");
  sheet.getCell("A3").value =
    "Completezi galbenul: Status, Teorie, Fișa 01, Fișa 02. O lecție e gata doar când toate trei sunt „Făcut”. Coloana „Toate trei?” se aprinde singură.";
  applyFont(sheet.getCell("A3"), { italic: true, color: { argb: colors.ink } });
  align(sheet.getCell("A3"));
  sheet.getRow(3).height = 22;

  const headers = [
    "ID",
    "Modul",
    "Nr",
    "Lecție",
    "Ce revizuiești",
    "Data",
    "Ziua",
    "Începe",
    "Gata la",
    "Minute",
    "Pas",
    "Status",
    "Teorie",
    "Fișa 01",
    "Fișa 02",
    "Folder",
    "De ce în slotul ăsta",
    "Toate trei?",
  ];
  writeHeader(sheet, 4, headers, colors.headerWarm);

  const first = 5;
  lessons.forEach((lesson, index) => {
    const r = first + index;
    const row = sheet.getRow(r);
    const values = [
      lesson.id === 0 ? "—" : lesson.id,
      modules[lesson.modulKey].name,
      lesson.nr,
      lesson.titlu,
      lesson.cuprinde,
      lesson.data,
      lesson.zi,
      lesson.start,
      lesson.end,
      lesson.minutes,
      lesson.pas,
      "Neînceput",
      lesson.checks ? "De făcut" : "—",
      lesson.checks ? "De făcut" : "—",
      lesson.checks ? "De făcut" : "—",
      lesson.folder,
      lesson.nota,
      lesson.checks ? { formula: `IF(AND(M${r}="Făcut",N${r}="Făcut",O${r}="Făcut"),"Da","")` } : "—",
    ];
    values.forEach((value, col) => {
      const cell = row.getCell(col + 1);
      cell.value = value;
      applyFont(cell, { color: { argb: colors.ink } });
      align(cell, { horizontal: col === 0 || col === 2 || col === 9 || col === 10 ? "center" : "left" });
      cell.fill = solid(modules[lesson.modulKey].fill);
      grid(cell);
    });
    paint(row.getCell(12), colors.amber, { color: { argb: colors.ink } });
    align(row.getCell(12), { horizontal: "center" });
    listValidation(row.getCell(12), ["Neînceput", "În lucru", "Gata"]);
    if (lesson.checks) {
      for (const col of [13, 14, 15]) {
        paint(row.getCell(col), colors.amber, { color: { argb: colors.ink } });
        align(row.getCell(col), { horizontal: "center" });
        listValidation(row.getCell(col), ["De făcut", "Făcut"]);
      }
    } else {
      for (const col of [13, 14, 15]) align(row.getCell(col), { horizontal: "center" });
    }
    align(row.getCell(18), { horizontal: "center" });
    row.getCell(10).numFmt = "0";
    row.height = 48;
  });

  const last = first + lessons.length - 1;
  sheet.autoFilter = { from: "A4", to: `R${last}` };

  sheet.addConditionalFormatting({
    ref: `L${first}:L${last}`,
    rules: [
      {
        type: "containsText",
        operator: "containsText",
        text: "Gata",
        style: { fill: solid(colors.green), font: { name: "Arial", bold: true, color: { argb: colors.greenText } } },
      },
      {
        type: "containsText",
        operator: "containsText",
        text: "În lucru",
        style: { fill: solid("FFFFE2B8"), font: { name: "Arial", bold: true, color: { argb: colors.headerWarm } } },
      },
    ],
  });
  sheet.addConditionalFormatting({
    ref: `M${first}:O${last}`,
    rules: [
      {
        type: "cellIs",
        operator: "equal",
        formulae: ['"Făcut"'],
        style: { fill: solid(colors.green), font: { name: "Arial", bold: true, color: { argb: colors.greenText } } },
      },
    ],
  });
  sheet.addConditionalFormatting({
    ref: `R${first}:R${last}`,
    rules: [
      {
        type: "containsText",
        operator: "containsText",
        text: "Da",
        style: { fill: solid(colors.green), font: { name: "Arial", bold: true, color: { argb: colors.greenText } } },
      },
    ],
  });

  const widths = [6, 30, 6, 42, 54, 14, 12, 10, 10, 10, 8, 14, 12, 12, 12, 34, 62, 13];
  widths.forEach((width, index) => {
    sheet.getColumn(index + 1).width = width;
  });

  const cal = last + 2;
  const band = (row, from, to, value, fillHex, font = {}, height = 24) => {
    if (from !== to) sheet.mergeCells(row, from, row, to);
    const cell = sheet.getRow(row).getCell(from);
    cell.value = value;
    paint(cell, fillHex, font);
    align(cell, { horizontal: from === 4 ? "center" : "left" });
    const edge = { style: "thin", color: { argb: colors.line } };
    const quiet = { style: "thin", color: { argb: fillHex } };
    for (let col = from; col <= to; col++) {
      sheet.getRow(row).getCell(col).border = {
        top: edge,
        bottom: edge,
        left: col === from ? edge : quiet,
        right: col === to ? edge : quiet,
      };
    }
    sheet.getRow(row).height = height;
    return cell;
  };

  band(cal, 1, 18, "Cele 7 zile libere", colors.headerWarm, { bold: true, size: 13, color: { argb: colors.white } }, 26);
  band(cal + 1, 1, 3, "Ziua", colors.ink, { bold: true, color: { argb: colors.white } }, 22);
  band(cal + 1, 4, 4, "Încărcare", colors.ink, { bold: true, color: { argb: colors.white } }, 22);
  band(cal + 1, 5, 18, "Program", colors.ink, { bold: true, color: { argb: colors.white } }, 22);

  days.forEach((day, index) => {
    const r = cal + 2 + index;
    const [zi, data, program, cum] = day;
    const fillHex = index === 0 || index === 3 || index === 6 ? "FFFFF6EA" : colors.sand;
    const label = `${zi} · ${data.slice(0, 5)}`;
    band(r, 1, 3, label, fillHex, { color: { argb: colors.ink } }, 32);
    const load = band(
      r,
      4,
      4,
      { formula: `COUNTIFS($F$${first}:$F$${last},"${data}",$A$${first}:$A$${last},">=1")&" lecții · "&SUMIF($F$${first}:$F$${last},"${data}",$J$${first}:$J$${last})&" min"` },
      fillHex,
      { color: { argb: colors.ink } },
      32,
    );
    align(load, { horizontal: "center" });
    band(r, 5, 18, `${program}. ${cum}`, fillHex, { color: { argb: colors.ink } }, 32);
  });

  const totalRow = cal + 2 + days.length;
  band(totalRow, 1, 3, "Total, până la 17:30 pe 2 dec", colors.headerWarm, { bold: true, color: { argb: colors.white } }, 26);
  const totalLoad = band(
    totalRow,
    4,
    4,
    { formula: `COUNTIF($A$${first}:$A$${last},">=1")&" lecții · "&TEXT(SUM($J$${first}:$J$${last})/60,"0.0")&" ore"` },
    colors.headerWarm,
    { bold: true, color: { argb: colors.white } },
    26,
  );
  align(totalLoad, { horizontal: "center" });
  band(totalRow, 5, 18, "3 decembrie începe școala. Faza 1 nu trece de miercuri seara.", colors.headerWarm, { bold: true, color: { argb: colors.white } }, 26);

  const ruleRow = totalRow + 2;
  band(ruleRow, 1, 18, "Regulile, ca să rămână plăcut", colors.headerWarm, { bold: true, size: 13, color: { argb: colors.white } }, 26);
  rules.forEach((rule, index) => {
    band(ruleRow + 1 + index, 1, 18, `${index + 1}. ${rule}`, index % 2 === 0 ? colors.sand : "FFFFF6EA", { color: { argb: colors.ink } }, 30);
  });

  sheet.pageSetup = { orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 3, paperSize: 9 };
  sheet.headerFooter.oddFooter = "Faza 1 · revizie lecții · 26 nov – 2 dec 2026 · școala începe pe 3 decembrie";
  sheet.pageSetup.printTitlesRow = "1:4";

  return { first, last };
}

function buildSettings(workbook, subjectCount) {
  const sheet = workbook.addWorksheet("Setari", {
    properties: { tabColor: { argb: colors.amber } },
    views: [{ showGridLines: false }],
  });
  sheet.mergeCells("A2:F2");
  sheet.getCell("A2").value = "Setări și estimare de efort — filmare subiecte";
  applyFont(sheet.getCell("A2"), { size: 16, bold: true, color: { argb: colors.navy } });
  sheet.getRow(2).height = 26;

  const rows = [
    ["Parametru", "Valoare"],
    ["Data de referință", asOfDate],
    ["Filmarea unui subiect (minute)", 20],
    ["Editarea unui subiect (minute)", 15],
    ["Publicare + metadata (minute)", 8],
    ["Verificare finală / QA (minute)", 5],
    ["Ore productive disponibile / săptămână", 20],
    ["Minute totale / subiect", { formula: "SUM(B6:B9)" }],
    ["Număr subiecte", { formula: `COUNTA(Tracker!A7:A${subjectCount + 6})` }],
    ["Ore totale estimate", { formula: "B11*B12/60" }],
    ["Săptămâni estimate", { formula: "B13/B10" }],
  ];
  rows.forEach((pair, index) => {
    const row = sheet.getRow(4 + index);
    pair.forEach((value, col) => {
      const cell = row.getCell(col + 1);
      cell.value = value;
      applyFont(cell, { bold: index === 0, color: { argb: index === 0 ? colors.white : colors.text } });
      align(cell);
      grid(cell, colors.border);
      if (index === 0) cell.fill = solid(colors.navy);
    });
    row.height = 20;
  });
  sheet.getCell("B5").numFmt = "yyyy-mm-dd";
  for (const ref of ["B6", "B7", "B8", "B9", "B10"]) paint(sheet.getCell(ref), colors.amber);
  for (const ref of ["B11", "B12", "B13", "B14"]) paint(sheet.getCell(ref), colors.green);
  sheet.getCell("B6").numFmt = "0.0";
  sheet.getCell("B7").numFmt = "0.0";
  sheet.getCell("B8").numFmt = "0.0";
  sheet.getCell("B9").numFmt = "0.0";
  sheet.getCell("B10").numFmt = "0.0";
  sheet.getCell("B11").numFmt = "0.0";
  sheet.getCell("B12").numFmt = "0";
  sheet.getCell("B13").numFmt = "0.0";
  sheet.getCell("B14").numFmt = "0.0";

  sheet.mergeCells("A16:F16");
  sheet.getCell("A16").value =
    "Galbenul de aici schimbă efortul de filmare de pe foaia Tracker. Revizia lecțiilor nu depinde de aceste minute: ritmul ei e fixat pe foaia Lectii, până pe 2 decembrie, ora 17:30.";
  paint(sheet.getCell("A16"), colors.lightBlue);
  align(sheet.getCell("A16"));
  sheet.getRow(16).height = 36;
  sheet.getColumn(1).width = 46;
  sheet.getColumn(2).width = 18;
  sheet.getColumn(3).width = 14;
  sheet.getColumn(4).width = 14;
  sheet.getColumn(5).width = 14;
  sheet.getColumn(6).width = 14;
}

function buildTracker(workbook, subjects) {
  const sheet = workbook.addWorksheet("Tracker", {
    properties: { tabColor: { argb: colors.navy } },
    views: [{ state: "frozen", ySplit: 6, xSplit: 4, showGridLines: false }],
  });
  sheet.mergeCells("A2:P2");
  sheet.getCell("A2").value = "Tracker filmare subiecte — Recapitulare Matematică";
  applyFont(sheet.getCell("A2"), { size: 16, bold: true, color: { argb: colors.navy } });
  sheet.getRow(2).height = 26;

  sheet.mergeCells("A3:P3");
  sheet.getCell("A3").value =
    "Neschimbat față de planul de filmare. Baremele sunt inventariate, dar nu se filmează. MD și PDF ale aceluiași subiect sunt un singur rând. Lecțiile stau pe foaia Lectii.";
  paint(sheet.getCell("A3"), colors.lightBlue);
  align(sheet.getCell("A3"));
  sheet.getRow(3).height = 32;

  const headers = ["ID", "An", "Tip", "Subiect / variantă", "Status", "Prioritate", "Film. min", "Edit. min", "Public. min", "QA min", "Total min", "Total ore", "Sursă MD", "Sursă PDF", "Barem (nu se filmează)", "Observații"];
  writeHeader(sheet, 6, headers, colors.navy);

  const first = 7;
  subjects.forEach((subject, index) => {
    const r = first + index;
    const row = sheet.getRow(r);
    const values = [
      index + 1,
      subject.year,
      subject.type,
      subject.title,
      "Neînceput",
      "Normal",
      { formula: `IF($E${r}="Amânat",0,Setari!$B$6)` },
      { formula: `IF($E${r}="Amânat",0,Setari!$B$7)` },
      { formula: `IF($E${r}="Amânat",0,Setari!$B$8)` },
      { formula: `IF($E${r}="Amânat",0,Setari!$B$9)` },
      { formula: `SUM(G${r}:J${r})` },
      { formula: `K${r}/60` },
      subject.md || "Lipsește",
      subject.pdf || "Lipsește",
      subject.barem,
      "",
    ];
    values.forEach((value, col) => {
      const cell = row.getCell(col + 1);
      cell.value = value;
      applyFont(cell);
      align(cell, { wrapText: col >= 12 });
      if (index % 2 === 1 && col !== 4 && col !== 5 && col !== 11) cell.fill = solid("FFF7FBFD");
    });
    paint(row.getCell(5), colors.amber);
    paint(row.getCell(6), colors.amber);
    paint(row.getCell(12), colors.green);
    align(row.getCell(5), { horizontal: "center" });
    align(row.getCell(6), { horizontal: "center" });
    for (let col = 7; col <= 12; col++) {
      row.getCell(col).numFmt = "0.0";
      align(row.getCell(col), { horizontal: "center" });
    }
    listValidation(row.getCell(5), ["Neînceput", "În lucru", "Gata", "Amânat"]);
    listValidation(row.getCell(6), ["Ridicată", "Normal", "Joasă"]);
    row.height = 18;
  });
  const last = first + subjects.length - 1;
  for (let r = 6; r <= last; r++) {
    for (let c = 1; c <= 16; c++) grid(sheet.getRow(r).getCell(c), r === 6 ? colors.white : "FFE6EEF3");
  }
  sheet.addConditionalFormatting({
    ref: `E${first}:E${last}`,
    rules: [
      {
        type: "containsText",
        operator: "containsText",
        text: "Gata",
        style: { fill: solid(colors.green), font: { name: "Arial", bold: true, color: { argb: colors.greenText } } },
      },
      {
        type: "containsText",
        operator: "containsText",
        text: "Amânat",
        style: { fill: solid(colors.red), font: { name: "Arial", bold: true, color: { argb: colors.redText } } },
      },
    ],
  });
  const widths = [7, 8, 20, 46, 14, 12, 11, 11, 12, 10, 11, 11, 42, 42, 46, 28];
  widths.forEach((width, index) => {
    sheet.getColumn(index + 1).width = width;
  });
  sheet.autoFilter = { from: "A6", to: `P${last}` };
  return { first, last };
}

function buildDashboard(workbook, data, tracker, lectii) {
  const sheet = workbook.addWorksheet("Dashboard", {
    properties: { tabColor: { argb: colors.navy } },
    views: [{ showGridLines: false }],
  });
  sheet.mergeCells("A2:L2");
  sheet.getCell("A2").value = "Dashboard proiect — Recapitulare Matematică";
  applyFont(sheet.getCell("A2"), { size: 16, bold: true, color: { argb: colors.navy } });
  sheet.getRow(2).height = 26;

  sheet.mergeCells("A3:L3");
  sheet.getCell("A3").value =
    "Situație la 26 noiembrie 2026. Revizia lecțiilor e pe foaia Lectii și se închide pe 2 decembrie la 17:30. Filmarea subiectelor rămâne pe Tracker.";
  paint(sheet.getCell("A3"), colors.lightBlue);
  align(sheet.getCell("A3"));
  sheet.getRow(3).height = 32;

  writeHeader(sheet, 5, ["Indicator", "Valoare"], colors.navy);
  const kpis = ["Subiecte totale", "Gata", "Rămase", "Progres", "Ore totale estimate", "Ore rămase", "Săptămâni rămase"];
  const formulas = [
    `COUNTA(Tracker!A${tracker.first}:A${tracker.last})`,
    `COUNTIF(Tracker!E${tracker.first}:E${tracker.last},"Gata")`,
    "B6-B7",
    "IF(B6=0,0,B7/B6)",
    `SUM(Tracker!L${tracker.first}:L${tracker.last})`,
    `SUMIF(Tracker!E${tracker.first}:E${tracker.last},"<>Gata",Tracker!L${tracker.first}:L${tracker.last})`,
    "B11/Setari!B10",
  ];
  kpis.forEach((label, index) => {
    const row = sheet.getRow(6 + index);
    row.getCell(1).value = label;
    row.getCell(2).value = { formula: formulas[index] };
    applyFont(row.getCell(1));
    applyFont(row.getCell(2), { bold: true });
    align(row.getCell(1));
    align(row.getCell(2), { horizontal: "center" });
    paint(row.getCell(2), colors.green);
    grid(row.getCell(1), colors.border);
    grid(row.getCell(2), colors.border);
    row.height = 20;
  });
  sheet.getCell("B9").numFmt = "0%";
  sheet.getCell("B10").numFmt = "0.0";
  sheet.getCell("B11").numFmt = "0.0";
  sheet.getCell("B12").numFmt = "0.0";

  const yearHeaders = ["An", "Subiecte", "Gata", "Ore totale", "Ore rămase"];
  yearHeaders.forEach((label, index) => {
    const cell = sheet.getRow(5).getCell(4 + index);
    cell.value = label;
    paint(cell, colors.navy, { bold: true, color: { argb: colors.white } });
    align(cell, { horizontal: "center" });
    grid(cell, colors.white);
  });
  data.years.forEach((year, index) => {
    const r = 6 + index;
    const row = sheet.getRow(r);
    row.getCell(4).value = Number(year);
    row.getCell(5).value = { formula: `COUNTIF(Tracker!B$${tracker.first}:B$${tracker.last},D${r})` };
    row.getCell(6).value = { formula: `COUNTIFS(Tracker!B$${tracker.first}:B$${tracker.last},D${r},Tracker!E$${tracker.first}:E$${tracker.last},"Gata")` };
    row.getCell(7).value = { formula: `SUMIF(Tracker!B$${tracker.first}:B$${tracker.last},D${r},Tracker!L$${tracker.first}:L$${tracker.last})` };
    row.getCell(8).value = { formula: `SUMIFS(Tracker!L$${tracker.first}:L$${tracker.last},Tracker!B$${tracker.first}:B$${tracker.last},D${r},Tracker!E$${tracker.first}:E$${tracker.last},"<>Gata")` };
    for (let col = 4; col <= 8; col++) {
      applyFont(row.getCell(col));
      align(row.getCell(col), { horizontal: "center" });
      grid(row.getCell(col), colors.border);
    }
    row.getCell(7).numFmt = "0.0";
    row.getCell(8).numFmt = "0.0";
  });

  writeHeader(sheet, 5, ["Indicator", "Valoare"], colors.navy);
  const phaseHeaders = ["Faza 1 — lecții", "Valoare"];
  phaseHeaders.forEach((label, index) => {
    const cell = sheet.getRow(5).getCell(10 + index);
    cell.value = label;
    paint(cell, colors.headerWarm, { bold: true, color: { argb: colors.white } });
    align(cell, { horizontal: "center" });
    grid(cell, colors.white);
  });
  const phase = [
    ["Lecții de revizuit", `COUNTIF(Lectii!A${lectii.first}:A${lectii.last},">=1")`],
    ["Lecții gata", `COUNTIFS(Lectii!A${lectii.first}:A${lectii.last},">=1",Lectii!L${lectii.first}:L${lectii.last},"Gata")`],
    ["Lecții rămase", "K6-K7"],
    ["Progres lecții", "IF(K6=0,0,K7/K6)"],
    ["Ore planificate", `SUM(Lectii!J${lectii.first}:J${lectii.last})/60`],
    ["Fereastra", null],
    ["Școala", null],
  ];
  phase.forEach((pair, index) => {
    const row = sheet.getRow(6 + index);
    row.getCell(10).value = pair[0];
    if (pair[1]) row.getCell(11).value = { formula: pair[1] };
    applyFont(row.getCell(10), { color: { argb: colors.ink } });
    applyFont(row.getCell(11), { bold: true, color: { argb: colors.ink } });
    align(row.getCell(10));
    align(row.getCell(11), { horizontal: "center" });
    paint(row.getCell(10), colors.sand);
    paint(row.getCell(11), "FFFFF6EA");
    grid(row.getCell(10), colors.line);
    grid(row.getCell(11), colors.line);
  });
  sheet.getCell("K6").numFmt = "0";
  sheet.getCell("K7").numFmt = "0";
  sheet.getCell("K8").numFmt = "0";
  sheet.getCell("K9").numFmt = "0%";
  sheet.getCell("K10").numFmt = "0.0";
  sheet.getCell("K11").value = "26 nov – 2 dec, 17:30";
  sheet.getCell("K12").value = "3 decembrie";
  applyFont(sheet.getCell("K11"), { bold: true, color: { argb: colors.ink } });
  applyFont(sheet.getCell("K12"), { bold: true, color: { argb: colors.ink } });

  const noteRow = 6 + data.years.length + 2;
  sheet.mergeCells(`A${noteRow}:L${noteRow}`);
  sheet.getCell(`A${noteRow}`).value = "Cum stau cele două planuri unul lângă altul";
  paint(sheet.getCell(`A${noteRow}`), colors.blue, { bold: true, color: { argb: colors.navy } });
  sheet.mergeCells(`A${noteRow + 1}:L${noteRow + 4}`);
  sheet.getCell(`A${noteRow + 1}`).value =
    "Faza 1, până pe 2 decembrie seara, este doar revizia lecțiilor din RecapitulareENMate: 30 de lecții, fiecare cu teorie și două fișe, în ordinea cuprinsului. Ritmul e făcut să se termine înainte de cină, cu duminica mai scurtă și cu miercuri închisă la 17:30.\n" +
    "Filmatul subiectelor din anii 2007–2027 nu intră în această fereastră. Rămâne pe Tracker, cu aceleași statusuri, și pornește după ce începe școala.\n" +
    "Pe Lectii, marchezi Status și cele trei bife. „Toate trei?” trece pe Da când teoria și ambele fișe sunt Făcut.";
  applyFont(sheet.getCell(`A${noteRow + 1}`));
  align(sheet.getCell(`A${noteRow + 1}`), { vertical: "top" });
  sheet.getRow(noteRow + 1).height = 28;
  sheet.getRow(noteRow + 2).height = 28;
  sheet.getRow(noteRow + 3).height = 28;
  sheet.getRow(noteRow + 4).height = 20;

  sheet.getColumn(1).width = 26;
  sheet.getColumn(2).width = 18;
  sheet.getColumn(3).width = 3;
  for (const col of [4, 5, 6, 7, 8, 9]) sheet.getColumn(col).width = 14;
  sheet.getColumn(10).width = 24;
  sheet.getColumn(11).width = 26;
  sheet.getColumn(12).width = 16;
}

function buildSources(workbook, data) {
  const sheet = workbook.addWorksheet("Surse", {
    properties: { tabColor: { argb: "FFBFBFBF" } },
    views: [{ showGridLines: false }],
  });
  sheet.mergeCells("A2:F2");
  sheet.getCell("A2").value = "Inventar și delimitarea scopului";
  applyFont(sheet.getCell("A2"), { size: 16, bold: true, color: { argb: colors.navy } });
  sheet.getRow(2).height = 26;

  writeHeader(sheet, 4, ["Categorie", "Număr"], colors.navy);
  const mdCount = data.subjects.filter((s) => s.md).length;
  const pdfCount = data.subjects.filter((s) => s.pdf).length;
  const summary = [
    ["Subiecte logice incluse la filmare", data.subjects.length],
    ["Fișiere subiect MD", mdCount],
    ["Fișiere subiect PDF", pdfCount],
    ["Bareme logice, nefilmate", data.baremLogical],
    ["Fișiere barem, nefilmate", data.baremFiles],
    ["Soluții și materiale auxiliare excluse", data.excluded.length],
    ["Lecții în RecapitulareENMate", lessons.filter((lesson) => lesson.id >= 1).length],
    ["Fișiere de lecție (teorie + 2 fișe)", lessons.filter((lesson) => lesson.checks).length * 3],
  ];
  summary.forEach((pair, index) => {
    const row = sheet.getRow(5 + index);
    pair.forEach((value, col) => {
      const cell = row.getCell(col + 1);
      cell.value = value;
      applyFont(cell);
      align(cell);
      grid(cell, colors.border);
    });
  });

  const head = 15;
  ["An", "Subiecte incluse", "Fișiere MD", "Fișiere PDF", "Barem disponibil", "Notă"].forEach((label, index) => {
    const cell = sheet.getRow(head).getCell(index + 1);
    cell.value = label;
    paint(cell, colors.navy, { bold: true, color: { argb: colors.white } });
    align(cell, { horizontal: "center" });
    grid(cell, colors.white);
  });
  data.years.forEach((year, index) => {
    const items = data.subjects.filter((s) => String(s.year) === year);
    const row = sheet.getRow(head + 1 + index);
    const values = [
      Number(year),
      items.length,
      items.filter((s) => s.md).length,
      items.filter((s) => s.pdf).length,
      items.filter((s) => s.barem !== "Nu există în folder").length,
      year === "2007" ? "100 variante; fără barem asociat în folder" : "Subiectele sunt dublate MD/PDF",
    ];
    values.forEach((value, col) => {
      const cell = row.getCell(col + 1);
      cell.value = value;
      applyFont(cell);
      align(cell, { horizontal: col === 5 ? "left" : "center" });
      grid(cell, colors.border);
    });
  });

  sheet.getColumn(1).width = 46;
  sheet.getColumn(2).width = 20;
  sheet.getColumn(3).width = 16;
  sheet.getColumn(4).width = 16;
  sheet.getColumn(5).width = 20;
  sheet.getColumn(6).width = 52;
}

const data = await inventory();
await assertLessonsExist();

const lessonCount = lessons.filter((lesson) => lesson.id >= 1).length;
if (lessonCount !== 30) throw new Error(`Așteptam 30 de lecții, am găsit ${lessonCount}.`);
const expectedByDay = {
  "26.11.2026": 2,
  "27.11.2026": 5,
  "28.11.2026": 5,
  "29.11.2026": 4,
  "30.11.2026": 5,
  "01.12.2026": 5,
  "02.12.2026": 4,
};
const actualByDay = {};
for (const lesson of lessons) {
  if (lesson.id < 1) continue;
  actualByDay[lesson.data] = (actualByDay[lesson.data] || 0) + 1;
}
for (const [day, count] of Object.entries(expectedByDay)) {
  if (actualByDay[day] !== count) throw new Error(`${day}: ${actualByDay[day] ?? 0} lecții, așteptam ${count}.`);
}

const workbook = new ExcelJS.Workbook();
workbook.creator = "RecapitulareMathEn";
workbook.created = asOfDate;
workbook.calcProperties.fullCalcOnLoad = true;

const lectii = buildLectii(workbook);
buildDashboard(workbook, data, { first: 7, last: 6 + data.subjects.length }, lectii);
buildTracker(workbook, data.subjects);
buildSettings(workbook, data.subjects.length);
buildSources(workbook, data);

workbook.views = [{ activeTab: 0, firstSheet: 0, visibility: "visible" }];

await workbook.xlsx.writeFile(outPath);
console.log(`Saved ${outPath}`);
console.log(`Subjects ${data.subjects.length}, lessons ${lessonCount}, barems ${data.baremLogical}`);
