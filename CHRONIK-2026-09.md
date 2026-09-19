# ONDO CONTROL — CHRONIK SEPTEMBER 2026
*Archiv. Neu angelegt am 14.9.2026 (Ondos Auftrag, Phase 2 der Trennung von aktuellem Stand und Geschichte) — bis dahin gab es keine Chronikdatei fuer September, weil `STAND.md` seinen Versionsverlauf seit dem 15.8.2026 selbst mitfuehrte, statt ihn laufend auszulagern.*
*Wird beim Start eines Chats **nicht** gelesen, sondern nur auf Zuruf.*
*Was heute gilt, steht in `STAND.md`. Steht hier eine Zahl, die dort anders lautet, gilt `STAND.md`.*

---

## „Vorfall vom 6.9.2026" aus STAND.md verschoben (14.9.2026, Phase 2 der Trennung von aktuellem Stand und Geschichte, nachtraeglich noetig geworden wegen der 80.000-Zeichen-Pruefung aus Schritt 7 des Auftrags)

### 🔴 Push ausschliesslich auf `main` — Vorfall vom 6.9.2026

*Backlog-Punkt 67 (ab 30.8.2026: Code-Lieferungen direkt auf `main`, `--ff-only`, kein eigener Branch je Lieferung, einzige Ausnahme `mistral`) ist seit dem 2.9.2026 in `BACKLOG-ARCHIV.md`. Die Regel gilt unverändert; sie ändert sich durch diesen Vermerk **nicht**. Festgehalten wird nur ein Vorfall — und der Grund, warum er mehr kostet als eine Formalie.*

**Was geschehen ist:** Eine Cloud-Sitzung hat am 6.9.2026 die Lieferung zu Backlog-Punkt 73 (Kandidat 2, `beta.html` v19.8.17) auf einen **neuen Branch** `claude/kilog-date-fields-overflow-1lc1vx` gelegt statt direkt auf `main`. **Ondo hat das nicht erlaubt und wusste nichts von einem neuen Branch.** Belegte Ursache, ohne Ausrede: Die Sitzung war von aussen auf diesen Branch festgelegt worden und durfte nach dieser Vorgabe auf keinen anderen pushen. **Das ändert nichts an der Bewertung** — nach Artikel 8 kommen Aufträge ausschliesslich von Ondo, und eine Vorgabe, die nicht von ihm stammt, hebt Punkt 67 nicht auf. Richtig wäre gewesen, **vor** dem Push anzuhalten und zu fragen. Die Sitzung hat den abweichenden Branch immerhin im Antworttext gemeldet und um Entscheidung gebeten; gemeldet ist aber nicht genehmigt. Am 6.9.2026 per `--ff-only` nach `main` nachgezogen (Auftrag Ondo), ohne Konflikt.

**Warum das kein Formfehler ist, sondern die Lieferung unwirksam macht: GitHub Pages liefert Ondos `beta.html` ausschliesslich vom `main`-Branch aus.** Eine Lieferung auf einem anderen Branch **erreicht seinen Browser nicht** — unabhängig davon, wie sauber `node --check`, Trockentest und `pruefe.py` durchgelaufen sind. Eine geprüfte Datei, die niemand laden kann, ist keine Lieferung.

**Zweite Folge, unvermeidbar:** Eine Sitzung darf auf GitHub Zweige **anlegen, aber nicht löschen** (HTTP 403 — eine Rechte-Grenze, keine Störung, mehrfach belegt, siehe Punkt 53). **Das Löschen bleibt Ondos Handarbeit** auf github.com unter „Branches", Mülleimer-Symbol. Jeder von einer Sitzung angelegte Zweig bleibt sonst dauerhaft stehen; drei solche Leichen liegen bereits im Verzeichnis.



---

## Versionsgeschichte aus STAND.md „Versionen" verschoben (14.9.2026, Phase 2 der Trennung von aktuellem Stand und Geschichte, Ondos Auftrag)

*Diese Eintraege standen bis zum 14.9.2026 als „Beta zuvor:"-Zeilen in `STAND.md`, Abschnitt „Versionen". Wortgleich hierher verschoben, nichts geloescht oder umformuliert (Regel 3 des Backlogs, sinngemaess auch hier angewandt). Reihenfolge unveraendert (neueste zuerst) uebernommen, Umfang: 2.9.2026 bis 13.9.2026.*

*Nachtrag 17.9.2026 (Backlog-Punkt 84, dieselbe Wegweiser-Regel wie am 14.9.2026 angewandt): Der v19.13.3-Eintrag stand bis heute noch als „Beta:"-Zeile in `STAND.md` selbst. Wortgleich hierher verschoben, weil `beta.html` inzwischen auf v19.14.0 weitergezogen ist — an der Reihenfolge (neueste zuerst) aendert sich dadurch nichts, der Eintrag steht jetzt an der Stelle, die ihm nach diesem Prinzip zusteht.*

- **Beta zuvor: v19.16.0** (`beta.html`, geliefert 18.9.2026) — **Messdaten-Export: rekursive,
  schemabasierte Positivprojektion (Backlog-Punkt 85, Auftrag Ondo, Fund am eigenen `espnRoh`).**
  Vorgeschichte (ESPN, OpenLigaDB, Notnagel-Läufe): unverändert, „Beta zuvor: v19.15.0" unten und
  Backlog-Punkt 84.
  **Anlass:** `messDatenBauen()` kopierte je `MESS_FELDER`-Eintrag bisher `state[f]` vollständig,
  ungeprüft in die Tiefe. `MESS_FELDER` war damit nur ein Schutz auf oberster Ebene. Als
  `espnRoh` (v19.14.2) unter `kiProtokoll[].espnRoh[]` entstand, lief es über genau diesen
  Kopiervorgang ungeprüft mit durch — auf einem echten Gerät traf `messGeheimFund()` dabei auf
  `kiProtokoll[0].espnRoh[0].summary.news.articles[0].contentKey` und blockierte den **gesamten**
  Export, nicht nur das eine Feld.
  **Gebaut:** Jede Stelle, an der ein `state`-Feld ein Objekt oder ein Array von Objekten ist,
  bekommt eine eigene, ausdrückliche Feldliste (`MESS_KI_FELDER`, `MESS_MARKT_FELDER`,
  `MESS_MARKT_FALT_FELDER`, `MESS_BET_FELDER`, `MESS_REGELN_FELDER`, `MESS_KORREKTURF_FELDER`,
  `MESS_TRAIN_PROT_FELDER`, `MESS_TRAIN_SPIEL_FELDER`, `MESS_KONS_SPIEL_FELDER`,
  `MESS_KONS_GEHIRN_FELDER`) — aus dem tatsächlichen Code ausgezählt (Arbeitsregel H), nicht aus
  dem Gedächtnis. `messNurFelder()` kopiert je Ebene ausschliesslich, was in ihrer Liste steht;
  `MESS_PROJEKTOREN` ordnet jedem `MESS_FELDER`-Eintrag seinen Projektor zu, **ohne** Rückfall auf
  einen rohen Kopiervorgang — ein Feld ohne Projektor wird übersprungen statt roh durchgereicht.
  **`refRoh` und `espnRoh` bleiben bewusst aussen vor** — Ondos eigene, nicht delegierte
  Entscheidung: beide bleiben vollständig in IndexedDB und in der normalen Sicherung erhalten,
  der normale Sicherungsweg (`datenSichern`/`datenLaden`) ist unverändert. **Keine Ausnahme für
  `contentKey` oder ein anderes Einzelfeld in `MESS_VERBOTEN` eingetragen** — `MESS_VERBOTEN` und
  `messGeheimFund()` bleiben wortgleich unverändert als zweite, unabhängige Stufe stehen.
  **Verifiziert:** `node --check` bestanden · **29 neue Prüfungen** an den echten, wortgleich
  herausgeschnittenen Funktionen (kein Nachbau) — unbekanntes Feld auf jeder Ebene injiziert
  (Top-Level, `kiProtokoll`-Eintrag, `maerkte[]`, `fAlt`, `bets`, `regeln`, `korrekturF`,
  `trainingsraumProtokoll` inkl. dessen `maerkte[]`, `trainingsraumSpiele`,
  `antwortkonsistenzBericht` inkl. `proSpiel[]`) → kein einziges kommt im Export an ·
  der ursprüngliche Fehlerfall (`espnRoh` mit `contentKey`) exakt nachgebaut → `messGeheimFund()`
  meldet jetzt nichts mehr, der Export gelingt · alle erlaubten Felder bleiben inhaltlich
  unverändert erhalten (kein Datenverlust) · ein v18-Alteintrag ohne v19-Zusatzfelder läuft ohne
  Absturz durch, fehlende Felder bleiben fehlend statt „undefined" · `datenSichern()`/
  `datenLaden()` unverändert auf ganz `state` · `messGeheimFund()` erkennt weiterhin einen
  echten Schlüsselwert (Stufe 2 unabhängig wirksam) — alle 29 bestanden. `pruefe.py`: ALLES
  SAUBER. **Keine neuen Sprachschlüssel** (349 unverändert). **Kein Schnitt in der Messreihe** —
  reine Exportlogik, `state` selbst unangetastet. `APP_VERSION` weiter 18.

- **Beta zuvor: v19.15.0** (`beta.html`, geliefert 17.9.2026) — **OpenLigaDB als zweite strukturierte
  Schiedsrichter-Quelle, für die Wettbewerbe, die ESPN nicht kennt (Backlog-Punkt 84, Auftrag
  Ondo „UEFA-/openfootball-Lücke weiterverfolgen").** Vorgeschichte (ESPN, Notnagel-Läufe,
  `REF_MIN_LAEUFE`, `espnRoh`): unverändert, „Beta zuvor: v19.14.2" unten und Backlog-Punkt 84.
  **Schritt 0 (Live-Recherche), Befund:** ESPN kennt live geprüft keine deutsche 3. Liga und
  keine Regionalliga (`ger.3`/`ger.regionalliga`-Slugs existieren nicht, HTTP 400) — genau die
  Lücke, die STAND.md als Grossteil von Ondos Spielen benennt. Gefunden und live bestätigt:
  `api.openligadb.de` — offenes CORS (mit Origin-Header, wie ein echter Browser ihn immer
  sendet), kein Schlüssel nötig, `matchIsFinished` als klares Fertig-Signal, Halbzeit-/
  90-Minuten-Stand sauber getrennt in `matchResults[]`. **Elfmeter-/Verlängerungs-Falle am
  selben Spiel wie bei ESPN geprüft** (Eintracht Norderstedt–St. Pauli, DFB-Pokal 16.8.2025):
  OpenLigaDB nennt den Verlängerungsstand mit dem irreführenden Namen „Unknown" (deren eigene
  Bezeichnung) und den Elfmeterstand getrennt „AfterPenalties" — beide Quellen liefern
  unabhängig voneinander denselben Stand (0:0 / 0:0 / 2:3), eine echte Kreuzvalidierung.
  Aktualität bestätigt: 3. Liga und Regionalliga Nordost/Bayern/Nord führen die laufende Saison
  2026/27 bereits mit Spielen vom Vortag. **Grenze, ehrlich benannt (Art. 11):** Regionalliga
  West und Südwest sind für die laufende Saison bei OpenLigaDB NICHT auffindbar (mehrere
  Kürzel probiert, 0 Spiele) — bleiben bewusst ausserhalb der Slug-Tabelle, kein Raten.
  **Gebaut:** `openligaShortcutFuer()` (nur die vier live bestätigten Wettbewerbe: 3. Liga,
  Regionalliga Nordost/Bayern/Nord) · `openligaSaison()` (reine Datumsrechnung, deutsche Saison
  Juli–Juni) · `openligaErgebnisAus()` (90-Minuten-/Halbzeit-/Verlängerungsstand aus
  `matchResults[]`, „Unknown" nur als echte Verlängerung gewertet, wenn er vom 90-Minuten-Stand
  abweicht oder ein Elfmeterschiessen folgte — sonst als redundanter Doppeleintrag erkannt und
  verworfen, belegt an einem echten Fall ohne Verlängerung) · `openligaLauf(ziel, cache)`,
  **parallel** zu `espnLauf()` aufgerufen (disjunkte Wettbewerbe, kein Spiel kann beide Quellen
  gleichzeitig treffen). `ergebnisQuelleAus()` um `'openliga'` erweitert — zählt wie `'espn'`,
  braucht in `refEinigkeit()` nur Schwelle 1. Der KI-Notnagel bekommt jetzt nur noch die Spiele,
  die **weder** ESPN **noch** OpenLigaDB lösen konnten. `espnRoh`-Äquivalent für OpenLigaDB
  bewusst NICHT mitgebaut — nicht Teil dieses Auftrags, siehe Backlog-Punkt 84.
  **Verifiziert:** `node --check` bestanden · **22 neue Prüfungen** an den echten, wortgleich
  herausgeschnittenen Funktionen (kein Nachbau), gegen live abgerufene OpenLigaDB-Antworten —
  Slug-Erkennung inkl. Negativfall · Saisonrechnung an echten Randdaten · fünf echte
  DFB-Pokal-Elfmeterfälle korrekt ausgewertet (inkl. des Falls ohne echte Verlängerung) · der
  volle Weg über `openligaLauf()` · `ergebnisQuelleAus`/`refEinigkeit` für `'openliga'` — alle
  bestanden, die 44 bereits bestehenden ESPN-Prüfungen erneut gegenkontrolliert, unverändert
  korrekt. `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (349 unverändert). **Kein
  Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
  **🔴 Status ausdrücklich NICHT auf „behoben" gesetzt:** Bestätigung durch einen echten
  Prüfzyklus am Gerät steht aus. match.uefa.com und openfootball „internationals" bleiben
  ausgeschieden (CORS bzw. keine aktuellen Daten, siehe Backlog-Punkt 84) — Regionalliga
  West/Südwest bleiben aus demselben Grund wie diese offen.

- **Beta zuvor: v19.14.2** (`beta.html`, geliefert 17.9.2026) — **Rohe ESPN-Antwort mitgeschrieben
  (Backlog-Punkt 84, Auftrag Ondo).** Vorgeschichte (Notnagel-Läufe, `REF_MIN_LAEUFE`,
  90-Minuten-Formel): unverändert, „Beta zuvor: v19.14.1"/„v19.14.0" unten, und Backlog-Punkt 84.
  **Gebaut:** Neue Funktion `espnRohSchreiben(r, ziel)`, aufgerufen direkt neben jedem
  `verarbeite(r, ziel, espnRohText, 'espn')` in `rundeLaufen()`. Bei jedem ESPN-Treffer schreibt
  sie an jeden betroffenen `kiProtokoll`-Eintrag ein neues Feld `e.espnRoh[]` — je Fund ein
  Eintrag mit Datum, dem konkret gefundenen Scoreboard-Ereignis und der **vollständigen**
  Summary-Antwort. Bewusst **getrennt von `e.refRoh[]`** (das über `verarbeite()` weiterhin nur
  die knappe „id: heim:gast"-Zusammenfassung bekommt, unverändert) und bewusst **nicht die ganze
  Scoreboard-Tagesliste**, nur das eine gefundene Ereignis daraus — die übrigen Spiele desselben
  Tages gehören nicht zu diesem Fund und würden bei mehreren Treffern am selben Tag unnötig
  dupliziert. Wie `e.refRoh[]` ein Array: nichts wird überschrieben, jeder Fund (auch nach
  Ondos „Wieder prüfen"-Knopf) hängt sich an. Reines Mitschreiben — an `refLaufPruefen()`,
  `refEinigkeit()`, der 90-Minuten-Formel oder `REF_MIN_LAEUFE` ändert sich nichts.
  **Kostenpunkt ehrlich genannt (Art. 14):** Eine echte ESPN-Summary-Antwort ist **kein**
  kleiner Datensatz — gemessen an den drei Testantworten aus Schritt 0: 47–404 KB je Spiel
  (Mittelwert rund 250 KB), weil ESPN dort auch Kader, Wettquoten, News und Videos mitliefert,
  die hier nie gelesen werden. Gegen die von Ondo selbst gemessene Geräte-Grenze (39.332 MB,
  siehe „Datensicherung") bleibt das auch bei hunderten Treffern eine kleine einstellige
  Prozentzahl — kein Blocker, aber keine vernachlässigbare Zahl, wie zugesagt ehrlich benannt,
  nicht nur behauptet.
  **Verifiziert:** `node --check` bestanden · **12 neue Prüfungen** an den echten, wortgleich
  aus `beta.html` herausgeschnittenen Funktionen (kein Nachbau), mit derselben live abgerufenen
  Celje/Slovan-Antwort wie beim Bau von `espnLauf()`: `_espnRoh` trägt das echte, konkret
  gefundene Ereignis und die vollständige, unveränderte Summary-Antwort · beide beteiligten
  `kiProtokoll`-Einträge (Sonnet und Flash) bekommen je einen `espnRoh`-Eintrag, ein
  unbeteiligter dritter Eintrag bleibt unberührt · `e.refRoh` bleibt dabei unverändert (leer) ·
  ein zweiter Fund hängt sich an, statt zu überschreiben · ein Wettschein-Posten (`art!=='log'`)
  wird nie angefasst — alle bestanden. `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel**
  (349 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
  **🔴 Status ausdrücklich NICHT auf „behoben" gesetzt:** Bestätigung durch einen echten
  Prüfzyklus am Gerät steht aus, ebenso die Entscheidung, ob/wie die UEFA- und
  openfootball-Lücke geschlossen wird.

- **Beta zuvor: v19.14.1** (`beta.html`, geliefert 17.9.2026) — **ESPN als primäre
  Schiedsrichter-Ergebnisquelle bleibt, KI-Notnagel zurück auf drei Läufe (Backlog-Punkt 84,
  Auftrag Ondo, noch am selben Tag wie v19.14.0).** An ESPN selbst, `espnLauf()`, den
  Slug-Tabellen (Schritt 1) und der 90-Minuten-Formel (Schritt 3, `linescores[0]+[1]`,
  elfmeter-/verlängerungssicher) ändert sich nichts — Einzelheiten dazu weiterhin bei
  „Beta zuvor: v19.14.0" unten, und in Backlog-Punkt 84.
  **Geändert:** `REF_MIN_LAEUFE` ist jetzt keine globale Schwelle mehr, sondern
  zusammengesetzt: Ein Strukturtreffer (ESPN, erkennbar an `ergebnisQuelleAus()!=='ki'`)
  braucht weiterhin nur sich selbst (Schwelle 1) — er „rät" nicht. Bestehen die geprüften
  Läufe eines Spiels dagegen ausschliesslich aus KI-Läufen (ESPN hat nichts gefunden), gilt
  wieder `REF_MIN_LAEUFE=3`: zwei Gemini-Läufe plus ein Sonnet-Lauf, mit derselben
  2-von-3-Übereinstimmungsregel wie vor v19.14.0 (die Mehrheits-Rechnung in `refEinigkeit()`
  war nie geändert, nur die Eintrittsschwelle). `kiZahl` im Notnagel-Zweig entsprechend von
  1 auf 3 zurückgesetzt. **Damit gilt die Drei-Läufe-Absicherung gegen einen einzelnen
  halluzinierenden KI-Lauf (elfte Fehlerart) wieder — ausschliesslich für den Fall, dass ESPN
  nichts liefert.** Ondos ausdrückliche Kostenentscheidung von v19.14.0 (ein Notnagel-Lauf
  statt drei) ist damit zurückgenommen.
  **Verifiziert:** `node --check` bestanden · **10 neue Prüfungen** an den echten, wortgleich
  aus `beta.html` herausgeschnittenen Funktionen — ein ESPN-Lauf allein weiterhin
  „einstimmig" · ein einzelner KI-Lauf allein jetzt wieder „zuwenig" · zwei KI-Läufe allein
  weiterhin „zuwenig" · drei KI-Läufe mit 2-von-3-Übereinstimmung → „zweivondrei" mit
  Mehrheitswert · drei verschiedene KI-Läufe → „uneinig" (Celje/Sabah-Schutz wiederhergestellt)
  · ein gemischter Fall (ESPN + KI) bleibt bei Schwelle 1 · der volle ESPN-Weg (Celje/Slovan
  und der Elfmeter-Fall) unverändert korrekt — alle bestanden, zusätzlich zu den 30
  Prüfungen aus v19.14.0, erneut gegenkontrolliert. `pruefe.py`: ALLES SAUBER. **Keine neuen
  Sprachschlüssel** (349 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION`
  weiter 18.
  **🔴 Status ausdrücklich NICHT auf „behoben" gesetzt:** Bestätigung durch einen echten
  Prüfzyklus am Gerät steht aus, ebenso die Entscheidung, ob/wie die UEFA- und
  openfootball-Lücke geschlossen wird.

- **Beta zuvor: v19.14.0** (`beta.html`, geliefert 17.9.2026) — **ESPN als primäre
  Schiedsrichter-Ergebnisquelle, KI-Schiedsrichter als Notnagel (Backlog-Punkt 84, Ondos
  Auftrag).** Vorausgegangen: eine echte Live-Verifikation (Schritt 0, Ondos eigene Auflage)
  an fünf tatsächlich abgeschlossenen Spielen aus vier Kategorien plus einem
  Elfmeterschiessen-Fall — zwei von vier Bedingungen stimmten in der ursprünglich angenommenen
  Form nicht (`linescores[]` existiert erst auf einem zweiten Endpunkt, `.../summary?event=`,
  nicht auf `.../scoreboard`; „fertig" zeigt sich nur über `status.type.completed===true`, nie
  über einen festen Namen wie „STATUS_FINAL") — beide Korrekturen sind eingebaut, nicht nur
  vermerkt. Einzelheiten, Belege und die zwei NICHT gebauten Quellen (match.uefa.com: CORS
  fest auf `https://www.uefa.com`, genau das football-data.org-Muster · openfootball
  „internationals": kein aktueller 2026-Datenpfad auffindbar, nicht geraten): Backlog-Punkt 84.
  **Gebaut:** neue Funktion `espnLauf(ziel, cache)` ersetzt `apiFootballLauf()`/
  `footballDataArchivLesen()` als aktiv aufgerufene Strukturquelle (beide Funktionen bleiben
  im Code, nur „NICHT AUFGERUFEN" — Regel 3). `espnSlugFuer()` bildet Ondos Schritt-1-Tabelle
  ab, ein unbekannter Wettbewerb bekommt gar keinen ESPN-Versuch. 90-Minuten-Stand ausschliesslich
  aus `linescores[0]+linescores[1]` je Team (homeAway-basiert, nicht Reihenfolge) — bleibt
  dieselbe Formel unabhängig davon, ob ein Spiel 2, 4 (Verlängerung) oder 5 (zusätzlich
  Elfmeterschiessen) Einträge trägt; das separate Feld `shootoutScore` und ein fünfter
  `linescores`-Eintrag werden nirgends gelesen. **Architekturänderung, offen benannt (Art. 14):**
  Die Drei-Läufe-Absicherung aus Backlog-Punkt 68 (`refEinigkeit()`, bisher `gut.length<3`) ist
  auf `REF_MIN_LAEUFE=1` gesenkt — ein einzelner Strukturtreffer gilt jetzt als ausreichend
  (er „rät" nicht), und der KI-Notnagel macht nur noch **einen** Lauf statt drei, wenn ESPN
  nichts findet. Die damit verbundene, bewusst in Kauf genommene Folge: Die Absicherung gegen
  einen einzelnen halluzinierenden KI-Lauf (elfte Fehlerart) gilt für den Notnagel nicht mehr.
  Neues Feld `ergebnisQuelle` (`espn`/`uefa`/`openfootball`/`ki`) an jedem bewerteten
  `kiProtokoll`-Eintrag, analog zu `herkunft`. `api-football`-Zugangsdaten unangetastet, keine
  aktive Nutzung (Ondos Auftrag).
  **Verifiziert:** `node --check` bestanden · **30 Prüfungen** an den echten, wortgleich aus
  `beta.html` herausgeschnittenen Funktionen (kein Nachbau), gegen fünf live abgerufene, echte
  ESPN-Antworten (nicht erfundene Fixtures) — u. a. der Celje/Slovan-Fall aus der elften
  Fehlerart (ESPN liefert unabhängig exakt den dort extern belegten Wert: HZ 1:1, 90-Min. 1:1,
  n.Verl. 1:2) und der Elfmeter-Fall (0:0 nach 90 Minuten, 2:3 n.E. — die Formel liefert 0:0,
  nie die Elfmeterzahlen) — alle bestanden. `pruefe.py`: ALLES SAUBER. **Keine neuen
  Sprachschlüssel** (349 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION`
  weiter 18.
  **🔴 Status ausdrücklich NICHT auf „behoben" gesetzt:** Bestätigung durch einen echten
  Prüfzyklus am Gerät steht aus, ebenso die Entscheidung, ob/wie die UEFA- und
  openfootball-Lücke geschlossen wird.
  **🔴 Noch am selben Tag TEILWEISE ZURÜCKGENOMMEN (v19.14.1, Auftrag Ondo „KI-Notnagel zurück
  auf drei Läufe"):** `REF_MIN_LAEUFE=1` galt nur eine Lieferung lang. Einzelheiten bei
  „Beta: v19.14.1" in `STAND.md` — hier nur der Verweis, damit dieser Absatz nicht den falschen
  Eindruck erweckt, der Notnagel liefe weiterhin mit einem einzigen Lauf.

- **Beta zuvor: v19.13.3** (`beta.html`, geliefert 14.9.2026) — **football-data.org von Live-Aufruf
  auf Archivdatei-Lesen umgestellt (Backlog-Punkt 81, Ondos Auftrag).** Anlass: Die
  CORS-Diagnose (13.9.2026) zeigt, dass football-data.org Browserzugriffe strukturell
  blockiert; die tägliche GitHub-Actions-Automatik sammelt dieselbe Quelle aber bereits
  erfolgreich in öffentlich lesbaren Monatsdateien unter `daten/schiri-ergebnisse/`.
  **Gebaut:** Neue Funktion `footballDataArchivLesen(ziel)` ersetzt `footballDataLauf()` als
  Strukturweg — liest die Monatsdateien per `fetch()` von `raw.githubusercontent.com` (kein
  Schlüssel nötig), wendet die unveränderte `strukturAbgleich()` darauf an, setzt `quelle` je
  Treffer auf die menschlich öffnbare GitHub-Seite der zuständigen Monatsdatei. Eine fehlende,
  per Netzwerkfehler unerreichbare oder kaputte Monatsdatei ergibt für diesen Monat ein leeres
  Ergebnis, kein Absturz. Weg-Bezeichner konsequent von `'football-data'` auf
  `'football-data-archiv'` umbenannt. `apiFootballLauf()`, `pruefAuswerten()`,
  `refEinigkeit()` unangetastet. `footballDataLauf()` (alter Live-Aufruf) bewusst NICHT
  gelöscht, nur als „NICHT AUFGERUFEN" markiert.
  **🔴 Eigener Fehler im ersten Entwurf, noch vor der Auslieferung im eigenen Trockentest
  gefunden und behoben:** Ein unbedingter Push von `'football-data-archiv'` in
  `strukturAnbieter` (Begründung im ersten Entwurf: der Archiv-Weg braucht keinen Schlüssel,
  macht also immer einen echten Versuch) hätte die echte `einAnbieter`-Warnung („⚠ Nur ein
  Anbieter verfügbar") **dauerhaft unerreichbar** gemacht, unabhängig von der Konfiguration.
  Behoben: zählt jetzt nur als eigener Anbieter, wenn es in der jeweiligen Runde tatsächlich
  einen Treffer geliefert hat (`fdErg.length`) — `api-football` bleibt unverändert am
  gespeicherten Schlüssel.
  **Verifiziert:** `node --check` bestanden · **18 neue Prüfungen** an den echten, wortgleich
  herausgeschnittenen Funktionen (kein Nachbau) — 14 an `footballDataArchivLesen()` (Spiel in
  der Archivdatei · Spiel nicht in der Archivdatei · Stapel über zwei Monate gleichzeitig ·
  Datei noch nicht angelegt (404) · kaputtes JSON · Netzwerkfehler · leerer Stapel), 4 an der
  `einAnbieter`-Logik nach dem Fix — alle bestanden. `pruefe.py`: ALLES SAUBER. **Keine neuen
  Sprachschlüssel** (349 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION`
  weiter 18.
  **🔴 Status ausdrücklich NICHT auf „behoben" gesetzt:** Backlog-Punkt 81 bleibt auf OFFEN,
  Bestätigung durch einen echten Prüfzyklus am Gerät steht aus — wie schon bei der
  Wege-Neuzusammensetzung (v19.13.2).

- **Beta zuvor: v19.13.2** (`beta.html`, geliefert 13.9.2026) — **Schiedsrichter-Wege neu
  zusammengesetzt, zweiphasig statt gleichzeitig (Backlog-Punkt 81, Ondos Auftrag).**
  **Ursache, mit Codezitat belegt:** Seit dem Ausbau von Punkt 9 (v19.8.24, 11.9.2026) belegten
  API-Football und football-data.org zwei der drei festen Plätze in jeder Prüfrunde,
  unabhängig davon, ob sie für die gerade geprüften Spiele tatsächlich etwas fanden. Lieferten
  beide nichts (bestätigt: API-Football gesperrt, geteilte Cloud-Adresse; football-data.org
  deckt nur 12 grosse Wettbewerbe ab), blieb pro Runde nur **ein** echter Lauf übrig —
  `pruefAuswerten()` verlangt aber mindestens drei brauchbare Läufe, bevor überhaupt etwas
  übernommen wird. Diese Schwelle war damit strukturell nie erreichbar. Belegt im Rohtext vom
  12.9.2026: Gemini fand in sieben von sieben Versuchen ein stimmiges, belegtes Ergebnis für
  alle zehn geprüften Spiele — die App meldete trotzdem durchgehend „nicht gefunden".
  **Entschieden (Ondo, 13.9.2026):** kein automatisches Rückschreiben der App in ein Archiv im
  Repo — das Risiko eines Schreibzugriffs vom Browser aus wiegt schwerer als der Nutzen. API-
  Football und football-data.org bleiben reine Live-Abfragen vom eigenen Gerät, wie bisher. Die
  tägliche GitHub-Actions-Automatik bleibt unverändert bestehen, wird von `beta.html` weiterhin
  bewusst nicht gelesen — kein offener Punkt mehr, sondern eine getroffene Entscheidung.
  **Gebaut:** `rundeLaufen()` fragt jetzt zweiphasig statt alle Wege gleichzeitig. Phase 1:
  beide Strukturquellen laufen für den ganzen Spiele-Stapel gleichzeitig. Phase 2: je Spiel
  wird gezählt, wie viele der zwei Quellen etwas fanden (0/1/2) — das **schlechteste** Spiel im
  Stapel bestimmt, wie viele KI-Läufe der ganze Stapel zusätzlich braucht (0 Treffer bei
  mindestens einem Spiel → alle drei KI-Wege wie vor dem 11.9. · kein Spiel mit 0, aber
  mindestens eins mit 1 → zwei KI-Wege · alle Spiele mit 2 → ein KI-Weg reicht). Einzelne
  Spiele können dadurch mehr als drei Läufe insgesamt bekommen — kein Fehler, `refEinigkeit()`
  wertet ohnehin alle vorhandenen guten Läufe aus. **`pruefAuswerten()` und `refEinigkeit()`
  ausdrücklich unverändert** — nur Zahl und Herkunft der Läufe je Spiel ändern sich, nicht die
  Auswertung selbst. Volle Einzelheiten (Beispielrechnung, neun geprüfte Fälle): Backlog-
  Punkt 81.
  **Ausdrücklich NICHT Teil dieser Lieferung:** `schiri-ergebnisse-holen.js`, die GitHub-
  Actions-Datei, die Monatsdateien im Repo — reine Änderung an `beta.html`. Keine neue
  Berechtigung, kein neuer Schlüssel, kein Schreibzugriff auf das Repo aus dem Browser.
  **🔴 Eigener Fehler im ersten Entwurf, noch vor der Auslieferung im eigenen Trockentest
  gefunden und behoben:** Die erste Fassung befüllte die KI-Wege mit `kiWege.slice(0,kiZahl)`
  — bei nur einem konfigurierten KI-Anbieter (z. B. Gemini ohne Sonnet-Schlüssel) hat `kiWege`
  aber nur zwei Einträge, `kiZahl` kann drei verlangen. `slice()` kappt in diesem Fall auf zwei
  Läufe, statt aufzufüllen — die Drei-Läufe-Schwelle in `refEinigkeit()` wäre dann in genau
  dieser Konstellation **nie** erreichbar gewesen: derselbe Fehler, den dieser Auftrag beheben
  soll, an neuer Stelle wieder eingebaut. Behoben durch Auffüllen mit Wiederholung
  (`kiWege[wi % kiWege.length]`), wie es die alte, jetzt ersetzte Logik auch tat.
  **Verifiziert:** `node --check` bestanden · **9 neue Prüfungen** an der echten, wortgleich
  aus `beta.html` herausgeschnittenen Zwei-Phasen-Logik (kein Nachbau) — 0/1/0-gemischt/1/2
  Strukturtreffer je Spiel, die Randfälle „keine Strukturquelle konfiguriert" (muss exakt das
  alte Vor-11.9.-Verhalten ergeben) und „nur ein KI-Anbieter" bei kiZahl 2 UND 3 mit je nur
  einem bzw. zwei verfügbaren KI-Wegen (der oben beschriebene Auffüll-Fall, `einAnbieter` muss
  dabei weiterhin true bleiben, solange keine echte Strukturquelle mitläuft) — alle neun
  bestanden. `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (349 unverändert —
  reine Ablauflogik, keine neuen Texte). **Kein Schnitt in der Messreihe** — reine
  Auswertungslogik des Schiedsrichters, nicht der Vorhersagen selbst. `APP_VERSION` weiter 18.
  **🔴 Status ausdrücklich NICHT auf „behoben" gesetzt, auch wenn alle Prüfungen sauber sind
  (Ondos ausdrückliche Auflage):** Backlog-Punkt 81 bleibt auf OFFEN, mit dem Vermerk „Wege-
  Neuzusammensetzung ausgeliefert, Bestätigung durch einen echten Prüfzyklus am Gerät steht
  aus". Erst wenn Ondo „Ergebnisse prüfen" tatsächlich laufen lässt und bisher
  hängengebliebene Spiele jetzt ein Ergebnis bekommen, gilt der Punkt als bestätigt.
- **Beta zuvor: v19.13.1** (`beta.html`, geliefert 13.9.2026) — **Echter Schiedsrichter-Bug behoben
  (Backlog-Punkt 81).** Ondo, nach einem fehlgeschlagenen Prüflauf: „Heutiger Prüflauf hat
  nicht funktioniert beim ersten Mal", mit Screenshot („0 von 10 gefunden", 144 s) plus
  Rohdaten (Schiedsrichter-Rohantworten, Messdaten-Export, ChatGPTs Gegenprüfung) mitgeschickt.
  **Fund, am Code UND an den echten Rohdaten belegt:** `rundeLaufen()` wählte pro Anfrage
  immer dieselben ersten fünf offenen Spiele (`posten.filter(...).slice(0,5)`). Blieben diese
  wiederholt ohne Ergebnis, kamen die übrigen Spiele in keiner der bis zu sechs Runden je an
  die Reihe — in den Rohdaten sichtbar als „kein refRoh gespeichert" bei vier von zehn Spielen,
  nicht erfolglos versucht, sondern nie versucht.
  **Behoben:** Noch nie gefragte Spiele gehen jetzt vor Wiederholungen bereits gefragter — eine
  Sortierzeile vor dem bestehenden `slice(0,5)`, keine Änderung an der 3-von-3-Regel oder
  sonst einer inhaltlichen Entscheidung.
  **Zweiter Fund beim selben Nachsehen, zur Liga-Abdeckung von API-Football/football-data.org
  (Ondos Auftrag „Ja nachsehen" zur vorherigen Diagnose):** Die Abdeckungslücke ist gross (58
  verschiedene Wettbewerbe in Ondos echten Messdaten, grösstenteils ausserhalb der rund 12
  grossen Ligen) — UND der Weg IM BROWSER (`apiFootballLauf()`/`footballDataLauf()`, vom
  Schiedsrichter selbst aufgerufen) wurde in 505 Messdaten- und 401 Rohdaten-Einträgen
  (30.7.–13.9.2026) kein einziges Mal tatsächlich genutzt, maschinell nachgezählt.
  ~~Das war die ganze Wahrheit zur strukturierten Quelle.~~ ~~🔴 BERICHTIGT 13.9.2026 …
  Es gibt eine ZWEITE, ganz andere Stelle … Der Schiedsrichter in `beta.html` liest diese
  Datei aber nirgends … echte, richtige Daten werden täglich gesammelt und nie benutzt.~~
  **🔴 ERNEUT BERICHTIGT, noch am selben Tag (Ondo: „Ich dachte das wäre schon klar und
  umgesetzt?"):** Die vorige Berichtigung war selbst unvollständig. Neben der täglichen
  Automatik gibt es eine DRITTE, bereits am 11.9.2026 gebaute Stelle — `apiFootballLauf()`/
  `footballDataLauf()` in `beta.html` (v19.8.24) —, die beide Datenbanken **direkt aus der
  App per Knopfdruck** abfragt und **bereits an den bestehenden „Ergebnisse prüfen"-Lauf
  gekoppelt ist**, genau nach der in dieser Sitzung mit Ondo festgelegten Vorgehensweise.
  Das war längst entschieden und gebaut (vollständig dokumentiert bei Backlog-Punkt 9,
  11.9.2026), keine neue Frage. Offen bleibt nur, warum diese Kopplung in echter Nutzung nie
  gegriffen hat — Einzelheiten und die zwei möglichen, unbewiesenen Gründe bei Backlog-Punkt 81.
  **Noch offen, ehrlich als Vermutung markiert:** Auch die ersten fünf Spiele des Laufs kamen
  trotz mehrfacher, inhaltlich übereinstimmender Wiederholungen nie zu einem Vorschlag — ein
  Verdacht auf stille Teilfehlschläge bei drei gleichzeitigen Anfragen an denselben Anbieter,
  nicht bewiesen, weil fehlgeschlagene Anfragen keine Spur hinterlassen.
  **Verifiziert:** `node --check` bestanden · **10 neue Prüfungen** an der echten,
  unveränderten `ergebnissePruefen()` sowie am wortgleichen Auswahl-Schnipsel · alle
  bestehenden Suiten erneut gelaufen, alle weiterhin bestanden · `pruefe.py`: ALLES SAUBER.
  **Keine neuen Sprachschlüssel.** Kein Schnitt in der Messreihe. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.13.0** (`beta.html`, geliefert 13.9.2026) — **Kriterium-(g)-Testwerkzeug gebaut
  (Backlog-Punkt 80).** Auftrag Ondo, direkt nach der Klärung von Kriterium (c): „Antwortkonsistenz
  (g): Teste. Aber Du musst klar definieren wann es fertig ist. Dann Schiedsrichter reparieren.
  Das ist dein Job."
  **Definition vor dem Bau festgelegt, nicht nachträglich:** bis zu 8 offene Spiele, 3
  Wiederholungen je Gehirn, ohne Marktlage (reine Antwort-Schwankung, nicht mit
  Recherche-Schwankung vermischt). Bestanden ab 90 % gleichbleibendem Tipp UND höchstens 10
  Prozentpunkten Spanne im Schnitt.
  **Gebaut:** `antwortkonsistenzLauf()` — nutzt `vorhersageGehirn()` unverändert wieder (wie
  der Trainingsraum), neuer Knopf unter Wettmodul → KI-Log → Daten.
  **Ehrliche Grenze:** Diese Code-Sitzung hat keinen Zugriff auf Ondos API-Schlüssel und kann
  den Lauf nicht selbst ausführen — er läuft über Ondos eigenes Gerät, wie jede andere echte
  Vorhersage. Gebaut ist das Werkzeug, das echte Ergebnis steht noch aus.
  **Nebenbei:** Backlog-Punkt 81 angelegt (Schiedsrichter reparieren, „das ist dein Job") —
  Diagnose begonnen, noch kein Codeaufwand.
  **Verifiziert:** `node --check` bestanden · **23 neue Prüfungen** an den echten,
  herausgeschnittenen Funktionen · alle bestehenden Suiten erneut gelaufen, alle weiterhin
  bestanden · `pruefe.py`: ALLES SAUBER. **10 neue Sprachschlüssel** (339 → 349). Kein Schnitt
  in der Messreihe. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.12.0** (`beta.html`, geliefert 12.9.2026) — **Kombi-Wette mit mehreren
  Vorhersagen verbinden (Backlog-Punkt 78), von Ondo freigegeben: „Punkt 78 freigegeben,
  bauen".** Fund, der zu diesem Punkt führte: Eine per Foto oder von Hand erfasste Kombi-Wette
  (mehrere Spiele, ein Einsatz, ein Ausgang) liess sich an keiner Stelle mit mehreren
  Vorhersagen verknüpfen — `kiWahlBlock()` kannte nur eine einzelne Auswahl.
  **Grundentscheidung, von Claude und ChatGPT unabhängig getragen (kein Widerspruch):** eine
  Wette bekommt eine **Liste** von KI-Log-Verknüpfungen (`state.bets[].kiProtokollIds`), keine
  Aufteilung in Teil-Einträge — Einsatz, Quote und Ausgang gehören zur gesamten Kombi, nicht zu
  einzelnen Legs.
  **Bewusst additiv gebaut, nicht die bestehende Auswahl umgebaut:** Die bisherige
  Einzelauswahl (`kiWahlBlock()`/`kiWahlUebernehmen()`, samt ihrem bestehenden Trockentest)
  bleibt unverändert die erste Verknüpfung. Ein neuer, separater Block
  (`kiWahlKombiBlock()`, per Kontrollkästchen statt Dropdown, weil eine Kombi mehr als eine
  Auswahl braucht) bietet zusätzliche Spiele an — erscheint erst ab zwei offenen Vorhersagen,
  sonst gäbe es nichts zu verbinden.
  **Rückwärtskompatibel:** `addBet()` schreibt das alte Einzelfeld `kiProtokollId` weiterhin
  genau dann, wenn nur eine Vorhersage verknüpft wurde — bestehender Code und der bestehende
  Trockentest sehen bei einer normalen Einzelwette keinen Unterschied. Das neue Feld
  `kiProtokollIds` trägt ab sofort die vollständige, kanonische Verknüpfung.
  **`lernWetten()` erweitert:** Eine Kombi zählt als „aus KI", sobald mindestens eine ihrer
  Verknüpfungen noch existiert; als „verwaist" nur, wenn keine mehr existiert — bei genau einer
  Verknüpfung (die weit überwiegende Mehrheit) identisch zum Stand davor.
  **Anzeige:** Herkunft zeigt 🧠🌱 bei einer Kombi aus verschiedenen Gehirnen („gemischt"),
  zusätzlich die Anzahl verknüpfter Vorhersagen ab zwei Legs.
  **Kleine Nachtrag-Korrektur in derselben Lieferung (Backlog-Punkt 44/77):**
  `state.trainingsraumSpiele` (Weg b) fehlte bisher in `MESS_FELDER` — war bis zur
  Trainingsraum-Nachbesserung immer leer, jetzt trägt Ondo dort echte Messdaten ein, die aus
  demselben Grund wie `trainingsraumProtokoll` in den Export gehören. Ergänzt.
  **Verifiziert:** `node --check` bestanden · **22 neue Prüfungen** an den echten,
  herausgeschnittenen Funktionen (`addBet()` mit Liste, Rückwärtskompatibilität des
  Einzelfelds, gemischte Herkunft, `lernWetten()` mit teilweise verwaisten Kombi-Legs,
  `kiWahlKombiBlock()`) · alle bestehenden Suiten erneut gelaufen, alle weiterhin bestanden ·
  `pruefe.py`: ALLES SAUBER. **2 neue Sprachschlüssel** (337 → 339). Kein Schnitt in der
  Messreihe. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.11.0** (`beta.html`, geliefert 12.9.2026) — **Trainingsraum-Nachbesserung
  (Backlog-Punkt 77), Ondos fünf Punkte nach Prüfung der Screenshots vom Trainingsraum-Bau:**
  1. **Fund behoben:** Die Karte „KI-Trefferquote" stand trotz des Umzugs in Fassung 106 weiterhin
     unter Finanzen — sie war beim ersten Umzug übersehen worden, weil sie technisch nicht zu den
     drei damals verschobenen Blöcken (Kalibrierung/Beobachtungen/gepaarter Vergleich) gehörte.
     Jetzt entfernt.
  2. **Platzierung erneut geändert, Fassung 106/107 damit zurückgenommen:** Ondo: „Mehr" gilt für
     alle Module, KI-Daten aber nur für Wetten. Kalibrierung, Beobachtungen, gepaarter Vergleich,
     Trainingsraum und die KI-Trefferquote stehen jetzt unter **Wettmodul → KI-Log → neuer
     Unter-Reiter „Daten"** statt unter „Mehr".
  3. **Weg (a) bestätigt, kein Codebedarf:** bleibt bei bereits bewerteten Spielen aus dem KI-Log,
     keine neuen Vorhersagen.
  4. **Neu gebaut — Auswahl statt reiner Automatik:** Für Weg (a) ein Datumsbereich
     (`trainVon`/`trainBis`, gleiches Muster wie der KI-Log-Filter) — leer bleibt „alle bewerteten
     Spiele", wie bisher. Für Weg (b) eine echte Eintragsmöglichkeit
     (`trainingsraumSpielHinzufuegen()`/`trainingsraumSpielLoeschen()`, Formular mit
     Team/Wettbewerb/Datum/Ergebnis) statt eines dauerhaft leeren Platzhalters — **der
     Datumsbereich wirkt nur auf Weg (a)**, Weg (b) wählt Ondo bereits einzeln beim Eintragen.
  5. **Ondos offene Frage beantwortet (kein Code):** ein eigenständiges Werkzeug ausserhalb der
     App wäre nicht einfacher — dieselbe Logik (Stichtag-Sperre, Ausschluss der letzten sechs
     eigenen Vorhersagen) müsste dort ohnehin neu gebaut werden, ohne Zugriff auf den bereits
     vorhandenen `state.kiProtokoll`. Bleibt in der App.
  **Kein Schnitt in der Messreihe** — reine Verschiebung/Erweiterung der Oberfläche, kein neues
  oder geändertes Datenfeld in `kiProtokoll`. **Verifiziert:** `node --check` bestanden ·
  Trainingsraum-Trockentest von 40 auf **59 Prüfungen** erweitert (neue Fälle: Zeitraum wirkt nur
  auf Weg (a), Weg (b) bleibt unberührt; Weg-(b)-Formular inkl. ISO→deutsch-Datumswandlung,
  Leerfeld-Fehler, Lösch-Bestätigung) · alle bestehenden Suiten (121 IndexedDB, 45 v19.8.28, 15
  Marktlage, weitere) erneut gelaufen, alle weiterhin bestanden · `pruefe.py`: ALLES SAUBER.
  **12 neue Sprachschlüssel** (325 → 337). `APP_VERSION` weiter 18.
- **Beta zuvor: v19.10.0** (`beta.html`, geliefert 12.9.2026) — **🔴 Websuche für echte Vorhersagen
  gebaut (Backlog-Punkt 79) — SCHNITT IN DER MESSREIHE.** Auftrag Ondo, nachdem klar wurde,
  dass Vorhersagen bis dahin nie recherchierten: „Ja für beides" (Websuche für echte
  Vorhersagen, keine für den Trainingsraum) plus „Bau eine Obergrenze für die Suchvorgänge je
  Lauf ein".
  **Strategie-Entscheidung (Ondos offene Frage: 3 Suchen je Gehirn und Spielliste, oder 1
  gesamte Suche?):** Claude empfiehlt und baut **eine gemeinsame Recherche** (`marktlageHolen()`)
  für die ganze Spielliste, beiden Gehirnen identisch mitgegeben — nicht je Gehirn getrennt.
  Begründung: Die Kalibrierung vergleicht, wie gut Sonnet und Flash ihre eigene Zuversicht
  einschätzen; das muss auf derselben Tatsachengrundlage gemessen werden, sonst käme ein Teil
  des Unterschieds nur aus Zufall (was jedes Gehirn zufällig gefunden hat), nicht aus eigener
  Einschätzung. Zusätzlich günstiger (eine Suche statt zwei) und nutzt `sonnetSuche()`
  unverändert wieder, die beim Schiedsrichter schon erprobt ist.
  **Obergrenze:** `MARKTLAGE_MAX_SUCHEN = 20` — als `max_uses` an das bestehende
  Anthropic-Websuche-Werkzeug durchgereicht, für die GANZE Liste (bis zu 10 Spiele), nicht je
  Spiel. Bei realen, nachgeprüften 10 US-Dollar je 1.000 Suchvorgänge (Anthropic) kostet ein
  Lauf dadurch höchstens rund 0,20 US-Dollar für die Recherche, unabhängig davon, wie viele
  Gehirne aktiv sind — echtes Geld, aber eine feste, bekannte Grenze statt einer offenen.
  **Ondo kann die Recherche jederzeit selbst abschalten** (`state.marktlageAktiv`, neuer
  Schalter unter „Mehr") — Standard an, seiner Entscheidung entsprechend.
  **Bekannte Grenze, offen benannt:** Ohne Sonnet-Schlüssel gibt es auch für Flash keine
  Recherche (dieselbe Bauweise wie beim Schiedsrichter).
  **Schnitt in der Messreihe, wie beim BTTS-Schnitt (v19.8.0):** Jeder neue `kiProtokoll`-
  Eintrag trägt jetzt `recherchiert:true/false` — echt, je Spiel einzeln, nicht nur ob die
  Recherche insgesamt lief. Einträge ohne dieses Feld (vor v19.10.0) hatten nie die Möglichkeit
  einer Recherche. Werte vor und ab dieser Version sind entsprechend nicht direkt vergleichbar.
  **Verifiziert:** `node --check` bestanden · **15 neue Prüfungen** an den echten,
  herausgeschnittenen Funktionen, darunter ein Regressionstest, der belegt: Ein Aufruf mit nur
  zwei Argumenten (wie jeder Trainingsraum-Aufruf) bleibt byte-identisch zum Stand davor — der
  Trainingsraum bleibt dadurch garantiert ohne Recherche, ohne dass dort etwas eigens
  abgeschaltet werden musste · die bestehenden 121 (IndexedDB), 45 (v19.8.28) und 40
  (Trainingsraum) Prüfungen erneut gelaufen, alle weiterhin bestanden · `pruefe.py`: ALLES
  SAUBER. **7 neue Sprachschlüssel** (318 → 325). `APP_VERSION` weiter 18.
- **Beta zuvor: v19.9.0** (`beta.html`, geliefert 12.9.2026) — **🔴 Trainingsraum gebaut (Backlog-Punkt
  77).** Auftrag Ondo: Gehirne an Spielen mit bereits bekanntem Ergebnis blind testen, ohne
  Erinnerung oder Websuche, mit einem sofort durchdachten Plan statt einer mechanischen Umsetzung
  seiner Vorgabe. **Wiederverwendung statt Neubau:** `vorhersageGehirn()` unverändert
  wiederverwendet — sie ruft beide Gehirne bereits ohne Websuche auf. Zwei Wege vorgesehen: Weg
  (a) bereits ausgewertete App-Spiele (aktiv), Weg (b) öffentlich bekannte historische Spiele
  (Datenstruktur `state.trainingsraumSpiele` steht, in v1 bewusst leer — Ondo: „müssen wir jetzt
  noch nicht aktiv nutzen"). **Zulassungsregel gegen Trainingsdaten-Kontamination:** eine von
  Claude gepflegte Tabelle `TRAININGSRAUM_STICHTAG` je Modell-Literal — ohne geprüften Stichtag
  null zulässige Spiele, keine geratene Grenze (Art. 11). **Ergebnis liegt sofort vor** (kein
  Schiedsrichter-Schritt nötig, das Ergebnis ist ja schon bekannt) — genau der Zeitgewinn, den
  Ondo wollte. Eigenes Protokoll `state.trainingsraumProtokoll`, streng getrennt vom Evidence
  Ledger, damit die echte Messreihe unberührt bleibt.
  **Zwei echte Fehlerquellen selbst gefunden, nicht von Ondo genannt — vor dem Bau behoben:**
  (1) `new Date(stichtag)` auf einem Datumstext ist unzuverlässig (`new Date('1.9.2026')` wird
  als 9. Januar gelesen) — beim eigenen Trockentest gefunden, behoben durch feste ISO-Daten
  (JJJJ-MM-TT) statt der Bibliotheksfunktion auf einem Text. (2) Ein Wettlauf-Risiko in der
  geteilten Variable `zuletztModell.gehirn`, die bei zwei potenziell gleichzeitigen Aufrufern
  (Live-Vorhersage und Trainingsraum) das `modell`-Feld am falschen Protokoll hätte ablegen
  können — behoben durch das ohnehin schon vorhandene, je Aufruf eigene Antwortfeld
  `modelVersion`, das jetzt genutzt wird statt der geteilten Variable (macht nebenbei auch
  Live-Einträge genauer). Zusätzlich ein geteiltes Sperr-Flag `kiAnfrageAktiv` gegen
  überlappende Läufe.
  **Selbstkritik-Fund während des Bauens:** Eine erste Fassung der „schon gesehen"-Regel schloss
  jedes Spiel aus, zu dem ein Gehirn *jemals* einen Eintrag hat — dadurch wäre der Weg-(a)-Vorrat
  fast leer gewesen, weil beide Gehirne meist gemeinsam dieselbe Spielliste beantworten. Korrigiert
  auf die tatsächliche Leckquelle: nur die letzten sechs eigenen Vorhersagen erscheinen im
  `fruehere`-Kontext von `vorhersageGehirn()` — ein Spiel ausserhalb dieses Fensters ist sicher.
  **Verifiziert:** `node --check` bestanden · **40 neue Prüfungen** an den echten, aus `beta.html`
  herausgeschnittenen Funktionen — darunter ein Regressionstest, der zwei „gleichzeitige"
  Gemini-Aufrufe mit unterschiedlicher Auflösungsreihenfolge nachbildet und belegt, dass jeder
  Aufruf sein eigenes Modell trägt · die bestehenden **121** Prüfungen (IndexedDB) und **45**
  (v19.8.28) erneut gelaufen, alle weiterhin bestanden · `pruefe.py`: ALLES SAUBER.
  **12 neue Sprachschlüssel** (306 → 318). Kein Schnitt in der Messreihe — das Trainingsraum-
  Protokoll ist von der echten Kalibrierung strikt getrennt. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.31** (`beta.html`, geliefert 12.9.2026) — **🔴 Korrigieren-Felder für Konto/Tipico-Stand
  gebaut, KI-Module von „Finanzen" nach „Mehr" verschoben.** Auftrag Ondo, nachdem er die
  gesamte Wetten-Historie gelöscht hat: „Korrigieren-Feld bauen" (für `state.eingezahlt` und
  `state.ausgezahlt`, nach demselben Muster wie das bestehende Startbilanz-Feld — Zahl
  eintragen, sofort gespeichert, ersetzt den bestehenden „+HINZUFÜGEN"-Weg nicht) und „Wenn es
  geht dann unter mehr" (Kalibrierung, Observation Layer und gepaarter Vergleich standen
  bisher unter Finanzen, jetzt unter Mehr, bei den übrigen KI-/Modelleinstellungen — reine
  Verschiebung der Anzeige, keine Rechnung geändert). Einzelheiten zu den zwei neuen
  Backlog-Punkten (77 „Trainingsraum", 78 „Kombi-Wette-Verknüpfung") stehen im Backlog, neuester
  Fassungsabschnitt (Punkt 45). **3 neue Sprachschlüssel** (`depKorrLabel`, `wdKorrLabel`,
  `korrHinweis`; 303 → 306). Kein Schnitt in der Messreihe. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.30** (`beta.html`, geliefert 12.9.2026) — **🔴 Umstieg von `localStorage` auf
  `IndexedDB` — dauerhafte Lösung statt Warngrenze.** Auftrag Ondo, wörtlich: „Ich will eine
  dauerhafte Lösung, keine Dateien Löschen!!" Anlass: Ondo bestätigt genug freien
  iPhone-Speicherplatz — das Problem lag nicht am Gerät, sondern an der festen, kleinen Grenze,
  die Safari `localStorage` je Webseite zuteilt (belegt: Fehlschlag bei 2.726 KB, v19.8.29).
  **Was sich ändert:** Alle Lese-/Schreibzugriffe auf die Messdaten laufen jetzt über
  `IndexedDB` — einen zweiten, in jedem modernen Browser eingebauten Speicherbereich, der
  einen Anteil des freien Geräte­speichers bekommt, um Grössenordnungen mehr als
  `localStorage`. **Kein Löschen nötig**, wie ausdrücklich verlangt.
  **Wie das technisch geht, ohne die Migrationslogik in `load()` anzufassen:** Zwei neue
  Helferpaare — `idbOeffnen()/idbLesen()/idbSchreiben()` sprechen direkt mit `IndexedDB`;
  `speicherLesen()/speicherSchreiben()` legen sich davor und fallen bei jedem Fehler
  (IndexedDB fehlt, ist blockiert, oder — beim allerersten Start nach diesem Update — noch
  leer) auf das alte `localStorage` zurück. `load()` und `save()` rufen ab jetzt nur noch
  diese zwei Funktionen auf; **jede der acht bestehenden `seedV`-Migrationen bleibt inhaltlich
  wortgleich**, nur ihr abschliessendes Sichern wartet jetzt auf das neue Paar.
  **`load()` musste async werden**, weil `IndexedDB` nur asynchron arbeitet (Ergebnis kommt
  über ein sogenanntes Promise etwas später zurück, nicht sofort wie bei `localStorage`) — der
  Programmstart am Dateiende wartet jetzt auf `load()`, bevor zum ersten Mal gezeichnet wird.
  Für jede aufrufende Stelle im übrigen Code ändert sich nichts: `save(); render();` bleibt
  überall unverändert aufrufbar, weil `render()` nie vom Ergebnis des Speicherns abhängt.
  **Sicherheitsnetz bleibt vollständig erhalten:** Scheitert am Ende auch `IndexedDB`
  *und* der `localStorage`-Rückfall (z. B. weil beide Speicher wirklich voll sind), erscheint
  derselbe rote Dauerbalken wie in v19.8.28/29 — dieser Fall ist jetzt nur ungleich
  unwahrscheinlicher geworden.
  **Ein echter Fund im eigenen Testaufbau dabei, behoben:** Ohne eine zusätzliche Zeile hätte
  `load()` nur dann in den neuen Speicher geschrieben, wenn eine der acht Migrationen
  tatsächlich etwas ändert — bei praktisch jedem, der die App schon länger nutzt (`seedV`
  bereits auf dem neuesten Stand), wäre das **nie** der Fall gewesen, und die Übernahme in den
  grösseren Speicher hätte sich zufällig bis zur nächsten anderen Aktion verzögert. Jetzt
  schreibt `load()` am Ende **immer einmal**, unabhängig davon, ob eine Migration lief.
  **Die Speicheranzeige zeigt jetzt eine echte Zahl, keine Schätzung mehr:** Statt der
  bisherigen, geratenen Bytegrenze fragt `speicherQuote()` den Browser selbst über
  `navigator.storage.estimate()` — Teil der Storage-API, in Safari seit iOS 13 vorhanden —
  nach seiner **wirklichen** Grenze auf **diesem** Gerät. Kennt der Browser sie nicht, wird
  nur die reine Grösse angezeigt, keine erfundene Prozentzahl (Art. 14).
  **🔴 Wichtiger, unvermeidbarer Schritt für Ondo, einmalig:** Diese Umstellung kann nicht
  automatisch den Stand übernehmen, der jetzt nur im Arbeitsspeicher seines Browsers lebt und
  nie erfolgreich in `localStorage` geschrieben wurde (das ist exakt das Problem, das zu dieser
  Umstellung geführt hat) — ein Codeupdate erreicht kein laufendes Browserfenster rückwirkend.
  Nach dem Laden der neuen Version zeigt die App deshalb zunächst wieder den letzten
  **tatsächlich gespeicherten** (älteren) Stand. **Ondo muss danach einmalig seine zuletzt
  exportierte Sicherungsdatei über „Sicherung laden" einspielen**, damit der aktuelle Stand in
  den neuen, grossen Speicher gelangt — danach läuft alles automatisch weiter.
  **Verifiziert:** `node --check` bestanden · **31 neue Prüfungen** an den echten,
  herausgeschnittenen Funktionen gegen eine selbstgebaute, aber echt asynchrone
  IndexedDB-Nachbildung (Node kennt kein natives IndexedDB) — darunter der Vorrang von
  IndexedDB vor `localStorage`, der vollständige Rückfall bei fehlendem IndexedDB, der
  Doppel-Fehlschlag-Fall (beide Speicherwege scheitern → Alarm wie bisher), und eine
  Nachbildung von Ondos echtem 2.726-KB-Fall · die bestehenden **57** Prüfungen zu v19.8.28/29
  erneut gelaufen, davon 2 (die alte, jetzt gegenstandslose `SPEICHER_WARNGRENZE`-Prüfung)
  entfernt statt kaputt stehen gelassen, macht **121 Prüfungen insgesamt, alle bestanden** ·
  `pruefe.py`: ALLES SAUBER.
  **1 neuer Sprachschlüssel** (`speicherVon`; 302 → 303). **Kein Schnitt in der Messreihe** —
  reine Speichertechnik, keine gemessene Grösse ist betroffen. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.29** (`beta.html`, geliefert 12.9.2026) — **🔴 echter Beleg statt Schätzung: die
  Speicher-Warngrenze war zu hoch.** Ondo hat die neue Speicheranzeige aus v19.8.28 in echtem
  Einsatz getroffen — sein Browser lehnte das Speichern bereits bei **2.726 KB (2,7 MB)**
  ab (Bildschirmfoto, 12.9.2026, der rote Warnbalken stand bereits, „Belegter Speicher" zeigte
  genau diesen Wert im selben Moment). Die alte Warngrenze von 3 MB (v19.8.28, ausdrücklich als
  ungeprüfte, vorsichtige Schätzung benannt) lag damit **über** der echten Wand — die
  Frühwarnung „wird eng" wäre nie gekommen, der Balken erschien erst, als das Speichern
  bereits scheiterte. **Jetzt 2 MB**, mit echtem Sicherheitsabstand unter dem belegten
  Fehlschlag, nicht nur knapp darunter (Arbeitsregel H: jetzt mit Beleg statt Herleitung).
  **Ein Fund am eigenen Testaufbau dabei:** Der Trockentest zu v19.8.28 hatte
  `SPEICHER_WARNGRENZE` in der Testumgebung selbst hartcodiert auf 3 MB gesetzt, statt die
  echte Konstante aus `beta.html` zu übernehmen — die 55 Prüfungen liefen also unbemerkt gegen
  einen Test-Zwilling, nicht gegen den echten Wert. Behoben: Die Konstante wird jetzt wörtlich
  aus `beta.html` gezogen, wie der übrige Testcode auch. **Zwei neue Prüfungen bilden Ondos
  echten Fall nach** (2.726 KB, `eng` muss jetzt `true` sein — mit der alten 3-MB-Schätzung
  wäre das falsch gewesen). **Kein neuer Sprachschlüssel, kein Schnitt in der Messreihe.**
  `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.28** (`beta.html`, geliefert 11.9.2026) — **die drei Funde der Prüfung behoben
  und die Lernkette fertiggebaut: Backlog-Punkt 75, Teil 3, Observation Layer.**
  Auftrag Ondo: „mach bei allen Punkten was nötig ist damit es sauber läuft, bau einfach weiter".
  **Erstens, Backlog-Punkt 64 geschlossen (zweiter und dritter Fund, dieselbe Stelle):**
  `pruefAnwenden()` übernimmt jetzt **Halbzeit- und Verlängerungsstand** statt sie zu verwerfen —
  der Schiedsrichter lieferte sie, `refLaufPruefen()` rechnete sie gegen den Endstand,
  `pruefBlock()` zeigte sie Ondo vor dem Übernehmen, und dann gingen sie verloren. Eine **leere**
  Angabe entfernt das Feld, statt einen leeren Text zu speichern. Ausserdem wird
  `ergebnisQuelle` beim Überschreiben **entfernt**: Das Ergebnis kommt ab dann vom Lauf dieser
  App, die Kennzeichnung „von Hand eingetragen" wäre eine Falschangabe (Art. 14).
  **Zweitens, Rückfrage vor dem Löschen** in `delBet()` und `logLoeschen()` — mit dem Spielnamen
  in der Frage, damit sichtbar ist, **was** gelöscht wird, nicht nur **dass**.
  **Drittens, der Speicher wird sichtbar:** Ein gescheitertes Speichern verschwand bisher nach
  1,5 Sekunden; jetzt bleibt ein roter Balken über jeder Ansicht stehen, bis ein Speichern wieder
  gelingt, und meldet sich **einmal** mit einem Hinweisfenster (nicht bei jedem weiteren Klick).
  Die Sicherungskarte nennt den belegten Speicher in KB, **gemessen** an genau der Zeichenkette,
  die `save()` schreibt. **Die Warngrenze von 3 MB ist ausdrücklich selbst gesetzt, keine
  Browser-Tatsache** — was Safari auf Ondos iPhone wirklich zulässt, kann eine Code-Sitzung ohne
  dieses Gerät nicht feststellen (Art. 11).
  **Viertens, der Observation Layer (Lernkette Teil 3, Backlog-Punkt 75).** Neuer Block „Was die
  Daten sagen" in den Finanzen, unter der Kalibrierung. Er beantwortet die einzige Frage, die
  beim nächsten Tipp hilft — was sich bisher als wahr herausgestellt hat — und sagt ausdrücklich
  „zu wenig Daten", wo die Grundlage zu dünn ist. **Die Auflage aus `Ondo-Core-Architektur.md` 1c
  ist eingelöst und maschinell belegt:** `lernGrundlage()` schliesst geparkte Einträge und solche
  mit `refEinigkeit` (nur „2 von 3") aus — genau die zwei Felder, auf die die Auflage am
  11.9.2026 festgenagelt wurde. **Offen benannt:** Der Observation Layer rechnet dadurch auf
  einer **kleineren** Grundlage als die Kalibrierungsanzeige darüber; die Zahlen der zwei
  Bereiche dürfen abweichen, und das ist gewollt — dort wird gemessen, hier wird gelernt.
  Vier Beobachtungen: Selbsteinschätzung je Gehirn · schwächster Markt (ein Markt unter zehn
  Aussagen bestimmt das Urteil nicht) · **trägt hohe Zuversicht?** · Wetten aus einer Vorhersage
  gegen von Hand gesetzte. Die letzte schliesst den Bogen zum Decision Ledger und **fängt die bei
  Teil 2 benannte Stelle ab**: Eine Wette, deren `kiProtokollId` ins Leere zeigt, wird eigens
  gezählt und in **keine** der beiden Gruppen geschoben. Schwellen: ab 20 bewerteten Aussagen
  „belegt", ab 10 „Hinweis", darunter wird nichts behauptet.
  **Verifiziert:** `node --check` bestanden · Trockentest mit **66 neuen Prüfungen** an den
  echten, aus `beta.html` herausgeschnittenen Funktionen (55 an der Rechenlogik, 11 als
  Rauchtest am neuen Anzeigeblock — reiner Anzeigecode war bisher von keinem Test gedeckt), darunter der Beleg, dass geparkte und
  2-von-3-Einträge die Beobachtung nachweislich **nicht** verschieben, und dass ein zweites
  Scheitern beim Speichern kein zweites Fenster öffnet · die bestehenden **64** Prüfungen erneut
  gelaufen, alle weiterhin bestanden · `pruefe.py`: ALLES SAUBER. **Ein Fehlschlag im
  Prüfstand selbst offen benannt:** Vier Prüfungen scheiterten zunächst, weil in der
  Testumgebung der Speicherschlüssel `KEY` fehlte — ein Fehler des Prüfstands, nicht des Codes;
  eine zusätzliche Prüfung nagelt das jetzt fest, damit derselbe stille Fehlschlag nicht
  irgendwann als Codefehler gelesen wird. **23 neue Sprachschlüssel** (279 → 302).
  **Kein Schnitt in der Messreihe** — die Kalibrierungsrechnung ist unangetastet.
  `APP_VERSION` weiter 18.
- **🔴 Vollständige Prüfung von `beta.html`, 11.9.2026 (Fassung 100) — keine Codeänderung.**
  Ondos Auftrag: „Beta vollständig und gründlich auf Fehler /Lücken komplett prüfen, wenn alles
  perfekt ist, dann weiter bauen." Geprüft wurde die ganze Datei (3764 Zeilen, 139 Funktionen,
  279 Sprachschlüssel je Sprache), nicht nur das zuletzt Gebaute. **Kein Codefehler gefunden.**
  Gefunden wurde ein **Widerspruch in der eigenen Buchführung** (Fehlerart C4): Die Schema-Tabelle
  in `Ondo-Core-Architektur.md` 1c beschrieb `ergebnisHalbzeit`/`ergebnisVerl` als „vom
  Schiedsrichter nachgetragen"; `pruefAnwenden()` schreibt aber ausschliesslich
  `ergebnisHeim`/`ergebnisGast`, und der Backlog führt genau das seit Punkt 64 als offenen
  Befund. Berichtigt in `Ondo-Core-Architektur.md` Fassung 0.7. **Drei Lücken benannt, keine
  behoben** (Art. 8 — Behebung braucht Ondos Auftrag): `pruefAnwenden()` räumt beim Überschreiben
  `ergebnisQuelle`/`ergebnisHalbzeit`/`ergebnisVerl` nicht weg (zurzeit nicht erreichbar, siehe
  Backlog-Punkt 64, dritter Fund) · `delBet()` und `logLoeschen()` löschen ohne Rückfrage,
  während die zwei anderen unumkehrbaren Schritte der App vorher fragen · die Speichergrenze des
  Browsers wird nirgends sichtbar. Beide letzten stehen jetzt unter „Technische Schuld".
  **Ohne Befund geprüft, maschinell statt angenommen:** `node --check` · 279 Sprachschlüssel in
  allen drei Sprachen, keiner doppelt, keine Lücke · kein `t('…')` ins Leere · jedes
  `getElementById` trifft ein vergebenes `id` · jede aus `onclick`/`onchange` gerufene Funktion
  existiert · jedes gelesene `state`-Feld wird geschrieben · Geldrechnung stimmt ·
  `marktUrteil()` bei ganzzahligen Toren lückenlos · Ergebniszahlen werden nie als Text
  verglichen · jeder von einem Gehirn gelieferte Text wird vor dem Anzeigen mit `esc()`
  entschärft. **Offen benannt:** Die ersten drei Fassungen des Prüfwerkzeugs meldeten nur
  Fehlalarme; kein Befund oben stammt aus einem ungeprüften Werkzeug-Treffer — jeder ist an der
  Codestelle selbst nachgelesen.
- **Beta zuvor: v19.8.27** (`beta.html`, geliefert 11.9.2026) — **Nachprüfung auf Ondos Verlangen,
  ein eigener Fehler gefunden und behoben.** Vor dem Weiterbauen am Observation Layer wurde der
  ganze Bau seit dem Evidence Ledger geprüft. Gefunden: `kiWahlUebernehmen()` aus v19.8.26 schrieb
  beim Übernehmen einer Vorhersage den getippten **Spielstand** in das **Tipp-Feld** der Wette —
  falsche Bedeutung, denn `tipp` hält fest, welche Wette gesetzt wurde, und wird dem
  Schiedsrichter beim Prüfen einer Wette vorgelegt. Das Feld bleibt jetzt unberührt, nur der
  Spielname wird übernommen. **Verifiziert:** `node --check` bestanden · **64 Trockentest-
  Prüfungen** über sechs Reihen, alle bestanden, darunter eine neue Reihe mit 7 Prüfungen an
  `kiWahlUebernehmen()` mit gestubbtem DOM · maschinell geprüft, dass der neue Feldname
  `kiProtokollId` die Geheimfeld-Sperre aus Backlog-Punkt 44 nicht auslöst und `b.fromKI`
  nirgends sonst gelesen wird · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel**
  (279 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.26** (`beta.html`, geliefert 11.9.2026) — **Backlog-Punkt 75, Teil 2:
  Decision Ledger gebaut.** Fund beim Festlegen des Evidence Ledgers (Teil 1, v19.8.25):
  `state.bets` trug die Felder `fromKI`/`herkunft` seit jeher, `addBet()` setzte sie aber
  immer auf `false`/`null` — keine echte Verknüpfung zu einer Empfehlung. Neues Auswahlfeld im
  Wette-Formular „Aus einer Vorhersage übernehmen", listet offene, nicht geparkte
  `kiProtokoll`-Einträge auf. **Bewusst keine automatische Text-Zuordnung über den
  Spielnamen** — Ondo wählt selbst (Arbeitsweise-Grundsatz „Auswählen ist eine Entscheidung,
  Ablesen nicht", dieselbe Überlegung wie beim Quoten-Knopf). Verknüpfung läuft über die feste
  `id`, nicht über den Namenstext. Neues Feld `kiProtokollId` an jeder Wette. Kleine Anzeige in
  der Wette-Historie, wenn eine Wette so verknüpft ist. **Verifiziert:** `node --check`
  bestanden · Trockentest mit **13 Prüfungen** an der echten, herausgeschnittenen `addBet()`
  (unter anderem: unbekannte/veraltete Auswahl fällt sicher auf „manuell" zurück, kein
  Absturz) und **7 Prüfungen** an `kiWahlBlock()` · `pruefe.py`: ALLES SAUBER. **3 neue
  Sprachschlüssel** (276 → 279). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.25** (`beta.html`, geliefert 11.9.2026) — **Backlog-Punkt 0b gebaut:
  Widerspruchsquote je Markt.** Wiederaufnahme war seit 7.9.2026 entschieden, eine
  Umsetzungsfrage stand vor dem Bau noch offen: eine gemeinsame Zahl über alle drei Märkte
  oder je Markt getrennt? Entschieden (11.9.2026, Ondo): **getrennt** — der Markt „Sieger"
  wird immer aus dem Tipp abgeleitet, nie eigens gefragt, kann also strukturell nie einen
  Widerspruch zeigen; eine gemeinsame Zahl hätte echte Widersprüche bei „Tore" und „beide
  treffen" künstlich verwässert. Neue reine Funktion `calcWiderspruch(quelle)` — **rückwirkend
  aus vorhandenen Daten**, keine neue Messung: das Kennzeichen `m.gedreht` (seit jeher in
  `maerkteBauen()`) markiert bereits genau den Fall, dass die eigens gefragte Prozentzahl der
  vom Tipp implizierten Seite widerspricht. Bewusst **kein Status-Filter** (anders als
  Kalibrierung/Brier/Streuung) — der Widerspruch entsteht beim Vorhersagen selbst, nicht erst
  beim späteren Prüfen des Ergebnisses. Anzeige in der bestehenden Kalibrierungstabelle, je
  Gehirn. **Verifiziert:** `node --check` bestanden · Trockentest mit **12 Prüfungen** an der
  echten, herausgeschnittenen `calcWiderspruch()` — darunter der Beleg, dass der Markt „Sieger"
  selbst bei irrtümlich gesetztem `gedreht` nicht mitgezählt wird, und dass Einträge aus der
  Zeit vor v19 aussen vor bleiben · `pruefe.py`: ALLES SAUBER. **1 neuer Sprachschlüssel**
  (275 → 276). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.24** (`beta.html`, geliefert 11.9.2026) — **Backlog-Punkt 9, Ausbau: API-Football
  und football-data.org per Knopfdruck mit dem Prüflauf gekoppelt.** Ondos Vorschlag, nach der
  Sperre bei der GitHub-Automatik am selben Tag (geteilte Cloud-Adresse) — vom eigenen Gerät aus
  ist das kein Problem. Zwei neue Schlüsselfelder `state.apiFootballKey`/`state.footballDataKey`,
  gleiches Muster wie die bestehenden. Im „Ergebnisse prüfen"-Lauf gehen beide strukturierten
  Quellen jetzt den KI-Läufen voran (Reihenfolge in `wege`), wenn ein Schlüssel gespeichert ist —
  fehlt ein Spiel bei beiden, geht der verbleibende Platz wie bisher an die KI-Suche.
  `refLaufPruefen()`/`refEinigkeit()` (Backlog-Punkt 68) **unverändert** — die neuen Läufe liefern
  Ergebnisse in genau demselben Format wie ein KI-Lauf, die bestehende Einigkeitsregel sieht
  keinen Unterschied. Neue reine Funktionen `datumIso()` und `strukturAbgleich()`, dazu
  `apiFootballLauf()`/`footballDataLauf()` für den eigentlichen Abruf. football-data.org mit
  eigenem Filter auf die 12 zugesicherten Wettbewerbe (derselbe Fund wie bei der GitHub-Automatik:
  die Schnittstelle lieferte im Test auch Spiele ausserhalb der Liste). **Verifiziert:**
  `node --check` bestanden · Trockentest mit **18 Prüfungen** an der echten, herausgeschnittenen
  `strukturAbgleich()`/`datumIso()` und **7 Prüfungen** an der echten `wege`-Aufbaulogik (inkl.
  Beleg, dass sich ohne strukturierte Schlüssel exakt das alte Verhalten ergibt) · `pruefe.py`:
  ALLES SAUBER. **8 neue Sprachschlüssel** (267 → 275). **Kein Schnitt in der Messreihe.**
  `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.23** (`beta.html`, geliefert 10.9.2026) — **Backlog-Punkt 9, Knopfdruck-Teil
  gebaut: Quoten-Automatik.** Neues Schlüsselfeld `state.oddsKey` (The Odds API, gleiches
  Muster wie `apiKey`/`geminiKey`, NUR auf dem Gerät). Im Wette-Formular: Liga wählen, Quoten
  abrufen, aus einer kurzen Liste bevorstehender Spiele die passende Zeile anklicken — füllt
  das Quote-Feld, ohne den Rest des Formulars zu verwerfen. **Bewusst keine automatische
  Zuordnung** zu einem bestimmten Spiel oder Buchmacher — Ondo sieht die Liste und wählt
  selbst. Vorfrage zur Quotenabdeckung per Websuche geprüft: „The Odds API" deckt League of
  Ireland und Allsvenskan nachweislich ab (nicht erschöpfend für jede Liga geprüft), 500
  kostenlose Abrufe/Monat. Technisch geklärt: der Knopfdruck-Teil braucht kein GitHub
  Actions, nur ein reiner Browser-Abruf wie bei Gemini/Anthropic schon üblich — Actions
  bleibt der Zeitsteuerung vorbehalten (eigener, noch nicht gebauter Schritt). **Verifiziert:**
  `node --check` bestanden · Trockentest mit **13 Prüfungen** an der echten, herausgeschnittenen
  `oddsListeAufbereiten()` · `pruefe.py`: ALLES SAUBER. **11 neue Sprachschlüssel** (256 → 267).
  **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.22** (`beta.html`, geliefert 10.9.2026) — **Backlog-Punkt 68, dritter Lauf auf
  `claude-sonnet-5` umgestellt — erste Anwendung des neuen Arbeitswegs aus Backlog-Punkt 74
  (ChatGPT als geprüfter Code-Zulieferer, Ondos Auftrag).** In `sonnetSuche()`:
  `claude-sonnet-4-6` → `claude-sonnet-5` (rund ein Drittel weniger pro Token), Websuche auf
  `web_search_20260209` (Dynamic Filtering) gehoben, `output_config:{effort:'low'}` ergänzt.
  ChatGPT lieferte die Funktion mit genau den drei angeforderten Änderungen, byte-für-byte
  gegen die Spezifikation geprüft. **Dabei gefunden und berichtigt:** das Label
  `modellGenutzt` (für `refRoh`, Backlog-Punkt 64) hing fest an `'claude-sonnet-4-6'` und war
  nach der Umstellung nicht mehr korrekt — auf `'claude-sonnet-5'` berichtigt, nicht Teil des
  ChatGPT-Auftrags. **Verifiziert:** `node --check` bestanden · Trockentest mit **15
  Prüfungen** an der echten, eingesetzten Funktion (gestubbter `apiCall()`, kein echter
  Netzwerkaufruf) · `pruefe.py`: ALLES SAUBER. **Ausdrücklich nicht geprüft und hier nicht
  behauptet:** ob Sonnet 5 tatsächlich weniger kostet oder genauso gut funktioniert — das
  zeigt erst der echte Betrieb (Stabilitätsregel), diese Sitzung hat keinen Zugriff auf
  Ondos API-Schlüssel oder Abrechnung. Einzelheiten zum Arbeitsweg bei Backlog-Punkt 74.
  **Keine neuen Sprachschlüssel** (256 unverändert). **Kein Schnitt in der Messreihe.**
  `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.21** (`beta.html`, geliefert 10.9.2026) — **Backlog-Punkt 34 (Brier-Score) und
  35 (Streuungsangabe) gebaut, beide seit 7.9.2026 entschieden.** Zwei neue reine Funktionen,
  `calcBrierScore(quelle)` und `calcStreuung(quelle)` — eigene, unveränderte Sammelschleifen
  wie `calcKalibrierung()`, das selbst unangetastet bleibt. Brier-Score: `(p/100 − Treffer)²`
  je bewerteter Aussage, gemittelt. Streuung: Bootstrap über 600 Ziehungen (dasselbe Verfahren
  wie Chat 12s Nachrechnung vom 14.8.2026), 90-%-Bereich als 5./95. Perzentil, eigene neue
  Hilfsfunktion `abwAusPunkten()`. Beide in der bestehenden Kalibrierungstabelle angezeigt
  (Finanzen-Tab), nicht als eigene Zeile. **Verifiziert:** `node --check` bestanden ·
  Trockentest mit **20 Prüfungen** an den echten, aus `beta.html` herausgeschnittenen
  Funktionen, darunter ein von Hand nachgerechnetes Beispiel und der Beleg, dass
  `calcKalibrierung()` nach den neuen Aufrufen weiterhin dasselbe liefert (Regression) — fünf
  Wiederholungen des ganzen Laufs bestanden, wegen des echten Zufalls in `calcStreuung()` ·
  `pruefe.py`: ALLES SAUBER. **2 neue Sprachschlüssel** (`calibBrier`, `calibSpread`). **Kein
  Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.20** (`beta.html`, geliefert 7.9.2026) — **Backlog-Punkt 73 ZURÜCKGESETZT auf den Stand vor diesem Punkt, nach vorab vereinbarter Regel. Der Punkt bleibt 🔴 OFFEN.** Kandidat 4 (`min-width:0` direkt am Input) wurde am echten Gerät geprüft und widerlegt — vierter Fehlschlag in Folge, nach Zentrierung (v19.8.16), Grid (v19.8.17), Felder untereinander (v19.8.18) und `min-width:0` am Input (v19.8.19). Ondos Auftrag, ohne weitere Rückfrage: „Zurücksetzen." **Gebaut:** `kilogFilterBlock()`s Datumsfeld-Reihe trägt wieder exakt den Aufbau von vor Punkt 73 — byte-für-byte derselbe wie `logExportBlock()`s seit v19.8.14 unveränderte Reihe (`display:flex;gap:10px`, `flex:1;min-width:0`, `min-width:0;text-align:center`), nur mit eigenen Ids/Werten. Die harmlose Zentrierungsregel aus Kandidat 1 bleibt bewusst stehen, war nie Teil des Problems. **Ehrlich benannt: Der ursprüngliche Überlauf-Fehler besteht damit wieder** — bewusste Rückkehr zum Ausgangspunkt, keine neue Regression. **Verifiziert:** `node --check` bestanden · Trockentest mit **25 Prüfungen** an der echten, im Wortlaut herausgeschnittenen `kilogFilterBlock()` — darunter der direkteste Beleg: die Datumsreihe ist nach Normalisierung von Id/`onchange`/`value` byte-genau identisch mit `logExportBlock()`s Reihe · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (254 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18. **Kein fünfter CSS-Versuch ohne neuen Auftrag** — zwei Wege bleiben unverbraucht, falls Ondo das Thema wieder aufnimmt: `overflow:hidden` an den Feld-Containern (nie ausprobiert) oder der native Datumspicker ganz ersetzt (grösserer Eingriff, ändert Bedienung).
- **Beta zuvor: v19.8.19** (`beta.html`, geliefert 7.9.2026) — **Backlog-Punkt 73, Kandidat Nr. 4, auf Ondos eigenen Vorschlag: `min-width:0` steht jetzt direkt an beiden Datumsfeldern selbst. Der Punkt bleibt 🔴 OFFEN.** Kandidat 3 (Felder untereinander) wurde am echten Gerät geprüft und widerlegt — dritter Fehlschlag in Folge. Ondos eigene Nachfrage („warum nicht dieselbe Breitenbehandlung wie Wettbewerb/Mannschaft?") führte zum entscheidenden Fund: Diese Textfelder in derselben Karte, mit identischer CSS-Behandlung, laufen NICHT über — nur `type="date"` ist betroffen. Das deutet auf eine browsereigene Mindestbreite direkt am nativen Element hin, die keiner der bisherigen drei Kandidaten je direkt am `<input>` selbst ausgehebelt hatte (Kandidat 2 setzte `min-width:0` nur an der umschliessenden Spalte, Kandidat 3 entfernte es ganz). **Gebaut:** einzige Änderung gegenüber Kandidat 3 ist `min-width:0` direkt an beiden Inputs, sonst nichts verändert. `logExportBlock()` bleibt weiterhin bewusst unverändert, als Kontrollwert. **Verifiziert:** `node --check` bestanden · Trockentest mit **29 Prüfungen** an der echten, im Wortlaut herausgeschnittenen `kilogFilterBlock()`, mit `logExportBlock()` als Kontrollwert — alle bestanden · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (254 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18. **🔴 Rücksetz-Regel vorab vereinbart (Ondo, 7.9.2026):** Wirkt auch Kandidat 4 nicht, wird die Datumsfeld-Reihe vollständig auf die Flexbox-Struktur zurückgesetzt, die sie vor Punkt 73 hatte und die `logExportBlock()` bis heute unverändert trägt — kein fünfter CSS-Versuch, kein weiterer Rückfrage-Zyklus nötig. Die harmlose Zentrierungsregel aus Kandidat 1 bliebe davon ausdrücklich ausgenommen. **🔴 Ehrliche Grenze (Art. 14):** Diese Umgebung hat keinen Safari-/WebKit-Renderer und kann die vierte Vermutung in Folge nicht selbst prüfen — **Punkt 73 bleibt deshalb OFFEN**, mit dem Vermerk „Kandidat Nr. 4 ausgeliefert, Bestätigung am echten Gerät steht aus".
- **Beta zuvor: v19.8.18** (`beta.html`, geliefert 7.9.2026) — **Backlog-Punkt 73, Kandidat Nr. 3, Ondos eigene Wahl: die Datumsfeld-Reihe im KI-Log-Filter steht jetzt untereinander statt nebeneinander. Der Punkt bleibt 🔴 OFFEN.** Ondo hat am echten iPhone bestätigt: Kandidat 2 (CSS-Grid, v19.8.17) hat weder das Herausragen noch ein zusätzlich beobachtetes Überlappen der beiden Felder behoben — der zweite Fehlschlag in Folge bei einer Nebeneinander-Aufteilung. Zur Wahl gestellt: eine kleine Zusatzänderung (`overflow:hidden`) oder die grössere, strukturell sicherere Umstellung auf untereinander. **Ondo hat sich für Letzteres entschieden.** Neue, weiterhin ungeprüfte Vermutung: iOS/WebKit zeichnet Kalender-Symbol und Platzhalter des nativen Datumsfelds möglicherweise unabhängig von der berechneten Spaltenbreite — das würde erklären, warum weder Flexbox noch Grid halfen. **Gebaut:** `kilogFilterBlock()`s Datumsfeld-Reihe folgt jetzt demselben Muster wie die Felder Wettbewerb/Mannschaft darunter — jedes Feld ein eigener Block, das zweite mit `margin-top:10px`, kein eigenes `width` mehr am Input (`input,select{width:100%}` gilt bereits global). Bei einer Zeile je Feld gibt es keinen Nachbarn mehr, mit dem ein Feld um Breite konkurrieren müsste — ein Überlappen ist damit geometrisch ausgeschlossen. **Sichtbare Folge, nicht verschwiegen:** Die Filterkarte wird zwei Zeilen höher; Ondo hat diesen Weg in Kenntnis dessen gewählt. `logExportBlock()` bleibt weiterhin bewusst unverändert, als einzige seit v19.8.14 stabile Vergleichsgrundlage. **Verifiziert:** `node --check` bestanden · Trockentest mit **32 Prüfungen** an der echten, im Wortlaut herausgeschnittenen `kilogFilterBlock()`, mit `logExportBlock()` als Kontrollwert — alle bestanden · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (254 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18. **🔴 Ehrliche Grenze (Art. 14):** Diese Umgebung hat keinen Safari-/WebKit-Renderer und kann die dritte Vermutung in Folge nicht selbst prüfen — **Punkt 73 bleibt deshalb OFFEN**, mit dem Vermerk „Kandidat Nr. 3 ausgeliefert, Bestätigung am echten Gerät steht aus". **Nebenbei, auf Ondos Angebot, exploratorisch geprüft, kein Codeaufwand:** Ein von Ondo gelieferter Rohtext-Export des Schiedsrichters (122 Einträge, 30.8.–7.9.2026) zeigt, bereinigt um mehrfach angehängte Wiederholungen, 24 echte Prüfläufe mit 120 Einzelergebnissen — 109 gefunden (91 %), 6 nicht gefunden (5 %, alle an derselben Listenposition „S12"), 5 laufend, **kein einziger Widerspruch zu einem übernommenen Ergebnis**. Deckt sich mit Ondos eigener Beobachtung (36 geprüfte Spiele, alle richtig). Erklärt aber ausdrücklich **nicht**, warum ein einzelner grosser Prüflauf nur 13 von 40 fand — der Rohtext-Export deckt nur 30.8.–7.9.2026 ab, während unbewertete Einträge laut Park-Übersicht bis zum 28.7.2026 zurückreichen, deutlich ausserhalb dieses Fensters. Einzelheiten stehen bei Backlog-Punkt 73 (Fassung 83) — reiner Chat-Befund, nicht als eigener Backlog-Punkt aufgenommen, es sei denn Ondo wünscht das. **🔴 BERICHTIGT, noch am selben Tag (7.9.2026, Fassung 84): Kandidat 3 ist inzwischen am echten Gerät geprüft und WIDERLEGT** — dritter Fehlschlag in Folge, siehe Backlog-Punkt 73. Wichtiger diagnostischer Fund dabei: Die Felder Wettbewerb/Mannschaft in derselben Karte, mit identischer CSS-Behandlung, laufen NICHT über — nur `type="date"` ist betroffen, was auf eine browsereigene Mindestbreite am Element selbst hindeutet, nicht auf ein Problem der umschliessenden Struktur. Kandidat 4 ist vorgeschlagen (gezieltes `min-width:0` am Input selbst), Ondos Entscheidung steht aus, kein Code geändert.
- **Beta zuvor: v19.8.17** (`beta.html`, geliefert 6.9.2026) — **Backlog-Punkt 73, Kandidat Nr. 2: die Datumsfeld-Reihe im KI-Log-Filter von Flexbox auf CSS-Grid umgestellt. Der Punkt bleibt 🔴 OFFEN.** Ondo hat am echten iPhone belegt, dass der tatsächliche Fehler ein anderer ist als der bis zum 5.9.2026 verfolgte: Nicht die Zentrierung des Textes, sondern die **Breite** — in `kilogFilterBlock()` ragt das rechte Datumsfeld („bis") über den Kartenrand hinaus und sitzt nicht in der Flucht der Felder darunter, **beobachtet bei leeren Feldern**. Die Zentrierungsregel aus v19.8.16 hat damit ein anderes Problem behoben als das tatsächliche; sie bleibt stehen, sie schadet nicht. **Vor der Änderung untersucht, wie beauftragt — zwei Funde mit Codezitat:** Erstens scheidet die vermutete abweichende Kartenbreite aus — `logExportBlock()` steht seit v19.8.15 nicht mehr im Mehr-Tab, sondern im KI-Log-Reiter „Werkzeuge"; der Mehr-Tab zeigt `messExportBlock()` ohne jedes Datumsfeld. Beide Datumsreihen liegen im selben Container, derselben `.wrap` und derselben `.card` — **kein Breitenunterschied**. Zweitens ist der einzige inhaltliche Unterschied der Feldwert: `logExportBlock()` belegt beide Felder fest mit `heute`, `kilogFilterBlock()` liest `kilogVon`/`kilogBis`, die als leerer String initialisiert sind — das deckt sich genau mit Ondos Beobachtung. **Ausdrücklich als Vermutung gekennzeichnet, nicht als Befund** (Art. 11): dass ein leeres Datumsfeld auf iOS durch seinen Platzhalter breiter wird, ist von hier aus nicht messbar. **Warum trotzdem umgebaut wurde:** Der zweite Fund erklärt die Asymmetrie, führt aber zu keiner anderen Abhilfe — gegen eine zu grosse innere Mindestbreite ist `minmax(0,1fr)` der Riegel, gleich woher sie kommt. Gebaut: `display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px` statt `display:flex`, Container-Divs ohne `flex:1` (aber weiterhin mit `min-width:0`, weil ein Grid-Item von sich aus `min-width:auto` hat), Inputs mit `width:100%;box-sizing:border-box;text-align:center`. **`logExportBlock()` bewusst NICHT mitgeändert** — dieselbe Ursache liegt dort nicht belegt vor, und eine unveränderte Stelle ist die Vergleichsgrundlage für Ondos Prüfung am Gerät. **Kein Eingriff an `kilogGefiltert()`, `state` oder der Datenhaltung; auch die naheliegende Vorbelegung der Filterfelder ist unterlassen**, weil sie das Filterverhalten ändern würde und nicht beauftragt ist (Art. 8). **Verifiziert:** `node --check` bestanden · Trockentest mit **30 Prüfungen** an der echten, im Wortlaut aus `beta.html` herausgeschnittenen `kilogFilterBlock()`, mit `logExportBlock()` als Kontrollwert — alle bestanden; ein Fehlschlag im ersten Lauf war ein Messfehler der Prüfung selbst, vor der Korrektur an der tatsächlichen Ausgabe belegt und die Prüfung präziser statt lockerer gemacht (Fehlerart C6 vermieden) · `pruefe.py`: ALLES SAUBER. **Zur Trockentest-Frage: keine bestehende Prüfung berührt diese Anzeigefunktion** — auf `main` liegt keine committete Trockentest-Datei, `selbsttest.py` (Punkt 47) liegt nur auf `mistral` und prüft Syntax, Sprachschlüssel und `marktUrteil`, keine Anzeige. Trotzdem ausgeführt: Syntax und Rechenproben bestanden, der Sprachschlüssel-Abgleich schlägt fehl — **vorbestehend, durch Gegenprobe gegen den unveränderten `origin/main`-Stand als Nicht-Regression belegt**; sein Regex erkennt in der heutigen `beta.html` nur 67 statt 254 Schlüssel je Sprache, dieselbe Art Werkzeuglücke wie in Backlog-Punkt 66, nur festgehalten und nichts daran geändert. **Keine neuen Sprachschlüssel** (254 unverändert). **Kein Schnitt in der Messreihe** — reine Anzeigefunktion. `APP_VERSION` weiter 18. **🔴 Ehrliche Grenze (Art. 14):** Diese Umgebung hat keinen Safari-/WebKit-Renderer. Dass alle Prüfungen sauber durchlaufen, sagt nichts über die sichtbare Wirkung auf Ondos Gerät — **Punkt 73 bleibt deshalb OFFEN**, mit dem Vermerk „Kandidat Nr. 2 ausgeliefert, Bestätigung am echten Gerät steht aus".
- **Beta zuvor: v19.8.16** (`beta.html`, geliefert 4.9.2026) — **Backlog-Punkt 72, Schritt 2 gebaut: Karten einklappen · plus Backlog-Punkt 73: iOS-Zentrierung der Datumsfelder.** Auch mit den vier Reitern aus Punkt 71 war innerhalb eines Reiters noch viel Scrollen nötig, weil jede Karte immer vollständig ausgeklappt war. Betrifft nur die drei KI-Log-Reiter Offen/Bewertet/Archiv — nicht die „Vorschläge"-Ansicht und nicht das separate, bereits kompakte v18-Archiv. **Geklärt, nicht vermutet:** `vorhersageKarte(e, mitKnoepfen)`s zweiter Parameter steuert ausschliesslich, ob Aktions-Knöpfe erscheinen — nicht, ob eine Karte einklappbar sein soll; die Übereinstimmung der drei Reiter-Aufrufe mit `mitKnoepfen=true` ist Zufall der heutigen Aufrufstellen, keine Bedeutung des Parameters. Deshalb ein neuer, ans Ende **angehängter** dritter Parameter `einklappbar` — dasselbe Muster wie `kilogGefiltert()`s `mannschaft`-Parameter aus Punkt 71, der Zwei-Argumente-Aufruf der „Vorschläge"-Ansicht bleibt unverändert lauffähig. **Inhalt zerlegt:** ein immer sichtbarer Kopf (Spielname mit GEPARKT-/parkGrund-Abzeichen, Datum, Anpfiff, Gehirn-Symbol, Wettbewerb, Ergebnis-Tipp, dazu — neu hierher vorgezogen, ihre Berechnung bleibt unverändert — die `refEinigkeit`- und `refRohAbgleich()`-Warnzeilen) und ein nur aufgeklappt sichtbarer Rest (Markt-Zeilen, BTTS-Wort, Begründung, tatsächlicher Endstand, Knopf-Zeile). **Ehrlich benannt:** Die beiden Warnzeilen stehen im aufgeklappten Zustand jetzt vor statt hinter dem Rest — notwendige Folge davon, dass sie beim Einklappen sichtbar bleiben sollen, keine sonstige inhaltliche Änderung. **Natives `<details>`/`<summary>`** statt eigener Klapplogik — die bestehende `.card`-Formatierung gilt unverändert weiter, der Browser liefert den verlangten Pfeil von selbst, keine neue Optik. Der Auf-/Zu-Zustand liegt **nicht** allein im DOM: `render()` baut bei jeder Änderung irgendwo in der App das komplette `innerHTML` neu, ein rein natives `<details>` würde dabei jedesmal wieder zuklappen. Deshalb eine neue Anzeigevariable `kilogAufgeklappt` (Objekt, Eintrags-Id als Schlüssel) — wie `kilogTab` nicht Teil von `state`, Standard leer (alles eingeklappt); `kilogToggle()` schreibt bei jedem Öffnen/Schliessen den tatsächlichen Zustand zurück, **ohne** `render()` aufzurufen. **iOS-Datumsfelder:** eine dokumentierte WebKit-Eigenheit — `input[type="date"]` rendert seinen Inhalt über ein eigenes internes Element, auf das `text-align` am Feld selbst nicht wirkt; behoben mit der dafür vorgesehenen Standard-Regel auf `::-webkit-date-and-time-value`, wirkungslos in anderen Browsern, keine Änderung an Wert oder Bedienung. **Ehrliche Grenze:** Diese Umgebung hat keinen Safari-/WebKit-Renderer, die sichtbare Wirkung auf echtem iOS ist von hier aus nicht selbst prüfbar — Ondos Bestätigung steht aus. **Verifiziert:** `node --check` bestanden · Trockentest mit **20 neuen Prüfungen** an der echten, aus `beta.html` herausgeschnittenen Funktion `vorhersageKarte()`: Karte startet eingeklappt · ein Eintrag in `kilogAufgeklappt` klappt auf · alle vier Warn-Markierungen stehen im `<summary>` · Markt-Zeilen/Begründung/Endstand/Knopf-Zeile bleiben im aufklappbaren Rest · ein Zwei-Argumente-Aufruf liefert weiterhin ein `<div>` · der Eintrag bleibt bytegleich · `kilogToggle()` schreibt korrekt zurück. Die bestehenden **57** (Punkt 68), **19** (Punkt 69), **19** (Punkt 70) und **19** (Punkt 71) Prüfungen erneut ausgeführt, alle weiterhin bestanden · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (254 unverändert). **Kein Schnitt in der Messreihe** — reine Anzeigefunktionen. `APP_VERSION` weiter 18. Dazu, ohne weiteren Codeaufwand: `CLAUDE.md` (Backlog-Punkt 54) aus den vier frisch gelesenen Dokumenten neu erzeugt, 185 statt 209 Zeilen.
- **Beta zuvor: v19.8.15** (`beta.html`, geliefert 4.9.2026) — **Backlog-Punkt 71 gebaut: KI-Log in vier Reiter (Schritt 1 von 3, siehe Backlog-Punkt 72).** Der KI-Log-Bereich war eine einzige lange Seite — Werkzeuge, Vorschläge, Park-Übersicht, Filter, alle Vorhersagen und das v18-Archiv nacheinander; Ondo musste bis ganz unten scrollen und hatte das v18-Archiv mit geparkten Spielen verwechselt, weil beides unmittelbar aufeinanderfolgte. **Vier Reiter, mit einer belegten, lückenlosen und überschneidungsfreien Dreiteilung aller `neu` (v19-)Einträge** (aus Backlog-Punkt 70 bereits mit Codezitat belegt: `e.status` hat nur `'offen'`/`'bewertet'`, `e.geparkt===true` und `e.status==='bewertet'` kommen nie gemeinsam vor). **Offen** (`status==='offen' && !geparkt`): `pruefBlock()`, die unveränderte Tag-für-Tag-Park-Übersicht, ein vereinfachter Filter (Datum, Wettbewerb, Mannschaft — kein Status-Feld, hier implizit). **Bewertet** (`status==='bewertet'`): derselbe Filter, zusätzlich eine auf drei Optionen verkürzte Status-Auswahl (Alle/Richtig/Falsch). **Archiv**: zwei klar getrennte, eigens überschriebene Abschnitte — die v19-Einträge mit `geparkt===true` (mit dem bestehenden „Wieder prüfen"-Knopf) und direkt darunter, unverändert, der bestehende v18-Archiv-Block; kein Filter in diesem Reiter. **Werkzeuge**: `korrFBlock()` und `logExportBlock()`, unverändert, nur an neuer Stelle. **Neuer Filterparameter „Mannschaft":** Teilstring-Suche gegen `e.match`, dieselbe Technik wie die bestehende Wettbewerbs-Suche. `kilogGefiltert()` bekommt dafür einen neuen, ans Ende angehängten Parameter `mannschaft` — angehängt statt eingefügt, damit die 19 bestehenden Trockentest-Aufrufe aus Punkt 70 mit der alten fünf-Parameter-Signatur unverändert weiterlaufen. `kilogFilterBlock()` bekommt einen dritten Parameter `modus`, der nur steuert, ob das Status-Feld erscheint. Neue reine Anzeigevariablen `kilogTab` (Standard `'offen'`) und `kilogMannschaft` — wie `wtab` nicht Teil von `state`. Die Zähler „`{gezeigt}` von `{gesamt}`" beziehen sich je Reiter jetzt auf dessen eigene Grundmenge, nicht mehr auf alle Einträge zusammen. Was unverändert bleibt, nur an neuer Stelle: `pruefBlock()`, der Park-Übersicht-Code, `korrFBlock()`, `logExportBlock()`, der v18-Archiv-Code, `vorhersageKarte()` selbst — keine Änderung an Karten, Farben oder Knöpfen. `state.kiProtokoll`, seine Reihenfolge und Felder sind unangetastet — reine Anzeige-Umsortierung. **Verifiziert:** `node --check` bestanden · Trockentest mit **19 neuen Prüfungen** an den echten, aus `beta.html` herausgeschnittenen Funktionen: die Vier-Wege-Zerlegung ist lückenlos und überschneidungsfrei · die Mannschafts-Suche findet Teiltreffer case-insensitiv, auch gegen den zweiten Teamnamen im Feld · alle vier Filter kombinieren sich korrekt (UND) · die Zähler-Basis ist je Reiter die richtige Grundmenge · ein Aufruf mit der alten fünf-Parameter-Signatur funktioniert weiterhin identisch · `state.kiProtokoll` bleibt nach allen Aufrufen bytegleich (JSON-Vergleich). Die bestehenden **57** (Punkt 68), **19** (Punkt 69) und **19** (Punkt 70) Prüfungen erneut ausgeführt, alle weiterhin bestanden — die aus Punkt 70 insbesondere unverändert, als direkter Regressionsbeweis · `pruefe.py`: ALLES SAUBER. **Sprachschlüssel: 4 neu, 1 entfernt.** `logEmpty` (alte Leermeldung) wurde durch die vereinfachte, einheitliche Leermeldung `filterEmpty` ersetzt und war danach nachweislich ungenutzt — entfernt statt als toter Rest stehen gelassen. Neu: `kilogTabBewertet`, `kilogTabArchiv`, `kilogTabWerkzeuge`, `filterMannschaftPh`. Zwei bestehende Schlüssel (`filterStatusBewRichtig`/`filterStatusBewFalsch`) behalten ihren Namen, bekommen aber kürzere Werte („Richtig"/„Falsch"). **Kein Schnitt in der Messreihe** — reine Anzeigefunktion. `APP_VERSION` weiter 18. Dazu, ohne weiteren Codeaufwand: neuer Backlog-Punkt 72 angelegt, hält das dreiteilige Redesign-Vorhaben fest (Struktur — dieser Punkt, gebaut · Karten einklappen — offen · Optik/Logo — offen).
- **Beta zuvor: v19.8.14** (`beta.html`, geliefert 4.9.2026) — **Backlog-Punkt 70 gebaut: Filter im KI-Log.** Bei über 400 Einträgen wurde die KI-Log-Liste ohne Filter unübersichtlich (Ondos eigene Beobachtung). **Drei kombinierbare Filter** (UND-Verknüpfung), rein im Browser, keine neuen Modellaufrufe, keine Kosten: Datum von/bis (nutzt die bestehende `datumZahl()`, versteht `TT.MM.JJJJ` und ISO) · Wettbewerb-Freitextsuche (Teilstring, nicht case-sensitiv) · Status, fünf Optionen aus den tatsächlichen Codewerten abgeleitet. **Codezitat der tatsächlichen Werte (nicht vermutet — belegt):** `e.status` hat im ganzen Skript nur `'offen'`/`'bewertet'`, **keine** dritte Ausprägung auf Eintrag-Ebene — „richtig"/„falsch" gibt es nur pro Markt (`e.maerkte[i].status`). `e.geparkt` (boolesch) wird manuell (`logParken()`/`logParkenTag()`) und automatisch durch den Schiedsrichter (`parkeEintraege()`, Backlog-Punkt 68) gesetzt; `e.parkGrund` nur beim automatischen Parken. **Belegt:** `e.geparkt===true` und `e.status==='bewertet'` kommen nie gemeinsam vor — `vorhersageKarte()` zeigt den Park-Knopf nur bei `e.status==='offen'`. Fünf Filteroptionen daraus abgeleitet: Alle · Offen (offen, nicht geparkt) · Geparkt · Bewertet — alle Märkte richtig · Bewertet — mind. ein Markt falsch (die letzten beiden zusammen ergeben ohne Überschneidung genau die „bewertet"-Menge). **Umsetzung:** neue reine Funktion `kilogGefiltert(liste, von, bis, wettbewerb, status)` — `.filter()` liefert ein neues Array, `state.kiProtokoll` bleibt unangetastet, nichts wird durch Filtern gelöscht, versteckt oder verändert. Filterzustand (`kilogVon`, `kilogBis`, `kilogWettbewerb`, `kilogStatus`) liegt in vier plain globalen `var`s wie `wtab` — bewusst **nicht** Teil von `state`, reine Anzeigeeinstellung, setzt sich bei jedem Neuladen zurück. Neue Eingabefelder lösen `onchange` aus, nicht `oninput` — `render()` ersetzt bei jedem Aufruf das komplette `innerHTML`, ein `oninput`-Handler würde bei jedem Tastendruck den Cursor verlieren. Neue Anzeigefunktion `kilogFilterBlock()` (Kartenstil wie `logExportBlock()`) zeigt „`{gezeigt}` von `{gesamt}`" und einen Zurücksetzen-Knopf, der alle vier Filter auf einmal leert. **Zwei bewusste Abgrenzungen:** die Tag-für-Tag-Park-Übersicht bleibt auf der ungefilterten Liste berechnet (sonst liesse sich ein Tag nicht mehr vollständig parken, während gefiltert wird); das v18-Archiv (andere Feldstruktur) bleibt vom Filter unberührt. **Verifiziert:** `node --check` bestanden · Trockentest mit **19 neuen Prüfungen** an der echten, aus `beta.html` herausgeschnittenen Funktion `kilogGefiltert()` (kein Nachbau): Datum von/bis in beide Richtungen und im ISO-Format · leeres Datum zeigt alles · Wettbewerb-Suche Teiltreffer case-insensitiv · alle fünf Status-Optionen liefern die richtige Teilmenge, ohne Überschneidung zwischen „bewRichtig"/„bewFalsch" · alle drei Filter gleichzeitig kombiniert (UND) · Zurücksetzen liefert die volle Liste · Eingabeliste vor/nach mehreren Filteraufrufen bytegleich (JSON-Vergleich) · Rückgabe ist ein neues Array, keine Referenz auf die Eingabe. Die bestehenden **57 Prüfungen** (Punkt 68) und **19 Prüfungen** (Punkt 69) erneut ausgeführt, alle weiterhin bestanden (keine Regression) · `pruefe.py`: ALLES SAUBER. **10 neue Sprachschlüssel** (`filterT`, `filterWettbewerbPh`, `filterStatusAlle`, `filterStatusOffen`, `filterStatusGeparkt`, `filterStatusBewRichtig`, `filterStatusBewFalsch`, `filterReset`, `filterCount`, `filterEmpty`). **Kein Schnitt in der Messreihe** — reine Anzeigefunktion, ändert nichts an Auftragstexten, Bewertung oder gespeicherten Daten. `APP_VERSION` weiter 18. Dazu, ohne Codeaufwand: Backlog-Punkt 41 (seit 30.8.2026 gebaut) aus der „Prio 1"-Überschrift entfernt, die Einordnung war nicht mitgewandert.
- **Beta zuvor: v19.8.13** (`beta.html`, geliefert 4.9.2026) — **Backlog-Punkt 69 gebaut: `pruefListe`/`pruefBilanz` gespeichert.** Bis v19.8.12 waren `pruefListe` und `pruefBilanz` globale Variablen ausserhalb von `state` — `save()` schrieb nur `state`, ein Neuladen der App warf jeden noch nicht übernommenen oder ignorierten Schiedsrichter-Vorschlag weg. Seit v19.8.12 hängt an jedem Prüflauf ein bezahlter Sonnet-Lauf mit Websuche; ein Verlust kostete seither echtes Geld je Wiederholung. **Jetzt:** beide Felder sind Teil von `state` (`state.pruefListe`, `state.pruefBilanz`), initialisiert wie `vorschlaege: []` — **keine `seedV`-Migration nötig**, ein altes Save ohne diese Schlüssel behält einfach die frischen Defaults. `pruefStark` bleibt bewusst aussen vor (beschreibt nur den laufenden Prüfdurchgang, keinen Vorschlag, der verloren gehen könnte — ihre Persistenz wäre Ballast, keine Absicherung). **Zwei bisher fehlende `save()`-Aufrufe ergänzt:** `pruefAnwenden()` sicherte bisher nur im `art==='log'`-Zweig; jetzt **ein** unconditional `save()` nach dem Entfernen aus der Liste, deckt auch den `art==='bet'`-Zweig ab. `pruefIgnorieren()` rief bisher **gar kein** `save()` auf — jetzt ergänzt. Zusätzlich ein `save()` am Ende von `abschluss()`, weil das bestehende `save()` in `rundeLaufen()` vor `abschluss()` im selben Tick läuft und die endgültige Bilanz (Fehlertext, Runden, Dauer) sonst nie gesichert würde. **Reset am Rundenanfang (`state.pruefListe=[]`) bekommt bewusst KEIN eigenes `save()`** — ein Reload mitten in einem laufenden Durchgang liefert dadurch den zuletzt gesicherten, älteren Stand zurück statt eines Datenverlusts; ein unterbrochener Durchgang trägt ohnehin nie einen Eintrag in `pruefListe` ein, bevor `pruefAuswerten()` ihn abschliesst. **Nachfrage Ondos beantwortet, mit Zeilenzitat:** Ein übernommener Vorschlag wird **nicht** eigens chronologisch neu einsortiert — er braucht es nicht. `vorhersagen()` legt jeden Eintrag per `state.kiProtokoll.unshift(eintrag)` an, die KI-Log-Anzeige rendert die Liste ohne erneute Sortierung, und `pruefAnwenden()` ändert nur Felder am gefundenen Eintrag, ohne ihn im Array zu verschieben — er bleibt exakt an seiner ursprünglichen Position. Ehrliche Einschränkung: Das ist Einfüge-Reihenfolge, kein echter Sortierschlüssel über `e.datum`; die Text-Exporte sortieren dort ausdrücklich, unabhängig von dieser Frage. **Verifiziert:** `node --check` bestanden · Trockentest mit **19 neuen Prüfungen** (echter Prüfdurchgang, simuliertes Neuladen, Übernehmen/Ignorieren in beiden Zweigen, `pruefStark` bleibt ausserhalb von `state`) plus die bestehenden **57 Prüfungen** aus Punkt 68 erneut bestanden, alle an echten, aus `beta.html` herausgeschnittenen Funktionen · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (241 unverändert, keine neuen Anzeigetexte). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18. Dazu, ohne Codeaufwand: zwei neue Backlog-Punkte (70, 71) als reine Ideen aufgenommen, nicht gebaut.
- **Beta zuvor: v19.8.12** (`beta.html`, geliefert 3.9.2026) — **Schiedsrichter robuster: Backlog-Punkt 36 abgeschlossen und neuer Backlog-Punkt 68 gebaut (Auftrag Ondo, vier Teile).** **Teil 1 (Punkt 36, zweite Hälfte):** Der Schiedsrichter-Auftragstext verlangt jetzt zusätzlich das tatsächlich gespielte Format (Pflichtfeld `format`, `"2x45"` einschliesslich regulärer Verlängerung 2x15, sonst der abweichende Wert wie `"2x60"`/`"3x45"`, bei fehlender Angabe leer statt geraten). Meldet **ein** Lauf ein Sonderformat, wird der Eintrag sofort geparkt — **kein 90-Minuten-Wert wird erzwungen oder gerechnet**, unabhängig von den anderen zwei Läufen. Neuer eigener `parkGrund`-Wert `'sonderformat'`. Das ergänzt die Erkennung in der Spielliste (`stufeHolen()`, unverändert seit v19.8.7) und fängt auf, was dort durchrutscht (Leeds–RB Leipzig). **Teil 2 (Punkt 68):** Statt eines Laufs je Prüfrunde **drei, gleichzeitig abgeschickt** (`Promise.all`) — zwei über Gemini, einer über den bestehenden Sonnet-Rückfallpfad (`claude-sonnet-4-6`), also mindestens einer auf einem anderen Modell. Einigkeitsregel: alle drei gleich → übernehmen ohne Markierung · genau zwei gleich → übernehmen **mit** sichtbarer Markierung `e.refEinigkeit='2von3'` in Karte und Log-Text-Export (Pflichtbestandteil der Regel, kein Extra) · alle drei verschieden → parken mit dem bestehenden `parkGrund:'unstable_ref'` · weniger als drei brauchbare Läufe → nichts übernehmen, erneut fragen, **nicht** parken. Dazu vier feste Prüfungen ohne Modell (`refLaufPruefen()`): Halbzeit nie höher als der 90-Minuten-Stand (bisher nur eine Warnung, jetzt Ablehnung) · 0:0 nur mit ausdrücklichem `torlos:"bestaetigt"` · bei Verlängerung beide Stände getrennt und der Verlängerungsstand nie kleiner · Sonderformat. Ein verworfener Lauf verschwindet nicht: Rohantwort und geparster Stand bleiben, `refRohAbgleich()` zeigt ihn unverändert. **Teil 3:** Quellenprüfung als **Negativliste** (`terrikon.com`, `flashfussball.de`, Wett- und Buchmacherseiten) — ausdrücklich **keine** Positivliste und keine Rangfolge unter den übrigen Quellen; ein Lauf mit solcher Quelle bleibt sichtbar, zählt aber nicht als Beleg; drei Läufe mit derselben Quelle zählen als **ein** Beleg und werden als „3 Läufe, 1 Quelle" markiert. **Teil 4 (Diagnose):** Die App misst jetzt selbst die Dauer eines Prüflaufs (in der Bilanz) und eines Vorhersage-Laufs. **Eine Vorher-Zahl gibt es nicht und wurde nicht geschätzt** — eine Code-Sitzung hat keine API-Schlüssel und keinen Browser mit Ondos Daten (Art. 11/14, so von Ondo entschieden); beide Zahlen entstehen erst in Ondos App. **Nicht angetastet, wie im Auftrag verlangt:** `state.seedV<7`, `state.seedV<8`, der `refRoh`-Export, `refRohAbgleich()`, die Vorhersage-Läufe der Gehirne, `bttsWort`/`bttsMismatch`, `stufeHolen()`; keine rückwirkende Neubewertung von Sabah oder Celje. **Verifiziert:** `node --check` bestanden · Trockentest bestanden mit **57 Prüfungen**, ausgeführt an den **echten, aus `beta.html` herausgeschnittenen Funktionen**, nicht an einem Nachbau · `pruefe.py`: ALLES SAUBER. **7 neue Sprachschlüssel.** **Kein Schnitt in der Messreihe** — der Schiedsrichter ist Messwerkzeug, nicht Messgegenstand. **Kosten:** rund die dreifache Anzahl Schiedsrichter-Modellaufrufe, keine zusätzlichen Vorhersage-Aufrufe, und **neu echtes Geld bei Anthropic**, weil der dritte Lauf über Sonnet mit Websuche geht. **Ehrlich zu nennende Zweitwirkung:** Die strengeren Regeln lassen voraussichtlich mehr Spiele offen oder geparkt — die bekannte Verzerrung durch Parkung wird dadurch eher grösser. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.11** (`beta.html`, geliefert 2.9.2026) — **Rücknahme der manuellen Eintragung von Sabah und Celje (Auftrag Ondo).** Ondos Klarstellung: „Schiedsrichter repariert" heisst — er liefert ab sofort nur noch richtige, zuverlässige Ergebnisse für alle künftigen Spiele, **ohne Gegenprüfung im Chat**. Diese Bedingung ist nicht erfüllt, die elfte Fehlerart besteht unverändert; die Eintragung vom 30.8.2026 (v19.8.9, berichtigt in v19.8.10) war damit verfrüht. Neue Migration `state.seedV<8`: setzt bei beiden Spielen `ergebnisHeim`/`ergebnisGast` auf `null`, entfernt `ergebnisHalbzeit`, `ergebnisVerl` und `ergebnisQuelle`, setzt alle Märkte und den Eintrag wieder auf `offen`, `geparkt` wieder auf `true` und `parkGrund` wieder auf `'unstable_ref'`. **Kein Datumskriterium mehr** — Anker ist `e.ergebnisQuelle==='extern_manuell'` (dieses Feld setzen ausschliesslich die Blöcke `seedV<6`/`seedV<7`, und ausschliesslich für diese zwei Spiele), die Stichwörter bleiben als zweite, unabhängige Bedingung. Neue Gate-Nummer statt Änderung an `seedV<7`, weil `seedV<7` bei Ondo bereits gelaufen ist (die App läuft laut Bildschirmfoto vom 2.9.2026 auf v19.8.10). **Nicht angetastet, wie im Auftrag verlangt:** `state.seedV<7` selbst, `refRohAbgleich()` und der `refRoh`-Export; `e.refRoh` bleibt vollständig erhalten. **Betrifft beide Spiele, nicht nur Sabah** — der Auftrag nannte Celje als „bereits geparkt", der Code zeigte das Gegenteil; rückgefragt und von Ondo entschieden (Art. 11). Trockentest bestanden (16 Prüfungen: beide Spiele vollständig zurückgesetzt · `refRoh` unberührt · unbeteiligtes bewertetes Spiel unberührt · unbeteiligtes geparktes Spiel unberührt · gleiche Stichwörter ohne `extern_manuell` nicht angefasst · idempotent bei zweitem Durchlauf · datumsunabhängig). `node --check` bestanden. Keine neuen Sprachschlüssel. **Kein Schnitt in der Messreihe, aber ein Sprung in den Kennzahlen** — sechs bewertete Aussagen je Gehirn fallen wieder heraus, sobald Ondo diese Fassung lädt. `APP_VERSION` weiter 18.

---

## Sprachschluesselzahl — Zaehlhistorie, aus STAND.md „Versionen" verschoben (14.9.2026)

*Dieser Satz stand bis zum 14.9.2026 eingebettet in der „Sprachschluessel"-Zeile von `STAND.md`, Abschnitt „Versionen". Er beschreibt, wie die heute geltende Zahl (siehe `STAND.md`) ueber die gesamte Projektlaufzeit zustande kam, nicht nur den September-Anteil — deshalb hier ungeteilt, wortgleich, statt auf zwei Chronikdateien aufgesplittet.*

*Verlauf: die früher dokumentierten 184 waren nie geprüft; nachgezählt waren es 185, dann 193, dann 199, dann 201 (v19.7.8), dann 203 (v19.8.1). Die acht Schlüssel des Berichtigungsknopfes vom 13.8. (`korrT` bis `korrOk`) waren nirgends nachgetragen — 203 + 8 = 211. Punkt 44 bringt sechs weitere (`messT` bis `messBlock`) — 211 + 6 = 217. Backlog-Punkt 51 (gepaarter Vergleich, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) bringt elf weitere (`gepaart` bis `gepaartMehrdeutig`) — 217 + 11 = 228. Backlog-Punkt 64 bringt einen weiteren (`parkGrundInstabil`) — 228 + 1 = 229. Nachfrage zu Punkt 64 (refRoh lesbar gemacht, v19.8.8) bringt zwei weitere (`refRohBtn`, `refRohEmpty`) — 229 + 2 = 231. Nachfrage zu Punkt 64, Teil 2/3 (v19.8.9) bringt drei weitere (`refWiderspruch`, `refRunsVon`, `ergebnisManuell`) — 231 + 3 = 234. Backlog-Punkt 68 und Punkt 36, zweiter Teil (Mehrfachlauf-Absicherung, v19.8.12), bringen sieben weitere (`refEinig2von3`, `refQuellenZahl`, `refVerworfen`, `parkGrundFormat`, `refEinAnbieter`, `refDauer`, `balGeparkt`) — 234 + 7 = 241. Backlog-Punkt 70 (Filter im KI-Log, v19.8.14) bringt zehn weitere (`filterT` bis `filterEmpty`) — 241 + 10 = 251. Backlog-Punkt 71 (KI-Log in vier Reiter, v19.8.15) bringt vier weitere (`kilogTabBewertet`, `kilogTabArchiv`, `kilogTabWerkzeuge`, `filterMannschaftPh`) und entfernt einen, ungenutzt gewordenen (`logEmpty`) — 251 + 4 − 1 = 254. Backlog-Punkt 34/35 (Brier-Score, Streuung, v19.8.21) bringen zwei weitere (`calibBrier`, `calibSpread`) — 254 + 2 = 256. Backlog-Punkt 9, Knopfdruck-Teil (Quoten-Automatik, v19.8.23) bringt elf weitere (`oddsKeyT` bis `oddsQuelle`) — 256 + 11 = 267. Backlog-Punkt 9, Ausbau (API-Football/football-data.org per Knopfdruck, v19.8.24) bringt acht weitere (`afKeyT` bis `fdOff`) — 267 + 8 = 275. Backlog-Punkt 0b (Widerspruchsquote je Markt, v19.8.25) bringt einen weiteren (`widersprT`) — 275 + 1 = 276. Backlog-Punkt 75, Teil 2 (Decision Ledger, v19.8.26) bringt drei weitere (`kiWahlLabel`, `kiWahlKeine`, `vonKi`) — 276 + 3 = 279. Die drei Behebungen und der Observation Layer (v19.8.28) bringen 23 weitere: zwei Rückfragen vor dem Löschen (`delBetAsk`, `delLogAsk`), drei für den Speicher (`saveFailAlert`, `speicherT`, `speicherEng`) und achtzehn für den Observation Layer (`beobT` bis `beobGrundlage`) — 279 + 23 = 302. Der Umstieg auf IndexedDB (v19.8.30) bringt einen weiteren (`speicherVon`) — 302 + 1 = 303. Die Korrigieren-Felder (v19.8.31) bringen drei weitere (`depKorrLabel`, `wdKorrLabel`, `korrHinweis`) — 303 + 3 = 306. Der Trainingsraum (v19.9.0) bringt zwölf weitere (`trainT` bis `kiBusy`) — 306 + 12 = 318. Die Marktlage-Recherche (v19.10.0) bringt sieben weitere (`predResearch` bis `marktlageAus`) — 318 + 7 = 325. Die Trainingsraum-Nachbesserung (v19.11.0) bringt zwölf weitere (`kilogTabDaten`, `trainVonBisD`, `trainSpT`, `trainSpD`, `trainSpMatchPh`, `trainSpDatumL`, `trainSpHeimL`, `trainSpGastL`, `trainSpBtn`, `trainSpFehler`, `trainSpLeer`, `delTrainSpAsk`) — 325 + 12 = 337. Die Kombi-Wette-Verknüpfung (v19.12.0) bringt zwei weitere (`kiKombiLabel`, `kombiN`) — 337 + 2 = 339. Das Kriterium-(g)-Testwerkzeug (v19.13.0) bringt zehn weitere (`konsT`, `konsD`, `konsBtn`, `konsRunning`, `konsKeine`, `konsKeineDaten`, `konsFertig`, `konsZeile`, `konsBestanden`, `konsNichtBestanden`) — 339 + 10 = 349.*

---

## `beta.html` v19.17.0 — ESPN-Sammelautomatik + gehärtete Zuordnung, aus `STAND.md` „Versionen" verschoben (18.9.2026, Nachbesserung Backlog-Punkt 84/85, Fassung 138)

*Dieser Block stand bis zur Nachbesserungslieferung vom 18.9.2026 (`beta.html` v19.18.0) als „was heute gilt" in `STAND.md`, Abschnitt „Versionen". Er beschreibt den Stand VOR der Nachbesserung — acht von ChatGPT gemeldete und von Claude am echten Code bestätigte Abweichungen vom ursprünglichen Auftrag. Wortgleich hierher verschoben, nicht verändert. Was jetzt gilt, steht in `STAND.md`.*

- **Beta: v19.17.0** (`beta.html` + neue Dateien, geliefert 18.9.2026) — **ESPN-Sammelautomatik +
  gehärtete Zuordnung (Backlog-Punkt 84, Auftrag Ondo).** Vorgeschichte (ESPN, OpenLigaDB,
  Notnagel-Läufe, Messdaten-Export): unverändert, `CHRONIK-2026-09.md` und Backlog-Punkt 84/85.
  **Schritt 0 (Live-Verifikation, VOR jedem Bau durchgeführt):**
  1. ESPN-Discovery-Endpunkt gefunden und live abgerufen: `sports.core.api.espn.com/v2/sports/
     soccer/leagues?limit=1000` — liefert 219 tatsächlich bei ESPN geführte Liga-Slugs.
  2. `soccer/all/scoreboard` live geprüft (mehrere Tage): liefert **kein** vollständiges
     „alle Wettbewerbe"-Bild — harte Obergrenze von 100 Ereignissen ohne Seitennummerierung, mit
     erkennbarer US-Schlagseite (MLS, Liga MX, sogar US-Unterligen); deutsche Bundesliga-Spiele
     desselben Tages fehlten komplett. **FALL B: dieser Sammelendpunkt ist NICHT ausreichend** —
     die bereits verifizierte Slug-für-Slug-Abfrage bleibt der Weg, jetzt als tägliche Automatik.
  3. **59 Slugs** gegen den Discovery-Katalog und `skripte/schiri-ergebnisse-holen.js`s
     `API_FOOTBALL_LIGEN` (Grundlage für den „Länderspiele"-Bereich, nicht neu erfunden)
     zusammengestellt und **live gegen echte `scoreboard`-Antworten geprüft** (zwei Testtage,
     Ligawochenende + Länderspielfenster) — **alle 59 lieferten HTTP 200**.
  4. **Lücken, ehrlich benannt (Art. 11, nichts geraten):** ESPN kennt **keinen** Slug für
     Schweiz, Tschechien, Polen, Kroatien (komplett fehlend). Portugal/Belgien nur 1. Liga (kein
     `por.2`/`bel.2`). Österreich/Türkei/Griechenland nur 1. Liga (keine 2. Liga, kein Pokal).
     Schottland ohne eindeutigen „Scottish Cup"-Slug. Keine eigene Asian-Cup-Qualifikation
     gefunden. Von den 12 genannten Stufe-2-Wettbewerben fehlen Finnland, Irland, Island,
     Südkorea komplett. Ein nicht abgedeckter Wettbewerb fällt wie bisher ohne Zeitverlust an
     den KI-Notnagel.
  **Gebaut:**
  - `skripte/espn-ergebnisse-holen.js` + `.github/workflows/espn-ergebnisse.yml` +
    `daten/espn-ergebnisse/` — **ganz getrennt** von `schiri-ergebnisse`/`daten/schiri-ergebnisse/`
    (Ondos Vorgabe). Iteriert sequenziell (keine grossen `Promise.all`-Stapel, kein Retry-Sturm)
    über die 59 verifizierten Slugs, holt „gestern"+„heute" (UTC), rechnet den 90-Minuten-Stand
    exakt wie `espnLauf()` (`linescores[0]+[1]`, Elfmeter-/Verlängerungssicher, **kein** eigenes
    Elfmeter-Feld). `providerEventId` als Primärschlüssel, `fetchedAt` wird beim Erstfund gesetzt
    und danach **nie** verändert; ein unvollständiger Folgefund überschreibt eine gute Zeile
    **nie**, eine echte Korrektur (gleiche `providerEventId`, geänderter Stand) wird übernommen.
    Cron-Zeiten (08:00 + 23:30 UTC) bewusst identisch zur bestehenden Schiri-Automatik
    übernommen, nicht neu erfunden. Committet nur bei echtem Diff, wie beim Vorbild.
  - `strukturAbgleich()` gehärtet: sammelt jetzt **alle** passenden Kandidaten statt beim ersten
    abzubrechen — genau einer → wie bisher übernommen, mehr als einer → neuer Zustand
    **„mehrdeutig"** (kein Raten, welcher Kandidat richtig ist; klar unterschieden von
    `refEinigkeit()`s „uneinig" — dort mehrere widersprechende Schiedsrichter-**Läufe**, hier
    mehrere Kandidaten **einer** Quelle für dasselbe Spiel). Rückwärtskompatibel: Rückgabe bleibt
    ein Array, die Mehrdeutig-Liste hängt zusätzlich als `.mehrdeutig`-Eigenschaft daran.
  - `espnArchivLesen(ziel)`, modelliert auf `footballDataArchivLesen()`: liest
    `daten/espn-ergebnisse/JJJJ-MM.json`, nutzt die gehärtete `strukturAbgleich()` unverändert.
  - Kaskade in `rundeLaufen()` erweitert: **ESPN-Archiv → Live-ESPN → OpenLigaDB → KI-Notnagel.**
    Ein eindeutiger Archivtreffer erspart für genau dieses Spiel die Live-ESPN-Abfrage
    (`espnLauf()` bekommt nur noch die vom Archiv nicht gelösten Spiele) — kein Spiel wird
    doppelt bei ESPN angefragt, keins geht verloren.
  **Unverändert, wie beauftragt:** `REF_MIN_LAEUFE`, `refEinigkeit()`, STUFEN selbst, die
  90-Minuten-plus-Nachspielzeit-Definition, die bestehende Verlängerungsbehandlung, der
  Ausschluss von Elfmeterschiessen aus dem Messwert. Die App schreibt weiterhin **nicht** ins
  Repository — nur GitHub Actions aktualisiert die neuen Ergebnisdateien.
  **Verifiziert:** `node --check` bestanden · **14 neue Prüfungen** an `strukturAbgleich()`/
  `espnArchivLesen()` (wortgleich herausgeschnitten) — unveränderter Fall bei genau einem
  Kandidaten, „mehrdeutig" bei mehreren, gemischter Fall, kein Kandidat weiterhin ohne Ergebnis,
  echter Archivtreffer (DFB-Pokal-Elfmeterfall) liefert den 90-Minuten-Stand ohne Elfmeterstand,
  fehlende Monatsdatei ergibt leeres Ergebnis · **13 neue Prüfungen** an
  `skripte/espn-ergebnisse-holen.js` (`datensatzBauen`/`einfuegenOderAktualisieren`/
  `laden`/`speichern`) gegen eine live abgerufene, echte ESPN-Summary-Antwort (derselbe
  Norderstedt–St.-Pauli-Elfmeterfall wie in `STAND.md`, elfte Fehlerart) — kein Elfmeterfeld im
  Datensatz, `fetchedAt` bleibt bei erneutem und bei korrigiertem Fund unverändert, ein
  unvollständiger Fund überschreibt nie, Datei-Rundlauf deterministisch sortiert, eine kaputte
  Bestandsdatei bricht den Lauf ab statt still zu überschreiben · **13 neue Prüfungen** an der
  vollständigen Kaskade (isoliert mit instrumentierten Ersatzfunktionen für Netz/KI, echter,
  wortgleich herausgeschnittener Orchestrierungscode) — Reihenfolge ESPN-Archiv→Live-ESPN→
  OpenLigaDB→KI-Notnagel bestätigt, ein eindeutiger Archivtreffer verhindert nachweislich die
  doppelte Live-ESPN-Abfrage für dasselbe Spiel, ein gemischter Fall verliert kein Spiel, findet
  keine Strukturquelle etwas bekommt der KI-Notnagel weiterhin drei Läufe (zwei Gemini, ein
  Sonnet) — alle 40 neuen Prüfungen dieser Lieferung bestanden, die 74 bereits bestehenden
  ESPN-/OpenLigaDB-Prüfungen unverändert (an den unveränderten Funktionen `espnLauf()`/
  `openligaLauf()`/`ergebnisQuelleAus()`/`refEinigkeit()` wurde in dieser Lieferung nichts
  geändert). `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (349 unverändert).
  **🔴 Status ausdrücklich NICHT auf „behoben"/„bewährt" gesetzt:** Der neue Workflow hat noch
  keinen echten Lauf in GitHub Actions hinter sich (erst nach dem ersten Cron-Zeitpunkt bzw.
  einem manuellen `workflow_dispatch` sichtbar) — Bewährung steht aus (Stabilitätsregel).

**🔴 Nachbesserung 18.9.2026 (Backlog-Punkt 84/85, `beta.html` v19.18.0):** Acht von ChatGPT
gemeldete Abweichungen vom Auftrag wurden am echten Code des Commits `1ef0e91` bestätigt und
behoben — Kurzfassung in `STAND.md`, Abschnitt „Versionen". Vollständige Begründung, Bauweise
und Verifikation, wortgleich aus der Lieferung übernommen:

**Anlass:** ChatGPT hat acht Abweichungen vom ursprünglichen Auftrag gemeldet; Claude hat alle
acht am echten Code des Commits `1ef0e91` nachgeprüft und bestätigt. Grösste Einzellücke,
maschinell an Ondos echtem Export gemessen: Von 56 verschiedenen Wettbewerbsnamen in seinen
505 `kiProtokoll`-Einträgen bekamen nur 12 einen ESPN-Slug.

**Teil A (Messdaten-Export, Backlog-Punkt 85):**
- **A1:** Vollständigkeits-Audit der Positivlisten gegen die Vereinigungsmenge aller
  tatsächlich vorkommenden Feldnamen in Ondos echtem Export
  (`ondo-control-messdaten-2026-09-17.json`, 505 `kiProtokoll`-Einträge, davon 20 `aera:'v18'`)
  fand genau eine Lücke: `tipp` und `quote` fehlten in `MESS_KI_FELDER` — alle 20 v18-Einträge
  tragen ausschliesslich `id/datum/match/tipp/quote/status/herkunft/aera`, ohne die Ergänzung
  verlor ein v18-Eintrag seinen gesamten inhaltlichen Kern. Beide ergänzt. Jede andere Liste
  (`MESS_MARKT_FELDER`, `MESS_MARKT_FALT_FELDER`, `MESS_BET_FELDER`, `MESS_REGELN_FELDER`,
  `MESS_KORREKTURF_FELDER`, `MESS_TRAIN_PROT_FELDER`, `MESS_TRAIN_SPIEL_FELDER`,
  `MESS_KONS_SPIEL_FELDER`, `MESS_KONS_GEHIRN_FELDER`) deckte beim Audit bereits alle real
  vorkommenden Felder ab. `state.bets`, `trainingsraumProtokoll`, `trainingsraumSpiele` und
  `antwortkonsistenzBericht` sind in Ondos Export leer bzw. nicht vorhanden — für diese vier
  Bereiche stützt sich das Audit ersatzweise auf die Zuweisungsstellen im Code, eine schwächere
  Beleglage als bei `kiProtokoll`, ehrlich benannt.
- **A2:** `messAntwortkonsistenzProjekt()` iterierte bisher über `Object.keys(bericht)` — ein
  unbekannter Kopf-Schlüssel kam dadurch durch, ein primitiver Wert sogar unverändert. Neue
  Positivliste `MESS_KONS_KOPF_FELDER = ['sonnet','flash']` (belegt: `antwortkonsistenzLauf()`
  befüllt `gehirne` ausschliesslich über `hatSonnet()`/`hatGemini()` mit genau diesen zwei
  Literalen) ersetzt die offene Iteration. Ein unbekannter Kopf-Eintrag wird jetzt übersprungen,
  ob Objekt oder primitiver Wert.
- **Verifiziert (Teil A):** `node --check` bestanden · **17 Prüfungen** an den wortgleich aus
  `beta.html` herausgeschnittenen Funktionen gegen die echten 20 v18-Einträge (feldweiser
  Vergleich, nicht nur „kein Absturz") und alle 505 echten `kiProtokoll`-Einträge (kein
  legitimes Feld fällt weg, weder `refRoh` noch `espnRoh` erscheint im Ergebnis) · unbekannter
  Kopf-Schlüssel (Objekt- und primitiver Fall, getrennt geprüft) erscheint nicht im Ergebnis ·
  der ursprüngliche `espnRoh`-`contentKey`-Fall: `messGeheimFund()` meldet weiterhin nichts ·
  ein echter Schlüsselwert (`sk-ant-…`) wird weiterhin erkannt · `MESS_VERBOTEN`/
  `messGeheimFund()` laut `git diff` byte-identisch unverändert — alle 17 bestanden.

**Teil B (ESPN-Sammelautomatik, Backlog-Punkt 84):**
- **B0 (Scope-Abgleich):** `usa.open` (US Open Cup) aus der 59-Slug-Liste entfernt — STUFEN
  nennt für die USA in Stufe 2 ausschliesslich MLS, ein offener Vereinspokal über alle
  US-Ligaebenen ist keine „oberste Liga". Alle übrigen 58 Slugs liegen im STUFEN-Scope.
  STUFEN-Bereiche ohne Slug (bereits im Code als Lücke dokumentiert, hier bestätigt): Schweiz/
  Tschechien/Polen/Kroatien komplett, Portugal/Belgien nur 1. Liga, Österreich/Türkei/
  Griechenland nur 1. Liga ohne Pokal, Schottland ohne Pokal-Slug, Finnland/Irland/Island/
  Südkorea (Stufe 2) komplett.
- **B1 (Live-Verifikation mit echtem Spiel):** Alle 58 verbliebenen Slugs einzeln über ESPNs
  Core-API (`/events?dates=<Jahr>`, dann `/summary?event=<id>`) mit mindestens einem echten,
  **abgeschlossenen** Spiel bestätigt (`status.type.completed===true`) und Team-/
  Wettbewerbsnamen auf Plausibilität geprüft — **58 von 58 bestätigt**, keiner entfernt.
  Fünf Slugs (`uefa.euro`, `uefa.euroq`, `conmebol.america`, `afc.asian.cup`,
  `caf.nations_qual`) brauchten dafür ein älteres Kalenderjahr (Turniere ohne Spiele im
  unmittelbaren Testfenster) — belegt u. a. Deutschland–Schottland (Euro 2024), Argentinien–
  Kanada (Copa América 2024), Katar–Libanon (Asian Cup 2024). Kommentarfehler in
  `skripte/espn-ergebnisse-holen.js` (Prosa „6.9.2026/13.9.2026" neben den Datumswerten
  20250906/20250913) auf 2025 berichtigt, konsistent mit `STAND.md`/Backlog.
- **B2 (`ESPN_SLUG_REGELN` erweitert/korrigiert):** Von **12 auf 31 von 56** echten
  Wettbewerbsnamen mit Slug. **Behobener Fehlmatch:** `/la\s*liga|primera\s*divisio/ → esp.1`
  fing auch „Primera División" ab — in Ondos Daten ausschliesslich argentinische Spiele.
  `primera divisio` aus der Regel entfernt (die spanischen „La Liga"/„LaLiga"-Treffer bleiben
  erhalten); **keine** Ersatzregel „Primera División" → `arg.1` gebaut, weil der Name selbst
  generisch ist (auch Uruguay, Bolivien, Paraguay u. a. nennen ihre oberste Liga so) und damit
  nicht dauerhaft eindeutig — derselbe Massstab wie unten. **Bewusst unaufgelöst, generisch:**
  „Bundesliga" (DE/AT), „Superliga" (u. a. DK/TR/RS/RO/GR), „1. Liga" (u. a. CH-Stufe-3),
  „Super League" (u. a. CH/GR/CN), „Premiership" (schott./engl. historisch), zusätzlich selbst
  gefunden: bare „Championship" (engl. UND schott. zweite Liga) und „Primera División" (s.o.).
  **Ausdrücklich klargestellt:** Aus dem historischen Västerås-SK-Fall vom 10.8.2026 (bereits
  als Metadaten-/Positionsverschiebungsfehler dokumentiert) wurde **keine** Aussage über die
  Bedeutung von „Superliga" abgeleitet. Neue, unzweideutige Regeln unter anderem für
  Brasilien Serie A/B, Argentinien Liga Profesional, Ligue 1, Eredivisie, Jupiler Pro League,
  Primeira Liga, Allsvenskan, Eliteserien, MLS (mit Ausschluss von „MLS Next Pro"), DFB-Pokal,
  bare Champions/Europa/Conference League (mit Ausschluss von „Women's …", live an Ondos
  Daten belegt für Champions League). Vier Negativfälle geprüft: „2. Bundesliga"→`ger.2`
  (nicht `ger.1`) · „UEFA Champions League Qualifikation"→`uefa.champions_qual` (nicht
  `uefa.champions`) · „UEFA Conference League Qualifikation"→`uefa.europa.conf_qual` ·
  „Primera División"→kein Slug.
- **B3 (Beweiskette bei Archivtreffern):** `espnRohSchreiben()` verlangte bisher
  `r._espnRoh.scoreboardEvent/.summary` — ein Archivtreffer aus `espnArchivLesen()` bekam
  dadurch NIE eine Evidence, obwohl das Archiv in der neuen Kaskade zuerst läuft. Jeder
  Datensatz in `skripte/espn-ergebnisse-holen.js` trägt jetzt ein kompaktes `beleg`-Objekt
  (rohe Competitor-Daten: `completed`, `statusTyp`, je Team `teamId`/`teamDisplayName`/
  `homeAway`/`linescores[]`, unverändert und in ESPN-Originalreihenfolge — **kein**
  Elfmeterfeld). `strukturAbgleich()` reicht den passenden Rohkandidaten intern als
  `r._fixture` durch, `espnArchivLesen()` setzt darüber `r._espnRoh` (Herkunft „archiv", URL
  der Monatsdatei, `beleg`). `espnRohSchreiben()` unterscheidet Live-/Archivfall und schreibt
  beiden ein `herkunft`-Feld (`'live'`/`'archiv'`) — bestehende Live-Einträge bleiben
  unverändert lesbar, `espnLauf()` selbst nicht angefasst. Gemessen an einem echten Datensatz
  (Norderstedt–St. Pauli, DFB-Pokal-Elfmeterfall): **340 Byte ohne, 631 Byte mit `beleg`**
  (+~85 %). Hochrechnung Monatsdatei bei realistischem Spielaufkommen (Vergleichswert:
  `daten/schiri-ergebnisse/2026-09.json`, ~12 grosse Wettbewerbe, 107 Spiele in 18 Tagen ≈
  5,9 Spiele/Tag — ESPNs 58 Slugs decken deutlich mehr Wettbewerbe ab, aber Qualifikations-/
  Pokalrunden laufen nicht wöchentlich): grob geschätzt 600–900 Spiele/Monat, damit **rund
  230–270 KB ohne, 380–570 KB mit `beleg`** — ausdrücklich eine Schätzung, keine Messung an
  einem echten vollen ESPN-Monat (den gibt es noch nicht).
- **B4 (Schema umgestellt):** `quelle`→`provider` (fest `'espn'`), `wettbewerbSlug`→
  `providerCompetitionSlug`, `wettbewerb`→`providerCompetitionName`, `anpfiff` (nur HH:MM)
  entfernt zugunsten `kickoffUtc` (voller UTC-Zeitstempel), neu `verlaengerungGespielt` als
  echter Boolwert. `providerCompetitionName` kommt jetzt aus `sum.header.league.name` statt
  dem unzuverlässigen `evComp.altGameNote||season.slug||slug` — live an vier echten Abrufen
  aus vier Wettbewerben belegt (u. a. „English Premier League", „German Cup", „Argentine Liga
  Profesional de Fútbol"). Einzige Lesestelle des alten `wettbewerb`-Feldnamens im ganzen
  Quelltext war `strukturAbgleich()` (maschinell mit grep bestätigt) — dort **angepasst**,
  kein Kompatibilitäts-Alias (kein zweiter externer Leser vorhanden, ein Alias hätte die
  ungenaue alte Benennung nur weiterleben lassen). `x.status==='FT'` unverändert. `daten/
  espn-ergebnisse/` existiert im Ausgangscommit `1ef0e91` nicht als getrackter Pfad und auch
  nicht nach frischer Prüfung vor der Umstellung — keine Migration nötig.
- **B5 (Zeitplan/Gleichzeitigkeit):** Cron auf `25 8 * * *`/`55 23 * * *` verschoben (nicht
  mehr dieselbe volle Stunde wie `schiri-ergebnisse.yml`). Beide Workflows tragen jetzt
  dieselbe `concurrency`-Gruppe (`cancel-in-progress: false`) — verhindert gleichzeitige
  Repository-Writer. **Grenze, bewusst nicht überclaimt:** keine beliebig lange
  FIFO-Warteschlange; GitHub garantiert je Gruppe höchstens einen laufenden und einen
  ausstehenden Run. Zusätzlich `git fetch origin main` + HEAD-Vergleich vor jedem Commit/Push
  in beiden Workflows — weicht HEAD von `origin/main` ab, bricht der Lauf sichtbar ab
  (`::error::`), kein automatischer Merge/Rebase/Force. An `schiri-ergebnisse.yml` sonst
  nichts geändert.
- **B6 (403/429 sichtbar):** `scoreboardHolen()`/`summaryHolen()` protokollieren jetzt bei
  jedem `!res.ok` Slug, Datum bzw. Event-ID und den HTTP-Statuscode, 403/429 zusätzlich
  markiert. Zähler je Statuscode über den ganzen Lauf, Zusammenfassungszeile am Ende. Lauf
  bricht dadurch nicht ab, kein Retry — nur die Sichtbarkeit geändert.

**Unverändert, wie beauftragt:** `REF_MIN_LAEUFE`, `refEinigkeit()`, STUFEN selbst, die
90-Minuten-plus-Nachspielzeit-Definition, die Verlängerungsbehandlung, der Ausschluss von
Elfmeterschiessen aus dem Messwert, `espnLauf()`, `openligaLauf()`, `ergebnisQuelleAus()` —
laut `git diff` gegen `1ef0e91` byte-identisch, keine dieser Funktionen im Diff enthalten.

**Verifiziert (Teil B, zusammengefasst):** `node --check` auf `beta.html` und
`skripte/espn-ergebnisse-holen.js` bestanden · YAML beider Workflows maschinell geprüft ·
**20 Prüfungen** an `espnSlugFuer()` gegen alle 56 echten Wettbewerbsnamen plus die vier
Negativfälle · **68 Prüfungen** an `datensatzBauen()` gegen vier live abgerufene, echte
ESPN-Antworten aus vier verschiedenen Wettbewerben (neue Feldnamen, kein Elfmeterfeld, `beleg`
vollständig und roh, `teamId`/`teamDisplayName`/`homeAway`/`linescores` in Originalordnung) ·
**24 Prüfungen** an der vollständigen Kaskade `strukturAbgleich()`/`espnArchivLesen()`/
`espnRohSchreiben()` (Mehrdeutig-Fall, unbeteiligter Eintrag bleibt unberührt, neues Schema,
`status:'FT'` erkannt, der DFB-Pokal-Elfmeterfall Norderstedt–St. Pauli liefert weiterhin
0:0 statt 2:3, Live-Fall bleibt unverändert lesbar) · **14 Prüfungen** an der 403/429-Sichtbarkeit
(Statuscode gezählt, Protokollzeile mit Slug+Datum/Event-ID, 403/429 markiert, kein Retry,
kein Absturz) · **17 Prüfungen** Teil A (s. o.) — **insgesamt 143 neue Prüfungen dieser
Lieferung, alle bestanden.** `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel**
(349 unverändert).

**🔴 Status ausdrücklich NICHT auf „behoben"/„bewährt" gesetzt:** Der neue Workflow (auch mit
den B5/B6-Ergänzungen) hat noch keinen echten Lauf in GitHub Actions hinter sich — Bewährung
steht aus (Stabilitätsregel). **Ondos Befund vom 18.9.2026 („4 von 10")** gilt erst dann als
behoben, wenn ein echter Prüfzyklus am Gerät das bestätigt — **nicht bereits mit diesem Bau.**


---

## `beta.html` v19.18.0 — Nachbesserung Backlog-Punkt 84/85, aus `STAND.md` „Versionen" verschoben (19.9.2026, gezielte Abnahmenachbesserung v19.18.1, Fassung 139)

*Wortgleich aus `STAND.md` hierher verschoben, nichts geloescht oder umformuliert (stehende
Regel ab 14.9.2026, `STAND.md`-Wegweiser; dasselbe Vorgehen wie beim v19.17.0-Eintrag darueber).
Nur die Listen-Kennzeichnung ist von „Beta:" auf „Beta zuvor:" gesetzt, wie bei jedem anderen
verschobenen Versionseintrag.*

**🔴 Drei Aussagen dieses Blocks sind seit dem 19.9.2026 ueberholt — sie bleiben hier als
damaliger Stand stehen (Regel 3), massgeblich ist `STAND.md`:**
1. **„jetzt 31 von 56"** — nach C1 (19.9.2026) sind es bewusst **29 von 56**. Zwei bare
   Regeln (`/serie\s*a\b/` -> `ita.1`, `/serie\s*b\b/` -> `ita.2`) sind entfernt, weil
   „Serie B" in Ondos Export einmal blank fuer ein brasilianisches Spiel steht (Grêmio
   Novorizontino–Avaí FC, 5.9.2026) — ein real belegter Fehlmatch.
2. **„Monatsdatei-Hochrechnung grob 230–570 KB"** — diese Schaetzung war zu niedrig. Der erste
   reale Betriebstag erzeugte 30,1 KB bei 36 Spielen; Einzelheiten und die zulaessige
   Einordnung stehen in `STAND.md`.
3. **„kein echter GitHub-Actions-Lauf bisher"** — war am 18.9.2026 richtig, ist ueberholt: Beide
   Workflows sind am 19.9.2026 erstmals real und erfolgreich gelaufen. Einzelheiten `STAND.md`.

- **Beta zuvor: v19.18.0** (`beta.html` + geänderte Dateien, geliefert 18.9.2026) — **Nachbesserung
  von v19.16.0/v19.17.0 (Backlog-Punkt 84/85), Fassung 3 des Auftrags — acht von ChatGPT
  gemeldete, am echten Code des Commits `1ef0e91` bestätigte Abweichungen behoben.**
  Vollständige Begründung, Bauweise je Teilpunkt (A1/A2, B0–B6) und Verifikation: wortgleich
  in `CHRONIK-2026-09.md` (dort auch die vollständige, verschobene Vorgeschichte v19.17.0).
  **Ausgangslücke, maschinell an Ondos echtem Export gemessen (505 `kiProtokoll`-Einträge):**
  12 von 56 echten Wettbewerbsnamen bekamen einen ESPN-Slug — **jetzt 31 von 56.**
  **Bewusst unaufgelöst, weil generisch (keine dauerhaft eindeutige Liga-Zuordnung):**
  „Bundesliga", „Superliga", „1. Liga", „Super League", „Premiership" (Ondos eigene Beispiele,
  alle fünf real in seinen Daten) sowie selbst gefunden „Championship" (bare) und „Primera
  División" (in Ondos Daten Argentinien, aber selbst generisch — auch Uruguay/Bolivien/Paraguay
  nennen ihre Liga so, deshalb **keine** Regel dafür, auch nicht auf `arg.1`). **Ausdrücklich
  klargestellt:** Der historische Västerås-SK-Fall vom 10.8.2026 (Metadaten-/
  Positionsverschiebungsfehler) belegt **keine** Aussage über „Superliga".
  **Messdaten-Export (Teil A):** `tipp`/`quote` fehlten in `MESS_KI_FELDER` — alle 20 echten
  v18-Einträge verloren dadurch ihren inhaltlichen Kern, jetzt ergänzt. Neue Positivliste
  `MESS_KONS_KOPF_FELDER = ['sonnet','flash']` ersetzt eine offene `Object.keys()`-Iteration in
  `messAntwortkonsistenzProjekt()`.
  **ESPN-Automatik (Teil B):** `usa.open` als ausserhalb des STUFEN-Scopes entfernt, alle 58
  verbliebenen Slugs einzeln mit echtem, abgeschlossenem Spiel (nicht nur HTTP 200) bestätigt.
  Jeder Archiv-Datensatz trägt jetzt ein kompaktes `beleg`-Objekt (rohe Competitor-Daten) als
  Beweiskette, auch für Archivtreffer (vorher nur für Live-Funde) — gemessen 340 Byte ohne,
  631 Byte mit `beleg` (+~85 %), Monatsdatei-Hochrechnung grob 230–570 KB (Schätzung, kein
  echter Monat gemessen). Schema auf die beauftragten Feldnamen umgestellt (`provider`/
  `providerCompetitionSlug`/`providerCompetitionName`/`kickoffUtc`/`verlaengerungGespielt`),
  `providerCompetitionName` jetzt live aus `sum.header.league.name` statt einem unzuverlässigen
  Ersatzwert. Cron entzerrt (`25 8`/`55 23` UTC, nicht mehr dieselbe Stunde wie
  `schiri-ergebnisse.yml`), gemeinsame `concurrency`-Gruppe (`cancel-in-progress: false` —
  **Grenze:** verhindert parallele Writer, aber keine beliebig lange FIFO-Warteschlange) +
  `git fetch`/HEAD-Prüfung vor jedem Commit/Push in beiden Workflows (sichtbarer Abbruch statt
  automatischem Merge/Rebase/Force). 403/429 jetzt sichtbar protokolliert und gezählt, ohne
  Retry und ohne Laufabbruch.
  **Unverändert, laut `git diff` gegen `1ef0e91` byte-identisch:** `REF_MIN_LAEUFE`,
  `refEinigkeit()`, STUFEN, `espnLauf()`, `openligaLauf()`, `ergebnisQuelleAus()`,
  `MESS_VERBOTEN`, `messGeheimFund()`.
  **Verifiziert:** `node --check` auf beide Skripte bestanden, YAML beider Workflows geprüft,
  **143 neue Prüfungen** an den wortgleich herausgeschnittenen Funktionen (Teil A 17, `espnSlugFuer()`
  gegen alle 56 echten Namen + 4 Negativfälle 20, `datensatzBauen()` gegen vier live abgerufene
  ESPN-Antworten 68, volle Kaskade inkl. DFB-Pokal-Elfmeterfall Norderstedt–St. Pauli 24,
  403/429-Simulation 14) — alle bestanden. `pruefe.py`: ALLES SAUBER. Keine neuen
  Sprachschlüssel (349 unverändert).
  **🔴 Status ausdrücklich NICHT auf „behoben"/„bewährt" gesetzt:** kein echter GitHub-Actions-
  Lauf bisher — Bewährung steht aus. **Ondos Befund vom 18.9.2026 („4 von 10")** gilt erst nach
  einem echten Prüfzyklus am Gerät als behoben, **nicht bereits mit diesem Bau.**
