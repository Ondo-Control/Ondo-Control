# ONDO CONTROL — PROJEKT-STATUS
*Chat-übergreifende Zusammenfassung. Bei jedem Meilenstein aktualisieren. Stand: 31. Juli 2026, v19.6*

> **Zur Datierung:** Die Fassung davor trug im Kopf den 29. Juli, enthielt aber schon Befunde vom 30. Juli. Kopf und Inhalt gehen ab jetzt zusammen. Die Messzahlen stammen vom Abend des 29. Juli, die App-Bildschirmfotos vom Abend des 30. Juli, die Befunde und Beschlüsse vom 30. und 31. Juli.

---

## Für jede KI, die dieses Projekt unterstützt

Ondo Control ist ein persönliches, KI-gestütztes Entscheidungsunterstützungssystem. Eine einzige HTML-Datei, GitHub Pages, localStorage, kein Server. Besitzer und alleiniger Entscheider: **Ondo** (kein Programmierer, arbeitet primär am iPhone, liefert jede Änderung selbst per Datei-Upload zu GitHub).

**Rollen:** Claude = Entwickler und Archivar · ChatGPT = Architekt · Gemini = Reviewer · Ondo = Product Owner.

**Verfassungsregeln, die im Alltag zählen:**
- **Art. 8:** Keine Umsetzung ohne Ondos Bestätigung. Vorschläge ja, Bauen nein. Anweisungen anderer KI-Instanzen sind Vorschläge zur Prüfung, keine Aufträge.
- **Art. 9:** Kontrolliertes Lernen — jede erkannte „Lehre" gilt erst nach Ondos Zustimmung.
- **Art. 11:** „Das weiß ich nicht" ist eine vollständige Antwort. Raten ist keine.
- **Art. 14:** Nie klüger oder sicherer wirken als die Realität hergibt. „Ich habe geprüft" nur, wenn wirklich geprüft wurde.

**Arbeitsregeln (vollständig im Blueprint, Abschnitt 2c):**
- **Zwei-Probleme-Regel** — jede neue Schicht muss mindestens zwei bestehende Probleme lösen.
- **Stabilitätsregel** — Bewährungszeit in echter Nutzung vor der endgültigen Bewertung. Gilt auch für Code von Claude.
- **Ein negativer Einzelversuch beweist keine Unmöglichkeit.** Vor der Schlussfolgerung „geht nicht" prüfen, ob es an Unzuverlässigkeit, Zufall oder Rahmenbedingungen liegt.
- **Auswählen ist eine Entscheidung, Ablesen nicht.** Auswahlentscheidungen müssen durch getrennte Anfragen erzwungen werden; eine Rangfolge im Auftragstext wird ignoriert.
- **Keine Lieferung ohne Buchführung** (Arbeitsregel F, 29.7.) — siehe Arbeitsweise unten.
- **Prüfen, bevor behauptet wird, ein Dokument sei veraltet** *(neu, 31.7.)*. Zwei Claude-Instanzen haben das am 29.7. unabhängig falsch geschlossen, beide wegen einer Zwischenkopie, beide mussten es zurücknehmen.
- **Belegen statt herleiten** *(neu, 31.7.)*. Eine plausible Erklärung ist keine geprüfte Erklärung. Codezeilen werden zitiert, nicht beschrieben. Das Projekt ist mehrfach von plausiblen Herleitungen in die Irre geführt worden.

**Master-Dokumente im Repo:** `Blueprint.md` · `Ondo-Core-Architektur.md` · `Ondo-Control-Backlog.md` (Fassung 4, 31.7.) · dieses Dokument.

---

## Arbeitsweise (wichtig für neue Chats)

### Dateizugriff — der Eintrag vom 23.7. ist ÜBERHOLT

**Alte Fassung (falsch):** „Raw-Links funktionieren nur bei Claude. ChatGPT und Gemini brauchen Dateien als Anhang."

**Richtig (Befund vom 30.7.):** ChatGPTs Web-Werkzeug scheitert an `raw.githubusercontent.com` und an `.md`-Dateien wegen des Formats — und es **sucht**, statt direkt abzurufen, weshalb ein kleines Repository nie gefunden wird. GitHub Pages wandelt Markdown aber automatisch in HTML um. Diese Adressform funktioniert:

```
https://ondo-control.github.io/Ondo-Control/PROJEKT-STATUS.html
https://ondo-control.github.io/Ondo-Control/Ondo-Control-Backlog.html
https://ondo-control.github.io/Ondo-Control/Blueprint.html
https://ondo-control.github.io/Ondo-Control/Ondo-Core-Architektur.html
```

Bestätigt am 30.7. in zwei Stufen: erst mit `beta.html` (ChatGPT nannte v19.6 BETA korrekt), dann mit der umgewandelten Statusdatei. Anschließend wurde eine vollständige Übergabe an ChatGPT durchgeführt — sieben von acht Kontrollfragen richtig.

**Folgen:**
- Prüfer bekommen künftig **Links statt Anhänge**. Kein Upload-Kontingent, kein Kopieren, immer aktueller Stand.
- `beta.html` wird ChatGPT bewusst **nicht** gegeben (74 KB ohne Nutzen für Architekturfragen), nur auf ausdrückliche Nachfrage.
- Weil jetzt alles im Repo per Link lesbar ist, gilt der **Sperrvermerk für Übergabemappen verschärft**. Die Mappe darf unter keinen Umständen ins Repo.
- **Gegenprobe mit Gemini steht noch aus.**
- **Handgeschriebene Projektzusammenfassungen in Übergaben sind zu unterlassen.** ChatGPTs eigene Mappe vom 30.7. war an sechs Stellen veraltet und hätte richtige Antworten als falsch gewertet — sie verlangte 146 Sprachschlüssel, es sind 167. Eine Übergabe verweist auf die Dokumente, sie fasst sie nicht nach Gedächtnis zusammen.
- Gefunden wurde das, weil Ondo darauf bestand, dass Kopieren bei jeder Änderung keine Lösung ist.

**⚠ Für Claude gilt weiterhin: Raw-Links immer mit angehängter Zahl abrufen**, z. B. `…/PROJEKT-STATUS.md?v=20260731`. Ohne diesen Zusatz kann eine veraltete Zwischenkopie zurückkommen. Zweite Falle: In hochgeladenen Chat-PDFs steht die alte Fassung dieses Dokuments im Volltext. Nicht mit der aktuellen verwechseln.

### Keine Lieferung ohne Buchführung (Arbeitsregel F, 29.7.)
- **Backlog:** jede Entscheidung — angenommen, abgelehnt, vertagt — sofort eintragen, in derselben Antwort. Nie „notiere ich später". Bei Code-Lieferungen kommt die Backlog-Datei mit dem Code zusammen.
- **Dieses Dokument:** am Ende eines Arbeitstags mit Änderungen, und zwingend vor jeder Chat-Übergabe.
- **Blueprint / Ondo-Core:** nur bei Verfassungs- und Architekturentscheidungen.
- **Ondos Kontrollsatz nach jeder Lieferung: „Und die Dokumente?"** Das ist der wirksame Teil der Regel — er kommt nicht von der KI und kann deshalb nicht vergessen werden.

### Berichte an die Prüfer
Dateiname beginnt mit Datum und Uhrzeit: `2026-07-31_1430_Ondo-Control_Thema.md`
- Antwort an alle vier richten, nicht nur an Ondo
- Einfache Sprache, Fachbegriffe beim ersten Mal erklären
- **Höchstens zwei geschlossene Fragen** (Ja/Nein plus ein Satz)
- **Ausnahme:** Bei Problemen ohne erkennbare Lösung wird eine Frage ausdrücklich **offen** gestellt. Anlass: Zwei geschlossene Fragen am 29.7. bekamen **keine einzige Antwort**; der Nachfolgebericht mit offener Frage brachte von beiden Prüfern das Beste des Tages. **Lehre: Ein Format, das nur abfragt, bekommt keine Mitarbeit.**
- Ausdrücklich hinschreiben, was **nicht** Thema ist
- Eigene Zweifel mit zur Prüfung stellen

**Zusammenfassungen:** Claude schlägt von selbst vor: *„Zeitpunkt für eine Zusammenfassung zum Teilen mit den Projektpartnern wäre angebracht. Jetzt durchführen — Ja/Nein?"* Bei Nein sofort einen Ersatzzeitpunkt nennen.

**Erklärpflicht:** Ondo kann nichts entscheiden, was er nicht versteht. Vor jeder Entscheidung in Alltagssprache erklären. **Bildliche Vergleiche haben sich als hinderlich erwiesen — konkret bleiben.**

**Nie empfehlen, Ergebnisse von Hand nachzuschlagen.** Seit dem 25.7. abgelehnt. Die Zuverlässigkeit des Schiedsrichters gehört zum Test, nicht in Ondos Freizeit. Zwei Claude-Instanzen sind trotzdem darauf zurückgefallen.

**Datensicherung:** Ondo regelmäßig daran erinnern. Alle Messdaten liegen sonst nur im Safari-Speicher eines iPhones.
**Letzte bestätigte Sicherung: 30.7.2026, 18:55 Uhr — 114 Vorhersagen, 6 Wetten.**

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

Bei Tipps mit Toren auf beiden Seiten (2:1, 1:1, 1:2) dreht die App bei Sonnet **nie** um. **Flash** hat fünf Ergebnisse mit Null und wird **kein einziges Mal** umgedreht — 3:0 erscheint dort korrekt als „Beide treffen: Nein 70 %".

Liest man Sonnets Rohwerte als Antwort auf die schlichte Frage „wie wahrscheinlich treffen beide?", ist jede einzelne Zahl stimmig. **Sonnet ist widerspruchsfrei. Flash ist widerspruchsfrei. Die Frage ist zweideutig.**

### Was daraus folgt

- Bei Crvena Zvezda – Larne 5:0 wurde Sonnet als **falsch** gewertet, obwohl es sachlich richtig lag.
- Eine „Widerspruchsquote je Gehirn" (Backlog 0b) würde nach diesem Befund keine Eigenschaft der Gehirne messen, sondern eine unklare Formulierung. **0b ist zurückgestellt.**
- **Die bisherigen Daten sind nicht verloren.** Der Vermerk `gedreht:true` und der Endstand werden mitgespeichert; der Rohwert lässt sich zurückrechnen und jede Bewertung neu berechnen, sobald die Deutung feststeht.
- **Nicht umkehrbar ist nur ein falsch übernommener Endstand.** Deshalb bleibt das Übernehmen der 13 Ergebnisse gesperrt.

### Zwei zurückgenommene Behauptungen (Art. 14)

1. **„Die App erzeugt den Widerspruch"** — zurückgenommen. Die Umdrehregel erzeugt ihn nicht, sie legt die Zweideutigkeit der Frage offen.
2. **„Sonnets Zurückhaltung kam von den Testspielen"** — verfeinert. Am 30.7. sagt Sonnet in der Conference-League-Qualifikation wieder 42 %, 44 %, 48 %, 50 %, 52 %. Der Unterschied liegt nicht am Wettbewerb, sondern daran, **wie klar der Favorit ist**. Crvena Zvezda gegen Larne ist eindeutig, Stjarnan gegen Paide nicht.

### Beschluss: Test A (Ondo, 31.7.)

Vor einer Änderung wird gemessen, nicht hergeleitet. Die Gehirne geben zusätzlich das Wort **ja** oder **nein** aus — ihre eigene Antwort auf „treffen beide?". Am Rechnen und Bewerten ändert sich nichts; das Wort wird nur mitgespeichert und angezeigt.
- Sonnet schreibt bei Tipp 3:0 „nein" und nennt 22 → die Zahl bezieht sich auf das Spiel.
- Sonnet schreibt „nein" und nennt 78 → die Zahl bezieht sich auf die eigene Vorhersage.

Ein Tag Vorhersagen reicht für die Antwort.

---

## Zweiter Befund: die App füttert Vermutungen als Tatsachen zurück

Sonnet begründete am 30.7. bei Víkingur – Flora Tallinn mit „Víkingur nach Niederlage **gestern** geschwächt". Das Ergebnis Hapoel – Víkingur 2:0 wurde nie übernommen. Die Quelle ist dieser Rückblick-Block im Auftragstext (Funktion `vorhersageGehirn`):

```
return e.datum+': '+e.match+' -> '+e.heim+':'+e.gast+' ('+(e.begruendung||'-')+')';
```

`e.heim` und `e.gast` sind der **getippte** Endstand, nicht der echte. Sonnet bekam seine eigene Vermutung zurück und behandelte sie als geschehen. Der Block ist im Auftrag ausdrücklich als „Deine letzten eigenen Vorhersagen" benannt — der Fehler liegt bei Sonnet, nicht bei der App. Die Folge ist trotzdem ein Kreislauf: Ein falscher Tipp wird zur Grundlage des nächsten Tipps.

**Offene Entscheidung Ondos:** Soll der Rückblick-Block aus dem Auftrag verschwinden?

---

## Stand 30. Juli, morgens — der Schiedsrichter irrt auch bei bestens dokumentierten Spielen

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

**Zwei von sieben falsch, in der Champions-League-Qualifikation.** Damit ist die Annahme widerlegt, die Fehler stammten aus Testspielen und schwach dokumentierten Wettbewerben. Sie stammen vom Werkzeug.

- Die beiden falschen Ergebnisse kamen von `terrikon.com` und `flashfussball.de`; die richtigen von Sky Sports, Betexplorer und sportdaten.de. **Keine Antwort benutzte uefa.com** — die amtliche Quelle.
- **Everton – Stoke City** lieferte in drei Läufen wechselnd 1:0 / 0:1 / 1:0. Amtlich: Stoke gewann 1:0 auswärts.
- **Crystal Palace – Famalicão**: am 30.7. 0:1, am Vortag zweimal 0:0. Ungeklärt.
- **Nichts wurde übernommen.** Der Lauf ist als PDF gesichert.

**⚠ Diese 13 Ergebnisse dürfen weiterhin NICHT übernommen werden.** Sie sind die Messlatte „altes Modell" für den Vergleich mit dem stärkeren Modell und zugleich die geplante feste Prüfbibliothek. Ein Übernehmen zerstört beides und schreibt zwei falsche Endstände dauerhaft in die Messdaten.

---

## ChatGPTs Architekturantwort vom 30.7.

**Kern: Formvalidierung statt Inhaltsvalidierung.** Die sechs Absicherungen prüfen die Bauform der Antwort, nicht ihre Wahrheit. Bei Lech Poznań 3:4 meldeten alle „in Ordnung" — Datum stimmte, Wettbewerb stimmte, Quelle war genannt, Halbzeitkontrolle unauffällig. Das Ergebnis war trotzdem falsch.

**Zu übernehmen:**
- **Vertrauensklassen** statt binär *gefunden / nicht gefunden*.
- **Regressionstest** mit den 13 Ergebnissen vom 29./30.7. gegen die amtlichen UEFA-Werte als **feste Prüfbibliothek**.

**Zurückzustellen:** zweite unabhängige Quelle — bricht die Zwei-Probleme-Regel; Quellenpriorität (Backlog 0c) ist billiger.

**In den Blueprint als offene Frage:** Darf der Schiedsrichter überhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten?
*Noch nicht eingetragen — der Chat, der diesen Stand geschrieben hat, hatte Blueprint und Ondo-Core nicht gelesen. Aufgabe für den nächsten Chat.*

---

## Versionen

- **Stabil: v17** (`OndoControl.html`, version.json = 17) — Ondos Homescreen-App, **seit dem 17. Juli unverändert**
- **Beta: v19.6** (`beta.html`) — getrennter Speicher, aktive Messphase. Im Code steht weiterhin `APP_VERSION = 18` (technische Schuld, vor der Beförderung zu klären)

---

## Der Richtungswechsel vom 23. Juli (wichtigster Kontext)

Bis v18.6 war die Beta ein **Wett-Berater**: Sie suchte Value-Wetten und nannte Quoten. Am 23. Juli wurde sie zum **Messgerät** umgebaut. Auslöser:

**1. Die Quoten waren erfunden.** Abgleich mit echten Tipico-Quoten (18.7.): KI sagte 1.95, real 1.40. Vier von vier Werten zu hoch. Ursache nachgewiesen: Buchmacher laden ihre Quoten erst im Browser nach; eine KI-Websuche findet nur alte Zahlen aus Artikeln. **Jede Value-Rechnung war wertlos.**

**2. Der Datensatz wuchs zu langsam.** In zwei Wochen 21 bewertete Empfehlungen. Nötig wären rund 100 pro Gehirn. Ursache: Die Regel „nur bei echtem Value tippen" ließ Sonnet meist schweigen.

**Die Umstellung (alle drei KIs einig):**
- Keine Quoten mehr, sondern Wahrscheinlichkeiten in Prozent
- **Alle Spiele** einer gemeinsamen Liste vorhersagen statt auszuwählen
- **Ein Ergebnis** nennen (z. B. 2:1); die App leitet daraus drei Aussagen ab (Sieger, über/unter 2,5 Tore, beide treffen)
- Hauptkennzahl ist die **Kalibrierung**, Trefferquote als Nebenkennzahl (Ergänzung ChatGPT)
- Die alten 21 Bewertungen **archiviert**, nicht gelöscht

**Zur Zusage vom 23.7., ehrlich eingeordnet:** Abgeleitet wird nur die **Richtung** des Marktes. Die **Prozentzahl** wird weiterhin getrennt erfragt. Damit gibt es zwei Kanäle, die auseinanderlaufen können — genau das zeigt der Befund oben. Die Zusage ist an dieser Stelle nie vollständig eingelöst worden.

**Bewusst zurückgestellt:** Value-Rechnung, echte Quoten, weitere Sportarten.

**Zur häufigen Frage nach den Quoten:** 70 % entsprechen einer fairen Quote von 1,43 (1 geteilt durch 0,70); ein Buchmacher zahlt weniger, etwa 1,30. Hohe Prozentzahl, niedrige Quote. Diese Umrechnung ist richtig, wird in der App aber seit dem 23.7. **nirgends benutzt**. Die Prozentzahl bedeutet heute nur, wie sicher sich das Gehirn ist. Der Bezug zur Quote kehrt erst mit Backlog-Punkt 8 zurück.

---

## Aktueller Messstand (Stand 29.7.2026 abends, abgelesen am 30.7. aus der App)

| | bewertete Aussagen | Kalibrierungs-Abweichung | Trefferquote |
|---|---|---|---|
| Sonnet | 87 | **5 %** (grün) | 47 % (41/87) |
| Flash | 87 | **10 %** (grün) | 48 % (42/87) |
| gesamt | 174 | — | 48 % (83/174) |

**Sonnets Verteilung:** 1–49 % → 16 Aussagen (behauptet 42, wirklich 44) · 50–59 % → **66** (behauptet 53, wirklich 50) · 60–69 % → 4 (behauptet 64, wirklich 25) · 70–79 % → 1 (behauptet 72, wirklich 0)

**Flashs Verteilung:** 1–49 % → 15 (43/33) · 50–59 % → 39 (55/56) · 60–69 % → **29 (behauptet 62, wirklich 45)** · 70–79 % → 3 (73/33) · 80–89 % → 1 (82/100)

**Ehrliche Einordnung (Art. 14):**
- **Sonnet hat insgesamt fünf bewertete Aussagen oberhalb von 60 %.** Über Sonnets Verhalten bei Zuversicht wissen wir praktisch nichts. Der gute Kalibrierungswert ist zum großen Teil Vorsicht, nicht Können.
- **Flashs Schwachstelle ist benennbar und ausreichend belegt:** 29 Aussagen im Bereich 60–69 %, behauptet 62 %, eingetroffen 45 %. Das ist die einzige Zeile mit genug Umfang für eine Lehre.
- Zeilen mit ein bis vier Aussagen sind **bedeutungslos**.
- **Die sieben CL-Vorhersagen vom 29.7. stecken NICHT in diesen 87.** Sie wurden nie übernommen, und das war richtig. Genau die Daten, die Sonnets Verhalten bei klaren Favoriten zeigen würden, fehlen in der Messung.
- Ondos eigene Bilanz: **−29,75 €**, eigene Trefferquote 17 % (1/6). Papier-Modus bleibt die stehende Empfehlung.

---

## Der Schiedsrichter — sieben Fehlerarten

| # | Fehlerart | Datum | Absicherung | Version |
|---|---|---|---|---|
| 1 | Urteil nicht-deterministisch | 22.7. | **Logik in festen Code** — die KI liest nur noch Tore ab | v19.0 |
| 2 | Falsches Duell (altes 0:0 vom Januar) | 23.7. | **Datums- und Wettbewerbspflicht** + Abweichungswarnung | v19.2 |
| 3 | Spiel übersehen (Zeitzone Südamerika) | 23.7. | **Sichtbare Bilanz** + Zeitzonen-Hinweis | v19.4 |
| 4 | Nicht gefunden trotz Verfügbarkeit | 24./25.7. | **Automatisches Wiederholen** | v19.4 |
| 5 | „läuft noch" bei längst beendetem Spiel | 27.7. | **Zeitrechnung im Code** (2,5-Stunden-Regel) | v19.5 |
| 6 | Halbzeitstand statt Endstand | 27.7. | **Phasen-Pflicht** + Vertauschungs-Kontrolle | v19.6 |
| 7 | **Heim und Gast vertauscht** | 29.7. | *keine* — zweimal unabhängig aufgetreten | — |
| — | **Falscher Endstand trotz aller Prüfungen** | 30.7. | *keine* — alle Absicherungen prüfen die Form, nicht die Wahrheit | — |

**Die wichtigste Erkenntnis (25.7.):** Alle drei KIs urteilten unabhängig, Ergebnisse unterklassiger Spiele seien nicht beschaffbar. **Das war falsch.** Ondo drückte den Prüf-Knopf mehrfach: 2 von 7, dann 4 von 7, schließlich 7 von 7. Es war kein Verfügbarkeits-, sondern ein Zuverlässigkeitsproblem.

**Was weiterhin gilt:** Ondos manuelle Kontrolle hat **jeden** Fehler gefangen, den die Automatik durchgelassen hat.

**Bekannte Lücke:** Die Wiederholung greift nur bei „nicht gefunden". Ein einmal als *fertig* gemeldetes Ergebnis wird nie wieder hinterfragt.

---

## Was v19.6 kann

**Vorhersage:** Ein Knopf. Die Spielliste wird **zweistufig** geholt: erst ausschließlich UEFA und große europäische Ligen, nur bei weniger als fünf Spielen zusätzlich MLS/Südamerika/Skandinavien, danach erst Testspiele. Jede Stufe ist eine eigene Anfrage — die Reihenfolge ist erzwungen statt erbeten. Beide Gehirne bekommen dieselbe Liste, ohne Websuche (misst Urteil statt Suchfähigkeit).

**Ergebnisprüfung:** Ein Knopf, mehrrundig. Wiederholt, solange jede Runde mindestens ein neues Ergebnis bringt (Obergrenze sechs), höchstens fünf Spiele pro Anfrage. Drei Zustände je Spiel. Quellenpflicht ab Durchgang drei. Sichtbare Bilanz am Ende.

**Datensicherung** (unter „Mehr"): Export als Datei, Import zurück.

**Kalibrierungs-Tabelle** unter Finanzen, je Gehirn.

---

## Wie es weitergehen soll

**1. Test A** (beschlossen 31.7.) — klärt, welche Frage jedes Gehirn beantwortet. Voraussetzung für alles Weitere an dieser Stelle.

**2. v19.7 bauen:** Punkt 0a (Schiedsrichter fest an das stärkere Gemini-Modell, Vorhersage unverändert) und Punkt 1 (Kennzahl Entschlossenheit, beschlossen 31.7.). 0b bleibt zurückgestellt.

**3. Dieselben 13 Ergebnisse erneut prüfen lassen**, jetzt mit dem stärkeren Modell. Ondos PDF vom 30.7. ist die Messlatte „altes Modell", die amtlichen UEFA-Ergebnisse sind die Wahrheit. **Der sauberste Vergleich, den das Projekt je hatte — er ist verspielt, sobald vorher etwas übernommen wird.**

**4. Erster Lernschritt — NICHT selbstverständlich.**
Die 87 Aussagen je Gehirn stammen überwiegend aus Testspielen und ausgeglichenen Partien. Sonnet hat fünf bewertete Aussagen oberhalb von 60 %. Eine Lehre auf dieser Grundlage misst vor allem, wie schwer die Spiele waren.
Für **Flash** ist die Lehre klar benennbar (60–69 %: behauptet 62, trifft 45). Für **Sonnet** wäre die naheliegende Lehre „leg dich öfter fest" — und die wäre **gefährlich**: Ein Modell zu mehr Entschlossenheit zu drängen, kann seine Ehrlichkeit zerstören.
**Empfehlung: verschieben, bis genug Aussagen aus echten Wettbewerben vorliegen. Entscheidung liegt bei Ondo.**

**5. Danach: das Such-Experiment.** Suche zuschalten, Kalibrierung vergleichen. Die Messung ohne Suche läuft seit dem 23. Juli; **vier Wochen sind am 20. August um.**

**6. Dann: Beförderung Beta→Stabil.** Vorher muss der Daten-Export in die stabile Version, sonst gehen alle Messdaten verloren (Safari und Homescreen-App haben getrennte Speicher — **nicht zu verwechseln mit der bereits gebauten Datensicherung**). Kriterium (c) muss neu gefasst werden.

**7. Erst dann: Quoten und Value zurück.** Über GitHub Actions. **Offene Verfassungsfrage:** Der Actions-Runner ist streng genommen ein winziger Server, der Blueprint sagt „kein Server". Beide Prüfer halten die Ausnahme für vertretbar. **Offene Sachfrage (Gemini):** Deckt ein kostenloser Dienst Ondos Spiele überhaupt ab?

**Die ehrliche Grenze:** Auch nach allen Schritten wissen wir nur, ob die Gehirne *ehrlich* schätzen — nicht, ob sie den Buchmacher schlagen. Ein perfekt kalibriertes Gehirn, das immer 50 % sagt, gewinnt kein Geld.

---

## Lernkette (beschlossen 6.7., Reihenfolge fixiert, noch nicht gebaut)

> **Evidence Ledger** (warum wurde empfohlen) → **Decision Ledger** (was machte Ondo daraus) → **Observation Layer** (Muster erkennen)

Jede Lehre braucht Ondos Bestätigung (Art. 9). Der Evidence Ledger wird seit v19.0 faktisch gefüllt: Begründung, Prozentangabe und Ergebnis stehen zusammen im Log.

**Aktueller Wahrheitsstand: Das System lernt noch nicht.** Es hat Erinnerung, kein Lernen. Das ist Absicht.

---

## Wetten ist das Pilotmodul, nicht die Vision

Geplant sind Finanzen, Content, Organisation. Fast alles, was gebaut wird, ist domänenunabhängig: askBrain-Abstraktion, Vertrauensstufen statt Prozentzahlen, Quellen-Transparenz, Kalibrierung, Evidence Ledger.

**ChatGPTs Leitbild (23.7., soll in Ondo-Core — steht dort noch nicht):** Ebene 1 Daten (Fakten, keine KI) · Ebene 2 Denken (die Gehirne, arbeiten nur mit Ebene-1-Daten) · Ebene 3 Bewertung (Log, Kalibrierung, Lernkette).

**Ehrlicher Hinweis:** Andere Module werden schwerer. Beim Fußball urteilt die Realität nach 90 Minuten unbestechlich. Bei Finanz- oder Organisationsentscheidungen kommt die Rückmeldung später und verrauschter.

---

## Arbeitsablauf für neue Chats

Ondo schreibt „Ondo Control: [Anliegen]" und fügt Raw-Links ein (nur vom Besitzer eingefügte Links sind für Claude abrufbar), **immer mit angehängter Zahl**, z. B. `?v=20260731`:
- Status: `https://raw.githubusercontent.com/Ondo-Control/Ondo-Control/main/PROJEKT-STATUS.md`
- Backlog: `.../Ondo-Control-Backlog.md`
- Beta: `.../beta.html`
- Stabil: `.../OndoControl.html`
- Blueprint: `.../Blueprint.md`
- Architektur: `.../Ondo-Core-Architektur.md`

**Blueprint und Ondo-Core werden erst bei Verfassungs- oder Architekturfragen gelesen — aber wenn die Links schon vorliegen, wird abgerufen statt nachgefragt.** *(Fehler eines Chats am 31.7.: nach einem Link gefragt, der seit der ersten Nachricht vorlag.)*

**Vor jeder Lieferung:** Syntax-Check (`node --check`), Sprachdatei-Abgleich (DE/FR/EN gleiche Schlüssel, **aktuell 167**), Trockentest der neuen Logik. Versionsnummer im Header hochzählen. **Und die Dokumente (Arbeitsregel F).**

### Chat-Übergabe ist Claudes Pflicht, nicht Ondos (Regel G, 30.7.)

Claude löst die Übergabe **von selbst** aus, sobald der Arbeitsspeicher knapp wird. Sie besteht aus drei Teilen: aktualisierter PROJEKT-STATUS, aktualisierter Backlog, und einer **Übergabemappe** mit vier Abschnitten: (A) Nachricht zum Einfügen, (B) Kontrollfragen für den Nachfolger, (C) Antwortschlüssel nur für Ondo, (D) was zu tun ist, wenn Antworten falsch sind.

**Begründung:** Eine Übergabenachricht allein beweist nichts. Sie beweist erst etwas, wenn der Nachfolger Fragen beantworten muss, die nur aus den Dokumenten zu beantworten sind. Die Kontrollfragen werden bei jeder Übergabe **neu geschrieben**. Mindestens eine Frage muss eine Fangfrage sein, deren richtige Antwort „das weiß ich nicht" lautet (Art. 11 und 14).

**Die Mappe verweist auf die Dokumente. Sie fasst sie nicht nach Gedächtnis zusammen** *(Ergänzung 30.7.)*.

**Auslöser (Claude prüft das selbst):** eine vollständige Ausgabe von `beta.html` (74 KB) passt nicht mehr sicher in eine Antwort · zusätzliche große Dokumente wurden eingelesen · Antworten werden erkennbar kürzer oder ungenauer, als die Aufgabe verlangt.

**Ablauf:** Teil A in den neuen Chat → dessen Bestätigung abwarten → Teil B einfügen → die Antworten in den **alten** Chat zurückkopieren → Abnahme durch den abgebenden Chat. Vorher wird im neuen Chat nichts gebaut.

**Eigene Fassung für ChatGPT** *(neu, 30.7.)*: ChatGPT kann keinen neuen Chat öffnen. Er erzeugt die Mappe nur als Nachricht. Regel G braucht dafür eine angepasste Fassung — **noch zu schreiben.**

**Die Übergabemappe gehört NICHT ins Repo.** Sie enthält den Antwortschlüssel. Seit die Prüfer alle Repo-Dateien per GitHub-Pages-Link lesen können, gilt das **verschärft**. Die Mappe bleibt auf Ondos Gerät und wird nach der Abnahme gelöscht.

**Bisheriges Verfahren (nur noch Rückfallebene):** Ondo exportiert den vollen Chat als PDF. Dreimal erfolgreich (16.7., 29.7., 30.7.). Ein vollständiges Chat-Archiv füllt den Arbeitsspeicher eines neuen Chats erheblich.

---

*Aktualisiert von Claude am 31.7.2026. Messzahlen vom 29.7. abends, abgelesen aus den App-Bildschirmfotos vom 30.7. Keine Änderung an v17 seit dem 17. Juli. Blueprint und Ondo-Core wurden von diesem Chat nicht gelesen — offene Einträge dorthin sind im Backlog vermerkt.*
