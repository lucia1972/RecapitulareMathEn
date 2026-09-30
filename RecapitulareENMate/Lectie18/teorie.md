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

## 13. Poligoane și elementele lor

Un poligon este o linie frântă închisă, formată din segmente numite laturi. Numărul laturilor este egal cu numărul vârfurilor și al unghiurilor. Poligoanele pot fi convexe, dacă toate diagonalele rămân în interior, sau concave, dacă cel puțin o diagonală iese din interior.

Un poligon regulat are toate laturile și toate unghiurile egale. Exemplele fundamentale sunt triunghiul echilateral, pătratul și hexagonul regulat. Pentru un poligon neregulat, nu poți folosi formula unui poligon regulat fără date suplimentare.

## 14. Suma unghiurilor unui poligon

Dintr-un vârf al unui poligon convex cu n laturi se pot trasa `n-3` diagonale, care îl împart în `n-2` triunghiuri. Suma unghiurilor interioare este:

`S=(n-2)·180°`.

Pentru pentagon, `S=3·180°=540°`; pentru hexagon, `S=4·180°=720°`. Într-un poligon regulat, unghiul interior este `S/n`.

Unghiul exterior corespunzător fiecărui vârf al unui poligon regulat este `360°/n`. Suma unghiurilor exterioare, luate în același sens, este întotdeauna 360°.

## 15. Diagonale și perimetre

Numărul diagonalelor unui poligon convex cu n laturi este `n(n-3)/2`. Pentru un pentagon sunt `5·2/2=5` diagonale, iar pentru un hexagon sunt `6·3/2=9`.

Perimetrul unui poligon este suma tuturor laturilor. Pentru un poligon regulat cu latura a și n laturi, `P=n·a`. Dacă perimetrul și numărul laturilor sunt cunoscute, latura este `a=P/n`.

## 16. Cerc, disc și elemente

Cercul este linia curbă închisă ale cărei puncte sunt egal depărtate de centru. Discul este regiunea interioară. Raza unește centrul cu un punct al cercului, iar diametrul trece prin centru și are lungimea `d=2r`.

Coarda unește două puncte ale cercului. Diametrul este cea mai lungă coardă. Arcul este o porțiune a cercului, iar sectorul circular este regiunea delimitată de două raze și un arc.

## 17. Lungimea cercului și aria discului

Lungimea cercului este `C=2πr=πd`, iar aria discului este `A=πr²`. Dacă se dă diametrul, trebuie să-l împarți la 2 înainte de folosirea ariei.

Pentru un cerc de rază 6 cm, `C=12π cm`, `A=36π cm²`. Dacă se folosește `π=3,14`, rezultatele aproximative sunt 37,68 cm și 113,04 cm².

## 18. Arce și sectoare

Un arc care corespunde unui unghi la centru de `α°` are lungimea `α/360·2πr`. Aria sectorului corespunzător este `α/360·πr²`.

Pentru un sfert de cerc, arcul are lungimea `πr/2`, iar sectorul are aria `πr²/4`. Pentru un semicerc, arcul are lungimea `πr`, iar aria este `πr²/2`.

Dacă se cere perimetrul sectorului, adaugi cele două raze la lungimea arcului. Dacă se cere aria, nu adaugi lungimile razelor.

## 19. Unghiul la centru și unghiul înscris

Măsura unghiului la centru este egală cu măsura arcului interceptat. Unghiul înscris care interceptează același arc are măsura jumătate din unghiul la centru.

Dacă unghiul la centru este 80°, unghiul înscris pe același arc este 40°. Unghiurile înscrise care interceptează același arc sunt egale.

Un unghi înscris într-un semicerc este drept. Aceasta este teorema lui Thales pentru cerc și produce frecvent triunghiuri dreptunghice.

## 20. Tangenta la cerc

Tangenta este dreapta care are un singur punct comun cu cercul, numit punct de tangență. Raza dusă la punctul de tangență este perpendiculară pe tangentă.

Dintr-un punct exterior unui cerc se pot duce două tangente, iar segmentele de tangentă până la punctele de tangență sunt egale. Această proprietate poate transforma o problemă de cerc într-una cu triunghiuri isoscele.

## 21. Cercul înscris și circumscris

Un cerc este înscris într-un poligon dacă este tangent la toate laturile. Centrul cercului înscris este egal depărtat de laturi. Într-un triunghi, centrul este intersecția bisectoarelor.

Un cerc este circumscris unui poligon dacă trece prin toate vârfurile. Într-un triunghi, centrul cercului circumscris este intersecția mediatoarelor laturilor.

## 22. Poligoane regulate și cerc

Într-un poligon regulat înscris într-un cerc, centrul poligonului coincide cu centrul cercului. Raza cercului circumscris unește centrul cu un vârf, iar apotema este perpendiculara de la centru pe o latură.

Poligonul regulat se poate împărți în n triunghiuri isoscele congruente. Aria este suma ariilor acestor triunghiuri și poate fi scrisă `A=P·apotema/2`.

## 23. Coroane și figuri compuse

O coroană circulară este regiunea dintre două cercuri concentrice. Aria este `π(R²-r²)`. Dacă un disc are raza 10 cm și se decupează un disc concentric de rază 6 cm, aria rămasă este `π(100-36)=64π cm²`.

Pentru o figură formată din dreptunghi și semicerc, calculezi separat aria dreptunghiului și a semicercului. La perimetru, aduni numai segmentele și arcele aflate pe conturul exterior.

## 24. Greșeli frecvente

1. Confundarea cercului cu discul.
2. Folosirea diametrului în locul razei.
3. Uitarea diametrului la perimetrul semicercului.
4. Folosirea arcului când se cere aria sectorului.
5. Confundarea unghiului la centru cu cel înscris.
6. Aplicarea formulelor poligonului regulat unui poligon oarecare.
7. Numărarea diagonalelor care coincid cu laturile.

## 25. Model de sinteză

Un cerc are raza 9 cm. Un sector are unghiul la centru 120°. Lungimea arcului este `120/360·18π=6π cm`, iar aria sectorului este `120/360·81π=27π cm²`. Dacă sectorul este mărginit de două raze, perimetrul său este `6π+18 cm`.

## 26. Strategie finală

Identifică centrul, raza, diametrul și tipul regiunii cerute. Pentru poligoane, numără laturile și aplică suma unghiurilor sau perimetrul; pentru cerc, decide dacă se cere lungime, arie, arc, sector sau coroană. Păstrează `π` exact când nu se cere aproximarea.

## 27. Lungimi și arii în probleme mixte

Dacă un pătrat de latură 10 cm are un semicerc construit pe una dintre laturi ca diametru, aria totală este `100+25π cm²`, deoarece raza semicercului este 5 cm. Conturul exterior include trei laturi ale pătratului și arcul semicercului: `30+5π cm`. Latura comună dintre pătrat și semicerc nu se adaugă conturului exterior.

Dacă dintr-un disc de rază R se decupează un sector de unghi α, aria rămasă este `(1-α/360)πR²`. Pentru un sector de 90°, rămâne trei sferturi din aria discului.

## 28. Probleme inverse cu cercuri

Dacă lungimea cercului este `18π cm`, atunci `2πr=18π`, deci `r=9 cm`, iar aria este `81π cm²`. Dacă aria discului este `49π cm²`, raza este 7 cm, iar lungimea cercului `14π cm`.

Dacă un sector are aria `20π cm²`, raza 10 cm, atunci fracția din disc este `20π/(100π)=1/5`, iar unghiul la centru este `72°`.

## 29. Poligoane regulate

Un hexagon regulat se împarte în șase triunghiuri echilaterale dacă raza cercului circumscris este egală cu latura. Perimetrul este `6a`, iar aria poate fi calculată ca suma ariilor triunghiurilor. Pentru un pătrat înscris într-un cerc de rază R, diagonala pătratului este `2R`, iar latura este `R√2`.

## 30. Verificări

Lungimea unui arc trebuie să fie mai mică decât lungimea cercului, iar aria unui sector mai mică decât aria discului. Pentru un semicerc, perimetrul include diametrul dacă se cere conturul regiunii. La poligoane, suma unghiurilor trebuie să fie compatibilă cu numărul laturilor.

## 31. Tangente și coarde

Perpendiculara din centru pe o coardă o înjumătățește. Dacă raza este 13 cm, iar coarda are 10 cm, jumătatea coardei este 5 cm, iar distanța de la centru la coardă este `√(13²-5²)=12 cm`. Dacă două coarde sunt egal depărtate de centru, ele sunt egale.

Tangenta și coarda pot forma unghiuri egale cu unghiuri înscrise care interceptează același arc. În probleme, identifică arcul înainte de a compara unghiurile.

## 32. Model complet cu cerc

Un cerc are raza 10 cm, iar o coardă are lungimea 12 cm. Perpendiculara din centru pe coardă o înjumătățește, deci se formează un triunghi dreptunghic cu ipotenuza 10 și cateta 6. Distanța de la centru la coardă este 8 cm. Dacă se cere aria regiunii dintre coardă și arcul mic, aceasta se poate calcula ca aria sectorului minus aria triunghiului isoscel format de cele două raze și coardă; datele despre unghiul la centru stabilesc sectorul.

Într-un desen cu cerc, trasează raza către punctul de tangență și perpendiculara pe coardă; aceste construcții auxiliare creează triunghiuri dreptunghice în care poți folosi Pitagora.

Unitățile trebuie păstrate: lungimile cercului și arcelor sunt unități de lungime, iar ariile sectoarelor și coroanelor sunt unități pătrate.

