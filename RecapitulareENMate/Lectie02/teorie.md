# Lecția 02 — Divizibilitate și numere prime

## Locul lecției în program

Divizibilitatea este una dintre bazele aritmeticii. Ea explică împărțirea exactă, numerele pare și impare, criteriile de divizibilitate, descompunerea în factori primi și modul în care determinăm cel mai mare divizor comun sau cel mai mic multiplu comun. Aceste noțiuni apar atât în exerciții directe, cât și în probleme cu grupări, repartizări, perioade și fracții.

## Competențe urmărite

La finalul lecției vei putea:

- să explici relația de divizibilitate;
- să identifici divizorii și multiplii unui număr;
- să folosești criteriile de divizibilitate;
- să recunoști numerele prime și compuse;
- să descompui un număr în factori primi;
- să calculezi c.m.m.d.c. și c.m.m.m.c.;
- să rezolvi probleme cu împărțiri exacte și grupări egale;
- să formulezi justificări aritmetice clare.

## 1. Divizor și multiplu

Spunem că numărul natural `a` îl divide pe `b` dacă împărțirea lui `b` la `a` este exactă. Notăm `a|b` și citim „a divide b”. Formal, există un număr natural `k` astfel încât:

`b=a·k`.

De exemplu, `6|42`, deoarece `42=6·7`. În schimb, `6` nu divide `43`, deoarece împărțirea are rest 1.

Dacă `a|b`, atunci `a` este divizor al lui `b`, iar `b` este multiplu al lui `a`. Pentru numărul 24, divizorii sunt `1,2,3,4,6,8,12,24`, iar multiplii sunt `0,24,48,72,...`.

Observă diferența: un număr nenul are un număr finit de divizori, dar are infinit de mulți multipli.

Orice număr natural nenul este divizibil cu 1 și cu el însuși. Numărul 0 este multiplu al oricărui număr natural nenul, deoarece `0=a·0`.

## 2. Proprietăți ale divizibilității

Pentru numere naturale:

1. Dacă `a|b` și `b|c`, atunci `a|c`.
2. Dacă `a|b` și `a|c`, atunci `a|(b+c)` și `a|(b-c)` când diferența este naturală.
3. Dacă `a|b`, atunci `a|b·c` pentru orice `c` natural.
4. Dacă `a|b` și `a|c`, atunci `a` divide orice combinație de forma `b·m+c·n`, când rezultatul este natural.

Exemplu: deoarece `3|18` și `3|24`, rezultă `3|(18+24)`, adică `3|42`.

Aceste proprietăți sunt utile la demonstrații. Nu este nevoie să efectuezi întotdeauna împărțirea; poți scrie numerele sub forma unor produse.

## 3. Numere pare și impare

Un număr natural este **par** dacă este divizibil cu 2. El are forma `2k`, pentru un număr natural `k`. Un număr impar are forma `2k+1`.

Ultima cifră a unui număr par este una dintre `0,2,4,6,8`. Ultima cifră a unui număr impar este una dintre `1,3,5,7,9`.

Reguli utile:

- suma a două numere pare este pară;
- suma a două numere impare este pară;
- suma unui număr par cu unul impar este impară;
- produsul a două numere pare este par;
- produsul unui număr par cu orice număr natural este par;
- produsul a două numere impare este impar.

Exemplu: `2k+1` și `2m+1` au suma `2k+2m+2=2(k+m+1)`, deci suma este pară.

## 4. Criterii de divizibilitate

### Divizibilitatea cu 2

Un număr este divizibil cu 2 dacă ultima cifră este pară. `738` este divizibil cu 2, iar `739` nu este.

### Divizibilitatea cu 5

Ultima cifră trebuie să fie 0 sau 5. `1 245` este divizibil cu 5, dar `1 243` nu este.

### Divizibilitatea cu 10

Ultima cifră trebuie să fie 0. Orice număr divizibil cu 10 este divizibil și cu 2 și cu 5.

### Divizibilitatea cu 3

Un număr este divizibil cu 3 dacă suma cifrelor sale este divizibilă cu 3. Pentru `7 254`, suma cifrelor este `7+2+5+4=18`, deci numărul este divizibil cu 3.

### Divizibilitatea cu 9

Un număr este divizibil cu 9 dacă suma cifrelor este divizibilă cu 9. Pentru `45 783`, suma este `4+5+7+8+3=27`, deci numărul este divizibil cu 9.

### Divizibilitatea cu 4

Un număr este divizibil cu 4 dacă numărul format din ultimele două cifre este divizibil cu 4. `1 316` este divizibil cu 4 deoarece `16` este divizibil cu 4.

### Divizibilitatea cu 8

Un număr este divizibil cu 8 dacă numărul format din ultimele trei cifre este divizibil cu 8. `5 624` este divizibil cu 8 deoarece `624:8=78`.

### Divizibilitatea cu 6

Un număr este divizibil cu 6 dacă este divizibil simultan cu 2 și cu 3. Pentru `2 154`, ultima cifră este pară, iar suma cifrelor este 12; deci numărul este divizibil cu 6.

### Divizibilitatea cu 12

Un număr este divizibil cu 12 dacă este divizibil simultan cu 3 și cu 4. Verificăm ambele condiții, nu doar una.

## 5. Numere prime și numere compuse

Un număr prim este un număr natural mai mare decât 1 care are exact doi divizori: 1 și numărul însuși. Primele numere prime sunt:

`2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,...`

Numărul 2 este singurul număr prim par. Orice alt număr par mai mare decât 2 este compus.

Un număr compus are cel puțin un divizor diferit de 1 și de el însuși. De exemplu, 15 este compus deoarece `15=3·5`.

Numărul 1 nu este nici prim, nici compus: are un singur divizor pozitiv.

Pentru a verifica dacă un număr este prim, este suficient să verifici divizibilitatea cu numere prime până la rădăcina pătrată a numărului. La nivel de gimnaziu, pentru numere mici este suficient să testezi divizorii evidenți.

## 6. Descompunerea în factori primi

Descompunerea în factori primi scrie un număr ca produs de numere prime.

Exemplu:

`360=36·10=2²·3²·2·5=2³·3²·5`.

Metoda împărțirilor succesive:

1. împarte numărul la cel mai mic număr prim posibil;
2. repetă cât timp împărțirea este exactă;
3. continuă cu următorul număr prim;
4. oprește-te când câtul final este 1.

Exemplu pentru 84:

`84=2·42=2²·21=2²·3·7`.

Descompunerea în factori primi este unică, în afara ordinii factorilor.

## 7. Cel mai mare divizor comun

c.m.m.d.c. al unor numere este cel mai mare număr natural care divide toate numerele.

Pentru `24` și `36`, divizorii comuni sunt `1,2,3,4,6,12`, deci `c.m.m.d.c.(24,36)=12`.

### Metoda factorilor primi

`24=2³·3`, `36=2²·3²`.

Luăm factorii comuni cu exponentul cel mai mic: `2²·3=12`.

### Metoda algoritmului lui Euclid

`36=24·1+12`, iar `24=12·2+0`. Ultimul rest nenul este 12.

## 8. Cel mai mic multiplu comun

c.m.m.m.c. este cel mai mic număr natural nenul care este multiplu al tuturor numerelor date.

Pentru 12 și 18:

`12=2²·3`, `18=2·3²`.

Luăm fiecare factor prim cu exponentul cel mai mare: `c.m.m.m.c.=2²·3²=36`.

## 9. Relația dintre c.m.m.d.c. și c.m.m.m.c.

Pentru două numere naturale nenule `a` și `b`:

`c.m.m.d.c.(a,b)·c.m.m.m.c.(a,b)=a·b`.

Această relație este utilă pentru verificare.

## 10. Probleme cu divizibilitate

### Grupări egale

Dacă 48 de obiecte trebuie împărțite în grupe identice, numărul de obiecte dintr-o grupă trebuie să fie divizor al lui 48.

### Repetarea unor evenimente

Dacă un eveniment apare la 6 zile, iar altul la 8 zile, ele se vor întâlni din nou după `c.m.m.m.c.(6,8)=24` zile.

### Împărțire fără rest

Dacă vrem să împărțim mai multe tipuri de obiecte în cel mai mare număr de pachete identice, folosim c.m.m.d.c. al cantităților.

## 11. Greșeli tipice

- a considera că 1 este număr prim;
- verificarea greșită a criteriului pentru 4 sau 8;
- confundarea c.m.m.d.c. cu c.m.m.m.c.;
- alegerea exponentului greșit la descompunerea în factori primi;
- folosirea c.m.m.d.c. la probleme de sincronizare;
- uitarea condiției de rest mai mic decât împărțitorul.

## 12. Rezumat

- `a|b` înseamnă că `b=a·k` pentru un `k` natural.
- Numerele prime au exact doi divizori pozitivi.
- Numărul 1 nu este prim.
- Criteriile de divizibilitate permit verificări rapide.
- La c.m.m.d.c. luăm factorii comuni cu exponentul minim.
- La c.m.m.m.c. luăm toți factorii cu exponentul maxim.
- Problemele de grupare folosesc de obicei c.m.m.d.c., iar cele de sincronizare c.m.m.m.c.

## Test de înțelegere

1. De ce 2 este singurul număr prim par?
2. De ce un număr divizibil cu 12 trebuie să fie divizibil și cu 3 și cu 4?
3. Descompune 420 în factori primi.
4. Calculează c.m.m.d.c. și c.m.m.m.c. pentru 18 și 30.
5. Explică ce metodă ai folosi pentru a forma cel mai mare număr de pachete identice din 24 de caiete și 36 de pixuri.

## 13. Strategii de lucru pentru divizibilitate

În problemele de examen, nu este suficient să aplici criterii izolate; trebuie să alegi criteriul care scurtează cel mai mult rezolvarea. Dacă un număr este divizibil cu 12, verifică divizibilitatea cu 3 și cu 4, deoarece `12=3·4`, iar 3 și 4 sunt prime între ele. Dacă este divizibil cu 18, verifică 2 și 9. Dacă este divizibil cu 30, verifică 3 și 10.

Un număr care se termină în 0 este divizibil cu 2, 5 și 10. Dacă suma cifrelor este divizibilă cu 9, atunci numărul este divizibil și cu 3. Combinația criteriilor te ajută să răspunzi rapid la întrebări de forma „care dintre numere este divizibil cu...?”.

Pentru a demonstra că un număr nu este divizibil, este suficient să găsești criteriul încălcat. Numărul 472 nu este divizibil cu 3 deoarece `4+7+2=13`, iar 13 nu este multiplu de 3. Nu este necesar să efectuezi împărțirea.

## 14. Descompunerea în factori primi pas cu pas

Descompunerea în factori primi trebuie continuată până când toți factorii rămași sunt primi. De exemplu:

`360 = 36·10 = 2²·3²·2·5 = 2³·3²·5`.

O metodă practică este împărțirea repetată la cel mai mic prim posibil: `360:2=180`, `180:2=90`, `90:2=45`, `45:3=15`, `15:3=5`, `5:5=1`. Prin urmare, `360=2³·3²·5`.

Această formă arată imediat divizorii și ajută la calculul celui mai mare divizor comun. Pentru `360` și `504`, avem `360=2³·3²·5`, `504=2³·3²·7`; partea comună este `2³·3²=72`, deci `cmmdc(360,504)=72`.

## 15. Numărul divizorilor

Dacă `n=p^a·q^b`, unde `p` și `q` sunt primi distincți, numărul divizorilor pozitivi este `(a+1)(b+1)`. De exemplu, `72=2³·3²`, deci are `(3+1)(2+1)=12` divizori pozitivi.

Motivul este că un divizor poate conține factorul 2 la puterile `0,1,2,3`, adică patru alegeri, și factorul 3 la puterile `0,1,2`, adică trei alegeri. Fiecare alegere pentru 2 se poate combina cu fiecare alegere pentru 3.

La nivel de examen, este suficient să aplici corect ideea. Nu confunda numărul divizorilor cu numărul factorilor din descompunerea primă: `72` are doi factori primi distincți, dar 12 divizori pozitivi.

## 16. Cmmdc și cmmmc în probleme practice

Folosește `cmmdc` atunci când împarți obiecte în grupe identice, cât mai mari, fără rest. De exemplu, 48 de mere și 60 de pere se împart în pachete identice. Numărul maxim de pachete este `cmmdc(48,60)=12`.

Folosește `cmmmc` atunci când două evenimente se repetă și vrei primul moment în care se sincronizează. Dacă un semnal apare la fiecare 12 secunde, iar altul la fiecare 18 secunde, se vor aprinde împreună din nou după `cmmmc(12,18)=36` secunde.

O greșeală frecventă este alegerea lui `cmmmc` doar pentru că problema conține cuvântul „împreună”. Întreabă-te dacă grupezi sau sincronizezi. Gruparea indică de regulă `cmmdc`, iar repetarea indică `cmmmc`.

## 17. Ecuații cu divizibilitate

Dacă `n` este divizibil cu 6, scrie `n=6k`, unde `k` este număr natural. Această reprezentare transformă o condiție de divizibilitate într-o formă algebrică. Dacă se mai spune că `n` este între 40 și 70, atunci cauți valorile `6k` din interval: 42, 48, 54, 60 și 66.

Dacă un număr lasă restul 2 la împărțirea la 5, îl poți scrie `n=5k+2`. Pentru valori între 20 și 40, obții 22, 27, 32 și 37. Forma `n=bq+r` este deosebit de utilă când se cer numere cu un anumit rest.

## 18. Controlul soluției

După ce ai obținut factorizarea, înmulțește factorii pentru a verifica numărul inițial. După ce ai calculat `cmmdc`, verifică dacă rezultatul divide ambele numere și dacă orice divizor comun mai mare este imposibil. După ce ai calculat `cmmmc`, verifică dacă este multiplu al ambelor numere și dacă este cel mai mic multiplu pozitiv.

Un răspuns la o problemă de divizibilitate trebuie să respecte domeniul cerut. Dacă se caută divizori naturali, nu include divizori negativi. Dacă se cer numere prime, 1 nu este prim. Dacă se cer resturi, acestea trebuie să fie strict mai mici decât împărțitorul.

## 19. Exercițiu de sinteză

Găsește toate numerele naturale de forma `4a2b` divizibile cu 12. Pentru divizibilitatea cu 4, ultimele două cifre `2b` trebuie să formeze un multiplu de 4. Posibilitățile sunt 20, 24, 28, deci `b` este 0, 4 sau 8. Pentru divizibilitatea cu 3, suma cifrelor `4+a+2+b = 6+a+b` trebuie să fie multiplu de 3. Analizezi fiecare valoare a lui `b` și alegi cifrele `a` care satisfac condiția. Problema ilustrează ideea centrală: combină criteriile, nu încerca împărțirea tuturor numerelor posibile.

## 20. Reprezentarea divizorilor

După descompunerea în factori primi, poți construi sistematic toți divizorii. Pentru `60=2²·3·5`, alegi pentru factorul 2 exponentul 0, 1 sau 2, iar pentru 3 și 5 exponentul 0 sau 1. Obții `1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60`. Divizorii apar în perechi cu produsul 60: `1·60`, `2·30`, `3·20`, `4·15`, `5·12`, `6·10`. Această verificare te ajută să nu omiți sau să repeți divizori.

Pentru un număr pătrat perfect, perechea din mijloc coincide: la `36`, perechile sunt `1·36`, `2·18`, `3·12`, `4·9`, `6·6`. De aceea numărul divizorilor unui pătrat perfect este impar, iar pentru celelalte numere este par.

În redactare, folosește notația `d|n` numai după ce ai precizat că există un cât natural. Scrierea `12|48` înseamnă `48=12·4`; nu înseamnă că 12 este împărțit la 48. Această ordine a simbolului este importantă.

Pentru numere mari, criteriile de divizibilitate sunt mai eficiente decât împărțirea în scris și reduc riscul de eroare.

Scrie întotdeauna concluzia în forma cerută de enunț.

Verifică inclusiv domeniul numerelor și condiția restului.

