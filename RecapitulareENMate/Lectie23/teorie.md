# Lecția 23 — Geometrie în spațiu: noțiuni fundamentale

## 1. Rolul geometriei în spațiu

Geometria plană studiază figuri desenate pe o suprafață, precum triunghiuri, patrulatere și cercuri. Geometria în spațiu studiază obiecte tridimensionale: cuburi, paralelipipede, prisme, piramide, cilindri, conuri și sfere. Pentru a rezolva corect problemele, trebuie să vezi simultan trei direcții: lungime, lățime și înălțime.

În problemele de Evaluare Națională, desenul poate fi o reprezentare în perspectivă. Unele segmente apar mai scurte sau mai lungi pe hârtie decât în realitate, iar unele unghiuri nu se văd ca unghiuri drepte. Nu măsura figura cu rigla și nu presupune că un segment este perpendicular doar pentru că desenul pare așa. Folosește datele și proprietățile geometrice indicate.

La finalul lecției trebuie să poți:

- identifica puncte, drepte, segmente și plane într-un corp geometric;
- recunoaște muchii, fețe, vârfuri, diagonale și secțiuni;
- descrie poziția a două drepte în spațiu;
- identifica drepte paralele, concurente, perpendiculare și necoplanare;
- recunoaște poziția unei drepte față de un plan;
- folosi teoremele despre perpendiculară și paralelă în spațiu;
- calcula distanțe, lungimi și arii pornind de la triunghiuri dreptunghice din corp;
- evita confuziile dintre muchie, diagonală, înălțime și apotemă.

## 2. Elemente fundamentale

### 2.1. Punctul, dreapta și planul

Punctul este reprezentat printr-o literă mare: `A`, `B`, `C`. O dreaptă este determinată de două puncte distincte și se notează, de exemplu, `AB` sau `d`. Un plan este o suprafață plată, infinită, reprezentată convențional printr-un paralelogram. Se poate nota cu o literă grecească, precum `α`, sau prin trei puncte necoliniare, de exemplu planul `(ABC)`.

Într-un corp, o față este o porțiune finită dintr-un plan. De exemplu, într-un cub, fața `ABCD` este un pătrat aflat într-un plan. Planul feței se poate extinde dincolo de conturul pătratului; fața este doar regiunea delimitată de muchii.

### 2.2. Vârf, muchie, față

- **Vârful** este punctul în care se întâlnesc mai multe muchii.
- **Muchia** este segmentul comun a două fețe.
- **Fața** este o regiune plană care delimitează corpul.

Într-un cub există 8 vârfuri, 12 muchii și 6 fețe. Fiecare vârf aparține la 3 fețe și 3 muchii. Într-un paralelipiped dreptunghic există tot 8 vârfuri, 12 muchii și 6 fețe, dar fețele nu sunt neapărat pătrate.

Pentru o prismă cu bază un poligon cu `n` laturi, există `2n` vârfuri, `3n` muchii și `n+2` fețe. De exemplu, o prismă triunghiulară are 6 vârfuri, 9 muchii și 5 fețe.

## 3. Reprezentarea unui corp în perspectivă

Într-un desen spațial, muchiile vizibile se trasează de obicei continuu, iar cele ascunse punctat sau într-o nuanță mai discretă. Un segment punctat nu este mai scurt și nu reprezintă o altă categorie de segment; indică doar faptul că se află în spatele unei fețe.

Pentru a citi un desen:

1. identifică baza corpului;
2. marchează vârfurile bazei în ordine;
3. urmărește muchiile laterale până la baza superioară;
4. caută fețele dreptunghiulare, triunghiulare sau alte poligoane;
5. verifică ce segmente sunt paralele prin proprietățile corpului;
6. separă înălțimea corpului de diagonalele fețelor.

Un desen în perspectivă este o schemă, nu o fotografie exactă. De exemplu, într-un cub desenat oblic, o față pătrată poate apărea ca un paralelogram. Totuși, din definiția cubului știm că fața este pătrat, iar muchiile adiacente sunt perpendiculare.

## 4. Poziția a două drepte în spațiu

În plan, două drepte sunt fie concurente, fie paralele, fie confundate. În spațiu apare o situație nouă: două drepte pot fi necoplanare.

### 4.1. Drepte concurente

Două drepte sunt concurente dacă au un punct comun. Dacă se întâlnesc sub un unghi de 90°, sunt perpendiculare. Dacă se întâlnesc sub un alt unghi, sunt secante neperpendiculare.

Într-un corp, două muchii care pornesc din același vârf sunt concurente. Într-un paralelipiped dreptunghic, ele sunt de obicei perpendiculare, dar într-un corp oarecare nu trebuie presupus automat acest lucru.

### 4.2. Drepte paralele

Două drepte distincte sunt paralele dacă sunt coplanare și nu se întâlnesc, oricât ar fi prelungite. Într-un paralelipiped dreptunghic, muchiile corespunzătoare sunt paralele. De exemplu, dacă baza este `ABCD`, atunci `AB ∥ CD` și `AD ∥ BC`.

Dreptele paralele au aceeași direcție, dar pot fi situate în fețe diferite. Pentru a demonstra paralelismul, arată că aparțin aceluiași plan și că sunt paralele ca laturi opuse ale unui paralelogram sau ale unui dreptunghi.

### 4.3. Drepte necoplanare

Două drepte sunt necoplanare dacă nu există niciun plan care să le conțină simultan. Ele nu se intersectează, dar nici nu sunt paralele. Acest caz nu apare în geometria plană, de aceea este o sursă frecventă de confuzie.

De exemplu, într-un cub `ABCD-A'B'C'D'`, muchia `AB` și muchia `CC'` nu au punct comun și nu sunt paralele. Ele sunt necoplanare. Nu este corect să spui că orice două segmente care nu se întâlnesc sunt paralele.

## 5. Poziția unei drepte față de un plan

O dreaptă și un plan pot avea următoarele poziții:

- dreapta este conținută în plan;
- dreapta intersectează planul într-un singur punct;
- dreapta este paralelă cu planul și nu are puncte comune;
- dreapta este perpendiculară pe plan.

Dacă o dreaptă are două puncte distincte într-un plan, atunci întreaga dreaptă este conținută în plan. Dacă are un singur punct comun, este secantă planului. Dacă nu are niciun punct comun, poate fi paralelă cu planul.

## 6. Dreapta perpendiculară pe un plan

O dreaptă este perpendiculară pe un plan dacă este perpendiculară pe orice dreaptă din plan care trece prin punctul de intersecție. În practică se folosește criteriul mai ușor:

**Dacă o dreaptă este perpendiculară pe două drepte concurente dintr-un plan, atunci este perpendiculară pe acel plan.**

Într-o prismă dreaptă sau într-un paralelipiped dreptunghic, muchiile laterale sunt perpendiculare pe planul bazei. Dacă `AA' ⟂ AB` și `AA' ⟂ AD`, iar `AB` și `AD` sunt drepte concurente în planul bazei, atunci `AA' ⟂ (ABCD)`.

Perpendicularitatea pe un plan este mai puternică decât perpendicularitatea pe o singură dreaptă. Faptul că o muchie este perpendiculară pe două laturi ale unei fețe poate fi suficient pentru a demonstra perpendicularitatea pe față, dar numai dacă acele laturi sunt concurente și se află în același plan.

## 7. Paralelismul între o dreaptă și un plan

O dreaptă este paralelă cu un plan dacă nu are puncte comune cu planul. Un criteriu important este:

**Dacă o dreaptă este paralelă cu o dreaptă dintr-un plan și nu este conținută în plan, atunci ea este paralelă cu planul.**

Într-o prismă, muchia din baza superioară corespunzătoare unei muchii din baza inferioară este paralelă cu planul bazei inferioare. De exemplu, `A'B'` este paralelă cu planul `(ABCD)` într-o prismă dreaptă, deoarece `A'B' ∥ AB`, iar `A'B'` nu aparține planului bazei.

## 8. Plane paralele și plane secante

Două plane sunt paralele dacă nu au puncte comune. Într-o prismă, planurile celor două baze sunt paralele. Fețele opuse ale unui paralelipiped dreptunghic sunt de asemenea în plane paralele.

Două plane care au puncte comune se intersectează după o dreaptă. De exemplu, două fețe adiacente ale unui cub se intersectează după muchia comună. Intersecția nu este un punct, deoarece două plane distincte nu pot avea doar un punct comun fără să se apropie în aceeași dreaptă în geometria euclidiană.

Dacă două plane sunt paralele, distanța dintre ele este constantă. Într-o prismă dreaptă, această distanță este înălțimea prismei.

## 9. Distanțe în spațiu

Distanța dintre două puncte este lungimea segmentului care le unește. Distanța de la un punct la o dreaptă este lungimea perpendicularei din punct pe dreaptă. Distanța de la un punct la un plan este lungimea perpendicularei din punct pe plan.

Distanța dintre două plane paralele este lungimea oricărui segment perpendicular pe ambele plane. Într-o prismă dreaptă, înălțimea este exact distanța dintre planurile bazelor.

Pentru a calcula o diagonală spațială, caută un triunghi dreptunghic sau două triunghiuri dreptunghice succesive. Într-un paralelipiped dreptunghic cu dimensiunile `a`, `b`, `c`, diagonala spațială `D` satisface:

`D² = a²+b²+c²`.

Demonstrația se face în două etape. Diagonala bazei este `d_b²=a²+b²`. Apoi diagonala spațială este ipotenuza unui triunghi cu catetele `d_b` și `c`, deci `D²=d_b²+c²=a²+b²+c²`.

## 10. Secțiuni plane

O secțiune a unui corp este figura obținută când corpul este intersectat de un plan. Forma secțiunii depinde de poziția planului.

- o secțiune paralelă cu baza unei prisme este congruentă cu baza;
- o secțiune paralelă cu baza unei piramide este asemenea bazei;
- o secțiune perpendiculară pe baza unui paralelipiped poate fi dreptunghi;
- o secțiune prin axa unui cilindru este dreptunghi;
- o secțiune prin axa unui con este triunghi isoscel;
- o secțiune prin centrul unei sfere este cercul cu raza egală cu raza sferei.

La examen, secțiunea este de obicei utilizată pentru a transforma o problemă spațială într-una plană. Dacă un plan conține diagonala unei fețe și o muchie verticală, caută triunghiul sau dreptunghiul rezultat și aplică formulele cunoscute.

## 11. Proiecții și înălțimi

Proiecția unui punct pe un plan este piciorul perpendicularei din punct pe plan. Proiecția unei drepte pe un plan poate fi un segment, o dreaptă sau un punct, în funcție de poziție.

Într-o prismă dreaptă, proiecția unei muchii laterale pe planul bazei este un punct, iar proiecția unei diagonale spațiale poate fi o diagonală a bazei. Această observație te ajută să construiești triunghiul dreptunghic potrivit pentru calcul.

Într-o piramidă regulată, piciorul înălțimii este centrul bazei. Apotema piramidei este înălțimea unei fețe laterale regulate, nu înălțimea corpului. Aceste două segmente se confundă frecvent. Într-o secțiune prin vârful piramidei, centrul bazei și mijlocul unei laturi, apar de obicei un triunghi dreptunghic cu înălțimea piramidei, raza cercului circumscris bazei și apotema.

## 12. Corpuri convexe și formule de numărare

Pentru poliedrele întâlnite la examen, formula lui Euler poate fi folosită ca verificare:

`V - M + F = 2`,

unde `V` este numărul vârfurilor, `M` numărul muchiilor, iar `F` numărul fețelor.

Pentru cub: `8 - 12 + 6 = 2`. Pentru prisma triunghiulară: `6 - 9 + 5 = 2`.

Formula nu înlocuiește numărarea atentă și nu se aplică oricum unor suprafețe cu găuri sau corpuri neconvexe, dar este un control excelent pentru un răspuns.

## 13. Exemple de raționament

### Exemplul 1 — muchii paralele

Consideră paralelipipedul `ABCD-A'B'C'D'`. Deoarece bazele sunt dreptunghiuri, `AB ∥ CD` și `AD ∥ BC`. Deoarece fețele laterale sunt paralelograme, `AA' ∥ BB' ∥ CC' ∥ DD'`. Muchiile `AB` și `B'C'` sunt paralele deoarece aparțin unor direcții corespunzătoare ale bazelor.

### Exemplul 2 — diagonală spațială

Un paralelipiped dreptunghic are dimensiunile 3 cm, 4 cm și 12 cm. Diagonala bazei este `√(3²+4²)=5 cm`. Diagonala spațială este `√(5²+12²)=13 cm`, echivalent cu `√(3²+4²+12²)=13 cm`.

### Exemplul 3 — perpendicularitate pe plan

Într-o prismă dreaptă, `AA'` este perpendiculară pe `AB` și pe `AD`, două drepte concurente din planul bazei. Prin criteriul de perpendicularitate, `AA' ⟂ (ABCD)`. Prin urmare, `AA'` este înălțimea prismei.

## 14. Greșeli frecvente

1. Considerarea a două drepte necoplanare ca fiind paralele doar pentru că nu se intersectează.
2. Măsurarea desenului în perspectivă și folosirea măsurătorii ca dovadă.
3. Confundarea diagonalei unei fețe cu diagonala spațială.
4. Confundarea înălțimii unei prisme cu o diagonală laterală.
5. Folosirea formulei lui Pitagora într-un triunghi despre care nu s-a demonstrat că este dreptunghic.
6. Confundarea planului unei fețe cu fața însăși.
7. Numărarea de două ori a unei muchii sau omiterea muchiilor ascunse.
8. Afirmarea că două plane care nu se văd intersectate sunt neapărat paralele.
9. Folosirea apotemei piramidei ca înălțime a corpului.
10. Omiterea unităților la suprafețe și volume.

## 15. Strategie de rezolvare

Începe prin a redesena corpul simplificat și marchează datele. Alege o față sau o secțiune care conține segmentul căutat. Dacă apare o diagonală spațială, proiecteaz-o pe bază și construiește un triunghi dreptunghic. Dacă problema cere o relație de paralelism sau perpendicularitate, nu calcula inutil: caută criteriul geometric potrivit.

Pentru numărarea elementelor, lucrează sistematic: numără vârfurile, apoi muchiile pe direcții, apoi fețele. Pentru o prismă, identifică poligonul bazei și folosește formulele `2n`, `3n`, `n+2`. Pentru o secțiune, întreabă-te ce muchii sau generatoare taie planul.

## 16. Sinteză

Geometria în spațiu cere să distingem între obiectul tridimensional și fețele sale plane. Muchiile pot fi concurente, paralele sau necoplanare. O dreaptă poate fi conținută într-un plan, secantă, paralelă sau perpendiculară pe plan. Perpendicularitatea pe două drepte concurente dintr-un plan implică perpendicularitatea pe plan. Diagonalele se calculează prin triunghiuri dreptunghice, iar desenul trebuie interpretat prin proprietăți, nu prin aspect.

### Mini-test

1. Câte muchii are un cub?
2. Ce alte poziții pot avea două drepte în spațiu, în afară de concurență și paralelism?
3. Cum demonstrezi că o dreaptă este perpendiculară pe un plan?
4. Care este formula diagonalei unui paralelipiped dreptunghic?
5. Ce diferență există între apotema unei piramide și înălțimea piramidei?

Răspunsuri: 12; pot fi necoplanare; arătând perpendicularitatea pe două drepte concurente din plan; `D=√(a²+b²+c²)`; apotema este înălțimea unei fețe laterale, iar înălțimea este perpendiculara de la vârf pe planul bazei.

## 17. Legătura cu problemele din viața reală

Un planșeu, o cutie, un rezervor sau o cameră pot fi modelate prin corpuri geometrice. Lungimea cablului întins diagonal într-o cutie se apropie de diagonala spațială, materialul necesar pentru a acoperi o față se calculează prin aria feței, iar distanța dintre două niveluri paralele este o înălțime. Modelarea corectă înseamnă să identifici corpul idealizat, să separi dimensiunile și să alegi secțiunea plană în care apare calculul. Astfel, geometria în spațiu devine o succesiune de probleme de geometrie plană bine organizate.
