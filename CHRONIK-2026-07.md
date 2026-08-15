# ONDO CONTROL — CHRONIK JULI 2026
*Archiv. Getrennt von `PROJEKT-STATUS.md` am 15. August 2026, 12:31 Uhr (Punkt 18).*
*Wird beim Start eines Chats **nicht** gelesen, sondern nur auf Zuruf.*
*Was heute gilt, steht in `STAND.md`. Steht hier eine Zahl, die dort anders lautet, gilt `STAND.md`.*

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

