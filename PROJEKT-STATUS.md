# ONDO CONTROL — PROJEKT-STATUS
*Chat-übergreifende Zusammenfassung. Bei jedem Meilenstein aktualisieren. Stand: 8. August 2026, 17:25 Uhr, v19.7.8*

> **Zur Datierung:** Die Kalibrierungszahlen im Abschnitt „Aktueller Messstand" sind am **8.8.2026, 06:11 Uhr aus der Anzeige der App abgelesen** — je 180 bewertete Aussagen, beide Gehirne 8 % Abweichung. Ältere Zahlen in den Tagesabschnitten (135 Aussagen, 5 gegen 9 Prozent) sind **Verlaufsangaben und bleiben stehen**. Massgeblich ist immer der Abschnitt „Aktueller Messstand".

---

## Für jede KI, die dieses Projekt unterstützt

Ondo Control ist ein persönliches, KI-gestütztes Entscheidungsunterstützungssystem. Eine einzige HTML-Datei, GitHub Pages, localStorage, kein Server. Besitzer und alleiniger Entscheider: **Ondo** (kein Programmierer, arbeitet primär am iPhone, liefert jede Änderung selbst per Datei-Upload zu GitHub).

**Rollen:** Claude = Entwickler und Archivar · ChatGPT = Architekt · Gemini = Reviewer · Ondo = Product Owner.

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

**Master-Dokumente im Repo:** `Blueprint.md` · `Ondo-Core-Architektur.md` · `Ondo-Control-Backlog.md` (Fassung 5, 31.7.) · dieses Dokument.

---

## 🔴 DREI FUNDE VON AUSSEN (8.8., 17:25 Uhr) — NACHGERECHNET UND BESTÄTIGT

*Herkunft, ausdrücklich festgehalten: **Diese drei Punkte hat Chat 12 nicht selbst gefunden.** Sie stammen aus einem frischen Claude-Chat, den Ondo am 8.8. geöffnet hat. Chat 12 hat sie nach Arbeitsregel H **selbst nachgerechnet**, statt sie zu übernehmen — mit einem Ergebnis, das an einer Stelle vom Fund abweicht.*

### Fund 1 — Die Hauptkennzahl misst nur die halbe Wahrheit: der Brier-Score fehlt

In den Dokumenten steht seit Wochen der Satz: *„Ein perfekt kalibriertes Gehirn, das immer 50 % sagt, gewinnt kein Geld."* **Die Grenze war benannt, aber nie gemessen.** Kalibrierung allein lässt sich durch Ausweichen auf 50 % schönen; der **Brier-Score** verrechnet Kalibrierung und Entschlossenheit zu einer Zahl und lässt sich so nicht schönen. Der Begriff kommt in keinem Projektdokument vor.

**Von Chat 12 aus dem KI-Log gerechnet, je 180 bewertete Aussagen** (nicht 120 wie im Fund — der dortige Auszug erfasste nur zwei der drei Märkte je Zeile; 180 stimmt mit der App überein):

| | Brier heute | Brier nach Berichtigung von Punkt F |
|---|---|---|
| **Sonnet** | **0,2593** — schlechter als Raten | **0,2418** — besser als Raten |
| **Flash** | **0,2471** — besser als Raten | 0,2471 (unverändert) |

**Vergleichswert 0,2500:** der Wert, den erreicht, wer ohne jedes Wissen immer 50 % sagt.

**🔴 Abweichung vom Fund, die Chat 12 selbst gefunden hat:** Der Fund behauptet, das Umdrehen der als `[gedreht]` markierten Einträge ändere die Zahl nicht. **Das ist falsch.** Es ändert sie erheblich: Sonnet springt von *schlechter als Raten* auf *besser als Raten*. **Damit ist der Brier-Score ein weiteres Argument für die Berichtigung** — heute sieht Sonnet aus, als trüge es keine Information bei, und das ist ein Artefakt des Zählfehlers.

**Was der Fund trotzdem zeigt:** Beide Gehirne liegen dicht an 0,25. Zwei grüne Kalibrierungswerte können das nicht sichtbar machen, der Brier-Score schon. → **Backlog-Punkt 34.** Aus vorhandenen Daten rechenbar, keine neue Messung, keine Kosten. **Die Zahlen oben sind eine Vorabrechnung aus dem Log, kein Ergebnis** — sie sind gegen die App zu prüfen, sobald die App sie rechnet.

### Fund 2 — Der Ausschluss geparkter Einträge ist eine systematische Verzerrung

**Sonnets einzige Aussagen ab 80 % (92 % und 85 %) stecken in geparkten Einträgen zu erfundenen Spielen und werden nie bewertet.** Damit fällt **systematisch genau der Rand weg, an dem sich Überzuversicht zeigen würde** — und zwar **nur bei einem der beiden Gehirne**. Flash hat in den Stufen 80–99 % vier bewertete Aussagen, Sonnet keine.

Insgesamt sind **50 der 190 Einträge geparkt**, davon 11 Sonnet-Einträge mit gedrehtem „beide treffen".

**Das gehört neben die Kalibrierungszahl, nicht in eine Fussnote.** → Eingetragen im Abschnitt „Aktueller Messstand".

### Fund 3 — Die Hauptkennzahl wird ohne Unsicherheit berichtet

„Sonnet 5 %, Flash 9 %" galt wochenlang als Vorsprung. Jetzt stehen beide bei 8 %. **Eine einzelne Prozentzahl ohne Streuungsangabe ist genau die Scheinpräzision, die Artikel 14 verbietet — angewandt auf die eigenen Kennzahlen.**

**Von Chat 12 nachgerechnet** (Bootstrap über die 180 Aussagen, 600 Ziehungen; Näherung an die Rechenweise der App):

| | Abweichung | Bereich, in dem der Wert bei einer Wiederholung mit 90 % läge |
|---|---|---|
| Sonnet | 7,6 % | **3,9 bis 14,7 %** |
| Flash | 8,1 % | **4,9 bis 14,5 %** |

**Der Unterschied „5 gegen 9" lag damit vollständig im Rauschen.** Bei 180 Aussagen ist die Kennzahl auf mehrere Prozentpunkte genau, nicht auf einen. **Wochenlang wurde ein Vorsprung berichtet, den die Datenmenge nicht hergibt.** → **Backlog-Punkt 35.**

*Anmerkung zur Rechenweise (Art. 14): 7,6 und 8,1 sind Claudes Nachbildung; die App zeigt 8 und 8. Die Abweichung liegt an Rundung und Stufenzuschnitt. **Für die Aussage über die Streuung ist das ohne Belang** — der Bereich ist in beiden Fällen mehrere Punkte breit.*

### Nebenbei: Backlog-Punkt 18 ist kein Kosmetikpunkt mehr

Zwölf Chats in fünf Wochen. **Punkt 18 („Dokumente auf Diät") bestimmt inzwischen vermutlich die Übergabefrequenz**, weil das Lesen der Dokumente einen wachsenden Teil jedes Chats verbraucht. Als Hinweis aufgenommen, nicht entschieden.

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

## DER 8. AUGUST — erster Prüflauf ohne einen einzigen Fehler, und Punkt F kostet erstmals messbar

### 1. Der Prüflauf vom Abend des 7.8. war in jeder Hinsicht fehlerfrei

**Fünf von fünf Endständen richtig. Fünf von fünf Halbzeitständen richtig.** Dazu alle fünf Daten korrekt auf den 7.8. datiert, alle fünf Wettbewerbe richtig zugeordnet und **alle fünf Quellenangaben richtig geschrieben** — der Schreibfehler `sportdaten-spiegel.de` vom Morgen ist nicht wieder aufgetreten.

Es ist der **vierte fehlerfreie Lauf in Folge am Endstand** und der **erste seit dem 5. August ohne falschen Halbzeitstand**. Damit ist die Serie von drei Tagen mit je einem falschen Halbzeitstand gebrochen.

Alle fünf wurden von Claude vor der Übernahme selbst per Websuche gegengeprüft. Drei waren sofort vollständig belegbar (Middlesbrough über Teesside Live, Brügge über Sporza mit Torzeiten, Bochum über die Sportschau mit Torzeit 39.). Bei Wolverhampton war nur der Endstand belegbar, die Halbzeit nicht; bei Wycombe fand Claude nach sechs Suchen gar nichts. **Beide wurden ausdrücklich als nicht bestätigt gemeldet statt durchgewunken.** Ondo lieferte für beide Bildschirmfotos mit Torzeiten nach — Wolverhampton 14./34./43. Minute, Wycombe Kemp 27., Henderson 39., Magennis 90+5. Beide bestätigten die App vollständig.

**Es war der zweite Lauf mit Temperatur 0.** Beim ersten war ein Halbzeitstand falsch, beim zweiten keiner. **Das beweist nichts** (Arbeitsregel B). Die Bewährungszeit für Punkt 26 läuft weiter, die Erwartung bleibt Erwartung.

### 2. Messstand: je 180 bewertete Aussagen — und die Kalibrierung beider Gehirne ist jetzt gleich

**⚠ Berichtigung im selben Abschnitt.** Claude (Chat 12) schrieb hier zuerst **150** und hatte von den dokumentierten 135 aus fortgeschrieben, dabei aber die **zehn am Morgen des 7.8. übernommenen Ergebnisse** übersehen — dreissig Aussagen je Gehirn. 135 + 30 + 15 = 180. Ondos Bildschirmfoto der Finanzen-Seite vom 8.8. deckte es auf. **Hergeleitet statt nachgesehen — genau der Fehler, den Arbeitsregel H verbietet.** Alle Zahlen unten stammen aus der App, keine ist gerechnet.

| Gehirn | bewertete Aussagen | Kalibrierungsabweichung | Trefferquote | Ø Abstand von 50 | Anteil ab 60 % |
|---|---|---|---|---|---|
| Sonnet | 180 | **8 %** (grün) | 47 % (85/180) | 7 | 19 % (35/180) |
| Flash | 180 | **8 %** (grün) | 51 % (91/180) | 10,1 | 46 % (83/180) |

**Die Gehirne sind bei der Hauptkennzahl gleichauf.** Zuletzt dokumentiert war Sonnet 5 %, Flash 9 %. Sonnet hat sich um drei Punkte **verschlechtert**, Flash um einen **verbessert**. Der Vorsprung, der seit Wochen in allen Dokumenten steht, ist weg.

**Sonnets Kalibrierung nach Stufen (aus der App):**

| Angabe | behauptet | wirklich | Anzahl |
|---|---|---|---|
| 1–49 % | 42 % | 33 % | 24 |
| 50–59 % | 54 % | 50 % | 121 |
| 60–69 % | 63 % | **52 %** | 21 |
| 70–79 % | 74 % | **43 %** | 14 |

**Flash zum Vergleich:** 1–49 % 42/28 (25) · 50–59 % 55/53 (72) · 60–69 % 63/53 (66) · 70–79 % 73/54 (13) · 80–89 % 82/**100** (3) · 90–99 % 90/**100** (1).

**Der Befund, auf den seit dem 30. Juli gewartet wurde, ist da — und er ist unangenehm.** Sonnet hat jetzt 35 Aussagen ab 60 %. In der Stufe 70–79 % behauptet es 74 % und trifft 43 % — schlechter als Münzwurf. In der Stufe 60–69 % behauptet es 63 % und trifft 52 %. **Sonnets guter Kalibrierungswert war vermutlich zum grossen Teil Vorsicht; sobald es sich festlegt, sieht es deutlich überzuversichtlich aus.** *Das ist eine Deutung, keine Messung — Kennzeichnung übernommen aus Chat 11s Anmerkung vom 8.8.*

**🔴 Diese Lesart ist am 8.8. um 07:55 Uhr durch die Auszählung des Logs WIDERLEGT — siehe Unterpunkt 7.** Die 15 falsch bewerteten Aussagen liegen fast alle in den Stufen 60–79 %; nach Berichtigung trifft Sonnet dort 71 % statt 52 beziehungsweise 43. Der Abschnitt bleibt als Verlaufsangabe stehen. Die ursprüngliche Formulierung lautete: die Lesart sei durch Punkt F verunreinigt — Die umgedrehten „beide treffen"-Werte liegen fast alle zwischen 60 und 79 % und werden als falsch gewertet, obwohl Sonnets Wort richtig war (siehe Unterpunkt 3). Ein unbekannter Teil von Sonnets scheinbarer Überzuversicht ist Rechenfehler, kein Urteilsfehler. **Wie gross dieser Teil ist, ist ohne Punkt F nicht bestimmbar** (Art. 11).

**Damit ist Punkt F von einem Anzeigefehler zu einer Verfälschung der Hauptkennzahl geworden.** Er ist jetzt der dringendste offene Punkt des Projekts.

Flash hat in den Stufen 80–99 % vier Aussagen, alle richtig. Sonnet hat in diesen Stufen **keine einzige** — seine 92-%- und 85-%-Aussagen vom 7.8. abends stecken in den geparkten Einträgen zu erfundenen Spielen und werden nie bewertet.

### 3. 🔴 Punkt F hat zum ersten Mal messbar Punkte gekostet — zwei an einem Abend

Bei **Club Brugge** und bei **Wolverhampton** sagte Sonnets Wort „nein", und „nein" war beide Male richtig — Kortrijk und Port Vale trafen nicht. Angezeigt und gewertet wurde durch die Umdrehung jeweils „Ja: falsch".

**Ohne die Umdrehung stünde Sonnet bei 8 von 15 — exakt gleichauf mit Flash.** Der gesamte Unterschied dieses Laufs geht auf die Zweideutigkeit zurück, nicht auf die Urteilskraft.

Damit ist Punkt F nicht mehr nur ein Anzeigefehler, sondern **verfälscht die gemessene Trefferquote**. Er bleibt beschlossen und ungebaut; er ist ein Schnitt und braucht eine eigene Lieferung mit frischer Sicherung davor.

### 4. Test A: 92 von 95 — die Regel gilt, aber nicht ausnahmslos

**⚠ Hier stand zuerst „39 von 39 ohne eine einzige Ausnahme".** Die Auszählung des gesamten Logs am 8.8. (Unterpunkt 7) zeigt: Über alle **95 Sonnet-Vorhersagen** seit dem 1. Juli stimmt die Regel „Sonnet dreht genau dann, wenn sein Tipp eine Null enthält" in **92 Fällen**. Es gibt **drei Ausnahmen**:

- **Motherwell – Havnar Bóltfelag (23.7.):** Tipp 2:0, aber **nicht** gedreht. Der einzige Eintrag im ganzen Bestand, der nicht zur heutigen Rechenlogik passt.
- **América Mineiro (26.7.) und Remo (26.7.):** gedreht, obwohl der Tipp 1:1 keine Null enthält. Beide Drehungen sind **richtig**.

**Die Regel bleibt tragfähig**, aber „ohne eine einzige Ausnahme" war zu stark formuliert und stand mehrere Stunden so in den Dokumenten. Flash: **zwei** Drehungen in 95 Vorhersagen (24.7., 28.7.), beide richtig — der Satz „Flash dreht nie" ist damit ebenfalls falsch und hier gestrichen.

### 5. Die Prüferantworten auf den Bericht nach Arbeitsregel K

Der Bericht ging am 8.8. um 06:35 Uhr an beide Prüfer. **Beide haben ihn nach eigener Angabe vollständig gelesen** — ChatGPT nennt sogar die Zeichenzahl. Das ist der erste Bericht im neuen Format.

**Frage 1 — Befund A: dokumentieren oder als nicht auswertbar führen?**
**Beide sagen: als nicht auswertbar führen.** ChatGPT: Befund A sei keine belastbare Aussage über Sonnets Überzuversicht, weil Befund B genau den betroffenen Bereich verfälsche. Gemini: Rechenfehler der App und Urteilsfehler des Modells liessen sich in den Stufen 60–79 % derzeit nicht trennen. **Einstimmig. Entscheidung Ondos steht aus.**

**Frage 2 — rückwirkend berichtigen oder nur schneiden?**
**Beide sagen: nur schneiden.** ChatGPT beruft sich auf die beschlossene Messmethodik, Gemini auf den Beschluss vom 5.8. und die Gefahr methodischer Unschärfe bei einer Änderung der Rohdaten.

**⚠ Die Frage war unvollständig gestellt, und zwar zweifach.** Chat 11 hatte vor dem Versand angemerkt, der Beschluss vom 5.8. ziele auf das Umschreiben von **Urteilen**, nicht auf ein **Etikett, das die App falsch berechnet hat**; ohne diese Unterscheidung sei mit einer reflexhaften Antwort zu rechnen. Die Anmerkung kam an, als der Bericht schon draussen war. **Beide Prüfer haben genau so geantwortet, wie Chat 11 es vorhergesagt hatte.** *Das beweist nicht, dass ihre Antwort falsch ist — sie könnten aus eigenen Gründen richtig liegen. Es beweist nur, dass die Frage die Unterscheidung nicht enthielt.*

**Der zweite Mangel stammt von Claude selbst und ist der schwerere:** Das mitgeschriebene `bttsWort`, das die Berichtigung unabhängig belegen würde, gibt es **erst seit v19.7 (5.8.)**. Für die älteren rund 150 Aussagen je Gehirn existiert es nicht. Eine rückwirkende Berichtigung des Gesamtbestandes stützte sich dort **allein auf die erschlossene Regel** „Sonnet dreht, wenn sein Tipp eine Null enthält". Das stand nicht im Bericht.

**Frage 3 — echtes 0:0 von „nicht gefunden" unterscheiden?**
**Die Prüfer widersprechen einander.** ChatGPT: nein, ohne externe Quelle nicht. Gemini: ja, und liefert eine Formulierung — das Modell muss den Zustand erst klassifizieren („Status: beendet, Ergebnis 0:0" gegen „Status: nicht gefunden") und darf Ziffern nur bei bestätigtem torlosem Unentschieden ausgeben.

*Einordnung Claudes (Art. 14): Geminis Formulierung ist eine echte Verbesserung, weil sie den Zustand vom Ergebnis trennt. **Sie beseitigt die neunte Fehlerart aber nicht.** Ein Modell, das ein Ergebnis erfindet, kann ebenso gut „Status: beendet" erfinden. Sie senkt die Wahrscheinlichkeit, sie schliesst nichts aus. ChatGPTs Einwand bleibt damit sachlich bestehen.*

**Was daraus folgt:** Punkt E ist nicht mehr durch eine unbeantwortete Frage blockiert. Er betrifft den Auftragstext des **Schiedsrichters** und ist deshalb **kein Schnitt** in der Messreihe. Er wäre baubar, sobald Ondo entscheidet.

**Beide Prüfer raten ausdrücklich, jetzt nichts zu bauen**, sondern erst die Entscheidungen festzuhalten. Das deckt sich mit Artikel 8.

---

### 6. Die zweite Runde: beide Prüfer kehren ihre Antwort um

*Die Rückfrage vom 8.8., 07:10 Uhr ging in je einen **frischen** Chat, ohne Nennung der früheren Antwort.*

**Beide empfehlen jetzt Weg 2 — berichtigen, dann schneiden — und zwar für den gesamten Bestand.** Das ist das Gegenteil ihrer Antwort von 06:35 Uhr.

**ChatGPT:** Es werde keine Vorhersage verändert und kein Modell schöngerechnet, sondern ein nachweisbarer Interpretationsfehler der Messapparatur berichtigt. Der 5. August sei **nicht der Beginn des Fehlers, sondern nur der Beginn des besseren Belegs**. Vorschlag eines siebenstufigen Ablaufs: Originalbestand sichern · Etiketten zurückdrehen · Bewertung neu rechnen · **jede Berichtigung protokollieren** (Originalwert → berichtigter Wert, Regel) · korrigierten Datensatz erzeugen · Auftragstext ändern · vorher und nachher nie als einen Messzeitraum behandeln. Dazu die Kennzeichnung **„rekonstruiert"** vor dem 5.8. und **„unabhängig bestätigt"** ab dem 5.8.

**Gemini (3.1 Pro):** Der Fehler liege nicht in der Vorhersage, sondern in der Auswertung. Weg 1 hiesse, 180 Datensätze als unbrauchbar aufzubewahren. Da Sicherungen vorliegen und die Aktion umkehrbar ist, gebe es keinen Grund, auf die älteren Datensätze zu verzichten.

**⚠ Es ist kein sauberer Gegentest.** Zwei Dinge wurden gleichzeitig geändert: der frische Chat **und** zwei zusätzliche Tatsachen in der Frage (Umkehrbarkeit; Wort erst ab 5.8.). Welches davon die Umkehr bewirkt hat, ist **nicht trennbar**. Es ist eine Umkehr unter veränderter Frage — kein Beweis, dass die erste Antwort ein Reflex war.

**Nachtrag durch die Auszählung eine Stunde später:** Beide argumentierten über „die ~150 älteren Datensätze". **Tatsächlich sind nur zwei Einträge betroffen, die vor dem 5. August liegen.** Die Prüfer konnten das nicht wissen; die Zahl lag zum Zeitpunkt der Frage nicht vor.

**ChatGPTs Vorschlag der Kennzeichnung „rekonstruiert" gegen „unabhängig bestätigt" ist der brauchbarste Einzelbeitrag beider Antworten** und sollte übernommen werden, falls berichtigt wird.

### 7. 🔴 DER LOG IST AUSGEZÄHLT — Befund A ist ein Zählfehler, kein Urteilsfehler

*Maschinell ausgewertet am 8.8., 07:55 Uhr, aus `KI-Log 2026-07-01 bis 2026-08-08 · 190 Einträge · erzeugt 8.8.2026 07:44`. **Gegenprobe bestanden:** Die Auswertung reproduziert die Anzeige der App Zeile für Zeile — 42/33/24, 54/50/121, 63/52/21, 74/43/14 und 85 von 180 bei Sonnet, 91 von 180 bei Flash.*

**Der Bestand.** 190 Einträge, 95 je Gehirn. Davon **60 bewertete Spiele je Gehirn = 180 Aussagen je Gehirn**. 70 Zeilen offen, 50 geparkt.

**Der Fehler tritt genau dann auf, wenn Sonnets Tipp eine Null enthält** — nicht, wenn das Kennzeichen `[gedreht]` gesetzt ist. Das ist der entscheidende Unterschied zur bisherigen Annahme. Enthält der Tipp keine Null, rechnet die App auch bei einer Drehung richtig.

**Zwei Fehlerarten, nicht eine:**

| | Fälle (bewertet) | was falsch ist | Berichtigung |
|---|---|---|---|
| **A — Etikett verdreht** (Tipp mit Null, `[gedreht]`) | **15** | „Ja" statt „Nein" und umgekehrt | Etikett drehen, Prozentzahl bleibt |
| **B — Prozentzahl verdreht** (Tipp mit Null, **nicht** `[gedreht]`) | **1** | Etikett richtig, Zahl ist der Gegenwert | 42 % → 58 %, Bewertung bleibt |

Fehlerart B betrifft einen einzigen Eintrag: Motherwell – Havnar Bóltfelag vom 23.7. **Eine pauschale Regel „alle Einträge mit Null im Tipp umdrehen" wäre hier falsch gewesen** und hätte einen richtigen Eintrag zerstört.

**Die Wirkung auf die Bewertung:** 12 Aussagen wären richtig statt falsch, 3 falsch statt richtig. **Netto +9 für Sonnet.**

| | vorher | nach Berichtigung |
|---|---|---|
| Sonnet | 85/180 = **47 %** | **94/180 = 52 %** |
| Flash | 91/180 = **51 %** | 91/180 = 51 % (unverändert) |

**🔴 Und jetzt der eigentliche Befund. Die 15 falschen Aussagen liegen fast alle in genau den Stufen, in denen Sonnet überzuversichtlich aussah:** eine in 50–59 %, **acht in 60–69 %**, **sechs in 70–79 %**.

**Sonnets Kalibrierung nach der Berichtigung (gerechnet, nicht abgelesen):**

| Stufe | behauptet | wirklich vorher | wirklich nachher | Anzahl |
|---|---|---|---|---|
| 1–49 % | 42 % | 33 % | 30 % | 23 |
| 50–59 % | 54 % | 50 % | 51 % | 122 |
| 60–69 % | 63 % | **52 %** | **71 %** | 21 |
| 70–79 % | 74 % | **43 %** | **71 %** | 14 |

**Befund A ist damit widerlegt.** Sonnet ist nicht überzuversichtlich, sobald es sich festlegt — es ist in der Stufe 60–69 % sogar **zurückhaltender als nötig** (behauptet 63, trifft 71) und in der Stufe 70–79 % nahezu genau. Die scheinbare Überzuversicht war vollständig der Zählfehler.

Die Kalibrierungsabweichung läge nach derselben Rechenweise bei **rund 5 %** statt 8 % — also wieder auf dem Wert, der bis zum 6. August dokumentiert war. *Gerechnet, nicht aus der App abgelesen; die App rechnet erst nach einer Berichtigung neu.*

**Die Regel hat genau drei Ausnahmen, und keine davon schwächt sie:**
- **Motherwell (23.7.)** — Fehlerart B, siehe oben. **Der einzige Eintrag im ganzen Bestand, der nicht zur heutigen Rechenlogik passt.**
- **América Mineiro (26.7.) und Remo (26.7.)** — Sonnet wurde gedreht, aber der Tipp war 1:1 ohne Null. In beiden Fällen ist die Drehung **richtig**.

**„Flash dreht nie" stimmt nicht** und muss aus den Dokumenten verschwinden. Flash wurde zweimal gedreht: Hankofen-Hailing (24.7.) und Crystal Palace – Famalicao (28.7.). **Beide Drehungen sind richtig**, weil Flash die Frage anders liest. Der Satz gilt nur für die Läufe der letzten Tage.

**🟢 Der Einwand gegen den älteren Bestand ist weitgehend gegenstandslos.** Von den 15 betroffenen Aussagen stammen **nur zwei** aus der Zeit vor dem 5. August — Bayern München II (24.7.) und Bragantino (26.7.). **Dreizehn** stammen aus der Zeit danach und sind durch das mitgeschriebene Wort unabhängig bestätigt. Die Frage „ganzer Bestand oder nur ab 5.8." betrifft also **zwei Einträge**, nicht 150.

### 8. Zwei Randbefunde aus demselben Durchgang

**Der Schiedsrichter läuft unter `gemini-flash-latest`.** Das ist ein **beweglicher Name**, kein festes Modell. Dahinter kann jederzeit ein anderes Modell stehen, ohne dass es jemand bemerkt. **Für die Bewährungszeit von Punkt 26 ist das erheblich:** Eine Veränderung im Verhalten des Schiedsrichters wäre nicht mehr eindeutig der Temperatur zuzuordnen. Aufgenommen als Beobachtung, nichts gebaut.

**Der Prüfer Gemini ist `3.1 Pro` mit erweitertem Denken** — nicht Flash. Der Prüfer ist damit ein deutlich stärkeres Modell als das zweite Gehirn (`gemini-3.1-flash-lite`). Berührt Punkt 0a, entscheidet ihn aber nicht: Verfügbarkeit in der Gemini-App sagt nichts über Verfügbarkeit an der Schnittstelle.

### 9. Zwei Einwände Ondos, die die Frage nach der Berichtigung verändert haben

**Erster Einwand — „warum weiss das niemand genau?"** Claude hatte geschrieben, es sei nicht bestimmbar, wie viel von Sonnets Überzuversicht Rechenfehler und wie viel Urteilsfehler ist. **Das war zu weit gefasst.** Der KI-Log führt bei jeder Zeile das Kennzeichen `[gedreht]` **und** den Tipp mit. Damit ist für jeden Eintrag seit dem 1. Juli ablesbar, ob gedreht wurde und ob der Tipp eine Null enthielt.

Richtig wäre gewesen: *Claude* weiss es nicht, weil ihm der vollständige Log nicht vorliegt. **Bestimmbar ist es.** Zwei Zahlen sind daraus zu gewinnen — wie viele von Sonnets 180 bewerteten Aussagen gedreht wurden, und bei wie vielen davon die Bewertung dadurch falsch ist. Gleichzeitig prüft es die Regel „Sonnet dreht genau dann, wenn sein Tipp eine Null enthält" über den gesamten Bestand statt über 39 Fälle. **Offen: Ondo lädt den Log seit 1.7. hoch, Claude zählt aus.**

**Zweiter Einwand — „erinnert sich das Messgerät an seine Entscheidungen?"** Der Beschluss vom 5.8. stützt sich auf den Satz, ein Messgerät, das seine Vergangenheit nachbessert, könne sie nicht mehr belegen.

**Dieser Grund trägt hier nicht.** Am Code nachgesehen: Bei jedem gedrehten Eintrag bleibt das Kennzeichen `gedreht` gespeichert, und der ursprüngliche Wert ergibt sich als `100 − gespeicherter Wert`. Eine Berichtigung wäre **umkehrbar und jederzeit belegbar** — zusammen mit einer Sicherung davor und einem Eintrag in den Dokumenten. Der Satz gilt für ein Gerät, das alte Werte überschreibt und wegwirft; das ist hier nicht der Fall.

**Beide Einwände kamen von Ondo, nicht von Claude und nicht von den Prüfern.** Sie standen deshalb weder im Bericht noch in der ersten Fassung der Frage.

### 10. ✅ Entschieden: Prüfer bekommen künftig frische Chats ausserhalb des Projektordners

*Beschluss Ondo, 8.8.* Damit ist die Frage geschlossen, die bei Arbeitsregel K ausdrücklich offen gelassen wurde. **Begründung Ondos:** In fortgeführten Chats greifen die Prüfer auf alte Angaben und alte Ideen zurück.

**Ein zweiter Grund kommt hinzu, der genau hier zählt:** Beide Prüfer haben zur Berichtigungsfrage bereits „nur schneiden" gesagt. In einem fortgeführten Chat verteidigten sie ihre eigene Antwort. In einem frischen Chat wissen sie nicht, dass sie schon geantwortet haben.

**Folge für die Rückfrage:** Sie nennt an keiner Stelle die frühere Antwort, sonst wäre der frische Chat wertlos. Und sie muss ihren Zusammenhang vollständig mitbringen — genau dafür ist der Zusammenhangsblock aus Arbeitsregel K da.

Die Rückfrage wurde am 8.8., 07:10 Uhr erstellt: `2026-08-08_0710_Ondo-Control_Rueckfrage-rueckwirkende-Berichtigung.md`. Sie enthält die vier Tatsachen — Umkehrbarkeit, die Regel mit 39 von 39, das Fehlen des Wortes vor dem 5.8., und die Verunreinigung der Stufen 60–79 % — und stellt **eine** Frage mit einer Zusatzfrage für den Fall der Berichtigung.

---

### 11. 🔴 Neue Beobachtung: sechs von zehn Spielen des 8.8. sind Freundschaftsspiele

Die Spielliste vom Morgen des 8.8. enthält Köln – Real Sociedad, Augsburg – Sassuolo, Schalke – Atalanta, Leeds – Leipzig, Real Betis – Bournemouth und Stuttgart – Everton. **Zwölf der zwanzig Vorhersagen hängen damit an Testspielen.**

Weg A verbietet nur Formate mit **verkürzter Spielzeit**. Gewöhnliche Freundschaftsspiele über 90 Minuten fallen nicht darunter.

Drei Gründe, warum das die Messung berührt — alle **unbelegt**, als Bedenken geführt: Aufstellungen wechseln in der Pause vollständig, was Over/Under und „beide treffen" anders wirken lässt · Ergebnisse von Testspielen sind schlechter dokumentiert, was das Risiko der neunten Fehlerart (erfundene 0:0) erhöht · beide Gehirne benennen die Unsicherheit selbst in ihren Begründungen und liegen fast durchweg dicht an 50 %.

**Nichts gebaut, nichts entschieden.** Aufgenommen als Backlog-Punkt 30.

### 12. 🔴 Anpfiffzeiten: geprüft — vierter Tag in Folge, zweiter Tag mit gleichmässig einer Stunde

**Geprüft am 8.8., 08:10 Uhr per Websuche, nicht vermutet.** Beide Zweitligaspiele des 8.8. sind für **13:00 Uhr** angesetzt — Heidenheim – Osnabrück und Karlsruher SC – Arminia Bielefeld. Belegt über das DFB-Datencenter und fussballdaten.de. **Die App zeigt 12:00 Uhr.**

**Eine Stunde zu früh, bei beiden Spielen gleich.** Damit ist es der **vierte Tag in Folge** mit falschen Anpfiffzeiten und der **zweite Tag in Folge mit einem gleichmässigen Versatz von genau einer Stunde**.

**Was das ist:** ein Muster, das sich zum ersten Mal wiederholt. Die bisherigen drei Tage zeigten drei verschiedene Muster (neun Stunden starr · null bis drei Stunden ungleich · eine Stunde gleichmässig). Jetzt tritt das dritte Muster zum zweiten Mal auf.

**Was es NICHT ist:** eine Ursache. Warum der Versatz genau eine Stunde beträgt und warum er am 5. und 6. August anders aussah, ist weiterhin unbekannt (Art. 11). Die Erklärung „britische Ortszeit" ist widerlegt; die Zweitligaspiele sind deutsche Spiele.

**Folge für heute:** Die Spiele enden gegen 14:50 Uhr. **Prüflauf frühestens 15:30 Uhr**, und zwar erst nach dem letzten Spiel des Tages — Grêmio – São Paulo steht mit 20:00 Uhr in der Liste, tatsächlich also womöglich später.

**Punkt 27 (Prüffenster erweitern, wenn die Liste unglaubwürdig ist) hat damit sein drittes und viertes Auftreten.** Die Empfehlung lautete, bis zum dritten zu warten. **Er ist entscheidungsreif.**

### 13. Der Prüflauf des 8. August wurde NICHT durchgeführt

Ondo hat entschieden, ihn nicht abzuwarten. **Die 20 Vorhersagen vom Morgen des 8.8. bleiben offen** und sind vom nächsten Chat zu prüfen — nach den bekannten Regeln: erst „Vorschläge als Text", dann Gegenprüfung durch Claude per Websuche, erst danach übernehmen, danach sichern.

**Zeitliche Bedingung:** Die Zweitligaspiele beginnen 13:00 Uhr (App zeigt 12:00), das letzte Spiel des Tages ist Grêmio – São Paulo mit 20:00 Uhr in der Liste — bei einem Versatz von einer Stunde also womöglich 21:00. **Nicht vor 23:00 Uhr prüfen.**

**Zu erwarten und zu beobachten:** ob wieder ein Halbzeitstand falsch ist, ob die Quellenangaben richtig geschrieben sind, und ob sechs Freundschaftsspiele überhaupt auffindbare Ergebnisse liefern (Punkt 30).

### 14. 🔴 Bilanz des Backlogs — Ondos Kritik ist durch Zahlen gedeckt

*Ausgezählt am 8.8., 11:55 Uhr.*

**39 Punkte im Verzeichnis. Sieben gebaut. Zwei erledigt oder gestrichen.**

Schwerer wiegt: **Sieben Punkte sind von Ondo beschlossen und nicht gebaut** — F, E, 2, 3, 4, 6, 7. Der älteste stammt vom 25. Juli.

**Ondos Kritik im Wortlaut sinngemäss:** Jedes Mal werden Punkte eingetragen und nie durchgehend abgearbeitet. Und er stehe regelmässig vor Entscheidungen, deren Zusammenhang er nicht mehr kenne, weil sie erst drei oder vier Chats später drankommen. **Beides ist zutreffend.**

**Zwei Ursachen, benannt von Claude am 8.8.:**

1. **Es gibt eine Regel, die verlangt, jede Entscheidung sofort einzutragen. Es gibt keine, die verlangt, sie zu bauen, bevor Neues aufgenommen wird.** Das Verzeichnis wächst deshalb strukturell schneller, als es abgearbeitet wird.
2. **Die Messphase hat kein definiertes Ende.** Nirgends steht, wie viele Aussagen genügen oder woran erkennbar wäre, dass sie vorbei ist. Was kein Ende hat, hört nicht auf.

**Claudes Einschätzung zur Datenlage (Art. 14):** Für **Flash** reicht der Bestand — 83 Aussagen ab 60 %. Für **Sonnet** nur teilweise: 121 seiner 180 Aussagen liegen im Bereich 50–59 %, dort ist nichts mehr zu lernen; im aussagekräftigen Bereich ab 60 % sind es 35, und die sind erst seit dem 8.8. überhaupt lesbar. **Entscheidend ist aber:** Weiter unter dem fehlerhaften Auftragstext zu sammeln bringt fast nichts, weil jede neue Sonnet-Aussage bei „beide treffen" weiter falsch gewertet wird. **Nicht mehr Daten, sondern erst Punkt F.**

### 15. ✅ Ondos Auftrag: jeder Chat baut mindestens einen beschlossenen Punkt

*Beschluss Ondo, 8.8.* Ab sofort arbeitet **jeder Chat mindestens einen bereits beschlossenen Punkt ab**, bevor neue Ideen aufgenommen werden. Als Arbeitsregel L in den Blueprint eingetragen.

**Der Auftrag an Chat 13 lautet ausdrücklich: die beschlossenen Entscheidungen umsetzen**, beginnend mit Punkt F. Nicht dokumentieren, bauen.

*Anmerkung Claudes: Chat 12 hat selbst keinen einzigen Punkt gebaut. Dieser Chat bestand ausschliesslich aus Buchführung, Messung und Prüferverkehr. Das ist genau das Muster, das die Regel beenden soll.*

### 16. ChatGPTs vier Architekturhinweise (8.8., aus einem frischen Chat)

*Einschränkung vorweg: ChatGPT zitierte `PROJEKT-STATUS.pdf`, `Blueprint.pdf` und `Ondo-Control-Backlog.pdf` — nicht die Dateien im Repo. Welchen Stand es gelesen hat, ist unklar. **Alle vier Hinweise betreffen jedoch Inhalte, die sich am 8.8. nicht geändert haben, und überstehen den Einwand.** Ondo hat entschieden, ChatGPTs Projektkopien künftig zu löschen, damit es ausschliesslich über die GitHub-Pages-Adressen liest.*

**Hinweis 1 — Core-Vertrag gegen Ist-Code prüfen.** *Von Claude am 8.8. sofort am Code geprüft und bestätigt:* In `beta.html` gibt es **kein `askBrain`**. Stattdessen drei getrennte Türen — `apiCall`, `geminiCall`, `sonnetSuche` — an **18 Aufrufstellen**. Der in `Ondo-Core-Architektur.md` beschriebene Vertrag „genau eine LLM-Tür" ist ein **Zielzustand, kein Ist-Zustand**. Das stand bisher in keinem Dokument. → Backlog-Punkt 31.

**Hinweis 2 — Datenmodell: vorhanden / formal gültig / als Tatsache verifiziert trennen.** Die App unterscheidet heute nicht zwischen „Ergebnis gefunden" und „Ergebnis bestätigt". *Claudes Anmerkung: Das ist derselbe Punkt wie **Punkt E** aus der anderen Richtung — Geminis Status-Formulierung („Status: beendet" gegen „Status: nicht gefunden") würde genau diese Unterscheidung einführen.* → Backlog-Punkt 32.

**Hinweis 3 — die doppelte Codebasis ist echte technische Schuld.** Bereits als hoch eingetragen. Neu ist die Forderung, bei der Beförderung **bewusst zu entscheiden**, statt sie weiterlaufen zu lassen. → Backlog-Punkt 33 und Beförderungskriterium.

**Hinweis 4 — nicht auf Vorrat abstrahieren.** Bestätigt den bestehenden Architektur-Stopp und die Zwei-Probleme-Regel. **Kein neuer Inhalt, aber eine Bestätigung von aussen.** Nichts einzutragen ausser diesem Vermerk.

### 17. Zur Loop-Idee (Ondos Frage vom 8.8.)

Ondo fragte, ob ein Loop — ein stärkeres Modell delegiert kleine Aufgaben an ein kleineres und prüft, bis das Ergebnis stimmt — helfen würde, länger in einem Chat zu arbeiten.

**Claudes Antwort:** Der Gedanke stimmt, und er wird **bereits umgesetzt, aber mit Code statt mit einem zweiten Modell.** Die Auszählung des Logs am 8.8. verarbeitete 190 Einträge; in den Speicher gelangten zwanzig Zeilen Ergebnis. Das ist genau der gesuchte Gewinn.

**Ein zweites Modell dürfte hier schaden.** Belege im Projekt: Gemini erfand Begriffe, die in keiner Datei stehen (6.8.); ChatGPT meldete eine veraltete Zahl als aktuell (6.8.). Das Prüfen kostete jedes Mal mehr als die Aufgabe.

**Der wichtigere Einwand:** Ein Loop verbessert den Prüfer nicht. Die sechs Fehler Claudes am 8.8. waren **Prüffehler, keine Ausführungsfehler**. Ein Loop hätte mehr Ergebnisse an demselben blinden Fleck vorbeigeschleust.

**Wo er wirklich hülfe, braucht es kein Modell, sondern ein Skript:** eine maschinelle Vorabprüfung vor jeder Dateiausgabe. Siehe Unterpunkt 18.

### 18. 🔴 Sechs eigene Fehler an einem Vormittag — und die Regel dagegen

Chat 12 hat am 8.8. sechs Fehler gemacht, zwei davon von Ondo entdeckt, vier bei der von ihm angeordneten Nachprüfung:

1. Messstand mit **150** statt 180 angegeben — von 135 fortgeschrieben statt in der App nachgesehen.
2. Einen **erfundenen Zeitstempel** (07:00 statt 06:28) in den Prüferbericht geschrieben.
3. Den Zeitstempel im **Kopf** von `PROJEKT-STATUS.md` nicht mitgezogen.
4. Den **Kopf des Backlogs** auf dem 7.8. stehen lassen.
5. **Test A** in Unterpunkt 4 mit „39 von 39 ohne Ausnahme" belassen, während Unterpunkt 7 drei Ausnahmen belegte — **Widerspruch im selben Dokument**.
6. Die **zweite Prüferrunde vollständig vergessen** — das Ergebnis, für das die frischen Chats überhaupt eingerichtet wurden.

Dazu eine nicht eingelöste Zusage: Die **Anpfiffzeit-Prüfung** wurde angekündigt und erst auf Nachfrage durchgeführt.

**Alle sechs haben dieselbe Form:** Ein neuer Abschnitt wird geschrieben, ohne zu prüfen, was dadurch anderswo falsch wird. Die Regel dagegen steht seit dem 7.8. in der Abnahme und wurde nicht angewandt.

**Zugesagt von Claude am 8.8.:** Vor **jeder** Dateiausgabe läuft eine maschinelle Suche über Zeitstempel, Versionsnummern, Messzahlen und Abschnittsnummern in Querverweisen. Nicht aus dem Gedächtnis, sondern als Skript. Das ist prüfbar, und Ondo kann darauf bestehen.

### 19. 🔴 Claudes Grund gegen eine rückwirkende Berichtigung — und warum er nicht mehr trägt

*Ondo hat am 8.8. ausdrücklich verlangt, dass Claude seinen Grund aufschreibt, weil er selbst keinen erkennt und der nächste Chat sich damit befassen soll.*

**Claudes ehrliche Antwort: Ein starker Grund ist nicht mehr übrig.** Die vier Gründe, die im Lauf des Tages im Raum standen, sind der Reihe nach zusammengebrochen:

| Grund | Stand am Abend des 8.8. |
|---|---|
| „Ein Messgerät, das seine Vergangenheit nachbessert, kann sie nicht mehr belegen" (Beschluss 5.8.) | **Entkräftet durch Ondo.** Das Kennzeichen `gedreht` bleibt gespeichert, der Ursprungswert ergibt sich als `100 − p`. Die Berichtigung ist umkehrbar und mit Sicherung belegbar. |
| Der Beschluss vom 5.8. verbiete es | **Trifft den Fall nicht.** Er richtet sich gegen das Umschreiben von **Urteilen** unter einem neuen Auftragstext. Hier wird ein Rechenfehler der App berichtigt; die Zahlen der Gehirne bleiben unverändert. |
| Für die älteren Aussagen fehlt das bestätigende Wort | **Fast gegenstandslos.** Von 15 betroffenen Einträgen liegen **zwei** vor dem 5. August. |
| Der alte Bestand könnte von anderer Rechenlogik stammen (Motherwell, 23.7.) | **Aufgeklärt.** Es ist ein einziger Eintrag mit einer zweiten, klar beschriebenen Fehlerart. |

**Was als einzige Zurückhaltung bleibt:** Die Berichtigung stützt sich auf eine **Schlussfolgerung darüber, welche Frage Sonnet beantwortet hat** — nicht auf Sonnets eigene Aussage. Die Schlussfolgerung ist sehr gut belegt (92 von 95; bei 13 der 15 Fälle zusätzlich durch das Wort). **Wäre sie dennoch falsch, würde der Irrtum durch die Berichtigung unsichtbar**, weil die Zahlen danach stimmig aussehen.

Das betrifft praktisch **zwei Einträge** — Bayern München II (24.7.) und Bragantino (26.7.).

**Claudes Empfehlung an Chat 13:** Berichtigen. Die 13 Fälle ab dem 5.8. ohne Vorbehalt, die zwei älteren Ondo einzeln vorlegen. **ChatGPTs Kennzeichnung „rekonstruiert" gegen „unabhängig bestätigt" übernehmen.** Frische Sicherung unmittelbar davor, jede Berichtigung protokollieren.

**Beide Prüfer empfehlen Weg 2 für den gesamten Bestand.** Die Entscheidung liegt bei Ondo und ist am Ende dieses Chats **nicht getroffen**.

### 20. Der KI-Log liegt als datierter Schnappschuss im Projektordner

Ondo hat am 8.8. die Datei `ONDO_CONTROL___KI-Log_2026-07-01_bis_2026-08-08___190_Eintraege___erzeugt__.md` in den **Projektordner** gelegt, damit andere Chats darin nachschlagen können. **Sie liegt nicht im Repo.**

**⚠ Sie ist ein datierter Schnappschuss vom 8.8., 07:44 Uhr — nicht der laufende Stand.** Sie wird von Ondo gelegentlich aktualisiert, wenn es nötig ist. **Ein Chat, der eine Zahl daraus verwendet, muss sie gegen die Anzeige der App halten.** Der Dateiname sieht aktuell aus, auch wenn der Inhalt es nicht mehr ist — genau daran ist am 30. Juli ChatGPTs eigene Mappe gescheitert.

### 21. Sicherung

**Letzte bestätigte Sicherung: 8.8.2026, 07:54 Uhr** (aus der App abgelesen). Im Speicher: **210 Vorhersagen**, 6 Wetten. Davor: 8.8., 06:12 Uhr · 7.8., 08:00 Uhr.

---

## DER 7. AUGUST — v19.7.8 geliefert, zehn von zehn im Endstand, und die Spielliste hat Spiele erfunden

### 1. Übergabe Chat 10 → Chat 11 vollzogen

Neun von neun, beide Fangfragen bestanden, vier Antworten über dem Schlüssel. **Vor der Prüfung fand der Nachfolger, dass die Projektkopie des Backlogs auf Fassung 10 stand, während im Repo Fassung 11 lag** — er baute nichts nach, sondern meldete es und wartete auf Ondos Entscheidung. Zweiter Fall einer Abweichung zwischen Projektkopie und Repo nach dem 5.8.

**Regel daraus, übernommen:** Bevor man sich auf eine Zahl oder einen Status aus einer Projektkopie stützt, prüfen, ob ein anderes Dokument auf etwas verweist, das dort fehlt. **Ein Querverweis ins Leere ist das verlässlichste Zeichen für eine veraltete Kopie.**

### 2. v19.7.8 geliefert — drei Punkte in einem Rundgang

Auf Ondos ausdrücklichen Wunsch gebündelt, weil ein echter Nutzungstest zum Lieferzeitpunkt für keinen der drei möglich war.

- **Weg A (Spiellänge):** ein Satz in der bestehenden Verbotsliste der Spielliste — keine Turniere mit verkürzter Spielzeit, jedes Spiel über die vollen 90 Minuten, im Zweifel nicht aufnehmen. **Gefragt wird nach dem Format, nicht nach Minuten.**
- **Punkt 26 (Temperatur):** `if(opts.rolle==='ref') body.generationConfig = { temperature: 0 };` — **nur** für den Schiedsrichter. Arbeitsregel J greift nicht, weil er Messwerkzeug ist und nicht Messgegenstand. **Kein Schnitt in der Messreihe.**
- **Punkt 25 (Vorschläge als Text):** Textblock über den Übernehmen-Knöpfen, damit die gefundenen Endstände **vor** der Übernahme gegengeprüft werden können. Reine Ausgabe.
- **201 Sprachschlüssel in DE, FR und EN**, maschinell abgeglichen, identisch. Syntax-Check bestanden. `APP_VERSION` weiterhin auf 18, bewusst.

**Ondos Einwand war entscheidend:** Er wies darauf hin, dass Weg A nur funktioniert, wenn die Spiellänge vorher bekannt ist. Das gilt für Weg B genauso — beide hängen an derselben ungeprüften Voraussetzung, B kostet nur mehr Code für dasselbe Risiko. Daraus wurde die geschärfte Form: das **Format** ausschließen statt nach Minuten zu fragen.

### 3. Prüflauf vom Morgen — zehn von zehn Endstände richtig

Alle zehn von Claude per Websuche gegengeprüft, keiner von Hand nachgeschlagen. **Dritter fehlerfreier Lauf in Folge, gemessen am Endstand.**

**Aber: neun von zehn Halbzeitständen.** Falsch war Lech Poznań – KÍ Klaksvík, gemeldet 1:0, tatsächlich 0:0. Der Endstand 1:0 stimmt, die Messung ist deshalb unberührt — alle drei Märkte werden aus dem Endstand gerechnet.

**Das ist der dritte Tag in Folge mit einem falschen Halbzeitstand, und der erste Lauf mit Temperatur 0.** Die Erwartung „weniger Streuung beim Ablesen" ist im ersten Test nicht eingetreten. **Ein Lauf ist kein Urteil** (Arbeitsregel B) — aber die Erwartung ist ausdrücklich als Erwartung geführt und nicht als Zusage, und dabei bleibt es.

Zwei Endstände waren zunächst **nicht belegbar**. Claude meldete sie ausdrücklich als nicht bestätigt statt sie durchzuwinken (Art. 11, Art. 14); Ondo lieferte Belege nach, beide waren richtig.

### 4. 🔴 Die Spielliste hat Spiele erfunden

Der Vorhersagelauf vom 7.8. lieferte fünf Spiele, alle als „UEFA Conference League Qualifikation" mit Datum 7.8.2026. **Die dritte Qualifikationsrunde wurde am 6. August gespielt, das Rückspiel folgt am 13. August. Am 7. August findet dort nichts statt.**

Vier der fünf Paarungen existieren nicht — die Teams spielten am 5. und 6.8. gegen andere Gegner oder sind in dieser Runde gar nicht vertreten. Die fünfte, Ajax – Shelbourne, ist echt, war aber am 6.8. um 20:00 Uhr bereits gespielt.

**Das ist eine neue Fehlerart: nicht eine falsche Anpfiffzeit, nicht ein verkürztes Format, sondern Spiele, die es nicht gibt.** Zu ihnen kann nie ein Ergebnis entstehen, und der Schiedsrichter hätte danach gesucht.

→ **Alle zehn Vorhersagen (fünf Spiele, zwei Gehirne) geparkt** (Ondo, 7.8.). Sie gehen nicht in die Messung ein.
→ **Ursache unbekannt. Nichts gebaut.** Erst beobachten, ob es sich wiederholt. Einzelheiten im Backlog, Abschnitt „Die Spielliste hat Spiele erfunden" (Fassungsnummer bewusst nicht genannt — sie veraltet).

### 5. Punkt A hat geliefert: bei „beide treffen" widerspricht nur Sonnet sich selbst

Dreimal stand „≠ Anzeige oben": Die App zeigte „Beide treffen: **Ja**" mit 72, 78 und 75 Prozent, das Gehirn selbst sagte **nein**. **Sonnet: drei Widersprüche in fünf. Flash: null in fünf.** Im zweiten Lauf desselben Tages wiederholte es sich: zwei weitere Widersprüche, wieder ausschließlich bei Sonnet. **Über beide Läufe: Sonnet fünf von zehn, Flash null von zehn.**

**Der Befund bleibt gültig, obwohl die Spiele erfunden waren** — er betrifft, wie das Gehirn antwortet, nicht ob das Spiel existiert. **Punkt F ist damit gemessen statt vermutet, und die Zweideutigkeit trifft nur ein Gehirn.** Punkt F bleibt beschlossen und ungebaut; er ist ein Schnitt und braucht eine eigene Lieferung mit frischer Sicherung davor.

### 6. Der zweite Spielplan desselben Tages war echt — aber die Anpfiffzeiten waren wieder falsch

> **⚠ Die Erklärung „britische Ortszeit" in diesem Abschnitt ist am Abend des 7.8. widerlegt worden — siehe Abschnitt 8.** Der Abschnitt bleibt unverändert stehen, weil er festhält, was am Nachmittag bekannt war. Er ist keine gültige Auskunft über die Ursache.

Nach dem Parken lief die Suche erneut. Ergebnis: fünf Spiele, **alle fünf belegt** — drei EFL-Cup-Erstrundenspiele (Middlesbrough – Wrexham, Wycombe – Stevenage, Wolverhampton – Port Vale), Club Brugge – KV Kortrijk und VfL Bochum – Hertha BSC. Quellen: Sky Sports und ESPN.

**Der Unterschied zum ersten Lauf desselben Tages ist damit sehr scharf:** erst vier von fünf Paarungen erfunden, dann fünf von fünf belegt. **Was den Unterschied macht, ist unbekannt.** Nichts gebaut.

**Aber ein neuer Zeitfehler:** Middlesbrough – Wrexham beginnt um 20:00 Uhr **britischer** Zeit, also 21:00 Uhr deutscher Zeit. Die App zeigt 20:00. **Die englischen Spiele stehen offenbar in Ortszeit, obwohl der Auftragstext deutsche Zeit verlangt — eine Stunde zu früh.** Wieder die gefährliche Richtung.

→ Damit gibt es drei Tage in Folge falsche Anpfiffzeiten mit **drei verschiedenen Mustern**: neun Stunden starr (5.8.), null bis drei Stunden ungleich (6.8.), eine Stunde durch Ortszeit (7.8.). **Die Ursache bleibt unbekannt.** Was alle drei teilen, ist allein die Richtung: zu früh.

### 7. Zur Frage nach dem FA Cup

> **⚠ Der erste Teil dieser Auskunft ist falsch und am Abend des 7.8. berichtigt worden — siehe Abschnitt 9.** Der Abschnitt bleibt unverändert stehen, weil er festhält, was am Nachmittag geantwortet wurde.

Ondo fragte, ob der neue Satz den FA Cup ausschließt. **Nein.** Der Satz nennt nur Formate mit verkürzter Spielzeit; Stufe 1 verlangt ausdrücklich „nationale Pokalwettbewerbe dieser Länder", und die drei EFL-Cup-Spiele belegen, dass Pokale durchkommen.

**Der wirkliche Grund: Die Extra Preliminary Round des FA Cup wird am Samstag, 8. August 2026 gespielt — sie hatte am 7.8. noch nicht begonnen.** Und auch danach dürfte sie ausbleiben, weil sie mit reinen Amateurvereinen startet und die ältere Regel „sonstige Amateur-Spielklassen" seit v19.6 greift. **Keine Entscheidung nötig, nichts gebaut.**


### 8. Nachtrag 7.8. abends: Der Zeitfehler ist ein gleichmäßiger Versatz von genau einer Stunde

Ondo lieferte ein gespeichertes Abbild der Spielübersicht von OneFootball für Freitag, 7.8.2026 (deutsche Zeiten). Abgleich mit den fünf Vorhersagen des zweiten Laufs:

| Spiel | OneFootball | App | Abweichung |
|---|---|---|---|
| Middlesbrough – Wrexham (EFL Cup) | 21:00 | 20:00 | −1 h |
| Wycombe – Stevenage (EFL Cup) | 20:45 | 19:45 | −1 h |
| Wolverhampton – Port Vale (EFL Cup) | 20:45 | 19:45 | −1 h |
| FC Brügge – KV Kortrijk (Pro League) | 20:45 | 19:45 | −1 h |
| VfL Bochum – Hertha BSC (2. Bundesliga) | 20:30 | 19:30 | −1 h |

**Fünf von fünf, genau eine Stunde, in eine Richtung — auch beim deutschen Spiel.** Damit ist die zunächst naheliegende Erklärung „britische Ortszeit" **widerlegt**: Bochum – Hertha ist ein deutsches Spiel und trotzdem um dieselbe Stunde verschoben. **Die Ursache bleibt unbekannt.**

Es ist aber der erste **gleichmäßige** Versatz seit dem 5.8. (neun Stunden starr, dann null bis drei Stunden ungleich, jetzt eine Stunde gleichmäßig). Ob daraus ein Muster wird, zeigt erst der nächste Lauf. **Nichts gebaut.**

### 9. Berichtigung zum FA Cup

Die Auskunft in Abschnitt 7 war **falsch**. Die Extra-Vorrunde des FA Cup hat ihr Hauptdatum am Samstag, 8.8. — **einzelne Partien wurden aber schon am Freitag, 7.8. gespielt** (Thornbury – Brislington und Sheffield FC – Parkgate, je 20:30, belegt im selben Abbild). Der Wettbewerb lief also bereits.

**Der zweite Teil der Auskunft bleibt richtig:** Diese Vereine spielen in der englischen Non-League; die ältere Regel „sonstige Amateur-Spielklassen" schließt sie seit v19.6 aus, nicht der neue Satz aus v19.7.8. **Ondos Frage war berechtigt, die erste Antwort darauf zu knapp geprüft.**

### 10. Befund über Gemini: meldet Vollständigkeit und bricht ab

Zu `beta.html` v19.7.8 schrieb Gemini, der Quellcode sei vollständig geladen — und meldete im selben Beitrag einen Abbruch bei `<div id="pruefStatus">`. **Die Datei bricht nicht ab; die Stelle steht in Zeile 1480 von 2045. Gemini hat rund 74 Prozent gelesen.** Zwei seiner Begriffe („Local System Seed v4", „Duell-Protokoll-System") sind in keiner Projektdatei belegt und wurden **nicht** übernommen.

**Damit ist das Muster bei beiden Prüfern belegt:** ChatGPT liest über Suchtreffer und übersieht, wonach es nicht sucht (6.8.). Gemini liest von vorn und hört auf, meldet aber Vollständigkeit (7.8.). **Folge: Backlog-Punkt 28** — Prüfern künftig nur die geänderten Stellen schicken, mit Zeilennummer, altem und neuem Text und zwei bis drei geschlossenen Fragen.

---

## DER 6. AUGUST — Messstand aufgeholt, Schwelle überschritten, drei neue Beobachtungen

*Eingetragen von Chat 10 am 6.8. Die drei Entscheidungen vom Abend des 5.8. standen bis hierher in keiner Repo-Datei, sondern nur in der Übergabemappe.*

### 1. Nachzutragen: drei Entscheidungen vom 5. August, abends

**a) Arbeitsregel J ist von Ondo ausdrücklich bestätigt** (5.8., 20:10 Uhr). Sie gilt damit nach Artikel 9 und ist nicht mehr nur eingetragen. Der offene Punkt „Arbeitsregel J bestätigen" entfällt.

**b) Der Auftragstext bei „beide treffen" wird umformuliert.** Beschlossen von Ondo am 5.8., noch nicht gebaut. Vor dem Bauen ist Ondo vorzulegen, unter welcher Bedingung die App heute umdreht und ob die Umdrehung bei eindeutiger Frage ersatzlos entfällt.

**c) Die Rückwirkung ist entschieden: der Schnitt.** Ondo wünschte zunächst, ältere Vorhersagen mit anzupassen, und hat die Entscheidung am 5.8. um 20:15 Uhr ausdrücklich an Claude delegiert. Entschieden wurde gegen das Umschreiben.

Was der Schnitt bedeutet: Altdaten werden **nicht** verändert — keine Vorhersage, kein Ergebnis, kein `gedreht`-Vermerk. Alles vor dem Umbau gilt als „alte Frage", alles danach als „neue Frage"; beide werden getrennt ausgewertet. Der Schnitt wird an der Versionsnummer festgemacht. Die eingebaute Umdrehung entfällt, sobald die Frage eindeutig ist. **Vor dem Umbau eine frische Sicherung.**

**Begründung, für die Nachwelt:** Angepasste Altdaten trügen Zahlen, die niemand gemessen hat. Ein Messinstrument, das seine Vergangenheit nachbessert, kann sie nicht mehr belegen. Der stärkste der drei Einwände genügt allein: **Die 13 gesperrten Ergebnisse sind die Messlatte für den alten Auftragstext und wären nach einem Umschreiben wertlos.** Nebennutzen: Alte und neue Frage lassen sich nebeneinanderlegen — erst dadurch ist überhaupt messbar, ob die Umformulierung hilft.

*Die Entscheidung ist umkehrbar, solange nichts gebaut ist. Sie wird nicht erneut zur Abstimmung gestellt.*

### 2. Der Messstand ist aufgeholt — und die Schwelle ist überschritten

Aus dem KI-Log-Text vom 6.8., 08:18 Uhr nachgerechnet: **je 135 bewertete Aussagen** statt der zuletzt dokumentierten 87. Die Zahlen stehen unten im Abschnitt „Aktueller Messstand".

**Der belegte Maßstab für den ersten Lernschritt — rund 100 Aussagen je Gehirn — ist damit erreicht.** Der erste Grund, ihn zu verschieben, ist weggefallen.

**Der zweite Grund ist es nicht.** Sonnet hat über 60 % weiterhin nur **10 von 135** Aussagen. Über Sonnets Verhalten bei Zuversicht wissen wir fast nichts. Das deckt sich mit der Antwort beider Prüfer vom 4.8.: im ersten Durchgang nur Flash korrigieren. **Ondos Entscheidung steht aus.**

**Flashs Schwachstelle ist jetzt sehr solide belegt:** 49 Aussagen zwischen 60 und 69 Prozent, behauptet 63, eingetroffen 49. Das sind fast viermal so viele Aussagen wie bei der ersten Messung, und die Lücke ist von 17 auf 14 Punkte kaum kleiner geworden. Dasselbe Muster nach unten: unter 50 Prozent sagt Flash 43 und trifft 32.

**Der Vorbehalt vom 4.8. bleibt:** Flash lief die ganze Zeit als `gemini-3.1-flash-lite`. Die 5 gegen 9 Prozent sind womöglich ein Größen- und kein Anbieterunterschied.

### 3. Zweiter fehlerfreier Prüflauf in Folge

Die fünf UEFA-Spiele vom 5.8. wurden am 6.8. früh geprüft: **5 von 5 gefunden, alle fünf von Claude per Websuche gegengeprüft, alle fünf richtig.** Auch Wettbewerb und Datum stimmten bei allen fünf. Nach 14 von 14 am 5.8. ist das der zweite fehlerfreie Lauf.

**Eine Abweichung ohne Folgen für den Endstand:** Bei Fenerbahçe – Sturm Graz meldete die App Halbzeit 1:0; wirklich war es 2:0, weil das zweite Tor in der Nachspielzeit der ersten Halbzeit fiel. Endstand und alle drei Marktbewertungen sind richtig. **Es ist der zweite Fall dieser Art** — der erste war AC Oulu – Ilves am 5.8. Beim zweiten Auftreten ist es kein Zufall mehr, aber es ist auch keine Fehlerart: Der Halbzeitstand geht nur in die Vertauschungs-Kontrolle ein, nicht in die Messung. **Beobachten, nichts gebaut.**

### 4. Test A: das Muster steht bei 19 von 19

Am 6.8. tippte Sonnet in neun von zehn Spielen ein Ergebnis mit einer Null. **Alle neun wurden umgedreht, und in allen neun lautete das Wort des Gehirns „nein".** Bei PAOK – Anderlecht (1:1, keine Null) wurde nicht umgedreht, und das Wort lautete „ja". Flash war in allen zehn Fällen stimmig.

Zusammen mit den sieben Fällen vom 30.7. und den zweien vom 5.8. steht das Muster bei **19 von 19**. Die Zweideutigkeit der Frage ist damit so gut belegt, wie es ohne Umbau möglich ist.

**Neu und wichtig — der Preis ist jetzt in beide Richtungen messbar.** Am 5.8. endete Ferencváros – Górnik 1:0, beide trafen also nicht; Sonnet hatte „nein" gesagt und lag richtig, gewertet wurde die umgedrehte Aussage „Ja 65 %" als **falsch**. Am selben Tag endete Panathinaikos – CSKA 1:1; Sonnet hatte „nein" gesagt und lag falsch, gewertet wurde „Ja 65 %" als **richtig**. Sonnet hat also einen Punkt verloren, der ihm zustand, und einen bekommen, der ihm nicht zustand. Das ist kein Rundungsfehler mehr.

### 5. Neu: Beide Gehirne schwanken bei identischer Frage

Durch einen doppelten Eintrag wurde Salzburg – Pafos am 6.8. zweimal vorhergesagt, im Abstand einer Stunde, mit demselben Auftragstext:

| | Lauf 2 | Lauf 3 |
|---|---|---|
| Flash | 72 / 58 / 65 | 80 / 65 / 70 |
| Sonnet | 62 / 58 / 65 | 65 / 62 / 65 |

Der Ergebnis-Tipp blieb bei beiden gleich (Flash 3:0, Sonnet 2:0), die Prozentzahlen nicht — Flash bei allen drei Märkten, Sonnet bei zwei von drei.

**Das ist der erste dokumentierte Fall, in dem beide Gehirne schwanken.** Am 4.8. war es nur Flash. Es berührt die Hauptkennzahl unmittelbar: Schwankt ein Gehirn bei gleicher Frage, misst die Kalibrierung teilweise Zufall. Genau darauf zielt Backlog-Punkt 23 (Schattenlauf), und es hängt am Temperatur-Fund vom 4.8. **Nichts gebaut.**

*Die beiden Einträge aus Lauf 3 sind geparkt, die aus Lauf 2 zählen — sie tragen die richtige Anpfiffzeit.*

### 6. Anpfiffzeiten: zweiter Tag, anderes Muster, gleiche Richtung

Am 5.8. war es ein starrer Versatz von neun Stunden bei fünf von fünf Spielen. Am 6.8. ist der Versatz **unterschiedlich groß**, zwischen null und drei Stunden, und acht von zehn Spielen tragen schlicht 18:00 Uhr. Abgleich mit OneFootball:

| Spiel | App | wirklich |
|---|---|---|
| Salzburg – Pafos | 19:00 | 19:00 ✓ |
| PAOK – Anderlecht | 18:45 | 19:45 |
| Lech Poznań – KÍ Klaksvík | 18:00 | 19:00 |
| Lincoln – Omonia | 18:00 | 19:00 |
| Hradec Králové – Beşiktaş | 18:00 | 19:00 |
| Thun – Víkingur | 18:00 | 20:00 |
| Benfica – Hearts | 18:00 | 21:00 |

**Die Ursache ist weiterhin nicht bekannt (Art. 11.)** Die Zeitzonen-Vermutung vom 5.8. erklärt das Muster vom 6.8. nicht. Gemeinsam ist beiden Tagen nur die Richtung: **die App führt die Spiele zu früh.** Das ist die gefährliche Richtung, weil die 2,5-Stunden-Regel dann zu früh „muss vorbei sein" sagt. **Sofortmaßnahme ohne Code bleibt: erst spätabends prüfen.**

### 7. Neu: Die Spielliste fiel zweimal aus und erholte sich

Der erste Vorhersagelauf am 6.8. endete mit „Konnte keine Spiele laden". Der zweite lieferte **ein einziges Spiel**, obwohl an diesem Donnerstag die dritte Qualifikationsrunde zweier UEFA-Wettbewerbe lief. Der dritte Lauf lieferte **zehn Spiele**.

**Die Spielliste ist also nicht defekt, sondern unzuverlässig** — genau die Unterscheidung, für die Arbeitsregel D gemacht wurde. **Nichts gebaut, weiter beobachten.** Preis des dritten Laufs: ein Spiel doppelt in den Daten, siehe Punkt 5.

---

### 8. Bericht an beide Prüfer und Übergabe an ChatGPT — beides am 6.8. vollzogen

**Der Bericht `2026-08-06_0905_Ondo-Control_Bericht.md` ist an ChatGPT und Gemini gegangen.** Er holt die seit dem 4.8. aufgelaufenen zwei Tage nach und berichtigt die falsche 150er-Schwelle aus dem Bericht vom 4.8.

**Beide Prüfer haben geantwortet. Beide sagen Ja zur Spiellänge und Ja zur zehnten Fehlerart.** Beide raten übereinstimmend davon ab, jetzt eine Kennzahl für Antwortstabilität zu bauen, und nennen dieselbe Ursache: die nicht gesetzte Temperatur. Einzelheiten im Backlog, Abschnitt „Prüferantworten vom 6. August". **Ondos Entscheidung steht bei beiden Fragen aus.**

**Ein neuer Fund von Gemini:** Die Temperatur des **Schiedsrichters** darf gesetzt werden, ohne die Messreihe zu schneiden — weil der Schiedsrichter Messwerkzeug ist und nicht Messgegenstand, greift Arbeitsregel J dort nicht. → Backlog-Punkt 26.

### 9. Übergabe an ChatGPT: vier von fünf — und ein Befund über seine Arbeitsweise

ChatGPT hat beim Lesen **von sich aus und ohne Aufforderung eingeräumt**, Blueprint und Ondo-Core-Architektur nicht vollständig gelesen zu haben und von den beiden anderen Dokumenten nur Ausschnitte zu kennen. **Das ist das richtige Verhalten** und genau das, woran frühere Übergaben gescheitert sind.

Weil sein Nutzungslimit bei 92 Prozent stand, wurde von acht auf **fünf Kontrollfragen gekürzt** — nur solche, die aus `PROJEKT-STATUS.md` und `Ondo-Control-Backlog.md` beantwortbar sind.

**Ergebnis: vier von fünf.** Die Fangfrage zu den Anpfiffzeiten hat er bestanden: Er nennt beide Muster und sagt ausdrücklich, dass die Ursache unbekannt bleibt und der 6. August die Zeitzonen-Vermutung widerlegt. Punkt 0a, der Messstand mit beiden Gründen und die Sperre der 13 Ergebnisse ebenfalls richtig.

**Falsch: 193 Sprachschlüssel statt 199.** Er hatte im Backlog die Berichtigung der alten 184 gefunden, aber nicht die jüngste Angabe.

→ **Der eigentliche Befund liegt in der Fehlerart, nicht im Fehler: ChatGPT liest die Projektdateien über Suchtreffer, nicht vollständig.** Er findet zuverlässig, wonach er sucht — und übersieht, was er nicht sucht. Das erklärt, warum seine Antworten wiederholt einen Stand hinterherhinken. **Folge für die Zusammenarbeit: Bei jeder Zahl und jedem Status ist die Fundstelle mitzunennen, und bei mehreren Fundstellen ist die jüngste zu prüfen.** ChatGPT hat das zugesagt.

### 10. Ein Befund über Gemini: erfundene Quellen

Geminis **erste** Antwort auf den Bericht beantwortete keine der gestellten Fragen. Sie beantwortete stattdessen die drei Diskussionspunkte aus Abschnitt 10 von `Ondo-Core-Architektur.md` — von denen zwei laut Blueprint-Protokoll **am 5. Juli entschieden** wurden.

**Schwerer wiegt:** Gemini berief sich auf ein „Wissensnetz" und ein „Denkmuster-Manifest". **Beide existieren im Projekt nicht** — null Treffer in allen vier Dokumenten, ebenso wenig IndexedDB oder Zod. Drei Belegstellen waren zusätzlich falsch zugeordnet: Arbeitsregel E ist „Auswählen ist eine Entscheidung", G ist die Kostenregel, Backlog-Punkt 11 ist das Rollenmodell.

**Erst der zweite Anlauf beantwortete den Bericht** — und dieser zweite Anlauf enthielt den wertvollen Temperatur-Fund.

→ **Lehre: Ein Prüferbeitrag ist nicht deshalb belastbar, weil er belesen klingt.** Belegstellen aus Prüferantworten werden gegen die Dateien geprüft, bevor sie in die Dokumente wandern. Das ist Arbeitsregel H, angewandt auf fremde Beiträge. Es ist der zweite Fall dieser Art nach dem fehlerhaften Prüferbericht vom 4.8. mit der erfundenen 150er-Schwelle.

---

## DER 5. AUGUST — Test A beantwortet, erster fehlerfreier Prüflauf, App wieder benutzbar

*Eingetragen von Chat 8 am 5.8., zusammen mit Backlog-Fassung 9 und Blueprint 0.7. Einzelheiten und Belegstellen stehen im Backlog.*

### 1. Der Anlass: Die App war seit Tagen nicht benutzbar

Ondo stellte am 5.8. fest, dass er die App nicht mehr sinnvoll bedienen konnte. **Die Ursache war keine Fehlfunktion, sondern eine fehlende Funktion.** Von 58 offenen Vorhersagen stammten 30 aus den gesperrten Tagen 29.7., 30.7. und 31.7. Sie dürfen nie übernommen werden und blieben deshalb dauerhaft offen — jeder Prüflauf fragte sie erneut ab, und jedes Ergebnis musste einzeln weggeklickt werden. **Richtiges Verhalten erzeugte dauerhafte Reibung.**

Daraus wurde Backlog-Punkt 24 (Parken), gebaut in v19.7.6. Geparkte Vorhersagen werden beim Prüfen übersprungen; es wird **kein Endstand gesetzt und kein Markt bewertet**, die Daten bleiben vollständig, der Schritt ist umkehrbar.

**Lehre, festzuhalten:** Eine Sperre ohne die Möglichkeit, das Gesperrte beiseitezulegen, macht das Werkzeug unbenutzbar. Die Sperre war richtig; was fehlte, war ihr Gegenstück.

### 2. Test A ist beantwortet — der Befund vom 30./31. Juli ist bestätigt

Am 5.8. drehte die App bei **Sonnet zwei von zwei** Tipps mit einer Null um (Ferencváros 2:0 und Panathinaikos 2:0, angezeigt „Beide treffen: Ja 65 %", Wort des Gehirns jeweils **nein**). Bei **Flash drei von drei stimmig**.

**Sonnet ist widerspruchsfrei. Flash ist widerspruchsfrei. Die Frage im Auftragstext ist zweideutig.** Das ist keine Vermutung mehr.

Der Vorbehalt vom 3.8. ist ebenfalls erledigt: Sonnets Muster ist unverändert scharf — umgedreht wird ausschließlich bei einer Null im Tipp, jetzt zwei von zwei nach vorher sieben von sieben. Die zusätzliche Frage hat das Antwortverhalten also nicht verbogen.

**Preis, ehrlich benannt (Art. 14):** Bei diesen Spielen wird Sonnets Btts-Aussage gegen eine Behauptung gemessen, die Sonnet nie aufgestellt hat. Betroffen ist einer von drei Märkten. **Nichts geändert** — eine Umformulierung des Auftragstextes greift in die laufende Messreihe ein und ist Ondos Entscheidung (Art. 8).

### 3. Erster fehlerfreier Prüflauf des Projekts

**14 von 14 gefunden. Alle 14 von Claude per Websuche nachgeprüft. Alle 14 richtig.** Kein erfundenes 0:0, kein falscher Endstand. Das hat es seit Beginn der Messphase nicht gegeben.

**Übernommen: 10 Spiele.** Geparkt: beide Bohemians-Einträge (ein Spiel, zwei Einträge — dieselbe Entscheidung wie am 4.8.) und beide Crystal-Palace-Spiele (siehe Punkt 4).

**Nebenbefund:** Der Zweifel an Valur – Stjarnan vom 4.8. ist ausgeräumt. Das Spiel fand am 3.8. statt, 2:3 ist echt. Der Verdacht auf ein erfundenes Ergebnis war unbegründet — ein weiterer Beleg für Arbeitsregel D.

### 4. Neu: Das Spiel war kürzer als die Messgrundlage

Crystal Palace gegen Lens und gegen Famalicão am 28.7. waren **45-Minuten-Spiele** im Gruppenmodus des Como Cup. Die App misst den Endstand nach 90 Minuten, die Gehirne haben ein 90-Minuten-Ergebnis getippt. „Unter 2,5 Tore" über 45 Minuten ist nicht dieselbe Aussage.

**Keine Fehlerart des Schiedsrichters** — der Endstand war richtig abgelesen. Es ist eine Lücke in der Spielliste: Sie kennt keine Spiellänge. **Beide Spiele geparkt. Entscheidung Ondos steht aus.**

### 5. Neu und gefährlich: Anpfiffzeiten systematisch neun Stunden zu früh

Die Spielliste vom 5.8. nennt fünf UEFA-Qualifikationsspiele mit Anpfiff zwischen 09:30 und 11:30 Uhr. Der Abgleich mit OneFootball zeigt: **alle fünf beginnen genau neun Stunden später** (18:30 bis 20:30). Fünf von fünf, immer derselbe Versatz — kein Zufall.

**Die Ursache ist nicht bekannt (Art. 11.)** Dass es wie eine Zeitzonenumrechnung aussieht, ist eine Vermutung.

**Warum es gefährlich ist:** Die Anpfiffzeit geht in die 2,5-Stunden-Regel des Schiedsrichters ein. Bei Anpfiff 09:30 gilt ein Spiel ab 12:00 Uhr als sicher beendet — gesucht würde der Endstand eines Spiels, das noch gar nicht angepfiffen ist. **Genau in dieser Lage sind am 31. Juli die erfundenen 0:0 entstanden.**

**Sofortmaßnahme ohne Code: an solchen Tagen erst spätabends prüfen.** Nichts gebaut, weiter beobachten.

### 6. Beide Codefunde aus der Übergabe sind geklärt

**`state.geminiModel` gegen `gWahl`: bestätigt und in v19.7.6 behoben.** Der Aufruf benutzte das gewählte Modell, die Aufzeichnung nicht. **⚠ Nicht rückwirkend:** Alle Vorhersagen vor v19.7.6 tragen weiterhin einen womöglich falschen Modellnamen, und rückwirkend ist er nicht mehr feststellbar. Für die Kalibrierung folgenlos, für **Arbeitsregel J nicht.**

**Das Datum der 0a-Rücknahme:** Der Codekommentar sagte 3.8., alle Dokumente 4.8. **Welches Datum stimmt, ließ sich nicht bestimmen.** Der Kommentar nennt jetzt nur noch die Version v19.7.3 — das unbelegte Datum ist entfernt statt geraten.

### 7. Die Textausgabe hat sich bewährt

Der KI-Log-Text aus v19.7.5 ersetzt seit dem 5.8. die Bildschirmfotos. Der Lauf mit zehn Vorhersagen kostete einen Bruchteil eines Bildes — und **Test A wäre auf einem Bildschirmfoto nicht auswertbar gewesen**, weil der Vermerk `[gedreht]` und das Wort dort nicht nebeneinander stehen. Zwei Reparaturen kamen aus der Benutzung: getauschte Datumsgrenzen (v19.7.6) und das über den Rand ragende Datumsfeld (v19.7.7).

---

## ⚠ DER 4. AUGUST — der ereignisreichste und am schlechtesten dokumentierte Tag

*Alles in diesem Abschnitt stand bis zum Abend des 4.8. in keiner Repo-Datei, sondern nur in einer Übergabemappe auf Ondos Gerät. Eingetragen von Chat 7 nach der Übergabe.*

### 1. Punkt 0a ist gescheitert und zurückgenommen

**Das ist die wichtigste Berichtigung an diesem Dokument.** Frühere Fassungen führten 0a als gebaut und beschrieben einen Schiedsrichter, der ein stärkeres Modell benutzt und Modellname samt Anfragenzahl anzeigt. **Beides trifft nicht zu.** In `beta.html`, Funktion `ergebnissePruefen`, fehlt `stark:true`:

```
? geminiCall({ prompt: prompt, useSearch: true, rolle:'ref' })
  /* 0a zurueckgenommen in v19.7.3, siehe Backlog */
```

Drei Anläufe, rund 30 vergebliche Anfragen: falsche Schnittstelle (`deep-research-pro-preview-12-2025`), ein Filter, der gespeicherte Listen nicht erfasste, und schliesslich ein **Musikmodell** (`lyria-3-pro-preview`), das über das Wort „pro" hereinkam. Einzelheiten im Backlog.

**⚠ Gestrichen, aber nicht widerlegt.** Beide Prüfer stimmten dem Streichen zu — **ohne von der kostenlosen Preisstufe zu wissen**. Kein Anlauf hat je ein starkes Modell tatsächlich antworten lassen. 0a ist unter gestörten Bedingungen gescheitert, nicht an der Sache. Wer das später liest, darf daraus keine Gewissheit machen, die wir nicht haben (Art. 14).

### 2. Der Denkfehler, der den Schaden vergrößert hat

Nach dem ersten Fehlschlag wurde formuliert: *„Eine Absicherung, die nur gegen vorhergesehene Störungen hilft, ist keine Absicherung."* Daraus wurde gebaut: **jeder unbekannte Fehler heißt „nimm das nächste Modell".** Falsch — ein erschöpftes Kontingent verlangt Anhalten, nicht Weitergehen. Die Regel jagte die App durch alle 14 Flash-Modelle.

**Es ist derselbe Denkfehler, den wir dem Schiedsrichter vorwerfen:** eine unklare Lage in falsche Sicherheit übersetzen, statt sie als unklar zu melden. Der Fehler war nicht, unbekannte Fehler zu behandeln — sondern sie **pauschal** zu behandeln.

### 3. Was stattdessen gebaut wurde: die Modellwahl (v19.7.4)

Ondos Vorschlag, und er war besser als der geplante Weg einer festen Namensliste im Code: Gehirn und Schiedsrichter sind unter „Mehr" **getrennt einstellbar**. Neue Modelle erscheinen von selbst in der Auswahl; kein Name steht fest im Code (Lehre 10.7.). Dazu: Sortierung neu-vor-alt statt „stabil"-vor-„latest", und der Modellname wird je Vorhersage mitgespeichert.

Einstellung am 4.8.: Gehirn `gemini-3.1-flash-lite`, Schiedsrichter `gemini-flash-latest`, 14 Modelle verfügbar.

### 4. Die Lite-Frage vom 29. Juli ist beantwortet

Die Nutzungsdiagramme des Google-Kontos zeigen für den ganzen Juli **Gemini 3.1 Flash Lite** als beherrschendes Modell. **Das zweite Gehirn war die kleinste Stufe.** Ursache war die Sortierung „stabil vor latest" — stabil hieß in Wirklichkeit alt.

**Folge für die Hauptkennzahl, ehrlich (Art. 14):** Die 5 % gegen 10 % sind womöglich ein **Größenunterschied und kein Anbieterunterschied**. Was gemessen wurde, ist Sonnet gegen die kleinste Gemini-Stufe, nicht Anthropic gegen Google.

### 5. Neue Regel: Korrekturfaktoren sind an ihr Modell gebunden

> **Ein Korrekturfaktor gilt nur für das Modell, an dem er gemessen wurde. Wechselt das Modell, verfällt der Faktor und muss neu gemessen werden.**

Entstanden aus Ondos Frage. Folge: Ein Gehirnwechsel kostet Messreihe **und** Korrektur. Deshalb bleibt das Gehirn während der Messphase auf `gemini-3.1-flash-lite`. Steht als Arbeitsregel J im Blueprint; die Frage, ob es abzukürzen geht, ist Backlog-Punkt 21.

### 6. Google-Konto — drei Befunde

- **Zwei Projekte:** „Ondo Control" und „Default Gemini Project". Die am 3.8. neu erzeugten Schlüssel lagen im **kostenlosen** Projekt — daher `limit: 0` und der Totalausfall am Abend des 3.8.
- **Ondo hat am 4.8. das Ondo-Control-Projekt auf Preisstufe 1 hochgestuft.** Schlüssel unverändert, in der App war nichts zu tun.
- **Kosten: 0,05 € in 90 Tagen.** Guthaben 9,94 € von 10,00 €. Automatisches Aufladen deaktiviert. Die rund 30 vergeblichen Anfragen haben praktisch nichts gekostet. **Beförderungskriterium (a) bleibt erfüllt.**

### 7. Antworten der Prüfer vom 4. August

- **0a streichen: beide ja.** Fehleranfälligkeit der Namensfilterung, Kaskadengefahr, unbewiesener Nutzen.
- **Lernschritt: beide ja** — im ersten Durchgang nur Flash korrigieren, Sonnet unangetastet lassen. **Ondos Entscheidung steht aus.**
- **Gemini zur Modellauskunft:** In `ListModels` gibt es **kein** Feld für Werkzeug-Unterstützung, Kostenfreiheit oder Textmodell-Zugehörigkeit — nur `supportedGenerationMethods`. Am Namen zu raten bleibt der einzige Weg.
- **ChatGPT zur Fehlerbehandlung: „Fail Safe".** Bei unbekannten Fehlern nie automatisch wechseln, sondern anhalten und als Unklarheit melden.
- **Beide zu Punkt E:** „Prüfen statt suchen" trifft den Kern — die Aufgabe zu schärfen ist mächtiger, als ein größeres Modell auf einen unscharfen Auftrag zu werfen.
- **Fehlerart 10:** Gemini ausdrücklich dafür, den Doppeleintrag als eigene Fehlerart zu führen.
- **Unbeantwortete Rückfrage von Gemini:** Wie soll der neue Auftragstext ein **echtes** 0:0 von einem „nicht gefunden" wasserdicht unterscheiden? **Muss vor dem Bauen von Punkt E beantwortet sein.**

### 8. Prüflauf vom 4. August — der erste erfolgreiche seit dem 31. Juli

**12 von 30 gefunden, kein einziges 0:0, alle Halbzeitstände widerspruchsfrei.**

| Spiel | Schiedsrichter | Geprüft | Ondos Entscheidung |
|---|---|---|---|
| St Patrick's – Derry City | 1:1 (HZ 1:0) | bestätigt | **übernommen** |
| Bohemians – Galway (beide Einträge) | 1:1 | bestätigt | **beide ignoriert** |
| Valur Reykjavik – Stjarnan | 2:3, datiert 03.08. | **auffällig** — ein Spielplan führt die Paarung unter dem **04.08.** Falls das Spiel erst dann stattfand, wäre 2:3 erfunden | offen |
| übrige acht | — | **ungeprüft** | offen |

**Warum beide Bohemians-Einträge ignoriert wurden:** Bei einem Eintrag hatte Flash 3 von 3 richtig, beim anderen 1 von 3; Sonnet in beiden Fällen 1 von 3. Jede Auswahl hätte einseitig Flashs Ergebnis verschoben. Ondo hat das Spiel ganz herausgenommen.

**⚠ Nicht verwechseln:** Gesperrt sind ausschliesslich die 13 Ergebnisse vom **29./30. Juli** und die Läufe vom **31. Juli** — sie sind die Prüfbibliothek. **Der Prüflauf vom 4. August ist nicht gesperrt.**

**Kein zweiter Prüflauf, bevor entschieden ist.** Nicht übernommene Spiele gelten als offen und werden neu geprüft — mit womöglich anderem Ergebnis (Fehlerart 1). Der Schiedsrichter erinnert sich nicht an frühere Läufe.

### 9. Eine falsche Zahl im Bericht vom 4.8., 06:15 Uhr

Der Bericht behauptet, eine „150er-Schwelle" für den ersten Lernschritt sei mit 174 Aussagen überschritten. **Beides falsch.** Eine 150er-Schwelle steht in keiner Projektdatei; belegt ist nur **„rund 100 pro Gehirn"**. Und 87 + 87 zu addieren ist unsinnig, weil der Lernschritt je Gehirn gilt. **Nach dem belegten Maßstab ist die Schwelle nicht erreicht.** Gefunden von Chat 5. Eine berichtigte Fassung ist den Prüfern nachzureichen.

---

## ⚠ Der Befund vom 31. Juli — GESCHLOSSEN am 3. August

**Die Lücke ist zu: v19.7 wurde am 3.8. gebaut und ausgeliefert.** Sie hat am Ende sechs Tage gedauert, vom 28.7. bis zum 3.8., nicht drei.

**Was den Ausschlag gab, ist festzuhalten, weil es wiederholbar ist:** Statt `beta.html` aus dem Gedächtnis neu auszuschreiben, hat Ondo die Datei hochgeladen; geändert wurden nur die betroffenen Stellen. Das kostete einen Bruchteil des Speichers und machte Code **und** Buchführung in einem Chat möglich. **Das ist ab sofort das Standardverfahren für jede Lieferung.**

**Der ursprüngliche Befund, zur Erinnerung:** In den drei Tagen nach v19.6 entstanden zwei vollständige Chat-Übergaben, vier Dokumentenfassungen, ein Prüferbericht — und null Codezeilen.

Festgestellt von **Ondo** am Abend des 31.7. mit der Frage, woran es hakt. Die Antwort, soweit sie belegbar ist:

1. **Die Dokumente wachsen, nichts schrumpft.** Dieses Dokument ist kein Onboarding-Dokument mehr, sondern eine Chronik. Der Backlog schreibt ausdrücklich „nichts wird gelöscht". Jeder Vorfall erzeugt einen neuen Abschnitt, eine neue Regel, eine neue Kontrollfrage.
2. **Deshalb kostet das Einlesen mehr als das Arbeiten.** Die Vorschrift „lies alle sechs Dateien" hat am 31.7. etwa die Hälfte des Arbeitsspeichers eines Chats gekostet, bevor die erste Aufgabe begann. Was übrig bleibt, reicht für eine Lieferung — dann ist Übergabe. Der nächste Chat liest dieselben, inzwischen größeren Dokumente.
3. **Die Zwei-Probleme-Regel wurde nie auf die Verwaltung angewandt.** Sie gilt bisher nur für Funktionen.

→ **Backlog Punkt 18** (Status: Idee). Vorschlag: dieses Dokument auf das kürzen, was ein neuer Chat wirklich braucht, und die Chronik in eine Archivdatei auslagern, die beim Start **nicht** gelesen wird. **Entscheidung Ondos steht aus.**

*Ehrlich dazu (Art. 14): Auch diese Fassung ist wieder länger geworden, nicht kürzer. Punkt 18 zu beschließen ist weiterhin die einzige Maßnahme, die das ändert. Das Hochlade-Verfahren mildert das Problem, es löst es nicht — gelesen werden die Dokumente beim Start trotzdem.*

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
- **Gegenprobe mit Gemini steht noch aus.**
- **Handgeschriebene Projektzusammenfassungen in Übergaben sind zu unterlassen.** ChatGPTs eigene Mappe vom 30.7. war an sechs Stellen veraltet. Eine Übergabe verweist auf die Dokumente, sie fasst sie nicht nach Gedächtnis zusammen.

**⚠ Für Claude gilt weiterhin: Raw-Links immer mit angehängter Zahl abrufen**, z. B. `…/PROJEKT-STATUS.md?v=20260731`. Ohne diesen Zusatz kann eine veraltete Zwischenkopie zurückkommen. Zweite Falle: In hochgeladenen Chat-PDFs steht die alte Fassung dieses Dokuments im Volltext.

### Keine Lieferung ohne Buchführung (Arbeitsregel F, 29.7.)
- **Backlog:** jede Entscheidung sofort eintragen, in derselben Antwort. Bei Code-Lieferungen kommt die Backlog-Datei mit dem Code zusammen.
- **Dieses Dokument:** am Ende eines Arbeitstags mit Änderungen, und zwingend vor jeder Chat-Übergabe.
- **Blueprint / Ondo-Core:** nur bei Verfassungs- und Architekturentscheidungen.
- **Ondos Kontrollsatz nach jeder Lieferung: „Und die Dokumente?"** Der wirksame Teil der Regel — er kommt nicht von der KI.

### Berichte an die Prüfer
Dateiname beginnt mit Datum und Uhrzeit: `2026-07-31_1430_Ondo-Control_Thema.md`
- Antwort an alle vier richten, nicht nur an Ondo
- Einfache Sprache, Fachbegriffe beim ersten Mal erklären
- **Höchstens zwei geschlossene Fragen** (Ja/Nein plus ein Satz)
- **Ausnahme:** Bei Problemen ohne erkennbare Lösung wird eine Frage ausdrücklich **offen** gestellt. **Lehre: Ein Format, das nur abfragt, bekommt keine Mitarbeit.**
- Ausdrücklich hinschreiben, was **nicht** Thema ist
- Eigene Zweifel mit zur Prüfung stellen

**Zusammenfassungen:** Claude schlägt von selbst vor: *„Zeitpunkt für eine Zusammenfassung zum Teilen mit den Projektpartnern wäre angebracht. Jetzt durchführen — Ja/Nein?"* Bei Nein sofort einen Ersatzzeitpunkt nennen.

**Erklärpflicht:** Ondo kann nichts entscheiden, was er nicht versteht. Vor jeder Entscheidung in Alltagssprache erklären. **Bildliche Vergleiche haben sich als hinderlich erwiesen — konkret bleiben.**

**Nie empfehlen, Ergebnisse von Hand nachzuschlagen.** Seit dem 25.7. abgelehnt. Die Zuverlässigkeit des Schiedsrichters gehört zum Test, nicht in Ondos Freizeit. Zwei Claude-Instanzen sind trotzdem darauf zurückgefallen.

**Datensicherung:** Ondo regelmäßig daran erinnern.
**Letzte bestätigte Sicherung: 7.8.2026, 08:00 Uhr** — nach der Übernahme der zehn Endstände vom 6.8. und dem Parken der zehn erfundenen Vorhersagen. Davor: 6.8.2026, 08:28 Uhr (170 Vorhersagen, 6 Wetten) · 08:16 Uhr · 07:15 Uhr (150 Vorhersagen) · 5.8.2026, 13:06 Uhr (nach den zehn Übernahmen) · 07:31 Uhr · 06:37 Uhr · 4.8.2026, 17:58 Uhr (138 Vorhersagen) · 3.8.2026 · 2.8.2026, 13:00 Uhr · 31.7.2026, 07:49 Uhr. ⚠ **Nach dem Prüflauf des 7.8. abends steht die nächste Sicherung an.**
*Am 4.8. hat sich die Sicherung bewährt: Ondo hat den Browserverlauf gelöscht, Safari löschte dabei den Websitespeicher mit, alle Daten waren weg — und wurden vollständig wiederhergestellt. **Nichts verloren.** Zwei bekannte Verlustwege: Browserdaten löschen · getrennter Speicher Safari gegen Startbildschirm.*
*Hinweis (3.8.): Die Sicherungsdatei enthält `apiKey`, `geminiKey` und `pin` im Klartext. Sie darf nie an ChatGPT oder Gemini gehen, nie an einen Bericht angehängt und nie ins Repo. Ondo hat am 3.8. beide Schlüssel neu erzeugt und die alten deaktiviert. **Folge: Eine Sicherung von vor dem 3.8. überschreibt beim Zurückladen die neuen Schlüssel mit den toten alten** — dann Schlüssel neu eintragen, die Messdaten bleiben unberührt.*

---

## DER BEFUND VOM 30./31. JULI — „beide treffen" misst nicht, was es soll

**Zwei Gehirne beantworten zwei verschiedene Fragen in dasselbe Zahlenfeld. Die App liest beide gleich. Dadurch wird Sonnets Überzeugung auf dem Bildschirm ins Gegenteil verkehrt.**

### Wie es entsteht

Der Auftragstext fragt (Funktion `vorhersageGehirn`):

```
'- pBtts: wie sicher in Prozent, dass "beide Teams treffen"
   so ausgeht wie in deinem Ergebnis? (1-99)\n'
```

Das ist eine Frage über die eigene Vorhersage, nicht über das Spiel. Die App dagegen rechnet das Wort „Ja"/„Nein" selbst aus dem getippten Ergebnis (Funktion `maerkteBauen`) und dreht es um, sobald die Zahl unter 50 liegt:

```
function jaNein(typ, codeA, labelA, codeB, labelB, p){
  if(p < 50) return { typ:typ, code:codeB, label:labelB,
                      p:(100-p), gedreht:true, status:'offen' };
  return { typ:typ, code:codeA, label:labelA, p:p, status:'offen' };
}
```

### Der Beleg

Ausgewertet an den Bildschirmfotos vom 30.7. abends. Bei **Sonnet** wird ausschließlich dann umgedreht, wenn das getippte Ergebnis eine Null enthält — sieben von sieben Fällen:

| Sonnet-Tipp | angezeigt | Rohwert des Gehirns |
|---|---|---|
| 3:0 Slovan – Iberia | Beide treffen: Ja 75 % | 25 |
| 0:3 Górnik – Fenerbahçe | Ja 70 % | 30 |
| 3:0 Crvena Zvezda – Larne | Ja 78 % | 22 |
| 2:0 Hapoel – Víkingur | Ja 62 % | 38 |
| 0:2 Kauno – Klaksvík | Ja 60 % | 40 |
| 2:0 Crystal Palace – Famalicão | Ja 58 % | 42 |
| 0:2 Malisheva – Budućnost | Ja 55 % | 45 |

Bei Tipps mit Toren auf beiden Seiten dreht die App bei Sonnet **nie** um. **Flash** hat fünf Ergebnisse mit Null und wird **kein einziges Mal** umgedreht.

Liest man Sonnets Rohwerte als Antwort auf die schlichte Frage „wie wahrscheinlich treffen beide?", ist jede einzelne Zahl stimmig. **Sonnet ist widerspruchsfrei. Flash ist widerspruchsfrei. Die Frage ist zweideutig.**

### Was daraus folgt

- Bei Crvena Zvezda – Larne 5:0 wurde Sonnet als **falsch** gewertet, obwohl es sachlich richtig lag.
- Eine „Widerspruchsquote je Gehirn" (Backlog 0b) würde keine Eigenschaft der Gehirne messen, sondern eine unklare Formulierung. **0b ist zurückgestellt.**
- **Die bisherigen Daten sind nicht verloren.** Der Vermerk `gedreht:true` und der Endstand werden mitgespeichert; der Rohwert lässt sich zurückrechnen.
- **Nicht umkehrbar ist nur ein falsch übernommener Endstand.**

### Zwei zurückgenommene Behauptungen (Art. 14)

1. **„Die App erzeugt den Widerspruch"** — zurückgenommen. Die Umdrehregel erzeugt ihn nicht, sie legt die Zweideutigkeit der Frage offen.
2. **„Sonnets Zurückhaltung kam von den Testspielen"** — verfeinert. Der Unterschied liegt nicht am Wettbewerb, sondern daran, **wie klar der Favorit ist**.

### Beschluss: Test A (Ondo, 31.7.)

Die Gehirne geben zusätzlich das Wort **ja** oder **nein** aus. Am Rechnen und Bewerten ändert sich nichts; das Wort wird nur mitgespeichert und angezeigt. Ein Tag Vorhersagen reicht für die Antwort.

---

## Der Rückblick-Block — Befund und Beschluss (31.7.)

Sonnet begründete am 30.7. bei Víkingur – Flora Tallinn mit „Víkingur nach Niederlage **gestern** geschwächt". Das Ergebnis Hapoel – Víkingur 2:0 wurde nie übernommen. Die Quelle ist dieser Block im Auftragstext (Funktion `vorhersageGehirn`):

```
return e.datum+': '+e.match+' -> '+e.heim+':'+e.gast+' ('+(e.begruendung||'-')+')';
```

`e.heim` und `e.gast` sind der **getippte** Endstand. Der echte steht in denselben Einträgen unter `ergebnisHeim`/`ergebnisGast` und wird an dieser Stelle schlicht nicht abgefragt.

**Wichtige Einordnung:** Der Block ist **keine Schwachstelle, sondern eine Reparatur.** Er ist das Konsistenz-Gedächtnis vom 7.7.2026, gebaut, nachdem Ondo willkürliche Empfehlungen nachgewiesen hatte. Der frühere Vorschlag, ihn zu entfernen, ist **zurückgezogen**.

**Beschlossen (Ondo, 31.7.):** Block behalten, echte Endstände einsetzen, wo sie vorliegen, und die Zeilenform ändern, sodass der Unterschied in jeder Zeile steht:

```
30.7.: Hapoel – Víkingur · getippt 2:0 · wirklich 2:0
31.7.: Breidablik – Drita · getippt 1:1 · Ergebnis noch offen
```

→ Wird mit v19.7 gebaut. Einschränkungen im Backlog, Punkt D.

---

## Stand 30. Juli — der Schiedsrichter irrt auch bei bestens dokumentierten Spielen

Am 30.7. fand der Schiedsrichter erstmals **13 von 13** Ergebnissen. Der Abgleich mit der amtlichen UEFA-Ergebnisseite ergab:

| Spiel | UEFA | App |
|---|---|---|
| Crvena Zvezda – Larne | 5:0 | 5:0 ✅ |
| Slovan Bratislava – Iberia Tbilisi | 1:1 | 1:1 ✅ |
| Górnik Zabrze – Fenerbahçe | 1:1 | 1:1 ✅ |
| Hapoel Beer-Sheva – Víkingur | 2:0 | 2:0 ✅ |
| Craiova – Levski Sofia | 2:2 | 2:2 ✅ |
| **Lech Poznań – Aarhus** | **1:4** | 3:4 ❌ |
| **Kauno Žalgiris – Klaksvík** | **1:0** | 0:0 ❌ |

**Zwei von sieben falsch, in der Champions-League-Qualifikation.** Damit ist die Annahme widerlegt, die Fehler stammten aus Testspielen. Sie stammen vom Werkzeug.

- Die beiden falschen Ergebnisse kamen von `terrikon.com` und `flashfussball.de`; die richtigen von Sky Sports, Betexplorer und sportdaten.de. **Keine Antwort benutzte uefa.com.**
- **Everton – Stoke City** lieferte in drei Läufen wechselnd 1:0 / 0:1 / 1:0.
- **Nichts wurde übernommen.** Der Lauf ist als PDF gesichert.

**⚠ Diese 13 Ergebnisse dürfen weiterhin NICHT übernommen werden.** Sie sind die Messlatte „altes Modell" und zugleich die geplante feste Prüfbibliothek. Ein Übernehmen zerstört beides.

---

## Stand 31. Juli — die neunte Fehlerart: erfundene 0:0

**Schwerer als alle bisherigen Fehlerarten**, weil ein erfundenes 0:0 wie ein gefundenes Ergebnis aussieht und **keine einzige Warnung auslöst.** Datum stimmt, Wettbewerb stimmt, Quelle ist genannt, Halbzeitstand 0:0 ist mit dem Endstand 0:0 widerspruchsfrei. Alle sechs Absicherungen melden „in Ordnung".

Belege vom 31.7.:
- **Vier Spiele in Folge 0:0** aus derselben Quelle, jeweils mit Halbzeit 0:0
- **Lech Poznań – Aarhus** zum dritten Mal ein anderes Ergebnis: 3:4, dann 0:0 — amtlich 1:4
- **Breidablik – Drita** im **selben Datensatz** einmal als 0:0 und einmal als 0:1

**⚠ Auch die Läufe vom 31.7. dürfen NICHT übernommen werden.**

**Vermutete Ursache:** Der Schiedsrichter soll suchen statt prüfen. Ein Modell, das suchen soll, liefert irgendetwas; ein Modell, das bestätigen soll, kann „nein" sagen. **Vermutung, nicht bewiesen (Art. 13).** → Backlog Punkt E.

---

## Der Schiedsrichter — neun Fehlerarten

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

**🔴 Bekannte Verzerrung, die neben jeder dieser Zahlen mitzulesen ist:** **50 der 190 Einträge sind geparkt und werden nie bewertet.** Darunter Sonnets **einzige** Aussagen ab 80 % (92 % und 85 %). Damit fällt systematisch der Rand weg, an dem sich Überzuversicht zeigen würde — **und nur bei einem der beiden Gehirne**. Flash hat dort vier bewertete Aussagen, Sonnet keine.

**🔴 Zur Genauigkeit:** Die Abweichung ist bei 180 Aussagen auf **mehrere Prozentpunkte** genau, nicht auf einen. Bei einer Wiederholung läge sie mit 90 % zwischen rund 4 und 15 % — **bei beiden Gehirnen**. Der wochenlang berichtete Vorsprung „5 gegen 9" lag vollständig im Rauschen.

**Ehrliche Einordnung (Art. 14):** Die Spielliste erzeugt inzwischen fast so viele ungelöste Probleme wie der Schiedsrichter, über den seit dem 22. Juli geredet wird. Das stand bis zum 7. August nirgends zusammen, weil jeder Fund einzeln eingetragen wurde.

**Was NICHT folgt:** dass die Spielliste defekt ist. Am 6.8. lieferte sie nacheinander null, ein und zehn Spiele; am 7.8. erst Erfundenes, dann Belegtes. Das ist Unzuverlässigkeit, nicht Ausfall — die Unterscheidung aus Arbeitsregel D.

---

## Fund vom 3. August — dasselbe Spiel doppelt in der Spielliste

Am 2.8. standen in derselben Liste **„Bohemians – Galway United FC" (Anpfiff 20:00)** und **„Bohemians Dublin – Galway United" (Anpfiff 19:00)** — ein Spiel, zwei Einträge. Sonnet hat es selbst gemerkt und in die Begründung geschrieben: „Gleiche Paarung wie heute früher."

Die Doppelten-Sperre in `spielListeHolen` bildet den Schlüssel so:

```
function schluessel(s){ return String(s.match).toLowerCase().replace(/[^a-z0-9]/g,''); }
```

Zwei Schreibweisen desselben Spiels ergeben zwei verschiedene Schlüssel. Folgen: **sechs bewertete Aussagen je Gehirn aus einem einzigen Spiel** statt drei, und eine der beiden Anpfiffzeiten ist falsch — die geht in die 2,5-Stunden-Regel des Schiedsrichters ein.

**Ob das eine zehnte Fehlerart ist oder ein Beobachtungspunkt bleibt, entscheidet Ondo.** Nichts gebaut; gehörte nicht zu den vier v19.7-Punkten.

---

## Drei Codebefunde vom 31.7. (Beobachtung, keine bewiesenen Fehler)

1. **Zuordnung über die Listenposition.** In `vorhersagen()` werden Wettbewerb und Anpfiffzeit über die Position in der Liste zugeordnet, der Spielname dagegen aus der Antwort des Gehirns. Antwortet ein Gehirn in anderer Reihenfolge, hängt an einem Spiel die falsche Anpfiffzeit — und die 2,5-Stunden-Regel rechnet mit genau dieser Zeit. Am 29. und 30.7. kam die Liste in beiden Fällen in derselben Reihenfolge zurück.
2. **Der Wettbewerb wird dem Schiedsrichter nicht übergeben.** Nur Spielname, Datum, Anpfiffzeit. Die Wettbewerbspflicht aus v19.2 wirkt erst hinterher als Warnung.
3. **Die Konsistenz-Absicherung ist zur Hälfte verschwunden.** Der Satz, der einen Seitenwechsel mit „Änderung:" begründen ließ, steht in `OndoControl.html` (v17), aber nicht mehr im v19-Auftrag. Beim Umbau zum Messgerät stillschweigend weggefallen. Ob die Liste allein noch wirkt, ist **nicht gemessen.**

---

## ChatGPTs Architekturantwort vom 30.7.

**Kern: Formvalidierung statt Inhaltsvalidierung.** Die Absicherungen prüfen die Bauform der Antwort, nicht ihre Wahrheit.

**Zu übernehmen:** Vertrauensklassen statt binär *gefunden / nicht gefunden* · Regressionstest mit den 13 Ergebnissen als **feste Prüfbibliothek**.

**Zurückzustellen:** zweite unabhängige Quelle — bricht die Zwei-Probleme-Regel; Quellenpriorität (Backlog 0c) ist billiger.

**In den Blueprint als offene Frage:** Darf der Schiedsrichter überhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten? *Steht im Backlog geparkt, im Blueprint noch nicht eingetragen.*

---

## Versionen

- **Stabil: v17** (`OndoControl.html`, version.json = 17) — **seit dem 17. Juli unverändert**
- **Beta: v19.7.8** (`beta.html`, geliefert 7.8.2026) — getrennter Speicher, aktive Messphase. Vier Nachbesserungen am 3. und 4. August, alle ausgelöst durch Punkt 0a; Einzelheiten im Backlog. Im Code steht weiterhin `APP_VERSION = 18` (technische Schuld, bewusst nicht nebenbei geändert, vor der Beförderung zu klären)
- **Sprachschlüssel: 201** in DE, FR und EN, maschinell abgeglichen und identisch (Stand 7.8., v19.7.8). *Die früher dokumentierten 184 waren nie geprüft; nachgezählt waren es 185, dann 193, dann 199, seit v19.7.8 sind es 201.*

---

## Der Richtungswechsel vom 23. Juli (wichtigster Kontext)

Bis v18.6 war die Beta ein **Wett-Berater**. Am 23. Juli wurde sie zum **Messgerät** umgebaut. Auslöser:

**1. Die Quoten waren erfunden.** Abgleich mit echten Tipico-Quoten (18.7.): KI sagte 1.95, real 1.40. Vier von vier zu hoch. Ursache: Buchmacher laden ihre Quoten erst im Browser nach. **Jede Value-Rechnung war wertlos.**

**2. Der Datensatz wuchs zu langsam.** In zwei Wochen 21 bewertete Empfehlungen; nötig wären rund 100 pro Gehirn.

**Die Umstellung (alle drei KIs einig):** Keine Quoten, sondern Prozentzahlen · **alle Spiele** einer gemeinsamen Liste vorhersagen statt auszuwählen · **ein Ergebnis** nennen, die App leitet drei Aussagen ab · Hauptkennzahl **Kalibrierung**, Trefferquote als Nebenkennzahl · die alten 21 Bewertungen **archiviert**.

**Zur Zusage vom 23.7., ehrlich eingeordnet:** Abgeleitet wird nur die **Richtung** des Marktes. Die **Prozentzahl** wird weiterhin getrennt erfragt. Damit gibt es zwei Kanäle, die auseinanderlaufen können — genau das zeigt der Befund oben.

**Bewusst zurückgestellt:** Value-Rechnung, echte Quoten, weitere Sportarten.

**Zur häufigen Frage nach den Quoten:** 70 % entsprechen einer fairen Quote von 1,43; ein Buchmacher zahlt weniger. Diese Umrechnung wird in der App seit dem 23.7. **nirgends benutzt**. Der Bezug zur Quote kehrt erst mit Backlog-Punkt 9 zurück.

**Hinweis zu Prozentzahlen und Vertrauensstufen:** `Ondo-Core-Architektur.md` verlangt HOCH/MITTEL/NIEDRIG statt Prozentwerten (beschlossen 5.7., mit Art. 14 begründet). Die Messphase benutzt trotzdem Prozentzahlen, und das ist richtig: Kalibrierung ist ohne Prozentzahlen nicht messbar. Die Stufen gelten für **Empfehlungen an Ondo**, die Prozentzahlen für **Messwerte**. **Das ist kein Fehler und nicht zu reparieren.**

---

## Aktueller Messstand (abgelesen aus der App am 8.8.2026, 06:11 Uhr)

**Bestand insgesamt:** **210 Vorhersagen** (aus der App abgelesen, 8.8. 07:54), davon **190 aus der Messphase** und 20 im v18-Archiv. **Je 180 bewertete Aussagen.** Zuletzt vorhergesagt am 8. August früh (20 offene Vorhersagen).

*Zur Herkunft (Art. 14): Alle Zahlen dieses Abschnitts sind **aus der Anzeige der App abgelesen**, keine ist gerechnet. Claude hatte am 8.8. zunächst je 150 Aussagen fortgeschrieben und dabei die zehn am Morgen des 7.8. übernommenen Ergebnisse übersehen — 135 + 30 + 15 = 180. Der Fehler kam durch Ondos Bildschirmfoto der Finanzen-Seite ans Licht.*

| | bewertete Aussagen | Kalibrierungs-Abweichung | Trefferquote |
|---|---|---|---|
| Sonnet | 180 | **8 %** (grün) | 47 % (85/180) |
| Flash | 180 | **8 %** (grün) | 51 % (91/180) |
| gesamt | 360 | — | 49 % (176/360) |

> **⚠ Diese Werte enthalten 15 nachweislich falsch bewertete Sonnet-Aussagen.** Nach einer Berichtigung stünde Sonnet bei **94/180 = 52 %** und rund **5 %** Abweichung, Flash unverändert. Belege in Abschnitt „Der 8. August", Unterpunkt 7. **Ondos Entscheidung über die Berichtigung steht aus.**

**Sonnets Verteilung:** 1–49 % → 24 Aussagen (behauptet 42, wirklich 33) · 50–59 % → **121** (behauptet 54, wirklich 50) · 60–69 % → 21 (behauptet 63, wirklich 52) · 70–79 % → 14 (behauptet 74, wirklich 43)

**Flashs Verteilung:** 1–49 % → 25 (42/28) · 50–59 % → 72 (55/53) · 60–69 % → **66 (behauptet 63, wirklich 53)** · 70–79 % → 13 (73/54) · 80–89 % → 3 (82/100) · 90–99 % → 1 (90/100)

**Ehrliche Einordnung (Art. 14):**
- **🔴 Der dokumentierte Vorsprung Sonnets besteht nicht mehr.** Zuletzt 5 gegen 9 Prozent, jetzt **beide 8**. Sonnet hat sich um drei Punkte verschlechtert, Flash um einen verbessert.
- **Sonnet hat jetzt 35 Aussagen ab 60 %** statt zehn. In der Stufe 70–79 % behauptet es 74 und trifft 43 — schlechter als Münzwurf. In der Stufe 60–69 % behauptet es 63 und trifft 52. **Sein guter Wert war vermutlich zum grossen Teil Vorsicht** — Deutung, keine Messung. 67 Prozent aller Sonnet-Aussagen liegen weiterhin zwischen 50 und 59 Prozent.
- **🔴 Diese Lesart ist durch Punkt F verunreinigt, und zwar genau in den Stufen 60–79 %.** Dort liegen die umgedrehten „beide treffen"-Werte, die als falsch gewertet werden, obwohl Sonnets Wort richtig war. **Wie viel von Sonnets Überzuversicht Rechenfehler und wie viel Urteilsfehler ist, ist ohne Behebung von Punkt F nicht bestimmbar** (Art. 11).
- **Flashs Schwachstelle bleibt belegt:** 66 Aussagen im Bereich 60–69 %, behauptet 63, eingetroffen 53. Die Lücke ist gegenüber dem 6.8. kleiner geworden (damals 63/49), aber vorhanden. In den Stufen 80–99 % hat Flash vier Aussagen, alle richtig.
- **Sonnet hat in den Stufen ab 80 % keine einzige Aussage.** Seine 92-%- und 85-%-Angaben vom 7.8. abends stecken in geparkten Einträgen zu erfundenen Spielen und werden nie bewertet.
- **Die Trefferquoten gehen erstmals auseinander:** 47 gegen 51 Prozent. Ein Teil davon geht nachweislich auf Punkt F zurück — allein am Abend des 7.8. zwei Punkte.
- Zeilen mit ein bis vier Aussagen sind **bedeutungslos**.
- **Die sieben CL-Vorhersagen vom 29.7. stecken NICHT in diesen 180.**
- **Flash lief die ganze Zeit als `gemini-3.1-flash-lite`.**
- Ondos eigene Bilanz: **−29,75 €**, eigene Trefferquote 17 % (1/6). Papier-Modus bleibt die stehende Empfehlung.

**Entschlossenheit (aus denselben 180 Aussagen je Gehirn):**

| | Ø Abstand von 50 | Anteil ab 60 % |
|---|---|---|
| Sonnet | 7 | 19 % (35/180) |
| Flash | 10,1 | 46 % (83/180) |

*Lesart: Flash legt sich weiterhin deutlich öfter fest als Sonnet, aber der Abstand schrumpft — am 6.8. war es 7 gegen 40 Prozent, jetzt 19 gegen 46. **Beide Gehirne sind entschlossener geworden, Sonnet stärker.** Die Zahl allein sagt nichts über Qualität. **Den Gehirnen wird sie nicht mitgeteilt.***

*Vorherige Stände: 6.8. — je 135 Aussagen, Sonnet 5 % / 4,8 / 7 %, Flash 9 % / 8,7 / 40 %. 3.8. — je 87 Aussagen, 4,8 und 8,6.*

## Was v19.7 kann

**Vorhersage:** Ein Knopf. Die Spielliste wird **zweistufig** geholt: erst UEFA und große europäische Ligen, nur bei weniger als fünf Spielen zusätzlich MLS/Südamerika/Skandinavien, danach erst Testspiele. Jede Stufe ist eine eigene Anfrage. Beide Gehirne bekommen dieselbe Liste, ohne Websuche.

**Ergebnisprüfung:** Ein Knopf, mehrrundig. Höchstens fünf Spiele pro Anfrage, Obergrenze sechs Runden. Drei Zustände je Spiel. Quellenpflicht ab Durchgang drei. Sichtbare Bilanz.

**Datensicherung** (unter „Mehr"): Export als Datei, Import zurück.

**Kalibrierungs-Tabelle** unter Finanzen, je Gehirn. Darunter neu die Karte **Entschlossenheit**.

**Neu in v19.7 (3.8.2026):**
- **A** — jedes Gehirn gibt zusätzlich das Wort `bttsWort` („ja"/„nein") aus. Es wird gespeichert und auf jeder Vorhersagekarte angezeigt. Weicht es von der angezeigten Btts-Aussage ab, erscheint der Hinweis „≠ Anzeige oben" — **reine Anzeige, nicht gespeichert, in keiner Kennzahl.** Am Rechnen, Umdrehen und Bewerten wurde nichts geändert.
- **0a** — **⚠ ÜBERHOLT. Am 4.8. in v19.7.3 zurückgenommen.** Der Schiedsrichter läuft wieder mit einem Flash-Modell. Der Anfragen-Zähler bleibt bei null, Modellname und Anzahl erscheinen deshalb **nie** unter der Bilanz. Was 0a sein sollte und warum es scheiterte, steht oben im Abschnitt zum 4. August. *(Der Absatz bleibt hier stehen, damit sichtbar ist, was einmal beschlossen war — nicht als Beschreibung des heutigen Zustands.)*
- **1** — Kennzahl Entschlossenheit.
- **D** — Rückblick-Block in neuer Zeilenform: `2.8.2026: Bohemians – Galway · getippt 2:1 · Ergebnis noch offen`.

**Beim Bauen von 0a gefunden:** Die App fragte das Google-Konto nie nach stärkeren Modellen — der Filter in `gLadeModelle` ließ ausschließlich Namen mit „flash" durch. Der Schiedsrichter benutzte dasselbe Modell wie das zweite Gehirn, nicht aus Absicht, sondern mangels Alternative. *(Der Befund bleibt gültig; die daraus gebaute zweite Modellliste ist am 4.8. zurückgenommen worden.)*

**Was die Kosten angeht — am 4.8. beantwortet:** Die Frage war, was ein Prüflauf wirklich kostet. Antwort aus dem Google-Konto: **0,05 € in 90 Tagen**, Guthaben 9,94 € von 10,00 €. Selbst die rund 30 vergeblichen Anfragen der drei 0a-Anläufe haben praktisch nichts gekostet. Die Schätzung vom 9.7. lag um das Zehnfache daneben — hier lag die Sorge in die andere Richtung daneben.

---

## Wie es weitergehen soll

**Reihenfolge, festgelegt am 4.8.:** (1) Buchführung — erledigt mit dieser Fassung · (2) die acht ungeprüften Ergebnisse vom 4.8. prüfen und Valur – Stjarnan klären · (3) berichtigter Bericht an ChatGPT und Gemini, mit Antwort auf Geminis offene Rückfrage · (4) **Backlog-Punkt 22** bauen (KI-Log als Textausgabe) · (5) danach **Punkt E**.

**1. v19.7 bis v19.7.4 — ERLEDIGT am 3. und 4.8.** Jetzt läuft die Bewährungszeit (Arbeitsregel B). Auszuwerten:
- **Test A:** Nach einem Tag Vorhersagen ablesen, ob Wort und Prozentzahl bei Sonnet auseinanderfallen und bei Flash nicht. **Vorbehalt:** Es ist möglich, dass die zusätzliche Frage das Antwortverhalten selbst verändert; ein Warnzeichen wäre, wenn Sonnets scharfes Muster bricht (umgedreht nur bei einer Null im Tipp). Die beiden Fälle lassen sich nicht sicher trennen.
- **Punkt 0a:** ~~Modellname und Anfragen-Zähler ablesen.~~ **Entfällt — 0a ist am 4.8. zurückgenommen.** Die Kostenfrage ist am Guthaben beantwortet: 0,05 € in 90 Tagen.
- **Punkt D:** In den ersten Tagen steht bei fast jeder Zeile „Ergebnis noch offen", weil Übernehmen gesperrt ist. Das ist erwartet.

**2. Die acht ungeprüften Ergebnisse vom 4.8. prüfen und Valur – Stjarnan klären.** Claude prüft selbst per Websuche; Ondo schlägt nichts von Hand nach (Beschluss 25.7.). Vorher kein zweiter Prüflauf.

**3. Punkt E: „Prüfen statt suchen"** — am 25.7. beschlossen, bis heute nicht gebaut. Nach der Rücknahme von 0a der **einzige verbliebene** Ansatz gegen erfundene Ergebnisse, und von beiden Prüfern am 4.8. als der stärkere Weg bestätigt. **Vorbedingung: Geminis Rückfrage beantworten** — wie unterscheidet der neue Auftragstext ein echtes 0:0 von einem „nicht gefunden"?

**3b. Dieselben 13 Ergebnisse erneut prüfen lassen.** ~~mit dem stärkeren Modell~~ — das entfällt mit 0a. Der Vergleich bleibt trotzdem sinnvoll, sobald Punkt E gebaut ist: Ondos PDF vom 30.7. ist die Messlatte „alter Auftragstext", die amtlichen UEFA-Ergebnisse sind die Wahrheit. **Der sauberste Vergleich, den das Projekt je hatte — verspielt, sobald diese 13 übernommen werden.**

**4. Erster Lernschritt — NICHT selbstverständlich.**
Für **Flash** ist die Lehre klar benennbar. Für **Sonnet** wäre die naheliegende Lehre „leg dich öfter fest" — und die wäre **gefährlich**: Ein Modell zu mehr Entschlossenheit zu drängen, kann seine Ehrlichkeit zerstören. Zweiter Grund zum Verschieben: Ein Lernschritt ist nach Art. 9 eine bestätigte Lehre; eine Lehre auf ungeklärter Datengrundlage zurückzunehmen ist teurer, als sie später zu geben.
**Beschlossen (Ondo, 31.7.): als ausdrücklich offene Frage an ChatGPT und Gemini geben.** Geschehen am 4.8. **Beide antworteten: ja, nur Flash korrigieren.** Ondos Entscheidung steht aus. **Und: Die Schwelle ist nach dem belegten Maßstab — rund 100 Aussagen pro Gehirn — noch nicht erreicht.**

**5. Danach: das Such-Experiment.** Die Messung ohne Suche läuft seit dem 23. Juli; **vier Wochen sind am 20. August um.**

**6. Beförderung Beta→Stabil — derzeit GESPERRT.**
Fünf Gründe, keiner davon heute erfüllbar:
- **Kriterium (f)** verlangt Null-Fehler-Toleranz bei der Schiedsrichter-Validierung. Am 30.7. zwei von sieben falsch, am 31.7. kamen erfundene 0:0 dazu.
- **Die siebte Fehlerart** (Heim und Gast vertauscht) hat gar keine Absicherung.
- **Punkt 4** (Daten-Export in die stabile Version) ist nicht gebaut — alles Gesammelte ginge verloren. *Nicht zu verwechseln mit der bereits gebauten Datensicherung.*
- **`APP_VERSION = 18`** muss vorher geklärt werden.
- **Kriterium (c)** ist noch nicht neu gefasst.

Solange Test A offen ist, ist zusätzlich unklar, was die gemessenen Prozentzahlen überhaupt bedeuten.

**7. Erst dann: Quoten und Value zurück.** Über GitHub Actions. **Offene Verfassungsfrage:** Der Actions-Runner ist streng genommen ein winziger Server, der Blueprint sagt „kein Server". Beide Prüfer halten die Ausnahme für vertretbar. **Offene Sachfrage (Gemini):** Deckt ein kostenloser Dienst Ondos Spiele überhaupt ab?

**Die ehrliche Grenze:** Auch nach allen Schritten wissen wir nur, ob die Gehirne *ehrlich* schätzen — nicht, ob sie den Buchmacher schlagen. Ein perfekt kalibriertes Gehirn, das immer 50 % sagt, gewinnt kein Geld.

---

## Lernkette (beschlossen 6.7., Reihenfolge fixiert, noch nicht gebaut)

> **Evidence Ledger** (warum wurde empfohlen) → **Decision Ledger** (was machte Ondo daraus) → **Observation Layer** (Muster erkennen)

Jede Lehre braucht Ondos Bestätigung (Art. 9). Der Evidence Ledger wird seit v19.0 faktisch gefüllt.

**Aktueller Wahrheitsstand: Das System lernt noch nicht.** Es hat Erinnerung, kein Lernen. Das ist Absicht.

---

## Wetten ist das Pilotmodul, nicht die Vision

Geplant sind Finanzen, Content, Organisation. Fast alles, was gebaut wird, ist domänenunabhängig: askBrain-Abstraktion, Vertrauensstufen, Quellen-Transparenz, Kalibrierung, Evidence Ledger.

**ChatGPTs Leitbild (23.7., soll in Ondo-Core — steht dort noch nicht):** Ebene 1 Daten (Fakten, keine KI) · Ebene 2 Denken (die Gehirne, arbeiten nur mit Ebene-1-Daten) · Ebene 3 Bewertung (Log, Kalibrierung, Lernkette).

**Ehrlicher Hinweis:** Andere Module werden schwerer. Beim Fußball urteilt die Realität nach 90 Minuten unbestechlich. Bei Finanz- oder Organisationsentscheidungen kommt die Rückmeldung später und verrauschter.

---

## Arbeitsablauf für neue Chats

Ondo schreibt „Ondo Control: [Anliegen]" und fügt Raw-Links ein, **immer mit angehängter Zahl**, z. B. `?v=20260731`. **Alle sechs Dateien plus `version.json` werden gelesen, bevor irgendetwas beurteilt wird** — Blueprint und Ondo-Core eingeschlossen. Das Weglassen hat am 30./31.7. zweimal zu falschen Empfehlungen geführt.

**Vor jeder Lieferung:** Syntax-Check (`node --check`), Sprachdatei-Abgleich (DE/FR/EN gleiche Schlüssel, **aktuell 201**), Trockentest der neuen Logik — am besten gegen Ondos jüngste Sicherungsdatei, das prüft die Rechnung an echten Daten. Versionsnummer im Header hochzählen. **Und die Dokumente (Arbeitsregel F).**

### Chat-Übergabe ist Claudes Pflicht, nicht Ondos (**Übergaberegel**, 30.7.)

*Namensklärung erledigt (Ondo, 31.7., eingetragen 3.8.): Diese Vorschrift hieß bis dahin ebenfalls „Regel G" und ließ sich mit der Arbeitsregel G (Kostenregel) im Blueprint verwechseln. Sie heißt jetzt **Übergaberegel**.*

Claude löst die Übergabe **von selbst** aus, sobald der Arbeitsspeicher knapp wird. Sie besteht aus drei Teilen: aktualisierter PROJEKT-STATUS, aktualisierter Backlog, und einer **Übergabemappe** mit den Abschnitten: (A) Nachricht zum Einfügen, (B) Kontrollfragen, (C) Antwortschlüssel nur für Ondo, (D) was zu tun ist, wenn Antworten falsch sind, (E) erste Arbeit nach der Abnahme.

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

---

## Übergabe-Protokoll

*Von Ondo angeregt am 31.7. Zweck: Wenn später etwas fehlt, sieht man, in welcher Übergabe es verloren ging.*

| Datum | Von → An | Verfahren | Kontrollfragen | Anmerkung |
|---|---|---|---|---|
| 16.7.2026 | Chat 1 → Chat 2 | Chat-PDF | keine | erster Test, bestanden |
| 29.7.2026 | Chat 2 → Chat 3 | Chat-PDF (147 S.) | keine | nur zur Hälfte lesbar; Rest im Blueprint abgedeckt |
| 30.7.2026 | Chat 3 → ChatGPT | GitHub-Pages-Links | 7 von 8 | Mappe war an sechs Stellen veraltet |
| 30./31.7.2026 | Chat 3 → Chat 4 | Raw-Links + Mappe | 9 von 9 | zwei Antworten genauer als der Schlüssel; deckte einen Art.-8-Verstoß auf |
| 31.7.2026 | Chat 4 → Chat 5 | Raw-Links + Mappe | **9 von 9** | erstmals alle sechs Dateien vorgeschrieben; zwei Antworten über dem Schlüssel (Fragen 5 und 8), drei neue Codefunde durch den Nachfolger |
| 3.8.2026 | Chat 5 → Chat 6 | Raw-Links + Mappe | **9 von 9** | eine Antwort über dem Schlüssel (Frage 3 war falsch gestellt: sechs Tage, nicht drei); zwei Dokumentenfehler durch den Nachfolger gefunden. **Erste Übergabe, nach der noch am selben Tag Code geliefert wurde** |
| 4.8.2026 | Chat 6 → Chat 7 | Raw-Links + Mappe + Abnahme | **9 von 9** | zwei Antworten über dem Schlüssel (Fragen 3 und 4). Der Nachfolger fand vor der Prüfung **drei Abweichungen zwischen Code und Dokumenten** (v19.7.4 statt v19.7 · 0a zurückgenommen · Modellwahl undokumentiert) plus einen Stilfehler. Der abgebende Chat gab offen an, dass sein Speicher erschöpft war |
| 4./5.8.2026 | Chat 7 → Chat 8 | Raw-Links + Mappe | **9 von 9** | beide Fangfragen bestanden; zwei Antworten über dem Schlüssel (Mechanismus hinter `APP_VERSION`, Widerspruch zur Begründung der neunten Fehlerart). Der Nachfolger fand vor der Prüfung die unbeabsichtigte Lücke in `PROJEKT-STATUS.md` sowie zwei Codebeobachtungen, die sich beide bestätigten. Chat 7 hatte die Mappe zunächst nach Gedächtnis gebaut und nach Ondos Einwand neu geschrieben |
| 5.8.2026 | Chat 8 → Chat 9 | Raw-Links + Projektdateien + Mappe | **9 von 9** | beide Fangfragen bestanden (unbekannte Ursache des Neun-Stunden-Versatzes, Modellname nicht rückwirkend behoben); drei Antworten über dem Schlüssel — die Einschränkung „fehlerfrei nur beim Endstand“, die Eingrenzung des Modellnamen-Problems auf Flash, und der Hinweis, dass die Sicherung vor den zehn Übernahmen lag. Der Nachfolger fand beim Lesen einen übersehenen Rest „184 Sprachschlüssel“ in `PROJEKT-STATUS.md`, den Chat 8 selbst hinterlassen hatte |
| 5./6.8.2026 | Chat 9 → Chat 10 | Raw-Links + Projektdateien + Mappe | **9 von 9** | beide Fangfragen bestanden (Ursache des Neun-Stunden-Versatzes als unbekannt benannt, Modellname nicht rückwirkend behoben); vier Antworten über dem Schlüssel — die genaue Bedingung der Umdrehung (`p < 50`, im Code gegengeprüft), die einzeln benannten vier geparkten Einträge, `APP_VERSION = 18` als zweiter Fall gewollten Rückstands. Der Nachfolger fand vor der Prüfung, dass Backlog und PROJEKT-STATUS den Codekommentar zu 0a in der alten Fassung zitieren, obwohl er am 5.8. berichtigt wurde |
| 6./7.8.2026 | Chat 10 → Chat 11 | Raw-Links + Projektdateien + Mappe | **9 von 9** | beide Fangfragen bestanden (Ursache der falschen Anpfiffzeiten als unbekannt benannt und die Zeitzonen-Vermutung als am 6.8. widerlegt erkannt; aus zwei fehlerfreien Prüfläufen nichts für die neun Fehlerarten geschlossen); vier Antworten über dem Schlüssel — die siebte Fehlerart mit beiden Spielen benannt, die stabile v17 als zweiter Fall gewollten Rückstands, der sachliche Grund für Temperatur 0,0 beim Schiedsrichter. **Der Nachfolger fand vor der Prüfung, dass die Projektkopie des Backlogs auf Fassung 10 stand, während im Repo Fassung 11 lag — und baute nichts nach, sondern meldete es. Zweiter Fall einer Abweichung zwischen Kopie und Repo nach dem 5.8.** |
| 7.8.2026 | Chat 11 → Chat 12 | Raw-Links + Projektdateien + Mappe | **9 von 9** | beide Fangfragen bestanden (drei verschiedene Muster bei den Anpfiffzeiten benannt und die Ursache als unbekannt geführt, ohne das dritte Muster als Bestätigung der widerlegten Zeitzonen-These zu lesen; aus dem guten zweiten Spiellisten-Lauf nichts für den Bau geschlossen); vier Antworten über dem Schlüssel — Weg A am Code statt am Dokument belegt, Geminis zu starke Formulierung als schon beim Eintragen zurückgewiesen erkannt, der `checkUpdate`-Mechanismus und der Blueprint-Eintrag vom 10.7. als Belege für die zwei gewollten Rückstände. **Der Nachfolger fand vor der Prüfung vier Fehler in der Buchführung des Vorgängers — drei veraltete Angaben (v19.7.7 statt v19.7.8, 199 statt 201 Sprachschlüssel) und eine doppelt eingesetzte Sicherungsliste — und unterschied dabei richtig zwischen Stands- und Verlaufsangaben.** |

---

*Nachtrag von Claude (Chat 12) am 8.8.2026, 17:25 Uhr: **Drei Funde aus einem frischen Claude-Chat eingetragen, den Ondo geöffnet hat — ausdrücklich nicht von Chat 12 selbst gefunden.** Brier-Score (Backlog 34), fehlende Streuungsangabe (Backlog 35), geparkte Einträge als systematische Verzerrung. **Alle drei selbst nachgerechnet statt übernommen (Arbeitsregel H); einer davon war im Fund falsch** — die Berichtigung von Punkt F ändert den Brier-Score sehr wohl, Sonnet springt von 0,2593 auf 0,2418 und damit von schlechter auf besser als Raten. Backlog auf Fassung 14.*

*Abschluss-Buchführung von Claude (Chat 12) am 8.8.2026, **11:55 Uhr (Uhrzeit unmittelbar vor dem Schreiben abgefragt).**

**⚠ Berichtigung in eigener Sache, von Ondo entdeckt:** Diese Buchführung trug zunächst durchgehend **08:35 Uhr**. Diese Uhrzeit war **erfunden** — Claude hatte um 08:04 die Uhr abgefragt und dann geschätzt, wann er fertig sein würde. Tatsächlich war es 11:58. **Es ist der dritte erfundene Zeitstempel dieses Chats** (zuvor 07:00 im Prüferbericht und 08:10 im Kopf). **Die maschinelle Vorabprüfung fand ihn nicht, weil Claude die erwartete Uhrzeit als feste Zeichenkette in das Prüfskript geschrieben hatte** — es prüfte die erfundene Zahl gegen sich selbst und meldete „alles sauber". Ein Prüfer, dessen Sollwert vom Geprüften stammt, prüft nichts.

**Behoben:** Das Skript nimmt die Uhrzeit jetzt als Aufrufparameter, der unmittelbar vor dem Schreiben vom Uhr-Werkzeug geholt wird. **Die Systemzeit des Rechners ist dafür unbrauchbar** — sie läuft in UTC und lag um zwei Stunden daneben (09:59 gegen 11:58).

*Hinweis für den nächsten Chat: Auch die Stempel **06:35** und **08:10** in diesem Abschnitt waren Schätzungen wenige Minuten nach der letzten Uhrabfrage, keine Ablesungen. Sie bleiben als Verlaufsangabe stehen. **Ab dieser Zeile gilt: jeder Zeitstempel ist eine Ablesung.***

**Inhalt dieses Eintrags:** Neun Unterpunkte ergänzt (13 bis 21): der **nicht durchgeführte Prüflauf des 8.8.** mit 20 offenen Vorhersagen · die **Bilanz des Backlogs** (39 Punkte, 7 gebaut, 7 beschlossen und ungebaut) mit zwei Ursachen · **Ondos Beschluss, dass jeder Chat mindestens einen beschlossenen Punkt baut** (Arbeitsregel L, Blueprint 0.11) · **ChatGPTs vier Architekturhinweise** samt dem am Code belegten Befund, dass `askBrain` nicht existiert · die **Loop-Idee** und warum ein zweites Modell hier nicht hilft · **sechs eigene Fehler** dieses Vormittags und die zugesagte maschinelle Vorabprüfung · **Claudes Grund gegen die rückwirkende Berichtigung und warum er nicht mehr trägt** (auf Ondos Verlangen) · der **KI-Log als datierter Schnappschuss** im Projektordner. Backlog auf Punkt 33 erweitert und **auf Fassung 13 gehoben**, Blueprint auf 0.11. *Die Fassungsnummer war von Ondo beanstandet: Die Änderungen des 8.8. hingen als sechs Einzelnachträge an Fassung 12, statt eine neue Fassung zu eröffnen — anders als bei allen Fassungen 5 bis 12. Berichtigt; die Einzelnachträge bleiben als Aufzeichnung stehen.* **Alle drei Dokumente maschinell geprüft.***

*Aktualisiert von Claude (Chat 12) am 8.8.2026, 08:10 Uhr — **Nachprüfung auf Ondos Aufforderung, fünf eigene Versäumnisse gefunden und behoben:** (1) Der Zeitstempel im Kopf war veraltet. (2) Der Backlog-Kopf stand noch auf dem 7.8. (3) **Unterpunkt 4 behauptete „Test A: 39 von 39 ohne Ausnahme"**, während Unterpunkt 7 drei Ausnahmen belegte — Widerspruch im selben Dokument, jetzt auf **92 von 95** berichtigt. (4) **Die zweite Prüferrunde fehlte vollständig** — beide kehrten ihre Antwort auf Weg 2 um; jetzt als Unterpunkt 6 eingetragen. (5) **Der Blueprint war nicht angefasst**, obwohl Ondos Beschluss zu frischen Prüfer-Chats Arbeitsregel K ändert — jetzt Fassung 0.10. Ausserdem die zugesagte, aber nicht durchgeführte **Anpfiffzeit-Prüfung nachgeholt** (Unterpunkt 12): 12:00 statt 13:00, vierter Tag in Folge.*

*Aktualisiert von Claude (Chat 12) am 8.8.2026, 07:58 Uhr: **Der KI-Log ist maschinell ausgezählt** (neuer Unterpunkt 7). Gegenprobe gegen die App bestanden, Zeile für Zeile. **Befund A ist widerlegt:** Die scheinbare Überzuversicht Sonnets ist vollständig der Zählfehler; nach Berichtigung trifft Sonnet in den Stufen 60–79 % je 71 %. Netto +9 Punkte, 94/180 = 52 %. **Nur zwei der 15 Fälle liegen vor dem 5. August.** Zwei Fehlerarten statt einer — eine pauschale Regel wäre falsch gewesen. Dazu zwei Randbefunde (Unterpunkt 8): beweglicher Schiedsrichter-Name, Prüfer-Gemini ist 3.1 Pro. Sicherungsstand 07:54, Bestand auf 210 berichtigt.*

*Aktualisiert von Claude (Chat 12) am 8.8.2026, 07:10 Uhr: **Zwei Einwände Ondos eingetragen** (neuer Unterpunkt 6) — die Grösse des Schadens ist aus dem Log bestimmbar, und eine Berichtigung wäre umkehrbar und belegbar. Beides entkräftet Teile der bisherigen Ablehnung. **Entschieden: Prüfer bekommen künftig frische Chats** (neuer Unterpunkt 7). Rückfrage zur Berichtigung erstellt, ohne Nennung der früheren Antwort.*

*Aktualisiert von Claude (Chat 12) am 8.8.2026, 06:55 Uhr: **Die Prüferantworten sind eingetragen** (neuer Unterpunkt 5 im Abschnitt „Der 8. August"). Frage 1 einstimmig „nicht auswertbar", Frage 2 einstimmig „nur schneiden" — **die Frage war jedoch zweifach unvollständig gestellt**, einmal von Chat 11 vorhergesagt, einmal von Claude selbst verschuldet (`bttsWort` erst seit v19.7). Frage 3: die Prüfer widersprechen einander. Ausserdem auf Chat 11s Anmerkung hin zwei Deutungen im Text als Deutungen gekennzeichnet („vermutlich").*

*Berichtigt von Claude (Chat 12) am 8.8.2026, 06:35 Uhr: **Der Messstand war falsch.** Claude schrieb je 150 Aussagen, richtig sind je 180 — die zehn am Morgen des 7.8. übernommenen Ergebnisse waren beim Fortschreiben übersehen worden. Ondos Bildschirmfoto deckte es auf. Alle Kennzahlen des Abschnitts stammen jetzt aus der App: beide Gehirne **8 %** Abweichung, Sonnet 47 % (85/180), Flash 51 % (91/180). Sonnets dokumentierter Kalibrierungsvorsprung besteht nicht mehr. **Zweite Berichtigung im selben Durchgang, auf Ondos Aufforderung zur Nachprüfung:** Der Abschnitt „Aktueller Messstand" stand noch auf dem Stand des 6.8. (je 135 Aussagen, 5 gegen 9 Prozent) und war beim ersten Durchgang übersehen worden. Er ist jetzt vollständig auf die abgelesenen Werte gebracht, ebenso der Datierungshinweis im Kopf. Die Zahlen in den Tagesabschnitten des 6. und 7. August sind **Verlaufsangaben und bleiben unverändert**.*

*Aktualisiert von Claude (Chat 12) am 8.8.2026, 06:20 Uhr: Abschnitt „Der 8. August" neu — Prüflauf ohne Fehler, Messstand auf je 150, Punkt F erstmals mit gemessenem Punktverlust, Test A bei 39 von 39 — **beide Zahlen noch am selben Tag berichtigt: 180 statt 150, 92 von 95 statt 39 von 39** — Freundschaftsspiele als neue Beobachtung, Sicherungsstand auf 06:12 Uhr. Die Kalibrierungsabweichung ist aus dem Log-Text nicht bestimmbar und bleibt offen.*

*Aktualisiert von Claude (Chat 12) am 7.8.2026, 22:40 Uhr: **Neue Tabelle „Die Spielliste — drei Fehlerarten"** (Beschluss Ondo, 7.8.). Der Doppeleintrag wandert dorthin statt als zehnte Fehlerart in die Schiedsrichter-Tabelle; diese bleibt bei neun. Dazu neu aufgenommen: falsche Anpfiffzeiten und erfundene Spiele. Die Zeile (10) in der Schiedsrichter-Tabelle verweist jetzt auf die Verschiebung.*

*Aktualisiert von Claude (Chat 12) am 7.8.2026, 21:30 Uhr: Übergabe-Protokoll um Chat 11 → Chat 12 ergänzt. Vier Buchführungsfehler im Abschnitt „Der 7. August" bereinigt: die fehlende Nummer 8 durch Umnummerieren geschlossen (aus 9/10/11 wurde 8/9/10), Abschnitt 6 und 7 tragen jetzt je einen Verweis auf ihre Berichtigung, und die Überschrift von Abschnitt 6 behauptet die widerlegte Erklärung „britische Ortszeit" nicht mehr. **Der Text der Abschnitte 6 und 7 ist unverändert** — er hält fest, was am Nachmittag bekannt war. Sonst nichts geändert. Alle sechs Dateien plus `version.json` wurden vor Arbeitsbeginn vollständig gelesen; `PROJEKT-STATUS.md` und `Ondo-Control-Backlog.md` zusätzlich in ihrer Abendfassung.*

*Aktualisiert von Claude (Chat 11) am 7.8.2026: Abschnitt „Der 7. August" neu — Übergabe vollzogen, v19.7.8 geliefert, Prüflauf mit zehn von zehn Endständen, dritter falscher Halbzeitstand in Folge, erfundene Spielliste mit zehn geparkten Vorhersagen, Sonnet-Widerspruch bei „beide treffen", Befund über Geminis Leseverhalten. Übergabe-Protokoll um Chat 10 → Chat 11 ergänzt und die am 5.8. vertauschten Zeilen in die richtige Reihenfolge gebracht. Alle sechs Dateien plus `version.json` wurden vor Arbeitsbeginn vollständig gelesen.*

*Zweiter Nachtrag von Claude (Chat 10) am 6.8.2026, nachmittags: Bericht an beide Prüfer verschickt und beantwortet, Übergabe an ChatGPT vollzogen, zwei Befunde über die Arbeitsweise der Prüfer eingetragen.*

*Aktualisiert von Claude (Chat 10) am 6.8.2026: Abschnitt „Der 6. August" neu, Messstand nachgerechnet und auf je 135 Aussagen gebracht, drei Entscheidungen vom 5.8. abends nachgetragen, Sicherungsstand auf 08:28 Uhr, Übergabe-Eintrag Chat 9 → Chat 10 ergänzt, das veraltete Zitat des 0a-Codekommentars berichtigt. Alle sechs Dateien plus `version.json` wurden vor Arbeitsbeginn vollständig gelesen.*

*Vorige Fassung: aktualisiert von Claude (Chat 9) am 5.8.2026, 13:15 Uhr: Übergabe-Eintrag Chat 8 → Chat 9 ergänzt, Sicherungsstand auf 13:06 Uhr nachgetragen, zwei vertauschte Zeilen der Protokolltabelle in die richtige Reihenfolge gebracht. Sonst nichts geändert. Alle sechs Dateien plus `version.json` wurden vor Arbeitsbeginn vollständig gelesen.*

*Vorige Fassung: aktualisiert von Claude (Chat 8) am 5.8.2026, zusammen mit der Backlog-Fassung 9 und Blueprint 0.7. Alle sechs Dateien plus `version.json` wurden vor Arbeitsbeginn vollständig gelesen; die drei Dokumente wurden hochgeladen und nur an den betroffenen Stellen geändert.*

*Vorige Fassung: aktualisiert von Claude (Chat 7) am 4.8.2026, zusammen mit der Backlog-Fassung 7 und Blueprint 0.6. Alle sechs Dateien plus `version.json` wurden vollständig gelesen, dazu der Bericht vom 4.8., 06:15 Uhr. Alle Punkte aus Teil E der Übergabemappe Chat 6 → Chat 7 stehen jetzt in Repo-Dateien. **Die Übergabemappe darf gelöscht werden, sobald Ondo die drei Dateien hochgeladen hat — nicht früher.***
