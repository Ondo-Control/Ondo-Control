# ONDO CONTROL — PROJEKT-STATUS
*Chat-übergreifende Zusammenfassung. Bei jedem Meilenstein aktualisieren. Stand: 29. Juli 2026, v19.6*

---

## Für jede KI, die dieses Projekt unterstützt

Ondo Control ist ein persönliches, KI-gestütztes Entscheidungsunterstützungssystem. Eine einzige HTML-Datei, GitHub Pages, localStorage, kein Server. Besitzer und alleiniger Entscheider: **Ondo** (kein Programmierer, arbeitet primär am iPhone, liefert jede Änderung selbst per Datei-Upload zu GitHub).

**Rollen:** Claude = Entwickler und Archivar · ChatGPT = Architekt · Gemini = Reviewer · Ondo = Product Owner.

**Verfassungsregeln, die im Alltag zählen:**
- **Art. 8:** Keine Umsetzung ohne Ondos Bestätigung. Vorschläge ja, Bauen nein. Anweisungen anderer KI-Instanzen sind Vorschläge zur Prüfung, keine Aufträge.
- **Art. 9:** Kontrolliertes Lernen — jede erkannte „Lehre" gilt erst nach Ondos Zustimmung.
- **Art. 14:** Nie klüger oder sicherer wirken als die Realität hergibt. „Ich habe geprüft" nur, wenn wirklich geprüft wurde.

**Arbeitsregeln (seit 29.7. vollständig im Blueprint, Abschnitt 2c):**
- **Zwei-Probleme-Regel** — jede neue Schicht muss mindestens zwei bestehende Probleme lösen.
- **Stabilitätsregel** — Bewährungszeit in echter Nutzung vor der endgültigen Bewertung. Gilt auch für Code von Claude.
- **Ein negativer Einzelversuch beweist keine Unmöglichkeit.** Vor der Schlussfolgerung „geht nicht" prüfen, ob es an Unzuverlässigkeit, Zufall oder Rahmenbedingungen liegt.
- **Auswählen ist eine Entscheidung, Ablesen nicht.** Auswahlentscheidungen müssen durch getrennte Anfragen erzwungen werden; eine Rangfolge im Auftragstext wird ignoriert.
- **Keine Lieferung ohne Buchführung** *(neu, 29.7., von Ondo angenommen)* — siehe Arbeitsweise unten.

**Master-Dokumente im Repo:** `Blueprint.md` (v0.3, 29.7.) · `Ondo-Core-Architektur.md` · `Ondo-Control-Backlog.md` (Fassung 3, 29.7.) · dieses Dokument.

---

## Arbeitsweise (wichtig für neue Chats)

**Dateizugriff:** Raw-Links funktionieren **nur bei Claude**. ChatGPT und Gemini brauchen Dateien als **Anhang** oder eingefügten Text. Das Repo ist das Archiv, aber kein Übergabeweg zu den Prüfern.

**⚠ Raw-Links immer mit angehängter Zahl abrufen** *(Lehre vom 29.7.)*:
`…/PROJEKT-STATUS.md?v=20260729`
Ohne diesen Zusatz kann eine **veraltete Zwischenkopie** zurückkommen. Das ist am 29.7. zwei verschiedenen Claude-Instanzen unabhängig passiert — beide hielten dieses Dokument fälschlich für drei Wochen alt und zogen daraus falsche Schlüsse. Zweite Falle: In einem hochgeladenen Chat-PDF steht die **alte** Fassung dieses Dokuments im Volltext. Nicht mit der aktuellen verwechseln.

**Keine Lieferung ohne Buchführung** *(Arbeitsregel F, 29.7.)*:
- **Backlog:** jede Entscheidung — angenommen, abgelehnt, vertagt — sofort eintragen, in derselben Antwort. Nie „notiere ich später". Bei Code-Lieferungen kommt die Backlog-Datei mit dem Code zusammen.
- **Dieses Dokument:** am Ende eines Arbeitstags mit Änderungen, und zwingend vor jeder Chat-Übergabe.
- **Blueprint / Ondo-Core:** nur bei Verfassungs- und Architekturentscheidungen.
- **Ondos Kontrollsatz nach jeder Lieferung: „Und die Dokumente?"** Das ist der wirksame Teil der Regel — er kommt nicht von der KI und kann deshalb nicht vergessen werden.

**Berichte an die Prüfer:** Dateiname beginnt mit Datum und Uhrzeit, damit sie sich sortieren:
`2026-07-29_1430_Ondo-Control_Thema.md`

**Regeln für Berichte an ChatGPT und Gemini:**
- Antwort an alle vier richten, nicht nur an Ondo
- Einfache Sprache, Fachbegriffe beim ersten Mal erklären
- **Höchstens zwei geschlossene Fragen** (Ja/Nein plus ein Satz). Offene Fragen erzeugen zwanzig neue Baustellen
- **Ausnahme (29.7.):** Bei Problemen ohne erkennbare Lösung wird eine Frage ausdrücklich **offen** gestellt und um Verbesserungsvorschläge außerhalb der Fragen gebeten. Anlass: Der Bericht vom 29.7. 07:46 enthielt zwei geschlossene Fragen und bekam **keine einzige Antwort** — beide Prüfer reagierten auf den Projektstand statt auf die Fragen. Der Nachfolgebericht mit offener Frage brachte von beiden ausführliche und brauchbare Antworten. **Lehre: Ein Format, das nur abfragt, bekommt keine Mitarbeit.**
- Ausdrücklich hinschreiben, was **nicht** Thema ist
- Eigene Zweifel mit zur Prüfung stellen

**Zusammenfassungen:** Claude schlägt von selbst vor: *„Zeitpunkt für eine Zusammenfassung zum Teilen mit den Projektpartnern wäre angebracht. Jetzt durchführen — Ja/Nein?"* Bei Nein sofort einen Ersatzzeitpunkt nennen.

**Erklärpflicht:** Ondo kann nichts entscheiden, was er nicht versteht. Vor jeder Entscheidung in Alltagssprache erklären. **Bildliche Vergleiche haben sich als hinderlich erwiesen — konkret bleiben.**

**Datensicherung:** Ondo regelmäßig daran erinnern. Alle Messdaten liegen sonst nur im Safari-Speicher eines iPhones.

---

## Stand am Abend des 29. Juli (für den nächsten Chat das Wichtigste)

**Zwei Beschlüsse gefasst, beide noch nicht gebaut:**
1. **Schiedsrichter fest an das stärkere Gemini-Modell koppeln, Vorhersage unverändert lassen.** Der Schiedsrichter ist ein Messwerkzeug, kein Duell-Teilnehmer — er darf ein anderes Modell benutzen, ohne die Messreihe zu brechen. Idee von Gemini, ChatGPT kam unabhängig zum selben Ergebnis. Löst den Zielkonflikt „besseres Werkzeug gegen unversehrte Messreihe" auf.
2. **Widersprüche messen statt korrigieren.** Tippt ein Gehirn 3:0 und sagt zugleich „beide treffen: Ja, 78 %", wird das nicht geglättet, sondern gezählt (Widerspruchsquote je Gehirn). Vor der Umsetzung ist zu klären, ob das Gehirn oder die App den Widerspruch erzeugt.

**Drei Funde vom 29.7.:**
- **Heim und Gast sind in der Spielliste vertauscht**, nicht erst beim Schiedsrichter. Zwei von zwei überprüfbaren Fällen. Betrifft die Vorhersage, weil beide Gehirne ausdrücklich mit Heimvorteil begründen.
- **„Beide treffen" wird nicht aus dem Ergebnis-Tipp abgeleitet.** Die Kernzusage vom 23.7. ist für einen der drei Märkte nicht eingelöst. Kalibrierung bleibt gültig, Widerspruchsfreiheit nicht.
- **Sonnets Zurückhaltung kam von den Testspielen, nicht vom Modell.** 66 von 87 Aussagen im 50er-Bereich, solange nur Testspiele vorhergesagt wurden — am 29.7. mit CL-Qualifikation sagt Sonnet 75 %, 72 %, 78 %. **Das ändert den Lernschritt:** Eine Lehre „leg dich öfter fest" wäre auf selbsterzeugten Daten gebaut gewesen.

**v19.6 hat seinen ersten echten Test bestanden:** sieben Spiele Champions-League-Qualifikation, kein einziges Testspiel.

**Grundsatz, den Ondo am 29.7. festgehalten hat und der über allem steht:** Die Zuverlässigkeit des Schiedsrichters gehört zum Test, nicht in Ondos Freizeit. Ergebnisse von Hand nachschlagen ist seit dem 25.7. abgelehnt. Und: Die echte Probe findet in der realen Welt statt, wo eine falsche Empfehlung Geld kostet — deshalb wird nichts geglättet, was in der Wirklichkeit weh täte.

---

## Stand 30. Juli, morgens — der entscheidende Befund

**Der Schiedsrichter irrt auch bei bestens dokumentierten Spielen. Die Datenlage ist nicht die Ursache.**

Am 30.7. fand der Schiedsrichter erstmals **13 von 13** Ergebnissen. Der Abgleich mit der amtlichen UEFA-Ergebnisseite ergab jedoch:

| Spiel | UEFA | App |
|---|---|---|
| Crvena Zvezda – Larne | 5:0 | 5:0 ✅ |
| Slovan Bratislava – Iberia Tbilisi | 1:1 | 1:1 ✅ |
| Górnik Zabrze – Fenerbahçe | 1:1 | 1:1 ✅ |
| Hapoel Beer-Sheva – Víkingur | 2:0 | 2:0 ✅ |
| Craiova – Levski Sofia | 2:2 | 2:2 ✅ |
| **Lech Poznań – Aarhus** | **1:4** | 3:4 ❌ |
| **Kauno Žalgiris – Klaksvík** | **1:0** | 0:0 ❌ |

**Zwei von sieben falsch, in der Champions-League-Qualifikation.** Damit ist die bisherige Annahme widerlegt, die Schiedsrichter-Fehler stammten aus Testspielen und schwach dokumentierten Wettbewerben. Sie stammen vom Werkzeug.

Weitere Beobachtungen desselben Laufs:
- Die beiden falschen Ergebnisse kamen von `terrikon.com` und `flashfussball.de`; die fünf richtigen von Sky Sports, Betexplorer und sportdaten.de. **Keine Antwort benutzte uefa.com** — die für UEFA-Wettbewerbe amtliche Quelle.
- **Everton – Stoke City** lieferte in drei Läufen drei Mal wechselnd 1:0 / 0:1 / 1:0. Amtlich: Stoke gewann 1:0 zu Hause.
- **Crystal Palace – Famalicão**: heute 0:1, gestern zweimal 0:0. Ungeklärt.
- **Nichts wurde übernommen.** Der Lauf ist als PDF gesichert und dient als Vergleichsgrundlage „altes Modell" für den Test mit dem stärkeren Modell.

**Zur Widerspruchsquote:** Von Sonnets sieben Vorhersagen am 29.7. widersprechen sich **fünf** (Ergebnis-Tipp gegen „beide treffen"), von Flashs sieben **keine einzige**. Bei Crvena Zvezda 5:0 kostete der Widerspruch Sonnet einen Punkt, bei Slovan 1:1 brachte er ihm einen ein. **Der Fehler verzerrt die Messung in beide Richtungen.**

---

## Versionen

- **Stabil: v17** (`OndoControl.html`, version.json = 17) — Ondos Homescreen-App, **seit dem 17. Juli unverändert**
- **Beta: v19.6** (`beta.html`) — getrennter Speicher, aktive Messphase

---

## Der Richtungswechsel vom 23. Juli (wichtigster Kontext)

Bis v18.6 war die Beta ein **Wett-Berater**: Sie suchte Value-Wetten und nannte Quoten. Am 23. Juli wurde sie zum **Messgerät** umgebaut. Auslöser waren zwei Befunde:

**1. Die Quoten waren erfunden.** Ein Abgleich mit echten Tipico-Quoten (18.7.) ergab: KI sagte 1.95, real 1.40. Vier von vier Werten zu hoch. Ursache technisch nachgewiesen: Buchmacher laden ihre Quoten erst im Browser nach; eine KI-Websuche sieht davon nichts und findet nur alte Zahlen aus Artikeln. **Jede Value-Rechnung war damit wertlos.**

**2. Der Datensatz wuchs zu langsam.** In zwei Wochen kamen 21 bewertete Empfehlungen zusammen. Für eine belastbare Aussage bräuchte es rund 100 pro Gehirn. Ursache: Die Regel „nur bei echtem Value tippen" ließ Sonnet an den meisten Tagen schweigen.

**Die Umstellung (alle drei KIs einig):**
- Die Gehirne nennen **keine Quoten mehr**, sondern Wahrscheinlichkeiten in Prozent
- Sie sagen **alle Spiele** einer gemeinsamen Liste vorher statt auszuwählen
- Sie nennen **ein Ergebnis** (z. B. 2:1); die App leitet daraus drei Aussagen ab (Sieger, über/unter 2,5 Tore, beide treffen) — die KI kann sich dadurch nicht mehr selbst widersprechen
- Hauptkennzahl ist die **Kalibrierung**: Treffen 60-Prozent-Aussagen langfristig zu 60 % ein? Die Trefferquote läuft als Nebenkennzahl mit (Ergänzung ChatGPT)
- Die alten 21 Bewertungen wurden **archiviert**, nicht gelöscht — sie beruhen auf falschen Quoten und zählen nicht mehr in die Statistik

**Bewusst zurückgestellt:** Value-Rechnung, echte Quoten, weitere Sportarten.

---

## Aktueller Messstand (Stand 28.7.2026 abends)

| | bewertete Aussagen | Kalibrierungs-Abweichung | Trefferquote |
|---|---|---|---|
| Sonnet | 84 | **5 %** (grün) | 48 % (40/84) |
| Flash | 84 | **11 %** | 49 % (41/84) |

**Ehrliche Einordnung (Art. 14):**
- **Sonnets guter Wert ist teilweise Vorsicht, nicht Können.** 63 von 84 Aussagen liegen im Bereich 50–59 %. Wer fast immer „Münzwurf" sagt, ist automatisch gut kalibriert und sagt trotzdem wenig. **Es fehlt eine Kennzahl für Entschlossenheit** — sonst vergleichen wir Sonnets Vorsicht mit Flashs Mut und nennen es Qualität.
- **Flashs Schwachstelle ist benennbar:** Im Bereich 60–69 % behauptet es 63 % und trifft 43 % — bei 28 Aussagen. Das ist der erste konkrete Kandidat für eine Lehre.
- Zeilen mit ein bis drei Aussagen (z. B. „72 % behauptet, 0 % wirklich") sind **bedeutungslos**. Nur die großen Zeilen zählen.
- Ondos eigene Bilanz: **−29,75 €**, eigene Trefferquote 17 % (1/6). Papier-Modus bleibt die stehende Empfehlung.

---

## Der Schiedsrichter — sechs Fehlerarten und ihre Absicherungen

Der Schiedsrichter (Gemini Flash mit Websuche) ermittelt die Endstände. Er war die größte Fehlerquelle des Projekts. Chronologie:

| # | Fehlerart | Datum | Absicherung | Version |
|---|---|---|---|---|
| 1 | Urteil nicht-deterministisch (dasselbe 4:0 einmal „gewonnen", einmal „verloren") | 22.7. | **Logik in festen Code** — die KI liest nur noch Tore ab, die App entscheidet | v19.0 |
| 2 | Falsches Duell (altes 0:0 derselben Teams vom Januar) | 23.7. | **Datums- und Wettbewerbspflicht** + Abweichungswarnung | v19.2 |
| 3 | Spiel übersehen (Zeitzone Südamerika) | 23.7. | **Sichtbare Bilanz** + Zeitzonen-Hinweis im Auftrag | v19.4 |
| 4 | Nicht gefunden trotz Verfügbarkeit | 24./25.7. | **Automatisches Wiederholen** | v19.4 |
| 5 | Bequemes „läuft noch" bei längst beendetem Spiel | 27.7. | **Zeitrechnung im Code** — nach 2,5 h wird „läuft noch" nicht mehr geglaubt | v19.5 |
| 6 | Halbzeitstand statt Endstand gemeldet | 27.7. | **Phasen-Pflicht** + Vertauschungs-Kontrolle im Code | v19.6 |

**Die wichtigste Erkenntnis daraus (25.7.):** Alle drei KIs urteilten unabhängig, Ergebnisse unterklassiger Spiele seien automatisch nicht beschaffbar. **Das war falsch.** Ondo drückte den Prüf-Knopf mehrfach: 2 von 7, dann 4 von 7, schließlich 7 von 7. Es war kein Verfügbarkeits-, sondern ein Zuverlässigkeitsproblem. Daraus entstand die Arbeitsregel D.

**Was weiterhin gilt:** Ondos manuelle Bestätigung hat **jeden** Fehler gefangen, den die Automatik durchgelassen hat. ChatGPT und Gemini waren sich am 27.7. einig, dass damit das Ende der sinnvollen Automatik-Reparaturen näherrückt — weitere Absicherungen nur noch, wenn dieselbe Fehlerart mehrfach unabhängig auftritt.

**Bekannte Lücke:** Die Wiederholung greift nur bei „nicht gefunden". Ein einmal als *fertig* gemeldetes Ergebnis wird nie wieder hinterfragt. Die erste Antwort ist die einzige, die zählt.

---

## Was v19.6 kann (aktueller Bauzustand)

**Vorhersage:** Ein Knopf. Die App holt die Spielliste **zweistufig** (Empfehlung ChatGPT und Gemini, 28.7.): erst ausschließlich UEFA und große europäische Ligen, nur bei weniger als fünf Spielen zusätzlich MLS/Südamerika/Skandinavien, danach erst Testspiele. Grund: Eine Rangfolge im selben Auftragstext wurde vom Modell ignoriert — am 28.7. bestand die Liste aus acht Testspielen, obwohl CL-Qualifikation lief. **Auswählen ist eine Entscheidung, Ablesen nicht** — deshalb muss die Reihenfolge erzwungen statt erbeten werden.

Beide Gehirne bekommen dieselbe Liste, ohne Websuche (bewusst — misst Urteil statt Suchfähigkeit).

**Ergebnisprüfung:** Ein Knopf, mehrrundig. Wiederholt, solange jede Runde mindestens ein neues Ergebnis bringt (Obergrenze sechs), höchstens fünf Spiele pro Anfrage. Drei Zustände je Spiel (*fertig* / *läuft noch* / *nicht gefunden*). Quellenpflicht ab Durchgang drei mit Anzeige der Fundstelle. Sichtbare Bilanz am Ende.

**Datensicherung** (unter „Mehr"): Export als Datei, Import zurück. **Wichtig:** Alle Messdaten liegen sonst nur im Safari-Speicher eines iPhones. Ondo sichert regelmäßig — bitte weiter daran erinnern.

**Kalibrierungs-Tabelle** unter Finanzen, je Gehirn.

---

## Wie es weitergehen soll

**1. Am Wochenende (1./2. August): erster Lernschritt** (150 bewertete Aussagen pro Gehirn erreicht)
Jedes Gehirn bekommt seine eigene Kalibrierung mitgeteilt, Ondo bestätigt die Lehre, dann gilt sie (Art. 9).
**Warnung dazu:** Für Flash ist die Lehre klar. Für Sonnet wäre die naheliegende Lehre „leg dich öfter fest" — und die wäre **gefährlich**: Ein Modell zu mehr Entschlossenheit zu drängen, kann seine Ehrlichkeit zerstören. Empfehlung: im ersten Durchgang **nur Flash** korrigieren, dann am Unterschied sehen, ob die Lehre überhaupt wirkt.
**Vorher nötig:** Kennzahl für Entschlossenheit einbauen.

**2. Danach: das Such-Experiment.** Suche zuschalten, Kalibrierung vergleichen. Beantwortet erstmals, ob Websuche Vorhersagen überhaupt verbessert.
**⚠ Terminkorrektur (29.7.):** In der Fassung vom 28.7. stand hier „Vier Wochen ohne Websuche sind dann um". Das war falsch gerechnet — die Messung ohne Suche läuft erst seit dem 23. Juli. **Vier Wochen sind am 20. August um.** Vorschlag Claude: bei diesem Termin bleiben, ein kürzerer Zeitraum liefert zu wenig Vergleichsdaten. Entscheidung liegt bei Ondo.

**3. Dann: Beförderung Beta→Stabil.** Vorher muss der Daten-Export in die stabile Version, sonst gehen alle Messdaten verloren (Safari und Homescreen-App haben getrennte Speicher — **nicht zu verwechseln mit der bereits gebauten Datensicherung**). Kriterium (c) muss neu gefasst werden (ChatGPTs 100er-Stichprobe dauert Monate — Vorschlag: Beförderung nach Stabilität entscheiden, Messung läuft weiter).

**4. Erst dann: Quoten und Value zurück.** Über GitHub Actions (kostenloser Cron-Job holt Quoten, schreibt eine Datei ins Repo). **Offene Verfassungsfrage** (steht jetzt im Blueprint, Abschnitt 10): Der Actions-Runner ist streng genommen ein winziger Server, der Blueprint sagt „kein Server". Beide Prüfer halten die Ausnahme für vertretbar. **Offene Sachfrage (Gemini):** Deckt ein kostenloser Dienst Ondos Spiele überhaupt ab?

**Die ehrliche Grenze:** Auch nach allen vier Schritten wissen wir nur, ob die Gehirne *ehrlich* schätzen — nicht, ob sie den Buchmacher schlagen. Ein perfekt kalibriertes Gehirn, das immer 50 % sagt, gewinnt kein Geld. Diese Frage beantwortet erst Schritt 4.

---

## Lernkette (beschlossen 6.7., Reihenfolge fixiert, noch nicht gebaut)

> **Evidence Ledger** (warum wurde empfohlen) → **Decision Ledger** (was machte Ondo daraus) → **Observation Layer** (Muster erkennen)

Jede Lehre braucht Ondos Bestätigung (Art. 9). Der Evidence Ledger wird seit v19.0 faktisch gefüllt: Begründung, Prozentangabe und Ergebnis stehen zusammen im Log.

**Aktueller Wahrheitsstand: Das System lernt noch nicht.** Es hat Erinnerung, kein Lernen. Das ist Absicht — Lernen aus wenigen Bewertungen wäre Scheinlernen.

---

## Wetten ist das Pilotmodul, nicht die Vision

Geplant sind Finanzen, Content, Organisation. Fast alles, was gebaut wird, ist domänenunabhängig: askBrain-Abstraktion, Vertrauensstufen statt Prozentzahlen, Quellen-Transparenz, Kalibrierung, Evidence Ledger.

**ChatGPTs Leitbild (23.7., soll in Ondo-Core — steht dort noch nicht):** Ebene 1 Daten (Fakten, keine KI) · Ebene 2 Denken (die Gehirne, arbeiten nur mit Ebene-1-Daten) · Ebene 3 Bewertung (Log, Kalibrierung, Lernkette).

**Ehrlicher Hinweis:** Andere Module werden schwerer. Beim Fußball urteilt die Realität nach 90 Minuten unbestechlich. Bei Finanz- oder Organisationsentscheidungen kommt die Rückmeldung später und verrauschter. Wetten ist der Trainingsplatz.

---

## Arbeitsablauf für neue Chats

Ondo schreibt „Ondo Control: [Anliegen]" und fügt Raw-Links ein (nur vom Besitzer eingefügte Links sind für Claude abrufbar). **Immer mit angehängter Zahl gegen die Zwischenkopie**, Beispiel für heute: `?v=20260729`
- Beta: `https://raw.githubusercontent.com/Ondo-Control/Ondo-Control/main/beta.html`
- Stabil: `.../OndoControl.html`
- Dieses Dokument: `.../PROJEKT-STATUS.md`
- Blueprint: `.../Blueprint.md`
- Architektur: `.../Ondo-Core-Architektur.md`
- Backlog: `.../Ondo-Control-Backlog.md`

**Vor jeder Lieferung:** Syntax-Check (`node --check`), Sprachdatei-Abgleich (DE/FR/EN gleiche Schlüssel, aktuell 167), Trockentest der neuen Logik. Versionsnummer im Header hochzählen. **Und die Dokumente (Arbeitsregel F).**

**Chat-Übergabe ist Claudes Pflicht, nicht Ondos** *(Regel G, 30.7.2026, von Ondo angeordnet)*
Claude löst die Übergabe **von selbst** aus, sobald der Arbeitsspeicher knapp wird — ohne dass Ondo danach fragt. Sie besteht immer aus drei Teilen: aktualisierter PROJEKT-STATUS, aktualisierter Backlog, und einer **Übergabemappe** mit vier Abschnitten: (A) Nachricht zum Einfügen, (B) Kontrollfragen für den Nachfolger, (C) Antwortschlüssel nur für Ondo, (D) was zu tun ist, wenn Antworten falsch sind.
**Begründung:** Eine Übergabenachricht allein beweist nichts. Sie beweist erst etwas, wenn der Nachfolger Fragen beantworten muss, die nur aus den Dokumenten zu beantworten sind. Eine Übergabe ohne Prüfschritt ist bei ChatGPT gescheitert, ohne dass es jemand bemerkte. Die Kontrollfragen werden bei jeder Übergabe **neu geschrieben** — alte Fragen prüfen alten Stand. Mindestens eine Frage muss eine Fangfrage sein, deren richtige Antwort „das weiß ich nicht" lautet (Art. 11 und 14).
**Auslöser (Claude prüft das selbst, Ondo muss nicht daran denken):** eine vollständige Ausgabe von `beta.html` (74 KB) passt nicht mehr sicher in eine Antwort · ein Chat-Archiv oder mehrere große Dokumente wurden zusätzlich eingelesen · Antworten werden erkennbar kürzer oder ungenauer, als die Aufgabe verlangt.
**Ablauf:** Teil A in den neuen Chat → dessen Bestätigung abwarten → Teil B (Kontrollfragen) einfügen → die Antworten in den **alten** Chat zurückkopieren → Abnahme. Vorher wird im neuen Chat nichts gebaut.
**Die Übergabemappe gehört NICHT ins Repo** *(Ondo, 30.7.)*. Sie enthält den Antwortschlüssel; läge sie im öffentlichen Verzeichnis, könnte der neue Chat die Antworten ablesen statt sie herzuleiten, und die Prüfung wäre wertlos. Die Mappe bleibt auf Ondos Gerät, wird nach der Abnahme **gelöscht** und nicht archiviert. Ins Repo gehen nur dieses Dokument und der Backlog.
**Abnahme (Ondo, 30.7.):** Die Antworten des neuen Chats werden in den **abgebenden** Chat zurückkopiert. Erst wenn dieser sie geprüft und die Abnahme ausgesprochen hat, gilt die Übergabe als vollzogen — vorher wird im neuen Chat nichts gebaut. Grund: Der abgebende Chat hat den Antwortschlüssel geschrieben und erkennt Antworten, die zwar richtig sind, aber selbstsicherer klingen, als die Lage hergibt.

**Bisheriges Verfahren (nur noch Rückfallebene):** Ondo exportiert den vollen Chat als PDF und lädt ihn im neuen Chat einmalig hoch. Zweimal erfolgreich durchgeführt (16.7. und 29.7.). Danach dieses Dokument aktualisieren, damit der Keller nicht wieder gebraucht wird.
**Ehrliche Einschränkung (29.7.):** Ein vollständiges Chat-Archiv füllt den Arbeitsspeicher eines neuen Chats erheblich. Das Archiv von Chat 1 (147 Seiten) konnte nur zur Hälfte gelesen werden. Der Rest (2.–6. Juli, Gründungsphase) ist im Blueprint-Protokoll abgedeckt und soll bei Gelegenheit in einem eigenen Chat als Archivdatei aufgearbeitet werden.

---

*Aktualisiert von Claude am 29.7.2026. Messzahlen vom 28.7. abends aus dem KI-Log der Beta v19.6. Keine Änderung an v17 seit dem 17. Juli.*
