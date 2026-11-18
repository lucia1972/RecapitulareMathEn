/* Setari Tabla LAN Academy — editeaza direct valorile de mai jos.
   Fisierul e optional: daca il stergi sau il redenumesti, aplicatia foloseste
   valorile predefinite din cod, neschimbate. Trebuie sa stea in acelasi folder
   cu Tabla-LAN-Academy.html. */

/* Cele 6 culori de baza din bara de unelte (contur si umplere).
   - "ink" e speciala: nu are cod hex fix, se adapteaza automat la tema
     deschisa/inchisa (nu o schimba aici — schimb-o din CSS, variabila --ink).
   - Restul intrarilor pot avea orice cod hex ("#rrggbb") si orice eticheta.
   - Poti adauga sau sterge intrari — lista poate avea mai putine sau mai multe
     de 6 culori. */
window.TABLA_PALETTE = [
  { id: 'ink',      label: 'Ink / Chalk' },
  { id: '#0e3db1',  label: 'Blue' },
  { id: '#d21c16',  label: 'Red' },
  { id: '#09783b',  label: 'Green' },
  { id: '#ffff03',  label: 'Yellow' },
  { id: '#d86f0c',  label: 'Orange' },
  { id: '#4a24bd',  label: 'Pink' }
];

/* Pozitia initiala a barei de unelte, prima data cand se deschide aplicatia
   intr-un anume browser: 'top' | 'right' | 'bottom' | 'left'.
   Dupa prima incarcare, aplicatia isi aminteste singura ultima pozitie aleasa
   (in acest browser) si nu mai citeste aceasta valoare pana la un reset. */
window.TABLA_TOOLBAR_POS = 'top';

/* Fontul si marimea de text implicite pentru obiectele de tip text (nu se
   aplica la blocuri de cod sau formule LaTeX). La fel ca mai sus, dupa ce
   utilizatorul alege alt font/marime din popup, alegerea lui e retinuta si
   are prioritate fata de aceste valori. */
window.TABLA_DEFAULT_FONT_FAMILY = 'Arial,sans-serif';
window.TABLA_DEFAULT_FONT_SIZE = 20;

/* Literele scurtaturilor de tastatura pentru unelte (fara Ctrl/Alt/Shift).
   Trebuie sa fie litere mici, fara diacritice. Poti suprascrie doar cateva —
   restul raman cele implicite de mai jos. Tooltip-ul fiecarui buton din bara
   de unelte se actualizeaza automat cu litera noua. */
window.TABLA_TOOL_SHORTCUTS = {
  v: 'select',       // Selecteaza / muta
  p: 'pen',          // Creion
  m: 'marker',       // Marker
  l: 'line',         // Linie
  a: 'arrow',        // Sageata
  r: 'rect',         // Dreptunghi
  c: 'ellipse',      // Cerc
  t: 'text',         // Text / Markdown / LaTeX
  i: 'image',        // Insereaza imagine
  e: 'eraser',       // Radiera
  k: 'compass',       // Compas
  u: 'ruler',        // Rigla
  o: 'protractor',   // Raportor
  g: 'parallelogram',// Paralelogram / Romb
  j: 'laser',        // Laser de prezentare
  n: 'snappoint'      // Punct de agatare
};
