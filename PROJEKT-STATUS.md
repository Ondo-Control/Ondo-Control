# ONDO CONTROL — PROJEKT-STATUS
*Dieses Dokument ist die Chat-übergreifende Zusammenfassung. Bei jedem Meilenstein aktualisieren. Stand: 16. Juli 2026.*

## Für jede KI, die dieses Projekt unterstützt
Ondo Control ist ein persönliches Entscheidungsunterstützungssystem (Web-App, eine HTML-Datei, GitHub Pages, localStorage, keine Server). Besitzer/Product Owner: Ondo (kein Programmierer — einfache Sprache, jede Änderung liefert er selbst als Datei-Upload zu GitHub). Rollen: Claude = Hauptentwickler, ChatGPT = Architekt/Reviewer, Gemini = Reviewer. Regeln: erst abstimmen, dann bauen · Zwei-Probleme-Regel · Stabilitätsregel (Bewährungszeit) · Artikel 14: nie klüger/sicherer wirken als real. Master-Dokumente: Blueprint.md (Verfassung, Entscheidungsprotokoll) + Ondo-Core-Architektur.md — beide in diesem Repo.

## Versionen
- **Stabil: v17** → OndoControl.html (Homescreen-App des Besitzers; version.json = 17)
- **Beta: v18.6** → beta.html (getrennter Safari-Speicher; Duell-Testphase seit 10.7.)
- Updates: Claude liefert Datei(en) → Besitzer lädt zu GitHub hoch → Update-Banner in der App

## Architektur (Kurzform)
Zwei-Gehirne-System über Provider-Register: **Anthropic Sonnet** (claude-sonnet-4-6, Analyse, Suchdeckel max_uses 5) + **Google Gemini Flash** (Modell per ListModels-Discovery + Kaskade bei 404/503; Schiedsrichter für Ergebnis-Prüfung, Foto-Lesen, optional Analyse per Schalter unter Mehr). KI-Log protokolliert jede Empfehlung mit Herkunft (🧠 Sonnet / 🌱 Flash), getrennte Trefferquoten. Konsistenz-Gedächtnis pro Gehirn (letzte 6 eigene Tipps; Seitenwechsel nur mit deklarierter "Änderung:"-Begründung). Schiedsrichter-Abrechnung: 90-Minuten-Regel (Ausnahme: "kommt weiter"/inkl. Verl.). Manuelle Korrektur-Knöpfe im KI-Log als Sicherheitsnetz.

## Duell Sonnet vs. Flash (Beförderungskriterien Beta→Stabil)
(a) Kosten ✅ Flash ≈ 0 € (10 € → 9,99 € in 5 Tagen), Sonnet ~0,25 $/Tag (Token −66 % nach Suchdeckel) · (b) Fehlerrate ✅ seit v18.5 stabil · (c) Trefferquote: offen, Ziel ≥15 bewertete Tipps/Gehirn (Stand 15.7.: Flash 2-3/6, Sonnet 1/3 — nach 90-Min-Korrektur Argentinien) · (d) Datenintegrität ✅ centgenau · (e) Kaskaden-Stabilität ✅ · (f) Schiedsrichter-Validierung ⚠️ 1 Fehlurteil gefunden (n.V.-Spiel), 90-Min-Regel nachgerüstet, weiter manuell gegenprüfen · (g) Konsistenz ✅ (deklarierter Meinungswechsel funktioniert)

## Finanzen des Besitzers (Tipico)
30 € eingezahlt, Stand ~0,25 € · Gesamt-Bilanz −29,75 € (Startbilanz −10,24 vor Ondo Control) · Eigene Trefferquote 17 % (1/6) · Papier-Modus empfohlen, Besitzer wettet eigenverantwortlich

## Offene Punkte / Nächstes
- WM-Finale So 19.7., danach Liga-Sommer (App lehnt Kleinligen korrekt ab)
- v19-Notizbuch: Log-Deduplizierung (Doppel-Tipps zum selben Spiel), Statistik für Verworfene, Tiefenanalyse-Knopf, Duell-Knopf, Herkunft an Vorschlagskarten
- Beförderung Beta→Stabil: nach Kriterium (c); dann Memory-Export/Import bauen (überträgt Beta-Daten in Hauptversion)
- Zukunftsregal: Decision/Knowledge Ledger, Observation/Strategy Layer, DeerFlow-artiger Harness, Claude Code am Tablet

## Arbeitsablauf für neue Chats
Besitzer schreibt: "Ondo Control: [Anliegen]" + fügt Raw-Links ein (nur vom Besitzer eingefügte Links sind für Claude abrufbar!):
- Code Beta: https://raw.githubusercontent.com/Ondo-Control/Ondo-Control/main/beta.html
- Code Stabil: https://raw.githubusercontent.com/Ondo-Control/Ondo-Control/main/OndoControl.html
- Dieses Dokument: https://raw.githubusercontent.com/Ondo-Control/Ondo-Control/main/PROJEKT-STATUS.md
Vor jeder Lieferung: Syntax-Check (node --check) + Sprachdatei-Abgleich (DE/FR/EN gleiche Schlüssel). Versions-Marker im Header hochzählen.
