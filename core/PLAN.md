# Ondo Core — Plan Stufe 1 (Fassung 3, 14.11.2026)

Von Ondo am 3.11.2026 bestätigt. Fassung 3 trägt nur den Stand nach: Schritt 1 ist gebaut.
Status der Schritte steht im Backlog bei Punkt 94, nicht hier.

## Ziel
Ein eigenes Gehirn (Core), das Spiele selbst bewertet, aus vielen vergangenen Spielen lernt und
seine eigene Leistung prüft. Sprachmodelle (Sonnet, Flash, OpenAI) liefern nur Informationen,
die der Core nicht selbst hat. Später organisiert derselbe Kern Finanzen und Alltag. Wetten ist
das Testfeld.

## Grundsätze
1. Drei Stufen, nie vermischt: (a) Einschätzung, wenn die Datenlage sie trägt, sonst ehrlich
   „keine belastbare Einschätzung"; (b) Rangliste der besten verfügbaren Optionen mit
   Belastbarkeit, auch mit dem Ergebnis „keine ausreichend gute Option"; (c) echtes Geld nur
   bei belegtem Vorteil, sonst nur virtuelle Probeeinsätze.
2. Gelernt wird an allen Spielen, nicht an den Tipps. Vorschläge dürfen selten sein.
3. Der Core prüft sich selbst: fortlaufend (jedes Spiel wird erst vorhergesagt, dann gelernt)
   und an einem endgültigen Holdout, der nie zum Lernen oder zur Modellwahl benutzt wird.
   Ein Beschluss „Vorteil belegt" fällt nur an vorher festgelegten Prüfpunkten, je Markt
   getrennt, mit Mindest-Stichprobe und Korrektur für Mehrfachtests.
4. Nur vorher festgelegte Ideen testen. Ein Vorteil zählt erst, wenn er auch bei vorsichtiger
   Rechnung positiv bleibt.
5. Kleine Anpassungen (Einsatzhöhe nach Ondos Regeln) darf der Core selbst. Regeländerungen
   und Lehren bestätigt Ondo (Art. 9).
6. Der Core rechnet deterministisch und ohne Schlüssel.

## Struktur
- Oberfläche bleibt die Web-App. Der Core liegt als eigene Dateien in `core/` daneben.
- Lernen und Rücktest laufen in GitHub Actions; die App lädt später nur eine kleine Modelldatei.
- Privat erst, wenn der Core echte Finanzaktionen vorbereitet. Schlüssel, Sitzungen und
  Finanzdaten gehören nie ins öffentliche Repo.

## Schritte
1. **Daten** — gebaut: `core/data/` (Schema, Identität, Alias-Tabelle, Leser für OpenFootball
   und das ESPN-Archiv, Saisonprüfung, eingefrorene Aufteilung, täglicher Bau).
2. **Modell** — Mannschaftsstärken (Angriff, Abwehr, Heimvorteil) aus Ergebnissen;
   Wahrscheinlichkeiten für 1X2, Über/Unter 2,5 und BTTS; Neulernen täglich.
3. **Rücktest** — zeitlich getrennt (Lernen, Prüfen, einmaliger Abschlusstest); gegen die
   Quote ohne Wettmarge nur dort, wo zeitlich korrekte Quoten vorliegen; gegen Sonnet/Flash
   nur auf dem Zeitraum, den es von ihnen gibt.
4. **Selbstprüfung und Beschluss** je Liga und Markt, mit Protokoll.
5. **Anbindung** an die App als dritte Herkunft neben Sonnet und Flash.

## Erfolgs- und Abbruchkriterium
Der Haupttest wird vor der Auswertung festgelegt. Weiter nur, wenn die Wahrscheinlichkeiten auf
ungesehenen Spielen besser sind als die der Quote UND der Gewinn nach Marge positiv ist, mit
positiver unterer Grenze. Sonst: „kein Vorteil" melden, gezielt andere Informationen suchen
(Kader, Trainer, Verletzte), neu testen.

## Größte Risiken
- Keine erlaubte, zeitlich saubere historische Quotenbasis.
- Quoten sind sehr gut; ein Modell nur aus Ergebnissen schlägt sie erfahrungsgemäß selten.
- OpenFootball führt jüngere Saisons lückenhaft.
- Überanpassung durch wiederholtes Testen.
- Kader- und Trainerdaten mit korrektem Zeitbezug.

## Bewusst nicht jetzt
Allround-Core, native App, Dauerdienst, Finanz- oder Browsermodul, Umbau bestehender App-Teile.
