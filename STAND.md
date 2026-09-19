# ONDO CONTROL — STAND
*Die aktuelle Wahrheit. Stand: 19.9.2026, Fassung 141, v19.18.2*

> **Wegweiser (neu am 15.8.2026, Punkt 18; erweitert 14.9.2026, Phase 2 der Trennung von
> aktuellem Stand und Geschichte).** Dieses Dokument hiess bis 15.8.2026 `PROJEKT-STATUS.md`
> und war rund 200 KB gross. Es ist getrennt worden:
> - **`STAND.md`** — was heute gilt. Wird beim Start **vollstaendig** gelesen.
> - **`CHRONIK-2026-09.md`** — Versionsgeschichte vom 2. bis 13. September 2026, neu angelegt
>   14.9.2026 (bis dahin fuehrte `STAND.md` seinen Versionsverlauf selbst mit, statt ihn laufend
>   auszulagern). Wird **nur auf Zuruf** gelesen.
> - **`CHRONIK-2026-08.md`** — die Tagesabschnitte vom 3. bis 15. August, plus seit 14.9.2026 die
>   Versionsgeschichte vom 7. bis 30. August 2026. Wird **nur auf Zuruf** gelesen.
> - **`CHRONIK-2026-07.md`** — alles bis einschliesslich 31. Juli. Wird **nur auf Zuruf** gelesen.
>
> **Nachtrag vom Nachmittag: Punkt 18 ist fertig.** Auch der Backlog und der Blueprint sind getrennt — `BACKLOG-ARCHIV.md` und `BLUEPRINT-PROTOKOLL.md` sind ebenfalls Archiv und werden nur auf Zuruf gelesen. **Pflichtlektuere beim Start: `STAND.md`, `Ondo-Control-Backlog.md`, `Blueprint.md`, `Ondo-Core-Architektur.md` — zusammen rund 116 KB statt 452 KB.** Verfassung und Arbeitsregeln bleiben ausdruecklich Pflicht.
>
> **Es wurde nichts geloescht, nur verschoben.** Der Beweis steht in `pruefe.py`, Abschnitt 10: Jede Zeile des Originals kommt in genau einer der drei Dateien vor, unveraendert.
>
> **Die Reihenfolge in dieser Datei ist neu gesetzt** — Messstand und Versionen stehen vorn, nicht mehr dort, wo sie im alten Dokument standen. **Das ist Absicht und der einzige Unterschied zur Vorlage.** In den Chronikdateien ist die Reihenfolge unveraendert; `pruefe.py` Abschnitt 9b prueft das.
>
> **Ein Ort je Tatsache (Punkt 45).** Kennzahlen stehen ab jetzt an genau einer Stelle. Wo eine Zahl frueher wiederholt wurde, steht jetzt ein Verweis. Die Zahl der beschlossenen, nicht gebauten Punkte steht **nur im Backlog**.
>
> **🔴 Stehende Regel ab 14.9.2026 (Ondos Auftrag, Phase 2 der Trennung von aktuellem Stand und
> Geschichte, ersetzt die bisherige Praxis in allen vier Pflichtdokumenten gleich):** Jede
> Lieferung trennt zwei Dinge. Betrifft sie den aktuellen Stand (neuer Status, neue Regel, neue
> Zahl, neue Architekturentscheidung), wird die betroffene Stelle **direkt in diesem Dokument
> ueberschrieben/ergaenzt** — als das, was jetzt gilt, **ohne** Aenderungsvermerk mit Datum.
> Die vollstaendige Begruendung (Ursache, Bauweise, Verifiziert, verworfene Alternativen)
> wandert **sofort, in derselben Lieferung**, wortgleich in die zustaendige Archivdatei —
> nicht erst, wenn dieses Dokument wieder zu voll ist. Nichts wird geloescht (Regel 3 bleibt),
> nur der Zeitpunkt des Verschiebens aendert sich.

---

> **Zur Datierung:** Die Kalibrierungszahlen im Abschnitt „Aktueller Messstand" sind am **13.9.2026 aus den Bildschirmfotos der App abgelesen** — Sonnet 609 bewertete Aussagen bei 4 % Abweichung und 55 % Treffern, Flash 606 bei 3 % und 53 %. *Die genaue Ablesezeit ist unbekannt (Art. 11); die Sicherungszeit steht unter „Datensicherung" und ist NICHT die Ablesezeit.* Alle älteren Zahlen — 4.9. (468/465), 2.9. (402/399), 30.8. (399/396), 14.8. (330/327), 13.8. (300/297), 9.8. (je 207), 8.8. (je 180) — sind ab jetzt Verlaufsangaben. Massgeblich ist immer der Abschnitt „Aktueller Messstand". *(Bis zum 13.9.2026 stand hier die Ablesung vom 4.9.2026; sie ist durch diese vollständig ersetzt, nicht ergänzt.)*
## Für jede KI, die dieses Projekt unterstützt

Ondo Control ist ein persönliches, KI-gestütztes Entscheidungsunterstützungssystem. Eine einzige HTML-Datei, GitHub Pages, localStorage, kein Server. Besitzer und alleiniger Entscheider: **Ondo** (kein Programmierer, arbeitet primär am iPhone, liefert jede Änderung selbst per Datei-Upload zu GitHub).

**Rollen:** Claude = Entwickler und Archivar · ChatGPT = Architekt und Prüfer · Mistral = beaufsichtigter Mitarbeiter, auf dem Prüfstand · Ondo = Product Owner.

*Vermerk (28.8.2026, Entscheidung Ondos): Gemini war bis zum 28.8.2026 Reviewer und ist seither nicht mehr am Projekt beteiligt. DeepSeek war nie Beteiligter hier.*

*Schwesterprojekt (Ondo, 19.9.2026, Nachtrag zur Grundsatznachricht): `ondo-jarvis` läuft
parallel, mit ChatGPT und Mistral —
`https://github.com/Ondo-Control/ondo-jarvis/tree/main` und
`https://github.com/Ondo-Control/ondo-jarvis/tree/mistral/work`. Kein Bestandteil dieses Repos,
hier nur als Kontext festgehalten.*

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
- **Leistungsmaßstab** *(Arbeitsregel O, 19.9.2026, Ondo, Nachtrag zur Grundsatznachricht)*: Ondo zahlt eigene Abonnements für Claude, ChatGPT und Mistral und erwartet messbare Leistung. Frühe Fehler werden toleriert, wiederholte nicht — Gemini und DeepSeek sind aus genau diesem Grund aussortiert.
- **Keine Floskeln** *(Arbeitsregel P, 19.9.2026, Ondo)*: Ein Fehler wird knapp benannt, mit Ursache, dann wird weitergearbeitet. Gemessen wird die Fehlerzahl, nicht die Zerknirschung.

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

**Der Schnitt bei Websuche (v19.10.0, Backlog-Punkt 79):** Ab dieser Version tragen neue Einträge `recherchiert:true/false` — vorher gab es diese Möglichkeit gar nicht. Werte vor und ab v19.10.0 sind entsprechend nicht direkt vergleichbar (siehe „Versionen").

**Anpfiffzeiten:** waren an mehreren Tagen nachweislich falsch protokolliert (siehe „Die Spielliste — drei Fehlerarten", S2).

**Was aus diesem Messstand NICHT geschlossen werden darf:**
- **🔴 Ergänzt 12.9.2026 (Fund Ondo, im Gespräch aufgedeckt, nicht vorher hier festgehalten):
  Keine dieser Vorhersagen beruht auf echter Recherche.** `vorhersageGehirn()` — die Funktion,
  die jede Aussage erzeugt — bekommt nur Spielname, Wettbewerb und Anpfiffzeit. Keine
  Aufstellung, keine Verletztenliste, keine aktuelle Formkurve, kein Tabellenstand, keine
  Websuche. Jede Prozentzahl UND jede Begründungszeile (z. B. „Team X auf einem anderen
  Niveau") stammt allein aus dem, was das Modell aus seinem Training über die beteiligten
  Teams mitbringt — nicht aus einer geprüften, aktuellen Quelle. Das galt die ganze bisherige
  Messreihe hindurch und wurde in diesem Abschnitt bisher nicht ausdrücklich genannt, obwohl es
  genau hierher gehört — eine echte Lücke, keine Kleinigkeit. Ondos Entscheidung dazu und die
  Folgen: Backlog, neuester Fassungsabschnitt.
- Kein Brier-Score — weder abgelesen noch selbst gerechnet, in keiner Zahl dieses Dokuments enthalten.
- Eine niedrige Abweichung heisst nicht „öfter richtig" — das ist die Trefferquote, eine andere Zahl.
- Bänder mit wenigen Aussagen (z. B. Flashs 80–99 %) sind statistisch bedeutungslos.
- Werte vor und nach dem Schnitt bei „beide treffen" sind nicht vergleichbar.
- Anpfiffzeiten sind teilweise falsch protokolliert — Grenzfälle der 2,5-Stunden-Regel des Schiedsrichters sind entsprechend unsicher.
- Geparkte Einträge fehlen vollständig — wie sich das auf sehr hohe Zuversichtsstufen auswirkt (wo am meisten geparkt wird), ist unbekannt, nicht vernachlässigbar.
- Ein „gedrehter" Eintrag ist keine Meinungsänderung, nur eine ursprüngliche Zahl unter 50 %.

---

## Aktueller Messstand (abgelesen aus den Bildschirmfotos der App am 13.9.2026)

*Zur Herkunft (Art. 14): **Alle Zahlen dieses Abschnitts sind aus der Anzeige der App abgelesen, keine ist gerechnet.** Der Abschnitt wird immer vollstaendig ersetzt, nie in Teilen. Quelle: zwei Bildschirmfotos der App (Wettmodul → KI-Log → Daten, und Mehr) mit der Kopfzeile „Sonntag, 13. September 2026 — v19.13.0 BETA", von Ondo mitgeschickt. Die genaue Ablesezeit ist unbekannt (Art. 11); die Sicherungszeit steht unter „Datensicherung" und ist NICHT die Ablesezeit. **Kopfzeile zeigt v19.13.0, nicht das in dieser Sitzung zuvor gebaute v19.13.1** — dieses Bildschirmfoto ist vor dem heutigen Laden der neuesten Lieferung entstanden. Für die Kalibrierungszahlen selbst folgenlos: v19.13.1 ändert nur die Spielauswahl beim Prüflauf, keine Rechenfunktion.*

**Bestand:** **505 Vorhersagen** und 6 Wetten im Speicher — ein Zuwachs von 102 Vorhersagen gegenüber dem 4.9.2026 (403). Sonnet und Flash sind dabei um genau dieselbe Zahl gewachsen (Sonnet 468→609, Flash 465→606, je +141 bewertete Aussagen) — ein auffälliger Gleichlauf, nicht weiter geprüft. *(Die Sicherungszeit steht nur unter „Datensicherung" — Punkt 45, ein Ort je Tatsache.)*

| | bewertete Aussagen | Kalibrierungs-Abweichung | Trefferquote |
|---|---|---|---|
| Sonnet | 609 | **4 %** (2,2–7,5 %) | 55 % (336/609) |
| Flash | 606 | **3 %** (2,4–7,3 %) | 53 % (319/606) |
| gesamt | 1215 | — | 54 % (655/1215) |

**🔴 Erstmals ein echter Messstand für Brier-Score und Widerspruchsquote (Backlog-Punkt 34/35/0b, gebaut seit 10./11.9.2026, hier zum ersten Mal abgelesen statt vorgerechnet):**
- **Brier-Score** *(fasst Zuversicht und Eintreffen in einer Zahl zusammen, 0 = perfekt, 0,25 = „immer 50 %")*: Sonnet **0,2418**, Flash **0,2452** — beide leicht besser als „immer 50 %", nahe beieinander.
- **Widerspruchsquote** *(wie oft die eigens gefragte Prozentzahl der vom Tipp implizierten Seite widerspricht, Markt „Sieger" strukturell ausgenommen)*: Sonnet — Tore 4,1 % (n=243), Beide treffen 29,2 % (n=243). Flash — Tore 7,4 % (n=242), Beide treffen 17,4 % (n=242). Bei beiden Gehirnen deutlich höher beim Markt „Beide treffen" als bei „Tore" — noch nicht eingeordnet, nur abgelesen.

**Sonnets Verteilung** *(Anzahl je Stufe, in Klammern behauptet/wirklich)*: 1–49 % → 107 (43/39) · 50–59 % → 381 (54/56) · 60–69 % → 79 (63/68) · 70–79 % → 40 (73/57) · 80–89 % → 0 · 90–99 % → 2 (94/100)

**Flashs Verteilung** *(Anzahl je Stufe, in Klammern behauptet/wirklich)*: 1–49 % → 103 (44/36) · 50–59 % → 308 (54/54) · 60–69 % → 163 (63/58) · 70–79 % → 25 (72/56) · 80–89 % → 5 (83/80) · 90–99 % → 2 (91/100)

**Entschlossenheit:**

| | Ø Abstand von 50 | Anteil ab 60 % |
|---|---|---|
| Sonnet | 6,8 | 20 % (121/609) |
| Flash | 8,0 | 32 % (195/606) |

**Gepaarter Vergleich (Backlog-Punkt 51, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) — 209 gepaarte Spiele:**

| Markt | Spiele | Nur Sonnet | Nur Flash | Beide richtig | Beide falsch |
|---|---|---|---|---|---|
| Sieger | 199 | 14 | 15 | 82 | 88 |
| Über/Unter 2,5 Tore | 199 | 26 | 23 | 88 | 62 |
| Beide treffen | 199 | 20 | 9 | 101 | 69 |

*1 Spiel ist nicht eindeutig zuordenbar und wird nicht mitgezählt (Anzeige der App, gleicher Wortlaut wie beim vorigen Stand). **Warum je Markt nur 199 der 209 gepaarten Spiele auftauchen, ist weiterhin nicht geklärt** (Art. 11) — 1 Spiel ist durch die Nichtzuordenbarkeit erklärt, die restlichen 9 nicht. Dieselbe unerklärte Lücke wie bei jedem bisherigen Messstand, diesmal wieder in anderer Grösse (vorher 7 von 161) — die Differenz ist abgelesen, nicht erklärt.*

**🔴 Erstmals ein echter Messstand für den Observation Layer („Was die Daten sagen", Backlog-Punkt 75 Teil 3, gebaut 11.9.2026) — alle sechs Beobachtungen jetzt „belegt" (ab 20 Aussagen), keine mehr „zu wenig Daten":**
- **Sonnet schätzt sich selbst richtig ein:** behauptete Trefferquote 54 %, eingetroffen 56 % (n=603).
- **Sonnets grösste Abweichung liegt beim Markt „Beide treffen":** 5 Punkte daneben (n=201).
- **Sonnets Zuversicht trägt:** sichere Aussagen (ab 70 %) treffen zu 60 % zu, unsichere nur zu 55 % (n=42).
- **Flash schätzt sich selbst richtig ein:** behauptete Trefferquote 58 %, eingetroffen 53 % (n=600).
- **Flashs grösste Abweichung liegt ebenfalls beim Markt „Beide treffen":** 6 Punkte daneben (n=200).
- **Flashs Zuversicht trägt:** sichere Aussagen (ab 70 %) treffen zu 63 % zu, unsichere nur zu 52 % (n=32).
*(Die App zeigt daneben noch eine vierte Beobachtung, Wetten aus einer Vorhersage gegen von Hand gesetzte — auf diesem Bildschirmfoto nicht sichtbar, hier nicht behauptet.)*

**Trainingsraum (Backlog-Punkt 77) und Kriterium (g) (Backlog-Punkt 80) — beide gebaut, keins bisher genutzt:** Trainingsraum zeigt für Sonnet und Flash „Stichtag nicht geprüft — gesperrt" (`TRAININGSRAUM_STICHTAG` weiterhin leer, Art. 11 wie beim Bau angelegt). Der Antwortkonsistenz-Test zeigt für beide „Noch kein Test gelaufen." Deckt sich mit der bei beiden Punkten offen benannten Grenze: Bewährung/echter Lauf stehen aus.

**Wetten:** Kontostand laut Kopfzeile **0,00 €**, 6 Wetten im Speicher. **Saldo, Trefferquote und Gesamt-Bilanz sind auf diesem Bildschirmfoto nicht sichtbar** — nicht erfunden, sondern offen gelassen (Art. 11). Der Neustart bei 0 vom 12.9.2026 gilt unverändert; ein vollständiger Wetten-Messstand braucht ein eigenes Bildschirmfoto der Finanzen-Ansicht.

**Ehrliche Einordnung (Art. 14):**
- **Die Kalibrierungsabweichung hat sich wieder gedreht.** Sonnets Abweichung ist von 3 % (4.9.) auf 4 % **gestiegen**, Flashs von 7 % auf 3 % **gefallen** — **Flash steht damit wieder knapp besser da als Sonnet**, nach dem Gegenteil am 4.9. Beide Streuungsbereiche (Sonnet 2,2–7,5 %, Flash 2,4–7,3 %) überlappen fast vollständig — der Unterschied liegt weiterhin im Rauschen (Backlog-Punkt 35), diesmal mit echter Streuungsangabe aus der App selbst, nicht nur behauptet.
- **Beide Trefferquoten sind leicht gestiegen:** Sonnet von 54 % auf 55 %, Flash von 50 % auf 53 %. Die kombinierte Trefferquote (54 %) ist eine eigene, direkt abgelesene Zahl, keine eigene Rechnung.
- **Sonnet legt sich weiterhin am häufigsten zwischen 50 und 59 Prozent fest:** 381 von 609 Aussagen (63 %), derselbe Anteil wie am 4.9. (63 %).
- **Flashs grösster Einzelposten bleibt die Stufe 50–59 %,** nicht mehr 60–69 % wie am 4.9.: 308 behauptet 54 %, eingetroffen 54 %. *(Die Anzahl steht in der Verteilungszeile oben und wird hier nicht wiederholt — Punkt 45.)*
- Zeilen mit sehr wenigen Aussagen (Sonnet 90–99 %, Flash 80–89 % und 90–99 %) sind weiterhin **bedeutungslos**.
- **Ungleiche Anzahl, unverändert in ihrer Grösse:** Sonnet 609, Flash 606 — dieselbe Differenz von drei wie bei jedem bisherigen Stand seit dem 30.8.2026. Woher sie kommt, ist weiterhin **nicht geklärt** (Art. 11).
- **Entschlossenheit:** Sonnets Anteil ab 60 % bleibt bei 20 %, jetzt bei grösserer Grundgesamtheit. Flashs Anteil ist von 38 % auf 32 % weiter gesunken.

**Vorherige Stände:** *4.9.2026 — Sonnet 468 bei 3 % und 54 %, Flash 465 bei 7 % und 50 %. 2.9.2026 — Sonnet 402 bei 6 % und 57 %, Flash 399 bei 5 % und 52 %. 30.8.2026 — Sonnet 399, Flash 396 bewertete Aussagen; **Abweichung und Trefferquote sind für diesen Tag nicht überliefert** (Art. 11, Fehlerart C1 — nicht aus den Nachbarwerten herleiten). 14.8.2026 — Sonnet 330 bei 4 % und 55 %, Flash 327 bei 8 % und 50 %. 13.8. nach der Berichtigung — 300/297. 9.8. — je 207. 8.8. — je 180. 6.8. — je 135, 5 und 9. 3.8. — je 87, 4,8 und 8,6.*

**Stehender Vorbehalt (gilt für jeden künftigen Messstand, nicht nur diesen):** Eine Berichtigung am Rechenweg ist keine Garantie für eine bessere Zahl — am 13./14.8.2026 belegt: **die Berichtigung hat die Kalibrierung NICHT verbessert**, der Fehler wurde nur verschoben. Voller Hergang: `CHRONIK-2026-08.md`.

---

## Versionen

- **🔴 Rücksetzpunkt vor dem KI-Log-Umbau (Ondos Wunsch, 12.9.2026):** Commit `ed14eb7`,
  `beta.html` v19.9.0, 12.9.2026, 16:17 Uhr UTC (Commit-Zeitstempel). Ondo hat nach dem Trainingsraum-Bau
  Nachbesserungen verlangt (KI-Daten von „Mehr" nach Wettmodul/KI-Log verschieben, Auswahl-UI für
  den Trainingsraum) — dieser Commit ist der Stand **davor**, falls zurückgesetzt werden muss.
  Einzelheiten Backlog-Punkt 77.
- **Stabil: v17** (`OndoControl.html`, version.json = 17) — **seit dem 17. Juli unverändert**
- **Beta: v19.18.2** (`beta.html`, geliefert 19.9.2026) — **Abschluss-Nachbesserung von
  v19.18.1 nach ChatGPTs Review am echten Commit `02720ae` (Backlog-Punkt 84).** Der
  vollständige v19.18.1-Block steht wortgleich in `CHRONIK-2026-09.md`, dort auch die
  ausdrückliche Rücknahme der damals zu starken Aussage „C2 vollständig umgesetzt".
  **Im Review bestanden und in dieser Lieferung NICHT erneut angefasst:** C1 (blanke „Serie
  A"/„Serie B"-Live-Regeln entfernt, Brasilien-Regeln erhalten, Archivsuche weiterhin vor dem
  Live-Fallback) und C3 (`strukturAbgleich()` liest `providerCompetitionName` **oder**
  `wettbewerb`, neues Schema hat Vorrang, Mehrdeutig-Liste und normaler Treffer
  rückwärtskompatibel). Beide sind hier nur als Regressionstest erneut geprüft.
  **🔴 D1 — der eine funktionale Befund, behoben:** Der echte Archivzweig in `rundeLaufen()`
  rief `espnRohSchreiben()` **nicht** auf; der Live-Zweig daneben tat es seit v19.14.2. Die
  Archiv-Evidence samt `providerEventId` wurde dadurch im tatsächlichen App-Ablauf nie nach
  `e.espnRoh` geschrieben — und das Archiv läuft in dieser Kaskade zuerst, ist also der
  Normalfall. Behoben durch genau einen ergänzten Aufruf; `espnArchivLesen()` und
  `espnRohSchreiben()` selbst sind byte-identisch unverändert geblieben.
  **🔴 D2 — warum der vorige Prüflauf das nicht gefangen hat (Art. 14):** Der v19.18.1-Test rief
  `espnArchivLesen()` und danach **selbst** `espnRohSchreiben()` auf und prüfte damit eine
  Verkettung, die der Test herstellte, nicht die der App. Der neue Test ruft
  `espnRohSchreiben()` **nirgends selbst** auf: er führt `ergebnissePruefen()` samt
  `rundeLaufen()` wortgleich aus und zählt nur mit, ob der echte Code die Funktion selbst
  aufruft. **Gegenprobe gemacht:** Gegen den Stand `02720ae` schlägt derselbe Test fehl, gegen
  den neuen läuft er durch — erst das belegt, dass er die Lücke wirklich prüft.
  **Unverändert, maschinell als byte-identisch zu `02720ae` belegt (21 Stellen):**
  `ESPN_SLUG_REGELN`, `espnSlugFuer()`, `strukturAbgleich()`, `espnArchivLesen()`,
  `espnRohSchreiben()`, `REF_MIN_LAEUFE`, `refEinigkeit()`, STUFEN, `espnLauf()`,
  `openligaLauf()`, `ergebnisQuelleAus()`, `MESS_VERBOTEN`, `messGeheimFund()` und die
  Messdaten-Projektionslogik aus A1/A2. `skripte/`, `.github/workflows/` und `daten/` sind laut
  `git diff` vollständig unangetastet — der gesamte Diff dieser Lieferung ist **eine Datei**.
  **Verifiziert:** `node --check` bestanden · **68 Prüfungen**, alle bestanden: 18 am echten
  Archivzweig von `rundeLaufen()` (realer Datensatz `providerEventId 401874503`, Lyngby
  Boldklub–Silkeborg IF, 18.9.2026, 0:4, „Danish Superliga" — ein Wettbewerb **ohne** Live-Slug,
  echter Netz-Roundtrip gegen die reale Monatsdatei) · 12 am echten Live-Zweig, gleichzeitig der
  DFB-Pokal-Elfmeterfall Norderstedt–St. Pauli (90-Minuten-Messwert weiterhin **0:0**, nie der
  Elfmeterstand 2:3) · 17 Kaskaden- und C1/C3-Regressionstests · 21 Byte-Identitätsnachweise.
  **Live-Slug-Abdeckung unverändert 29 von 56** (frisch nachgezählt, keine neue Slug-Arbeit).
  **🔴 Erster realer geplanter Betriebslauf beider Workflows (19.9.2026, über GitHub geprüft):**
  Schiri-Ergebnisse Lauf #13, Start **01:20:10 UTC**, erfolgreich, Commit `59c5548` ·
  ESPN-Ergebnisse **Lauf #1, der erste überhaupt**, Start **01:41:23 UTC**, erfolgreich, prüfte
  laut Protokoll alle **58 Slugs**, schrieb **36 Spiele** in die neu angelegte
  `daten/espn-ergebnisse/2026-09.json`, meldete **keine abgelehnten HTTP-Abrufe**, Commit/Push
  (`59c5548..1b506d4`) funktionierte samt der neuen `git fetch`/HEAD-Prüfung.
  **Der konfigurierte Cron-Abstand beträgt 25 Minuten (23:30 → 23:55 UTC). Beim ersten realen
  Betriebstag starteten die beiden Läufe tatsächlich 21 Minuten 13 Sekunden auseinander.**
  **Gemeinsame `concurrency`-Konfiguration und normaler Commit/Push-Pfad funktionierten im
  Betrieb; eine echte gleichzeitige Writer-Kollision wurde noch nicht provoziert bzw.
  beobachtet.** Nicht als „bewährt" gesetzt. *Ehrlich benannt (Art. 11): Beide Läufe starteten
  deutlich nach ihren eingestellten Cron-Zeiten. **Die Ursache wurde in dieser Lieferung nicht
  untersucht** — geplante GitHub-Actions sind allgemein nicht minutengenau garantiert, aber für
  diesen konkreten Lauf ist nichts nachgewiesen. Ein einzelner Tag sagt nichts über die
  Regelmäßigkeit.*
  **🔴 Reale erste Archivgröße, am aktuellen `main` frisch gemessen** (ersetzt die zu niedrige
  230–570-KB-Schätzung aus v19.18.0): `daten/espn-ergebnisse/2026-09.json` = **30.809 Byte
  (30,1 KB)** bei **36 Spielen** an **einem** Kalendertag (18.9.2026), also rund **856 Byte
  Gesamtdatei je gespeichertem Spiel**. **Eine rein lineare 30-Tage-Hochrechnung läge damit grob
  in der Größenordnung von rund 0,9 MB. Das ist KEIN gemessener voller Monat;** Pokal-,
  Qualifikations- und Spielplandichte schwanken. *Die in v19.18.1 hier zusätzlich genannten
  Byte-Zahlen je Einzeldatensatz (745/430 bzw. 660/380) sind **entfernt**: sie waren ohne
  benannte Messmethode nicht reproduzierbar — sie stammten von einem **anderen** Datensatz als
  dem geprüften und aus einem Serialisierer, der nach Komma und Doppelpunkt ein Leerzeichen
  setzt. Die Gesamtdateigröße ist davon unberührt und unabhängig bestätigt.*
  **🔴 Status weiterhin NICHT auf „behoben"/„bewährt" gesetzt:** Ondos Befund vom 18.9.2026
  („4 von 10") gilt erst nach einem echten Prüfzyklus am Gerät als behoben — **nicht mit diesem
  Bau, nicht mit dem ersten Actions-Lauf und nicht mit diesem Test.**
- **Sprachschlüssel: 349** in DE, FR und EN, maschinell abgeglichen und identisch (**selbst gezählt von `pruefe.py` Abschnitt 13, Stand 12.9.2026**). **Diese Zahl ist bei jeder Änderung an den Sprachschlüsseln in derselben Lieferung mitzuführen.**

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
| 11 | **Schwankende Antworten bei mehreren Läufen desselben Spiels trotz Temperatur 0** | 28.8. (Fälle vom 8.8./9.8.); extern belegte Werte am 30.8.2026 berichtigt, **Datum der beiden Spiele am 30.8.2026 ein zweites Mal berichtigt**, **manuelle Eintragung am 2.9.2026 zurückgenommen** | ~~*keine, aber die zwei konkreten Fälle sind erledigt*~~ **🔴 BERICHTIGT am 2.9.2026: keine Absicherung, und auch die zwei konkreten Fälle sind NICHT erledigt** — beide Spiele stehen wieder geparkt (`parkGrund:'unstable_ref'`), siehe die Berichtigung am Ende dieser Zelle. Sabah FC–Hapoel Beer-Sheva FC (25.8.): drei Läufe, drei Endstände (5:2 / 2:2 / 3:1 n.Verl.); NK Celje–Slovan Bratislava (26.8.): drei Läufe, drei Stände (1:2 / 1:1 / 0:1). **Keiner der sechs Läufe traf den extern belegten 90-Minuten-Stand** (Sabah 3:2, HZ 1:1, n.Verl. 5:2 — Sabahs viertes Tor fiel in der 90+4., noch in der Nachspielzeit der regulären Spielzeit · Celje 1:1, HZ 1:1, n.Verl. 1:2). **🔴 Berichtigt (30.8.2026):** Diese Zeile nannte zuvor „Celje 1:2, Sabah 5:2" als extern belegten Wert — genau diese Zahlen standen aber bereits oben als einer der drei App-Läufe, ein Widerspruch zur eigenen Aussage „keiner traf", hier selbst gefunden beim Bearbeiten dieser Zeile, nicht gemeldet bekommen. **🔴 Zweite Berichtigung, selber Tag:** Die Daten der beiden Spiele standen hier (und seit v19.8.5 in „Versionen" unten) **vertauscht** — Sabah war als 26.8. eingetragen, Celje als 25.8. Mehrfach extern gegengeprüft (ESPN, UEFA.com, Sofascore, TNT Sports, Flashscore, plus das KI-Log selbst) auf **Sabah 25.8., Celje 26.8.** berichtigt. ~~Beide Spiele am 30.8.2026 mit dem jetzt korrekten, extern verifizierten Stand von Hand eingetragen (Backlog-Punkt 64, Nachfrage Teil 3, Berichtigung v19.8.10) — als `ergebnisQuelle:'extern_manuell'` gekennzeichnet, nicht vom Schiedsrichter-Lauf der App übernommen; die Zuordnungslogik ist jetzt bewusst robuster gegen eine erneute Datumsverwechslung (akzeptiert beide Tage je Spiel, Stichwörter bleiben die eindeutige Unterscheidung). Behebt **nicht** die Fehlerart selbst, nur diese zwei Fälle.~~ **🔴 ZURÜCKGENOMMEN am 2.9.2026 (Entscheidung Ondos), `beta.html` v19.8.11.** Ondo hat klargestellt, was „der Schiedsrichter ist repariert" heisst: **er liefert ab sofort nur noch richtige, zuverlässige Ergebnisse für alle künftigen Spiele, ohne Gegenprüfung im Chat.** Diese Bedingung ist nicht erfüllt, die elfte Fehlerart besteht unverändert — die Eintragung vom 30.8.2026 war damit **verfrüht** und verstiess gegen die eigene Auflage aus Backlog-Punkt 64 („Neubewertung erst, sobald die Ursache geklärt und der Schiedsrichter entsprechend repariert ist"). Neue Migration `state.seedV<8` setzt beide Einträge zurück: Endstand, Halbzeit, Verlängerung und `ergebnisQuelle` entfernt, alle Märkte wieder `offen`, `status` wieder `offen`, `geparkt` wieder `true`, `parkGrund` wieder `'unstable_ref'`. Beide fallen damit wieder vollständig aus der Kalibrierung heraus. `state.seedV<7` bleibt unverändert stehen (Codehistorie, ausdrückliche Auflage). **`e.refRoh` bleibt vollständig erhalten** — die rohen Schiedsrichter-Antworten sind der Beleg für diese Fehlerart. **Der Auftrag nannte nur Sabah und hielt Celje für bereits geparkt; der Code belegt, dass `seedV<7` beide entparkt hatte** — vor der Änderung rückgefragt (Art. 11), Ondo hat am 2.9.2026 entschieden, beide zurückzunehmen. **Die extern belegten Werte selbst bleiben richtig und stehen weiter oben in dieser Zelle** — zurückgenommen ist nur ihre Eintragung in die Messdaten, nicht die Recherche. Erstes, schwächeres Auftreten desselben Musters: Fehlerart 10 oben (Apollon Limassol – SK Brann, 13.8., zwei Läufe, zwei Werte). Die rohe Antwort wird seit v19.8.5 mitgeschrieben (Backlog-Punkt 64). **🔴 NEU am 3.9.2026 (v19.8.12, Backlog-Punkt 68) — eine konkrete Absicherung EXISTIERT jetzt, die Fehlerart ist damit NICHT behoben:** Jedes Spiel wird mit **drei gleichzeitigen Läufen** geprüft (zwei Gemini, einer Sonnet), und eine feste Einigkeitsregel entscheidet: alle drei gleich → übernehmen · genau zwei gleich → übernehmen mit sichtbarer Pflicht-Markierung `2von3` · alle drei verschieden → **parken** statt einen Wert zu nehmen · weniger als drei brauchbare Läufe → nichts übernehmen. Genau der Sabah-/Celje-Fall (drei Läufe, drei Werte) führt damit zum Parken statt zu einem übernommenen Wert. **Was belegt ist:** ein Trockentest an den echten, aus `beta.html` herausgeschnittenen Funktionen, 57 Prüfungen, alle bestanden. **Was NICHT belegt ist und ausdrücklich nicht behauptet wird:** dass der Schiedsrichter damit zuverlässig ist. Drei Läufe auf zwei Modellen sind keine drei unabhängigen Quellen, und drei einige Läufe können gemeinsam falsch liegen — am 8.8.2026 belegt (sieben von zehn Anpfiffzeiten falsch, **beide** Gehirne übereinstimmend). **Nach Ondos eigener Definition von „repariert" — zuverlässige Ergebnisse für alle künftigen Spiele ohne Gegenprüfung im Chat — ist der Schiedsrichter weiterhin NICHT repariert;** das entscheidet sich erst nach Bewährung im echten Betrieb (Stabilitätsregel), nicht mit dem Bau. Sabah und Celje bleiben unverändert geparkt. **🔴 Erste Bewährungsbeobachtung, 10.9.2026 (Ondo):** In der ersten vollen Betriebswoche seit dem 3.9.2026 hat die automatische 3-von-3-Uneinigkeitsregel kein einziges Mal ausgelöst — der einzige seither geparkte Fall (5.9.2026, Sligo Rovers–Galway United) war eine von Ondo von Hand vorgenommene Parkung wegen einer extern belegten Spielverlegung, kein Instabilitätsfall. Ein echter, positiver erster Datenpunkt, **beweist aber nicht**, dass übernommene Werte in dieser Woche tatsächlich richtig waren — Einzelheiten bei Backlog-Punkt 68 (Punkt 45, nicht hier wiederholt). ~~🔴 Sabah und Celje sind seit 10.9.2026 nicht mehr geparkt (Ondo, über den „Wieder prüfen"-Knopf). Beide Spiele lieferten diesmal je einen einzigen, nicht widersprüchlichen Vorschlag (Celje 1:1, HZ 1:1, n.Verl. 1:2 · Sabah 3:2, HZ 1:1, n.Verl. 5:2 — dieselben Werte wie die extern belegten oben), zusätzlich per Websuche gegen je zwei unabhängige Quellen bestätigt, und von Ondo übernommen.~~ **🔴 BERICHTIGT 13.9.2026, an Ondos eigenem Messdaten-Export vom selben Tag (08:28 Uhr) geprüft, nicht vermutet: Diese Aussage stimmt nicht mehr mit dem tatsächlichen Datenstand überein.** Im Export stehen beide Spiele wieder als `geparkt:true` — Celje mit `ergebnisHeim:1`/`ergebnisGast:1` gesetzt, aber `status:"offen"` statt „bewertet"; Sabah mit `parkGrund:"unstable_ref"` und ohne jeden Endstand. Die eigene `refRoh`-Historie beider Einträge im selben Export endet am 31.8.2026 — **kein einziger Lauf vom 10.9.2026 ist darin zu finden**, obwohl genau der oben behauptet wird. **Was das heisst, ehrlich benannt (Art. 11): Nicht bekannt, ob die Übernahme vom 10.9.2026 nie tatsächlich gespeichert wurde, oder ob sie später durch einen weiteren Vorgang wieder aufgehoben wurde — keine der beiden Möglichkeiten ist hier belegt.** Der durchgestrichene Text bleibt als Beleg stehen, nicht gelöscht (Arbeitsregel „Berichtigen statt danebenstellen"). **Ursache benannt, Ondo, 13.9.2026:** Die Übernahme vom 10.9.2026 scheiterte am damaligen Speicherproblem — der Stand liess sich nicht speichern, und auch Sicherungskopien liessen sich nicht vernünftig sichern oder hochladen. **Das deckt sich mit dem bereits dokumentierten Ablauf** (Backlog-Punkt 76): `localStorage` lehnte das Speichern bei Ondo nachweislich ab (2.726 KB, v19.8.29, 12.9.2026) — genau in diesem Fenster liegt die Rücknahme; der Umstieg auf `IndexedDB` (v19.8.30) verlangte danach ausdrücklich das einmalige Einspielen der **zuletzt erfolgreich gespeicherten** Sicherung, die die Celje/Sabah-Übernahme vom 10.9. vermutlich noch nicht enthielt. Diese Erklärung ist Ondos eigene Aussage, nicht am Code nachgeprüft — sie passt aber lückenlos zur bereits belegten Zeitlinie. **Ondo: Das Speicherproblem ist gelöst, beide Spiele werden im nächsten Prüflauf erneut ausgewertet.** Kein Codeaufwand nötig, nichts zu tun von dieser Seite. **🔴 Absicherung KURZZEITIG TEILWEISE ZURÜCKGENOMMEN, 17.9.2026 (`beta.html` v19.14.0, Backlog-Punkt 84):** Die „drei gleichzeitige Läufe"-Regel galt für eine Lieferung lang nur noch, wenn ESPN (neue primäre Quelle, siehe „Versionen") gar nichts fand — der KI-Notnagel machte dann nur einen Lauf. **🔴 NOCH AM SELBEN TAG WIEDERHERGESTELLT (`beta.html` v19.14.1, Auftrag Ondo „KI-Notnagel zurück auf drei Läufe"):** Findet ESPN nichts, gelten wieder drei Läufe (zwei Gemini, ein Sonnet) mit der vollen 2-von-3-Regel — genau die hier dokumentierte Fehlerart ist für den Notnagel-Fall damit wieder abgesichert, wie vor v19.14.0. Unverändert bleibt: Ein Strukturtreffer (ESPN) gilt weiterhin schon nach einem einzigen Lauf als „einstimmig" — er ist kein Modell-Ratewert, sondern ein reales Box-Score-Ergebnis (Schritt 0, live gegen fünf echte Spiele geprüft, siehe „Versionen"). Bewährung im echten Betrieb steht aus. | v19.8.12 (Absicherung, keine Behebung) — kurzzeitig teilweise zurückgenommen v19.14.0, wiederhergestellt v19.14.1 |
| — | ~~Dasselbe Spiel doppelt in der Spielliste~~ | 3.8. | **VERSCHOBEN am 7.8. (Ondo) in die eigene Tabelle „Die Spielliste" weiter unten.** Sie ist Datenhygiene, kein Schiedsrichterurteil — Geminis eigene Einordnung vom 4.8. | — |

**Die wichtigste Erkenntnis (25.7.):** Alle drei KIs urteilten unabhängig, Ergebnisse unterklassiger Spiele seien nicht beschaffbar. **Das war falsch.** Ondo drückte den Prüf-Knopf mehrfach: 2 von 7, dann 4 von 7, schließlich 7 von 7. Es war kein Verfügbarkeits-, sondern ein Zuverlässigkeitsproblem.

**Was weiterhin gilt:** Ondos manuelle Kontrolle hat **jeden** Fehler gefangen, den die Automatik durchgelassen hat.

**Bekannte Lücke:** Die Wiederholung greift nur bei „nicht gefunden". Ein einmal als *fertig* gemeldetes Ergebnis wird nie wieder hinterfragt.

~~Ergänzt 13.9.2026 (Diagnose zu Backlog-Punkt 81): … für die rund 12 grossen Wettbewerbe, die
football-data.org abdeckt, sind Fehlerart 7 und 8 damit strukturell entschärft. … Wie gross
diese Lücke bei Ondos tatsächlichen Ligen ist, ist noch nicht geprüft.~~
**🔴 BERICHTIGT, noch am selben Tag (13.9.2026), jetzt mit echten Daten statt nur mit dem
Code-Kommentar geprüft:** Die Lücke wurde nachgezählt (505 `kiProtokoll`-Einträge, 58
verschiedene Wettbewerbe) — sie ist **gross**, nicht klein: der grösste Teil von Ondos Spielen
liegt in UEFA-Qualifikationsrunden, Pokal-Runden, Testspielen und kleinen/regionalen Ligen,
klar ausserhalb der rund 12 grossen Wettbewerbe. **Wichtiger noch:** In 505 Messdaten-Einträgen
und 401 Schiedsrichter-Rohantworten (30.7.–13.9.2026) kommt „api-football.com" oder
„football-data.org" kein einziges Mal als tatsächlich genutzte Quelle vor — maschinell
nachgezählt. Die strukturelle Absicherung ist im Code vorhanden, hat in der echten Nutzung
bisher aber **keine einzige Auswirkung gehabt**. Einzelheiten Backlog-Punkt 81.
**Zusätzlich, beim Nachsehen gefunden, unabhängig von der Ligen-Frage:** Ein echter Bug in der
Anfrage-Auswahl (`rundeLaufen()` wählte immer dieselben ersten fünf Spiele, weitere kamen nie
an die Reihe) erklärt Ondos „0 von 10 gefunden" vom 13.9.2026 — behoben, `beta.html` v19.13.1.
Einzelheiten Backlog-Punkt 81.

**🔴 Diagnose fertig, 13.9.2026 (Ondos Auftrag, reine Untersuchung, kein Codeaufwand): Warum
football-data.org „kein einziges Mal als tatsächlich genutzte Quelle" vorkommt, ist jetzt
geklärt, nicht mehr nur die Ligen-Abdeckung.** Echte Testabrufe (OPTIONS-Preflight, wie ihn
ein Browser bei jeder Anfrage mit dem Kopf-Feld `X-Auth-Token` automatisch verschickt) zeigen:
`Access-Control-Allow-Origin: http://localhost` — fest, dreifach mit verschiedenen
Origin-Werten geprüft, nie Ondos echte Adresse. **Browser-Zugriffe auf football-data.org sind
nachweislich nur von `localhost` erlaubt, nicht von `https://ondo-control.github.io`** — ein
echter Browser schickt die eigentliche Anfrage deshalb nie ab, `fetch()` scheitert mit einem
generischen Netzwerkfehler, das bestehende `.catch(){ return []; }` fängt das still ab. Zum
Vergleich: API-Football liefert `Access-Control-Allow-Origin: *` (uneingeschränkt) — dort
bleibt die bereits bekannte Kontosperre die Ursache, nicht CORS. **Grenze:** Diese Sitzung
hat keinen Zugriff auf Ondos echten Schlüssel, die CORS-Kopfzeile ist davon aber unabhängig,
weil sie unabhängig von der Tokengültigkeit gesetzt wird. Kein Fix in dieser Fassung, wie
beauftragt. Volle Kopfzeilen und Einzelheiten: Backlog-Punkt 81.

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
**Letzte bestätigte Sicherung: 13.9.2026, 10:55 Uhr** — 505 Vorhersagen, 6 Wetten, im Bildschirmfoto der App sichtbar (belegter Speicher 2.855 KB von 39.332 MB, 0 %). ⚠ **Vor jeder Codelieferung ist eine frische Sicherung zu verlangen.**

*Diese Zeile ist eine **Standsangabe**, keine Verlaufsangabe. Sie stand vom 7. bis zum 14. August auf dem 7.8. und war damit sechs Tage falsch, während zwei andere Stellen des Dokuments den richtigen Wert trugen. Seit dem 14.8. prüft `pruefe.py` sie gegen die jüngste Sicherungsangabe im Dokument.*
*Am 4.8. hat sich die Sicherung bewährt: Ondo hat den Browserverlauf gelöscht, Safari löschte dabei den Websitespeicher mit, alle Daten waren weg — und wurden vollständig wiederhergestellt. **Nichts verloren.** Zwei bekannte Verlustwege: Browserdaten löschen · getrennter Speicher Safari gegen Startbildschirm.*
*Hinweis (3.8.): Die Sicherungsdatei enthält `apiKey`, `geminiKey` und `pin` im Klartext. Sie darf nie an ChatGPT oder Gemini gehen, nie an einen Bericht angehängt und nie ins Repo. Ondo hat am 3.8. beide Schlüssel neu erzeugt und die alten deaktiviert. **Folge: Eine Sicherung von vor dem 3.8. überschreibt beim Zurückladen die neuen Schlüssel mit den toten alten** — dann Schlüssel neu eintragen, die Messdaten bleiben unberührt.*

**Nutzungslimit, zuletzt abgelesen 29.8.2026, 22:52 Uhr:** aktuelle 5-Stunden-Sitzung 12 % verbraucht, Wochenlimit „Alle Modelle" 54 % verbraucht, Nutzungsguthaben 0 Punkte, Funktion ausgeschaltet. Herleitung, Richtwert und die einzelnen Sitzungs-Selbstauskuenfte: `CHRONIK-2026-08.md`.

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

*Vorfall vollstaendig geschildert in `CHRONIK-2026-08.md`. Hier nur die daraus folgende, weiterhin gueltige Regel:*

**Stehende Regel, ab sofort in jedem Auftrag zu wiederholen (Ondo, 6.9.2026):** Push ausschliesslich auf `main`, `--ff-only`. Kein neuer Branch, ausser `mistral`. **Bei einem Konflikt: anhalten und fragen, nicht selbst entscheiden** — kein automatischer Merge, kein Rebase, kein Force.

**🔴 Klarstellung, 17.9.2026 (Ondo, Backlog-Punkt 83):** Für Backlog-Punkt 83 hatte die aufrufende Cloud-Sitzung von der Plattform selbst einen eigenen Feature-Branch (`claude/startprüfung-stand-md-fwfl3u`) zugewiesen bekommen — keine eigenmächtige Entscheidung wie am 6.9.2026, sondern eine Vorgabe der Sitzungsumgebung, im Widerspruch zur stehenden Regel oben. Ondo hat klargestellt: **Die Regel gilt für den Normalfall, nicht nur als Ziel eines nachträglichen Merges** — Code arbeitet direkt auf `main`, unabhängig davon, welchen Branch eine Sitzungsumgebung vorschlägt. Der Feature-Branch wurde nach Fertigstellung per `--ff-only` nach `main` gemerged und anschliessend gelöscht (lokal möglich, auf GitHub selbst an der bekannten 403-Grenze gescheitert, siehe „Bekannte Einschränkungen" — Ondo um manuelles Löschen gebeten). Ausnahme weiterhin ausschliesslich `mistral`.

---

## Arbeitsablauf für neue Chats

Ondo schreibt „Ondo Control: [Anliegen]" und fügt Raw-Links ein, **immer mit angehängter Zahl**, z. B. `?v=20260731`. **Alle sechs Dateien plus `version.json` werden gelesen, bevor irgendetwas beurteilt wird** — Blueprint und Ondo-Core eingeschlossen. Das Weglassen hat am 30./31.7. zweimal zu falschen Empfehlungen geführt.

**Vor jeder Lieferung:** Syntax-Check (`node --check`), Sprachdatei-Abgleich (DE/FR/EN gleiche Schlüssel, **Zahl siehe Abschnitt „Versionen" — sie steht nur dort**), Trockentest der neuen Logik — am besten gegen Ondos jüngste Sicherungsdatei, das prüft die Rechnung an echten Daten. Versionsnummer im Header hochzählen. **Und die Dokumente (Arbeitsregel F).**

### Chat-Übergabe ist Claudes Pflicht, nicht Ondos (**Übergaberegel**, 30.7.)

*Namensklärung erledigt (Ondo, 31.7., eingetragen 3.8.): Diese Vorschrift hieß bis dahin ebenfalls „Regel G" und ließ sich mit der Arbeitsregel G (Kostenregel) im Blueprint verwechseln. Sie heißt jetzt **Übergaberegel**.*

**🔴 Abgelöst durch STARTPRÜFUNG (Ondo, 15.9.2026, Backlog-Punkt 83) — aktuelle Übergaberegel für den Chat-Bereich, analog zu Backlog-Punkt 61, das dieselbe Regel für den Code-Bereich abgeschwächt hat.** Das im Rest dieses Abschnitts beschriebene Verfahren — Claude löst von selbst aus, baut eine Übergabemappe mit Teil A–E, Kontrollfragen und einem geheim zu haltenden Antwortschlüssel — ist das **bisherige** Vorgehen. Es ist überholt, nicht gelöscht (Regel 3): Ondo benutzt seit einiger Zeit stattdessen ein eigenes STARTPRÜFUNG-Verfahren.

**Wie STARTPRÜFUNG funktioniert:** Ondo schickt in die erste Nachricht eines neuen Chats das Stichwort STARTPRÜFUNG plus die Raw-Links zu den vier Pflichtdokumenten, mit angehängter Commit-Zahl statt `?v=Datum`. Der neue Chat ruft alle vier selbst ab, prüft dabei, ob `STAND.md` selbst eine Reihenfolge oder vorrangige Abschnitte nennt (z. B. „Acht Fehlerarten Claudes" oder „Entscheidungen, die bei Ondo liegen") und liest diese zuerst, liest zusätzlich Ondos Speicherdatei „Offene Fäden" (liegt in Claudes eigenem Memory-System, **nicht im Repo**), und meldet sich danach von selbst mit fünf Angaben: Fassungsabgleich aller synchron zu haltenden Dokumente (einschliesslich der Feststellung, ob sie wirklich übereinstimmen) · Bestätigung der vorrangig gelesenen Abschnitte · Inhalt der „Offenen Fäden" · einer kurzen Standzusammenfassung · und einer Liste dessen, was ausdrücklich nicht gelesen wurde (Archivdateien usw.).

**Warum das die Kontrollfragen ersetzt:** Eine Sitzung, die das Lesen nur vortäuscht, kann diese fünf konkreten, überprüfbaren Angaben nicht liefern — dieselbe Wirkung wie eine richtig beantwortete Fangfrage, ohne einen separaten, geheim zu haltenden Antwortschlüssel zu brauchen. **Damit entfällt für den Chat-Bereich auch die Antwortschlüssel-Geheimhaltung** (Teil C weiter unten) — STARTPRÜFUNG hat keinen Antwortschlüssel, den es zu schützen gäbe.

**Was das für den Rest dieses Abschnitts heisst:** Teil A–E, die Kontrollfragen-Mechanik und die Antwortschlüssel-Geheimhaltung sind ab hier **🔴 ÜBERHOLT** — als Beleg stehen gelassen (Regel 3), nicht mehr die geltende Praxis für den Chat-Bereich. Die beiden Muster-Dateien (`MUSTER_Ondo-Control_Uebergabe.md`, `MUSTER_Ondo-Control_Abnahme.md`, Abschnitt „Muster im Repo" weiter unten) sind aus demselben Grund ebenfalls überholt — Blueprint 2d (ChatGPTs eigene Übergaberegel-Fassung) hat nie dieses Mappen-Format benutzt, sondern von Anfang an eine einfache Chat-Nachricht ohne Kontrollfragen und Antwortschlüssel. Einzelheiten: Backlog-Punkt 83.

**🔴 Ab hier: das überholte, bisherige Verfahren (Regel 3 — nicht gelöscht).** Claude löste die Übergabe **von selbst** aus, sobald der Arbeitsspeicher knapp wurde. Sie bestand aus drei Teilen: aktualisierter PROJEKT-STATUS, aktualisierter Backlog, und einer **Übergabemappe** mit den Abschnitten: (A) Nachricht zum Einfügen, (B) Kontrollfragen, (C) Antwortschlüssel nur für Ondo, (D) was zu tun ist, wenn Antworten falsch sind, (E) erste Arbeit nach der Abnahme.

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

**Nicht offen, sondern entschieden — damit sie nicht wieder auf diese Liste geraten:**
- **Punkt 38** (Sonnet als waehlbares Modell) — von Ondo am 9.8. zurueckgestellt, nicht verworfen.
- **Die rueckwirkende Berichtigung** — am 13.8. beschlossen und ausgefuehrt.
- **Befoerderungskriterium (f)** (Schiedsrichter-Null-Fehler-Toleranz) — von Ondo in dieser
  Sitzung ausdruecklich aufgehoben (13.9.2026 berichtigt nachgetragen, Backlog-Punkt 5).
- **Befoerderungskriterium (c)** (15 bewertete Tipps sind zu wenig) — von Ondo entschieden
  (13.9.2026): „Wir haben genug Spiele!!!!" Einzelheiten Backlog-Punkt 5.
- **`CODE_VERSION`** — am 14.8. entschieden, Lieferkennzeichen, ausnahmslos hochzaehlen.

**Was hier NICHT steht:** die Zahl der beschlossenen, nicht gebauten Punkte. Sie steht ausschliesslich im Backlog (Punkt 45).

---
