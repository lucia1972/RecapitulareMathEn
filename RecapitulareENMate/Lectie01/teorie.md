# Lecția 01 — Numere reale și calcul numeric

## Ce vei putea face după această lecție

La finalul lecției vei putea să:

- identifici mulțimea numerică din care face parte un număr;
- compari numere pozitive și negative;
- calculezi expresii respectând ordinea corectă a operațiilor;
- operezi cu fracții și numere zecimale;
- interpretezi procente simple;
- verifici dacă un rezultat este rezonabil.

Aceste deprinderi apar în aproape toate tipurile de exerciții de examen. Un elev poate cunoaște formula potrivită și totuși să piardă puncte din cauza unui calcul numeric greșit. De aceea, calculul trebuie făcut organizat, nu „din ochi”.

## 1. Mulțimi de numere

### 1.1 Numere naturale

Numerele naturale sunt numerele folosite la numărare:

`0, 1, 2, 3, 4, ...`.

În unele manuale, mulțimea numerelor naturale fără zero este notată separat. În probleme, verifică dacă enunțul spune explicit „număr natural nenul”.

### 1.2 Numere întregi

Mulțimea numerelor întregi conține numerele naturale, opusele lor și zero:

`..., -3, -2, -1, 0, 1, 2, 3, ...`.

Opusul lui `7` este `-7`, iar opusul lui `-7` este `7`. Numărul `0` este propriul său opus.

Pe axa numerelor, numărul aflat mai la dreapta este mai mare. Prin urmare, `-2>-5`, chiar dacă `2<5`. Pentru numere negative, cel cu modulul mai mic este mai mare.

### 1.3 Numere raționale

Un număr rațional poate fi scris sub forma `a/b`, unde `a` și `b` sunt întregi, iar `b≠0`.

Exemple:

- `3 = 3/1`;
- `-2,5 = -25/10 = -5/2`;
- `0,333... = 1/3`.

O fracție nu are sens dacă numitorul este zero. Expresia `5/0` nu este definită.

### 1.4 Numere iraționale și reale

Numerele iraționale, precum `√2` sau `π`, nu pot fi scrise ca raport de două numere întregi. Împreună cu numerele raționale formează mulțimea numerelor reale.

În calculele de examen, este important să păstrezi forma exactă atunci când este posibil. De exemplu, `√2` este mai exact decât aproximarea `1,41`.

## 2. Modulul și distanța față de zero

Modulul unui număr este distanța lui față de zero pe axă:

`|5|=5` și `|-5|=5`.

Modulul este întotdeauna nenegativ. De aceea:

- `|x|=a`, cu `a>0`, are soluțiile `x=a` sau `x=-a`;
- `|x|=0` are soluția `x=0`;
- `|x|=a` nu are soluții reale dacă `a<0`.

Exemplu:

`|x-3|=5` înseamnă că numărul `x` se află la distanța 5 de 3. Prin urmare, `x-3=5` sau `x-3=-5`, deci `x=8` sau `x=-2`.

## 3. Reguli pentru semne

### 3.1 Adunarea numerelor întregi

Dacă numerele au același semn, aduni modulele și păstrezi semnul:

`(-7)+(-4)=-(7+4)=-11`.

Dacă au semne diferite, scazi modulele și păstrezi semnul numărului cu modul mai mare:

`(-9)+5=-(9-5)=-4`.

### 3.2 Scăderea

Transformă scăderea în adunarea opusului:

`a-b=a+(-b)`.

Exemplu:

`7-(-3)=7+3=10`.

Greșeala frecventă este să se păstreze mecanic semnul minus din fața unui număr negativ.

### 3.3 Înmulțirea și împărțirea

Regula semnelor este:

| Operație | Rezultat |
|---|---|
| `(+):(+)` sau `(+)*(+)` | pozitiv |
| `(-):(-)` sau `(-)*(-)` | pozitiv |
| `(+):(-)` sau `(+)*(-)` | negativ |
| `(-):(+)` sau `(-)*(+)` | negativ |

Numărul de factori negativi este util: un număr par de semne minus produce rezultat pozitiv, iar un număr impar produce rezultat negativ.

## 4. Ordinea operațiilor

Într-o expresie numerică se lucrează în această ordine:

1. paranteze, din interior spre exterior;
2. puteri și radicali;
3. înmulțiri și împărțiri, de la stânga la dreapta;
4. adunări și scăderi, de la stânga la dreapta.

Înmulțirea și împărțirea au aceeași prioritate. Dacă apar una după alta, se efectuează în ordinea în care sunt scrise.

### Exemplu rezolvat 1

Calculează:

`24-3·[5+2²]:3`.

Mai întâi calculăm puterea:

`2²=4`.

Calculăm paranteza:

`[5+4]=9`.

Apoi înmulțirea și împărțirea:

`3·9:3=27:3=9`.

În final:

`24-9=15`.

### Exemplu rezolvat 2

Calculează:

`18:3·2`.

Împărțirea și înmulțirea se efectuează de la stânga la dreapta:

`18:3·2=6·2=12`.

Nu este corect să faci mai întâi `3·2` și apoi `18:6`.

## 5. Paranteze și semnul minus

Dacă o paranteză este precedată de plus, semnele rămân neschimbate:

`+(a-b)=a-b`.

Dacă este precedată de minus, toate semnele din paranteză se schimbă:

`-(a-b)=-a+b`.

Exemplu:

`7-[3-(2-5)] = 7-[3-(-3)] = 7-6=1`.

## 6. Fracții

### 6.1 Simplificarea

Împărțim numărătorul și numitorul la același divizor nenul:

`18/24=3/4`.

O fracție este ireductibilă atunci când numărătorul și numitorul nu mai au divizori comuni mai mari decât 1.

### 6.2 Adunarea și scăderea

Fracțiile cu același numitor se adună sau se scad la numărător:

`3/7-1/7=2/7`.

Pentru numitori diferiți, se determină un numitor comun:

`2/3+5/6=4/6+5/6=9/6=3/2`.

Nu se adună numitorii. Regula `a/b+c/d=(a+c)/(b+d)` este falsă.

### 6.3 Înmulțirea

`a/b·c/d=ac/bd`.

Simplificarea în cruce reduce calculele:

`6/35·14/9 = 2/5·2/3 = 4/15`.

### 6.4 Împărțirea

Împărțirea la o fracție nenulă se transformă în înmulțire cu inversa ei:

`3/4:6/5=3/4·5/6=5/8`.

## 7. Numere zecimale și procente

Un număr cu două zecimale poate fi scris peste 100:

`0,37=37/100`.

Procentul este o fracție cu numitorul 100:

`37%=37/100=0,37`.

Pentru a calcula `p%` din `A`, folosim:

`p% din A = p/100·A`.

Exemplu:

`18% din 250 = 18/100·250=45`.

O creștere cu 20% înseamnă factorul `1,20`, iar o reducere cu 20% înseamnă factorul `0,80`.

## 8. Estimarea rezultatului

Înainte de calcule, estimează ordinul de mărime. Dacă împarți 198 la 4, rezultatul trebuie să fie aproape de 50, nu de 5 sau 500.

Verificări utile:

1. **semnul** — produsul a două numere negative trebuie să fie pozitiv;
2. **ordinul de mărime** — `3/4` trebuie să fie sub 1;
3. **operația inversă** — după `x+7=19`, verifici `19-7=12`;
4. **înlocuirea** — introdu rezultatul în expresia inițială.

## 9. Greșeli tipice la examen

1. efectuarea adunării înaintea înmulțirii;
2. tratarea lui `-3²` ca pe `(-3)²`;
3. adunarea numitorilor fracțiilor;
4. uitarea schimbării semnelor după minusul din fața parantezei;
5. rotunjirea prea devreme a unui rezultat;
6. scrierea rezultatului fără pași, ceea ce face dificilă identificarea erorii;
7. neglijarea unităților în probleme.

## 10. Rezumat de reținut

- Numărul din dreapta pe axă este mai mare.
- Modulul este distanța față de zero.
- Puterile și parantezele se rezolvă înaintea operațiilor de același nivel.
- La fracții, adunarea cere numitor comun, iar împărțirea folosește inversa.
- Un procent este o parte din 100.
- Orice rezultat important trebuie verificat.

## Autoevaluare

Fără să consulți teoria, explică în cuvintele tale:

1. de ce `-2>-5`;
2. de ce `18:3·2=12`;
3. de ce `1/2+1/3` nu este `2/5`;
4. care este diferența dintre o reducere cu 20% și scăderea a 20 de lei.


