# ONDO CONTROL — PROJEKT-STATUS
*Chat-übergreifende Zusammenfassung. Bei jedem Meilenstein aktualisieren. Stand: 5. August 2026, v19.7.7*

> **Zur Datierung:** Die Kalibrierungszahlen weiter unten sind am 3.8. aus Ondos Sicherungsdatei nachgerechnet und seitdem **nicht neu gerechnet** worden. Am 4.8. kam ein übernommenes Ergebnis dazu, am 5.8. zehn weitere. **Die Tabelle unten ist damit deutlich überholt** — sie bleibt stehen, weil sie der letzte nachgerechnete Stand ist, nicht weil sie gilt. Wer aktuelle Zahlen braucht, rechnet sie aus Ondos Sicherung vom 5.8. nach. Dieser Rückstand ist gewollt und hier ausgewiesen; er ist nicht mit einer Lücke zu verwechseln. **Stand der Beta: v19.7.7, geliefert am 5. August.**

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
- **Kostenregel** *(neu, 31.7., von Ondo angenommen)*: Jeder Vorschlag nennt seine Kosten — Geld, Zeit, Nutzungslimit — oder sagt ausdrücklich, dass er keine hat. Ein Satz genügt. *Steht im Blueprint, Abschnitt 2c, als Arbeitsregel G.*
- **Prüfen, bevor behauptet wird, ein Dokument sei veraltet** *(31.7.)*. Zwei Claude-Instanzen haben das am 29.7. unabhängig falsch geschlossen.
- **Belegen statt herleiten** *(31.7.)*. Eine plausible Erklärung ist keine geprüfte Erklärung. Codezeilen werden zitiert, nicht beschrieben.

**Master-Dokumente im Repo:** `Blueprint.md` · `Ondo-Core-Architektur.md` · `Ondo-Control-Backlog.md` (Fassung 5, 31.7.) · dieses Dokument.

---

## DER 5. AUGUST — Test A beantwortet, erster fehlerfreier Prüflauf, App wieder benutzbar

*Eingetragen von Chat 8 am 5.8., zusammen mit Backlog-Fassung 9 und Blueprint 0.7. Einzelheiten und Belegstellen stehen im Backlog.*

### 1. Der Anlass: Die App war seit Tagen nicht benutzbar

Ondo stellte am 5.8. fest, dass er die App nicht mehr sinnvoll bedienen konnte. **Die Ursache war keine Fehlfunktion, sondern eine fehlende Funktion.** Von 58 offenen Vorhersagen stammten 30 aus den gesperrten Tagen 29.7., 30.7. und 31.7. Sie dürfen nie übernommen werden und blieben deshalb dauerhaft offen — jeder Prüflauf fragte sie erneut ab, und jedes Ergebnis musste einzeln weggeklickt werden. **Richtiges Verhalten erzeugte dauerhafte Reibung.**

Daraus wurde Backlog-Punkt 24 (Parken), gebaut in v19.7.6. Geparkte Vorhersagen werden beim Prüfen übersprungen; es wird **kein Endstand gesetzt und kein Markt bewertet**, die Daten bleiben vollständig, der Schritt ist umkehrbar.

**Lehre, festzuhalten:** Eine Sperre ohne die Möglichkeit, das Gesperrte beiseitezulegen, macht das Werkzeug unbenutzbar. Die Sperre war richtig; was fehlte, war ihr Gegenstück.

### 2. Test A ist beantwortet — der Befund vom 30./31. Juli ist bestätigt

Am 5.8. drehte die App bei **Sonnet zwei von zwei** Tipps mit einer Null um (Ferencváros 2:0 und Panathinaikos 2:0, angezeigt „Beide treffen: Ja 65 %", Wort des Gehirns jeweils **nein**). Bei **Flash drei von drei stimmig**.

**Sonnet ist widerspruchsfrei. Flash ist widerspruchsfrei. Die Frage im Auftragstext ist zweideutig.** Das ist keine Vermutung mehr.

Der Vorbehalt vom 3.8. ist ebenfalls erledigt: Sonnets Muster ist unverändert scharf — umgedreht wird ausschließlich bei einer Null im Tipp, jetzt zwei von zwei nach vorher sieben von sieben. Die zusätzliche Frage hat das Antwortverhalten also nicht verbogen.

**Preis, ehrlich benannt (Art. 14):** Bei diesen Spielen wird Sonnets Btts-Aussage gegen eine Behauptung gemessen, die Sonnet nie aufgestellt hat. Betroffen ist einer von drei Märkten. **Nichts geändert** — eine Umformulierung des Auftragstextes greift in die laufende Messreihe ein und ist Ondos Entscheidung (Art. 8).

### 3. Erster fehlerfreier Prüflauf des Projekts

**14 von 14 gefunden. Alle 14 von Claude per Websuche nachgeprüft. Alle 14 richtig.** Kein erfundenes 0:0, kein falscher Endstand. Das hat es seit Beginn der Messphase nicht gegeben.

**Übernommen: 10 Spiele.** Geparkt: beide Bohemians-Einträge (ein Spiel, zwei Einträge — dieselbe Entscheidung wie am 4.8.) und beide Crystal-Palace-Spiele (siehe Punkt 4).

**Nebenbefund:** Der Zweifel an Valur – Stjarnan vom 4.8. ist ausgeräumt. Das Spiel fand am 3.8. statt, 2:3 ist echt. Der Verdacht auf ein erfundenes Ergebnis war unbegründet — ein weiterer Beleg für Arbeitsregel D.

### 4. Neu: Das Spiel war kürzer als die Messgrundlage

Crystal Palace gegen Lens und gegen Famalicão am 28.7. waren **45-Minuten-Spiele** im Gruppenmodus des Como Cup. Die App misst den Endstand nach 90 Minuten, die Gehirne haben ein 90-Minuten-Ergebnis getippt. „Unter 2,5 Tore" über 45 Minuten ist nicht dieselbe Aussage.

**Keine Fehlerart des Schiedsrichters** — der Endstand war richtig abgelesen. Es ist eine Lücke in der Spielliste: Sie kennt keine Spiellänge. **Beide Spiele geparkt. Entscheidung Ondos steht aus.**

### 5. Neu und gefährlich: Anpfiffzeiten systematisch neun Stunden zu früh

Die Spielliste vom 5.8. nennt fünf UEFA-Qualifikationsspiele mit Anpfiff zwischen 09:30 und 11:30 Uhr. Der Abgleich mit OneFootball zeigt: **alle fünf beginnen genau neun Stunden später** (18:30 bis 20:30). Fünf von fünf, immer derselbe Versatz — kein Zufall.

**Die Ursache ist nicht bekannt (Art. 11.)** Dass es wie eine Zeitzonenumrechnung aussieht, ist eine Vermutung.

**Warum es gefährlich ist:** Die Anpfiffzeit geht in die 2,5-Stunden-Regel des Schiedsrichters ein. Bei Anpfiff 09:30 gilt ein Spiel ab 12:00 Uhr als sicher beendet — gesucht würde der Endstand eines Spiels, das noch gar nicht angepfiffen ist. **Genau in dieser Lage sind am 31. Juli die erfundenen 0:0 entstanden.**

**Sofortmaßnahme ohne Code: an solchen Tagen erst spätabends prüfen.** Nichts gebaut, weiter beobachten.

### 6. Beide Codefunde aus der Übergabe sind geklärt

**`state.geminiModel` gegen `gWahl`: bestätigt und in v19.7.6 behoben.** Der Aufruf benutzte das gewählte Modell, die Aufzeichnung nicht. **⚠ Nicht rückwirkend:** Alle Vorhersagen vor v19.7.6 tragen weiterhin einen womöglich falschen Modellnamen, und rückwirkend ist er nicht mehr feststellbar. Für die Kalibrierung folgenlos, für **Arbeitsregel J nicht.**

**Das Datum der 0a-Rücknahme:** Der Codekommentar sagte 3.8., alle Dokumente 4.8. **Welches Datum stimmt, ließ sich nicht bestimmen.** Der Kommentar nennt jetzt nur noch die Version v19.7.3 — das unbelegte Datum ist entfernt statt geraten.

### 7. Die Textausgabe hat sich bewährt

Der KI-Log-Text aus v19.7.5 ersetzt seit dem 5.8. die Bildschirmfotos. Der Lauf mit zehn Vorhersagen kostete einen Bruchteil eines Bildes — und **Test A wäre auf einem Bildschirmfoto nicht auswertbar gewesen**, weil der Vermerk `[gedreht]` und das Wort dort nicht nebeneinander stehen. Zwei Reparaturen kamen aus der Benutzung: getauschte Datumsgrenzen (v19.7.6) und das über den Rand ragende Datumsfeld (v19.7.7).

---

## ⚠ DER 4. AUGUST — der ereignisreichste und am schlechtesten dokumentierte Tag

*Alles in diesem Abschnitt stand bis zum Abend des 4.8. in keiner Repo-Datei, sondern nur in einer Übergabemappe auf Ondos Gerät. Eingetragen von Chat 7 nach der Übergabe.*

### 1. Punkt 0a ist gescheitert und zurückgenommen

**Das ist die wichtigste Berichtigung an diesem Dokument.** Frühere Fassungen führten 0a als gebaut und beschrieben einen Schiedsrichter, der ein stärkeres Modell benutzt und Modellname samt Anfragenzahl anzeigt. **Beides trifft nicht zu.** In `beta.html`, Funktion `ergebnissePruefen`, fehlt `stark:true`:

```
? geminiCall({ prompt: prompt, useSearch: true, rolle:'ref' })
  /* 0a zurueckgenommen 3.8., siehe Backlog */
```

Drei Anläufe, rund 30 vergebliche Anfragen: falsche Schnittstelle (`deep-research-pro-preview-12-2025`), ein Filter, der gespeicherte Listen nicht erfasste, und schliesslich ein **Musikmodell** (`lyria-3-pro-preview`), das über das Wort „pro" hereinkam. Einzelheiten im Backlog.

**⚠ Gestrichen, aber nicht widerlegt.** Beide Prüfer stimmten dem Streichen zu — **ohne von der kostenlosen Preisstufe zu wissen**. Kein Anlauf hat je ein starkes Modell tatsächlich antworten lassen. 0a ist unter gestörten Bedingungen gescheitert, nicht an der Sache. Wer das später liest, darf daraus keine Gewissheit machen, die wir nicht haben (Art. 14).

### 2. Der Denkfehler, der den Schaden vergrößert hat

Nach dem ersten Fehlschlag wurde formuliert: *„Eine Absicherung, die nur gegen vorhergesehene Störungen hilft, ist keine Absicherung."* Daraus wurde gebaut: **jeder unbekannte Fehler heißt „nimm das nächste Modell".** Falsch — ein erschöpftes Kontingent verlangt Anhalten, nicht Weitergehen. Die Regel jagte die App durch alle 14 Flash-Modelle.

**Es ist derselbe Denkfehler, den wir dem Schiedsrichter vorwerfen:** eine unklare Lage in falsche Sicherheit übersetzen, statt sie als unklar zu melden. Der Fehler war nicht, unbekannte Fehler zu behandeln — sondern sie **pauschal** zu behandeln.

### 3. Was stattdessen gebaut wurde: die Modellwahl (v19.7.4)

Ondos Vorschlag, und er war besser als der geplante Weg einer festen Namensliste im Code: Gehirn und Schiedsrichter sind unter „Mehr" **getrennt einstellbar**. Neue Modelle erscheinen von selbst in der Auswahl; kein Name steht fest im Code (Lehre 10.7.). Dazu: Sortierung neu-vor-alt statt „stabil"-vor-„latest", und der Modellname wird je Vorhersage mitgespeichert.

Einstellung am 4.8.: Gehirn `gemini-3.1-flash-lite`, Schiedsrichter `gemini-flash-latest`, 14 Modelle verfügbar.

### 4. Die Lite-Frage vom 29. Juli ist beantwortet

Die Nutzungsdiagramme des Google-Kontos zeigen für den ganzen Juli **Gemini 3.1 Flash Lite** als beherrschendes Modell. **Das zweite Gehirn war die kleinste Stufe.** Ursache war die Sortierung „stabil vor latest" — stabil hieß in Wirklichkeit alt.

**Folge für die Hauptkennzahl, ehrlich (Art. 14):** Die 5 % gegen 10 % sind womöglich ein **Größenunterschied und kein Anbieterunterschied**. Was gemessen wurde, ist Sonnet gegen die kleinste Gemini-Stufe, nicht Anthropic gegen Google.

### 5. Neue Regel: Korrekturfaktoren sind an ihr Modell gebunden

> **Ein Korrekturfaktor gilt nur für das Modell, an dem er gemessen wurde. Wechselt das Modell, verfällt der Faktor und muss neu gemessen werden.**

Entstanden aus Ondos Frage. Folge: Ein Gehirnwechsel kostet Messreihe **und** Korrektur. Deshalb bleibt das Gehirn während der Messphase auf `gemini-3.1-flash-lite`. Steht als Arbeitsregel J im Blueprint; die Frage, ob es abzukürzen geht, ist Backlog-Punkt 21.

### 6. Google-Konto — drei Befunde

- **Zwei Projekte:** „Ondo Control" und „Default Gemini Project". Die am 3.8. neu erzeugten Schlüssel lagen im **kostenlosen** Projekt — daher `limit: 0` und der Totalausfall am Abend des 3.8.
- **Ondo hat am 4.8. das Ondo-Control-Projekt auf Preisstufe 1 hochgestuft.** Schlüssel unverändert, in der App war nichts zu tun.
- **Kosten: 0,05 € in 90 Tagen.** Guthaben 9,94 € von 10,00 €. Automatisches Aufladen deaktiviert. Die rund 30 vergeblichen Anfragen haben praktisch nichts gekostet. **Beförderungskriterium (a) bleibt erfüllt.**

### 7. Antworten der Prüfer vom 4. August

- **0a streichen: beide ja.** Fehleranfälligkeit der Namensfilterung, Kaskadengefahr, unbewiesener Nutzen.
- **Lernschritt: beide ja** — im ersten Durchgang nur Flash korrigieren, Sonnet unangetastet lassen. **Ondos Entscheidung steht aus.**
- **Gemini zur Modellauskunft:** In `ListModels` gibt es **kein** Feld für Werkzeug-Unterstützung, Kostenfreiheit oder Textmodell-Zugehörigkeit — nur `supportedGenerationMethods`. Am Namen zu raten bleibt der einzige Weg.
- **ChatGPT zur Fehlerbehandlung: „Fail Safe".** Bei unbekannten Fehlern nie automatisch wechseln, sondern anhalten und als Unklarheit melden.
- **Beide zu Punkt E:** „Prüfen statt suchen" trifft den Kern — die Aufgabe zu schärfen ist mächtiger, als ein größeres Modell auf einen unscharfen Auftrag zu werfen.
- **Fehlerart 10:** Gemini ausdrücklich dafür, den Doppeleintrag als eigene Fehlerart zu führen.
- **Unbeantwortete Rückfrage von Gemini:** Wie soll der neue Auftragstext ein **echtes** 0:0 von einem „nicht gefunden" wasserdicht unterscheiden? **Muss vor dem Bauen von Punkt E beantwortet sein.**

### 8. Prüflauf vom 4. August — der erste erfolgreiche seit dem 31. Juli

**12 von 30 gefunden, kein einziges 0:0, alle Halbzeitstände widerspruchsfrei.**

| Spiel | Schiedsrichter | Geprüft | Ondos Entscheidung |
|---|---|---|---|
| St Patrick's – Derry City | 1:1 (HZ 1:0) | bestätigt | **übernommen** |
| Bohemians – Galway (beide Einträge) | 1:1 | bestätigt | **beide ignoriert** |
| Valur Reykjavik – Stjarnan | 2:3, datiert 03.08. | **auffällig** — ein Spielplan führt die Paarung unter dem **04.08.** Falls das Spiel erst dann stattfand, wäre 2:3 erfunden | offen |
| übrige acht | — | **ungeprüft** | offen |

**Warum beide Bohemians-Einträge ignoriert wurden:** Bei einem Eintrag hatte Flash 3 von 3 richtig, beim anderen 1 von 3; Sonnet in beiden Fällen 1 von 3. Jede Auswahl hätte einseitig Flashs Ergebnis verschoben. Ondo hat das Spiel ganz herausgenommen.

**⚠ Nicht verwechseln:** Gesperrt sind ausschliesslich die 13 Ergebnisse vom **29./30. Juli** und die Läufe vom **31. Juli** — sie sind die Prüfbibliothek. **Der Prüflauf vom 4. August ist nicht gesperrt.**

**Kein zweiter Prüflauf, bevor entschieden ist.** Nicht übernommene Spiele gelten als offen und werden neu geprüft — mit womöglich anderem Ergebnis (Fehlerart 1). Der Schiedsrichter erinnert sich nicht an frühere Läufe.

### 9. Eine falsche Zahl im Bericht vom 4.8., 06:15 Uhr

Der Bericht behauptet, eine „150er-Schwelle" für den ersten Lernschritt sei mit 174 Aussagen überschritten. **Beides falsch.** Eine 150er-Schwelle steht in keiner Projektdatei; belegt ist nur **„rund 100 pro Gehirn"**. Und 87 + 87 zu addieren ist unsinnig, weil der Lernschritt je Gehirn gilt. **Nach dem belegten Maßstab ist die Schwelle nicht erreicht.** Gefunden von Chat 5. Eine berichtigte Fassung ist den Prüfern nachzureichen.

---

## ⚠ Der Befund vom 31. Juli — GESCHLOSSEN am 3. August

**Die Lücke ist zu: v19.7 wurde am 3.8. gebaut und ausgeliefert.** Sie hat am Ende sechs Tage gedauert, vom 28.7. bis zum 3.8., nicht drei.

**Was den Ausschlag gab, ist festzuhalten, weil es wiederholbar ist:** Statt `beta.html` aus dem Gedächtnis neu auszuschreiben, hat Ondo die Datei hochgeladen; geändert wurden nur die betroffenen Stellen. Das kostete einen Bruchteil des Speichers und machte Code **und** Buchführung in einem Chat möglich. **Das ist ab sofort das Standardverfahren für jede Lieferung.**

**Der ursprüngliche Befund, zur Erinnerung:** In den drei Tagen nach v19.6 entstanden zwei vollständige Chat-Übergaben, vier Dokumentenfassungen, ein Prüferbericht — und null Codezeilen.

Festgestellt von **Ondo** am Abend des 31.7. mit der Frage, woran es hakt. Die Antwort, soweit sie belegbar ist:

1. **Die Dokumente wachsen, nichts schrumpft.** Dieses Dokument ist kein Onboarding-Dokument mehr, sondern eine Chronik. Der Backlog schreibt ausdrücklich „nichts wird gelöscht". Jeder Vorfall erzeugt einen neuen Abschnitt, eine neue Regel, eine neue Kontrollfrage.
2. **Deshalb kostet das Einlesen mehr als das Arbeiten.** Die Vorschrift „lies alle sechs Dateien" hat am 31.7. etwa die Hälfte des Arbeitsspeichers eines Chats gekostet, bevor die erste Aufgabe begann. Was übrig bleibt, reicht für eine Lieferung — dann ist Übergabe. Der nächste Chat liest dieselben, inzwischen größeren Dokumente.
3. **Die Zwei-Probleme-Regel wurde nie auf die Verwaltung angewandt.** Sie gilt bisher nur für Funktionen.

→ **Backlog Punkt 18** (Status: Idee). Vorschlag: dieses Dokument auf das kürzen, was ein neuer Chat wirklich braucht, und die Chronik in eine Archivdatei auslagern, die beim Start **nicht** gelesen wird. **Entscheidung Ondos steht aus.**

*Ehrlich dazu (Art. 14): Auch diese Fassung ist wieder länger geworden, nicht kürzer. Punkt 18 zu beschließen ist weiterhin die einzige Maßnahme, die das ändert. Das Hochlade-Verfahren mildert das Problem, es löst es nicht — gelesen werden die Dokumente beim Start trotzdem.*

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
**Letzte bestätigte Sicherung: 5.8.2026, 07:31 Uhr — nach dem Vorhersagelauf.** Davor am selben Tag: 06:37 Uhr. Davor: 4.8.2026, 17:58 Uhr (138 Vorhersagen, 6 Wetten) · 3.8.2026 · 2.8.2026, 13:00 Uhr · 31.7.2026, 07:49 Uhr.
*Am 4.8. hat sich die Sicherung bewährt: Ondo hat den Browserverlauf gelöscht, Safari löschte dabei den Websitespeicher mit, alle Daten waren weg — und wurden vollständig wiederhergestellt. **Nichts verloren.** Zwei bekannte Verlustwege: Browserdaten löschen · getrennter Speicher Safari gegen Startbildschirm.*
*Hinweis (3.8.): Die Sicherungsdatei enthält `apiKey`, `geminiKey` und `pin` im Klartext. Sie darf nie an ChatGPT oder Gemini gehen, nie an einen Bericht angehängt und nie ins Repo. Ondo hat am 3.8. beide Schlüssel neu erzeugt und die alten deaktiviert. **Folge: Eine Sicherung von vor dem 3.8. überschreibt beim Zurückladen die neuen Schlüssel mit den toten alten** — dann Schlüssel neu eintragen, die Messdaten bleiben unberührt.*

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
| (10) | **Dasselbe Spiel doppelt in der Spielliste** | 3.8. | *keine* — **noch keine Fehlerart.** Gemini empfiehlt am 4.8. ausdrücklich, sie als zehnte zu führen (Datenhygiene, nicht Schiedsrichterurteil). **Entscheidung Ondos steht aus** | — |

**Die wichtigste Erkenntnis (25.7.):** Alle drei KIs urteilten unabhängig, Ergebnisse unterklassiger Spiele seien nicht beschaffbar. **Das war falsch.** Ondo drückte den Prüf-Knopf mehrfach: 2 von 7, dann 4 von 7, schließlich 7 von 7. Es war kein Verfügbarkeits-, sondern ein Zuverlässigkeitsproblem.

**Was weiterhin gilt:** Ondos manuelle Kontrolle hat **jeden** Fehler gefangen, den die Automatik durchgelassen hat.

**Bekannte Lücke:** Die Wiederholung greift nur bei „nicht gefunden". Ein einmal als *fertig* gemeldetes Ergebnis wird nie wieder hinterfragt.

---

## Fund vom 3. August — dasselbe Spiel doppelt in der Spielliste

Am 2.8. standen in derselben Liste **„Bohemians – Galway United FC" (Anpfiff 20:00)** und **„Bohemians Dublin – Galway United" (Anpfiff 19:00)** — ein Spiel, zwei Einträge. Sonnet hat es selbst gemerkt und in die Begründung geschrieben: „Gleiche Paarung wie heute früher."

Die Doppelten-Sperre in `spielListeHolen` bildet den Schlüssel so:

```
function schluessel(s){ return String(s.match).toLowerCase().replace(/[^a-z0-9]/g,''); }
```

Zwei Schreibweisen desselben Spiels ergeben zwei verschiedene Schlüssel. Folgen: **sechs bewertete Aussagen je Gehirn aus einem einzigen Spiel** statt drei, und eine der beiden Anpfiffzeiten ist falsch — die geht in die 2,5-Stunden-Regel des Schiedsrichters ein.

**Ob das eine zehnte Fehlerart ist oder ein Beobachtungspunkt bleibt, entscheidet Ondo.** Nichts gebaut; gehörte nicht zu den vier v19.7-Punkten.

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
- **Beta: v19.7.7** (`beta.html`, geliefert 5.8.2026) — getrennter Speicher, aktive Messphase. Vier Nachbesserungen am 3. und 4. August, alle ausgelöst durch Punkt 0a; Einzelheiten im Backlog. Im Code steht weiterhin `APP_VERSION = 18` (technische Schuld, bewusst nicht nebenbei geändert, vor der Beförderung zu klären)
- **Sprachschlüssel: 199** in DE, FR und EN, maschinell abgeglichen und identisch (Stand 5.8.). *Die früher dokumentierten 184 waren nie geprüft; nachgezählt waren es 185, dann 193, jetzt 199.*

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

## Aktueller Messstand (nachgerechnet am 3.8.2026 aus Ondos Sicherung — unverändert seit 29.7., weil nichts übernommen wurde)

**Bestand insgesamt:** 138 Vorhersagen, davon 118 aus der Messphase (je 59 Sonnet und Flash) und 20 im v18-Archiv. **Je 87 bewertete Aussagen, je 90 noch offene** — das sind 30 Spiele pro Gehirn, die auf Ergebnisse warten. Vorhergesagt wurde zuletzt am 2. und 3. August.

**⚠ Diese Zahlen sind seit dem 4.8. überholt — seit dem 5.8. deutlich.** An diesem Tag kamen **zehn übernommene Spiele** dazu. Wie viele bewertete Aussagen daraus wurden, ist **nicht nachgerechnet** und wird hier ausdrücklich nicht geschätzt (Arbeitsregel H). Wer die Zahl braucht, rechnet sie aus Ondos Sicherung vom 5.8. nach.

*Der ursprüngliche Hinweis vom 4.8.:* An diesem Tag wurde St Patrick's – Derry City 1:1 übernommen. Rechnerisch sind es damit **je 90 bewertete und je 87 offene Aussagen** — *hergeleitet aus drei Märkten je Gehirn, nicht nachgerechnet* (Arbeitsregel H). **Kalibrierung und Entschlossenheit sind seit dem 3.8. nicht neu gerechnet worden.** Wer sie braucht, rechnet sie aus Ondos Sicherung vom 4.8. nach. *Hinweis: Die Sicherungsdatei enthält die Zugangsschlüssel im Klartext — sie geht nie an einen Prüfer, nie in einen Bericht, nie ins Repo.*

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

**Entschlossenheit (neu ab v19.7, aus denselben 87 Aussagen gerechnet):**

| | Ø Abstand von 50 | Anteil ab 60 % |
|---|---|---|
| Sonnet | 4,8 | 6 % (5/87) |
| Flash | 8,6 | 38 % (33/87) |

*Lesart: Flash legt sich fast siebenmal so oft fest wie Sonnet, bei doppelter Kalibrierungs-Abweichung. Die Zahl allein sagt nichts über Qualität — sie ist erst zusammen mit der Kalibrierung aussagekräftig. **Den Gehirnen wird sie nicht mitgeteilt.***

---

## Was v19.7 kann

**Vorhersage:** Ein Knopf. Die Spielliste wird **zweistufig** geholt: erst UEFA und große europäische Ligen, nur bei weniger als fünf Spielen zusätzlich MLS/Südamerika/Skandinavien, danach erst Testspiele. Jede Stufe ist eine eigene Anfrage. Beide Gehirne bekommen dieselbe Liste, ohne Websuche.

**Ergebnisprüfung:** Ein Knopf, mehrrundig. Höchstens fünf Spiele pro Anfrage, Obergrenze sechs Runden. Drei Zustände je Spiel. Quellenpflicht ab Durchgang drei. Sichtbare Bilanz.

**Datensicherung** (unter „Mehr"): Export als Datei, Import zurück.

**Kalibrierungs-Tabelle** unter Finanzen, je Gehirn. Darunter neu die Karte **Entschlossenheit**.

**Neu in v19.7 (3.8.2026):**
- **A** — jedes Gehirn gibt zusätzlich das Wort `bttsWort` („ja"/„nein") aus. Es wird gespeichert und auf jeder Vorhersagekarte angezeigt. Weicht es von der angezeigten Btts-Aussage ab, erscheint der Hinweis „≠ Anzeige oben" — **reine Anzeige, nicht gespeichert, in keiner Kennzahl.** Am Rechnen, Umdrehen und Bewerten wurde nichts geändert.
- **0a** — **⚠ ÜBERHOLT. Am 4.8. in v19.7.3 zurückgenommen.** Der Schiedsrichter läuft wieder mit einem Flash-Modell. Der Anfragen-Zähler bleibt bei null, Modellname und Anzahl erscheinen deshalb **nie** unter der Bilanz. Was 0a sein sollte und warum es scheiterte, steht oben im Abschnitt zum 4. August. *(Der Absatz bleibt hier stehen, damit sichtbar ist, was einmal beschlossen war — nicht als Beschreibung des heutigen Zustands.)*
- **1** — Kennzahl Entschlossenheit.
- **D** — Rückblick-Block in neuer Zeilenform: `2.8.2026: Bohemians – Galway · getippt 2:1 · Ergebnis noch offen`.

**Beim Bauen von 0a gefunden:** Die App fragte das Google-Konto nie nach stärkeren Modellen — der Filter in `gLadeModelle` ließ ausschließlich Namen mit „flash" durch. Der Schiedsrichter benutzte dasselbe Modell wie das zweite Gehirn, nicht aus Absicht, sondern mangels Alternative. *(Der Befund bleibt gültig; die daraus gebaute zweite Modellliste ist am 4.8. zurückgenommen worden.)*

**Was die Kosten angeht — am 4.8. beantwortet:** Die Frage war, was ein Prüflauf wirklich kostet. Antwort aus dem Google-Konto: **0,05 € in 90 Tagen**, Guthaben 9,94 € von 10,00 €. Selbst die rund 30 vergeblichen Anfragen der drei 0a-Anläufe haben praktisch nichts gekostet. Die Schätzung vom 9.7. lag um das Zehnfache daneben — hier lag die Sorge in die andere Richtung daneben.

---

## Wie es weitergehen soll

**Reihenfolge, festgelegt am 4.8.:** (1) Buchführung — erledigt mit dieser Fassung · (2) die acht ungeprüften Ergebnisse vom 4.8. prüfen und Valur – Stjarnan klären · (3) berichtigter Bericht an ChatGPT und Gemini, mit Antwort auf Geminis offene Rückfrage · (4) **Backlog-Punkt 22** bauen (KI-Log als Textausgabe) · (5) danach **Punkt E**.

**1. v19.7 bis v19.7.4 — ERLEDIGT am 3. und 4.8.** Jetzt läuft die Bewährungszeit (Arbeitsregel B). Auszuwerten:
- **Test A:** Nach einem Tag Vorhersagen ablesen, ob Wort und Prozentzahl bei Sonnet auseinanderfallen und bei Flash nicht. **Vorbehalt:** Es ist möglich, dass die zusätzliche Frage das Antwortverhalten selbst verändert; ein Warnzeichen wäre, wenn Sonnets scharfes Muster bricht (umgedreht nur bei einer Null im Tipp). Die beiden Fälle lassen sich nicht sicher trennen.
- **Punkt 0a:** ~~Modellname und Anfragen-Zähler ablesen.~~ **Entfällt — 0a ist am 4.8. zurückgenommen.** Die Kostenfrage ist am Guthaben beantwortet: 0,05 € in 90 Tagen.
- **Punkt D:** In den ersten Tagen steht bei fast jeder Zeile „Ergebnis noch offen", weil Übernehmen gesperrt ist. Das ist erwartet.

**2. Die acht ungeprüften Ergebnisse vom 4.8. prüfen und Valur – Stjarnan klären.** Claude prüft selbst per Websuche; Ondo schlägt nichts von Hand nach (Beschluss 25.7.). Vorher kein zweiter Prüflauf.

**3. Punkt E: „Prüfen statt suchen"** — am 25.7. beschlossen, bis heute nicht gebaut. Nach der Rücknahme von 0a der **einzige verbliebene** Ansatz gegen erfundene Ergebnisse, und von beiden Prüfern am 4.8. als der stärkere Weg bestätigt. **Vorbedingung: Geminis Rückfrage beantworten** — wie unterscheidet der neue Auftragstext ein echtes 0:0 von einem „nicht gefunden"?

**3b. Dieselben 13 Ergebnisse erneut prüfen lassen.** ~~mit dem stärkeren Modell~~ — das entfällt mit 0a. Der Vergleich bleibt trotzdem sinnvoll, sobald Punkt E gebaut ist: Ondos PDF vom 30.7. ist die Messlatte „alter Auftragstext", die amtlichen UEFA-Ergebnisse sind die Wahrheit. **Der sauberste Vergleich, den das Projekt je hatte — verspielt, sobald diese 13 übernommen werden.**

**4. Erster Lernschritt — NICHT selbstverständlich.**
Für **Flash** ist die Lehre klar benennbar. Für **Sonnet** wäre die naheliegende Lehre „leg dich öfter fest" — und die wäre **gefährlich**: Ein Modell zu mehr Entschlossenheit zu drängen, kann seine Ehrlichkeit zerstören. Zweiter Grund zum Verschieben: Ein Lernschritt ist nach Art. 9 eine bestätigte Lehre; eine Lehre auf ungeklärter Datengrundlage zurückzunehmen ist teurer, als sie später zu geben.
**Beschlossen (Ondo, 31.7.): als ausdrücklich offene Frage an ChatGPT und Gemini geben.** Geschehen am 4.8. **Beide antworteten: ja, nur Flash korrigieren.** Ondos Entscheidung steht aus. **Und: Die Schwelle ist nach dem belegten Maßstab — rund 100 Aussagen pro Gehirn — noch nicht erreicht.**

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

**Vor jeder Lieferung:** Syntax-Check (`node --check`), Sprachdatei-Abgleich (DE/FR/EN gleiche Schlüssel, **aktuell 184**), Trockentest der neuen Logik — am besten gegen Ondos jüngste Sicherungsdatei, das prüft die Rechnung an echten Daten. Versionsnummer im Header hochzählen. **Und die Dokumente (Arbeitsregel F).**

### Chat-Übergabe ist Claudes Pflicht, nicht Ondos (**Übergaberegel**, 30.7.)

*Namensklärung erledigt (Ondo, 31.7., eingetragen 3.8.): Diese Vorschrift hieß bis dahin ebenfalls „Regel G" und ließ sich mit der Arbeitsregel G (Kostenregel) im Blueprint verwechseln. Sie heißt jetzt **Übergaberegel**.*

Claude löst die Übergabe **von selbst** aus, sobald der Arbeitsspeicher knapp wird. Sie besteht aus drei Teilen: aktualisierter PROJEKT-STATUS, aktualisierter Backlog, und einer **Übergabemappe** mit den Abschnitten: (A) Nachricht zum Einfügen, (B) Kontrollfragen, (C) Antwortschlüssel nur für Ondo, (D) was zu tun ist, wenn Antworten falsch sind, (E) erste Arbeit nach der Abnahme.

**Begründung:** Eine Übergabenachricht allein beweist nichts. Erst die richtig beantwortete Kontrollfrage beweist etwas. Die Kontrollfragen werden bei jeder Übergabe **neu geschrieben**. Mindestens eine muss eine Fangfrage sein, deren richtige Antwort „das weiß ich nicht" lautet (Art. 11 und 14).

**Die Mappe verweist auf die Dokumente. Sie fasst sie nicht nach Gedächtnis zusammen.**

**Auslöser (Claude prüft das selbst):** eine vollständige Ausgabe von `beta.html` (74 KB) passt nicht mehr sicher in eine Antwort · zusätzliche große Dokumente wurden eingelesen · Antworten werden erkennbar kürzer oder ungenauer, als die Aufgabe verlangt.

**Was den Speicher wirklich füllt** *(gemessen am 31.7.)*: Vier PDF-Ausdrucke der KI-Log-Seite kosteten zusammen mehr als `beta.html`, `Blueprint.md` und `Ondo-Core-Architektur.md` zusammen — jeder enthält das gesamte Log im Volltext, und das Log wächst mit jeder Vorhersage.

**Grobe Zahlen zum Rechnen** *(Claude, 31.7. — Schätzungen, ausdrücklich keine Messungen)*: Gesamter Arbeitsspeicher etwa **400 KB Text**. Einlesen aller sieben Dateien ≈ **240 KB (60 %)**. Drei Dokumente ausschreiben ≈ **90 KB**. `beta.html` ≈ 74 KB · `OndoControl.html` ≈ 66 KB · die vier Markdown-Dateien zusammen ≈ 100 KB.

**⛑ Seit dem 5.8.: Für den KI-Log gibt es keine Bildschirmfotos mehr, sondern den Textknopf** (Backlog-Punkt 22, unter „KI-Log"). Zehn Vorhersagen als Text kosten einen Bruchteil eines Bildes und sind maschinell auswertbar — Test A war auf diesem Weg auswertbar und wäre es auf einem Bild nicht gewesen. Für alles andere gilt weiter:

**Bildschirmfotos:** **Zwei bis drei normale Bildschirmfotos vom oberen Teil (≈ 15 KB je Stück) sind das Günstigste.** Ein Bild der ganzen langen Seite kostet 40–60 KB und ist kaum lesbar. Ein PDF-Ausdruck ist am teuersten, weil er das gesamte Log als Text enthält, auch die nicht sichtbaren Einträge.

**⚑ Das Hochlade-Verfahren (3.8., bewährt bei v19.7) — ab sofort Standard:** Zu ändernde Dateien werden von Ondo **hochgeladen** statt von Claude aus dem Gedächtnis neu ausgeschrieben. Claude ändert nur die betroffenen Stellen und gibt die fertige Datei zurück; der Rest läuft nie durch den Speicher. Ersparnis bei `beta.html` grob ein Viertel eines ganzen Chats. Dadurch passten am 3.8. Code **und** vollständige Buchführung in denselben Chat.

**Ablauf:** Teil A in den neuen Chat → dessen Bestätigung abwarten → Teil B einfügen → die Antworten in den **alten** Chat zurückkopieren → Abnahme durch den abgebenden Chat. Vorher wird im neuen Chat nichts gebaut. Erste Arbeit ist Teil E.

**Eigene Fassung für ChatGPT:** ChatGPT kann keinen neuen Chat öffnen. Die Übergaberegel braucht dafür eine angepasste Fassung — **noch zu schreiben.**

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
| 3.8.2026 | Chat 5 → Chat 6 | Raw-Links + Mappe | **9 von 9** | eine Antwort über dem Schlüssel (Frage 3 war falsch gestellt: sechs Tage, nicht drei); zwei Dokumentenfehler durch den Nachfolger gefunden. **Erste Übergabe, nach der noch am selben Tag Code geliefert wurde** |
| 4./5.8.2026 | Chat 7 → Chat 8 | Raw-Links + Mappe | **9 von 9** | beide Fangfragen bestanden; zwei Antworten über dem Schlüssel (Mechanismus hinter `APP_VERSION`, Widerspruch zur Begründung der neunten Fehlerart). Der Nachfolger fand vor der Prüfung die unbeabsichtigte Lücke in `PROJEKT-STATUS.md` sowie zwei Codebeobachtungen, die sich beide bestätigten. Chat 7 hatte die Mappe zunächst nach Gedächtnis gebaut und nach Ondos Einwand neu geschrieben |
| 4.8.2026 | Chat 6 → Chat 7 | Raw-Links + Mappe + Abnahme | **9 von 9** | zwei Antworten über dem Schlüssel (Fragen 3 und 4). Der Nachfolger fand vor der Prüfung **drei Abweichungen zwischen Code und Dokumenten** (v19.7.4 statt v19.7 · 0a zurückgenommen · Modellwahl undokumentiert) plus einen Stilfehler. Der abgebende Chat gab offen an, dass sein Speicher erschöpft war |

---

*Aktualisiert von Claude (Chat 8) am 5.8.2026, zusammen mit der Backlog-Fassung 9 und Blueprint 0.7. Alle sechs Dateien plus `version.json` wurden vor Arbeitsbeginn vollständig gelesen; die drei Dokumente wurden hochgeladen und nur an den betroffenen Stellen geändert.*

*Vorige Fassung: aktualisiert von Claude (Chat 7) am 4.8.2026, zusammen mit der Backlog-Fassung 7 und Blueprint 0.6. Alle sechs Dateien plus `version.json` wurden vollständig gelesen, dazu der Bericht vom 4.8., 06:15 Uhr. Alle Punkte aus Teil E der Übergabemappe Chat 6 → Chat 7 stehen jetzt in Repo-Dateien. **Die Übergabemappe darf gelöscht werden, sobald Ondo die drei Dateien hochgeladen hat — nicht früher.***
