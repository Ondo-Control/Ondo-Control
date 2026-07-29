# ONDO CONTROL — Rückstand-Verzeichnis (Backlog)
**Gepflegt von Claude · Stand 29.7.2026, Fassung 3 · jede Idee mit Datum, Urheber und Status**

## Regeln für dieses Dokument

1. **Abgrenzung (ChatGPT, 23.7.):** Architektur lebt ausschließlich in `Blueprint.md` und `Ondo-Core-Architektur.md`. Dieses Dokument enthält **nur Aufgaben, Ideen und deren Status** — keine Architekturregeln. Sonst entstehen Widersprüche zwischen zwei Dokumenten.
2. Claude schlägt Punkte von sich aus zum passenden Zeitpunkt vor. Ondo entscheidet, was und wann gebaut wird (Art. 8).
3. Nichts wird gelöscht. Abgelehnt und überholt bleiben sichtbar.

**Status-Werte:** `Idee` · `beschlossen` · `gebaut` · `bewährt` (im Alltag getestet) · `überholt` · `abgelehnt`

**Übergabe an die Prüfer (23.7.):** Raw-Links aus dem Repo funktionieren nur bei Claude. ChatGPT und Gemini brauchen die Datei als **Anhang** oder eingefügten Text. Das Repo bleibt das Archiv, ist aber kein Übergabeweg.

**Dateinamen von Berichten an die Prüfer (28.7., Ondo):** Beginnen mit Datum und Uhrzeit, damit sie sich von selbst sortieren — `2026-07-28_1912_Ondo-Control_Thema.md`.

---

## ⚠ Warum diese Fassung nötig war (29.7.)

Zwischen dem 23. und 28. Juli wurde in den Chats mindestens sechsmal gesagt „notiere ich im Backlog" — die Datei wurde in dieser Zeit **nie angefasst**. Alles Nachfolgende stand nur im Gesprächsverlauf und wäre beim Chatwechsel verschwunden. Gerettet hat es allein Ondos PDF-Export.

Derselbe Fehler war beim Evidence Ledger schon einmal aufgetreten (17.7.) und wurde damals von Claude selbst diagnostiziert. Er wiederholt sich nicht aus nachlassender Sorgfalt, sondern weil ihn nichts verhindert: Ein Chat baut Code und ist voll, bevor er zur Buchführung kommt.

**Gegenmaßnahme — von Ondo angenommen am 29.7.2026 (Art. 9 erfüllt).** Die Regel selbst steht als **Arbeitsregel F** in `Blueprint.md`, Abschnitt 2c. Hier nur, was sie für die tägliche Arbeit an diesem Dokument bedeutet:

> **Keine Lieferung ohne Buchführung.**
> - **Backlog:** jede Entscheidung — angenommen, abgelehnt, vertagt — wird **sofort** eingetragen, in derselben Antwort, in der sie fällt. Nie „notiere ich später". Bei einer Code-Lieferung kommt die aktualisierte Backlog-Datei **zusammen mit dem Code**.
> - **PROJEKT-STATUS.md:** am Ende eines Arbeitstags mit Änderungen, und zwingend vor jeder Chat-Übergabe.
> - **Blueprint / Ondo-Core:** nur bei Verfassungs- und Architekturentscheidungen.
> - **Kontrollsatz des Besitzers nach jeder Lieferung: „Und die Dokumente?"**

*Begründung der Abstufung (29.7., Claude): Ein fester Termin scheitert daran, dass Chats enden, bevor er kommt — Chat 2 lieferte in fünf Tagen sechs Versionen und wurde dann ersetzt. Eine rein an Lieferungen gekoppelte Regel scheitert daran, dass die verlorenen Punkte gar keine Lieferungen waren: Option B war eine Vertagung, die abgelehnte Handeingabe eine Ablehnung, die einseitigen Vorhersagen ein Fund. Deshalb Kopplung an **Entscheidungen**, nicht an Versionen — und nur für den Backlog, weil drei Dateien pro Kleinversion in der Praxis niemand hochlädt.*

---

## ✅ Gebaut in v19.0 (23.7.2026)

| Punkt | Idee vom | Von wem | Status |
|---|---|---|---|
| Begründung ins KI-Log speichern | 16.7. | Claude | gebaut · **bewährt** |
| Schiedsrichter: Ergebnis und Tipp nebeneinander prüfbar | 22.7. | Ondo (Fund im Screenshot) | gebaut · **bewährt** |
| Schiedsrichter-Logik in festen Code | 22.7. | Gemini | gebaut · **bewährt** |
| Duell-Modus: beide Gehirne, gleiche Spielliste | Chat 1 | Claude | gebaut · **bewährt** |
| Herkunft (Sonnet/Flash) an jeder Karte | Chat 1 | Claude | gebaut · **bewährt** |
| Wahrscheinlichkeit statt erfundener Quote | 22.7. | Gemini (Fair-Price) | gebaut · **bewährt** |
| Ergebnis-Tipp als Zusatzfeature | 23.7. | Ondo | gebaut · **bewährt** |
| Ergebnis zuerst, Code leitet Märkte ab | 23.7. | Gemini | gebaut · **bewährt** |
| Kalibrierung als Hauptkennzahl | 23.7. | ChatGPT | gebaut · **bewährt** |
| Trefferquote als Nebenkennzahl behalten | 23.7. | ChatGPT | gebaut · **bewährt** |
| Duell-Reset / Alt-Daten als Archiv v18 | 22.7. | Gemini | gebaut · **bewährt** |

*`bewährt` gesetzt am 29.7.: sechs Tage Dauerbetrieb, keiner dieser Punkte hat Nacharbeit erfordert.*

---

## ✅ Gebaut in v19.1 bis v19.6 (23.–28.7.2026) — **NACHTRAG, fehlte bisher**

| Version | Punkt | Idee vom | Von wem | Status |
|---|---|---|---|---|
| v19.1 | **Datensicherung** (Export als Datei / Import zurück) | Chat 1 als Memory-Export, neu bewertet 23.7. | Claude | gebaut |
| v19.1 | Ja/Nein-Aussagen unter 50 % automatisch umdrehen („Nein 42 %" → „Ja 58 %") | 23.7. | Claude (eigener Konstruktionsfehler) | gebaut |
| v19.2 | Schiedsrichter muss Datum und Wettbewerb mitliefern + Abweichungswarnung im Code | 24.7. | Claude, nach Ondos Fund (falsches 0:0 vom Januar) | gebaut |
| v19.2 | Ausdrückliche Zeitzonen-Warnung für Südamerika im Auftrag | 24.7. | Claude | gebaut |
| v19.3 | Spielliste-Rangfolge (Stufen, Reserveteams/Amateurligen verboten) | 24.7. | **Ondo** | gebaut · **überholt durch v19.6** |
| v19.4 | **Automatisches Wiederholen** beim Ergebnisprüfen, solange jede Runde Neues bringt | 25.7. | **Ondo** (Fund: mehrfaches Drücken half) | gebaut |
| v19.4 | Drei Zustände je Spiel (*fertig* / *läuft noch* / *nicht gefunden*) + sichtbare Bilanz | 25.7. | **Ondo** (Frage: „woher weiß ich, ob nichts gefunden wurde?") | gebaut |
| v19.4 | Uhrzeit an den Listen-Ersteller übergeben (nur Spiele mit Anpfiff in der Zukunft) | 25.7. | **Ondo** (Fund: Sparta Prag fehlte) | gebaut |
| v19.4 | Quellenpflicht ab Durchgang drei mit Anzeige der Fundstelle | 25.7. | Gemini | gebaut |
| v19.5 | Anpfiffzeit speichern und anzeigen | 27.7. | **Ondo** | gebaut |
| v19.5 | 2,5-Stunden-Regel: „läuft noch" wird nach Ablauf nicht mehr geglaubt (fester Code) | 27.7. | Claude, Schwelle korrigiert nach Ondos Verlängerungs-Einwand | gebaut |
| v19.6 | **Zweistufige Spielliste** — Reihenfolge erzwungen statt erbeten | 28.7. | ChatGPT und Gemini, einstimmig | gebaut |
| v19.6 | **Phasen-Pflicht** (Halbzeit · Stand nach 90 Min. · ggf. nach Verlängerung) | 27.7. Claude, erweitert 28.7. | **Ondo** (Einwand: Halbzeit-Pflicht hilft bei Verlängerung nicht) | gebaut |
| v19.6 | Vertauschungs-Kontrolle im festen Code (Halbzeit höher als Endstand → rote Warnung) | 28.7. | Claude | gebaut |

*Keiner dieser Punkte ist bereits `bewährt` — v19.6 ist seit dem 28.7. abends im Einsatz.*

---

## 🔴 Prio 1 — als Nächstes dran

**0. Modellwahl des zweiten Gehirns klären** · *Fund: 29.7., Claude aus den Google-Nutzungsdaten* · **Status: Idee, zur Prüfung bei ChatGPT und Gemini**
Die Nutzungsdiagramme zeigen, dass fast der gesamte Verkehr über **Gemini 3.1 Flash Lite** läuft — die kleinste Stufe. Ursache: Die Modell-Abfrage sortiert stabile Versionen vor „latest"-Varianten, damit steht `gemini-3.1-flash-lite` vor `gemini-flash-latest`.
Tragweite: Das Duell verglichen möglicherweise ein volles Modell mit der kleinsten Stufe — und derselbe Motor ist der Schiedsrichter, dem alle sechs dokumentierten Fehlerarten zuzurechnen sind.
Ungeklärt: Ob der gespeicherte Modellname das bestätigt (Diagramme gelesen, App nicht geprüft). Ein Wechsel bricht die laufende Messreihe.
→ *Vorschlag Claude: wechseln, aber erst nach dem Lernschritt — sauberer Schnitt statt Schnitt mitten in der Auswertung. Bericht vom 29.7. 07:46 an die Prüfer.*

**1. Kennzahl „Entschlossenheit"** · *Idee: 27.7., Claude* · **Status: beschlossen**
Wie oft legt sich ein Gehirn überhaupt fest? Ohne diese Zahl vergleichen wir Sonnets Vorsicht mit Flashs Mut und nennen es Qualität. Konkreter Anlass: Von Sonnets 84 Aussagen liegen 63 im Bereich 50–59 % — ein Gehirn, das fast immer „Münzwurf" sagt, ist automatisch gut kalibriert und sagt trotzdem wenig.
→ *Vorschlag: **vor** dem ersten Lernschritt bauen, sonst misst der Lernschritt das Falsche.*
→ *Methodische Prüfung durch ChatGPT empfohlen (offen seit 27.7.).*

**2. Erster Lernschritt: Selbstüberschätzung korrigieren** · *Idee: 6.7., ChatGPT (Lernkette) · Art. 9* · **Status: beschlossen**
Jedes Gehirn bekommt seine eigene Kalibrierung mitgeteilt, Ondo bestätigt die Lehre, dann gilt sie. Braucht rund 150 bewertete Aussagen pro Gehirn.
Für Flash ist die Lehre klar benennbar: Im Bereich 60–69 % behauptet es 63 % und trifft 43 %.
**Warnung (27./28.7., Claude):** Für Sonnet wäre die naheliegende Lehre „leg dich öfter fest" — und die wäre gefährlich. Ein Modell zu mehr Entschlossenheit zu drängen, kann seine Ehrlichkeit zerstören. **Empfehlung: im ersten Durchgang nur Flash korrigieren**, dann am Unterschied ablesen, ob die Lehre überhaupt wirkt.
→ *Termin: Wochenende 1./2. August (150er-Schwelle wird dort erreicht) — nicht mehr „Mitte/Ende August" wie in Fassung 2.*

**3. Such-Experiment** · *Idee: 23.7., Claude* · **Status: beschlossen**
Vier Wochen ohne Websuche messen, dann Suche zuschalten, Kalibrierung vergleichen. Beantwortet erstmals, ob Websuche die Vorhersagen überhaupt verbessert.
**⚠ Offener Widerspruch, muss Ondo entscheiden:** Am 23.7. war von „vier Wochen ab jetzt" die Rede, also etwa **20. August**. Am 28.7. stand in der Planung „Vier Wochen ohne Websuche sind dann fast um" — das stimmt rechnerisch nicht, es waren erst fünf Tage. Auch `PROJEKT-STATUS.md` trägt diese falsche Angabe.
→ *Vorschlag Claude: beim 20. August bleiben. Ein kürzerer Zeitraum liefert zu wenig Vergleichsdaten.*

---

## 🟡 Prio 2 — wichtig, aber später

**4. Daten-Export in die stabile Version** · *Idee: Chat 1 (Migrationsplan v17), erneut 28.7.* · **Status: beschlossen**
**Nicht zu verwechseln mit Punkt „Datensicherung" (gebaut in v19.1).** Die Sicherung schützt vor Datenverlust; dieser Punkt überträgt die Messdaten aus der Beta in die stabile Version. Ohne ihn geht bei der Beförderung alles Gesammelte verloren, weil Safari und Homescreen-App getrennte Speicher haben.
→ *Vorschlag: unmittelbar vor der Beförderung.*

**5. Beförderungskriterium (c) neu fassen** · *Idee: 23.7., ChatGPT (100er Stichprobe)* · **Status: Idee**
15 Bewertungen sind statistisch zu wenig, 100 dauern Monate. Vorschlag Claude: Beförderung nach Stabilität und Fehlerfreiheit entscheiden, die Messung läuft danach weiter. **Inhalt gehört in den Blueprint**, hier steht nur die Aufgabe.

**6. Drei-Ebenen-Trennung in die Architektur schreiben** · *Idee: 23.7., ChatGPT* · **Status: beschlossen, noch nicht ausgeführt**
Ebene 1 Daten (Fakten, keine KI) · Ebene 2 Denken (die Gehirne, arbeiten nur mit Ebene-1-Daten) · Ebene 3 Bewertung (Log, Kalibrierung, Lernkette). Der Inhalt gehört nach `Ondo-Core-Architektur.md`.
→ *Steht seit 23.7. aus. Beim Blueprint-Nachtrag miterledigen.*

**7. Claude Code auf dem Windows-Tablet über das Pro-Abo** · *Idee: 9./10.7., Claude (damals „Option B")* · **Status: Idee — wiedergefunden am 29.7.**
Statt API-Guthaben zu verbrauchen, könnte das bereits bezahlte Pro-Abo die Arbeit leisten: Claude Code läuft am Tablet, führt Analysen mit Websuche aus und legt das Ergebnis als Datei im Repo ab; die App liest sie nur noch. Kein zusätzliches Geld an irgendwen.
Haken damals genannt: läuft nur, wenn Ondo es am Tablet anstößt; Einrichtung etwa 45 Minuten; zehrt am Wochen-Limit des Abos.
**Warum der Punkt verschwand:** Am 10.7. vertagt „bis der Beta-Test durch ist". Der Beta-Test wurde danach etwas völlig anderes (Umbau zum Messgerät), und der Punkt wanderte nie in ein Dokument. Wiedergefunden erst durch die vollständige Lektüre des Chat-1-Archivs.
→ *Vorschlag: nach der Beförderung neu bewerten. Möglicherweise überholt, weil Flash die Suche derzeit praktisch kostenlos erledigt — das ist zu prüfen, nicht anzunehmen.*

**8. Echte Quoten automatisch (GitHub Actions + Quotendienst)** · *Idee: 23.7., Claude; bestätigt von ChatGPT und Gemini* · **Status: Idee**
Offene Vorfrage (Gemini, 23.7.): Deckt ein kostenloser Dienst überhaupt Ondos Spiele ab — Europapokal-Qualifikation, MLS, Testspiele? Vor dem Bauen prüfen.
Verfassungsfrage offen: Der Actions-Wecker ist ein winziger Server, der Blueprint sagt „kein Server". Beide Prüfer halten die Ausnahme für vertretbar. **Die Entscheidung gehört in den Blueprint, nicht hierher.**

**9. Value-Rechnung zurückholen** · *Idee: 22.7., Gemini* · **Status: Idee** · hängt an Punkt 8

**10. Rollenmodell in den Blueprint** · *Idee: 23.7., ChatGPT* · **Status: Idee**
Zwei Ergänzungen von Claude offen: Architekt und unabhängiger Prüfer sollten nicht dieselbe Rolle sein; Geminis Doppelrolle (Duell-Teilnehmer und Schiedsrichter) muss benannt werden.

---

## 👁 Beobachtungspunkte — nichts bauen, nur mitschreiben

*Neuer Abschnitt (29.7.). Diese Punkte sind keine Aufgaben, sondern offene Fragen an die Wirklichkeit. Sie werden erst zu Aufgaben, wenn sich ein Muster bestätigt.*

| Beobachtung | Gefunden | Von wem | Stand |
|---|---|---|---|
| **„Beide treffen" folgt nicht dem Ergebnis-Tipp** — Sonnet tippt 3:0 und sagt zugleich „Beide treffen: Ja 78 %"; Tipp 1:1 erscheint als „Beide treffen: Nein 51 %". Der Marktname folgt offenbar der Prozentzahl der KI statt dem Ergebnis. Kernzusage vom 23.7. für einen der drei Märkte nicht eingelöst. Kalibrierung bleibt gültig (Zahl und Aussage aus derselben Quelle), Widerspruchsfreiheit nicht | 29.7. | Claude, aus zehn übereinstimmenden Beispielen | **Codestelle prüfen, bevor etwas geändert wird.** Danach Entscheidung Ondos |
| **Heim und Gast in der Spielliste vertauscht** — zwei von zwei überprüfbaren Fällen (Everton–Stoke, Hull–Rizespor). Trifft die Vorhersage, nicht nur den Schiedsrichter: Beide Gehirne begründen ausdrücklich mit Heimvorteil | 29.7. | Claude, nachgeprüft an unabhängiger Quelle | Vorschlag: Namen statt Reihenfolge melden lassen. Bei den Prüfern zur Bewertung |
| **Sonnets Zurückhaltung kam von den Testspielen, nicht vom Modell** — 66 von 87 Aussagen im 50er-Bereich, solange nur Testspiele vorhergesagt wurden. Am 29.7., mit CL-Qualifikation, sagt Sonnet 75 %, 72 %, 78 % | 29.7. | Claude | **Ändert den Lernschritt.** Eine Lehre „leg dich öfter fest" wäre auf selbsterzeugten Daten gebaut gewesen |
| **v19.6 zweistufige Spielliste — Test bestanden** | 29.7. | Claude | sieben Spiele CL-Qualifikation, kein Testspiel. Nach Bewährungszeit auf `bewährt` setzen |
| **Heim und Gast vertauscht** — Hull City–Rizespor als 1:2 gemeldet, real 2:1 für Hull. Datum, Wettbewerb, Quelle und Halbzeit-Pflicht meldeten alle „in Ordnung". Folgenlos, weil beide Gehirne Unentschieden getippt hatten | 29.7. | Claude (Abgleich mit Ondos Google-Screenshot) | siebte Fehlerart. **Am selben Tag ein zweites Mal aufgetreten** (Everton–Stoke, zwei Läufe mit entgegengesetztem Sieger) — die Bedingung der Prüfer vom 27.7. ist damit erfüllt |
| **Zweistufige Spielliste (v19.6)** — erster echter Test steht aus. Die Vorhersagen vom 28.7. entstanden noch unter v19.5, die reine Testspiel-Liste ist daher **kein** Beleg gegen v19.6 | 29.7. | Claude | Lauf vom 29.7. abwarten |
| **Einseitige Vorhersagen** — am 25.7. sagten beide Gehirne in allen zwölf Spielen „beide treffen" und „über 2,5". Dann sind diese Märkte keine Vorhersage mehr, sondern eine Konstante | 25.7. | Claude | am 26.7. wieder Vielfalt — Tagesausreißer, weiter beobachten |
| **Sonnets Häufung im 50er-Bereich** — 63 von 84 Aussagen zwischen 50 und 59 % | 27.7. | Claude | führt zu Prio-1-Punkt 1 |
| **Verwechslungsfalle: derselbe Verein zweimal am selben Tag** — Crystal Palace spielte am 28.7. gegen Famalicão und gegen Lens. Die Datumsprüfung hilft hier nicht | 28.7. | Claude | eines der beiden Spiele wurde nicht gefunden — beobachten |
| **Log-Deduplizierung** — gilt als überholt, weil jedes Gehirn ein Spiel einmal tippt. Nach zwei Wochen Messbetrieb gegenprüfen | 16.7. | Claude | Prüftermin: etwa 6. August |
| **Seitenwechsel über mehrere Tage** — ein Ergebnis-Tipp kann sich nicht selbst widersprechen, aber ein Gehirn kann an zwei Tagen verschieden tippen | 18.7. | Claude | beobachten |

---

## 🔵 Technische Schuld
*Angeregt von ChatGPT, 23.7. — keine Fehler, sondern Bekanntes, das später sauber gemacht werden muss.*

| Punkt | Auswirkung heute | Dringlichkeit |
|---|---|---|
| **Doppelter Code** — `beta.html` und `OndoControl.html` sind zwei vollständige Kopien | Jede Korrektur muss zweimal gemacht werden oder geht in einer Version verloren | hoch, sobald v19 befördert wird |
| **Bekannte Lücke im Schiedsrichter** — ein einmal als *fertig* gemeldetes Ergebnis wird nie wieder hinterfragt. Die Wiederholung greift nur bei „nicht gefunden". Die erste Antwort ist die einzige, die zählt | Ein falsch abgelesener Endstand bleibt dauerhaft falsch in den Messdaten, sobald übernommen wurde | **mittel bis hoch** — bisher hat Ondos Nachschauen jeden Fall gefangen |
| **`APP_VERSION = 18` in `beta.html`**, während der Kopf v19.6 anzeigt | Heute folgenlos (`version.json` steht auf 17). Wird `version.json` bei der Beförderung auf 19 gesetzt, zeigt die Beta ein Update-Banner, das aus der Beta herausführt | vor der Beförderung klären |
| **Nur lokale Speicherung** (localStorage) | Sicherung ist seit v19.1 gebaut; offen bleibt die Übertragung in die stabile Version | → Prio 2, Punkt 4 |
| **Eine lange JS-Datei** (keine Module) | Änderungen werden mit der Zeit riskanter | mittel |
| **Sprachdateien von Hand** (167 Schlüssel × 3 Sprachen) | Dreifache Pflege bei jeder neuen Beschriftung | niedrig (wird bei jeder Lieferung geprüft) |
| **Seed-Daten fest im Code** (WM-Wetten vom Juli) | Ballast, der bei jedem Start mitläuft | niedrig |
| **Kein automatischer Test** | Jede Änderung wird nur von Hand geprüft | mittel |
| **Gemini-Kaskade komplex** (Modell-Liste, Ausweichversuche) | Funktioniert, aber schwer zu durchschauen bei Fehlern | niedrig |

---

## 🟢 Prio 3 — notiert, kein Termin

**11. Sportarten-Erweiterung** · *Idee: 20.7., Ondo* · **Status: Idee**
Kandidat 1: Tennis. Pro Sportart eigene Abrechnungsregel und **getrennte Statistik**.
*Sachstand 23.7.: Fußball liefert bis Ende September genug Spiele. Kein Handlungsdruck.*

**12. Tiefenanalyse-Knopf** · *Idee: Chat 1, Claude* · **Status: Idee** — zurückgestellt zugunsten Einfachheit

**13. Vier-Chat-Werkzeug (Poe)** · *Idee: 23.7., Claude* · **Status: Idee** — Gratis-Tarif reicht nicht, realistisch ab ~5 $/Monat

**14. Wettarten ausschreiben oder erklären** · *Idee: 10.7., Claude* · **Status: Idee — nie gebaut**
Anlass war Ondos Frage „Was heißt BTTS?". Damals als Beobachtung notiert und dann vergessen. Heute geringer Bedarf, weil die App nur noch drei feste Märkte in Klartext anzeigt — bei einer späteren Markt-Erweiterung wieder relevant.

**15. DeerFlow-artiger Harness als Backend** · *Idee: 15.7., Ondo (Frage), Bewertung Claude* · **Status: Idee, Zukunftsregal**
Braucht einen dauerhaft laufenden Rechner und fällt damit heute durch die Zwei-Probleme-Regel. Erst relevant, wenn Phase 3 („arbeitet nachts") ernst wird.

---

## ⛔ Abgelehnt (bleibt dokumentiert)

| Punkt | Datum | Grund |
|---|---|---|
| Council-Skill (fünf Berater-Rollen) | 21.7. | Alle fünf wären dasselbe Modell — simulierte statt echter Perspektivenvielfalt |
| Manuelle Quoteneingabe / Screenshot | 23.7. | Zu viel Aufwand für Ondo |
| Eingabefeld für den Endstand von Hand | 25.7. | **Ondo:** „Das ist nicht der Sinn der Sache." Ein besseres Eingabefeld macht den Besitzer zum Ersatzteil |
| Doppelprüfung: dasselbe Spiel zweimal fragen | 28.7. | ChatGPT und Claude einig — dauerhafte Kosten für einen einmaligen Fehler; dasselbe Modell zweimal zu fragen kann zwei gleiche Fehler erzeugen, die sich gegenseitig bestätigen |
| OpenLigaDB als Ergebnisquelle | 25.7. | Kostenlos und ohne Schlüssel, aber nur deutscher Fußball, von der Gemeinschaft bearbeitbar — für ein Messgerät ungeeignet |
| Sport-API statt KI-Suche (Geminis Vorschlag) | 9.7. | Real getestet am 5.7.: freie Quellen liefern Platzhalter statt Teamnamen |
| Lokale KI (Ollama) auf dem Tablet | 9.7. | Zu schwache Modelle, keine Websuche, erreicht die iPhone-App nicht ohne Server |

---

## ❔ Überholt — zur Kontrolle

- **Log-Deduplizierung** (*16.7., Claude*) · **überholt** — siehe Beobachtungspunkte, Prüftermin 6. August
- **Verworfen-Statistik** (*16.7., Claude*) · **überholt** — es gibt keine Verworfenen mehr
- **Konsistenz-Anweisung schärfen** (*18.7., Claude*) · **teilweise überholt** — siehe Beobachtungspunkte
- **Spielliste-Rangfolge als Wunschliste im selben Auftrag** (*24.7., Ondo, gebaut als v19.3*) · **überholt durch v19.6** — die Rangfolge wurde ignoriert; sie musste in getrennte Anfragen zerlegt werden. **Lehre:** Auswählen ist eine Entscheidung, Ablesen nicht — Entscheidungen muss man erzwingen, nicht erbitten.
- **Quoten-Transparenz / Quoten-Realitätsabgleich** (*18.7., Claude*) · **überholt** — die Gehirne nennen seit v19.0 keine Quoten mehr. Kehrt mit Prio-2-Punkt 8 zurück.

---

*Nächste Aktualisierung: nach dem ersten Lernschritt, etwa 3. August 2026 — oder früher, sobald eine neue Version geliefert wird (siehe „Keine Lieferung ohne Buchführung").*
