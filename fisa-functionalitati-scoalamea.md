# Fișă de funcționalități — Școala Mea

Sursă: [scoalamea.eu/feature](https://scoalamea.eu/feature/), paginile fiecărui modul, 27 noiembrie 2026.

21 de module, în 6 grupuri, plus kitul de bază. Fiecare rând e o funcție pe care o poți bifa.

- **Iau** — o construiesc
- **Nu** — nu îmi trebuie
- **Plus** — o vreau, dar altfel decât la ei (scrii pe rând cum)

Prețurile de pe site sunt ale lor (de la 56,96 € + TVA/lună pentru kit + un modul de curs). Nu intră în decizia de produs.

---

## Kitul de bază

Inclus la orice platformă a lor: editor, temă, comentarii, trimitere de e-mail, găzduire (până la 5.000 de conturi și 100 de cursanți conectați simultan).

- [ ] Editor de conținut
- [ ] Temă vizuală a platformei
- [ ] Comentarii la lecție (răspunsul rămâne sub lecție; următorul cursant îl găsește)
- [ ] Toate discuțiile unui curs, într-o listă, fiecare cu link spre lecție
- [ ] E-mailuri trimise de platformă
- [ ] Aplicație iOS și Android: același cont, același progres pe telefon și pe laptop
- [ ] Notificări pe e-mail la lecție nouă (modul separat, Notifications). Mai multe lecții deblocate odată = un singur e-mail. Cursantul se poate dezabona

---

## 1. Livrezi cursul

### Cursuri

Curs gata făcut, pe capitole și lecții. Cursantul vede unde a rămas.

- [ ] Capitole, lecții, task-uri și materiale într-o singură listă, în ordinea de parcurs
- [ ] Reordonare prin drag and drop
- [ ] La ștergerea unui capitol, platforma arată ce lecții dispar odată cu el
- [ ] Tip de lecție ales pe lecție: video, text, lecție pe părți, lecție din blocuri
- [ ] Task în lecție: exercițiu, pas de aplicat sau quiz extern (exemplul lor: Wordwall)
- [ ] Lecția se bifează doar când toate task-urile sunt gata
- [ ] Task-ul îl bifează cursantul. Nu e o lucrare trimisă. Verificarea lucrării e în Coaching
- [ ] Progres salvat. La revenire continuă de unde a rămas, inclusiv după două săptămâni
- [ ] Pagina „cursurile mele”: noi, începute, finalizate, buton „Continuă cursul”
- [ ] Curs marcat „În curând”, cu un text scurt, vizibil lângă celelalte cursuri
- [ ] Panou pe curs: câți au început, câți au terminat, progres mediu, activi în ultimele 30 de zile
- [ ] Câți cursanți au terminat fiecare capitol
- [ ] Duplicare de curs: alegi ce copiezi (lecții, materiale, task-uri) și setezi doar deblocarea
- [ ] Pagina de lecție: procent parcurs, listă cu bife, task-uri lângă conținut, a doua bară cu task-uri făcute din total, butoane înainte și înapoi
- [ ] Întrebări sub lecție, nu pe WhatsApp. Răspunsul rămâne acolo

### Learning Journey

Cursul nu e gata de la început. Publici pașii în ritmul grupei. Pașii apar ca un feed, cel mai nou sus.

- [ ] Pas scris ca articol: text, video, fișiere, task-uri dedesubt
- [ ] Pasul stă ciornă până îl publici
- [ ] Reordonare prin drag and drop
- [ ] La publicare, pasul e primul în listă. Cu Notifications, pleacă e-mailul către grupă
- [ ] Progres pe cursant: neînceput, început, terminat
- [ ] Task-uri obligatorii și opționale. Lecția se închide la cele obligatorii
- [ ] Fiecare task pe pagina lui. Poate fi quiz, joc extern, video YouTube sau Loom
- [ ] Panou de activități: task-uri rămase, alte lecții deschise, ce urmează
- [ ] Buton „Continuă” spre primul pas neterminat, chiar dacă în feed lecțiile noi sunt sus
- [ ] Căutare în parcurs
- [ ] Comentarii sub pas, reacții, abonare la răspuns
- [ ] Fișiere atașate, cu număr de descărcări
- [ ] Parcurs lung împărțit pe module
- [ ] Aceeași lecție în mai multe grupe. O modifici o dată, se schimbă la toate
- [ ] Toate parcursurile unui cursant pe o pagină
- [ ] Raport: la ce lecție e fiecare, ultima activitate, cine nu mai lucrează, câți au terminat task-urile pasului

### Deblocare progresivă

Stă în Courses. Trei reguli, pe capitol și pe lecție. Lecția se deschide doar când s-au deblocat și capitolul, și ea.

- [ ] Imediat
- [ ] La o dată și o oră fixe, pentru toată grupa
- [ ] La N zile după ce cursantul a deschis cursul prima dată. Fiecare are calendarul lui
- [ ] Finalizare secvențială: lecția următoare se deschide după ce o termină pe cea dinainte. Pe lecția blocată vede numele lecției care o ține
- [ ] Testele, chestionarele și temele cu mentor intră în regula de ordine
- [ ] Autorul trece liber prin tot cursul
- [ ] În cuprins se vede data și ora deblocării
- [ ] Lecția se deschide și dacă pagina e deja deschisă, fără reîncărcare
- [ ] Cine se înscrie după o dată fixă găsește lecțiile deja deschise
- [ ] Poți combina ziua cu ordinea: se deschide când au venit amândouă
- [ ] E-mail când se deschide ceva nou, dacă notificările sunt pornite

### Tipuri de conținut

Intrat în Courses. Playerul video e modul separat.

- [ ] Tipul se alege pe lecție, nu pe tot cursul: text, video, pe părți, din blocuri
- [ ] În constructor se vede tipul lângă fiecare lecție
- [ ] Text: titluri, liste, linkuri
- [ ] Imagini în text
- [ ] Audio în text, cu player. Nu există tip de lecție doar audio
- [ ] Video din player, cu text sub el
- [ ] Lecție pe taburi: fiecare parte e text sau video
- [ ] Lecție din blocuri: coloane, imagini, butoane, tabele, stilurile site-ului
- [ ] Fișiere de descărcat la final (PDF, Word, Excel, arhivă) și linkuri externe, ca butoane
- [ ] Fișierele nu sunt condiție de finalizare
- [ ] Lecție video fără task-uri: se bifează când se termină videoclipul
- [ ] Celelalte, fără task-uri: cursantul o marchează finalizată

### Player video

- [ ] Surse: încărcare directă, Vimeo, YouTube, Bunny CDN, flux HLS
- [ ] Încărcare în bucăți, până la 1 GB. Dacă se întrerupe, reia ce lipsește
- [ ] Videoclipurile stau separat de biblioteca de imagini și documente
- [ ] Același videoclip în mai multe lecții, pași, capsule sau pagini
- [ ] Capitole: minut + etichetă. Sub player. Capitolul curent se marchează singur
- [ ] Reluare de la minutul fiecărui cursant
- [ ] Viteză 0,5x–2x, la fișierele proprii și HLS
- [ ] Poți ascunde bara de progres și saltul, și poți opri viteza mărită. Doar la încărcare directă și HLS. La YouTube, Vimeo și Bunny rămân controalele lor
- [ ] Raport: spectatori unici, redări, timp mediu, rată de finalizare, câți au trecut de 25%, 50%, 75%
- [ ] Grafic zilnic
- [ ] Pe cursant: prima redare, cât a parcurs, dacă a terminat, ultima activitate. Filtru terminat / în curs
- [ ] Activitate pe ultimele 48 de ore: pornit, oprit, derulat
- [ ] Tabel care compară videoclipurile
- [ ] Coloană în report card: terminat, în curs, nepornit
- [ ] Puncte de gamification la videoclip dus până la capăt
- [ ] Pentru YouTube și Vimeo, abandonul pe sferturi cere durata scrisă de tine o dată

### Cărți digitale

Cartea se citește în platformă. Nu se urcă PDF-ul.

- [ ] Capitole și pagini, reordonate prin tragere
- [ ] Pagină scrisă în editorul de blocuri: text, imagini, linkuri
- [ ] Duplicare de carte cu capitole și pagini. Progresul cititorilor nu se copiază
- [ ] Deblocare pe capitol: de la început, la o dată, sau la N zile după ce a început cartea
- [ ] Capitol închis: data în cuprins. Pe pagină, mesaj și buton înapoi
- [ ] Pagină următoare fără reîncărcarea site-ului. Pe laptop, săgețile tastaturii
- [ ] Cuprins: salt la pagină sau la un subtitlu din pagina curentă
- [ ] Mod focus: dispare restul interfeței
- [ ] Preferințe salvate pe dispozitiv: mărimea textului, fontul, lățimea coloanei
- [ ] Pe telefon: glisare sau atingere pe margine
- [ ] Pagina se bifează la finalul ei sau după câteva secunde. O pagină scurtă, aproape imediat
- [ ] Fără cont: vede primele paragrafe (implicit 4, tu alegi câte) și un mesaj de înscriere
- [ ] Nu există fișier de descărcat. Nu poate da cartea mai departe ca PDF
- [ ] Pagină de carte: copertă, descriere, cuprins cu pagini bifate, pagini citite din total
- [ ] Lista de cărți, cu procentul fiecărui cursant
- [ ] Mesaj scris de tine la ultima pagină
- [ ] Panou: ansamblu, capitole, pagini, cititori. Începuți, terminați, parcurs mediu
- [ ] Cititori filtrați: ultimele 7 zile, 7–30, peste 30
- [ ] Cartea e coloană în report card, cu detaliu pe capitole: început, terminat, neatins
- [ ] În aplicație, la Bibliotecă

### Capsule de conținut

Bonusuri, înregistrări, ghiduri. Nu intră în progresul cursului.

- [ ] Capsulă separată de curs: text, video, fișiere cu titlu și iconiță, imagine, rezumat
- [ ] Colecții. De la două în sus, pornesc închise. Căutare deasupra
- [ ] De la trei subtitluri, cuprins lângă text. Pe telefon, panou
- [ ] Comentarii sub capsulă
- [ ] Legată de unul sau mai multe planuri. Cine nu are planul o vede închisă
- [ ] Fără restricție, o capsulă publicată e deschisă tuturor
- [ ] Video din player, cu capitole, reluare și rapoarte. Poate da puncte
- [ ] Fișiere prin link, deschise într-o filă nouă
- [ ] În aplicație, la Bibliotecă

### Linkuri și resurse

Fișierul rămâne în Drive, Dropbox, YouTube sau oriunde. Platforma dă un link scurt.

- [ ] Link scurt pe domeniul tău, cu final ales de tine (`/r/ghid`)
- [ ] Grupuri, cu prefix în adresă
- [ ] Copiere dintr-un clic și cod QR
- [ ] Același link în oricâte lecții. Clicurile se adună
- [ ] Schimbi destinația, adresa scurtă rămâne. Linkurile vechi și QR-urile tipărite duc la fișierul nou
- [ ] Panou: cele mai accesate, pagina de unde a venit clicul, calculator sau telefon, perioadă
- [ ] Accesările roboților stau deoparte, până le ceri
- [ ] Import din Pretty Links, cu adresa, destinația și setările
- [ ] Parametri UTM trecuți mai departe, dacă pornești opțiunea
- [ ] Linkul nu protejează fișierul. Cine are acces se stabilește acolo unde stă fișierul

---

## 2. Verifici ce au înțeles și îi ghidezi

### Bancă de întrebări

Doar variante. Nu există răspuns scris și nu există cronometru. Timpul îl poți scrie pe ecranul de start, dar nu se numără și testul nu se trimite singur.

- [ ] Întrebări în bancă, refolosite în teste. Corectezi în bancă, se schimbă în toate testele. Scorul deja trimis rămâne
- [ ] Un răspuns corect sau mai multe. La mai multe: ajunge unul, sau trebuie toate și niciunul greșit
- [ ] Încercări limitate sau nelimitate
- [ ] Ordinea întrebărilor și a răspunsurilor amestecată
- [ ] Prag de promovare, sau doar punctaj, fără trecut / picat
- [ ] Întrebări pe o pagină sau pe mai multe
- [ ] Explicație la răspuns corect și la răspuns greșit, văzută la rezultat
- [ ] La final: scorul și câte a nimerit. Tu alegi dacă vede și întrebările cu răspunsurile corecte
- [ ] Mesaj diferit: după trecut / picat, după scor (de exemplu sub 50%), sau după o bifă anume
- [ ] Testul e unitate în capitol sau task pe un pas. Progresul îl bifezi la trimitere sau doar la promovare
- [ ] Încercările se numără separat în fiecare loc unde ai pus testul
- [ ] Dacă închide pagina, încercarea rămâne deschisă. La reîncărcare în aceeași filă, răspunsurile bifate rămân
- [ ] Panou: încercări, cursanți, scor mediu, câți au trecut, acuratețe pe întrebare, ce variantă au ales
- [ ] Filtru de cursanți după test
- [ ] Trimiterea unui test poate porni o automatizare
- [ ] Tastatură și cititoare de ecran
- [ ] În aplicație, din capitol sau din pas, cu rezultatul pe loc

### Chestionare

Feedback, nu examen. Răspunsul e legat de cont. Nu e anonim.

- [ ] Tipuri: un răspuns, mai multe, text scurt, text lung, text formatat, nume, e-mail
- [ ] Întrebări condiționate: o întrebare apare doar pentru cine a răspuns într-un fel. Dacă nu i-a apărut, nu i se cere și nu se salvează
- [ ] Secțiuni cu titlu și descriere
- [ ] Nume și e-mail completate din profil, modificabile
- [ ] Pus în curs, pe un pas, sau pe o pagină publică pentru cursanți autentificați
- [ ] Public: o dată, sau din nou după o pauză de la 5 minute la o săptămână
- [ ] Invitație pe e-mail, cu textul tău. Vezi invitați, răspunsuri, cine n-a completat. Cine a răspuns nu mai primește. Poți invita separat pe cine a venit mai târziu
- [ ] Automatizare: la înregistrare, la acces pe un plan, la final de curs, imediat sau după o pauză. Reinvitare după 30 sau 90 de zile, dacă vrei
- [ ] Profiluri calculate din variante (de exemplu Începător, Intermediar, Avansat). Întrebările de vârstă sau oraș le lași în afara calculului. Regulă care alege profilul direct
- [ ] Cursantul vede profilul și mesajul scris de tine. Își poate reciti răspunsurile, dacă lași opțiunea
- [ ] E-mail de mulțumire cu răspunsurile, poate fi oprit
- [ ] Copie a răspunsurilor pe e-mailul echipei
- [ ] Pe întrebare: câți au ales fiecare variantă, primele și ultimele texte libere, textul întreg cu numele
- [ ] În fișa cursantului: toate chestionarele, răspunsurile, profilul
- [ ] Notă a ta pe un răspuns
- [ ] Filtru de cursanți după profil
- [ ] Închidere: cine n-a răspuns nu mai poate. Îl vede la expirate. Răspunsurile rămân
- [ ] Export Excel: e-mail, nume, stare, dată, nota ta, răspunsul la fiecare întrebare
- [ ] Export și import al chestionarului, cu întrebări și reguli de profil, între platforme Școala Mea
- [ ] Legătură opțională cu MailerLite: respondenții intră în grupuri

### Coaching

Temă trimisă de cursant, verificată de om. Statusuri pe care le poți redenumi.

- [ ] Câmpuri în aceeași temă: text, fișier, da/nu
- [ ] Fișier: formate alese de tine, implicit 10 MB, câte un fișier pe câmp
- [ ] Statusuri: neîncepută, în lucru, de verificat, de refăcut, aprobată
- [ ] Lista cursantului: întâi de refăcut, apoi de făcut
- [ ] Chat pe temă. Tot istoricul rămâne acolo
- [ ] „Cere modificări”, cu text formatat, liste și linkuri spre lecții. Cursantul o retrimite pe aceeași pagină
- [ ] Tema se bifează în curs doar după aprobare
- [ ] În Courses, cu parcurgere în ordine, lecția următoare stă blocată până aprobi tema
- [ ] Termen maxim de răspuns. Peste termen, tema se marchează întârziată
- [ ] Listă unică: teme de verificat și întrebări fără răspuns
- [ ] Prima pagină: pe curs și pe parcurs, câte teme așteaptă și câte sunt întârziate. Temele fără mentor, separat
- [ ] Temă „În curând”, apare la data stabilită
- [ ] Când o primește: odată cu lecția, când deschide lecția, sau când i-o atribui tu
- [ ] E-mail la temă nouă, la modificări cerute, la aprobare, la mesaj nou. Textele se pot schimba
- [ ] Mentori: cursantul are mentorul lui, temele ajung la el. Mentorul nu vede administrarea
- [ ] Administratorul vede stadiul, feedbackul și discuțiile. Poate muta temele altui mentor
- [ ] Mentorii pot lua singuri temele fără mentor, dacă nu oprești asta
- [ ] Căutare și sortare ca să muți mai multe teme odată
- [ ] În aplicație: trimite tema, citește feedbackul, vede aprobarea

### Sesiuni de mentorat

Întâlnire live, nu temă. Zoom e opțional.

- [ ] Sesiune unică: dată, oră, durată, număr de locuri
- [ ] Sesiune recurentă: ziua și ora, setate o dată. Ediția următoare apare după ce trece cea curentă
- [ ] Pauză până la o dată. Edițiile nu se creează. Înscrișii rămân. Seria pornește singură
- [ ] Înscriere din pagină. La serie, o înscriere acoperă edițiile următoare
- [ ] Îi înscrii tu pe toți cei cu acces, dintr-un clic, sau din CSV / Excel
- [ ] Din e-mail poate opri notificările sau ieși din serie
- [ ] Confirmare cu N zile înainte (exemplul lor: două): „Voi participa” / „Nu pot”. Locul îl iau cei care confirmă, în ordine. Cine nu răspunde nu ține locul
- [ ] La sesiune unică, înscrierea din pagină confirmă direct
- [ ] Poate confirma până la 15 minute după start. Apoi trece la „Refuz automat”
- [ ] Listă de așteptare, cu poziția vizibilă și e-mail când urcă
- [ ] Loc eliberat: urcă primul de pe listă, singur
- [ ] Locuri în plus doar pentru anumite planuri
- [ ] Zoom conectat o dată: întâlnirea se creează, fiecare confirmat e înregistrat, linkul e al lui. La renunțare, linkul nu mai merge
- [ ] Fără Zoom: scrii tu linkul (Meet sau sală). Îl văd doar cei confirmați
- [ ] Setări Zoom pentru toate: sală de așteptare, microfoane închise, înregistrare automată
- [ ] Reamintiri cu o zi și cu 4 ore înainte, doar celor confirmați. Orele se schimbă din setări
- [ ] Linkul: în e-mailul de confirmare, în reamintiri, pe pagina sesiunii. Lista de așteptare nu vede linkul
- [ ] Pagină: azi, următoarele, arhiva. Fiecare vede doar sesiunile la care are acces
- [ ] Panou: locuri, listă de așteptare, prezenți, minute stat, e-mailuri primite, schimbări de stare
- [ ] Export CSV al înscrierilor
- [ ] Prezența pornește o automatizare. Un pas poate cere, de exemplu, trei sesiuni
- [ ] Sesiuni doar pentru un plan

---

## 3. Ții cursanții aproape

### Comunitate

Comentariile la lecție sunt în kit. Restul se plătește separat.

- [ ] Comentariu sub lecție sau sub pas. Răspunsurile apar fără reîncărcare
- [ ] Fir de răspunsuri, până la patru niveluri (în Lounge)
- [ ] Atașament la comentariu: captură, PDF, audio
- [ ] Mențiune cu @. Cel menționat primește e-mail cu link
- [ ] Urmărire a discuției: răspunsurile noi într-un singur e-mail, cu dezabonare
- [ ] Discuția unei lecții o văd doar cei care pot deschide lecția. Lecție încă blocată = discuție invizibilă
- [ ] Editare și ștergere de sub lecție
- [ ] Mut: el își vede comentariile, ceilalți nu
- [ ] Spam-ul așteaptă aprobarea ta
- [ ] Raportare. Tu primești e-mail la primul raport. Blocarea autorului
- [ ] Statistici: discuții fără răspuns, cât așteaptă primul răspuns, ce reacții se folosesc
- [ ] Reacții: pleci de la cinci emoji, le schimbi, le redenumești, adaugi
- [ ] Lounge: topicuri create de tine (bun venit, rezultate). Cele cu activitate nouă urcă
- [ ] Forum: categorii, subiecte deschise de cursanți, aprobate de tine. Cine are încredere postează fără aprobare
- [ ] În aplicație: comentarii la lecție și subiecte de forum

### Gamification

Modulul de bază e punctele. Insignele, titlurile și profilul sunt separate.

- [ ] Categorii de puncte, cu nume și imagine (de exemplu Practică, Comunicare)
- [ ] Puncte pe activitate. Pagina spune 16 tipuri. Exemplele date: lecție, capitol, task, video, curs întreg, comentariu, forum, autentificare zilnică
- [ ] O activitate dă puncte o singură dată. Reluarea nu mai contează. Logarea, o dată pe zi
- [ ] Puncte retroactive, o dată, pentru lecții, capitole, task-uri și cursuri deja terminate în Courses
- [ ] Cod de puncte bonus, cu limită de cursanți și de folosiri
- [ ] Puncte date tuturor deodată
- [ ] Cursantul vede cât valorează fiecare activitate
- [ ] Clasament: săptămână, lună, general. Loc, nivel, puncte, cursuri terminate, săgeată față de începutul săptămânii
- [ ] Insignă pe niveluri, legate de o categorie de puncte (bronz la 200, argint la 600)
- [ ] Insignă pe un curs: la jumătate, la final
- [ ] Titlu: total de puncte, activitate repetată, sau zile la rând
- [ ] Profil: nivel, cât mai are până la următorul, insigne, titluri. Dacă are mai multe titluri, îl alege pe cel de lângă nume
- [ ] Cursantul alege ce văd ceilalți: nivel, insigne, nume, e-mail, dată de naștere
- [ ] Același cont pe telefon și pe laptop

---

## 4. Vinzi accesul

### Memberships

Planul decide ce vede cursantul și până când.

- [ ] Plan: un curs, un pachet, lunar, anual, gratuit de probă
- [ ] Plată: Stripe (banii în contul tău), facturare Enlivy (card sau transfer), WooCommerce, sau acces dat de mână
- [ ] O variantă de preț poate fi la vânzare doar câteva zile
- [ ] Lunar și anual unul lângă altul, cu prețul pe lună și cu cât economisește varianta lungă. Cea mai avantajoasă e prima
- [ ] Un curs în oricâte planuri. Din editorul cursului bifezi planurile
- [ ] Curs protejat: îl arăți celor fără acces, ca ofertă, sau îl ascunzi
- [ ] După plată: pagină cu ce include (cursuri, cărți, capsule), până când, cu căutare
- [ ] Stări: activ, în pauză, expirat, anulat. La expirare sau anulare, accesul se închide singur
- [ ] Acces dat de mână, anulat, sau cu data de final mutată
- [ ] Plan dat mai multor cursanți deodată, de exemplu tuturor celor care au deja alt plan
- [ ] Cod de acces, cu aceeași pagină de conținut
- [ ] În contul Stripe al cursantului: carduri salvate, istoric, anulare
- [ ] Cine a cumpărat deja își păstrează accesul dacă schimbi sistemul de plată
- [ ] Corporate: firma cumpără un număr de locuri. Administratorul invită pe e-mail, unul sau o listă. Retrage un loc și îl dă altcuiva. La sfârșitul planului se închide accesul tuturor invitaților

### Integrare WooCommerce

- [ ] Modul în magazin: adresa platformei și o parolă de aplicație. Pagina spune dacă legătura merge
- [ ] Mai multe magazine
- [ ] Produs legat de unul sau mai multe planuri
- [ ] Durată: pe viață, N zile de la plată, sau cât e activ abonamentul
- [ ] Variante de produs (3 luni, 12 luni) cu setări separate
- [ ] Cont creat singur, acces deschis, e-mail de bun venit. Poți opri e-mailul la cont nou și la curs nou
- [ ] Rambursare integrală: închide planurile deschise de comanda aceea
- [ ] Reînnoire plătită: prelungește până la următoarea plată. Anulare sau expirare: închide
- [ ] Sincronizare a clienților vechi, de la o dată. Accesul se calculează de la comanda inițială, cu zilele rămase
- [ ] Jurnal: cursant, planuri, răspunsul platformei
- [ ] Dacă platforma nu răspunde, retrimitere automată, de până la cinci ori, la intervale tot mai mari
- [ ] Poți retrimite o comandă anume, după ce vezi ce ar trimite

---

## 5. Înțelegi ce se întâmplă

### Analitice

În kitul de bază.

- [ ] Report card: un rând pe cursant, celule verzi, galbene, roșii
- [ ] Filtre: rol, data înregistrării, nume. Cu Memberships, și plan. Mai multe condiții în același set, sau seturi alternative
- [ ] Coloane aduse de module: progres într-un curs, puncte, carte, videoclip, plan. La puncte alegi tipul și pragurile de galben și verde
- [ ] Sortare după progres sau după ultima activitate
- [ ] Raport salvat, cu nume, redeschis la zi
- [ ] Click pe cursant: la un curs, fiecare capitol e verde (terminat), galben (început) sau roșu (nedeschis)
- [ ] Statistici pe modul și pe perioadă. La cursuri: începute, terminate, activi, activitate în timp, câți termină fiecare capitol

### User KPIs

Scoruri definite de tine, din ce face omul. Nu un scor gata făcut.

- [ ] Mai multe scoruri, fiecare cu unitate: puncte, procent, număr sau scor
- [ ] Două praguri: „pe drum” și „pregătit”. Culoare pe om. Poți seta că mai puțin e mai bine
- [ ] Cinci calcule: ultima valoare, total, maxim, minim, medie
- [ ] Acțiuni: curs, capitol, lecție, sarcină, pas de parcurs, video, chestionar, sesiune (oricare sau de un tip), test de arhetip, carte, plan
- [ ] Acțiunea poate fi pe un element anume (cursul X, planul Premium), nu pe orice
- [ ] Valoare negativă
- [ ] Grup de reguli: două căi spre același lucru (a venit la webinar sau a văzut înregistrarea) cresc scorul o singură dată
- [ ] La un chestionar cu punctaj, fiecare rezultat are valoarea lui
- [ ] Card pe utilizator: valoare, stare față de praguri, sursă, data ultimei schimbări, istoric
- [ ] Valoare pusă de mână, cu notă. Istoricul ține minte cine a pus-o
- [ ] Calcul retroactiv. O acțiune deja numărată nu se adaugă a doua oară
- [ ] Scorul e coloană în lista de utilizatori și în report card. Poți sorta după el

### Archetypes

Test de personalitate, nu test de lecție.

- [ ] Model de plecare: Big Five (120 de întrebări, 5 trăsături) sau stil MBTI (70 de întrebări, 16 tipuri), în română, sau pagină goală
- [ ] Patru părți: trăsături, întrebări, arhetipuri, reguli
- [ ] O variantă adaugă sau scade puncte la mai multe trăsături deodată
- [ ] Scală de acord sau două variante
- [ ] Regulă: o trăsătură pe primul loc, procent între două valori, sau o trăsătură peste alta. Arhetipul se dă când toate condițiile sunt îndeplinite
- [ ] Rezultat: un arhetip, sau bare pentru tot profilul, cu textul tău
- [ ] Fără cont până la final. Dacă închide pagina, reia din același browser
- [ ] Ca să vadă tot rezultatul, lasă e-mailul și confirmă din link, fără parolă, și de pe alt dispozitiv
- [ ] Poate relua testul
- [ ] Panou: câte teste s-au terminat, arhetipul cel mai frecvent, distribuția
- [ ] Cine are cont și s-a oprit la jumătate: vezi cât a parcurs
- [ ] Lista testelor terminate, export Excel
- [ ] Rezultatul stă în fișa cursantului și poate intra într-un KPI

---

## 6. Platforma e a ta

### Branding

- [ ] Culoare principală, secundară, culori de butoane, cu nuanțe mai închise. Se aplică la butoane, linkuri, accente
- [ ] Logo în meniu, pe pagina de autentificare și în e-mail. În e-mail poate fi o variantă separată
- [ ] Domeniu propriu sau subdomeniu. Site-ul existent rămâne unde e
- [ ] Pagină de autentificare: logo, fundal, titlu, text, linkuri în subsol, adresă aleasă de tine
- [ ] Expeditor: nume și adresă pe domeniul tău, prin furnizorul tău de e-mail, nu printr-un server comun
- [ ] Textele de sistem se rescriu: schimbare de parolă, sesiune expirată, introducere de cod, ștergere de cont

### Autentificare magică

În kit. Fără parolă.

- [ ] Înscriere: e-mail, prenume, nume, telefon dacă îl ceri, bife pe politici
- [ ] E-mail de confirmare. Dacă deschide linkul pe același dispozitiv, pagina continuă singură
- [ ] Anti-spam Cloudflare, opțional
- [ ] La intrare: link sau cod de 6 cifre, ambele în același e-mail. Expiră. La fiecare intrare sunt noi
- [ ] După autentificare ajunge pe pagina aleasă de tine
- [ ] Butoanele din e-mailurile platformei autentifică direct. Dacă în browser e alt cont, întreabă înainte să schimbe
- [ ] Notă în e-mail: să nu trimită linkul mai departe
- [ ] Textul e-mailului se poate schimba

---

## Ce nu descrie Școala Mea

Astea sunt funcțiile din lecția pe care am discutat-o. La ei nu există. Dacă le vrei, sunt în plus, nu o bifă din lista de mai sus.

- [ ] Pagină de tablă (desen, formule, pagini) rulată fără unelte
- [ ] Stare pe pagină: întrebarea curentă, ce e înconjurat, ce grupuri sunt vizibile. O atingere schimbă starea, nu pagina
- [ ] Reacție diferită pe fiecare obiect atins, cu întrebarea următoare pe același desen
- [ ] Două căi rămase pe tablă în același timp, iar elevul alege între rezultate
- [ ] Exemplu pereche, cu indiciile stinse. Scena se închide doar dacă iese fără ajutor
- [ ] Jurnal pe decizie: ce a atins prima dată și dacă exemplul pereche a ieșit singur
- [ ] Răspuns numeric verificat, inclusiv cât și rest separat
- [ ] Cronometru de simulare care chiar oprește lucrarea

La ei, verificarea automată e un test cu variante. Răspunsul scris trece printr-un om, în Coaching. Task-ul din lecție îl bifează cursantul singur.
