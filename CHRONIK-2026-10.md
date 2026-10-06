# ONDO CONTROL — CHRONIK OKTOBER 2026
*Versionsgeschichte und Prüfbelege ab Oktober 2026. Aktueller Stand steht in `STAND.md`.*

## v19.22.0 — 6.10.2026 — Backlog-Punkt 92: Ausnahmespiele, Schritt 1

**Auftrag.** Automatische Ergebnisbewertung darf nur erfolgen, wenn ein normaler Spielabschluss
positiv belegt ist. Wettabrechnung ist getrennt und bekommt den manuellen Ausgang
„Einsatz zurück“.

### Schritt 0 — vollständige Inventur vor dem Bau

`beta.html` wurde vollständig gelesen, ebenso `.github/workflows/espn-ergebnisse.yml`,
`.github/workflows/schiri-ergebnisse.yml`, `skripte/espn-ergebnisse-holen.js` und
`skripte/schiri-ergebnisse-holen.js`. Beide Workflows/Sammelskripte schreiben nur
strukturierte Ergebnisdateien; sie bewerten keinen KI-Log-Eintrag. Der aktuelle automatische
App-Weg ist `ergebnissePruefen()` → strukturierte Quellen/ggf. KI-Notnagel → Vorschlag →
Ondos `pruefAnwenden()`.

**Historische Migrationen `seedV<6`/`seedV<7`/`seedV<8` — unverändert, nicht aktueller
Ergebnisweg.** Die drei Blöcke sind eine historische Kette: `seedV<6` und `seedV<7` trugen
für Celje–Slovan Bratislava und Sabah–Hapoel Beer-Sheva Ergebnisse ein und bewerteten Märkte.
`seedV<8` nahm beides auf Ondos Entscheidung vom 2.9.2026 wieder zurück: Ergebnisse entfernt,
Märkte offen, Eintragsstatus offen, `geparkt=true`, `parkGrund:'unstable_ref'`. Wirksamer
Endzustand heute: beide Spiele unbewertet und geparkt. Der Code-Kommentar bei `seedV<8`
sagt ausdrücklich, dass `seedV<7` unverändert stehen bleibt, weil sie auf Ondos Gerät bereits
gelaufen ist. Deshalb gilt die Kette als historisch und durch `seedV<8` neutralisiert.

**`korrFAnwenden()` — unverändert.** Historischer, manuell ausgelöster Korrektur- und
Neubewertungsweg; beschafft/übernimmt kein Ergebnis, betrifft nur alte Sonnet-Einträge ohne
`codeVersion` mit einer Null im Tipp, läuft nach `confirm()` nur einmal
(`state.korrekturF`) und rechnet nur aus einem bereits gespeicherten Endstand neu. Ehrliche
Codegrenze: Der Kommentar behauptet „Geparkte und offene Einträge bleiben offen“, der Code
prüft `e.geparkt` aber nicht. Ein geparkter Alt-Eintrag mit gespeichertem Endstand könnte
beim Ausführen einen `richtig`/`falsch`-Marktstatus bekommen. Nicht Teil dieses Auftrags,
kein neuer Backlog-Punkt ohne Ondos Entscheidung.

**`logMarktSet()` — unverändert.** Aktiver, ausdrücklich manueller Bewertungs-/Override-Weg
des echten KI-Logs, nur über ✓/✗ und „Zurücksetzen“ in `vorhersageKarte()`. Er beschafft
keinen Endstand, schreibt weder `ergebnisHeim`/`ergebnisGast` noch ESPN/KI-Evidence und
ruft weder ESPN noch KI noch `marktUrteil()` auf. Ehrliche Altgrenze: Ein manueller Klick
kann ohne gespeicherten Endstand `bewertet` setzen; `calcAI()` zählt v19-Märkte mit
`richtig`/`falsch` ohne Endstand-/Parkprüfung. `logMarktSet()` ändert `e.geparkt` nicht;
manuell bewertete geparkte Märkte können daher in Auswertungen auftauchen, die nicht auf
Parkstatus filtern. Bewusst keine Nebenreparatur und kein neuer Backlog-Punkt.

**Überschneidung mit Backlog-Punkt 81.** Punkt 92 liegt im selben Schiedsrichter-/Ergebnisraum,
schließt Punkt 81 aber nicht. Punkt 81 verlangt weiterhin die dort definierte Zuverlässigkeit
und reale Gerätebewährung; die neue Schranke reduziert Fehlübernahmen, ersetzt diese offene
Bewährung nicht.

### Gebaut — eine Regel für alle Ergebnisquellen

Ein Treffer einer strukturierten Quelle gibt nur frei, wenn der Status der Quelle einen
normalen Abschluss von Ausnahmen trennt.

- **Fälligkeit:** Anpfiff +3:30 h; ohne Anpfiff Spieltag 24:00 Europe/Berlin +3:30 h. Vorher
  kein Ergebnisabruf und keine Kosten.
- **ESPN Archiv und Live:** nur `completed===true` plus `STATUS_FULL_TIME`,
  `STATUS_FINAL_AET` oder `STATUS_FINAL_PEN`. Das Archiv trägt den Originalstatus in
  `beleg.statusTyp`; Stand der Gegenprüfung: 885/885 Einträge mit Status (880 FULL_TIME,
  4 FINAL_PEN, 1 FINAL_AET). Fehlender/anderer Status parkt als `espn_status`, ohne
  KI-Fallback. `espnRoh` bleibt erhalten.
- **football-data-Archiv:** bleibt positiver Strukturbeleg. Das Sammelskript übernimmt nur
  football-data.org-Status `FINISHED`; die offizielle v4-Lookup-Tabelle trennt `AWARDED`,
  `POSTPONED`, `SUSPENDED` und `CANCELLED` als eigene Status. Ehrliche Grenze:
  Nicht getestet ist, ob football-data am grünen Tisch gewertete Spiele in der Praxis
  tatsächlich als `AWARDED` führt; das lokale Archiv speichert nur `status:'FT'`.
- **OpenLigaDB:** ein Treffer ist Evidence, aber kein positiver Normalabschluss-Beleg.
  Er parkt sofort als `verlauf_unklar`, mit dem allgemeinen Anzeigetext „Normaler
  Spielverlauf nicht positiv belegt“, ohne KI-Fallback und ohne zusätzlichen Lauf. Treffer,
  geparster Stand, Modellkennung und Quellen-URL bleiben in `refRoh`.
- **KI-Notnagel:** Jeder brauchbare Lauf trägt `verlaufStatus` =
  `normal_belegt`/`abweichung_belegt`/`unklar` plus `verlaufGrund`. Freigabe nur bei
  drei brauchbaren `normal_belegt`-Läufen; Abweichung parkt als `verlauf_abweichung`,
  Unklarheit als `verlauf_unklar`.
- **Datum:** mehr als ein Kalendertag Abweichung parkt als `datum_abweichung`; exakt ein Tag
  bleibt zulässig. Bereits bewertete und bereits geparkte Einträge werden nicht rückwirkend
  geändert. `refRoh`/`espnRoh` bleiben erhalten.

**Bekannte OpenLigaDB-Folge, per Test bestätigt:** Der Kartenknopf „Wieder prüfen“ entparkt
den Eintrag über `logParken(...,false)`. Beim nächsten Ergebnislauf trifft dieselbe
OpenLigaDB-Quelle erneut und der Eintrag wird wieder `verlauf_unklar` geparkt; auch dabei
startet kein KI-Fallback. Auflösen kann Ondo den Fall weiterhin nur über die bestehenden
manuellen ✓/✗-Overrides. Bewusst dokumentiert, nicht in Schritt 1 gelöst.

### Gebaut — Money-Gate

Neuer Wettstatus `einsatz_zurueck`: ausschließlich durch Ondo bzw. beim Fotoimport nur bei
eindeutig erkannter vollständiger Rückzahlung. Finanzieller Effekt 0 €, Einsatz nicht mehr
offen, aber statistisch nicht bewertet: außerhalb des Trefferquoten-Nenners und von
`lernWetten()`. Historie zeigt einen eigenen Status statt „verloren“. Spielstatus/Parkung
setzt niemals automatisch einen Wettstatus. Teilrückzahlung und Kombi-Sonderfälle bleiben
außerhalb dieses Schritts.

### Tests und unabhängige Testfunde

`tests/t10_ausnahmen.js` deckt Fälligkeit, fehlende Anpfiffzeit, ESPN-Positivliste,
ESPN-Ausnahmestatus einschließlich unbekanntem `completed=true`-Status, football-data-
Freigabe, OpenLigaDB-Parkung ohne KI, OpenLigaDB-Evidence und Wiederprüfen-Folge,
3×-KI-Verlaufbeleg, Unklarheit/Abweichung, Datumsgrenze, Bestandschutz, „Einsatz zurück“ und
Fotoimport ab. t2/t4-Mocks wurden nur um den positiven ESPN-/KI-Verlaufbeleg ergänzt, den ihre
bisher als normal gedachten Testfälle nach der neuen Regel explizit benötigen.

**t3-Zeitfehler:** Der bestehende Test addierte +180/+240 Minuten nur auf `HH:MM` und
verwarf beim Tageswechsel das Datum. Ein Abendlauf machte damit aus „morgen 01:00“ fälschlich
„heute 01:00“; der bestehende Produkt-Anstoßschutz reagierte korrekt, t3 fiel zeitabhängig.
Reparatur nur im Test: deterministische Testuhr mit genügend Resttag; alle beabsichtigten
Prüfungen (Parallelstart, Resume, Anstoßschutz, Checkpoint-Reihenfolge) bleiben unverändert.
Der erste echte GitHub-Lauf nach dieser Korrektur bestätigte t1–t4 einschließlich t3.

**Dasselbe unabhängige Zeitproblem in t5:** Nach dem grünen t3 lief der echte GitHub-Lauf bis
t5 und zeigte dort dieselbe alte `HH:MM`-Tageswechselkonstruktion in den
Vorhersage-Checkpoint-Fällen. Auch t5 erhält deshalb ausschließlich eine deterministische
Testuhr; Speicherbarrieren, Fehlerbedingungen und Sollsemantik bleiben unverändert.

**Vollständiger GitHub-Staginglauf vor dem finalen main-Pin:** `python3 pruefe.py` =
`ERGEBNIS: ALLES SAUBER`, Node-Syntaxprüfung PASS und t1–t10 vollständig PASS:
t1 43, t2 80, t3 51, t4 72, t5 41, t6 43, t7 35, t8 35, t9 52, t10 48 —
insgesamt 500 Prüfungen, 0 fehlgeschlagen.

### Nicht in Schritt 1

14-Tage-Nachprüfung bereits akzeptierter Resultate, Rollback bereits bewerteter Einträge,
mehrere Provider-IDs je Provider, Änderungen am ESPN-Sammelskript, Teilrückzahlungen und
Parlay-Sonderlogik.

**Kosten.** Kein neuer Dienst, kein zusätzlicher KI-Lauf. Vor Fälligkeit entstehen keine
Ergebnisabrufe. ESPN-Ausnahmestatus und OpenLigaDB-Treffer parken ohne KI-Fallback und können
damit KI-Kosten vermeiden.


### Testnachbesserung t10 — Fälligkeit, 6.10.2026

Nur `tests/t10_ausnahmen.js` wurde fachlich am Test geändert; `beta.html` bleibt bytegenau
unverändert. Die Uhr bleibt in den beiden Vor-Fälligkeitsfällen jetzt aktiv, bis ein gestarteter
Prüflauf wirklich beendet ist. Da der korrekte Fälligkeitsfilter vor dem Anlegen von
`state.pruefRun` synchron zurückkehrt, wartet der Test in diesem Fall 1000 ms auf einen
unerwartet doch gestarteten Lauf; das ist bewusst länger als Claudes belegte 500-ms-Gegenprobe.
Zusätzlich muss je Fall eine Minute nach Fälligkeit mindestens ein Abruf stattfinden.

Mutationsnachweis mit einer Wegwerfkopie von `beta.html`, in der ausschließlich
`posten = posten.filter(function(p){ return pruefIstFaellig(p.datum,p.anpfiff); });`
entfernt wurde: unveränderte `beta.html` → t10 **48/48**; Mutation → **46/48**, und genau
„1: eine Minute vor Faelligkeit kein Ergebnisabruf“ sowie
„2: eine Minute vor Ersatz-Faelligkeit ebenfalls kein Ergebnisabruf“ schlagen fehl.
Die positive Gegenprobe erzeugt in beiden Fällen Abrufe. Alle übrigen t10-Aussagen zu
„0 Abrufe“, „keine KI-Anfrage“ oder „kein Fallback“ wurden auf Frühzählung geprüft:
ESPN-, football-data- und OpenLigaDB-Fälle warten auf das echte Laufende; die Bestandschutz-
Nullabrufprüfung hat synchron keine offenen Posten und startet daher keinen asynchronen
Abrufpfad. Keine weitere Teständerung nötig.

**Kosten:** keine. Kein neuer Dienst und kein Modellaufruf im App-Betrieb.
