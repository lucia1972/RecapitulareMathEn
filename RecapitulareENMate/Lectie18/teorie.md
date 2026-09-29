# Lecția 18 — Poligoane și cerc

## Locul lecției în program

Poligoanele și cercul reunesc proprietăți de unghiuri, lungimi și arii. În problemele de examen apar frecvent poligoane regulate, cercuri înscrise sau circumscrise, tangente, coarde și unghiuri care trebuie determinate din configurație.

## Competențe urmărite

Vei putea:

- să calculezi suma unghiurilor unui poligon;
- să determini unghiul unui poligon regulat;
- să identifici centrul, raza, diametrul, coarda și tangenta;
- să aplici formulele cercului și discului;
- să lucrezi cu arce și sectoare;
- să folosești relația dintre unghiul la centru și cel înscris;
- să rezolvi probleme cu figuri compuse.

## 1. Poligonul

Un poligon este o linie frântă închisă, formată din segmente numite laturi. Un poligon cu `n` laturi are `n` vârfuri și `n` unghiuri interioare.

Suma unghiurilor interioare ale unui poligon convex cu `n` laturi este:

`S=(n-2)·180°`.

Formula rezultă prin trasarea diagonalelor dintr-un vârf: poligonul se împarte în `n-2` triunghiuri.

Pentru un patrulater, `S=2·180°=360°`. Pentru un hexagon, `S=4·180°=720°`.

## 2. Poligoane regulate

Un poligon regulat are toate laturile și toate unghiurile egale. Măsura fiecărui unghi interior este:

`u=[(n-2)·180°]/n`.

Unghiul exterior al unui poligon regulat este `360°/n`, iar unghiul interior și cel exterior alăturat au suma 180°.

Perimetrul unui poligon regulat este `P=n·a`, unde `a` este latura.

## 3. Cercul și discul

Cercul este mulțimea punctelor aflate la aceeași distanță de centru. Discul este suprafața interioară împreună cu cercul de frontieră.

Raza `r` unește centrul cu un punct al cercului. Diametrul `d` trece prin centru și are `d=2r`.

Lungimea cercului este `L=2πr=πd`. Aria discului este `A=πr²`.

Păstrează unitățile: lungimea în cm, aria în cm².

## 4. Coarda și arcul

Coarda unește două puncte ale cercului. Diametrul este cea mai lungă coardă.

Arcul este porțiunea de cerc dintre două puncte. Un unghi la centru interceptează un arc cu aceeași măsură în grade.

Dacă unghiul la centru este 90°, arcul este un sfert de cerc. Dacă este 180°, arcul este semicerc.

## 5. Tangenta

Tangenta la cerc are un singur punct comun cu cercul. Raza dusă la punctul de tangență este perpendiculară pe tangentă.

Dacă dintr-un punct exterior se duc două tangente la același cerc, segmentele de tangentă sunt egale.

## 6. Unghiul înscris

Unghiul înscris are vârful pe cerc, iar laturile sale sunt coarde. Măsura lui este jumătate din măsura arcului interceptat sau jumătate din unghiul la centru care interceptează același arc.

Dacă arcul are 120°, unghiul înscris este 60°.

Un unghi înscris care interceptează un diametru este drept, deoarece interceptează un arc de 180°, iar jumătatea este 90°.

## 7. Lungimea arcului și aria sectorului

Pentru un sector cu unghiul la centru `α` și raza `r`:

`lungimea arcului=α/360°·2πr`;

`aria sectorului=α/360°·πr²`.

Pentru un semicerc, `α=180°`; pentru un sfert de disc, `α=90°`.

## 8. Corzi și distanța față de centru

Coardele egale sunt egal depărtate de centru. Perpendiculara dusă din centru pe o coardă o înjumătățește.

Aceste proprietăți duc la triunghiuri dreptunghice: dacă raza este 13 și jumătatea coardei este 5, distanța de la centru la coardă este 12 prin Pitagora.

## 9. Poligoane înscrise și circumscrise

Un poligon este înscris într-un cerc dacă toate vârfurile sale aparțin cercului. Un cerc este înscris într-un poligon dacă este tangent la toate laturile.

Într-un dreptunghi înscris într-un cerc, diagonala dreptunghiului este diametrul cercului.

## 10. Probleme compuse

Pentru o figură formată din pătrat și semicerc, calculează separat ariile și apoi adună sau scade. La perimetru, folosește doar conturul exterior; diametrul comun poate fi interior și nu se adaugă.

## 11. Greșeli tipice

- folosirea diametrului drept rază;
- confundarea cercului cu discul;
- uitarea pătratului din `πr²`;
- folosirea unghiului înscris ca unghi la centru;
- calcularea arcului fără factorul `α/360°`;
- adăugarea unei coarde interioare la perimetru.

## 12. Rezumat

- Suma unghiurilor unui poligon cu n laturi este `(n-2)·180°`.
- Într-un poligon regulat, unghiul exterior este `360°/n`.
- `d=2r`, `L=2πr`, `A=πr²`.
- Tangenta este perpendiculară pe raza la punctul de tangență.
- Unghiul înscris este jumătate din unghiul la centru pe același arc.
- Diametrul subîntinde un unghi înscris drept.

## Test de înțelegere

1. Calculează suma unghiurilor unui octogon.
2. Calculează unghiul interior al unui hexagon regulat.
3. Un cerc are diametrul 14 cm. Calculează aria.
4. Un unghi la centru este 80°. Ce măsură are unghiul înscris pe același arc?
5. De ce raza la punctul de tangență este perpendiculară pe tangentă?

