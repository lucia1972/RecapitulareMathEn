# Lecția 12 — Funcții și reprezentarea grafică

## Locul lecției în program

Funcția descrie o dependență: unei valori de intrare îi corespunde o singură valoare de ieșire. În probleme, funcția poate descrie un cost, o distanță, o temperatură sau o relație geometrică. La examen, este important să poți calcula imagini, să citești un tabel, să identifici graficul și să găsești zeroul.

## Competențe urmărite

Vei putea:

- să interpretezi notația `f(x)`;
- să calculezi imaginea unui număr;
- să construiești un tabel de valori;
- să reprezinți o funcție de gradul I;
- să identifici panta și ordonata la origine;
- să stabilești monotonia;
- să găsești intersecțiile cu axele;
- să determini intersecția a două grafice;
- să interpretezi funcția în contexte practice.

## 1. Noțiunea de funcție

O funcție asociază fiecărui element din domeniu o singură valoare din codomeniu. Dacă `f(x)=2x+3`, pentru `x=4` obținem `f(4)=11`.

`x` este argumentul, iar `f(x)` este imaginea lui `x`. Notația nu înseamnă înmulțirea lui `f` cu `x`.

## 2. Funcția de gradul I

Forma generală este:

`f(x)=ax+b`, cu `a≠0`.

Numărul `a` este coeficientul unghiular sau panta, iar `b` este ordonata la origine.

Pentru `f(x)=3x-2`, avem `a=3`, `b=-2`.

## 3. Calcularea imaginilor

Pentru `f(x)=3x-2`:

`f(0)=-2`;

`f(2)=6-2=4`;

`f(-1)=-3-2=-5`.

Când argumentul este negativ, folosește paranteze: `3(-1)-2`.

## 4. Tabelul de valori

Un tabel leagă argumentele de imagini. Pentru `f(x)=2x+1`:

| x | -2 | -1 | 0 | 1 | 2 |
|---|---:|---:|---:|---:|---:|
| f(x) | -3 | -1 | 1 | 3 | 5 |

Punctele sunt `(-2,-3)`, `(-1,-1)`, `(0,1)`, `(1,3)`, `(2,5)`.

## 5. Graficul

Graficul funcției de gradul I este o dreaptă. Sunt suficiente două puncte distincte, dar trei puncte permit verificarea. Marchează axele, unitatea de măsură și coordonatele corecte.

## 6. Intersecția cu axa Oy

Pe axa `Oy`, `x=0`. Pentru `f(x)=ax+b`, punctul de intersecție este `(0,b)`.

Pentru `f(x)=2x-5`, intersecția cu `Oy` este `(0,-5)`.

## 7. Zeroul funcției și intersecția cu Ox

Pe axa `Ox`, `y=0`. Rezolvăm:

`ax+b=0`, deci `x=-b/a`.

Pentru `f(x)=2x-5`, zeroul este `x=5/2`, iar punctul este `(5/2,0)`.

## 8. Monotonia

Dacă `a>0`, funcția este crescătoare: când `x` crește, `f(x)` crește. Dacă `a<0`, funcția este descrescătoare.

Pentru `f(x)=-3x+4`, panta este negativă, deci funcția este descrescătoare.

Nu confunda monotonia cu semnul lui `b`. O funcție poate fi crescătoare și poate intersecta axa `Oy` sub origine.

## 9. Determinarea funcției din două puncte

Pentru punctele `(x₁,y₁)` și `(x₂,y₂)`, panta este:

`a=(y₂-y₁)/(x₂-x₁)`.

Apoi folosim `y=ax+b` pentru a afla `b`.

Pentru `(1,4)` și `(3,10)`, `a=6/2=3`. Din `4=3·1+b`, rezultă `b=1`, deci `f(x)=3x+1`.

## 10. Intersecția a două grafice

Punctul comun verifică ambele funcții. Egalăm expresiile:

`2x+1=-x+7`;

`3x=6`, deci `x=2`, iar `y=5`.

Intersecția este `(2,5)`.

## 11. Funcții în probleme

Dacă un taxi cere 5 lei pornirea și 3 lei/km, costul pentru `x` km este `C(x)=5+3x`. Domeniul relevant este `x≥0`.

Dacă temperatura scade cu 2°C pe oră de la 20°C, funcția este `T(t)=20-2t`.

Termenul constant descrie valoarea inițială, iar panta descrie variația pe unitatea de timp sau distanță.

## 12. Greșeli tipice

- confundarea lui `f(3)` cu `f·3`;
- citirea greșită a ordonatei la origine;
- folosirea lui `y=0` pentru intersecția cu Oy;
- uitarea parantezelor pentru argument negativ;
- calcularea pantei cu diferențele în ordine amestecată;
- acceptarea unui domeniu negativ într-o problemă cu distanțe.

## 13. Rezumat

- `f(x)` este imaginea lui `x`.
- Funcția de gradul I are forma `ax+b`.
- `a` dă monotonia, `b` este intersecția cu Oy.
- Zeroul se obține din `f(x)=0`.
- Graficul este o dreaptă determinată de două puncte.
- Intersecția a două grafice se găsește egalând expresiile.

## Test de înțelegere

1. Pentru `f(x)=4x-3`, calculează `f(2)`.
2. Găsește zeroul lui `f(x)=-2x+8`.
3. Spune monotonia lui `g(x)=5-7x`.
4. Determină intersecția cu Oy a lui `h(x)=3x+6`.
5. Determină intersecția funcțiilor `y=x+2` și `y=8-x`.

## 14. Ce este o funcție

O funcție asociază fiecărei valori admise a lui `x` o singură valoare `y`. Scrierea `y=f(x)` arată că y depinde de x. Valoarea lui x se numește argument, iar valoarea obținută este imaginea lui x.

Pentru `f(x)=2x-3`, avem `f(4)=8-3=5`, `f(0)=-3` și `f(-1)=-5`. Parantezele din `f(x)` nu indică neapărat o înmulțire; ele marchează argumentul funcției.

## 15. Tabelul de valori

Pentru a construi graficul, alegi valori pentru x, calculezi imaginile și formezi perechi `(x,f(x))`. Pentru `f(x)=x+2`, tabelul poate conține `(-2,0)`, `(-1,1)`, `(0,2)`, `(1,3)` și `(2,4)`.

Într-o funcție de gradul întâi, două puncte distincte sunt suficiente pentru a determina dreapta, dar mai multe puncte ajută la verificare. Dacă punctele nu sunt coliniare, probabil există o eroare de calcul.

## 16. Funcția de gradul întâi

Forma generală este `f(x)=ax+b`, cu `a≠0`. Numărul `a` este panta sau coeficientul director, iar `b` este ordonata la origine.

- dacă `a>0`, funcția este crescătoare;
- dacă `a<0`, funcția este descrescătoare;
- dacă `b=0`, graficul trece prin origine;
- graficul este o dreaptă.

Pentru `f(x)=-3x+6`, panta este -3, funcția este descrescătoare, iar intersecția cu Oy este `(0,6)`.

## 17. Zero-ul funcției

Zero-ul funcției este valoarea lui x pentru care `f(x)=0`. Pentru `f(x)=2x-8`, rezolvi `2x-8=0`, deci `x=4`. Graficul intersectează Ox în `(4,0)`.

Pentru `f(x)=ax+b`, zero-ul este `x=-b/a`, dacă `a≠0`. Verificarea se face în expresia funcției.

## 18. Determinarea funcției din puncte

Dacă graficul unei funcții de gradul întâi trece prin punctele `(x_1,y_1)` și `(x_2,y_2)`, coeficientul director este `a=(y_2-y_1)/(x_2-x_1)`. Apoi afli `b` din `y=ax+b`.

Pentru `(1,3)` și `(3,7)`, `a=(7-3)/(3-1)=2`. Folosind primul punct, `3=2·1+b`, deci `b=1`; funcția este `f(x)=2x+1`.

## 19. Intersecția a două grafice

Punctul de intersecție al graficelor `y=f(x)` și `y=g(x)` se află egalizând expresiile: `f(x)=g(x)`. Pentru `y=x+2` și `y=8-x`, avem `x+2=8-x`, deci `2x=6`, `x=3`, `y=5`.

Dacă pantele sunt egale și ordonatele diferite, dreptele sunt paralele și nu există intersecție. Dacă pantele și ordonatele sunt egale, graficele coincid și există infinit de multe puncte comune.

## 20. Reprezentarea grafică

Pe axa Ox reprezintă valorile lui x, iar pe Oy valorile lui y. Scările trebuie să fie clare și egale pe fiecare axă, dar pot fi diferite între axe dacă sunt indicate. Marchează punctele prin coordonate în ordinea `(x,y)`, nu invers.

Pentru o dreaptă, unește punctele cu o linie dreaptă. Nu uni punctele printr-o curbă doar pentru că tabelul are mai multe valori.

## 21. Funcții și probleme de variație

Dacă un taxi percepe 5 lei taxa fixă și 3 lei pentru fiecare kilometru, costul pentru x kilometri este `C(x)=3x+5`. Domeniul este de obicei `x≥0`, iar `C(0)=5` reprezintă taxa de pornire.

Dacă un rezervor pierde 2 litri pe oră dintr-un volum inițial de 80 litri, volumul este `V(t)=80-2t`, pentru valorile lui t pentru care `V(t)≥0`. Zero-ul funcției indică momentul golirii: `t=40` ore.

## 22. Citirea informațiilor din grafic

Dintr-un grafic poți afla imaginea unei valori, valorile lui x pentru care funcția este zero, intervalele de creștere și descreștere și intersecțiile. Citește cu atenție coordonatele și verifică scara.

Un punct de pe grafic poate fi utilizat pentru verificare: dacă se pretinde că `(2,7)` aparține graficului `y=3x+1`, calculezi `3·2+1=7`, deci afirmația este adevărată.

## 23. Greșeli frecvente

1. Inversarea coordonatelor `(x,y)`.
2. Confundarea lui `f(3)` cu coeficientul 3.
3. Uitarea condiției `a≠0` la funcția de gradul întâi.
4. Calcularea intersecției fără a afla ambele coordonate.
5. Folosirea unei scări greșite pe grafic.
6. Considerarea taxei fixe ca parte dependentă de x.

## 24. Model de sinteză

Fie `f(x)=2x-1` și `g(x)=-x+8`. Intersecția se află din `2x-1=-x+8`, deci `3x=9`, `x=3`, iar `y=5`. Zero-ul lui f este `x=1/2`, zero-ul lui g este `x=8`. Funcția f este crescătoare, g descrescătoare.

## 25. Strategie finală

Identifică domeniul, calculează tabelul, determină punctele speciale, analizează panta și ordonata la origine, apoi verifică graficul printr-un punct. În probleme practice, explică sensul coeficienților și intervalul în care modelul are sens.

## 26. Domeniul și imaginea unei funcții

Domeniul este mulțimea valorilor admise pentru x. Imaginea este mulțimea valorilor obținute pentru y. Pentru `f(x)=2x+1`, domeniul poate fi `R`, iar imaginea este tot `R`. Pentru `f(x)=√(x-3)`, domeniul este `[3,∞)`, iar imaginea este `[0,∞)`.

Într-o problemă practică, domeniul poate fi restrâns: timpul nu este negativ, numărul de obiecte este natural, iar distanța este nenegativă. Nu folosi toate valorile reale dacă modelul nu le permite.

## 27. Panta ca rată de variație

În funcția `f(x)=ax+b`, coeficientul `a` arată cu cât se modifică y când x crește cu o unitate. Pentru `f(x)=3x+2`, la o creștere a lui x cu 1, y crește cu 3. Pentru `g(x)=-2x+5`, y scade cu 2.

În probleme de cost, panta este prețul pe unitate; în probleme de distanță, poate fi viteza; în probleme de temperatură, este variația pe unitatea de timp.

## 28. Funcții definite prin tabel

Un tabel poate defini o funcție dacă fiecărei valori a lui x îi corespunde o singură valoare y. Dacă aceeași valoare x apare asociată cu două valori y diferite, tabelul nu descrie o funcție de x.

Poți afla formula unei funcții liniare din tabel verificând diferențele. Dacă la creșteri egale ale lui x, valorile lui y cresc mereu cu aceeași cantitate, funcția poate fi de forma `ax+b`. Calculează a și apoi b.

## 29. Simetrie și puncte importante

Pentru o dreaptă, intersecțiile cu axele determină rapid graficul. Intersecția cu Oy se obține pentru `x=0`, iar intersecția cu Ox pentru `y=0`. Dacă ambele există, trasezi dreapta prin cele două puncte.

Exemplu: `y=4-2x` intersectează Oy în `(0,4)` și Ox în `(2,0)`. Panta negativă confirmă că dreapta coboară de la stânga la dreapta.

## 30. Inegalități reprezentate grafic

Pentru `f(x)≥0`, cauți porțiunea graficului aflată deasupra axei Ox sau pe axă. Pentru `f(x)≤0`, cauți porțiunea de sub axă. La o funcție liniară, zero-ul împarte axa în două intervale, iar semnul se stabilește printr-un punct de test.

Pentru `f(x)=2x-6`, zero-ul este 3; funcția este negativă pentru `x<3` și pozitivă pentru `x>3`.

## 31. Două funcții și variația lor

Dacă `f(x)=2x+1` și `g(x)=2x-5`, au aceeași pantă, deci graficele sunt paralele. Diferența verticală este constantă: `f(x)-g(x)=6`.

Dacă funcțiile au pante diferite, graficele se intersectează într-un singur punct. Egalizarea formulelor oferă coordonata x, iar înlocuirea într-una dintre funcții oferă coordonata y.

## 32. Funcții în geometrie

Perimetrul unui pătrat în funcție de latură este `P(a)=4a`, iar aria este `A(a)=a²`. Prima este funcție de gradul întâi, a doua nu este. Dacă latura se dublează, perimetrul se dublează, dar aria se înmulțește cu 4.

Pentru un dreptunghi cu perimetrul fix 20, dacă o latură este x, cealaltă este `10-x`, iar aria este `A(x)=x(10-x)`. Domeniul geometric este `0<x<10`.

## 33. Funcții și unități

Dacă `C(x)=2,5x+10`, unde x este numărul de kilometri, coeficientul 2,5 are unitatea lei/km, iar 10 lei este taxa fixă. Nu aduna valori cu unități incompatibile; verifică faptul că fiecare termen reprezintă o sumă de bani.

Într-un grafic, etichetele axelor sunt parte din informație. Un punct `(4,12)` poate însemna 4 ore și 12 litri, nu doar coordonate abstracte.

## 34. Greșeli frecvente

1. Scrierea punctului ca `(y,x)`.
2. Confundarea imaginii cu argumentul.
3. Uitarea domeniului practic.
4. Determinarea pantei cu diferențele inversate.
5. Folosirea unui singur punct pentru a trasa o dreaptă.
6. Calcularea intersecției doar prin egalizarea coordonatelor greșite.
7. Ignorarea scării graficului.

## 35. Problemă de sinteză

Un abonament costă 20 lei, iar fiecare călătorie adaugă 3 lei. Costul pentru x călătorii este `C(x)=3x+20`. Pentru 8 călătorii, costul este 44 lei. Dacă bugetul este de cel mult 50 lei, rezolvi `3x+20≤50`, deci `x≤10`; numărul maxim de călătorii este 10. Funcția, ecuația și inegalitatea descriu aceeași situație din perspective diferite.

## 36. Problemă completă cu tabel și grafic

Un rezervor conține inițial 150 litri și pierde 5 litri pe oră. Funcția volumului este `V(t)=150-5t`, unde `t≥0`. Tabelul conține punctele `(0,150)`, `(10,100)`, `(20,50)` și `(30,0)`. Graficul este o dreaptă descrescătoare, ordonata la origine este 150, iar zero-ul este 30. Modelul are sens pentru `0≤t≤30`; după acest moment, formula ar produce volume negative, imposibile fizic. Dacă se cere când volumul este cel mult 80 litri, rezolvi `150-5t≤80`, deci `t≥14`, împreună cu domeniul, rezultând `14≤t≤30`.

Această analiză include formula, tabelul, graficul, domeniul, zero-ul și interpretarea practică; toate aceste elemente trebuie corelate, nu tratate ca exerciții separate.

## 37. Verificarea unui grafic

Pentru a verifica un grafic de funcție de gradul întâi, controlează ordonata la origine, un zero cunoscut și sensul pantei. Dacă `a>0`, dreapta trebuie să urce spre dreapta; dacă `a<0`, trebuie să coboare. Un singur punct greșit poate schimba interpretarea întregului desen, de aceea tabelul de valori este util.

La citirea unui grafic existent, nu presupune valori intermediare dacă scara nu este clară. Folosește doar punctele și gradațiile indicate.

Un grafic este o reprezentare a unei relații, nu un desen decorativ. Fiecare axă, unitate, gradație și punct are un rol matematic și trebuie citit înaintea concluziei.

Într-o lucrare, indică măcar două puncte și direcția dreptei atunci când construiești un grafic.

Notează coordonatele în ordinea corectă și folosește aceeași scară pe fiecare axă.

Graficul trebuie să reflecte formula și domeniul funcției.

Aceasta este verificarea finală.

Nu aproxima coordonatele fără indicație.

Păstrează forma exactă a coordonatelor și respectă scara desenului. Într-un grafic bine construit, fiecare punct poate fi verificat în formula funcției, iar fiecare intersecție are o interpretare clară. Dacă modelul este practic, indică intervalul în care valorile sunt admise și nu extinde graficul în zone fără sens fizic.

Verifică fiecare punct.

Un desen corect confirmă calculul și domeniul ales.

