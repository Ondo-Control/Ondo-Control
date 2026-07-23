# ONDO CONTROL — Rückstand-Verzeichnis (Backlog)
**Gepflegt von Claude · Stand 23.7.2026 · jede Idee mit Datum und Urheber, damit nichts vergessen wird**

Regel: Claude schlägt Punkte von sich aus zum passenden Zeitpunkt vor. Ondo entscheidet, was und wann gebaut wird (Art. 8).

---

## ✅ Erledigt in v19.0 (23.7.2026)

| Punkt | Idee vom | Von wem |
|---|---|---|
| Begründung ins KI-Log speichern | 16.7. | Claude |
| Schiedsrichter: Ergebnis und Tipp nebeneinander prüfbar | 22.7. | Ondo (Fund im Screenshot) |
| Schiedsrichter-Logik in festen Code | 22.7. | Gemini |
| Duell-Knopf: beide Gehirne, gleiche Spielliste | Chat 1 | Claude |
| Herkunft (Sonnet/Flash) an jeder Karte | Chat 1 | Claude |
| Wahrscheinlichkeit statt erfundener Quote | 22.7. | Gemini (Fair-Price) |
| Ergebnis-Tipp als Zusatzfeature | 23.7. | Ondo |
| Ergebnis zuerst, Code leitet Märkte ab | 23.7. | Gemini |
| Kalibrierung als eigene Kennzahl | 23.7. | ChatGPT |
| Trefferquote als Nebenkennzahl behalten | 23.7. | ChatGPT |
| Duell-Reset / alte Daten als Archiv | 22.7. | Gemini |

---

## 🔴 Prio 1 — als Nächstes dran

**1. Suchsteuerung als Experiment** · *Idee: 23.7., Claude*
Vier Wochen ohne Websuche messen, dann mit Suche messen, Kalibrierung vergleichen. Beantwortet erstmals, ob Websuche die Vorhersagen überhaupt verbessert.
→ *Vorschlag zum Bauen: nach 4 Wochen Messbetrieb, etwa 20. August.*

**2. Einfaches Lernen: Selbstüberschätzung korrigieren** · *Idee: 6.7., ChatGPT (Lernkette) / Art. 9*
Wenn die Kalibrierung zeigt, dass ein Gehirn systematisch übertreibt, bekommt es das im nächsten Prompt mitgeteilt. Braucht rund 150 bewertete Aussagen pro Gehirn.
→ *Vorschlag zum Bauen: bei etwa 150 Aussagen pro Gehirn, voraussichtlich Mitte/Ende August.*

**3. Memory-Export/Import** · *Idee: Chat 1, Claude*
Überträgt die gesammelten Beta-Daten in die stabile Version. **Muss vor jeder Beförderung Beta→Stabil fertig sein**, sonst gehen alle Messdaten verloren.
→ *Vorschlag zum Bauen: sobald eine Beförderung ernsthaft ansteht.*

---

## 🟡 Prio 2 — wichtig, aber später

**4. Echte Quoten automatisch (GitHub Actions + Quotendienst)** · *Idee: 23.7., Claude; bestätigt von ChatGPT und Gemini*
Offene Vorfrage von Gemini (23.7.): Deckt ein kostenloser Dienst überhaupt Ondos Spiele ab — Europapokal-Qualifikation, MLS, Testspiele? Muss vor dem Bauen geprüft werden.
Ungeklärte Verfassungsfrage: Der Actions-Wecker ist ein winziger Server, der Blueprint sagt „kein Server". Beide Prüfer halten die Ausnahme für vertretbar.
→ *Vorschlag zum Bauen: wenn die Messung steht und Ondo wieder wetten will.*

**5. Value-Rechnung zurückholen** · *Idee: 22.7., Gemini (Fair-Price-Anzeige)*
Sobald echte Quoten da sind: Mindestquote aus der Wahrscheinlichkeit anzeigen und mit der echten Quote vergleichen.
→ *Hängt an Punkt 4.*

**6. Drei-Ebenen-Trennung in die Architektur schreiben** · *Idee: 23.7., ChatGPT*
Daten / Denken / Bewertung sauber trennen. Kein Umbau, sondern ein Leitbild für `Ondo-Core-Architektur.md`.
→ *Vorschlag: beim nächsten Dokumenten-Update.*

**7. Beförderungskriterium (c) neu fassen** · *Idee: 23.7., ChatGPT (100er Stichprobe)*
15 Bewertungen sind statistisch zu wenig, 100 dauern Monate. Vorschlag Claude: Beförderung nach Stabilität und Fehlerfreiheit entscheiden, die Messung läuft danach weiter.
→ *Vorschlag: beim nächsten Blueprint-Update.*

---

## 🟢 Prio 3 — notiert, kein Termin

**8. Sportarten-Erweiterung** · *Idee: 20.7., Ondo*
Nach Datenlage-Kriterium. Kandidat 1: Tennis (einfachste Abrechnung, keine 90-Minuten-Frage). Pro Sportart eigene Abrechnungsregel und **getrennte Statistik** — niemals mit Fußball vermischen.
*Sachstand 23.7.: Fußball liefert bis Ende September genug Spiele. Kein Handlungsdruck.*

**9. Rollenmodell in den Blueprint** · *Idee: 23.7., ChatGPT*
Mit zwei Ergänzungen von Claude: Architekt und unabhängiger Prüfer dürfen nicht dieselbe Rolle sein; Geminis Doppelrolle als Duell-Teilnehmer und Schiedsrichter muss benannt werden.

**10. Tiefenanalyse-Knopf** · *Idee: Chat 1, Claude*
Zwei Analysetiefen statt einer. Zurückgestellt zugunsten von Einfachheit.

**11. Vier-Chat-Werkzeug (Poe)** · *Idee: 23.7., Claude*
Würde Ondos Kopieren zwischen den drei KIs ersetzen. Gratis-Tarif reicht nicht für die Top-Modelle, realistisch ab etwa 5 $/Monat.

---

## ⛔ Abgelehnt (bleibt dokumentiert)

| Punkt | Datum | Grund |
|---|---|---|
| Council-Skill (fünf Berater-Rollen) | 21.7. | Alle fünf wären dasselbe Modell — simulierte statt echter Perspektivenvielfalt. Das reale Dreieck leistet das besser. |
| Manuelle Quoteneingabe / Screenshot | 23.7. | Zu viel Aufwand für Ondo. |

---

## ❔ Durch v19 überholt — zur Kontrolle

- **Log-Deduplizierung** (*16.7., Claude*): Im Vorhersage-Modus tippt jedes Gehirn ein Spiel nur einmal. Problem sollte sich erledigt haben — nach zwei Wochen prüfen.
- **Verworfen-Statistik** (*16.7., Claude*): Es gibt keine Verworfenen mehr, alle Spiele werden vorhergesagt. Entfällt.
- **Konsistenz-Anweisung schärfen** (*18.7., Claude*): Ein Ergebnis-Tipp kann sich nicht selbst widersprechen. Weitgehend erledigt, aber Seitenwechsel über mehrere Tage sind weiter möglich — beobachten.

---

*Nächste Aktualisierung: nach den ersten zwei Wochen Messbetrieb, etwa 6. August 2026.*
