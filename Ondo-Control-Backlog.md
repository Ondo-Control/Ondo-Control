# ONDO CONTROL — Rückstand-Verzeichnis (Backlog)
**Nur offene Punkte. Gepflegt von Claude · Stand 29.8.2026, Fassung 57 · jede Idee mit Datum, Urheber und Status**
*Erledigtes, alte Fassungsnotizen und Prueflaeufe stehen in `BACKLOG-ARCHIV.md` — nur auf Zuruf zu lesen.*

## Regeln für dieses Dokument

1. **Abgrenzung (ChatGPT, 23.7.):** Architektur lebt ausschließlich in `Blueprint.md` und `Ondo-Core-Architektur.md`. Dieses Dokument enthält **nur Aufgaben, Ideen und deren Status** — keine Architekturregeln.
2. Claude schlägt Punkte von sich aus zum passenden Zeitpunkt vor. Ondo entscheidet, was und wann gebaut wird (Art. 8).
3. Nichts wird gelöscht. Abgelehnt und überholt bleiben sichtbar.

**Status-Werte:** `Idee` · `beschlossen` · `gebaut` · `bewährt` (im Alltag getestet) · `überholt` · `abgelehnt`

**Übergabe an die Prüfer — GEÄNDERT am 30.7.:** Der Eintrag vom 23.7. („Raw-Links funktionieren nur bei Claude, ChatGPT und Gemini brauchen Anhänge") ist **überholt**. GitHub Pages wandelt Markdown in HTML um; diese Adressform funktioniert bei ChatGPT:
`https://ondo-control.github.io/Ondo-Control/PROJEKT-STATUS.html` (entsprechend für Backlog, Blueprint, Ondo-Core-Architektur). Einzelheiten und Folgen stehen in `PROJEKT-STATUS.md`.

**Dateinamen von Berichten an die Prüfer (28.7., Ondo):** Beginnen mit Datum und Uhrzeit — `2026-07-31_1430_Ondo-Control_Thema.md`.

---

## ⚠ Was Fassung 57 ändert (29.8., Rückberichtigung Chat 25/26, Nutzungsdaten-Ablesung 22:52 Uhr, drei neue Selbstauskünfte)

**Anlass:** Ondo hat Fassung 56 selbst korrigiert: Die dort vorgenommene Trennung Chat 25 / Chat 26 war falsch — er hatte den Selbstauskunft-Prompt versehentlich noch im alten Chat-Fenster (Chat 25) abgeschickt. Die „21:43-Uhr-Auskunft" war also Chat 25s eigener Endstand, keine zweite Sitzung. Der allererste Stand aus Fassung 55 (15→17 Prompts, eine Sitzung) war die ganze Zeit richtig.

- **`STAND.md`:** (d) wieder zusammengeführt (15→17 Prompts, Chat 25, Endstand). (f) als entfallen markiert, nicht gelöscht — mit Vermerk, worauf sich das bezieht. Zweite Berichtigung direkt neben der ersten eingetragen (nicht überschrieben), mit der Lehre, dass auch eine Ondo-Korrektur geprüft werden kann, sobald neue Belege vorliegen.
- **Richtwert-Prüfung aus Fassung 55** entsprechend nachgerechnet: sechs statt sieben Selbstauskünfte — Ergebnis unverändert, 23,8 KB/Prompt bleibt stehen.
- **Neue Ablesung:** 29.8.2026, 22:52 Uhr — 12 % (5-Stunden-Fenster) / 54 % (Wochenlimit), ersetzt die vom 28.8., 21:43 Uhr vollständig. Wochenlimit-Anstieg über Nacht: 47 %→54 % (7 Punkte).
- **Drei neue Selbstauskünfte zum 29.8.:** (h) Chat 26, echte gesamte Sitzung 28.–29.8. (24 Nachrichten, 22 Sonnet + 2 Opus, Aufwand hoch bis sehr hoch, eigene Schätzung 700–900 KB gegen rechnerische 524 KB aus dem Richtwert), (i) unabhängiger, projektfremder Chat (2 Prompts, Opus/Hoch + Sonnet/Mittel, geschätzt 260–420 KB, ausdrücklich für den Kontingent-Zusammenhang mitgezählt), (j) diese Code-Sitzung für diesen Auftrag.

- **Fassungszahl:** alle drei aktiven Dokumente auf 57 gehoben (Blueprint 0.56), Datum auf 29.8.2026 vorgerückt. `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 56 ändert (28.8., abends, Berichtigung: Chat 25 und Chat 26 fälschlich zusammengelegt)

**Anlass:** Ondos Rückfrage zu Fassung 55 — dort stand, die 21:43-Uhr-Selbstauskunft „Ondos Chat-Sitzung" sei dieselbe Sitzung wie die bereits bestehende Auskunft (d), nur später fortgeführt (15→17 Prompts). **Das war falsch.** (d) ist Chat 25, bis zur Übergabe an Chat 26. Die 21:43-Uhr-Auskunft ist Chat 26 — eine eigene, neue Sitzung, hervorgegangen aus der Übergabe, die in dieser Sitzung selbst dokumentiert ist (Übergabemappe und Abnahme). Der Fehler entstand aus blosser Textähnlichkeit der Tätigkeitsbeschreibung, ohne die bereits belegte Chat-25→26-Trennung zu prüfen (Arbeitsregel H: belegen statt herleiten).

- **`STAND.md`:** (d) auf den ursprünglichen Chat-25-Stand zurückgesetzt (15 Prompts, bis zur Übergabe). Neuer, eigenständiger Punkt (f): Chat 26, 17 Prompts, Stand 21:43 Uhr, ausdrücklich als eigene Sitzung gekennzeichnet. Die bisherige eigene Sitzungs-Auskunft rückt von (f) auf (g).
- **Richtwert-Prüfung entsprechend nachgerechnet:** sieben Selbstauskünfte (a)–(g) statt sechs. Ergebnis unverändert — keine einzige stuft sich selbst als „Mittel" ein, der Richtwert (23,8 KB/Prompt) bleibt unverändert.
- **Berichtigungsvermerk** direkt bei (d)/(f) in `STAND.md` eingetragen, nicht stillschweigend überschrieben.

- **Fassungszahl:** alle drei aktiven Dokumente auf 56 gehoben (Blueprint 0.55). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 55 ändert (28.8., abends, Nutzungsdaten-Ablesung 21:43 Uhr, Sitzungs-Selbstauskünfte nachgeführt, Richtwert überprüft)

**Anlass:** Neue Ablesung von Ondo (28.8., 21:43 Uhr), ersetzt die vom selben Tag 13:33 Uhr vollständig. Dazu eine neue Selbstauskunft dieser Sitzung seit dem 13:33-Uhr-Auftrag sowie eine nachgetragene Aktualisierung von Ondos eigener Chat-Sitzung, und die im Auftrag verlangte Überprüfung des Richtwerts.

- **`STAND.md`, Nutzungslimit-Abschnitt:** Ablesung 13:33 Uhr (85 % / 33 %) vollständig ersetzt durch 21:43 Uhr (49 % / 47 %). Neuer Vermerk: drei verschiedene 5-Stunden-Sitzungsfenster liefen am 28.8. nacheinander; das Wochenlimit stieg um 21 Prozentpunkte (26 %→47 %) über den ganzen Tag, verteilt auf alle heutigen Sitzungen.
- **Sitzungs-Selbstauskunft (d)** (Ondos Chat-Sitzung, „Vorgänger von Chat 26") auf den 21:43-Uhr-Stand aktualisiert (15→17 Prompts) — **als Aktualisierung derselben Sitzung erkannt und korrigiert, nicht als neuer, siebter Eintrag doppelt gezählt**: Der ursprüngliche Auftragstext hätte das als eigenen Punkt eingetragen, die Beschreibung deckte sich aber praktisch wörtlich mit (d).
  > **🔴 BERICHTIGT, Fassung 56, noch am selben Abend:** Das war falsch — (d) ist Chat 25, die 21:43-Uhr-Auskunft ist Chat 26, eine eigene neue Sitzung (Übergabe in dieser Sitzung dokumentiert). Aus Textähnlichkeit hergeleitet statt belegt. Beide stehen jetzt als eigene Punkte (d) und (f) in `STAND.md`.
- **Neue Selbstauskunft (f):** diese Code-Sitzung, 12 Prompts seit dem 13:33-Uhr-Auftrag bis einschliesslich dieses Auftrags, Aufwand sehr hoch, grob 400–700 KB geschätzt.
- **Richtwert überprüft, nicht ersetzt:** Alle sechs Selbstauskünfte gegeneinander geprüft — keine stuft sich selbst als „Mittel" ein, sie liegen an den Extremen. Ein Durchschnitt darüber würde keinen neuen „Mittel"-Wert ergeben, sondern unvergleichbare Aufwandsstufen vermischen. **23,8 KB/Prompt (Stand 27.8.) bleibt deshalb unverändert.**

- **Fassungszahl:** alle drei aktiven Dokumente auf 55 gehoben (Blueprint 0.54). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 54 ändert (28.8., Nachfrage zu Punkt 64 — Modellversion bei refRoh ergänzt)

**Anlass:** Ondos Nachfrage, ob `refRoh` (Punkt 64, Fassung 53) auch festhält, welches Schiedsrichter-Modell tatsächlich geantwortet hat — Hintergrund: `gemini-flash-latest` ist ein beweglicher Alias.

- **Befund:** Nein, bisher nicht. Geprüft und belegt: Die Gemini-API liefert dafür ein eigenes Feld `modelVersion` (die aufgelöste Version, nicht der Alias) — Beleg über `ai.google.dev`.
- **`beta.html` v19.8.6:** `modelVersion` wird jetzt durchgereicht und landet als `modell` an jedem neuen `refRoh`-Eintrag. Bei Gemini die aufgelöste Version oder `null` (nicht geraten, falls sie fehlt), bei Sonnet als Rückfallpfad der feste Modellname. Nur künftige Läufe, keine rückwirkende Ergänzung.
- **Verifiziert:** `node --check` bestanden, drei Fixture-Fälle im Python-Nachbau bestanden, `pruefe.py` ALLES SAUBER.

- **Fassungszahl:** alle drei aktiven Dokumente auf 54 gehoben (Blueprint 0.53). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert.)*

---

## ⚠ Was Fassung 53 ändert (28.8., Punkt 64 gebaut — rohe Schiedsrichter-Antwort mitgeschrieben, Celje/Sabah markiert)

**Anlass:** Ondo hatte Punkt 64 bereits in Chat 25 unter der Bedingung „wenn alles passt" entschieden — hier zum ersten Mal im Backlog nachgetragen (Arbeitsregel F) und im selben Zug gebaut.

- **`beta.html` v19.8.5:** `verarbeite()` schreibt die volle rohe Schiedsrichter-Antwort jeder Runde an jeden betroffenen `kiProtokoll`-Eintrag (`e.refRoh`, Array), unabhängig vom Status. `save()` läuft jetzt nach jeder Runde, nicht erst bei Übernahme — sonst wären Antworten wie bei Celje/Sabah (nie übernommen) verloren gegangen.
- **Celje/Sabah markiert:** neues Feld `parkGrund`, Migration in `load()` (`seedV<5`, gleiches Muster wie die v18-Archiv-Markierung), Stichwort+Datum-Abgleich statt exaktem Text (Grenze offen benannt, Einzelheiten bei Punkt 64). Sichtbar im Log, damit Ondo die Markierung selbst nachprüfen kann. Kein Entparken, keine Neubewertung jetzt — erst nach Reparatur des Schiedsrichters.
- **1 neuer Sprachschlüssel** (`parkGrundInstabil`) — Sprachschlüsselzahl in `STAND.md` 228 → 229.
- **Verifiziert:** `node --check` bestanden, drei Fixture-Fälle im nicht committeten Python-Nachbau bestanden, `pruefe.py` ALLES SAUBER.

- **Fassungszahl:** alle drei aktiven Dokumente auf 53 gehoben (Blueprint 0.52). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(unverändert — Punkt 64 war „Idee", nicht „beschlossen", zählt daher nicht zu dieser Liste.)*

---

## ⚠ Was Fassung 52 ändert (28.8., Punkt 51 gebaut — gepaarter Vergleich Sonnet gegen Flash)

**Anlass:** Backlog-Punkt 51 war beschlossen, Voraussetzung seit 27.8. erfüllt. Ondo hat sich für eine feste Funktion in der App entschieden.

- **`beta.html` v19.8.4:** neue Funktion `calcGepaartVergleich()` und Anzeige `gepaartBlock()` im Tab „Finanzen", direkt unter der Kalibrierungsanzeige. Für jedes Spiel, das beide Gehirne bewertet haben, je Markt die Anzahl nur-Sonnet/nur-Flash/beide-richtig/beide-falsch. Reine Zahlen, keine Wertung im Code.
- **Paarung über exakten Spielnamen + Datum**, nicht über den Listen-Index — vor dem Bauen gegen Backlog-Punkt 41 geprüft, betrifft dieses Feld nicht (Einzelheiten bei Punkt 51). Mehrdeutige Fälle (Doppel-Läufe) werden nicht gepaart, sondern separat ausgewiesen.
- **`calcKalibrierung`/`maerkteBauen` unverändert**, kein Schnitt in der Messreihe, keine gespeicherte Vorhersage angefasst.
- **11 neue Sprachschlüssel** (DE/FR/EN) — Sprachschlüsselzahl in `STAND.md` 217 → 228.
- **Verifiziert:** `node --check` bestanden, vier Fixture-Fälle in einem nicht committeten Python-Nachbau bestanden, `pruefe.py` ALLES SAUBER.

- **Fassungszahl:** alle drei aktiven Dokumente auf 52 gehoben (Blueprint 0.51). `Ondo-Core-Architektur.md` unverändert. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: zwei** — **3, 4.** *(Punkt 51 verlässt die Liste, weil gebaut.)*

---

## ⚠ Was Fassung 51 ändert (28.8., Beteiligtenkreis aktualisiert — Ondos Entscheidung)

**Anlass:** Ondo hat am 28.8.2026 entschieden, wer weiter am Projekt beteiligt ist. Keine Empfehlung, sondern umgesetzt. Nichts gelöscht — historische Einträge bleiben stehen, geändert wird nur, was den heutigen Zustand beschreibt, mit datierten Vermerken.

- **Gemini scheidet aus** (mangelnder Nutzen). **DeepSeek** war ohnehin nie Beteiligter hier, nur zur Klarstellung vermerkt.
- **Beteiligt ab jetzt:** Ondo (Entscheider) · Claude (Entwickler und Archivar) · ChatGPT (Architekt und Prüfer) · Mistral (auf dem Prüfstand).
- **`STAND.md`:** Rollen-Zeile aktualisiert, datierter Vermerk zu Gemini ergänzt · „Gegenprobe mit Gemini" als gegenstandslos markiert · „alle vier" → „alle drei" Prüfer bei Berichten · Abschnitt „Dateizugriff": ChatGPTs eigener GitHub-Zugriff vermerkt, GitHub-Pages-Weg bleibt als Rückfallweg, Sperrvermerk für Übergabemappen ausdrücklich als weiterhin (eher verschärft) geltend bestätigt.
- **Backlog Punkt 62 (Mistral):** Prüfstand-Status, Ondos Absicht (Schulung in eigenem Projekt, mögliches lokales Modell später) als Absicht vermerkt, dazu Claudes Einordnung — ein lokales Modell hat keine Websuche, käme nicht als Gehirn oder Schiedsrichter infrage, wohl aber als Prüfer für Dokumente/Code/Skripte.
- **Backlog Punkt 11 und Blueprint Abschnitt 10 (Rollenmodell):** Geminis Doppelrolle-Konfliktregel als gegenstandslos vermerkt; die andere Konfliktregel (Architekt ≠ unabhängiger Prüfer) bleibt offen und betrifft jetzt ChatGPT.
- **Backlog Punkt E, Blueprint Abschnitt 10 und die Vormerk-Tabelle:** Vermerk, dass die offene 0:0-Sachfrage trotz Geminis Ausscheiden unverändert gültig bleibt.

- **Fassungszahl:** alle drei aktiven Dokumente auf 51 gehoben (Blueprint 0.50). `Ondo-Core-Architektur.md` unverändert, nicht betroffen. Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: drei** — **3, 4, 51.** *(unverändert — diese Fassung ändert keinen Punkt-Status.)*

---

## ⚠ Was Fassung 50 ändert (28.8., Leeds-Leipzig-Parkstatus eindeutig gemacht, Chat-26-Übergabe abgenommen)

**Anlass:** Die Übergabemappe an Chat 26 formulierte „Leeds–Leipzig bleibt geparkt" mehrdeutig — sie liess offen, ob das ein bereits bestätigter Zustand oder eine noch ausstehende Handlung ist, und Chat 26 hat diese Lücke bei der Übergabe zu Recht aufgegriffen. Ondo hatte den Parkstatus bereits gegenüber Chat 25 bestätigt; diese Bestätigung stand nur in jenem Gespräch, nicht im Dokument.

- **Punkt 51 (und der Fassung-48-Kurzeintrag bei Punkt 36) eindeutig gemacht:** Leeds–Leipzig **ist geparkt**, von Ondo bestätigt, kein offener Ausführungsschritt in der App. Lehre eingetragen: eine Ondo-Bestätigung aus einem anderen Chat gehört in derselben Antwort ins Dokument (Arbeitsregel F), nicht nur ins Gespräch.
- **Übergabe an Chat 26 geprüft und abgenommen:** Alle neun Kontrollfragen aus Teil B korrekt beantwortet — Einzelheiten in der separaten Abnahme-Datei (nicht im Repo, wie vorgeschrieben).
- **Kein neuer Backlog-Punkt-Status geändert.**

- **Fassungszahl:** alle drei aktiven Dokumente auf 50 gehoben (Blueprint 0.49). Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: drei** — **3, 4, 51.** *(unverändert.)*

---

## ⚠ Was Fassung 49 ändert (28.8., neue Nutzungsdaten-Ablesung und fünf Sitzungs-Selbstauskünfte)

**Anlass:** Branch `claude/ergebnisse-pruefen-28-8-mnq1au` nach `main` gemergt (Fassung 48 damit auf `main`). Danach neue Nutzungsdaten-Ablesung von Ondo (28.8.2026, 13:33 Uhr) und fünf gesammelte Sitzungs-Selbstauskünfte in `STAND.md` eingetragen.

- **`STAND.md`, Abschnitt „Nutzungslimit-Schätzung":** Ablesung vom 27.8., 23:08 Uhr (34 % / 26 %) vollständig ersetzt durch die vom 28.8., 13:33 Uhr (85 % / 33 %, Nutzungsguthaben 0 Punkte, Funktion aus). Vermerk ergänzt: Der Anstieg des Wochenlimits von 26 % auf 33 % über den 28.8. verteilt sich auf mehrere Sitzungen, nicht auf eine einzelne.
- **Fünf Sitzungs-Selbstauskünfte (a–e)** direkt darunter eingetragen, ausdrücklich als Selbsteinschätzungen gekennzeichnet, keine gemessenen Werte (Art. 14): zwei geringe (gestrige Code-Sitzung, Job-Recherche Haiku 4.5), eine sehr aufwendige (externe Prüfung der 18 Ergebnisse, rund 30 Websuchen), eine hoch bis sehr hoch (Vorgänger-Chat von Chat 26, über 200 KB grob geschätzt), und diese Code-Sitzung selbst (ebenfalls hoch bis sehr hoch, grob geschätzt eher über 200 KB, nicht unabhängig gegengeprüft).
- **Kein Backlog-Punkt-Status geändert.** Reine Nutzungsdaten-Pflege, wie schon bei Fassung 47.

- **Fassungszahl:** alle drei aktiven Dokumente auf 49 gehoben (Blueprint 0.48). Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: drei** — **3, 4, 51.** *(unverändert.)*

---

## ⚠ Was Fassung 48 ändert (28.8., Restarbeit zu Punkt 51 — drei geparkte Spiele extern gegengeprüft, elfte Fehlerart des Schiedsrichters, neue Untersuchung zu Punkt 26)

**Anlass:** Ondo hatte am 8.8.2026 über „Wieder prüfen" 18 Vorschläge aus ERGEBNISSE PRÜFEN erzeugt. Eine unabhängige externe Prüfung (separater Chat, eigene Websuche je Spiel) hat alle 18 gegengeprüft: 15 waren fehlerfrei und sind bereits übernommen, drei waren fehlerhaft und wurden NICHT übernommen — NK Celje–Slovan Bratislava, Sabah FC–Hapoel Beer-Sheva FC, Leeds United–RB Leipzig.

- **Punkt 36:** Leeds–RB Leipzig ist bei dieser Prüfung erneut aufgetaucht — dreifach durch Primärquellen belegt (Vereinsseite, Sportschau/ARD, Sky Sport): 120 Minuten, zweites Tor in der 109. Minute. **🔴 Berichtigt, kein neuer dritter Fall:** Es ist dasselbe Spiel, das seit dem 9.8. als ERSTER Beleg in diesem Punkt steht — nicht ein zusätzlicher, dritter Fall. Wichtiger: Die Annahme aus Punkt 51 vom 27.8. („Stand nach 90 Minuten ist bekannt und gesichert: 1:0") ist mit diesem Fund fraglich geworden — bei 60/60 Minuten gibt es keine reguläre 90-Minuten-Marke, die Halbzeit liegt bei Minute 60. Einzelheiten und die Berichtigung stehen bei Punkt 51. **Ondo (28.8.): Leeds–Leipzig ist geparkt, keine Übernahme — bereits bestätigt (auch Chat 25 mitgeteilt).** Kein offener Ausführungsschritt in der App. Punkt 36 selbst bleibt unentschieden.
- **Punkt 51 berichtigt:** Die Ausführung vom 27.8. („Einzige Paarung, die entparkt wird") hat sich mit dem heutigen Fund als voreilig herausgestellt — siehe dort.
- **Neue, elfte Fehlerart des Schiedsrichters** in `STAND.md` aufgenommen: NK Celje–Slovan Bratislava und Sabah FC–Hapoel Beer-Sheva FC liefen je dreimal bei Temperatur 0 und ergaben je drei verschiedene Endstände; keiner der sechs Läufe traf den extern belegten Wert. Bezug zum ersten, schwächeren Einzelfall vom 13.8. (Apollon Limassol–SK Brann, bereits Fehlerart 10).
- **Code-Untersuchung (nichts gebaut, nur belegt, Art. 8):** Die rohe Schiedsrichter-Antwort wird nirgends gespeichert — nur die daraus geparste Endstands-Angabe erreicht `pruefListe`. Codebeleg: `beta.html`, `geminiCall` (Zeile ~1141/1145, Text `txt` wird nur zurückgegeben, nie in `state` geschrieben), `parseJsonBlock` (Zeile 1167ff., verwirft den Rest des Texts), `verarbeite` (Zeile 1529ff., übernimmt nur geparste Felder). Temperatur 0 ist unbedingt für **jeden** Aufruf mit `rolle:'ref'` gesetzt (Zeile 1082, keine Ausnahme im Code gefunden). Der Modellname `gemini-flash-latest` ist laut Googles eigener Dokumentation ein beweglicher Alias, der bei jeder neuen Freigabe ausgetauscht wird (Ankündigungsfrist zwei Wochen bei Breaking Changes); ein fest benennbares, nicht-bewegliches Modell existiert derzeit (`gemini-3.7-flash`, GA/stabil) und liesse sich ohne Codeänderung über das bestehende Modell-Dropdown auswählen — Kosten/Folgen bei Punkt 64 und im Chat-Bericht, **nicht umgestellt.**
- **Neuer Punkt 64 aufgenommen** (Idee, nicht gebaut): rohe Schiedsrichter-Antwort mitschreiben.

- **Fassungszahl:** alle drei aktiven Dokumente auf 48 gehoben (Blueprint 0.47). Kein Verfassungsartikel geändert, keine neue Arbeitsregel.
- **Beschlossen und nicht gebaut: drei** — **3, 4, 51.** *(unverändert — Punkt 64 ist neue Idee, keine Entscheidung; die Berichtigung bei 36/51 ändert an deren Status nichts.)*

---

## ⚠ Was Fassung 47 ändert (27.8., Nutzungslimit-Ablesung und Richtwert)

**Neue Ablesung (Ondo, 23:08 Uhr):** 5-Stunden-Sitzung 34 %, Wochenlimit 26 %. Ondos Einordnung, festgehalten in `STAND.md`: Da die Woche heute begann, entspricht das Wochenlimit an diesem Tag praktisch dem Tagesverbrauch über alle drei heute gelaufenen Sitzungen (dieser Chat, Jarvis-Vergleichs-Sitzung, Chat 25). Aus den drei Sitzungen zusammengetragen: rund 42 Prompts, rund 1 MB bewegter Text — als grober Richtwert festgehalten, ausdrücklich keine Formel.

- **Fassungszahl:** alle drei aktiven Dokumente auf 47 gehoben (Blueprint 0.46). Kein Blueprint-Inhalt geändert.
- **Beschlossen und nicht gebaut: drei** — **3, 4, 51.** *(unverändert.)*

---

## ⚠ Was Fassung 46 ändert (27.8., Fehlerart C3 in STAND.md berichtigt)

**Fund von Chat 25**, bei der Gegenprüfung des Übergabeberichts zu Fassung 45: Der neue Abschnitt „Messmethodik" bzw. der Bau von Punkt E und Punkt 2 hatte zwei ältere Zeilen in STAND.md, Abschnitt „Entscheidungen, die bei Ondo liegen", überholt gemacht, ohne dass das im selben Durchgang geprüft wurde — Fehlerart C3 (neuer Abschnitt geschrieben, Folgewirkung an anderer Stelle im Dokument nicht geprüft).

- **Gestrichen:** Zeile „2 — Erster Lernschritt — beide Prüfer raten, zunächst nur Flash zu korrigieren" — Punkt 2 ist seit Fassung 45 gebaut, keine offene Entscheidung mehr.
- **Gestrichen:** Zeile „Echtes 0:0 — Wie unterscheidet der Auftragstext ein echtes 0:0 von 'nicht gefunden'? Muss vor Punkt E beantwortet sein" — laut dem Backlog-Eintrag zu Punkt E war das bereits am 8.8. von Gemini selbst beantwortet, und Punkt E ist seit Fassung 45 gebaut.
- Sonst nichts an dem Abschnitt geändert.

- **Fassungszahl:** alle drei aktiven Dokumente auf 46 gehoben (Blueprint 0.45).
- **Beschlossen und nicht gebaut: drei** — **3, 4, 51.** *(unverändert — diese Berichtigung betraf nur die Ondo-Entscheidungsliste in STAND.md, keinen Backlog-Status.)*

---

## ⚠ Was Fassung 45 ändert (27.8., zweiter Prio-1-Batch: E, 2 gebaut, 3 berichtigt, 50 entschieden, 51 geprüft)

**Vier Punkte auf einmal bewegt, alle mit Ondos ausdrücklicher Entscheidung oder Delegation:**

- **Punkt E gebaut:** Schiedsrichter-Auftrag bestätigt jetzt anhand von Wettbewerb+Datum+Teams, statt frei zu suchen; plus Geminis 0:0-Vorsichtsregel. `beta.html` auf v19.8.3. Ondos Auflage: nicht wirkt es, wird es zurückgenommen oder ersetzt.
- **Punkt 2 gebaut:** Flash bekommt seine Kalibrierungs-Lehre im Auftragstext mitgeteilt (Wortlaut von Ondo bestätigt), Sonnet unverändert. Ebenfalls v19.8.3.
- **Punkt 3 berichtigt:** Die Behauptung „Pause bricht den zweiten Teil" war seit dem 25.8. widerlegt (neue Vorhersagen laut KI-Log vorhanden). Ondos Entscheidung trotzdem: vorerst ruhen lassen.
- **Punkt 50 entschieden (Claude, delegiert):** nicht gebaut — Pflegeaufwand ohne belegten Nutzen.
- **Punkt 51 geprüft:** Alle 54 geparkten Einträge einzeln auf ihren Grund geprüft, 26 von 27 Paarungen bereits in Archivdokumenten belegt (keine Websuche nötig). Nur eine Paarung (Leeds–Leipzig, 8.8.) wird entparkt, mit genauer Klick-Anleitung für die App.

- **Fassungszahl:** alle drei aktiven Dokumente auf 45 gehoben. `beta.html` auf v19.8.3 (Beta-Version-Eintrag in STAND.md aktualisiert).
- **Beschlossen und nicht gebaut: drei** — **3, 4, 51.** *(E und 2 verlassen die Liste, weil gebaut. 50 verlässt die Liste, weil entschieden. Das ist die massgebliche Stelle für diese Zahl; ältere Vorkommen weiter unten sind Verlauf.)*

---

## ⚠ Was Fassung 44 ändert (27.8., Widerspruch in Punkt E berichtigt)

**Fehlerart C4 behoben: Punkt E enthielt zwei sich widersprechende Aussagen zum selben Sachverhalt.** Ein Satz vom 8.8. („NICHT MEHR BLOCKIERT") sagt, Gemini habe die eigene Rückfrage vom 4.8. selbst beantwortet (Zustand vor Ziffer). Ein älterer, nie berichtigter Satz stand trotzdem weiter als „Offene Rückfrage von Gemini, bisher unbeantwortet" daneben. Berichtigt: die Frage ist beantwortet, nicht mehr offen — offen ist nur noch Ondos Entscheidung, ob Geminis Antwort gegen ChatGPTs Widerspruch übernommen wird.

- **Fassungszahl:** alle drei aktiven Dokumente auf 44 gehoben. Kein Blueprint-Inhalt geändert, keine Versionsänderung dort nötig.
- **Beschlossen und nicht gebaut: sechs** — **E, 2, 3, 4, 50, 51.** *(unverändert — Punkt E ist weiterhin nicht gebaut, nur sein Text war widersprüchlich.)*

---

## ⚠ Was Fassung 43 ändert (27.8., erster Prio-1-Punkt seit dem Aufräumtag)

**Punkt 49 gebaut: neuer Abschnitt „Messmethodik und Interpretationsgrenzen" in `STAND.md`, direkt vor „Aktueller Messstand". Jede Aussage an Code oder bestehendem Satz belegt, keine neue Methode entschieden.**

- **Fassungszahl:** alle drei aktiven Dokumente auf 43 gehoben. Kein Blueprint-Inhalt geändert, keine Versionsänderung dort nötig.
- **Beschlossen und nicht gebaut: sechs** — **E, 2, 3, 4, 50, 51.** *(Punkt 49 verlässt die Liste, weil er jetzt gebaut ist.)*

---

## ⚠ Was Fassung 42 ändert (27.8., nach dem Ondo-Jarvis-Vergleich)

**Punkt 60 geklärt und gebaut: 217 Sprachschlüssel war die richtige Zahl, Mistrals Zählung hatte unterzählt. `pruefe.py` zählt jetzt selbst nach (neuer Abschnitt 13). Neuer Punkt 63 aufgenommen (nicht gebaut). Ein Beleg zur offenen GitHub-Actions-Verfassungsfrage im Blueprint ergänzt.**

- **Anlass:** Ein Strukturvergleich zwischen Ondo Control und dem Schwesterprojekt `ondo-jarvis`, in einer eigenen Sitzung mit Zugriff auf beide Repos erstellt, von Chat 25 und Claude unabhängig bewertet.
- **Fassungszahl:** alle drei aktiven Dokumente auf 42 gehoben, Blueprint auf 0.41.
- **Beschlossen und nicht gebaut: sieben** — **E, 2, 3, 4, 49, 50, 51.** *(unverändert — Punkt 60 war GEFUNDEN, nicht beschlossen, und Punkt 63 ist neue Idee, keine Entscheidung.)*

---

## ⚠ Was Fassung 41 ändert (27.8., Sammel-Batch)

**Sechs offene Verwaltungspunkte in einem Zug geschlossen, auf Ondos ausdrücklichen Wunsch: `pruefe.py`-Kopfprüfung auf Fassungszahl umgestellt (kein Zeitstempel mehr nötig) · Punkt 52 geschlossen (`PROJEKT-STATUS.md` nach `archiv/` verschoben) · Punkt 53 zurückgestellt · Punkt 56 beantwortet · Übergaberegel für den Code-Bereich abgeschwächt (neuer Punkt 61) · Mistral-Zusammenarbeit als eigener Punkt nachgetragen (Punkt 62). Prioritätsgruppe „Chats und Arbeitsstruktur" damit im Kern abgeschlossen.**

- **Fassungszahl statt Zeitstempel:** `STAND.md`, Backlog und Blueprint tragen ab jetzt dieselbe Ganzzahl im Kopf (hier: 41), `pruefe.py` Abschnitt 1 vergleicht nur noch diese drei Zahlen untereinander — kein Kommandozeilen-Argument mehr nötig. Behebt Punkt 59 strukturell, nicht nur dokumentiert als Ausnahme.
- **Beschlossen und nicht gebaut: sieben** — **E, 2, 3, 4, 49, 50, 51.**

---

## ⚠ Was Fassung 40 ändert (27.8., morgens)

**Punkt 59 geklärt: Kein Fehler im Projekt — die drei Zeitstempel-FEHL entstanden, weil betroffenen `pruefe.py`-Läufen eine frisch abgelesene Uhrzeit übergeben wurde, obwohl die Aufträge keines der drei Kopf-Dokumente inhaltlich änderten. `CLAUDE.md` neu erzeugt.**

- **Zeitstempel:** alle aktiven Dokumente auf die Ablesung 08:01 Uhr gehoben, Blueprint auf 0.39 gehoben — nur der Kopf, kein Inhalt ausser der Klärung von Punkt 59 im Backlog.
- **Beschlossen und nicht gebaut: sieben** — **E, 2, 3, 4, 49, 50, 51.**

---

## ⚠ Was Fassung 39 ändert (24.8., nachts)

**Punkt 53: Der Fund vom 23.8. zum Feld „Anweisungen" berichtigt (Arbeitsregel H) — der dort verwendete Lesezugang über `github.com/.../blob/...` wurde noch in derselben Nacht widerlegt, das Feld ist seither wieder leer.**

- **Zeitstempel:** alle aktiven Dokumente auf die Ablesung 09:54 Uhr, Blueprint auf 0.38 gehoben — nur der Kopf, kein Inhalt ausser der Berichtigung im Backlog. **Ausdrücklicher Vermerk:** Diese Zeit stammt aus einer Werkzeug-Systemuhr, nicht von Ondo persönlich abgelesen — Abweichung von Arbeitsregel M mit Ondos ausdrücklicher Zustimmung in dieser einen Nacht (24.8., spät). Für künftige Aufträge gilt die Regel unverändert.
- **Beschlossen und nicht gebaut: sieben** — **E, 2, 3, 4, 49, 50, 51.**

---

## ⚠ Was Fassung 38 ändert (23.8., abends)

**Punkt 53: acht neue Funde ergänzt — ein zuverlässiger Lesezugang über `github.com/OWNER/REPO/blob/main/DATEI` gefunden, geplante Aufgaben als verlässlicher Weg für die Ablage-Synchronisierung ausgeschlossen. Punkt 55 entschieden (Fassung A: Chat entscheidet, Code baut, Cowork vorerst draussen). Punkt 58 beantwortet: Nein.**

- **Zeitstempel:** alle aktiven Dokumente auf die Ablesung 20:26 Uhr, Blueprint auf 0.37 gehoben. Anlass ist eine inhaltliche Änderung im Backlog, nicht nur ein Zeitangleich.
- **Beschlossen und nicht gebaut: acht** — **E, 2, 3, 4, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 37 ändert (23.8., vormittags)

**Punkt 53: Frage 6 (paralleles Ablegen) dreifach durch Versuch bestätigt, mit einem funktionierenden manuellen Sync-Weg (GitHub -> Projekt-Wissensablage) ergänzt. Neuer, unerforschter Fund zu projektgebundenen "geplanten" Aufgaben vermerkt.**

- **Zeitstempel:** alle aktiven Dokumente auf die Ablesung 10:54 Uhr, Blueprint auf 0.36 gehoben — nur der Kopf, kein Inhalt.
- **Beschlossen und nicht gebaut: acht** — **E, 2, 3, 4, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 36 ändert (22.8., vormittags)

**Punkt 53: Frage 3 vollständig bestätigt (Zeitplan- und API-Teil), Frage 6 beantwortet (Nein — kein Werkzeug erreicht die Projekt-Wissensablage). Vier neue Funde ergänzt: iPhone-App ohne Routinen-Menü · `fire_trigger` funktioniert nur bei sitzungseigenen Routinen · möglicher Ausweg für Punkt 58 vermerkt · Raw-Link mit Commit-Kennung umgeht Zwischenspeicherung. Die Untersuchung von Punkt 53 ist damit abgeschlossen.**

- **Zeitstempel:** alle aktiven Dokumente auf die Ablesung 11:30 Uhr, Blueprint auf 0.35 gehoben — nur der Kopf, kein Inhalt.
- **Beschlossen und nicht gebaut: acht** — **E, 2, 3, 4, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 35 ändert (22.8., morgens)

**Punkt 53: Fragen 4 und 5 durch Versuch bestätigt, Frage 3 teilweise bestätigt (Chat 21). Offen bleiben Frage 6 und der API-Teil von Frage 3. Zwei Nebenfunde ergänzt: Zweige lassen sich anlegen, aber nicht löschen (Rechte-Grenze); der Routinen-Assistent kann fremde Konnektoren übernehmen.**

- **Zeitstempel:** alle aktiven Dokumente auf die Ablesung 08:55 Uhr, Blueprint auf 0.34 gehoben — nur der Kopf, kein Inhalt.
- **Beschlossen und nicht gebaut: acht** — **E, 2, 3, 4, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 34 ändert (21.8., abends)

**Punkt 54 ist gebaut: `CLAUDE.md` liegt im Repo, dazu ein Auslöser bei Sitzungsstart. Der Status von Punkt 52 ist an die Entscheidung aus Fassung 33 angeglichen.**

- **🔴 Punkt 54 GEBAUT (21.8., Chat 21, Cloud-Sitzung):** `./CLAUDE.md`, unter 200 Zeilen, geschrieben aus den vier vollständig gelesenen Pflichtdokumenten. Es wiederholt keine Kennzahl und keine Liste, sondern nennt den Fundort (Punkt 45). Dazu der zweite beschlossene Baustein: ein Hook in `.claude/settings.json`, der bei jedem Sitzungsstart `.claude/hooks/claude_md_frisch.py` aufruft. Das Skript vergleicht den Git-Blob-Hash der vier Dokumente mit der Tabelle am Ende von `CLAUDE.md` und **erinnert nur** an eine Erneuerung. **Bewährt ist nichts davon** (Stabilitätsregel), und `CLAUDE.md` bleibt Kontext, keine erzwungene Einstellung.
- **Punkt 52, Statuszeile angeglichen:** Die Kopfzeile trug weiterhin „Idee — Entscheidung Ondos steht aus", während am Ende desselben Punktes seit Fassung 33 „Status: erledigt" stand. **Fehlerart C4**, im selben Durchgang berichtigt statt danebengestellt. Die Entscheidung selbst ist unverändert: keine Frist, die zwei FEHL aus `dabf9bb` bleiben stehen.
- **Warum diese Fassung überhaupt:** Sobald `CLAUDE.md` im Repo liegt, wäre „beschlossen und nicht gebaut" für Punkt 54 falsch. Die Zahl unten ändert sich dadurch von neun auf acht; sie steht nur hier (Punkt 45).
- **Zeitstempel:** alle drei aktiven Dokumente auf die Ablesung 18:11 Uhr, Blueprint auf 0.33 gehoben — nur der Kopf, kein Inhalt.
- **Beschlossen und nicht gebaut: acht** — **E, 2, 3, 4, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 33 ändert (21.8., nachmittags)

**`pruefe.py` liegt ab heute im Repo. Muster für Übergabemappe und Abnahme angelegt. Drei kleinere Punkte von Claude entschieden, auf Ondos ausdrückliche Übertragung.**

- **Entscheidung Ondos (21.8.):** `pruefe.py` wird ins Repo aufgenommen. Vorher wurde das ganze Skript durchgesehen — keine Schlüssel, keine PIN, kein Gerätepfad, keine Messdaten. Die Auflage vom 16.8. ist damit gegenstandslos und in `STAND.md` mit Vermerk berichtigt. **Folge:** Eine Cloud-Sitzung kann Arbeitsregel M ohne Handarbeit erfüllen.
- **Muster angelegt:** `MUSTER_Ondo-Control_Uebergabe.md` und `MUSTER_Ondo-Control_Abnahme.md`, leer, im Repo. Die ausgefüllten Dateien gehören weiterhin nicht hinein.
- **Nebenfund dabei:** Abschnitt 11 von `pruefe.py` prüft die Mappe auf drei Pflichtbestandteile, die in der Mappe vom 21.8. fehlten. Die Prüfung lief nie an, weil nie eine Mappe im Ordner lag. Sie prüft jetzt ersatzweise das Muster.
- **Punkt 52 entschieden (Claude, 21.8., auf Ondos Übertragung):** keine Frist. Die zwei FEHL bleiben stehen und werden nicht mehr bei jedem Lauf gemeldet.
- **Punkt 53:** der fünfte Fund vom 21.8. eingetragen.
- **Antwortschlüssel:** keine Formänderung, dafür eine Zeile in Teil A. Einzelheiten in `STAND.md`.
- **Beschlossen und nicht gebaut: neun** — **E, 2, 3, 4, 47, 49, 50, 51, 54.**

---

## ⚠ Was Fassung 32 ändert (21.8., morgens)

**Punkt 53 zu drei von sieben Fragen live geprüft — NICHT erledigt. Der vermutete Ausweg aus Punkt 58 ist widerlegt. Vier neue Funde einer Cloud-Sitzung. Ein Verweis im Blueprint berichtigt. Ein ausgefallener Prüflauf hat zwei Beweise gebrochen.**

- **Punkt 53, live geprüft am 21.8. durch eine Cloud-Sitzung (Chat 20), Commit `dabf9bb`:** Frage 1 (Projektdokumente selbst fortschreiben) **JA, bewiesen** — bewährt ist es damit nicht · Frage 2 (interner Sammelspeicher) **NEIN, bewiesen** · Frage 7 (Sitzungsspeicher) beantwortet: Claude Code meldet ein Volllaufen **nicht von selbst**, bei Überlauf wird ältere Konversation zusammengefasst. **Die Fragen 3, 4 und 5 bleiben UNGEPRÜFT** — sie wurden aus Kenntnis der Umgebung beantwortet, nicht durch Versuch, und Ondos Auflage verlangt Versuch. **Frage 6 wurde gar nicht erst gestellt** — Chat hat sieben Fragen zu sechs zusammengezogen, **Fehlerart C5**, von Claude selbst gemeldet. **Status bleibt „Idee".**
- **Punkt 58:** Der am 20.8. von Ondo vermutete Ausweg über einen internen Sammelspeicher von Claude Code ist **widerlegt**. **Der Widerspruch aus Punkt 58 bleibt ungelöst.**
- **Vier neue Funde vom 21.8. (Chat 20):** Eine Cloud-Sitzung erbt den Branch, auf dem sie gestartet wurde, und liest nicht von selbst den aktuellen Stand — **Auflage: jede Cloud-Sitzung holt zuerst `main`** (bei Punkt 55) · `pruefe.py` liegt nicht im Repo, eine Cloud-Sitzung findet es nicht und kann Arbeitsregel M nicht von sich aus erfüllen, Aufnahme ins Repo ist **Ondos Entscheidung** (bei Punkt 46) · zwei Verweise im Blueprint auf die Archivdatei `PROJEKT-STATUS.md`, einer davon berichtigt (Beobachtungspunkte).
- **🔴 Punkt 52 ist eingetreten:** Die Berichtigungen vom 21.8., 05:24 Uhr haben in `STAND.md` zwei aus `PROJEKT-STATUS.md` stammende Zeilen gepflegt; seither meldet `pruefe.py` einen unerklärten Verlust und zwei Blöcke ausser der Reihe. **Die Berichtigungen waren richtig — gebrochen ist der Beweis, nicht das Dokument.** Nichts geändert; die Entscheidung liegt bei Ondo.
- **Blueprint 0.31:** Im Text der Arbeitsregel F steht für die laufende Pflicht jetzt `STAND.md` statt `PROJEKT-STATUS.md`, mit dem Zusatz „(bis 15.8. in `PROJEKT-STATUS.md`, seither Archiv)". Die zweite, rein rückblickende Fundstelle bleibt unverändert.
- **Arbeitsregel M:** `pruefe.py` ist vor dieser Lieferung gelaufen — aber erst, nachdem Ondo es von Hand in die Cloud-Sitzung hochgeladen hatte. **Von sich aus kann eine Cloud-Sitzung die Regel nicht erfüllen.**
- **Beschlossen und nicht gebaut: neun** — **E, 2, 3, 4, 47, 49, 50, 51, 54.**

---

## ⚠ Was Fassung 31 ändert (20.8., mittags)

**Punkt 53 zur Hälfte bewiesen — NICHT erledigt. Ondos sieben neue Fragen eingetragen. Ein Rückfall Claudes vermerkt.**

- **Punkt 53, Teilbefund:** Live bewiesen bei ausgeschaltetem Tablet — eine Cloud-Sitzung im Code-Bereich schreibt ohne jedes eigene Gerät ins Repo. Ebenfalls geklärt: „Fernsteuerung" und „Dispatch" sind gerätegebunden und scheiden für Ondos Vorgabe aus. **Der Kern des Punktes bleibt offen** — Ondos sieben Fragen vom 20.8. stehen dort im Wortlaut, samt der Auflage, sie durch Versuch zu klären statt durch Nachschlagen. **Status bleibt „Idee".**
- **Punkte 55, 56, 58 ergänzt:** Sitzungsfortsetzung Handy↔Tablet und paralleles Ablegen zu 55 · Ondos Wochenlimit nach sechs Nachrichten und die Bestätigung, dass Cloud-Sitzungen am selben Kontingent zehren, zu 56 · der mögliche Ausweg über einen internen Sammelspeicher von Claude Code zu 58.
- **🔴 Rückfall Claudes, von Ondo gefunden (20.8.):** Chat 19 hat den Übergabebedarf nicht von selbst gemeldet, obwohl die Übergaberegel das ausdrücklich verlangt. Ondo musste danach fragen. Ausserdem hat Chat 19 zweimal geliefert statt einmal und dabei einmal ohne Rückfrage geschrieben — dieselben zwei Fehler, die schon Chat 18 begangen hat. **Beide in der Übergabemappe an Chat 20 als stehende Warnung vermerkt.**
- **Zum Testbranch:** `claude/readme-datum-hinzufuegen-bis926` war reine Prüfung. Der Beweis steht hier, nicht im Branch. **Kein Pull Request erstellt, `main` unberührt**; der Branch kann gelöscht werden.
- **Beschlossen und nicht gebaut: neun** — **E, 2, 3, 4, 47, 49, 50, 51, 54.**

---

## ⚠ Was Fassung 30 ändert (20.8., morgens)

**Punkt 54 untersucht und beschlossen. Raw-Link-Block dauerhaft in Teil A der Übergabemappe verankert.**

- **Punkt 54:** Name, Ort und Umfang von `CLAUDE.md` geklärt anhand der offiziellen Dokumentation. Ondo hat beide vorgeschlagenen Bausteine beschlossen — Selbsterzeugung durch Claude Code, plus ein Auslöser bei Sitzungsstart, der nur bei geänderten Pflichtdokumenten an eine Erneuerung erinnert. Gebaut wird das nicht im Chat, sondern auf dem Tablet oder in einer Cloud-Sitzung. Einzelheiten bei Punkt 54.
- **Raw-Link-Block:** In `STAND.md`, Abschnitt „Chat-Übergabe ist Claudes Pflicht, nicht Ondos", jetzt ausdrücklich festgehalten: Teil A jeder Übergabe enthält den Raw-Link-Block für alle vier Pflichtdokumente, als Text der Nachricht, nicht als Anhang. Begründung und Fund von Chat 19 direkt dort vermerkt.
- **Nebenbefund, gehört zu Punkt 53, dort nicht abschliessend behandelt:** Ein Testabruf am 16.8. hat bestätigt, dass ein Raw-Link, der als Text der Nachricht steht, im Chat-Bereich abrufbar ist — ein Link, der nur im Text einer angehängten Datei steht, dagegen nicht. Ausserdem: Der Code-Bereich der Claude-App kann laut offizieller Dokumentation Cloud-Sitzungen starten, die unabhängig von jedem eigenen Gerät auf das Repo zugreifen — zu unterscheiden von „Fernsteuerung", die an ein eingeschaltetes Gerät gebunden bleibt. Live am 16.8. bestätigt: Die vorhandene Sitzung „Ondo Control: Code 1" ist als Fernsteuerung gekennzeichnet, keine Cloud-Sitzung. Einrichtung einer Cloud-Sitzung steht noch aus, Ondo prüft das auf seinem Gerät.
- **Zeitsprung vermerkt:** Zwischen dem Beginn dieser Chat-Sitzung (16.8.) und dieser Lieferung liegen laut frisch abgelesener Uhr tatsächlich vier Tage (20.8.). Kein Fehler, nur festgehalten, weil Zeitangaben in diesem Projekt nie geschätzt werden.
- **🔴 Beschlossen und nicht gebaut: neun** — **E, 2, 3, 4, 47, 49, 50, 51, 54.**

---

## ⚠ Was Fassung 29 ändert (16.8., nachmittags)

**🔴 Widerspruch zum ersten Hochladen berichtigt. Ondo hat entschieden: Die Gruppe „Chats und Arbeitsstruktur" geht für diesen Chat vor Arbeitsregel L.**

- **Der Befund:** Punkt 46 trug seit der Übergabe an Chat 19 zwei sich widersprechende Angaben zum ersten Hochladen — „noch nicht stattgefunden" in der Statuszeile hier und im entsprechenden Abschnitt von `STAND.md`, „hat funktioniert" in Chat 18s Abnahme an Chat 19. `STAND.md` trug beide Angaben sogar im selben Abschnitt nebeneinander. **Fehlerart C4**, wörtlich: eine neue Aussage wurde neben eine ältere, widersprechende gestellt, statt sie im selben Durchgang zu berichtigen.
- **Berichtigt:** Das erste Hochladen vom Tablet hat am 16.8. stattgefunden und funktioniert. **Beleg:** Ondo bestätigt, Repo, Tablet und Projektkopien seien seither auf demselben Stand — gezeigt am GitHub-Screenshot, Commits auf `main` zuletzt vor 3 Stunden. **Bewährt ist Punkt 46 damit weiterhin nicht** — ein geglückter erster Versuch ist kein Nachweis von Zuverlässigkeit.
- **Klargestellt:** Das Hochladen von Hand entfällt nur für den Weg zu GitHub. Der Projektordner der App läuft weiterhin von Hand — dafür steht Punkt 53.
- **🔴 Entscheidung Ondo (16.8., nachmittags):** Auf die Frage, ob die Gruppe „Chats und Arbeitsstruktur" für diesen Chat vor Arbeitsregel L geht — Ondos Antwort: „Vorrang hat Chat und Arbeitsstruktur." Der nächste beschlossene Punkt (47) wartet damit für diesen Chat; Claude hat ihn nicht von sich aus zurückgestellt.
- **🔴 Beschlossen und nicht gebaut: acht** — **E, 2, 3, 4, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 28 ändert (16.8., vormittags)

**🔴 Punkt 46 ist gebaut. Claude Code arbeitet auf dem Surface Go.**

- **Was steht:** die Desktop-App mit dem Bereich „Code" · Git 2.55.0 · Python 3.14.7 · ein frisch von GitHub geholter Ordner `Claude-Ondo-Control-Repo`, der mit dem Verzeichnis verbunden ist.
- **Der Abgleich war sauber.** Ondos Handkopie und das Verzeichnis waren bei allen vierzehn gemeinsamen Dateien Byte für Byte gleich. **Damit ist zugleich belegt, dass der Raw-Link diesem Chat eine veraltete Zwischenkopie geliefert hat und nicht das Repo veraltet war.**
- **Was aussteht:** Das erste Hochladen vom Tablet hat noch nicht stattgefunden. Punkt 46 gilt als gebaut, nicht als bewährt. **🔴 Berichtigt in Fassung 29:** Das erste Hochladen hat inzwischen stattgefunden und funktioniert. Weiterhin richtig bleibt: Punkt 46 gilt nicht als bewährt.
- **🔴 Drei Angaben in Punkt 46 waren falsch** und sind dort mit Vermerk berichtigt, nicht überschrieben: das Terminalfenster, die 16 GB für die Desktop-App und „unter 1 GB Platte".
- **Ein neuer Fund, noch offen:** Liegt `pruefe.py` außerhalb des Repo-Ordners, meldet sein Abschnitt 2 die eigene Datei als fehlend. Zu klären, bevor das Tablet zum ersten Mal eine Datei ausgibt.
- **Sechs neue Punkte aus Ondos Fragen vom 16.8.: 52 bis 58.** Alle mit Status Idee. Punkt 53 und 54 tragen Ondos Vorgaben im Wortlaut.
- **🔴 Neue Gruppe „Chats und Arbeitsstruktur" ganz oben, auf Ondos Anweisung vom 16.8.:** 54 · 53 · 55 · 56 · 58 · 57. Sie steht **vor Prio 1 und damit vor allen App-Punkten**. Punkt 52 bleibt bei den App-nahen Punkten stehen, weil er das Prüfskript betrifft und nicht die Arbeitsstruktur.
- **Damit ist offen, ob Punkt 47 wartet.** Er ist beschlossen und der nächste in der alten Reihenfolge, gehört aber zur App. **Die Entscheidung liegt bei Ondo; Claude hat nichts von sich aus zurückgestellt.**
- **🔴 Beschlossen und nicht gebaut: acht** — **E, 2, 3, 4, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 27 ändert (15.8., spätabends)

**🔴 `STAND.md` enthielt eine am 14.8. widerlegte Aussage — gefunden über das Kontrollexamen von Chat 18.**

- **Der Befund:** Im Abschnitt „Die Spielliste" stand weiterhin, die Verzerrung durch geparkte Einträge treffe **nur eines** der beiden Gehirne, dazu die überholten Zahlen 50 von 190. Die Rohdaten-Auswertung vom 14.8. hatte beides berichtigt: **beide Gehirne betroffen, 54 geparkt, Bestand 330/327.** Berichtigt mit Vermerk, nicht überschrieben.
- **Die Ursache liegt bei der Trennung.** Der Abschnitt wurde am 15.8. unverändert übernommen. **„Nichts löschen, nur verschieben" sichert die Vollständigkeit, nicht die Gültigkeit** — und `STAND.md` soll nur Gültiges enthalten.
- **Chat 18 hat den Fehler nicht gemacht, sondern sichtbar gemacht.** Er hat korrekt wiedergegeben, was dastand.
- **`pruefe.py` prüft jetzt ganz `STAND.md` auf überholte Zahlen**, nicht nur den Messstand-Abschnitt.
- **🔴 Punkt 49 ist damit belegt, nicht mehr nur empfohlen.** ChatGPTs Warnung war richtig: Ein neuer Chat leitet aus richtig gelesenen Dokumenten eine falsche Aussage ab, wenn die Grenzen nicht danebenstehen. **Punkt 49 wird trotzdem nicht vorgezogen** — die Reihenfolge bleibt (Ondo, 15.8.).
- **🔴 Beschlossen und nicht gebaut: neun** — **E, 2, 3, 4, 46, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 26 ändert (15.8., abends)

**🔴 Punkt 48 ist gebaut. Vier neue Punkte aufgenommen. Drei Entscheidungen Ondos berichtigen Annahmen, die Claude gemacht hatte.**

- **Punkt 48 gebaut:** `pruefe.py` Abschnitt 9b beweist zusätzlich zur Vollständigkeit die **Struktur und die Reihenfolge**. Der Zeilenbeweis zeigte nur, dass nichts fehlt — nicht, dass der Text noch dort steht, wo er hingehört. **ChatGPT und Gemini haben diese Lücke unabhängig voneinander gefunden; Claude hatte sie nicht gesehen.** Der neue Beweis fand sofort zwei Befunde, einer davon echt.
- **🔴 Der 20. August ist keine Frist (Ondo, 15.8.).** Claude hat ihn zweimal als Termin behandelt und daraus eine Dringlichkeit abgeleitet. **Eine Zeitspanne sagt nicht, wie viele Messungen nötig sind.** Punkt 3 wird nicht nach Ablaufdatum entschieden.
- **🔴 Die Reihenfolge der Arbeiten bleibt, wie sie ist (Ondo, 15.8.).** Neue Punkte werden aufgenommen, nicht vorgezogen. **Zuerst werden die Probleme mit Chats und Nutzungsgrenzen gelöst** — Punkt 46 —, damit später überhaupt besser gearbeitet werden kann. Punkt 48 war die einzige Ausnahme, weil er einen Beweis absichert, auf den sich alles Weitere stützt.
- **🔴 Entparken ist Claudes Arbeit, nicht Ondos (Ondo, 15.8.).** Ondo hat die wahren Parkgründe zweimal selbst aufgedeckt — 45-Minuten-Testspiele, doppelte Vorhersagen —, weil Claude nur die Anzahl geprüft hatte, nicht den Grund. **Vor jedem Entparken wird jeder Eintrag einzeln auf seinen Grund geprüft, maschinell und nachvollziehbar.** Wird das geleistet, dürfen die geeigneten Spiele entparkt werden.
- **🔴 Beschlossen und nicht gebaut: neun** — **E, 2, 3, 4, 46, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 25 ändert (15.8., nachmittags)

**🔴 Punkt 18 ist fertig. Backlog und Blueprint sind getrennt.**

- **Der Backlog enthält nur noch offene Punkte** (43 KB statt 164 KB). Erledigtes, alte Fassungsnotizen, Prüfläufe und Prüferantworten stehen in `BACKLOG-ARCHIV.md`.
- **Der Blueprint enthält nur noch, was gilt** (28 KB statt 76 KB): Verfassung, Charta, Arbeitsregeln, Übergaberegel, Grenzen, Architektur, offene Fragen. Das Entscheidungs-Protokoll steht in `BLUEPRINT-PROTOKOLL.md`.
- **Pflichtlektüre beim Start: 116 KB statt 452 KB.** `STAND.md` 35 · Backlog 43 · Blueprint 28 · Ondo-Core 12. **Verfassung und Arbeitsregeln bleiben Pflicht** — sie wandern ausdrücklich nicht ins Archiv.
- **Nichts gelöscht, nur verschoben.** `pruefe.py` Abschnitt 9 beweist alle drei Trennungen gegen die Originale.
- **`pruefe.py` ist Fassung 2 und chatübergreifend.** Die von Hand gepflegte Zusagenliste des jeweiligen Chats ist ersatzlos weg. An ihre Stelle treten Prüfungen, die ihren Sollwert aus den Dokumenten ziehen — darunter der Abgleich der Status jedes Punktes gegen die Liste der offenen Punkte. Genau dieser Fehler ist Chat 15 unterlaufen.
- **Beschluss Ondo 15.8.: künftig alle Fangfragen im Kontrollexamen**, keine feste Zahl. Die beschlossene Kürzung auf „vier" war nicht abgezählt — die Mappe vom 15.8. kennzeichnet fünf.
- **Beschlossen und nicht gebaut — die massgebliche Zahl steht im neuesten Fassungsabschnitt oben.**

---

## ⚠ Was Fassung 24 ändert (15.8., mittags)

**🔴 Punkt 18 ist zur Hälfte gebaut und Punkt 45 ist gebaut. Arbeitsregel L ist erfüllt.**

- **`PROJEKT-STATUS.md` ist getrennt.** Aus 199 KB wurden `STAND.md` (34 KB), `CHRONIK-2026-08.md` und `CHRONIK-2026-07.md`. **Nichts gelöscht, nur verschoben** — der Beweis läuft maschinell in `pruefe.py`, Abschnitt 10, und sein Sollwert kommt aus dem Original.
- **🔴 Punkt 18 ist NICHT vollständig.** Der zweite Teil — den Backlog in offene Punkte und ein Erledigt-Archiv trennen — steht noch aus. **Er ist der nächste Arbeitsblock.**
- **Punkt 45 gebaut:** `pruefe.py` Abschnitt 11 schlägt an, sobald eine Standsangabe zweimal in `STAND.md` vorkommt. Eine Doppelung war da und ist beseitigt — die Sprachschlüsselzahl stand in „Versionen" **und** im Arbeitsablauf; im Arbeitsablauf steht jetzt ein Verweis.
- **Neu in `STAND.md`: eine vollständige Liste der Entscheidungen, die bei Ondo liegen.** Sechzehn Punkte, jeweils mit Fundstelle, ohne den Inhalt zu wiederholen. Sie war bisher über Backlog, Blueprint und die Übergabemappen verstreut.
- **Drei Funde gegen Chat 16, alle belegt:** Der Backlog ist Fassung 23, nicht 24 — `pruefe.py` verlangte eine Fassung 24, die es nicht gab, und kann deshalb nicht „ALLES SAUBER" gemeldet haben · die Protokollzeile Chat 16 → Chat 17 fehlte in der Buchführung · die neuen Blueprint-Einträge standen in falscher Reihenfolge, und die Zeile „auf 0.21 gehoben" trug den 14.8. statt den 15.8.
- **🔴 Beschlossen und nicht gebaut: sechs** — **E, 2, 3, 4, 46, 47.** Das ist die massgebliche Stelle für diese Zahl; andere Dokumente verweisen hierher, statt sie zu wiederholen.

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
→ **🔴 Beobachtung 21.8. (Chat 20, Cloud-Sitzung):** `pruefe.py` liegt nicht im Repo — die Auflage oben hält es bewusst daneben. **Eine Cloud-Sitzung findet es deshalb nicht und kann Arbeitsregel M nicht von sich aus erfüllen.** Belegt am 21.8.: Beim Durchgang um 05:24 Uhr (Commit `dabf9bb`) lief es nicht; für die Lieferung um 05:50 Uhr lief es erst, nachdem Ondo es von Hand in die Sitzung hochgeladen hatte — also genau die Handarbeit, die Punkt 53 beenden soll. Es meldet dabei sich selbst als fehlend (Abschnitt 2). **Was der ausgefallene Lauf gekostet hat, steht bei Punkt 52.** **ENTSCHIEDEN am 21.8.2026 (Ondo): `pruefe.py` wird ins Repo aufgenommen.** Der Inhalt wurde vorher vollständig durchgesehen; er enthält nichts, was nicht öffentlich sein darf. Die Auflage vom 16.8. ist gegenstandslos, siehe `STAND.md`.

> **🔴 BERICHTIGT am 16.8.2026, nachmittags (Chat 19).** Hier stand bis heute in der Statuszeile: „GEBAUT 16.8. — Bewährung steht aus, erstes Hochladen noch nicht erfolgt." **Das erste Hochladen hat inzwischen stattgefunden und funktioniert** — laut Ondo sind Repo, Tablet und Projektkopien seither auf demselben Stand. **Ursache des Fehlers (Fehlerart C4):** Chat 18 hatte den Satz zum offenen Hochladen geschrieben, bevor Ondo hochgeladen hat, und den späteren Erfolg in der Abnahme daneben vermerkt, statt die ältere Aussage im selben Durchgang zu berichtigen. **Weiterhin unverändert: Punkt 46 gilt nicht als bewährt** — ein geglückter erster Versuch ist kein Nachweis von Zuverlässigkeit.

---

**47. Selbsttest für die App** · *Vorschlag 14.8., Claude · beschlossen 14.8., Ondo · gebaut 24.8.2026, Mistral im Code-Modus (Skript `selbsttest.py`, Branch `mistral`), gegengeprüft von Claude* · **Status: GEBAUT 24.8.2026 — gebaut und verifiziert über Mistrals Code-Modus (Skript `selbsttest.py` auf Branch „mistral"), Ergebnis von Claude gegengeprüft (Funktion `marktUrteil` in `beta.html` stimmt mit dem Testskript überein, beide Testfälle korrekt)**

Vor jeder Codelieferung: Syntaxprüfung von `beta.html`, Sprachschlüssel-Abgleich DE/FR/EN, und feste Rechenproben — eine bekannte Eingabe muss die bekannte Bewertung ergeben.

→ **Warum:** `pruefe.py` prüft nur Dokumente. Nichts prüft, ob die App nach einer Änderung noch läuft. Ein Codefehler fällt heute erst im Betrieb auf.
→ **Kosten:** ein halber Arbeitsblock, kein Geld.
→ **🔴 GEBAUT am 24.8.2026 (Mistral, Code-Modus, Branch `mistral`):** Skript `selbsttest.py` liefert die festen Rechenproben aus diesem Punkt. **Von Claude gegengeprüft:** Die Funktion `marktUrteil` in `beta.html` stimmt mit dem Testskript überein, beide Testfälle liefern das richtige Ergebnis.

---

## 🔴 CHATS UND ARBEITSSTRUKTUR — VOR ALLEN APP-PUNKTEN (Ondo, 16.8.)

**Ondos Vorgabe:** Zuerst werden die Probleme mit Chats, Nutzungsgrenzen und Arbeitsstruktur gelöst, dann geht es an der App weiter. Diese Gruppe steht deshalb vor **Prio 1**.

**Das gilt auch gegenüber der Reihenfolge der beschlossenen Punkte.** Der nächste beschlossene war zum Zeitpunkt dieser Vorgabe (16.8.) Punkt 47, und der gehört zur App. **🔴 Berichtigt (27.8.): Punkt 47 ist seither gebaut** (über Mistrals Code-Modus, von Claude gegengeprüft) — die Aussage ist damit historisch, nicht mehr aktuell. **Ondo entscheidet, ob die App-Arbeit wartet** — Claude zieht nichts von sich aus vor und stellt nichts von sich aus zurück.

**Reihenfolge innerhalb der Gruppe, Vorschlag Claudes:** 54 zuerst, weil ohne sie der Bereich „Code" ohne Pflichtlektüre arbeitet · dann 53 · dann 55 · dann 56 · dann 58 · dann 57.

**🔴 Gruppe im Kern abgeschlossen (27.8.2026):** 54 gebaut, 55 entschieden, 58 beantwortet, 56 beantwortet, 53 zurückgestellt. Nur 57 bleibt offen (bewusst nicht bearbeitet, nachrangig). **Prio 1 (App-Arbeit) hat ab jetzt wieder Vorrang** — Ondos Entscheidung, 27.8.2026.

---

**54. `CLAUDE.md` für den Code-Bereich** · *Frage 16.8., Ondo · untersucht 16.8., Chat 19 · beschlossen 16.8., Ondo · gebaut 21.8., Chat 21 in einer Cloud-Sitzung* · **Status: GEBAUT 21.8.2026 — Bewährung steht aus**

Wer im Bereich „Code" arbeitet, hat die Pflichtlektüre nicht gelesen. Er kennt weder die Arbeitsregeln noch die Fehlerarten. **Damit fällt genau der Schutz weg, für den das Kontrollexamen gebaut wurde.**

Claude Code liest beim Start eine Datei mit diesem Namen aus dem Arbeitsordner. Darin könnten die Regeln stehen, ohne dass Ondo sie einfügt.

→ **Geklärt (16.8., anhand der offiziellen Dokumentation, nicht aus dem Gedächtnis):** Der Name steht fest — `CLAUDE.md`, nicht `AGENTS.md`. Ort: im Repo, unter `./CLAUDE.md`, passend zu Punkt 45 (ein Ort je Tatsache, mitversioniert). Umfang: unter 200 Zeilen empfohlen — die vier Pflichtdokumente selbst gehören nicht per `@Import` hinein, das würde bei jedem Sitzungsstart alle rund 120 KB neu laden. Stattdessen eine feste Anweisung, die vier Dokumente vor inhaltlicher Arbeit vollständig zu lesen.
→ **Beschlossen (Ondo, 16.8.), zwei Bausteine:** (1) Claude Code liest die vier Pflichtdokumente auf Anweisung vollständig und erzeugt oder erneuert `CLAUDE.md` daraus. (2) Ein Auslöser bei Sitzungsstart prüft, ob sich die vier Dokumente seit der letzten Erzeugung geändert haben, und erinnert nur dann an eine Erneuerung.
→ **Grenze, die dabei bleibt:** `CLAUDE.md` ist Kontext, keine erzwungene Einstellung — keine Garantie, dass Claude Code die Anweisung befolgt, ähnlich wie eine Regel im Prompt sich anders verhält als eine Regel im Code. Eine dem Kontrollexamen entsprechende Prüfung gibt es dafür nicht.
→ **Hängt zusammen mit Punkt 55.** Ohne diese Datei ist die Arbeitsteilung nicht sicher zu betreiben. Gebaut wird beides auf dem Tablet oder in einer Cloud-Sitzung (Punkt 53), nicht im Chat-Bereich.
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

---

**55. Arbeitsteilung zwischen Chat, Code und Cowork festlegen** · *Frage 16.8., Ondo* · **Status: ENTSCHIEDEN 23.8.2026 (Ondo) — Fassung A**

Ondos Frage: Wer erstellt und prüft künftig die Dateien, wer lädt hoch, wo wird besprochen?

→ **Vorschlag Claude (16.8.):** Besprechen und entscheiden im Chat · erstellen, ändern, prüfen und hochladen im Bereich „Code" · Cowork vorerst nicht, weil Claude es zu wenig kennt, um es einzuordnen.
→ **Der Haken:** siehe Punkt 54.
→ **🔴 Neu am 20.8. (Ondo):** Offen ist zusätzlich, ob eine am Handy begonnene Code-Sitzung **am Tablet fortgesetzt** werden kann, und ob dieselbe Sitzung Dateien **parallel** an beide Orte legen kann — Tablet aus: nur Repo, Tablet an: Repo und Tablet. Prüfung gehört zu Punkt 53, die Entscheidung über die Arbeitsteilung hierher.
→ **🔴 Belegt am 20.8., stützt den Vorschlag:** Chat kann Repo-Dateien über Raw-Links selbst lesen, und der Code-Bereich kann ohne Tablet ins Repo schreiben. Beide Hälften des Vorschlags sind damit technisch möglich.
→ **🔴 Beobachtung 21.8. (Chat 20, Cloud-Sitzung):** Eine Cloud-Sitzung **erbt den Branch, auf dem sie gestartet wurde**, und liest nicht von selbst den aktuellen Stand. **Belegt:** Eine Sitzung las den Stand vom 20.8., 06:20 Uhr und hätte gegen veraltete Zeilennummern geschrieben. **Folge als Auflage: Jede Cloud-Sitzung holt zuerst `main`.**
→ **🔴 Entschieden (Ondo, 23.8.2026), Fassung A:** Chat bespricht und entscheidet, Code baut und schreibt ins Repo. **Cowork bleibt vorerst draussen** — rückholbar, wie Punkt 19, keine endgültige Ablehnung, falls später die Ablage-Werkzeuge von Cowork gebraucht werden.
→ **Kosten:** keine.

---

**56. Nutzungsgrenzen — welche Wege gibt es?** · *Frage 16.8., Ondo · beantwortet 27.8.2026 aus offiziellen Quellen* · **Status: BEANTWORTET 27.8.2026**

Ondos Frage: API, grösseres Abo oder etwas anderes? Was kostet es, brauchen wir es jetzt?

→ **Claude hat am 16.8. ausdrücklich keine Zahlen genannt**, weil sie aus dem Gedächtnis stammen würden.
→ **🔴 Offiziell abgerufen am 27.8.2026** (`support.claude.com`, `claude.com/pricing`): Anthropic veröffentlicht **keine festen Zahlen** für Nachrichten, Stunden oder Tokens je Plan — weder für Pro noch für Claude Code. Belegt: Pro kostet 17 $/Monat (jährlich) bzw. 20 $/Monat (monatlich). Nutzung wird nach **Anmeldeart** gezählt, nicht nach Sitzungstyp — Cloud-/Code-Sitzungen und Chat teilen sich dasselbe Kontingent, damit ist die frühere Vermutung dazu jetzt belegt statt vermutet. Eigener, aktueller Stand ist einsehbar unter „Einstellungen → Nutzung" in der App bzw. mit `/cost` in Claude Code. Nicht-offizielle Drittseiten-Schätzung (unbestätigt, nicht übernommen): grob 40–80 aktive Sonnet-Stunden/Woche für Pro.
→ **Erster echter Messpunkt, von Ondo per Screenshot geliefert (27.8.2026, 10:30 Uhr):** aktuelle 5-Stunden-Sitzung 86 % verbraucht (Reset in 19 Min.) · Wochenlimit „Alle Modelle" 8 % verbraucht (Reset Donnerstag 03:59 Uhr) · Nutzungsguthaben 0 Punkte, Funktion ausgeschaltet.
→ **Laufende Pflege, Ondos Entscheidung (27.8.2026):** Keine eigene Messreihe (zu viele Parameter, unverhältnismässiger Aufwand für den Nutzen). Stattdessen ein einfaches Schätzfeld in `STAND.md`, gelegentlich per Screenshot kalibriert, ohne Automatik oder feste Häufigkeit — der Messpunkt von eben ist der erste Eintrag dort.
→ **Ergänzende ältere Funde, weiterhin gültig:** Die API rechnet nach Verbrauch statt nach Woche und kostet echtes Geld (16.8.) · Das Wochenlimit war am 20.8. morgens **nach sechs Nachrichten** erreicht, am 16.8. stand es noch bei 85 % — der Punkt war damit schon vor der heutigen Antwort dringlich · Auf Pro ist Claude Code laut Quellen Dritter auf Sonnet-Modelle beschränkt (ungeprüft, keine offizielle Quelle gefunden).
→ **Kosten der Untersuchung:** wenige Abrufe, kein Geld.

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
→ **Erster Testfall:** Ein für „Chat 25" vorbereiteter Übergabetext (ursprünglich Chat 23 → 24, von Ondo als Datei geliefert) war beim Eintreffen bereits durch diese Sitzung überholt (Punkt 47 und 59 bereits erledigt). Aus dem tatsächlichen Endstand dieser Sitzung wird stattdessen ein neuer, aktueller Text erstellt — ausserhalb des Repos, wie jede ausgefüllte Übergabemappe.
→ **Stabilitätsregel:** Gilt als Einzelfall, nicht sofort als Dauerregel. Ob es das wird, entscheidet sich nach diesem ersten Testfall.
→ **Kosten:** keine.

---

**62. Zusammenarbeit mit Mistral als beaufsichtigtem Mitarbeiter** · *Eingerichtet vor dem 24.8.2026, nachgetragen 27.8.2026 (Lücke gefunden über einen gelieferten Übergabetext)* · **Status: LÄUFT — erster Backlog-Eintrag, nachträglich**

Ein zweiter Arbeits-Branch `mistral` existiert seit vor dem 24.8.2026 (aktuell fünf Commits vor `main`, zuletzt `b43c38b`), ausschliesslich für eine zweite, beaufsichtigte KI (Mistral) im Code-Modus. `main` ist davon unberührt. Die Dateien `MISTRAL.md` (Regeln für Mistral, von Claude gepflegt), `MISTRAL-AUFGABEN.md` (Aufgabenliste, von Claude gepflegt) und `MISTRAL-ERLEDIGT.md` (Ergebnisprotokoll, von Mistral gepflegt) liegen nur auf diesem Branch. Mistral arbeitet ausschliesslich dort, nie auf `main`, ohne eigene Entscheidung über die nächste Aufgabe — die kommt von Claude. Punkt 47 (Selbsttest für `beta.html`) wurde über diesen Weg gebaut und von Claude gegengeprüft.

→ **🔴 Lücke, die zu diesem Nachtrag geführt hat:** Trotz mehrerer Aufgaben und Tage Zusammenarbeit hatte Mistral bis heute **keinen eigenen Backlog-Punkt** — nur auf dem `mistral`-Branch in `MISTRAL.md` dokumentiert, gegen den Geist von Arbeitsregel F. Gefunden über einen von Ondo gelieferten, sonst veralteten Übergabetext (Chat 23 → 24).
→ **🔴 Dabei mit entdeckt, festgehalten als Warnung:** Eine frühere Testsitzung („Chat 24") hat `CLAUDE.md` nachweislich korrekt abgerufen, danach aber einen falschen Fund behauptet — angeblich stehe dort `reset --hard` statt `merge --ff-only`. Das existiert nicht in der Datei, zweifach durch eigenen Abruf widerlegt. Richtig gelesen, falsch wiedergegeben — keine der acht bekannten Fehlerarten, sondern ein Gedächtnisfehler beim Zusammenfassen. Kein Codeänderung, nur eine Warnung für künftige Zusammenfassungen (Arbeitsregel H: belegen statt herleiten).
→ **Git-Regel für den Branch:** Für `main` gilt `--ff-only` beim Holen. Für `mistral` gilt das NICHT — dort ein normaler Merge, weil der Branch eigene Commits trägt, die `main` nicht hat.
→ **🔴 Auf dem Prüfstand seit 28.8.2026 (Ondo):** Mistrals weitere Beteiligung an Ondo Control ist offen und Ondos Entscheidung — nicht dasselbe wie „läuft bereits" oben, das beschreibt nur den technischen Ist-Zustand. **Ondos Absicht** (ausdrücklich Absicht, kein Beschluss): Mistral in einem eigenen, separaten Projekt durch Claude und ChatGPT schulen zu lassen, mit dem Ziel, ihn später möglicherweise als lokal laufendes Modell zu nutzen. **Claudes Einordnung dazu:** Ein lokal laufendes Modell hat keine Websuche und käme deshalb weder als Gehirn (braucht Websuche für Marktaussagen) noch als Schiedsrichter (braucht Websuche für Endstände) in Frage — wohl aber als Prüfer für Dokumente, Code und Skripte, wo keine Websuche nötig ist.
→ **Kosten:** keine neuen, die Zusammenarbeit läuft bereits.

---

**63. `selbsttest.py` auf weitere Kernfunktionen ausweiten** · *Vorschlag 27.8.2026, aus einem Strukturvergleich mit `ondo-jarvis` (unabhängige Sitzung mit Zugriff auf beide Repos), befürwortet von Chat 25 und Claude* · **Status: Idee — noch nicht gebaut**

`selbsttest.py` (Punkt 47) deckt bisher eine Funktion ab (`marktUrteil`). Vorschlag: schrittweise weitere Kernfunktionen mit festen Rechenproben absichern — die Dubletten-Sperre in `spielListeHolen`, die 2,5-Stunden-Regel des Schiedsrichters, die Datums-/Wettbewerbsprüfung. Das sind genau die Fehlerarten, die `STAND.md` bereits als wiederkehrend dokumentiert (Der Schiedsrichter — zehn Fehlerarten · Die Spielliste — drei Fehlerarten).

→ **Bewusst nicht gebaut, sondern nur aufgenommen (Arbeitsregel L):** Sieben ältere, bereits beschlossene Punkte (E, 2, 3, 4, 49, 50, 51) sind weiterhin nicht gebaut, der älteste seit dem 25.7. Dieser Punkt ist neu und noch nicht beschlossen — er reiht sich hinten ein, statt die älteren zu überholen.
→ **Kosten:** klein, in Stücken baubar, kein Geld, keine grosse Umbauarbeit — ähnlich wie Punkt 47 selbst.

---

**64. Rohe Schiedsrichter-Antwort mitschreiben** · *Vorschlag Claude, 28.8.2026, aus der Restarbeit zu Punkt 51 · von Ondo in Chat 25 entschieden, „wenn alles passt" · nachgetragen und gebaut 28.8.2026* · **Status: 🔴 GEBAUT am 28.8.2026 — `beta.html` v19.8.5**

> **🔴 Nachtrag (Arbeitsregel F):** Diese Entscheidung stand bereits aus einem vorherigen Chat (Chat 25), unter der Bedingung „wenn alles passt" — bisher nicht im Backlog nachgetragen. Wird mit dieser Lieferung nachgeholt, nicht erst nachträglich behauptet.

Bei NK Celje–Slovan Bratislava und Sabah FC–Hapoel Beer-Sheva FC lieferte der Schiedsrichter an drei Läufen drei verschiedene Endstände, trotz Temperatur 0 (siehe `STAND.md`, elfte Fehlerart). **Belegt (Codezitat):** In `geminiCall` (`beta.html`, Zeile 1141/1145) wird der rohe Antworttext `txt` nur zurückgegeben, nie in `state` geschrieben. `parseJsonBlock` (Zeile 1167ff.) extrahiert daraus nur den JSON-Block und verwirft den Rest. `verarbeite` (Zeile 1529ff.) übernimmt in `pruefListe` ausschliesslich die geparsten Felder (Status, Tore, Halbzeit, Quelle). **Die rohe Antwort existiert nirgends mehr, sobald der Lauf durch ist** — deshalb liess sich die Ursache der drei widersprüchlichen Celje/Sabah-Läufe im Nachhinein nicht rekonstruieren.

→ **Vorschlag:** Die rohe Antwort zusätzlich mitschreiben — z. B. als zusätzliches Feld am geparkten oder offenen Eintrag in `pruefListe` bzw. `state.kiProtokoll`. Zweck: Künftige Abweichungen wie bei Celje und Sabah wären nachträglich nachvollziehbar, nicht nur als Symptom sichtbar.
→ **Kein Schnitt in der Messreihe:** Der Schiedsrichter ist Messwerkzeug, nicht Messgegenstand (dieselbe Begründung wie bei Punkt 26) — eine Änderung an seiner Protokollierung berührt die Bewertung der Gehirne nicht.
→ **Kosten (Arbeitsregel G):** eine Codeänderung an der Stelle, die das Schiedsrichter-Ergebnis entgegennimmt (`verarbeite`, `pruefListe`); etwas mehr gespeicherter Text je Prüflauf, kein zusätzlicher Modellaufruf, kein Geld.
→ **🔴 GEBAUT am 28.8.2026, `beta.html` v19.8.5.** `verarbeite()` hängt jetzt ganz am Anfang — vor jeder Statusprüfung, gilt also für fertig/läuft/fehlt gleichermassen, nicht nur bei einem Fehlschlag — die volle rohe Antwort dieser Runde an jeden betroffenen `state.kiProtokoll`-Eintrag an (`e.refRoh`, Array statt Einzelfeld: mehrere Läufe für dasselbe Spiel überschreiben sich nicht, genau der Celje/Sabah-Fall). **`save()` läuft jetzt nach jeder Runde**, nicht erst bei `pruefAnwenden()` — sonst wären die rohen Antworten verloren, wenn ein Vorschlag nie übernommen wird, wie bei allen drei Celje/Sabah-Läufen geschehen. Zusätzlich in `pruefListe` als `rohAntwort` für die laufende Anzeige (nicht persistiert). Bewusst nur für `art==='log'` (kiProtokoll), nicht für `state.bets`. Bewusst nicht im „Messdaten ohne Schlüssel"-Export (Punkt 44) — würde ihn aufblähen; die normale Sicherung erfasst `refRoh` automatisch mit.
→ **🔴 Celje/Sabah markiert, im selben Zug (28.8.2026):** Neues Feld `parkGrund` (bisher gab es nur `e.geparkt` als Boolean, kein Grund-Feld). Einmalige, automatische Migration in `load()` (`state.seedV<5`, dasselbe Muster wie die bestehende v18-Archiv-Markierung) setzt `parkGrund:'unstable_ref'` bei geparkten Einträgen, deren Datum und Spielname (Stichwörter, klein geschrieben) zu NK Celje–Slovan Bratislava (25.8.) bzw. Sabah FC–Hapoel Beer-Sheva FC (26.8.) passen. **Grenze, offen ausgesprochen:** Stichwort- statt Exakt-Vergleich, weil `match` roh vom jeweiligen Gehirn stammt und leicht unterschiedlich geschrieben sein kann (dieselbe Grenze wie bei Punkt 51) — kein „zweifelsfrei" wie dort, sondern ein einmaliges, gezieltes Markieren zweier bekannter Spiele. Deshalb zusätzlich **sichtbar im Log** (Text- und Kartenansicht), damit Ondo nach der Lieferung selbst sieht, ob genau die richtigen Einträge markiert sind. **Bedingung, ausdrücklich: Neubewertung dieser beiden Spiele erst, sobald die Ursache der elften Fehlerart geklärt und der Schiedsrichter entsprechend repariert ist — nicht jetzt, kein Entparken, keine rückwirkende Rekonstruktion der bereits gelaufenen Antworten (nicht möglich, sie existieren nicht mehr).** Leeds-Leipzig (Punkt 36) ist ein anderer Fall und unberührt.
→ **Verifiziert:** `node --check` bestanden. Nicht committeter Python-Nachbau mit drei Fixture-Fällen (mehrere Läufe überschreiben `refRoh` nicht · Stichwortmuster markiert genau Celje/Sabah, nicht Leeds oder ein unbeteiligtes geparktes Spiel · ein bereits markierter Eintrag wird beim erneuten Durchlauf nicht doppelt verändert) — alle drei bestanden. `pruefe.py` danach: ALLES SAUBER.
→ **🔴 Nachfrage 28.8.2026, ERGÄNZT, `beta.html` v19.8.6: Modellversion bei `refRoh`.** Geprüft und belegt (`ai.google.dev`, GenerateContentResponse): Die Gemini-API liefert ein eigenes Feld `modelVersion` — die tatsächlich aufgelöste Version, nicht den aufgerufenen `gemini-flash-latest`-Alias (dokumentiertes Beispiel: Aufruf über `gemini-1.5-flash-latest` lieferte `modelVersion:"gemini-1.5-flash-002"`). `geminiCall()` verwarf dieses Feld bisher zusammen mit dem restlichen rohen `res`. Jetzt wird es durchgereicht und landet als `modell` an jedem neuen `refRoh`-Eintrag — bei Gemini die aufgelöste Version (oder `null`, falls sie ausnahmsweise fehlt, ausdrücklich nicht geraten, Art. 11/14), beim Sonnet-Rückfallpfad der feste, alias-freie Modellname `claude-sonnet-4-6`. **Gilt nur für künftige Läufe** — keine rückwirkende Ergänzung, es gab ohnehin noch keinen Prüflauf mit `refRoh` seit dem 28.8.2026. **Verifiziert:** `node --check` bestanden, drei Fixture-Fälle im Python-Nachbau bestanden (Gemini mit vorhandener Version · Gemini ohne Version → `null`, nicht geraten · Sonnet-Pfad immer fest), `pruefe.py` danach: ALLES SAUBER.

---

## 🔴 Prio 1 — als Nächstes dran

**41. 🔴 Zuordnung der Listenangaben über den Spielnamen statt über die laufende Nummer** · *Spur Chat 13 (12.8.), am 13.8. von Chat 14 am Log BEWIESEN* · **Status: Idee, Ondo vorzulegen — die URSACHE ist belegt, die Abhilfe ist es nicht**

**Der Befund.** In `vorhersagen()` kommt der Spielname aus der Antwort des Gehirns, aber **Anpfiffzeit, Wettbewerb und Stufe kommen aus der Spielliste an derselben Zählstelle**:

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

**36. Verlängerte Spielformate schliessen — die andere Hälfte von Weg A** · *Fund 9.8., Claude beim Prüflauf* · **Status: Idee, Ondo vorzulegen**

Weg A (Beschluss Ondo 6.8.) schliesst aus der Spielliste **verkürzte** Formate aus: „Turniere mit verkuerzter Spielzeit (Vorbereitungsturniere mit 45- oder 60-Minuten-Partien)" und verlangt „Jedes aufgenommene Spiel muss ueber die vollen 90 Minuten gehen."

**Verlängerte Formate fallen nicht darunter.** Leeds – RB Leipzig war am 8.8. auf **120 Minuten** angesetzt, zwei Hälften zu 60 Minuten. Der offizielle Endstand ist 2:0, das zweite Tor fiel in der 109. Minute. Die App misst den Stand nach 90 Minuten und meldete 1:0.

→ **Nicht bestimmbar, ob der Schiedsrichter falsch gelesen hat** (Art. 11). Kein Anbieter veröffentlicht einen Zwischenstand bei Minute 90. Es ist wie beim Como Cup **keine Fehlerart des Schiedsrichters, sondern eine Lücke in der Spielliste**.
→ **Erledigt für diesen Fall:** Beide Leeds-Einträge sind auf Ondos Entscheidung **geparkt**.
→ **Vorschlag zur Vorlage:** Der Satz „Jedes aufgenommene Spiel muss ueber die vollen 90 Minuten gehen" wird zu „genau 90 Minuten plus Nachspielzeit — weder verkürzt noch verlängert". Eine Zeile, keine neuen Sprachschlüssel, kein Geld.
→ **Grenze der Wirkung:** Das schliesst nur aus, was die Spielliste als solches erkennt. Ein Modell, das das Format nicht kennt, nimmt es trotzdem auf. Senkt die Wahrscheinlichkeit, schliesst nichts aus.
→ **🔴 ZWEITER, STÄRKERER FALL (13.8.): 1. FC Union Berlin – Aris Limassol (9.8.), dreimal 45 Minuten.** Der Endstand 3:2 ist gesichert, der **Stand nach 90 Minuten nicht bestimmbar** — der Vereinsbericht legt alle fünf Tore in die ersten 90 Minuten (3:2 nach 90, Halbzeit 2:1), Flashscore nennt dieselben Torschützen mit 44./49./55./90./110. Minute (3:1 nach 90, Halbzeit 1:0). Beide Quellen widersprechen sich auch darin, wer zuerst traf. **Der Eintrag ist geparkt.**
→ **Warum dieser Fall stärker ist als Leeds:** Bei Leeds fehlte nur die Angabe. Hier liegen **zwei gleichwertige Quellen mit unvereinbaren Angaben** vor. Das Spiel ist nicht falsch gefunden, es ist mit der Messregel **nicht messbar**.
→ **Status jetzt: entscheidungsreif.** Es liegen zwei belegte Fälle in fünf Tagen vor.

→ **🔴 Dritte Bestätigung des Leeds-Falls, 28.8.2026 (externe Gegenprüfung im Rahmen der Restarbeit zu Punkt 51):** Drei unabhängige Primärquellen — Leeds United (offizielle Vereinsseite), Sportschau/ARD, Sky Sport — bestätigen übereinstimmend: **120 Minuten**, zwei Hälften zu je 60 Minuten, ausdrücklich zu diesem Zweck vereinbart. Endstand 2:0, **zweites Tor in der 109. Minute**, Halbzeit (bei Minute 60) 1:0. **Das ist dasselbe Spiel wie oben, kein dritter Fall** — die neuen Quellen bestätigen nur, was hier bereits seit dem 9.8. steht.
→ **Wichtiger als die Bestätigung: Sie stellt eine Annahme aus Punkt 51 (27.8.) infrage.** Dort wurde die Paarung entparkt mit der Begründung „Stand nach 90 Minuten ist bekannt und gesichert: 1:0". Bei einem 60/60-Format gibt es aber **keinen regulären Stand nach 90 Minuten** — die Halbzeitmarke liegt bei Minute 60, nicht 45, und Minute 90 fällt mitten in die zweite Hälfte. Der Massstab „Stand nach 90 Minuten", den die App misst, ist auf dieses Format schlicht nicht anwendbar; „1:0" ist kein bewiesener Zwischenstand, sondern eine Momentaufnahme ohne besondere Bedeutung für dieses Format. Einzelheiten und die Berichtigung der Ausführung stehen bei Punkt 51.
→ **Entschieden (Ondo, 28.8.2026): Leeds–Leipzig bleibt geparkt, keine Übernahme.** Punkt 36 selbst bleibt weiterhin unentschieden — dieser Fund entscheidet nichts vor, er dokumentiert nur.

---

**37. Kein Schutz gegen einen zweiten Vorhersagelauf am selben Tag** · *Fund 9.8., Claude* · **Status: Idee, Ondo vorzulegen**

`vorhersagen()` legt jeden zurückgegebenen Eintrag ungeprüft an. Es gibt **keine Prüfung**, ob ein Spiel für denselben Tag bereits im Log steht.

**🔴 Nachtrag 9.8., mittags — es ist bereits passiert.** Im KI-Log steht am **6. August** dasselbe Spiel zweimal:

```
6.8.2026 18:00 · Red Bull Salzburg - Pafos FC     [UEFA Europa League Qualifikation]
6.8.2026 19:00 · FC Red Bull Salzburg - Pafos FC  [UEFA Europa League]
```

**Ein Spiel, zwei Einträge, zwei verschiedene Anpfiffzeiten.** Der Doppelschutz in `spielListeHolen` vergleicht `String(s.match).toLowerCase().replace(/[^a-z0-9]/g,'')` — das vorangestellte „FC" macht aus `redbullsalzburgpafosfc` ein `fcredbullsalzburgpafosfc`, und die Prüfung schlägt fehl. **Der Punkt ist damit belegt, nicht mehr nur befürchtet, und er betrifft zwei Vorhersagen je Gehirn im Bestand.**

→ **Folge für den Bauvorschlag:** Ein Vergleich auf exakte Zeichengleichheit reicht nicht. Er muss auch Namensvarianten erfassen, oder der Vergleich läuft über Datum und Wettbewerb mit.

Am 9.8. lieferte der erste Lauf nur zwei Spiele. Ondo drückte ein zweites Mal und bekam fünf **andere** — keine Doppeleinträge. **Das war Glück.** Bei gleicher Spielliste stünden dieselben Spiele zweimal im Bestand und zählten zweimal in die Kalibrierung.

→ **Vorschlag zur Vorlage:** Vor dem Anlegen prüfen, ob Spielname und Datum schon vorhanden sind, und den Eintrag dann überspringen. Wenige Zeilen.
→ **Zu klären, bevor gebaut wird:** Ob ein bewusst zweiter Lauf am selben Tag ein zulässiger Anwendungsfall ist — etwa wenn der erste zu wenige Spiele lieferte. Dann wäre Überspringen richtig, Blockieren falsch.
→ **Kein Schnitt.** Betrifft weder den Auftragstext der Gehirne noch den des Schiedsrichters.
→ Hängt zusammen mit Frage 2 („Doppelter Spieleintrag als zehnte Fehlerart?").

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

**0c. Amtliche Quellen bevorzugen** · *Idee 30.7., Claude* · **Status: Idee**

Beim UEFA-Abgleich am 30.7. benutzte keine Schiedsrichter-Antwort `uefa.com`. Die falschen Ergebnisse stammten von `terrikon.com` und `flashfussball.de`. Am 31.7. kamen vier 0:0 in Folge aus derselben Quelle.

→ *Vorschlag: pro Wettbewerbsfamilie eine bevorzugte Quelle vorgeben. Die bestehende Quellenpflicht verlangt nur, **dass** eine Quelle genannt wird, nicht **welche**.*
→ *ChatGPT (30.7.) hält diesen Punkt für billiger als eine zweite unabhängige Quelle.*

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

**2. Erster Lernschritt** · *Idee 6.7., ChatGPT (Lernkette) · Art. 9* · **Status: 🔴 GEBAUT am 27.8.2026 — nur Flash, Wortlaut von Ondo bestätigt**

> **🔴 GEBAUT am 27.8.2026:** Der Vorhersage-Auftrag in `beta.html` (v19.8.3) trägt jetzt, ausschliesslich für Flash, den Absatz: „LEHRE AUS DEINER EIGENEN KALIBRIERUNG: Du ueberschaetzt deine eigene Zuversicht im Bereich 60-69 Prozent deutlich: von 49 Aussagen mit im Schnitt behaupteten 63 Prozent trafen nur 49 Prozent ein. Dasselbe Muster zeigt sich darunter. Nimm diese Abweichung als festen Erfahrungswert in deine eigene Einschaetzung auf." Sonnet bleibt unverändert, wie von beiden Prüfern (4.8.) empfohlen. **Ab hier gemessene Flash-Aussagen sind mit den älteren nicht mehr direkt vergleichbar** — dieselbe Art Schnitt wie bei Punkt F.

Jedes Gehirn bekommt seine eigene Kalibrierung mitgeteilt, Ondo bestätigt die Lehre, dann gilt sie.

Für **Flash** ist die Lehre klar benennbar: 29 Aussagen im Bereich 60–69 %, behauptet 62 %, eingetroffen 45 %.

**Warnung (Claude, verschärft 31.7.):** Für **Sonnet** gibt es insgesamt **fünf** bewertete Aussagen oberhalb von 60 %. Die 87 Aussagen stammen überwiegend aus Testspielen und ausgeglichenen Partien; die sieben CL-Vorhersagen vom 29.7. sind nicht darunter, weil sie nie übernommen wurden. Eine Lehre auf dieser Grundlage misst vor allem, wie schwer die Spiele waren.

**Zweiter Grund zum Verschieben (31.7.):** Ein Lernschritt ist nach Art. 9 eine bestätigte Lehre. Eine Lehre auf ungeklärter Datengrundlage wieder zurückzunehmen ist teurer, als sie später zu geben. Solange Test A offen ist, weiß niemand, was ein Teil dieser Zahlen bedeutet.

→ *Empfehlung Claude: verschieben. **Entscheidung Ondos steht aus.***
→ **⚠ Neu am 6.8.: Die Schwelle ist überschritten.** *(Verlaufsangabe vom 6.8. — der heutige Messstand steht in `STAND.md` und nur dort.)* Nachgerechnet aus dem KI-Log-Text und gegen die App geprüft: **je 135 bewertete Aussagen**. Der belegte Maßstab „rund 100 je Gehirn" ist damit erreicht, und der **erste** Grund zum Verschieben ist weggefallen.
→ **Der zweite Grund besteht fort:** Sonnet hat über 60 % nur **10 von 135** Aussagen. Über Sonnets Verhalten bei Zuversicht wissen wir weiterhin fast nichts.
→ **Flashs Lehre ist jetzt sehr solide belegt:** 49 Aussagen im Bereich 60–69 %, behauptet 63 %, eingetroffen 49 %. Dazu dasselbe Muster nach unten: unter 50 % behauptet 43, eingetroffen 32.
→ Das deckt sich mit der Antwort beider Prüfer vom 4.8.: im ersten Durchgang nur Flash korrigieren. **Ondos Entscheidung steht weiterhin aus.**
→ **Beschlossen (Ondo, 31.7.): als ausdrücklich OFFENE Frage an ChatGPT und Gemini geben.** Bericht gestellt am 4.8., 06:15 Uhr.
→ **Antwort beider Prüfer (4.8.): ja, im ersten Durchgang nur Flash korrigieren, Sonnet unangetastet lassen.** Begründung: Sonnet ist mit 5 % solide; zu mehr Entschlossenheit zu drängen, erzöge ein ehrliches Modell zu falscher Sicherheit. **Entscheidung Ondos steht weiterhin aus** — eine Prüferantwort ist ein Vorschlag, kein Auftrag (Art. 8).
→ **⚠ Zahlenberichtigung (4.8., gefunden von Chat 5):** Der Bericht vom 4.8. behauptet, eine „150er-Schwelle" für den Lernschritt sei mit 174 Aussagen überschritten. **Beides ist falsch.** Eine 150er-Schwelle steht in keiner Projektdatei; belegt ist ausschliesslich „rund 100 **pro Gehirn**" (PROJEKT-STATUS, Abschnitt Richtungswechsel 23.7.). Und 87 + 87 zu addieren ist unsinnig, weil der Lernschritt je Gehirn gilt. **Nach dem belegten Maßstab ist die Schwelle nicht erreicht.** Eine berichtigte Fassung ist den Prüfern nachzureichen.

---

**3. Such-Experiment** · *Idee 23.7., Claude* · **Status: beschlossen — ruht auf Ondos Wunsch (27.8.), nicht mehr blockiert**

Vier Wochen ohne Websuche messen, dann Suche zuschalten, Kalibrierung vergleichen. Die Messung ohne Suche läuft seit dem 23. Juli — **vier Wochen sind am 20. August um.**

→ **🔴 Berichtigt (27.8.):** Hier stand „die Pause bricht den zweiten Teil", weil ein Vergleich mit Suche neue Vorhersagen brauche und die Pause seit 14.8. keine liefere. **Das war ab dem 25.8. nicht mehr richtig** — laut KI-Log gibt es am 25.8. (24 offene) und 26.8. (10 offene) neue Vorhersagen. Der zweite Teil ist also technisch wieder möglich, eine kleine Messreihe könnte jederzeit gestartet werden.
→ **Ondos Entscheidung (27.8.): trotzdem vorerst ruhen lassen.** Keiner der drei Wege ist damit ausgeschlossen, nur bewusst noch nicht gewählt.
→ **Kosten:** Ruhenlassen und Streichen kosten nichts. Zusätzliche Läufe kosten Modellaufrufe in unbekannter Höhe, weil die Zahl der nötigen Läufe nicht feststeht.
→ **Empfehlung Claude weiterhin: ruhen lassen.** Der Punkt ist nicht verdorben, nur vertagt — die Messreihe ohne Suche bleibt vollständig erhalten und wäre jederzeit die Vergleichsgrundlage.

---

**43. Punkt 29 ist gebaut und nirgends ausgewertet** · *Fund 13.8., Chat 14 in der Abnahme · aufgenommen 14.8.* · **Status: Aufgabe, nicht entschieden — auszuführen, sobald ein frischer KI-Log vorliegt**

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

**48. Struktur- und Reihenfolgebeweis** · *Vorschlag 15.8., ChatGPT und Gemini unabhängig · beschlossen 15.8., Ondo* · **Status: 🔴 GEBAUT am 15.8.2026 (Chat 17)**

> Der Zeilenbeweis zeigt, dass nichts fehlt. Er zeigt nicht, dass der Text noch an seinem Platz steht. `pruefe.py` Abschnitt 9b prüft jetzt zusätzlich, dass jeder Block **am Stück** in **genau einer** Zieldatei steht und dass die **Reihenfolge** erhalten ist. Eine bewusst geänderte Reihenfolge zählt nur, wenn sie **in der Datei selbst** erklärt ist — sonst liesse sich jede Unordnung nachträglich zur Absicht erklären.

**49. Messmethodik und Interpretationsgrenzen in `STAND.md`** · *Vorschlag 15.8., ChatGPT · gebaut 27.8.2026, Claude* · **Status: 🔴 GEBAUT am 27.8.2026**

> Ein neuer Chat kann heute aus richtigen Zahlen eine falsche Empfehlung ableiten, weil die Zahlen dastehen und ihre Grenzen nicht. In die Pflichtlektüre gehören: Definition der drei Märkte · wie Brier-Score und Kalibrierung gerechnet werden · was in den Nenner zählt und was nicht · dass geparkte Einträge **kein** Ergebnis haben · welcher Rohdatenstand ausgewertet wurde · der Schnitt bei „beide treffen" · die ungeklärten Anpfiffzeiten. **Und als Kern eine Liste: „Was darf aus diesem Messstand NICHT geschlossen werden?"**
>
> **🔴 GEBAUT am 27.8.2026:** Neuer Abschnitt „Messmethodik und Interpretationsgrenzen" in `STAND.md`, direkt vor „Aktueller Messstand". Jede Aussage darin an einer Codezeile (`maerkteBauen`, `calcKalibrierung` in `beta.html`) oder einem bereits bestehenden Satz belegt (Arbeitsregel H) — keine neue Methode entschieden, nur die bestehende aufgeschrieben.

**50. Verworfen-und-warum-Liste im Blueprint** · *Vorschlag 15.8., Gemini (abgeschwächt von Claude)* · **Status: 🔴 NICHT GEBAUT (Claude, 27.8., Entscheidung an Claude delegiert) — bleibt sichtbar, nicht gestrichen**

> Gemini wollte das ganze Entscheidungs-Protokoll zurück in die Pflichtlektüre, damit ein frischer Chat keine geschlossenen Debatten neu eröffnet. **Das wären 48 KB und die Trennung rückgängig.** Stattdessen eine kurze Liste im Blueprint: was verworfen wurde, je ein Satz warum, Verweis ins Protokoll für Einzelheiten.
>
> **🔴 Entscheidung (Claude, 27.8., von Ondo ausdrücklich delegiert):** nicht gebaut. Die Liste bräuchte bei jeder künftig verworfenen Idee eine eigene Pflege — genau die Art Doku-Aufwand, gegen den Ondo sich wandte —, ohne dass bisher ein echter Fall aufgetreten ist, in dem ein Chat eine geschlossene Debatte neu aufgemacht hätte. Der Nutzen ist unbelegt, die laufenden Kosten sind sicher. **Sollte künftig tatsächlich einmal eine alte Debatte unnötig neu aufgemacht werden, ist das der Beleg, der die Liste doch rechtfertigt** — bis dahin bleibt es bei Blueprint-Protokoll und Backlog als alleinigen Fundorten.

**51. Gepaarter Vergleich Sonnet gegen Flash** · *Vorschlag 15.8., ChatGPT · Voraussetzung „sauberes Entparken" am 27.8. abgeschlossen · gebaut 28.8.2026* · **Status: 🔴 GEBAUT am 28.8.2026 — `beta.html` v19.8.4**

> Zwei getrennt betrachtete Unsicherheitsbereiche sind der schwächere Weg; **überlappende Bereiche beweisen nicht, dass die Gehirne gleich gut sind.** Beide bekommen dieselbe Spielliste — deshalb ist ein Vergleich Spiel für Spiel aussagekräftiger. **Die Rohdaten liegen vor; es braucht keine einzige neue Vorhersage.**
>
> **🔴 Voraussetzung (Ondo, 15.8.): sauberes Entparken durch Claude.** Jeder geparkte Eintrag wird einzeln auf seinen **Grund** geprüft — 45-Minuten-Testspiele, doppelte Vorhersagen, erfundene Paarungen —, maschinell und nachvollziehbar, nicht nach Anzahl. Ondo prüft nichts von Hand nach.
>
> **🔴 GEPRÜFT am 27.8.2026, anhand der Messdaten und des KI-Logs vom selben Tag (54 geparkte Einträge, 27 Spielpaarungen) UND gezielt gegen die Archivdokumente (Backlog-Archiv, Chronik Juli/August, Blueprint-Protokoll, `archiv/PROJEKT-STATUS.md`).** Für 26 der 27 Paarungen steht der Grund bereits dort, nicht neu ermittelt:
> - **15 Paarungen (29./30./31.7., 30 Einträge) — die gesperrte „Prüfbibliothek" der neunten Fehlerart (erfundene 0:0, verschiedene Endstände aus derselben Quelle, dokumentiert im Blueprint-Protokoll 31.7.).** Ausdrücklich „dürfen NICHT übernommen werden" (Chronik 31.7.). **Bleiben dauerhaft geparkt.**
> - **5 Paarungen (7.8., 10 Einträge) — die erfundenen Paarungen (Fund S3).** Vier frei zusammengesetzte, eine falsch datiert. Zu solchen Spielen kann nie ein echtes Ergebnis entstehen. **Bleiben dauerhaft geparkt.**
> - **2 Paarungen (28.7., Crystal Palace–Famalicão und –Lens, 4 Einträge) — Ergebnisse waren am 4.8. gefunden (0:0 bzw. 0:3), aber wegen der „45-Minuten-Frage" bewusst nicht übernommen (Backlog-Archiv, 5.8.).** Verkürztes Vorbereitungsformat, kein gültiger 90-Minuten-Stand. **Bleiben geparkt.**
> - **1 Paarung (2.8., Bohemians – Galway United, doppelt gelistet, 4 Einträge) — Ergebnis war am 4.8. gefunden (1:1), Ondo hat das Spiel aber ausdrücklich ganz herausgenommen:** Bei den beiden Listungen hatte Flash einmal 3 von 3, einmal 1 von 3 richtig; jede Auswahl hätte Flashs Bilanz einseitig verschoben (Chronik 3.–4.8.). **Bleibt dauerhaft geparkt, das ist Ondos eigene Entscheidung, keine offene Frage.**
> - **1 Paarung (9.8., 1. FC Union Berlin – Aris Limassol, 2 Einträge) — bereits in `STAND.md` dokumentiert: dreimal 45 Minuten, zwei Quellen widersprechen sich beim 90-Minuten-Stand.** Echte, unaufgelöste Unklarheit. **Bleibt geparkt.**
> - **1 Paarung (8.8., Leeds United – RB Leipzig, 2 Einträge) — bereits in `STAND.md` dokumentiert: 120-Minuten-Freundschaftsspiel, offizieller Endstand 2:0 (zweites Tor 109. Minute), Stand nach 90 Minuten ist bekannt und gesichert: 1:0.** Verlängerte Formate fallen nicht unter den Ausschluss. **Einzige Paarung, die entparkt wird.**
>
> **Keine Websuche für die 26 anderen Paarungen nötig gewesen — alles bereits an anderer Stelle im Projekt belegt (Arbeitsregel H).** Für keine der 26 wäre ohne neuen Beleg etwas anderes als „bleibt geparkt" verantwortbar gewesen.
>
> **Ausführung (27.8.2026):** `logParkenTag('8.8.2026', false)` in der App entparkt genau diese eine Paarung — geprüft, dass an diesem Tag sonst nichts geparkt ist, der Klick trifft also nur die beiden Leeds-Leipzig-Einträge. **Nach dem Entparken meldet der nächste Prüflauf vermutlich erneut ein Ergebnis für dieses Spiel — vor dem Übernehmen gegen den hier bereits gesicherten 90-Minuten-Stand 1:0 prüfen, nicht ungeprüft übernehmen**, falls die Suche durch die Verlängerung erneut auf 2:0 hereinfällt.
>
> **🔴 BERICHTIGT am 28.8.2026, Fehlerart C4 (Widerspruch nicht danebenstellen, sondern im selben Durchgang berichtigen).** Der Satz „Stand nach 90 Minuten ist bekannt und gesichert: 1:0" oben war die Grundlage fürs Entparken — und ist falsch begründet. Leeds–RB Leipzig lief über zwei Hälften zu je 60 Minuten (dreifach durch Primärquellen bestätigt: Vereinsseite, Sportschau/ARD, Sky Sport — 120 Minuten, zweites Tor 109. Minute, Halbzeit bei Minute 60 mit Stand 1:0). Bei diesem Format gibt es **keine reguläre Marke bei Minute 90** — sie liegt mitten in der zweiten Hälfte, nicht an der Halbzeitgrenze. Der „Stand nach 90 Minuten" ist damit keine gesicherte Grösse, sondern eine Momentaufnahme ohne die Bedeutung, die ihr die Ausführung vom 27.8. gegeben hat. **Die Restarbeit an diesem Punkt hat das am 28.8.2026 aufgedeckt:** Von 18 durch ERGEBNISSE PRÜFEN erzeugten Vorschlägen (ausgelöst über Ondos „Wieder prüfen" vom 8.8.) hat eine externe Gegenprüfung (separater Chat, eigene Websuche je Spiel) 15 als fehlerfrei bestätigt — bereits übernommen — und drei als fehlerhaft verworfen, **nicht übernommen**: NK Celje–Slovan Bratislava, Sabah FC–Hapoel Beer-Sheva FC, und **Leeds United–RB Leipzig**, aus dem oben genannten Grund. **Ondo (28.8.): Leeds–Leipzig bleibt geparkt.** Die beiden anderen Fälle (NK Celje, Sabah FC) gehören nicht zu Punkt 36 — sie sind bei der neuen elften Fehlerart des Schiedsrichters dokumentiert (`STAND.md`).
>
> **🔴 EINDEUTIG BESTÄTIGT am 28.8.2026 (Ondo, bereits Chat 25 mitgeteilt):** Leeds–Leipzig **ist geparkt** — kein offener Ausführungsschritt in der App, kein Widerspruch zur `logParkenTag`-Ausführung vom 27.8. Diese Bestätigung stand nur in einem anderen Chat, nicht in diesem Dokument — genau das führte in einer Übergabe zu einer unnötigen Rückfrage. Lehre daraus: eine Ondo mündlich/in einem anderen Chat gegebene Bestätigung gehört in derselben Antwort ins Dokument, nicht nur ins Gespräch (Arbeitsregel F).
>
> **🔴 GEBAUT am 28.8.2026, `beta.html` v19.8.4.** Neue Funktion `calcGepaartVergleich()` plus Anzeige `gepaartBlock()`, im Tab „Finanzen" direkt unter der bestehenden Kalibrierungsanzeige. `calcKalibrierung`/`maerkteBauen` unverändert, kein Schnitt in der Messreihe.
> **Paarung — vor dem Bauen geprüft, wie von Ondo verlangt:** Kein gemeinsames ID-Feld zwischen einem Sonnet- und einem Flash-Eintrag. Backlog-Punkt 41 betrifft hier nichts: Der dort beschriebene Fehler sitzt in `wettbewerb`/`anpfiff`/`stufe` (über den Listen-Index `paket.liste[idx]` geholt) — `match` dagegen kommt direkt aus der Antwort des jeweiligen Gehirns selbst (`v.match`), unabhängig vom Index. **Gewählter Schlüssel: exakter Text von `match` (getrimmt) + exakter Text von `datum`** — bewusst keine Normalisierung wie bei der Dubletten-Sperre in `spielListeHolen`: das kann Paare übersehen (bei geringfügig anders benannten Spielen, Fehlerart S1), kann aber nie zwei verschiedene Spiele fälschlich zusammenlegen. Kommt derselbe Schlüssel beim selben Gehirn mehrfach vor (z. B. zweiter Lauf am selben Tag, Punkt 37): nicht gepaart, separat als „mehrdeutig" gezählt und in der App ausgewiesen — nicht geraten.
> **Verifiziert:** `node --check` auf den Skriptinhalt bestanden. Zusätzlich ein nicht committeter Python-Nachbau von `calcGepaartVergleich()` mit vier Fixture-Fällen (sauberes Paar mit gemischtem Ergebnis über die drei Märkte · nur einseitiger Eintrag, kein Paar · mehrdeutiger Doppel-Schlüssel · geparkter Eintrag ausgeschlossen) — alle vier bestanden. `pruefe.py` danach: ALLES SAUBER.
> **11 neue Sprachschlüssel** (`gepaart` bis `gepaartMehrdeutig`, DE/FR/EN) — Sprachschlüsselzahl in `STAND.md` von 217 auf 228 angehoben, von `pruefe.py` Abschnitt 13 selbst nachgezählt.
> **Was die Anzeige zeigt, je Markt (1x2/Tore/BTTS):** Anzahl gepaarter Spiele, davon nur Sonnet richtig / nur Flash richtig / beide richtig / beide falsch — reine Zahlen, keine Wertung im Code. Einordnung bleibt `STAND.md` und Ondo vorbehalten, wie verlangt.

---

**52. Der Verlustbeweis braucht ein Ende** · *Fund 16.8., Claude · entschieden 21.8., Claude auf Ondos ausdrückliche Übertragung · geschlossen 27.8.2026, Ondo (verschieben statt löschen)* · **Status: GESCHLOSSEN 27.8.2026 — `PROJEKT-STATUS.md` nach `archiv/PROJEKT-STATUS.md` verschoben**

Der Beweis aus Punkt 48 vergleicht `STAND.md` gegen `PROJEKT-STATUS.md`. **Jede Pflege einer Zeile, die von dort stammt, bricht ihn** — auch eine richtige. Am 16.8. traf es die Zeile mit der letzten Sicherung; sie musste in die Ausnahmeliste. **Die Liste wächst damit mit jeder Pflege, und eine wachsende Ausnahmeliste beweist immer weniger.**

Das Skript sieht selbst vor, dass der Beweis entfällt, sobald das Original nicht mehr im Ordner liegt — „nach der Bewährungszeit gewollt". Wann diese Bewährungszeit endet, hat niemand festgelegt.

→ **Zur Entscheidung:** Wird eine Frist gesetzt, nach der `PROJEKT-STATUS.md` aus dem Ordner genommen wird? **Claude schlägt nichts vor, bevor Ondo den Zweck bestimmt hat** — der Beweis sichert die Trennung vom 15.8., nicht die laufende Pflege.
→ **🔴 GESCHLOSSEN am 27.8.2026 (Ondo entscheidet: verschieben statt löschen):** `PROJEKT-STATUS.md` liegt jetzt unter `archiv/PROJEKT-STATUS.md`. `pruefe.py`s eigener Code sieht das bereits vor — `verlust()`/`struktur()` überspringen den Beweis mit „Original nicht im Ordner — Beweis uebersprungen", sobald die Datei am geprüften Pfad (Repo-Wurzel) fehlt, unabhängig davon, ob sie gelöscht oder nur verschoben wurde. Die zwei stehenden FEHL werden dadurch zu OK. Nichts ist verloren gegangen, nur der Ort hat sich geändert.
→ **🔴 Eingetreten am 21.8.2026 (Chat 20, Lauf um 05:50 Uhr):** Die drei Berichtigungen vom selben Morgen, 05:24 Uhr (Commit `dabf9bb`), haben in `STAND.md` zwei Zeilen gepflegt, die aus `PROJEKT-STATUS.md` stammen — den Klammerzusatz „(Fassung 5, 31.7.)" bei „Master-Dokumente im Repo" und den neuen Leitbild-Vermerk unter „Wetten ist das Pilotmodul". **Seither meldet `pruefe.py` einen unerklärten Verlust (Abschnitt 9) und zwei Blöcke, die nicht mehr am Stück wiedergefunden werden (Abschnitt 9b).** Beide Berichtigungen waren inhaltlich richtig; **gebrochen ist der Beweis, nicht das Dokument.** Aufgefallen ist es erst einen Lauf später, weil `pruefe.py` in der Cloud-Sitzung nicht lag (siehe Punkt 46). **Nichts geändert** — ob die Ausnahmeliste erneut wächst, ist genau die Entscheidung, die dieser Punkt Ondo vorlegt.
→ **Kosten:** keine, solange nicht entschieden wird.
→ **🔴 ENTSCHIEDEN am 21.8.2026 (Claude, auf Ondos ausdrückliche Übertragung): keine Frist.** Die beiden FEHL aus `dabf9bb` bleiben stehen und werden nicht mehr bei jedem Lauf gemeldet. **Begründung:** Der Beweis sichert die Trennung vom 15.8., und die ist bewiesen. Er kann die laufende Pflege nicht überwachen, weil jede richtige Pflege ihn bricht. Fällt er später ganz weg, ist das kein Verlust. **Status: erledigt.**

---

**59. `pruefe.py` Abschnitt 1 meldet zusätzliche Zeitstempel-FEHL trotz gleicher Kopfzeiten** · *Fund 24.8.2026, drei unabhängige Läufe (Claude Code, Mistral, ein dritter Beleg)* · **Status: GEKLÄRT**

Drei unabhängige Läufe (Claude Code 24.8., 12:38 Uhr · Mistral 24.8., 12:52 Uhr · sowie ein dritter Beleg) melden bei gleichlautenden Kopf-Zeitstempeln (`STAND.md`, Backlog, Blueprint — alle „24. August 2026, 09:54 Uhr" bzw. „24.8.2026, 09:54 Uhr") dennoch drei FEHL: STAND-Kopf, Backlog-Kopf, Blueprint-Kopf. Zusätzlich zu den zwei bekannten, akzeptierten FEHL aus Punkt 52 (Abschnitt 9 + 9b). Ergibt fünf FEHL statt der bisher als sauber geltenden zwei.

→ **Ursache noch nicht untersucht** — möglicherweise ein Unterschied zwischen den Datumsformaten („24. August 2026" gegen „24.8.2026"), noch nicht geprüft.
→ **Nächster Schritt:** die genaue Prüfzeile in Abschnitt 1 von `pruefe.py` selbst lesen.
→ **Ursache gefunden (27.8.2026):** Kein Fehler in den Dokumenten oder in `pruefe.py`. Alle drei Kopf-Zeitstempel (STAND, Backlog, Blueprint) stimmen tatsächlich überein. Die drei FEHL entstanden, weil den betroffenen `pruefe.py`-Läufen eine frisch abgelesene Uhrzeit übergeben wurde, obwohl die Aufträge keines der drei Dokumente inhaltlich änderten — in diesem Fall verlangt Arbeitsregel M die ZULETZT GESETZTE Zeit der drei Dokumente, nicht eine frische Ablesung. Fehler lag bei der Auftragsformulierung durch Claude, nicht im Projekt. Kein weiterer Handlungsbedarf.

---

**60. Sprachschlüsselzahl in `STAND.md` stimmt nicht mit tatsächlicher Zählung überein** · *Fund 24.8.2026, Mistral (Backlog-Punkt 47) · geklärt und gebaut 27.8.2026, Claude, Vorschlag aus dem Ondo-Jarvis-Strukturvergleich* · **Status: GEKLÄRT UND GEBAUT 27.8.2026 — 217 war richtig**

`STAND.md` nennt 217 Sprachschlüssel. Ein unabhängiges Prüfskript (Mistral, Backlog-Punkt 47, 24.8.2026) zählte 142 Schlüssel je Sprache (DE/FR/EN), übereinstimmend zwischen allen drei Sprachen. Ursache der Differenz (217 gegen 142) war zunächst nicht geklärt — entweder war die Zählmethode unterschiedlich, oder eine der beiden Zahlen war veraltet.

→ **🔴 GEKLÄRT am 27.8.2026 (Claude, Codezitat statt Vermutung):** `pruefe.py` zählt die Schlüssel jetzt selbst direkt aus dem `I18N`-Block in `beta.html` (neuer Abschnitt 13). Ergebnis, mehrfach mit unterschiedlichen Regeln gegengeprüft: **217, identisch in DE, FR und EN.** `STAND.md` war richtig. Mistrals Zählmethode hat unterzählt — vermutlich hat sie einen Teil der Schlüssel-Syntax nicht erfasst (z. B. Schlüssel direkt nach der öffnenden Klammer der jeweiligen Sprache); die genaue Fehlerursache in Mistrals Skript selbst ist nicht weiter untersucht, das ist nicht mehr nötig, seit `pruefe.py` unabhängig selbst zählt.
→ **🔴 GEBAUT am 27.8.2026:** `pruefe.py` Abschnitt 13 zählt bei jedem Lauf automatisch nach, vergleicht die drei Sprachen gegeneinander und gegen die Zahl in `STAND.md` — eine künftige Abweichung fällt sofort auf, ohne von Hand nachzuzählen. Vorschlag stammt aus einem Strukturvergleich mit `ondo-jarvis` (27.8.2026, unabhängige Sitzung mit Zugriff auf beide Repos), von Chat 25 und Claude unabhängig voneinander befürwortet.
→ **Kosten:** keine, `pruefe.py` läuft ohnehin vor jeder Lieferung.

---


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
| **Sprachdateien von Hand** (217 Schlüssel × 3 Sprachen, gezählt am 14.8. abends — maschinell abgeglichen, identisch) | Dreifache Pflege bei jeder neuen Beschriftung. Rückgriff bleibt Punkt 19 | niedrig |
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

