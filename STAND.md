# ONDO CONTROL — STAND
*Die aktuelle Wahrheit. Stand: 28.8.2026, Fassung 51, v19.8.3*

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

> **Zur Datierung:** Die Kalibrierungszahlen im Abschnitt „Aktueller Messstand" sind am **14.8.2026 aus dem Bildschirmfoto der Finanzen-Seite abgelesen** — Sonnet 330 bewertete Aussagen bei 4 % Abweichung und 55 % Treffern, Flash 327 bei 8 % und 50 %. *Die genaue Ablesezeit ist unbekannt (Art. 11); das Bild nennt als Sicherungszeit 07:14 Uhr, das ist NICHT die Ablesezeit.* Alle älteren Zahlen — 13.8. (300/297), 9.8. (je 207), 8.8. (je 180) — sind ab jetzt Verlaufsangaben. Massgeblich ist immer der Abschnitt „Aktueller Messstand".
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

## Messmethodik und Interpretationsgrenzen (Backlog-Punkt 49, gebaut 27.8.2026)

*Ein neuer Chat kann aus richtigen Zahlen eine falsche Empfehlung ableiten, wenn die Zahlen dastehen und ihre Grenzen nicht. Dieser Abschnitt holt das nach — er entscheidet nichts neu, er schreibt auf, was der Code bereits tut (`beta.html`, Funktionen `maerkteBauen` und `calcKalibrierung`).*

**Die drei Märkte:**
1. **Sieger (1x2):** Heimsieg / Auswärtssieg / Remis, aus dem getippten Ergebnis abgeleitet.
2. **Über/Unter 2,5 Tore:** Ja/Nein-Markt.
3. **Beide treffen (BTTS):** Ja/Nein-Markt — **seit v19.8.0 (Punkt F) wird das Gehirn direkt gefragt**, die Behauptung wird nicht mehr aus dem Tipp abgeleitet. Das war der Fehler, der zum Schnitt unten führte.

**Die Dreh-Mechanik bei den beiden Ja/Nein-Märkten:** Liegt die genannte Prozentzahl unter 50 %, dreht die App die Behauptung auf die Gegenseite um (100 minus die Zahl) und markiert den Eintrag als „gedreht". Grund: „Ja zu 42 %" heisst inhaltlich „Nein zu 58 %" — die gespeicherte Zahl ist immer die, an die das Gehirn wirklich glaubt. **Eine gedrehte Aussage bedeutet nicht, dass ein Gehirn seine Meinung geändert hat.**

**Wie die Kalibrierung gerechnet wird:** Alle bewerteten Aussagen werden in sechs feste Bänder einsortiert (1–49, 50–59, 60–69, 70–79, 80–89, 90–99 %). Je Band: **behauptet** = Durchschnitt der genannten Prozentzahlen, **echt** = Anteil der tatsächlich eingetroffenen Aussagen in diesem Band. Die **Abweichung** (die Kopfzahl, z. B. „4 %") ist der nach Bandgrösse gewichtete Durchschnitt von |behauptet − echt| über alle Bänder.

**Was in den Nenner zählt:** nur Aussagen aus der Ära „v19", nur Märkte mit Status „richtig" oder „falsch". **Geparkte Einträge erreichen diesen Status nie** — der Prüf-Vorgang lässt geparkte Einträge aus, sie bleiben auf „offen" stehen und fliessen nie in die Kalibrierung ein.

**Der Brier-Score wird nirgends berechnet** — weder im Code noch in der Anzeige (siehe unten, „Was NICHT geschlossen werden darf").

**Rohdatenstand:** Die Zahlen im Abschnitt „Aktueller Messstand" stammen aus einem Bildschirmfoto vom 14.8.2026 (siehe „Zur Datierung" dort).

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

## Aktueller Messstand (abgelesen aus dem Bildschirmfoto der App am 14.8.2026)

*Zur Herkunft (Art. 14): **Alle Zahlen dieses Abschnitts sind aus der Anzeige der App abgelesen, keine ist gerechnet.** Der Abschnitt wird immer vollstaendig ersetzt, nie in Teilen. Die genaue Ablesezeit ist unbekannt (Art. 11).*

**Bestand:** **293 Vorhersagen** und 6 Wetten im Speicher. **Letzte Sicherung: 14.8.2026, 22:53 Uhr.**

*Der Bestand ist gleich geblieben, die Zahl der bewerteten Aussagen um je 30 gestiegen: Am 14.8. wurden zehn Endstaende des 13.8. uebernommen — zehn Spiele mal drei Maerkte. Es kamen keine neuen Vorhersagen dazu.*

| | bewertete Aussagen | Kalibrierungs-Abweichung | Trefferquote |
|---|---|---|---|
| Sonnet | 330 | **4 %** (gruen) | 55 % (182/330) |
| Flash | 327 | **8 %** (gruen) | 50 % (164/327) |
| gesamt | 657 | — | 53 % (346/657) |

**Sonnets Verteilung** *(Anzahl je Stufe, in Klammern behauptet/wirklich)*: 1–49 % → 49 (44/35) · 50–59 % → 212 (54/57) · 60–69 % → 44 (63/66) · 70–79 % → 25 (73/64) · ab 80 % → 0

**Flashs Verteilung** *(Anzahl je Stufe, in Klammern behauptet/wirklich)*: 1–49 % → 46 (43/28) · 50–59 % → 135 (55/51) · 60–69 % → 117 (63/56) · 70–79 % → 24 (73/54) · 80–89 % → 4 (83/75) · 90–99 % → 1 (90/100)

**Entschlossenheit:**

| | Ø Abstand von 50 | Anteil ab 60 % |
|---|---|---|
| Sonnet | 6,8 | 21 % (69/330) |
| Flash | 9,7 | 45 % (146/327) |

**Wetten:** Saldo −19,51 €, 6 abgeschlossen, 0,00 € offen, Trefferquote 17 % (1 von 6). Gesamt-Bilanz −29,75 €.

**Sonnet hat weiterhin KEINE bewertete Aussage ab 80 %.** Flash hat dort fuenf. Die Verzerrung durch geparkte Eintraege besteht unveraendert und gehoert neben jede Aussage ueber Sonnets Verhalten bei hoher Zuversicht.

*Vorherige Staende: 13.8. nach der Berichtigung — Sonnet 300 bei 4 % und 55 %, Flash 297 bei 8 % und 50 %. 13.8. vor der Berichtigung — Sonnet 300 bei 4 % und 52 %. 9.8. — je 207. 8.8. — je 180.*

**Was die Berichtigung bewirkt hat (Vergleich 16:32 Uhr → 22:20 Uhr, gleicher Bestand):**

| | vorher | nachher |
|---|---|---|
| Sonnet Trefferquote | 52 % (155) | **55 % (165)** |
| Sonnet 60–69 % wirklich | 58 % | **71 %** |
| Sonnet 70–79 % wirklich | 48 % | **67 %** |
| Sonnet 1–49 % Anzahl | 47 | **46** |
| Sonnet 50–59 % Anzahl | 194 | **195** |
| Sonnet Abweichung | 4 % | **4 %** |
| Flash | unverändert | unverändert |

**Drei Gegenproben, die die Berichtigung bestätigen:**
1. **+10 Treffer, nicht +16.** Von den 16 berichtigten Aussagen standen 13 auf *falsch* und 3 auf *richtig*. 13 minus 3 ergibt genau die beobachteten +10 (155 → 165).
2. **Eine Aussage wechselte die Stufe.** Motherwell (Typ B) ging von 42 auf 58 Prozent — deshalb 1–49 % um eine Aussage kleiner und 50–59 % um eine grösser.
3. **Flash blieb in jeder Zahl unverändert.** Die Berichtigung hat den Nachbarn nicht berührt.

**Ehrliche Einordnung (Art. 14):**
- **🔴 Die Berichtigung hat die Kalibrierung NICHT verbessert.** Sie steht vorher wie nachher bei 4 %. Der Fehler wurde **verschoben, nicht beseitigt**: Die Stufe 70–79 % ging von 25 Punkten Abweichung auf 6 zurück, die Stufe 60–69 % kippte von 5 Punkten zu wenig auf 8 Punkte zu viel. **Wer nur auf die 4 % sieht, hält den Vorgang für wirkungslos.** Das ist er nicht — die Trefferquote und die Verteilung zeigen die Wirkung.
- **Sonnet ist jetzt in den oberen Stufen zu vorsichtig, nicht mehr zu zuversichtlich.** Bei 60–69 % behauptet, trafen 71 % ein; bei 70–79 % behauptet, 67 %. Vor der Berichtigung sah es genau umgekehrt aus. **Die frühere Aussage „Sonnet überschätzt sich bei hoher Zuversicht" beruhte auf dem Rechenfehler und ist damit hinfällig.**
- **Der Vorsprung gegenüber Flash ist weiterhin jung** — 8:8 am 8.8., 5:6 am 9.8., 4:8 heute. Nach Backlog-Punkt 35 liegt eine Schwankung dieser Grösse im Rauschen.
- **64 Prozent aller Sonnet-Aussagen liegen zwischen 50 und 59 Prozent** (212 von 330). Sonnet legt sich selten fest. *(Stand zuvor hier: 195 von 300 — beim Ersetzen des Abschnitts am 14.8. stehengeblieben, berichtigt am 14.8. abends.)*
- **Flashs Schwachstelle bleibt der grösste Einzelposten:** 117 Aussagen bei 60–69 %, behauptet 63, eingetroffen 56. *(Stand zuvor hier: 108 Aussagen, eingetroffen 54 — berichtigt am 14.8. abends.)*
- Zeilen mit ein bis vier Aussagen (Flash 80–99 %) sind **bedeutungslos**.
- **Ungleiche Anzahl:** Sonnet 330, Flash 327. Woher die Differenz von drei kommt, ist **nicht geklärt** (Art. 11). *(Stand zuvor hier: 300 und 297 — berichtigt am 14.8. abends.)*
- **Der Brier-Score war aus der Anzeige nicht ablesbar** und wird deshalb nicht angegeben. Die Erwartung aus der Buchführung — er kippt von schlechter auf besser als Raten — ist **ungeprüft**.
- Ondos eigene Bilanz unverändert: **−29,75 €**, Wett-Saldo −19,51 €, eigene Trefferquote 17 % (1/6).

*Vorherige Stände: 13.8. vor der Berichtigung — je 300 und 297, Sonnet 4 % bei 52 % Treffern. 9.8. — je 207, Sonnet 5 %, Flash 6 %. 8.8. — je 180, beide 8 %. 6.8. — je 135, 5 und 9. 3.8. — je 87, 4,8 und 8,6.*

## Versionen

- **Stabil: v17** (`OndoControl.html`, version.json = 17) — **seit dem 17. Juli unverändert**
- **Beta: v19.8.3** (`beta.html`, geliefert 27.8.2026) — **Backlog-Punkte E und 2 gebaut.** Der Schiedsrichter-Auftrag bestätigt jetzt Wettbewerb+Datum+Teams statt frei zu suchen, plus eine Vorsichtsregel gegen geratene 0:0. Flash bekommt zusätzlich seine eigene Kalibrierungs-Lehre im Auftragstext mitgeteilt (Sonnet unverändert) — **Flash-Aussagen ab hier sind mit älteren nicht mehr direkt vergleichbar**, derselbe Schnitt wie bei Punkt F. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.2** (`beta.html`, geliefert 14.8.2026, 22:36 Uhr) — **Backlog-Punkt 44 gebaut: Messdaten-Export ohne Schlüssel.** Ein zweiter Knopf unter „Mehr" gibt Vorhersagen und Wetten als Text oder Datei aus, ohne API-Schlüssel und ohne PIN. Kein Schnitt in der Messreihe. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.1** (`beta.html`, geliefert 9.8.2026, 13:55 Uhr) — **die Spielliste hat eine eigene Rolle und läuft auf `gemini-flash-latest`.** Jeder neue Eintrag trägt zusätzlich die **Stufe**. Kein Schnitt in der Messreihe. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.8.0** (`beta.html`, geliefert 9.8.2026, 04:15 Uhr) — **Schnitt in der Messreihe bei „beide treffen", Punkt F gebaut.** Werte vor und ab dieser Version sind bei diesem Markt nicht vergleichbar. Jeder neue Log-Eintrag trägt das Feld `codeVersion`. `APP_VERSION` weiter 18.
- **Beta zuvor: v19.7.8** (`beta.html`, geliefert 7.8.2026) — getrennter Speicher, aktive Messphase. Vier Nachbesserungen am 3. und 4. August, alle ausgelöst durch Punkt 0a; Einzelheiten im Backlog. Im Code steht weiterhin `APP_VERSION = 18` (technische Schuld, bewusst nicht nebenbei geändert, vor der Beförderung zu klären)
- **Sprachschlüssel: 217** in DE, FR und EN, maschinell abgeglichen und identisch (**gezählt am 14.8.2026 abends aus `beta.html`**). *Verlauf: die früher dokumentierten 184 waren nie geprüft; nachgezählt waren es 185, dann 193, dann 199, dann 201 (v19.7.8), dann 203 (v19.8.1). Die acht Schlüssel des Berichtigungsknopfes vom 13.8. (`korrT` bis `korrOk`) waren nirgends nachgetragen — 203 + 8 = 211. Punkt 44 bringt sechs weitere (`messT` bis `messBlock`) — 211 + 6 = 217.* **Diese Zahl ist bei jeder Änderung an den Sprachschlüsseln in derselben Lieferung mitzuführen.**

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
| 9 | **Erfundene 0:0** | 31.7. | *keine* — löst nicht einmal eine Warnung aus | — |
| 10 | **Stand aus der Verlängerung statt nach 90 Minuten** | 11.8. (gefunden 13.8.) | *keine* — Halbzeitstand, Datum, Wettbewerb und der Vermerk `n.Verl.` waren alle richtig; nur die Grenze bei Minute 90 war falsch gezogen. Im zweiten Lauf lieferte derselbe Schiedsrichter den richtigen Wert | — |
| 11 | **Schwankende Antworten bei mehreren Läufen desselben Spiels trotz Temperatur 0** | 28.8. (Fälle vom 8.8./9.8., extern gegengeprüft) | *keine* — NK Celje–Slovan Bratislava: drei Läufe, drei Stände (1:2 / 1:1 / 0:1); Sabah FC–Hapoel Beer-Sheva FC: drei Läufe, drei Endstände (5:2 / 2:2 / 3:1 n.Verl.). **Keiner der sechs Läufe traf den extern belegten Wert** (Celje 1:2, Sabah 5:2). Erstes, schwächeres Auftreten desselben Musters: Fehlerart 10 oben (Apollon Limassol – SK Brann, 13.8., zwei Läufe, zwei Werte). Die rohe Antwort wird in keinem der Läufe gespeichert (nur das geparste Ergebnis) — deshalb lässt sich die Ursache im Nachhinein nicht rekonstruieren (Backlog-Punkt 64) | — |
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
**Letzte bestätigte Sicherung: 16.8.2026, 10:47 Uhr** — 293 Vorhersagen, 6 Wetten, abgelesen aus dem Bildschirmfoto der App. Davor: 14.8., 22:53 Uhr (nach dem Einbau von v19.8.2) · 14.8., 22:22 Uhr (vor der Lieferung) · 14.8., 07:14 Uhr (nach der Uebernahme der zehn Endstaende) · 13.8., 18:38 Uhr (nach der Berichtigung), 16:28 Uhr (293 Vorhersagen) und 09:17 Uhr. Früher: 8.8., 07:54 Uhr (210 Vorhersagen) · 7.8., 08:00 Uhr · 6.8., 08:28 Uhr (170 Vorhersagen) · 5.8., 13:06 Uhr · 4.8., 17:58 Uhr (138 Vorhersagen) · 3.8. · 2.8. · 31.7., 07:49 Uhr. ⚠ **Vor jeder Codelieferung ist eine frische Sicherung zu verlangen.**

*Diese Zeile ist eine **Standsangabe**, keine Verlaufsangabe. Sie stand vom 7. bis zum 14. August auf dem 7.8. und war damit sechs Tage falsch, während zwei andere Stellen des Dokuments den richtigen Wert trugen. Seit dem 14.8. prüft `pruefe.py` sie gegen die jüngste Sicherungsangabe im Dokument.*
*Am 4.8. hat sich die Sicherung bewährt: Ondo hat den Browserverlauf gelöscht, Safari löschte dabei den Websitespeicher mit, alle Daten waren weg — und wurden vollständig wiederhergestellt. **Nichts verloren.** Zwei bekannte Verlustwege: Browserdaten löschen · getrennter Speicher Safari gegen Startbildschirm.*
*Hinweis (3.8.): Die Sicherungsdatei enthält `apiKey`, `geminiKey` und `pin` im Klartext. Sie darf nie an ChatGPT oder Gemini gehen, nie an einen Bericht angehängt und nie ins Repo. Ondo hat am 3.8. beide Schlüssel neu erzeugt und die alten deaktiviert. **Folge: Eine Sicherung von vor dem 3.8. überschreibt beim Zurückladen die neuen Schlüssel mit den toten alten** — dann Schlüssel neu eintragen, die Messdaten bleiben unberührt.*

**Nutzungslimit-Schätzung (Backlog-Punkt 56, 27.8.2026):** Anthropic veröffentlicht keine festen Zahlen; dieses Feld wird nur gelegentlich von Ondo per Bildschirmfoto kalibriert, keine Automatik, keine feste Häufigkeit. **Zuletzt gesehen: 28.8.2026, 13:33 Uhr** — aktuelle 5-Stunden-Sitzung 85 % verbraucht (Reset in 1 Std. 6 Min.), Wochenlimit „Alle Modelle" 33 % verbraucht (Reset Donnerstag 03:59 Uhr), Nutzungsguthaben 0 Punkte, Funktion ausgeschaltet. *(Diese Ablesung ersetzt die vom 27.8.2026, 23:08 Uhr — 34 % / 26 % — vollständig, nicht ergänzend.)* Cloud-/Code-Sitzungen und Chat teilen sich dasselbe Kontingent (belegt über `support.claude.com`, 27.8.2026).

**⚠ Zwei verschiedene Zahlen, nicht verwechseln:** Die 5-Stunden-Sitzung setzt sich alle fünf Stunden zurück und sagt nichts über den Tag als Ganzes. Das Wochenlimit summiert dagegen über die ganze Woche seit dem Reset (Donnerstag 03:59 Uhr) — die 33 % von heute schliessen die 26 % vom 27.8. bereits ein. **Der Anstieg von 26 % auf 33 % über den heutigen Tag (28.8.) verteilt sich auf mehrere gleichzeitig oder nacheinander gelaufene Sitzungen, nicht auf eine einzelne** — Einzelheiten in den fünf Sitzungs-Selbstauskünften unten.

**Richtwert aus dem Tagesverbrauch (27.8.2026, grobe Schätzung, keine Messung):** Die drei Sitzungen zusammen haben nach eigener Angabe rund 42 Prompts und deutlich mehr als 1.000 KB an gelesenem und geschriebenem Text bewegt — allein in dieser Sitzung wurden `STAND.md`, `Ondo-Control-Backlog.md`, `Blueprint.md`, `beta.html`, die Messdaten-Datei und das KI-Log zusammen rund 900 KB an Dateien genannt (real gemessen mit `wc -c`, nicht geschätzt); die beiden anderen Sitzungen berichten vergleichbare Grössenordnungen (volle Pflichtlektüre, mehrfache Dokumentabrufe, Web-Suchen), ohne dass eine genaue Byte-Zahl dafür vorliegt. **Grober Richtwert, nur zur Einordnung:** rund 1 Megabyte Textverkehr über drei gleichzeitige Sitzungen an einem Tag entsprach rund einem Viertel des Wochenlimits. **Das ist keine Formel** — Denkaufwand und Werkzeugaufrufe kosten zusätzlich, unabhängig von reiner Textmenge —, nur ein Anhaltspunkt für die Grössenordnung.

**Sitzungs-Selbstauskünfte zum 28.8.2026 (fünf Sitzungen, ausdrücklich Selbsteinschätzungen der jeweiligen Sitzung, keine gemessenen Werte — Art. 14):**

a) **Gestrige Code-Sitzung (Kamm für heutige Arbeit):** 2 Prompts, Aufwand sehr gering (reiner Text, keine Dateizugriffe, kein Commit), Kosten geschätzt 2–3 KB gesamt — deutlich unter dem Richtwert vom 27.8. (rund 23,8 KB/Prompt bei Sonnet 5/Mittel).
b) **Unabhängige externe Prüfung der 18 Spielergebnisse:** 2 Prompts. Prompt 1 sehr hoher Aufwand (rund 30 Websuchen plus ein `web_fetch`, 18 Einzelspiele), geschätzt 80–150 KB Rohmaterial. Prompt 2 (Selbsteinschätzung) niedriger Aufwand, 2–4 KB.
c) **Unabhängige Job-Recherche-Sitzung** (Modell Haiku 4.5, 2 Prompts, Aufwand gering): < 1 KB.
d) **Chat-Sitzung (Vorgänger von Chat 26), Sonnet 5/Mittel:** rund 15 Prompts heute (ab dem Wechsel auf den 28.8. in der App). Aufwand hoch bis sehr hoch: mehrere vollständige Abrufe von `STAND.md` und Backlog (verschiedene Commit-Stände), ein vollständiger Abruf von `CHRONIK-2026-08.md`, fünf ausgelesene Webarchive (Sky Sport, ESPN, Leeds United, Sportschau, zwei OneFootball-Seiten), rund ein Dutzend Bildschirmfoto-Analysen, mehrfaches Gegenprüfen von Code-Berichten gegen frische Dokumente. Kosten deutlich über dem Richtwert vom 27.8. — allein die Dokumentabrufe liegen grob geschätzt bei über 200 KB, eine genaue Gesamtzahl wäre Scheinpräzision.
e) **Diese Code-Sitzung selbst** (Fassung 48, Merge nach `main`, diese Übergabe): bislang 3 Nutzernachrichten heute (28.8.). Die erste mit vollständiger Pflichtlektüre aller vier Dokumente (STAND, Backlog, Blueprint, Ondo-Core, zusammen rund 120 KB), einer Codeuntersuchung an mehreren Stellen in `beta.html`, zwei Websuchen und drei Dateiänderungen mit Commit und Push. Die zweite (Raw-Links) gering. Die dritte (dieser Auftrag) mit Merge nach `main`, erneuter Dokumentbearbeitung und dieser Übergabemappe. Aufwand insgesamt hoch bis sehr hoch, am ehesten vergleichbar mit (d) — grob geschätzt eher über als unter 200 KB bewegtem Text, ebenfalls ohne genaue Gesamtzahl (Scheinpräzision vermeiden). Diese Selbsteinschätzung ist nicht unabhängig gegengeprüft.

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

## Lernkette (beschlossen 6.7., Reihenfolge fixiert, noch nicht gebaut)

> **Evidence Ledger** (warum wurde empfohlen) → **Decision Ledger** (was machte Ondo daraus) → **Observation Layer** (Muster erkennen)

Jede Lehre braucht Ondos Bestätigung (Art. 9). Der Evidence Ledger wird seit v19.0 faktisch gefüllt.

**Aktueller Wahrheitsstand: Das System lernt noch nicht.** Es hat Erinnerung, kein Lernen. Das ist Absicht.

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
| **41** | Zuordnung der Listenangaben ueber den Spielnamen statt ueber die laufende Nummer | Backlog, Prio 1 |
| **36** | Verlaengerte Spielformate ausschliessen — entscheidungsreif, zwei belegte Faelle | Backlog, Prio 1 |
| **37** | Kein Schutz gegen einen zweiten Vorhersagelauf am selben Tag | Backlog, Prio 1 |
| **30** | Freundschaftsspiele aus der Spielliste ausschliessen? | Backlog |
| **34** | Brier-Score in die App bauen. **Gerechnet ist nicht gebaut** | Backlog |
| **35** | Streuungsangabe in die App bauen. **Gerechnet ist nicht gebaut** | Backlog |
| **3** | Such-Experiment — durch die Pause **blockiert**. *Der 20. August ist **keine Frist** (Ondo, 15.8.): eine Zeitspanne sagt nicht, wie viele Messungen noetig sind.* Empfehlung Claude: ruhen lassen | Backlog, Prio 1 |
| **0b** | Widersprueche messen statt korrigieren. **Der Eintrag widerspricht sich selbst** — Kopfzeile „zurueckgestellt", Schlusszeile „Entscheidung Ondos steht aus". Zu klaeren, bevor er als offen oder als entschieden gefuehrt wird | Backlog |
| **Befund A** | Als nicht auswertbar fuehren? **Womoeglich durch die Auszaehlung vom 8.8. erledigt** — zu klaeren, nicht zu behaupten | Chronik August, „Der 8. August" |
| **„Fail Safe"** | Bei unbekannten Fehlern anhalten statt automatisch das naechste Modell nehmen — als Arbeitsregel? | Blueprint, Abschnitt 10 |
| **GitHub Actions** | Verfassungsfrage: Der Actions-Wecker ist ein winziger Server, der Blueprint sagt „kein Server" | Blueprint, Abschnitt 10 |
| **Schiedsrichter** | Darf er ueberhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten? | Blueprint, Abschnitt 10 |
| **Kriterium (c)** | Befoerderungskriterium neu fassen — 15 bewertete Tipps sind zu wenig | Blueprint, Abschnitt 10 |
| **Rollenmodell** | Rollenabschnitt in den Blueprint, mit zwei Konfliktregeln | Blueprint, Abschnitt 10 |

**Nicht offen, sondern entschieden — damit sie nicht wieder auf diese Liste geraten:**
- **Punkt 38** (Sonnet als waehlbares Modell) — von Ondo am 9.8. zurueckgestellt, nicht verworfen.
- **Die rueckwirkende Berichtigung** — am 13.8. beschlossen und ausgefuehrt.
- **`CODE_VERSION`** — am 14.8. entschieden, Lieferkennzeichen, ausnahmslos hochzaehlen.

**Was hier NICHT steht:** die Zahl der beschlossenen, nicht gebauten Punkte. Sie steht ausschliesslich im Backlog (Punkt 45).

---
