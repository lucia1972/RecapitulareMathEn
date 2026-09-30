# Lecția 21 — Relații metrice și trigonometrie

## Locul lecției în program

Într-un triunghi dreptunghic, laturile și înălțimea pe ipotenuză sunt legate prin relații precise. Trigonometria permite exprimarea raporturilor dintre laturi folosind unghiuri. Aceste instrumente apar în probleme cu înălțimi, distanțe, rampe, umbre și construcții geometrice.

## Competențe urmărite

Vei putea:

- să identifici proiecțiile catetelor pe ipotenuză;
- să folosești teoremele metrice;
- să aplici sinusul, cosinusul și tangenta;
- să identifici cateta opusă și cateta alăturată;
- să folosești valorile unghiurilor uzuale;
- să alegi raportul trigonometric potrivit;
- să interpretezi rezultatul geometric.

## 1. Configurația metrică

Consideră triunghiul dreptunghic `ABC`, cu unghiul drept în A. `BC` este ipotenuza. Dacă `AD` este înălțimea dusă pe ipotenuză, atunci `D∈BC`, iar ipotenuza este împărțită în segmentele `BD=m` și `DC=n`.

Notăm `BC=a`, `AB=c`, `AC=b`, `AD=h`.

## 2. Teoremele catetei

Pătratul unei catete este egal cu produsul dintre ipotenuză și proiecția acelei catete pe ipotenuză:

`AB²=BC·BD`,

`AC²=BC·DC`.

În notația prescurtată:

`c²=a·m`, `b²=a·n`.

## 3. Teorema înălțimii

Pătratul înălțimii pe ipotenuză este egal cu produsul proiecțiilor catetelor:

`AD²=BD·DC`.

Deci `h=√(mn)`.

## 4. Legătura cu Pitagora

Proiecțiile satisfac `BC=BD+DC`, iar teoremele metrice pot fi demonstrate folosind triunghiuri asemenea. Teorema lui Pitagora rămâne valabilă:

`AB²+AC²=BC²`.

## 5. Exemplu metric

Dacă `BD=9 cm` și `DC=16 cm`, atunci `BC=25 cm`. Înălțimea este `AD=√(9·16)=12 cm`. Catetele sunt:

`AB=√(25·9)=15 cm`, `AC=√(25·16)=20 cm`.

Se obține tripletul 15,20,25.

## 6. Sinusul

Într-un triunghi dreptunghic, pentru un unghi ascuțit `A`:

`sin A=cateta opusă / ipotenuză`.

Dacă față de A cateta opusă este 6, iar ipotenuza 10, `sin A=6/10=3/5`.

## 7. Cosinusul

`cos A=cateta alăturată / ipotenuză`.

Pentru cateta alăturată 8 și ipotenuza 10, `cos A=8/10=4/5`.

## 8. Tangenta

`tg A=cateta opusă / cateta alăturată`.

Pentru cateta opusă 6 și cateta alăturată 8, `tg A=6/8=3/4`.

Relația dintre funcții este:

`tg A=sin A/cos A`, când `cos A≠0`.

## 9. Alegerea raportului

Identifică unghiul înaintea laturilor:

- latura din fața unghiului → opusă;
- latura care formează unghiul, dar nu este ipotenuza → alăturată;
- latura opusă unghiului drept → ipotenuză.

Apoi alege funcția care conține laturile cunoscute și necunoscute.

## 10. Valori uzuale

Pentru 30°:

`sin30°=1/2`, `cos30°=√3/2`, `tg30°=√3/3`.

Pentru 45°:

`sin45°=cos45°=√2/2`, `tg45°=1`.

Pentru 60°:

`sin60°=√3/2`, `cos60°=1/2`, `tg60°=√3`.

## 11. Probleme cu înălțimi și umbre

Dacă un obiect formează cu solul un unghi de 30° și distanța orizontală este 10 m, înălțimea poate fi calculată cu `tg30°=h/10`.

În problemele cu umbre, triunghiurile formate sunt de obicei asemenea; trigonometria și asemănarea oferă rezultate echivalente.

## 12. Greșeli tipice

- alegerea greșită a laturii opuse;
- folosirea tangentei când este necesar sinusul;
- confundarea înălțimii cu ipotenuza;
- folosirea teoremelor metrice într-o configurație care nu este dreptunghică;
- rotunjirea prematură a radicalilor.

## 13. Rezumat

- `h²=mn` pentru înălțimea pe ipotenuză.
- `catetă²=ipotenuză·proiecție`.
- `sin=opusă/hipotenuză`.
- `cos=alăturată/hipotenuză`.
- `tg=opusă/alăturată`.
- Identifică unghiul și laturile înainte de formulă.

## Test de înțelegere

1. Dacă proiecțiile sunt 9 și 16, determină înălțimea.
2. Pentru cateta opusă 5 și ipotenuza 13, calculează sinusul.
3. Pentru cateta alăturată 12 și ipotenuza 13, calculează cosinusul.
4. Pentru catetele 6 și 8, calculează tangenta unghiului opus catetei 6.
5. Ce funcție folosești dacă știi cateta opusă și alăturată?

## 14. Proiecțiile în triunghiul dreptunghic

Fie un triunghi dreptunghic cu catetele a și b, ipotenuza c și înălțimea h dusă pe ipotenuză. Înălțimea împarte ipotenuza în proiecțiile p și q, astfel încât `p+q=c`.

Relațiile metrice sunt:

- `a²=c·p`;
- `b²=c·q`;
- `h²=p·q`;
- `a·b=c·h`.

Aceste formule se folosesc numai în configurația corectă: p este proiecția catetei a, iar q proiecția catetei b.

## 15. Demonstrarea relațiilor metrice

Triunghiurile mici formate de înălțimea pe ipotenuză sunt asemenea triunghiului inițial și între ele. Din proporțiile laturilor se obțin relațiile de mai sus.

De exemplu, din asemănarea triunghiului mare cu triunghiul mic care conține cateta a rezultă `a/c=p/a`, deci `a²=c·p`. Din asemănarea celor două triunghiuri mici rezultă `h/p=q/h`, deci `h²=pq`.

## 16. Calculul proiecțiilor

Dacă `c=25` și `a=15`, atunci `p=a²/c=225/25=9`. Cealaltă proiecție este `q=c-p=16`, iar cateta b este `√(25·16)=20`. Relația lui Pitagora confirmă `15²+20²=25²`.

Dacă se cunosc proiecțiile 9 și 16, ipotenuza este 25, catetele sunt `√(25·9)=15` și `√(25·16)=20`, iar înălțimea este `√(9·16)=12`.

## 17. Funcțiile trigonometrice

Într-un triunghi dreptunghic, pentru un unghi ascuțit α:

- `sin α = cateta opusă / ipotenuză`;
- `cos α = cateta alăturată / ipotenuză`;
- `tg α = cateta opusă / cateta alăturată`.

Cateta alăturată este cateta care formează unghiul α, iar cateta opusă nu are punct comun cu vârful unghiului. Ipotenuza este mereu opusă unghiului drept.

## 18. Valorile unghiurilor uzuale

Pentru 30°, 45° și 60°:

| Unghi | `sin` | `cos` | `tg` |
|---|---:|---:|---:|
| 30° | `1/2` | `√3/2` | `√3/3` |
| 45° | `√2/2` | `√2/2` | `1` |
| 60° | `√3/2` | `1/2` | `√3` |

Valorile se pot deduce din triunghiul echilateral și pătratul cu diagonala, nu trebuie privite ca formule fără explicație.

## 19. Alegerea funcției

Dacă știi cateta opusă și ipotenuza, folosești sinusul. Dacă știi cateta alăturată și ipotenuza, folosești cosinusul. Dacă știi cele două catete, folosești tangenta.

Pentru a afla o latură, transformă formula. Dacă `sin α=3/5` și ipotenuza este 20 cm, cateta opusă este `20·3/5=12 cm`.

## 20. Relația dintre trigonometrie și Pitagora

Dacă `sin α=3/5`, într-un triunghi dreptunghic poți considera cateta opusă 3k și ipotenuza 5k. Prin Pitagora, cateta alăturată este 4k, deci `cos α=4/5` și `tg α=3/4`.

Relația `sin²α+cos²α=1` se poate verifica din Pitagora, împărțind `a²+b²=c²` la `c²`.

## 21. Probleme de înălțime și distanță

Dacă o scară de 5 m face un unghi de 60° cu solul, înălțimea atinsă este `5·sin60°=5√3/2 m`, iar distanța de la perete este `5·cos60°=2,5 m`.

În problemele cu umbre, tangenta unghiului solar este raportul dintre înălțime și lungimea umbrei. Un obiect de 4 m cu umbra de 6 m are `tg α=4/6=2/3`.

## 22. Unghiuri de elevare și coborâre

Unghiul de elevare este unghiul dintre orizontală și direcția privirii în sus. Unghiul de coborâre este definit analog în jos. Construiește un triunghi dreptunghic cu distanța orizontală, diferența de înălțime și segmentul vizual.

Nu confunda distanța vizuală cu înălțimea sau proiecția ei pe orizontală.

## 23. Greșeli frecvente

1. Alegerea greșită a catetei opuse sau alăturate.
2. Folosirea tangentei când una dintre laturi este ipotenuza.
3. Confundarea înălțimii pe ipotenuză cu o catetă.
4. Aplicarea relațiilor metrice într-un triunghi care nu este dreptunghic.
5. Folosirea unei valori trigonometrice pentru unghiul complementar.

## 24. Model de sinteză

Într-un triunghi dreptunghic cu ipotenuza 13 și cateta opusă unghiului α egală cu 5, `sin α=5/13`. Cealaltă catetă este 12, deci `cos α=12/13`, iar `tg α=5/12`. Înălțimea pe ipotenuză este `5·12/13=60/13`.

## 25. Strategie finală

Desenează triunghiul, marchează unghiul și identifică laturile, apoi alege relația potrivită. Pentru proiecții, notează ipotenuza și segmentele în care este împărțită. Păstrează exact radicalii și fracțiile, iar aproximațiile folosește-le numai la final.

## 26. Legătura dintre toate metodele

Într-un triunghi dreptunghic, Pitagora determină laturi când sunt cunoscute două dintre ele, trigonometria determină laturi sau unghiuri când apare un unghi ascuțit, iar relațiile metrice folosesc înălțimea și proiecțiile pe ipotenuză. Alege metoda după date, nu după formula pe care o recunoști prima.

Dacă ai catetele 6 și 8, Pitagora dă ipotenuza 10; pentru unghiul opus catetei 6, `sin α=6/10=3/5`, iar `tg α=6/8=3/4`. Aceeași configurație poate fi descrisă prin mai multe relații care trebuie să fie compatibile.

## 27. Controlul aproximărilor

Dacă `sin α=1/2`, unghiul uzual este 30°. Dacă obții pentru un sinus o valoare mai mare decât 1 sau mai mică decât 0, calculul este greșit. Pentru lungimi, verifică dacă rezultatul este mai mic decât ipotenuza și dacă aria obținută este pozitivă.

Într-o problemă practică, rotunjește numai la final și păstrează unitatea. O valoare aproximativă trebuie să aibă precizia indicată de cerință.

## 28. Model complet cu relații metrice și trigonometrie

Un triunghi dreptunghic are ipotenuza 25 cm și cateta 15 cm. Cealaltă catetă este 20 cm. Proiecția catetei de 15 cm pe ipotenuză este `15²/25=9`, iar proiecția celeilalte catete este 16. Înălțimea pe ipotenuză este `√(9·16)=12 cm`. Pentru unghiul opus catetei 15, `sin α=15/25=3/5`, `cos α=20/25=4/5` și `tg α=3/4`.

Observă că toate metodele produc valori compatibile: `15·20=25·12`, iar `9+16=25`.

Pentru redactare, scrie separat calculul laturilor, calculul proiecțiilor, calculul funcțiilor trigonometrice și verificarea finală. Astfel, fiecare relație poate fi urmărită și nu amesteci formule care se referă la segmente diferite.

## 29. Condiții de aplicare

Relațiile metrice se aplică numai după construirea înălțimii pe ipotenuză. Funcțiile trigonometrice se aplică într-un triunghi dreptunghic sau după identificarea unei secțiuni dreptunghice. Dacă unghiul este măsurat față de verticală și nu față de orizontală, catetele opusă și alăturată se schimbă; desenează unghiul înainte de alegerea funcției.

Rezultatul final trebuie să precizeze dacă este o lungime, o măsură de unghi, o arie sau un raport fără unitate. Nu amesteca valorile exacte cu aproximările în același pas.

În redactare, formula precede înlocuirea numerică, iar verificarea urmează rezultatului. Această ordine face clară metoda folosită și permite corectarea unei eventuale erori fără refacerea întregii probleme.

Scrie unitatea de măsură la fiecare rezultat relevant.

Încheie cu o concluzie explicită.

Precizează dacă rezultatul este exact sau aproximativ și păstrează fracția ori radicalul când acestea sunt forma cerută.

În acest fel, rezolvarea rămâne completă și verificabilă.

Nu omite etapa de control final.

Formula aleasă trebuie să fie justificată de configurația geometrică.

Aceasta este etapa esențială.

În orice exercițiu.

Cu justificare.

Și verificare.

Finală.

Completă.

Și clară.

## 30. Determinarea laturilor prin trigonometrie

Dacă un triunghi dreptunghic are ipotenuza 10 cm și un unghi de 30°, cateta opusă este `10·sin30°=5 cm`, iar cateta alăturată este `10·cos30°=5√3 cm`. Verificarea prin Pitagora dă `25+75=100`.

Dacă se cunosc o catetă și un unghi, poți afla ipotenuza împărțind la sinus sau cosinus. Dacă `a=6` este cateta opusă unghiului de 30°, `sin30°=6/c`, deci `c=12`.

## 31. Unghiuri complementare

Într-un triunghi dreptunghic, unghiurile ascuțite sunt complementare. Dacă unul este α, celălalt este `90°-α`. De aici rezultă `sin α=cos(90°-α)` și `cos α=sin(90°-α)`.

Dacă `tg α=3/4`, pentru unghiul complementar tangenta este `4/3`, deoarece catetele se schimbă între rolul opus și alăturat.

## 32. Înălțimi în corpuri și pante

O rampă de lungime 10 m urcă 2 m. Dacă unghiul cu orizontala este α, `sin α=2/10=1/5`, iar proiecția orizontală este `10·cos α`. În problemele cu pante, raportul dintre creșterea verticală și distanța orizontală este tangenta unghiului.

Pentru o pantă exprimată procentual, o înclinare de 12% înseamnă `tg α=0,12`, nu `sin α=0,12`.

## 33. Relații metrice și aria triunghiului

În triunghiul dreptunghic, aria poate fi scrisă în trei moduri: `ab/2`, `ch/2` sau `pq/2`? Ultima formă apare deoarece catetele sunt legate de proiecții, dar formula uzuală cu baza ipotenuza și înălțimea este `A=c·h/2`.

Din `ab=ch`, rezultă că `ab/2=ch/2`. Dacă p=9 și q=16, `c=25`, `h=12`, iar aria este `25·12/2=150 cm²`, egală cu `9·20/2` pentru catetele 15 și 20.

## 34. Construcția triunghiului din proiecții

Dacă proiecțiile pe ipotenuză sunt 4 și 9, atunci `c=13`, `h=√36=6`, catetele sunt `√(13·4)=2√13` și `√(13·9)=3√13`. Pitagora verifică: `52+117=169`.

Acest tip de problemă cere atenție la unități și la asocierea dintre catetă și proiecția ei.

## 35. Probleme cu unghiuri de vedere

De la o distanță orizontală de 20 m, vârful unui copac este văzut sub un unghi de 30°. Dacă observatorul se află la nivelul bazei, înălțimea este `20·tg30°=20√3/3 m`.

Dacă observatorul are înălțimea ochilor de 1,6 m, diferența verticală până la vârf este calculată prin tangentă, iar la final adaugi 1,6 m pentru înălțimea totală.

## 36. Greșeli frecvente

1. Alegerea funcției fără identificarea laturilor față de unghi.
2. Folosirea unei valori pentru unghiul complementar fără schimbarea funcției.
3. Confundarea înălțimii verticale cu lungimea segmentului oblic.
4. Aplicarea relațiilor metrice fără înălțimea pe ipotenuză.
5. Aproximarea prea devreme a radicalilor și fracțiilor.

## 37. Model integrat

Un triunghi dreptunghic are ipotenuza 10 cm și un unghi de 60°. Cateta opusă este `10·√3/2=5√3`, cateta alăturată este 5, aria este `5·5√3/2=25√3/2`, iar înălțimea pe ipotenuză este `ab/c=25√3/10=5√3/2`.

## 38. Strategie finală

Marchează unghiul, identifică laturile, alege sinusul, cosinusul sau tangenta, apoi verifică prin Pitagora sau printr-o estimare. Pentru relații metrice, notează ipotenuza, proiecțiile și înălțimea înainte de aplicarea formulelor.

