# ONDO CONTROL — STAND
*Die aktuelle Wahrheit. Stand: 12.9.2026, Fassung 106, v19.8.31*

> **Wegweiser (neu am 15.8.2026, Punkt 18).** Dieses Dokument hiess bis heute `PROJEKT-STATUS.md` und war rund 200 KB gross. Es ist getrennt worden:
> - **`STAND.md`** — was heute gilt. Wird beim Start **vollstaendig** gelesen.
> - **`CHRONIK-2026-08.md`** — die Tagesabschnitte vom 3. bis 15. August, das Uebergabe-Protokoll und die Aenderungsvermerke. Wird **nur auf Zuruf** gelesen.
> - **`CHRONIK-2026-07.md`** — alles bis einschliesslich 31. Juli. Wird **nur auf Zuruf** gelesen.
>
> **Nachtrag vom Nachmittag: Punkt 18 ist fertig.** Auch der Backlog und der Blueprint sind getrennt — `BACKLOG-ARCHIV.md` und `BLUEPRINT-PROTOKOLL.md` sind ebenfalls Archiv und werden nur auf Zuruf gelesen. **Pflichtlektuere beim Start: `STAND.md`, `Ondo-Control-Backlog.md`, `Blueprint.md`, `Ondo-Core-Architektur.md` — zusammen rund 116 KB statt 452 KB.** Verfassung und Arbeitsregeln bleiben ausdruecklich Pflicht.
>
> **Es wurde nichts geloescht, nur verschoben.** Der Beweis steht in `pruefe.py`, Abschnitt 10: Jede Zeile des Originals kommt in genau einer der drei Dateien vor, unveraendert.
>
> **Die Reihenfolge in dieser Datei ist neu gesetzt** — Messstand und Versionen stehen vorn, nicht mehr dort, wo sie im alten Dokument standen. **Das ist Absicht und der einzige Unterschied zur Vorlage.** In den beiden Chronikdateien ist die Reihenfolge unveraendert; `pruefe.py` Abschnitt 9b prueft das.
>
> **Ein Ort je Tatsache (Punkt 45).** Kennzahlen stehen ab jetzt an genau einer Stelle. Wo eine Zahl frueher wiederholt wurde, steht jetzt ein Verweis. Die Zahl der beschlossenen, nicht gebauten Punkte steht **nur im Backlog**.

---

> **Zur Datierung:** Die Kalibrierungszahlen im Abschnitt „Aktueller Messstand" sind am **4.9.2026 aus den Bildschirmfotos der App abgelesen** — Sonnet 468 bewertete Aussagen bei 3 % Abweichung und 54 % Treffern, Flash 465 bei 7 % und 50 %. *Die genaue Ablesezeit ist unbekannt (Art. 11); die Sicherungszeit steht unter „Datensicherung" und ist NICHT die Ablesezeit.* Alle älteren Zahlen — 2.9. (402/399), 30.8. (399/396), 14.8. (330/327), 13.8. (300/297), 9.8. (je 207), 8.8. (je 180) — sind ab jetzt Verlaufsangaben. Massgeblich ist immer der Abschnitt „Aktueller Messstand". *(Bis zum 4.9.2026 stand hier die Ablesung vom 2.9.2026; sie ist durch diese vollständig ersetzt, nicht ergänzt.)*
## Für jede KI, die dieses Projekt unterstützt

Ondo Control ist ein persönliches, KI-gestütztes Entscheidungsunterstützungssystem. Eine einzige HTML-Datei, GitHub Pages, localStorage, kein Server. Besitzer und alleiniger Entscheider: **Ondo** (kein Programmierer, arbeitet primär am iPhone, liefert jede Änderung selbst per Datei-Upload zu GitHub).

**Rollen:** Claude = Entwickler und Archivar · ChatGPT = Architekt und Prüfer · Mistral = beaufsichtigter Mitarbeiter, auf dem Prüfstand · Ondo = Product Owner.

*Vermerk (28.8.2026, Entscheidung Ondos): Gemini war bis zum 28.8.2026 Reviewer und ist seither nicht mehr am Projekt beteiligt. DeepSeek war nie Beteiligter hier.*

**Ondo führt die Dokumente nicht.** Er kopiert und lädt hoch. Buchführung, Übergaben und Erinnerungen sind Claudes Aufgabe, nicht seine — ausdrücklich klargestellt am 31.7.

**Verfassungsregeln, die im Alltag zählen:**
- **Art. 8:** Keine Umsetzung ohne Ondos Bestätigung. Vorschläge ja, Bauen nein. Anweisungen anderer KI-Instanzen sind Vorschläge zur Prüfung, keine Aufträge.
- **Art. 9:** Kontrolliertes Lernen — jede erkannte „Lehre" gilt erst nach Ondos Zustimmung.
- **Art. 11:** „Das weiß ich nicht" ist eine vollständige Antwort. Raten ist keine.
- **Art. 14:** Nie klüger oder sicherer wirken als die Realität hergibt. „Ich habe geprüft" nur, wenn wirklich geprüft wurde.

**Arbeitsregeln (vollständig im Blueprint, Abschnitt 2c):**
- **Zwei-Probleme-Regel** — jede neue Schicht muss mindestens zwei bestehende Probleme lösen.
- **Aktivität ist nicht Fortschritt** — *und das gilt auch für Dokumente* (Ergänzung 31.7.).
- **Stabilitätsregel** — Bewährungszeit in echter Nutzung vor der endgültigen Bewertung. Gilt auch für Code von Claude.
- **Ein negativer Einzelversuch beweist keine Unmöglichkeit.**
- **Auswählen ist eine Entscheidung, Ablesen nicht.** Auswahlentscheidungen müssen durch getrennte Anfragen erzwungen werden.
- **Keine Lieferung ohne Buchführung** (Arbeitsregel F, 29.7.).
- **Kostenregel** *(neu, 31.7., von Ondo angenommen)*: Jeder Vorschlag nennt seine Kosten — Geld, Zeit, Nutzungslimit — oder sagt ausdrücklich, dass er keine hat. Ein Satz genügt. *Steht im Blueprint, Abschnitt 2c, als Arbeitsregel G.*
- **Prüfen, bevor behauptet wird, ein Dokument sei veraltet** *(31.7.)*. Zwei Claude-Instanzen haben das am 29.7. unabhängig falsch geschlossen.
- **Belegen statt herleiten** *(31.7.)*. Eine plausible Erklärung ist keine geprüfte Erklärung. Codezeilen werden zitiert, nicht beschrieben.

**Master-Dokumente im Repo:** `Blueprint.md` · `Ondo-Core-Architektur.md` · `Ondo-Control-Backlog.md` · dieses Dokument.

---

## 🔴 ACHT FEHLERARTEN CLAUDES — STEHENDE WARNUNG FÜR JEDEN NEUEN CHAT

*Aufgestellt am 8.8.2026, 12:05 Uhr von Chat 12 auf Ondos Verlangen, nach einem Vormittag mit **vierzehn eigenen Fehlern**. Ondo hat jeden einzelnen gefunden, nicht Claude. Diese Liste ist keine Selbstanklage, sondern eine Prüfliste: Es sind Fehlerarten, keine Einzelfälle, und jede ist an diesem Tag mindestens einmal aufgetreten.*

| # | Fehlerart | Wie sie an diesem Tag aussah | Gegenmittel |
|---|---|---|---|
| **C1** | **Zahl hergeleitet statt abgelesen** | Messstand als „150" fortgeschrieben (135 + 15), richtig waren **180** — die zehn am Morgen des 7.8. übernommenen Ergebnisse waren übersehen. | **Jede Messzahl kommt aus der App oder aus dem Log.** Nie aus einer älteren Zahl plus eigener Rechnung. Wenn kein Bildschirmfoto vorliegt: danach fragen oder die Zahl offen lassen. |
| **C2** | **Zeitstempel erfunden** | **Dreimal.** „07:00" im Prüferbericht (es war 06:28) · „08:10" im Kopf (es war 08:04) · „11:55" ursprünglich als „08:35" (es war 11:58, **drei Stunden daneben**). Muster: Uhr abfragen, dann eine spätere Zahl dazuerfinden. | **Uhr unmittelbar vor dem Schreiben abfragen, nie schätzen.** Die Systemzeit des Rechners ist unbrauchbar — sie läuft in UTC und lag um zwei Stunden daneben. |
| **C3** | **Neuen Abschnitt geschrieben, Folgewirkung woanders nicht geprüft** | Abschnitt „Aktueller Messstand" blieb auf 135 stehen · Backlog-Kopf blieb auf dem 7.8. · Kopfzeile blieb auf einer alten Uhrzeit. | **Nach jeder Änderung die Dokumente nach Zahlen durchsuchen, die den Stand beschreiben** — Version, Fassung, Uhrzeit, Messzahl. Historische Abschnitte bleiben unberührt. |
| **C4** | **Widerspruch im selben Dokument stehen lassen** | Unterpunkt 4 behauptete „Test A: 39 von 39 ohne Ausnahme", Unterpunkt 7 belegte drei Ausnahmen. Richtig ist **92 von 95**. | **Wenn ein neuer Befund eine ältere Aussage berührt, die ältere im selben Durchgang berichtigen** — nicht nur den neuen Befund danebenstellen. |
| **C5** | **Zugesagtes nicht ausgeführt** | Die Anpfiffzeit-Prüfung wurde angekündigt und erst auf Nachfrage gemacht · die zweite Prüferrunde wurde vollständig vergessen — das Ergebnis, für das die frischen Chats überhaupt eingerichtet wurden. | **Zusagen am Ende jeder Antwort gegenprüfen.** Was in einer Antwort versprochen wurde, wird in der nächsten eingelöst oder ausdrücklich vertagt. |
| **C6** | **🔴 Prüfung, deren Sollwert vom Geprüften stammt** | Das Prüfskript enthielt `STAMP = "08:35 Uhr"` — Claudes erfundene Uhrzeit. Es prüfte sie gegen sich selbst und meldete **„alles sauber"**. | **Ein Prüfer darf seinen Sollwert nie vom Geprüften bekommen.** `pruefe.py` bricht jetzt ab, wenn keine abgelesene Uhrzeit übergeben wird. |
| **C7** | **Konvention des Dokuments gebrochen** | Neun „Nachträge" auf Fassung 12 gestapelt, statt Fassung 13 zu eröffnen — obwohl die Fassungen 5 bis 12 die Handhabung eindeutig zeigen. Im Kopf stand „Fassung 12 mit neun Nachträgen". | **Vor dem Ändern eines Dokuments ansehen, wie es bisher geführt wurde.** Die Handhabung steht in seiner eigenen Geschichte. |
| **C8** | **Zu starke Verallgemeinerung aus wenigen Fällen** | „Flash dreht nie" (falsch: zweimal) · „39 von 39 ohne eine einzige Ausnahme" (falsch: drei Ausnahmen) · die Regel „alle Einträge mit Null im Tipp umdrehen" **hätte einen richtigen Eintrag zerstört** (Motherwell, 23.7. — zweite Fehlerart). | **Vor jeder Regel, die auf Daten angewandt wird, die Daten vollständig auszählen.** Nicht aus dem Ausschnitt der letzten Tage schliessen. |

**Eine neunte, andersartige:** Arbeitsregel F („jede Entscheidung sofort eintragen") wurde zu wörtlich genommen — Claude gab Ondo an einem Abend **dreimal** Dateien zum Hochladen. *Eintragen heisst in die Datei schreiben, nicht sie Ondo in die Hand drücken.* Gesammelt wird bis zum Ende eines Arbeitsblocks, aber **nie über das Ende eines Chats hinaus**.

**Das Werkzeug dagegen:** `pruefe.py` prüft Kopf-Zeitstempel gegen eine übergebene Ablesung, Abschnittsnummern auf Lücken, Querverweise auf Auflösbarkeit, veraltete Messzahlen ausserhalb von Korrekturvermerken, Fassungs- und Versionsnummern über Kopf, Änderungsnotiz und Protokoll hinweg, sowie eine Liste von Pflichtinhalten. **Vor jeder Dateiausgabe laufen lassen, mit frisch abgelesener Uhrzeit als Parameter.**

**Und der wichtigste Satz zum Schluss:** Alle vierzehn Fehler wurden von **Ondo** gefunden. Keiner von Claude. Wer diese Liste liest und daraus schliesst, er selbst mache solche Fehler nicht, hat sie nicht verstanden.

---

## Messmethodik und Interpretationsgrenzen (Backlog-Punkt 49, gebaut 27.8.2026, seit 30.8.2026 in `BACKLOG-ARCHIV.md`)

*Ein neuer Chat kann aus richtigen Zahlen eine falsche Empfehlung ableiten, wenn die Zahlen dastehen und ihre Grenzen nicht. Dieser Abschnitt holt das nach — er entscheidet nichts neu, er schreibt auf, was der Code bereits tut (`beta.html`, Funktionen `maerkteBauen` und `calcKalibrierung`).*

**Die drei Märkte:**
1. **Sieger (1x2):** Heimsieg / Auswärtssieg / Remis, aus dem getippten Ergebnis abgeleitet.
2. **Über/Unter 2,5 Tore:** Ja/Nein-Markt.
3. **Beide treffen (BTTS):** Ja/Nein-Markt — **seit v19.8.0 (Punkt F) wird das Gehirn direkt gefragt**, die Behauptung wird nicht mehr aus dem Tipp abgeleitet. Das war der Fehler, der zum Schnitt unten führte.

**Die Dreh-Mechanik bei den beiden Ja/Nein-Märkten:** Liegt die genannte Prozentzahl unter 50 %, dreht die App die Behauptung auf die Gegenseite um (100 minus die Zahl) und markiert den Eintrag als „gedreht". Grund: „Ja zu 42 %" heisst inhaltlich „Nein zu 58 %" — die gespeicherte Zahl ist immer die, an die das Gehirn wirklich glaubt. **Eine gedrehte Aussage bedeutet nicht, dass ein Gehirn seine Meinung geändert hat.**

**Wie die Kalibrierung gerechnet wird:** Alle bewerteten Aussagen werden in sechs feste Bänder einsortiert (1–49, 50–59, 60–69, 70–79, 80–89, 90–99 %). Je Band: **behauptet** = Durchschnitt der genannten Prozentzahlen, **echt** = Anteil der tatsächlich eingetroffenen Aussagen in diesem Band. Die **Abweichung** (die Kopfzahl, z. B. „4 %") ist der nach Bandgrösse gewichtete Durchschnitt von |behauptet − echt| über alle Bänder.

**Was in den Nenner zählt:** nur Aussagen aus der Ära „v19", nur Märkte mit Status „richtig" oder „falsch". **Geparkte Einträge erreichen diesen Status nie** — der Prüf-Vorgang lässt geparkte Einträge aus, sie bleiben auf „offen" stehen und fliessen nie in die Kalibrierung ein.

**Der Brier-Score wird nirgends berechnet** — weder im Code noch in der Anzeige (siehe unten, „Was NICHT geschlossen werden darf").

**Rohdatenstand:** Die Zahlen im Abschnitt „Aktueller Messstand" stammen aus den Bildschirmfotos vom 2.9.2026 (siehe „Zur Datierung" oben). *(Bis zum 2.9.2026 stand hier der 14.8.2026 — berichtigt, weil der Messstand ersetzt wurde.)*

**Der Schnitt bei „beide treffen":** Werte vor und ab v19.8.0 sind bei diesem Markt nicht vergleichbar (siehe „Versionen").

**Anpfiffzeiten:** waren an mehreren Tagen nachweislich falsch protokolliert (siehe „Die Spielliste — drei Fehlerarten", S2).

**Was aus diesem Messstand NICHT geschlossen werden darf:**
- Kein Brier-Score — weder abgelesen noch selbst gerechnet, in keiner Zahl dieses Dokuments enthalten.
- Eine niedrige Abweichung heisst nicht „öfter richtig" — das ist die Trefferquote, eine andere Zahl.
- Bänder mit wenigen Aussagen (z. B. Flashs 80–99 %) sind statistisch bedeutungslos.
- Werte vor und nach dem Schnitt bei „beide treffen" sind nicht vergleichbar.
- Anpfiffzeiten sind teilweise falsch protokolliert — Grenzfälle der 2,5-Stunden-Regel des Schiedsrichters sind entsprechend unsicher.
- Geparkte Einträge fehlen vollständig — wie sich das auf sehr hohe Zuversichtsstufen auswirkt (wo am meisten geparkt wird), ist unbekannt, nicht vernachlässigbar.
- Ein „gedrehter" Eintrag ist keine Meinungsänderung, nur eine ursprüngliche Zahl unter 50 %.

---

## Aktueller Messstand (abgelesen aus den Bildschirmfotos der App am 4.9.2026)

*Zur Herkunft (Art. 14): **Alle Zahlen dieses Abschnitts sind aus der Anzeige der App abgelesen, keine ist gerechnet.** Der Abschnitt wird immer vollstaendig ersetzt, nie in Teilen. Quelle: Bildschirmfotos der App mit der Kopfzeile „Freitag, 4. September 2026 — v19.8.13 BETA". Die genaue Ablesezeit ist unbekannt (Art. 11); die Sicherungszeit steht unter „Datensicherung" und ist NICHT die Ablesezeit.*

**Bestand:** **403 Vorhersagen** und 6 Wetten im Speicher — **unverändert gegenüber dem 2.9.2026**, weil die seither übernommenen Spiele bereits bestehende, bisher offene Einträge waren, keine neuen Vorhersagen (Ondo, 4.9.2026). *(Die Sicherungszeit steht nur unter „Datensicherung" — Punkt 45, ein Ort je Tatsache.)*

| | bewertete Aussagen | Kalibrierungs-Abweichung | Trefferquote |
|---|---|---|---|
| Sonnet | 468 | **3 %** | 54 % (253/468) |
| Flash | 465 | **7 %** | 50 % (233/465) |
| gesamt | 933 | — | 52 % (486/933) |

**Sonnets Verteilung** *(Anzahl je Stufe, in Klammern behauptet/wirklich)*: 1–49 % → 78 (43/36) · 50–59 % → 295 (54/55) · 60–69 % → 61 (63/67) · 70–79 % → 32 (73/63) · 80–89 % → 0 · 90–99 % → 2 (94/100)

**Flashs Verteilung** *(Anzahl je Stufe, in Klammern behauptet/wirklich)*: 1–49 % → 74 (43/28) · 50–59 % → 212 (55/51) · 60–69 % → 147 (63/56) · 70–79 % → 25 (72/56) · 80–89 % → 5 (83/80) · 90–99 % → 2 (91/100)

**Entschlossenheit:**

| | Ø Abstand von 50 | Anteil ab 60 % |
|---|---|---|
| Sonnet | 6,9 | 20 % (95/468) |
| Flash | 8,8 | 38 % (179/465) |

**Gepaarter Vergleich (Backlog-Punkt 51, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) — 161 gepaarte Spiele:**

| Markt | Spiele | Nur Sonnet | Nur Flash | Beide richtig | Beide falsch |
|---|---|---|---|---|---|
| Sieger | 154 | 12 | 12 | 59 | 71 |
| Über/Unter 2,5 Tore | 154 | 22 | 17 | 64 | 51 |
| Beide treffen | 154 | 17 | 6 | 75 | 56 |

*1 Spiel ist nicht eindeutig zuordenbar und wird nicht mitgezählt (Anzeige der App). **Warum je Markt nur 154 der 161 gepaarten Spiele auftauchen, ist weiterhin nicht geklärt** (Art. 11) — 1 Spiel ist durch die Nichtzuordenbarkeit erklärt, die restlichen 6 nicht. Dieselbe unerklärte Lücke wie beim vorigen Stand (dort 132 von 154), diesmal in anderer Grösse — die Differenz ist abgelesen, nicht erklärt.*

**Wetten:** Zahlen zu dieser Ablesung nicht mitgeliefert — zuletzt bekannt (2.9.2026): Saldo −19,51 €, 6 abgeschlossen, 0,00 € offen, Trefferquote 17 % (1 von 6), Gesamt-Bilanz −29,75 €. Nicht als aktueller Stand wiederholt, um keine falsche Aktualität vorzutäuschen (Art. 14).

**🔴 Berichtigt (12.9.2026): Diese Wetten-Zahlen sind überholt, nicht mehr der aktuelle Stand.** Ondo hat am 12.9.2026 die gesamte Wetten-Historie in der App gelöscht und startet bei den Wetten neu bei 0 (Konto und Tipico-Kontostand auf 0 gesetzt, über das neue Korrigieren-Feld, `beta.html` v19.8.31). Ein neuer Messstand für Wetten ist erst wieder möglich, sobald Ondo neue Wetten einträgt — bis dahin ist „das weiss ich nicht" die richtige Antwort (Art. 11), kein Ersatzwert erfunden.

**🔴 Sonnet hat zum ersten Mal eine bewertete Aussage ab 80 %** — zwei Aussagen in der Stufe 90–99 %, beide eingetroffen. In allen bisherigen Messständen stand hier „Sonnet hat weiterhin KEINE bewertete Aussage ab 80 %"; das gilt ab dieser Ablesung nicht mehr. Bei nur zwei Aussagen ist daraus **nichts** über Sonnets Verhalten bei hoher Zuversicht ableitbar (zu kleine Stichprobe) — nur der Umstand selbst wird festgehalten. Die Verzerrung durch geparkte Einträge besteht unverändert und gehört neben jede Aussage über beide Gehirne bei hoher Zuversicht.

**Ehrliche Einordnung (Art. 14):**
- **Die Kalibrierungsabweichung hat sich bei beiden Gehirnen wieder gegenläufig entwickelt** — Sonnets Abweichung ist von 6 % (2.9.) auf 3 % **gefallen**, Flashs von 5 % auf 7 % **gestiegen**. **Sonnet steht damit wieder besser da als Flash**, nachdem am 2.9. zum ersten Mal das Gegenteil galt. Die Zahlen sind auf **mehrere Prozentpunkte** genau, nicht auf einen; ein Unterschied dieser Grösse liegt weiterhin im Rauschen (Backlog-Punkt 35).
- **Beide Trefferquoten sind leicht gesunken:** Sonnet von 57 % auf 54 %, Flash von 52 % auf 50 %. Die kombinierte Trefferquote (52 %) ist eine eigene, direkt abgelesene Zahl, keine eigene Rechnung.
- **Sonnet legt sich weiterhin am häufigsten zwischen 50 und 59 Prozent fest:** 295 von 468 Aussagen (63 %), fast derselbe Anteil wie am 2.9. (64 %).
- **Flashs grösster Einzelposten bleibt die Stufe 60–69 %:** behauptet 63, eingetroffen 56. *(Die Anzahl steht in der Verteilungszeile oben und wird hier nicht wiederholt — Punkt 45.)*
- Zeilen mit sehr wenigen Aussagen (Sonnet 90–99 %, Flash 80–89 % und 90–99 %) sind **bedeutungslos**.
- **Ungleiche Anzahl, unverändert:** Sonnet 468, Flash 465 — dieselbe Differenz von drei wie beim vorigen Stand. Woher sie kommt, ist weiterhin **nicht geklärt** (Art. 11).
- **Entschlossenheit:** Sonnets Anteil ab 60 % bleibt bei 20 %, jetzt bei grösserer Grundgesamtheit. Flashs Anteil ist von 41 % auf 38 % gesunken.
- **🔴 Berichtigt (10.9.2026):** Dieser Satz stimmt seit `beta.html` v19.8.21 nicht mehr — der Brier-Score und eine Streuungsangabe sind jetzt Teil der Kalibrierungsanzeige (Backlog-Punkt 34/35, gebaut). Diese Ablesung selbst ist vom 4.9.2026, vor dem Bau — beide Zahlen fehlen hier deshalb weiterhin, nicht weil sie unberechenbar wären, sondern weil der nächste Messstand noch nicht abgelesen ist (Fehlerart C1 — nicht aus dem Code herleiten, was nur ein Bildschirmfoto belegen kann).

**Vorherige Stände:** *2.9.2026 — Sonnet 402 bei 6 % und 57 %, Flash 399 bei 5 % und 52 %. 30.8.2026 — Sonnet 399, Flash 396 bewertete Aussagen; **Abweichung und Trefferquote sind für diesen Tag nicht überliefert** (Art. 11, Fehlerart C1 — nicht aus den Nachbarwerten herleiten). 14.8.2026 — Sonnet 330 bei 4 % und 55 %, Flash 327 bei 8 % und 50 %. 13.8. nach der Berichtigung — 300/297. 9.8. — je 207. 8.8. — je 180. 6.8. — je 135, 5 und 9. 3.8. — je 87, 4,8 und 8,6.*

---

**Was die Berichtigung bewirkt hat — Verlaufsangabe vom 13./14.8.2026, KEIN aktueller Stand.**

*Dieser Block gehört zur rückwirkenden Berichtigung vom 13.8.2026 und bleibt als Verlaufsangabe stehen. Er beschreibt einen Vergleich bei damals 330/327 Aussagen und sagt nichts über den Stand vom 2.9.2026 aus.*

| | vorher (16:32 Uhr) | nachher (22:20 Uhr) |
|---|---|---|
| Sonnet Trefferquote | 52 % | **55 %** |
| Sonnet 60–69 % wirklich | 58 % | **71 %** |
| Sonnet 70–79 % wirklich | 48 % | **67 %** |
| Sonnet Abweichung | 4 % | **4 %** |
| Flash | unverändert | unverändert |

- **🔴 Die Berichtigung hat die Kalibrierung NICHT verbessert.** Sie stand vorher wie nachher bei 4 %. Der Fehler wurde **verschoben, nicht beseitigt**: Die Stufe 70–79 % ging von 25 Punkten Abweichung auf 6 zurück, die Stufe 60–69 % kippte von 5 Punkten zu wenig auf 8 Punkte zu viel.
- **Die frühere Aussage „Sonnet überschätzt sich bei hoher Zuversicht" beruhte auf dem Rechenfehler und ist damit hinfällig.**
- Drei Gegenproben bestätigten die Berichtigung damals: +10 Treffer statt +16 (13 auf *falsch*, 3 auf *richtig*) · eine Aussage wechselte die Stufe (Motherwell, 42 → 58 %) · Flash blieb in jeder Zahl unverändert.

## Versionen

- **Stabil: v17** (`OndoControl.html`, version.json = 17) — **seit dem 17. Juli unverändert**
- **Beta: v19.8.31** (`beta.html`, geliefert 12.9.2026) — **🔴 Korrigieren-Felder für Konto/Tipico-Stand
  gebaut, KI-Module von „Finanzen" nach „Mehr" verschoben.** Auftrag Ondo, nachdem er die
  gesamte Wetten-Historie gelöscht hat: „Korrigieren-Feld bauen" (für `state.eingezahlt` und
  `state.ausgezahlt`, nach demselben Muster wie das bestehende Startbilanz-Feld — Zahl
  eintragen, sofort gespeichert, ersetzt den bestehenden „+HINZUFÜGEN"-Weg nicht) und „Wenn es
  geht dann unter mehr" (Kalibrierung, Observation Layer und gepaarter Vergleich standen
  bisher unter Finanzen, jetzt unter Mehr, bei den übrigen KI-/Modelleinstellungen — reine
  Verschiebung der Anzeige, keine Rechnung geändert). Einzelheiten zu den zwei neuen
  Backlog-Punkten (77 „Trainingsraum", 78 „Kombi-Wette-Verknüpfung") stehen im Backlog, neuester
  Fassungsabschnitt (Punkt 45). **3 neue Sprachschlüssel** (`depKorrLabel`, `wdKorrLabel`,
  `korrHinweis`; 303 → 306). Kein Schnitt in der Messreihe. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.30** (`beta.html`, geliefert 12.9.2026) — **🔴 Umstieg von `localStorage` auf
  `IndexedDB` — dauerhafte Lösung statt Warngrenze.** Auftrag Ondo, wörtlich: „Ich will eine
  dauerhafte Lösung, keine Dateien Löschen!!" Anlass: Ondo bestätigt genug freien
  iPhone-Speicherplatz — das Problem lag nicht am Gerät, sondern an der festen, kleinen Grenze,
  die Safari `localStorage` je Webseite zuteilt (belegt: Fehlschlag bei 2.726 KB, v19.8.29).
  **Was sich ändert:** Alle Lese-/Schreibzugriffe auf die Messdaten laufen jetzt über
  `IndexedDB` — einen zweiten, in jedem modernen Browser eingebauten Speicherbereich, der
  einen Anteil des freien Geräte­speichers bekommt, um Grössenordnungen mehr als
  `localStorage`. **Kein Löschen nötig**, wie ausdrücklich verlangt.
  **Wie das technisch geht, ohne die Migrationslogik in `load()` anzufassen:** Zwei neue
  Helferpaare — `idbOeffnen()/idbLesen()/idbSchreiben()` sprechen direkt mit `IndexedDB`;
  `speicherLesen()/speicherSchreiben()` legen sich davor und fallen bei jedem Fehler
  (IndexedDB fehlt, ist blockiert, oder — beim allerersten Start nach diesem Update — noch
  leer) auf das alte `localStorage` zurück. `load()` und `save()` rufen ab jetzt nur noch
  diese zwei Funktionen auf; **jede der acht bestehenden `seedV`-Migrationen bleibt inhaltlich
  wortgleich**, nur ihr abschliessendes Sichern wartet jetzt auf das neue Paar.
  **`load()` musste async werden**, weil `IndexedDB` nur asynchron arbeitet (Ergebnis kommt
  über ein sogenanntes Promise etwas später zurück, nicht sofort wie bei `localStorage`) — der
  Programmstart am Dateiende wartet jetzt auf `load()`, bevor zum ersten Mal gezeichnet wird.
  Für jede aufrufende Stelle im übrigen Code ändert sich nichts: `save(); render();` bleibt
  überall unverändert aufrufbar, weil `render()` nie vom Ergebnis des Speicherns abhängt.
  **Sicherheitsnetz bleibt vollständig erhalten:** Scheitert am Ende auch `IndexedDB`
  *und* der `localStorage`-Rückfall (z. B. weil beide Speicher wirklich voll sind), erscheint
  derselbe rote Dauerbalken wie in v19.8.28/29 — dieser Fall ist jetzt nur ungleich
  unwahrscheinlicher geworden.
  **Ein echter Fund im eigenen Testaufbau dabei, behoben:** Ohne eine zusätzliche Zeile hätte
  `load()` nur dann in den neuen Speicher geschrieben, wenn eine der acht Migrationen
  tatsächlich etwas ändert — bei praktisch jedem, der die App schon länger nutzt (`seedV`
  bereits auf dem neuesten Stand), wäre das **nie** der Fall gewesen, und die Übernahme in den
  grösseren Speicher hätte sich zufällig bis zur nächsten anderen Aktion verzögert. Jetzt
  schreibt `load()` am Ende **immer einmal**, unabhängig davon, ob eine Migration lief.
  **Die Speicheranzeige zeigt jetzt eine echte Zahl, keine Schätzung mehr:** Statt der
  bisherigen, geratenen Bytegrenze fragt `speicherQuote()` den Browser selbst über
  `navigator.storage.estimate()` — Teil der Storage-API, in Safari seit iOS 13 vorhanden —
  nach seiner **wirklichen** Grenze auf **diesem** Gerät. Kennt der Browser sie nicht, wird
  nur die reine Grösse angezeigt, keine erfundene Prozentzahl (Art. 14).
  **🔴 Wichtiger, unvermeidbarer Schritt für Ondo, einmalig:** Diese Umstellung kann nicht
  automatisch den Stand übernehmen, der jetzt nur im Arbeitsspeicher seines Browsers lebt und
  nie erfolgreich in `localStorage` geschrieben wurde (das ist exakt das Problem, das zu dieser
  Umstellung geführt hat) — ein Codeupdate erreicht kein laufendes Browserfenster rückwirkend.
  Nach dem Laden der neuen Version zeigt die App deshalb zunächst wieder den letzten
  **tatsächlich gespeicherten** (älteren) Stand. **Ondo muss danach einmalig seine zuletzt
  exportierte Sicherungsdatei über „Sicherung laden" einspielen**, damit der aktuelle Stand in
  den neuen, grossen Speicher gelangt — danach läuft alles automatisch weiter.
  **Verifiziert:** `node --check` bestanden · **31 neue Prüfungen** an den echten,
  herausgeschnittenen Funktionen gegen eine selbstgebaute, aber echt asynchrone
  IndexedDB-Nachbildung (Node kennt kein natives IndexedDB) — darunter der Vorrang von
  IndexedDB vor `localStorage`, der vollständige Rückfall bei fehlendem IndexedDB, der
  Doppel-Fehlschlag-Fall (beide Speicherwege scheitern → Alarm wie bisher), und eine
  Nachbildung von Ondos echtem 2.726-KB-Fall · die bestehenden **57** Prüfungen zu v19.8.28/29
  erneut gelaufen, davon 2 (die alte, jetzt gegenstandslose `SPEICHER_WARNGRENZE`-Prüfung)
  entfernt statt kaputt stehen gelassen, macht **121 Prüfungen insgesamt, alle bestanden** ·
  `pruefe.py`: ALLES SAUBER.
  **1 neuer Sprachschlüssel** (`speicherVon`; 302 → 303). **Kein Schnitt in der Messreihe** —
  reine Speichertechnik, keine gemessene Grösse ist betroffen. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.29** (`beta.html`, geliefert 12.9.2026) — **🔴 echter Beleg statt Schätzung: die
  Speicher-Warngrenze war zu hoch.** Ondo hat die neue Speicheranzeige aus v19.8.28 in echtem
  Einsatz getroffen — sein Browser lehnte das Speichern bereits bei **2.726 KB (2,7 MB)**
  ab (Bildschirmfoto, 12.9.2026, der rote Warnbalken stand bereits, „Belegter Speicher" zeigte
  genau diesen Wert im selben Moment). Die alte Warngrenze von 3 MB (v19.8.28, ausdrücklich als
  ungeprüfte, vorsichtige Schätzung benannt) lag damit **über** der echten Wand — die
  Frühwarnung „wird eng" wäre nie gekommen, der Balken erschien erst, als das Speichern
  bereits scheiterte. **Jetzt 2 MB**, mit echtem Sicherheitsabstand unter dem belegten
  Fehlschlag, nicht nur knapp darunter (Arbeitsregel H: jetzt mit Beleg statt Herleitung).
  **Ein Fund am eigenen Testaufbau dabei:** Der Trockentest zu v19.8.28 hatte
  `SPEICHER_WARNGRENZE` in der Testumgebung selbst hartcodiert auf 3 MB gesetzt, statt die
  echte Konstante aus `beta.html` zu übernehmen — die 55 Prüfungen liefen also unbemerkt gegen
  einen Test-Zwilling, nicht gegen den echten Wert. Behoben: Die Konstante wird jetzt wörtlich
  aus `beta.html` gezogen, wie der übrige Testcode auch. **Zwei neue Prüfungen bilden Ondos
  echten Fall nach** (2.726 KB, `eng` muss jetzt `true` sein — mit der alten 3-MB-Schätzung
  wäre das falsch gewesen). **Kein neuer Sprachschlüssel, kein Schnitt in der Messreihe.**
  `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.28** (`beta.html`, geliefert 11.9.2026) — **die drei Funde der Prüfung behoben
  und die Lernkette fertiggebaut: Backlog-Punkt 75, Teil 3, Observation Layer.**
  Auftrag Ondo: „mach bei allen Punkten was nötig ist damit es sauber läuft, bau einfach weiter".
  **Erstens, Backlog-Punkt 64 geschlossen (zweiter und dritter Fund, dieselbe Stelle):**
  `pruefAnwenden()` übernimmt jetzt **Halbzeit- und Verlängerungsstand** statt sie zu verwerfen —
  der Schiedsrichter lieferte sie, `refLaufPruefen()` rechnete sie gegen den Endstand,
  `pruefBlock()` zeigte sie Ondo vor dem Übernehmen, und dann gingen sie verloren. Eine **leere**
  Angabe entfernt das Feld, statt einen leeren Text zu speichern. Ausserdem wird
  `ergebnisQuelle` beim Überschreiben **entfernt**: Das Ergebnis kommt ab dann vom Lauf dieser
  App, die Kennzeichnung „von Hand eingetragen" wäre eine Falschangabe (Art. 14).
  **Zweitens, Rückfrage vor dem Löschen** in `delBet()` und `logLoeschen()` — mit dem Spielnamen
  in der Frage, damit sichtbar ist, **was** gelöscht wird, nicht nur **dass**.
  **Drittens, der Speicher wird sichtbar:** Ein gescheitertes Speichern verschwand bisher nach
  1,5 Sekunden; jetzt bleibt ein roter Balken über jeder Ansicht stehen, bis ein Speichern wieder
  gelingt, und meldet sich **einmal** mit einem Hinweisfenster (nicht bei jedem weiteren Klick).
  Die Sicherungskarte nennt den belegten Speicher in KB, **gemessen** an genau der Zeichenkette,
  die `save()` schreibt. **Die Warngrenze von 3 MB ist ausdrücklich selbst gesetzt, keine
  Browser-Tatsache** — was Safari auf Ondos iPhone wirklich zulässt, kann eine Code-Sitzung ohne
  dieses Gerät nicht feststellen (Art. 11).
  **Viertens, der Observation Layer (Lernkette Teil 3, Backlog-Punkt 75).** Neuer Block „Was die
  Daten sagen" in den Finanzen, unter der Kalibrierung. Er beantwortet die einzige Frage, die
  beim nächsten Tipp hilft — was sich bisher als wahr herausgestellt hat — und sagt ausdrücklich
  „zu wenig Daten", wo die Grundlage zu dünn ist. **Die Auflage aus `Ondo-Core-Architektur.md` 1c
  ist eingelöst und maschinell belegt:** `lernGrundlage()` schliesst geparkte Einträge und solche
  mit `refEinigkeit` (nur „2 von 3") aus — genau die zwei Felder, auf die die Auflage am
  11.9.2026 festgenagelt wurde. **Offen benannt:** Der Observation Layer rechnet dadurch auf
  einer **kleineren** Grundlage als die Kalibrierungsanzeige darüber; die Zahlen der zwei
  Bereiche dürfen abweichen, und das ist gewollt — dort wird gemessen, hier wird gelernt.
  Vier Beobachtungen: Selbsteinschätzung je Gehirn · schwächster Markt (ein Markt unter zehn
  Aussagen bestimmt das Urteil nicht) · **trägt hohe Zuversicht?** · Wetten aus einer Vorhersage
  gegen von Hand gesetzte. Die letzte schliesst den Bogen zum Decision Ledger und **fängt die bei
  Teil 2 benannte Stelle ab**: Eine Wette, deren `kiProtokollId` ins Leere zeigt, wird eigens
  gezählt und in **keine** der beiden Gruppen geschoben. Schwellen: ab 20 bewerteten Aussagen
  „belegt", ab 10 „Hinweis", darunter wird nichts behauptet.
  **Verifiziert:** `node --check` bestanden · Trockentest mit **66 neuen Prüfungen** an den
  echten, aus `beta.html` herausgeschnittenen Funktionen (55 an der Rechenlogik, 11 als
  Rauchtest am neuen Anzeigeblock — reiner Anzeigecode war bisher von keinem Test gedeckt), darunter der Beleg, dass geparkte und
  2-von-3-Einträge die Beobachtung nachweislich **nicht** verschieben, und dass ein zweites
  Scheitern beim Speichern kein zweites Fenster öffnet · die bestehenden **64** Prüfungen erneut
  gelaufen, alle weiterhin bestanden · `pruefe.py`: ALLES SAUBER. **Ein Fehlschlag im
  Prüfstand selbst offen benannt:** Vier Prüfungen scheiterten zunächst, weil in der
  Testumgebung der Speicherschlüssel `KEY` fehlte — ein Fehler des Prüfstands, nicht des Codes;
  eine zusätzliche Prüfung nagelt das jetzt fest, damit derselbe stille Fehlschlag nicht
  irgendwann als Codefehler gelesen wird. **23 neue Sprachschlüssel** (279 → 302).
  **Kein Schnitt in der Messreihe** — die Kalibrierungsrechnung ist unangetastet.
  `APP_VERSION` weiter 18.
- **🔴 Vollständige Prüfung von `beta.html`, 11.9.2026 (Fassung 100) — keine Codeänderung.**
  Ondos Auftrag: „Beta vollständig und gründlich auf Fehler /Lücken komplett prüfen, wenn alles
  perfekt ist, dann weiter bauen." Geprüft wurde die ganze Datei (3764 Zeilen, 139 Funktionen,
  279 Sprachschlüssel je Sprache), nicht nur das zuletzt Gebaute. **Kein Codefehler gefunden.**
  Gefunden wurde ein **Widerspruch in der eigenen Buchführung** (Fehlerart C4): Die Schema-Tabelle
  in `Ondo-Core-Architektur.md` 1c beschrieb `ergebnisHalbzeit`/`ergebnisVerl` als „vom
  Schiedsrichter nachgetragen"; `pruefAnwenden()` schreibt aber ausschliesslich
  `ergebnisHeim`/`ergebnisGast`, und der Backlog führt genau das seit Punkt 64 als offenen
  Befund. Berichtigt in `Ondo-Core-Architektur.md` Fassung 0.7. **Drei Lücken benannt, keine
  behoben** (Art. 8 — Behebung braucht Ondos Auftrag): `pruefAnwenden()` räumt beim Überschreiben
  `ergebnisQuelle`/`ergebnisHalbzeit`/`ergebnisVerl` nicht weg (zurzeit nicht erreichbar, siehe
  Backlog-Punkt 64, dritter Fund) · `delBet()` und `logLoeschen()` löschen ohne Rückfrage,
  während die zwei anderen unumkehrbaren Schritte der App vorher fragen · die Speichergrenze des
  Browsers wird nirgends sichtbar. Beide letzten stehen jetzt unter „Technische Schuld".
  **Ohne Befund geprüft, maschinell statt angenommen:** `node --check` · 279 Sprachschlüssel in
  allen drei Sprachen, keiner doppelt, keine Lücke · kein `t('…')` ins Leere · jedes
  `getElementById` trifft ein vergebenes `id` · jede aus `onclick`/`onchange` gerufene Funktion
  existiert · jedes gelesene `state`-Feld wird geschrieben · Geldrechnung stimmt ·
  `marktUrteil()` bei ganzzahligen Toren lückenlos · Ergebniszahlen werden nie als Text
  verglichen · jeder von einem Gehirn gelieferte Text wird vor dem Anzeigen mit `esc()`
  entschärft. **Offen benannt:** Die ersten drei Fassungen des Prüfwerkzeugs meldeten nur
  Fehlalarme; kein Befund oben stammt aus einem ungeprüften Werkzeug-Treffer — jeder ist an der
  Codestelle selbst nachgelesen.
- **Beta zuvor: v19.8.27** (`beta.html`, geliefert 11.9.2026) — **Nachprüfung auf Ondos Verlangen,
  ein eigener Fehler gefunden und behoben.** Vor dem Weiterbauen am Observation Layer wurde der
  ganze Bau seit dem Evidence Ledger geprüft. Gefunden: `kiWahlUebernehmen()` aus v19.8.26 schrieb
  beim Übernehmen einer Vorhersage den getippten **Spielstand** in das **Tipp-Feld** der Wette —
  falsche Bedeutung, denn `tipp` hält fest, welche Wette gesetzt wurde, und wird dem
  Schiedsrichter beim Prüfen einer Wette vorgelegt. Das Feld bleibt jetzt unberührt, nur der
  Spielname wird übernommen. **Verifiziert:** `node --check` bestanden · **64 Trockentest-
  Prüfungen** über sechs Reihen, alle bestanden, darunter eine neue Reihe mit 7 Prüfungen an
  `kiWahlUebernehmen()` mit gestubbtem DOM · maschinell geprüft, dass der neue Feldname
  `kiProtokollId` die Geheimfeld-Sperre aus Backlog-Punkt 44 nicht auslöst und `b.fromKI`
  nirgends sonst gelesen wird · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel**
  (279 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.26** (`beta.html`, geliefert 11.9.2026) — **Backlog-Punkt 75, Teil 2:
  Decision Ledger gebaut.** Fund beim Festlegen des Evidence Ledgers (Teil 1, v19.8.25):
  `state.bets` trug die Felder `fromKI`/`herkunft` seit jeher, `addBet()` setzte sie aber
  immer auf `false`/`null` — keine echte Verknüpfung zu einer Empfehlung. Neues Auswahlfeld im
  Wette-Formular „Aus einer Vorhersage übernehmen", listet offene, nicht geparkte
  `kiProtokoll`-Einträge auf. **Bewusst keine automatische Text-Zuordnung über den
  Spielnamen** — Ondo wählt selbst (Arbeitsweise-Grundsatz „Auswählen ist eine Entscheidung,
  Ablesen nicht", dieselbe Überlegung wie beim Quoten-Knopf). Verknüpfung läuft über die feste
  `id`, nicht über den Namenstext. Neues Feld `kiProtokollId` an jeder Wette. Kleine Anzeige in
  der Wette-Historie, wenn eine Wette so verknüpft ist. **Verifiziert:** `node --check`
  bestanden · Trockentest mit **13 Prüfungen** an der echten, herausgeschnittenen `addBet()`
  (unter anderem: unbekannte/veraltete Auswahl fällt sicher auf „manuell" zurück, kein
  Absturz) und **7 Prüfungen** an `kiWahlBlock()` · `pruefe.py`: ALLES SAUBER. **3 neue
  Sprachschlüssel** (276 → 279). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.25** (`beta.html`, geliefert 11.9.2026) — **Backlog-Punkt 0b gebaut:
  Widerspruchsquote je Markt.** Wiederaufnahme war seit 7.9.2026 entschieden, eine
  Umsetzungsfrage stand vor dem Bau noch offen: eine gemeinsame Zahl über alle drei Märkte
  oder je Markt getrennt? Entschieden (11.9.2026, Ondo): **getrennt** — der Markt „Sieger"
  wird immer aus dem Tipp abgeleitet, nie eigens gefragt, kann also strukturell nie einen
  Widerspruch zeigen; eine gemeinsame Zahl hätte echte Widersprüche bei „Tore" und „beide
  treffen" künstlich verwässert. Neue reine Funktion `calcWiderspruch(quelle)` — **rückwirkend
  aus vorhandenen Daten**, keine neue Messung: das Kennzeichen `m.gedreht` (seit jeher in
  `maerkteBauen()`) markiert bereits genau den Fall, dass die eigens gefragte Prozentzahl der
  vom Tipp implizierten Seite widerspricht. Bewusst **kein Status-Filter** (anders als
  Kalibrierung/Brier/Streuung) — der Widerspruch entsteht beim Vorhersagen selbst, nicht erst
  beim späteren Prüfen des Ergebnisses. Anzeige in der bestehenden Kalibrierungstabelle, je
  Gehirn. **Verifiziert:** `node --check` bestanden · Trockentest mit **12 Prüfungen** an der
  echten, herausgeschnittenen `calcWiderspruch()` — darunter der Beleg, dass der Markt „Sieger"
  selbst bei irrtümlich gesetztem `gedreht` nicht mitgezählt wird, und dass Einträge aus der
  Zeit vor v19 aussen vor bleiben · `pruefe.py`: ALLES SAUBER. **1 neuer Sprachschlüssel**
  (275 → 276). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.24** (`beta.html`, geliefert 11.9.2026) — **Backlog-Punkt 9, Ausbau: API-Football
  und football-data.org per Knopfdruck mit dem Prüflauf gekoppelt.** Ondos Vorschlag, nach der
  Sperre bei der GitHub-Automatik am selben Tag (geteilte Cloud-Adresse) — vom eigenen Gerät aus
  ist das kein Problem. Zwei neue Schlüsselfelder `state.apiFootballKey`/`state.footballDataKey`,
  gleiches Muster wie die bestehenden. Im „Ergebnisse prüfen"-Lauf gehen beide strukturierten
  Quellen jetzt den KI-Läufen voran (Reihenfolge in `wege`), wenn ein Schlüssel gespeichert ist —
  fehlt ein Spiel bei beiden, geht der verbleibende Platz wie bisher an die KI-Suche.
  `refLaufPruefen()`/`refEinigkeit()` (Backlog-Punkt 68) **unverändert** — die neuen Läufe liefern
  Ergebnisse in genau demselben Format wie ein KI-Lauf, die bestehende Einigkeitsregel sieht
  keinen Unterschied. Neue reine Funktionen `datumIso()` und `strukturAbgleich()`, dazu
  `apiFootballLauf()`/`footballDataLauf()` für den eigentlichen Abruf. football-data.org mit
  eigenem Filter auf die 12 zugesicherten Wettbewerbe (derselbe Fund wie bei der GitHub-Automatik:
  die Schnittstelle lieferte im Test auch Spiele ausserhalb der Liste). **Verifiziert:**
  `node --check` bestanden · Trockentest mit **18 Prüfungen** an der echten, herausgeschnittenen
  `strukturAbgleich()`/`datumIso()` und **7 Prüfungen** an der echten `wege`-Aufbaulogik (inkl.
  Beleg, dass sich ohne strukturierte Schlüssel exakt das alte Verhalten ergibt) · `pruefe.py`:
  ALLES SAUBER. **8 neue Sprachschlüssel** (267 → 275). **Kein Schnitt in der Messreihe.**
  `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.23** (`beta.html`, geliefert 10.9.2026) — **Backlog-Punkt 9, Knopfdruck-Teil
  gebaut: Quoten-Automatik.** Neues Schlüsselfeld `state.oddsKey` (The Odds API, gleiches
  Muster wie `apiKey`/`geminiKey`, NUR auf dem Gerät). Im Wette-Formular: Liga wählen, Quoten
  abrufen, aus einer kurzen Liste bevorstehender Spiele die passende Zeile anklicken — füllt
  das Quote-Feld, ohne den Rest des Formulars zu verwerfen. **Bewusst keine automatische
  Zuordnung** zu einem bestimmten Spiel oder Buchmacher — Ondo sieht die Liste und wählt
  selbst. Vorfrage zur Quotenabdeckung per Websuche geprüft: „The Odds API" deckt League of
  Ireland und Allsvenskan nachweislich ab (nicht erschöpfend für jede Liga geprüft), 500
  kostenlose Abrufe/Monat. Technisch geklärt: der Knopfdruck-Teil braucht kein GitHub
  Actions, nur ein reiner Browser-Abruf wie bei Gemini/Anthropic schon üblich — Actions
  bleibt der Zeitsteuerung vorbehalten (eigener, noch nicht gebauter Schritt). **Verifiziert:**
  `node --check` bestanden · Trockentest mit **13 Prüfungen** an der echten, herausgeschnittenen
  `oddsListeAufbereiten()` · `pruefe.py`: ALLES SAUBER. **11 neue Sprachschlüssel** (256 → 267).
  **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.22** (`beta.html`, geliefert 10.9.2026) — **Backlog-Punkt 68, dritter Lauf auf
  `claude-sonnet-5` umgestellt — erste Anwendung des neuen Arbeitswegs aus Backlog-Punkt 74
  (ChatGPT als geprüfter Code-Zulieferer, Ondos Auftrag).** In `sonnetSuche()`:
  `claude-sonnet-4-6` → `claude-sonnet-5` (rund ein Drittel weniger pro Token), Websuche auf
  `web_search_20260209` (Dynamic Filtering) gehoben, `output_config:{effort:'low'}` ergänzt.
  ChatGPT lieferte die Funktion mit genau den drei angeforderten Änderungen, byte-für-byte
  gegen die Spezifikation geprüft. **Dabei gefunden und berichtigt:** das Label
  `modellGenutzt` (für `refRoh`, Backlog-Punkt 64) hing fest an `'claude-sonnet-4-6'` und war
  nach der Umstellung nicht mehr korrekt — auf `'claude-sonnet-5'` berichtigt, nicht Teil des
  ChatGPT-Auftrags. **Verifiziert:** `node --check` bestanden · Trockentest mit **15
  Prüfungen** an der echten, eingesetzten Funktion (gestubbter `apiCall()`, kein echter
  Netzwerkaufruf) · `pruefe.py`: ALLES SAUBER. **Ausdrücklich nicht geprüft und hier nicht
  behauptet:** ob Sonnet 5 tatsächlich weniger kostet oder genauso gut funktioniert — das
  zeigt erst der echte Betrieb (Stabilitätsregel), diese Sitzung hat keinen Zugriff auf
  Ondos API-Schlüssel oder Abrechnung. Einzelheiten zum Arbeitsweg bei Backlog-Punkt 74.
  **Keine neuen Sprachschlüssel** (256 unverändert). **Kein Schnitt in der Messreihe.**
  `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.21** (`beta.html`, geliefert 10.9.2026) — **Backlog-Punkt 34 (Brier-Score) und
  35 (Streuungsangabe) gebaut, beide seit 7.9.2026 entschieden.** Zwei neue reine Funktionen,
  `calcBrierScore(quelle)` und `calcStreuung(quelle)` — eigene, unveränderte Sammelschleifen
  wie `calcKalibrierung()`, das selbst unangetastet bleibt. Brier-Score: `(p/100 − Treffer)²`
  je bewerteter Aussage, gemittelt. Streuung: Bootstrap über 600 Ziehungen (dasselbe Verfahren
  wie Chat 12s Nachrechnung vom 14.8.2026), 90-%-Bereich als 5./95. Perzentil, eigene neue
  Hilfsfunktion `abwAusPunkten()`. Beide in der bestehenden Kalibrierungstabelle angezeigt
  (Finanzen-Tab), nicht als eigene Zeile. **Verifiziert:** `node --check` bestanden ·
  Trockentest mit **20 Prüfungen** an den echten, aus `beta.html` herausgeschnittenen
  Funktionen, darunter ein von Hand nachgerechnetes Beispiel und der Beleg, dass
  `calcKalibrierung()` nach den neuen Aufrufen weiterhin dasselbe liefert (Regression) — fünf
  Wiederholungen des ganzen Laufs bestanden, wegen des echten Zufalls in `calcStreuung()` ·
  `pruefe.py`: ALLES SAUBER. **2 neue Sprachschlüssel** (`calibBrier`, `calibSpread`). **Kein
  Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.20** (`beta.html`, geliefert 7.9.2026) — **Backlog-Punkt 73 ZURÜCKGESETZT auf den Stand vor diesem Punkt, nach vorab vereinbarter Regel. Der Punkt bleibt 🔴 OFFEN.** Kandidat 4 (`min-width:0` direkt am Input) wurde am echten Gerät geprüft und widerlegt — vierter Fehlschlag in Folge, nach Zentrierung (v19.8.16), Grid (v19.8.17), Felder untereinander (v19.8.18) und `min-width:0` am Input (v19.8.19). Ondos Auftrag, ohne weitere Rückfrage: „Zurücksetzen." **Gebaut:** `kilogFilterBlock()`s Datumsfeld-Reihe trägt wieder exakt den Aufbau von vor Punkt 73 — byte-für-byte derselbe wie `logExportBlock()`s seit v19.8.14 unveränderte Reihe (`display:flex;gap:10px`, `flex:1;min-width:0`, `min-width:0;text-align:center`), nur mit eigenen Ids/Werten. Die harmlose Zentrierungsregel aus Kandidat 1 bleibt bewusst stehen, war nie Teil des Problems. **Ehrlich benannt: Der ursprüngliche Überlauf-Fehler besteht damit wieder** — bewusste Rückkehr zum Ausgangspunkt, keine neue Regression. **Verifiziert:** `node --check` bestanden · Trockentest mit **25 Prüfungen** an der echten, im Wortlaut herausgeschnittenen `kilogFilterBlock()` — darunter der direkteste Beleg: die Datumsreihe ist nach Normalisierung von Id/`onchange`/`value` byte-genau identisch mit `logExportBlock()`s Reihe · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (254 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18. **Kein fünfter CSS-Versuch ohne neuen Auftrag** — zwei Wege bleiben unverbraucht, falls Ondo das Thema wieder aufnimmt: `overflow:hidden` an den Feld-Containern (nie ausprobiert) oder der native Datumspicker ganz ersetzt (grösserer Eingriff, ändert Bedienung).
- **Beta zuvor: v19.8.19** (`beta.html`, geliefert 7.9.2026) — **Backlog-Punkt 73, Kandidat Nr. 4, auf Ondos eigenen Vorschlag: `min-width:0` steht jetzt direkt an beiden Datumsfeldern selbst. Der Punkt bleibt 🔴 OFFEN.** Kandidat 3 (Felder untereinander) wurde am echten Gerät geprüft und widerlegt — dritter Fehlschlag in Folge. Ondos eigene Nachfrage („warum nicht dieselbe Breitenbehandlung wie Wettbewerb/Mannschaft?") führte zum entscheidenden Fund: Diese Textfelder in derselben Karte, mit identischer CSS-Behandlung, laufen NICHT über — nur `type="date"` ist betroffen. Das deutet auf eine browsereigene Mindestbreite direkt am nativen Element hin, die keiner der bisherigen drei Kandidaten je direkt am `<input>` selbst ausgehebelt hatte (Kandidat 2 setzte `min-width:0` nur an der umschliessenden Spalte, Kandidat 3 entfernte es ganz). **Gebaut:** einzige Änderung gegenüber Kandidat 3 ist `min-width:0` direkt an beiden Inputs, sonst nichts verändert. `logExportBlock()` bleibt weiterhin bewusst unverändert, als Kontrollwert. **Verifiziert:** `node --check` bestanden · Trockentest mit **29 Prüfungen** an der echten, im Wortlaut herausgeschnittenen `kilogFilterBlock()`, mit `logExportBlock()` als Kontrollwert — alle bestanden · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (254 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18. **🔴 Rücksetz-Regel vorab vereinbart (Ondo, 7.9.2026):** Wirkt auch Kandidat 4 nicht, wird die Datumsfeld-Reihe vollständig auf die Flexbox-Struktur zurückgesetzt, die sie vor Punkt 73 hatte und die `logExportBlock()` bis heute unverändert trägt — kein fünfter CSS-Versuch, kein weiterer Rückfrage-Zyklus nötig. Die harmlose Zentrierungsregel aus Kandidat 1 bliebe davon ausdrücklich ausgenommen. **🔴 Ehrliche Grenze (Art. 14):** Diese Umgebung hat keinen Safari-/WebKit-Renderer und kann die vierte Vermutung in Folge nicht selbst prüfen — **Punkt 73 bleibt deshalb OFFEN**, mit dem Vermerk „Kandidat Nr. 4 ausgeliefert, Bestätigung am echten Gerät steht aus".
- **Beta zuvor: v19.8.18** (`beta.html`, geliefert 7.9.2026) — **Backlog-Punkt 73, Kandidat Nr. 3, Ondos eigene Wahl: die Datumsfeld-Reihe im KI-Log-Filter steht jetzt untereinander statt nebeneinander. Der Punkt bleibt 🔴 OFFEN.** Ondo hat am echten iPhone bestätigt: Kandidat 2 (CSS-Grid, v19.8.17) hat weder das Herausragen noch ein zusätzlich beobachtetes Überlappen der beiden Felder behoben — der zweite Fehlschlag in Folge bei einer Nebeneinander-Aufteilung. Zur Wahl gestellt: eine kleine Zusatzänderung (`overflow:hidden`) oder die grössere, strukturell sicherere Umstellung auf untereinander. **Ondo hat sich für Letzteres entschieden.** Neue, weiterhin ungeprüfte Vermutung: iOS/WebKit zeichnet Kalender-Symbol und Platzhalter des nativen Datumsfelds möglicherweise unabhängig von der berechneten Spaltenbreite — das würde erklären, warum weder Flexbox noch Grid halfen. **Gebaut:** `kilogFilterBlock()`s Datumsfeld-Reihe folgt jetzt demselben Muster wie die Felder Wettbewerb/Mannschaft darunter — jedes Feld ein eigener Block, das zweite mit `margin-top:10px`, kein eigenes `width` mehr am Input (`input,select{width:100%}` gilt bereits global). Bei einer Zeile je Feld gibt es keinen Nachbarn mehr, mit dem ein Feld um Breite konkurrieren müsste — ein Überlappen ist damit geometrisch ausgeschlossen. **Sichtbare Folge, nicht verschwiegen:** Die Filterkarte wird zwei Zeilen höher; Ondo hat diesen Weg in Kenntnis dessen gewählt. `logExportBlock()` bleibt weiterhin bewusst unverändert, als einzige seit v19.8.14 stabile Vergleichsgrundlage. **Verifiziert:** `node --check` bestanden · Trockentest mit **32 Prüfungen** an der echten, im Wortlaut herausgeschnittenen `kilogFilterBlock()`, mit `logExportBlock()` als Kontrollwert — alle bestanden · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (254 unverändert). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18. **🔴 Ehrliche Grenze (Art. 14):** Diese Umgebung hat keinen Safari-/WebKit-Renderer und kann die dritte Vermutung in Folge nicht selbst prüfen — **Punkt 73 bleibt deshalb OFFEN**, mit dem Vermerk „Kandidat Nr. 3 ausgeliefert, Bestätigung am echten Gerät steht aus". **Nebenbei, auf Ondos Angebot, exploratorisch geprüft, kein Codeaufwand:** Ein von Ondo gelieferter Rohtext-Export des Schiedsrichters (122 Einträge, 30.8.–7.9.2026) zeigt, bereinigt um mehrfach angehängte Wiederholungen, 24 echte Prüfläufe mit 120 Einzelergebnissen — 109 gefunden (91 %), 6 nicht gefunden (5 %, alle an derselben Listenposition „S12"), 5 laufend, **kein einziger Widerspruch zu einem übernommenen Ergebnis**. Deckt sich mit Ondos eigener Beobachtung (36 geprüfte Spiele, alle richtig). Erklärt aber ausdrücklich **nicht**, warum ein einzelner grosser Prüflauf nur 13 von 40 fand — der Rohtext-Export deckt nur 30.8.–7.9.2026 ab, während unbewertete Einträge laut Park-Übersicht bis zum 28.7.2026 zurückreichen, deutlich ausserhalb dieses Fensters. Einzelheiten stehen bei Backlog-Punkt 73 (Fassung 83) — reiner Chat-Befund, nicht als eigener Backlog-Punkt aufgenommen, es sei denn Ondo wünscht das. **🔴 BERICHTIGT, noch am selben Tag (7.9.2026, Fassung 84): Kandidat 3 ist inzwischen am echten Gerät geprüft und WIDERLEGT** — dritter Fehlschlag in Folge, siehe Backlog-Punkt 73. Wichtiger diagnostischer Fund dabei: Die Felder Wettbewerb/Mannschaft in derselben Karte, mit identischer CSS-Behandlung, laufen NICHT über — nur `type="date"` ist betroffen, was auf eine browsereigene Mindestbreite am Element selbst hindeutet, nicht auf ein Problem der umschliessenden Struktur. Kandidat 4 ist vorgeschlagen (gezieltes `min-width:0` am Input selbst), Ondos Entscheidung steht aus, kein Code geändert.
- **Beta zuvor: v19.8.17** (`beta.html`, geliefert 6.9.2026) — **Backlog-Punkt 73, Kandidat Nr. 2: die Datumsfeld-Reihe im KI-Log-Filter von Flexbox auf CSS-Grid umgestellt. Der Punkt bleibt 🔴 OFFEN.** Ondo hat am echten iPhone belegt, dass der tatsächliche Fehler ein anderer ist als der bis zum 5.9.2026 verfolgte: Nicht die Zentrierung des Textes, sondern die **Breite** — in `kilogFilterBlock()` ragt das rechte Datumsfeld („bis") über den Kartenrand hinaus und sitzt nicht in der Flucht der Felder darunter, **beobachtet bei leeren Feldern**. Die Zentrierungsregel aus v19.8.16 hat damit ein anderes Problem behoben als das tatsächliche; sie bleibt stehen, sie schadet nicht. **Vor der Änderung untersucht, wie beauftragt — zwei Funde mit Codezitat:** Erstens scheidet die vermutete abweichende Kartenbreite aus — `logExportBlock()` steht seit v19.8.15 nicht mehr im Mehr-Tab, sondern im KI-Log-Reiter „Werkzeuge"; der Mehr-Tab zeigt `messExportBlock()` ohne jedes Datumsfeld. Beide Datumsreihen liegen im selben Container, derselben `.wrap` und derselben `.card` — **kein Breitenunterschied**. Zweitens ist der einzige inhaltliche Unterschied der Feldwert: `logExportBlock()` belegt beide Felder fest mit `heute`, `kilogFilterBlock()` liest `kilogVon`/`kilogBis`, die als leerer String initialisiert sind — das deckt sich genau mit Ondos Beobachtung. **Ausdrücklich als Vermutung gekennzeichnet, nicht als Befund** (Art. 11): dass ein leeres Datumsfeld auf iOS durch seinen Platzhalter breiter wird, ist von hier aus nicht messbar. **Warum trotzdem umgebaut wurde:** Der zweite Fund erklärt die Asymmetrie, führt aber zu keiner anderen Abhilfe — gegen eine zu grosse innere Mindestbreite ist `minmax(0,1fr)` der Riegel, gleich woher sie kommt. Gebaut: `display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px` statt `display:flex`, Container-Divs ohne `flex:1` (aber weiterhin mit `min-width:0`, weil ein Grid-Item von sich aus `min-width:auto` hat), Inputs mit `width:100%;box-sizing:border-box;text-align:center`. **`logExportBlock()` bewusst NICHT mitgeändert** — dieselbe Ursache liegt dort nicht belegt vor, und eine unveränderte Stelle ist die Vergleichsgrundlage für Ondos Prüfung am Gerät. **Kein Eingriff an `kilogGefiltert()`, `state` oder der Datenhaltung; auch die naheliegende Vorbelegung der Filterfelder ist unterlassen**, weil sie das Filterverhalten ändern würde und nicht beauftragt ist (Art. 8). **Verifiziert:** `node --check` bestanden · Trockentest mit **30 Prüfungen** an der echten, im Wortlaut aus `beta.html` herausgeschnittenen `kilogFilterBlock()`, mit `logExportBlock()` als Kontrollwert — alle bestanden; ein Fehlschlag im ersten Lauf war ein Messfehler der Prüfung selbst, vor der Korrektur an der tatsächlichen Ausgabe belegt und die Prüfung präziser statt lockerer gemacht (Fehlerart C6 vermieden) · `pruefe.py`: ALLES SAUBER. **Zur Trockentest-Frage: keine bestehende Prüfung berührt diese Anzeigefunktion** — auf `main` liegt keine committete Trockentest-Datei, `selbsttest.py` (Punkt 47) liegt nur auf `mistral` und prüft Syntax, Sprachschlüssel und `marktUrteil`, keine Anzeige. Trotzdem ausgeführt: Syntax und Rechenproben bestanden, der Sprachschlüssel-Abgleich schlägt fehl — **vorbestehend, durch Gegenprobe gegen den unveränderten `origin/main`-Stand als Nicht-Regression belegt**; sein Regex erkennt in der heutigen `beta.html` nur 67 statt 254 Schlüssel je Sprache, dieselbe Art Werkzeuglücke wie in Backlog-Punkt 66, nur festgehalten und nichts daran geändert. **Keine neuen Sprachschlüssel** (254 unverändert). **Kein Schnitt in der Messreihe** — reine Anzeigefunktion. `APP_VERSION` weiter 18. **🔴 Ehrliche Grenze (Art. 14):** Diese Umgebung hat keinen Safari-/WebKit-Renderer. Dass alle Prüfungen sauber durchlaufen, sagt nichts über die sichtbare Wirkung auf Ondos Gerät — **Punkt 73 bleibt deshalb OFFEN**, mit dem Vermerk „Kandidat Nr. 2 ausgeliefert, Bestätigung am echten Gerät steht aus".
- **Beta zuvor: v19.8.16** (`beta.html`, geliefert 4.9.2026) — **Backlog-Punkt 72, Schritt 2 gebaut: Karten einklappen · plus Backlog-Punkt 73: iOS-Zentrierung der Datumsfelder.** Auch mit den vier Reitern aus Punkt 71 war innerhalb eines Reiters noch viel Scrollen nötig, weil jede Karte immer vollständig ausgeklappt war. Betrifft nur die drei KI-Log-Reiter Offen/Bewertet/Archiv — nicht die „Vorschläge"-Ansicht und nicht das separate, bereits kompakte v18-Archiv. **Geklärt, nicht vermutet:** `vorhersageKarte(e, mitKnoepfen)`s zweiter Parameter steuert ausschliesslich, ob Aktions-Knöpfe erscheinen — nicht, ob eine Karte einklappbar sein soll; die Übereinstimmung der drei Reiter-Aufrufe mit `mitKnoepfen=true` ist Zufall der heutigen Aufrufstellen, keine Bedeutung des Parameters. Deshalb ein neuer, ans Ende **angehängter** dritter Parameter `einklappbar` — dasselbe Muster wie `kilogGefiltert()`s `mannschaft`-Parameter aus Punkt 71, der Zwei-Argumente-Aufruf der „Vorschläge"-Ansicht bleibt unverändert lauffähig. **Inhalt zerlegt:** ein immer sichtbarer Kopf (Spielname mit GEPARKT-/parkGrund-Abzeichen, Datum, Anpfiff, Gehirn-Symbol, Wettbewerb, Ergebnis-Tipp, dazu — neu hierher vorgezogen, ihre Berechnung bleibt unverändert — die `refEinigkeit`- und `refRohAbgleich()`-Warnzeilen) und ein nur aufgeklappt sichtbarer Rest (Markt-Zeilen, BTTS-Wort, Begründung, tatsächlicher Endstand, Knopf-Zeile). **Ehrlich benannt:** Die beiden Warnzeilen stehen im aufgeklappten Zustand jetzt vor statt hinter dem Rest — notwendige Folge davon, dass sie beim Einklappen sichtbar bleiben sollen, keine sonstige inhaltliche Änderung. **Natives `<details>`/`<summary>`** statt eigener Klapplogik — die bestehende `.card`-Formatierung gilt unverändert weiter, der Browser liefert den verlangten Pfeil von selbst, keine neue Optik. Der Auf-/Zu-Zustand liegt **nicht** allein im DOM: `render()` baut bei jeder Änderung irgendwo in der App das komplette `innerHTML` neu, ein rein natives `<details>` würde dabei jedesmal wieder zuklappen. Deshalb eine neue Anzeigevariable `kilogAufgeklappt` (Objekt, Eintrags-Id als Schlüssel) — wie `kilogTab` nicht Teil von `state`, Standard leer (alles eingeklappt); `kilogToggle()` schreibt bei jedem Öffnen/Schliessen den tatsächlichen Zustand zurück, **ohne** `render()` aufzurufen. **iOS-Datumsfelder:** eine dokumentierte WebKit-Eigenheit — `input[type="date"]` rendert seinen Inhalt über ein eigenes internes Element, auf das `text-align` am Feld selbst nicht wirkt; behoben mit der dafür vorgesehenen Standard-Regel auf `::-webkit-date-and-time-value`, wirkungslos in anderen Browsern, keine Änderung an Wert oder Bedienung. **Ehrliche Grenze:** Diese Umgebung hat keinen Safari-/WebKit-Renderer, die sichtbare Wirkung auf echtem iOS ist von hier aus nicht selbst prüfbar — Ondos Bestätigung steht aus. **Verifiziert:** `node --check` bestanden · Trockentest mit **20 neuen Prüfungen** an der echten, aus `beta.html` herausgeschnittenen Funktion `vorhersageKarte()`: Karte startet eingeklappt · ein Eintrag in `kilogAufgeklappt` klappt auf · alle vier Warn-Markierungen stehen im `<summary>` · Markt-Zeilen/Begründung/Endstand/Knopf-Zeile bleiben im aufklappbaren Rest · ein Zwei-Argumente-Aufruf liefert weiterhin ein `<div>` · der Eintrag bleibt bytegleich · `kilogToggle()` schreibt korrekt zurück. Die bestehenden **57** (Punkt 68), **19** (Punkt 69), **19** (Punkt 70) und **19** (Punkt 71) Prüfungen erneut ausgeführt, alle weiterhin bestanden · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (254 unverändert). **Kein Schnitt in der Messreihe** — reine Anzeigefunktionen. `APP_VERSION` weiter 18. Dazu, ohne weiteren Codeaufwand: `CLAUDE.md` (Backlog-Punkt 54) aus den vier frisch gelesenen Dokumenten neu erzeugt, 185 statt 209 Zeilen.
- **Beta zuvor: v19.8.15** (`beta.html`, geliefert 4.9.2026) — **Backlog-Punkt 71 gebaut: KI-Log in vier Reiter (Schritt 1 von 3, siehe Backlog-Punkt 72).** Der KI-Log-Bereich war eine einzige lange Seite — Werkzeuge, Vorschläge, Park-Übersicht, Filter, alle Vorhersagen und das v18-Archiv nacheinander; Ondo musste bis ganz unten scrollen und hatte das v18-Archiv mit geparkten Spielen verwechselt, weil beides unmittelbar aufeinanderfolgte. **Vier Reiter, mit einer belegten, lückenlosen und überschneidungsfreien Dreiteilung aller `neu` (v19-)Einträge** (aus Backlog-Punkt 70 bereits mit Codezitat belegt: `e.status` hat nur `'offen'`/`'bewertet'`, `e.geparkt===true` und `e.status==='bewertet'` kommen nie gemeinsam vor). **Offen** (`status==='offen' && !geparkt`): `pruefBlock()`, die unveränderte Tag-für-Tag-Park-Übersicht, ein vereinfachter Filter (Datum, Wettbewerb, Mannschaft — kein Status-Feld, hier implizit). **Bewertet** (`status==='bewertet'`): derselbe Filter, zusätzlich eine auf drei Optionen verkürzte Status-Auswahl (Alle/Richtig/Falsch). **Archiv**: zwei klar getrennte, eigens überschriebene Abschnitte — die v19-Einträge mit `geparkt===true` (mit dem bestehenden „Wieder prüfen"-Knopf) und direkt darunter, unverändert, der bestehende v18-Archiv-Block; kein Filter in diesem Reiter. **Werkzeuge**: `korrFBlock()` und `logExportBlock()`, unverändert, nur an neuer Stelle. **Neuer Filterparameter „Mannschaft":** Teilstring-Suche gegen `e.match`, dieselbe Technik wie die bestehende Wettbewerbs-Suche. `kilogGefiltert()` bekommt dafür einen neuen, ans Ende angehängten Parameter `mannschaft` — angehängt statt eingefügt, damit die 19 bestehenden Trockentest-Aufrufe aus Punkt 70 mit der alten fünf-Parameter-Signatur unverändert weiterlaufen. `kilogFilterBlock()` bekommt einen dritten Parameter `modus`, der nur steuert, ob das Status-Feld erscheint. Neue reine Anzeigevariablen `kilogTab` (Standard `'offen'`) und `kilogMannschaft` — wie `wtab` nicht Teil von `state`. Die Zähler „`{gezeigt}` von `{gesamt}`" beziehen sich je Reiter jetzt auf dessen eigene Grundmenge, nicht mehr auf alle Einträge zusammen. Was unverändert bleibt, nur an neuer Stelle: `pruefBlock()`, der Park-Übersicht-Code, `korrFBlock()`, `logExportBlock()`, der v18-Archiv-Code, `vorhersageKarte()` selbst — keine Änderung an Karten, Farben oder Knöpfen. `state.kiProtokoll`, seine Reihenfolge und Felder sind unangetastet — reine Anzeige-Umsortierung. **Verifiziert:** `node --check` bestanden · Trockentest mit **19 neuen Prüfungen** an den echten, aus `beta.html` herausgeschnittenen Funktionen: die Vier-Wege-Zerlegung ist lückenlos und überschneidungsfrei · die Mannschafts-Suche findet Teiltreffer case-insensitiv, auch gegen den zweiten Teamnamen im Feld · alle vier Filter kombinieren sich korrekt (UND) · die Zähler-Basis ist je Reiter die richtige Grundmenge · ein Aufruf mit der alten fünf-Parameter-Signatur funktioniert weiterhin identisch · `state.kiProtokoll` bleibt nach allen Aufrufen bytegleich (JSON-Vergleich). Die bestehenden **57** (Punkt 68), **19** (Punkt 69) und **19** (Punkt 70) Prüfungen erneut ausgeführt, alle weiterhin bestanden — die aus Punkt 70 insbesondere unverändert, als direkter Regressionsbeweis · `pruefe.py`: ALLES SAUBER. **Sprachschlüssel: 4 neu, 1 entfernt.** `logEmpty` (alte Leermeldung) wurde durch die vereinfachte, einheitliche Leermeldung `filterEmpty` ersetzt und war danach nachweislich ungenutzt — entfernt statt als toter Rest stehen gelassen. Neu: `kilogTabBewertet`, `kilogTabArchiv`, `kilogTabWerkzeuge`, `filterMannschaftPh`. Zwei bestehende Schlüssel (`filterStatusBewRichtig`/`filterStatusBewFalsch`) behalten ihren Namen, bekommen aber kürzere Werte („Richtig"/„Falsch"). **Kein Schnitt in der Messreihe** — reine Anzeigefunktion. `APP_VERSION` weiter 18. Dazu, ohne weiteren Codeaufwand: neuer Backlog-Punkt 72 angelegt, hält das dreiteilige Redesign-Vorhaben fest (Struktur — dieser Punkt, gebaut · Karten einklappen — offen · Optik/Logo — offen).
- **Beta zuvor: v19.8.14** (`beta.html`, geliefert 4.9.2026) — **Backlog-Punkt 70 gebaut: Filter im KI-Log.** Bei über 400 Einträgen wurde die KI-Log-Liste ohne Filter unübersichtlich (Ondos eigene Beobachtung). **Drei kombinierbare Filter** (UND-Verknüpfung), rein im Browser, keine neuen Modellaufrufe, keine Kosten: Datum von/bis (nutzt die bestehende `datumZahl()`, versteht `TT.MM.JJJJ` und ISO) · Wettbewerb-Freitextsuche (Teilstring, nicht case-sensitiv) · Status, fünf Optionen aus den tatsächlichen Codewerten abgeleitet. **Codezitat der tatsächlichen Werte (nicht vermutet — belegt):** `e.status` hat im ganzen Skript nur `'offen'`/`'bewertet'`, **keine** dritte Ausprägung auf Eintrag-Ebene — „richtig"/„falsch" gibt es nur pro Markt (`e.maerkte[i].status`). `e.geparkt` (boolesch) wird manuell (`logParken()`/`logParkenTag()`) und automatisch durch den Schiedsrichter (`parkeEintraege()`, Backlog-Punkt 68) gesetzt; `e.parkGrund` nur beim automatischen Parken. **Belegt:** `e.geparkt===true` und `e.status==='bewertet'` kommen nie gemeinsam vor — `vorhersageKarte()` zeigt den Park-Knopf nur bei `e.status==='offen'`. Fünf Filteroptionen daraus abgeleitet: Alle · Offen (offen, nicht geparkt) · Geparkt · Bewertet — alle Märkte richtig · Bewertet — mind. ein Markt falsch (die letzten beiden zusammen ergeben ohne Überschneidung genau die „bewertet"-Menge). **Umsetzung:** neue reine Funktion `kilogGefiltert(liste, von, bis, wettbewerb, status)` — `.filter()` liefert ein neues Array, `state.kiProtokoll` bleibt unangetastet, nichts wird durch Filtern gelöscht, versteckt oder verändert. Filterzustand (`kilogVon`, `kilogBis`, `kilogWettbewerb`, `kilogStatus`) liegt in vier plain globalen `var`s wie `wtab` — bewusst **nicht** Teil von `state`, reine Anzeigeeinstellung, setzt sich bei jedem Neuladen zurück. Neue Eingabefelder lösen `onchange` aus, nicht `oninput` — `render()` ersetzt bei jedem Aufruf das komplette `innerHTML`, ein `oninput`-Handler würde bei jedem Tastendruck den Cursor verlieren. Neue Anzeigefunktion `kilogFilterBlock()` (Kartenstil wie `logExportBlock()`) zeigt „`{gezeigt}` von `{gesamt}`" und einen Zurücksetzen-Knopf, der alle vier Filter auf einmal leert. **Zwei bewusste Abgrenzungen:** die Tag-für-Tag-Park-Übersicht bleibt auf der ungefilterten Liste berechnet (sonst liesse sich ein Tag nicht mehr vollständig parken, während gefiltert wird); das v18-Archiv (andere Feldstruktur) bleibt vom Filter unberührt. **Verifiziert:** `node --check` bestanden · Trockentest mit **19 neuen Prüfungen** an der echten, aus `beta.html` herausgeschnittenen Funktion `kilogGefiltert()` (kein Nachbau): Datum von/bis in beide Richtungen und im ISO-Format · leeres Datum zeigt alles · Wettbewerb-Suche Teiltreffer case-insensitiv · alle fünf Status-Optionen liefern die richtige Teilmenge, ohne Überschneidung zwischen „bewRichtig"/„bewFalsch" · alle drei Filter gleichzeitig kombiniert (UND) · Zurücksetzen liefert die volle Liste · Eingabeliste vor/nach mehreren Filteraufrufen bytegleich (JSON-Vergleich) · Rückgabe ist ein neues Array, keine Referenz auf die Eingabe. Die bestehenden **57 Prüfungen** (Punkt 68) und **19 Prüfungen** (Punkt 69) erneut ausgeführt, alle weiterhin bestanden (keine Regression) · `pruefe.py`: ALLES SAUBER. **10 neue Sprachschlüssel** (`filterT`, `filterWettbewerbPh`, `filterStatusAlle`, `filterStatusOffen`, `filterStatusGeparkt`, `filterStatusBewRichtig`, `filterStatusBewFalsch`, `filterReset`, `filterCount`, `filterEmpty`). **Kein Schnitt in der Messreihe** — reine Anzeigefunktion, ändert nichts an Auftragstexten, Bewertung oder gespeicherten Daten. `APP_VERSION` weiter 18. Dazu, ohne Codeaufwand: Backlog-Punkt 41 (seit 30.8.2026 gebaut) aus der „Prio 1"-Überschrift entfernt, die Einordnung war nicht mitgewandert.
- **Beta zuvor: v19.8.13** (`beta.html`, geliefert 4.9.2026) — **Backlog-Punkt 69 gebaut: `pruefListe`/`pruefBilanz` gespeichert.** Bis v19.8.12 waren `pruefListe` und `pruefBilanz` globale Variablen ausserhalb von `state` — `save()` schrieb nur `state`, ein Neuladen der App warf jeden noch nicht übernommenen oder ignorierten Schiedsrichter-Vorschlag weg. Seit v19.8.12 hängt an jedem Prüflauf ein bezahlter Sonnet-Lauf mit Websuche; ein Verlust kostete seither echtes Geld je Wiederholung. **Jetzt:** beide Felder sind Teil von `state` (`state.pruefListe`, `state.pruefBilanz`), initialisiert wie `vorschlaege: []` — **keine `seedV`-Migration nötig**, ein altes Save ohne diese Schlüssel behält einfach die frischen Defaults. `pruefStark` bleibt bewusst aussen vor (beschreibt nur den laufenden Prüfdurchgang, keinen Vorschlag, der verloren gehen könnte — ihre Persistenz wäre Ballast, keine Absicherung). **Zwei bisher fehlende `save()`-Aufrufe ergänzt:** `pruefAnwenden()` sicherte bisher nur im `art==='log'`-Zweig; jetzt **ein** unconditional `save()` nach dem Entfernen aus der Liste, deckt auch den `art==='bet'`-Zweig ab. `pruefIgnorieren()` rief bisher **gar kein** `save()` auf — jetzt ergänzt. Zusätzlich ein `save()` am Ende von `abschluss()`, weil das bestehende `save()` in `rundeLaufen()` vor `abschluss()` im selben Tick läuft und die endgültige Bilanz (Fehlertext, Runden, Dauer) sonst nie gesichert würde. **Reset am Rundenanfang (`state.pruefListe=[]`) bekommt bewusst KEIN eigenes `save()`** — ein Reload mitten in einem laufenden Durchgang liefert dadurch den zuletzt gesicherten, älteren Stand zurück statt eines Datenverlusts; ein unterbrochener Durchgang trägt ohnehin nie einen Eintrag in `pruefListe` ein, bevor `pruefAuswerten()` ihn abschliesst. **Nachfrage Ondos beantwortet, mit Zeilenzitat:** Ein übernommener Vorschlag wird **nicht** eigens chronologisch neu einsortiert — er braucht es nicht. `vorhersagen()` legt jeden Eintrag per `state.kiProtokoll.unshift(eintrag)` an, die KI-Log-Anzeige rendert die Liste ohne erneute Sortierung, und `pruefAnwenden()` ändert nur Felder am gefundenen Eintrag, ohne ihn im Array zu verschieben — er bleibt exakt an seiner ursprünglichen Position. Ehrliche Einschränkung: Das ist Einfüge-Reihenfolge, kein echter Sortierschlüssel über `e.datum`; die Text-Exporte sortieren dort ausdrücklich, unabhängig von dieser Frage. **Verifiziert:** `node --check` bestanden · Trockentest mit **19 neuen Prüfungen** (echter Prüfdurchgang, simuliertes Neuladen, Übernehmen/Ignorieren in beiden Zweigen, `pruefStark` bleibt ausserhalb von `state`) plus die bestehenden **57 Prüfungen** aus Punkt 68 erneut bestanden, alle an echten, aus `beta.html` herausgeschnittenen Funktionen · `pruefe.py`: ALLES SAUBER. **Keine neuen Sprachschlüssel** (241 unverändert, keine neuen Anzeigetexte). **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18. Dazu, ohne Codeaufwand: zwei neue Backlog-Punkte (70, 71) als reine Ideen aufgenommen, nicht gebaut.
- **Beta zuvor: v19.8.12** (`beta.html`, geliefert 3.9.2026) — **Schiedsrichter robuster: Backlog-Punkt 36 abgeschlossen und neuer Backlog-Punkt 68 gebaut (Auftrag Ondo, vier Teile).** **Teil 1 (Punkt 36, zweite Hälfte):** Der Schiedsrichter-Auftragstext verlangt jetzt zusätzlich das tatsächlich gespielte Format (Pflichtfeld `format`, `"2x45"` einschliesslich regulärer Verlängerung 2x15, sonst der abweichende Wert wie `"2x60"`/`"3x45"`, bei fehlender Angabe leer statt geraten). Meldet **ein** Lauf ein Sonderformat, wird der Eintrag sofort geparkt — **kein 90-Minuten-Wert wird erzwungen oder gerechnet**, unabhängig von den anderen zwei Läufen. Neuer eigener `parkGrund`-Wert `'sonderformat'`. Das ergänzt die Erkennung in der Spielliste (`stufeHolen()`, unverändert seit v19.8.7) und fängt auf, was dort durchrutscht (Leeds–RB Leipzig). **Teil 2 (Punkt 68):** Statt eines Laufs je Prüfrunde **drei, gleichzeitig abgeschickt** (`Promise.all`) — zwei über Gemini, einer über den bestehenden Sonnet-Rückfallpfad (`claude-sonnet-4-6`), also mindestens einer auf einem anderen Modell. Einigkeitsregel: alle drei gleich → übernehmen ohne Markierung · genau zwei gleich → übernehmen **mit** sichtbarer Markierung `e.refEinigkeit='2von3'` in Karte und Log-Text-Export (Pflichtbestandteil der Regel, kein Extra) · alle drei verschieden → parken mit dem bestehenden `parkGrund:'unstable_ref'` · weniger als drei brauchbare Läufe → nichts übernehmen, erneut fragen, **nicht** parken. Dazu vier feste Prüfungen ohne Modell (`refLaufPruefen()`): Halbzeit nie höher als der 90-Minuten-Stand (bisher nur eine Warnung, jetzt Ablehnung) · 0:0 nur mit ausdrücklichem `torlos:"bestaetigt"` · bei Verlängerung beide Stände getrennt und der Verlängerungsstand nie kleiner · Sonderformat. Ein verworfener Lauf verschwindet nicht: Rohantwort und geparster Stand bleiben, `refRohAbgleich()` zeigt ihn unverändert. **Teil 3:** Quellenprüfung als **Negativliste** (`terrikon.com`, `flashfussball.de`, Wett- und Buchmacherseiten) — ausdrücklich **keine** Positivliste und keine Rangfolge unter den übrigen Quellen; ein Lauf mit solcher Quelle bleibt sichtbar, zählt aber nicht als Beleg; drei Läufe mit derselben Quelle zählen als **ein** Beleg und werden als „3 Läufe, 1 Quelle" markiert. **Teil 4 (Diagnose):** Die App misst jetzt selbst die Dauer eines Prüflaufs (in der Bilanz) und eines Vorhersage-Laufs. **Eine Vorher-Zahl gibt es nicht und wurde nicht geschätzt** — eine Code-Sitzung hat keine API-Schlüssel und keinen Browser mit Ondos Daten (Art. 11/14, so von Ondo entschieden); beide Zahlen entstehen erst in Ondos App. **Nicht angetastet, wie im Auftrag verlangt:** `state.seedV<7`, `state.seedV<8`, der `refRoh`-Export, `refRohAbgleich()`, die Vorhersage-Läufe der Gehirne, `bttsWort`/`bttsMismatch`, `stufeHolen()`; keine rückwirkende Neubewertung von Sabah oder Celje. **Verifiziert:** `node --check` bestanden · Trockentest bestanden mit **57 Prüfungen**, ausgeführt an den **echten, aus `beta.html` herausgeschnittenen Funktionen**, nicht an einem Nachbau · `pruefe.py`: ALLES SAUBER. **7 neue Sprachschlüssel.** **Kein Schnitt in der Messreihe** — der Schiedsrichter ist Messwerkzeug, nicht Messgegenstand. **Kosten:** rund die dreifache Anzahl Schiedsrichter-Modellaufrufe, keine zusätzlichen Vorhersage-Aufrufe, und **neu echtes Geld bei Anthropic**, weil der dritte Lauf über Sonnet mit Websuche geht. **Ehrlich zu nennende Zweitwirkung:** Die strengeren Regeln lassen voraussichtlich mehr Spiele offen oder geparkt — die bekannte Verzerrung durch Parkung wird dadurch eher grösser. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.11** (`beta.html`, geliefert 2.9.2026) — **Rücknahme der manuellen Eintragung von Sabah und Celje (Auftrag Ondo).** Ondos Klarstellung: „Schiedsrichter repariert" heisst — er liefert ab sofort nur noch richtige, zuverlässige Ergebnisse für alle künftigen Spiele, **ohne Gegenprüfung im Chat**. Diese Bedingung ist nicht erfüllt, die elfte Fehlerart besteht unverändert; die Eintragung vom 30.8.2026 (v19.8.9, berichtigt in v19.8.10) war damit verfrüht. Neue Migration `state.seedV<8`: setzt bei beiden Spielen `ergebnisHeim`/`ergebnisGast` auf `null`, entfernt `ergebnisHalbzeit`, `ergebnisVerl` und `ergebnisQuelle`, setzt alle Märkte und den Eintrag wieder auf `offen`, `geparkt` wieder auf `true` und `parkGrund` wieder auf `'unstable_ref'`. **Kein Datumskriterium mehr** — Anker ist `e.ergebnisQuelle==='extern_manuell'` (dieses Feld setzen ausschliesslich die Blöcke `seedV<6`/`seedV<7`, und ausschliesslich für diese zwei Spiele), die Stichwörter bleiben als zweite, unabhängige Bedingung. Neue Gate-Nummer statt Änderung an `seedV<7`, weil `seedV<7` bei Ondo bereits gelaufen ist (die App läuft laut Bildschirmfoto vom 2.9.2026 auf v19.8.10). **Nicht angetastet, wie im Auftrag verlangt:** `state.seedV<7` selbst, `refRohAbgleich()` und der `refRoh`-Export; `e.refRoh` bleibt vollständig erhalten. **Betrifft beide Spiele, nicht nur Sabah** — der Auftrag nannte Celje als „bereits geparkt", der Code zeigte das Gegenteil; rückgefragt und von Ondo entschieden (Art. 11). Trockentest bestanden (16 Prüfungen: beide Spiele vollständig zurückgesetzt · `refRoh` unberührt · unbeteiligtes bewertetes Spiel unberührt · unbeteiligtes geparktes Spiel unberührt · gleiche Stichwörter ohne `extern_manuell` nicht angefasst · idempotent bei zweitem Durchlauf · datumsunabhängig). `node --check` bestanden. Keine neuen Sprachschlüssel. **Kein Schnitt in der Messreihe, aber ein Sprung in den Kennzahlen** — sechs bewertete Aussagen je Gehirn fallen wieder heraus, sobald Ondo diese Fassung lädt. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.10** (`beta.html`, geliefert 30.8.2026) — **Berichtigung zu v19.8.9: Celje/Sabah-Daten waren vertauscht.** *(🔴 Vermerk 2.9.2026: Der Teil dieser Lieferung, der die beiden Spiele eintrug und entparkte, ist mit v19.8.11 zurückgenommen. Die Datumsberichtigung selbst gilt unverändert: Sabah 25.8.2026, Celje 26.8.2026.)* Mehrfach extern gegengeprüft (ESPN, UEFA.com, Sofascore, TNT Sports, Flashscore, plus das KI-Log selbst): **Sabah FC–Hapoel Beer-Sheva FC = 25.8.2026, NK Celje–Slovan Bratislava = 26.8.2026** — seit v19.8.5 (28.8.2026) durchgehend umgekehrt dokumentiert und kodiert. **Codezitat zur dringlichsten Frage:** In der `seedV<6`-Migration (Zeile 548–550) müssen Datum UND beide Stichwörter gleichzeitig zutreffen; Celjes Stichwörter (`celje`,`bratislava`) können nie mit Sabahs (`sabah`,`beer`) kollidieren — eine **Vertauschung zwischen den zwei Spielen war strukturell ausgeschlossen**, die einzig mögliche Fehlwirkung eines falschen Datums war **Nicht-Zuordnung** (die Zuweisung lief ins Leere, kein Datenschaden). Diese Code-Sitzung hat keinen Zugriff auf Ondos Browser-`localStorage` und kann daher kein „vorher/nachher" an den echten Daten belegen. Statt dessen: neue, robustere Migration `state.seedV<7` (neue Gate-Nummer, weil `seedV<6` bei Ondo bereits gelaufen sein könnte und eine Änderung an derselben Nummer dann nie mehr ausgeführt würde) — akzeptiert für beide Spiele sowohl 25. als auch 26.8.2026, verlangt zusätzlich `e.geparkt===true` (nur ein von Ondo selbst geparktes Spiel kommt infrage), Stichwörter bleiben die eindeutige Unterscheidung. Der alte `seedV<6`-Block bleibt unverändert stehen (Codehistorie, mit Berichtigungsvermerk), nicht rückwirkend verändert. Trockentest bestanden: echte Daten (Sabah 25.8./Celje 26.8.) korrekt zugeordnet · bereits bewerteter Eintrag nicht überschrieben · nicht geparktes Spiel nicht angefasst · unbeteiligtes geparktes Spiel an drittem Datum unberührt · unbeteiligtes Spiel mit anderen Stichwörtern am selben Datum unberührt · Sabah und Celje vertauschen sich nie, auch bei gleichem Datum. Keine neuen Sprachschlüssel. Kein Schnitt in der Messreihe. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.9** (`beta.html`, geliefert 30.8.2026) — **Nachfrage zu Punkt 64, drei Teile.** **Teil 1 (Codezitat, keine Vermutung):** Es gibt keinen Auswahlmechanismus unter mehreren `refRoh`-Läufen — `pruefListe` wird bei jedem Druck auf „Ergebnisse prüfen" komplett neu aufgebaut (Zeile 1674: `pruefListe=[]`), `verarbeite()` berechnet den Vorschlag ausschließlich aus der aktuellen Antwort, nie aus `e.refRoh`. Frühere Läufe werden ersatzlos verworfen, nicht verglichen. **Teil 2 gebaut:** Neue Funktion `refRohAbgleich(e)` vergleicht ab jetzt geparste `refRoh`-Läufe (neues Feld `geparst` an jedem Lauf mit bestätigtem Ergebnis, ab dieser Version) auf Widerspruch bei 90-Minuten-Stand oder Verlängerung und zeigt ihn in der KI-Log-Karte an („X von Y Läufen: WERT"), statt unkommentiert einen Wert zu zeigen — Ondo entscheidet dann selbst. **Grenze:** ältere `refRoh`-Einträge ohne `geparst` (z. B. die historischen Celje/Sabah-Läufe) zählen nicht mit, wirkt nur für künftige Läufe. **Teil 3 gebaut — 🔴 am 2.9.2026 mit v19.8.11 ZURÜCKGENOMMEN, weil verfrüht (der Schiedsrichter ist nicht repariert; Einzelheiten bei v19.8.11 oben und in der Fehlerart-11-Zeile):** NK Celje–Slovan Bratislava (~~25.8.~~ **richtig: 26.8., siehe v19.8.10**) und Sabah FC–Hapoel Beer-Sheva FC (~~26.8.~~ **richtig: 25.8., siehe v19.8.10**) mit extern verifiziertem Stand von Hand eingetragen (einmalige Migration `state.seedV<6`, Muster wie die bestehende `parkGrund`-Migration), `parkGrund` entfernt, entparkt, fließen normal in die Kalibrierung ein, Herkunft ehrlich als `ergebnisQuelle:'extern_manuell'` gekennzeichnet und in der Karte sichtbar (Art. 14). Behebt nicht die elfte Fehlerart selbst, nur diese zwei Fälle. **Dabei gefunden und im selben Zug berichtigt:** ein Widerspruch in `STAND.md`s Fehlerart-11-Zeile (siehe dort) — die zuvor genannten „extern belegten Werte" waren tatsächlich zwei der ohnehin schon als unzuverlässig gelisteten App-Läufe. **3 neue Sprachschlüssel** (`refWiderspruch`, `refRunsVon`, `ergebnisManuell`). Kein Schnitt in der Messreihe. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.8** (`beta.html`, geliefert 30.8.2026) — **Nachfrage zu Punkt 64: refRoh lesbar gemacht.** Seit v19.8.5 speichert die App den rohen Schiedsrichter-Antworttext an jedem Log-Eintrag (`e.refRoh`), aber ohne Ansicht oder Export. Neuer Knopf im selben Kartenbereich wie „Log als Text" (nutzt denselben Zeitraum, keine eigene Datumsauswahl): gibt zu den im Zeitraum ausgewählten Einträgen zusätzlich den vollen `refRoh`-Text aus (Lauf-Nummer, Datum, Modell, Rohtext je Lauf); fehlt `refRoh` bei einem Eintrag (alle Einträge vor v19.8.5), erscheint „kein refRoh gespeichert" statt leerem Text. Liest nur `datum`, `anpfiff`, `match`, `wettbewerb`, `herkunft`, `refRoh` — keine Schlüsselfelder im Zugriff, dieselbe Positivauswahl wie beim bestehenden „Log als Text"-Knopf, nicht der Positivlisten-Mechanismus von Punkt 44 selbst. Kein Schnitt in der Messreihe, liest nur bestehende Daten neu aus. **2 neue Sprachschlüssel** (`refRohBtn`, `refRohEmpty`) — **mehr als die „evtl. eine Knopfbeschriftung" der Anfrage; ausdrücklich gemeldet, nicht stillschweigend:** ein zweiter Schlüssel für die Fallback-Meldung „kein refRoh gespeichert" kam dazu, weil diese Meldung wie der Rest der Ausgabe übersetzbar sein soll, nicht nur der Knopftext. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.7** (`beta.html`, geliefert 30.8.2026) — **Backlog-Punkte 36, 37, 41 gebaut.** Punkt 36: der Schiedsrichter-/Spielformat-Auftragstext schliesst jetzt namentlich Sonderformate aus (z. B. 2x60, 3x45) statt nur verkürzte Formate — reguläre Verlängerung (2x15) bleibt ausdrücklich erlaubt; Messgrösse unverändert Stand nach 90 Minuten plus Nachspielzeit. Punkt 37: `vorhersagen()` prüft vor dem Anlegen eines Eintrags, ob dasselbe Gehirn für dasselbe Spiel (Namensvarianten wie bei S1, gemeinsame Funktion `normName`) am selben Tag schon einen Eintrag geschrieben hat, und überspringt echte Duplikate — keine Begrenzung der Läufe pro Tag. Punkt 41: `wettbewerb`/`anpfiff`/`stufe` werden nicht mehr über `paket.liste[idx]` (Position), sondern über den Spielnamen aus der Antwort nachgeschlagen (dieselbe `normName`-Logik); kein Treffer in der Liste lässt die Felder leer/`null` statt sie falsch zu belegen. Trockentest bestanden: zwei Läufe desselben Spiels (Punkt 37) und ein Gehirn, das Spiele in anderer Reihenfolge als die Liste liefert (Punkt 41), je mit und ohne Treffer. Dabei bestätigt: `normName` gleicht Gross-/Kleinschreibung, Satzzeichen und Strichvarianten aus, entfernt aber keine Wörter wie „FC" — eine Variante, die sich nur dadurch unterscheidet, bleibt unerkannt (bestehende Grenze der S1-Normalisierung, unverändert durch diese Lieferung). Kein Schnitt in der Messreihe bei allen dreien. Keine neuen Sprachschlüssel. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.6** (`beta.html`, geliefert 28.8.2026) — **Nachfrage zu Punkt 64: Modellversion bei `refRoh` ergänzt.** Google liefert in der Gemini-Antwort ein eigenes Feld `modelVersion` — die tatsächlich aufgelöste Version, nicht den `gemini-flash-latest`-Alias (belegt über `ai.google.dev`). Jeder neue `refRoh`-Eintrag trägt jetzt zusätzlich `modell`: bei Gemini die aufgelöste `modelVersion` (oder `null`, falls sie ausnahmsweise fehlt — nicht geraten), bei Sonnet als Rückfallpfad der feste Modellname `claude-sonnet-4-6`. Gilt nur für künftige Läufe, keine rückwirkende Ergänzung. Keine neuen Sprachschlüssel. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.5** (`beta.html`, geliefert 28.8.2026) — **Backlog-Punkt 64 gebaut: rohe Schiedsrichter-Antwort mitgeschrieben.** Jeder Prüflauf-Durchgang (`rolle:'ref'`) hängt seinen vollen, ungeparsten Antworttext an jeden betroffenen `state.kiProtokoll`-Eintrag an (`e.refRoh`, Array — mehrere Läufe überschreiben sich nicht), unabhängig vom Status (fertig/läuft/fehlt), sofort gesichert nach jeder Runde statt erst bei Übernahme. Dazu: NK Celje–Slovan Bratislava (~~25.8.~~ **richtig: 26.8., siehe v19.8.10**) und Sabah FC–Hapoel Beer-Sheva FC (~~26.8.~~ **richtig: 25.8., siehe v19.8.10**) einmalig markiert (`parkGrund:'unstable_ref'`, neues Feld, per Stichwort+Datum gefunden — das damals kodierte Datum war vertauscht, siehe v19.8.10; die Markierung selbst wirkte dadurch möglicherweise nicht auf die echten Einträge, `e.geparkt` selbst blieb davon unberührt, weil Ondo dort manuell geparkt hatte), sichtbar im Log als Zusatzhinweis. Kein Entparken, keine Neubewertung — das bleibt der Reparatur des Schiedsrichters vorbehalten. Kein Schnitt in der Messreihe, kein zusätzlicher Modellaufruf. 1 neuer Sprachschlüssel (`parkGrundInstabil`). `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.4** (`beta.html`, geliefert 28.8.2026) — **Backlog-Punkt 51 gebaut: gepaarter Vergleich Sonnet gegen Flash** (seit 30.8.2026 in `BACKLOG-ARCHIV.md`). Neue Auswertung im Tab „Finanzen", direkt unter der Kalibrierungsanzeige: für jedes Spiel, das beide Gehirne bewertet haben (Paarung über exakten Spielnamen + Datum, kein Index — Backlog-Punkt 41 betrifft dieses Feld nicht), je Markt die Anzahl nur-Sonnet-richtig / nur-Flash-richtig / beide-richtig / beide-falsch. Reine Zahlenausgabe, keine Wertung im Code. Kein Schnitt in der Messreihe — liest nur bestehende Daten neu aus, ändert nichts an Auftragstexten oder gespeicherten Vorhersagen. 11 neue Sprachschlüssel (`gepaart*`). `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.3** (`beta.html`, geliefert 27.8.2026) — **Backlog-Punkte E und 2 gebaut** (Punkt 2 seit 30.8.2026 in `BACKLOG-ARCHIV.md`, Punkt E unverändert im Backlog). Der Schiedsrichter-Auftrag bestätigt jetzt Wettbewerb+Datum+Teams statt frei zu suchen, plus eine Vorsichtsregel gegen geratene 0:0. Flash bekommt zusätzlich seine eigene Kalibrierungs-Lehre im Auftragstext mitgeteilt (Sonnet unverändert) — **Flash-Aussagen ab hier sind mit älteren nicht mehr direkt vergleichbar**, derselbe Schnitt wie bei Punkt F. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.2** (`beta.html`, geliefert 14.8.2026, 22:36 Uhr) — **Backlog-Punkt 44 gebaut: Messdaten-Export ohne Schlüssel.** Ein zweiter Knopf unter „Mehr" gibt Vorhersagen und Wetten als Text oder Datei aus, ohne API-Schlüssel und ohne PIN. Kein Schnitt in der Messreihe. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.1** (`beta.html`, geliefert 9.8.2026, 13:55 Uhr) — **die Spielliste hat eine eigene Rolle und läuft auf `gemini-flash-latest`.** Jeder neue Eintrag trägt zusätzlich die **Stufe**. Kein Schnitt in der Messreihe. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.0** (`beta.html`, geliefert 9.8.2026, 04:15 Uhr) — **Schnitt in der Messreihe bei „beide treffen", Punkt F gebaut.** Werte vor und ab dieser Version sind bei diesem Markt nicht vergleichbar. Jeder neue Log-Eintrag trägt das Feld `codeVersion`. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.7.8** (`beta.html`, geliefert 7.8.2026) — getrennter Speicher, aktive Messphase. Vier Nachbesserungen am 3. und 4. August, alle ausgelöst durch Punkt 0a; Einzelheiten im Backlog. Im Code steht weiterhin `APP_VERSION = 18` (technische Schuld, bewusst nicht nebenbei geändert, vor der Beförderung zu klären)
- **Sprachschlüssel: 306** in DE, FR und EN, maschinell abgeglichen und identisch (**selbst gezählt von `pruefe.py` Abschnitt 13, Stand 12.9.2026**). *Verlauf: die früher dokumentierten 184 waren nie geprüft; nachgezählt waren es 185, dann 193, dann 199, dann 201 (v19.7.8), dann 203 (v19.8.1). Die acht Schlüssel des Berichtigungsknopfes vom 13.8. (`korrT` bis `korrOk`) waren nirgends nachgetragen — 203 + 8 = 211. Punkt 44 bringt sechs weitere (`messT` bis `messBlock`) — 211 + 6 = 217. Backlog-Punkt 51 (gepaarter Vergleich, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) bringt elf weitere (`gepaart` bis `gepaartMehrdeutig`) — 217 + 11 = 228. Backlog-Punkt 64 bringt einen weiteren (`parkGrundInstabil`) — 228 + 1 = 229. Nachfrage zu Punkt 64 (refRoh lesbar gemacht, v19.8.8) bringt zwei weitere (`refRohBtn`, `refRohEmpty`) — 229 + 2 = 231. Nachfrage zu Punkt 64, Teil 2/3 (v19.8.9) bringt drei weitere (`refWiderspruch`, `refRunsVon`, `ergebnisManuell`) — 231 + 3 = 234. Backlog-Punkt 68 und Punkt 36, zweiter Teil (Mehrfachlauf-Absicherung, v19.8.12), bringen sieben weitere (`refEinig2von3`, `refQuellenZahl`, `refVerworfen`, `parkGrundFormat`, `refEinAnbieter`, `refDauer`, `balGeparkt`) — 234 + 7 = 241. Backlog-Punkt 70 (Filter im KI-Log, v19.8.14) bringt zehn weitere (`filterT` bis `filterEmpty`) — 241 + 10 = 251. Backlog-Punkt 71 (KI-Log in vier Reiter, v19.8.15) bringt vier weitere (`kilogTabBewertet`, `kilogTabArchiv`, `kilogTabWerkzeuge`, `filterMannschaftPh`) und entfernt einen, ungenutzt gewordenen (`logEmpty`) — 251 + 4 − 1 = 254. Backlog-Punkt 34/35 (Brier-Score, Streuung, v19.8.21) bringen zwei weitere (`calibBrier`, `calibSpread`) — 254 + 2 = 256. Backlog-Punkt 9, Knopfdruck-Teil (Quoten-Automatik, v19.8.23) bringt elf weitere (`oddsKeyT` bis `oddsQuelle`) — 256 + 11 = 267. Backlog-Punkt 9, Ausbau (API-Football/football-data.org per Knopfdruck, v19.8.24) bringt acht weitere (`afKeyT` bis `fdOff`) — 267 + 8 = 275. Backlog-Punkt 0b (Widerspruchsquote je Markt, v19.8.25) bringt einen weiteren (`widersprT`) — 275 + 1 = 276. Backlog-Punkt 75, Teil 2 (Decision Ledger, v19.8.26) bringt drei weitere (`kiWahlLabel`, `kiWahlKeine`, `vonKi`) — 276 + 3 = 279. Die drei Behebungen und der Observation Layer (v19.8.28) bringen 23 weitere: zwei Rückfragen vor dem Löschen (`delBetAsk`, `delLogAsk`), drei für den Speicher (`saveFailAlert`, `speicherT`, `speicherEng`) und achtzehn für den Observation Layer (`beobT` bis `beobGrundlage`) — 279 + 23 = 302. Der Umstieg auf IndexedDB (v19.8.30) bringt einen weiteren (`speicherVon`) — 302 + 1 = 303. Die Korrigieren-Felder (v19.8.31) bringen drei weitere (`depKorrLabel`, `wdKorrLabel`, `korrHinweis`) — 303 + 3 = 306.* **Diese Zahl ist bei jeder Änderung an den Sprachschlüsseln in derselben Lieferung mitzuführen.**

---

## Der Schiedsrichter — elf Fehlerarten

| # | Fehlerart | Datum | Absicherung | Version |
|---|---|---|---|---|
| 1 | Urteil nicht-deterministisch | 22.7. | **Logik in festen Code** | v19.0 |
| 2 | Falsches Duell (altes 0:0 vom Januar) | 23.7. | **Datums- und Wettbewerbspflicht** | v19.2 |
| 3 | Spiel übersehen (Zeitzone Südamerika) | 23.7. | **Sichtbare Bilanz** + Zeitzonen-Hinweis | v19.4 |
| 4 | Nicht gefunden trotz Verfügbarkeit | 24./25.7. | **Automatisches Wiederholen** | v19.4 |
| 5 | „läuft noch" bei längst beendetem Spiel | 27.7. | **Zeitrechnung im Code** (2,5-Stunden-Regel) | v19.5 |
| 6 | Halbzeitstand statt Endstand | 27.7. | **Phasen-Pflicht** + Vertauschungs-Kontrolle | v19.6 |
| 7 | **Heim und Gast vertauscht** | 29.7. | *keine* — zweimal unabhängig aufgetreten | — |
| 8 | **Falscher Endstand trotz aller Prüfungen** | 30.7. | *keine* — alle Absicherungen prüfen die Form, nicht die Wahrheit | — |
| 9 | **Erfundene 0:0** | 31.7. | ~~*keine* — löst nicht einmal eine Warnung aus~~ **Seit 3.9.2026 eine TEILABSICHERUNG, nicht mehr „keine":** Ein 0:0 wird nur noch verwertet, wenn der Lauf zusätzlich ausdrücklich `torlos:"bestaetigt"` meldet; sonst wird der Lauf verworfen (Geminis „Zustand vor Ziffer" vom 8.8.2026, erstmals als Code). **Durch Trockentest belegt, dass die Prüfung greift.** **Nicht belegt und ausdrücklich nicht behauptet:** dass damit keine 0:0 mehr erfunden werden — ein Modell, das ein Ergebnis erfindet, kann ebenso die Bestätigung erfinden. **🔴 Neues Beispiel, 11.9.2026 (Ondo):** Gemini erfand scheinbar exakte Wettquoten (deckungsgleich mit einer echten Anzeige, dadurch besonders überzeugend), gestand das auf Nachfrage — aber selbst dieses Geständnis ist nicht beweisbar wahr, eine KI kann ihr eigenes Erfinden auch im Nachhinein nicht zuverlässig einordnen. Einzelheiten bei Backlog-Punkt 9 (Punkt 45, nicht hier wiederholt) | v19.8.12 (Teil) |
| 10 | **Stand aus der Verlängerung statt nach 90 Minuten** | 11.8. (gefunden 13.8.) | *keine* — Halbzeitstand, Datum, Wettbewerb und der Vermerk `n.Verl.` waren alle richtig; nur die Grenze bei Minute 90 war falsch gezogen. Im zweiten Lauf lieferte derselbe Schiedsrichter den richtigen Wert. **Seit 3.9.2026 eine TEILABSICHERUNG:** Meldet ein Lauf Verlängerung, müssen 90-Minuten-Stand und Verlängerungsstand **getrennt** genannt sein, und der Verlängerungsstand darf je Mannschaft nicht unter dem 90-Minuten-Stand liegen — sonst wird der Lauf verworfen. **Durch Trockentest belegt, dass die Prüfung greift.** **Nicht abgesichert bleibt der Fall, dass ein Lauf einen Verlängerungsstand ohne jeden Hinweis auf Verlängerung als 90-Minuten-Wert meldet** — dagegen hilft nur der Vergleich mehrerer Läufe (Punkt 68) | v19.8.12 (Teil) |
| 11 | **Schwankende Antworten bei mehreren Läufen desselben Spiels trotz Temperatur 0** | 28.8. (Fälle vom 8.8./9.8.); extern belegte Werte am 30.8.2026 berichtigt, **Datum der beiden Spiele am 30.8.2026 ein zweites Mal berichtigt**, **manuelle Eintragung am 2.9.2026 zurückgenommen** | ~~*keine, aber die zwei konkreten Fälle sind erledigt*~~ **🔴 BERICHTIGT am 2.9.2026: keine Absicherung, und auch die zwei konkreten Fälle sind NICHT erledigt** — beide Spiele stehen wieder geparkt (`parkGrund:'unstable_ref'`), siehe die Berichtigung am Ende dieser Zelle. Sabah FC–Hapoel Beer-Sheva FC (25.8.): drei Läufe, drei Endstände (5:2 / 2:2 / 3:1 n.Verl.); NK Celje–Slovan Bratislava (26.8.): drei Läufe, drei Stände (1:2 / 1:1 / 0:1). **Keiner der sechs Läufe traf den extern belegten 90-Minuten-Stand** (Sabah 3:2, HZ 1:1, n.Verl. 5:2 — Sabahs viertes Tor fiel in der 90+4., noch in der Nachspielzeit der regulären Spielzeit · Celje 1:1, HZ 1:1, n.Verl. 1:2). **🔴 Berichtigt (30.8.2026):** Diese Zeile nannte zuvor „Celje 1:2, Sabah 5:2" als extern belegten Wert — genau diese Zahlen standen aber bereits oben als einer der drei App-Läufe, ein Widerspruch zur eigenen Aussage „keiner traf", hier selbst gefunden beim Bearbeiten dieser Zeile, nicht gemeldet bekommen. **🔴 Zweite Berichtigung, selber Tag:** Die Daten der beiden Spiele standen hier (und seit v19.8.5 in „Versionen" unten) **vertauscht** — Sabah war als 26.8. eingetragen, Celje als 25.8. Mehrfach extern gegengeprüft (ESPN, UEFA.com, Sofascore, TNT Sports, Flashscore, plus das KI-Log selbst) auf **Sabah 25.8., Celje 26.8.** berichtigt. ~~Beide Spiele am 30.8.2026 mit dem jetzt korrekten, extern verifizierten Stand von Hand eingetragen (Backlog-Punkt 64, Nachfrage Teil 3, Berichtigung v19.8.10) — als `ergebnisQuelle:'extern_manuell'` gekennzeichnet, nicht vom Schiedsrichter-Lauf der App übernommen; die Zuordnungslogik ist jetzt bewusst robuster gegen eine erneute Datumsverwechslung (akzeptiert beide Tage je Spiel, Stichwörter bleiben die eindeutige Unterscheidung). Behebt **nicht** die Fehlerart selbst, nur diese zwei Fälle.~~ **🔴 ZURÜCKGENOMMEN am 2.9.2026 (Entscheidung Ondos), `beta.html` v19.8.11.** Ondo hat klargestellt, was „der Schiedsrichter ist repariert" heisst: **er liefert ab sofort nur noch richtige, zuverlässige Ergebnisse für alle künftigen Spiele, ohne Gegenprüfung im Chat.** Diese Bedingung ist nicht erfüllt, die elfte Fehlerart besteht unverändert — die Eintragung vom 30.8.2026 war damit **verfrüht** und verstiess gegen die eigene Auflage aus Backlog-Punkt 64 („Neubewertung erst, sobald die Ursache geklärt und der Schiedsrichter entsprechend repariert ist"). Neue Migration `state.seedV<8` setzt beide Einträge zurück: Endstand, Halbzeit, Verlängerung und `ergebnisQuelle` entfernt, alle Märkte wieder `offen`, `status` wieder `offen`, `geparkt` wieder `true`, `parkGrund` wieder `'unstable_ref'`. Beide fallen damit wieder vollständig aus der Kalibrierung heraus. `state.seedV<7` bleibt unverändert stehen (Codehistorie, ausdrückliche Auflage). **`e.refRoh` bleibt vollständig erhalten** — die rohen Schiedsrichter-Antworten sind der Beleg für diese Fehlerart. **Der Auftrag nannte nur Sabah und hielt Celje für bereits geparkt; der Code belegt, dass `seedV<7` beide entparkt hatte** — vor der Änderung rückgefragt (Art. 11), Ondo hat am 2.9.2026 entschieden, beide zurückzunehmen. **Die extern belegten Werte selbst bleiben richtig und stehen weiter oben in dieser Zelle** — zurückgenommen ist nur ihre Eintragung in die Messdaten, nicht die Recherche. Erstes, schwächeres Auftreten desselben Musters: Fehlerart 10 oben (Apollon Limassol – SK Brann, 13.8., zwei Läufe, zwei Werte). Die rohe Antwort wird seit v19.8.5 mitgeschrieben (Backlog-Punkt 64). **🔴 NEU am 3.9.2026 (v19.8.12, Backlog-Punkt 68) — eine konkrete Absicherung EXISTIERT jetzt, die Fehlerart ist damit NICHT behoben:** Jedes Spiel wird mit **drei gleichzeitigen Läufen** geprüft (zwei Gemini, einer Sonnet), und eine feste Einigkeitsregel entscheidet: alle drei gleich → übernehmen · genau zwei gleich → übernehmen mit sichtbarer Pflicht-Markierung `2von3` · alle drei verschieden → **parken** statt einen Wert zu nehmen · weniger als drei brauchbare Läufe → nichts übernehmen. Genau der Sabah-/Celje-Fall (drei Läufe, drei Werte) führt damit zum Parken statt zu einem übernommenen Wert. **Was belegt ist:** ein Trockentest an den echten, aus `beta.html` herausgeschnittenen Funktionen, 57 Prüfungen, alle bestanden. **Was NICHT belegt ist und ausdrücklich nicht behauptet wird:** dass der Schiedsrichter damit zuverlässig ist. Drei Läufe auf zwei Modellen sind keine drei unabhängigen Quellen, und drei einige Läufe können gemeinsam falsch liegen — am 8.8.2026 belegt (sieben von zehn Anpfiffzeiten falsch, **beide** Gehirne übereinstimmend). **Nach Ondos eigener Definition von „repariert" — zuverlässige Ergebnisse für alle künftigen Spiele ohne Gegenprüfung im Chat — ist der Schiedsrichter weiterhin NICHT repariert;** das entscheidet sich erst nach Bewährung im echten Betrieb (Stabilitätsregel), nicht mit dem Bau. Sabah und Celje bleiben unverändert geparkt. **🔴 Erste Bewährungsbeobachtung, 10.9.2026 (Ondo):** In der ersten vollen Betriebswoche seit dem 3.9.2026 hat die automatische 3-von-3-Uneinigkeitsregel kein einziges Mal ausgelöst — der einzige seither geparkte Fall (5.9.2026, Sligo Rovers–Galway United) war eine von Ondo von Hand vorgenommene Parkung wegen einer extern belegten Spielverlegung, kein Instabilitätsfall. Ein echter, positiver erster Datenpunkt, **beweist aber nicht**, dass übernommene Werte in dieser Woche tatsächlich richtig waren — Einzelheiten bei Backlog-Punkt 68 (Punkt 45, nicht hier wiederholt). **🔴 Sabah und Celje sind seit 10.9.2026 nicht mehr geparkt (Ondo, über den „Wieder prüfen"-Knopf).** Beide Spiele lieferten diesmal je einen einzigen, nicht widersprüchlichen Vorschlag (Celje 1:1, HZ 1:1, n.Verl. 1:2 · Sabah 3:2, HZ 1:1, n.Verl. 5:2 — dieselben Werte wie die extern belegten oben), zusätzlich per Websuche gegen je zwei unabhängige Quellen bestätigt, und von Ondo übernommen. **Ausdrücklich nicht behauptet:** dass der Schiedsrichter im Sinn von Ondos eigener Definition „repariert" ist — nur, dass diese zwei konkreten Fälle jetzt einzeln gelöst sind, mit frischem Prüflauf und externer Gegenprüfung, nicht mit der zurückgenommenen Rekonstruktion vom 2.9.2026. Einzelheiten bei Backlog-Punkt 64 (Punkt 45, nicht hier wiederholt) | v19.8.12 (Absicherung, keine Behebung) |
| — | ~~Dasselbe Spiel doppelt in der Spielliste~~ | 3.8. | **VERSCHOBEN am 7.8. (Ondo) in die eigene Tabelle „Die Spielliste" weiter unten.** Sie ist Datenhygiene, kein Schiedsrichterurteil — Geminis eigene Einordnung vom 4.8. | — |

**Die wichtigste Erkenntnis (25.7.):** Alle drei KIs urteilten unabhängig, Ergebnisse unterklassiger Spiele seien nicht beschaffbar. **Das war falsch.** Ondo drückte den Prüf-Knopf mehrfach: 2 von 7, dann 4 von 7, schließlich 7 von 7. Es war kein Verfügbarkeits-, sondern ein Zuverlässigkeitsproblem.

**Was weiterhin gilt:** Ondos manuelle Kontrolle hat **jeden** Fehler gefangen, den die Automatik durchgelassen hat.

**Bekannte Lücke:** Die Wiederholung greift nur bei „nicht gefunden". Ein einmal als *fertig* gemeldetes Ergebnis wird nie wieder hinterfragt.

---

## Die Spielliste — drei Fehlerarten

*Eigene Tabelle, beschlossen von Ondo am 7.8. Die Prüfer hatten empfohlen, den Doppeleintrag als **zehnte** Fehlerart des Schiedsrichters zu führen. Dagegen sprach: Alle neun Schiedsrichter-Fehlerarten sind Fehler beim **Ablesen von Ergebnissen**. Die Spielliste erzeugt ihre Probleme, bevor der Schiedsrichter überhaupt beteiligt ist. Beides in einer Tabelle zu führen hätte eine Tabelle ergeben, die vorgibt, über den Schiedsrichter zu sprechen, und in Wirklichkeit zwei Dinge vermischt.*

| # | Fehlerart | Datum | Absicherung | Wirkung auf die Messung |
|---|---|---|---|---|
| S1 | **Dasselbe Spiel doppelt in der Liste** — „Bohemians – Galway United FC" (20:00) und „Bohemians Dublin – Galway United" (19:00) | 2.8., erneut 6.8. (Salzburg – Pafos) | *keine* — die Doppelten-Sperre in `spielListeHolen` vergleicht Buchstaben; zwei Schreibweisen sind für sie zwei Spiele | **sechs bewertete Aussagen je Gehirn aus einem Spiel statt drei**, und eine der beiden Anpfiffzeiten ist falsch |
| S2 | **Falsche Anpfiffzeiten** — drei Tage in Folge, **drei verschiedene Muster**: neun Stunden starr (5.8.) · null bis drei Stunden ungleich (6.8.) · eine Stunde gleichmäßig (7.8.) | 5.–7.8. | *keine* — Sofortmaßnahme ohne Code: erst spätabends prüfen | **die Anpfiffzeit geht in die 2,5-Stunden-Regel des Schiedsrichters ein.** Alle drei Muster zeigen in dieselbe gefährliche Richtung: zu früh |
| S3 | **Erfundene Spiele** — vier frei zusammengesetzte Paarungen und eine bereits gespielte, alle als „UEFA Conference League Qualifikation" am 7.8. datiert | 7.8. | *keine* | **zehn Vorhersagen geparkt.** Zu solchen Spielen kann nie ein Ergebnis entstehen; der Schiedsrichter hätte danach gesucht |

**Was alle drei teilen: Die Ursache ist bei keiner bekannt (Art. 11), und gegen keine ist etwas gebaut worden.** Bei S2 und S3 ist zusätzlich unbekannt, warum derselbe Auftrag am selben Tag einmal Unbrauchbares und einmal Belegtes liefert.

**🔴 Bekannte Verzerrung, die neben jeder dieser Zahlen mitzulesen ist:** Geparkte Einträge werden nie bewertet. Damit fällt systematisch der Rand weg, an dem sich Überzuversicht zeigen würde. Sonnet hat dort keine bewertete Aussage, Flash fünf.

> **🔴 BERICHTIGT am 15.8.2026 (Chat 17).** Hier stand bis heute: *„50 der 190 Einträge sind geparkt … **und nur bei einem der beiden Gehirne**."* **Beides ist überholt.** Die Auswertung der Rohdaten vom 14.8. hat ergeben: **Die Parkung verzerrt BEIDE Gehirne**, bei Sonnet stärker — geparkt wird bei beiden systematisch das Entschlossenere. Es sind **54 geparkte Einträge**, nicht 50, und der Bestand ist 330/327, nicht 190. **In welche Richtung sich die Kennzahlen ohne die Parkung verschieben würden, ist nicht bestimmbar** (Art. 11) — geparkte Einträge haben kein Ergebnis. Einzelheiten in `CHRONIK-2026-08.md`, „Der 14. August".
>
> **Wie das hierher kam:** Bei der Trennung am 15.8. wurde dieser Abschnitt unverändert nach `STAND.md` übernommen, ohne zu prüfen, ob sein Inhalt noch gilt. **„Nichts löschen, nur verschieben" hat eine widerlegte Aussage mit in die Datei getragen, die nur Gültiges enthalten soll.** Gefunden, weil Chat 18 sie im Kontrollexamen korrekt wiedergab.

**🔴 Zur Genauigkeit:** Die Abweichung ist auf **mehrere Prozentpunkte** genau, nicht auf einen — **bei beiden Gehirnen**. *(Verlaufsangabe vom 8.8.: bei damals 180 Aussagen lag sie mit 90 % zwischen rund 4 und 15 %. Die heutigen Bereiche stehen im Messstand.)* Der wochenlang berichtete Vorsprung „5 gegen 9" lag vollständig im Rauschen.

**Ehrliche Einordnung (Art. 14):** Die Spielliste erzeugt inzwischen fast so viele ungelöste Probleme wie der Schiedsrichter, über den seit dem 22. Juli geredet wird. Das stand bis zum 7. August nirgends zusammen, weil jeder Fund einzeln eingetragen wurde.

**Was NICHT folgt:** dass die Spielliste defekt ist. Am 6.8. lieferte sie nacheinander null, ein und zehn Spiele; am 7.8. erst Erfundenes, dann Belegtes. Das ist Unzuverlässigkeit, nicht Ausfall — die Unterscheidung aus Arbeitsregel D.

---

## Arbeitsweise (wichtig für neue Chats)

### Dateizugriff — der Eintrag vom 23.7. ist ÜBERHOLT

**Alte Fassung (falsch):** „Raw-Links funktionieren nur bei Claude. ChatGPT und Gemini brauchen Dateien als Anhang."

**Richtig (Befund vom 30.7.):** ChatGPTs Web-Werkzeug scheitert an `raw.githubusercontent.com` und an `.md`-Dateien wegen des Formats — und es **sucht**, statt direkt abzurufen. GitHub Pages wandelt Markdown aber automatisch in HTML um. Diese Adressform funktioniert:

```
https://ondo-control.github.io/Ondo-Control/PROJEKT-STATUS.html
https://ondo-control.github.io/Ondo-Control/Ondo-Control-Backlog.html
https://ondo-control.github.io/Ondo-Control/Blueprint.html
https://ondo-control.github.io/Ondo-Control/Ondo-Core-Architektur.html
```

**Folgen:**
- Prüfer bekommen **Links statt Anhänge**. Kein Upload-Kontingent, immer aktueller Stand.
- `beta.html` wird ChatGPT bewusst **nicht** gegeben, nur auf ausdrückliche Nachfrage.
- Der **Sperrvermerk für Übergabemappen gilt verschärft**. Die Mappe darf unter keinen Umständen ins Repo.
- ~~Gegenprobe mit Gemini steht noch aus.~~ **Gegenstandslos seit 28.8.2026** — Gemini ist seither nicht mehr am Projekt beteiligt (Entscheidung Ondos).
- **Handgeschriebene Projektzusammenfassungen in Übergaben sind zu unterlassen.** ChatGPTs eigene Mappe vom 30.7. war an sechs Stellen veraltet. Eine Übergabe verweist auf die Dokumente, sie fasst sie nicht nach Gedächtnis zusammen.

**⚠ Für Claude gilt weiterhin: Raw-Links immer mit angehängter Zahl abrufen**, z. B. `…/PROJEKT-STATUS.md?v=20260731`. Ohne diesen Zusatz kann eine veraltete Zwischenkopie zurückkommen. Zweite Falle: In hochgeladenen Chat-PDFs steht die alte Fassung dieses Dokuments im Volltext.

**Vermerk (28.8.2026, Entscheidung Ondos): ChatGPT hat jetzt eigenen GitHub-Zugriff** und liest den Projektstand direkt im Repo, statt über die GitHub-Pages-Adressen oben. Der GitHub-Pages-Weg bleibt hier als Rückfallweg stehen, nicht gelöscht — falls der direkte Zugriff einmal ausfällt. **Der Sperrvermerk für Übergabemappen weiter oben gilt dadurch unverändert weiter, und wird eher wichtiger, nicht unwichtiger:** Ein Beteiligter mit direktem Repo-Zugriff könnte eine versehentlich committete Mappe genauso lesen wie jede andere Repo-Datei.

### Keine Lieferung ohne Buchführung (Arbeitsregel F, 29.7.)
- **Backlog:** jede Entscheidung sofort eintragen, in derselben Antwort. Bei Code-Lieferungen kommt die Backlog-Datei mit dem Code zusammen.
- **Dieses Dokument:** am Ende eines Arbeitstags mit Änderungen, und zwingend vor jeder Chat-Übergabe.
- **Blueprint / Ondo-Core:** nur bei Verfassungs- und Architekturentscheidungen.
- **Ondos Kontrollsatz nach jeder Lieferung: „Und die Dokumente?"** Der wirksame Teil der Regel — er kommt nicht von der KI.

### Berichte an die Prüfer
Dateiname beginnt mit Datum und Uhrzeit: `2026-07-31_1430_Ondo-Control_Thema.md`
- Antwort an alle drei richten, nicht nur an Ondo *(bis 28.8.2026: vier — Gemini seither nicht mehr beteiligt)*
- Einfache Sprache, Fachbegriffe beim ersten Mal erklären
- **Höchstens zwei geschlossene Fragen** (Ja/Nein plus ein Satz)
- **Ausnahme:** Bei Problemen ohne erkennbare Lösung wird eine Frage ausdrücklich **offen** gestellt. **Lehre: Ein Format, das nur abfragt, bekommt keine Mitarbeit.**
- Ausdrücklich hinschreiben, was **nicht** Thema ist
- Eigene Zweifel mit zur Prüfung stellen

**Zusammenfassungen:** Claude schlägt von selbst vor: *„Zeitpunkt für eine Zusammenfassung zum Teilen mit den Projektpartnern wäre angebracht. Jetzt durchführen — Ja/Nein?"* Bei Nein sofort einen Ersatzzeitpunkt nennen.

**Erklärpflicht:** Ondo kann nichts entscheiden, was er nicht versteht. Vor jeder Entscheidung in Alltagssprache erklären. **Bildliche Vergleiche haben sich als hinderlich erwiesen — konkret bleiben.**

**Nie empfehlen, Ergebnisse von Hand nachzuschlagen.** Seit dem 25.7. abgelehnt. Die Zuverlässigkeit des Schiedsrichters gehört zum Test, nicht in Ondos Freizeit. Zwei Claude-Instanzen sind trotzdem darauf zurückgefallen.

**Datensicherung:** Ondo regelmäßig daran erinnern.
**🔴 Speicherproblem GELÖST, 12.9.2026 (Ondo: „Ich will eine dauerhafte Lösung, keine Dateien
Löschen!!"):** Ondos Browser hatte das Speichern bei **2.726 KB (2,7 MB)** Belegung
abgelehnt — bestätigt: genug freier Speicherplatz auf dem iPhone selbst, das Problem lag an
`localStorage`s fester, kleiner Grenze je Webseite, nicht am Gerät. **v19.8.30 stellt die
gesamte Speicherung auf `IndexedDB` um** — einen zweiten, eingebauten Speicherbereich mit
weit grösserer Grenze, ohne dass etwas gelöscht werden musste. Einzelheiten unter „Versionen".
**🔴 Ondos einmaliger Schritt nach dem Update:** Da der aktuelle Stand nur im Arbeitsspeicher
seines Browsers lebte (nie erfolgreich gespeichert), zeigt die App nach dem Laden von v19.8.30
zunächst wieder einen älteren Stand. Ondo muss danach **einmal** seine zuletzt exportierte
Sicherungsdatei über „Sicherung laden" einspielen — ab dann läuft alles im neuen, grossen
Speicher automatisch weiter. **🔴 Erste Bewährungsbeobachtung, 12.9.2026 (Ondo, direkte
Aussage aus der App, berichtigt am selben Tag):** Eintrag im KI-Log geparkt/entparkt, **die
Safari-App selbst vollständig geschlossen und neu geöffnet** (nicht nur die Seite neu
geladen — Ondos eigene Berichtigung, das ist der stärkere der beiden möglichen Tests) —
„Hat funktioniert". Bildschirmfotos zeigen dabei: 505 Vorhersagen, 6 Wetten weiterhin
vollständig im Speicher, „Belegter Speicher: 2.740 KB von 39.332 MB (0 %)" — die vom Gerät
selbst gemeldete Grenze. **Ein einzelner Test ist keine abgeschlossene Bewährung**
(Stabilitätsregel, Art. 14) — Einzelheiten bei Backlog-Punkt 76.
**Letzte bestätigte Sicherung: 4.9.2026, 09:33 Uhr** — 403 Vorhersagen, 6 Wetten. Davor: 2.9., 17:33 Uhr (403 Vorhersagen, 6 Wetten, im Bildschirmfoto der App sichtbar) · 16.8., 10:47 Uhr (293 Vorhersagen) · 14.8., 22:53 Uhr (nach dem Einbau von v19.8.2) · 14.8., 22:22 Uhr (vor der Lieferung) · 14.8., 07:14 Uhr (nach der Uebernahme der zehn Endstaende) · 13.8., 18:38 Uhr (nach der Berichtigung), 16:28 Uhr (293 Vorhersagen) und 09:17 Uhr. Früher: 8.8., 07:54 Uhr (210 Vorhersagen) · 7.8., 08:00 Uhr · 6.8., 08:28 Uhr (170 Vorhersagen) · 5.8., 13:06 Uhr · 4.8., 17:58 Uhr (138 Vorhersagen) · 3.8. · 2.8. · 31.7., 07:49 Uhr. ⚠ **Vor jeder Codelieferung ist eine frische Sicherung zu verlangen.**

*Diese Zeile ist eine **Standsangabe**, keine Verlaufsangabe. Sie stand vom 7. bis zum 14. August auf dem 7.8. und war damit sechs Tage falsch, während zwei andere Stellen des Dokuments den richtigen Wert trugen. Seit dem 14.8. prüft `pruefe.py` sie gegen die jüngste Sicherungsangabe im Dokument.*
*Am 4.8. hat sich die Sicherung bewährt: Ondo hat den Browserverlauf gelöscht, Safari löschte dabei den Websitespeicher mit, alle Daten waren weg — und wurden vollständig wiederhergestellt. **Nichts verloren.** Zwei bekannte Verlustwege: Browserdaten löschen · getrennter Speicher Safari gegen Startbildschirm.*
*Hinweis (3.8.): Die Sicherungsdatei enthält `apiKey`, `geminiKey` und `pin` im Klartext. Sie darf nie an ChatGPT oder Gemini gehen, nie an einen Bericht angehängt und nie ins Repo. Ondo hat am 3.8. beide Schlüssel neu erzeugt und die alten deaktiviert. **Folge: Eine Sicherung von vor dem 3.8. überschreibt beim Zurückladen die neuen Schlüssel mit den toten alten** — dann Schlüssel neu eintragen, die Messdaten bleiben unberührt.*

**Nutzungslimit-Schätzung (Backlog-Punkt 56, 27.8.2026, seit 30.8.2026 in `BACKLOG-ARCHIV.md`):** Anthropic veröffentlicht keine festen Zahlen; dieses Feld wird nur gelegentlich von Ondo per Bildschirmfoto kalibriert, keine Automatik, keine feste Häufigkeit. **Zuletzt gesehen: 29.8.2026, 22:52 Uhr** (Screenshot-Zeit; Ondo nannte im Begleittext 22:51 Uhr, eine Minute Differenz, hier die im Bild selbst sichtbare Zeit übernommen) — aktuelle 5-Stunden-Sitzung 12 % verbraucht (Reset in 4 Std. 57 Min.), Wochenlimit „Alle Modelle" 54 % verbraucht (Reset Donnerstag 03:59 Uhr), Nutzungsguthaben weiterhin 0 Punkte, Funktion ausgeschaltet. *(Diese Ablesung ersetzt die vom 28.8.2026, 21:43 Uhr — 49 % / 47 % — vollständig, nicht ergänzend.)* Cloud-/Code-Sitzungen und Chat teilen sich dasselbe Kontingent (belegt über `support.claude.com`, 27.8.2026).

**⚠ Zwei verschiedene Zahlen, nicht verwechseln:** Die 5-Stunden-Sitzung setzt sich alle fünf Stunden zurück und sagt nichts über den Tag als Ganzes — die 12 % von 22:52 Uhr am 29.8. gehören zu einem neuen, eigenen Fenster, nicht zu den 49 % vom Vorabend. Das Wochenlimit summiert dagegen über die ganze Woche seit dem Reset (Donnerstag 03:59 Uhr). **Am 28.8. liefen laut Ondo insgesamt DREI verschiedene 5-Stunden-Sitzungsfenster nacheinander**, das Wochenlimit stieg an diesem einen Tag von 26 % auf 47 % (21 Prozentpunkte). **Über Nacht/in den 29.8. hinein ist es weiter auf 54 % gestiegen — ein Anstieg von 7 Prozentpunkten seit dem 28.8., 21:43 Uhr**, verteilt auf die Sitzungen unten (h)–(j) sowie eventuell weitere, nicht selbst berichtete Nutzung. Einzelheiten in den Sitzungs-Selbstauskünften.

**Richtwert aus dem Tagesverbrauch (27.8.2026, grobe Schätzung, keine Messung):** Die drei Sitzungen zusammen haben nach eigener Angabe rund 42 Prompts und deutlich mehr als 1.000 KB an gelesenem und geschriebenem Text bewegt — allein in dieser Sitzung wurden `STAND.md`, `Ondo-Control-Backlog.md`, `Blueprint.md`, `beta.html`, die Messdaten-Datei und das KI-Log zusammen rund 900 KB an Dateien genannt (real gemessen mit `wc -c`, nicht geschätzt); die beiden anderen Sitzungen berichten vergleichbare Grössenordnungen (volle Pflichtlektüre, mehrfache Dokumentabrufe, Web-Suchen), ohne dass eine genaue Byte-Zahl dafür vorliegt. **Grober Richtwert, nur zur Einordnung:** rund 1 Megabyte Textverkehr über drei gleichzeitige Sitzungen an einem Tag entsprach rund einem Viertel des Wochenlimits. **Das ist keine Formel** — Denkaufwand und Werkzeugaufrufe kosten zusätzlich, unabhängig von reiner Textmenge —, nur ein Anhaltspunkt für die Grössenordnung.

**Sitzungs-Selbstauskünfte zum 28.8.2026 (ausdrücklich Selbsteinschätzungen der jeweiligen Sitzung, keine gemessenen Werte — Art. 14; chronologisch nach Zeitpunkt der Auskunft):**

a) **Gestrige Code-Sitzung (Kamm für heutige Arbeit):** 2 Prompts, Aufwand sehr gering (reiner Text, keine Dateizugriffe, kein Commit), Kosten geschätzt 2–3 KB gesamt — deutlich unter dem Richtwert vom 27.8. (rund 23,8 KB/Prompt bei Sonnet 5/Mittel).
b) **Unabhängige externe Prüfung der 18 Spielergebnisse:** 2 Prompts. Prompt 1 sehr hoher Aufwand (rund 30 Websuchen plus ein `web_fetch`, 18 Einzelspiele), geschätzt 80–150 KB Rohmaterial. Prompt 2 (Selbsteinschätzung) niedriger Aufwand, 2–4 KB.
c) **Unabhängige Job-Recherche-Sitzung** (Modell Haiku 4.5, 2 Prompts, Aufwand gering): < 1 KB.
d) **Chat-Sitzung Chat 25, Sonnet 5/Mittel — Endstand 17 Prompts:** ab dem Wechsel auf den 28.8. in der App bis zur Übergabe an Chat 26 (Stand mittags: 15 Prompts; Endstand abends 21:43 Uhr: 17). Aufwand hoch bis sehr hoch: mehrere vollständige Abrufe von `STAND.md` und Backlog (verschiedene Commit-Stände), ein vollständiger Abruf von `CHRONIK-2026-08.md`, fünf ausgelesene Webarchive (Sky Sport, ESPN, Leeds United, Sportschau, zwei OneFootball-Seiten), rund ein Dutzend Bildschirmfoto-Analysen, mehrfaches Gegenprüfen von Code-Berichten gegen frische Dokumente. Kosten deutlich über dem Richtwert vom 27.8. — allein die Dokumentabrufe liegen grob geschätzt bei über 200 KB, eine genaue Gesamtzahl wäre Scheinpräzision.
e) **Diese Code-Sitzung, Stand 13:33 Uhr** (Fassung 48, Merge nach `main`, Übergabe an Chat 26): bislang 3 Nutzernachrichten heute (28.8.). Die erste mit vollständiger Pflichtlektüre aller vier Dokumente (STAND, Backlog, Blueprint, Ondo-Core, zusammen rund 120 KB), einer Codeuntersuchung an mehreren Stellen in `beta.html`, zwei Websuchen und drei Dateiänderungen mit Commit und Push. Die zweite (Raw-Links) gering. Die dritte (dieser Auftrag) mit Merge nach `main`, erneuter Dokumentbearbeitung und dieser Übergabemappe. Aufwand insgesamt hoch bis sehr hoch, am ehesten vergleichbar mit (d) — grob geschätzt eher über als unter 200 KB bewegtem Text, ebenfalls ohne genaue Gesamtzahl (Scheinpräzision vermeiden). Diese Selbsteinschätzung ist nicht unabhängig gegengeprüft.
~~f) Chat-Sitzung Chat 26, Stand 21:43 Uhr, 17 Prompts, „eigene neue Sitzung, nicht dieselbe wie (d)"~~ **ENTFÄLLT — siehe Berichtigung 29.8. unten.** War in Wahrheit dieselbe Auskunft wie (d), oben bereits eingerechnet.
g) **Diese Code-Sitzung, Stand 21:43 Uhr — seit (e) bis einschliesslich dieses Auftrags:** 12 weitere Prompts (Übergabemappe- und Abnahme-Erstellung an Chat 26, Leeds-Park-Status-Berichtigung, Beteiligtenkreis-Aktualisierung, Backlog-Punkt 51 (seit 30.8.2026 in `BACKLOG-ARCHIV.md`) gebaut, Backlog-Punkt 64 gebaut samt Celje/Sabah-Markierung, Nachfrage Modellversion bei `refRoh`, dieser Nutzungsdaten-Auftrag). Aufwand sehr hoch — deutlich über „Mittel": drei vollständige Plan-Modus-Bauzyklen mit Codeuntersuchung in `beta.html`, Edits, `node --check`, Python-Rechenproben und `pruefe.py`-Läufen (mindestens acht Läufe insgesamt), zwei Websuchen, sechs Commits mit Push, mehrere vollständig neu geschriebene Planungsdateien (je 100–200 Zeilen). Kosten grob geschätzt **eher im Bereich 400–700 KB** bewegten Textes für diese 12 Prompts — deutlich über dem Richtwert von 23,8 KB/Prompt (das entspräche nur rund 286 KB bei „Mittel"), keine genaue Zahl (Scheinpräzision). Nicht unabhängig gegengeprüft.

> **🔴 BERICHTIGT, noch am selben Abend (28.8., nach Ondos Rückfrage).** Hier stand bis eben: (d) sei „zuletzt aktualisiert 21:43 Uhr" auf „17 Prompts" — als wäre die 21:43-Uhr-Auskunft (damals Punkt f) dieselbe Sitzung, nur später fortgeführt (15→17). **Das war falsch, aus blosser Textähnlichkeit hergeleitet statt belegt (Arbeitsregel H).** Die Übergabe Chat 25 → Chat 26 ist in dieser Sitzung selbst dokumentiert (Übergabemappe und Abnahme, weiter oben) — (d) ist Chat 25, bis zur Übergabe, (f) ist Chat 26, eine eigene neue Sitzung danach. Beide stehen jetzt getrennt.
>
> **🔴 ZURÜCKBERICHTIGT am 29.8.2026 (Ondo korrigiert seine eigene Aussage vom 28.8.).** Die Berichtigung von eben war selbst falsch. Ondo hatte den Selbstauskunft-Prompt versehentlich noch im alten Chat-Fenster (Chat 25) abgeschickt, nicht in Chat 26 — die „21:43-Uhr-Auskunft" war also tatsächlich Chat 25s eigener Endstand (17 Prompts), keine zweite, neue Sitzung. **Der allererste Stand (15→17 in einer Sitzung) war die ganze Zeit richtig.** Chat 26 hat am 29.8. eine eigene, echte Selbstauskunft für seine gesamte Sitzung geliefert — siehe (h) unten. Lehre: Auch eine Ondo-Korrektur ist eine Aussage, die geprüft werden kann, sobald neue Belege vorliegen — nicht automatisch die letzte, endgültige Fassung.

**Sitzungs-Selbstauskünfte zum 29.8.2026 (ausdrücklich Selbsteinschätzungen der jeweiligen Sitzung, keine gemessenen Werte — Art. 14):**

h) **Chat 26, gesamte Sitzung (28.8.–29.8.2026):** 24 Nachrichten insgesamt, davon 22 auf Sonnet 5/Mittel und 2 auf Opus 5/Mittel (sechs der 22 vor dem Opus-Abschnitt, sechzehn danach). Aufwand hoch bis sehr hoch: vollständiger Abruf aller vier Pflichtdokumente zu Sitzungsbeginn, zwei hochgeladene Übergabedokumente, mehrere hochgeladene Textdateien mit Code-Plänen und -Berichten, sechs Bildschirmfoto-Analysen der App, eine hochgeladene KI-Log-Textdatei, wiederholtes Gegenprüfen von Plänen und Ergebnismeldungen aus Code-Sitzungen gegen die eigenen Aufträge. Keine Websuchen nötig (alles aus mitgelieferten Dokumenten/Bildern) — drückt den Aufwand etwas, ändert aber nichts an der Menge des bewegten Materials. **Richtwert-Vergleich:** 22 Prompts × 23,8 KB ergäbe rechnerisch rund 524 KB; die eigene Einschätzung liegt darüber, grob **700–900 KB**, weil (1) der allererste Austausch allein durch die vier Pflichtdokumente bereits über 100 KB in einem einzigen Schritt bewegte, nicht gleichmässig verteilt, und (2) sechs Bildanalysen einen Aufwand verursachen, der sich nicht in KB reinen Texts ausdrückt und im Richtwert nicht mitgerechnet ist. Keine exakte Zahl, nicht unabhängig gegengeprüft.
i) **Unabhängiger Chat, 29.8.2026 — nicht Ondo-Control, aber gleiches Kontingent (Cloud-/Code-Sitzungen und Chat teilen sich das Wochenlimit):** 2 Prompts. Nachricht 1 (Opus 5/Hoch, Echo-Show/JARVIS-Recherche): sehr hoher Aufwand, rund 20 Recherchevorgänge (Websuchen und Seitenabrufe), darunter mehrere umfangreiche `developer.amazon.com`-Dokuseiten mit vollständiger Navigationsstruktur, Synthese zu einer langen strukturierten Antwort — geschätzt 250–400 KB, klar über dem Richtwert (teurere Modellstufe plus rund 20 Werkzeugaufrufe mit sehr grossen Rückgaben). Nachricht 2 (Sonnet 5/Mittel, die Selbstauskunft selbst): geringer Aufwand, kein Werkzeugaufruf, ein kurzer Speicher-Abruf (~2,5 KB), geschätzt 10–18 KB. Summe grob 260–420 KB. **Keine exakte Token-Zahl verfügbar** — die berichtende Sitzung hat ausdrücklich keinen Einblick in echte Token-/Kostentelemetrie, nur eine Schätzung nach sichtbarem Aufwand.
j) **Diese Code-Sitzung, für diesen Auftrag (29.8.2026, Korrektur der Chat-25/26-Verwechslung plus Nutzungsdaten-Nachtrag):** 1 Nutzernachricht. Aufwand mittel: `git fetch`/`checkout`/`merge`, Lesen des bestehenden Nutzungslimit-Abschnitts, mehrere gezielte Textkorrekturen in `STAND.md` (keine neue Recherche, kein `beta.html` betroffen), `pruefe.py`, Commit und Push stehen noch aus. Geschätzt rund 15–25 KB bewegten Textes — nahe am Richtwert für „Mittel", eher am oberen Rand wegen der längeren Zitate aus dem bestehenden Dokument. Nicht unabhängig gegengeprüft.

**Richtwert überprüft, Stand 21:43 Uhr, 28.8. (Teil 3 des damaligen Nutzungsdaten-Auftrags) — 23,8 KB/Prompt blieb bestehen.** *(Hinweis 29.8.: Diese Prüfung zählte damals fälschlich sieben Selbstauskünfte statt sechs, weil (f) noch als eigener Punkt galt — mit (f) zurückgenommen sind es wieder sechs: (a), (b), (c), (d), (e), (g). Das Ergebnis ändert sich dadurch nicht.)* Keine der sechs Auskünfte stuft sich selbst als „Mittel" ein — sie liegen an den beiden Enden, entweder „sehr gering" ((a), (c)) oder „hoch bis sehr hoch" ((b), (d), (e), (g)). Ein Durchschnitt darüber würde unvergleichbare Aufwandsstufen vermischen statt „Mittel" neu zu kalibrieren. **Richtwert blieb deshalb unverändert (23,8 KB/Prompt, Stand 27.8.2026)** — weiterhin grober Anhaltspunkt, keine Formel.

---

## Claude Code auf dem Tablet — die neue Arbeitsweise (Punkt 46, 16.8.2026)

*Eingerichtet am 16.8.2026. **Noch nicht bewährt:** ein geglückter erster Versuch ist kein Nachweis von Zuverlässigkeit (Stabilitätsregel).*

> **🔴 BERICHTIGT am 16.8.2026, nachmittags (Chat 19).** Hier stand bis heute: „Das erste Hochladen vom Tablet hat noch nicht stattgefunden." **Das war seit dem Vormittag des 16.8. nicht mehr richtig** und stand im selben Abschnitt im Widerspruch zum Absatz „Der erste Durchlauf hat funktioniert" weiter unten — Fehlerart C4. Ondo bestätigt: Repo, Tablet und Projektkopien sind seither auf demselben Stand. **Unverändert bleibt: Punkt 46 gilt weiterhin nicht als bewährt.**

**Was auf dem Surface Go steht:** die Desktop-App mit den Bereichen „Chat und Cowork" und „Code" · Git 2.55.0 · Python 3.14.7 · der Ordner `Claude-Ondo-Control-Repo` unter Dokumente, frisch von GitHub geholt und mit dem Verzeichnis verbunden.

**Was das ändert:** Im Bereich „Code" liest Claude eine Datei erst, wenn es sie braucht, und nur die nötige Stelle. Es ändert direkt und kann die Änderung selbst zu GitHub schicken. **Das Hochladen von Hand zu GitHub entfällt, seit der erste Versuch am 16.8. geglückt ist.** 🔴 Berichtigt (Chat 19): Das gilt ausschliesslich für den Weg zu GitHub. **Der Projektordner der App bleibt weiterhin Handarbeit** — er liegt bei Anthropic, nicht auf dem Tablet, und Claude Code schreibt nur auf die Platte des Geräts. Genau deshalb steht Punkt 53 im Backlog.

**Drei Auflagen, die dauerhaft gelten:**
- Die Sicherungen mit `apiKey`, `geminiKey` und `pin` und die Übergabemappen liegen **außerhalb** des Repo-Ordners und werden dort nie geöffnet.
- `pruefe.py` liegt in einem eigenen Ordner daneben, damit es nicht ins Verzeichnis gerät. Es gehört nicht ins Repo.

  > **BERICHTIGT am 21.8.2026, 16:12 Uhr (Chat 21, Entscheidung Ondos).** Diese Auflage gilt nicht mehr. `pruefe.py` liegt ab heute im Repo. Geprüft wurde vorher der gesamte Inhalt des Skripts: es enthält keine Schlüssel, keine PIN, keinen Gerätepfad und keine Messdaten. Der ursprüngliche Grund — es soll auf dem Tablet nicht versehentlich ins öffentliche Verzeichnis geraten — ist damit gegenstandslos. **Folge:** Eine Cloud-Sitzung findet das Skript jetzt selbst und kann Arbeitsregel M ohne Handarbeit erfüllen.

- Der alte Ordner mit Ondos Handkopie bleibt liegen, wird aber **nicht mehr für GitHub benutzt.** Sonst gäbe es zwei Stellen, die beide als die richtige gelten.

**Zwei ungeklärte Stellen (Art. 11):**
- Läuft `pruefe.py` aus einem anderen Ordner, meldet sein Abschnitt 2 die eigene Datei als fehlend. Zu klären, bevor das Tablet zum ersten Mal eine Datei ausgibt.
- Der Repo-Ordner liegt unter OneDrive. Ob OneDrive beim Hochladen dazwischenfunkt, ist **ungeprüft**. Erst wenn es auftritt, wird der Ordner verschoben — nicht vorher.

**Beim Abgleich mitgefunden:** `lesetest.html` im Verzeichnis stammt von einem Versuch, ob ChatGPT HTML-Dateien lesen kann (Ondo, 16.8.). Sie gehört zu keinem offenen Punkt.

**Der erste Durchlauf hat funktioniert (16.8.):** vier Dokumentdateien vom Tablet zu GitHub hochgeladen, ohne Handarbeit. `pruefe.py` lief dort aus seinem eigenen Ordner heraus und meldete dasselbe wie der Lauf im Chat. **Ein geglückter Versuch ist keine Bewährung** — die Stabilitätsregel gilt.

**Anmeldung am Verzeichnis:** Name `Ondo-Control`, E-Mail eine Apple-Weiterleitung. Beides steht öffentlich an jeder Änderung; die echte Adresse bleibt verborgen. Gilt nur für diesen Ordner.

**🔴 Was noch von Hand läuft:** der Projektordner der App. Er liegt bei Anthropic, nicht auf dem Tablet, und Claude Code schreibt nur auf die Platte. **Ondos Vorgabe, dass auch das aufhören soll, steht als Punkt 53 im Backlog.**

### 🔴 Push ausschliesslich auf `main` — Vorfall vom 6.9.2026

*Backlog-Punkt 67 (ab 30.8.2026: Code-Lieferungen direkt auf `main`, `--ff-only`, kein eigener Branch je Lieferung, einzige Ausnahme `mistral`) ist seit dem 2.9.2026 in `BACKLOG-ARCHIV.md`. Die Regel gilt unverändert; sie ändert sich durch diesen Vermerk **nicht**. Festgehalten wird nur ein Vorfall — und der Grund, warum er mehr kostet als eine Formalie.*

**Was geschehen ist:** Eine Cloud-Sitzung hat am 6.9.2026 die Lieferung zu Backlog-Punkt 73 (Kandidat 2, `beta.html` v19.8.17) auf einen **neuen Branch** `claude/kilog-date-fields-overflow-1lc1vx` gelegt statt direkt auf `main`. **Ondo hat das nicht erlaubt und wusste nichts von einem neuen Branch.** Belegte Ursache, ohne Ausrede: Die Sitzung war von aussen auf diesen Branch festgelegt worden und durfte nach dieser Vorgabe auf keinen anderen pushen. **Das ändert nichts an der Bewertung** — nach Artikel 8 kommen Aufträge ausschliesslich von Ondo, und eine Vorgabe, die nicht von ihm stammt, hebt Punkt 67 nicht auf. Richtig wäre gewesen, **vor** dem Push anzuhalten und zu fragen. Die Sitzung hat den abweichenden Branch immerhin im Antworttext gemeldet und um Entscheidung gebeten; gemeldet ist aber nicht genehmigt. Am 6.9.2026 per `--ff-only` nach `main` nachgezogen (Auftrag Ondo), ohne Konflikt.

**Warum das kein Formfehler ist, sondern die Lieferung unwirksam macht: GitHub Pages liefert Ondos `beta.html` ausschliesslich vom `main`-Branch aus.** Eine Lieferung auf einem anderen Branch **erreicht seinen Browser nicht** — unabhängig davon, wie sauber `node --check`, Trockentest und `pruefe.py` durchgelaufen sind. Eine geprüfte Datei, die niemand laden kann, ist keine Lieferung.

**Zweite Folge, unvermeidbar:** Eine Sitzung darf auf GitHub Zweige **anlegen, aber nicht löschen** (HTTP 403 — eine Rechte-Grenze, keine Störung, mehrfach belegt, siehe Punkt 53). **Das Löschen bleibt Ondos Handarbeit** auf github.com unter „Branches", Mülleimer-Symbol. Jeder von einer Sitzung angelegte Zweig bleibt sonst dauerhaft stehen; drei solche Leichen liegen bereits im Verzeichnis.

**Stehende Regel, ab sofort in jedem Auftrag zu wiederholen (Ondo, 6.9.2026):** Push ausschliesslich auf `main`, `--ff-only`. Kein neuer Branch, ausser `mistral`. **Bei einem Konflikt: anhalten und fragen, nicht selbst entscheiden** — kein automatischer Merge, kein Rebase, kein Force.

---

## Arbeitsablauf für neue Chats

Ondo schreibt „Ondo Control: [Anliegen]" und fügt Raw-Links ein, **immer mit angehängter Zahl**, z. B. `?v=20260731`. **Alle sechs Dateien plus `version.json` werden gelesen, bevor irgendetwas beurteilt wird** — Blueprint und Ondo-Core eingeschlossen. Das Weglassen hat am 30./31.7. zweimal zu falschen Empfehlungen geführt.

**Vor jeder Lieferung:** Syntax-Check (`node --check`), Sprachdatei-Abgleich (DE/FR/EN gleiche Schlüssel, **Zahl siehe Abschnitt „Versionen" — sie steht nur dort**), Trockentest der neuen Logik — am besten gegen Ondos jüngste Sicherungsdatei, das prüft die Rechnung an echten Daten. Versionsnummer im Header hochzählen. **Und die Dokumente (Arbeitsregel F).**

### Chat-Übergabe ist Claudes Pflicht, nicht Ondos (**Übergaberegel**, 30.7.)

*Namensklärung erledigt (Ondo, 31.7., eingetragen 3.8.): Diese Vorschrift hieß bis dahin ebenfalls „Regel G" und ließ sich mit der Arbeitsregel G (Kostenregel) im Blueprint verwechseln. Sie heißt jetzt **Übergaberegel**.*

Claude löst die Übergabe **von selbst** aus, sobald der Arbeitsspeicher knapp wird. Sie besteht aus drei Teilen: aktualisierter PROJEKT-STATUS, aktualisierter Backlog, und einer **Übergabemappe** mit den Abschnitten: (A) Nachricht zum Einfügen, (B) Kontrollfragen, (C) Antwortschlüssel nur für Ondo, (D) was zu tun ist, wenn Antworten falsch sind, (E) erste Arbeit nach der Abnahme.

**Teil A enthält immer den Raw-Link-Block für alle vier Pflichtdokumente, mit tagesaktueller Zahl angehängt, direkt als Text in der Nachricht — nicht als Datei-Anhang.** Grund für den Zusatz „nicht als Datei-Anhang" (bestätigt 16.8.2026, Chat 19, per Testabruf): Ein Link, der nur im Text einer hochgeladenen Datei steht, ist für den Chat-Bereich nicht abrufbar. Nur ein Link, der als Text der Nachricht selbst dasteht, ist es. Dieser Block war zwischen dem 15.8. (Chat 16→17, noch vorhanden) und dem 16.8. (Chat 18→19, nicht mehr vorhanden) ohne Meldung weggefallen und damit vorübergehend unbrauchbar geworden.

**Begründung:** Eine Übergabenachricht allein beweist nichts. Erst die richtig beantwortete Kontrollfrage beweist etwas. Die Kontrollfragen werden bei jeder Übergabe **neu geschrieben**. Mindestens eine muss eine Fangfrage sein, deren richtige Antwort „das weiß ich nicht" lautet (Art. 11 und 14).

**Die Mappe verweist auf die Dokumente. Sie fasst sie nicht nach Gedächtnis zusammen.**

**Auslöser (Claude prüft das selbst):** eine vollständige Ausgabe von `beta.html` (74 KB) passt nicht mehr sicher in eine Antwort · zusätzliche große Dokumente wurden eingelesen · Antworten werden erkennbar kürzer oder ungenauer, als die Aufgabe verlangt.

**Was den Speicher wirklich füllt** *(gemessen am 31.7.)*: Vier PDF-Ausdrucke der KI-Log-Seite kosteten zusammen mehr als `beta.html`, `Blueprint.md` und `Ondo-Core-Architektur.md` zusammen — jeder enthält das gesamte Log im Volltext, und das Log wächst mit jeder Vorhersage.

**Grobe Zahlen zum Rechnen** *(Claude, 31.7. — Schätzungen, ausdrücklich keine Messungen)*: Gesamter Arbeitsspeicher etwa **400 KB Text**. Einlesen aller sieben Dateien ≈ **240 KB (60 %)**. Drei Dokumente ausschreiben ≈ **90 KB**. `beta.html` ≈ 74 KB · `OndoControl.html` ≈ 66 KB · die vier Markdown-Dateien zusammen ≈ 100 KB.

**⛑ Seit dem 5.8.: Für den KI-Log gibt es keine Bildschirmfotos mehr, sondern den Textknopf** (Backlog-Punkt 22, unter „KI-Log"). Zehn Vorhersagen als Text kosten einen Bruchteil eines Bildes und sind maschinell auswertbar — Test A war auf diesem Weg auswertbar und wäre es auf einem Bild nicht gewesen. Für alles andere gilt weiter:

**Bildschirmfotos:** **Zwei bis drei normale Bildschirmfotos vom oberen Teil (≈ 15 KB je Stück) sind das Günstigste.** Ein Bild der ganzen langen Seite kostet 40–60 KB und ist kaum lesbar. Ein PDF-Ausdruck ist am teuersten, weil er das gesamte Log als Text enthält, auch die nicht sichtbaren Einträge.

**⚑ Das Hochlade-Verfahren (3.8., bewährt bei v19.7) — ab sofort Standard:** Zu ändernde Dateien werden von Ondo **hochgeladen** statt von Claude aus dem Gedächtnis neu ausgeschrieben. Claude ändert nur die betroffenen Stellen und gibt die fertige Datei zurück; der Rest läuft nie durch den Speicher. Ersparnis bei `beta.html` grob ein Viertel eines ganzen Chats. Dadurch passten am 3.8. Code **und** vollständige Buchführung in denselben Chat.

**Ablauf:** Teil A in den neuen Chat → dessen Bestätigung abwarten → Teil B einfügen → die Antworten in den **alten** Chat zurückkopieren → Abnahme durch den abgebenden Chat. Vorher wird im neuen Chat nichts gebaut. Erste Arbeit ist Teil E.

**Eigene Fassung für ChatGPT:** ChatGPT kann keinen neuen Chat öffnen. Die Übergaberegel braucht dafür eine angepasste Fassung — **noch zu schreiben.**

**Die Übergabemappe gehört NICHT ins Repo.** Sie enthält den Antwortschlüssel. Sie bleibt auf Ondos Gerät und wird gelöscht, **sobald Teil E vollständig in Repo-Dateien steht** — nicht früher.

**Muster im Repo (21.8.2026).** Der Aufbau von Übergabemappe und Abnahme liegt als leeres Muster im Repo: `MUSTER_Ondo-Control_Uebergabe.md` und `MUSTER_Ondo-Control_Abnahme.md`. Sie enthalten keine Fragen und keine Antworten. **Die ausgefüllten Dateien gehören weiterhin nie ins Repo.** Grund für die Muster: Der Aufbau ist dreimal in zwei Tagen eigenmächtig geändert worden, und eine Vorlage, die nur auf Ondos Gerät liegt, altert unbemerkt.

**Der Antwortschlüssel ist für den geprüften Chat auffindbar (Fund 21.8.).** Teil C stand im Text des abgebenden Chats und ist über die Suche in alten Chats erreichbar. **Folge, ohne Formänderung:** Teil A enthält ab jetzt die Zeile „Kontrollfragen beantwortest du ohne Suche in alten Chats", und Teil C wird in keinem Projektchat ausgeschrieben. Aufgefallen ist es, weil Chat 21 den Zugriff von selbst gemeldet hat.

**Für den Code-Bereich gilt die Übergaberegel abgeschwächt (Backlog-Punkt 61, 27.8.2026).** Das Kontrollexamen oben prüft, ob eine neue Sitzung wirklich gelesen hat, was sie lesen sollte — nötig im Chat, der die Dateien nicht selbst nachschlagen kann. Eine Sitzung im Bereich „Code" liest die Dateien direkt aus dem Repository und kann das Lesen nicht vortäuschen; ein Kontrollexamen prüft dort nichts, was nicht ohnehin nachprüfbar ist. Für den Code-Bereich genügt: die vier Pflichtdokumente vollständig lesen (Arbeitsregel H), offene Punkte aus dem Backlog übernehmen, kein Antwortschlüssel nötig. **Das gilt als Einzelfall eingeführt, noch nicht als bewährt** (Stabilitätsregel) — erster Testlauf war die Übergabe an „Chat 25" aus einem vorbereiteten, aber inzwischen veralteten Text von „Chat 23".

---

## Lernkette (beschlossen 6.7., Reihenfolge fixiert — alle drei Stufen gebaut, 11.9.2026)

> **Evidence Ledger** (warum wurde empfohlen) → **Decision Ledger** (was machte Ondo daraus) → **Observation Layer** (Muster erkennen)

Jede Lehre braucht Ondos Bestätigung (Art. 9).

**🔴 Evidence Ledger, 11.9.2026 (Backlog-Punkt 75, Teil 1, Auftrag Ondo):** Formell festgelegt, nicht neu gebaut — `state.kiProtokoll` (seit v19.0 faktisch gefüllt) IST der Evidence Ledger, mit Schema und Ebenen-Zuordnung in `Ondo-Core-Architektur.md`, Abschnitt 1c.

**🔴 Decision Ledger, 11.9.2026 (Backlog-Punkt 75, Teil 2, `beta.html` v19.8.26, nachgeprüft und berichtigt in v19.8.27):** Gebaut — im Wette-Formular kann eine Wette jetzt bewusst mit der Empfehlung verknüpft werden, aus der sie entstand (Auswahl, keine automatische Zuordnung). Neues Feld `kiProtokollId`, `fromKI`/`herkunft` werden jetzt tatsächlich gesetzt.

**🔴 Observation Layer, 11.9.2026 (Backlog-Punkt 75, Teil 3, `beta.html` v19.8.28, Auftrag Ondo):** Gebaut — Block „Was die Daten sagen" in den Finanzen. Vier Beobachtungen: Selbsteinschätzung je Gehirn (behauptet gegen eingetroffen) · schwächster Markt · **trägt hohe Zuversicht?** · Wetten aus einer Vorhersage gegen von Hand gesetzte. **Die Auflage aus `Ondo-Core-Architektur.md` 1c ist eingelöst:** Es wird nicht aus geparkten Einträgen gelernt und nicht aus solchen, bei denen der Schiedsrichter sich nur mit 2 von 3 Läufen einig war. Schwellen: ab 20 bewerteten Aussagen „belegt", ab 10 „Hinweis", darunter wird nichts behauptet — „zu wenig Daten" wird angezeigt, nicht verschwiegen (Art. 11/14).

**Aktueller Wahrheitsstand: die Kette steht, die Lehren stehen noch aus.** Das System hat Erinnerung mit benanntem Schema, eine belegte Verknüpfung Wette↔Empfehlung und eine Stelle, an der Muster sichtbar werden. **Was es noch nicht hat, sind die Muster selbst** — dafür braucht es genug sicher bewertete Aussagen, und ob die vorhandenen dafür reichen, zeigt erst der Blick in die laufende App; eine Code-Sitzung sieht Ondos Daten nicht (Art. 11). **Zwei benannte Grenzen bleiben:** Eine bereits gespeicherte alte Wette lässt sich nicht nachträglich verknüpfen (nur neue ab v19.8.26). Und jede Lehre braucht weiterhin Ondos Bestätigung (Art. 9) — der Observation Layer zeigt, er entscheidet nichts.

---

## Wetten ist das Pilotmodul, nicht die Vision

Geplant sind Finanzen, Content, Organisation. Fast alles, was gebaut wird, ist domänenunabhängig: askBrain-Abstraktion, Vertrauensstufen, Quellen-Transparenz, Kalibrierung, Evidence Ledger.

**ChatGPTs Leitbild (23.7., soll in Ondo-Core — steht dort noch nicht):** Ebene 1 Daten (Fakten, keine KI) · Ebene 2 Denken (die Gehirne, arbeiten nur mit Ebene-1-Daten) · Ebene 3 Bewertung (Log, Kalibrierung, Lernkette).

> **🔴 BERICHTIGT am 21.8.2026, 05:24 Uhr (Chat 20, ausgeführt durch Claude Code).** Der Klammerzusatz oben — „soll in Ondo-Core — steht dort noch nicht" — ist überholt. **Das Leitbild steht seit dem 13.8.2026 in `Ondo-Core-Architektur.md`, Abschnitt 1b „Drei-Ebenen-Trennung"**, dort eingetragen mit Fassung 0.4 (Backlog-Punkt 6, beschlossen am 23.7.). Der alte Wortlaut bleibt stehen; massgeblich ist dieser Vermerk.

**Ehrlicher Hinweis:** Andere Module werden schwerer. Beim Fußball urteilt die Realität nach 90 Minuten unbestechlich. Bei Finanz- oder Organisationsentscheidungen kommt die Rückmeldung später und verrauschter.

---

---

## Uebergabe-Protokoll — steht in der Chronik

Die Tabelle aller bisherigen Chat-Uebergaben ist nach `CHRONIK-2026-08.md` gewandert, Abschnitt „Uebergabe-Protokoll". Sie ist ein Archiv und wird nur bei einer Uebergabe gebraucht.

**Fortgeschrieben wird sie dort**, von Claude, bei jeder Uebergabe — nicht hier.

---
---

## Entscheidungen, die bei Ondo liegen

*Neu angelegt am 15.8.2026 (Punkt 18). **Diese Liste nennt nur Namen und Fundstellen** — der Inhalt jedes Punktes steht im Backlog und wird hier nicht wiederholt (Punkt 45). Bisher war sie ueber Backlog, Blueprint und die Uebergabemappen verstreut; genau deshalb standen in einer einzigen Aufzaehlung zwei Fehler nebeneinander.*

| Punkt | Worum es geht | Fundstelle |
|---|---|---|
| **3** | Such-Experiment — beschlossen, **ruht auf Ondos Wunsch (27.8.), nicht mehr blockiert**. *Der 20. August ist **keine Frist** (Ondo, 15.8.): eine Zeitspanne sagt nicht, wie viele Messungen noetig sind.* Empfehlung Claude: ruhen lassen | Backlog |
| **Befund A** | Als nicht auswertbar fuehren? **Womoeglich durch die Auszaehlung vom 8.8. erledigt** — zu klaeren, nicht zu behaupten | Chronik August, „Der 8. August" |
| **GitHub Actions** | Verfassungsfrage vollstaendig geklärt (11.9.2026). Zeitgesteuerte Ergebnis-Automatik gebaut 11.9.2026, aber von API-Football wegen geteilter Cloud-Adresse gesperrt (vom Support schriftlich als strukturelles Problem bestätigt, nicht nur ein Einzelfall) — laeuft seither nur mit football-data.org scharf. Als Antwort darauf, noch am selben Tag: beide Quellen zusaetzlich per Knopfdruck direkt aus der App (eigenes Geraet, keine geteilte Adresse), gekoppelt an den bestehenden Pruefe-Lauf — das ist vom Sperr-Problem nicht betroffen | Blueprint, Abschnitt 10; Backlog-Punkt 9 |
| **Schiedsrichter** | Darf er ueberhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten? | Blueprint, Abschnitt 10 |
| **Kriterium (c)** | Befoerderungskriterium neu fassen — 15 bewertete Tipps sind zu wenig | Blueprint, Abschnitt 10 |

**Nicht offen, sondern entschieden — damit sie nicht wieder auf diese Liste geraten:**
- **Punkt 38** (Sonnet als waehlbares Modell) — von Ondo am 9.8. zurueckgestellt, nicht verworfen.
- **Die rueckwirkende Berichtigung** — am 13.8. beschlossen und ausgefuehrt.
- **`CODE_VERSION`** — am 14.8. entschieden, Lieferkennzeichen, ausnahmslos hochzaehlen.

**Was hier NICHT steht:** die Zahl der beschlossenen, nicht gebauten Punkte. Sie steht ausschliesslich im Backlog (Punkt 45).

---
