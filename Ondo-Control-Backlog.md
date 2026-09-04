# ONDO CONTROL — Rückstand-Verzeichnis (Backlog)
**Nur offene Punkte. Gepflegt von Claude · Stand 4.9.2026, Fassung 77 · jede Idee mit Datum, Urheber und Status**
*Erledigtes, alte Fassungsnotizen und Prueflaeufe stehen in `BACKLOG-ARCHIV.md` — nur auf Zuruf zu lesen.*

## Regeln für dieses Dokument

1. **Abgrenzung (ChatGPT, 23.7.):** Architektur lebt ausschließlich in `Blueprint.md` und `Ondo-Core-Architektur.md`. Dieses Dokument enthält **nur Aufgaben, Ideen und deren Status** — keine Architekturregeln.
2. Claude schlägt Punkte von sich aus zum passenden Zeitpunkt vor. Ondo entscheidet, was und wann gebaut wird (Art. 8).
3. Nichts wird gelöscht. Abgelehnt und überholt bleiben sichtbar.
4. **Backlog-Pflege ist Code-Aufgabe (Ondo, 30.8.2026):** Code prüft und archiviert den Backlog künftig selbstständig, ohne Anstoss durch Chat — reines Verschieben eindeutig Erledigten nach `BACKLOG-ARCHIV.md`, nach denselben Kriterien wie bei der Archivierung vom 30.8.2026 (Fassung 61): Ein Punkt mit Status GEBAUT/GEKLÄRT/ENTSCHIEDEN/BEANTWORTET/GESCHLOSSEN zählt nur als erledigt, wenn im Punkt selbst **keine** Bewährungs-Einschränkung mehr steht ("Bewährung steht aus", "noch nicht bewährt" oder sinngemäss Gleiches) und er an keine noch offene Untersuchung gebunden bleibt — im Zweifel bleibt er stehen. Nichts wird gelöscht, keine inhaltliche Entscheidung über offene Punkte wird davon berührt — Art. 8 gilt für alles andere unverändert.

**Status-Werte:** `Idee` · `beschlossen` · `gebaut` · `bewährt` (im Alltag getestet) · `überholt` · `abgelehnt`

**Übergabe an die Prüfer — GEÄNDERT am 30.7.:** Der Eintrag vom 23.7. („Raw-Links funktionieren nur bei Claude, ChatGPT und Gemini brauchen Anhänge") ist **überholt**. GitHub Pages wandelt Markdown in HTML um; diese Adressform funktioniert bei ChatGPT:
`https://ondo-control.github.io/Ondo-Control/PROJEKT-STATUS.html` (entsprechend für Backlog, Blueprint, Ondo-Core-Architektur). Einzelheiten und Folgen stehen in `PROJEKT-STATUS.md`.

**Dateinamen von Berichten an die Prüfer (28.7., Ondo):** Beginnen mit Datum und Uhrzeit — `2026-07-31_1430_Ondo-Control_Thema.md`.

---

## ⚠ Was Fassung 77 ändert (4.9., Backlog-Punkt 70 gebaut — Filter im KI-Log, Punkt 41 umgeordnet)

**Anlass:** Auftrag Ondo — Backlog-Punkt 70 (Such- und Filterfunktion im KI-Log) umsetzen,
dazu reine Buchführung zu Punkt 41.

- **Backlog-Punkt 70 gebaut, `beta.html` v19.8.14:** Drei kombinierbare Filter (Datum
  von/bis, Wettbewerb-Teilstring case-insensitiv, Status aus fünf aus den tatsächlichen
  Codewerten abgeleiteten Optionen), rein im Browser, wirken nur auf die Anzeige. Volle
  Begründung, Codezitat der tatsächlichen `e.status`/`e.geparkt`/`e.parkGrund`-Werte und
  Verifikationsergebnis stehen als angehängter Block direkt bei Punkt 70 (nicht hier
  wiederholt — Punkt 45).
- **Buchführung Backlog-Punkt 41 (reine Einordnung, kein Bau):** Die Überschrift
  „🔴 Prio 1 — als Nächstes dran" ist entfernt — Punkt 41 war seit 30.8.2026 gebaut, ihr
  einziger Inhalt, die Einordnung war seither nicht mitgewandert. Punkt 41s Inhalt bleibt
  unverändert stehen, nur ohne diese Überschrift darüber.
- **`STAND.md`:** Zeile zu Punkt 41 aus der Tabelle „Entscheidungen, die bei Ondo liegen"
  entfernt (keine offene Entscheidung mehr) · neuer Eintrag `v19.8.14` unter „Versionen" ·
  Sprachschlüsselzahl von 241 auf 251 nachgeführt (10 neue Schlüssel, von `pruefe.py`
  Abschnitt 13 selbst nachgezählt).
- **Verifikation:** `node --check` bestanden · Trockentest: 19 neue Prüfungen an
  `kilogGefiltert()`, plus die bestehenden 57 (Punkt 68) und 19 (Punkt 69) erneut
  ausgeführt, alle weiterhin bestanden · `pruefe.py` ohne Argument — ALLES SAUBER.
- **Fassungszahl:** alle drei aktiven Dokumente auf 77 gehoben (Blueprint 0.76).
  `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue
  Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 76 ändert (4.9., Messstand nachgeführt — reine Dokumentation)

**Anlass:** Auftrag Ondo — Messstand in `STAND.md` mit den Zahlen vom 4.9.2026 nachführen.
Kein Codeaufwand, keine Backlog-Punkte betroffen.

- **`STAND.md`, Abschnitt „Aktueller Messstand" vollständig ersetzt** (Punkt 45 — ein Fakt,
  ein Ort, nicht daneben stehen lassen): Sonnet 468 bewertete Aussagen bei 3 % Abweichung
  und 54 % Trefferquote, Flash 465 bei 7 % und 50 %. Bestand unverändert 403
  Vorhersagen/6 Wetten — von Ondo selbst erklärt: die seither übernommenen Spiele waren
  bereits bestehende, offene Einträge, keine neuen. Gepaarter Vergleich jetzt 161 gepaarte
  Spiele (154 je Markt, dieselbe unerklärte Lücke wie zuvor, in anderer Grösse). KI-Trefferquote
  gesamt 52 % (486/933).
- **Erst angehalten, dann nachgeliefert (Arbeitsregel M):** Der erste Versuch, die vom
  Auftrag gelieferten Zahlen einzusetzen, liess `pruefe.py` FEHL melden — die
  Stufen-Verteilung je Gehirn fehlte, `pruefe.py` Abschnitt 8 verlangt sie mit einer Summe,
  die exakt die neue Kopfzahl ergibt. Nichts ausgeliefert, die Meldung im Wortlaut gezeigt,
  angehalten. Ondo hat die fehlenden Stufen nachgereicht (sein eigener Auslassungsfehler,
  nicht Claudes); beide Summen unabhängig nachgerechnet (Sonnet 78+295+61+32+0+2=468,
  Flash 74+212+147+25+5+2=465), erst danach eingesetzt.
- **Dabei zwei eigene Formulierungsfehler im ersten Versuch gefunden und behoben, ohne den
  Prüfer aufzuweichen (Fehlerart C6 vermieden):** Alte Vergleichszahlen als `(402/399)` bzw.
  „82 von 402" geschrieben — sieht für `pruefe.py`s Nenner-Heuristik wie eine neue,
  unpassende Bruchzahl aus. Umformuliert, nicht die Prüfung gelockert.
- **Neuer Befund, festgehalten:** Sonnet hat zum ersten Mal eine bewertete Aussage ab 80 %
  (zwei Aussagen, Stufe 90–99 %, beide eingetroffen) — löst die in mehreren vorigen
  Messständen stehende Aussage „Sonnet hat weiterhin KEINE bewertete Aussage ab 80 %" ab.
  Bei nur zwei Aussagen ausdrücklich **keine** Schlussfolgerung daraus gezogen (zu kleine
  Stichprobe).
- **`STAND.md`:** Fassungszahl allein geändert bei Datensicherung — Zeile zur letzten
  bestätigten Sicherung (4.9.2026, 09:33 Uhr) nachgeführt.
- **Verifikation:** `pruefe.py` ohne Argument — ALLES SAUBER. Kein Code betroffen, kein
  `node --check` nötig.
- **Fassungszahl:** alle drei aktiven Dokumente auf 76 gehoben (Blueprint 0.75).
  `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue
  Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 75 ändert (4.9., Backlog-Punkt 69 gebaut, Nachfrage beantwortet, zwei Idee-Punkte)

**Anlass:** Auftrag Ondo — Backlog-Punkt 69 umsetzen (`pruefListe`/`pruefBilanz` speichern),
dazu eine Nachfrage zur chronologischen Einsortierung und zwei neue Idee-Punkte, nicht gebaut.

- **Punkt 69 gebaut, `beta.html` v19.8.13.** `pruefListe`/`pruefBilanz` sind Teil von `state`,
  keine `seedV`-Migration nötig. `pruefStark` bewusst aussen vor (Ondos Vorgabe). Alle rund
  zehn Fundstellen umgestellt, erschöpfend geprüft. Zwei bisher fehlende `save()`-Aufrufe
  ergänzt (`pruefAnwenden()`s `bet`-Zweig, `pruefIgnorieren()` vollständig), dazu ein
  `save()` am Ende von `abschluss()` für die endgültige Bilanz. Der Reset am Rundenanfang
  bekommt bewusst **kein** eigenes `save()` — löst sich von selbst, siehe Punkt 69.
- **Nachfrage beantwortet, mit Zeilenzitat:** Ein übernommener Vorschlag braucht keine
  gesonderte chronologische Einsortierung — er wird nie aus `state.kiProtokoll` entfernt,
  nur an Ort und Stelle verändert. Einzelheiten bei Punkt 69.
- **Zwei neue Punkte, nur Idee, nicht gebaut:** **70** (Such- und Filterfunktion im KI-Log)
  und **71** (eigener Reiter für offene Spiele, Rest als Archiv — ausdrücklich mit eigenem
  Plan und eigener Freigabe, nicht neben Punkt 69 gebaut).
- **Verifikation:** `node --check` bestanden. Trockentest: 19 neue Prüfungen plus die
  bestehenden 57 aus Punkt 68 erneut bestanden (keine Regression), alle an den echten,
  aus `beta.html` herausgeschnittenen Funktionen. `pruefe.py`: ALLES SAUBER.
- **Keine neuen Sprachschlüssel** (241 unverändert). **Kein Schnitt in der Messreihe.**
- **Fassungszahl:** alle drei aktiven Dokumente auf 75 gehoben (Blueprint 0.74).
  `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue
  Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 74 ändert (3.9., Fund gemeldet und geprüft — `pruefListe` wird nie gespeichert, kein Bau)

**Anlass:** Chat 28 leitete Ondos Meldung weiter — nach einem Neuladen der App waren gefundene, noch nicht übernommene Schiedsrichter-Vorschläge verschwunden. Ausdrückliche Auflage: nur untersuchen und berichten, nichts an `beta.html` bauen.

- **Vermutung geprüft und bestätigt, mit Codezitat:** `pruefListe`/`pruefBilanz`/`pruefStark` sind `var`-Deklarationen ausserhalb von `state`; `save()` schreibt ausschliesslich `state` in `localStorage`. Ein Neuladen und ein zweiter Tastendruck lösen denselben, bereits seit der v19.8.9-Notiz dokumentierten Mechanismus aus — **neu ist nur das Gewicht des Verlusts** (seit v19.8.12 hängt an jedem Prüflauf ein bezahlter Sonnet-Lauf), nicht der Verlust selbst.
- **Nebenbefund geprüft:** `state.vorschlaege` ist nachweislich totes Feld (kein Zugriff ausserhalb der Initialisierung). Herkunft (vermutlich v18-„Value-Rechnung"-Rest) **nicht belegbar** — `beta.html` kam erst mit Fassung 35 (21.8.2026) in dieses Repo, frühere Geschichte fehlt. Als Vermutung gekennzeichnet, nicht als Befund.
- **Neuer Backlog-Punkt 69** mit vollständiger Kosten-/Komplexitätseinschätzung einer möglichen Absicherung angelegt — Status „Fund — Ondo vorzulegen, NICHT gebaut". **Kein Codeaufwand**, `beta.html` bleibt v19.8.12.
- **Regel-4-Prüfung durchgeführt (Backlog-Pflege ohne Chat-Anstoss):** Die seit Fassung 73 neu hinzugekommenen Punkte gegen die zwei Archivierungs-Kriterien geprüft. **Keiner qualifiziert:** Punkt 68 trägt wörtlich „Bewährung steht aus" · Punkt 0c ist nur teilweise gebaut, die ursprüngliche Idee bleibt ausdrücklich offen · Punkt 36 ist zwar in sich abgeschlossen, bleibt aber eng an die weiterhin ungeklärte elfte Fehlerart gebunden (dieselbe Behandlung wie bei Punkt 64) — im Zweifel stehen gelassen. **Kein Punkt archiviert.**
- **Grösse zur Kenntnis genommen, nicht behoben:** `Ondo-Control-Backlog.md` liegt bei rund 160.000 Zeichen, weiterhin über der 120.000-Zeichen-Grenze aus Punkt 65 — ein Abruf im Chat-Bereich bricht weiterhin vorzeitig ab. Ursache unverändert: viele abgeschlossene Punkte stehen mit voller Begründung im Haupttext, nicht die gestapelten Fassungsnotizen (die wurden mit Weg C schon einmal verschoben). Die Wahl zwischen den in Punkt 65 genannten Wegen bleibt Ondos Entscheidung.
- **Fassungszahl:** alle drei aktiven Dokumente auf 74 gehoben (Blueprint 0.73). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 73 ändert (3.9., Schiedsrichter robuster — Punkt 36 abgeschlossen, neuer Punkt 68, Zeitmessung)

**Anlass:** Ondos Auftrag vom 3.9.2026 in vier Teilen. Der Schiedsrichter entschied bis heute mit **einem** Lauf allein; ein Gedächtnis für frühere Läufe gibt es nicht (belegt: `pruefListe=[]` bei jedem Tastendruck). Gegen die Fehlerarten 7 bis 11 war nichts gebaut.

- **Teil 1 gebaut, `beta.html` v19.8.12 — Punkt 36 abgeschlossen.** Der **Schiedsrichter**-Auftragstext bekommt die Pflicht, das tatsächlich gespielte Format zu melden (Pflichtfeld `format`). Meldet **ein** Lauf ein Sonderformat, wird der Eintrag **sofort geparkt** — kein 90-Minuten-Wert wird erzwungen oder gerechnet, unabhängig von den anderen zwei Läufen. Neuer `parkGrund`-Wert `'sonderformat'`, sichtbar in Karte und Log-Text-Export. `stufeHolen()` bleibt unverändert; dies ergänzt die dortige Erkennung und fängt auf, was durchrutscht (Leeds-Leipzig).
- **Teil 2 gebaut — neuer Punkt 68, Mehrfachlauf-Absicherung.** Statt einem Lauf je Runde **drei, gleichzeitig abgeschickt** (`Promise.all`), damit sich die Wartezeit nicht verdreifacht. Zwei über Gemini, einer über den bestehenden Sonnet-Rückfallpfad (`claude-sonnet-4-6`) — mindestens einer also auf einem anderen Modell. Einigkeitsregel: 3/3 übernehmen ohne Markierung · genau zwei gleich übernehmen **mit** sichtbarer Markierung `e.refEinigkeit='2von3'` · alle drei verschieden **parken** (`parkGrund:'unstable_ref'`). Dazu vier feste Prüfungen im Code, ohne Modell.
- **Teil 3 gebaut — Quellenprüfung als NEGATIVliste** (Ergänzung zu Punkt 0c, jetzt gebaut statt nur Idee). Ausdrücklich **keine** Positivliste und keine Rangfolge unter den übrigen Quellen.
- **Teil 4 (Diagnose, kein Backlog-Punkt): Zeitmessung eingebaut, aber nur die Nachher-Zahl.** Eine Code-Sitzung hat keine API-Schlüssel und keinen Browser mit Ondos Daten — sie kann keinen echten Prüflauf messen und hat deshalb **keine Vorher-Zahl geschätzt** (Art. 11/14, Entscheidung Ondos vom 3.9.2026). Die App misst ab jetzt selbst und zeigt die Dauer eines Prüflaufs (in der Bilanz) und eines Vorhersage-Laufs an. **Beide Zahlen entstehen erst in Ondos App und sind noch nicht abgelesen.**
- **Vier Entscheidungen Ondos vom 3.9.2026 vorab eingeholt**, statt sie zu raten: (1) nur die Nachher-Zahl · (2) ein Lauf mit einer Quelle von der Negativliste bleibt sichtbar, zählt aber **nicht** als Beleg · (3) weniger als drei brauchbare Läufe → nichts übernehmen, erneut fragen, **nicht** parken · (4) drei einige Läufe mit nur einer Quelle → übernehmen und als „3 Läufe, 1 Quelle" markieren.
- **Verifikation:** `node --check` bestanden. Trockentest bestanden — **57 Prüfungen, alle bestanden**, und zwar an den **echten, aus `beta.html` herausgeschnittenen Funktionen**, nicht an einem Nachbau. `pruefe.py`: ALLES SAUBER.
- **7 neue Sprachschlüssel** (`refEinig2von3`, `refQuellenZahl`, `refVerworfen`, `parkGrundFormat`, `refEinAnbieter`, `refDauer`, `balGeparkt`) — Sprachschlüsselzahl 234 → **241**, von `pruefe.py` Abschnitt 13 selbst gezählt.
- **Kein Schnitt in der Messreihe** — der Schiedsrichter ist Messwerkzeug, nicht Messgegenstand (dieselbe Begründung wie bei Punkt 26 und 64).
- **Nicht angetastet, wie im Auftrag verlangt:** `state.seedV<7`, `state.seedV<8`, der `refRoh`-Export, `refRohAbgleich()`, die Vorhersage-Läufe der Gehirne, `bttsWort`/`bttsMismatch`, `stufeHolen()`. Keine rückwirkende Neubewertung von Sabah oder Celje — beide bleiben geparkt.
- **🔴 Fund am Prüfwerkzeug, dabei aufgefallen, NICHT behoben:** `pruefe.py` Abschnitt 3 sucht Querverweise mit **zwei** Mustern — `Punkt (\d+)(?![\da-c])` und `Backlog-Punkt (\d+)`. **Nur das erste hat den Zusatz, der einen Buchstaben nach der Ziffer ausschliesst.** Steht im Text das Wort „Backlog-Punkt" unmittelbar vor einer der Buchstaben-Nummern (0a, 0b, 0c), liest der Prüfer daraus einen Verweis auf eine **nackte Null als Punktnummer**, die es nicht gibt, und meldet FEHL — obwohl der Punkt existiert. Genau das ist beim Schreiben dieser Fassung **dreimal** passiert: erst in der Blueprint-Zeile, dann zweimal **in diesem Fundvermerk selbst** — einmal, weil er die kurze Schreibweise als Beispiel zitierte, und einmal, weil er die falsch gelesene Nummer in Anführungszeichen wiedergab. Ein Fundvermerk, der seinen eigenen Fund auslöst, ist selbst der beste Beleg dafür, wie leicht die Lücke zu treffen ist. **Der Prüfer wurde bewusst nicht entschärft** (eine Prüfung zu lockern, damit der eigene Text durchgeht, wäre Fehlerart C6); statt dessen sind beide Stellen umformuliert — im Blueprint auf „Punkt 0c des Backlogs". **Die Lücke bleibt und kehrt wieder**, sobald jemand die kurze Schreibweise wieder benutzt. Dieselbe Art Werkzeuglücke wie in Punkt 66 und wie die Funde in Fassung 69 und 70: der Prüfer prüft eine Schreibweise, nicht eine Tatsache. Nur festgehalten, kein Vorschlag, keine Entscheidung.
- **Fassungszahl:** alle drei aktiven Dokumente auf 73 gehoben (Blueprint 0.72). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 72 ändert (2.9., Regel 4 nachgeholt — Backlog-Pflege ohne Chat-Anstoss, auf Ondos Nachfrage)

**Anlass:** Ondo hat gefragt, ob die stehende Regel 4 („Code prüft und archiviert den Backlog künftig selbstständig, ohne Anstoss durch Chat") in dieser Sitzung angewandt wurde. **Antwort, ehrlich zuerst gegeben: Nein, nicht laufend** — obwohl in dieser Sitzung selbst mehrere Punkte mit genau den relevanten Status-Wörtern (GEBAUT, BEANTWORTET/GEKLÄRT) bearbeitet wurden. Nachgeholt, statt offen gelassen.

- **Alle Punkte mit Status GEBAUT/GEKLÄRT/ENTSCHIEDEN/BEANTWORTET/GESCHLOSSEN systematisch gegen die zwei Kriterien aus Regel 4 geprüft** (keine Bewährungs-Einschränkung im eigenen Text · an keine offene Untersuchung gebunden): 46, 54, 58, 63, 64, 67, 41, 36, 37, E, 43, 50.
- **Zwei Punkte archiviert, nach `BACKLOG-ARCHIV.md` verschoben:**
  - **37** (Kein Schutz gegen einen zweiten Vorhersagelauf am selben Tag) — GEBAUT 30.8.2026, die im Text offen gebliebene Frage („Zu klären, bevor gebaut wird…") ist im selben Punkt durch den GEBAUT-Block ausdrücklich beantwortet, kein Bewährungsvorbehalt, keine offene Untersuchung.
  - **67** (Kein eigener Branch mehr, direkt auf `main`) — ENTSCHIEDEN UND EINGEFÜHRT 30.8.2026, reine Ablaufregel ohne jeden Vorbehalt.
- **Zehn Punkte bewusst NICHT verschoben, mit Begründung:**
  - **46, 54** — tragen wörtlich „Bewährung steht aus".
  - **E** — trägt „mit Rückfall-Zusage" (Ondos Auflage „Funktioniert es nicht, wird eine andere Lösung gesucht oder der Schritt rückgängig gemacht") — sinngemäss dieselbe Einschränkung wie „Bewährung steht aus".
  - **58** — der eigentliche Fund („Der Widerspruch ist ungelöst") bleibt im selben Punkt ausdrücklich offen. Dieselbe Begründung wie schon bei der Archivierung vom 30.8.2026 (Fassung 61); nichts hat sich daran geändert.
  - **64** — die Celje/Sabah-Fälle warten ausdrücklich weiter auf die Reparatur des Schiedsrichters (siehe Rücknahme vom 2.9.2026) — direkt an eine offene Untersuchung (elfte Fehlerart) gebunden.
  - **41** — der Punkt selbst benennt „es sind zwei Probleme", die zweite Ursache der falschen Anpfiffzeiten bleibt unbekannt (Art. 11) und ist an die noch nicht abschliessend geklärte Untersuchung aus Punkt 43 gebunden.
  - **36** — der Punkt selbst sagt im letzten Satz „Punkt 36 selbst bleibt weiterhin unentschieden": Nur die Auftragstext-Änderung ist gebaut, die Grundsatzfrage nicht. **Nur festgehalten, nicht verändert** (Regel 4 erlaubt reines Verschieben, keine inhaltliche Klärung): Ein Punkt, dessen Kopfzeile „GEBAUT" sagt und dessen Schlusszeile „bleibt unentschieden" — das ist für einen künftigen Leser leicht misszuverstehen. Keine Entscheidung dazu getroffen, nur benannt.
  - **63** — Status ist „Idee — noch nicht gebaut", keine Erledigt-Kategorie, zählt nicht.
  - **43** — heute erst in dieser Sitzung angelegt (Fassung 69). Kein Bewährungsvorbehalt im Wortlaut, aber der Punkt bindet sich selbst an die noch unbeantwortete zweite Ursache aus Punkt 41 (Art. 11) — und ein am selben Tag anlegter Punkt sofort wieder zu archivieren, widerspricht dem Zweck der Regel (Bewährung im Sichtbaren). **Im Zweifel stehen gelassen.**
  - **50** — Ondos ausdrückliche Ausnahme („bleibt sichtbar"), unverändert seit Fassung 61.
- **Verlustbeweis von Hand geführt** (dieselbe Methode wie bei Punkt 65/Weg C, kein automatischer `pruefe.py`-Abschnitt dafür): Länge, Enthaltensein und Zeilen-Multimenge von (gekürzter Backlog + beide verschobenen Blöcke) gegen den Originaltext geprüft — identisch.
- **Querverweise geprüft:** Alle gefundenen Erwähnungen von „Punkt 37" und „Punkt 67" ausserhalb ihrer eigenen Einträge sind reine Nennungen ohne „siehe dort für Details" — bleiben unverändert, lösen sich über `pruefe.py` Abschnitt 3 weiterhin auf (Backlog und Archiv werden gemeinsam durchsucht), dieselbe Konvention wie bei Fassung 61.
- **Kein Codeaufwand**, `beta.html` bleibt v19.8.11. `pruefe.py`: ALLES SAUBER.
- **Fassungszahl:** alle drei aktiven Dokumente auf 72 gehoben (Blueprint 0.71). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel. **Reine Anwendung der bereits am 30.8.2026 beschlossenen Regel 4** — keine neue inhaltliche Entscheidung über offene Punkte (Art. 8 unberührt, wie Regel 4 selbst festhält).
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 71 ändert (2.9., Rechenfehler in Fassung 70 selbst berichtigt — vom Nachfolgechat gefunden)

**Anlass:** Der Nachfolgechat (Chat 28) hat beim Gegenlesen der Nachlieferung einen Widerspruch im selben Absatz von Fassung 70 gemeldet: „132.289 Zeichen, 12.289 über der Grenze" stand neben „nachgeliefert worden (12.299 Zeichen)" — zwei verschiedene Zahlen für dieselbe Sache. Chat 28 hat sich zurecht geweigert, selbst zu entscheiden, welche richtig ist, und die Prüfung an eine Code-Sitzung verwiesen (Art. 11, keine Rategenauigkeit).

- **Nachgerechnet gegen den historischen Commit (`2ae6682`, der Stand zum Zeitpunkt der Meldung):** Der wahre Bruchpunkt liegt bei Zeichen 120.000, mitten im Wort „Wie un". **Richtig ist 12.289** (132.289 − 120.000) — dieselbe Zahl, die im selben Absatz bereits einmal richtig stand. Die 12.299 waren ein eigener Messfehler dieser Sitzung: gezählt ab dem **Anfang der Anker-Zeile** (Zeichen 119.990), nicht ab dem **wahren Bruchpunkt** — zehn Zeichen Differenz, genau die Länge von `| **Wie un`, die der Nachfolger durch die Überlappungszeile ohnehin schon hatte.
- **Fassung 70s Absatz mit Streichung und Vermerk berichtigt, nicht stillschweigend überschrieben** (Arbeitsregel „Berichtigen statt danebenstellen") — die falsche Zahl bleibt sichtbar durchgestrichen, mit Erklärung der Ursache.
- **Zweite, kleinere Klärung im selben Zug (von Chat 28 als Randbemerkung genannt, nicht als Fehler):** „rund ein Zehntel der Pflichtlektüre fehlte" bezog sich auf den Backlog allein, nicht auf alle vier Dokumente zusammen — wie bereits beim ersten Beleg von Punkt 65 („rund ein Fünftel fehlt"). Wortlaut ergänzt, damit das nicht missverständlich bleibt.
- **Bestätigt, nicht verändert:** Chat 28s Einschätzung „Weg C wirkt, hält aber nicht" ist richtig und durch die Fassungen 61–69 selbst belegt — keine Korrektur nötig.
- **Kein Codeaufwand**, `beta.html` bleibt v19.8.11. `pruefe.py`: ALLES SAUBER.
- **Fassungszahl:** alle drei aktiven Dokumente auf 71 gehoben (Blueprint 0.70). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 70 ändert (2.9., Leselängen-Grenze ein drittes Mal belegt, veraltete Sprachschlüsselzahl berichtigt)

**Anlass:** Der Nachfolgechat hat bei der Übergabe von selbst gemeldet, dass sein Backlog-Abruf mitten im Wort abbricht — genau der Fall aus Punkt 65. Beim Nachliefern des fehlenden Teils ist eine veraltete Zahl darin aufgefallen.

- **Punkt 65 ergänzt, dritte unabhängige Bestätigung — diesmal von aussen gemeldet und im Repo nachgerechnet.** Der Nachfolger nannte den letzten empfangenen Text im Wortlaut (`| **Wie un`); nachgemessen liegt diese Stelle bei **exakt Zeichen 120.000**. Der Backlog stand bei **132.289 Zeichen**, **12.289 über der Grenze** — rund ein Zehntel des Backlogs fehlte (Bezug auf diese eine Datei, nicht auf alle vier Pflichtdokumente zusammen — wie schon bei der ersten Bestätigung von Punkt 65, „rund ein Fünftel fehlt"). **Rückfall gegenüber Fassung 60:** Weg C hatte auf 108.699 Zeichen gekürzt, die Fassungen 61 bis 69 sind wieder darüber gewachsen. Weg C wirkt, hält aber nicht. ~~Der fehlende Rest ist nach Weg B nachgeliefert worden (12.299 Zeichen mit überlappender Nahtstelle).~~ **🔴 BERICHTIGT (Fassung 71, 2.9.2026, gefunden vom Nachfolgechat):** Die 12.299 waren falsch gerechnet — nicht vom wahren Bruchpunkt (Zeichen 120.000, mitten im Wort „Wie un") aus gezählt, sondern vom Anfang der Anker-Zeile (Zeichen 119.990), die der Nachfolger durch die Überlappung ohnehin schon hatte. Richtig ist **12.289 Zeichen** — dieselbe Zahl wie oben (132.289 − 120.000), kein zweiter, abweichender Wert. Der fehlende Rest ist nach Weg B nachgeliefert worden, mit einer zusätzlichen Zeile Überlappung zur Nahtprüfung. **Keine Entscheidung getroffen** — die Wahl zwischen A, B und C liegt weiterhin bei Ondo.
- **🔴 Veraltete Zahl im fehlenden Teil berichtigt (Fehlerart C3 — Folgewirkung woanders nicht geprüft):** Die Tabelle „Technische Schuld" nannte **229 Sprachschlüssel, Stand 28.8.2026**; richtig sind seit v19.8.9 **234**. Die Zahl ist **nicht** auf den neuen Wert gesetzt, sondern durch einen Verweis auf `STAND.md` ersetzt worden — sie war hier ein zweiter Ort für dieselbe Tatsache (Punkt 45) und wäre sonst erneut unbemerkt gealtert. **Gefunden, weil der fehlende Teil vor dem Nachliefern durchgesehen wurde**, nicht durch den Prüflauf.
- **Zweiter Fund am Prüfwerkzeug, nicht behoben:** `pruefe.py` Abschnitt 6 hat die falsche Zahl nicht gefangen. Er prüft das Muster `**Sprachschlüssel: N**`; die Tabellenzelle schrieb die Zahl anders (`(229 Schlüssel × 3 Sprachen …)`). **Der Prüfer prüft eine Schreibweise, nicht eine Tatsache** — dieselbe Art Lücke wie in Punkt 66 und wie der Fund zur festen Bestandszahlen-Liste in Fassung 69. Nur festgehalten, kein Vorschlag, keine Entscheidung.
- **Kein Codeaufwand** (kein neuer `beta.html`-Stand, `beta.html` bleibt v19.8.11). `pruefe.py`: ALLES SAUBER.
- **Fassungszahl:** alle drei aktiven Dokumente auf 70 gehoben (Blueprint 0.69). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 69 ändert (2.9., Sabah/Celje-Rücknahme, neuer Messstand, Punkt 43 nachgetragen, Aufräumen)

**Anlass:** Diese Chat-Sitzung endet. Ondo hat vor der Übergabe an einen neuen Chat fünf Teile beauftragt — der dringlichste ist die Rücknahme einer verfrühten Eintragung.

- **Teil 1 gebaut, `beta.html` v19.8.11 — Rücknahme.** Ondos Klarstellung: „Der Schiedsrichter ist repariert" heisst, **er liefert ab sofort nur noch richtige, zuverlässige Ergebnisse für alle künftigen Spiele, ohne Gegenprüfung im Chat.** Diese Bedingung ist nicht erfüllt, die elfte Fehlerart besteht unverändert — die manuelle Eintragung vom 30.8.2026 (Punkt 64, Nachfrage Teil 3) war verfrüht und übergeht die eigene Auflage aus Punkt 64. Neue Migration `state.seedV<8` setzt beide Spiele vollständig zurück (Endstand, Halbzeit, Verlängerung und `ergebnisQuelle` entfernt, Märkte und Eintrag wieder `offen`, `geparkt` wieder `true`, `parkGrund` wieder `'unstable_ref'`). Anker ist `e.ergebnisQuelle==='extern_manuell'` statt eines Datums — die Datumsfrage, die diesen Punkt zweimal in die Irre geführt hat, ist damit für die Rücknahme gegenstandslos. `state.seedV<7`, `refRohAbgleich()` und der `refRoh`-Export **nicht angetastet**; `e.refRoh` bleibt vollständig erhalten.
- **🔴 Abweichung vom Wortlaut des Auftrags, per Rückfrage geklärt (Art. 11):** Der Auftrag nannte nur Sabah und hielt NK Celje–Slovan Bratislava für „bereits geparkt". Der Code belegt das Gegenteil — `seedV<7` entparkt und bewertet **beide**. Vor der Änderung rückgefragt statt geraten; **Ondo hat am 2.9.2026 entschieden, beide zurückzunehmen.** Punkt 64 und `STAND.md` sind entsprechend berichtigt, mit Streichung und Vermerk, nicht stillschweigend.
- **Teil 2 gebaut:** Der Abschnitt „Aktueller Messstand" in `STAND.md` ist **vollständig ersetzt** durch die Ablesung vom 2.9.2026 (403 Vorhersagen, Sonnet 402 bei 6 %, Flash 399 bei 5 %, gepaarter Vergleich, Wett-Saldo). Der nie eingetragene Zwischenstand vom 30.8.2026 (399/396) ist zusammen mit dem alten 14.8.-Stand (330/327) in die Zeile „Vorherige Stände" gewandert. **Ausdrücklich vermerkt:** Diese Zahlen enthalten die beiden zurückgenommenen Spiele noch — sie fallen erst heraus, wenn Ondo v19.8.11 lädt.
- **Teil 3 nachgetragen:** Punkt 43 (Auswertung der Anpfiffzeiten seit dem 10.8.) ist als **beantwortet/geklärt** eingetragen, mit der ausdrücklichen Grenze „interner Abgleich, keine erschöpfende externe Prüfung". Die Antwort war im Chat gegeben und nie eingetragen — Arbeitsregel F.
- **Teil 4, Aufräumen:** **PR #1 war bereits geschlossen** (nicht gemergt, Stand 31.8.2026) — nichts zu tun, nur festgestellt. **Drei** verwaiste Branches statt der zwei genannten (`claude/ondo-control-chat-handover-o4v9vz` kommt hinzu, die Spitze von PR #1), alle drei per `git merge-base --is-ancestor` als vollständig in `main` enthalten belegt; Löschung **nicht erneut versucht** (Rechte-Grenze HTTP 403, bereits zweifach belegt). **Muster-Korrektur ausgeführt:** zwei eindeutige, kleine Stellen in `MUSTER_Ondo-Control_Uebergabe.md` berichtigt (veraltete `pruefe.py`-Zeile, fehlender `archiv/`-Pfad).
- **Teil 5:** Übergabemappe und Abnahme für einen **neuen Chat** erstellt — volle Übergaberegel mit Kontrollfragen, **nicht** die abgeschwächte Code-Fassung aus Punkt 61. Beide ausdrücklich **nicht** ins Repo, nur als Text in der Antwort.
- **Verifikation:** `node --check` bestanden. Trockentest der neuen Migration, 16 Prüfungen, alle bestanden. `pruefe.py`: ALLES SAUBER (76 Einzelprüfungen).
- **🔴 Fund am Prüfwerkzeug, dabei aufgefallen, nicht behoben:** `pruefe.py` Abschnitt 8 führt eine feste Liste überholter Bestandszahlen (180, 207, 135, 87, 224, 204, 190, 414) und meldet FEHL, sobald eine davon im Messstand-Abschnitt auftaucht. Beim neuen Messstand hat er die **135** beanstandet — das ist hier aber Flashs Anzahl in der Stufe 60–69 %, ein gültiger aktueller Wert, nicht der alte Bestand vom 6.8. **Der Prüfer wurde bewusst NICHT entschärft** (das wäre Fehlerart C6, ein Prüfer, der seinen Sollwert vom Geprüften bekommt); statt dessen ist die doppelte Zahl aus der Einordnungszeile entfernt worden — sie steht ohnehin schon in der Verteilungszeile (Punkt 45). **Die Kollision kehrt wieder**, sobald ein anderer gültiger Wert zufällig einer alten Bestandszahl gleicht. Nur festgehalten, kein Vorschlag, keine Entscheidung — dieselbe Art Werkzeuglücke wie in Punkt 66.
- **Keine neuen Sprachschlüssel** (Sprachschlüsselzahl unverändert 234, von `pruefe.py` Abschnitt 13 selbst gezählt). **Kein Schnitt in der Messreihe**, aber ein Sprung in den Kennzahlen, sobald v19.8.11 geladen wird.
- **Fassungszahl:** alle drei aktiven Dokumente auf 69 gehoben (Blueprint 0.68). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 68 ändert (30.8., main auf vollständigen Stand gebracht, zwei Branches geklärt, neue Arbeitsweise)

**Anlass:** Ondo will keine Branches mehr für laufende Arbeit — nur `main`, direkt (Ausnahme: `mistral`, Punkt 62).

- **Teil 1 gebaut:** `main` stand seit dem ersten Merge (`f795796`) zurück, während der Arbeitsbranch bei `4506cd0` (Fassung 67, v19.8.10) stand — drei Lieferungen (36/37/41/64-Nachfrage, refRoh-Export, Celje/Sabah-Berichtigung) hatten `main` nie erreicht. Jetzt per `--ff-only` nachgezogen, ohne Konflikt. `main` geprüft: Fassung 67, v19.8.10, `pruefe.py`: ALLES SAUBER.
- **Teil 2 geklärt:** `claude/backlog-stand-update-wgp612` und `claude/ergebnisse-pruefen-28-8-mnq1au` waren unerklärt. Beleg (`git merge-base --is-ancestor`): beide vollständig in `main` enthalten, keine fehlende Arbeit, kein Konflikt. Löschung versucht, wie erwartet an der bekannten Rechte-Grenze gescheitert (HTTP 403, siehe Punkt 53) — beide Branches bleiben stehen, Ondo müsste sie von Hand löschen.
- **Teil 3 entschieden und festgehalten:** Neuer Backlog-Punkt 67 — ab sofort direkt auf `main`, kein eigener Branch mehr je Lieferung. `--ff-only` bleibt, kein Force, kein Rebase.
- **Kein Codeaufwand** (kein neuer `beta.html`-Stand), `node --check` trotzdem bestanden (nichts geändert). `pruefe.py`: ALLES SAUBER.
- **Fassungszahl:** alle drei aktiven Dokumente auf 68 gehoben (Blueprint 0.67). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel (reine Ablaufentscheidung, wie schon bei Backlog-Regel 4).
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 67 ändert (30.8., Berichtigung: Celje/Sabah-Daten waren vertauscht)

**Anlass:** Ondo hat die Klarstellung nachgereicht — bei der Rückfrage in Fassung 66 ist ihm selbst ein Fehler unterlaufen, keine Falschmeldung dieser Sitzung. Mehrfach extern gegengeprüft (ESPN, UEFA.com, Sofascore, TNT Sports, Flashscore, plus das KI-Log selbst): **Sabah FC–Hapoel Beer-Sheva FC = 25.8.2026, NK Celje–Slovan Bratislava = 26.8.2026** — seit v19.8.5 (28.8.2026) durchgehend umgekehrt dokumentiert und kodiert.

- **Dringlichste Frage beantwortet, mit Codezitat:** In der `seedV<6`-Migration (`beta.html`, Zeile 548–550) müssen Datum UND beide Stichwörter gleichzeitig zutreffen; Celjes Stichwörter (`celje`,`bratislava`) können nie mit Sabahs (`sabah`,`beer`) kollidieren. Eine **Vertauschung zwischen den zwei Spielen war strukturell ausgeschlossen** — die einzig mögliche Fehlwirkung eines falschen Datums war **Nicht-Zuordnung** (kein Datenschaden, die Zuweisung lief ins Leere). Diese Code-Sitzung hat keinen Zugriff auf Ondos Browser-`localStorage` und kann daher kein „vorher/nachher" an den echten Daten belegen.
- **Berichtigung gebaut, `beta.html` v19.8.10:** Neue, robustere Migration `state.seedV<7` — neue Gate-Nummer statt Änderung an `seedV<6` (die könnte bei Ondo schon gelaufen sein; eine Änderung an derselben Nummer würde dort nie mehr ausgeführt). Akzeptiert für beide Spiele sowohl 25. als auch 26.8.2026, verlangt zusätzlich `e.geparkt===true` (nur ein von Ondo selbst geparktes Spiel kommt infrage), Stichwörter bleiben die eindeutige Unterscheidung. Alter `seedV<6`-Block bleibt unverändert stehen (Codehistorie), nur mit Berichtigungsvermerk versehen.
- **STAND.md korrigiert:** Fehlerart-11-Zeile und die „Versionen"-Einträge zu v19.8.5 und v19.8.9 — Daten mit Streichung und Vermerk berichtigt, nicht stillschweigend überschrieben.
- **Verifikation:** `node --check` bestanden. Trockentest bestanden: echte Daten (Sabah 25.8./Celje 26.8.) korrekt zugeordnet · bereits bewerteter Eintrag nicht überschrieben · nicht geparktes Spiel nicht angefasst · unbeteiligtes geparktes Spiel an drittem Datum unberührt · unbeteiligtes Spiel mit anderen Stichwörtern am selben Datum unberührt · Sabah und Celje vertauschen sich nie, auch bei gleichem Datum. `pruefe.py`: ALLES SAUBER.
- **Keine neuen Sprachschlüssel.** Kein Schnitt in der Messreihe.
- **Fassungszahl:** alle drei aktiven Dokumente auf 67 gehoben (Blueprint 0.66). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 66 ändert (30.8., Nachfrage zu Punkt 64, drei weitere Teile)

**Anlass:** Ondo hat über den neuen `refRoh`-Export die Celje/Sabah-Läufe ausgewertet und extern nachgeprüft — Sabahs Endstand nach 90 Minuten war falsch. Drei Teile: Auswahlmechanismus klären (Codezitat), Widersprüche sichtbar machen statt unkommentiert einen Wert zu zeigen, die zwei Spiele mit verifiziertem Stand eintragen.

- **Teil 1 beantwortet:** Kein Auswahlmechanismus — `pruefListe` wird bei jedem Tastendruck neu aufgebaut, frühere Läufe werden ersatzlos verworfen, nicht verglichen (Codezitat in Punkt 64).
- **Teil 2 gebaut:** Neues Feld `geparst` an `refRoh`-Läufen mit bestätigtem Ergebnis, neue Funktion `refRohAbgleich(e)`, Warnzeile in der KI-Log-Karte bei widersprechenden Läufen (90-Minuten-Stand oder Verlängerung). Grenze: ältere Läufe ohne `geparst` zählen nicht mit.
- **Teil 3 gebaut:** Celje (~~25.8.~~ **richtig: 26.8., siehe Fassung 67**, 1:1) und Sabah (~~26.8.~~ **richtig: 25.8., siehe Fassung 67**, 3:2) extern verifiziert und per einmaliger Migration (`state.seedV<6`) eingetragen, Herkunft ehrlich gekennzeichnet (`ergebnisQuelle:'extern_manuell'`), `parkGrund` entfernt, fliessen normal in die Kalibrierung ein.
- **Dabei selbst gefunden und im selben Zug berichtigt:** ein Widerspruch in `STAND.md`s Fehlerart-11-Zeile (die zuvor genannten „extern belegten Werte" waren tatsächlich zwei der App-eigenen, unzuverlässigen Läufe).
- **Zweiter Widerspruch per Rückfrage geklärt, nicht selbst aufgelöst:** Die Anfrage nannte Celje/Sabah-Daten umgekehrt zur bisherigen Dokumentation — vor der Codeänderung rückgefragt (Art. 11), Ondo hat die bisherige Dokumentation bestätigt. **🔴 Berichtigung, selber Tag (Fassung 67):** Diese Bestätigung war selbst ein Irrtum, kein Falschbericht dieser Sitzung — die bisherige Dokumentation war die ganze Zeit vertauscht (seit v19.8.5), siehe Fassung 67.
- **Verifikation:** `node --check` bestanden. Trockentest bestanden (widersprechende Läufe, übereinstimmende Läufe, zu wenig Vergleichsbasis, Verlängerungs-Widerspruch, Migration trifft genau die richtigen zwei Spiele, überschreibt nichts bereits Bewertetes). `pruefe.py`: ALLES SAUBER.
- **3 neue Sprachschlüssel** (`refWiderspruch`, `refRunsVon`, `ergebnisManuell`). Kein Schnitt in der Messreihe. Sprachschlüsselzahl 231 → 234.
- **Fassungszahl:** alle drei aktiven Dokumente auf 66 gehoben (Blueprint 0.65). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 65 ändert (30.8., Nachfrage zu Punkt 64 — refRoh lesbar gemacht)

**Anlass:** Seit v19.8.5 (Punkt 64) speichert die App den rohen Schiedsrichter-Antworttext (`e.refRoh`), aber ohne Ansicht oder Export — Ondo bat um eine kleine, zusätzliche Ausgabe dafür.

- **Punkt 64 ergänzt (nicht neu angelegt), `beta.html` v19.8.8:** Neuer Knopf im selben Kartenbereich wie „Log als Text", nutzt denselben Zeitraum. Gibt zu den ausgewählten Einträgen zusätzlich `e.refRoh` aus, falls vorhanden — sonst „kein refRoh gespeichert" statt leerem Text. Kein Zugriff auf Schlüsselfelder.
- **2 neue Sprachschlüssel** (`refRohBtn`, `refRohEmpty`) — mehr als die angefragte „evtl. eine Knopfbeschriftung", ausdrücklich gemeldet: ein zweiter Schlüssel für die übersetzbare Fallback-Meldung.
- **Verifikation:** `node --check` bestanden. Trockentest bestanden (Eintrag mit `refRoh`, Eintrag ohne, leerer Zeitraum). `pruefe.py`: ALLES SAUBER.
- **Kein Schnitt in der Messreihe.** Sprachschlüsselzahl 229 → 231.
- **Fassungszahl:** alle drei aktiven Dokumente auf 65 gehoben (Blueprint 0.64). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 64 ändert (30.8., drei Backlog-Punkte gebaut — Auftrag Ondo)

**Anlass:** Ondo hat Backlog-Punkte 36, 37 und 41 entschieden und in einer Lieferung in Auftrag gegeben.

- **Punkt 36 gebaut:** Schiedsrichter-/Spielformat-Auftragstext schliesst jetzt namentlich Sonderformate aus (2x60, 3x45 u. ä.) statt nur verkürzte Formate; reguläre Verlängerung (2x15) bleibt ausdrücklich erlaubt. Gemessen wird weiterhin Stand nach 90 Minuten plus Nachspielzeit.
- **Punkt 37 gebaut:** `vorhersagen()` überspringt einen Eintrag, wenn dasselbe Gehirn für dasselbe Spiel (Namensvarianten wie bei S1) am selben Tag bereits einen Eintrag hat. Keine Begrenzung der Läufe pro Tag, nur Duplikate werden übersprungen.
- **Punkt 41 gebaut:** `wettbewerb`/`anpfiff`/`stufe` werden über den Spielnamen aus der Liste nachgeschlagen statt über `paket.liste[idx]`. Kein Treffer: Felder bleiben leer/`null`.
- **Neue gemeinsame Funktion `normName()`** in `beta.html` (v19.8.7): fasst die bisher in `spielListeHolen` lokale Namensnormalisierung (S1) an einer Stelle zusammen, jetzt auch von Punkt 37 und Punkt 41 verwendet. Kein Verhaltensunterschied gegenüber der bisherigen `schluessel()`-Funktion in `spielListeHolen`.
- **Bekannte, unveränderte Grenze bei allen drei Namensvergleichen (S1, Punkt 37, Punkt 41):** `normName()` gleicht Gross-/Kleinschreibung, Satzzeichen und Strichvarianten aus, entfernt aber keine Wörter wie „FC" — der historische Fall „Red Bull Salzburg" gegen „FC Red Bull Salzburg" (Punkt 37) bleibt damit ein nicht erkanntes Duplikat. Durch Trockentest bestätigt, nicht neu — unverändert durch diese Lieferung.
- **Verifikation:** `node --check` auf dem extrahierten Skript bestanden. Trockentest bestanden: Punkt 37 (zwei Läufe desselben Spiels/Tages/Gehirns → zweiter übersprungen; anderes Spiel/Tag/Gehirn → nicht übersprungen) und Punkt 41 (Antwort in anderer Reihenfolge als die Liste → richtiges Spiel gefunden; kein Treffer → Felder leer/`null`). `pruefe.py`: ALLES SAUBER.
- **Kein Schnitt in der Messreihe bei allen dreien.** Keine neuen Sprachschlüssel (Sprachschlüsselzahl unverändert 229, gegen die Änderung geprüft).
- **Fassungszahl:** alle drei aktiven Dokumente auf 64 gehoben (Blueprint 0.63). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 63 ändert (30.8., 31. Fundstelle nachgetragen — Ondos eigenes Gegenlesen)

**Anlass:** Ondo hat Commit `a939a86` selbst über die vollen Commit-Hash-Links gegengelesen (zweites, echt unabhängiges Gegenlesen nach ChatGPT) und eine weitere Stelle gefunden, die die als „vollständig" bezeichnete Nachsuche zu Fassung 62 übersehen hatte.

- **`STAND.md`, Abschnitt „Versionen", „Beta zuvor: v19.8.3":** „Backlog-Punkte E und 2 gebaut." — Punkt 2 ist archiviert, Punkt E nicht. Berichtigt auf „Backlog-Punkte E und 2 gebaut (Punkt 2 seit 30.8.2026 in `BACKLOG-ARCHIV.md`, Punkt E unverändert im Backlog)" — **bewusst nicht Ondos vorgeschlagener Wortlaut „E und 2 (seit 30.8.2026 in BACKLOG-ARCHIV.md) gebaut"**, weil der die Klammer über beide Punkte spannt und damit fälschlich nahelegen würde, auch Punkt E sei archiviert. Abweichung vom vorgeschlagenen Wortlaut, mit Begründung, nicht stillschweigend.
- **`Blueprint.md` unabhängig neu abgesucht, wie aufgetragen** — nicht die eigene Fundliste von Fassung 62 bestätigt, sondern neu gesucht. Dabei ein eigener Methodenfehler gefunden: Das erste Suchmuster erkannte Genitiv-Formen wie „Punkt 51s" nicht (keine Wortgrenze zwischen Ziffer und folgendem Buchstaben). Mit korrigiertem Muster erneut über alle drei Dokumente gesucht — **keine weitere, bisher unentdeckte Lücke gefunden**, alle Genitiv-Stellen lagen zufällig im selben Satz wie eine bereits korrekte Angabe.
- **Backlog-Punkt 66 ergänzt** (nicht neu angelegt): Der eigene Methodenfehler ist ein zweiter, unabhängiger Beleg dafür, dass manuelle bzw. ad-hoc-skriptgestützte Nachsuche bei drei Dokumenten und zehn Nummern an Grenzen stösst — Mensch (Ondo, `STAND.md`) und Skript (diese Sitzung, `Blueprint.md`) übersahen je eine andere Art von Lücke. Stützt den in Punkt 66 stehenden, nicht gebauten Vorschlag stärker, ändert aber nichts an der Kostenentscheidung.

- **Fassungszahl:** alle drei aktiven Dokumente auf 63 gehoben (Blueprint 0.62). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 62 ändert (30.8., Fundort-Angaben nachgetragen — ChatGPTs Gegenlesen zu PR #1)

**Anlass:** ChatGPTs Gegenlesen zu PR #1 (Fassung 58–61) ergab „Freigabe — nein": Mehrere Querverweise auf die zehn in Fassung 61 archivierten Punkte nannten die Punktnummer, ohne zu sagen, dass der Punkt jetzt in `BACKLOG-ARCHIV.md` steht. `pruefe.py` Abschnitt 3 fängt das nicht — es prüft nur, OB die Nummer irgendwo existiert, nicht OB die Fundstelle mitgenannt wird.

- **Vier von ChatGPT konkret zitierte Stellen korrigiert** (alle in `Ondo-Control-Backlog.md`): „Was der ausgefallene Lauf gekostet hat, steht bei Punkt 52" · „Hängt zusammen mit Punkt 55" · „dieselbe Grenze wie bei Punkt 51" · der übersprungene Verlustbeweis „(Punkt 52)".
- **Vollständig neu abgesucht, wie aufgetragen** — nicht nur der Backlog, auch `STAND.md` und `Blueprint.md`, jede Erwähnung der zehn Nummern (2, 47, 48, 49, 51, 52, 55, 56, 59, 60), auch beiläufige. **26 weitere Stellen gefunden**, darunter fünf allein zu Punkt 47 — beim ersten Durchgang komplett übersehen. Alle 30 (4 + 26) tragen jetzt eine Fundort-Angabe. Aufteilung: Backlog 13 Zeilen, `STAND.md` 5 Zeilen, `Blueprint.md` 12 Zeilen (drei Zeilen mit zwei Nummern in einem Satz tragen die Angabe zweimal).
- **Bewusst einbezogen: auch Blueprints datierte Änderungsnotizen** (z. B. „Was Fassung 0.24 ändert (15.8.2026)"), nicht nur laufender Text. Begründung: Ein Leser, der einer Punktnummer folgt, trifft dasselbe Auffindbarkeitsproblem unabhängig davon, wie alt der Satz ist, in dem sie steht — das Datum der Aussage ändert nichts daran, wo der Punkt heute steht.
- **Neuer Backlog-Punkt 66 aufgenommen** (Fund, nicht zu bauen): `pruefe.py` prüft Existenz, nicht Fundort-Angabe — echte Werkzeuglücke, mit einem nicht umgesetzten Vorschlag und offen benannten Schwierigkeiten.
- **Kein Inhalt sonst geändert.** Keine weitere inhaltliche Korrektur, reine Fundort-Ergänzung.

- **Fassungszahl:** alle drei aktiven Dokumente auf 62 gehoben (Blueprint 0.61). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert — Punkt 66 ist Fund, keine Entscheidung.)*

---

## ⚠ Was Fassung 61 ändert (30.8., Backlog archiviert — Teil 2 von Chat 27s Auftrag)

**Anlass:** Chat 27 hat einen Auftrag zur Backlog-Pflege übermittelt (Teil 1: PR statt direktem Vorwärtsschieben nach `main` — Teil 2 dieser Fassung; Teil 3: Backlog-Pflege wird dauerhafte Code-Aufgabe, siehe Regel 4 oben).

**Zehn erledigte Punkte nach `BACKLOG-ARCHIV.md` verschoben** (23.995 Zeichen), nach Ondos Kriterium: Status GEBAUT/GEKLÄRT/ENTSCHIEDEN/BEANTWORTET/GESCHLOSSEN **und keine Bewährungs-Einschränkung im Punkt selbst**. Verschoben: **2** (Erster Lernschritt) · **47** (Selbsttest für die App) · **48** (Struktur- und Reihenfolgebeweis) · **49** (Messmethodik und Interpretationsgrenzen) · **51** (Gepaarter Vergleich Sonnet gegen Flash) · **52** (Der Verlustbeweis braucht ein Ende) · **55** (Arbeitsteilung Chat/Code/Cowork) · **56** (Nutzungsgrenzen) · **59** (`pruefe.py`-Zeitstempel-FEHL geklärt) · **60** (Sprachschlüsselzahl geklärt).

**Nicht verschoben, mit Begründung:**
- **46, 54** — Status trägt wörtlich „Bewährung steht aus".
- **61** — „noch nicht bewährt".
- **E** — „Ob es wirkt, zeigt erst der nächste Prüflauf", dazu Ondos Rückfall-Auflage; ausserdem eine noch offene Teil-Entscheidung (Geminis Antwort übernehmen oder nicht).
- **64** — GEBAUT, aber die Celje/Sabah-Markierung bleibt ausdrücklich an die Reparatur des Schiedsrichters (elfte Fehlerart) gebunden — im Zweifel nicht verschoben, wie aufgetragen.
- **58** — BEANTWORTET, aber der eigentliche Fund („Der Widerspruch ist ungelöst") bleibt im selben Punkt ausdrücklich offen.
- **50, 62** — Ondos ausdrückliche Ausnahmen (bleibt sichtbar · auf dem Prüfstand).

**Ein Querverweis berichtigt:** Punkt 36 (bleibt offen, Prio 1) verwies mit „Einzelheiten … stehen bei Punkt 51" auf einen jetzt archivierten Punkt — Verweis um den Fundort ergänzt, damit er nicht ins Leere zeigt. Alle anderen gefundenen Verweise auf verschobene Punkte sind reine Erwähnungen ohne „siehe dort für Details" und bleiben unverändert; sie lösen sich über `pruefe.py` Abschnitt 3 weiterhin auf, weil dessen Punktprüfung Backlog und Archiv gemeinsam durchsucht.

**Verlustbeweis von Hand geführt:** Jeder verschobene Block wurde wortgleich im vorherigen Commit-Stand nachgewiesen; Backlog minus verschobene Blöcke ergibt exakt den neuen Dateikörper (byte-genau geprüft). Kein neuer `pruefe.py`-Abschnitt dafür — dieselbe, bereits in Punkt 65 und Fassung 60 offen benannte Lücke.

**Grösse:** Backlog vorher 108.699 Zeichen (Fassung 60), nachher **88.442** Zeichen.

- **Fassungszahl:** alle drei aktiven Dokumente auf 61 gehoben (Blueprint 0.60). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert. **Eine neue, dauerhafte Zuständigkeitsregel** (Regel 4 oben) — keine Arbeitsregel im Sinn von Abschnitt 2c des Blueprints, sondern eine Pflegeregel dieses Dokuments.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 60 ändert (30.8., Backlog gekürzt — Weg C, Punkt 65)

**Anlass:** Backlog-Punkt 65 (die 120.000-Zeichen-Grenze im Chat-Bereich) nannte drei Wege. Ondo hat **Weg C** beauftragt: die gestapelten Abschnitte „Was Fassung N ändert" ins Archiv verschieben, nach dem Vorbild von Punkt 18.

- **Verschoben:** Die Fassungsabschnitte 24 bis 59 (36 Abschnitte, 50.570 Zeichen) stehen jetzt in `BACKLOG-ARCHIV.md`, oberhalb von Fassung 23 — die Reihenfolge bleibt absteigend durchgehend erhalten, kein Bruch zwischen Fassung 59 und Fassung 23.
- **Verlustbeweis, von Hand geführt, nicht durch einen neuen `pruefe.py`-Abschnitt:** Der ursprüngliche Backlog-Text (Commit `35ad71f`) wurde aus `Kopf + verschobener Block + Rest` byte-genau rekonstruiert und gegen das Original verglichen — identisch bis auf diesen einen neuen Absatz. **Offen, wie schon beim ursprünglichen Split von Punkt 18:** `pruefe.py` prüft diese zweite Trennung nicht automatisch nach, dieselbe Lücke wie bei `PROJEKT-STATUS.md` (Punkt 52, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) und bereits in Punkt 65 selbst als Haken benannt. Ein dauerhafter, automatischer Beweis wäre eine eigene Codeänderung an `pruefe.py` und ist hier bewusst **nicht** mitgeliefert — Weg C hat nur die Kürzung verlangt.
- **Nur Änderungsnotizen sind verschoben, keine offenen Punkte.** Punkt 1 bis 65 stehen unverändert im Backlog — „Nur offene Punkte" gilt weiterhin für den eigentlichen Inhalt dieser Datei.
- **Grösse:** Backlog vorher 156.999 Zeichen (Fassung 59), nachher 108.699 Zeichen.
- **🔴 Neuer Fund, nicht Teil von Weg C, nur dabei aufgefallen:** Selbst ganz ohne Änderungsnotizen wiegt der Backlog rund 106.400 Zeichen — vor allem, weil abgeschlossene Punkte (GEBAUT/GEKLÄRT/ENTSCHIEDEN, z. B. 47, 48, 49, 51, 52, 58, 59, 60, 64, E, 2) mit ihrer vollen Begründung im Haupttext stehen bleiben, statt wie „Nur offene Punkte" es nahelegt ins Archiv zu wandern. **Kein Vorschlag, keine Entscheidung — nur benannt, damit der jetzt gewonnene Spielraum nicht als dauerhafte Lösung missverstanden wird.**

- **Fassungszahl:** alle drei aktiven Dokumente auf 60 gehoben (Blueprint 0.59). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## 🔴 DIE FÜNF BESCHLÜSSE DER GRUNDSATZBESPRECHUNG (14.8.)

**Ondos Rahmen:** Solange diese Probleme nicht gelöst sind, kommt das Projekt nicht vernünftig weiter. Regeln dürfen die Arbeit nicht erschweren; brauchbare Lösungen sollen nicht ausgeschlossen werden, wenn sie nichts kaputt machen.

---

**46. Claude Code auf dem Surface Go** · *Idee 9./10.7., Claude (als Punkt 8) · neu vorgelegt 14.8. · beschlossen 14.8., Ondo · eingerichtet 16.8., Chat 18* · **Status: GEBAUT 16.8. — erstes Hochladen geglückt, Bewährung steht aus**

> **🔴 ZUSAMMENGELEGT am 14.8. abends (Chat 16).** Dies ist derselbe Vorschlag wie **Punkt 8** („Claude Code auf dem Windows-Tablet über das Pro-Abo", 9./10.7.). Chat 15 hat ihn als neuen Punkt aufgenommen, ohne den alten zu finden. **Punkt 8 verweist ab jetzt hierher; dieser Punkt führt ihn weiter.** Fund von Chat 16, bestätigt von Chat 15.

Ondos Gerät: Surface Go, Windows 10 Home 22H2, 64 Bit, 8 GB RAM, 110 GB frei, Pentium 4415Y.

→ **Es passt:** Unterstützt sind Windows 10 oder neuer, mindestens 4 GB RAM, unter 1 GB Platte. Der native Installer braucht **kein** Node.js. Nötig ist ein Claude-Konto ab Pro. Der schwache Prozessor stört wenig, weil die Rechenarbeit auf Anthropics Servern läuft.
→ **Was sich ändert:** Claude Code sitzt im Ordner mit den Projektdateien, liest eine Datei **erst wenn es sie braucht** und nur die nötige Stelle, ändert direkt, führt `pruefe.py` selbst aus und schickt die Änderung selbst zu GitHub. **Ondo lädt dann nichts mehr von Hand hoch.** Das Speicherproblem verschwindet weitgehend, weil nicht mehr alles vorher in den Chat geladen werden muss.
→ **Ehrlich zu den Hürden:** Es ist ein Terminalfenster, kein Fenster mit Knöpfen. Die Einrichtung ist einmalig, aber eine Hürde. Claude sieht das Tablet nicht und kann nur eine Schritt-für-Schritt-Anleitung liefern und bei Fehlern helfen.
→ **Zur Alternative Claude Desktop mit Cowork:** ausdrücklich für Leute ohne Programmierkenntnisse, aber für angenehmes Arbeiten werden 16 GB RAM als Untergrenze genannt. Auf 8 GB vermutlich zäh. **Claude Code ist der leichtere Weg.**
→ **Kosten:** kein zusätzliches Geld bei vorhandenem Pro-Konto. Ein Abend Einrichtung. **Risiko für das Projekt: keines** — das Repo bleibt wie es ist, und wenn es nicht klappt, geht es weiter wie bisher.
→ **🔴 Kostenangabe ergänzt am 14.8. abends, sie fehlte:** **Die Arbeit zehrt am Wochen-Limit des Pro-Abos.** Das steht seit dem 9./10. Juli in Punkt 8 und ist bei der Neuaufnahme untergegangen. „Kein zusätzliches Geld" ist damit richtig, aber unvollständig — ein Nutzungslimit ist nach Arbeitsregel G ausdrücklich mitzunennen. Zweiter Haken aus Punkt 8, ebenfalls weiterhin gültig: Es läuft nur, wenn Ondo es am Tablet anstösst.

> **🔴 BERICHTIGT am 16.8.2026 (Chat 18), nach Abruf der offiziellen Anleitung.** Drei Angaben oben stimmen nicht. **Erstens:** „Es ist ein Terminalfenster, kein Fenster mit Knöpfen" — es gibt eine Desktop-App, die Claude Code mit Oberfläche anbietet, und genau über sie ist eingerichtet worden. **Zweitens:** Die 16 GB als Untergrenze für die Desktop-App stehen in der Anleitung nicht; auf 8 GB läuft sie nach Ondos Beobachtung normal. **Drittens:** „unter 1 GB Platte" ist nirgends belegt, die Anleitung nennt keine Zahl. **Belegt geblieben ist:** Windows 10 ab 1809, mindestens 4 GB RAM, x64, kein Node.js beim nativen Weg, Konto ab Pro. **Zusätzlich, oben nicht erwähnt:** Git für Windows ist freiwillig, wurde hier aber installiert.

→ **Ergebnis 16.8.2026 (Chat 18):** Auf dem Tablet stehen die Desktop-App mit dem Bereich „Code", Git 2.55.0, Python 3.14.7 und der Ordner `Claude-Ondo-Control-Repo` unter Dokumente, frisch von GitHub geholt und mit dem Verzeichnis verbunden. Der maschinelle Abgleich der Handkopie gegen das Verzeichnis fand bei allen vierzehn gemeinsamen Dateien keinen Unterschied.
→ **Zwei Auflagen, die dauerhaft gelten:** Die Sicherungen mit `apiKey`, `geminiKey` und `pin` und die Übergabemappen liegen außerhalb des Repo-Ordners und werden dort nie geöffnet. `pruefe.py` liegt in einem eigenen Ordner daneben, damit es nicht ins Verzeichnis gerät.
→ **Zwei offene Stellen (Art. 11):** Läuft `pruefe.py` aus einem anderen Ordner, meldet sein Abschnitt 2 die eigene Datei als fehlend. Und der Repo-Ordner liegt unter OneDrive — ob OneDrive beim Hochladen dazwischenfunkt, ist ungeprüft.
→ **🔴 Beobachtung 21.8. (Chat 20, Cloud-Sitzung):** `pruefe.py` liegt nicht im Repo — die Auflage oben hält es bewusst daneben. **Eine Cloud-Sitzung findet es deshalb nicht und kann Arbeitsregel M nicht von sich aus erfüllen.** Belegt am 21.8.: Beim Durchgang um 05:24 Uhr (Commit `dabf9bb`) lief es nicht; für die Lieferung um 05:50 Uhr lief es erst, nachdem Ondo es von Hand in die Sitzung hochgeladen hatte — also genau die Handarbeit, die Punkt 53 beenden soll. Es meldet dabei sich selbst als fehlend (Abschnitt 2). **Was der ausgefallene Lauf gekostet hat, steht bei Punkt 52** (seit 30.8.2026 in `BACKLOG-ARCHIV.md`). **ENTSCHIEDEN am 21.8.2026 (Ondo): `pruefe.py` wird ins Repo aufgenommen.** Der Inhalt wurde vorher vollständig durchgesehen; er enthält nichts, was nicht öffentlich sein darf. Die Auflage vom 16.8. ist gegenstandslos, siehe `STAND.md`.

> **🔴 BERICHTIGT am 16.8.2026, nachmittags (Chat 19).** Hier stand bis heute in der Statuszeile: „GEBAUT 16.8. — Bewährung steht aus, erstes Hochladen noch nicht erfolgt." **Das erste Hochladen hat inzwischen stattgefunden und funktioniert** — laut Ondo sind Repo, Tablet und Projektkopien seither auf demselben Stand. **Ursache des Fehlers (Fehlerart C4):** Chat 18 hatte den Satz zum offenen Hochladen geschrieben, bevor Ondo hochgeladen hat, und den späteren Erfolg in der Abnahme daneben vermerkt, statt die ältere Aussage im selben Durchgang zu berichtigen. **Weiterhin unverändert: Punkt 46 gilt nicht als bewährt** — ein geglückter erster Versuch ist kein Nachweis von Zuverlässigkeit.

---

## 🔴 CHATS UND ARBEITSSTRUKTUR — VOR ALLEN APP-PUNKTEN (Ondo, 16.8.)

**Ondos Vorgabe:** Zuerst werden die Probleme mit Chats, Nutzungsgrenzen und Arbeitsstruktur gelöst, dann geht es an der App weiter. Diese Gruppe steht deshalb vor **Prio 1**.

**Das gilt auch gegenüber der Reihenfolge der beschlossenen Punkte.** Der nächste beschlossene war zum Zeitpunkt dieser Vorgabe (16.8.) Punkt 47, und der gehört zur App. **🔴 Berichtigt (27.8.): Punkt 47 ist seither gebaut** (über Mistrals Code-Modus, von Claude gegengeprüft, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) — die Aussage ist damit historisch, nicht mehr aktuell. **Ondo entscheidet, ob die App-Arbeit wartet** — Claude zieht nichts von sich aus vor und stellt nichts von sich aus zurück.

**Reihenfolge innerhalb der Gruppe, Vorschlag Claudes:** 54 zuerst, weil ohne sie der Bereich „Code" ohne Pflichtlektüre arbeitet · dann 53 · dann 55 · dann 56 · dann 58 · dann 57.

**🔴 Gruppe im Kern abgeschlossen (27.8.2026):** 54 gebaut, 55 entschieden, 58 beantwortet, 56 beantwortet, 53 zurückgestellt. Nur 57 bleibt offen (bewusst nicht bearbeitet, nachrangig). **Prio 1 (App-Arbeit) hat ab jetzt wieder Vorrang** — Ondos Entscheidung, 27.8.2026.

---

**54. `CLAUDE.md` für den Code-Bereich** · *Frage 16.8., Ondo · untersucht 16.8., Chat 19 · beschlossen 16.8., Ondo · gebaut 21.8., Chat 21 in einer Cloud-Sitzung* · **Status: GEBAUT 21.8.2026 — Bewährung steht aus**

Wer im Bereich „Code" arbeitet, hat die Pflichtlektüre nicht gelesen. Er kennt weder die Arbeitsregeln noch die Fehlerarten. **Damit fällt genau der Schutz weg, für den das Kontrollexamen gebaut wurde.**

Claude Code liest beim Start eine Datei mit diesem Namen aus dem Arbeitsordner. Darin könnten die Regeln stehen, ohne dass Ondo sie einfügt.

→ **Geklärt (16.8., anhand der offiziellen Dokumentation, nicht aus dem Gedächtnis):** Der Name steht fest — `CLAUDE.md`, nicht `AGENTS.md`. Ort: im Repo, unter `./CLAUDE.md`, passend zu Punkt 45 (ein Ort je Tatsache, mitversioniert). Umfang: unter 200 Zeilen empfohlen — die vier Pflichtdokumente selbst gehören nicht per `@Import` hinein, das würde bei jedem Sitzungsstart alle rund 120 KB neu laden. Stattdessen eine feste Anweisung, die vier Dokumente vor inhaltlicher Arbeit vollständig zu lesen.
→ **Beschlossen (Ondo, 16.8.), zwei Bausteine:** (1) Claude Code liest die vier Pflichtdokumente auf Anweisung vollständig und erzeugt oder erneuert `CLAUDE.md` daraus. (2) Ein Auslöser bei Sitzungsstart prüft, ob sich die vier Dokumente seit der letzten Erzeugung geändert haben, und erinnert nur dann an eine Erneuerung.
→ **Grenze, die dabei bleibt:** `CLAUDE.md` ist Kontext, keine erzwungene Einstellung — keine Garantie, dass Claude Code die Anweisung befolgt, ähnlich wie eine Regel im Prompt sich anders verhält als eine Regel im Code. Eine dem Kontrollexamen entsprechende Prüfung gibt es dafür nicht.
→ **Hängt zusammen mit Punkt 55** (seit 30.8.2026 in `BACKLOG-ARCHIV.md`)**.** Ohne diese Datei ist die Arbeitsteilung nicht sicher zu betreiben. Gebaut wird beides auf dem Tablet oder in einer Cloud-Sitzung (Punkt 53), nicht im Chat-Bereich.
→ **Kosten:** keine ausser Zeit, und dem Kontext, den das Lesen der vier Dokumente bei jeder betroffenen Sitzung kostet.
→ **🔴 GEBAUT am 21.8.2026 (Chat 21, Cloud-Sitzung), beide Bausteine:** (1) `./CLAUDE.md` liegt im Repo, unter 200 Zeilen, aus den vier vollständig gelesenen Pflichtdokumenten geschrieben. Es wiederholt keine Kennzahl und keine Liste, sondern nennt für jede den Fundort (Punkt 45). (2) Der Auslöser bei Sitzungsstart ist ein Hook in `.claude/settings.json`, der `.claude/hooks/claude_md_frisch.py` aufruft. Das Skript vergleicht den Git-Blob-Hash der vier Dokumente mit der Tabelle am Ende von `CLAUDE.md` und **erinnert nur** an eine Erneuerung; es erneuert nichts von selbst und bricht nichts ab.
→ **Bewährung steht aus, und die Grenze von oben gilt unverändert:** `CLAUDE.md` ist Kontext, keine erzwungene Einstellung. Zusätzlich muss eine Sitzung den Hook aus dem Repo einmal bestätigen — geschieht das nicht, läuft die Erinnerung nicht.

---

**53. Erzeugte Dateien ohne Handarbeit an den richtigen Ort** · *Vorgabe 16.8., Ondo · zurückgestellt 27.8.2026, Vorschlag Claude* · **Status: ZURÜCKGESTELLT 27.8.2026 — nicht abgelehnt**

**Ondos Vorgabe im Wortlaut:** Er will nicht mehr von Hand hochladen. Erzeugte Dateien sollen auf dem Tablet in den richtigen Ordnern landen — **im Repo und im Projektordner der App**. Er arbeitet parallel am Handy. Ziel ist, das Tablet zu Hause laufen zu lassen. **Es kann aber aus sein**, etwa nach einem Windows-Update. Er will mit **einem Klick** entscheiden, wohin gespeichert wird — Handy, Tablet, Repo, Projektordner — und welche Dateien. **Einmal eingestellt, danach immer automatisch, wenn er es auslöst.**

→ **Was belegt ist:** Der Projektordner der App liegt bei Anthropic, nicht auf dem Tablet. Claude Code schreibt nur auf die Platte des Geräts.
→ **🔴 Live bewiesen am 20.8.2026, 06:13–06:20 Uhr, durch Ondo am Handy, Tablet nachweislich ausgeschaltet:** Über „Code → + Neue Sitzung" lässt sich eine **Cloud-Sitzung** starten, die das Repo auf Anthropics eigener Rechenanlage klont, ändert und zu GitHub zurückschiebt — **ohne jedes eigene Gerät**. Testauftrag: eine Datumszeile an `README.md` anhängen. Ergebnis: Commit `a1324a6` auf Branch `claude/readme-datum-hinzufuegen-bis926`, auf GitHub sichtbar, `main` unberührt. Kein Handupload nötig. **Damit ist Ondos Frage „was, wenn das Tablet aus ist" beantwortet: der Repo-Weg funktioniert trotzdem.**
→ **Zu unterscheiden, und das war der entscheidende Fund:** Die bereits vorhandene Sitzung „Ondo Control: Code 1" trägt die Kennzeichnung **„Fernsteuerung"** und ist an das eingeschaltete Tablet gebunden. **Dispatch ebenfalls** — dessen Meldung „Desktop nicht erreichbar" am 16.8. war kein Fehler, sondern die vorgesehene Wirkung. **Nur die Cloud-Sitzung ist geräteunabhängig.** Fernsteuerung und Dispatch scheiden für Ondos Vorgabe aus.
→ **Nebenbefund zu den Betriebsarten:** „Plan" legt vor der Ausführung einen Plan vor und wartet auf Genehmigung — passend zu Artikel 8 und deshalb als Standard empfohlen. „Änderungen akzeptieren" überspringt die Rückfrage. „Auto" überlässt Claude Code auch die Frage, wofür überhaupt eine Erlaubnis nötig ist.
→ **Was NICHT bekannt ist (Art. 11), Ondos Fragen vom 20.8. — der Kern des Punktes ist damit NICHT erledigt:** ob Claude Code die **Projektdokumente selbst fortschreiben** kann (Buchführung statt nur Codeänderung) · ob es einen **internen Sammelspeicher** gibt, in dem anstehende Änderungen bis zum Nachtragen liegen (berührt Punkt 58) · ob eine Aktualisierung **auf Befehl UND zu fester Uhrzeit** einstellbar ist, etwa abends · ob das **im Hintergrund** läuft · ob eine am Handy begonnene Sitzung **am Tablet fortgesetzt** werden kann · ob sich Dateien **parallel** ablegen lassen (Tablet aus: nur Repo; Tablet an: Repo und Tablet) · **wann der Speicher einer Code-Sitzung voll ist**, wann ihr Inhalt gelöscht und eine neue Sitzung begonnen werden sollte, und ob Claude Code das von selbst vorschlägt.
→ **Auflage für den nächsten Chat:** Diese Fragen sind **durch Versuch in einer Cloud-Sitzung** zu klären, nicht durch Nachschlagen und nicht durch Vermuten — sie kosten dort weder Chat-Speicher noch Handarbeit. Der Weg über die Dokumentation bleibt zweite Wahl.
→ **Der Projektordner der App bleibt ungelöst** und ist es vermutlich auch: Ein maschineller Weg dorthin ist nicht vorgesehen (geprüft 16.8.). Er verliert aber an Gewicht, weil Chat über die Raw-Links selbst lesen kann (siehe Fassung 30) und das Repo nun ohne Tablet beschreibbar ist.
→ **Kosten:** Cloud-Sitzungen zehren am selben Wochenlimit wie der Chat; kein zusätzliches Geld, kein zusätzliches Abo. Pro genügt.

> **Live geprüft am 21.8.2026 durch Cloud-Sitzung (Chat 20), Commit `dabf9bb`**
>
> - **Frage 1, Projektdokumente selbst fortschreiben: JA, bewiesen.** Drei Berichtigungen in `STAND.md` und `Blueprint.md` wurden von einer Cloud-Sitzung eingetragen, committet und auf `main` gepusht, ohne Handupload durch Ondo. **Bewährt ist das damit nicht** (Stabilitätsregel).
> - **Frage 2, interner Sammelspeicher: NEIN, bewiesen.** Eine Plandatei lag im Arbeitsverzeichnis der Sitzung, nicht im Repo, und verschwindet mit der Sitzung.
> - **Frage 7, Sitzungsspeicher:** Claude Code meldet ein Volllaufen **nicht von selbst** und sieht keine Anzeige dazu. Bei Überlauf wird ältere Konversation zusammengefasst, ältere Einzelheiten werden ungenau. **Die Übergaberegel ist in diesem Bereich damit nicht zuverlässig einhaltbar.**
> - **Fragen 3 (feste Uhrzeit), 4 (Hintergrundlauf) und 5 (Sitzung am anderen Gerät fortsetzen): UNGEPRÜFT.** Claude Code hat sie aus Kenntnis der Umgebung beantwortet, nicht durch Versuch. **Ondos Auflage verlangt Versuch. Sie bleiben offen.**
> - **Frage 6, paralleles Ablegen: NICHT GESTELLT.** Claude im Chat-Bereich hat sie beim Schreiben der Versuchsaufträge weggelassen, sieben Fragen zu sechs zusammengezogen. **Fehlerart C5**, von Claude selbst gemeldet. Bleibt offen.
> - **Fünfter Fund, nachgetragen am 21.8. (Chat 21):** Ein an eine Cloud-Sitzung **angehängtes** `pruefe.py` kam beim ersten Versuch nicht im Arbeitsverzeichnis an; über einen **Dateiverweis** hat es funktioniert. **Ein gescheiterter Versuch beweist keine Unmöglichkeit (Arbeitsregel D)** — ob Anhänge grundsätzlich ankommen, ist ungeprüft. Für `pruefe.py` selbst ist der Fund gegenstandslos, seit es im Repo liegt.
> - **Frage 4 (Hintergrundlauf), BESTÄTIGT am 21.8.2026, Chat 21, durch Versuch.** Zwei echte Commits (`31e2ef0`, `0a4fa33`), 321 Sekunden auseinander, während die App auf dem iPhone vollständig geschlossen war. **Einschränkung:** echtes Warten im Vordergrund war in der Umgebung gesperrt; der Befehl lief als Hintergrundaufgabe, die Sitzung wurde danach automatisch geweckt. Geprüft ist ein Zeitraum von rund fünf Minuten, nicht länger.
> - **Frage 5 (Sitzungsfortsetzung Handy zu Tablet), BESTÄTIGT am 21.8.2026, Chat 21, durch Versuch.** Dieselbe Cloud-Sitzung war auf dem Tablet im Code-Bereich mit vollem Verlauf auffindbar und ansprechbar, nachdem sie auf dem iPhone gestartet worden war.
> - **Frage 3 (feste Uhrzeit / auf Befehl), VOLLSTÄNDIG BESTÄTIGT, Chat 21, durch Versuch.** Zeitplan-Teil bestätigt am 22.8.2026, 04:23 MESZ: Routine mit Zeitplan-Auslöser feuerte punktgenau, Commit-Zeitstempel 02:24:07 UTC in `TEST-ROUTINE.md`, Zweig `test/routine-22-8`. **API-Teil ebenfalls bestätigt, 22.8.2026, 11:12 Uhr:** Eine externe POST-Anfrage an die von der App gezeigte Webhook-Adresse, mit dem angezeigten Token als `Authorization: Bearer`-Header und dem Pflicht-Header `anthropic-version`, hat die Routine ausgelöst (HTTP 200) und eine neue Sitzung gestartet (`session_011hSavXeH5C4rSskMsmg6Ae`). Diese Sitzung hat `test/routine-api-22-8` angelegt, committet (`2b8c28a`, 09:13:21 UTC) und gepusht. Zweifach bestätigt - eigene Prüfung Ondos und eigene Prüfung der Chat-Sitzung, beide Ergebnisse deckungsgleich.
> - **Frage 6 (paralleles Ablegen), BEANTWORTET am 22.8.2026, Chat 21, durch echte Werkzeug-Bestandsaufnahme.** Eine Cloud-Sitzung hat ihre komplette Werkzeugliste durchsucht, nicht nur aus dem Gedächtnis geantwortet. Ergebnis: **Kein Werkzeug erreicht die klassische Projekt-Wissensablage von claude.ai** (die dieses Projekt als Kontext nutzt). Zwei ähnlich klingende, aber andere Werkzeuge existieren - `Artifact` (veröffentlicht HTML-Seiten und Dateien als eigenständige "Artifacts", unabhängig vom Repo) und `DesignSync` (schreibt in `claude.ai/design`-Projekte) - beide betreffen andere claude.ai-Bereiche, nicht die Projekt-Wissensablage. **Antwort: Nein**, paralleles Ablegen in Repo und Projektordner ist mit den vorhandenen Werkzeugen nicht möglich, unabhängig vom Gerät.
> - **Ergänzung zu Frage 6, 23.8.2026, Chat 21, dreifach durch Versuch bestätigt.** Cowork besitzt, anders als Code, tatsächlich ein Werkzeug für die Projekt-Wissensablage (`Projects`: lesen, schreiben, ersetzen, löschen). Die Synchronisierung GitHub -> Ablage läuft aber nachweislich NICHT automatisch bei einem Push - dreifach geprüft: (1) Testzeile in `README.md` committet, nach 13 Minuten reinem Warten nicht angekommen; (2) Anthropics eigene Dokumentation und ein offener Fehlerbericht bestätigen, dass automatisches Sync-bei-Push derzeit fehlt und nur ein manueller "Sync now"-Weg existiert; (3) zweiter, sauberer Test mit einer klar unterscheidbaren Zeile (`Sync-Test-2`), über 20 Minuten reines Warten ohne jede Handlung - ebenfalls nicht angekommen. **Ein funktionierender manueller Weg wurde gefunden (Ondos eigener Fund):** Die betroffene Datei zunächst aus der Kontext-Liste des Projekts entfernen, dann über den Dialog "Inhalte von GitHub hinzufügen" gezielt neu auswählen und hinzufügen - das zieht nachweislich den aktuellen Stand. Blosses "Aktualisieren" auf eine bereits vorhandene Datei tut das NICHT. Eine Rückrichtung (Ablage -> GitHub) existiert ohnehin nicht - `project_write` hätte keinen Weg zurück ins Repo, mangels jedem Git/GitHub-Schreibwerkzeug bei Cowork.
> - **Fund, unerforscht (23.8.2026, Chat 21):** Im Projekt "Ondo Control" selbst gibt es unter "Kontext" einen eigenen Abschnitt "Geplant" - "Richte wiederkehrende Aufgaben für dieses Projekt ein." Vermutlich eine projektgebundene Variante der Routinen/Cowork-Aufgaben, noch nicht geprüft. Für ein späteres Gespräch vorgemerkt.
> - **Fund (22.8.2026, Chat 21):** Auf dem iPhone zeigt die native Claude-App keinen "Routinen"-Menüpunkt. Über den mobilen Browser (`claude.ai`) ist derselbe Bereich erreichbar wie auf dem Tablet, mit identischer Auswahl der Auslöser-Arten. Die Funktion ist gerätunabhängig, nur in der nativen iPhone-App nicht sichtbar.
> - **Fund (22.8.2026, Chat 21):** Das sitzungseigene Werkzeug `fire_trigger` funktioniert nur für Routinen, die eine Sitzung SELBST angelegt hat (`created_via: agent`). Für Routinen, die über die App angelegt wurden (`created_via: http_api`), meldet es einen Berechtigungsfehler. Für solche Routinen bleibt nur der externe Weg über die angezeigte Webhook-Adresse und den Token.
> - **Fund (22.8.2026, Chat 21), für später (Punkt 58):** Eine Sitzung besitzt selbst die Werkzeuge `create_trigger` und `create_session` - sie könnte im Prinzip eigene Routinen anlegen und diese später über `fire_trigger` selbst auslösen. Nicht getestet, nur vermerkt für das zurückgestellte Gespräch über eine Routine als Sammelspeicher.
> - **Fund (22.8.2026, Chat 21):** Ein Raw-Link mit einer Commit-Kennung statt `main` (`.../<commit-hash>/Datei.md`) umgeht zuverlässig eine Zwischenspeicherung, die den Chat sonst bei wiederholtem Abruf desselben Pfades auf eine alte Fassung festhält. Wichtig für jede künftige Prüfung durch den Chat selbst.
> - **Fund (21.8.2026, Chat 21):** Eine Cloud-Sitzung darf auf GitHub Zweige anlegen, aber nicht löschen. Fünf Löschversuche scheiterten mit HTTP 403; die Umgebungsbeschreibung der Sitzung nennt das ausdrücklich eine Rechte-Grenze, keine Störung. Ein von einer Sitzung angelegter Zweig muss von Hand entfernt werden (github.com, „Branches", Mülleimer-Symbol) oder bleibt stehen.
> - **Fund (22.8.2026, Chat 21):** Beim Anlegen einer neuen Routine kann der Einrichtungsassistent Konnektoren aus früheren Routinen übernehmen, auch wenn sie zur neuen Aufgabe nicht passen. Die App warnt selbst: angehängte Konnektoren dürfen während der Ausführung ohne Rückfrage benutzt werden, einschliesslich Schreibzugriff. Vor jeder neuen Routine: Reiter „Konnektoren" prüfen, nicht benötigte entfernen.
> - **Neuer, zuverlässiger Lesezugang gefunden, 23.8.2026, zweifach durch Versuch bestätigt.** Die Adressform `github.com/OWNER/REPO/blob/main/DATEI` zeigt zuverlässig den aktuellen `main`-Stand, auch bei wiederholtem Abruf im selben Chat — anders als `raw.githubusercontent.com`, das nach dem ersten Abruf hängen bleibt. Für Dateien ausserhalb einer festen Liste: zuerst die Repo-Hauptseite (`github.com/OWNER/REPO`) abrufen, von dort den passenden Datei-Link nehmen.
> - **Fund 23.8.2026:** Die automatische Projekt-Suche (`project_knowledge_search`) liefert ebenfalls KEINEN live-aktuellen Stand — gegen einen bekannten frischen Commit geprüft, zeigte veralteten Inhalt. Dieselbe Einschränkung wie beim manuellen Ablage-Sync.
> - **Technischer Fund, 23.8.2026:** Eine über die GitHub-Verbindung synchronisierte Datei ist für eine geplante Aufgabe nur über die Projekt-Suche auffindbar, nicht über deren Schreib-/Lesewerkzeuge direkt ansprechbar (`project_read`/`project_write` melden „kein Dokument").
> - **Fund 23.8.2026:** Eine geplante Aufgabe kann eine bestehende, synchronisierte Datei NICHT überschreiben — ein Schreibversuch legt zwangsläufig eine neue, separate Datei an einem anderen Pfad an.
> - **Fund 23.8.2026:** Bei drei identischen Testläufen derselben Aufgabe, gleicher Auftragstext, drei unterschiedliche Ergebnisse (einmal neue Datei angelegt, zweimal mit unterschiedlicher Begründung abgebrochen). Das Verhalten ist nicht stabil.
> - **Fund 23.8.2026:** Der „Geplant"-Dialog im Projekt: Felder Name, Anweisungen, Berechtigungen (Manuell genehmigen / Automatisch genehmigen / Alle Genehmigungen überspringen), Modell (mehrere einzeln wählbar), Häufigkeit (Handbuch/Stündlich/Täglich/Wochentage/Wöchentlich). Kein sichtbarer Konnektoren-Reiter, anders als bei Routinen.
> - **Fund 23.8.2026:** Websuche findet das Repo nicht (vier verschiedene Anfragen erfolglos) — offenbar nicht ausreichend indexiert. Kein GitHub-Konnektor im Werkzeug-Verzeichnis gefunden (drei Suchanfragen). Beide Wege sind damit als Sackgasse dokumentiert.
> - **Fund 23.8.2026:** Das Feld „Anweisungen" des Projekts trägt seit heute die neuen Github-blob-Adressen zu den fünf Kern-Dokumenten, dazu die Anleitung, über die Repo-Hauptseite jede andere Datei zu finden. Das Feld sagt nur WIE gelesen wird, nicht OB oder WANN — das regelt weiterhin die jeweilige Übergabe oder Einzelnachricht.
> - **🔴 BERICHTIGT, noch in derselben Nacht (23./24.8.2026).** Der Weg über „Anweisungen" oben ist überholt: Der dort eingetragene Lesezugang über `github.com/.../blob/...` wurde denselben Abend mehrfach widerlegt — er lieferte veraltete Inhalte, auch bestätigt mit einem selbst erzeugten, nie zuvor benutzten Zeitanhängsel. **Das Feld „Anweisungen" ist seither wieder leer.** Der Weg zu den Dokumenten steht seither wieder in der jeweiligen Übergabe oder Einzelnachricht selbst, mit Commit-Kennung statt `main`.
> - **Status von Punkt 53, aktualisiert am 22.8.2026:** Alle sieben Fragen beantwortet - sechs bestätigt (1, 2, 3, 4, 5, 7), eine mit dem Ergebnis Nein (6). Die Untersuchung ist damit abgeschlossen. Status des Punktes bleibt "Idee" - der ursprüngliche Wunsch (Ein-Klick-Mehrfachablage an mehrere Orte) ist damit noch nicht gebaut, nur die technischen Grundlagen sind jetzt bekannt.

→ **🔴 ZURÜCKGESTELLT am 27.8.2026 (Vorschlag Claude, wie Punkt 0b/38 — nicht abgelehnt):** Das eigentliche Problem hinter Ondos Vorgabe vom 16.8. — ohne eigenes Gerät ins Repo schreiben — ist durch Cloud-/Code-Sitzungen gelöst und wird in dieser Sitzung selbst vorgeführt. Offen bleibt nur noch der ursprüngliche Ein-Klick-Mehrfachablage-Wunsch (Repo **und** Projektordner der App gleichzeitig); der Projektordner-Weg ist weiterhin technisch nicht erreichbar (unverändert seit der Untersuchung). Jederzeit neu aufgreifbar, falls der Mehrfachablage-Wunsch wieder wichtig wird.
→ **🔴 Zwei verwaiste Branches geklärt, 30.8.2026 (Auftrag Ondo):** `claude/backlog-stand-update-wgp612` (Spitze `2ebce39`) und `claude/ergebnisse-pruefen-28-8-mnq1au` (Spitze `f651e18`) waren unerklärt stehengeblieben. **Beleg statt Vermutung:** `git merge-base --is-ancestor <branch> main` bestätigt für beide **JA** — jeder Commit dieser Branches ist bereits Vorfahre von `main`, `main..branch` zeigt null eigene Commits. Beide sind also vollständig in `main` enthalten, keine fehlende Arbeit, kein Konflikt, kein Zusammenführen nötig. **Löschung versucht, wie erwartet blockiert:** `git push origin --delete claude/backlog-stand-update-wgp612` scheitert mit **HTTP 403** — dieselbe, bereits am 21.8.2026 (oben) dokumentierte Rechte-Grenze. Kein `delete_branch`-Werkzeug im GitHub-Werkzeugsatz dieser Sitzung vorhanden, keine zweite Anfrage an dieselbe, bereits belegte Grenze gestellt (Arbeitsregel D gilt hier andersherum: die Grenze ist bereits zweifach belegt, ein dritter Versuch würde nichts Neues zeigen). **Beide Branches bleiben stehen, bis Ondo sie von Hand löscht** (github.com, „Branches", Mülleimer-Symbol) — inhaltlich unbedenklich, da vollständig in `main` enthalten.

---

**58. Die Sammlung im Chat hat keinen Ablageort** · *Fund 16.8., Claude, auf Ondos Frage* · **Status: BEANTWORTET 23.8.2026 — Nein**

Ondos Frage war, ob `pruefe.py` den Chat prüfen kann, damit Beschlossenes nicht verlorengeht. **Das kann es nicht** — es liest Dateien, nicht Gespräche.

**Der eigentliche Fund liegt darunter:** Was Claude im Lauf eines Arbeitsblocks sammelt, liegt ausschliesslich im Gespräch. Es gibt keinen zweiten Ort. Geht der Speicher zur Neige oder kommt etwas dazwischen, ist alles weg, was nicht in einer Datei steht.

→ **Das ist ein belegbarer Teil der Ursache** für die neunte Fehlerart und für vergessene Zusagen. **Nicht die ganze Ursache** — die ist weiterhin unbekannt (Art. 11).
→ **Zur Entscheidung:** ein mitlaufender Merkzettel als Datei, in den jeder Beschluss sofort wandert? Das wäre wieder eine Lieferung je Beschluss — genau das, was Ondo am 16.8. beanstandet hat. **Der Widerspruch ist ungelöst; Claude legt ihn offen, statt ihn zu überspielen.**
→ **🔴 Möglicher Ausweg, neu am 20.8. (Ondo):** Hat **Claude Code** einen internen Sammelspeicher, in dem anstehende Änderungen bis zum Nachtragen liegen, und kann er sie später auf Befehl oder zu fester Uhrzeit in die Dateien schreiben, dann läge der zweite Ort dort — **ohne Lieferung je Beschluss und ohne Handarbeit**. Das würde den Widerspruch auflösen, statt ihn nur zu benennen. **Ungeprüft.** Prüfung gehört zu Punkt 53.
→ **🔴 WIDERLEGT am 21.8.2026 (Chat 20, Cloud-Sitzung):** Den vermuteten internen Sammelspeicher gibt es nicht — siehe Punkt 53, Frage 2. Eine Plandatei lag im Arbeitsverzeichnis der Sitzung, nicht im Repo, und verschwindet mit der Sitzung. **Der Widerspruch aus diesem Punkt bleibt damit ungelöst.** Der Wortlaut oben bleibt als alte Vermutung stehen.
→ **🔴 Belegter Rückfall am 20.8.:** Chat 19 hat den Übergabebedarf **nicht von selbst gemeldet**, obwohl die Übergaberegel das verlangt — Ondo musste fragen. Derselbe Mechanismus: Was nur im Gespräch liegt, wird nicht ausgelöst.
→ **🔴 Beantwortet (Ondo, 23.8.2026): Nein.** Eine geplante Aufgabe eignet sich nicht als verlässlicher automatischer Weg für die Projekt-Ablage (Belege siehe Punkt 53, neue Funde). Der manuelle Weg (Datei entfernen, über den GitHub-Dialog neu hinzufügen) bleibt der einzige zuverlässige.
→ **Kosten:** keine, solange nicht entschieden wird.

---

**57. Weitere Werkzeuge — Connectors und anderes** · *Frage 16.8., Ondo* · **Status: Idee — ungeprüft**

Ondos Frage: Es gibt Chat und Code. Gibt es weitere Möglichkeiten, die Arbeit zu erleichtern?

→ **Claude weiss es nicht.** Nichts davon ist geprüft.
→ **Nachrangig gegenüber 53 bis 56**, weil dort konkrete Vorgaben vorliegen und hier nur eine offene Frage.
→ **Kosten:** unbekannt.

---

**61. Übergaberegel für den Code-Bereich abgeschwächt** · *Vorschlag Claude, 27.8.2026, auf Ondos Rückfrage zum Arbeitsprozess* · **Status: EINGEFÜHRT 27.8.2026 — als Einzelfall, noch nicht bewährt**

Die Übergaberegel (`STAND.md`) verlangt ein Kontrollexamen mit Fangfragen und Antwortschlüssel, weil eine neue Chat-Sitzung nicht selbst nachprüfen kann, ob sie die Pflichtdokumente wirklich gelesen hat. Eine Sitzung im Code-Bereich liest die Dateien direkt aus dem Repository und kann das Lesen nicht vortäuschen — das Kontrollexamen prüft dort nichts, was nicht ohnehin nachprüfbar ist.

→ **Umgesetzt:** `STAND.md` bekommt einen eigenen, kurzen Absatz „Für den Code-Bereich" — dort genügt vollständiges Lesen der vier Pflichtdokumente plus Übernahme der offenen Backlog-Punkte, kein Antwortschlüssel.
→ **Erster Testfall:** Ein für „Chat 25" vorbereiteter Übergabetext (ursprünglich Chat 23 → 24, von Ondo als Datei geliefert) war beim Eintreffen bereits durch diese Sitzung überholt (Punkt 47 und 59 bereits erledigt, beide seit 30.8.2026 in `BACKLOG-ARCHIV.md`). Aus dem tatsächlichen Endstand dieser Sitzung wird stattdessen ein neuer, aktueller Text erstellt — ausserhalb des Repos, wie jede ausgefüllte Übergabemappe.
→ **Stabilitätsregel:** Gilt als Einzelfall, nicht sofort als Dauerregel. Ob es das wird, entscheidet sich nach diesem ersten Testfall.
→ **Kosten:** keine.

---

**62. Zusammenarbeit mit Mistral als beaufsichtigtem Mitarbeiter** · *Eingerichtet vor dem 24.8.2026, nachgetragen 27.8.2026 (Lücke gefunden über einen gelieferten Übergabetext)* · **Status: LÄUFT — erster Backlog-Eintrag, nachträglich**

Ein zweiter Arbeits-Branch `mistral` existiert seit vor dem 24.8.2026 (aktuell fünf Commits vor `main`, zuletzt `b43c38b`), ausschliesslich für eine zweite, beaufsichtigte KI (Mistral) im Code-Modus. `main` ist davon unberührt. Die Dateien `MISTRAL.md` (Regeln für Mistral, von Claude gepflegt), `MISTRAL-AUFGABEN.md` (Aufgabenliste, von Claude gepflegt) und `MISTRAL-ERLEDIGT.md` (Ergebnisprotokoll, von Mistral gepflegt) liegen nur auf diesem Branch. Mistral arbeitet ausschliesslich dort, nie auf `main`, ohne eigene Entscheidung über die nächste Aufgabe — die kommt von Claude. Punkt 47 (Selbsttest für `beta.html`, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) wurde über diesen Weg gebaut und von Claude gegengeprüft.

→ **🔴 Lücke, die zu diesem Nachtrag geführt hat:** Trotz mehrerer Aufgaben und Tage Zusammenarbeit hatte Mistral bis heute **keinen eigenen Backlog-Punkt** — nur auf dem `mistral`-Branch in `MISTRAL.md` dokumentiert, gegen den Geist von Arbeitsregel F. Gefunden über einen von Ondo gelieferten, sonst veralteten Übergabetext (Chat 23 → 24).
→ **🔴 Dabei mit entdeckt, festgehalten als Warnung:** Eine frühere Testsitzung („Chat 24") hat `CLAUDE.md` nachweislich korrekt abgerufen, danach aber einen falschen Fund behauptet — angeblich stehe dort `reset --hard` statt `merge --ff-only`. Das existiert nicht in der Datei, zweifach durch eigenen Abruf widerlegt. Richtig gelesen, falsch wiedergegeben — keine der acht bekannten Fehlerarten, sondern ein Gedächtnisfehler beim Zusammenfassen. Kein Codeänderung, nur eine Warnung für künftige Zusammenfassungen (Arbeitsregel H: belegen statt herleiten).
→ **Git-Regel für den Branch:** Für `main` gilt `--ff-only` beim Holen. Für `mistral` gilt das NICHT — dort ein normaler Merge, weil der Branch eigene Commits trägt, die `main` nicht hat.
→ **🔴 Auf dem Prüfstand seit 28.8.2026 (Ondo):** Mistrals weitere Beteiligung an Ondo Control ist offen und Ondos Entscheidung — nicht dasselbe wie „läuft bereits" oben, das beschreibt nur den technischen Ist-Zustand. **Ondos Absicht** (ausdrücklich Absicht, kein Beschluss): Mistral in einem eigenen, separaten Projekt durch Claude und ChatGPT schulen zu lassen, mit dem Ziel, ihn später möglicherweise als lokal laufendes Modell zu nutzen. **Claudes Einordnung dazu:** Ein lokal laufendes Modell hat keine Websuche und käme deshalb weder als Gehirn (braucht Websuche für Marktaussagen) noch als Schiedsrichter (braucht Websuche für Endstände) in Frage — wohl aber als Prüfer für Dokumente, Code und Skripte, wo keine Websuche nötig ist.
→ **Kosten:** keine neuen, die Zusammenarbeit läuft bereits.

---

**63. `selbsttest.py` auf weitere Kernfunktionen ausweiten** · *Vorschlag 27.8.2026, aus einem Strukturvergleich mit `ondo-jarvis` (unabhängige Sitzung mit Zugriff auf beide Repos), befürwortet von Chat 25 und Claude* · **Status: Idee — noch nicht gebaut**

`selbsttest.py` (Punkt 47, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) deckt bisher eine Funktion ab (`marktUrteil`). Vorschlag: schrittweise weitere Kernfunktionen mit festen Rechenproben absichern — die Dubletten-Sperre in `spielListeHolen`, die 2,5-Stunden-Regel des Schiedsrichters, die Datums-/Wettbewerbsprüfung. Das sind genau die Fehlerarten, die `STAND.md` bereits als wiederkehrend dokumentiert (Der Schiedsrichter — zehn Fehlerarten · Die Spielliste — drei Fehlerarten).

→ **Bewusst nicht gebaut, sondern nur aufgenommen (Arbeitsregel L):** Sieben ältere, bereits beschlossene Punkte (E, 2, 3, 4, 49, 50, 51) sind weiterhin nicht gebaut, der älteste seit dem 25.7. Dieser Punkt ist neu und noch nicht beschlossen — er reiht sich hinten ein, statt die älteren zu überholen.
→ **Kosten:** klein, in Stücken baubar, kein Geld, keine grosse Umbauarbeit — ähnlich wie Punkt 47 selbst (ebenfalls seit 30.8.2026 in `BACKLOG-ARCHIV.md`).

---

**64. Rohe Schiedsrichter-Antwort mitschreiben** · *Vorschlag Claude, 28.8.2026, aus der Restarbeit zu Punkt 51 (seit 30.8.2026 in `BACKLOG-ARCHIV.md`) · von Ondo in Chat 25 entschieden, „wenn alles passt" · nachgetragen und gebaut 28.8.2026 · Teil 3 am 2.9.2026 zurückgenommen* · **Status: 🔴 Mitschreiben GEBAUT am 28.8.2026 (`beta.html` v19.8.5) — die zwei Celje/Sabah-Fälle WARTEN WEITER AUF DIE REPARATUR DES SCHIEDSRICHTERS (Stand seit der Rücknahme vom 2.9.2026)**

> **🔴 ZURÜCKGENOMMEN am 2.9.2026 (Entscheidung Ondos), `beta.html` v19.8.11.** Die manuelle Eintragung der beiden Spiele (unten, „Nachfrage 30.8.2026, Teil 3", berichtigt in v19.8.10) **war verfrüht** und ist zurückgesetzt. **Ondos Klarstellung, die den Ausschlag gab:** „Der Schiedsrichter ist repariert" heisst — **er liefert ab sofort nur noch richtige, zuverlässige Ergebnisse für alle künftigen Spiele, ohne Gegenprüfung im Chat.** Diese Bedingung ist nicht erfüllt; die elfte Fehlerart besteht unverändert. Damit galt die Auflage aus diesem Punkt („Neubewertung dieser beiden Spiele erst, sobald die Ursache der elften Fehlerart geklärt und der Schiedsrichter entsprechend repariert ist") am 30.8.2026 unverändert weiter — sie ist übergangen worden.
>
> **Was zurückgesetzt wurde:** Neue Migration `state.seedV<8` entfernt bei beiden Einträgen Endstand, Halbzeit, Verlängerung und `ergebnisQuelle`, setzt alle Märkte und den Eintrag wieder auf `offen`, `geparkt` wieder auf `true` und `parkGrund` wieder auf `'unstable_ref'`. Beide fallen damit wieder vollständig aus der Kalibrierung heraus.
> **Kein Datumskriterium mehr:** Anker ist `e.ergebnisQuelle==='extern_manuell'` — dieses Feld setzen ausschliesslich `seedV<6` und `seedV<7`, und ausschliesslich für diese zwei Spiele. Die Stichwörter (`celje`+`bratislava` bzw. `sabah`+`beer`) bleiben als zweite, unabhängige Bedingung. Damit ist die ganze Datumsfrage, die diesen Punkt zweimal in die Irre geführt hat, für die Rücknahme gegenstandslos.
> **Neue Gate-Nummer statt Änderung an `seedV<7`:** `seedV<7` ist bei Ondo bereits gelaufen (die App läuft laut Bildschirmfoto vom 2.9.2026 auf v19.8.10), eine Änderung an derselben Nummer würde dort nie mehr ausgeführt. `seedV<7` bleibt unverändert stehen — ausdrückliche Auflage des Auftrags.
> **Nicht angetastet, wie im Auftrag verlangt:** `state.seedV<7`, `refRohAbgleich()` und der `refRoh`-Export. **`e.refRoh` bleibt vollständig erhalten** — die rohen Schiedsrichter-Antworten sind der Beleg für die elfte Fehlerart und werden nicht gelöscht.
> **🔴 Abweichung vom Wortlaut des Auftrags, mit Rückfrage geklärt (Art. 11):** Der Auftrag nannte nur Sabah und hielt NK Celje–Slovan Bratislava für „bereits geparkt". Der Code belegt das Gegenteil — `seedV<7` (Zeile 597–628) entparkt und bewertet **beide** Spiele. Vor der Änderung rückgefragt statt geraten; Ondo hat am 2.9.2026 entschieden, **beide** zurückzunehmen. Seine Begründung trifft auf Celje genauso zu wie auf Sabah.
> **Verifiziert:** `node --check` bestanden. Trockentest am Nachbau der neuen Migration auf Kunstdaten, 16 Prüfungen, alle bestanden: beide Spiele vollständig zurückgesetzt · `refRoh` unberührt · unbeteiligtes bewertetes Spiel unberührt · unbeteiligtes geparktes Spiel unberührt · gleiche Stichwörter ohne `extern_manuell` nicht angefasst · zweiter Durchlauf ändert nichts (idempotent) · bei `seedV=8` läuft der Block nicht erneut · datumsunabhängig. `pruefe.py`: ALLES SAUBER.
> **Folge für die Messzahlen:** Die Kennzahlen im Abschnitt „Aktueller Messstand" von `STAND.md` (abgelesen am 2.9.2026) enthalten die beiden Spiele **noch**. Sie fallen erst heraus, wenn Ondo v19.8.11 lädt. **Der nächste Messstand ist neu abzulesen, nicht aus dem jetzigen fortzuschreiben** (Fehlerart C1).
> **Was NICHT zurückgenommen ist:** die externe Recherche selbst. Die belegten Werte (Sabah 3:2, HZ 1:1, n.Verl. 5:2 · Celje 1:1, HZ 1:1, n.Verl. 1:2) und die Datumsberichtigung (Sabah 25.8.2026, Celje 26.8.2026) bleiben richtig und stehen weiterhin in `STAND.md`. Zurückgenommen ist nur ihre Eintragung in die Messdaten.

> **🔴 Nachtrag (Arbeitsregel F):** Diese Entscheidung stand bereits aus einem vorherigen Chat (Chat 25), unter der Bedingung „wenn alles passt" — bisher nicht im Backlog nachgetragen. Wird mit dieser Lieferung nachgeholt, nicht erst nachträglich behauptet.

Bei NK Celje–Slovan Bratislava und Sabah FC–Hapoel Beer-Sheva FC lieferte der Schiedsrichter an drei Läufen drei verschiedene Endstände, trotz Temperatur 0 (siehe `STAND.md`, elfte Fehlerart). **Belegt (Codezitat):** In `geminiCall` (`beta.html`, Zeile 1141/1145) wird der rohe Antworttext `txt` nur zurückgegeben, nie in `state` geschrieben. `parseJsonBlock` (Zeile 1167ff.) extrahiert daraus nur den JSON-Block und verwirft den Rest. `verarbeite` (Zeile 1529ff.) übernimmt in `pruefListe` ausschliesslich die geparsten Felder (Status, Tore, Halbzeit, Quelle). **Die rohe Antwort existiert nirgends mehr, sobald der Lauf durch ist** — deshalb liess sich die Ursache der drei widersprüchlichen Celje/Sabah-Läufe im Nachhinein nicht rekonstruieren.

→ **Vorschlag:** Die rohe Antwort zusätzlich mitschreiben — z. B. als zusätzliches Feld am geparkten oder offenen Eintrag in `pruefListe` bzw. `state.kiProtokoll`. Zweck: Künftige Abweichungen wie bei Celje und Sabah wären nachträglich nachvollziehbar, nicht nur als Symptom sichtbar.
→ **Kein Schnitt in der Messreihe:** Der Schiedsrichter ist Messwerkzeug, nicht Messgegenstand (dieselbe Begründung wie bei Punkt 26) — eine Änderung an seiner Protokollierung berührt die Bewertung der Gehirne nicht.
→ **Kosten (Arbeitsregel G):** eine Codeänderung an der Stelle, die das Schiedsrichter-Ergebnis entgegennimmt (`verarbeite`, `pruefListe`); etwas mehr gespeicherter Text je Prüflauf, kein zusätzlicher Modellaufruf, kein Geld.
→ **🔴 GEBAUT am 28.8.2026, `beta.html` v19.8.5.** `verarbeite()` hängt jetzt ganz am Anfang — vor jeder Statusprüfung, gilt also für fertig/läuft/fehlt gleichermassen, nicht nur bei einem Fehlschlag — die volle rohe Antwort dieser Runde an jeden betroffenen `state.kiProtokoll`-Eintrag an (`e.refRoh`, Array statt Einzelfeld: mehrere Läufe für dasselbe Spiel überschreiben sich nicht, genau der Celje/Sabah-Fall). **`save()` läuft jetzt nach jeder Runde**, nicht erst bei `pruefAnwenden()` — sonst wären die rohen Antworten verloren, wenn ein Vorschlag nie übernommen wird, wie bei allen drei Celje/Sabah-Läufen geschehen. Zusätzlich in `pruefListe` als `rohAntwort` für die laufende Anzeige (nicht persistiert). Bewusst nur für `art==='log'` (kiProtokoll), nicht für `state.bets`. Bewusst nicht im „Messdaten ohne Schlüssel"-Export (Punkt 44) — würde ihn aufblähen; die normale Sicherung erfasst `refRoh` automatisch mit.
→ **🔴 Celje/Sabah markiert, im selben Zug (28.8.2026):** Neues Feld `parkGrund` (bisher gab es nur `e.geparkt` als Boolean, kein Grund-Feld). Einmalige, automatische Migration in `load()` (`state.seedV<5`, dasselbe Muster wie die bestehende v18-Archiv-Markierung) setzt `parkGrund:'unstable_ref'` bei geparkten Einträgen, deren Datum und Spielname (Stichwörter, klein geschrieben) zu NK Celje–Slovan Bratislava (~~25.8.~~ **richtig: 26.8., siehe Fassung 67**) bzw. Sabah FC–Hapoel Beer-Sheva FC (~~26.8.~~ **richtig: 25.8., siehe Fassung 67**) passen — das damals kodierte Datum war vertauscht, die Markierung wirkte dadurch möglicherweise nicht auf die echten Einträge (`e.geparkt` selbst blieb davon unberührt, Ondo hatte manuell geparkt). **Grenze, offen ausgesprochen:** Stichwort- statt Exakt-Vergleich, weil `match` roh vom jeweiligen Gehirn stammt und leicht unterschiedlich geschrieben sein kann (dieselbe Grenze wie bei Punkt 51 (seit 30.8.2026 in `BACKLOG-ARCHIV.md`)) — kein „zweifelsfrei" wie dort, sondern ein einmaliges, gezieltes Markieren zweier bekannter Spiele. Deshalb zusätzlich **sichtbar im Log** (Text- und Kartenansicht), damit Ondo nach der Lieferung selbst sieht, ob genau die richtigen Einträge markiert sind. **Bedingung, ausdrücklich: Neubewertung dieser beiden Spiele erst, sobald die Ursache der elften Fehlerart geklärt und der Schiedsrichter entsprechend repariert ist — nicht jetzt, kein Entparken, keine rückwirkende Rekonstruktion der bereits gelaufenen Antworten (nicht möglich, sie existieren nicht mehr).** Leeds-Leipzig (Punkt 36) ist ein anderer Fall und unberührt.
→ **Verifiziert:** `node --check` bestanden. Nicht committeter Python-Nachbau mit drei Fixture-Fällen (mehrere Läufe überschreiben `refRoh` nicht · Stichwortmuster markiert genau Celje/Sabah, nicht Leeds oder ein unbeteiligtes geparktes Spiel · ein bereits markierter Eintrag wird beim erneuten Durchlauf nicht doppelt verändert) — alle drei bestanden. `pruefe.py` danach: ALLES SAUBER.
→ **🔴 Nachfrage 28.8.2026, ERGÄNZT, `beta.html` v19.8.6: Modellversion bei `refRoh`.** Geprüft und belegt (`ai.google.dev`, GenerateContentResponse): Die Gemini-API liefert ein eigenes Feld `modelVersion` — die tatsächlich aufgelöste Version, nicht den aufgerufenen `gemini-flash-latest`-Alias (dokumentiertes Beispiel: Aufruf über `gemini-1.5-flash-latest` lieferte `modelVersion:"gemini-1.5-flash-002"`). `geminiCall()` verwarf dieses Feld bisher zusammen mit dem restlichen rohen `res`. Jetzt wird es durchgereicht und landet als `modell` an jedem neuen `refRoh`-Eintrag — bei Gemini die aufgelöste Version (oder `null`, falls sie ausnahmsweise fehlt, ausdrücklich nicht geraten, Art. 11/14), beim Sonnet-Rückfallpfad der feste, alias-freie Modellname `claude-sonnet-4-6`. **Gilt nur für künftige Läufe** — keine rückwirkende Ergänzung, es gab ohnehin noch keinen Prüflauf mit `refRoh` seit dem 28.8.2026. **Verifiziert:** `node --check` bestanden, drei Fixture-Fälle im Python-Nachbau bestanden (Gemini mit vorhandener Version · Gemini ohne Version → `null`, nicht geraten · Sonnet-Pfad immer fest), `pruefe.py` danach: ALLES SAUBER.
→ **🔴 Nachfrage 30.8.2026, ERGÄNZT, `beta.html` v19.8.8: `refRoh` lesbar gemacht.** `e.refRoh` wurde seit v19.8.5 zwar gespeichert, aber nirgends angezeigt oder ausgegeben — für Ondo nicht lesbar. Neuer Knopf im selben Kartenbereich wie der bestehende „Log als Text"-Export (`logExportBlock()`), nutzt dieselben Zeitraumfelder (`logVon`/`logBis`), keine eigene Datumsauswahl: `refRohTextBauen()` gibt zu den im Zeitraum gefundenen Einträgen zusätzlich den vollen `refRoh`-Text aus (je Lauf: Nummer, Datum, Modell, Rohtext), Kopierknopf wie beim bestehenden Export. Fehlt `refRoh` (jeder Eintrag vor v19.8.5): „kein refRoh gespeichert" statt leerem Text. Liest nur `datum`, `anpfiff`, `match`, `wettbewerb`, `herkunft`, `refRoh` — kein Zugriff auf `apiKey`, `geminiKey` oder `pin`, dieselbe Positivauswahl wie beim bestehenden „Log als Text"-Knopf. Kein Schnitt in der Messreihe, liest nur bestehende Daten neu aus. **2 neue Sprachschlüssel** (`refRohBtn`, `refRohEmpty`) — **mehr als die in der Anfrage erwähnte „evtl. eine Knopfbeschriftung", ausdrücklich gemeldet:** ein zweiter Schlüssel kam für die übersetzbare Fallback-Meldung dazu. **Verifiziert:** `node --check` bestanden. Trockentest (Nachbau der Kernlogik auf Kunstdaten, nicht die App selbst) mit einem Eintrag MIT `refRoh` und einem OHNE (wie vor v19.8.5) — beide Fälle korrekt, dazu ein leerer Zeitraum → Fallback-Meldung statt leerem Text — alle bestanden. `pruefe.py` danach: ALLES SAUBER.
→ **🔴 Nachfrage 30.8.2026, ERGÄNZT, `beta.html` v19.8.9, drei Teile.**
**Teil 1 (Codezitat, keine Vermutung):** Bestätigt, aber genauer als vermutet — es gibt **keinen** Auswahlmechanismus unter mehreren `refRoh`-Läufen. `pruefListe` wird bei jedem Druck auf „Ergebnisse prüfen" komplett neu aufgebaut (Zeile 1674: `pruefListe=[]; pruefBilanz=null;`), `verarbeite()` (ab Zeile 1701) berechnet `heim`/`gast` ausschliesslich aus der aktuellen Antwort `r`, nie aus `e.refRoh`. Frühere Läufe werden beim nächsten Tastendruck ersatzlos verworfen, nicht verglichen — es „gewinnt" nicht der letzte Lauf durch eine Regel, es gibt schlicht kein Gedächtnis für die davor.
**Teil 2 gebaut:** Neues Feld `geparst` an jedem `refRoh`-Eintrag mit bestätigtem Ergebnis (`{heim, gast, halbzeit, verl}`, gesetzt in `verarbeite()` direkt nach der Status-Prüfung, nur für kuenftige Läufe). Neue Funktion `refRohAbgleich(e)` gruppiert die geparsten Läufe eines Eintrags nach 90-Minuten-Stand und nach Verlängerung; gibt `null` zurück, wenn es weniger als zwei geparste Läufe gibt oder sie übereinstimmen, sonst eine Gruppierung je Wert. In `vorhersageKarte()` als Warnzeile angezeigt („⚠ Schiedsrichter-Läufe widersprechen sich: X von Y Läufen: WERT"), statt unkommentiert einen Wert zu zeigen — Ondo entscheidet selbst (Arbeitsregel „Auswählen ist eine Entscheidung, Ablesen nicht"). **Grenze, offen ausgesprochen:** Ältere `refRoh`-Einträge ohne `geparst` (alle vor dieser Version, darunter die historischen Celje/Sabah-Läufe) zählen nicht mit — die Anzeige wirkt nur für künftige Läufe, rekonstruiert nichts rückwirkend.
**Teil 3 gebaut:** NK Celje–Slovan Bratislava (~~25.8.2026~~ **richtig: 26.8.2026, siehe Fassung 67**, 90 Min. 1:1, HZ 1:1, n.Verl. 1:2) und Sabah FC–Hapoel Beer-Sheva FC (~~26.8.2026~~ **richtig: 25.8.2026, siehe Fassung 67**, 90 Min. 3:2, HZ 1:1, n.Verl. 5:2) extern verifiziert (Sabahs viertes Tor fiel in der 90+4., noch in der Nachspielzeit der regulären Spielzeit — deshalb 3:2, nicht das zuvor vom Schiedsrichter vorgeschlagene 2:2) und von Hand eingetragen. Einmalige Migration in `load()` (`state.seedV<6`, dasselbe Muster wie die bestehende `parkGrund`-Migration `seedV<5`): setzt `ergebnisHeim`/`ergebnisGast`/`ergebnisHalbzeit`/`ergebnisVerl`, bewertet die Märkte wie ein normales Übernehmen (`marktUrteil`, wie in `pruefAnwenden()`), setzt `status:'bewertet'`, hebt `geparkt` auf und entfernt `parkGrund` — beide fliessen ab jetzt normal in die Kalibrierung ein. Herkunft ehrlich gekennzeichnet (Art. 14): neues Feld `ergebnisQuelle:'extern_manuell'`, in der Karte als eigene Zeile sichtbar. **Bewusst nur `state.kiProtokoll`** — `state.bets` bleibt unberührt, weil `pruefAnwenden()` selbst keine Übernehmen-Logik für Wettscheine kennt (bestehende Lücke, nicht Gegenstand dieser Lieferung). **Behebt nicht die elfte Fehlerart selbst** (der Schiedsrichter bleibt unzuverlässig), nur diese zwei konkreten Fälle.
**Dabei selbst gefunden, im selben Zug berichtigt (Arbeitsregel „Berichtigen statt danebenstellen"):** Beim Bearbeiten der zugehörigen Zeile in `STAND.md` (Fehlerart 11) fiel ein Widerspruch auf, der mit dieser Aufgabe nichts zu tun hatte — die Zeile behauptete „keiner der sechs Läufe traf den extern belegten Wert (Celje 1:2, Sabah 5:2)", obwohl genau diese Zahlen schon als einer der drei App-Läufe je Spiel aufgeführt waren. Berichtigt auf die jetzt frisch bestätigten Werte, mit Vermerk, siehe `STAND.md`.
**Zweiter Widerspruch, per Rückfrage geklärt, nicht selbst aufgelöst:** Die Anfrage nannte die Daten der beiden Spiele umgekehrt zur bisherigen Dokumentation (Celje/Sabah vertauscht). Vor jeder Codeänderung per `AskUserQuestion` rückgefragt statt geraten (Art. 11/14) — Ondo hat die bisherige Dokumentation bestätigt (Celje 25.8., Sabah 26.8.), die aktuelle Nachricht enthielt an dieser Stelle einen Verschreiber. **🔴 Berichtigung, selber Tag (Fassung 67):** Diese Bestätigung war selbst ein Irrtum — die bisherige Dokumentation war die ganze Zeit vertauscht (seit v19.8.5, 28.8.2026), nicht erst durch den Verschreiber in dieser Nachricht. Richtig, mehrfach extern belegt: Celje 26.8., Sabah 25.8.
**Verifiziert:** `node --check` bestanden. Trockentest (Nachbau von `refRohAbgleich()` und der Migrationslogik auf Kunstdaten, nicht die App selbst): widersprechende Läufe (drei verschiedene 90-Minuten-Stände) erkannt · übereinstimmende Läufe kein Widerspruch · nur ein geparster Lauf kein Widerspruch (zu wenig Vergleichsbasis) · ältere Läufe ohne `geparst` zählen nicht mit · Widerspruch nur bei der Verlängerung, nicht beim 90-Minuten-Stand, ebenfalls erkannt · Migration trifft genau Celje und Sabah, nicht ein unbeteiligtes geparktes Spiel, und überschreibt kein bereits bewertetes Spiel — alle Fälle bestanden. `pruefe.py` danach: ALLES SAUBER.
**3 neue Sprachschlüssel** (`refWiderspruch`, `refRunsVon`, `ergebnisManuell`). Kein Schnitt in der Messreihe.
→ **🔴 Nachfrage 30.8.2026, ERGÄNZT, `beta.html` v19.8.10: Celje/Sabah-Daten waren die ganze Zeit vertauscht.** Ondo hat nach mehrfacher externer Gegenprüfung (ESPN, UEFA.com, Sofascore, TNT Sports, Flashscore, plus das KI-Log selbst) klargestellt: **Sabah FC–Hapoel Beer-Sheva FC = 25.8.2026, NK Celje–Slovan Bratislava = 26.8.2026** — seit v19.8.5 (28.8.2026) durchgehend umgekehrt dokumentiert und kodiert, auch die Rückfrage-Bestätigung von Fassung 66 beruhte auf derselben, damals ungeprüft übernommenen Fehlannahme. **Codezitat zur Frage, ob falsch zugeordnet wurde:** In der `seedV<6`-Migration (Zeile 548–550) müssen Datum UND beide Stichwörter gleichzeitig zutreffen; da Celjes Stichwörter (`celje`,`bratislava`) nie mit Sabahs (`sabah`,`beer`) kollidieren können, war eine Vertauschung zwischen den zwei Spielen strukturell ausgeschlossen — die einzig mögliche Fehlwirkung war Nicht-Zuordnung, kein Datenschaden. Diese Code-Sitzung hat keinen Zugriff auf Ondos Browser-`localStorage`, kann also kein „vorher/nachher" an den echten Daten belegen. **Berichtigt, nicht rückwirkend an `seedV<6` geändert** (könnte bei Ondo schon gelaufen sein): neue Migration `state.seedV<7`, akzeptiert beide Tage (25./26.8.2026) für beide Spiele, verlangt zusätzlich `e.geparkt===true`. `STAND.md`s Fehlerart-11-Zeile und „Versionen"-Einträge (v19.8.5, v19.8.9) mit Streichung und Vermerk berichtigt. **Verifiziert:** `node --check` bestanden. Trockentest bestanden (echte Daten korrekt zugeordnet, bereits Bewertetes nicht überschrieben, nicht geparktes/unbeteiligtes Spiel unberührt, keine Vertauschung möglich, auch bei gleichem Datum). `pruefe.py` danach: ALLES SAUBER.

---

**68. Mehrfachlauf-Absicherung des Schiedsrichters — drei Läufe statt einem** · *Auftrag Ondo, 3.9.2026 · gebaut am selben Tag* · **Status: 🔴 GEBAUT am 3.9.2026 — Bewährung steht aus**

**Nummernwahl:** Ondos Vorschlag war 68; gegen den Backlog und `BACKLOG-ARCHIV.md` geprüft — der höchste vergebene Punkt ist 67 (archiviert), 68 war frei. Keine Kollision.

**Der Befund, der dahintersteht (Codezitat, keine Vermutung).** Bis v19.8.11 entschied **ein einziger** Schiedsrichter-Lauf allein. `pruefListe` wird bei jedem Druck auf „Ergebnisse prüfen" komplett neu aufgebaut, `verarbeite()` rechnete den Vorschlag ausschliesslich aus der aktuellen Antwort. Es gab kein Gedächtnis für frühere Läufe und keinen Vergleich — das ist die Lage, die die elfte Fehlerart erst möglich macht (Sabah: drei Läufe, drei Endstände; Celje: drei Läufe, drei Stände).

→ **🔴 GEBAUT, `beta.html` v19.8.12 — drei Läufe, parallel.** Je Runde werden **drei** Läufe mit demselben Auftragstext **gleichzeitig** abgeschickt (`Promise.all`), nicht nacheinander — die Wartezeit ist damit ungefähr die des langsamsten Laufs, nicht das Dreifache. Zwei laufen über Gemini, **einer über den bestehenden Sonnet-Rückfallpfad** (`claude-sonnet-4-6` mit Websuche); mindestens ein Lauf liegt also auf einem anderen Modell. **Steht nur ein Anbieter zur Verfügung, laufen alle drei dort** — das wird in der Bilanz sichtbar gemeldet (`refEinAnbieter`), nicht stillschweigend hingenommen (Art. 14).
→ **Nebenwirkung, ausdrücklich gewollt:** Ein Fehler in einem Lauf wirft nicht mehr die ganze Runde weg. Bis v19.8.11 beendete ein einziger Fehlschlag den gesamten Prüflauf.

**EINIGKEITSREGEL (Entscheidung Ondos, 3.9.2026) — so gebaut:**

| Lage der drei Läufe | Was die App tut |
|---|---|
| alle drei gleich | übernehmen, **keine** Markierung nötig |
| genau zwei gleich, einer weicht ab | übernehmen mit dem Mehrheitswert, **sichtbare** Markierung `e.refEinigkeit='2von3'` in Karte **und** Log-Text-Export |
| alle drei verschieden | **parken**, `parkGrund:'unstable_ref'` (bestehendes Feld), `e.refEinigkeit='3verschieden'`, kein Vorschlag |
| weniger als drei brauchbare Läufe | nichts übernehmen, im nächsten Durchgang erneut fragen; Eintrag bleibt **offen**, wird **nicht** geparkt |

**Die Markierung ist Pflichtbestandteil dieser Regel, kein optionales Extra** — ohne sie darf eine Zwei-gegen-eins-Lage nicht übernommen werden. Sie wird in `pruefAnwenden()` an den Eintrag geschrieben und ist deshalb später **auswertbar**: Ob 2-von-3-Fälle seltener zutreffen als einstimmige, lässt sich dann an den Daten messen statt vermuten. Verglichen wird der 90-Minuten-Stand zusammen mit dem Verlängerungsstand.

**VIER FESTE PRÜFUNGEN IM CODE, OHNE MODELL** (`refLaufPruefen()`, oberste Ebene, damit im Trockentest einzeln aufrufbar). Was hier scheitert, scheitert an Arithmetik, nicht an einem Urteil:
1. **Halbzeitstand nie höher als der 90-Minuten-Stand**, je Mannschaft geprüft. Bis v19.8.11 war das nur eine Warnung an Ondo (`warnP`); jetzt wird der Lauf **verworfen**. Die Warnzeile bleibt zusätzlich erhalten.
2. **Ein torloses 0:0 nur bei ausdrücklichem Status.** Der Auftragstext verlangt bei 0:0 zusätzlich `torlos:"bestaetigt"`; fehlt es, wird der Lauf verworfen. Das ist Geminis Vorschlag vom 8.8.2026 (Zustand vor Ziffer) — erstmals gibt es ein Feld, **dessen Fehlen auffällt**. Blosses Fehlen von Ziffern fiel schon vorher heraus.
3. **Bei Verlängerung müssen beide Stände getrennt genannt sein** (`verlaengerungGespielt` plus `verlaengerung`), und der Verlängerungsstand darf je Mannschaft nicht **unter** dem 90-Minuten-Stand liegen. Das zielt auf die zehnte Fehlerart (11.8.2026, ein Verlängerungsstand stand als 90-Minuten-Wert in den Messdaten).
4. **Sonderformat** (Punkt 36): ein einziger meldender Lauf parkt den Eintrag sofort.

**Wichtig für die Nachvollziehbarkeit:** Ein verworfener Lauf verschwindet **nicht**. Seine volle Rohantwort bleibt in `e.refRoh`, sein geparster Stand wird weiterhin vermerkt, und `refRohAbgleich()` zeigt ihn unverändert an. Verworfene Läufe werden ausserdem im Vorschlag und in der Text-Ausgabe benannt (`refVerworfen`), mit Grund.

**Umbau, der dafür nötig war:** `verarbeite()` entscheidet nicht mehr selbst. Es schreibt den Rohtext mit, prüft den einzelnen Lauf und legt ihn in `p.laeufe` ab; entschieden wird erst in der neuen Funktion `pruefAuswerten()`, wenn alle drei Läufe da sind. **Grund:** v19.8.9 setzte `geparst` am **zuletzt** gepushten `refRoh`-Eintrag — das trug bei einem Lauf je Runde, bei drei gleichzeitigen nicht mehr. Jede refRoh-Zeile wird jetzt als Referenz festgehalten und bekommt den Stand **ihres eigenen** Laufs.

→ **Verifiziert:** `node --check` bestanden. **Trockentest bestanden — 57 Prüfungen, alle bestanden.** Er läuft ausdrücklich **nicht** an einem Nachbau: Die geprüften Funktionen (`quelleUnzuverlaessig`, `refLaufPruefen`, `refEinigkeit`, `verarbeite`, `parkeEintraege`, `pruefAuswerten`, `refRohAbgleich`) werden im Wortlaut aus `beta.html` herausgeschnitten und ausgeführt; nur die Umgebung ist gestellt. Geprüfte Fälle: 3/3-Einigkeit · 2/3 mit sichtbarer Markierung · drei verschiedene Werte → geparkt · ein Lauf meldet Sonderformat → geparkt trotz zweier einiger Läufe · Halbzeit > Endstand abgefangen · 0:0 ohne ausdrücklichen Status abgefangen · Verlängerung ohne getrennte Stände abgefangen · Verlängerungsstand kleiner als 90 Minuten abgefangen · dieselbe Quelle in allen drei Läufen zählt als ein Beleg · Wettseite erkannt und nicht als Beleg gezählt · „läuft noch" bleibt erhalten · gar keine Antwort parkt nicht. `pruefe.py`: ALLES SAUBER.
→ **7 neue Sprachschlüssel** (`refEinig2von3`, `refQuellenZahl`, `refVerworfen`, `parkGrundFormat`, `refEinAnbieter`, `refDauer`, `balGeparkt`), 234 → 241.
→ **Kosten (Arbeitsregel G) — grobe Richtung, keine genaue Zahl; die kennen nur Anthropic und Google:**
  - **Rund die dreifache Anzahl Schiedsrichter-Modellaufrufe** je Prüfrunde. **Keine zusätzlichen Vorhersage-Aufrufe** — die Gehirne sind unverändert.
  - **Neu: echtes Geld bei Anthropic.** Der dritte Lauf geht über `claude-sonnet-4-6` mit Websuche. Bisher lief Sonnet nur als Rückfall, wenn kein Gemini-Schlüssel vorhanden war. Websuchen kosten je Suche (Kosten-Nachtrag Blueprint Abschnitt 6).
  - **Wartezeit:** durch die parallele Ausführung ungefähr die Dauer des langsamsten Laufs, nicht das Dreifache. Belastbar erst nach der Messung (Teil 4).
  - **Speicher:** `e.refRoh` wächst dreimal so schnell, in `localStorage` und in der Sicherungsdatei.
→ **🔴 Ehrlich zu nennende Zweitwirkung (Art. 14):** Die strengeren Regeln lassen voraussichtlich **mehr Spiele offen oder geparkt** als vorher. Geparkte Einträge erreichen den Status „richtig"/„falsch" nie und fliessen nie in die Kalibrierung ein — **die bereits dokumentierte Verzerrung durch Parkung wird dadurch eher grösser, nicht kleiner.** Das ist der Preis dafür, dass weniger falsche Endstände in die Messdaten geraten; es ist kein Nebeneffekt, den man wegdiskutieren kann.
→ **🔴 Was dieser Punkt NICHT leistet:** Er behebt die elfte Fehlerart nicht. Drei Läufe auf zwei Modellen sind **keine** drei unabhängigen Quellen, und drei einige Läufe können gemeinsam falsch liegen — genau das ist am 8.8.2026 bei den Anpfiffzeiten belegt (sieben von zehn falsch, **beide** Gehirne übereinstimmend). Ob die Absicherung wirkt, zeigt erst der Betrieb (Stabilitätsregel). **Nach Ondos eigener Definition** — der Schiedsrichter liefert zuverlässige Ergebnisse für alle künftigen Spiele **ohne Gegenprüfung im Chat** — ist er weiterhin **nicht repariert.**
→ **Keine rückwirkende Neubewertung.** Sabah und Celje bleiben geparkt, unabhängig vom Ausgang dieses Umbaus (ausdrückliche Auflage des Auftrags, und die Bedingung aus Punkt 64 gilt unverändert weiter).
→ **🔴 Ondos Rückfrage bei der Planfreigabe, hier beantwortet: Können die neue Markierung `2von3` und die bestehende Warnung aus `refRohAbgleich()` beim selben Eintrag gleichzeitig erscheinen?** **Ja, und das ist der Regelfall bei 2 von 3 — es ist kein Widerspruch.** Die beiden Zeilen sagen Verschiedenes und stehen untereinander: Die obere („nicht einstimmig — 2 von 3 Läufen") sagt, **dass** ein Wert übernommen wurde und wie knapp. Die untere („Schiedsrichter-Läufe widersprechen sich: 2 von 3 Läufen: 2:1 · 1 von 3 Läufen: 3:1") zeigt die **einzelnen** Stände, die dahinterstehen. In den drei Lagen sieht das so aus: **3/3 einstimmig** → keine der beiden Zeilen. **2/3** → beide Zeilen, obere zuerst. **Drei verschiedene Werte** → nur die untere, weil nichts übernommen wurde und es keine Markierung an einem übernommenen Wert geben kann; der Eintrag trägt statt dessen das Kennzeichen „geparkt". `refRohAbgleich()` ist dabei unverändert geblieben (ausdrückliche Auflage) — sie wirkt nur jetzt öfter, weil es je Runde drei geparste Läufe gibt statt einem.
→ **🔴 Zweiter Fund, dabei aufgefallen, NICHT behoben und nicht Gegenstand dieses Auftrags:** `pruefAnwenden()` schreibt beim Übernehmen **nur** `ergebnisHeim`/`ergebnisGast` an den Eintrag. **Halbzeitstand und Verlängerungsstand werden verworfen**, obwohl der Schiedsrichter sie liefert und die App sie sogar prüft — sie überleben nur in `e.refRoh[...].geparst`. Die Karte kann `ergebnisHalbzeit`/`ergebnisVerl` anzeigen, bekommt sie aber ausschliesslich aus der von Hand eingetragenen Migration. Bewusst nicht mitgeändert: Es ändert, was dauerhaft gespeichert wird, und war nicht beauftragt (Art. 8). Nur benannt.

---

**69. `pruefListe`/`pruefBilanz` werden nie gespeichert — ein Neuladen verwirft ungeprüfte Vorschläge** · *Fund Ondo, 3.9.2026, nach v19.8.12 · untersucht und bestätigt 3.9.2026 · Auftrag Ondo 4.9.2026, gebaut am selben Tag* · **Status: 🔴 GEBAUT am 4.9.2026, `beta.html` v19.8.13**

**Der Befund (Ondo):** Nach einem Neuladen der App waren die Vorschlagskarten aus „Ergebnisse prüfen" („9 von 30 gefunden", noch nicht übernommen) verschwunden. Stehen geblieben sind nur Einträge, die ohnehin schon dauerhaft markiert sind (z. B. die `refRohAbgleich()`-Widerspruchszeile an bestehenden KI-Log-Einträgen) — die sitzen in `state.kiProtokoll` und sind gespeichert.

**Vermutung bestätigt, mit Codezitat (nicht vermutet — belegt):** `pruefListe` (Zeile 1961), `pruefBilanz` (Zeile 1962) und `pruefStark` (Zeile 1340) sind `var`-Deklarationen auf oberster Skript-Ebene, **ausserhalb** des `state`-Objekts (`state` beginnt Zeile 458). `save()` (Zeile 693–698) schreibt ausschliesslich `JSON.stringify(state)` in `localStorage` — keine der drei Variablen wird je in `state` geschrieben. Vollständiger Scan nach `localStorage.setItem`/`localStorage.getItem` (11 Fundstellen im ganzen Skript): genau ein Speicherschlüssel (`KEY = "ondo-control-v1"`), er transportiert ausschliesslich `state`. Kein `beforeunload`-Handler oder vergleichbarer Mechanismus fängt einen Verlust vor dem Neuladen ab.

**Präzisierung, die zur Vermutung dazugehört:** Das Verhalten ist **nicht neu und nicht durch v19.8.12 verursacht.** Dieselbe Architektur bestand schon, als die v19.8.9-Notiz oben („`pruefListe` wird bei jedem Druck auf 'Ergebnisse prüfen' komplett neu aufgebaut") geschrieben wurde. Ein zweiter Tastendruck auf denselben Knopf und ein blosses Neuladen der Seite lösen exakt denselben Mechanismus aus — beides ist ein Neustart der laufenden JavaScript-Umgebung, bei dem die Zeile `var pruefListe = []` erneut ausgeführt wird. **Neu ist nur das Gewicht des Verlusts, nicht der Verlust selbst** — siehe Kostenabschnitt unten.

**Nebenbefund, wie erbeten geprüft:** `state.vorschlaege` (Zeile 465, initialisiert als leeres Array) ist im ganzen übrigen Code nachweislich **tot** — kein einziger Schreib- oder Lesezugriff ausserhalb der Initialisierung (Suche nach `.vorschlaege` ohne den Zusatz `Info` findet nur diese eine Zeile; `state.vorschlaegeInfo`, ein anderes Feld mit ähnlichem Namen, ist dagegen aktiv in Gebrauch, Zeile 1749/2836, füllt den Hinweistext über den Vorhersage-Vorschlägen). **Woher es stammt, ist nicht belegbar:** `beta.html` selbst kam erst mit Commit `5bc5388` (Fassung 35, 21.8.2026) ins Repository und trug das Feld da bereits — frühere Geschichte liegt ausserhalb der Git-Historie dieses Repos. Die Vermutung, es sei ein Rest aus der v18-„Value-Rechnung"-Phase (Punkt 9/10), ist naheliegend, aber **nicht geprüft und deshalb nicht als Befund geführt** (Art. 11, Arbeitsregel H — belegen statt herleiten).

**Einschätzung, ob eine Persistenz sinnvoll wäre:** Ja, nach Ondos eigener Kostenbegründung. Seit v19.8.12 hängt an jedem Prüflauf ein bezahlter Sonnet-Lauf mit Websuche (Backlog-Punkt 68); ein Verlust vor dem Übernehmen kostet jetzt echtes Geld je Wiederholung, nicht nur einen günstigen bzw. kostenlosen Gemini-Lauf wie zuvor.

**Kosten/Komplexität einer Absicherung (Arbeitsregel G, grobe Richtung, kein Bau):**
- **Kern:** `pruefListe`/`pruefBilanz` (sinnvollerweise auch `pruefStark`) aus globalen `var`s in `state.*`-Felder verschieben. Technisch unkompliziert — der Inhalt ist bereits reine, JSON-taugliche Daten (Zeichenketten, Zahlen, Arrays, flache Objekte), keine Funktionen, keine Zirkelbezüge.
- **Ein Aufwand kommt geschenkt:** Der bestehende `save()`-Aufruf direkt nach `pruefAuswerten()` (eingeführt mit v19.8.12) würde neue Vorschläge automatisch mitsichern, ohne neue Aufrufstelle.
- **Der eigentliche Aufwand und die eigentliche Fehlerquelle:** `pruefAnwenden()` ruft `save()` bisher nur im `art==='log'`-Zweig auf, nicht im `art==='bet'`-Zweig; `pruefIgnorieren()` ruft `save()` gar nicht auf — bisher folgenlos, weil `pruefListe` nie persistiert wurde. Würde `pruefListe` Teil von `state`, bräuchten **beide** Stellen zusätzlich einen `save()`-Aufruf, sonst taucht ein bereits übernommener oder bewusst ignorierter Vorschlag nach einem Neuladen wieder auf — eine neue, subtilere Variante desselben Problems. Zusätzlich müssten rund zehn Lese-/Schreibstellen (`pruefBlock()`, `pruefTextBauen()`, `pruefAnwenden()`, `pruefIgnorieren()`, `abschluss()`, `rundeLaufen()`, `verarbeite()`, `pruefAuswerten()`) konsequent auf `state.pruefListe`/`state.pruefBilanz` umgestellt werden — eine übersehene Stelle wäre der Fehler, den die Änderung gerade beheben soll.
- **Offene Gestaltungsfrage, nicht Teil der Kostenschätzung, sondern zur Entscheidung Ondos:** Soll ein während des Neuladens noch laufender, unfertiger Prüfdurchgang absichtlich verloren bleiben? Der Fund selbst betrifft nur bereits abgeschlossene, aber noch nicht übernommene oder ignorierte Vorschläge — nicht einen mitten im Lauf unterbrochenen.
- **Grobe Einordnung:** niedrig bis mittel. Kein neuer Modellaufruf, keine neue Abhängigkeit, kein Geld für die Änderung selbst — sie **spart** künftig Geld (weniger wiederholte, bezahlte Sonnet-Läufe). Das Risiko liegt ausschliesslich in der Vollständigkeit der Umstellung, nicht in ihrer Schwierigkeit.

> **🔴 GEBAUT am 4.9.2026 (Auftrag Ondo, `beta.html` v19.8.13).** `pruefListe` und `pruefBilanz` sind Teil von `state` (`state.pruefListe`, `state.pruefBilanz`), initialisiert wie `vorschlaege: []` — **keine `seedV`-Migration nötig**, ein altes Save ohne diese Schlüssel behält einfach die frischen Defaults. `pruefStark` bleibt bewusst aussen vor, wie im Auftrag verlangt — sie beschreibt nur den laufenden Prüfdurchgang, keinen Vorschlag, der verloren gehen könnte.
>
> **Alle rund zehn Fundstellen umgestellt** (`state`-Objekt, der Reset in `ergebnissePruefen()`, `pruefAuswerten()`, `abschluss()`, `pruefAnwenden()`, `pruefIgnorieren()`, `pruefTextBauen()`, `pruefBlock()`) — vollständig geprüft mit `grep -n "pruefListe\|pruefBilanz"` gegen den fertigen Stand: keine unqualifizierte Fundstelle mehr übrig, `pruefStark` an allen fünf Stellen unverändert.
>
> **Die im Fund benannte eigentliche Fehlerquelle behoben:** `pruefAnwenden()` rief `save()` bisher nur im `art==='log'`-Zweig auf. Statt zwei separate Aufrufe zu pflegen, **ein** unconditional `save()` nach dem Entfernen aus der Liste — deckt beide Zweige ab. `pruefIgnorieren()` rief bisher **gar kein** `save()` auf, jetzt ergänzt. Zusätzlich ein `save()` am Ende von `abschluss()`: Das bestehende `save()` in `rundeLaufen()` läuft **vor** `abschluss()` im selben Tick und sichert deshalb nie die endgültige Bilanz (Fehlertext, `runden`, `dauerMs`, `einAnbieter` der letzten Runde) — ohne diesen Zusatz bliebe `state.pruefBilanz` nach einem Neuladen auf einem älteren Zwischenstand stehen.
>
> **Offene Gestaltungsfrage aus dem Fund, beantwortet:** Ein während des Neuladens noch laufender Durchgang bleibt bewusst **ohne** eigenes `save()` am Reset (`state.pruefListe=[]; state.pruefBilanz=null;`) — das löst sich von selbst. `pruefAuswerten()` trägt einen Eintrag erst **nach** Abschluss seiner Prüfung in `pruefListe` ein; ein mitten im Lauf unterbrochener Durchgang stand also ohnehin nie darin, nur in noch offenen Promises. Ein Reload mitten im Reset liefert dadurch den zuletzt **gesicherten**, älteren Stand zurück, statt ihn zu verlieren — durch Trockentest bestätigt (siehe unten).
>
> **Nachfrage Ondos beantwortet, mit Zeilenzitat (Belegen statt herleiten):** Ein übernommener Vorschlag wird **nicht** eigens chronologisch neu einsortiert — Ondos eigene Vermutung war richtig. `vorhersagen()` legt jeden neuen Eintrag per `state.kiProtokoll.unshift(eintrag)` an (Zeile 1744); die KI-Log-Anzeige (`wtab==='kilog'`) rendert `neu.map(...)` **ohne erneute Sortierung**, direkt in der Filter-Reihenfolge von `state.kiProtokoll`. `pruefAnwenden()` **verändert nur Felder** am gefundenen Eintrag über `.forEach` mit Id-Abgleich — kein `splice`/`push`/`unshift` auf `state.kiProtokoll`. Der Eintrag bleibt exakt an seiner ursprünglichen Array-Position; es gibt nichts, das ihn „wieder einsortieren" müsste, weil er nie entfernt wurde. **Ehrliche Einschränkung:** Das ist Einfüge-Reihenfolge, kein echter Sortierschlüssel über `e.datum` — fällt im normalen Tagesbetrieb zusammen, ist aber nicht dasselbe. Die Text-Exporte (`logTextBauen()`/`refRohTextBauen()`) sortieren dagegen ausdrücklich nach `datumZahl`, unabhängig von dieser Frage.
>
> **Verifiziert:** `node --check` bestanden. Trockentest bestanden — **19 neue Prüfungen**, an den echten, aus `beta.html` herausgeschnittenen Funktionen (`state`-Initialisierung, `load()`, `save()`, `pruefAnwenden()`, `pruefIgnorieren()`, die volle Referee-Entscheidungskette), mit einem In-Memory-`localStorage`-Stub und einem echt simulierten Neuladen (State zurückgesetzt, `load()` erneut gegen denselben Speicher ausgeführt): ein echter Prüfdurchgang landet in `state.pruefListe` und übersteht das simulierte Neuladen · Übernehmen (`art:'log'`) entfernt den Vorschlag, bewertet den Eintrag, schreibt `localStorage` neu · dasselbe für `art:'bet'` — der bisher fehlende `save()`-Aufruf greift jetzt nachweislich · Ignorieren entfernt und speichert ebenso · nach jedem Übernehmen/Ignorieren bleibt der Eintrag nach simuliertem Neuladen verschwunden · `pruefStark` fehlt im gespeicherten JSON vollständig · der Reset am Rundenanfang verliert bei einem Reload mitten im Lauf nichts. **Die bestehenden 57 Prüfungen aus Punkt 68 erneut ausgeführt, alle weiterhin bestanden** (keine Regression). `pruefe.py`: ALLES SAUBER.
>
> **Keine neuen Sprachschlüssel** (241 unverändert — keine neuen Anzeigetexte, selbst gezählt von `pruefe.py` Abschnitt 13). **Kein Schnitt in der Messreihe.**

---

**70. Such- und Filterfunktion im KI-Log** · *Idee 4.9.2026, Ondo · Auftrag Ondo 4.9.2026, gebaut am selben Tag* · **Status: 🔴 GEBAUT am 4.9.2026, `beta.html` v19.8.14**

Bei inzwischen über 400 Einträgen wird die KI-Log-Liste ohne Filter unübersichtlich.
Vorschlag Ondos: Filter nach Datum, Wettbewerb, Status (offen/geparkt/bewertet o. ä.).

> **🔴 GEBAUT am 4.9.2026 (Auftrag Ondo, `beta.html` v19.8.14).** Drei kombinierbare Filter
> (UND-Verknüpfung), rein im Browser, keine neuen Modellaufrufe, keine Kosten — Filter wirken
> nur auf die Anzeige, `state.kiProtokoll` selbst bleibt unangetastet.
>
> **Die tatsächlichen Werte von `e.status`/`e.geparkt`/`e.parkGrund`, mit Codezitat (nicht
> vermutet — belegt):** `e.status` hat im ganzen Skript nur zwei Ausprägungen, `'offen'`
> (`vorhersagen()`) und `'bewertet'` (seedV-Migrationen und `pruefAnwenden()`) — **kein**
> `'richtig'`/`'falsch'` auf Eintrag-Ebene, das gibt es nur pro Markt (`e.maerkte[i].status`).
> `e.geparkt` (boolesch) wird sowohl manuell (`logParken()`/`logParkenTag()`) als auch
> automatisch durch den Schiedsrichter (`parkeEintraege()`, Backlog-Punkt 68) gesetzt;
> `e.parkGrund` (`'unstable_ref'`/`'sonderformat'`) nur beim automatischen Parken, beim
> manuellen bleibt es unbesetzt. **Belegt:** `e.geparkt===true` und `e.status==='bewertet'`
> kommen nie gemeinsam vor — `vorhersageKarte()` zeigt den Park-Knopf ausschliesslich bei
> `e.status==='offen'`, ein bewerteter Eintrag kann über die Oberfläche gar nicht geparkt
> werden. Daraus abgeleitet, fünf Filteroptionen: Alle · Offen (`status==='offen' &&
> !geparkt`) · Geparkt (`geparkt===true`) · Bewertet — alle Märkte richtig · Bewertet —
> mind. ein Markt falsch (die beiden letzten zusammen ergeben genau die "bewertet"-Menge,
> ohne Überschneidung, weil jeder bewertete Eintrag drei entschiedene Märkte hat).
>
> **Umsetzung:** neue reine Funktion `kilogGefiltert(liste, von, bis, wettbewerb, status)` —
> `.filter()` liefert immer ein neues Array, verändert die Eingabeliste nie. Datum nutzt die
> bestehende `datumZahl()` (versteht `TT.MM.JJJJ` und ISO), Wettbewerb-Suche ist ein
> Teilstring-Vergleich über `.toLowerCase()`. Filterzustand (`kilogVon`, `kilogBis`,
> `kilogWettbewerb`, `kilogStatus`) liegt in vier plain globalen `var`s wie `wtab` — bewusst
> **nicht** Teil von `state`, reine Anzeigeeinstellung, setzt sich bei jedem Neuladen zurück.
> Neue Eingabefelder lösen `onchange`, nicht `oninput`, aus — `render()` ersetzt bei jedem
> Aufruf das komplette `innerHTML`, ein `oninput`-Handler würde bei jedem Tastendruck den
> Cursor verlieren. Neue Anzeigefunktion `kilogFilterBlock()` (Kartenstil wie
> `logExportBlock()`) zeigt „`{gezeigt}` von `{gesamt}`" und einen Zurücksetzen-Knopf. Zwei
> bewusste Abgrenzungen: die Tag-für-Tag-Park-Übersicht bleibt auf der ungefilterten Liste
> berechnet (sonst könnte ein Tag nicht mehr vollständig geparkt werden, während gefiltert
> wird), das v18-Archiv (andere Feldstruktur) bleibt vom Filter unberührt.
>
> **Verifiziert:** `node --check` bestanden. Trockentest bestanden — **19 neue Prüfungen** an
> der echten, aus `beta.html` herausgeschnittenen Funktion `kilogGefiltert()` (kein Nachbau):
> Datum von/bis grenzt in beide Richtungen korrekt ein, auch im ISO-Format · leeres Datum
> zeigt alles · Wettbewerb-Suche findet Teiltreffer, ignoriert Gross-/Kleinschreibung · jede
> der fünf Status-Optionen liefert genau die erwartete Teilmenge, "bewRichtig" und
> "bewFalsch" zusammen ergeben ohne Überschneidung exakt die "bewertet"-Menge · alle drei
> Filter gleichzeitig kombiniert korrekt (UND) · Zurücksetzen liefert die volle Liste ·
> Eingabeliste vor/nach mehreren Filteraufrufen bytegleich (JSON-Vergleich) · Rückgabe ist ein
> neues Array, nicht dieselbe Referenz. **Die bestehenden 57 Prüfungen aus Punkt 68 und 19
> aus Punkt 69 erneut ausgeführt, alle weiterhin bestanden** (keine Regression). `pruefe.py`:
> ALLES SAUBER.
>
> **10 neue Sprachschlüssel** (241 → 251, von `pruefe.py` Abschnitt 13 selbst nachgezählt):
> `filterT`, `filterWettbewerbPh`, `filterStatusAlle`, `filterStatusOffen`,
> `filterStatusGeparkt`, `filterStatusBewRichtig`, `filterStatusBewFalsch`, `filterReset`,
> `filterCount`, `filterEmpty` — in DE/FR/EN. Die Datumslabel nutzen die bestehenden
> `logExpFrom`/`logExpTo`, keine Dopplung.

---

**71. Eigener Reiter für offene Spiele, Rest als Archiv** · *Idee 4.9.2026, Ondo* · **Status: Idee — NEU, nicht gebaut, braucht eigenen Plan und eigene Freigabe**

Vorschlag Ondos: ein neuer Reiter, aufgebaut wie das bestehende KI-Log, aber nur für offene
(noch nicht bewertete) Spiele; geparkte und bereits geprüft/bewertete Einträge wandern in
eine Archiv-Ansicht. Zweck: Übersicht bei wachsender Datenmenge, verwandt mit Punkt 70, aber
eine grössere strukturelle Änderung an der Anzeige — betrifft KI-Log, Bilanz und Text-Export
gemeinsam.

→ **Ausdrücklich NICHT neben Teil 1 dieses Auftrags (Punkt 69) gebaut** — eigener Plan und
  eigene Freigabe nötig, bevor irgendetwas daran gebaut wird.
→ **Kein Bauauftrag** — nur als Idee mit Datum und Urheber eingetragen.
→ **Kosten (Arbeitsregel G):** noch nicht geschätzt, dazu müsste erst ein Ansatz feststehen.

---

**65. Harte Leselängen-Grenze im Chat-Bereich bei rund 120.000 Zeichen** · *Fund 29.8.2026, Claude, bei der Übergabe an Chat 27* · **Status: Fund — Ondo vorzulegen, drei Wege genannt, keiner gewählt**

Ein Raw-Link-Abruf im Chat-Bereich liefert nicht die ganze Datei, sondern bricht **exakt bei 120.000 Zeichen** ab — kein ungefährer Rand, eine feste Grenze. Zweifach geprüft: derselbe Abbruch an derselben Stelle, mit zwei verschieden angehängten Zahlen zum Umgehen der Zwischenspeicherung (Backlog-Punkt 53, Fund vom 22.8.).

**Betroffen ist der Backlog selbst**, eines der vier Pflichtdokumente: 150.591 Zeichen — **rund ein Fünftel fehlt** bei einem Abruf im Chat-Bereich, ohne dass eine Fehlermeldung erscheint. Nachgemessen über alle Commits: Der Backlog lag am 27.8.2026 abends bei 119.812 Zeichen, knapp unter der Grenze. **Mit Fassung 48 am 28.8.2026 (127.660 Zeichen) ist er darüber, und jede weitere Fassung seither noch weiter darüber.**

Auch betroffen, ausserhalb der Pflichtlektüre: `CHRONIK-2026-08.md` (164.036 Zeichen), `BACKLOG-ARCHIV.md` (122.003), `archiv/PROJEKT-STATUS.md` (199.347), `beta.html` (148.695 — wird ohnehin nicht ganz gelesen, siehe Ausnahme in `STAND.md`). `STAND.md`, `Blueprint.md` und `Ondo-Core-Architektur.md` liegen mit 60.896 / 43.501 / 11.302 Zeichen deutlich darunter.

→ **Nicht betroffen: der Code-Bereich.** Eine Sitzung dort liest Dateien direkt aus dem Repository, nicht über das Abrufwerkzeug des Chat-Bereichs — die Grenze tritt dort nicht auf. Gefunden hat sie folgerichtig eine Code-Sitzung, nicht ein Chat.
→ **Folge, solange nichts entschieden ist:** Jede Chat-Übergabe muss den fehlenden Teil eigens erkennen und nachliefern, wie am 29.8.2026 bei Chat 27 geschehen — sonst arbeitet ein neuer Chat mit einem Fünftel weniger Pflichtlektüre, ohne es zu merken.

**Drei Wege, mit Kosten (Arbeitsregel G):**
→ **A — Ganze Datei als Anhang hochladen.** Umgeht das Abrufwerkzeug, bewährtes Verfahren seit dem 3.8. Kosten: rund 150 KB Speicher in der jeweiligen Sitzung, bei jeder künftigen Übergabe erneut.
→ **B — Nur den fehlenden Teil gezielt nachliefern**, mit vorher gemessener, überlappender Nahtstelle. Kosten: gering (rund 30 KB), aber Handarbeit bei jeder betroffenen Übergabe, kein struktureller Fix.
→ **C — Backlog kürzen**, nach dem Vorbild von Punkt 18: Die gestapelten Abschnitte „Was Fassung N ändert" (48.553 Zeichen, knapp ein Drittel der Datei) ins Archiv verschieben. Kosten: eine Code-Sitzung, kein Geld. **Zwei Haken:** `BACKLOG-ARCHIV.md` liegt mit 122.003 Zeichen selbst schon über der Grenze — das Ziel wäre auch nicht vollständig lesbar. Und der maschinelle Verlustbeweis für den Backlog ist seit dem 27.8. übersprungen (Punkt 52, seit 30.8.2026 in `BACKLOG-ARCHIV.md`); eine neue Trennung bräuchte eine neue Vergleichsgrundlage, sonst gäbe es keinen Beweis, dass nichts verlorengeht.

→ **🔴 DRITTE BESTÄTIGUNG UND RÜCKFALL, 2.9.2026 — die Grenze ist wieder überschritten.** Bei der Übergabe an den Nachfolgechat brach der Backlog-Abruf erneut ab. **Der Nachfolger hat es von selbst gemeldet**, ohne danach gefragt worden zu sein, und den letzten empfangenen Text im Wortlaut genannt: `| **Wie un` — die Zeile nach dem „Fail Safe"-Eintrag in der Tabelle „Für Blueprint und Ondo-Core vorgemerkt". **Nachgemessen in der Code-Sitzung, nicht geschätzt:** Diese Stelle liegt bei **exakt Zeichen 120.000**. Damit ist die feste Grenze zum dritten Mal unabhängig belegt, diesmal mit einer von aussen gemeldeten und im Repo nachgerechneten Bruchstelle. **Der Backlog stand zu diesem Zeitpunkt bei 132.289 Zeichen — 12.289 darüber, rund ein Zehntel fehlte.** Ursache des Rückfalls: Weg C (Fassung 60) hatte den Backlog auf 108.699 Zeichen gebracht; die Fassungen 61 bis 69 haben ihn wieder darüber wachsen lassen, vor allem durch ausführliche Punkte, die im Haupttext stehen bleiben (genau der Fund, der in Fassung 60 schon benannt und nicht behoben wurde). **Weg C wirkt also, hält aber nicht** — er verschafft Luft, ohne die Ursache zu beseitigen. Der fehlende Rest ist nach Weg B nachgeliefert worden (12.299 Zeichen mit überlappender Nahtstelle). **Keine Entscheidung, kein neuer Weg** — nur der Beleg, dass die Wahl zwischen A, B und C ansteht, und dass B bei jeder Übergabe erneut Handarbeit kostet.
→ **Empfehlung Claude: B für die jeweils nächste anstehende Übergabe, C als spätere, von Ondo zu entscheidende Strukturfrage.** B behebt nichts dauerhaft, ist aber sofort verfügbar und günstig. C behebt die Ursache, ist aber nicht so dringend, dass sie vorgezogen werden müsste.
→ **Kein Schnitt in der Messreihe, kein Eingriff in `beta.html`.** Reine Dokument- und Arbeitsablauffrage.

---

**66. `pruefe.py` prüft Querverweise auf Existenz, nicht auf Fundort-Angabe** · *Fund 30.8.2026, ChatGPT beim Gegenlesen von PR #1, gemeldet über Chat 27* · **Status: Fund — nicht zu bauen, nur festgehalten**

`pruefe.py` Abschnitt 3 prüft, ob eine erwähnte Punktnummer irgendwo existiert — im Backlog oder in `BACKLOG-ARCHIV.md`, weil die Prüfung beide Dateien zusammen durchsucht. **Das ist eine andere Frage als die, ob ein Text mitteilt, WO der Punkt gerade steht.** Nach der Archivierung von zehn Punkten (Fassung 61) zeigten mehrere Querverweise im Backlog weiterhin nur auf die nackte Punktnummer, ohne zu sagen, dass der Punkt inzwischen im Archiv liegt — `pruefe.py` meldete dabei ALLES SAUBER, weil die Nummer ja auffindbar war.

→ **Belegt:** ChatGPTs Gegenlesen zu PR #1 fand vier solche Stellen (Backlog); eine anschliessende vollständige Nachsuche über Backlog, `STAND.md` und Blueprint fand **26 weitere**, darunter fünf allein zu Punkt 47 — beim ersten Durchgang komplett übersehen, obwohl dieselbe Sorgfalt galt. Alle 30 sind mit Fassung 62 nachgetragen (gezählt an der tatsächlichen Zeilenzahl mit der neuen Fundort-Angabe, nicht geschätzt).
→ **Warum das keine Kleinigkeit ist:** Ein Prüflauf, der „ALLES SAUBER" meldet, obwohl Fundort-Angaben fehlen, erzeugt genau die falsche Sicherheit, vor der Fehlerart C6 warnt — der Prüfer prüft nur, was er zu prüfen gelernt hat, nicht das eigentliche Problem.
→ **Vorschlag, nicht gebaut:** Abschnitt 3 könnte zusätzlich prüfen, ob ein Verweis auf einen ausschliesslich im Archiv stehenden Punkt in unmittelbarer Nähe (gleicher Satz oder gleiche Zeile) einen Hinweis auf `BACKLOG-ARCHIV.md` oder das Wort „archiviert" trägt. Nicht trivial: Der Prüfer bräuchte eine Regel dafür, wie nah „in unmittelbarer Nähe" sein muss, und liefe sonst Gefahr, selbst wieder nur eine formale Bedingung zu prüfen statt der eigentlichen Verständlichkeit.
→ **Kosten:** eine Codeänderung an `pruefe.py`, die vermutlich neue eigene Randfälle mitbringt (z. B. mehrere Punktnummern im selben Satz, wie in mehreren der jetzt gefundenen Stellen). Nicht jetzt zu bauen — erst wenn eine zweite, unabhängige Archivierung zeigt, ob das Problem wiederkehrt oder ob die manuelle Nachsuche ausreicht (Arbeitsregel D: ein Einzelfall beweist keine Notwendigkeit).
→ **🔴 Ergänzung 30.8.2026, Fassung 63 — die manuelle Nachsuche selbst stösst nachweislich an Grenzen:** Trotz der als „vollständig" bezeichneten Nachsuche zu Fassung 62 fand Ondo beim eigenen Gegenlesen noch eine 31. Stelle (`STAND.md`, „Beta zuvor: v19.8.3" — Punkt 2 ohne Fundort). Bei der daraufhin verlangten erneuten, unabhängigen Suche in `Blueprint.md` fand die Code-Sitzung dabei einen eigenen Fehler in ihrer ersten Suchmethode: Das verwendete Muster erkannte Genitiv-Formen wie „Punkt 51s" nicht, weil zwischen einer Ziffer und einem folgenden Buchstaben keine Wortgrenze liegt. **Folgenlos in diesem Fall** — jede so verpasste Stelle stand zufällig im selben Satz wie eine bereits korrekte Angabe —, aber ein zweiter, unabhängiger Beleg dafür, dass Mensch und Ad-hoc-Skript bei drei Dokumenten und zehn Nummern beide je eigene, unterschiedliche Lücken übersehen. **Stützt den oben genannten Vorschlag stärker, als ein Einzelfall es könnte — bleibt aber aus denselben Kostengründen unentschieden.**

---

**41. 🔴 Zuordnung der Listenangaben über den Spielnamen statt über die laufende Nummer** · *Spur Chat 13 (12.8.), am 13.8. von Chat 14 am Log BEWIESEN* · **Status: 🔴 GEBAUT am 30.8.2026 (Beschluss Ondo)**

> **🔴 GEBAUT am 30.8.2026:** In `vorhersagen()` (`beta.html`, v19.8.7) werden `wettbewerb`, `anpfiff` und `stufe` nicht mehr über `paket.liste[idx]` (Position), sondern über `paket.liste.find(...)` mit Namensabgleich über die neue gemeinsame Funktion `normName()` nachgeschlagen (dieselbe Regel wie bei der Dubletten-Sperre in `spielListeHolen`, S1, und bei Punkt 37). Kein Treffer in der Liste: Alle drei Felder bleiben leer/`null`, statt dem falschen Spiel zugeschrieben zu werden. Trockentest bestanden (Antwort in anderer Reihenfolge als die Liste findet trotzdem das richtige Spiel; kein Treffer lässt die Felder leer). Kein Schnitt in der Messreihe — ändert nichts am Auftragstext der Gehirne oder an Prozentangaben, Tipps, Märkten. Keine neuen Sprachschlüssel.
> **Bekannte Grenze, unverändert durch diese Lieferung:** `normName()` gleicht Gross-/Kleinschreibung, Satzzeichen und Strichvarianten aus, entfernt aber keine Wörter wie „FC" — der Fall aus Punkt 37 („Red Bull Salzburg" gegen „FC Red Bull Salzburg") wäre auch mit dieser Funktion kein erkannter Treffer.

**Der Befund (Ausgangslage vor dem Bau).** In `vorhersagen()` kommt der Spielname aus der Antwort des Gehirns, aber **Anpfiffzeit, Wettbewerb und Stufe kommen aus der Spielliste an derselben Zählstelle**:

```
vorher.forEach(function(v, idx){
  var match = String(v.match||'');                                  /* aus der Antwort */
  wettbewerb:(paket.liste[idx]&&paket.liste[idx].wettbewerb)||'',   /* aus der LISTE  */
  anpfiff:(paket.liste[idx]&&paket.liste[idx].anpfiff)||'',
  stufe:(paket.liste[idx]&&paket.liste[idx].stufe)||null,
```

Liefert ein Gehirn mehr, weniger oder anders geordnete Vorhersagen als die Liste Spiele hat, hängen Zeit und Wettbewerb am falschen Spiel. **Eine Kennung, die das verhindern würde, gibt es im Auftragstext der Gehirne nicht** — nur der Schiedsrichter arbeitet mit `id`.

**Der Beweis (13.8., aus dem KI-Log ausgezählt).** An vierzehn von fünfzehn Vorhersagetagen stimmen Anpfiffzeit und Wettbewerb bei beiden Gehirnen überein. Am **10. August** weichen vier von sieben Paaren ab. An diesem Tag lieferte Sonnet **neun** Vorhersagen für eine Liste mit **acht** Spielen (Pendikspor doppelt), und der letzte Eintrag hat **gar keine Anpfiffzeit und gar keinen Wettbewerb** — `paket.liste[9]` existiert nicht. Die verschobenen Werte sind eine Vertauschung innerhalb desselben Tages.

**Vorschlag zur Vorlage:** Die Listenangaben nicht über `idx` holen, sondern über den Spielnamen aus der Antwort in der Liste nachschlagen. Findet sich kein passendes Spiel, bleiben Zeit und Wettbewerb leer — sichtbar leer statt falsch belegt.

→ **Kosten:** kein Geld, keine neuen Sprachschlüssel, eine Änderung an einer Stelle im Code.
→ **Kein Schnitt in der Messreihe (Art. J zu prüfen):** Der Punkt ändert weder den Auftragstext der Gehirne noch die Bewertung. Prozentangaben, Tipps und Märkte stammen aus der Antwort des Gehirns selbst und sind unberührt.
→ **⚠ Grenze — was dieser Punkt NICHT löst:** Er erklärt den 10. August. Er erklärt **nicht** den 8. August, an dem sieben von zehn Zeiten falsch waren und **beide Gehirne übereinstimmten**. **Es sind zwei Probleme.** Die Ursache der falschen Zeiten in der Liste selbst bleibt unbekannt (Art. 11).
→ **Aufgenommen erst, nachdem die beschlossenen Punkte 6 und 7 gebaut waren** (Arbeitsregel L).

---

### Als v19.7 gebaut am 3.8.: A · 0a · 1 · D — Bewährungszeit läuft

**36. Verlängerte Spielformate schliessen — die andere Hälfte von Weg A** · *Fund 9.8., Claude beim Prüflauf · zweiter Teil gebaut 3.9.2026* · **Status: 🔴 GEBAUT UND ABGESCHLOSSEN am 3.9.2026 (Beschluss Ondo) — beide Hälften stehen**

> **🔴 WIDERSPRUCH IM PUNKT SELBST BEHOBEN, 3.9.2026 (Auftrag Ondo).** Dieser Punkt trug bis heute eine Kopfzeile „GEBAUT" und einen Schlusssatz „Punkt 36 selbst bleibt weiterhin unentschieden" — für einen künftigen Leser nicht auflösbar (Fehlerart C4). Fassung 72 hatte das nur **benannt**, nicht geklärt, weil Regel 4 reines Verschieben erlaubt, keine inhaltliche Entscheidung. Jetzt ist es entschieden und gebaut, und die beiden Aussagen sind in Einklang gebracht.
>
> **Was offen war und was es jetzt ist:** Am 30.8.2026 war nur die **eine** Hälfte gebaut — die Spielliste (`stufeHolen()`) schliesst Sonderformate aus. Offen blieb die Grundsatzfrage, was mit einem Sonderformat geschieht, das dort **durchrutscht** (der belegte Leeds-Fall) und erst beim Ergebnis-Prüfen auffällt. **Ondos Entscheidung vom 3.9.2026:** Der Schiedsrichter erkennt es selbst und der Eintrag wird geparkt.
>
> **🔴 ZWEITER TEIL GEBAUT am 3.9.2026, `beta.html` v19.8.12 — Sonderformat-Erkennung beim Schiedsrichter.** Der Schiedsrichter-Auftragstext in `rundeLaufen()` verlangt jetzt zusätzlich das tatsächlich gespielte Format als Pflichtfeld `format`: `"2x45"` für das Standardformat (ausdrücklich einschliesslich einer regulären Verlängerung von 2x15 und eines Elfmeterschiessens), sonst der abweichende Wert im Klartext (`"2x60"`, `"3x45"`). **Findet ein Lauf keine Formatangabe, bleibt das Feld leer — es wird nicht geraten.** `refLaufPruefen()` wertet das aus: Meldet **ein** Lauf ein Sonderformat, wird der Eintrag **sofort geparkt**, unabhängig von den anderen zwei Läufen der Mehrfachlauf-Absicherung (Punkt 68). **Es wird kein 90-Minuten-Wert erzwungen oder gerechnet** — genau der Punkt, an dem Leeds–RB Leipzig ein „1:0" bekam, das für ein 60/60-Format keine Bedeutung hat. Neuer eigener `parkGrund`-Wert `'sonderformat'` (nicht `'unstable_ref'` — ein Sonderformat ist etwas anderes als ein instabiler Schiedsrichter), sichtbar als Kennzeichen in der Karte und im Log-Text-Export, zusammen mit dem erkannten Format.
> **Trockentest bestanden:** ein Lauf mit `"2x60"` parkt den Eintrag, obwohl die anderen zwei Läufe sich auf 1:0 einig waren · `"3x45"` wird erkannt · `"2x45 + 2x15"` bleibt gültig · ein leeres Formatfeld ist **kein** Sonderformat · kein Ergebnis wird eingetragen.
> **Die Grenze der Wirkung bleibt bestehen und ist durch diesen Bau NICHT beseitigt:** Ein Modell, das das Format nicht kennt, meldet es auch nicht — es lässt das Feld leer, und der Lauf gilt weiter. Die Erkennung ist jetzt an **zwei** Stellen (Spielliste und Schiedsrichter) statt an einer; das senkt die Wahrscheinlichkeit, es schliesst nichts aus (Art. 14).
> **Kein Schnitt in der Messreihe.** Keine neuen Sprachschlüssel für diesen Teil ausser `parkGrundFormat` (mitgezählt bei Punkt 68).

> **🔴 GEBAUT am 30.8.2026:** Der Schiedsrichter-/Spielformat-Auftragstext in `stufeHolen()` (`beta.html`, v19.8.7) schliesst jetzt namentlich Sonderformate aus, statt nur verkürzte: „Nur Spiele im Standardformat (2x45 Minuten, bei Bedarf plus reguläre Verlängerung 2x15 Minuten) werden aufgenommen. Spiele mit abweichender Halbzeit- oder Periodenlänge (z. B. 2x60, 3x45) werden ausgeschlossen." Reguläre Verlängerung bleibt ausdrücklich eingeschlossen — anders als der ursprüngliche Vorschlag „genau 90 Minuten … weder verkürzt noch verlängert" weiter unten, der reguläre Verlängerung mit ausgeschlossen hätte (Ondos Entscheidung weicht davon ab). Gemessen wird weiterhin der Stand nach 90 Minuten plus Nachspielzeit — unverändert. Kein Schnitt in der Messreihe. Keine neuen Sprachschlüssel.
> **Grenze der Wirkung bleibt bestehen** (siehe unten): Das schliesst nur aus, was die Spielliste als Sonderformat erkennt — ein Modell, das das Format nicht kennt, nimmt es trotzdem auf.

Weg A (Beschluss Ondo 6.8.) schliesst aus der Spielliste **verkürzte** Formate aus: „Turniere mit verkuerzter Spielzeit (Vorbereitungsturniere mit 45- oder 60-Minuten-Partien)" und verlangt „Jedes aufgenommene Spiel muss ueber die vollen 90 Minuten gehen."

**Verlängerte Formate fallen nicht darunter.** Leeds – RB Leipzig war am 8.8. auf **120 Minuten** angesetzt, zwei Hälften zu 60 Minuten. Der offizielle Endstand ist 2:0, das zweite Tor fiel in der 109. Minute. Die App misst den Stand nach 90 Minuten und meldete 1:0.

→ **Nicht bestimmbar, ob der Schiedsrichter falsch gelesen hat** (Art. 11). Kein Anbieter veröffentlicht einen Zwischenstand bei Minute 90. Es ist wie beim Como Cup **keine Fehlerart des Schiedsrichters, sondern eine Lücke in der Spielliste**.
→ **Erledigt für diesen Fall:** Beide Leeds-Einträge sind auf Ondos Entscheidung **geparkt**.
→ **Vorschlag zur Vorlage:** Der Satz „Jedes aufgenommene Spiel muss ueber die vollen 90 Minuten gehen" wird zu „genau 90 Minuten plus Nachspielzeit — weder verkürzt noch verlängert". Eine Zeile, keine neuen Sprachschlüssel, kein Geld.
→ **Grenze der Wirkung:** Das schliesst nur aus, was die Spielliste als solches erkennt. Ein Modell, das das Format nicht kennt, nimmt es trotzdem auf. Senkt die Wahrscheinlichkeit, schliesst nichts aus.
→ **🔴 ZWEITER, STÄRKERER FALL (13.8.): 1. FC Union Berlin – Aris Limassol (9.8.), dreimal 45 Minuten.** Der Endstand 3:2 ist gesichert, der **Stand nach 90 Minuten nicht bestimmbar** — der Vereinsbericht legt alle fünf Tore in die ersten 90 Minuten (3:2 nach 90, Halbzeit 2:1), Flashscore nennt dieselben Torschützen mit 44./49./55./90./110. Minute (3:1 nach 90, Halbzeit 1:0). Beide Quellen widersprechen sich auch darin, wer zuerst traf. **Der Eintrag ist geparkt.**
→ **Warum dieser Fall stärker ist als Leeds:** Bei Leeds fehlte nur die Angabe. Hier liegen **zwei gleichwertige Quellen mit unvereinbaren Angaben** vor. Das Spiel ist nicht falsch gefunden, es ist mit der Messregel **nicht messbar**.
→ **Status jetzt: entscheidungsreif.** Es liegen zwei belegte Fälle in fünf Tagen vor.

→ **🔴 Dritte Bestätigung des Leeds-Falls, 28.8.2026 (externe Gegenprüfung im Rahmen der Restarbeit zu Punkt 51, seit 30.8.2026 in `BACKLOG-ARCHIV.md`):** Drei unabhängige Primärquellen — Leeds United (offizielle Vereinsseite), Sportschau/ARD, Sky Sport — bestätigen übereinstimmend: **120 Minuten**, zwei Hälften zu je 60 Minuten, ausdrücklich zu diesem Zweck vereinbart. Endstand 2:0, **zweites Tor in der 109. Minute**, Halbzeit (bei Minute 60) 1:0. **Das ist dasselbe Spiel wie oben, kein dritter Fall** — die neuen Quellen bestätigen nur, was hier bereits seit dem 9.8. steht.
→ **Wichtiger als die Bestätigung: Sie stellt eine Annahme aus Punkt 51 (27.8., seit 30.8.2026 in `BACKLOG-ARCHIV.md`) infrage.** Dort wurde die Paarung entparkt mit der Begründung „Stand nach 90 Minuten ist bekannt und gesichert: 1:0". Bei einem 60/60-Format gibt es aber **keinen regulären Stand nach 90 Minuten** — die Halbzeitmarke liegt bei Minute 60, nicht 45, und Minute 90 fällt mitten in die zweite Hälfte. Der Massstab „Stand nach 90 Minuten", den die App misst, ist auf dieses Format schlicht nicht anwendbar; „1:0" ist kein bewiesener Zwischenstand, sondern eine Momentaufnahme ohne besondere Bedeutung für dieses Format. Einzelheiten und die Berichtigung der Ausführung stehen bei Punkt 51 (seit 30.8.2026 in `BACKLOG-ARCHIV.md`, dort archiviert, Fassung 61).
→ **Entschieden (Ondo, 28.8.2026): Leeds–Leipzig bleibt geparkt, keine Übernahme.** ~~Punkt 36 selbst bleibt weiterhin unentschieden — dieser Fund entscheidet nichts vor, er dokumentiert nur.~~ **🔴 ÜBERHOLT am 3.9.2026:** Dieser Satz stand im Widerspruch zur Kopfzeile „GEBAUT" desselben Punktes (Fehlerart C4, benannt in Fassung 72, geklärt in Fassung 73). Er galt für den Stand vom 28.8.2026, an dem nur die Spielliste geändert war. **Ondo hat den offenen Rest am 3.9.2026 entschieden und er ist gebaut** — siehe den Block „ZWEITER TEIL GEBAUT" am Kopf dieses Punktes. **Leeds–Leipzig selbst bleibt unverändert geparkt; rückwirkend wird nichts neu bewertet.**

---


**E. „Prüfen statt suchen"** · *Idee 25.7., ChatGPT · Beschluss Ondo 25.7., Bau bestätigt 27.8.* · **Status: 🔴 GEBAUT am 27.8.2026, mit Rückfall-Zusage**

> **🔴 GEBAUT am 27.8.2026:** Zwei Änderungen am Schiedsrichter-Auftragstext in `beta.html` (v19.8.3). Erstens die eigentliche Umformulierung von ChatGPT: Wettbewerb wird jetzt an den Schiedsrichter mitgegeben (vorher nur Spielname, Datum, Anpfiff), und der Auftrag beginnt mit „Deine Aufgabe ist BESTAETIGEN, nicht frei suchen" — ein Ergebnis zählt nur, wenn Wettbewerb, Datum und beide Teams übereinstimmen, sonst „nicht_gefunden". Zweitens Geminis Ergänzung vom 8.8.: eine vierte Regel in der Fehlerliste, die ein torloses 0:0 ausdrücklich von einer Verlegenheitsantwort abgrenzt — Ziffern nur bei konkret bestätigtem 0:0. **Ondos Auflage:** Funktioniert es nicht, wird eine andere Lösung gesucht oder der Schritt rückgängig gemacht.
> **Weiterhin gültig (Claude, Art. 14):** Das senkt die Wahrscheinlichkeit erfundener Ergebnisse, schliesst sie nicht aus. Ob es wirkt, zeigt erst der nächste Prüflauf.

**⚠ NICHT MEHR BLOCKIERT (8.8.).** Geminis Rückfrage vom 4.8. — wie ein Prüf-Auftragstext ein **echtes** 0:0 von einem „nicht gefunden" unterscheidet — ist im Bericht nach Arbeitsregel K vom 8.8., 06:35 Uhr gestellt und **von Gemini selbst beantwortet worden**. Sein Vorschlag: Das Modell muss den **Zustand** klassifizieren, bevor es Ziffern ausgeben darf — sinngemäss „Status: beendet, Ergebnis 0:0" gegen „Status: nicht gefunden", und Ziffern ausschliesslich bei bestätigtem torlosem Unentschieden.
*Vermerk 28.8.2026: Gemini (Urheber der Rückfrage) ist seither nicht mehr am Projekt beteiligt. Die Frage und sein eigener Vorschlag dazu bleiben unverändert gültig — der Beteiligtenwechsel ändert nichts an der Sachfrage.*

→ **ChatGPT widerspricht** und antwortet auf dieselbe Frage „nein, ohne externe Quelle nicht". **Die Prüfer sind hier uneins.**
→ **Einordnung Claudes (Art. 14):** Geminis Formulierung trennt Zustand und Ergebnis und ist dadurch eine echte Verbesserung. **Sie beseitigt die neunte Fehlerart nicht.** Ein Modell, das ein Ergebnis erfindet, kann ebenso gut den Status erfinden. Sie senkt die Wahrscheinlichkeit, sie schliesst nichts aus.
→ **Kein Schnitt in der Messreihe:** Der Punkt ändert den Auftragstext des **Schiedsrichters**, nicht den der Gehirne. Arbeitsregel J greift hier nicht — dieselbe Begründung wie bei Punkt 26.
→ **Prüfbar wäre er:** Ein erfundenes 0:0 fällt heute nicht auf, weil Halbzeit 0:0 zu Endstand 0:0 passt. Mit Status-Kennzeichnung gäbe es zum ersten Mal ein Feld, dessen Fehlen auffällt.
→ **Status: entscheidungsreif. Ondo entscheidet, ob gebaut wird. Beide Prüfer raten, jetzt nichts zu bauen, sondern erst die Entscheidungen festzuhalten.**

ChatGPTs Umformulierung, im Blueprint unter dem 25.7. protokolliert: **Der Schiedsrichter soll nicht suchen, sondern prüfen.** Nicht „finde Spiel X", sondern „hier sind Wettbewerb, Datum, Heim, Gast — bestätige nur, wenn alle vier übereinstimmen".

**Stand im Code:** Der Auftrag beginnt bis heute mit „Ermittle per Websuche … den ENDSTAND". Übergeben werden nur Spielname, Datum und Anpfiffzeit — **der Wettbewerb gar nicht.** Die Wettbewerbspflicht aus v19.2 wirkt erst hinterher, als Warnung an Ondo.

**Vermutete Folge:** die erfundenen 0:0 vom 31.7. Ein Modell, das suchen soll, liefert irgendetwas; ein Modell, das bestätigen soll, kann „nein" sagen. **Vermutung, nicht bewiesen (Art. 13).**

→ **Beide Prüfer, 4.8.: „Prüfen statt suchen trifft den Kern."** Die Aufgabe zu schärfen ist mächtiger, als ein größeres Modell auf einen unscharfen Auftrag zu werfen. Nach der Rücknahme von 0a ist E der einzige verbliebene Ansatz gegen erfundene Ergebnisse.
→ **🔴 Berichtigt (27.8., Fehlerart C4 — Widerspruch im selben Dokument):** Hier stand weiterhin „Offene Rückfrage von Gemini, bisher unbeantwortet" — das war seit dem 8.8. nicht mehr richtig, siehe die Notiz „NICHT MEHR BLOCKIERT" oben: Gemini hat die eigene Rückfrage selbst beantwortet (Zustand vor Ziffer). Die Frage ist damit **beantwortet, nicht mehr offen** — was fehlt, ist Ondos Entscheidung, ob Geminis Antwort (gegen ChatGPTs Widerspruch) übernommen wird. Hängt zusammen mit ChatGPTs offener Frage vom 30.7.: Darf der Schiedsrichter überhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten? Diese Frage gehört in den Blueprint.
→ *Warum es drei Tage unentdeckt blieb: Der Beschluss stand nur im Blueprint-Protokoll, nie im Backlog. Genau der Fall, gegen den Arbeitsregel F gemacht wurde.*

---

**0b. Widersprüche messen statt korrigieren** · *Idee 29.7., Ondo* · **Status: ZURÜCKGESTELLT (31.7.), war beschlossen**

Ursprünglich: Widersprüche zwischen Ergebnis-Tipp und Marktaussage bekommen eine eigene Kennzahl je Gehirn.

**Warum zurückgestellt:** Nach dem Befund unter Punkt A würde eine Widerspruchsquote keine Eigenschaft der Gehirne messen, sondern eine unklare Formulierung im Auftragstext. Eine Kennzahl, die dem Gehirn anlastet, was die Frage verursacht hat, wäre selbst ein Messfehler.

**Zwei Korrekturen am ursprünglichen Beschluss, falls er wiederaufgenommen wird:**
1. Die Quote ist **rückwirkend** aus den vorhandenen Daten auslesbar (`gedreht`-Vermerk), ohne neue Messung.
2. Der Vorsatz „die betroffene Aussage fließt nicht in die Kalibrierung ein" ist **falsch herum**. Die umgedrehte Aussage ist die, an die das Gehirn glaubt. Sie herauszunehmen entfernt ehrliche Daten.

→ *Wiederaufnahme nach Test A.* **Test A ist am 5.8. abgeschlossen; die Voraussetzung ist damit erfüllt. Entscheidung Ondos steht aus.**

---

**0c. Amtliche Quellen bevorzugen** · *Idee 30.7., Claude · als Negativliste gebaut 3.9.2026* · **Status: 🔴 TEILWEISE GEBAUT am 3.9.2026 — als NEGATIVliste, nicht als Positivliste. Die ursprüngliche Idee einer bevorzugten Quelle je Wettbewerbsfamilie bleibt ausdrücklich unerledigt und wurde bewusst NICHT gebaut**

Beim UEFA-Abgleich am 30.7. benutzte keine Schiedsrichter-Antwort `uefa.com`. Die falschen Ergebnisse stammten von `terrikon.com` und `flashfussball.de`. Am 31.7. kamen vier 0:0 in Folge aus derselben Quelle.

→ *Vorschlag: pro Wettbewerbsfamilie eine bevorzugte Quelle vorgeben. Die bestehende Quellenpflicht verlangt nur, **dass** eine Quelle genannt wird, nicht **welche**.*
→ *ChatGPT (30.7.) hält diesen Punkt für billiger als eine zweite unabhängige Quelle.*

> **🔴 GEBAUT am 3.9.2026 als Teil 3 des Schiedsrichter-Auftrags, `beta.html` v19.8.12 — aber ausdrücklich anders als oben vorgeschlagen.**
>
> **Ondos Begründung gegen die Positivliste:** Eine Liste „amtlicher" Quellen deckt Wettbewerbe ausserhalb Europas (z. B. Gabun, Indien) nicht ab und würde eine Vollständigkeit vortäuschen, die nicht besteht. Gebaut ist deshalb eine kurze **Negativliste** in `quelleUnzuverlaessig()`:
> - **Belegt falsch (30./31.7.2026):** `terrikon.com`, `flashfussball.de`.
> - **Wett- und Buchmacherseiten** (`tipico`, `bet365`, `bwin`, `interwetten` und weitere): **Blueprint Grenze 5** belegt technisch, dass solche Seiten ihre Zahlen erst im Browser per JavaScript nachladen — ein Abruf sieht nur Werbetext.
>
> **Jede andere genannte Quelle zählt neutral, ohne Sonderstellung und ohne Rangfolge untereinander** — auch OneFootball, Flashscore, Sofascore und UEFA.com. Es gibt **keine** Pflicht zu drei verschiedenen Quellen; bei unterklassigen Wettbewerben kann es nur eine geben (Blueprint Grenze 6/7).
>
> **Wirkung (Entscheidung Ondos, 3.9.2026):** Ein Lauf mit einer Quelle von der Negativliste bleibt **vollständig sichtbar** (`refRoh`, Vorschlag, Text-Ausgabe) und wird benannt — er zählt aber bei der Einigkeitsprüfung aus Punkt 68 **nicht als Beleg**. Bleiben dadurch weniger als drei brauchbare Läufe, wird nichts übernommen und im nächsten Durchgang erneut gefragt.
>
> **Nennen alle drei Läufe dieselbe Quelle, zählt das als EIN Beleg, nicht als drei unabhängige.** Der Eintrag wird übernommen und trägt sichtbar „3 Läufe, 1 Quelle" (`e.refLaeufe`/`e.refQuellen`), in Karte und Log-Text-Export.
>
> **🔴 Zwei Grenzen, ausdrücklich benannt (Art. 14):**
> 1. **Die Liste erkennt nur, was auf ihr steht.** Eine unbekannte Wettseite fällt durch. Das ist der Preis dafür, keine Erkennung zu bauen, die auf Wortmustern rät und dabei echte Quellen fälschlich aussortiert.
> 2. **Der Beleg zu Grenze 5 wurde mit WETTQUOTEN geführt, nicht mit Endständen.** Dieselbe technische Ursache träfe vermutlich auch den Endstand auf derselben Seite — **bewiesen ist das für Endstände nicht.** Die Einstufung dieser Seiten beruht insoweit auf einer begründeten Annahme, nicht auf einer Messung.
>
> **Was offen bleibt:** die ursprüngliche Idee dieses Punktes, je Wettbewerbsfamilie eine bevorzugte Quelle vorzugeben. Sie ist nicht gebaut und nicht abgelehnt — sie ist durch die Negativliste nur weniger dringlich geworden.

---

**B. Regressionstest mit den 13 Ergebnissen als feste Prüfbibliothek** · *Idee 30.7., ChatGPT* · **Status: Idee, zur Entscheidung Ondos**

Die 13 Ergebnisse vom 29./30.7. mit den amtlichen UEFA-Werten als dauerhafte Prüfgrundlage festhalten. Jede künftige Änderung am Schiedsrichter wird daran gemessen.

→ **Bedingung: Die 13 Ergebnisse dürfen NICHT übernommen werden.** Ein Übernehmen zerstört den Vergleich und schreibt zwei falsche Endstände dauerhaft in die Messdaten.
→ *Empfehlung Claude (31.7.): als reines Dokument anlegen, nicht als Code. Kosten: null, kein API-Aufruf, eine Tabelle. Nutzen: Die Werte überleben, falls die App-Daten je verloren gehen, und die technische Schuld „kein automatischer Test" bekommt ihren ersten Gegenpunkt.*

---

**C. Vertrauensklassen statt binär gefunden/nicht gefunden** · *Idee 30.7., ChatGPT* · **Status: Idee**

Kern von ChatGPTs Architekturantwort: **Formvalidierung statt Inhaltsvalidierung.** Die sechs Absicherungen prüfen die Bauform der Antwort, nicht ihre Wahrheit. Bei Lech Poznań 3:4 meldeten alle „in Ordnung" — das Ergebnis war trotzdem falsch. Bei den erfundenen 0:0 vom 31.7. ebenso.

→ *Vorschlag: mehr als zwei Zustände, abgestuft nach Verlässlichkeit der Quelle und Übereinstimmung.*

---

**3. Such-Experiment** · *Idee 23.7., Claude* · **Status: beschlossen — ruht auf Ondos Wunsch (27.8.), nicht mehr blockiert**

Vier Wochen ohne Websuche messen, dann Suche zuschalten, Kalibrierung vergleichen. Die Messung ohne Suche läuft seit dem 23. Juli — **vier Wochen sind am 20. August um.**

→ **🔴 Berichtigt (27.8.):** Hier stand „die Pause bricht den zweiten Teil", weil ein Vergleich mit Suche neue Vorhersagen brauche und die Pause seit 14.8. keine liefere. **Das war ab dem 25.8. nicht mehr richtig** — laut KI-Log gibt es am 25.8. (24 offene) und 26.8. (10 offene) neue Vorhersagen. Der zweite Teil ist also technisch wieder möglich, eine kleine Messreihe könnte jederzeit gestartet werden.
→ **Ondos Entscheidung (27.8.): trotzdem vorerst ruhen lassen.** Keiner der drei Wege ist damit ausgeschlossen, nur bewusst noch nicht gewählt.
→ **Kosten:** Ruhenlassen und Streichen kosten nichts. Zusätzliche Läufe kosten Modellaufrufe in unbekannter Höhe, weil die Zahl der nötigen Läufe nicht feststeht.
→ **Empfehlung Claude weiterhin: ruhen lassen.** Der Punkt ist nicht verdorben, nur vertagt — die Messreihe ohne Suche bleibt vollständig erhalten und wäre jederzeit die Vergleichsgrundlage.

---

**43. Punkt 29 ist gebaut und nirgends ausgewertet** · *Fund 13.8., Chat 14 in der Abnahme · aufgenommen 14.8. · ausgeführt und beantwortet im Chat, nachgetragen 2.9.2026* · **Status: 🔴 BEANTWORTET / GEKLÄRT am 2.9.2026 — mit ausdrücklicher Grenze: interner Abgleich, keine erschöpfende externe Prüfung**

> **🔴 NACHGETRAGEN am 2.9.2026 (Arbeitsregel F).** Die Antwort war im Chat bereits gegeben und **nie eingetragen** — genau der Fall, gegen den Arbeitsregel F gemacht wurde. Sie wird hier nachgeholt, nicht nachträglich behauptet.
>
> **Der Befund, in drei Teilen:**
> 1. **Am 10.8. selbst gab es mehrere Fälle**, in denen Flash und Sonnet für dasselbe Spiel **unterschiedliche Wettbewerbe oder Anpfiffzeiten** zeigten. **Vor allem Sonnet war betroffen** — das ist genau der Positionsfehler aus Punkt 41 (Zuordnung über die Listenposition statt über den Spielnamen), an diesem Tag am Log bewiesen.
> 2. **Ab dem 11.8. bis zum 30.8. wurde kein einziger Widerspruch mehr zwischen den beiden Gehirnen gefunden.** An drei Stellen extern gegengeprüft — unter anderem NK Celje–Ararat-Armenia (11.8.) und Bayern–Stuttgart (28.8.) — alle geprüften Angaben korrekt.
> 3. **Das passt zeitlich zur eigenen Rolle für die Spielliste** (v19.8.1, geliefert 9.8.2026, 13:55 Uhr): Der Bruch im Fehlerbild liegt unmittelbar danach.
>
> **🔴 Grenze, ausdrücklich (Art. 14):** Das ist ein **interner Abgleich** — Flash gegen Sonnet im eigenen KI-Log —, **keine erschöpfende externe Prüfung**. Extern gegengeprüft wurden drei Stellen, nicht alle Tage. Stimmen beide Gehirne überein und sind trotzdem beide falsch, fällt das in diesem Abgleich nicht auf. **Genau dieser Fall ist am 8.8. belegt** (sieben von zehn Zeiten falsch, beide Gehirne übereinstimmend) und bleibt von diesem Befund unberührt.
> **Was daraus NICHT folgt:** dass die zweite, unbekannte Ursache aus Punkt 41 („der 8. August") geklärt wäre. Sie bleibt unbekannt (Art. 11). Der Befund zeigt, dass die eine Ursache — die Positionsverschiebung — sichtbar zurückgegangen ist, nicht, dass die andere verschwunden ist.
> **Was daraus auch nicht folgt:** dass die Änderung von v19.8.1 die Ursache beseitigt hat. Zeitliche Nähe ist kein Beweis (Arbeitsregel H). Punkt 41 selbst ist erst am 30.8.2026 gebaut worden, also nach dem hier ausgewerteten Zeitraum.
> **Kosten:** keine — die Auswertung ist gelaufen, dieser Eintrag ist reine Buchführung.

Die eigene Rolle für die Spielliste (`rolle:'liste'`, `gemini-flash-latest`) wurde am 9.8. **ausdrücklich als diagnostischer Test** gebaut, nicht als Abhilfe: Läuft die Liste auf dem grösseren Modell und werden die Zeiten richtig, war das Modell die Ursache; bleiben sie falsch, liegt sie woanders. **Beides wäre ein Ergebnis.**

Seither sind mehrere Vorhersagetage vergangen. **Ob die Anpfiffzeiten seit dem 10. August besser geworden sind, steht in keinem Dokument.**

→ **Warum es zählt:** Es ist der einzige noch offene Weg zur **zweiten, unbekannten** Ursache — der, die Punkt 41 ausdrücklich nicht löst.
→ **Was gebraucht wird:** ein frischer KI-Log-Text ab dem 10. August. Claude gleicht die Anpfiffzeiten per Websuche gegen die Wettbewerbe ab, die im Log stehen.
→ **Grenze, vorab benannt (Art. 14):** Ein einzelner sauberer Tag beweist nichts, ein einzelner falscher auch nicht. Es ist zu sagen, was gemessen wurde — und zu sagen, wenn es nicht reicht.
→ **Zusätzliche Grenze:** Mit der Pause kommen keine neuen Tage mehr dazu. Was jetzt im Log steht, ist alles, was es je geben wird.
→ **Kosten:** einige Websuchen, kein Geld, kein Eingriff in Code oder Messreihe.

---

## 🟡 Prio 2 — wichtig, aber später

**4. Daten-Export in die stabile Version** · *Idee Chat 1, erneut 28.7.* · **Status: beschlossen**
**Nicht zu verwechseln mit „Datensicherung" (gebaut in v19.1).** Die Sicherung schützt vor Datenverlust; dieser Punkt überträgt die Messdaten aus der Beta in die stabile Version. Ohne ihn geht bei der Beförderung alles Gesammelte verloren.
→ *Unmittelbar vor der Beförderung.*

**5. Beförderungskriterium (c) neu fassen** · *Idee 23.7., ChatGPT* · **Status: Idee**
15 Bewertungen sind statistisch zu wenig, 100 dauern Monate. Vorschlag Claude: Beförderung nach Stabilität und Fehlerfreiheit entscheiden, die Messung läuft danach weiter. **Inhalt gehört in den Blueprint.**
→ *Vermerk 31.7.: Die Beförderung ist derzeit ohnehin gesperrt — Kriterium (f) verlangt Null-Fehler-Toleranz beim Schiedsrichter. Einzelheiten in `PROJEKT-STATUS.md`.*

**9. Echte Quoten automatisch (GitHub Actions + Quotendienst)** · *Idee 23.7., Claude* · **Status: Idee**
Offene Vorfrage (Gemini): Deckt ein kostenloser Dienst überhaupt Ondos Spiele ab? Verfassungsfrage offen: Der Actions-Wecker ist ein winziger Server, der Blueprint sagt „kein Server". **Die Entscheidung gehört in den Blueprint.**

**10. Value-Rechnung zurückholen** · *Idee 22.7., Gemini* · **Status: Idee** · hängt an Punkt 9

**11. Rollenmodell in den Blueprint** · *Idee 23.7., ChatGPT* · **Status: Idee**
Zwei Ergänzungen von Claude offen: Architekt und unabhängiger Prüfer sollten nicht dieselbe Rolle sein; Geminis Doppelrolle (Duell-Teilnehmer und Schiedsrichter) muss benannt werden.
→ **🔴 Vermerk 28.8.2026:** Die zweite Ergänzung (Geminis Doppelrolle) ist mit seinem Ausscheiden aus dem Projekt gegenstandslos — als erledigt vermerkt, nicht gelöscht. **Die erste Ergänzung bleibt offen und betrifft jetzt ChatGPT:** Architekt und unabhängiger Prüfer sollten nicht dieselbe Rolle sein, und ChatGPT ist seit 27.8./28.8. beides — Architekt (seit Projektbeginn) und Prüfer (Rollen-Zeile in `STAND.md`).

**19. Beta auf Deutsch beschränken** · *Idee 31.7., Ondo · vorgelegt 3.8.* · **Status: Idee — NEU**
In `beta.html` steht jede Beschriftung dreimal (DE/FR/EN), rund 13 % der Datei. Jede neue Beschriftung kostet dreifache Arbeit, und vor jeder Lieferung müssen 175 Schlüssel × 3 abgeglichen werden. Die stabile v17 behielte alle drei Sprachen.
→ **Entscheidung Ondos am 3.8.: NEIN, vorerst nicht.** Wörtlich: *„solange es geht dreisprachig bauen; wenn es zu viel wird, können wir auf diese Idee zurückgreifen."*
→ **Ausdrücklich keine Ablehnung.** Der Punkt bleibt als Rückgriff verfügbar.
→ *Bedingung, falls er je gezogen wird: Die französischen und englischen v19-Wörter gibt es nur in `beta.html`. Vor dem Löschen bekommt Ondo eine Datei mit beiden Blöcken zum Aufheben.*

**20. Begründungszwang bei Seitenwechsel wiederherstellen** · *Fund 31.7., Claude · herausgehoben 3.8. auf Ondos Anweisung* · **Status: Idee — NEU**
In `OndoControl.html` (v17) steht im Auftragstext ein Satz, der einen Seitenwechsel mit „Änderung: …" begründen lässt. Im v19-Auftrag fehlt er — beim Umbau zum Messgerät am 23.7. stillschweigend weggefallen. Übrig ist nur die Liste der letzten sechs eigenen Tipps.
→ **Warum er nicht mit v19.7 kam:** Er wäre eine fünfte Änderung am Auftragstext gewesen, und er zwingt die Gehirne zu Erklärungen — das verändert das Antwortverhalten stärker als alle vier v19.7-Punkte zusammen. Gehört getrennt entschieden.
→ **Ungemessen bleibt:** ob die Liste ohne ihn überhaupt noch gegen Seitenwechsel wirkt. Stand bisher nur als Beobachtungspunkt und war dort nicht entscheidbar.

**21. Korrekturfaktor ohne Wartezeit ermitteln** · *Frage 4.8., Ondo* · **Status: OFFENE FRAGE — nicht abgelehnt**
Wenn ein Korrekturfaktor nur für das Modell gilt, an dem er gemessen wurde (neue Blueprint-Regel), dann kostet jeder Gehirnwechsel eine komplette neue Messreihe. Ondo fragt, ob sich das abkürzen lässt. **Ausdrücklich: Es geht um das Konzept, nicht um einen bestimmten Weg.**
→ **Warum der naheliegende Weg nicht trägt:** Alte Spiele durch ein neues Gehirn laufen zu lassen scheitert daran, dass das Modell den Ausgang **wissen** statt vorhersagen kann. Es sähe perfekt kalibriert aus und wäre wertlos.
→ **Hürde für jeden Ansatz:** Man müsste den Wissensstand des Modells kennen, und den nennt kein Anbieter verlässlich.
→ **Für den Schiedsrichter trägt derselbe Gedanke sehr wohl** — dort ist der Ausgang bekannt und das ist kein Nachteil, sondern der Zweck. Die 13 gesperrten Ergebnisse vom 29./30.7. sind genau diese Prüfbibliothek (Punkt B).

**23. Schattenlauf zur Antwortstabilität** · *Idee 4.8., Gemini* · **Status: Idee — von beiden Prüfern am 6.8. ausdrücklich zurückgestellt**

→ **⚠ 6.8.:** ChatGPT und Gemini raten übereinstimmend davon ab, diese Kennzahl jetzt zu bauen — ChatGPT unter Verweis auf die Zwei-Probleme-Regel, Gemini mit dem Argument, sie bekämpfe das Symptom statt der Ursache. **Zuerst Punkt 26 (Temperatur), dann neu bewerten.** Bemerkenswert: Gemini rät von seiner eigenen Idee ab.
Ein getrenntes, kleines Skript — **nicht** im Hauptprogramm. Es nimmt einige bereits abgeschlossene Spiele und stellt beiden Gehirnen mehrfach hintereinander denselben Auftragstext. Die Antworten landen in einem reinen Textprotokoll, fern der Kalibrierungsdaten. So bleibt die Hauptmessreihe unberührt.
→ **Anlass:** Am 4.8. antwortete Flash auf dieselbe Paarung zweimal verschieden, Sonnet zweimal gleich.
→ **⚠ Verschärft am 6.8.:** Bei Salzburg – Pafos schwankten **beide** Gehirne — Flash bei allen drei Märkten, Sonnet bei zwei von drei; der Ergebnis-Tipp blieb bei beiden gleich. Damit betrifft Geminis Einwand nicht mehr nur Flash.
→ **Geminis weiterreichende Aussage:** Kalibrierung setzt eine stabile Wahrscheinlichkeitsverteilung voraus. Schwankt ein Gehirn bei identischem Auftrag, ist die Prozentzahl teilweise willkürlich. **Vor jedem Korrekturfaktor braucht es deshalb eine vorgeschaltete Kennzahl für Antwortstabilität.** Das stellt die Hauptkennzahl des Projekts erstmals grundsätzlich infrage.
→ **Kosten: nicht null.** Mehrere Läufe je Spiel verbrauchen echte Anfragen. Vor dem Bauen zu beziffern.
→ *Hängt eng mit dem Temperatur-Fund zusammen: Ein Schattenlauf bei unbekannter Temperatur misst womöglich nur die Standardeinstellung des Anbieters.*

---

**50. Verworfen-und-warum-Liste im Blueprint** · *Vorschlag 15.8., Gemini (abgeschwächt von Claude)* · **Status: 🔴 NICHT GEBAUT (Claude, 27.8., Entscheidung an Claude delegiert) — bleibt sichtbar, nicht gestrichen**

> Gemini wollte das ganze Entscheidungs-Protokoll zurück in die Pflichtlektüre, damit ein frischer Chat keine geschlossenen Debatten neu eröffnet. **Das wären 48 KB und die Trennung rückgängig.** Stattdessen eine kurze Liste im Blueprint: was verworfen wurde, je ein Satz warum, Verweis ins Protokoll für Einzelheiten.
>
> **🔴 Entscheidung (Claude, 27.8., von Ondo ausdrücklich delegiert):** nicht gebaut. Die Liste bräuchte bei jeder künftig verworfenen Idee eine eigene Pflege — genau die Art Doku-Aufwand, gegen den Ondo sich wandte —, ohne dass bisher ein echter Fall aufgetreten ist, in dem ein Chat eine geschlossene Debatte neu aufgemacht hätte. Der Nutzen ist unbelegt, die laufenden Kosten sind sicher. **Sollte künftig tatsächlich einmal eine alte Debatte unnötig neu aufgemacht werden, ist das der Beleg, der die Liste doch rechtfertigt** — bis dahin bleibt es bei Blueprint-Protokoll und Backlog als alleinigen Fundorten.

## 📋 Für Blueprint und Ondo-Core vorgemerkt

*Diese Punkte gehören in die Architektur- und Verfassungsdokumente und sind hier nur geparkt, bis sie dort stehen.*

| Punkt | Herkunft | Ziel | Stand |
|---|---|---|---|
| Arbeitsregel **K — Bericht statt Datei**: *Prüfer bekommen nur die geänderten Stellen mit Zeilennummer, altem und neuem Text und Begründung — davor ein fester Zusammenhangsblock, jedes Mal neu aus den Dokumenten geschrieben.* | **Claude 7.8., beschlossen von Ondo 7.8.** | Blueprint 2c | **eingetragen** (Blueprint 0.9, Abschnitt 2c) |
| Arbeitsregel **J — Korrekturfaktor gilt nur für sein Modell**: *Wechselt das Modell, verfällt der Faktor und muss neu gemessen werden.* | **Ondos Frage, 4.8.** | Blueprint 2c | **eingetragen** (Blueprint 0.6, Abschnitt 2c) |
| **„Fail Safe" bei unbekannten Fehlern** — nicht automatisch wechseln, sondern anhalten und als Unklarheit melden | ChatGPT, 4.8. | Blueprint 2c | **offen — Ondos Entscheidung steht aus** |
| **Wie unterscheidet der Auftragstext ein echtes 0:0 von „nicht gefunden"?** (Geminis Rückfrage) | Gemini, 4.8. *(Urheber seit 28.8. nicht mehr beteiligt — Frage bleibt gültig)* | Blueprint / Punkt E | offen |
| **Darf der Schiedsrichter überhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten?** (offene Frage) | ChatGPT, 30.7. | Blueprint | offen |
| Arbeitsregel **G — Kostenregel**: *Jeder Vorschlag nennt seine Kosten — Geld, Zeit, Nutzungslimit — oder sagt ausdrücklich, dass er keine hat.* Ein Satz, kein Formular | **Ondo, 31.7., angenommen** | Blueprint 2c | **eingetragen** (Blueprint 0.4, Abschnitt 2c) |
| Arbeitsregel: **Belegen statt herleiten** — Codezeilen zitieren, nicht beschreiben | Ondo, 31.7. | Blueprint 2c | **eingetragen** (Arbeitsregel H) |
| Arbeitsregel: **Prüfen, bevor behauptet wird, ein Dokument sei veraltet** | 31.7. | Blueprint 2c | **eingetragen** (Arbeitsregel I) |
| **Übergabe-Protokoll** als Tabelle (wer an wen, welches Verfahren, wie viele Kontrollfragen richtig) | **Ondo, 31.7.** | PROJEKT-STATUS | **eingetragen** (Abschnitt Übergabe-Protokoll) |
| Drei-Ebenen-Trennung | ChatGPT, 23.7. | Ondo-Core | beschlossen |
| Übergaberegel (Chat-Übergabe) in einer Fassung für ChatGPT | 30.7. | Blueprint | beschlossen |
| Beförderungskriterium (c) | ChatGPT, 23.7. | Blueprint | offen |
| Verfassungsfrage GitHub Actions („kein Server") | 23.7. | Blueprint | offen |
| Rollenmodell | ChatGPT, 23.7. | Blueprint | offen |

**Hinweis für den nächsten Chat (31.7.):** Prozentzahlen in der Messphase widersprechen **nicht** dem Beschluss vom 5.7. über Vertrauensstufen HOCH/MITTEL/NIEDRIG. Die Stufen gelten für **Empfehlungen an Ondo**, die Prozentzahlen für **Messwerte** — Kalibrierung ist ohne Prozentzahlen nicht messbar. Das ist kein Fehler und nicht zu reparieren.

---

## 👁 Beobachtungspunkte — nichts bauen, nur mitschreiben

| Beobachtung | Gefunden | Von wem | Stand |
|---|---|---|---|
| **`Blueprint.md`, Zeile 133 verwies für eine LAUFENDE Pflicht auf `PROJEKT-STATUS.md`** — eine Archivdatei. Betroffen war der Aufzählungspunkt in Arbeitsregel F: Aktualisierung am Ende eines Arbeitstags und vor jeder Chat-Übergabe. *(Zeile 133 nach der Zählung von Chat 20; im Repo-Stand `dabf9bb` steht der Satz auf Zeile 135.)* | 21.8. | Chat 20, Cloud-Sitzung | **BERICHTIGT am 21.8.** Dort steht jetzt `STAND.md` mit dem Zusatz „(bis 15.8. in `PROJEKT-STATUS.md`, seither Archiv)". Blueprint auf 0.31 gehoben |
| **`Blueprint.md`, Zeile 142 verweist ebenfalls auf `PROJEKT-STATUS.md`** — dort aber nur **rückblickend**, auf die Namensklärung vom 31.7. *(Zeile 142 nach der Zählung von Chat 20; im Repo-Stand `dabf9bb` Zeile 144.)* | 21.8. | Chat 20, Cloud-Sitzung | **Vermutlich harmlos, nicht geändert.** Ein Rückblick darf auf die Archivdatei zeigen |
| **Die Gehirne sind bei identischer Aufgabe unterschiedlich stabil** — auf dieselbe Paarung, die durch den Doppeleintrag zweimal gestellt wurde, antwortete **Flash zweimal verschieden** (Unentschieden/unter 2,5 gegen Heimsieg/über 2,5), **Sonnet zweimal gleich** | 4.8. | Claude, Zufallsfund aus dem Doppeleintrag | **NEU und wichtig.** Bisher war Nichtdeterminismus ausschliesslich beim Schiedsrichter dokumentiert (Fehlerart 1), nicht bei den Gehirnen. Ein einzelner Fall beweist nichts (Arbeitsregel D), aber er berührt die Hauptkennzahl: Schwankt ein Gehirn bei gleicher Frage, misst die Kalibrierung teils Zufall. **Nichts gebaut, weiter beobachten** |
| **Dasselbe Spiel doppelt in der Spielliste** — am 2.8. standen „Bohemians – Galway United FC" (Anpfiff 20:00) und „Bohemians Dublin – Galway United" (Anpfiff 19:00) als zwei Spiele in derselben Liste. Sonnet hat es selbst bemerkt: „Gleiche Paarung wie heute früher" | 3.8. | Claude, aus Ondos Sicherung | Die Doppelten-Sperre in `spielListeHolen` vergleicht Namen buchstabenweise; zwei Schreibweisen sind für sie zwei Spiele. Folge: **sechs Aussagen je Gehirn aus einem einzigen Spiel**, und eine der beiden Anpfiffzeiten ist falsch — die geht in die 2,5-Stunden-Regel des Schiedsrichters ein. **✅ ENTSCHIEDEN am 7.8. (Ondo): eigene Tabelle, nicht die zehnte Schiedsrichter-Fehlerart.** Geführt als **S1** in der neuen Tabelle „Die Spielliste — drei Fehlerarten" in `PROJEKT-STATUS.md`, zusammen mit den falschen Anpfiffzeiten (S2) und den erfundenen Spielen (S3). Begründung: Alle neun Schiedsrichter-Fehlerarten sind Fehler beim Ablesen von Ergebnissen; die Spielliste erzeugt ihre Probleme davor. Die Schiedsrichter-Tabelle bleibt bei neun. Geminis eigene Einordnung „Datenhygiene, nicht Schiedsrichterurteil" (4.8.) stützt das. Der Schiedsrichter fand am 4.8. beide Einträge und lieferte beide Male 1:1; Ondo hat beide ignoriert. Nichts gebaut |
| **Zugangsschlüssel im Klartext in der Sicherungsdatei** — die Sicherung enthält den gesamten Zustand, also auch `apiKey`, `geminiKey` und `pin` | 3.8. | Claude | **NEU.** Kein Fehler, aber nirgends aufgeschrieben. Folgen: Die Datei darf nie an ChatGPT oder Gemini gehen, nie an einen Bericht angehängt und nie ins Repo. **Ondo hat am 3.8. beide Schlüssel neu erzeugt und die alten deaktiviert.** Zweite Folge: Wird eine Sicherung von vor dem 3.8. zurückgeladen, überschreibt sie die neuen Schlüssel mit den toten alten — dann Schlüssel neu eintragen, die Messdaten bleiben unberührt |
| **Zuordnung über die Listenposition** — in `vorhersagen()` werden Wettbewerb und Anpfiffzeit über die Position in der Liste zugeordnet, der Spielname dagegen aus der Antwort des Gehirns. Antwortet ein Gehirn in anderer Reihenfolge oder lässt ein Spiel aus, hängt an einem Spiel die falsche Anpfiffzeit | 31.7. | Claude | **NEU.** Wichtig: Die Anpfiffzeit fließt in die 2,5-Stunden-Regel des Schiedsrichters ein. In den Läufen vom 29. und 30.7. gaben beide Gehirne die Liste in derselben Reihenfolge zurück; dort ist nichts passiert. **Beobachtung, kein bewiesener Fehler.** An älteren Läufen prüfbar |
| **Der Wettbewerb wird dem Schiedsrichter nicht übergeben** — nur Spielname, Datum, Anpfiffzeit. Die Wettbewerbspflicht aus v19.2 wirkt erst hinterher als Warnung | 31.7. | Claude | **NEU.** Führt zu Punkt E |
| **Konsistenz-Absicherung ist zur Hälfte verschwunden** — der Satz, der einen Seitenwechsel mit „Änderung:" begründen ließ, steht in `OndoControl.html` (v17), aber nicht mehr im v19-Auftrag. Übrig ist nur die Liste der letzten sechs eigenen Tipps | 31.7. | Claude | **NEU.** Beim Umbau zum Messgerät stillschweigend weggefallen. Ändert die Kostenrechnung bei Punkt D und ist für sich genommen ein Verlust. Ob die Liste allein noch wirkt, ist **nicht gemessen** |
| **„Beide treffen" — Ursache geklärt** | 30./31.7. | Claude, aus Bildschirmfotos und Code | **Nicht mehr nur Beobachtung → Punkt A.** Die frühere Vermutung „die App erzeugt den Widerspruch" ist zurückgenommen |
| **Sonnets Zurückhaltung — verfeinert** | 31.7. | Claude | Nicht der Wettbewerb entscheidet, sondern **wie klar der Favorit ist**. Am 30.7. in der Conference-League-Qualifikation wieder 42–52 %. Die frühere Deutung „kommt von den Testspielen" ist damit zu eng |
| **Heim und Gast in der Spielliste vertauscht** — Everton–Stoke, Hull–Rizespor. Trifft die Vorhersage, weil beide Gehirne mit Heimvorteil begründen | 29.7. | Claude | siebte Fehlerart, zweimal unabhängig aufgetreten. Vorschlag: Namen statt Reihenfolge melden lassen. **Noch keine Absicherung gebaut** |
| **Falscher Endstand trotz aller Prüfungen** — Lech Poznań 3:4 statt 1:4; alle sechs Absicherungen meldeten „in Ordnung" | 30.7. | Ondo (UEFA-Abgleich) | achte Fehlerart. Führt zu Punkt C |
| **Erfundene 0:0** — vier Spiele in Folge 0:0 aus derselben Quelle, Lech Poznań – Aarhus zum dritten Mal ein anderes Ergebnis, Breidablik – Drita im selben Datensatz 0:0 und 0:1 | 31.7. | Ondo | **neunte Fehlerart, eingetragen in `PROJEKT-STATUS.md`. Schwerer als alle bisherigen**, weil ein erfundenes 0:0 wie ein gefundenes Ergebnis aussieht und keine einzige Warnung auslöst. Führt zu Punkt E und 0a |
| **Zweistufige Spielliste (v19.6)** | 29./30.7. | Claude | Test an zwei Tagen bestanden: CL- und Conference-League-Qualifikation, kein Testspiel. Nach Bewährungszeit auf `bewährt` setzen |
| **Einseitige Vorhersagen** — am 25.7. sagten beide Gehirne in allen zwölf Spielen „beide treffen" und „über 2,5" | 25.7. | Claude | am 26.7. wieder Vielfalt — weiter beobachten |
| **Verwechslungsfalle: derselbe Verein zweimal am selben Tag** — Crystal Palace gegen Famalicão und gegen Lens | 28.7. | Claude | Die Datumsprüfung hilft hier nicht. Beobachten |
| **Log-Deduplizierung** — gilt als überholt. Nach zwei Wochen Messbetrieb gegenprüfen | 16.7. | Claude | Prüftermin: etwa 6. August |
| **Seitenwechsel über mehrere Tage** — ein Gehirn kann an zwei Tagen verschieden tippen | 18.7. | Claude | beobachten |

---

## 🔵 Technische Schuld

| Punkt | Auswirkung heute | Dringlichkeit |
|---|---|---|
| ~~Warntext der Datensicherung unvollständig~~ | **BEHOBEN in v19.7.5 (4.8.)** — der Text nennt jetzt in allen drei Sprachen das Löschen des Browserverlaufs | erledigt |
| ~~„Zuletzt gesichert" nach dem Laden falsch~~ | **BEHOBEN in v19.7.5 (4.8.)** — Ursache lag nicht im Laden, sondern im Sichern: `datenSichern` schrieb die Datei aus, **bevor** es den neuen Zeitstempel setzte. Die Datei trug deshalb den Stand der vorigen Sicherung. Reihenfolge umgedreht. *Ältere Sicherungsdateien tragen weiterhin den alten Stand* | erledigt |
| ~~`class="ghost"` statt `class="btn btn-ghost"`~~ | **BEHOBEN in v19.7.5 (4.8.)** | erledigt |
| **Doppelter Code** — `beta.html` und `OndoControl.html` sind zwei vollständige Kopien | Jede Korrektur muss zweimal gemacht werden | hoch, sobald v19 befördert wird |
| **Bekannte Lücke im Schiedsrichter** — ein einmal als *fertig* gemeldetes Ergebnis wird nie wieder hinterfragt | Ein falsch abgelesener Endstand bleibt dauerhaft falsch, sobald übernommen wurde | **hoch** — durch die erfundenen 0:0 vom 31.7. weiter verschärft |
| **Der Schiedsrichter sucht, statt zu prüfen** | Ein Modell, das suchen soll, liefert irgendetwas statt „nicht gefunden" | **hoch** → Punkt E |
| **`APP_VERSION = 18` in `beta.html`**, während der Kopf v19.6 anzeigt | Heute folgenlos. Wird `version.json` bei der Beförderung auf 19 gesetzt, zeigt die Beta ein Update-Banner, das aus der Beta herausführt | vor der Beförderung klären |
| **Rückblick auf eigene Tipps enthält Vermutungen, keine Tatsachen** | Ein falscher Tipp kann Grundlage des nächsten werden | **wird mit v19.7 behoben** → Punkt D |
| **Nur lokale Speicherung** (localStorage) | Sicherung seit v19.1 gebaut; offen bleibt die Übertragung in die stabile Version | → Prio 2, Punkt 4 |
| **Eine lange JS-Datei** (keine Module) | Änderungen werden mit der Zeit riskanter | mittel |
| **Sprachdateien von Hand** (drei Sprachen, DE/FR/EN, von `pruefe.py` Abschnitt 13 bei jedem Lauf selbst gezählt und auf Gleichheit geprüft — **die Zahl selbst steht nur in `STAND.md`, Abschnitt „Versionen"**, Punkt 45). *🔴 Berichtigt 2.9.2026: Hier stand „229 Schlüssel × 3 Sprachen, Stand 28.8.2026" — seit v19.8.9 überholt, richtig sind 234. Die Zahl ist bewusst **nicht** auf den neuen Wert gesetzt, sondern durch den Verweis ersetzt worden: Sie war hier ein zweiter Ort für dieselbe Tatsache und wäre an dieser Stelle erneut unbemerkt gealtert. `pruefe.py` hat es nicht gefangen — Abschnitt 6 prüft nur das Muster `**Sprachschlüssel: N**`, diese Tabellenzelle schrieb die Zahl anders.* | Dreifache Pflege bei jeder neuen Beschriftung. Rückgriff bleibt Punkt 19 | niedrig |
| **Seed-Daten fest im Code** (WM-Wetten vom Juli) | Ballast bei jedem Start | niedrig |
| **Kein automatischer Test** | Jede Änderung wird nur von Hand geprüft | mittel → Punkt B wäre der erste Schritt |
| **Gemini-Kaskade komplex** | Funktioniert, aber schwer zu durchschauen bei Fehlern | niedrig |
| **Die Dokumente selbst** | Das Einlesen kostet einen neuen Chat etwa die Hälfte seines Arbeitsspeichers | **NEU 31.7.** → Punkt 18 |

---

## 🟢 Prio 3 — notiert, kein Termin

**13. Sportarten-Erweiterung** · *Idee 20.7., Ondo* · **Status: Idee** — Kandidat 1: Tennis. Pro Sportart eigene Abrechnungsregel und **getrennte Statistik**. Fußball liefert bis Ende September genug Spiele.

**14. Tiefenanalyse-Knopf** · *Idee Chat 1, Claude* · **Status: Idee** — zurückgestellt zugunsten Einfachheit

**15. Vier-Chat-Werkzeug (Poe)** · *Idee 23.7., Claude* · **Status: Idee** — Gratis-Tarif reicht nicht, realistisch ab ~5 $/Monat

**16. Wettarten ausschreiben oder erklären** · *Idee 10.7., Claude* · **Status: Idee** — Anlass war Ondos Frage „Was heißt BTTS?". Heute geringer Bedarf, weil nur drei feste Märkte in Klartext angezeigt werden

**17. DeerFlow-artiger Harness als Backend** · *Idee 15.7., Ondo* · **Status: Idee, Zukunftsregal** — Braucht einen dauerhaft laufenden Rechner, fällt heute durch die Zwei-Probleme-Regel

---

