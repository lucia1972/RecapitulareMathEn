# Lecția 01 — Numere naturale și calcul numeric

## Locul lecției în program

Aceasta este lecția de bază a întregului program. Aproape orice subiect de Evaluare Națională conține calcule cu numere naturale, operații, paranteze, ordinea efectuării operațiilor sau interpretarea unei cantități. Scopul nu este doar să obții un rezultat, ci să poți explica de ce acel rezultat este corect și să observi rapid o eroare.

## Competențe urmărite

La finalul lecției, elevul trebuie să poată:

- identifica și compara numere naturale;
- folosi proprietățile adunării și înmulțirii;
- efectua corect adunări, scăderi, înmulțiri și împărțiri;
- aplica ordinea operațiilor în expresii cu paranteze;
- folosi puteri cu exponent natural;
- interpreta câtul și restul unei împărțiri;
- estima un rezultat înainte de calcul;
- verifica un rezultat prin operația inversă;
- traduce problemele simple în operații matematice.

## 1. Mulțimea numerelor naturale

Numerele naturale sunt numerele folosite pentru numărare. În acest curs folosim notația:

$$\mathbb{N} = \{0, 1, 2, 3, 4, \ldots\}$$.

Uneori se notează cu $\mathbb{N}^{*}$ mulțimea numerelor naturale nenule:

$$\mathbb{N}^{*} = \{1, 2, 3, 4, \ldots\}$$.

Este important să citești cu atenție enunțul. „Număr natural” poate fi și $0$, în timp ce „număr natural nenul” exclude $0$. În problemele cu obiecte, persoane sau zile, valoarea $0$ poate fi sau nu acceptată, în funcție de context.

Pe axa numerelor, numerele naturale sunt așezate în ordine crescătoare. Dacă $a$ este la stânga lui $b$, atunci $a < b$. De exemplu, $4 < 9$. 

Relația $a \le b$ înseamnă că $a$ este mai mic sau egal cu $b$.

## 2. Scrierea și descompunerea numerelor

Valoarea unei cifre depinde de poziția ei.

De exemplu, în numărul $5307$, cifra $5$ reprezintă $5$ mii, cifra $3$ reprezintă $3$ sute, cifra $0$ reprezintă $0$ zeci, iar cifra $7$ reprezintă $7$ unități.

Descompunerea pozițională este:

$5307 = 5 · 1000 + 3 · 100 + 0 · 10 + 7$.

Această scriere este utilă la compararea numerelor și la verificarea calculelor. Pentru numere de mai multe cifre, comparăm mai întâi numărul de cifre. Orice număr de patru cifre este mai mare decât orice număr de trei cifre. Dacă numerele au același număr de cifre, comparăm cifrele de la stânga la dreapta. Ca și regulă generală, numărul care are mai multe cifre în scriere este numărul mai mare.

Exemplu: $47 208 > 46 999$. Cifrele zecilor de mii sunt egale, iar prima diferență apare la ordinul miilor, unde avem $7 > 6$.

## 3. Adunarea numerelor naturale

Adunarea este operația prin care reunim cantități. Numerele care se adună se numesc **termeni**, iar rezultatul se numește **sumă**.

Adunarea are două proprietăți fundamentale.

### Comutativitatea

$a + b = b + a$.

Ordinea termenilor nu schimbă suma. Astfel, $37 + 15 = 15 + 37 = 52$.

### Asociativitatea

$(a + b) + c = a + (b + c) = (a + c) + b$.

Putem grupa termenii convenabil. De exemplu:

$(17 + 25) + 75 = 17 + (25 + 75) = 17 + 100 = 117$.

Gruparea $25 + 75 = 100$ face calculul mult mai simplu.

### Elementul neutru

Elementul neutru al adunării este $0$:

$a + 0 = 0 + a = a$.

La adunarea în scris, așează cifrele pe aceleași ordine: unități sub unități, zeci sub zeci, sute sub sute. Dacă suma cifrelor unui ordin depășește $9$, păstrează cifra unităților și transferă cifra zecilor la ordinul următor.

## 4. Scăderea numerelor naturale

Scăderea exprimă diferența dintre două numere sau eliminarea unei cantități. În $a - b$, $a$ este descăzutul, $b$ este scăzătorul, iar rezultatul este diferența.

În mulțimea numerelor naturale, $a - b$ este număr natural doar când $a ≥ b$.

De exemplu, $12 - 7 = 5$. În schimb, $7 - 12$ nu se poate calcula în mulțimea numerelor naturale, deoarece descăzutul este mai mic decât scăzătorul. Vom calcula astfel de diferențe când vom studia numerele întregi.

### Scăderea nu este comutativă

$12 - 5 ≠ 5 - 12$.

Ordinea numerelor contează. Dacă scădem $5$ din $12$, obținem $7$. Dacă inversăm numerele, obținem $5 - 12$, care nu se poate calcula în mulțimea numerelor naturale.

### Scăderea nu este asociativă

$(15 - 7) - 3 = 8 - 3 = 5$, dar $15 - (7 - 3) = 15 - 4 = 11$.

Rezultatele diferă, deci într-o scădere nu putem regrupa termenii după cum vrem.

### Verificarea scăderii se face prin adunare

$descăzut = diferență + scăzător$.

Dacă $804 - 276 = 528$, verificăm $528 + 276 = 804$.

### Scăderea lui zero

$a - 0 = a$.

### Scăderea unui număr din el însuși

$a - a = 0$.

### Diferența rămâne aceeași dacă adunăm același număr la descăzut și la scăzător

$63 - 28 = (63 + 2) - (28 + 2) = 65 - 30 = 35$.

Scăderea $65 - 30$ se face mult mai ușor în minte decât $63 - 28$.

## 5. Înmulțirea numerelor naturale

Înmulțirea este o adunare repetată. $4 · 6$ înseamnă $6 + 6 + 6 + 6$, adică $24$.

Numerele care se înmulțesc se numesc **factori**, iar rezultatul se numește **produs**.

### Înmulțirea este comutativă și asociativă

$a · b = b · a$ și $(a · b) · c = a · (b · c)$.

### Elementul neutru este 1

$a · 1 = 1 · a = a$.

### Elementul absorbant este 0

$a · 0 = 0 · a = 0$.

### Înmulțirea este distributivă față de adunare și scădere

$a · (b + c) = a · b + a · c$;

$a · (b - c) = a · b - a · c$, când scăderea are sens.

Exemplu cu adunare:

$7 · 103 = 7 · (100 + 3) = 700 + 21 = 721$.

Exemplu cu scădere:

$7 · 98 = 7 · (100 - 2) = 700 - 14 = 686$.

Verificăm prin operația inversă: $686 : 7 = 98$.

Distributivitatea permite calcule mentale rapide și desfacerea parantezelor.

## 6. Împărțirea exactă și împărțirea cu rest

Numărul pe care îl împărțim se numește **deîmpărțit**.

Numărul la care împărțim se numește **împărțitor**.

Prin împărțire obținem un **cât** și un **rest**. Împărțitorul trebuie să fie diferit de $0$.

Pentru a verifica o împărțire, înmulțim împărțitorul cu câtul și adunăm restul. Trebuie să obținem deîmpărțitul:

$deîmpărțit = împărțitor · cât + rest$.

Restul trebuie să respecte condiția $0 ≤ rest < împărțitor$.

- **Împărțire exactă.** La împărțirea lui $48$ la $6$, câtul este $8$, iar restul este $0$. Verificăm prin $48 = 6 · 8 + 0$.
- **Împărțire cu rest nenul.** La împărțirea lui $47$ la $6$, câtul este $7$, iar restul este $5$. Verificăm că $47 = 6 · 7 + 5$ și că $0 ≤ 5 < 6$.

### Împărțirea nu este comutativă

$12 : 4 = 3$, dar $4 : 12$ dă câtul $0$ și restul $4$, deoarece $4 = 12 · 0 + 4$. Ordinea numerelor contează, la fel ca la scădere.

## 7. Puteri cu exponent natural

Pentru un număr natural $a$ și un exponent natural nenul $n$, $a^n$ este produsul a $n$ factori egali cu $a$:

$a^4 = a · a · a · a$.

În $5^3$, baza este $5$, exponentul este $3$, iar valoarea este $5 · 5 · 5 = 125$.

Prin convenție, pentru $a ≠ 0$, $a^0 = 1$. Puterea a doua se numește *pătrat*, iar puterea a treia se numește *cub*.

Puterile apar în formule de arie și volum: aria unui pătrat de latură $a$ este $a²$, iar volumul unui cub de muchie $a$ este $a³$.

## 8. Ordinea efectuării operațiilor

Într-o expresie cu mai multe operații, nu calculăm pur și simplu de la stânga la dreapta. Respectăm următoarea ordine:

1. parantezele, din interior spre exterior;
2. ridicarea la putere;
3. înmulțirile și împărțirile, de la stânga la dreapta;
4. adunările și scăderile, de la stânga la dreapta.

**Exemplu.** $18 + 3 · (7 - 2)$

Mai întâi calculăm paranteza: $7 - 2 = 5$. Apoi înmulțirea: $3 · 5 = 15$. În final adunarea: $18 + 15 = 33$.

Nu este corect să faci $18 + 3 = 21$ și apoi $21 · 5 = 105$. Rezultatul corect este $33$.

**Exemplu cu putere.** $2 + 3 · 2²$

Întâi puterea: $2² = 4$. Apoi înmulțirea: $3 · 4 = 12$. În final adunarea: $2 + 12 = 14$.

**Operații de același rang.** În $24 : 4 · 2$, împărțirea și înmulțirea au aceeași prioritate, deci lucrăm de la stânga la dreapta: $24 : 4 = 6$, apoi $6 · 2 = 12$. Nu este corect să calculezi întâi $4 · 2 = 8$ și apoi $24 : 8 = 3$.

### Paranteze imbricate

Dacă există paranteze una în alta, începe cu cea mai interioară. Pentru $40 - [6 + 2 · (5 - 2)]$:

- paranteza rotundă: $5 - 2 = 3$;
- înmulțirea din paranteza pătrată: $2 · 3 = 6$;
- paranteza pătrată: $6 + 6 = 12$;
- rezultatul: $40 - 12 = 28$.

La examen, rescrierea expresiei pe rânduri este preferabilă calculului în minte. Fiecare rând trebuie să păstreze aceeași valoare ca rândul precedent.

## 9. Estimarea rezultatului

Înainte să calculezi exact, estimează ordinul de mărime al rezultatului. Pentru asta, rotunjește numerele la valori ușor de calculat în minte și fă operația cu ele.

**La înmulțire.** Pentru $398 · 21$, rotunjim: $400 · 20 = 8000$. Rezultatul exact trebuie să fie apropiat de $8000$. Calculul exact este $398 · 21 = 8358$, deci rezultatul este plauzibil. Dacă ai obține $835$ sau $83 580$, ai observa imediat că ai pierdut sau ai adăugat o cifră.

**La împărțire.** Pentru $731 : 8$, rotunjim: $720 : 8 = 90$. Câtul trebuie să fie în jur de $90$. Calculul exact dă $91 rest 3$, deci rezultatul este plauzibil. Dacă obții $9$ sau $900$, refă calculul: ambele sunt mult prea departe de estimare.

Pentru $7560 : 24$, rotunjim: $7500 : 25 = 300$. Rezultatul exact, $315$, este rezonabil. Un rezultat de $31$ sau $3150$ nu este compatibil cu estimarea.

Estimarea nu este demonstrație și nu înlocuiește calculul exact. Ea este o plasă de siguranță, utilă mai ales în problemele cu text, unde trebuie să vezi dacă răspunsul are sens. La examen, fă întâi estimarea mental, apoi scrie calculul precis.

## 10. Cum alegi operația într-o problemă

Citește mai întâi întrebarea, apoi uită-te la legătura dintre numere. Aceeași expresie poate apărea în probleme care se rezolvă prin operații diferite.

- „În total”, „împreună” → aduni când pui la un loc două cantități. Ana are $12$ fișe, iar Vlad are $8$. Împreună au $12 + 8 = 20$ de fișe.
- „Cu atât mai mult” → aduni când pornești de la cantitatea mai mică. Vlad are $8$ fișe, iar Ana are cu $4$ mai multe. Ana are $8 + 4 = 12$ fișe.
- „Cu atât mai puțin” → scazi când pornești de la cantitatea mai mare. Ana are $12$ fișe, iar Vlad are cu $4$ mai puține. Vlad are $12 - 4 = 8$ fișe.
- „De … ori mai mare” → înmulțești. Vlad are $8$ fișe, iar Ana are de $3$ ori mai multe. Ana are $8 · 3 = 24$ de fișe.
- „De … ori mai mic” → împarți. Ana are $24$ de fișe, iar Vlad are de $3$ ori mai puține. Vlad are $24 : 3 = 8$ fișe.
- „De câte ori” → împarți când compari două cantități pe care le cunoști deja. Dacă Ana are $24$ de fișe și Vlad are $8$, afli de câte ori are Ana mai multe calculând $24 : 8 = 3$.
- „Împărțit în mod egal” → împarți ca să afli cât primește fiecare. Dacă distribui $24$ de fișe în mod egal la $6$ elevi, fiecare primește $24 : 6 = 4$ fișe.
- „Rămân” → de obicei scazi. Dacă ai $24$ de fișe și distribui $7$, îți rămân $24 - 7 = 17$ fișe.
- „Fiecare” → operația depinde de ce cauți. Dacă ai $6$ dosare cu $4$ fișe în fiecare, afli câte sunt în total prin înmulțire: $6 · 4 = 24$. Dacă ai $24$ de fișe în $6$ dosare, cu același număr în fiecare, afli câte sunt într-un dosar prin împărțire: $24 : 6 = 4$.

## 11. Probleme cu unități de măsură

Înainte de calcul, adu mărimile la aceeași unitate. $3 m + 45 cm$ nu se adună direct ca $3 + 45$. Transformăm $3 m = 300 cm$, deci suma este $300 cm + 45 cm = 345 cm$, adică $3,45 m$.

Pentru lungimi: $1 m = 100 cm$. Pentru arii, numărul de transformare se ridică la pătrat: $1 m² = 100 · 100 cm² = 10 000 cm²$. Pentru volume, se ridică la cub: $1 m³ = 100 · 100 · 100 cm³ = 1 000 000 cm³$.

## 12. Verificarea unui calcul

Folosește cel puțin una dintre metode:

1. operația inversă;
2. estimarea ordinului de mărime;
3. refacerea calculului prin altă grupare;
4. verificarea ultimei cifre, când este util;
5. verificarea restului la împărțire.

Exemplu: pentru $125 · 8 = 1000$, poți verifica prin $1000 : 8 = 125$. Pentru $937 : 5 = 187 rest 2$, verifici $5 · 187 + 2 = 937$.

## 13. Greșeli tipice la examen

### Greșeala 1: ignorarea parantezelor

În $12 + 3 · (4 + 2)$, paranteza trebuie rezolvată înaintea înmulțirii: $12 + 3 · 6 = 12 + 18 = 30$.

### Greșeala 2: efectuarea adunării înaintea înmulțirii

În $7 + 4 · 5$, rezultatul este $7 + 20 = 27$, nu $11 · 5 = 55$.

### Greșeala 3: rest incorect

Într-o împărțire cu rest, restul trebuie să fie mai mic decât împărțitorul.

### Greșeala 4: unități incompatibile

Nu aduna metri cu centimetri fără transformare.

### Greșeala 5: răspuns fără interpretare

Dacă ai calculat numărul de caiete, răspunsul trebuie să spună câte caiete sunt, nu doar să prezinte numărul.

## 14. Strategii de calcul rapid și sigur

Calculul rapid nu înseamnă să sari peste etape, ci să alegi o reprezentare care reduce numărul de operații.

**La adunări**, grupează numerele care formează zeci, sute sau mii:

$238 + 762 + 145 = (238 + 762) + 145 = 1000 + 145 = 1145$.

**La înmulțiri**, folosește descompunerea:

$25 · 48 = 25 · (4 · 12) = (25 · 4) · 12 = 100 · 12 = 1200$;

$48 · 19 = 48 · (20 - 1) = 960 - 48 = 912$.

**La scădere**, transformă uneori operația într-o completare. Pentru $1000 - 376$, observi că de la $376$ la $400$ sunt $24$, iar de la $400$ la $1000$ sunt $600$, deci $1000 - 376 = 24 + 600 = 624$. Metoda este utilă mai ales când numărul din care scazi are zerouri.

**La împărțire**, caută mai întâi factori cunoscuți. Pentru $864 : 24$, observi că $24 = 6 · 4$. Calculezi $864 : 6 = 144$, apoi $144 : 4 = 36$.

La examen este acceptată orice metodă corectă, dar operațiile intermediare trebuie să poată fi verificate.

## 15. Paritatea și ultima cifră

Un număr natural este par dacă se termină în $0$, $2$, $4$, $6$ sau $8$ și impar dacă se termină în $1$, $3$, $5$, $7$ sau $9$.

Paritatea ajută la verificarea rezultatului:

- par + par = par;
- impar + impar = par;
- par + impar = impar;
- un produs este par dacă cel puțin unul dintre factori este par.

De exemplu, dacă aduni două numere impare, rezultatul nu poate fi impar. Dacă obții un rezultat care contrazice paritatea, ai făcut o eroare de calcul sau ai copiat greșit datele.

Ultima cifră oferă un control rapid al înmulțirii. Pentru $37 · 24$, produsul se termină în aceeași cifră ca $7 · 4 = 28$, adică în $8$. Dacă obții $887$, sigur ai greșit. Atenție însă: ultima cifră corectă nu garantează că rezultatul e corect. Și $878$ se termină în $8$, dar $37 · 24 = 888$.

## 16. Probleme cu mai multe etape

Unele probleme nu cer o singură operație. Separă întrebarea în etape și notează ce reprezintă fiecare rezultat.

**Exemplu.** O bibliotecă are $8$ rafturi, fiecare cu $36$ de cărți. Se împrumută $47$ de cărți, iar apoi se aduc $25$. Câte cărți sunt acum în bibliotecă?

- numărul inițial de cărți: $8 · 36 = 288$;
- după împrumut rămân: $288 - 47 = 241$;
- după aducerea cărților sunt: $241 + 25 = 266$.

Răspuns: În bibliotecă sunt $266$ de cărți.

Este greșit să scrii doar numărul final fără să poți explica etapele. Răspunsul trebuie să includă unitatea și să fie legat de situație.

În problemele cu obiecte, rezultatele intermediare trebuie să aibă sens. Nu poți avea $-3$ elevi, $2,5$ biciclete sau $0,4$ autobuze dacă problema se referă la obiecte întregi. Un rezultat zecimal poate fi corect dacă se referă la lungime, masă, timp sau bani, dar trebuie interpretat.

## 17. Date inutile și date lipsă

Într-o problemă de examen pot apărea informații care nu sunt necesare pentru întrebarea pusă. Nu trebuie să folosești fiecare număr în calcul. Citește exact cerința. Dacă se cere numărul total de obiecte, o informație despre culoarea lor poate fi irelevantă.

În schimb, dacă pentru calcul pare să lipsească o dată, caută o relație ascunsă în text. „Lungimea este cu $5$ mai mare decât lățimea” înseamnă $L = l + 5$. „De $3$ ori mai multe” înseamnă $3 · x$, iar „cu $3$ mai multe” înseamnă $x + 3$. Cele două formulări nu sunt echivalente.

## 18. Model de rezolvare completă

Un depozit primește $12$ cutii cu câte $24$ de caiete. În prima zi distribuie $85$ de caiete, iar în a doua zi distribuie cu $2$ mai puține decât în prima zi. Câte caiete rămân?

- numărul inițial de caiete: $12 · 24 = 288$;
- în a doua zi se distribuie: $85 - 2 = 83$ de caiete;
- numărul rămas: $288 - 85 - 83 = 120$ de caiete.

Răspuns: În depozit rămân $120$ de caiete.

Rezolvarea trebuie verificată: numărul distribuit este $85 + 83 = 168$, iar $288 - 168 = 120$. Rezultatul este întreg, pozitiv și mai mic decât numărul inițial, deci este compatibil cu situația.

La orice exercițiu cu numere naturale, citește integral cerința, subliniază datele și unitățile, notează întrebarea, alege operațiile, estimează rezultatul, efectuează calculul în scris, verifică și formulează răspunsul complet. Această rutină devine rapid automată și reduce greșelile de neatenție.

## 19. Rezumatul lecției

- Numerele naturale sunt $0$, $1$, $2$, $3$, ... Mulțimea numerelor naturale nenule, $\mathbb{N}^{*}$, nu conține $0$.
- Adunarea și înmulțirea sunt comutative și asociative. Scăderea și împărțirea nu sunt.
- Înmulțirea este distributivă față de adunare și față de scădere.
- La împărțirea cu rest: $deîmpărțit = împărțitor · cât + rest$, cu $0 ≤ rest < împărțitor$.
- Ordinea operațiilor: paranteze, puteri, înmulțiri și împărțiri, adunări și scăderi. Operațiile de același rang se fac de la stânga la dreapta.
- Unitățile de măsură se aduc la aceeași unitate înainte de calcul.
- Un rezultat se verifică prin estimare, prin operația inversă, prin paritate sau prin ultima cifră.
- Într-o problemă cu mai multe etape, fiecare rezultat intermediar trebuie să aibă sens, iar răspunsul final se formulează complet.

## Test de înțelegere

Răspunde în scris, fără calculator:

1. De ce $3 + 4 · 5$ nu este egal cu $(3 + 4) · 5$?
2. Ce condiție trebuie să îndeplinească restul unei împărțiri?
3. Cum verifici rezultatul unei scăderi?
4. Cum transformi $2 m și 35 cm$ într-o singură unitate?
5. Ce operație sugerează expresia „de $7$ ori mai multe”?
6. Cât este $24 : 4 · 2$? Explică în ce ordine ai calculat.
7. Poate suma a două numere impare să fie $473$? De ce?
8. Care este diferența dintre „de $3$ ori mai multe” și „cu $3$ mai multe”?
