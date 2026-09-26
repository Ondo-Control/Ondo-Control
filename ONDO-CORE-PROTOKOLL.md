# ONDO CORE — ARCHITEKTUR-PROTOKOLL
*Die alten Fassungsnotizen von `Ondo-Core-Architektur.md`.*
*Neu angelegt am 14.9.2026 (Ondos Auftrag, Phase 2 der Trennung von aktuellem Stand und Geschichte) — nach dem Vorbild von `BLUEPRINT-PROTOKOLL.md`. Bis dahin gab es fuer dieses Dokument keine Archivdatei; die Fassungsnotizen standen im Kopf von `Ondo-Core-Architektur.md` selbst.*
*Wird beim Start eines Chats **nicht** gelesen, sondern nur auf Zuruf.*
*Die Architektur selbst steht in `Ondo-Core-Architektur.md` und bleibt Pflichtlektuere.*

---

*Fassung 0.4 — 13.8.2026, 16:32 Uhr: Abschnitt 1b „Drei-Ebenen-Trennung" ergänzt (Backlog-Punkt 6, beschlossen am 23.7., 21 Tage offen).*
*Fassung 0.5 — 11.9.2026: Abschnitt 1c „Lernkette: der Evidence Ledger" ergänzt (Backlog-Punkt 75, Auftrag Ondo 11.9.2026).*
*Fassung 0.6 — 11.9.2026: Schema in Abschnitt 1c vervollständigt und die Auflage an den Observation Layer auf die zwei tatsächlichen Felder festgenagelt — bei Ondos Nachprüfung fiel auf, dass die als „Schema" bezeichnete Tabelle in Fassung 0.5 mehrere real vorhandene Felder nicht nannte (`ergebnisHalbzeit`, `ergebnisVerl`, `ergebnisQuelle`, `bttsWort`, `refLaeufe`, `refQuellen`, `parkFormat`, `maerkte[].fAlt`/`fKorr`). Jetzt maschinell aus `beta.html` ausgezählt statt aus dem Gedächtnis geschrieben.*
*Fassung 0.7 — 11.9.2026: Berichtigung in derselben Tabelle. Fassung 0.6 zählte zwar die Feldnamen maschinell aus, beschrieb aber weiterhin aus der Annahme heraus, **wer** sie schreibt — und behauptete für `ergebnisHalbzeit`/`ergebnisVerl` „vom Schiedsrichter nachgetragen". Der Code widerlegt das: `pruefAnwenden()` schreibt ausschliesslich `ergebnisHeim`/`ergebnisGast`. Der Backlog führte diesen Befund bereits (Punkt 64, zweiter Fund) — die Tabelle widersprach damit dem Backlog (Fehlerart C4). Zeile berichtigt, Fund bei Punkt 64 verlinkt.*
*Fassung 0.8 — 12.9.2026: Abschnitt 4 „Memory" berichtigt (Backlog-Punkt 76, `beta.html` v19.8.30). Stufe 1 nannte weiterhin `localStorage` als aktuellen Stand — seit v19.8.30 ist das `IndexedDB` (die feste, kleine `localStorage`-Grenze hatte bei Ondo real bei 2.726 KB zugeschlagen, v19.8.29). Erste, positive Bewährungsbeobachtung ergänzt: Ondo hat eine Änderung im KI-Log gesetzt, die Safari-App selbst vollständig geschlossen und neu geöffnet (nicht nur die Seite neu geladen — von Ondo selbst am 12.9.2026 richtiggestellt) und bestätigt „Hat funktioniert" — ein Beleg, keine abgeschlossene Bewährung (Stabilitätsregel, Art. 14: ein einzelner Fall ist kein Beweis).*
*Fassung 0.9 — 12.9.2026: Neuer Abschnitt 1d „Trainingsraum — isolierte Testumgebung" (Backlog-Punkt 77, Auftrag Ondo 12.9.2026). Plan vor dem Bau festgehalten, wie vom Auftrag verlangt: Wiederverwendung von `vorhersageGehirn()` (bereits ohne Websuche), Zulassungsregel nach Trainings-Stichtag statt Raten, ein zusätzlich gefundenes Wettlauf-Risiko in `zuletztModell` und dessen Behebung über das bereits vorhandene `modelVersion`-Feld, getrennte Ablage vom Evidence Ledger. Kein Verfassungsartikel geändert.*
*Fassung 0.10 — 12.9.2026: Abschnitt 2 und 3 berichtigt. Beide beschrieben seit ihrer ersten
Fassung ein Ziel (Pflichtprozess mit Quellenprüfung, Vertrauensanzeige HOCH/MITTEL/NIEDRIG mit
Begründungszeilen) als wäre es der aktuelle Stand — die tatsächlich gebaute `vorhersageGehirn()`
erreicht das bis heute nicht: keine Websuche, keine Quellenprüfung, nur rohe Prozentzahlen.
Fund Ondo, 12.9.2026, im Gespräch über den Trainingsraum aufgedeckt — nicht vorher gemeldet.
Kein Verfassungsartikel geändert, keine neue Arbeitsregel; die Lücke selbst ist keine
Architekturentscheidung, nur ein bisher unbenannter Abstand zwischen Plan und Bau.*
*Fassung 0.11 — 12.9.2026: Backlog-Punkt 79 gebaut (`beta.html` v19.10.0). Abschnitt 1c
(Evidence Ledger) um das neue Feld `recherchiert` ergänzt (Schnitt in der Messreihe). Abschnitt
2 um einen Verweis ergänzt: `marktlageHolen()` ist ein erster, kleiner Schritt in Richtung der
dort beschriebenen Zielarchitektur, deckt sie aber weiterhin nicht annähernd ab. Kein
Verfassungsartikel geändert, keine neue Arbeitsregel.*
*Fassung 0.12 — 12.9.2026: Abschnitt 1d berichtigt/ergänzt (Backlog-Punkt 77, Nachbesserung,
`beta.html` v19.11.0): Weg (a) trägt jetzt eine wählbare Zeitraum-Eingrenzung
(`trainingsraumKandidaten(...,von,bis)`), Weg (b) eine echte Eintragemöglichkeit
(`trainingsraumSpielHinzufuegen()`/`trainingsraumSpielLoeschen()`) statt der zuvor dauerhaft
leeren Liste — beide mit „Berichtigt"-Vermerk an den betroffenen Stellen, nicht überschrieben.
Kein Verfassungsartikel geändert, keine neue Arbeitsregel.*
*Fassung 0.13 — 12.9.2026: Abschnitt 1c berichtigt/ergänzt (Backlog-Punkt 78, `beta.html`
v19.12.0): Der Decision Ledger verknüpft eine Wette jetzt optional mit mehreren
`kiProtokoll`-Einträgen (`kiProtokollIds`-Liste, additiv zum alten Einzelfeld) statt nur einem
— für Kombi-Wetten. Ebenen-Trennung (1b) unberührt, reine Referenzliste. Kein
Verfassungsartikel geändert, keine neue Arbeitsregel.*
*Fassung 0.18 — 26.9.2026: Abschnitt 1e präzisiert (Backlog-Punkt 87, `beta.html` v19.20.0): Laufzeit-Normalisierung von deutschen/englischen Nationalmannschaftsnamen über ISO-3166-1 + `Intl.DisplayNames`; nur wenn beide Teams auf beiden Seiten ISO-Länder sind. Keine gepflegte Alias-Tabelle, Vereinsresolver und Stufe 3 unverändert; Nicht-ISO-Fälle bleiben im bisherigen Weg.*

