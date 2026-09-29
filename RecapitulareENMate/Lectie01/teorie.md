# Lecția 01 — Numere naturale și calcul numeric

## Locul lecției în program

Aceasta este lecția de bază a întregului program. Aproape orice subiect de Evaluare Națională conține calcule cu numere naturale, operații, paranteze, ordinea efectuării operațiilor sau interpretarea unei cantități. Scopul nu este doar să obții un rezultat, ci să poți explica de ce acel rezultat este corect și să observi rapid o eroare.

## Competențe urmărite

La finalul lecției, elevul trebuie să poată:

- să identifice și să compare numere naturale;
- să folosească proprietățile adunării și înmulțirii;
- să efectueze corect adunări, scăderi, înmulțiri și împărțiri;
- să aplice ordinea operațiilor în expresii cu paranteze;
- să folosească puteri cu exponent natural;
- să interpreteze câtul și restul unei împărțiri;
- să estimeze un rezultat înainte de calcul;
- să verifice un rezultat prin operația inversă;
- să traducă problemele simple în operații matematice.

## 1. Mulțimea numerelor naturale

Numerele naturale sunt numerele folosite pentru numărare. În acest curs folosim notația:

`N = {0, 1, 2, 3, 4, ...}`.

Uneori se notează cu `N*` mulțimea numerelor naturale nenule:

`N* = {1, 2, 3, 4, ...}`.

Este important să citești cu atenție enunțul. „Număr natural” poate include zero, în timp ce „număr natural nenul” exclude zero. În problemele cu obiecte, persoane sau zile, valoarea zero poate fi sau nu acceptată în funcție de context.

Pe axa numerelor, numerele naturale sunt așezate în ordine crescătoare. Dacă `a` este la stânga lui `b`, atunci `a<b`. De exemplu, `4<9`. Relația `a≤b` înseamnă că `a` este mai mic sau egal cu `b`.

## 2. Scrierea și descompunerea numerelor

Valoarea unei cifre depinde de poziția ei. În numărul `5 307`, cifra 5 reprezintă 5 mii, cifra 3 reprezintă 3 sute, cifra 0 reprezintă 0 zeci, iar cifra 7 reprezintă 7 unități.

Descompunerea pozițională este:

`5 307 = 5·1000 + 3·100 + 0·10 + 7`.

Această scriere este utilă la compararea numerelor și la verificarea calculelor. Pentru un număr de mai multe cifre, comparăm mai întâi numărul de cifre. Orice număr de patru cifre este mai mare decât orice număr de trei cifre. Dacă numerele au același număr de cifre, comparăm cifrele de la stânga la dreapta.

Exemplu: `47 208 > 46 999`, deoarece prima cifră diferită, citită de la stânga, este cifra sutelor de mii? Mai precis, zecile de mii sunt egale, iar la ordinul miilor avem `7>6`.

## 3. Adunarea numerelor naturale

Adunarea este operația prin care reunim cantități. Termenii adunați se numesc termeni, iar rezultatul se numește sumă.

Adunarea are două proprietăți fundamentale:

### Comutativitatea

`a+b=b+a`.

Ordinea termenilor nu schimbă suma. Astfel, `37+15=15+37=52`.

### Asociativitatea

`(a+b)+c=a+(b+c)`.

Putem grupa termenii convenabil. De exemplu:

`28+47+72 = 28+(47+72)=28+119=147`.

Elementul neutru al adunării este 0:

`a+0=0+a=a`.

La adunarea în scris, așază cifrele pe aceleași ordine: unități sub unități, zeci sub zeci, sute sub sute. Dacă suma cifrelor unui ordin depășește 9, păstrează cifra unităților și transferă cifra zecilor la ordinul următor.

## 4. Scăderea numerelor naturale

Scăderea exprimă diferența dintre două numere sau eliminarea unei cantități. În `a-b`, `a` este descăzutul, `b` este scăzătorul, iar rezultatul este diferența.

În mulțimea numerelor naturale, `a-b` este număr natural doar când `a≥b`. De exemplu, `12-7=5`, dar `7-12` nu este număr natural; va fi tratat ulterior în mulțimea numerelor întregi.

Scăderea nu este comutativă:

`12-5 ≠ 5-12`.

Verificarea scăderii se face prin adunare:

`descăzut = diferență + scăzător`.

Dacă `804-276=528`, verificăm `528+276=804`.

## 5. Înmulțirea numerelor naturale

Înmulțirea este o adunare repetată. `4·6` înseamnă `6+6+6+6`, adică 24.

Factorii sunt numerele înmulțite, iar rezultatul este produsul.

Înmulțirea este comutativă și asociativă:

`a·b=b·a` și `(a·b)·c=a·(b·c)`.

Elementul neutru este 1:

`a·1=a`.

Elementul absorbant este 0:

`a·0=0`.

Înmulțirea este distributivă față de adunare și scădere:

`a·(b+c)=a·b+a·c`;

`a·(b-c)=a·b-a·c`, când scăderea are sens.

Exemplu:

`7·103=7·(100+3)=700+21=721`.

Distributivitatea permite calcule mentale rapide și desfacerea parantezelor.

## 6. Împărțirea exactă și împărțirea cu rest

Împărțirea este operația inversă a înmulțirii. În `a:b=c`, `a` este deîmpărțitul, `b` este împărțitorul, iar `c` este câtul. Împărțirea la zero nu este definită.

Dacă împărțirea nu este exactă, folosim teorema împărțirii cu rest:

`deîmpărțit = împărțitor · cât + rest`,

unde `0≤rest<împărțitor`.

Exemplu:

`47:6=7 rest 5`, deoarece `47=6·7+5`, iar `5<6`.

Restul este întotdeauna mai mic decât împărțitorul. Dacă apare un rest mai mare sau egal cu împărțitorul, împărțirea nu a fost finalizată.

## 7. Ordinea operațiilor

Într-o expresie cu mai multe operații, nu calculăm pur și simplu de la stânga la dreapta. Respectăm următoarea ordine:

1. parantezele, din interior spre exterior;
2. puterile;
3. înmulțirile și împărțirile, de la stânga la dreapta;
4. adunările și scăderile, de la stânga la dreapta.

Exemplu:

`18+3·(7-2)`.

Mai întâi paranteza: `7-2=5`.

Apoi înmulțirea: `3·5=15`.

În final adunarea: `18+15=33`.

Nu este corect să faci `18+3=21` și apoi `21·5`.

### Paranteze imbricate

Pentru `40-[6+2·(5-2)]`, rezolvăm paranteza rotundă: `5-2=3`, apoi `2·3=6`, apoi paranteza pătrată: `6+6=12`, iar rezultatul este `40-12=28`.

## 8. Puteri cu exponent natural

Pentru un număr natural `a` și un exponent natural nenul `n`, `a^n` este produsul a `n` factori egali cu `a`:

`a^4=a·a·a·a`.

În `5^3`, baza este 5, exponentul este 3, iar valoarea este `5·5·5=125`.

Prin convenție, pentru `a≠0`, `a^0=1`. Puterea a doua se numește pătrat, iar puterea a treia se numește cub.

Puterile apar în formule de arie și volum: aria unui pătrat de latură `a` este `a²`, iar volumul unui cub de muchie `a` este `a³`.

## 9. Estimarea rezultatului

Estimarea nu înlocuiește calculul, dar detectează erori. Dacă `398·21` este aproximativ `400·20=8000`, un rezultat precum 8360 este plauzibil, iar 836 este suspect.

La împărțire, rezultatul trebuie să respecte ordinul de mărime. `720:8` este aproape de 90. Dacă obții 9 sau 900, verifică.

Estimarea este utilă mai ales când lucrezi cu probleme cu text și trebuie să vezi dacă răspunsul are sens.

## 10. Traducerea problemelor în operații

Unele expresii din enunț indică operații:

- „în total”, „împreună” → adunare;
- „cu atât mai mult” → adunare;
- „cu atât mai puțin” → scădere;
- „de ... ori” → înmulțire;
- „împărțit în mod egal” → împărțire;
- „rămân” → de obicei scădere;
- „fiecare” → poate indica înmulțire sau împărțire, în funcție de sens.

Exemplu: 6 cutii conțin câte 24 de creioane. Numărul total este `6·24=144`. Dacă 144 de creioane sunt distribuite egal la 8 elevi, fiecare primește `144:8=18`.

Nu te baza doar pe cuvinte. Construiește situația și verifică dacă operația aleasă răspunde întrebării.

## 11. Probleme cu unități de măsură

Înainte de calcul, adu mărimile la aceeași unitate. `3 m+45 cm` nu se adună direct ca `3+45`. Transformăm `3 m=300 cm`, deci suma este `345 cm` sau `3,45 m`.

Pentru lungimi, factorii sunt liniari: `1 m=100 cm`. Pentru arii, factorul se pătratează: `1 m²=10000 cm²`. Pentru volume, se ridică la cub: `1 m³=1000000 cm³`.

## 12. Verificarea unui calcul

Folosește cel puțin una dintre metode:

1. operația inversă;
2. estimarea ordinului de mărime;
3. refacerea calculului prin altă grupare;
4. verificarea ultimei cifre, când este util;
5. verificarea restului la împărțire.

Exemplu: pentru `125·8=1000`, poți verifica prin `1000:8=125`. Pentru `937:5=187 rest 2`, verifici `5·187+2=937`.

## 13. Greșeli tipice la examen

### Greșeala 1: ignorarea parantezelor

În `12+3·(4+2)`, paranteza trebuie rezolvată înaintea înmulțirii.

### Greșeala 2: efectuarea adunării înaintea înmulțirii

În `7+4·5`, rezultatul este `27`, nu `55`.

### Greșeala 3: rest incorect

Într-o împărțire cu rest, restul trebuie să fie mai mic decât împărțitorul.

### Greșeala 4: unități incompatibile

Nu aduna metri cu centimetri fără transformare.

### Greșeala 5: răspuns fără interpretare

Dacă ai calculat numărul de caiete, răspunsul trebuie să spună câte caiete sunt, nu doar să prezinte numărul.

## 14. Rezumatul lecției

- Numerele naturale sunt `0,1,2,...`.
- Adunarea și înmulțirea sunt comutative și asociative.
- Împărțirea cu rest verifică relația `a=b·q+r`, cu `0≤r<b`.
- Parantezele și puterile au prioritate.
- Înmulțirea și împărțirea se fac înaintea adunării și scăderii.
- Estimarea și operația inversă sunt metode eficiente de control.
- Unitățile trebuie uniformizate înaintea calculelor.

## Test de înțelegere

Răspunde în scris, fără calculator:

1. De ce `3+4·5` nu este egal cu `(3+4)·5`?
2. Ce condiție trebuie să îndeplinească restul unei împărțiri?
3. Cum verifici rezultatul unei scăderi?
4. Cum transformi `2 m și 35 cm` într-o singură unitate?
5. Ce operație sugerează expresia „de 7 ori mai multe”?

## 15. Strategii de calcul rapid și sigur

Calculul rapid nu înseamnă să sari peste etape, ci să alegi o reprezentare care reduce numărul de operații. La adunări, grupează numerele care formează zeci, sute sau mii. De exemplu, `238+762+145` se poate calcula ca `(238+762)+145=1000+145=1145`. La înmulțiri, folosește descompunerea: `25·48 = 25·(4·12)=100·12=1200` sau `48·19=48·(20-1)=960-48=912`.

La scădere, transformă uneori operația într-o completare. Pentru `1000-376`, poți observa că de la 376 la 400 sunt 24, iar de la 400 la 1000 sunt 600, deci rezultatul este 624. Metoda este utilă mai ales când numărul din care scazi are zerouri.

La împărțire, caută mai întâi multiplii cunoscuți. Pentru `864:24`, observă că `24=6·4`, iar `864:6=144`, apoi `144:4=36`. La examen este acceptată orice metodă corectă, dar operațiile intermediare trebuie să fie controlabile.

## 16. Paritatea și ultima cifră

Un număr natural este par dacă se termină în 0, 2, 4, 6 sau 8 și impar dacă se termină în 1, 3, 5, 7 sau 9. Paritatea ajută la verificarea rezultatului: par plus par este par, impar plus impar este par, iar par plus impar este impar. Produsul este par dacă cel puțin unul dintre factori este par.

De exemplu, dacă aduni două numere impare, rezultatul nu poate fi impar. Dacă obții un rezultat care contrazice paritatea, ai făcut o eroare de calcul sau ai copiat greșit datele.

Ultima cifră oferă un control rapid al înmulțirii. Pentru `37·24`, produsul trebuie să se termine în `7·4=28`, adică în 8. Rezultatul 888 este posibil din punctul de vedere al ultimei cifre, dar 887 nu poate fi corect.

## 17. Estimarea rezultatului

Înainte să calculezi exact, estimează ordinul de mărime. Dacă ai de calculat `398·21`, poți aproxima prin `400·20=8000`; rezultatul exact ar trebui să fie apropiat de 8000. Calculul este `398·21=8358`, deci rezultatul este plauzibil. Dacă ai obține 835, ai observa imediat că lipsește o cifră.

La împărțire, dacă împarți un număr de ordinul miilor la un număr de ordinul zecilor, câtul va fi de ordinul sutelor. De exemplu, `7560:24` trebuie să fie în jur de 300, iar rezultatul 315 este rezonabil. Un rezultat de 31 sau 3150 nu este compatibil cu estimarea.

Estimarea nu este demonstrație și nu poate înlocui calculul exact. Ea este o plasă de siguranță. În rezolvarea de examen, poți efectua întâi estimarea mentală, apoi scrii calculul precis.

## 18. Paranteze și expresii cu mai multe operații

Când o expresie conține mai multe operații, respectă ordinea: parantezele, puterile, înmulțirile și împărțirile de la stânga la dreapta, apoi adunările și scăderile de la stânga la dreapta.

În expresia `48-3·(5+7)`, întâi calculezi paranteza: `5+7=12`, apoi produsul `3·12=36`, apoi diferența `48-36=12`. Nu calcula `48-3` înaintea produsului.

Dacă există paranteze una în alta, începe cu cea mai interioară. În `2·[15-(3+4)]`, obții `3+4=7`, apoi `15-7=8`, apoi `2·8=16`.

La examen, rescrierea expresiei pe rânduri este preferabilă calculului în minte. Fiecare rând trebuie să păstreze aceeași valoare ca rândul precedent.

## 19. Probleme cu mai multe etape

Unele probleme nu cer o singură operație. Separă întrebarea în etape și notează ce reprezintă fiecare rezultat. Exemplu: o bibliotecă are 8 rafturi, fiecare cu 36 de cărți. Se împrumută 47 de cărți, iar apoi se aduc 25. Numărul inițial este `8·36=288`; după împrumut rămân `288-47=241`; după aducerea cărților sunt `241+25=266`.

Este greșit să scrii doar numărul final fără să poți explica etapele. Dacă problema cere „câte cărți sunt acum?”, răspunsul trebuie să includă unitatea și să fie legat de situație: „În bibliotecă sunt 266 de cărți.”

În problemele cu obiecte, rezultatele intermediare trebuie să aibă sens. Nu poți avea `-3 elevi`, `2,5 biciclete` sau `0,4 autobuze` dacă problema se referă la obiecte întregi. Un rezultat zecimal poate fi corect dacă se referă la lungime, masă, timp sau bani, dar trebuie interpretat.

## 20. Proprietăți utile pentru verificare

Adunarea și înmulțirea sunt comutative: `a+b=b+a` și `a·b=b·a`. Sunt și asociative: `(a+b)+c=a+(b+c)` și `(a·b)·c=a·(b·c)`. Aceste proprietăți permit regruparea operațiilor.

Scăderea și împărțirea nu sunt comutative: `a-b` nu este, în general, egal cu `b-a`, iar `a:b` nu este egal cu `b:a`. De asemenea, nu ai voie să regrupezi arbitrar termenii într-o scădere sau într-o împărțire.

Distributivitatea este esențială: `a(b+c)=ab+ac` și `a(b-c)=ab-ac`. De exemplu, `7·98=7(100-2)=700-14=686`. Verificarea inversă se poate face prin `686:7=98`.

## 21. Date inutile și date lipsă

Într-o problemă de examen pot apărea informații care nu sunt necesare pentru întrebarea pusă. Nu trebuie să folosești fiecare număr în orice calcul. Citește exact cerința. Dacă se cere numărul total de obiecte, o informație despre culoarea lor poate fi irelevantă.

În schimb, dacă pentru calcul lipsește o dimensiune, caută o relație ascunsă în text. „Lungimea este cu 5 mai mare decât lățimea” înseamnă `L=l+5`. „De trei ori mai multe” înseamnă `3x`, iar „cu trei mai multe” înseamnă `x+3`; cele două formulări nu sunt echivalente.

## 22. Model de rezolvare completă

Un depozit primește 12 cutii cu câte 24 de caiete. În prima zi distribuie 85 de caiete, iar în a doua zi distribuie cu 2 mai puține decât în prima zi. Câte caiete rămân?

Numărul inițial este `12·24=288`. În a doua zi se distribuie `85-2=83` caiete. Numărul rămas este `288-85-83=120` caiete.

Rezolvarea trebuie verificată: numărul distribuit este `85+83=168`, iar `288-168=120`. Rezultatul este întreg, pozitiv și mai mic decât numărul inițial, deci este compatibil cu situația.

La orice exercițiu cu numere naturale, citește integral cerința, subliniază datele și unitățile, notează întrebarea, alege operațiile, estimează rezultatul, efectuează calculul în scris, verifică și formulează răspunsul complet. Această rutină devine rapid automată și reduce greșelile de neatenție.

