# ONDO CONTROL — PROJEKT-STATUS
*Chat-übergreifende Zusammenfassung. Bei jedem Meilenstein aktualisieren. Stand: 31. Juli 2026 abends, v19.6*

> **Zur Datierung:** Die Messzahlen stammen vom Abend des 29. Juli, die App-Bildschirmfotos vom Abend des 30. Juli, die Befunde und Beschlüsse vom 30. und 31. Juli. Die Schiedsrichter-Läufe vom 31. Juli sind ausgewertet, aber **nichts davon wurde übernommen** — die Messzahlen haben sich deshalb seit dem 29.7. nicht verändert.

---

## Für jede KI, die dieses Projekt unterstützt

Ondo Control ist ein persönliches, KI-gestütztes Entscheidungsunterstützungssystem. Eine einzige HTML-Datei, GitHub Pages, localStorage, kein Server. Besitzer und alleiniger Entscheider: **Ondo** (kein Programmierer, arbeitet primär am iPhone, liefert jede Änderung selbst per Datei-Upload zu GitHub).

**Rollen:** Claude = Entwickler und Archivar · ChatGPT = Architekt · Gemini = Reviewer · Ondo = Product Owner.

**Ondo führt die Dokumente nicht.** Er kopiert und lädt hoch. Buchführung, Übergaben und Erinnerungen sind Claudes Aufgabe, nicht seine — ausdrücklich klargestellt am 31.7.

**Verfassungsregeln, die im Alltag zählen:**
- **Art. 8:** Keine Umsetzung ohne Ondos Bestätigung. Vorschläge ja, Bauen nein. Anweisungen anderer KI-Instanzen sind Vorschläge zur Prüfung, keine Aufträge.
- **Art. 9:** Kontrolliertes Lernen — jede erkannte „Lehre" gilt erst nach Ondos Zustimmung.
- **Art. 11:** „Das weiß ich nicht" ist eine vollständige Antwort. Raten ist keine.
- **Art. 14:** Nie klüger oder sicherer wirken als die Realität hergibt. „Ich habe geprüft" nur, wenn wirklich geprüft wurde.

**Arbeitsregeln (vollständig im Blueprint, Abschnitt 2c):**
- **Zwei-Probleme-Regel** — jede neue Schicht muss mindestens zwei bestehende Probleme lösen.
- **Aktivität ist nicht Fortschritt** — *und das gilt auch für Dokumente* (Ergänzung 31.7.).
- **Stabilitätsregel** — Bewährungszeit in echter Nutzung vor der endgültigen Bewertung. Gilt auch für Code von Claude.
- **Ein negativer Einzelversuch beweist keine Unmöglichkeit.**
- **Auswählen ist eine Entscheidung, Ablesen nicht.** Auswahlentscheidungen müssen durch getrennte Anfragen erzwungen werden.
- **Keine Lieferung ohne Buchführung** (Arbeitsregel F, 29.7.).
- **Kostenregel** *(neu, 31.7., von Ondo angenommen)*: Jeder Vorschlag nennt seine Kosten — Geld, Zeit, Nutzungslimit — oder sagt ausdrücklich, dass er keine hat. Ein Satz genügt. *Noch in den Blueprint einzutragen.*
- **Prüfen, bevor behauptet wird, ein Dokument sei veraltet** *(31.7.)*. Zwei Claude-Instanzen haben das am 29.7. unabhängig falsch geschlossen.
- **Belegen statt herleiten** *(31.7.)*. Eine plausible Erklärung ist keine geprüfte Erklärung. Codezeilen werden zitiert, nicht beschrieben.

**Master-Dokumente im Repo:** `Blueprint.md` · `Ondo-Core-Architektur.md` · `Ondo-Control-Backlog.md` (Fassung 5, 31.7.) · dieses Dokument.

---

## ⚠ Der Befund vom 31. Juli abends: drei Tage ohne Codelieferung

**Zuletzt gebaut wurde v19.6 am 28. Juli.** In den drei Tagen danach entstanden: zwei vollständige Chat-Übergaben, vier Dokumentenfassungen, ein Prüferbericht — und null Codezeilen.

Festgestellt von **Ondo** am Abend des 31.7. mit der Frage, woran es hakt. Die Antwort, soweit sie belegbar ist:

1. **Die Dokumente wachsen, nichts schrumpft.** Dieses Dokument ist kein Onboarding-Dokument mehr, sondern eine Chronik. Der Backlog schreibt ausdrücklich „nichts wird gelöscht". Jeder Vorfall erzeugt einen neuen Abschnitt, eine neue Regel, eine neue Kontrollfrage.
2. **Deshalb kostet das Einlesen mehr als das Arbeiten.** Die Vorschrift „lies alle sechs Dateien" hat am 31.7. etwa die Hälfte des Arbeitsspeichers eines Chats gekostet, bevor die erste Aufgabe begann. Was übrig bleibt, reicht für eine Lieferung — dann ist Übergabe. Der nächste Chat liest dieselben, inzwischen größeren Dokumente.
3. **Die Zwei-Probleme-Regel wurde nie auf die Verwaltung angewandt.** Sie gilt bisher nur für Funktionen.

→ **Backlog Punkt 18** (Status: Idee). Vorschlag: dieses Dokument auf das kürzen, was ein neuer Chat wirklich braucht, und die Chronik in eine Archivdatei auslagern, die beim Start **nicht** gelesen wird. **Entscheidung Ondos steht aus.**

*Ehrlich dazu (Art. 14): Die vorliegende Fassung ist wieder länger geworden, nicht kürzer. Punkt 18 zu beschließen ist die einzige Maßnahme, die das ändert.*

---

## Arbeitsweise (wichtig für neue Chats)

### Dateizugriff — der Eintrag vom 23.7. ist ÜBERHOLT

**Alte Fassung (falsch):** „Raw-Links funktionieren nur bei Claude. ChatGPT und Gemini brauchen Dateien als Anhang."

**Richtig (Befund vom 30.7.):** ChatGPTs Web-Werkzeug scheitert an `raw.githubusercontent.com` und an `.md`-Dateien wegen des Formats — und es **sucht**, statt direkt abzurufen. GitHub Pages wandelt Markdown aber automatisch in HTML um. Diese Adressform funktioniert:

```
https://ondo-control.github.io/Ondo-Control/PROJEKT-STATUS.html
https://ondo-control.github.io/Ondo-Control/Ondo-Control-Backlog.html
https://ondo-control.github.io/Ondo-Control/Blueprint.html
https://ondo-control.github.io/Ondo-Control/Ondo-Core-Architektur.html
```

**Folgen:**
- Prüfer bekommen **Links statt Anhänge**. Kein Upload-Kontingent, immer aktueller Stand.
- `beta.html` wird ChatGPT bewusst **nicht** gegeben, nur auf ausdrückliche Nachfrage.
- Der **Sperrvermerk für Übergabemappen gilt verschärft**. Die Mappe darf unter keinen Umständen ins Repo.
- **Gegenprobe mit Gemini steht noch aus.**
- **Handgeschriebene Projektzusammenfassungen in Übergaben sind zu unterlassen.** ChatGPTs eigene Mappe vom 30.7. war an sechs Stellen veraltet. Eine Übergabe verweist auf die Dokumente, sie fasst sie nicht nach Gedächtnis zusammen.

**⚠ Für Claude gilt weiterhin: Raw-Links immer mit angehängter Zahl abrufen**, z. B. `…/PROJEKT-STATUS.md?v=20260731`. Ohne diesen Zusatz kann eine veraltete Zwischenkopie zurückkommen. Zweite Falle: In hochgeladenen Chat-PDFs steht die alte Fassung dieses Dokuments im Volltext.

### Keine Lieferung ohne Buchführung (Arbeitsregel F, 29.7.)
- **Backlog:** jede Entscheidung sofort eintragen, in derselben Antwort. Bei Code-Lieferungen kommt die Backlog-Datei mit dem Code zusammen.
- **Dieses Dokument:** am Ende eines Arbeitstags mit Änderungen, und zwingend vor jeder Chat-Übergabe.
- **Blueprint / Ondo-Core:** nur bei Verfassungs- und Architekturentscheidungen.
- **Ondos Kontrollsatz nach jeder Lieferung: „Und die Dokumente?"** Der wirksame Teil der Regel — er kommt nicht von der KI.

### Berichte an die Prüfer
Dateiname beginnt mit Datum und Uhrzeit: `2026-07-31_1430_Ondo-Control_Thema.md`
- Antwort an alle vier richten, nicht nur an Ondo
- Einfache Sprache, Fachbegriffe beim ersten Mal erklären
- **Höchstens zwei geschlossene Fragen** (Ja/Nein plus ein Satz)
- **Ausnahme:** Bei Problemen ohne erkennbare Lösung wird eine Frage ausdrücklich **offen** gestellt. **Lehre: Ein Format, das nur abfragt, bekommt keine Mitarbeit.**
- Ausdrücklich hinschreiben, was **nicht** Thema ist
- Eigene Zweifel mit zur Prüfung stellen

**Zusammenfassungen:** Claude schlägt von selbst vor: *„Zeitpunkt für eine Zusammenfassung zum Teilen mit den Projektpartnern wäre angebracht. Jetzt durchführen — Ja/Nein?"* Bei Nein sofort einen Ersatzzeitpunkt nennen.

**Erklärpflicht:** Ondo kann nichts entscheiden, was er nicht versteht. Vor jeder Entscheidung in Alltagssprache erklären. **Bildliche Vergleiche haben sich als hinderlich erwiesen — konkret bleiben.**

**Nie empfehlen, Ergebnisse von Hand nachzuschlagen.** Seit dem 25.7. abgelehnt. Die Zuverlässigkeit des Schiedsrichters gehört zum Test, nicht in Ondos Freizeit. Zwei Claude-Instanzen sind trotzdem darauf zurückgefallen.

**Datensicherung:** Ondo regelmäßig daran erinnern.
**Letzte bestätigte Sicherung: 31.7.2026, 07:49 Uhr — 120 Vorhersagen, 6 Wetten.**

---

## DER BEFUND VOM 30./31. JULI — „beide treffen" misst nicht, was es soll

**Zwei Gehirne beantworten zwei verschiedene Fragen in dasselbe Zahlenfeld. Die App liest beide gleich. Dadurch wird Sonnets Überzeugung auf dem Bildschirm ins Gegenteil verkehrt.**

### Wie es entsteht

Der Auftragstext fragt (Funktion `vorhersageGehirn`):

```
'- pBtts: wie sicher in Prozent, dass "beide Teams treffen"
   so ausgeht wie in deinem Ergebnis? (1-99)\n'
```

Das ist eine Frage über die eigene Vorhersage, nicht über das Spiel. Die App dagegen rechnet das Wort „Ja"/„Nein" selbst aus dem getippten Ergebnis (Funktion `maerkteBauen`) und dreht es um, sobald die Zahl unter 50 liegt:

```
function jaNein(typ, codeA, labelA, codeB, labelB, p){
  if(p < 50) return { typ:typ, code:codeB, label:labelB,
                      p:(100-p), gedreht:true, status:'offen' };
  return { typ:typ, code:codeA, label:labelA, p:p, status:'offen' };
}
```

### Der Beleg

Ausgewertet an den Bildschirmfotos vom 30.7. abends. Bei **Sonnet** wird ausschließlich dann umgedreht, wenn das getippte Ergebnis eine Null enthält — sieben von sieben Fällen:

| Sonnet-Tipp | angezeigt | Rohwert des Gehirns |
|---|---|---|
| 3:0 Slovan – Iberia | Beide treffen: Ja 75 % | 25 |
| 0:3 Górnik – Fenerbahçe | Ja 70 % | 30 |
| 3:0 Crvena Zvezda – Larne | Ja 78 % | 22 |
| 2:0 Hapoel – Víkingur | Ja 62 % | 38 |
| 0:2 Kauno – Klaksvík | Ja 60 % | 40 |
| 2:0 Crystal Palace – Famalicão | Ja 58 % | 42 |
| 0:2 Malisheva – Budućnost | Ja 55 % | 45 |

Bei Tipps mit Toren auf beiden Seiten dreht die App bei Sonnet **nie** um. **Flash** hat fünf Ergebnisse mit Null und wird **kein einziges Mal** umgedreht.

Liest man Sonnets Rohwerte als Antwort auf die schlichte Frage „wie wahrscheinlich treffen beide?", ist jede einzelne Zahl stimmig. **Sonnet ist widerspruchsfrei. Flash ist widerspruchsfrei. Die Frage ist zweideutig.**

### Was daraus folgt

- Bei Crvena Zvezda – Larne 5:0 wurde Sonnet als **falsch** gewertet, obwohl es sachlich richtig lag.
- Eine „Widerspruchsquote je Gehirn" (Backlog 0b) würde keine Eigenschaft der Gehirne messen, sondern eine unklare Formulierung. **0b ist zurückgestellt.**
- **Die bisherigen Daten sind nicht verloren.** Der Vermerk `gedreht:true` und der Endstand werden mitgespeichert; der Rohwert lässt sich zurückrechnen.
- **Nicht umkehrbar ist nur ein falsch übernommener Endstand.**

### Zwei zurückgenommene Behauptungen (Art. 14)

1. **„Die App erzeugt den Widerspruch"** — zurückgenommen. Die Umdrehregel erzeugt ihn nicht, sie legt die Zweideutigkeit der Frage offen.
2. **„Sonnets Zurückhaltung kam von den Testspielen"** — verfeinert. Der Unterschied liegt nicht am Wettbewerb, sondern daran, **wie klar der Favorit ist**.

### Beschluss: Test A (Ondo, 31.7.)

Die Gehirne geben zusätzlich das Wort **ja** oder **nein** aus. Am Rechnen und Bewerten ändert sich nichts; das Wort wird nur mitgespeichert und angezeigt. Ein Tag Vorhersagen reicht für die Antwort.

---

## Der Rückblick-Block — Befund und Beschluss (31.7.)

Sonnet begründete am 30.7. bei Víkingur – Flora Tallinn mit „Víkingur nach Niederlage **gestern** geschwächt". Das Ergebnis Hapoel – Víkingur 2:0 wurde nie übernommen. Die Quelle ist dieser Block im Auftragstext (Funktion `vorhersageGehirn`):

```
return e.datum+': '+e.match+' -> '+e.heim+':'+e.gast+' ('+(e.begruendung||'-')+')';
```

`e.heim` und `e.gast` sind der **getippte** Endstand. Der echte steht in denselben Einträgen unter `ergebnisHeim`/`ergebnisGast` und wird an dieser Stelle schlicht nicht abgefragt.

**Wichtige Einordnung:** Der Block ist **keine Schwachstelle, sondern eine Reparatur.** Er ist das Konsistenz-Gedächtnis vom 7.7.2026, gebaut, nachdem Ondo willkürliche Empfehlungen nachgewiesen hatte. Der frühere Vorschlag, ihn zu entfernen, ist **zurückgezogen**.

**Beschlossen (Ondo, 31.7.):** Block behalten, echte Endstände einsetzen, wo sie vorliegen, und die Zeilenform ändern, sodass der Unterschied in jeder Zeile steht:

```
30.7.: Hapoel – Víkingur · getippt 2:0 · wirklich 2:0
31.7.: Breidablik – Drita · getippt 1:1 · Ergebnis noch offen
```

→ Wird mit v19.7 gebaut. Einschränkungen im Backlog, Punkt D.

---

## Stand 30. Juli — der Schiedsrichter irrt auch bei bestens dokumentierten Spielen

Am 30.7. fand der Schiedsrichter erstmals **13 von 13** Ergebnissen. Der Abgleich mit der amtlichen UEFA-Ergebnisseite ergab:

| Spiel | UEFA | App |
|---|---|---|
| Crvena Zvezda – Larne | 5:0 | 5:0 ✅ |
| Slovan Bratislava – Iberia Tbilisi | 1:1 | 1:1 ✅ |
| Górnik Zabrze – Fenerbahçe | 1:1 | 1:1 ✅ |
| Hapoel Beer-Sheva – Víkingur | 2:0 | 2:0 ✅ |
| Craiova – Levski Sofia | 2:2 | 2:2 ✅ |
| **Lech Poznań – Aarhus** | **1:4** | 3:4 ❌ |
| **Kauno Žalgiris – Klaksvík** | **1:0** | 0:0 ❌ |

**Zwei von sieben falsch, in der Champions-League-Qualifikation.** Damit ist die Annahme widerlegt, die Fehler stammten aus Testspielen. Sie stammen vom Werkzeug.

- Die beiden falschen Ergebnisse kamen von `terrikon.com` und `flashfussball.de`; die richtigen von Sky Sports, Betexplorer und sportdaten.de. **Keine Antwort benutzte uefa.com.**
- **Everton – Stoke City** lieferte in drei Läufen wechselnd 1:0 / 0:1 / 1:0.
- **Nichts wurde übernommen.** Der Lauf ist als PDF gesichert.

**⚠ Diese 13 Ergebnisse dürfen weiterhin NICHT übernommen werden.** Sie sind die Messlatte „altes Modell" und zugleich die geplante feste Prüfbibliothek. Ein Übernehmen zerstört beides.

---

## Stand 31. Juli — die neunte Fehlerart: erfundene 0:0

**Schwerer als alle bisherigen Fehlerarten**, weil ein erfundenes 0:0 wie ein gefundenes Ergebnis aussieht und **keine einzige Warnung auslöst.** Datum stimmt, Wettbewerb stimmt, Quelle ist genannt, Halbzeitstand 0:0 ist mit dem Endstand 0:0 widerspruchsfrei. Alle sechs Absicherungen melden „in Ordnung".

Belege vom 31.7.:
- **Vier Spiele in Folge 0:0** aus derselben Quelle, jeweils mit Halbzeit 0:0
- **Lech Poznań – Aarhus** zum dritten Mal ein anderes Ergebnis: 3:4, dann 0:0 — amtlich 1:4
- **Breidablik – Drita** im **selben Datensatz** einmal als 0:0 und einmal als 0:1

**⚠ Auch die Läufe vom 31.7. dürfen NICHT übernommen werden.**

**Vermutete Ursache:** Der Schiedsrichter soll suchen statt prüfen. Ein Modell, das suchen soll, liefert irgendetwas; ein Modell, das bestätigen soll, kann „nein" sagen. **Vermutung, nicht bewiesen (Art. 13).** → Backlog Punkt E.

---

## Der Schiedsrichter — neun Fehlerarten

| # | Fehlerart | Datum | Absicherung | Version |
|---|---|---|---|---|
| 1 | Urteil nicht-deterministisch | 22.7. | **Logik in festen Code** | v19.0 |
| 2 | Falsches Duell (altes 0:0 vom Januar) | 23.7. | **Datums- und Wettbewerbspflicht** | v19.2 |
| 3 | Spiel übersehen (Zeitzone Südamerika) | 23.7. | **Sichtbare Bilanz** + Zeitzonen-Hinweis | v19.4 |
| 4 | Nicht gefunden trotz Verfügbarkeit | 24./25.7. | **Automatisches Wiederholen** | v19.4 |
| 5 | „läuft noch" bei längst beendetem Spiel | 27.7. | **Zeitrechnung im Code** (2,5-Stunden-Regel) | v19.5 |
| 6 | Halbzeitstand statt Endstand | 27.7. | **Phasen-Pflicht** + Vertauschungs-Kontrolle | v19.6 |
| 7 | **Heim und Gast vertauscht** | 29.7. | *keine* — zweimal unabhängig aufgetreten | — |
| 8 | **Falscher Endstand trotz aller Prüfungen** | 30.7. | *keine* — alle Absicherungen prüfen die Form, nicht die Wahrheit | — |
| 9 | **Erfundene 0:0** | 31.7. | *keine* — löst nicht einmal eine Warnung aus | — |

**Die wichtigste Erkenntnis (25.7.):** Alle drei KIs urteilten unabhängig, Ergebnisse unterklassiger Spiele seien nicht beschaffbar. **Das war falsch.** Ondo drückte den Prüf-Knopf mehrfach: 2 von 7, dann 4 von 7, schließlich 7 von 7. Es war kein Verfügbarkeits-, sondern ein Zuverlässigkeitsproblem.

**Was weiterhin gilt:** Ondos manuelle Kontrolle hat **jeden** Fehler gefangen, den die Automatik durchgelassen hat.

**Bekannte Lücke:** Die Wiederholung greift nur bei „nicht gefunden". Ein einmal als *fertig* gemeldetes Ergebnis wird nie wieder hinterfragt.

---

## Drei Codebefunde vom 31.7. (Beobachtung, keine bewiesenen Fehler)

1. **Zuordnung über die Listenposition.** In `vorhersagen()` werden Wettbewerb und Anpfiffzeit über die Position in der Liste zugeordnet, der Spielname dagegen aus der Antwort des Gehirns. Antwortet ein Gehirn in anderer Reihenfolge, hängt an einem Spiel die falsche Anpfiffzeit — und die 2,5-Stunden-Regel rechnet mit genau dieser Zeit. Am 29. und 30.7. kam die Liste in beiden Fällen in derselben Reihenfolge zurück.
2. **Der Wettbewerb wird dem Schiedsrichter nicht übergeben.** Nur Spielname, Datum, Anpfiffzeit. Die Wettbewerbspflicht aus v19.2 wirkt erst hinterher als Warnung.
3. **Die Konsistenz-Absicherung ist zur Hälfte verschwunden.** Der Satz, der einen Seitenwechsel mit „Änderung:" begründen ließ, steht in `OndoControl.html` (v17), aber nicht mehr im v19-Auftrag. Beim Umbau zum Messgerät stillschweigend weggefallen. Ob die Liste allein noch wirkt, ist **nicht gemessen.**

---

## ChatGPTs Architekturantwort vom 30.7.

**Kern: Formvalidierung statt Inhaltsvalidierung.** Die Absicherungen prüfen die Bauform der Antwort, nicht ihre Wahrheit.

**Zu übernehmen:** Vertrauensklassen statt binär *gefunden / nicht gefunden* · Regressionstest mit den 13 Ergebnissen als **feste Prüfbibliothek**.

**Zurückzustellen:** zweite unabhängige Quelle — bricht die Zwei-Probleme-Regel; Quellenpriorität (Backlog 0c) ist billiger.

**In den Blueprint als offene Frage:** Darf der Schiedsrichter überhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten? *Steht im Backlog geparkt, im Blueprint noch nicht eingetragen.*

---

## Versionen

- **Stabil: v17** (`OndoControl.html`, version.json = 17) — **seit dem 17. Juli unverändert**
- **Beta: v19.6** (`beta.html`) — getrennter Speicher, aktive Messphase. Im Code steht weiterhin `APP_VERSION = 18` (technische Schuld, vor der Beförderung zu klären)

---

## Der Richtungswechsel vom 23. Juli (wichtigster Kontext)

Bis v18.6 war die Beta ein **Wett-Berater**. Am 23. Juli wurde sie zum **Messgerät** umgebaut. Auslöser:

**1. Die Quoten waren erfunden.** Abgleich mit echten Tipico-Quoten (18.7.): KI sagte 1.95, real 1.40. Vier von vier zu hoch. Ursache: Buchmacher laden ihre Quoten erst im Browser nach. **Jede Value-Rechnung war wertlos.**

**2. Der Datensatz wuchs zu langsam.** In zwei Wochen 21 bewertete Empfehlungen; nötig wären rund 100 pro Gehirn.

**Die Umstellung (alle drei KIs einig):** Keine Quoten, sondern Prozentzahlen · **alle Spiele** einer gemeinsamen Liste vorhersagen statt auszuwählen · **ein Ergebnis** nennen, die App leitet drei Aussagen ab · Hauptkennzahl **Kalibrierung**, Trefferquote als Nebenkennzahl · die alten 21 Bewertungen **archiviert**.

**Zur Zusage vom 23.7., ehrlich eingeordnet:** Abgeleitet wird nur die **Richtung** des Marktes. Die **Prozentzahl** wird weiterhin getrennt erfragt. Damit gibt es zwei Kanäle, die auseinanderlaufen können — genau das zeigt der Befund oben.

**Bewusst zurückgestellt:** Value-Rechnung, echte Quoten, weitere Sportarten.

**Zur häufigen Frage nach den Quoten:** 70 % entsprechen einer fairen Quote von 1,43; ein Buchmacher zahlt weniger. Diese Umrechnung wird in der App seit dem 23.7. **nirgends benutzt**. Der Bezug zur Quote kehrt erst mit Backlog-Punkt 9 zurück.

**Hinweis zu Prozentzahlen und Vertrauensstufen:** `Ondo-Core-Architektur.md` verlangt HOCH/MITTEL/NIEDRIG statt Prozentwerten (beschlossen 5.7., mit Art. 14 begründet). Die Messphase benutzt trotzdem Prozentzahlen, und das ist richtig: Kalibrierung ist ohne Prozentzahlen nicht messbar. Die Stufen gelten für **Empfehlungen an Ondo**, die Prozentzahlen für **Messwerte**. **Das ist kein Fehler und nicht zu reparieren.**

---

## Aktueller Messstand (Stand 29.7.2026 abends — seitdem unverändert, weil nichts übernommen wurde)

| | bewertete Aussagen | Kalibrierungs-Abweichung | Trefferquote |
|---|---|---|---|
| Sonnet | 87 | **5 %** (grün) | 47 % (41/87) |
| Flash | 87 | **10 %** (grün) | 48 % (42/87) |
| gesamt | 174 | — | 48 % (83/174) |

**Sonnets Verteilung:** 1–49 % → 16 Aussagen (behauptet 42, wirklich 44) · 50–59 % → **66** (behauptet 53, wirklich 50) · 60–69 % → 4 (behauptet 64, wirklich 25) · 70–79 % → 1 (behauptet 72, wirklich 0)

**Flashs Verteilung:** 1–49 % → 15 (43/33) · 50–59 % → 39 (55/56) · 60–69 % → **29 (behauptet 62, wirklich 45)** · 70–79 % → 3 (73/33) · 80–89 % → 1 (82/100)

**Ehrliche Einordnung (Art. 14):**
- **Sonnet hat insgesamt fünf bewertete Aussagen oberhalb von 60 %.** Über Sonnets Verhalten bei Zuversicht wissen wir praktisch nichts. Der gute Kalibrierungswert ist zum großen Teil Vorsicht, nicht Können.
- **Flashs Schwachstelle ist benennbar und ausreichend belegt:** 29 Aussagen im Bereich 60–69 %, behauptet 62 %, eingetroffen 45 %. Die einzige Zeile mit genug Umfang für eine Lehre.
- Zeilen mit ein bis vier Aussagen sind **bedeutungslos**.
- **Die sieben CL-Vorhersagen vom 29.7. stecken NICHT in diesen 87.** Genau die Daten, die Sonnets Verhalten bei klaren Favoriten zeigen würden, fehlen.
- Ondos eigene Bilanz: **−29,75 €**, eigene Trefferquote 17 % (1/6). Papier-Modus bleibt die stehende Empfehlung.

---

## Was v19.6 kann

**Vorhersage:** Ein Knopf. Die Spielliste wird **zweistufig** geholt: erst UEFA und große europäische Ligen, nur bei weniger als fünf Spielen zusätzlich MLS/Südamerika/Skandinavien, danach erst Testspiele. Jede Stufe ist eine eigene Anfrage. Beide Gehirne bekommen dieselbe Liste, ohne Websuche.

**Ergebnisprüfung:** Ein Knopf, mehrrundig. Höchstens fünf Spiele pro Anfrage, Obergrenze sechs Runden. Drei Zustände je Spiel. Quellenpflicht ab Durchgang drei. Sichtbare Bilanz.

**Datensicherung** (unter „Mehr"): Export als Datei, Import zurück.

**Kalibrierungs-Tabelle** unter Finanzen, je Gehirn.

---

## Wie es weitergehen soll

**1. v19.7 bauen** — vier Punkte in einer Lieferung, damit es **ein** Bruch in der Messreihe wird statt vier:
- **Test A** (ja/nein-Wort zusätzlich ausgeben)
- **Punkt 0a** (Schiedsrichter fest an das stärkere Gemini-Modell; Vorhersage unverändert)
- **Punkt 1** (Kennzahl Entschlossenheit)
- **Punkt D** (echte Endstände im Rückblick-Block, neue Zeilenform)

**2. Punkt E: „Prüfen statt suchen"** — am 25.7. beschlossen, bis heute nicht gebaut. Nach der neunten Fehlerart der aussichtsreichste Ansatz gegen erfundene Ergebnisse.

**3. Dieselben 13 Ergebnisse erneut prüfen lassen**, jetzt mit dem stärkeren Modell. Ondos PDF vom 30.7. ist die Messlatte „altes Modell", die amtlichen UEFA-Ergebnisse sind die Wahrheit. **Der sauberste Vergleich, den das Projekt je hatte — verspielt, sobald vorher etwas übernommen wird.**

**4. Erster Lernschritt — NICHT selbstverständlich.**
Für **Flash** ist die Lehre klar benennbar. Für **Sonnet** wäre die naheliegende Lehre „leg dich öfter fest" — und die wäre **gefährlich**: Ein Modell zu mehr Entschlossenheit zu drängen, kann seine Ehrlichkeit zerstören. Zweiter Grund zum Verschieben: Ein Lernschritt ist nach Art. 9 eine bestätigte Lehre; eine Lehre auf ungeklärter Datengrundlage zurückzunehmen ist teurer, als sie später zu geben.
**Beschlossen (Ondo, 31.7.): als ausdrücklich offene Frage an ChatGPT und Gemini geben.**

**5. Danach: das Such-Experiment.** Die Messung ohne Suche läuft seit dem 23. Juli; **vier Wochen sind am 20. August um.**

**6. Beförderung Beta→Stabil — derzeit GESPERRT.**
Fünf Gründe, keiner davon heute erfüllbar:
- **Kriterium (f)** verlangt Null-Fehler-Toleranz bei der Schiedsrichter-Validierung. Am 30.7. zwei von sieben falsch, am 31.7. kamen erfundene 0:0 dazu.
- **Die siebte Fehlerart** (Heim und Gast vertauscht) hat gar keine Absicherung.
- **Punkt 4** (Daten-Export in die stabile Version) ist nicht gebaut — alles Gesammelte ginge verloren. *Nicht zu verwechseln mit der bereits gebauten Datensicherung.*
- **`APP_VERSION = 18`** muss vorher geklärt werden.
- **Kriterium (c)** ist noch nicht neu gefasst.

Solange Test A offen ist, ist zusätzlich unklar, was die gemessenen Prozentzahlen überhaupt bedeuten.

**7. Erst dann: Quoten und Value zurück.** Über GitHub Actions. **Offene Verfassungsfrage:** Der Actions-Runner ist streng genommen ein winziger Server, der Blueprint sagt „kein Server". Beide Prüfer halten die Ausnahme für vertretbar. **Offene Sachfrage (Gemini):** Deckt ein kostenloser Dienst Ondos Spiele überhaupt ab?

**Die ehrliche Grenze:** Auch nach allen Schritten wissen wir nur, ob die Gehirne *ehrlich* schätzen — nicht, ob sie den Buchmacher schlagen. Ein perfekt kalibriertes Gehirn, das immer 50 % sagt, gewinnt kein Geld.

---

## Lernkette (beschlossen 6.7., Reihenfolge fixiert, noch nicht gebaut)

> **Evidence Ledger** (warum wurde empfohlen) → **Decision Ledger** (was machte Ondo daraus) → **Observation Layer** (Muster erkennen)

Jede Lehre braucht Ondos Bestätigung (Art. 9). Der Evidence Ledger wird seit v19.0 faktisch gefüllt.

**Aktueller Wahrheitsstand: Das System lernt noch nicht.** Es hat Erinnerung, kein Lernen. Das ist Absicht.

---

## Wetten ist das Pilotmodul, nicht die Vision

Geplant sind Finanzen, Content, Organisation. Fast alles, was gebaut wird, ist domänenunabhängig: askBrain-Abstraktion, Vertrauensstufen, Quellen-Transparenz, Kalibrierung, Evidence Ledger.

**ChatGPTs Leitbild (23.7., soll in Ondo-Core — steht dort noch nicht):** Ebene 1 Daten (Fakten, keine KI) · Ebene 2 Denken (die Gehirne, arbeiten nur mit Ebene-1-Daten) · Ebene 3 Bewertung (Log, Kalibrierung, Lernkette).

**Ehrlicher Hinweis:** Andere Module werden schwerer. Beim Fußball urteilt die Realität nach 90 Minuten unbestechlich. Bei Finanz- oder Organisationsentscheidungen kommt die Rückmeldung später und verrauschter.

---

## Arbeitsablauf für neue Chats

Ondo schreibt „Ondo Control: [Anliegen]" und fügt Raw-Links ein, **immer mit angehängter Zahl**, z. B. `?v=20260731`. **Alle sechs Dateien plus `version.json` werden gelesen, bevor irgendetwas beurteilt wird** — Blueprint und Ondo-Core eingeschlossen. Das Weglassen hat am 30./31.7. zweimal zu falschen Empfehlungen geführt.

**Vor jeder Lieferung:** Syntax-Check (`node --check`), Sprachdatei-Abgleich (DE/FR/EN gleiche Schlüssel, **aktuell 167**), Trockentest der neuen Logik. Versionsnummer im Header hochzählen. **Und die Dokumente (Arbeitsregel F).**

### Chat-Übergabe ist Claudes Pflicht, nicht Ondos (Regel G, 30.7.)

Claude löst die Übergabe **von selbst** aus, sobald der Arbeitsspeicher knapp wird. Sie besteht aus drei Teilen: aktualisierter PROJEKT-STATUS, aktualisierter Backlog, und einer **Übergabemappe** mit den Abschnitten: (A) Nachricht zum Einfügen, (B) Kontrollfragen, (C) Antwortschlüssel nur für Ondo, (D) was zu tun ist, wenn Antworten falsch sind, (E) erste Arbeit nach der Abnahme.

**Begründung:** Eine Übergabenachricht allein beweist nichts. Erst die richtig beantwortete Kontrollfrage beweist etwas. Die Kontrollfragen werden bei jeder Übergabe **neu geschrieben**. Mindestens eine muss eine Fangfrage sein, deren richtige Antwort „das weiß ich nicht" lautet (Art. 11 und 14).

**Die Mappe verweist auf die Dokumente. Sie fasst sie nicht nach Gedächtnis zusammen.**

**Auslöser (Claude prüft das selbst):** eine vollständige Ausgabe von `beta.html` (74 KB) passt nicht mehr sicher in eine Antwort · zusätzliche große Dokumente wurden eingelesen · Antworten werden erkennbar kürzer oder ungenauer, als die Aufgabe verlangt.

**Was den Speicher wirklich füllt** *(gemessen am 31.7.)*: Vier PDF-Ausdrucke der KI-Log-Seite kosteten zusammen mehr als `beta.html`, `Blueprint.md` und `Ondo-Core-Architektur.md` zusammen — jeder enthält das gesamte Log im Volltext, und das Log wächst mit jeder Vorhersage.
**Sparsamer:** beim Prüflauf nur den **oberen Teil** mit Bilanz und gefundenen Endständen schicken, denselben Ausdruck nur einmal, und lieber ein Bild als einen PDF-Ausdruck desselben Bildschirms.

**Ablauf:** Teil A in den neuen Chat → dessen Bestätigung abwarten → Teil B einfügen → die Antworten in den **alten** Chat zurückkopieren → Abnahme durch den abgebenden Chat. Vorher wird im neuen Chat nichts gebaut. Erste Arbeit ist Teil E.

**Eigene Fassung für ChatGPT:** ChatGPT kann keinen neuen Chat öffnen. Regel G braucht dafür eine angepasste Fassung — **noch zu schreiben.**

**Die Übergabemappe gehört NICHT ins Repo.** Sie enthält den Antwortschlüssel. Sie bleibt auf Ondos Gerät und wird gelöscht, **sobald Teil E vollständig in Repo-Dateien steht** — nicht früher.

---

## Übergabe-Protokoll

*Von Ondo angeregt am 31.7. Zweck: Wenn später etwas fehlt, sieht man, in welcher Übergabe es verloren ging.*

| Datum | Von → An | Verfahren | Kontrollfragen | Anmerkung |
|---|---|---|---|---|
| 16.7.2026 | Chat 1 → Chat 2 | Chat-PDF | keine | erster Test, bestanden |
| 29.7.2026 | Chat 2 → Chat 3 | Chat-PDF (147 S.) | keine | nur zur Hälfte lesbar; Rest im Blueprint abgedeckt |
| 30.7.2026 | Chat 3 → ChatGPT | GitHub-Pages-Links | 7 von 8 | Mappe war an sechs Stellen veraltet |
| 30./31.7.2026 | Chat 3 → Chat 4 | Raw-Links + Mappe | 9 von 9 | zwei Antworten genauer als der Schlüssel; deckte einen Art.-8-Verstoß auf |
| 31.7.2026 | Chat 4 → Chat 5 | Raw-Links + Mappe | **9 von 9** | erstmals alle sechs Dateien vorgeschrieben; zwei Antworten über dem Schlüssel (Fragen 5 und 8), drei neue Codefunde durch den Nachfolger |

---

*Aktualisiert von Claude (Chat 5) am 31.7.2026 abends. Alle sechs Dateien plus `version.json` wurden vollständig gelesen. Vier der sieben Punkte aus Teil E der Übergabemappe stehen jetzt hier; die Kostenregel als Arbeitsregel G fehlt noch im `Blueprint.md`. **Die Mappe darf erst danach gelöscht werden.***
