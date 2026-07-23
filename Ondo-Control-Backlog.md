# ONDO CONTROL — Rückstand-Verzeichnis (Backlog)
**Gepflegt von Claude · Stand 23.7.2026, Fassung 2 · jede Idee mit Datum, Urheber und Status**

## Regeln für dieses Dokument

1. **Abgrenzung (ChatGPT, 23.7.):** Architektur lebt ausschließlich in `Blueprint.md` und `Ondo-Core-Architektur.md`. Dieses Dokument enthält **nur Aufgaben, Ideen und deren Status** — keine Architekturregeln. Sonst entstehen Widersprüche zwischen zwei Dokumenten.
2. Claude schlägt Punkte von sich aus zum passenden Zeitpunkt vor. Ondo entscheidet, was und wann gebaut wird (Art. 8).
3. Nichts wird gelöscht. Abgelehnt und überholt bleiben sichtbar.

**Status-Werte:** `Idee` · `beschlossen` · `gebaut` · `bewährt` (im Alltag getestet) · `überholt` · `abgelehnt`

**Übergabe an die Prüfer (23.7.):** Raw-Links aus dem Repo funktionieren nur bei Claude. ChatGPT und Gemini brauchen die Datei als **Anhang** oder eingefügten Text. Das Repo bleibt das Archiv, ist aber kein Übergabeweg.

---

## ✅ Gebaut in v19.0 (23.7.2026)

| Punkt | Idee vom | Von wem | Status |
|---|---|---|---|
| Begründung ins KI-Log speichern | 16.7. | Claude | gebaut |
| Schiedsrichter: Ergebnis und Tipp nebeneinander prüfbar | 22.7. | Ondo (Fund im Screenshot) | gebaut |
| Schiedsrichter-Logik in festen Code | 22.7. | Gemini | gebaut |
| Duell-Modus: beide Gehirne, gleiche Spielliste | Chat 1 | Claude | gebaut |
| Herkunft (Sonnet/Flash) an jeder Karte | Chat 1 | Claude | gebaut |
| Wahrscheinlichkeit statt erfundener Quote | 22.7. | Gemini (Fair-Price) | gebaut |
| Ergebnis-Tipp als Zusatzfeature | 23.7. | Ondo | gebaut |
| Ergebnis zuerst, Code leitet Märkte ab | 23.7. | Gemini | gebaut |
| Kalibrierung als Hauptkennzahl | 23.7. | ChatGPT | gebaut |
| Trefferquote als Nebenkennzahl behalten | 23.7. | ChatGPT | gebaut |
| Duell-Reset / Alt-Daten als Archiv v18 | 22.7. | Gemini | gebaut |

*Noch nicht `bewährt` — der erste echte Lauf steht aus.*

---

## 🔴 Prio 1 — als Nächstes dran

**1. Daten-Export als Sicherung** · *Idee: Chat 1 (als Memory-Export), neu bewertet 23.7. durch Claude* · **Status: beschlossen**
Alle Messdaten liegen nur im Safari-Speicher des iPhones. Keine Kopie. Wird der Speicher geleert (Speichermangel, „Website-Daten löschen", iOS-Problem), sind alle Vorhersagen unwiederbringlich weg — vergangene Vorhersagen lassen sich nicht nachträglich erzeugen.
Bisher verkraftbar (21 Einträge), ab jetzt nicht mehr: Wir sammeln 6–8 Wochen.
Umfang: Knopf „Daten sichern" → Datei zum Ablegen, plus „Daten laden". Deckt zugleich den alten Punkt Memory-Export für die spätere Beförderung ab.
→ *Vorschlag zum Bauen: sofort nach dem ersten erfolgreichen Vorhersage-Lauf.*

**2. Suchsteuerung als Experiment** · *Idee: 23.7., Claude* · **Status: beschlossen**
Vier Wochen ohne Websuche messen, dann mit Suche messen, Kalibrierung vergleichen. Beantwortet erstmals, ob Websuche die Vorhersagen überhaupt verbessert.
→ *Vorschlag: nach 4 Wochen Messbetrieb, etwa 20. August.*

**3. Einfaches Lernen: Selbstüberschätzung korrigieren** · *Idee: 6.7., ChatGPT (Lernkette) · Art. 9* · **Status: beschlossen**
Zeigt die Kalibrierung systematische Übertreibung, bekommt das Gehirn das im nächsten Prompt mitgeteilt — nach Ondos Bestätigung. Braucht rund 150 bewertete Aussagen pro Gehirn.
→ *Vorschlag: bei etwa 150 Aussagen pro Gehirn, voraussichtlich Mitte/Ende August.*

---

## 🟡 Prio 2 — wichtig, aber später

**4. Echte Quoten automatisch (GitHub Actions + Quotendienst)** · *Idee: 23.7., Claude; bestätigt von ChatGPT und Gemini* · **Status: Idee**
Offene Vorfrage (Gemini, 23.7.): Deckt ein kostenloser Dienst überhaupt Ondos Spiele ab — Europapokal-Qualifikation, MLS, Testspiele? Vor dem Bauen prüfen.
Verfassungsfrage offen: Der Actions-Wecker ist ein winziger Server, der Blueprint sagt „kein Server". Beide Prüfer halten die Ausnahme für vertretbar. **Die Entscheidung gehört in den Blueprint, nicht hierher.**
→ *Vorschlag: wenn die Messung steht und Ondo wieder wetten will.*

**5. Value-Rechnung zurückholen** · *Idee: 22.7., Gemini* · **Status: Idee** · hängt an Punkt 4

**6. Drei-Ebenen-Trennung in die Architektur schreiben** · *Idee: 23.7., ChatGPT* · **Status: beschlossen**
Daten / Denken / Bewertung. Der Inhalt gehört nach `Ondo-Core-Architektur.md` — hier steht nur die Aufgabe.
→ *Vorschlag: beim nächsten Dokumenten-Update.*

**7. Beförderungskriterium (c) neu fassen** · *Idee: 23.7., ChatGPT (100er Stichprobe)* · **Status: Idee**
15 Bewertungen sind statistisch zu wenig, 100 dauern Monate. Vorschlag Claude: Beförderung nach Stabilität und Fehlerfreiheit entscheiden, die Messung läuft danach weiter. Inhalt gehört in den Blueprint.
→ *Vorschlag: beim nächsten Blueprint-Update.*

---

## 🔵 Technische Schuld
*Angeregt von ChatGPT, 23.7. — keine Fehler, sondern Bekanntes, das später sauber gemacht werden muss.*

| Punkt | Auswirkung heute | Dringlichkeit |
|---|---|---|
| **Doppelter Code** — `beta.html` und `OndoControl.html` sind zwei vollständige Kopien (je ~74 KB) | Jede Korrektur muss zweimal gemacht werden oder geht in einer Version verloren | hoch, sobald v19 befördert wird |
| **Nur lokale Speicherung** (localStorage) | Kein Backup, ein Gerät, Datenverlust möglich | → jetzt Prio 1, Punkt 1 |
| **Eine lange JS-Datei** (~1180 Zeilen, keine Module) | Änderungen werden mit der Zeit riskanter | mittel |
| **Sprachdateien von Hand** (146 Schlüssel × 3 Sprachen) | Dreifache Pflege bei jeder neuen Beschriftung | niedrig (wird bei jeder Lieferung geprüft) |
| **Seed-Daten fest im Code** (WM-Wetten vom Juli) | Ballast, der bei jedem Start mitläuft | niedrig |
| **Kein automatischer Test** | Jede Änderung wird nur von Hand geprüft | mittel |
| **Gemini-Kaskade komplex** (Modell-Liste, Ausweichversuche) | Funktioniert, aber schwer zu durchschauen bei Fehlern | niedrig |

---

## 🟢 Prio 3 — notiert, kein Termin

**8. Sportarten-Erweiterung** · *Idee: 20.7., Ondo* · **Status: Idee**
Kandidat 1: Tennis. Pro Sportart eigene Abrechnungsregel und **getrennte Statistik**.
*Sachstand 23.7.: Fußball liefert bis Ende September genug Spiele. Kein Handlungsdruck.*

**9. Rollenmodell in den Blueprint** · *Idee: 23.7., ChatGPT* · **Status: Idee**
Zwei Ergänzungen von Claude offen: Architekt und unabhängiger Prüfer sollten nicht dieselbe Rolle sein; Geminis Doppelrolle (Duell-Teilnehmer und Schiedsrichter) muss benannt werden.

**10. Tiefenanalyse-Knopf** · *Idee: Chat 1, Claude* · **Status: Idee** — zurückgestellt zugunsten Einfachheit

**11. Vier-Chat-Werkzeug (Poe)** · *Idee: 23.7., Claude* · **Status: Idee** — Gratis-Tarif reicht nicht, realistisch ab ~5 $/Monat

---

## ⛔ Abgelehnt (bleibt dokumentiert)

| Punkt | Datum | Grund |
|---|---|---|
| Council-Skill (fünf Berater-Rollen) | 21.7. | Alle fünf wären dasselbe Modell — simulierte statt echter Perspektivenvielfalt |
| Manuelle Quoteneingabe / Screenshot | 23.7. | Zu viel Aufwand für Ondo |

---

## ❔ Durch v19 überholt — zur Kontrolle

- **Log-Deduplizierung** (*16.7., Claude*) · **Status: überholt** — jedes Gehirn tippt ein Spiel einmal. Nach zwei Wochen gegenprüfen.
- **Verworfen-Statistik** (*16.7., Claude*) · **Status: überholt** — es gibt keine Verworfenen mehr.
- **Konsistenz-Anweisung schärfen** (*18.7., Claude*) · **Status: teilweise überholt** — ein Ergebnis-Tipp kann sich nicht selbst widersprechen; Seitenwechsel über mehrere Tage bleiben möglich, beobachten.

---

*Nächste Aktualisierung: nach den ersten zwei Wochen Messbetrieb, etwa 6. August 2026.*
