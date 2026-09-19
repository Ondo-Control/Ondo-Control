# ONDO CONTROL — Rückstand-Verzeichnis (Backlog)
**Nur offene Punkte. Gepflegt von Claude · Stand 19.9.2026, Fassung 142 · jede Idee mit Datum, Urheber und Status**
*Erledigtes, alte Fassungsnotizen und Prueflaeufe stehen in `BACKLOG-ARCHIV.md` — nur auf Zuruf zu lesen.*

## Regeln für dieses Dokument

1. **Abgrenzung (ChatGPT, 23.7.):** Architektur lebt ausschließlich in `Blueprint.md` und `Ondo-Core-Architektur.md`. Dieses Dokument enthält **nur Aufgaben, Ideen und deren Status** — keine Architekturregeln.
2. Claude schlägt Punkte von sich aus zum passenden Zeitpunkt vor. Ondo entscheidet, was und wann gebaut wird (Art. 8).
3. Nichts wird gelöscht. Abgelehnt und überholt bleiben sichtbar.
4. **Backlog-Pflege ist Code-Aufgabe (Ondo, 30.8.2026):** Code prüft und archiviert den Backlog künftig selbstständig, ohne Anstoss durch Chat — reines Verschieben eindeutig Erledigten nach `BACKLOG-ARCHIV.md`, nach denselben Kriterien wie bei der Archivierung vom 30.8.2026 (Fassung 61): Ein Punkt mit Status GEBAUT/GEKLÄRT/ENTSCHIEDEN/BEANTWORTET/GESCHLOSSEN zählt nur als erledigt, wenn im Punkt selbst **keine** Bewährungs-Einschränkung mehr steht ("Bewährung steht aus", "noch nicht bewährt" oder sinngemäss Gleiches) und er an keine noch offene Untersuchung gebunden bleibt — im Zweifel bleibt er stehen. Nichts wird gelöscht, keine inhaltliche Entscheidung über offene Punkte wird davon berührt — Art. 8 gilt für alles andere unverändert.
5. **Abgelöst am 14.9.2026 durch die übergreifende „Aktueller Stand vs. Geschichte"-Regel (Ondos Auftrag, Phase 2) — Einzelheiten `STAND.md`, Wegweiser.** Diese Regel begrenzte nur die „Was Fassung N ändert"-Abschnitte am Kopf, nicht den Textkörper einzelner Punkte — genau dort lag der grössere Teil des Wachstums (Diagnose vom 14.9.2026: vier offene Punkte allein = 75 % der damaligen 120.000-Zeichen-Grenze). Die neue Regel wirkt jetzt an beiden Stellen: jede vollständige Begründung (jeder „>"-Vermerk-Block, jeder dated „→"-Fund und jede zurückgezogene ~~Aussage~~) wandert sofort in `BACKLOG-ARCHIV.md`, nicht erst nach fünf Fassungsabschnitten. Nichts wird gelöscht, nur verschoben — Regel 3 gilt unverändert.

**Status-Werte:** `Idee` · `beschlossen` · `gebaut` · `bewährt` (im Alltag getestet) · `überholt` · `abgelehnt`

**Übergabe an die Prüfer — GEÄNDERT am 30.7.:** Der Eintrag vom 23.7. („Raw-Links funktionieren nur bei Claude, ChatGPT und Gemini brauchen Anhänge") ist **überholt**. GitHub Pages wandelt Markdown in HTML um; diese Adressform funktioniert bei ChatGPT:
`https://ondo-control.github.io/Ondo-Control/PROJEKT-STATUS.html` (entsprechend für Backlog, Blueprint, Ondo-Core-Architektur). Einzelheiten und Folgen stehen in `PROJEKT-STATUS.md`.

**Dateinamen von Berichten an die Prüfer (28.7., Ondo):** Beginnen mit Datum und Uhrzeit — `2026-07-31_1430_Ondo-Control_Thema.md`.

---

## ⚠ Was Fassung 129 ändert (14.9., Phase 2 der Trennung von aktuellem Stand und Geschichte tatsaechlich gebaut — Ondos Auftrag, alle vier Pflichtdokumente betroffen)

**Anlass:** Diagnose vom 14.9.2026 (dieselbe Sitzung) hatte zwei getrennte Wachstumsursachen belegt — Fassungsabschnitte (nur im Backlog durch Regel 5 begrenzt) und Geschichte im Textkoerper einzelner, weiterhin offener Punkte (in keinem Dokument begrenzt). Ondo hat Schritt 3 (stehende Regel) und Schritt 4 (Arbeitsbeispiel) der Diagnose vollstaendig freigegeben.

- **🔴 Fuer jeden der 45 offenen Punkte nur Titel und Status-Zeile behalten** (bei kurzen Punkten zusaetzlich eine kurze, noch nicht als Geschichte markierte Zusammenfassung, sofern sie unter 1.500 Zeichen blieb). Jeder vollstaendige „>"-Vermerk-Block, jeder dated „→"-Fund und jede zurueckgezogene ~~Aussage~~ wortgleich nach `BACKLOG-ARCHIV.md` verschoben — auch bei weiterhin OFFENEN Punkten (Regel 4 fuer geschlossene Punkte bleibt davon unberuehrt). Backlog von 287.203 auf 60.047 Zeichen (Kontrollrechnung im Antworttext).
- **🔴 Regel 5 abgeloest**, siehe Abschnitt „Regeln fuer dieses Dokument" oben — die neue, uebergreifende Regel (`STAND.md`, Wegweiser) wirkt jetzt am Textkoerper UND an Fassungsabschnitten, nicht mehr nur an Fassungsabschnitten.
- **Die bisherigen fuenf Fassungsabschnitte (124-128) wortgleich nach `BACKLOG-ARCHIV.md` verschoben** — die letzte Anwendung der alten Regel-5-Mechanik, danach entsteht kein neuer Fassungsabschnitt mehr im Hauptdokument (stehende Regel ab sofort).
- **Kein Codeaufwand, kein Eingriff an `beta.html`.** `pruefe.py` um Punkt 82 (Aktueller-Stand-Groesse, 80.000-Zeichen-Grenze je Pflichtdokument) erweitert — Einzelheiten im Antworttext.
- **Beschlossen und nicht gebaut: zwei** — **4, 81** *(unveraendert in der Zahl.)*

---

## 🔴 DIE FÜNF BESCHLÜSSE DER GRUNDSATZBESPRECHUNG (14.8.)

**Ondos Rahmen:** Solange diese Probleme nicht gelöst sind, kommt das Projekt nicht vernünftig weiter. Regeln dürfen die Arbeit nicht erschweren; brauchbare Lösungen sollen nicht ausgeschlossen werden, wenn sie nichts kaputt machen.

---

**46. Claude Code auf dem Surface Go** · *Idee 9./10.7., Claude (als Punkt 8) · neu vorgelegt 14.8. · beschlossen 14.8., Ondo · eingerichtet 16.8., Chat 18* · **Status: GEBAUT 16.8. — erstes Hochladen geglückt, Bewährung steht aus**
Ondos Gerät: Surface Go, Windows 10 Home 22H2, 64 Bit, 8 GB RAM, 110 GB frei, Pentium 4415Y.

---

## 🔴 CHATS UND ARBEITSSTRUKTUR — VOR ALLEN APP-PUNKTEN (Ondo, 16.8.)

**Ondos Vorgabe:** Zuerst werden die Probleme mit Chats, Nutzungsgrenzen und Arbeitsstruktur gelöst, dann geht es an der App weiter. Diese Gruppe steht deshalb vor **Prio 1**.

**Das gilt auch gegenüber der Reihenfolge der beschlossenen Punkte.** Der nächste beschlossene war zum Zeitpunkt dieser Vorgabe (16.8.) Punkt 47, und der gehört zur App. **🔴 Berichtigt (27.8.): Punkt 47 ist seither gebaut** (über Mistrals Code-Modus, von Claude gegengeprüft, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) — die Aussage ist damit historisch, nicht mehr aktuell. **Ondo entscheidet, ob die App-Arbeit wartet** — Claude zieht nichts von sich aus vor und stellt nichts von sich aus zurück.

**Reihenfolge innerhalb der Gruppe, Vorschlag Claudes:** 54 zuerst, weil ohne sie der Bereich „Code" ohne Pflichtlektüre arbeitet · dann 53 · dann 55 · dann 56 · dann 58 · dann 57.

**🔴 Gruppe im Kern abgeschlossen (27.8.2026):** 54 gebaut, 55 entschieden, 58 beantwortet, 56 beantwortet, 53 zurückgestellt. Nur 57 bleibt offen (bewusst nicht bearbeitet, nachrangig). **Prio 1 (App-Arbeit) hat ab jetzt wieder Vorrang** — Ondos Entscheidung, 27.8.2026.

---


**54. `CLAUDE.md` für den Code-Bereich** · *Frage 16.8., Ondo · untersucht 16.8., Chat 19 · beschlossen 16.8., Ondo · gebaut 21.8., Chat 21 in einer Cloud-Sitzung* · **Status: GEBAUT 21.8.2026 — Bewährung steht aus**

Wer im Bereich „Code" arbeitet, hat die Pflichtlektüre nicht gelesen. Er kennt weder die Arbeitsregeln noch die Fehlerarten. **Damit fällt genau der Schutz weg, für den das Kontrollexamen gebaut wurde.**

Claude Code liest beim Start eine Datei mit diesem Namen aus dem Arbeitsordner. Darin könnten die Regeln stehen, ohne dass Ondo sie einfügt.

---

**53. Erzeugte Dateien ohne Handarbeit an den richtigen Ort** · *Vorgabe 16.8., Ondo · zurückgestellt 27.8.2026, Vorschlag Claude* · **Status: ZURÜCKGESTELLT 27.8.2026 — nicht abgelehnt**

**Ondos Vorgabe im Wortlaut:** Er will nicht mehr von Hand hochladen. Erzeugte Dateien sollen auf dem Tablet in den richtigen Ordnern landen — **im Repo und im Projektordner der App**. Er arbeitet parallel am Handy. Ziel ist, das Tablet zu Hause laufen zu lassen. **Es kann aber aus sein**, etwa nach einem Windows-Update. Er will mit **einem Klick** entscheiden, wohin gespeichert wird — Handy, Tablet, Repo, Projektordner — und welche Dateien. **Einmal eingestellt, danach immer automatisch, wenn er es auslöst.**

---

**57. Weitere Werkzeuge — Connectors und anderes** · *Frage 16.8., Ondo* · **Status: Idee — ungeprüft**

Ondos Frage: Es gibt Chat und Code. Gibt es weitere Möglichkeiten, die Arbeit zu erleichtern?

---

**61. Übergaberegel für den Code-Bereich abgeschwächt** · *Vorschlag Claude, 27.8.2026, auf Ondos Rückfrage zum Arbeitsprozess* · **Status: EINGEFÜHRT 27.8.2026 — als Einzelfall, noch nicht bewährt**

Die Übergaberegel (`STAND.md`) verlangt ein Kontrollexamen mit Fangfragen und Antwortschlüssel, weil eine neue Chat-Sitzung nicht selbst nachprüfen kann, ob sie die Pflichtdokumente wirklich gelesen hat. Eine Sitzung im Code-Bereich liest die Dateien direkt aus dem Repository und kann das Lesen nicht vortäuschen — das Kontrollexamen prüft dort nichts, was nicht ohnehin nachprüfbar ist.

---

**62. Zusammenarbeit mit Mistral als beaufsichtigtem Mitarbeiter** · *Eingerichtet vor dem 24.8.2026, nachgetragen 27.8.2026 (Lücke gefunden über einen gelieferten Übergabetext)* · **Status: LÄUFT — erster Backlog-Eintrag, nachträglich**

Ein zweiter Arbeits-Branch `mistral` existiert seit vor dem 24.8.2026 (aktuell fünf Commits vor `main`, zuletzt `b43c38b`), ausschliesslich für eine zweite, beaufsichtigte KI (Mistral) im Code-Modus. `main` ist davon unberührt. Die Dateien `MISTRAL.md` (Regeln für Mistral, von Claude gepflegt), `MISTRAL-AUFGABEN.md` (Aufgabenliste, von Claude gepflegt) und `MISTRAL-ERLEDIGT.md` (Ergebnisprotokoll, von Mistral gepflegt) liegen nur auf diesem Branch. Mistral arbeitet ausschliesslich dort, nie auf `main`, ohne eigene Entscheidung über die nächste Aufgabe — die kommt von Claude. Punkt 47 (Selbsttest für `beta.html`, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) wurde über diesen Weg gebaut und von Claude gegengeprüft.

---

**63. `selbsttest.py` auf weitere Kernfunktionen ausweiten** · *Vorschlag 27.8.2026, aus einem Strukturvergleich mit `ondo-jarvis` (unabhängige Sitzung mit Zugriff auf beide Repos), befürwortet von Chat 25 und Claude* · **Status: Idee — noch nicht gebaut**

`selbsttest.py` (Punkt 47, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) deckt bisher eine Funktion ab (`marktUrteil`). Vorschlag: schrittweise weitere Kernfunktionen mit festen Rechenproben absichern — die Dubletten-Sperre in `spielListeHolen`, die 2,5-Stunden-Regel des Schiedsrichters, die Datums-/Wettbewerbsprüfung. Das sind genau die Fehlerarten, die `STAND.md` bereits als wiederkehrend dokumentiert (Der Schiedsrichter — zehn Fehlerarten · Die Spielliste — drei Fehlerarten).

---

**64. Rohe Schiedsrichter-Antwort mitschreiben** · *Vorschlag Claude, 28.8.2026, aus der Restarbeit zu Punkt 51 (seit 30.8.2026 in `BACKLOG-ARCHIV.md`) · von Ondo in Chat 25 entschieden, „wenn alles passt" · nachgetragen und gebaut 28.8.2026 · Teil 3 am 2.9.2026 zurückgenommen · Celje/Sabah erneut geprüft und übernommen 10.9.2026, Ondo · 🔴 laut Ondos Messdaten-Export vom 13.9.2026 wieder ungelöst, Ursache von Ondo am 13.9.2026 benannt: damaliges Speicherproblem, jetzt gelöst* · **Status: 🔴 Mitschreiben GEBAUT am 28.8.2026 (`beta.html` v19.8.5) — die zwei Celje/Sabah-Fälle waren am 10.9.2026 kurzzeitig übernommen, konnten wegen des damaligen Speicherproblems (Backlog-Punkt 76) aber nicht gespeichert werden; Speicherproblem seit 12.9.2026 gelöst, beide Spiele werden laut Ondo im nächsten Prüflauf erneut ausgewertet, Einzelheiten bei Fassung 122/123 oben und in `STAND.md`**
Bei NK Celje–Slovan Bratislava und Sabah FC–Hapoel Beer-Sheva FC lieferte der Schiedsrichter an drei Läufen drei verschiedene Endstände, trotz Temperatur 0 (siehe `STAND.md`, elfte Fehlerart). **Belegt (Codezitat):** In `geminiCall` (`beta.html`, Zeile 1141/1145) wird der rohe Antworttext `txt` nur zurückgegeben, nie in `state` geschrieben. `parseJsonBlock` (Zeile 1167ff.) extrahiert daraus nur den JSON-Block und verwirft den Rest. `verarbeite` (Zeile 1529ff.) übernimmt in `pruefListe` ausschliesslich die geparsten Felder (Status, Tore, Halbzeit, Quelle). **Die rohe Antwort existiert nirgends mehr, sobald der Lauf durch ist** — deshalb liess sich die Ursache der drei widersprüchlichen Celje/Sabah-Läufe im Nachhinein nicht rekonstruieren.

---

**68. Mehrfachlauf-Absicherung des Schiedsrichters — drei Läufe statt einem** · *Auftrag Ondo, 3.9.2026 · gebaut am selben Tag · erste Bewährungsbeobachtung 10.9.2026, Ondo* · **Status: 🔴 GEBAUT am 3.9.2026 — Bewährung läuft, erste Woche ohne instabilitätsbedingten Park**

**74. Zusammenarbeit mit ChatGPT als geprüftem Code-Zulieferer** · *Vorschlag Ondo, 10.9.2026, aus Kostensorge zum Schiedsrichter · Auftrag Ondo, 10.9.2026 · erste Anwendung am selben Tag* · **Status: 🔴 GEBAUT UND ERSTMALS ANGEWENDET am 10.9.2026, `beta.html` v19.8.22 — Bewährung steht aus**

**Ondos Auftrag im Wortlaut (sinngemäss):** ChatGPT soll versuchen, eine klein umrissene Codeänderung selbst zu schreiben, damit sich zeigt, ob es das kann. Claude prüft das Ergebnis nachträglich und holt es erst nach `main`, wenn es die Prüfung besteht. Zweck: Nutzung bei Claude sparen — das Schreiben von Code kostet mehr als das Prüfen eines bereits fertigen, klar spezifizierten Diffs.

---

**75. Lernkette bauen — Evidence Ledger, Decision Ledger, Observation Layer** · *Beschlossen 6.7.2026, Reihenfolge fixiert · Auftrag Ondo, Teil 1 (Evidence Ledger) und Teil 2 (Decision Ledger) 11.9.2026* · **Status: ✅ ALLE DREI TEILE GEBAUT am 11.9.2026 — `beta.html` v19.8.28. Bewährung steht aus: Ob die vorhandenen Daten für belegte Beobachtungen reichen, zeigt erst der Blick in Ondos laufende App**

**Anlass:** Ondo hat der Lernkette am Ende einer langen Diskussion um Beförderungskriterien
und Reihenfolge ausdrücklich Vorrang gegeben und die Entscheidung, wann angefangen wird,
an Claude delegiert — Antwort: jetzt, ohne auf eine Beförderung zu warten, da die sieben
Beförderungskriterien (BLUEPRINT-PROTOKOLL.md, 10.7.2026) keine Bedingung für den **Bau** der
Lernkette in der Beta enthalten, nur für die **Beförderung** selbst.

**Zusammenhang mit der Beförderungsfrage (Backlog-Punkt 5):** ChatGPT wurde am 11.9.2026 um
eine zweite Einschätzung zur Beförderungsreife gebeten und empfahl, die Lernkette **nach**
der Beförderung als eigenen nächsten Entwicklungsschritt zu bauen. Ondo hat sich dagegen
entschieden — die Lernkette geht jetzt vor, unabhängig vom Stand der Beförderung. Einzelheiten
und ChatGPTs vollständige, geprüfte Antwort stehen im Gesprächsverlauf, nicht hier wiederholt.

---

**76. Speicherung von `localStorage` auf `IndexedDB` umgestellt** · *Fund Ondo 12.9.2026 („Browser
voll") · Auftrag Ondo 12.9.2026, wörtlich: „Ich will eine dauerhafte Lösung, keine Dateien
Löschen!!" · gebaut am selben Tag · erste Bewährungsbeobachtung 12.9.2026* · **Status: 🔴
GEBAUT 12.9.2026, `beta.html` v19.8.30 — erste Bewährungsbeobachtung positiv, volle
Bewährung im echten Betrieb steht weiterhin aus**

**Anlass:** Ondos Browser lehnte das Speichern bei 2.726 KB ab (v19.8.29, siehe Punkt 64 in
„Technische Schuld"). Ondo bestätigt: genug freier Speicherplatz auf dem iPhone selbst — das
Problem lag an `localStorage`s fester, kleiner Grenze je Webseite, nicht am Gerät. Ondo hat
eine dauerhafte Lösung verlangt und Löschen ausdrücklich ausgeschlossen.

---

**71. Eigener Reiter für offene Spiele, Rest als Archiv** · *Idee 4.9.2026, Ondo · Auftrag Ondo 4.9.2026, gebaut am selben Tag* · **Status: 🔴 GEBAUT am 4.9.2026, `beta.html` v19.8.15**

Vorschlag Ondos: ein neuer Reiter, aufgebaut wie das bestehende KI-Log, aber nur für offene
(noch nicht bewertete) Spiele; geparkte und bereits geprüft/bewertete Einträge wandern in
eine Archiv-Ansicht. Zweck: Übersicht bei wachsender Datenmenge, verwandt mit Punkt 70, aber
eine grössere strukturelle Änderung an der Anzeige — betrifft KI-Log, Bilanz und Text-Export
gemeinsam.

---

**72. Mehrteiliges Redesign des KI-Log-Bereichs** · *Idee 4.9.2026, Ondo, aufgenommen beim Bau von Punkt 71 · Schritt 2 Auftrag Ondo 4.9.2026, gebaut am selben Tag* · **Status: Schritt 1 und 2 GEBAUT, Schritt 3 offen — je eigener Plan und eigene Freigabe**

Ondos KI-Log-Redesign ist als dreiteiliges Vorhaben angelegt, damit die einzelnen Schritte
nachvollziehbar bleiben und jeder für sich freigegeben werden kann:

---

**73. iOS-Datumsfelder im KI-Log-Filter** · *Fund 3.9.2026, bisher nicht untersucht · Auftrag Ondo 4.9.2026, Kandidat 1 gebaut am selben Tag · 🔴 von Ondo am echten Gerät geprüft und ERNEUT GEÖFFNET am 5.9.2026 · Kandidat 2 gebaut 6.9.2026, von Ondo am echten Gerät geprüft — WEITERHIN WIRKUNGSLOS · Kandidat 3 gebaut 7.9.2026, Ondos eigene Wahl, 🔴 von Ondo am echten Gerät geprüft — ERNEUT WIRKUNGSLOS · Kandidat 4 gebaut 7.9.2026, auf Ondos eigenen Vorschlag, 🔴 von Ondo am echten Gerät geprüft — ERNEUT WIRKUNGSLOS · nach vorab vereinbarter Regel auf den Stand vor Punkt 73 ZURÜCKGESETZT, 7.9.2026* · **Status: 🔴 OFFEN, ZURÜCKGESETZT — vier CSS-Kandidaten hintereinander wirkungslos, kein fünfter Versuch ohne neuen Auftrag. `kilogFilterBlock()`s Datumsreihe ist wieder codegleich mit `logExportBlock()`s unverändert gebliebener Reihe — derselbe ursprüngliche Überlauf-Fehler besteht wieder, bewusst in Kauf genommen**

Die von/bis-Datumsfelder (`logExportBlock()`, `kilogFilterBlock()` aus Punkt 70/71) tragen
`text-align:center` inline im Code, erscheinen auf iOS trotzdem nicht zentriert.

---

**65. Harte Leselängen-Grenze im Chat-Bereich bei rund 120.000 Zeichen** · *Fund 29.8.2026, Claude, bei der Übergabe an Chat 27 · Weg C als Dauerregel gewählt 11.9.2026, Ondo* · **Status: 🔴 Weg C als STEHENDE REGEL eingeführt am 11.9.2026 — Grenze weiterhin überschritten, wirkt aber jetzt dauerhaft statt einmalig**

**66. `pruefe.py` prüft Querverweise auf Existenz, nicht auf Fundort-Angabe** · *Fund 30.8.2026, ChatGPT beim Gegenlesen von PR #1, gemeldet über Chat 27* · **Status: Fund — nicht zu bauen, nur festgehalten**

`pruefe.py` Abschnitt 3 prüft, ob eine erwähnte Punktnummer irgendwo existiert — im Backlog oder in `BACKLOG-ARCHIV.md`, weil die Prüfung beide Dateien zusammen durchsucht. **Das ist eine andere Frage als die, ob ein Text mitteilt, WO der Punkt gerade steht.** Nach der Archivierung von zehn Punkten (Fassung 61) zeigten mehrere Querverweise im Backlog weiterhin nur auf die nackte Punktnummer, ohne zu sagen, dass der Punkt inzwischen im Archiv liegt — `pruefe.py` meldete dabei ALLES SAUBER, weil die Nummer ja auffindbar war.

---

### Als v19.7 gebaut am 3.8.: A · 0a · 1 · D — Bewährungszeit läuft

**E. „Prüfen statt suchen"** · *Idee 25.7., ChatGPT · Beschluss Ondo 25.7., Bau bestätigt 27.8.* · **Status: 🔴 GEBAUT am 27.8.2026, mit Rückfall-Zusage**
**⚠ NICHT MEHR BLOCKIERT (8.8.).** Geminis Rückfrage vom 4.8. — wie ein Prüf-Auftragstext ein **echtes** 0:0 von einem „nicht gefunden" unterscheidet — ist im Bericht nach Arbeitsregel K vom 8.8., 06:35 Uhr gestellt und **von Gemini selbst beantwortet worden**. Sein Vorschlag: Das Modell muss den **Zustand** klassifizieren, bevor es Ziffern ausgeben darf — sinngemäss „Status: beendet, Ergebnis 0:0" gegen „Status: nicht gefunden", und Ziffern ausschliesslich bei bestätigtem torlosem Unentschieden.
*Vermerk 28.8.2026: Gemini (Urheber der Rückfrage) ist seither nicht mehr am Projekt beteiligt. Die Frage und sein eigener Vorschlag dazu bleiben unverändert gültig — der Beteiligtenwechsel ändert nichts an der Sachfrage.*

ChatGPTs Umformulierung, im Blueprint unter dem 25.7. protokolliert: **Der Schiedsrichter soll nicht suchen, sondern prüfen.** Nicht „finde Spiel X", sondern „hier sind Wettbewerb, Datum, Heim, Gast — bestätige nur, wenn alle vier übereinstimmen".

**Stand im Code:** Der Auftrag beginnt bis heute mit „Ermittle per Websuche … den ENDSTAND". Übergeben werden nur Spielname, Datum und Anpfiffzeit — **der Wettbewerb gar nicht.** Die Wettbewerbspflicht aus v19.2 wirkt erst hinterher, als Warnung an Ondo.

**Vermutete Folge:** die erfundenen 0:0 vom 31.7. Ein Modell, das suchen soll, liefert irgendetwas; ein Modell, das bestätigen soll, kann „nein" sagen. **Vermutung, nicht bewiesen (Art. 13).**

---

**0b. Widersprüche messen statt korrigieren** · *Idee 29.7., Ondo · Wiederaufnahme ENTSCHIEDEN 7.9.2026, Ondo · Umsetzungsfrage ENTSCHIEDEN und GEBAUT 11.9.2026, Ondo* · **Status: 🔴 GEBAUT am 11.9.2026, `beta.html` v19.8.25 — Widerspruchsquote je Markt (Sieger bewusst ausgenommen)**

Ursprünglich: Widersprüche zwischen Ergebnis-Tipp und Marktaussage bekommen eine eigene Kennzahl je Gehirn.

**Warum zurückgestellt:** Nach dem Befund unter Punkt A würde eine Widerspruchsquote keine Eigenschaft der Gehirne messen, sondern eine unklare Formulierung im Auftragstext. Eine Kennzahl, die dem Gehirn anlastet, was die Frage verursacht hat, wäre selbst ein Messfehler.

**Zwei Korrekturen am ursprünglichen Beschluss, falls er wiederaufgenommen wird:**
1. Die Quote ist **rückwirkend** aus den vorhandenen Daten auslesbar (`gedreht`-Vermerk), ohne neue Messung.
2. Der Vorsatz „die betroffene Aussage fließt nicht in die Kalibrierung ein" ist **falsch herum**. Die umgedrehte Aussage ist die, an die das Gehirn glaubt. Sie herauszunehmen entfernt ehrliche Daten.

---

**0c. Amtliche Quellen bevorzugen** · *Idee 30.7., Claude · als Negativliste gebaut 3.9.2026* · **Status: 🔴 TEILWEISE GEBAUT am 3.9.2026 — als NEGATIVliste, nicht als Positivliste. Die ursprüngliche Idee einer bevorzugten Quelle je Wettbewerbsfamilie bleibt ausdrücklich unerledigt und wurde bewusst NICHT gebaut**

Beim UEFA-Abgleich am 30.7. benutzte keine Schiedsrichter-Antwort `uefa.com`. Die falschen Ergebnisse stammten von `terrikon.com` und `flashfussball.de`. Am 31.7. kamen vier 0:0 in Folge aus derselben Quelle.

---

**B. Regressionstest mit den 13 Ergebnissen als feste Prüfbibliothek** · *Idee 30.7., ChatGPT* · **Status: Idee, zur Entscheidung Ondos**

Die 13 Ergebnisse vom 29./30.7. mit den amtlichen UEFA-Werten als dauerhafte Prüfgrundlage festhalten. Jede künftige Änderung am Schiedsrichter wird daran gemessen.

---

**C. Vertrauensklassen statt binär gefunden/nicht gefunden** · *Idee 30.7., ChatGPT* · **Status: Idee**

Kern von ChatGPTs Architekturantwort: **Formvalidierung statt Inhaltsvalidierung.** Die sechs Absicherungen prüfen die Bauform der Antwort, nicht ihre Wahrheit. Bei Lech Poznań 3:4 meldeten alle „in Ordnung" — das Ergebnis war trotzdem falsch. Bei den erfundenen 0:0 vom 31.7. ebenso.

---

**3. Such-Experiment** · *Idee 23.7., Claude* · **Status: 🔴 überholt (Ondo, 12.9.2026)**

Vier Wochen ohne Websuche messen, dann Suche zuschalten, Kalibrierung vergleichen. Die Messung ohne Suche läuft seit dem 23. Juli — **vier Wochen sind am 20. August um.**

---

**77. Trainingsraum — Gehirne an bereits ausgewerteten Spielen testen, ohne Erinnerung/Websuche** · *Idee Ondo, 12.9.2026 (Ersatzvorschlag für Punkt 3) · Auftrag Ondo 12.9.2026: „nicht einfach Auftrag erledigen und fertig, sondern vorher wirklich durchdenken, absichern und zukunftsfähig konzipieren" · Plan geprüft und für tragfähig befunden, Bau ohne weitere Rückfrage ausdrücklich freigegeben* · **Status: ✅ GEBAUT 12.9.2026 (`beta.html` v19.9.0), Nachbesserung GEBAUT 12.9.2026 (`beta.html` v19.11.0)**

Ondo wörtlich (Grundidee): „Es gibt die Möglichkeit einen Trainingsraum zu bauen … mit den bereits ausgewerteten Spielen, wo die Gehirne diese Tests durchlaufen könnten ohne Zugriff auf Erinnerung und Websuche … Das würde uns viel Zeit sparen." Beide Wege sollen von Anfang an vorgesehen sein: **Weg (a)** bereits ausgewertete App-Spiele (aktiv genutzt), **Weg (b)** öffentlich bekannte historische Spiele (Datenstruktur steht, „müssen wir jetzt noch nicht aktiv nutzen").

**Vollständiger Plan, Selbstkritik und Architektur-Einordnung: `Ondo-Core-Architektur.md`, Abschnitt 1d** (Punkt 45 — hier nur die Kurzfassung, nicht doppelt geführt).

---

**78. Kombi-Wette mit mehreren Vorhersagen verbinden** · *Fund Ondo, 12.9.2026 (Wetten per Foto hochgeladen, „Ich habe Kombi gespielt. Wie lässt sich das mit den aktuellen Vorhersagen verbinden?")* · **Status: ✅ GEBAUT 12.9.2026, `beta.html` v19.12.0**
---

**79. Websuche für echte Vorhersagen** · *Fund + Auftrag Ondo, 12.9.2026 (im Gespräch über den Trainingsraum aufgedeckt) · Auftrag Ondo: „Bau eine Obergrenze für die Suchvorgänge je Lauf ein"* · **Status: ✅ GEBAUT 12.9.2026, `beta.html` v19.10.0**

**Der Fund, der zu diesem Punkt führte:** Ondo ging davon aus, dass die Gehirne für ihre echten Vorhersagen bereits per Websuche recherchieren — Kader, Verletzte, Formstärke, Tabellenstand. **Das stimmt nicht, seit v19.0 nie.** `vorhersageGehirn()` bekommt nur Spielname, Wettbewerb und Anpfiffzeit; weder `apiCall()` (Sonnet) noch `geminiCall({rolle:'gehirn'})` (Flash) hängen ein Suchwerkzeug an. Jede Prozentzahl und jede Begründungszeile stammt allein aus dem trainierten Wissen des Modells. Websuche gibt es im Code nur beim Schiedsrichter (Ergebnis-Prüfung), nie bei der Vorhersage selbst. **Dieselbe Lücke steht jetzt auch in `Ondo-Core-Architektur.md`, Abschnitt 2 und 3, mit Vermerk berichtigt** — beide Abschnitte beschrieben seit ihrer ersten Fassung ein nie gebautes Ziel (Quellenprüfung, Vertrauensstufen mit Begründung) als wäre es der aktuelle Stand.

---

**80. Kriterium (g) — Antwortkonsistenz durch Wiederholungsläufe testen** · *Beförderungskriterium 10.7.2026 · von ChatGPT und Gemini gemeinsam am 6.8.2026 zurückgestellt · Auftrag Ondo 13.9.2026: „Antwortkonsistenz (g): Teste. Aber Du musst klar definieren wann es fertig ist."* · **Status: beschlossen — 🔴 Werkzeug GEBAUT 13.9.2026 (`beta.html` v19.13.0), echtes Ergebnis steht aus — Ondo muss den Lauf in der App auslösen, diese Sitzung hat keinen Zugriff auf seine API-Schlüssel**

**81. Schiedsrichter reparieren — nach Ondos eigener, strenger Definition** · *Auftrag Ondo 13.9.2026, wörtlich: „Dann Schiedsrichter reparieren. Das ist dein Job."* · **Status: beschlossen — 🔴 OFFEN. Ein echter Bug gefunden und behoben 13.9.2026 (`beta.html` v19.13.1, „0 von 10 gefunden"-Fund). Berichtigt 13.9.2026: die „zweite Datenquelle" war keine neue Entdeckung, sondern bereits bei Punkt 9 (11.9.2026) vollständig gebaut. 🔴 Wege-Neuzusammensetzung ausgeliefert 13.9.2026 (`beta.html` v19.13.2, Ondos Auftrag) — Bestätigung durch einen echten Prüfzyklus am Gerät steht aus, Status bleibt ausdrücklich OFFEN, nicht behoben. 🔴 football-data.org auf Archiv-Lesen umgestellt 14.9.2026 (`beta.html` v19.13.3, Ondos Auftrag) — Bestätigung durch einen echten Prüfzyklus am Gerät steht ebenfalls aus, Status bleibt OFFEN.**

---

**83. STARTPRÜFUNG als aktuelle Chat-Übergaberegel dokumentiert** · *Idee/beschlossen 15.9.2026, Ondo · gebaut 17.9.2026* · **Status: 🔴 GEBAUT 17.9.2026**

Ondo benutzt seit einiger Zeit statt der in `STAND.md` beschriebenen Übergabemappe (Teil A–E,
Kontrollfragen, Antwortschlüssel) ein eigenes STARTPRÜFUNG-Verfahren: Das Stichwort
STARTPRÜFUNG plus die Raw-Links zu den vier Pflichtdokumenten (Commit-Zahl statt
`?v=Datum`) in der ersten Nachricht eines neuen Chats. Der neue Chat ruft alle vier selbst
ab, prüft dabei, ob `STAND.md` selbst vorrangige Abschnitte nennt (z. B. „Acht Fehlerarten
Claudes" oder „Entscheidungen, die bei Ondo liegen") und liest diese zuerst, liest
zusätzlich Ondos Speicherdatei „Offene Fäden" (Claudes eigenes Memory-System, nicht im
Repo), und meldet sich danach von selbst mit fünf Angaben: Fassungsabgleich aller
synchron zu haltenden Dokumente (inkl. Feststellung, ob sie wirklich übereinstimmen) ·
Bestätigung der vorrangig gelesenen Abschnitte · Inhalt der „Offenen Fäden" · einer kurzen
Standzusammenfassung · einer Liste dessen, was ausdrücklich nicht gelesen wurde. **Das
ersetzt die Kontrollfragen faktisch** — eine Sitzung, die das Lesen nur vortäuscht, kann
diese konkreten, überprüfbaren Angaben nicht liefern.

**Gebaut:** `STAND.md`, Abschnitt „Chat-Übergabe ist Claudes Pflicht, nicht Ondos" beschreibt
STARTPRÜFUNG jetzt als aktuelle Regel für den Chat-Bereich, analog zu Backlog-Punkt 61 für
den Code-Bereich. Teil A–E, Kontrollfragen-Mechanik und Antwortschlüssel-Geheimhaltung sind
dort als 🔴 ÜBERHOLT markiert, nicht gelöscht (Regel 3). Die beiden Muster-Dateien
(`MUSTER_Ondo-Control_Uebergabe.md`, `MUSTER_Ondo-Control_Abnahme.md`) tragen aus demselben
Grund jetzt ebenfalls einen Überholt-Vermerk — sie gehörten nie zu Blueprint 2d (ChatGPTs
eigener, einfacherer Übergaberegel-Fassung ohne Kontrollfragen und Antwortschlüssel), die
unverändert weiterläuft.

**🔴 Eigener Fund beim Pflicht-Prüflauf, noch vor der Auslieferung behoben:** `pruefe.py`
Abschnitt 6 verglich den Backlog-Kopf bisher auf GLEICHHEIT mit dem jüngsten „## Was
Fassung N ändert"-Abschnitt — einem Mechanismus, den die Backlog-eigene Regel 5 seit
Fassung 129 (Phase 2, 14.9.2026) ausdrücklich abgeschafft hat: „danach entsteht kein neuer
Fassungsabschnitt mehr im Hauptdokument". Der erste Fassungssprung nach Phase 2 (129→130,
diese Lieferung) hätte die Prüfung damit dauerhaft und zu Unrecht als FEHL gemeldet.
Behoben in `pruefe.py` (Fassung 4): Die Prüfung verlangt jetzt nur noch, dass der Kopf den
letzten vorhandenen Abschnitt nicht unterschreitet, keine Gleichheit mehr. Die eigentliche
Kopf-Synchronität zwischen `STAND.md`, Backlog und Blueprint bleibt vollständig über
Abschnitt 1 abgesichert. `pruefe.py`: ALLES SAUBER.

**Kosten (Arbeitsregel G):** Reine Dokumentpflege, kein App-Code betroffen, kein Geld,
geringer Zeitaufwand.

---

**84. ESPN als primäre Schiedsrichter-Ergebnisquelle, KI-Schiedsrichter als Notnagel** ·
*Auftrag Ondo, 17.9.2026, sechs Schritte, mit vorgeschalteter Live-Verifikation (Schritt 0)
als Bedingung für den Bau · Schritt 0 zweimal live geprüft (vier Kategorien, dann zusätzlich
ein Elfmeterschiessen-Fall) · Schritte 1, 2 (teilweise), 3, 5, 6 gebaut 17.9.2026 (`beta.html`
v19.14.0) · KI-Notnagel noch am selben Tag auf Auftrag Ondo zurück auf drei Läufe (v19.14.1) ·
rohe ESPN-Antwort mitgeschrieben, Auftrag Ondo (v19.14.2) · UEFA-/openfootball-Lücke
weiterverfolgt, Auftrag Ondo: OpenLigaDB als zweite Strukturquelle live bestätigt und gebaut
(v19.15.0) · ESPN-Sammelautomatik + gehärtete Zuordnung, Auftrag Ondo 18.9.2026 (v19.17.0) ·
Nachbesserung nach Gegenprüfung ChatGPT, acht bestätigte Abweichungen behoben, Auftrag Ondo
18.9.2026 (v19.18.0) · gezielte Abnahmenachbesserung, Auftrag Ondo 19.9.2026 (v19.18.1)* ·
**Status: 🔴 TEILWEISE GEBAUT 19.9.2026, `beta.html` v19.18.2 — Kaskade ESPN-Archiv → Live-ESPN
→ OpenLigaDB → KI-Notnagel steht und ist verifiziert; die Archiv-Beweiskette (`e.espnRoh` mit
`providerEventId`) wird seit v19.18.2 auch im echten App-Ablauf geschrieben. **Weiterhin
TEILWEISE, nicht abgeschlossen:** match.uefa.com und openfootball bleiben ungebaut
(Verifikation gescheitert), Regionalliga West/Südwest bei OpenLigaDB nicht auffindbar, 27 von
56 echten Wettbewerbsnamen ohne Live-Slug, und vor allem: **Bewährung im echten
App-Prüfzyklus steht aus — Ondos „4 von 10"-Befund vom 18.9.2026 gilt NICHT als behoben.**
Einzelheiten zum jeweils geltenden Stand: `STAND.md`, Abschnitt „Versionen". Die vollständige
Bau- und Begründungsgeschichte der Schritte v19.14.0 bis v19.18.1 steht in
`BACKLOG-ARCHIV.md` und `CHRONIK-2026-09.md`.**

**🔴 GEZIELTE ABNAHMENACHBESSERUNG 19.9.2026, `beta.html` v19.18.1 (Auftrag Ondo nach seiner
Abnahmeprüfung von v19.18.0).** Ausdrücklich **keine** neue Architekturrunde — A1, A2, B0, B1,
B5 und B6 sind nicht erneut umgebaut worden, die kompakte ESPN-Archivstruktur nicht neu
entworfen, keine neue Quelle angeschlossen, keine neuen Elfmeterfelder. Drei funktionale Punkte
plus Dokumentationskorrekturen:

- **C1 — zwei generische Serie-A/B-Regeln entfernt, wegen eines REAL BELEGTEN Fehlmatchs.** Die
  bare-Regeln `/serie\s*a\b/` → `ita.1` und `/serie\s*b\b/` → `ita.2` widersprachen der eigenen
  Negativlisten-Disziplin. **Der Beleg, nicht nur ein Risiko:** In Ondos echtem Export
  (`ondo-control-messdaten-2026-09-17.json`) steht unter dem blanken Wettbewerbsnamen „Serie B"
  das Spiel **Grêmio Novorizontino – Avaí FC (5.9.2026)** — ein brasilianisches Spiel, das die
  alte Regel nach Italien (`ita.2`) geschickt hätte. Derselbe Fehlertyp wie zuvor bei „Primera
  División". „Serie A" ist in Ondos Daten zwar durchgängig italienisch (6 Spiele), der Name
  selbst bleibt aber länderübergreifend mehrdeutig (Brasilien führt ebenfalls eine Serie A) und
  bekommt deshalb nach demselben Maßstab ebenfalls keine ratende Regel mehr. Die expliziten
  Brasilien-Regeln bleiben unverändert und vorrangig. **Keine Ersatzregel für Italien gebaut** —
  im realen Bestand existiert keine länderspezifische italienische Schreibweise, an der sich
  eine enge Regel belegen ließe (Art. 11, nicht ausgedacht).
  **🔴 Bewusste Verringerung der LIVE-Slug-Abdeckung, und was sie NICHT bedeutet:** Frisch
  maschinell gemessen gegen alle 56 echten Wettbewerbsnamen: **vorher 31 von 56, jetzt 29 von
  56.** Genau zwei Zuordnungen haben sich geändert, beide Serie A/B. **Diese Zahl misst
  ausschließlich `espnSlugFuer()` im LIVE-ESPN-FALLBACK — nicht die gesamte ESPN-Abdeckung des
  Systems.** Der reale Gesamtweg lautet: **ESPN-Archiv zuerst** (`espnArchivLesen()`, Zuordnung
  über Datum + Heimteam + Gastteam, ganz **ohne** `espnSlugFuer()`) → nur bei keinem eindeutigen
  Archivtreffer Live-ESPN → danach OpenLigaDB → KI-Notnagel. **Der Rückgang ist eine bewusste
  Sicherheitsverschärfung** (lieber keinen Slug raten als ein Spiel still in der falschen Liga
  suchen) **und verschlechtert die vorgelagerte Archivsuche NICHT** — praktisch belegt an einem
  echten Datensatz der realen Monatsdatei: „Danish Superliga" bekommt von `espnSlugFuer()`
  keinen Slug, der eindeutige Archivtreffer funktioniert trotzdem.
  **Weiterhin nicht aufgelöst (27 von 56):** 1. Lig · 1. Liga · Besta deild karla · Bundesliga ·
  Championship · Dänemark Superliga · Dänische Superligaen · EFL Cup · Finnland Veikkausliiga ·
  Irland Premier Division · Island - Premier · Island Besta deild karla · League of Ireland
  Premier Division · MLS Next Pro · Premier Division (Irland) · Premiership · Primera División ·
  Regionalliga Bayern · Saarland-Liga · **Serie A · Serie B** (neu) · Super League · Superliga ·
  UEFA Super Cup · UEFA Women's Champions League · Uruguay Segunda División · ÖFB-Cup.
  **NICHT ausgeweitet auf die Freundschaftsspiel-Regeln** (`fifa.friendly`/`club.friendly`):
  Dort besteht ein **theoretisches, NICHT belegtes Restrisiko** — in Ondos echtem Export ist
  kein einziger Fehlmatch belegt (20 „Freundschaftsspiel", 18 „Testspiel", 10
  „Vereins-Freundschaftsspiele" — alle Klubspiele). Ausdrücklich ein Restrisiko, kein gefundener
  Fehler; auf Verdacht wird nichts umgebaut.
- **C2 — `providerEventId` in die Archiv-Beweiskette.** `espnArchivLesen()` übernimmt die
  `providerEventId` direkt aus dem konkret gefundenen Rohdatensatz, `espnRohSchreiben()` schreibt
  sie in den `e.espnRoh`-Eintrag. **Das Problem, belegt:** Die URL zeigte nur auf die
  Monatsdatei — nach dem ersten echten Actions-Lauf liegen dort bereits **36 Datensätze**;
  welcher tatsächlich verwendet wurde, war im Nachhinein nicht mehr bestimmbar, genau das soll
  die Beweiskette aber leisten. Keine doppelte Speicherung ganzer Archivdatensätze, nur die
  eindeutige ID zusätzlich zur bereits vorhandenen kompakten `beleg`-Evidence. Der Live-Fall und
  `espnLauf()` bleiben wortgleich unverändert.
- **C3 — `strukturAbgleich()` liest wieder BEIDE Schemata.** Seit v19.18.0 las die Funktion nur
  noch `providerCompetitionName`. Die älteren Strukturproduzenten `apiFootballLauf()`,
  `footballDataLauf()` und `footballDataArchivLesen()` erzeugen aber unverändert `wettbewerb` —
  sie sind derzeit teils nicht aktiv, bleiben aber bewusst im Code und sollen bei Reaktivierung
  funktionieren. Ihr eigener Wettbewerbsname wäre beim normalen Treffer durch den Rückfall auf
  `p.wettbewerb` überdeckt und in der **Mehrdeutig-Liste sogar ersatzlos leer** geworden. Neuer
  gemeinsamer lokaler Leser `wettbewerbAus()` (neues Schema hat Vorrang), keine Umbenennung der
  alten Produzenten, kein Alias im gespeicherten ESPN-Datensatz. `x.status==='FT'`,
  `kickoffUtc` und `providerCompetitionSlug` unverändert behandelt. *Die frühere Begründung im
  Code („einzige Lesestelle, kein externer Leser zu schützen") war falsch — der damalige `grep`
  suchte die Lesestellen, nicht die Produzentenseite; im Code berichtigt statt überschrieben.*
- **C4 — Dokumentation an den inzwischen realen Betriebsdaten berichtigt:** falscher
  Cron-Kommentar im ESPN-Skript (behauptete „identisch zur bestehenden Automatik, 08:00 + 23:30
  UTC"; tatsächlich seit B5 entzerrt auf ESPN 08:25/23:55, Schiri 08:00/23:30, gemeinsame
  `concurrency`-Gruppe) · „59 Slugs × 2 Tage" → **58** an der Kosten-/Laufzeitstelle · erster
  echter Actions-Lauf · reale Dateigröße. **An den Workflow-Zeiten selbst ist nichts geändert.**

**🔴 Erster realer geplanter Betriebslauf (19.9.2026, frisch über GitHub geprüft):**
Schiri-Ergebnisse Lauf #13 (01:20:10–01:20:26 UTC, erfolgreich, Commit `59c5548`) ·
ESPN-Ergebnisse **Lauf #1, der erste überhaupt** (01:41:23–01:42:05 UTC, erfolgreich, prüfte
laut Protokoll alle **58 Slugs**, schrieb **36 Spiele** in die neu angelegte
`daten/espn-ergebnisse/2026-09.json`, meldete **keine abgelehnten HTTP-Abrufe**, Commit/Push
`59c5548..1b506d4` samt neuer `git fetch`/HEAD-Prüfung funktionierte). **Korrekte Statusform:
Gemeinsame `concurrency`-Konfiguration und normaler Commit/Push-Pfad funktionierten im Betrieb;
eine echte gleichzeitige Writer-Kollision wurde noch nicht provoziert bzw. beobachtet** — die
**konfigurierte Cron-Abstand beträgt 25 Minuten (23:30 → 23:55 UTC); tatsächlich starteten die
beiden Läufe 21 Minuten 13 Sekunden auseinander** (Schiri 01:20:10, ESPN 01:41:23 UTC). Nicht
pauschal „bewährt". *Ehrlich benannt (Art. 11): Beide Läufe starteten deutlich nach ihren
eingestellten Cron-Zeiten. **Die Ursache wurde in dieser Lieferung nicht untersucht** —
geplante GitHub-Actions sind allgemein nicht minutengenau garantiert, für diesen konkreten
Lauf ist aber nichts nachgewiesen. Ein einzelner Tag sagt nichts über die Regelmäßigkeit.*
🔴 Berichtigt 19.9.2026 (D3.1/D3.2): Hier standen zuvor „21 Minuten auseinander" UND „der
25-Minuten-Abstand blieb erhalten" nebeneinander — zwei verschiedene Dinge, vermischt — sowie
eine als bewiesen dargestellte „bekannte Warteschlangenverzögerung", die dieser eine Lauf
nicht belegt.

**🔴 Reale erste Archivgröße, am aktuellen `main` frisch gemessen** (ersetzt die zu niedrige
230–570-KB-Schätzung aus v19.18.0, die als damalige Schätzung in `CHRONIK-2026-09.md` stehen
bleibt): **30.809 Byte (30,1 KB)** · **36 Spiele** · **1 Kalendertag** (18.9.2026) · im Schnitt
**856 Byte Gesamtdatei je gespeichertem Spiel**. **Der erste reale Tag erzeugte rund
30,1 KB bei 36 Spielen. Eine rein lineare 30-Tage-Hochrechnung läge damit grob in der
Größenordnung von rund 0,9 MB. Das ist KEIN gemessener voller Monat;** Pokal-, Qualifikations-
und Spielplandichte schwanken.

**Verifiziert:** `node --check` auf `beta.html` und `skripte/espn-ergebnisse-holen.js`
bestanden · **111 Prüfungen** an den wortgleich herausgeschnittenen Funktionen (kein Nachbau):
C1 **20** (alle 56 echten Namen maschinell plus alle Pflichtfälle) · C2 **19** an einem
**echten End-to-End-Netzwerk-Roundtrip** gegen die reale `daten/espn-ergebnisse/2026-09.json`
(`providerEventId 401874503`, Lyngby Boldklub–Silkeborg IF, „Danish Superliga" — bewusst ein
Wettbewerb **ohne** Live-Slug; `providerEventId` lückenlos bis `e.espnRoh` durchverfolgt,
`beleg` und URL identisch, unbeteiligter `kiProtokoll`-Eintrag und `e.refRoh` unberührt,
Live-`espnRoh` unverändert lesbar) · C3 **25** (neues Schema, altes Schema, beide, keines,
Mehrdeutig-Fall in beiden Schemata, 0/1/>1 Kandidaten) · bestehende Prüfungen erneut **34**
(DFB-Pokal-Elfmeterfall Norderstedt–St. Pauli live gegen ESPN: 90 Minuten weiterhin 0:0, nie
2:3 · `refEinigkeit()`/`ergebnisQuelleAus()` · OpenLigaDB) · **13** Byte-Identitätsnachweise
gegen `1b506d4` — **alle bestanden.** Die Workflow-Dateien sind in dieser Lieferung
unverändert, eine YAML-Prüfung war deshalb nicht nötig. `pruefe.py`: ALLES SAUBER. Keine neuen
Sprachschlüssel (349 unverändert).

**Aktuelle Restlücken (unverändert offen):** match.uefa.com und openfootball bleiben
ausgeschieden · Regionalliga West/Südwest bei OpenLigaDB nicht auffindbar · 27 von 56
Wettbewerbsnamen ohne Live-Slug (Liste oben) · das nicht belegte Restrisiko bei den
Freundschaftsspiel-Regeln · **Bewährung im echten Betrieb steht weiterhin aus**, und Ondos
„4 von 10"-Praxisbefund gilt erst nach einem echten Prüfzyklus am Gerät als behoben.

**🔴 ABSCHLUSS-NACHBESSERUNG 19.9.2026, `beta.html` v19.18.2 (Auftrag Ondo nach ChatGPTs
Review von v19.18.1 am echten Commit `02720ae`).** Im Review bestanden und hier **nicht erneut
umgebaut**: C1 und C3 — beide nur als Regressionstest erneut geprüft. Offen war genau ein
funktionaler Punkt:

- **D1 — Archiv-Evidence im echten App-Pfad schreiben.** Der Fehler lag **nicht** mehr beim
  Erzeugen der Evidence: `espnArchivLesen()` baut `herkunft`/`url`/`providerEventId`/`beleg`
  seit v19.18.1 korrekt auf, und `espnRohSchreiben()` kann sie korrekt speichern. Er lag in der
  **Orchestrierung**: der echte Archivzweig in `rundeLaufen()` rief `espnRohSchreiben()` gar
  nicht auf, der Live-Zweig daneben tat es seit v19.14.2. Im tatsächlichen App-Ablauf wurde die
  Evidence deshalb **nie** nach `e.espnRoh` geschrieben — und das Archiv läuft in dieser Kaskade
  zuerst, ist also der Normalfall, nicht die Ausnahme. Behoben durch **genau einen ergänzten
  Aufruf**; `espnArchivLesen()` und `espnRohSchreiben()` selbst sind byte-identisch unverändert.
  Der gesamte funktionale Diff dieser Lieferung sind zwei Zeilen (dieser Aufruf und
  `CODE_VERSION`), in einer einzigen Datei.
- **D2 — warum der vorige Prüflauf das nicht gefangen hat, offen benannt (Art. 14).** Der
  v19.18.1-Test rief `espnArchivLesen()` und danach **selbst** `espnRohSchreiben()` auf. Er
  prüfte damit die Verkettung, die der Test herstellte — nicht die, die die App herstellt. Die
  damalige Formulierung „`providerEventId` lückenlos bis `e.espnRoh`" galt genau in diesem Sinn
  und war als Aussage über den echten Orchestrierungsweg **nicht gedeckt**; die Meldung „C2
  vollständig umgesetzt" war entsprechend zu stark und ist in `CHRONIK-2026-09.md` ausdrücklich
  zurückgenommen. Der neue Test ruft `espnRohSchreiben()` **nirgends selbst** auf: er führt
  `ergebnissePruefen()` samt `rundeLaufen()` wortgleich aus und zählt nur mit, ob der echte Code
  die Funktion selbst aufruft. **Gegenprobe gemacht:** gegen `02720ae` schlägt derselbe Test
  fehl, gegen den neuen Stand läuft er durch — erst das belegt, dass er die Lücke prüft.
- **D3 — drei Dokumentationskorrekturen:** 21:13 tatsächlicher Startabstand sauber vom
  25-Minuten-Cron-Abstand getrennt · keine unbelegte Ursache mehr für die verspäteten Actions ·
  die nicht reproduzierbaren Byte-Detailzahlen je Datensatz entfernt (sie stammten von einem
  **anderen** Datensatz als dem geprüften und aus einem Serialisierer mit Leerzeichen nach
  Komma und Doppelpunkt — zwei Abweichungsursachen zugleich; die Gesamtdateigröße ist davon
  unberührt).

**Verifiziert (v19.18.2):** `node --check` bestanden · **68 Prüfungen** an wortgleich
herausgeschnittenem Code, alle bestanden — **18** am echten `rundeLaufen()`-Archivzweig
(realer Datensatz `providerEventId 401874503`, Lyngby Boldklub–Silkeborg IF, 18.9.2026, 0:4,
„Danish Superliga"; echter Netz-Roundtrip gegen die reale Monatsdatei; **2** erzeugte
`e.espnRoh`-Archiv-Einträge aus **einem** Treffer, keine Dublette; unbeteiligter Eintrag und
`e.refRoh` unberührt; Archivtreffer nicht mehr an Live-ESPN, Archiv-Miss weiterhin schon) ·
**12** am echten Live-Zweig, gleichzeitig der DFB-Pokal-Elfmeterfall Norderstedt–St. Pauli
(90-Minuten-Messwert weiterhin **0:0**, nie 2:3; Live-Format unverändert, kein
`providerEventId` dort) · **17** Kaskaden- und C1/C3-Regressionstests (Live-Slug-Abdeckung
weiterhin **29 von 56**) · **21** Byte-Identitätsnachweise gegen `02720ae`. `.github/workflows/`,
`daten/` und `skripte/` laut `git diff` vollständig unangetastet. `pruefe.py`: ALLES SAUBER.
Keine neuen Sprachschlüssel (349 unverändert).

**Kosten (Arbeitsregel G):** Kein Geld, kein neuer Dienst, kein neuer Schlüssel, keine
zusätzliche GitHub-Action, keine zusätzlichen ESPN-Abrufe im normalen Betrieb. D1 ruft nur die
bereits vorhandene lokale Funktion dort auf, wo der Archivtreffer ohnehin schon verarbeitet
wird. Speichermehrbedarf: die bereits beauftragte kompakte Archiv-Evidence samt
`providerEventId`, die v19.18.1 zwar gebaut, im echten Archivpfad aber noch nicht gespeichert
hat.


**Kosten der Abnahmenachbesserung (Arbeitsregel G):** Kein Geld, kein neuer Dienst, kein neuer
Schlüssel, keine neue laufende Architektur. C1 reduziert eher unzuverlässige Live-Routing-
Versuche und lässt die Archivsuche unberührt · C2 fügt je verwendetem Archivtreffer nur eine
kleine `providerEventId` zum lokalen Diagnosefeld hinzu · C3 ist reine Leser-Kompatibilität ·
C4 ist Dokumentation. Die ESPN-Automatik selbst bleibt bei denselben 58 Slugs und denselben
zwei Tagesfenstern.

**Kosten der Nachbesserung (Arbeitsregel G):** Kein Geld (weiterhin keine Schlüssel nötig,
weder ESPN noch die Core-API für die Live-Verifikation). Deutlich höherer Rechercheaufwand
dieser Sitzung (58 Slugs einzeln live gegen echte Spiele geprüft statt nur HTTP-200-Test,
56 Wettbewerbsnamen einzeln gegen die neuen Regeln geprüft) — einmaliger Aufwand dieser
Lieferung, keine laufende Zusatzkosten. `beleg` vergrössert jede Monatsdatei um rund 85 %
(gemessen: 340 auf 631 Byte je Datensatz) — bei geschätzt 600–900 Spielen/Monat rund
150–300 KB zusätzlich, innerhalb der kostenlosen GitHub-Repository-Grösse, keine neue
laufende Ausgabe.

**Schritt 0 (Live-Verifikation), Befund:** Von vier wörtlich formulierten Bedingungen haben
zwei nicht bestanden — `linescores[]` existiert nicht auf `.../scoreboard`, erst auf einem
zweiten Aufruf `.../summary?event=`; „fertig" zeigt sich nie über einen festen Namen wie
„STATUS_FINAL", nur über `status.type.completed===true` (beobachtet: STATUS_FULL_TIME,
STATUS_FINAL_AET, STATUS_FINAL_PEN). Ondos Nachtrag-Frage (Elfmeterschiessen) beantwortet: Das
Elfmeterergebnis steht zusätzlich als fünfter `linescores`-Eintrag UND in einem eigenen Feld
`shootoutScore` — die Formel `linescores[0]+linescores[1]` bleibt davon unberührt, unabhängig
von der Gesamtlänge des Arrays (belegt an einem echten Fall, DFB-Pokal 16.8.2025).

**Gebaut (Schritte 1, 3, 5, 6, Schritt 2 nur der ESPN-Teil):** `espnSlugFuer()`
(Wettbewerb-Text → ESPN-Liga-Slug, unbekannt → direkt Stufe 4) · `espnLauf(ziel, cache)`
(Scoreboard + Summary, homeAway-basierte Zuordnung, 90-Minuten-Formel elfmeter-/
verlängerungssicher) · `ergebnisQuelle` (`espn`/`uefa`/`openfootball`/`ki`) neu am
`kiProtokoll`-Eintrag · `apiFootballLauf()`/`footballDataArchivLesen()` nicht mehr aktiv
aufgerufen, nur noch „NICHT AUFGERUFEN" (Regel 3, Zugangsdaten unangetastet).
**🔴 v19.14.0 hatte `REF_MIN_LAEUFE` (Backlog-Punkt 68) auf 1 gesenkt, KI-Notnagel machte nur
einen statt drei Läufe — noch am selben Tag auf Auftrag Ondo („KI-Notnagel zurück auf drei
Läufe") in v19.14.1 zurückgenommen:** `REF_MIN_LAEUFE` ist jetzt zusammengesetzt statt global —
ein Strukturtreffer (ESPN, erkannt über `ergebnisQuelleAus()!=='ki'`) braucht weiterhin nur
sich selbst (Schwelle 1), ausschliesslich reine KI-Läufe verlangen wieder `REF_MIN_LAEUFE=3`
mit der vollen 2-von-3-Regel wie vor v19.14.0. Betrifft ausschliesslich den Fall, dass ESPN
nichts liefert — an ESPN selbst, `espnLauf()`, den Slug-Tabellen und der 90-Minuten-Formel hat
sich dabei nichts geändert, wie von Ondo ausdrücklich verlangt. Einzelheiten und die
vollständige Architekturbegründung: `STAND.md`, Abschnitt „Versionen" (v19.14.0/v19.14.1) und
Kopf-Kommentar bei `refEinigkeit()`/`espnLauf()` in `beta.html`.

**NICHT gebaut, an eigener Zusatzverifikation gescheitert (über Ondos Schritt 0 hinaus, aus
demselben Vorsichtsprinzip):**
- **match.uefa.com/v5/matches:** `access-control-allow-origin` steht fest auf
  `https://www.uefa.com`, unabhängig vom gesendeten Origin — dasselbe CORS-Muster, das
  football-data.org (Backlog-Punkt 81) schon einmal für Monate unbrauchbar gemacht hat. Ein
  Browser von `ondo-control.github.io` aus würde diese Quelle nie erreichen.
- **openfootball „internationals"-Rohdateien:** Repository gefunden
  (`openfootball/national-teams`, offenes CORS über `raw.githubusercontent.com`), aber kein
  für 2026 aktuell gepflegter Datenpfad auffindbar (README generisch/veraltet, mehrere
  plausible Pfade → 404). Art. 11: nicht geraten, nicht gebaut.

**Bauschritte v19.14.0 / v19.14.1 / v19.14.2 / v19.15.0 — vollständige Begründung, Bauweise und
Verifikation stehen seit 19.9.2026 wortgleich in `BACKLOG-ARCHIV.md`** (stehende Regel vom
14.9.2026: abgeschlossene Begründungen wandern ins Archiv, hier bleibt der aktuelle Stand).

**Weiterhin offen:** Regionalliga West/Südwest sowie alles, was weder ESPN noch OpenLigaDB
kennen, fällt direkt an den KI-Notnagel durch, ohne Zeitverlust.


**Kosten (Arbeitsregel G):** Kein Geld (ESPN braucht keinen Schlüssel), ein zweiter
HTTP-Aufruf je Spiel (Summary zusätzlich zu Scoreboard) statt bisher einem — weiterhin
kostenlos. Der KI-Notnagel verbraucht jetzt SELTENER und GÜNSTIGER Modellaufrufe (ein Lauf
statt bis zu drei), sobald ESPN einen Wettbewerb abdeckt.

**Bauschritt v19.17.0 (ESPN-Sammelautomatik + gehärtete Zuordnung, Auftrag Ondo 18.9.2026) —
vollständige Begründung, Bauweise und Verifikation stehen seit 19.9.2026 wortgleich in
`BACKLOG-ARCHIV.md`**, die erzählende Fassung zusätzlich in `CHRONIK-2026-09.md`.

~~**🔴 Status ausdrücklich NICHT auf „behoben"/„bewährt" gesetzt:** Der neue Workflow hat noch
keinen echten Lauf in GitHub Actions hinter sich — Bewährung im echten Betrieb steht aus
(Stabilitätsregel).~~

**🔴 BERICHTIGT 19.9.2026:** Die durchgestrichene Aussage war am 18.9.2026 richtig und ist
überholt — beide Workflows sind am 19.9.2026 erstmals real und erfolgreich gelaufen
(Einzelheiten oben, Abschnitt „Erster realer geplanter Betriebslauf"). **Der Status bleibt
trotzdem NICHT auf „behoben"/„bewährt":** ein einzelner erfolgreicher Betriebstag ist keine
Bewährung (Stabilitätsregel), und eine echte gleichzeitige Writer-Kollision wurde dabei nicht
provoziert bzw. beobachtet.

**Kosten (Arbeitsregel G):** Kein Geld (ESPNs Site-API braucht auch hier keinen Schlüssel).
Laufzeit: ein GitHub-Actions-Lauf pro Cron-Zeitpunkt, sequenziell über **58 Slugs** × 2 Tage plus
eine Summary-Abfrage je gefundenem, beendetem Spiel — im Rahmen der kostenlosen GitHub-Actions-
Minuten, keine neue laufende Ausgabe. *(🔴 Berichtigt 19.9.2026: Hier stand 59 Slugs. Seit B0
(v19.18.0, `usa.open` als ausserhalb des STUFEN-Scopes entfernt) sind es 58 — im ersten echten
Betriebslauf am Protokoll bestätigt („Slug geprueft (58/58)"). Die historische Aussage über die
**ursprüngliche** 59-Slug-Liste in Schritt 0 weiter oben bleibt als Geschichte unverändert
stehen.)*

---

**85. Messdaten-Export: rekursive, schemabasierte Positivprojektion** · *Fund und Auftrag Ondo,
18.9.2026, „am Code bestätigt": ein echtes Gerät stiess über `kiProtokoll[].espnRoh[]`
(Backlog-Punkt 84, v19.14.2) auf `messGeheimFund()` und blockierte den gesamten Messdaten-Export
· gebaut am selben Tag · Nachbesserung nach Gegenprüfung ChatGPT, Auftrag Ondo 18.9.2026
(v19.18.0)* · **Status: 🔴 GEBAUT 18.9.2026, `beta.html` v19.16.0 — Nachbesserung 18.9.2026,
`beta.html` v19.18.0: maschinelles Audit gegen Ondos echten Export (505 kiProtokoll-Einträge,
20 mit aera:'v18') fand eine Lücke — `tipp`/`quote` fehlten in `MESS_KI_FELDER`, alle 20
v18-Einträge verloren dadurch ihren inhaltlichen Kern, jetzt ergänzt. `MESS_KONS_KOPF_FELDER =
['sonnet','flash']` ersetzt die offene `Object.keys(bericht)`-Iteration in
`messAntwortkonsistenzProjekt()` — ein unbekannter Kopf-Schlüssel (Objekt oder primitiver Wert)
wird jetzt übersprungen statt durchgereicht. Einzelheiten: `STAND.md`, Abschnitt „Versionen".**

**Kosten der Nachbesserung (Arbeitsregel G):** Kein Geld, keine Laufzeitkosten — reines Audit
und zwei ergänzte Feldlisten, kein neuer Netzwerkaufruf, `state` selbst unangetastet.

**Das Problem, belegt (Backlog-Punkt 44, 14.8.2026):** `messDatenBauen()` kopierte je
`MESS_FELDER`-Eintrag bisher `raus[f]=state[f]` — vollständig, ungeprüft in die Tiefe.
`MESS_FELDER` war damit nur ein Schutz auf der **obersten** Ebene, kein Schutz innerhalb eines
schon erlaubten Feldes. Ein später hinzugefügtes Feld **innerhalb** von `kiProtokoll` (hier:
`espnRoh`) kam dadurch ungeprüft mit — exakt der Fehlertyp, den die Positivliste auf oberster
Ebene verhindern soll, nur eine Ebene tiefer.

**Gebaut:** Jede Stelle, an der ein `state`-Feld ein Objekt oder ein Array von Objekten ist,
bekommt eine eigene, ausdrückliche Feldliste (`MESS_KI_FELDER`, `MESS_MARKT_FELDER`,
`MESS_MARKT_FALT_FELDER`, `MESS_BET_FELDER`, `MESS_REGELN_FELDER`, `MESS_KORREKTURF_FELDER`,
`MESS_TRAIN_PROT_FELDER`, `MESS_TRAIN_SPIEL_FELDER`, `MESS_KONS_SPIEL_FELDER`,
`MESS_KONS_GEHIRN_FELDER`), aus dem tatsächlichen Code ausgezählt (Arbeitsregel H — jede
Zuweisungs- und Lesestelle an einem `kiProtokoll`-/`bets`-/`trainingsraum`-/
`antwortkonsistenz`-Eintrag durchsucht). `MESS_PROJEKTOREN` ordnet jedem `MESS_FELDER`-Eintrag
seinen Projektor zu, bewusst **ohne** Rückfall auf einen rohen Kopiervorgang — ein Feld ohne
Projektor wird beim Bauen übersprungen statt roh durchgereicht.

**Ondos eigene, nicht delegierte Entscheidung:** `refRoh` und `espnRoh` bleiben **bewusst aussen
vor** — beide bleiben vollständig in IndexedDB und in der normalen Sicherung erhalten, der
normale Sicherungsweg (`datenSichern`/`datenLaden`) ist davon nicht betroffen. **Keine Ausnahme
für `contentKey` oder ein anderes Einzelfeld in `MESS_VERBOTEN` eingetragen** — `MESS_VERBOTEN`
und `messGeheimFund()` bleiben wortgleich unverändert als zweite, unabhängige Stufe stehen; diese
Projektion ersetzt sie nicht, sie sorgt nur dafür, dass ein `espnRoh`-artiger Fall sie künftig
gar nicht erst erreicht.

**Verifiziert:** `node --check` bestanden · **29 neue Prüfungen** an den echten, wortgleich aus
`beta.html` herausgeschnittenen Funktionen (kein Nachbau) — unbekanntes Feld auf jeder Ebene
injiziert (Top-Level, `kiProtokoll`-Eintrag, `maerkte[]`, `fAlt`, `bets`, `regeln`, `korrekturF`,
`trainingsraumProtokoll` inkl. dessen `maerkte[]`, `trainingsraumSpiele`,
`antwortkonsistenzBericht` inkl. `proSpiel[]`) → keines davon im Export · der ursprüngliche
Fehlerfall (`espnRoh` mit `contentKey`) exakt nachgebaut → `messGeheimFund()` meldet jetzt
nichts mehr, der Export gelingt · alle erlaubten Felder bleiben inhaltlich vollständig erhalten
(kein Datenverlust) · ein v18-Alteintrag ohne v19-Zusatzfelder läuft ohne Absturz durch ·
`datenSichern()`/`datenLaden()` unverändert auf ganz `state` geprüft · `messGeheimFund()`
erkennt weiterhin einen echten Schlüsselwert (Stufe 2 unabhängig wirksam) — alle 29 bestanden.
`pruefe.py`: ALLES SAUBER. Keine neuen Sprachschlüssel. Kein Schnitt in der Messreihe — reine
Exportlogik, `state` selbst unangetastet.

**Kosten (Arbeitsregel G):** Kein Geld, keine Laufzeitkosten — reine, lokale Rechenlogik beim
Erzeugen des Exporttexts/der Exportdatei, kein zusätzlicher Netzwerkaufruf.

## 🟡 Prio 2 — wichtig, aber später


**4. Daten-Export in die stabile Version** · *Idee Chat 1, erneut 28.7.* · **Status: beschlossen — 🔴 wartet auf die Beförderung Beta→Stabil (Ondo, 12.9.2026) — kein eigener Bauaufwand mehr, siehe Vermerk unten**

**34. Brier-Score als zweite Kennzahl neben der Kalibrierung** *(🔴 GERECHNET am 14.8. abends aus
den Rohdaten — Sonnet **0,2429**, Bereich 0,2350–0,2513 · Flash **0,2497**, Bereich
0,2391–0,2603. **Beide Bereiche schliessen 0,2500 ein: kein Gehirn ist nachweislich besser als
„immer 50 %".** Die Vorabrechnung von Chat 12 war brauchbar.)* · *Fund 8.8., frischer
Claude-Chat (nicht Chat 12) · nachgerechnet und in einem Punkt berichtigt von Chat 12 · Bau
ENTSCHIEDEN 7.9.2026, Ondo · gebaut 10.9.2026* · **Status: 🔴 GEBAUT am 10.9.2026, `beta.html` v19.8.21**

*Wortgleich aus `BACKLOG-ARCHIV.md` hierher verschoben (7.9.2026, Fassung 84) — eine
Bauaufgabe ist kein abgeschlossener Punkt im Sinn von Regel 4.*

Die Dokumente enthalten seit Wochen den Satz „Ein perfekt kalibriertes Gehirn, das immer 50 %
sagt, gewinnt kein Geld." **Die Grenze war benannt, aber nie gemessen.** Der Brier-Score
verrechnet Kalibrierung und Entschlossenheit zu einer Zahl und lässt sich nicht durch
Ausweichen auf 50 % schönen. Der Begriff kommt in keinem Projektdokument vor.

---

**35. Streuungsangabe für die Hauptkennzahl** *(🔴 NEU GERECHNET am 14.8. abends bei 330 und 327
Aussagen: Sonnet **4,35 %**, Bereich **2,3–8,7 %** · Flash **7,72 %**, Bereich **4,7–12,4 %**.
**Die Bereiche überlappen sich — Sonnets Vorsprung ist auch bei fast doppelter Datenmenge nicht
bewiesen.** Enger geworden ist er.)* · *Fund 8.8., frischer Claude-Chat · nachgerechnet von
Chat 12 · Bau ENTSCHIEDEN 7.9.2026, Ondo · gebaut 10.9.2026* · **Status: 🔴 GEBAUT am
10.9.2026, `beta.html` v19.8.21**

*Wortgleich aus `BACKLOG-ARCHIV.md` hierher verschoben (7.9.2026, Fassung 84) — eine
Bauaufgabe ist kein abgeschlossener Punkt im Sinn von Regel 4.*

„Sonnet 5 %, Flash 9 %" galt wochenlang als Vorsprung; jetzt stehen beide bei 8 %. **Eine
einzelne Prozentzahl ohne Streuungsangabe ist die Scheinpräzision, die Artikel 14 verbietet —
angewandt auf die eigenen Kennzahlen.**

---

**5. Beförderungskriterium (c) neu fassen** · *Idee 23.7., ChatGPT* · **Status: ✅ ENTSCHIEDEN 13.9.2026 — Ondo: „Wir haben genug Spiele!!!!", kein Blocker mehr**

**9. Echte Quoten automatisch (Knopfdruck gebaut, Zeitsteuerung teilweise gebaut) — Ausbau: eigene Ergebnis-Datenquelle für den Schiedsrichter** · *Idee 23.7., Claude · Verfassungsfrage teilweise geklärt 7.9.2026 · Knopfdruck-Teil Auftrag Ondo und gebaut 10.9.2026 · Zeitsteuerung/Ergebnis-Automatik Auftrag Ondo 11.9.2026 · Knopfdruck-Kopplung Auftrag Ondo und gebaut 11.9.2026 · Zwei-Läufe-Ausbau Auftrag Ondo und gebaut 14.9.2026 · API-Football aus der Automatik entfernt, Auftrag Ondo und gebaut 14.9.2026* · **Status: 🔴 Knopfdruck-Teil (Quoten) GEBAUT 10.9.2026 — Zeitgesteuerte Ergebnis-Automatik GEBAUT 11.9.2026, wegen API-Football-Sperre nur mit football-data.org scharf — Knopfdruck-Ergebnisabgleich (API-Football + football-data.org, gekoppelt an den Prüflauf) GEBAUT und geprüft 11.9.2026 — Zeitgesteuerte Automatik auf zwei tägliche Läufe erweitert (08:00 + 23:30 UTC) GEBAUT 14.9.2026 — API-Football aus der zeitgesteuerten Automatik entfernt (Kontosperre wegen geteilter Cloud-Infrastruktur), läuft dort seither nur noch football-data.org, GEBAUT 14.9.2026**
Offene Vorfrage (Gemini, weiterhin unbeantwortet): Deckt ein kostenloser Dienst überhaupt Ondos Spiele ab? **🔴 Verfassungsfrage teilweise geklärt (Ondo, 7.9.2026, Blueprint 0.83, Abschnitt 10):** Eine durch Knopfdruck in der App ausgelöste Aktualisierung verletzt „kein Server" nicht — ein Knopfdruck ist die von der Regel verlangte Aufforderung. Eine zeitgesteuerte, unbeaufsichtigte Ausführung bleibt weiterhin offen und ist eine andere Variante. **Ungeprüft, technische Einordnung:** Ob dafür überhaupt GitHub Actions nötig wäre (ein reiner Abruf im Browser bei Knopfdruck bräuchte gar keine Actions-Infrastruktur, wie die bestehenden Knöpfe es schon vormachen) oder ob ein dauerhaft im Repo gespeichertes Ergebnis einen manuell auslösbaren `workflow_dispatch` mit einem neuen, eigens abzusicherndem GitHub-Zugriffsschlüssel bräuchte, ist nicht untersucht.

**10. Value-Rechnung zurückholen** · *Idee 22.7., Gemini* · **Status: Idee** · hängt an Punkt 9

**11. Rollenmodell in den Blueprint** · *Idee 23.7., ChatGPT · GEBAUT 7.9.2026, Ondo* · **Status: 🔴 GEBAUT — bewusst minimal, eine Konfliktregel bleibt unaufgelöst**
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
---

**50. Verworfen-und-warum-Liste im Blueprint** · *Vorschlag 15.8., Gemini (abgeschwächt von Claude)* · **Status: 🔴 NICHT GEBAUT (Claude, 27.8., Entscheidung an Claude delegiert) — bleibt sichtbar, nicht gestrichen**

## 📋 Für Blueprint und Ondo-Core vorgemerkt

*Diese Punkte gehören in die Architektur- und Verfassungsdokumente und sind hier nur geparkt, bis sie dort stehen.*

| Punkt | Herkunft | Ziel | Stand |
|---|---|---|---|
| Arbeitsregel **K — Bericht statt Datei**: *Prüfer bekommen nur die geänderten Stellen mit Zeilennummer, altem und neuem Text und Begründung — davor ein fester Zusammenhangsblock, jedes Mal neu aus den Dokumenten geschrieben.* | **Claude 7.8., beschlossen von Ondo 7.8.** | Blueprint 2c | **eingetragen** (Blueprint 0.9, Abschnitt 2c) |
| Arbeitsregel **J — Korrekturfaktor gilt nur für sein Modell**: *Wechselt das Modell, verfällt der Faktor und muss neu gemessen werden.* | **Ondos Frage, 4.8.** | Blueprint 2c | **eingetragen** (Blueprint 0.6, Abschnitt 2c) |
| **„Fail Safe" bei unbekannten Fehlern** — nicht automatisch wechseln, sondern anhalten und als Unklarheit melden | ChatGPT, 4.8., entschieden Ondo 7.9.2026 | Blueprint 2c | **eingetragen** (Blueprint 0.83, Arbeitsregel N) |
| **Wie unterscheidet der Auftragstext ein echtes 0:0 von „nicht gefunden"?** (Geminis Rückfrage) | Gemini, 4.8. *(Urheber seit 28.8. nicht mehr beteiligt — Frage bleibt gültig)* | Blueprint / Punkt E | offen |
| **Darf der Schiedsrichter überhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten?** (offene Frage) | ChatGPT, 30.7. | Blueprint | offen |
| Arbeitsregel **G — Kostenregel**: *Jeder Vorschlag nennt seine Kosten — Geld, Zeit, Nutzungslimit — oder sagt ausdrücklich, dass er keine hat.* Ein Satz, kein Formular | **Ondo, 31.7., angenommen** | Blueprint 2c | **eingetragen** (Blueprint 0.4, Abschnitt 2c) |
| Arbeitsregel: **Belegen statt herleiten** — Codezeilen zitieren, nicht beschreiben | Ondo, 31.7. | Blueprint 2c | **eingetragen** (Arbeitsregel H) |
| Arbeitsregel: **Prüfen, bevor behauptet wird, ein Dokument sei veraltet** | 31.7. | Blueprint 2c | **eingetragen** (Arbeitsregel I) |
| **Übergabe-Protokoll** als Tabelle (wer an wen, welches Verfahren, wie viele Kontrollfragen richtig) | **Ondo, 31.7.** | PROJEKT-STATUS | **eingetragen** (Abschnitt Übergabe-Protokoll) |
| Drei-Ebenen-Trennung | ChatGPT, 23.7. | Ondo-Core | beschlossen |
| Übergaberegel (Chat-Übergabe) in einer Fassung für ChatGPT | 30.7. | Blueprint | beschlossen |
| Beförderungskriterium (c) | ChatGPT, 23.7. | Blueprint | offen |
| Verfassungsfrage GitHub Actions („kein Server") | 23.7., teilweise geklärt Ondo 7.9.2026 | Blueprint | **teilweise geklärt** (Blueprint 0.83, Abschnitt 10) — Knopfdruck-Variante verletzt Grenze 1 nicht, zeitgesteuerte Variante bleibt offen |
| Rollenmodell | ChatGPT, 23.7., entschieden Ondo 7.9.2026 | Blueprint | **eingetragen** (Blueprint 0.83, Abschnitt 2e) |

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
| **Sprachdateien von Hand** (drei Sprachen, DE/FR/EN, von `pruefe.py` Abschnitt 13 bei jedem Lauf selbst gezählt und auf Gleichheit geprüft — **die Zahl selbst steht nur in `STAND.md`, Abschnitt „Versionen"**, Punkt 45). *🔴 Berichtigt 2.9.2026: Hier stand „229 Schlüssel × 3 Sprachen, Stand 28.8.2026" — seit v19.8.9 überholt, richtig sind 234. Die Zahl ist bewusst **nicht** auf den neuen Wert gesetzt, sondern durch den Verweis ersetzt worden: Sie war hier ein zweiter Ort für dieselbe Tatsache und wäre an dieser Stelle erneut unbemerkt gealtert. `pruefe.py` hat es nicht gefangen — Abschnitt 6 prüft nur das Muster `**Sprachschlüssel: N**`, diese Tabellenzelle schrieb die Zahl anders.* | Dreifache Pflege bei jeder neuen Beschriftung. Rückgriff bleibt Punkt 19 | niedrig |
| **Seed-Daten fest im Code** (WM-Wetten vom Juli) | Ballast bei jedem Start | niedrig |
| **Kein automatischer Test** | Jede Änderung wird nur von Hand geprüft | mittel → Punkt B wäre der erste Schritt |
| **Gemini-Kaskade komplex** | Funktioniert, aber schwer zu durchschauen bei Fehlern | niedrig |
| **Die Dokumente selbst** | Das Einlesen kostet einen neuen Chat etwa die Hälfte seines Arbeitsspeichers | **NEU 31.7.** → Punkt 18 |
| **Löschen ohne Rückfrage** — `delBet()` und `logLoeschen()` löschen sofort und endgültig, während die zwei anderen unumkehrbaren Schritte der App vorher fragen (`korrFAnwenden()`, `datenLaden()` über `confirm()`) | Auf dem iPhone genügt ein Fehltipp. Seit Fassung 97 ist `state.kiProtokoll` der **Evidence Ledger** — ein Fehltipp löscht einen Beleg, auf dem das Lernen aufsetzen soll. Behebung: dieselbe `confirm()`-Rückfrage wie an den zwei vorhandenen Stellen; Kosten kein Geld, keine Laufzeit, zwei Sprachschlüssel | **✅ BEHOBEN 11.9.** in v19.8.28 (Fassung 101) — beide fragen jetzt, mit dem Spielnamen in der Frage |
| ~~**Speichergrenze wird nirgends sichtbar**~~ — scheitert `localStorage.setItem`, zeigt `save()` 1,5 Sekunden „nicht gespeichert" und sonst nichts; wie voll der Speicher ist, nennt die App nie | `kiProtokoll` wächst mit jeder Vorhersage, `refRoh` dreimal so schnell (schon bei Punkt 64 vermerkt). | **✅ BEHOBEN 11.9.** in v19.8.28 (Fassung 101) — belegter Speicher steht in der Sicherungskarte, ein gescheitertes Speichern lässt einen roten Balken stehen statt ihn nach 1,5 Sekunden zu verlieren. **Der Sichtbar-Fund führte 12.9.2026 direkt zum echten Beleg** (Fehlschlag bei 2.726 KB, v19.8.29) **und dann zur eigentlichen, dauerhaften Lösung: Umstieg auf `IndexedDB`, v19.8.30 (Fassung 103) — kein Löschen nötig, siehe Backlog-Punkt 76** | erledigt |

---


## 🟢 Prio 3 — notiert, kein Termin


**13. Sportarten-Erweiterung** · *Idee 20.7., Ondo* · **Status: Idee** — Kandidat 1: Tennis. Pro Sportart eigene Abrechnungsregel und **getrennte Statistik**. Fußball liefert bis Ende September genug Spiele.

**14. Tiefenanalyse-Knopf** · *Idee Chat 1, Claude* · **Status: Idee** — zurückgestellt zugunsten Einfachheit

**15. Vier-Chat-Werkzeug (Poe)** · *Idee 23.7., Claude* · **Status: Idee** — Gratis-Tarif reicht nicht, realistisch ab ~5 $/Monat

**16. Wettarten ausschreiben oder erklären** · *Idee 10.7., Claude* · **Status: Idee** — Anlass war Ondos Frage „Was heißt BTTS?". Heute geringer Bedarf, weil nur drei feste Märkte in Klartext angezeigt werden

**17. DeerFlow-artiger Harness als Backend** · *Idee 15.7., Ondo* · **Status: Idee, Zukunftsregal** — Braucht einen dauerhaft laufenden Rechner, fällt heute durch die Zwei-Probleme-Regel

---