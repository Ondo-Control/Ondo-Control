# Ondo Core — Orientierung (16.11.2026)

Diese Datei ist eine Orientierung, keine Regel. Sie sagt, in welcher Reihenfolge am Core
weitergearbeitet wird und was dafür schon klar ist. Gebaut wird erst nach Ondos Ja (Artikel 8).
Zahlen stehen nicht hier, sondern in `core/model/generated/bericht.json`. Status: Backlog-Punkt 94.

## Was Ondo will (seine Forderungen vom 14.11.2026)
1. Der Core ist nicht nur für Fußball gedacht. Die drei Märkte der Messreihe sind keine Grenze.
2. Die Regeln des Core stehen als Text da, und Ondo ändert sie selbst.
3. Die Beta wird mit der stabilen Version zusammengeführt (Beförderung), damit Ondo die App
   wieder direkt auf dem iPhone bedient.
4. Der Core lernt, wie man eine Lage bewertet. Er lernt keine Mannschaften und keine Ergebnisse
   auswendig.
5. Der Core wählt selbst, welche Merkmale für welche Wette zählen, auch unbekannte.
6. Der Core trainiert in Runden: tippen, lernen, mit dem neuen Lernstand ohne Erinnerung an die
   Spiele wieder tippen. Jeder Lernstand ist eine Version.
7. Die Quoten kommen in die eigene App. Ein Weg wird gefunden.
8. Kein echtes Geld ohne belegten Vorteil. Bis dahin nur virtuelle Probeeinsätze.

## Was heute steht
- `core/data/`: geprüfter Spielbestand, täglicher Bau.
- `core/model/`: Rechenmodell mit Angriff und Abwehr je Mannschaft, Rücktest, Selbstprüfung.
  Es lernt Mannschaften. Es bleibt deshalb nur die Messlatte, die das neue Gehirn schlagen muss.
- Die App speichert keine Quote je Spiel. Gegen den Markt ist der Core darum nicht prüfbar.
- Der Core ist nicht an die App angebunden. Seine Regeln stehen in `core/REGELN.md`, sein Trainingsraum in `raum.json`.

## Klar und ohne neue Entscheidung umsetzbar
| Nr. | Schritt | Berührt die App? | Kosten |
|---|---|---|---|
| K1 | Dokumente berichtigen (erledigt 15.11.2026) | nein | keine |
| K2 | Regeln des Core als Textdatei `core/REGELN.md`, vom Core gelesen und durchgesetzt (erledigt 16.11.2026) | nein | keine |
| K3 | Trainingsraum in Runden mit Lernstand-Versionen und Zähler aller geprüften Ideen (erledigt 16.11.2026) | nein | keine |
| K4 | Beförderung vorbereiten: Kriterien prüfen, Fallen auflösen, Probelauf ohne Veröffentlichung | nur Probe | keine |
| K5 | Kleine Gerätetests (Kurzbefehl mit Rückgabe, Shell, Scriptable) | nein | keine |

## Erst überlegen, dann entscheiden
- Wie der Core Lagen statt Mannschaften lernt (Entwurf vor dem Bau).
- Welche Quotenquelle und welcher Weg in die App (Odds API, eigenes Archiv, Browser-Weg).
- Ob Sprachmodelle dem Core Ideen für neue Merkmale liefern (Kostenrechnung vorher).
- Repo öffentlich oder privat, Cloudflare als privater Ort.
- Form der Anbindung an die App, Oberfläche, Kombiwetten und Foto-Import.
- Einsatzregeln, Recht, später Finanzen.

## Reihenfolge
1. K2 und K3 im Core (erledigt 16.11.2026).
2. K4 und K5 mit Ondo am iPhone.
3. Quotenbasis und erster Test gegen den Markt.
4. Entwurf für das Lernen von Lagen, danach Bau im Trainingsraum.
5. Anbindung an die App, Regeln auch in der App.
6. Kombis, Einsatz, Recht, Finanzen.

## Nicht vor dem jeweiligen Schritt
- Keine freie Merkmalswahl vor K3. Ohne Zähler und versiegelten Endtest ist ein Fund oft Zufall.
- Keine Anbindung an die App vor der Beförderung. Sonst vermischen sich zwei Umbauten.
- Kein Einsatz mit echtem Geld vor einem belegten Vorteil gegen die Quote.
- Fremde Quoten-Rohdaten nie ins öffentliche Repo.
