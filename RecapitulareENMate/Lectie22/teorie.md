# Lecția 22 — Perimetre și arii în plan

## 1. Scopul lecției

În această lecție înveți să alegi corect formula pentru perimetru sau arie, să identifici dimensiunile care lipsesc și să rezolvi probleme în care apar figuri compuse, unități de măsură, diagonale, înălțimi, cercuri și situații practice. La Evaluarea Națională, dificultatea nu este de obicei formula în sine, ci traducerea desenului sau a textului în date matematice.

La final trebuie să poți:

- calcula perimetrul și aria unui pătrat, dreptunghi, triunghi, paralelogram, romb, trapez și cerc;
- recunoaște baza și înălțimea corespunzătoare;
- folosi diagonala, teorema lui Pitagora și proprietățile figurilor pentru a afla o latură necunoscută;
- descompune o figură complicată în figuri cunoscute;
- calcula aria unei regiuni rămase după eliminarea unei alte regiuni;
- converti corect unitățile de lungime și de suprafață;
- verifica dacă rezultatul este plauzibil.

## 2. Lungime, perimetru și arie

Lungimea măsoară un segment și se exprimă în unități precum mm, cm, dm, m sau km. Perimetrul este lungimea conturului unei figuri. Aria măsoară suprafața ocupată de figură și se exprimă în unități pătrate: mm², cm², dm², m² sau km².

Este esențial să nu confunzi perimetrul cu aria. Dacă împrejmuiești un teren, ai nevoie de perimetru. Dacă îl acoperi cu gazon, gresie sau vopsea, ai nevoie de arie.

Pentru unități de lungime, fiecare treaptă de conversie înseamnă înmulțire sau împărțire cu 10:

`1 m = 10 dm = 100 cm = 1000 mm`.

Pentru unități de arie, fiecare treaptă înseamnă înmulțire sau împărțire cu 100:

`1 m² = 100 dm² = 10 000 cm²`.

De exemplu, `2,4 m² = 2,4 · 10 000 = 24 000 cm²`, nu 2400 cm². Motivul este că un pătrat cu latura de 1 m are 100 cm pe fiecare direcție, deci conține `100 · 100 = 10 000` cm².

## 3. Pătratul și dreptunghiul

### 3.1. Pătratul

Pătratul are toate laturile egale și toate unghiurile drepte. Dacă latura este `a`, atunci:

`P = 4a`,

`A = a²`.

Diagonala pătratului se calculează prin teorema lui Pitagora:

`d² = a² + a² = 2a²`, deci `d = a√2`.

Dacă este cunoscută diagonala, latura este `a = d/√2 = d√2/2`, iar aria poate fi calculată direct prin `A = d²/2`.

**Exemplu.** Un pătrat are diagonala de 10 cm. Atunci aria este:

`A = d²/2 = 100/2 = 50 cm²`.

### 3.2. Dreptunghiul

Dreptunghiul are laturile opuse egale și unghiuri drepte. Dacă lungimea este `L`, iar lățimea este `l`, atunci:

`P = 2(L + l)`,

`A = L · l`.

Diagonala este ipotenuza unui triunghi dreptunghic cu catetele `L` și `l`:

`d² = L² + l²`.

Dacă se cunosc perimetrul și una dintre laturi, nu înlocui direct în formula ariei. Mai întâi afli latura necunoscută. De exemplu, dacă `P = 34 cm` și `L = 11 cm`, atunci:

`2(11 + l) = 34`, deci `11 + l = 17`, de unde `l = 6 cm`. Aria este `11 · 6 = 66 cm²`.

## 4. Triunghiul

Perimetrul unui triunghi cu laturile `a`, `b`, `c` este:

`P = a + b + c`.

Aria depinde de o bază și de înălțimea dusă pe acea bază:

`A = b · h_b / 2`.

Înălțimea trebuie să fie perpendiculară pe baza aleasă. Nu este obligatoriu ca înălțimea să fie o latură a triunghiului. Într-un triunghi obtuz, unele înălțimi se află în exteriorul triunghiului, dar formula rămâne aceeași.

### Cazuri utile

- triunghi dreptunghic cu catetele `a` și `b`: `A = ab/2`;
- triunghi echilateral de latură `a`: `A = a²√3/4`;
- triunghi isoscel: poți trasa înălțimea pe bază; aceasta împarte baza în două segmente egale și formează două triunghiuri dreptunghice.

**Exemplu.** Un triunghi are baza de 14 cm și înălțimea corespunzătoare de 9 cm. Aria este `14 · 9 / 2 = 63 cm²`. Dacă ai folosi `14 · 9`, ai calcula aria unui paralelogram cu aceeași bază și aceeași înălțime, nu aria triunghiului.

## 5. Paralelogramul și rombul

Pentru un paralelogram de bază `b` și înălțime `h_b`:

`P = 2(a + b)`,

`A = b · h_b`.

Înălțimea este distanța perpendiculară dintre cele două drepte care conțin bazele. Latura oblică nu este, în general, înălțime.

Într-un romb toate laturile sunt egale, deci:

`P = 4a`.

Aria se poate calcula prin:

`A = a · h`,

sau, dacă sunt cunoscute diagonalele `d_1` și `d_2`:

`A = d_1 · d_2 / 2`.

Diagonalele rombului sunt perpendiculare și se înjumătățesc. Această proprietate permite folosirea teoremei lui Pitagora pentru a afla latura.

**Exemplu.** Un romb are diagonalele de 12 cm și 16 cm. Aria este `12 · 16 / 2 = 96 cm²`. Jumătățile diagonalelor sunt 6 cm și 8 cm, deci latura este `√(6² + 8²) = 10 cm`, iar perimetrul este 40 cm.

## 6. Trapezul

Trapezul are două laturi paralele, numite baze. Notăm bazele cu `B` și `b`, iar înălțimea cu `h`. Formula ariei este:

`A = (B + b) · h / 2`.

Perimetrul este suma celor patru laturi:

`P = B + b + l_1 + l_2`.

Nu se adună doar bazele. Dacă trapezul este isoscel, laturile neparalele sunt egale, dar ele intră amândouă în perimetru.

**Exemplu.** Pentru `B = 18 cm`, `b = 10 cm`, `h = 6 cm`, aria este:

`A = (18 + 10) · 6 / 2 = 84 cm²`.

Într-un trapez isoscel, dacă baza mare depășește baza mică cu `B-b`, diferența se împarte egal la cele două margini. Se poate forma astfel un triunghi dreptunghic cu proiecția orizontală `(B-b)/2` și înălțimea `h`.

## 7. Cercul și discul

Cercul este conturul, iar discul este regiunea interioară. Dacă raza este `r`, iar diametrul este `d`, atunci `d = 2r`.

Lungimea cercului este:

`C = 2πr = πd`.

Aria discului este:

`A = πr²`.

La problemele de examen se poate preciza `π = 3,14` sau se poate cere păstrarea rezultatului în funcție de `π`. Nu înlocui aproximarea decât dacă este cerută sau necesară.

Pentru un semicerc:

- lungimea arcului este `πr`;
- aria semicercului este `πr²/2`;
- dacă se cere perimetrul semicercului, se adaugă și diametrul: `P = πr + 2r`.

Pentru un sfert de disc, aria este `πr²/4`, iar lungimea arcului este `πr/2`. Dacă se cere perimetrul sectorului, trebuie adăugate cele două raze.

## 8. Figuri compuse și arii diferență

Multe probleme nu prezintă o figură standard, ci o construcție formată din dreptunghiuri, triunghiuri, semicercuri sau pătrate. Procedura sigură este:

1. identifică toate lungimile cunoscute și necunoscute;
2. trasează, dacă este necesar, linii auxiliare;
3. descompune figura în regiuni ale căror arii le cunoști;
4. calculează separat ariile;
5. adună sau scade, în funcție de regiunea cerută;
6. verifică unitatea și ordinul de mărime.

Dacă o regiune este un dreptunghi din care s-a decupat un semicerc, aria rămasă este `A_dreptunghi - A_semicerc`. Dacă un contur este format din laturi drepte și un arc, perimetrul se calculează adunând lungimile tuturor porțiunilor de contur, nu ariile.

## 9. Probleme inverse

Uneori este dată aria și trebuie aflată o dimensiune. Izolează necunoscuta înainte să introduci numerele.

Pentru dreptunghi: dacă `A = 72 cm²` și `L = 9 cm`, atunci `l = A/L = 8 cm`.

Pentru triunghi: dacă `A = 45 cm²` și `b = 10 cm`, atunci `45 = 10h/2`, deci `h = 9 cm`.

Pentru trapez: dacă `A = 60 cm²`, `B+b = 20 cm`, atunci `60 = 20h/2`, de unde `h = 6 cm`.

Pentru cerc, dacă aria este `25π cm²`, atunci `πr² = 25π`, deci `r² = 25`, iar raza pozitivă este `r = 5 cm`.

## 10. Strategie de rezolvare la examen

Înainte de calcul, răspunde mental la trei întrebări:

- Se cere conturul sau suprafața? Dacă este contur, caut perimetrul; dacă este suprafață, caut aria.
- Ce figură sau ce combinație de figuri văd?
- Sunt toate lungimile compatibile și exprimate în aceeași unitate?

Scrie formula înainte de înlocuire. Notează baza și înălțimea corespunzătoare, mai ales la triunghi, paralelogram și trapez. Dacă trebuie aflată o lungime prin Pitagora, identifică întâi triunghiul dreptunghic. La final, verifică dacă aria este în unități pătrate și dacă un perimetru nu a devenit accidental o arie.

## 11. Greșeli frecvente

1. Conversia `m²` în `cm²` cu factorul 100 în loc de 10 000.
2. Folosirea laturii oblice ca înălțime într-un paralelogram.
3. Uitarea factorului `1/2` la triunghi și trapez.
4. Calcularea perimetrului unui semicerc folosind doar arcul și uitând diametrul.
5. Folosirea diametrului în formula `πr²` fără a-l împărți la 2.
6. Adunarea ariilor când figura cerută este o regiune decupată.
7. Folosirea unei diagonale ca latură fără justificare.
8. Rotunjirea prea devreme a lui `π` sau a unei rădăcini.

## 12. Sinteză de formule

| Figură | Perimetru / contur | Arie |
|---|---:|---:|
| Pătrat | `4a` | `a²` |
| Dreptunghi | `2(L+l)` | `L·l` |
| Triunghi | `a+b+c` | `b·h/2` |
| Paralelogram | `2(a+b)` | `b·h` |
| Romb | `4a` | `a·h` sau `d_1d_2/2` |
| Trapez | suma laturilor | `(B+b)h/2` |
| Cerc/disc | `2πr` | `πr²` |

### Mini-test de autocontrol

1. Ce diferență există între cerc și disc?
2. Ce unitate are aria unui dreptunghi cu laturile măsurate în centimetri?
3. De ce nu este orice latură a unui paralelogram înălțime?
4. Cum calculezi aria unui trapez dacă știi bazele și înălțimea?
5. Ce trebuie adăugat la arcul unui semicerc pentru a obține perimetrul său?

Răspunsurile corecte trebuie să includă: cercul este conturul, discul este interiorul; cm²; înălțimea este perpendiculară pe bază; `(B+b)h/2`; diametrul.

## 13. De ce funcționează formulele de arie

Formulele nu trebuie memorate mecanic. Înțelegerea lor te ajută să le alegi corect și să le reconstruiești atunci când uiți un detaliu.

### 13.1. Dreptunghiul ca unitate de măsură

Un dreptunghi cu lungimea `L` și lățimea `l` poate fi acoperit cu pătrate unitate. Pe un rând încap `L` unități, iar pe verticală sunt `l` rânduri, astfel că numărul total de pătrate este `L·l`. De aici rezultă formula ariei dreptunghiului.

Pătratul este un caz particular de dreptunghi, în care `L=l=a`, deci `A=a·a=a²`.

### 13.2. Paralelogramul obținut din dreptunghi

Dacă tai triunghiul format într-o parte a unui paralelogram și îl muți în cealaltă parte, obții un dreptunghi cu aceeași bază și aceeași înălțime. Mutarea nu schimbă suprafața, de aceea aria paralelogramului este `b·h`.

Această observație explică de ce latura oblică nu poate fi introdusă în locul înălțimii. Latura oblică indică direcția oblică a conturului, dar suprafața se bazează pe distanța perpendiculară dintre baze.

### 13.3. Triunghiul ca jumătate de paralelogram

Dacă alături de un triunghi așezi o copie a lui, poți forma un paralelogram. Triunghiul ocupă jumătate din suprafața paralelogramului, deci `A=b·h/2`. Același raționament se aplică indiferent dacă triunghiul este ascuțit, dreptunghic sau obtuz; importantă este înălțimea perpendiculară pe dreapta bazei.

### 13.4. Trapezul ca sumă de triunghiuri

Un trapez poate fi împărțit printr-o diagonală în două triunghiuri cu aceeași înălțime `h`, unul având baza `B`, iar celălalt baza `b`. Suma ariilor este:

`B·h/2 + b·h/2 = (B+b)h/2`.

Aceasta este o explicație utilă pentru formula trapezului și te ajută să nu uiți că se adună bazele înainte de înmulțirea cu înălțimea.

## 14. Relația dintre arie și modificarea dimensiunilor

Dacă toate lungimile unei figuri sunt înmulțite cu un factor `k`, perimetrul se înmulțește cu `k`, dar aria se înmulțește cu `k²`. De exemplu, dacă latura unui pătrat se dublează, perimetrul se dublează, însă aria devine de patru ori mai mare.

Pentru un dreptunghi de dimensiuni `L` și `l`, dacă dimensiunile devin `2L` și `2l`, aria nouă este `(2L)(2l)=4Ll`. Acest principiu apare în probleme cu planuri la scară, reproduceri și măriri.

Dacă o figură este micșorată la scara `1:n`, lungimile de pe desen se raportează la lungimile reale prin factorul `n`. Ariile se raportează prin `n²`. De aceea o hartă la scara `1:100` nu transformă direct centimetri pătrați în metri pătrați fără o conversie atentă.

## 15. Perimetru minim și comparații

Pentru două dreptunghiuri cu aceeași arie, cel mai apropiat de pătrat are perimetrul mai mic. De exemplu, dreptunghiurile cu aria 36 cm² pot avea dimensiunile 1 și 36, 2 și 18, 3 și 12, 4 și 9 sau 6 și 6. Perimetrele sunt 74, 40, 30, 26 și 24 cm. Pătratul are cel mai mic perimetru.

La nivel de Evaluare Națională, nu este necesară demonstrarea generală a acestei proprietăți, dar este utilă pentru verificare: dacă o figură foarte alungită are același perimetru ca una aproape pătrată, ariile lor nu se compară prin simpla numărare a laturilor. Calculează sau transformă figura cu o formulă justificată.

## 16. Cum alegi o unitate de lucru

Într-o problemă pot apărea metri și centimetri în același timp. Alegerea unității depinde de calculul final:

- pentru perimetru, toate lungimile trebuie aduse în aceeași unitate;
- pentru arie, toate lungimile trebuie aduse în aceeași unitate înainte de înmulțire;
- dacă rezultatul trebuie exprimat în metri pătrați, poți lucra în metri și obții direct m²;
- dacă lucrezi în centimetri, convertești la final prin `1 m²=10 000 cm²`.

Exemplu: un dreptunghi de 2 m pe 35 cm are aria `200 cm · 35 cm = 7000 cm²`, adică `0,7 m²`. Dacă ai calcula `2·35`, ai combina două unități incompatibile și ai obține un număr fără interpretare corectă.

## 17. Verificarea rezultatului prin estimare

Estimarea nu înlocuiește demonstrația, dar detectează erorile mari. Pentru un dreptunghi de aproximativ 20 m pe 10 m, aria trebuie să fie în jur de 200 m². Un rezultat de 2 m² sau 20 000 m² este evident suspect.

În cazul cercului, aria unui disc de rază 10 cm este aproximativ `3·100=300 cm²`; valoarea exactă `100π cm²` se află în jurul acestei estimări. Lungimea cercului este aproximativ `6·10=60 cm`. Dacă ai obținut 314 cm, probabil ai folosit greșit diametrul sau ai confundat aria cu lungimea cercului.

Pentru o figură compusă, aria totală trebuie să fie cel puțin cât aria celei mai mari componente și cel mult cât aria dreptunghiului care o încadrează, dacă figura este în interiorul acelui dreptunghi. Această verificare este foarte eficientă la desene cu decupaje.

## 18. Model de redactare a unei rezolvări

O rezolvare clară poate urma schema:

1. **Date:** notezi lungimile și forma figurii.
2. **Relația geometrică:** precizezi ce formulă sau proprietate folosești.
3. **Calcul:** înlocuiești valorile, păstrând unitățile.
4. **Concluzie:** scrii răspunsul cu unitatea cerută.
5. **Verificare:** verifici semnul, ordinul de mărime și compatibilitatea cu desenul.

De exemplu, pentru un trapez cu baze 14 cm și 8 cm și înălțime 5 cm:

`A = (B+b)h/2 = (14+8)·5/2 = 55 cm²`.

Concluzia trebuie să fie formulată complet: „Aria trapezului este `55 cm²`.” Scrierea formulei este importantă deoarece arată metoda, nu doar rezultatul.

## 19. Recapitulare finală

Perimetrul se referă la lungimea conturului, iar aria la suprafața interioară. Pătratul și dreptunghiul se rezolvă prin produsul dimensiunilor; triunghiul este jumătate din paralelogram; paralelogramul folosește baza și înălțimea perpendiculară; trapezul folosește suma bazelor și înălțimea; rombul poate fi tratat prin latură și înălțime sau prin diagonale; cercul folosește raza, diametrul și `π`.

La orice exercițiu, desenează sau completează figura, uniformizează unitățile, scrie formula, calculează controlat și verifică rezultatul. Această rutină reduce cele mai frecvente greșeli: folosirea formulei nepotrivite, omiterea lui `1/2`, conversiile greșite și confundarea ariei cu perimetrul.
