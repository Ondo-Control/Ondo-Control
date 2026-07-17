# ONDO CONTROL — PROJEKT-STATUS
*Dieses Dokument ist die Chat-übergreifende Zusammenfassung. Bei jedem Meilenstein aktualisieren. Stand: 17. Juli 2026.*

## Für jede KI, die dieses Projekt unterstützt
Ondo Control ist ein persönliches Entscheidungsunterstützungssystem (Web-App, eine HTML-Datei, GitHub Pages, localStorage, keine Server). Besitzer/Product Owner: Ondo (kein Programmierer — einfache Sprache, jede Änderung liefert er selbst als Datei-Upload zu GitHub). Rollen: Claude = Hauptentwickler, ChatGPT = Architekt/Reviewer, Gemini = Reviewer. Regeln: erst abstimmen, dann bauen · Zwei-Probleme-Regel · Stabilitätsregel (Bewährungszeit) · Artikel 14: nie klüger/sicherer wirken als real. Master-Dokumente: Blueprint.md (Verfassung, Entscheidungsprotokoll) + Ondo-Core-Architektur.md — beide in diesem Repo.

## Versionen
- **Stabil: v17** → OndoControl.html (Homescreen-App des Besitzers; version.json = 17)
- **Beta: v18.6** → beta.html (getrennter Safari-Speicher; Duell-Testphase seit 10.7.)
- Updates: Claude liefert Datei(en) → Besitzer lädt zu GitHub hoch → Update-Banner in der App

## Architektur (Kurzform)
Zwei-Gehirne-System über Provider-Register: **Anthropic Sonnet** (claude-sonnet-4-6, Analyse, Suchdeckel max_uses 5) + **Google Gemini Flash** (Modell per ListModels-Discovery + Kaskade bei 404/503; Schiedsrichter für Ergebnis-Prüfung, Foto-Lesen, optional Analyse per Schalter unter Mehr). KI-Log protokolliert jede Empfehlung mit Herkunft (🧠 Sonnet / 🌱 Flash), getrennte Trefferquoten. Konsistenz-Gedächtnis pro Gehirn (letzte 6 eigene Tipps; Seitenwechsel nur mit deklarierter "Änderung:"-Begründung). Schiedsrichter-Abrechnung: 90-Minuten-Regel (Ausnahme: "kommt weiter"/inkl. Verl.). Manuelle Korrektur-Knöpfe im KI-Log als Sicherheitsnetz.

## Duell Sonnet vs. Flash (Beförderungskriterien Beta→Stabil)
(a) Kosten ✅ Flash ≈ 0 € (10 € → 9,99 € in 5 Tagen), Sonnet ~0,25 $/Tag (Token −66 % nach Suchdeckel) · (b) Fehlerrate ✅ seit v18.5 stabil · (c) Trefferquote: offen, Ziel ≥15 bewertete Tipps/Gehirn — **Stand 17.7.: Sonnet 25 % (1/4), Flash 38 % (3/8), gesamt 33 % (4/12); offen: LA Galaxy–LAFC (Flash, Über 2,5, 18.7. 04:30)** · (d) Datenintegrität ✅ centgenau · (e) Kaskaden-Stabilität ✅ · (f) Schiedsrichter-Validierung ✅ 90-Min-Regel greift nachweislich (England–Argentinien sauber nach 90min abgerechnet), weiter manuell gegenprüfen · (g) Konsistenz ✅ (Sonnet hält Linie über Tage, z. B. Frankreich–England zweimal begründet verworfen)

**Beobachtete Verhaltensmuster (17.7., n klein — noch kein Urteil, Art. 14):** Sonnet enthält sich oft ("kein Value" ist regelkonform die ehrlichste Antwort), Flash tippt viel und produziert Wiederholungen zum selben Spiel (verzerrt die Zählung) sowie mind. 1 Seitenwechsel (England–Argentinien 14.→15.7. Unter→Über 2,5 — ob mit "Änderung:"-Begründung, ist nachträglich nicht prüfbar, da das KI-Log Begründungen nicht speichert). Reine Trefferquote misst Fleiß vs. Vorsicht, nicht nur Qualität — Verworfen-Statistik nötig für fairen Vergleich.

## Finanzen des Besitzers (Tipico)
30 € eingezahlt, Stand ~0,25 € · Gesamt-Bilanz −29,75 € (Startbilanz −10,24 vor Ondo Control) · Eigene Trefferquote 17 % (1/6) · Papier-Modus empfohlen, Besitzer wettet eigenverantwortlich

## Offene Punkte / Nächstes
- WM: Spiel um Platz 3 Sa 18.7. (Frankreich–England), Finale So 19.7., danach Liga-Sommer (App lehnt Kleinligen/Testspiele korrekt ab)
- v19-Notizbuch: Log-Deduplizierung (**offene Zähl-Regel-Entscheidung des Product Owners:** bei Mehrfach-Tipps zum selben Spiel — nur letzter vor Anpfiff / nur erster / beide als ein Eintrag?), Begründung ins KI-Log aufnehmen (kleine Vorstufe des Evidence Ledger; schließt die Lücke "Konsistenz-Regel nicht rückwirkend prüfbar"), Statistik für Verworfene (macht Enthaltung messbar), Tiefenanalyse-Knopf, Duell-Knopf, Herkunft an Vorschlagskarten
- Beförderung Beta→Stabil: nach Kriterium (c); dann Memory-Export/Import bauen (überträgt Beta-Daten in Hauptversion)
- Zukunftsregal: **Lernkette (beschlossen 6.7., Reihenfolge fixiert): Evidence Ledger (warum wurde empfohlen) → Decision Ledger (was machte der Besitzer daraus) → Observation Layer (Muster erkennen bei App-Öffnung); jede erkannte "Lehre" braucht Bestätigung des Besitzers, bevor sie gilt (Art. 9 — kontrolliertes Lernen, kein Autopilot). Echtes Lernen erst bei ausreichender Datenbasis — Lernen aus ~12 Bewertungen wäre Scheinlernen (Art. 14).** Ferner: Knowledge Ledger, Strategy Layer, DeerFlow-artiger Harness, Claude Code am Tablet

## Arbeitsablauf für neue Chats
Besitzer schreibt: "Ondo Control: [Anliegen]" + fügt Raw-Links ein (nur vom Besitzer eingefügte Links sind für Claude abrufbar!):
- Code Beta: https://raw.githubusercontent.com/Ondo-Control/Ondo-Control/main/beta.html
- Code Stabil: https://raw.githubusercontent.com/Ondo-Control/Ondo-Control/main/OndoControl.html
- Dieses Dokument: https://raw.githubusercontent.com/Ondo-Control/Ondo-Control/main/PROJEKT-STATUS.md
Vor jeder Lieferung: Syntax-Check (node --check) + Sprachdatei-Abgleich (DE/FR/EN gleiche Schlüssel). Versions-Marker im Header hochzählen.
