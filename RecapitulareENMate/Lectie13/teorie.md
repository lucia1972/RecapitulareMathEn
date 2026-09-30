# Lecția 13 — Statistică și probabilități

## Locul lecției în program

Datele apar în tabele, diagrame, sondaje și probleme cu rezultate experimentale. Pentru a le interpreta, trebuie să poți calcula indicatori statistici și să citești corect scara unui grafic. Probabilitatea adaugă ideea de șansă și se bazează pe numărarea sistematică a rezultatelor posibile.

## Competențe urmărite

Vei putea:

- să organizezi datele într-un tabel;
- să folosești frecvența absolută și relativă;
- să calculezi media aritmetică;
- să determini mediana și moda;
- să calculezi amplitudinea;
- să interpretezi grafice și diagrame;
- să identifici rezultate echiprobabile;
- să calculezi probabilități simple;
- să folosești evenimentul contrar.

## 1. Date și populație

Un set de observații se numește serie de date. Valorile pot fi note, vârste, înălțimi, număr de produse sau rezultate ale unui experiment.

Populația statistică este totalitatea elementelor studiate, iar individul statistic este un element al populației. Dacă analizăm notele elevilor unei clase, populația este clasa, iar individul este un elev.

## 2. Frecvența

Frecvența absolută a unei valori este numărul de apariții. Pentru datele `2,3,2,5,3,2`, valoarea 2 are frecvența 3, valoarea 3 are frecvența 2, iar 5 are frecvența 1.

Suma frecvențelor absolute este numărul total de date.

Frecvența relativă este raportul dintre frecvența unei valori și numărul total. Se poate exprima ca fracție, număr zecimal sau procent.

## 3. Tabelul de frecvențe

Pentru datele de mai sus:

| Valoare | 2 | 3 | 5 |
|---|---:|---:|---:|
| Frecvență | 3 | 2 | 1 |

Totalul este 6. Frecvența relativă a lui 2 este `3/6=1/2=50%`.

Un tabel te ajută să nu numeri aceeași valoare de mai multe ori și este util pentru medii ponderate.

## 4. Media aritmetică

Media unei serii `x₁,x₂,...,xₙ` este:

`m=(x₁+x₂+...+xₙ)/n`.

Pentru 6, 8, 9 și 13, suma este 36, iar media este `36:4=9`.

Dacă valorile au frecvențe:

`m=(x₁f₁+x₂f₂+...+x_kf_k)/(f₁+...+f_k)`.

Nu împărți suma valorilor distincte la numărul valorilor distincte dacă frecvențele nu sunt egale.

## 5. Mediana

Mediana se determină după ordonarea datelor crescător.

Dacă numărul datelor este impar, mediana este valoarea centrală. Pentru `2,4,7,9,11`, mediana este 7.

Dacă numărul datelor este par, mediana este media celor două valori centrale. Pentru `2,4,7,9`, mediana este `(4+7)/2=5,5`.

Ordinea este obligatorie. Mediana seriei neordonate nu se citește corect din poziția inițială.

## 6. Moda

Moda este valoarea cu frecvența cea mai mare. O serie poate avea o singură modă, mai multe mode sau nicio modă dacă toate valorile apar la fel de des.

Pentru `3,5,5,6,7,5,8`, moda este 5.

Moda este diferită de medie: una este o valoare observată, cealaltă este un calcul.

## 7. Amplitudinea

Amplitudinea este:

`valoarea maximă-valoarea minimă`.

Pentru `4,7,12,15`, amplitudinea este 11. Ea măsoară întinderea totală a datelor, dar nu descrie singură distribuția lor.

## 8. Grafice și diagrame

La interpretarea unui grafic verifică:

1. titlul;
2. axele și unitățile;
3. scara;
4. legenda;
5. dacă valorile sunt absolute sau procente.

O bară de 4 cm nu înseamnă automat 4 unități; trebuie citită scara. Dacă 1 cm reprezintă 5 elevi, 4 cm reprezintă 20 de elevi.

## 9. Evenimente aleatorii

Un experiment aleatoriu are un rezultat care nu poate fi anticipat sigur. Aruncarea unui zar este un experiment aleatoriu. Spațiul rezultatelor este `{1,2,3,4,5,6}`.

Un eveniment este o parte a spațiului rezultatelor. „Obținerea unui număr par” este evenimentul `{2,4,6}`.

## 10. Probabilitatea clasică

Dacă rezultatele sunt echiprobabile:

`P(E)=număr cazuri favorabile/număr cazuri posibile`.

La un zar, probabilitatea unui număr par este `3/6=1/2`.

Probabilitatea este între 0 și 1. Un eveniment imposibil are probabilitatea 0, iar unul sigur are probabilitatea 1.

## 11. Evenimentul contrar

Evenimentul contrar lui `E` este evenimentul „E nu se produce”.

`P(E)+P(Ē)=1`.

Dacă probabilitatea de a obține cel puțin o stemă la două aruncări este greu de calculat direct, calculezi complementul: „nicio stemă”, adică două pajuri.

## 12. Numărarea rezultatelor

La două aruncări ale unei monede, rezultatele ordonate sunt `SS, SP, PS, PP`. Ordinea contează dacă prima și a doua aruncare sunt distincte.

La două zaruri există 36 de rezultate ordonate: `(1,1),...,(6,6)`. Pentru suma 7 există 6: `(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)`.

## 13. Greșeli tipice

- calcularea mediei fără a include frecvențele;
- determinarea medianei fără ordonare;
- citirea greșită a scării;
- numărarea incompletă a cazurilor posibile;
- confundarea rezultatului `(1,2)` cu `(2,1)` la două zaruri;
- probabilitate mai mare decât 1 sau negativă.

## 14. Rezumat

- Media folosește suma și numărul datelor.
- Mediana cere ordonarea seriei.
- Moda este valoarea cu frecvența maximă.
- Amplitudinea este maxim minus minim.
- Probabilitatea clasică este favorabile supra posibile.
- Complementul are probabilitatea `1-P(E)`.

## Test de înțelegere

1. Determină media, mediana și moda pentru `2,4,4,6,9`.
2. Care este probabilitatea unui număr prim la zar?
3. De ce trebuie citită scara unui grafic?
4. Câte rezultate ordonate există la două zaruri?
5. Care este complementul evenimentului „obțin un număr par” la zar?

## 15. Populație, eșantion și variabile statistice

O populație statistică este totalitatea elementelor studiate: elevii unei clase, rezultatele tuturor participanților sau produsele unei fabrici. Un eșantion este o parte a populației, aleasă pentru a obține informații despre întreg.

Variabila statistică poate fi numerică, precum nota, vârsta sau înălțimea, ori categorială, precum culoarea preferată. În această lecție ne interesează mai ales variabilele numerice și reprezentările lor.

Datele brute sunt valorile în ordinea în care au fost observate. Pentru analiză, le poți ordona crescător, grupa în tabel de frecvențe și reprezenta grafic.

## 16. Frecvențe absolute și relative

Frecvența absolută a unei valori este numărul aparițiilor ei. Frecvența relativă este raportul dintre frecvența absolută și numărul total de date. Dacă nota 8 apare de 6 ori într-un set de 24 de note, frecvența relativă este `6/24=1/4=25%`.

Suma frecvențelor absolute este numărul total de date, iar suma frecvențelor relative este 1 sau 100%. Aceste sume sunt verificări importante pentru tabel.

## 17. Media aritmetică

Media aritmetică este suma valorilor împărțită la numărul lor. Pentru `4, 7, 8, 11`, media este `30/4=7,5`.

Dacă valorile au frecvențe, folosești media ponderată: `media=(x_1f_1+x_2f_2+...)/(f_1+f_2+...)`. Pentru notele 6 și 10, cu frecvențele 3 și 2, media este `(6·3+10·2)/5=38/5=7,6`.

Media nu trebuie să fie una dintre valorile observate și poate fi zecimală chiar dacă toate datele sunt întregi.

## 18. Mediana și moda

Pentru a afla mediana, ordonezi datele. Dacă numărul datelor este impar, mediana este valoarea din mijloc. Pentru `2,4,5,8,10`, mediana este 5.

Dacă numărul datelor este par, mediana este media celor două valori din mijloc. Pentru `1,3,7,9`, mediana este `(3+7)/2=5`.

Moda este valoarea cu cea mai mare frecvență. Un set poate avea o singură modă, mai multe mode sau nicio modă dacă toate valorile apar la fel de des.

## 19. Amplitudinea și interpretarea datelor

Amplitudinea este diferența dintre valoarea maximă și valoarea minimă. Pentru `3,5,5,8,12`, amplitudinea este `12-3=9`.

Media descrie un centru al datelor, dar amplitudinea arată cât de răspândite sunt. Două seturi pot avea aceeași medie și amplitudini diferite.

La interpretarea unui grafic, observă titlul, legenda, unitățile, scara și intervalul reprezentat. O bară de două ori mai înaltă nu înseamnă automat de două ori mai multe date dacă axa verticală nu începe de la zero.

## 20. Diagrame

Diagrama cu bare este potrivită pentru compararea frecvențelor unor categorii. Diagrama circulară reprezintă părți dintr-un întreg; un sector care reprezintă 25% are unghiul `25/100·360°=90°`.

Histograma grupează valori pe intervale, iar poligonul frecvențelor unește punctele asociate. La nivel de examen, citește cu atenție dacă barele sunt lipite sau separate și ce reprezintă fiecare axă.

## 21. Probabilitatea clasică

Dacă rezultatele sunt echiprobabile, probabilitatea evenimentului A este `P(A)=numărul cazurilor favorabile/numărul cazurilor posibile`. La un zar corect, probabilitatea de a obține un număr mai mare decât 4 este `2/6=1/3`.

Probabilitatea este între 0 și 1. Evenimentul imposibil are probabilitatea 0, iar evenimentul sigur are probabilitatea 1.

Evenimentul contrar lui A, notat uneori `Ā`, are probabilitatea `P(Ā)=1-P(A)`. Dacă `P(A)=3/8`, complementul are probabilitatea `5/8`.

## 22. Numărarea cazurilor

La două zaruri, rezultatele ordonate sunt perechi `(1,1),...,(6,6)`, în total `6·6=36`. Pentru suma 7 există 6 perechi: `(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)`, deci probabilitatea este `6/36=1/6`.

La două extrageri cu revenire, numărul cazurilor se multiplică. Fără revenire, numărul posibilităților de la a doua extragere se reduce. Citește enunțul înainte de a calcula.

## 23. Probabilități cu fracții și procente

O probabilitate de `0,35` este 35%. Conversia între fracție, zecimal și procent trebuie făcută corect. `3/20=0,15=15%`.

Dacă într-o urnă sunt 5 bile roșii și 3 albastre, probabilitatea unei bile roșii este `5/8`. Dacă se extrage o bilă și se repune, la a doua extragere probabilitatea rămâne aceeași; dacă nu se repune, se schimbă în funcție de culoarea primei bile.

## 24. Greșeli frecvente

1. Calcularea mediei fără împărțirea la numărul total de date.
2. Aflarea medianei înainte de ordonarea valorilor.
3. Confundarea modei cu mediana.
4. Omiterea frecvențelor la media ponderată.
5. Folosirea numărului total greșit la probabilitate.
6. Confundarea cazurilor ordonate cu cazurile neordonate.
7. Uitarea revenirii bilei în urnă.
8. Interpretarea graficului fără unități și legendă.

## 25. Model de analiză statistică

Pentru datele `4,5,5,6,8,8,8,10`, suma este 54, numărul datelor este 8, iar media este `6,75`. Mediana este `(6+8)/2=7`, moda este 8, iar amplitudinea este `10-4=6`.

Observă că media, mediana și moda oferă informații diferite. Moda indică valoarea frecventă, mediana poziția centrală, iar media echilibrează toate valorile.

## 26. Strategie finală

Organizează datele, verifică numărul total, calculează indicatorul cerut, interpretează rezultatul și verifică dacă se încadrează în domeniul posibil. La probabilități, numără cazurile cu aceeași atenție cu care calculezi fracția finală.

## 27. Media și modificarea datelor

Dacă adaugi aceeași constantă fiecărei valori, media crește cu acea constantă. Dacă înălțimile unui grup cresc toate cu 2 cm, media crește cu 2 cm, dar amplitudinea rămâne aceeași. Dacă înmulțești toate valorile cu un număr pozitiv k, media și amplitudinea se înmulțesc cu k.

Aceste proprietăți permit verificări rapide. Dacă media unui set este 7 și adaugi 3 tuturor celor 10 valori, noua medie este 10, nu 7,3.

## 28. Frecvențe cumulate

Frecvența cumulată până la o valoare este numărul de date mai mici sau egale cu acea valoare. Pentru valorile 1, 2 și 3 cu frecvențele 2, 4 și 3, frecvențele cumulate sunt 2, 6 și 9.

Această organizare ajută la identificarea medianei și la întrebări de tipul „câte valori sunt cel mult 8?” sau „ce procent depășește 7?”.

## 29. Probabilitate condiționată intuitiv

Uneori se cere probabilitatea unui eveniment după ce se știe că alt eveniment s-a produs. Dacă dintr-o urnă se extrage o bilă și nu este repusă, la a doua extragere spațiul cazurilor se modifică. Nu mai împarți la numărul inițial de bile.

De exemplu, din 5 bile roșii și 3 albastre, după extragerea unei bile roșii fără revenire rămân 4 roșii și 3 albastre, deci probabilitatea unei roșii la a doua extragere este `4/7`.

## 30. Evenimente independente

Două experimente sunt independente dacă rezultatul unuia nu îl modifică pe celălalt. La două aruncări ale unei monede, probabilitatea de a obține două steme este `1/2·1/2=1/4`.

Dacă experimentele nu sunt independente, probabilitățile succesive se modifică. Citește întotdeauna dacă obiectul este repus, dacă zarul este corect și dacă rezultatele sunt echiprobabile.

## 31. Diagrame circulare

Pentru a transforma un procent în unghi, înmulțești procentul scris ca fracție cu 360°. Un sector de 40% are `0,4·360°=144°`. Invers, un sector de 72° reprezintă `72/360=1/5=20%`.

Suma unghiurilor sectoarelor trebuie să fie 360°, iar suma procentelor 100%. Acestea sunt verificări imediate.

## 32. Problemă de sinteză

Într-un grup de 20 de elevi, 8 preferă fotbalul, 7 baschetul, iar restul înotul. Frecvențele relative sunt 40%, 35% și 25%. Media acestor procente ponderată cu numărul elevilor este 100% ca total, iar diagrama circulară are unghiurile 144°, 126° și 90°. Dacă alegi un elev la întâmplare, probabilitățile sunt `2/5`, `7/20` și `1/4`.

Aceeași situație poate fi descrisă prin tabel, procente, diagramă și probabilități; trebuie doar să păstrezi același număr total și aceleași categorii.

## 33. Verificarea unui tabel statistic

Pentru un tabel cu valori și frecvențe, adună frecvențele, calculează suma produselor valoare ori frecvență și verifică valoarea minimă și maximă. Media trebuie să fie între minim și maxim. Mediana trebuie să fie o valoare centrală a listei ordonate sau media celor două valori centrale. Moda trebuie să aibă frecvența maximă. Dacă una dintre aceste condiții nu este îndeplinită, tabelul sau calculul trebuie revizuit.

La probabilitate, verifică separat numărul cazurilor posibile și numărul cazurilor favorabile. Cazurile favorabile trebuie să fie incluse în total; probabilitatea nu poate depăși 1. Dacă folosești complementul, verifică faptul că evenimentul și complementul său acoperă toate posibilitățile și nu se suprapun.

Într-o rezolvare statistică bine redactată, notezi datele, metoda, calculul și concluzia. Nu confunda un rezultat numeric cu interpretarea lui: `0,4` poate însemna 40%, `2/5` sau probabilitatea de 40%, în funcție de context.

Înainte de calcul, identifică întregul, partea și unitatea de măsură. După calcul, compară rezultatul cu limitele posibile: o frecvență nu poate fi negativă, o probabilitate nu poate depăși 1, iar media trebuie să se afle între minimul și maximul datelor.

Aceste verificări finale fac parte din rezolvarea statistică.

Ele previn erorile de numărare și interpretare.

Concluzia trebuie exprimată în procente, fracții sau numere, după cerință.

Cu unitatea potrivită.

Verifică rezultatul.

Clar.

și verificabil.

Aceasta este forma finală recomandată.

