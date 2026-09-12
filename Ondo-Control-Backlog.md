# ONDO CONTROL — Rückstand-Verzeichnis (Backlog)
**Nur offene Punkte. Gepflegt von Claude · Stand 12.9.2026, Fassung 108 · jede Idee mit Datum, Urheber und Status**
*Erledigtes, alte Fassungsnotizen und Prueflaeufe stehen in `BACKLOG-ARCHIV.md` — nur auf Zuruf zu lesen.*

## Regeln für dieses Dokument

1. **Abgrenzung (ChatGPT, 23.7.):** Architektur lebt ausschließlich in `Blueprint.md` und `Ondo-Core-Architektur.md`. Dieses Dokument enthält **nur Aufgaben, Ideen und deren Status** — keine Architekturregeln.
2. Claude schlägt Punkte von sich aus zum passenden Zeitpunkt vor. Ondo entscheidet, was und wann gebaut wird (Art. 8).
3. Nichts wird gelöscht. Abgelehnt und überholt bleiben sichtbar.
4. **Backlog-Pflege ist Code-Aufgabe (Ondo, 30.8.2026):** Code prüft und archiviert den Backlog künftig selbstständig, ohne Anstoss durch Chat — reines Verschieben eindeutig Erledigten nach `BACKLOG-ARCHIV.md`, nach denselben Kriterien wie bei der Archivierung vom 30.8.2026 (Fassung 61): Ein Punkt mit Status GEBAUT/GEKLÄRT/ENTSCHIEDEN/BEANTWORTET/GESCHLOSSEN zählt nur als erledigt, wenn im Punkt selbst **keine** Bewährungs-Einschränkung mehr steht ("Bewährung steht aus", "noch nicht bewährt" oder sinngemäss Gleiches) und er an keine noch offene Untersuchung gebunden bleibt — im Zweifel bleibt er stehen. Nichts wird gelöscht, keine inhaltliche Entscheidung über offene Punkte wird davon berührt — Art. 8 gilt für alles andere unverändert.
5. **Nur die letzten fünf Fassungsabschnitte bleiben im Hauptdokument (Ondo, 11.9.2026, Backlog-Punkt 65 — stehende Regel statt Einmalaktion).** Jede Lieferung, die einen neuen Abschnitt „Was Fassung N ändert" anlegt, verschiebt im selben Zug den jetzt sechstältesten Abschnitt (und ältere, falls noch welche fehlen) wortgleich nach `BACKLOG-ARCHIV.md`, an der chronologisch richtigen Stelle. Grund: Weg C aus Punkt 65 (einmaliges Kürzen) hatte nur vorübergehend geholfen und war bis Fassung 88 wieder auf über 269.000 Zeichen zugewachsen — mehr als das Doppelte der 120.000-Zeichen-Grenze aus Punkt 65. Eine Einmalaktion behebt die Ursache nicht, eine stehende Regel schon. Nichts wird gelöscht, nur verschoben — Regel 3 gilt unverändert.

**Status-Werte:** `Idee` · `beschlossen` · `gebaut` · `bewährt` (im Alltag getestet) · `überholt` · `abgelehnt`

**Übergabe an die Prüfer — GEÄNDERT am 30.7.:** Der Eintrag vom 23.7. („Raw-Links funktionieren nur bei Claude, ChatGPT und Gemini brauchen Anhänge") ist **überholt**. GitHub Pages wandelt Markdown in HTML um; diese Adressform funktioniert bei ChatGPT:
`https://ondo-control.github.io/Ondo-Control/PROJEKT-STATUS.html` (entsprechend für Backlog, Blueprint, Ondo-Core-Architektur). Einzelheiten und Folgen stehen in `PROJEKT-STATUS.md`.

**Dateinamen von Berichten an die Prüfer (28.7., Ondo):** Beginnen mit Datum und Uhrzeit — `2026-07-31_1430_Ondo-Control_Thema.md`.

---

## ⚠ Was Fassung 108 ändert (12.9., Trainingsraum gebaut — Backlog-Punkt 77, `beta.html` v19.9.0)

**Anlass:** Ondo hat den Trainingsraum-Plan freigegeben, mit dem ausdrücklichen Auftrag „nicht
einfach Auftrag erledigen und fertig, sondern vorher wirklich durchdenken, absichern und
zukunftsfähig konzipieren" — und dem Bau ohne weitere Rückfrage zugestimmt, wenn der Plan
tragfähig ist.

- **🔴 Backlog-Punkt 77 GEBAUT.** Vollständiger Plan, Selbstkritik und Architektur-Einordnung in
  `Ondo-Core-Architektur.md`, Abschnitt 1d (neu, Fassung 0.9). Kurzfassung bei Punkt 77 selbst
  (Punkt 45 — nicht doppelt geführt). Kern: `vorhersageGehirn()` unverändert wiederverwendet
  (bereits ohne Websuche), Zulassungsregel nach Trainings-Stichtag gegen Trainingsdaten-
  Kontamination (`TRAININGSRAUM_STICHTAG`, ohne geprüften Wert null zulässige Spiele — Art. 11),
  sofortige Bewertung statt Schiedsrichter-Wartezeit, getrenntes Protokoll
  (`state.trainingsraumProtokoll`) ohne Vermischung mit der echten Messreihe.
- **Zwei echte Fehlerquellen selbst gefunden, vor der Auslieferung behoben** (keine von Ondo
  genannt): `new Date()` auf einem deutschen Datumstext gelesen falsch (behoben durch feste
  ISO-Daten) — und ein Wettlauf-Risiko in der geteilten Variable `zuletztModell.gehirn` bei zwei
  potenziell gleichzeitigen Aufrufern, behoben über das schon vorhandene `modelVersion`-Feld
  plus ein neues Sperr-Flag `kiAnfrageAktiv`.
- **Ein Selbstkritik-Fund beim Bauen selbst, noch vor dem ersten Lauf korrigiert:** Die erste
  Fassung der „schon gesehen"-Regel hätte den Weg-(a)-Vorrat für beide Gehirne fast leergeräumt.
  Korrigiert auf die tatsächliche Leckquelle (nur die letzten sechs eigenen Vorhersagen im
  `fruehere`-Kontext zählen als „schon gesehen", nicht jede je abgegebene).
- **Verifiziert:** `node --check` bestanden · **40 neue Prüfungen** an den echten,
  herausgeschnittenen Funktionen, darunter ein Regressionstest für den Wettlauf-Fund · die
  bestehenden 121 (IndexedDB) und 45 (v19.8.28) Prüfungen erneut gelaufen, alle weiterhin
  bestanden · `pruefe.py`: ALLES SAUBER.
- **12 neue Sprachschlüssel** (306 → 318). Kein Schnitt in der Messreihe. `beta.html` jetzt
  v19.9.0.
- **Regel 5 angewandt:** Abschnitt „Was Fassung 103 ändert" wortgleich nach
  `BACKLOG-ARCHIV.md` verschoben.
- **Beschlossen und nicht gebaut: eins** — **4** *(unverändert — Punkt 77 war „Idee", zählt
  jetzt als gebaut, nicht als beschlossen-und-nicht-gebaut.)*

---

## ⚠ Was Fassung 107 ändert (12.9., Trainingsraum-Lösung gefunden, Punkt 4 freigegeben, ChatGPT-Antworten eingetragen — kein Codeaufwand)

**Anlass:** Ondo hat Punkt 77 (Trainingsraum) berichtigt — Weg (a) meint bereits ausgewertete
Spiele, nicht offene — und verlangt eine Lösung für das dadurch schärfere Problem: beide Wege
brauchen Isolation von Erinnerung UND Websuche, „aufgeben ist keine Option". Ausserdem hat er
ChatGPTs Antworten zu den zwei Rückfragen (Punkt 77, 78) mitgeteilt und erklärt, dass ChatGPT
jetzt vollen Repo-Zugriff hat statt nur GitHub-Pages-Links.

- **🔴 Trainingsraum-Lösung gefunden und im Code belegt (Punkt 77).** Zwei Funde: **Erstens**,
  die heutigen echten Vorhersagen (`vorhersageGehirn()`) laufen bereits ohne Websuche — weder
  der Sonnet- noch der Flash-Aufruf hängt das Suchwerkzeug an (`geminiCall()` tut das nur bei
  `useSearch`, laut eigenem Kommentar „NUR fuer den Schiedsrichter", Zeile 1944). Ein
  Trainingsraum, der dieselbe Funktion wiederverwendet, erbt diese Isolation automatisch — dafür
  muss nichts Neues gebaut werden. **Zweitens**, das Risiko, dass ein Modell ein Ergebnis aus
  seinen Trainingsdaten „kennt", lässt sich durch eine Zulassungsregel nach Datum eingrenzen: nur
  Spiele, deren Datum nachweislich nach dem Trainings-Stichtag der eingesetzten Modellversion
  liegt (bei Spielen aus dem eigenen laufenden Betrieb der App voraussichtlich immer der Fall,
  aber vor dem ersten scharfen Lauf an der offiziellen Modell-Dokumentation zu prüfen, nicht
  geraten — Art. 11). Damit entfällt die von Ondo befürchtete 4-Wochen-Wartezeit vollständig: Der
  Trainingsraum kann auf bereits ausgewertete `kiProtokoll`-Einträge zurückgreifen, deren
  Ergebnis sofort verfügbar ist. Einzelheiten, Bauskizze und offene Punkte (Kader/Verletzte noch
  keine Datenquelle) stehen bei Punkt 77 selbst.
- **🔴 Backlog-Punkt 4 (Daten-Export) von Ondo freigegeben, unabhängig vom Stand der
  Beförderung.** Ondo wörtlich: „Wenn du jetzt Punkt 3 gelöst hast mit dem Trainingsraum, ist
  für mich Punkt 4 freigeschaltet." Mit der Trainingsraum-Lösung oben ist diese Bedingung
  erfüllt. Die bisherige Terminierung „unmittelbar vor der Beförderung" war ohnehin nur eine
  Reihenfolge-Festlegung, kein technischer Blocker — das wurde Ondo in derselben Sitzung erklärt,
  nachdem er gefragt hatte, was Punkt 4 bisher aufhält. Genauer Umfang des Exports noch offen.
- **ChatGPT-Antworten zu Punkt 77 und 78 eingetragen — beide ohne Widerspruch zu Claudes
  Einschätzung.** Zu Punkt 77: ChatGPT bestätigt die Datums-Zulassungsregel unabhängig
  vorgeschlagen. Zu Punkt 78 (Kombi-Wette): ChatGPT bestätigt Claudes Empfehlung (Liste von
  `kiProtokollId`-Werten an einer Wette statt Aufteilung in Teil-Einträge) und schlägt als
  spätere Ausbaustufe eine strukturierte Leg-Liste statt nackter IDs vor.
- **Offene Frage an Ondo, noch nicht entschieden:** Ondo berichtet, ChatGPT habe jetzt vollen
  Repo-Zugriff und lese nicht mehr nur über GitHub-Pages-Links in einem frischen Chat ausserhalb
  des Projektordners — das war der Grund für die heutige Übergaberegel in Blueprint, Abschnitt
  2d. Ob Abschnitt 2d deshalb geändert werden soll, ist eine Verfassungsfrage (Art. 8) und wird
  Ondo direkt vorgelegt, nicht von Claude aus eigener Vermutung entschieden — **Blueprint an
  dieser Stelle unverändert.**
- **Kein Codeaufwand, keine Prüfungen betroffen.** `pruefe.py`: ALLES SAUBER.
- **Regel 5 angewandt:** Abschnitt „Was Fassung 102 ändert" wortgleich nach
  `BACKLOG-ARCHIV.md` verschoben.
- **Beschlossen und nicht gebaut: eins** — **4** *(Status geändert: von Ondo freigegeben statt an die Beförderung gebunden — siehe oben. Punkt 77/78 bleiben „Idee" bis Ondo den Bau ausdrücklich freigibt.)*

---

## ⚠ Was Fassung 106 ändert (12.9., Ondos Entscheidungen zu Historie/Konto, Finanzen-Platzierung, Punkt 3 — `beta.html` v19.8.31)

**Anlass:** Ondo hat vier Punkte aus der letzten Übergabe entschieden: Historie gelöscht → Korrigieren-Feld für Konto/Tipico-Stand; KI-Zahlen sollen nicht unter „Finanzen" stehen, sondern unter „Mehr"; Punkt 3 (Such-Experiment) hat für ihn keinen Mehrwert mehr, dafür ein neuer Vorschlag „Trainingsraum"; die Kombi-Wette-Verknüpfung ist als offene Design-Frage an Claude delegiert.

- **🔴 Korrigieren-Feld gebaut (Auftrag Ondo: „Korrigieren-Feld bauen").** Unter Finanzen stehen jetzt zwei zusätzliche Zahlenfelder — „Eingezahlt gesamt korrigieren" und „Ausgezahlt gesamt korrigieren" — nach demselben Muster wie das bestehende Startbilanz-Feld: Zahl eintragen, `oninput` setzt `state.eingezahlt`/`state.ausgezahlt` direkt, sofort gespeichert. Der bestehende „+HINZUFÜGEN"-Weg (`depAdd()`/`wdAdd()`, addiert nur) bleibt unverändert bestehen, wird durch das neue Feld nur ergänzt, nicht ersetzt. Damit kann Ondo nach dem Löschen der Historie Konto- und Tipico-Stand wieder auf 0 (oder jeden anderen Wert) setzen.
- **🔴 KI-Module von „Finanzen" nach „Mehr" verschoben (Auftrag Ondo: „Wenn es geht dann unter mehr. Diese KI Daten gelten nur zu diesem Modul Wetten und noch für alles").** `kalibBlock()` (Kalibrierung), `beobachtungenBlock()` (Observation Layer, Backlog-Punkt 75 Teil 3) und `gepaartBlock()` (gepaarter Vergleich) standen bisher in `viewFinance()`, direkt unter Ondos persönlichen Zahlen. Jetzt in `viewMore()`, zwischen der Duell-Modus-Karte und der Modellwahl — bei den anderen KI-/Modelleinstellungen, nicht bei den Finanzen. Reine Verschiebung der Anzeige, keine Funktion und keine Rechnung geändert.
- **🔴 Backlog-Punkt 3 (Such-Experiment) auf Ondos Entscheidung überholt.** Ondo: „Wir würden weiterhin eine Endlose Schleife drehen." Im selben Zug neuer **Backlog-Punkt 77 „Trainingsraum"** angelegt (Status: Idee) — Ondos Ersatzvorschlag, Gehirne an bereits ausgewerteten oder vergangenen Spielen ohne Erinnerung/Websuche zu testen. Claudes eigener methodischer Einwand (Risiko, dass ein Modell vergangene Ergebnisse aus Trainingsdaten „kennt" statt blind vorherzusagen) ist beim Punkt vermerkt, noch nicht mit Ondo besprochen — daher hier festgehalten, nicht verschwiegen.
- **🔴 Neuer Backlog-Punkt 78 „Kombi-Wette mit mehreren Vorhersagen verbinden"** (Status: Idee, offene Design-Frage) — Ondo hat die Lösung ausdrücklich an Claude delegiert. Im Code belegt (Art. H): Weder der Foto-Weg (`fotoLesen()`) noch der manuelle Weg (`kiWahlBlock()`) verknüpfen eine Kombi-Wette mit mehr als einer Vorhersage; eine per Foto erfasste Kombi landet sogar komplett ausserhalb der Lernkette. Noch nicht entworfen — eine Lösung braucht zuerst eine Entscheidung über die Datenform (Liste von Vorhersage-IDs je Wette vs. Aufteilung in mehrere Teil-Einträge), das ist eine Architekturfrage, kein reines Anzeigefeld.
- **ChatGPT-Rückfrage vorbereitet** (Auftrag Ondo: „Zu allen oder einige diese Punkte könntest du eine Nachricht für Chatgpt verfassen und deine Meinung einholen") — Punkt 77 (Trainingsraum) und Punkt 78 (Kombi-Verknüpfung) sind die zwei Punkte mit offenem Architektur-Charakter; Nachricht Ondo direkt im Chat mitgegeben, nicht Teil dieses Dokuments.
- **Verifiziert:** `node --check` auf der aus `beta.html` herausgeschnittenen Script-Datei bestanden. Keine neue Rechenlogik (reine Anzeige-Verschiebung und Zahlenfelder nach bestehendem Muster) — deshalb keine neuen automatisierten Prüfungen, dafür Lesekontrolle gegen das bereits geprüfte Startbilanz-Vorbild.
- **3 neue Sprachschlüssel** (`depKorrLabel`, `wdKorrLabel`, `korrHinweis`) in DE/FR/EN.
- **`beta.html` jetzt v19.8.31.**
- **Regel 5 angewandt:** Abschnitt „Was Fassung 101 ändert" wortgleich nach `BACKLOG-ARCHIV.md` verschoben.
- **Beschlossen und nicht gebaut: eins** — **4** *(Punkt 3 ist auf Ondos Entscheidung überholt, zählt nicht mehr mit; 77 und 78 sind Ideen, nicht beschlossen.)*

---

## ⚠ Was Fassung 105 ändert (12.9., Berichtigung zu Fassung 104 — welcher Test wirklich gemacht wurde)

**Anlass:** Ondo hat richtiggestellt: Er hatte nicht nur die Seite neu geladen, sondern **die
Safari-App selbst vollständig geschlossen und neu geöffnet** — der stärkere der beiden
möglichen Tests. Berichtigt in `STAND.md`, mit Streichung und Vermerk statt Überschreiben.
Kein Codeaufwand. **Beschlossen und nicht gebaut: zwei** — **3, 4** *(unverändert.)*

---

## ⚠ Was Fassung 104 ändert (12.9., erste Bewährungsbeobachtung zum Speicherumstieg — reine Buchführung)

**Anlass:** Ondo hat den vorgeschlagenen Test gemacht — Eintrag im KI-Log geparkt/entparkt,
Browser wirklich neu geladen — und bestätigt: „Hat funktioniert". Kein Codeaufwand.
*(🔴 Berichtigt in Fassung 105: Es war nicht bloss ein Neuladen der Seite, sondern die
Safari-App selbst wurde vollständig geschlossen und neu geöffnet — der stärkere Test.)*

- **Backlog-Punkt 76 und `Ondo-Core-Architektur.md` (Fassung 0.8) um die erste
  Bewährungsbeobachtung ergänzt:** Bildschirmfotos zeigen 505 Vorhersagen, 6 Wetten weiterhin
  vollständig im Speicher und „Belegter Speicher: 2.740 KB von 39.332 MB (0 %)" — die vom
  Gerät selbst gemeldete Grenze, nicht geschätzt.
- **Ondo-Core-Architektur.md Abschnitt 4 (Memory) korrigiert:** Stand dort noch mit
  „Stufe 1 (jetzt): localStorage" — seit v19.8.30 ist das `IndexedDB`. Nachgetragen als
  Fassung 0.8, mit Verweis auf den echten Fehlschlag bei 2.726 KB, der zur Umstellung führte.
- **Ausdrücklich nicht behauptet:** dass der Speicherumstieg damit vollständig bewährt ist —
  ein einzelner Test ist keine abgeschlossene Bewährung (Stabilitätsregel, Art. 14,
  Fehlerart C8). Vorschlag an Ondo, bei Gelegenheit: auch ein echtes Beenden und Neustarten
  der Safari-App selbst beobachten, nicht nur ein Neuladen der Seite — strengerer Test.
- **Verifiziert:** `pruefe.py`: ALLES SAUBER. Kein Codeaufwand, `beta.html` bleibt v19.8.30,
  keine neuen Sprachschlüssel, kein Schnitt in der Messreihe.
- **Beschlossen und nicht gebaut: zwei** — **3, 4** *(unverändert.)*

---

## 🔴 DIE FÜNF BESCHLÜSSE DER GRUNDSATZBESPRECHUNG (14.8.)

**Ondos Rahmen:** Solange diese Probleme nicht gelöst sind, kommt das Projekt nicht vernünftig weiter. Regeln dürfen die Arbeit nicht erschweren; brauchbare Lösungen sollen nicht ausgeschlossen werden, wenn sie nichts kaputt machen.

---

**46. Claude Code auf dem Surface Go** · *Idee 9./10.7., Claude (als Punkt 8) · neu vorgelegt 14.8. · beschlossen 14.8., Ondo · eingerichtet 16.8., Chat 18* · **Status: GEBAUT 16.8. — erstes Hochladen geglückt, Bewährung steht aus**

> **🔴 ZUSAMMENGELEGT am 14.8. abends (Chat 16).** Dies ist derselbe Vorschlag wie **Punkt 8** („Claude Code auf dem Windows-Tablet über das Pro-Abo", 9./10.7.). Chat 15 hat ihn als neuen Punkt aufgenommen, ohne den alten zu finden. **Punkt 8 verweist ab jetzt hierher; dieser Punkt führt ihn weiter.** Fund von Chat 16, bestätigt von Chat 15.

Ondos Gerät: Surface Go, Windows 10 Home 22H2, 64 Bit, 8 GB RAM, 110 GB frei, Pentium 4415Y.

→ **Es passt:** Unterstützt sind Windows 10 oder neuer, mindestens 4 GB RAM, unter 1 GB Platte. Der native Installer braucht **kein** Node.js. Nötig ist ein Claude-Konto ab Pro. Der schwache Prozessor stört wenig, weil die Rechenarbeit auf Anthropics Servern läuft.
→ **Was sich ändert:** Claude Code sitzt im Ordner mit den Projektdateien, liest eine Datei **erst wenn es sie braucht** und nur die nötige Stelle, ändert direkt, führt `pruefe.py` selbst aus und schickt die Änderung selbst zu GitHub. **Ondo lädt dann nichts mehr von Hand hoch.** Das Speicherproblem verschwindet weitgehend, weil nicht mehr alles vorher in den Chat geladen werden muss.
→ **Ehrlich zu den Hürden:** Es ist ein Terminalfenster, kein Fenster mit Knöpfen. Die Einrichtung ist einmalig, aber eine Hürde. Claude sieht das Tablet nicht und kann nur eine Schritt-für-Schritt-Anleitung liefern und bei Fehlern helfen.
→ **Zur Alternative Claude Desktop mit Cowork:** ausdrücklich für Leute ohne Programmierkenntnisse, aber für angenehmes Arbeiten werden 16 GB RAM als Untergrenze genannt. Auf 8 GB vermutlich zäh. **Claude Code ist der leichtere Weg.**
→ **Kosten:** kein zusätzliches Geld bei vorhandenem Pro-Konto. Ein Abend Einrichtung. **Risiko für das Projekt: keines** — das Repo bleibt wie es ist, und wenn es nicht klappt, geht es weiter wie bisher.
→ **🔴 Kostenangabe ergänzt am 14.8. abends, sie fehlte:** **Die Arbeit zehrt am Wochen-Limit des Pro-Abos.** Das steht seit dem 9./10. Juli in Punkt 8 und ist bei der Neuaufnahme untergegangen. „Kein zusätzliches Geld" ist damit richtig, aber unvollständig — ein Nutzungslimit ist nach Arbeitsregel G ausdrücklich mitzunennen. Zweiter Haken aus Punkt 8, ebenfalls weiterhin gültig: Es läuft nur, wenn Ondo es am Tablet anstösst.

> **🔴 BERICHTIGT am 16.8.2026 (Chat 18), nach Abruf der offiziellen Anleitung.** Drei Angaben oben stimmen nicht. **Erstens:** „Es ist ein Terminalfenster, kein Fenster mit Knöpfen" — es gibt eine Desktop-App, die Claude Code mit Oberfläche anbietet, und genau über sie ist eingerichtet worden. **Zweitens:** Die 16 GB als Untergrenze für die Desktop-App stehen in der Anleitung nicht; auf 8 GB läuft sie nach Ondos Beobachtung normal. **Drittens:** „unter 1 GB Platte" ist nirgends belegt, die Anleitung nennt keine Zahl. **Belegt geblieben ist:** Windows 10 ab 1809, mindestens 4 GB RAM, x64, kein Node.js beim nativen Weg, Konto ab Pro. **Zusätzlich, oben nicht erwähnt:** Git für Windows ist freiwillig, wurde hier aber installiert.

→ **Ergebnis 16.8.2026 (Chat 18):** Auf dem Tablet stehen die Desktop-App mit dem Bereich „Code", Git 2.55.0, Python 3.14.7 und der Ordner `Claude-Ondo-Control-Repo` unter Dokumente, frisch von GitHub geholt und mit dem Verzeichnis verbunden. Der maschinelle Abgleich der Handkopie gegen das Verzeichnis fand bei allen vierzehn gemeinsamen Dateien keinen Unterschied.
→ **Zwei Auflagen, die dauerhaft gelten:** Die Sicherungen mit `apiKey`, `geminiKey` und `pin` und die Übergabemappen liegen außerhalb des Repo-Ordners und werden dort nie geöffnet. `pruefe.py` liegt in einem eigenen Ordner daneben, damit es nicht ins Verzeichnis gerät.
→ **Zwei offene Stellen (Art. 11):** Läuft `pruefe.py` aus einem anderen Ordner, meldet sein Abschnitt 2 die eigene Datei als fehlend. Und der Repo-Ordner liegt unter OneDrive — ob OneDrive beim Hochladen dazwischenfunkt, ist ungeprüft.
→ **🔴 Beobachtung 21.8. (Chat 20, Cloud-Sitzung):** `pruefe.py` liegt nicht im Repo — die Auflage oben hält es bewusst daneben. **Eine Cloud-Sitzung findet es deshalb nicht und kann Arbeitsregel M nicht von sich aus erfüllen.** Belegt am 21.8.: Beim Durchgang um 05:24 Uhr (Commit `dabf9bb`) lief es nicht; für die Lieferung um 05:50 Uhr lief es erst, nachdem Ondo es von Hand in die Sitzung hochgeladen hatte — also genau die Handarbeit, die Punkt 53 beenden soll. Es meldet dabei sich selbst als fehlend (Abschnitt 2). **Was der ausgefallene Lauf gekostet hat, steht bei Punkt 52** (seit 30.8.2026 in `BACKLOG-ARCHIV.md`). **ENTSCHIEDEN am 21.8.2026 (Ondo): `pruefe.py` wird ins Repo aufgenommen.** Der Inhalt wurde vorher vollständig durchgesehen; er enthält nichts, was nicht öffentlich sein darf. Die Auflage vom 16.8. ist gegenstandslos, siehe `STAND.md`.

> **🔴 BERICHTIGT am 16.8.2026, nachmittags (Chat 19).** Hier stand bis heute in der Statuszeile: „GEBAUT 16.8. — Bewährung steht aus, erstes Hochladen noch nicht erfolgt." **Das erste Hochladen hat inzwischen stattgefunden und funktioniert** — laut Ondo sind Repo, Tablet und Projektkopien seither auf demselben Stand. **Ursache des Fehlers (Fehlerart C4):** Chat 18 hatte den Satz zum offenen Hochladen geschrieben, bevor Ondo hochgeladen hat, und den späteren Erfolg in der Abnahme daneben vermerkt, statt die ältere Aussage im selben Durchgang zu berichtigen. **Weiterhin unverändert: Punkt 46 gilt nicht als bewährt** — ein geglückter erster Versuch ist kein Nachweis von Zuverlässigkeit.

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

→ **Geklärt (16.8., anhand der offiziellen Dokumentation, nicht aus dem Gedächtnis):** Der Name steht fest — `CLAUDE.md`, nicht `AGENTS.md`. Ort: im Repo, unter `./CLAUDE.md`, passend zu Punkt 45 (ein Ort je Tatsache, mitversioniert). Umfang: unter 200 Zeilen empfohlen — die vier Pflichtdokumente selbst gehören nicht per `@Import` hinein, das würde bei jedem Sitzungsstart alle rund 120 KB neu laden. Stattdessen eine feste Anweisung, die vier Dokumente vor inhaltlicher Arbeit vollständig zu lesen.
→ **Beschlossen (Ondo, 16.8.), zwei Bausteine:** (1) Claude Code liest die vier Pflichtdokumente auf Anweisung vollständig und erzeugt oder erneuert `CLAUDE.md` daraus. (2) Ein Auslöser bei Sitzungsstart prüft, ob sich die vier Dokumente seit der letzten Erzeugung geändert haben, und erinnert nur dann an eine Erneuerung.
→ **Grenze, die dabei bleibt:** `CLAUDE.md` ist Kontext, keine erzwungene Einstellung — keine Garantie, dass Claude Code die Anweisung befolgt, ähnlich wie eine Regel im Prompt sich anders verhält als eine Regel im Code. Eine dem Kontrollexamen entsprechende Prüfung gibt es dafür nicht.
→ **Hängt zusammen mit Punkt 55** (seit 30.8.2026 in `BACKLOG-ARCHIV.md`)**.** Ohne diese Datei ist die Arbeitsteilung nicht sicher zu betreiben. Gebaut wird beides auf dem Tablet oder in einer Cloud-Sitzung (Punkt 53), nicht im Chat-Bereich.
→ **Kosten:** keine ausser Zeit, und dem Kontext, den das Lesen der vier Dokumente bei jeder betroffenen Sitzung kostet.
→ **🔴 GEBAUT am 21.8.2026 (Chat 21, Cloud-Sitzung), beide Bausteine:** (1) `./CLAUDE.md` liegt im Repo, unter 200 Zeilen, aus den vier vollständig gelesenen Pflichtdokumenten geschrieben. Es wiederholt keine Kennzahl und keine Liste, sondern nennt für jede den Fundort (Punkt 45). (2) Der Auslöser bei Sitzungsstart ist ein Hook in `.claude/settings.json`, der `.claude/hooks/claude_md_frisch.py` aufruft. Das Skript vergleicht den Git-Blob-Hash der vier Dokumente mit der Tabelle am Ende von `CLAUDE.md` und **erinnert nur** an eine Erneuerung; es erneuert nichts von selbst und bricht nichts ab.
→ **Bewährung steht aus, und die Grenze von oben gilt unverändert:** `CLAUDE.md` ist Kontext, keine erzwungene Einstellung. Zusätzlich muss eine Sitzung den Hook aus dem Repo einmal bestätigen — geschieht das nicht, läuft die Erinnerung nicht.
→ **🔴 Erneuert am 4.9.2026 (Auftrag Ondo, Teil 3 eines grösseren Auftrags), aus den vier
  vollständig gelesenen Pflichtdokumenten (Fassung 79) neu geschrieben, nicht aus dem
  Gedächtnis ergänzt — wie es die Datei selbst verlangt.** Anlass: Die vier Dokumente sind
  seit dem letzten Bau mehrfach neu gefasst worden, `CLAUDE.md` war mit 209 Zeilen bereits
  über der ursprünglich empfohlenen Grenze von unter 200. Eine reine Auffrischung von Zahlen
  hätte nicht genügt — zwei Abschnitte wurden gestrafft, ohne Inhalt zu verlieren, den eine
  neue Sitzung wirklich braucht: die Geschichte der inzwischen ersetzten
  Fassungszahl-Prüfung (steht bereits vollständig in Blueprint.md, Arbeitsregel M) und die
  Liste der bekannten Einschränkungen, dort um den neuen Fund aus Backlog-Punkt 73 ergänzt.
  Struktur, Reihenfolge der acht Abschnitte und das Prinzip „Fundort nennen, keine Kennzahl
  wiederholen" (Punkt 45) bleiben wie beim ersten Bau. Neue Zeilenzahl: 185. Die
  Hash-Tabelle am Ende ist auf den tatsächlich in dieser Lieferung committeten Stand von
  `STAND.md`, `Ondo-Control-Backlog.md` und `Blueprint.md` berechnet (`git hash-object`),
  nicht nur eingetragen.

---

**53. Erzeugte Dateien ohne Handarbeit an den richtigen Ort** · *Vorgabe 16.8., Ondo · zurückgestellt 27.8.2026, Vorschlag Claude* · **Status: ZURÜCKGESTELLT 27.8.2026 — nicht abgelehnt**

**Ondos Vorgabe im Wortlaut:** Er will nicht mehr von Hand hochladen. Erzeugte Dateien sollen auf dem Tablet in den richtigen Ordnern landen — **im Repo und im Projektordner der App**. Er arbeitet parallel am Handy. Ziel ist, das Tablet zu Hause laufen zu lassen. **Es kann aber aus sein**, etwa nach einem Windows-Update. Er will mit **einem Klick** entscheiden, wohin gespeichert wird — Handy, Tablet, Repo, Projektordner — und welche Dateien. **Einmal eingestellt, danach immer automatisch, wenn er es auslöst.**

→ **Was belegt ist:** Der Projektordner der App liegt bei Anthropic, nicht auf dem Tablet. Claude Code schreibt nur auf die Platte des Geräts.
→ **🔴 Live bewiesen am 20.8.2026, 06:13–06:20 Uhr, durch Ondo am Handy, Tablet nachweislich ausgeschaltet:** Über „Code → + Neue Sitzung" lässt sich eine **Cloud-Sitzung** starten, die das Repo auf Anthropics eigener Rechenanlage klont, ändert und zu GitHub zurückschiebt — **ohne jedes eigene Gerät**. Testauftrag: eine Datumszeile an `README.md` anhängen. Ergebnis: Commit `a1324a6` auf Branch `claude/readme-datum-hinzufuegen-bis926`, auf GitHub sichtbar, `main` unberührt. Kein Handupload nötig. **Damit ist Ondos Frage „was, wenn das Tablet aus ist" beantwortet: der Repo-Weg funktioniert trotzdem.**
→ **Zu unterscheiden, und das war der entscheidende Fund:** Die bereits vorhandene Sitzung „Ondo Control: Code 1" trägt die Kennzeichnung **„Fernsteuerung"** und ist an das eingeschaltete Tablet gebunden. **Dispatch ebenfalls** — dessen Meldung „Desktop nicht erreichbar" am 16.8. war kein Fehler, sondern die vorgesehene Wirkung. **Nur die Cloud-Sitzung ist geräteunabhängig.** Fernsteuerung und Dispatch scheiden für Ondos Vorgabe aus.
→ **Nebenbefund zu den Betriebsarten:** „Plan" legt vor der Ausführung einen Plan vor und wartet auf Genehmigung — passend zu Artikel 8 und deshalb als Standard empfohlen. „Änderungen akzeptieren" überspringt die Rückfrage. „Auto" überlässt Claude Code auch die Frage, wofür überhaupt eine Erlaubnis nötig ist.
→ **Was NICHT bekannt ist (Art. 11), Ondos Fragen vom 20.8. — der Kern des Punktes ist damit NICHT erledigt:** ob Claude Code die **Projektdokumente selbst fortschreiben** kann (Buchführung statt nur Codeänderung) · ob es einen **internen Sammelspeicher** gibt, in dem anstehende Änderungen bis zum Nachtragen liegen (berührt Punkt 58) · ob eine Aktualisierung **auf Befehl UND zu fester Uhrzeit** einstellbar ist, etwa abends · ob das **im Hintergrund** läuft · ob eine am Handy begonnene Sitzung **am Tablet fortgesetzt** werden kann · ob sich Dateien **parallel** ablegen lassen (Tablet aus: nur Repo; Tablet an: Repo und Tablet) · **wann der Speicher einer Code-Sitzung voll ist**, wann ihr Inhalt gelöscht und eine neue Sitzung begonnen werden sollte, und ob Claude Code das von selbst vorschlägt.
→ **Auflage für den nächsten Chat:** Diese Fragen sind **durch Versuch in einer Cloud-Sitzung** zu klären, nicht durch Nachschlagen und nicht durch Vermuten — sie kosten dort weder Chat-Speicher noch Handarbeit. Der Weg über die Dokumentation bleibt zweite Wahl.
→ **Der Projektordner der App bleibt ungelöst** und ist es vermutlich auch: Ein maschineller Weg dorthin ist nicht vorgesehen (geprüft 16.8.). Er verliert aber an Gewicht, weil Chat über die Raw-Links selbst lesen kann (siehe Fassung 30) und das Repo nun ohne Tablet beschreibbar ist.
→ **Kosten:** Cloud-Sitzungen zehren am selben Wochenlimit wie der Chat; kein zusätzliches Geld, kein zusätzliches Abo. Pro genügt.

> **Live geprüft am 21.8.2026 durch Cloud-Sitzung (Chat 20), Commit `dabf9bb`**
>
> - **Frage 1, Projektdokumente selbst fortschreiben: JA, bewiesen.** Drei Berichtigungen in `STAND.md` und `Blueprint.md` wurden von einer Cloud-Sitzung eingetragen, committet und auf `main` gepusht, ohne Handupload durch Ondo. **Bewährt ist das damit nicht** (Stabilitätsregel).
> - **Frage 2, interner Sammelspeicher: NEIN, bewiesen.** Eine Plandatei lag im Arbeitsverzeichnis der Sitzung, nicht im Repo, und verschwindet mit der Sitzung.
> - **Frage 7, Sitzungsspeicher:** Claude Code meldet ein Volllaufen **nicht von selbst** und sieht keine Anzeige dazu. Bei Überlauf wird ältere Konversation zusammengefasst, ältere Einzelheiten werden ungenau. **Die Übergaberegel ist in diesem Bereich damit nicht zuverlässig einhaltbar.**
> - **Fragen 3 (feste Uhrzeit), 4 (Hintergrundlauf) und 5 (Sitzung am anderen Gerät fortsetzen): UNGEPRÜFT.** Claude Code hat sie aus Kenntnis der Umgebung beantwortet, nicht durch Versuch. **Ondos Auflage verlangt Versuch. Sie bleiben offen.**
> - **Frage 6, paralleles Ablegen: NICHT GESTELLT.** Claude im Chat-Bereich hat sie beim Schreiben der Versuchsaufträge weggelassen, sieben Fragen zu sechs zusammengezogen. **Fehlerart C5**, von Claude selbst gemeldet. Bleibt offen.
> - **Fünfter Fund, nachgetragen am 21.8. (Chat 21):** Ein an eine Cloud-Sitzung **angehängtes** `pruefe.py` kam beim ersten Versuch nicht im Arbeitsverzeichnis an; über einen **Dateiverweis** hat es funktioniert. **Ein gescheiterter Versuch beweist keine Unmöglichkeit (Arbeitsregel D)** — ob Anhänge grundsätzlich ankommen, ist ungeprüft. Für `pruefe.py` selbst ist der Fund gegenstandslos, seit es im Repo liegt.
> - **Frage 4 (Hintergrundlauf), BESTÄTIGT am 21.8.2026, Chat 21, durch Versuch.** Zwei echte Commits (`31e2ef0`, `0a4fa33`), 321 Sekunden auseinander, während die App auf dem iPhone vollständig geschlossen war. **Einschränkung:** echtes Warten im Vordergrund war in der Umgebung gesperrt; der Befehl lief als Hintergrundaufgabe, die Sitzung wurde danach automatisch geweckt. Geprüft ist ein Zeitraum von rund fünf Minuten, nicht länger.
> - **Frage 5 (Sitzungsfortsetzung Handy zu Tablet), BESTÄTIGT am 21.8.2026, Chat 21, durch Versuch.** Dieselbe Cloud-Sitzung war auf dem Tablet im Code-Bereich mit vollem Verlauf auffindbar und ansprechbar, nachdem sie auf dem iPhone gestartet worden war.
> - **Frage 3 (feste Uhrzeit / auf Befehl), VOLLSTÄNDIG BESTÄTIGT, Chat 21, durch Versuch.** Zeitplan-Teil bestätigt am 22.8.2026, 04:23 MESZ: Routine mit Zeitplan-Auslöser feuerte punktgenau, Commit-Zeitstempel 02:24:07 UTC in `TEST-ROUTINE.md`, Zweig `test/routine-22-8`. **API-Teil ebenfalls bestätigt, 22.8.2026, 11:12 Uhr:** Eine externe POST-Anfrage an die von der App gezeigte Webhook-Adresse, mit dem angezeigten Token als `Authorization: Bearer`-Header und dem Pflicht-Header `anthropic-version`, hat die Routine ausgelöst (HTTP 200) und eine neue Sitzung gestartet (`session_011hSavXeH5C4rSskMsmg6Ae`). Diese Sitzung hat `test/routine-api-22-8` angelegt, committet (`2b8c28a`, 09:13:21 UTC) und gepusht. Zweifach bestätigt - eigene Prüfung Ondos und eigene Prüfung der Chat-Sitzung, beide Ergebnisse deckungsgleich.
> - **Frage 6 (paralleles Ablegen), BEANTWORTET am 22.8.2026, Chat 21, durch echte Werkzeug-Bestandsaufnahme.** Eine Cloud-Sitzung hat ihre komplette Werkzeugliste durchsucht, nicht nur aus dem Gedächtnis geantwortet. Ergebnis: **Kein Werkzeug erreicht die klassische Projekt-Wissensablage von claude.ai** (die dieses Projekt als Kontext nutzt). Zwei ähnlich klingende, aber andere Werkzeuge existieren - `Artifact` (veröffentlicht HTML-Seiten und Dateien als eigenständige "Artifacts", unabhängig vom Repo) und `DesignSync` (schreibt in `claude.ai/design`-Projekte) - beide betreffen andere claude.ai-Bereiche, nicht die Projekt-Wissensablage. **Antwort: Nein**, paralleles Ablegen in Repo und Projektordner ist mit den vorhandenen Werkzeugen nicht möglich, unabhängig vom Gerät.
> - **Ergänzung zu Frage 6, 23.8.2026, Chat 21, dreifach durch Versuch bestätigt.** Cowork besitzt, anders als Code, tatsächlich ein Werkzeug für die Projekt-Wissensablage (`Projects`: lesen, schreiben, ersetzen, löschen). Die Synchronisierung GitHub -> Ablage läuft aber nachweislich NICHT automatisch bei einem Push - dreifach geprüft: (1) Testzeile in `README.md` committet, nach 13 Minuten reinem Warten nicht angekommen; (2) Anthropics eigene Dokumentation und ein offener Fehlerbericht bestätigen, dass automatisches Sync-bei-Push derzeit fehlt und nur ein manueller "Sync now"-Weg existiert; (3) zweiter, sauberer Test mit einer klar unterscheidbaren Zeile (`Sync-Test-2`), über 20 Minuten reines Warten ohne jede Handlung - ebenfalls nicht angekommen. **Ein funktionierender manueller Weg wurde gefunden (Ondos eigener Fund):** Die betroffene Datei zunächst aus der Kontext-Liste des Projekts entfernen, dann über den Dialog "Inhalte von GitHub hinzufügen" gezielt neu auswählen und hinzufügen - das zieht nachweislich den aktuellen Stand. Blosses "Aktualisieren" auf eine bereits vorhandene Datei tut das NICHT. Eine Rückrichtung (Ablage -> GitHub) existiert ohnehin nicht - `project_write` hätte keinen Weg zurück ins Repo, mangels jedem Git/GitHub-Schreibwerkzeug bei Cowork.
> - **Fund, unerforscht (23.8.2026, Chat 21):** Im Projekt "Ondo Control" selbst gibt es unter "Kontext" einen eigenen Abschnitt "Geplant" - "Richte wiederkehrende Aufgaben für dieses Projekt ein." Vermutlich eine projektgebundene Variante der Routinen/Cowork-Aufgaben, noch nicht geprüft. Für ein späteres Gespräch vorgemerkt.
> - **Fund (22.8.2026, Chat 21):** Auf dem iPhone zeigt die native Claude-App keinen "Routinen"-Menüpunkt. Über den mobilen Browser (`claude.ai`) ist derselbe Bereich erreichbar wie auf dem Tablet, mit identischer Auswahl der Auslöser-Arten. Die Funktion ist gerätunabhängig, nur in der nativen iPhone-App nicht sichtbar.
> - **Fund (22.8.2026, Chat 21):** Das sitzungseigene Werkzeug `fire_trigger` funktioniert nur für Routinen, die eine Sitzung SELBST angelegt hat (`created_via: agent`). Für Routinen, die über die App angelegt wurden (`created_via: http_api`), meldet es einen Berechtigungsfehler. Für solche Routinen bleibt nur der externe Weg über die angezeigte Webhook-Adresse und den Token.
> - **Fund (22.8.2026, Chat 21), für später (Punkt 58):** Eine Sitzung besitzt selbst die Werkzeuge `create_trigger` und `create_session` - sie könnte im Prinzip eigene Routinen anlegen und diese später über `fire_trigger` selbst auslösen. Nicht getestet, nur vermerkt für das zurückgestellte Gespräch über eine Routine als Sammelspeicher.
> - **Fund (22.8.2026, Chat 21):** Ein Raw-Link mit einer Commit-Kennung statt `main` (`.../<commit-hash>/Datei.md`) umgeht zuverlässig eine Zwischenspeicherung, die den Chat sonst bei wiederholtem Abruf desselben Pfades auf eine alte Fassung festhält. Wichtig für jede künftige Prüfung durch den Chat selbst.
> - **Fund (21.8.2026, Chat 21):** Eine Cloud-Sitzung darf auf GitHub Zweige anlegen, aber nicht löschen. Fünf Löschversuche scheiterten mit HTTP 403; die Umgebungsbeschreibung der Sitzung nennt das ausdrücklich eine Rechte-Grenze, keine Störung. Ein von einer Sitzung angelegter Zweig muss von Hand entfernt werden (github.com, „Branches", Mülleimer-Symbol) oder bleibt stehen.
> - **Fund (22.8.2026, Chat 21):** Beim Anlegen einer neuen Routine kann der Einrichtungsassistent Konnektoren aus früheren Routinen übernehmen, auch wenn sie zur neuen Aufgabe nicht passen. Die App warnt selbst: angehängte Konnektoren dürfen während der Ausführung ohne Rückfrage benutzt werden, einschliesslich Schreibzugriff. Vor jeder neuen Routine: Reiter „Konnektoren" prüfen, nicht benötigte entfernen.
> - **Neuer, zuverlässiger Lesezugang gefunden, 23.8.2026, zweifach durch Versuch bestätigt.** Die Adressform `github.com/OWNER/REPO/blob/main/DATEI` zeigt zuverlässig den aktuellen `main`-Stand, auch bei wiederholtem Abruf im selben Chat — anders als `raw.githubusercontent.com`, das nach dem ersten Abruf hängen bleibt. Für Dateien ausserhalb einer festen Liste: zuerst die Repo-Hauptseite (`github.com/OWNER/REPO`) abrufen, von dort den passenden Datei-Link nehmen.
> - **Fund 23.8.2026:** Die automatische Projekt-Suche (`project_knowledge_search`) liefert ebenfalls KEINEN live-aktuellen Stand — gegen einen bekannten frischen Commit geprüft, zeigte veralteten Inhalt. Dieselbe Einschränkung wie beim manuellen Ablage-Sync.
> - **Technischer Fund, 23.8.2026:** Eine über die GitHub-Verbindung synchronisierte Datei ist für eine geplante Aufgabe nur über die Projekt-Suche auffindbar, nicht über deren Schreib-/Lesewerkzeuge direkt ansprechbar (`project_read`/`project_write` melden „kein Dokument").
> - **Fund 23.8.2026:** Eine geplante Aufgabe kann eine bestehende, synchronisierte Datei NICHT überschreiben — ein Schreibversuch legt zwangsläufig eine neue, separate Datei an einem anderen Pfad an.
> - **Fund 23.8.2026:** Bei drei identischen Testläufen derselben Aufgabe, gleicher Auftragstext, drei unterschiedliche Ergebnisse (einmal neue Datei angelegt, zweimal mit unterschiedlicher Begründung abgebrochen). Das Verhalten ist nicht stabil.
> - **Fund 23.8.2026:** Der „Geplant"-Dialog im Projekt: Felder Name, Anweisungen, Berechtigungen (Manuell genehmigen / Automatisch genehmigen / Alle Genehmigungen überspringen), Modell (mehrere einzeln wählbar), Häufigkeit (Handbuch/Stündlich/Täglich/Wochentage/Wöchentlich). Kein sichtbarer Konnektoren-Reiter, anders als bei Routinen.
> - **Fund 23.8.2026:** Websuche findet das Repo nicht (vier verschiedene Anfragen erfolglos) — offenbar nicht ausreichend indexiert. Kein GitHub-Konnektor im Werkzeug-Verzeichnis gefunden (drei Suchanfragen). Beide Wege sind damit als Sackgasse dokumentiert.
> - **Fund 23.8.2026:** Das Feld „Anweisungen" des Projekts trägt seit heute die neuen Github-blob-Adressen zu den fünf Kern-Dokumenten, dazu die Anleitung, über die Repo-Hauptseite jede andere Datei zu finden. Das Feld sagt nur WIE gelesen wird, nicht OB oder WANN — das regelt weiterhin die jeweilige Übergabe oder Einzelnachricht.
> - **🔴 BERICHTIGT, noch in derselben Nacht (23./24.8.2026).** Der Weg über „Anweisungen" oben ist überholt: Der dort eingetragene Lesezugang über `github.com/.../blob/...` wurde denselben Abend mehrfach widerlegt — er lieferte veraltete Inhalte, auch bestätigt mit einem selbst erzeugten, nie zuvor benutzten Zeitanhängsel. **Das Feld „Anweisungen" ist seither wieder leer.** Der Weg zu den Dokumenten steht seither wieder in der jeweiligen Übergabe oder Einzelnachricht selbst, mit Commit-Kennung statt `main`.
> - **Status von Punkt 53, aktualisiert am 22.8.2026:** Alle sieben Fragen beantwortet - sechs bestätigt (1, 2, 3, 4, 5, 7), eine mit dem Ergebnis Nein (6). Die Untersuchung ist damit abgeschlossen. Status des Punktes bleibt "Idee" - der ursprüngliche Wunsch (Ein-Klick-Mehrfachablage an mehrere Orte) ist damit noch nicht gebaut, nur die technischen Grundlagen sind jetzt bekannt.

→ **🔴 ZURÜCKGESTELLT am 27.8.2026 (Vorschlag Claude, wie Punkt 0b/38 — nicht abgelehnt):** Das eigentliche Problem hinter Ondos Vorgabe vom 16.8. — ohne eigenes Gerät ins Repo schreiben — ist durch Cloud-/Code-Sitzungen gelöst und wird in dieser Sitzung selbst vorgeführt. Offen bleibt nur noch der ursprüngliche Ein-Klick-Mehrfachablage-Wunsch (Repo **und** Projektordner der App gleichzeitig); der Projektordner-Weg ist weiterhin technisch nicht erreichbar (unverändert seit der Untersuchung). Jederzeit neu aufgreifbar, falls der Mehrfachablage-Wunsch wieder wichtig wird.
→ **🔴 Zwei verwaiste Branches geklärt, 30.8.2026 (Auftrag Ondo):** `claude/backlog-stand-update-wgp612` (Spitze `2ebce39`) und `claude/ergebnisse-pruefen-28-8-mnq1au` (Spitze `f651e18`) waren unerklärt stehengeblieben. **Beleg statt Vermutung:** `git merge-base --is-ancestor <branch> main` bestätigt für beide **JA** — jeder Commit dieser Branches ist bereits Vorfahre von `main`, `main..branch` zeigt null eigene Commits. Beide sind also vollständig in `main` enthalten, keine fehlende Arbeit, kein Konflikt, kein Zusammenführen nötig. **Löschung versucht, wie erwartet blockiert:** `git push origin --delete claude/backlog-stand-update-wgp612` scheitert mit **HTTP 403** — dieselbe, bereits am 21.8.2026 (oben) dokumentierte Rechte-Grenze. Kein `delete_branch`-Werkzeug im GitHub-Werkzeugsatz dieser Sitzung vorhanden, keine zweite Anfrage an dieselbe, bereits belegte Grenze gestellt (Arbeitsregel D gilt hier andersherum: die Grenze ist bereits zweifach belegt, ein dritter Versuch würde nichts Neues zeigen). **Beide Branches bleiben stehen, bis Ondo sie von Hand löscht** (github.com, „Branches", Mülleimer-Symbol) — inhaltlich unbedenklich, da vollständig in `main` enthalten.

---

**57. Weitere Werkzeuge — Connectors und anderes** · *Frage 16.8., Ondo* · **Status: Idee — ungeprüft**

Ondos Frage: Es gibt Chat und Code. Gibt es weitere Möglichkeiten, die Arbeit zu erleichtern?

→ **Claude weiss es nicht.** Nichts davon ist geprüft.
→ **Nachrangig gegenüber 53 bis 56**, weil dort konkrete Vorgaben vorliegen und hier nur eine offene Frage.
→ **Kosten:** unbekannt.

---

**61. Übergaberegel für den Code-Bereich abgeschwächt** · *Vorschlag Claude, 27.8.2026, auf Ondos Rückfrage zum Arbeitsprozess* · **Status: EINGEFÜHRT 27.8.2026 — als Einzelfall, noch nicht bewährt**

Die Übergaberegel (`STAND.md`) verlangt ein Kontrollexamen mit Fangfragen und Antwortschlüssel, weil eine neue Chat-Sitzung nicht selbst nachprüfen kann, ob sie die Pflichtdokumente wirklich gelesen hat. Eine Sitzung im Code-Bereich liest die Dateien direkt aus dem Repository und kann das Lesen nicht vortäuschen — das Kontrollexamen prüft dort nichts, was nicht ohnehin nachprüfbar ist.

→ **Umgesetzt:** `STAND.md` bekommt einen eigenen, kurzen Absatz „Für den Code-Bereich" — dort genügt vollständiges Lesen der vier Pflichtdokumente plus Übernahme der offenen Backlog-Punkte, kein Antwortschlüssel.
→ **Erster Testfall:** Ein für „Chat 25" vorbereiteter Übergabetext (ursprünglich Chat 23 → 24, von Ondo als Datei geliefert) war beim Eintreffen bereits durch diese Sitzung überholt (Punkt 47 und 59 bereits erledigt, beide seit 30.8.2026 in `BACKLOG-ARCHIV.md`). Aus dem tatsächlichen Endstand dieser Sitzung wird stattdessen ein neuer, aktueller Text erstellt — ausserhalb des Repos, wie jede ausgefüllte Übergabemappe.
→ **Stabilitätsregel:** Gilt als Einzelfall, nicht sofort als Dauerregel. Ob es das wird, entscheidet sich nach diesem ersten Testfall.
→ **Kosten:** keine.

---

**62. Zusammenarbeit mit Mistral als beaufsichtigtem Mitarbeiter** · *Eingerichtet vor dem 24.8.2026, nachgetragen 27.8.2026 (Lücke gefunden über einen gelieferten Übergabetext)* · **Status: LÄUFT — erster Backlog-Eintrag, nachträglich**

Ein zweiter Arbeits-Branch `mistral` existiert seit vor dem 24.8.2026 (aktuell fünf Commits vor `main`, zuletzt `b43c38b`), ausschliesslich für eine zweite, beaufsichtigte KI (Mistral) im Code-Modus. `main` ist davon unberührt. Die Dateien `MISTRAL.md` (Regeln für Mistral, von Claude gepflegt), `MISTRAL-AUFGABEN.md` (Aufgabenliste, von Claude gepflegt) und `MISTRAL-ERLEDIGT.md` (Ergebnisprotokoll, von Mistral gepflegt) liegen nur auf diesem Branch. Mistral arbeitet ausschliesslich dort, nie auf `main`, ohne eigene Entscheidung über die nächste Aufgabe — die kommt von Claude. Punkt 47 (Selbsttest für `beta.html`, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) wurde über diesen Weg gebaut und von Claude gegengeprüft.

→ **🔴 Lücke, die zu diesem Nachtrag geführt hat:** Trotz mehrerer Aufgaben und Tage Zusammenarbeit hatte Mistral bis heute **keinen eigenen Backlog-Punkt** — nur auf dem `mistral`-Branch in `MISTRAL.md` dokumentiert, gegen den Geist von Arbeitsregel F. Gefunden über einen von Ondo gelieferten, sonst veralteten Übergabetext (Chat 23 → 24).
→ **🔴 Dabei mit entdeckt, festgehalten als Warnung:** Eine frühere Testsitzung („Chat 24") hat `CLAUDE.md` nachweislich korrekt abgerufen, danach aber einen falschen Fund behauptet — angeblich stehe dort `reset --hard` statt `merge --ff-only`. Das existiert nicht in der Datei, zweifach durch eigenen Abruf widerlegt. Richtig gelesen, falsch wiedergegeben — keine der acht bekannten Fehlerarten, sondern ein Gedächtnisfehler beim Zusammenfassen. Kein Codeänderung, nur eine Warnung für künftige Zusammenfassungen (Arbeitsregel H: belegen statt herleiten).
→ **Git-Regel für den Branch:** Für `main` gilt `--ff-only` beim Holen. Für `mistral` gilt das NICHT — dort ein normaler Merge, weil der Branch eigene Commits trägt, die `main` nicht hat.
→ **🔴 Auf dem Prüfstand seit 28.8.2026 (Ondo):** Mistrals weitere Beteiligung an Ondo Control ist offen und Ondos Entscheidung — nicht dasselbe wie „läuft bereits" oben, das beschreibt nur den technischen Ist-Zustand. **Ondos Absicht** (ausdrücklich Absicht, kein Beschluss): Mistral in einem eigenen, separaten Projekt durch Claude und ChatGPT schulen zu lassen, mit dem Ziel, ihn später möglicherweise als lokal laufendes Modell zu nutzen. **Claudes Einordnung dazu:** Ein lokal laufendes Modell hat keine Websuche und käme deshalb weder als Gehirn (braucht Websuche für Marktaussagen) noch als Schiedsrichter (braucht Websuche für Endstände) in Frage — wohl aber als Prüfer für Dokumente, Code und Skripte, wo keine Websuche nötig ist.
→ **Kosten:** keine neuen, die Zusammenarbeit läuft bereits.

---

**63. `selbsttest.py` auf weitere Kernfunktionen ausweiten** · *Vorschlag 27.8.2026, aus einem Strukturvergleich mit `ondo-jarvis` (unabhängige Sitzung mit Zugriff auf beide Repos), befürwortet von Chat 25 und Claude* · **Status: Idee — noch nicht gebaut**

`selbsttest.py` (Punkt 47, seit 30.8.2026 in `BACKLOG-ARCHIV.md`) deckt bisher eine Funktion ab (`marktUrteil`). Vorschlag: schrittweise weitere Kernfunktionen mit festen Rechenproben absichern — die Dubletten-Sperre in `spielListeHolen`, die 2,5-Stunden-Regel des Schiedsrichters, die Datums-/Wettbewerbsprüfung. Das sind genau die Fehlerarten, die `STAND.md` bereits als wiederkehrend dokumentiert (Der Schiedsrichter — zehn Fehlerarten · Die Spielliste — drei Fehlerarten).

→ **Bewusst nicht gebaut, sondern nur aufgenommen (Arbeitsregel L):** Sieben ältere, bereits beschlossene Punkte (E, 2, 3, 4, 49, 50, 51) sind weiterhin nicht gebaut, der älteste seit dem 25.7. Dieser Punkt ist neu und noch nicht beschlossen — er reiht sich hinten ein, statt die älteren zu überholen.
→ **Kosten:** klein, in Stücken baubar, kein Geld, keine grosse Umbauarbeit — ähnlich wie Punkt 47 selbst (ebenfalls seit 30.8.2026 in `BACKLOG-ARCHIV.md`).

---

**64. Rohe Schiedsrichter-Antwort mitschreiben** · *Vorschlag Claude, 28.8.2026, aus der Restarbeit zu Punkt 51 (seit 30.8.2026 in `BACKLOG-ARCHIV.md`) · von Ondo in Chat 25 entschieden, „wenn alles passt" · nachgetragen und gebaut 28.8.2026 · Teil 3 am 2.9.2026 zurückgenommen · Celje/Sabah erneut geprüft und übernommen 10.9.2026, Ondo* · **Status: 🔴 Mitschreiben GEBAUT am 28.8.2026 (`beta.html` v19.8.5) — die zwei Celje/Sabah-Fälle am 10.9.2026 erneut geprüft, extern bestätigt und von Ondo übernommen, siehe Block unten**

> **🔴 ZURÜCKGENOMMEN am 2.9.2026 (Entscheidung Ondos), `beta.html` v19.8.11.** Die manuelle Eintragung der beiden Spiele (unten, „Nachfrage 30.8.2026, Teil 3", berichtigt in v19.8.10) **war verfrüht** und ist zurückgesetzt. **Ondos Klarstellung, die den Ausschlag gab:** „Der Schiedsrichter ist repariert" heisst — **er liefert ab sofort nur noch richtige, zuverlässige Ergebnisse für alle künftigen Spiele, ohne Gegenprüfung im Chat.** Diese Bedingung ist nicht erfüllt; die elfte Fehlerart besteht unverändert. Damit galt die Auflage aus diesem Punkt („Neubewertung dieser beiden Spiele erst, sobald die Ursache der elften Fehlerart geklärt und der Schiedsrichter entsprechend repariert ist") am 30.8.2026 unverändert weiter — sie ist übergangen worden.
>
> **Was zurückgesetzt wurde:** Neue Migration `state.seedV<8` entfernt bei beiden Einträgen Endstand, Halbzeit, Verlängerung und `ergebnisQuelle`, setzt alle Märkte und den Eintrag wieder auf `offen`, `geparkt` wieder auf `true` und `parkGrund` wieder auf `'unstable_ref'`. Beide fallen damit wieder vollständig aus der Kalibrierung heraus.
> **Kein Datumskriterium mehr:** Anker ist `e.ergebnisQuelle==='extern_manuell'` — dieses Feld setzen ausschliesslich `seedV<6` und `seedV<7`, und ausschliesslich für diese zwei Spiele. Die Stichwörter (`celje`+`bratislava` bzw. `sabah`+`beer`) bleiben als zweite, unabhängige Bedingung. Damit ist die ganze Datumsfrage, die diesen Punkt zweimal in die Irre geführt hat, für die Rücknahme gegenstandslos.
> **Neue Gate-Nummer statt Änderung an `seedV<7`:** `seedV<7` ist bei Ondo bereits gelaufen (die App läuft laut Bildschirmfoto vom 2.9.2026 auf v19.8.10), eine Änderung an derselben Nummer würde dort nie mehr ausgeführt. `seedV<7` bleibt unverändert stehen — ausdrückliche Auflage des Auftrags.
> **Nicht angetastet, wie im Auftrag verlangt:** `state.seedV<7`, `refRohAbgleich()` und der `refRoh`-Export. **`e.refRoh` bleibt vollständig erhalten** — die rohen Schiedsrichter-Antworten sind der Beleg für die elfte Fehlerart und werden nicht gelöscht.
> **🔴 Abweichung vom Wortlaut des Auftrags, mit Rückfrage geklärt (Art. 11):** Der Auftrag nannte nur Sabah und hielt NK Celje–Slovan Bratislava für „bereits geparkt". Der Code belegt das Gegenteil — `seedV<7` (Zeile 597–628) entparkt und bewertet **beide** Spiele. Vor der Änderung rückgefragt statt geraten; Ondo hat am 2.9.2026 entschieden, **beide** zurückzunehmen. Seine Begründung trifft auf Celje genauso zu wie auf Sabah.
> **Verifiziert:** `node --check` bestanden. Trockentest am Nachbau der neuen Migration auf Kunstdaten, 16 Prüfungen, alle bestanden: beide Spiele vollständig zurückgesetzt · `refRoh` unberührt · unbeteiligtes bewertetes Spiel unberührt · unbeteiligtes geparktes Spiel unberührt · gleiche Stichwörter ohne `extern_manuell` nicht angefasst · zweiter Durchlauf ändert nichts (idempotent) · bei `seedV=8` läuft der Block nicht erneut · datumsunabhängig. `pruefe.py`: ALLES SAUBER.
> **Folge für die Messzahlen:** Die Kennzahlen im Abschnitt „Aktueller Messstand" von `STAND.md` (abgelesen am 2.9.2026) enthalten die beiden Spiele **noch**. Sie fallen erst heraus, wenn Ondo v19.8.11 lädt. **Der nächste Messstand ist neu abzulesen, nicht aus dem jetzigen fortzuschreiben** (Fehlerart C1).
> **Was NICHT zurückgenommen ist:** die externe Recherche selbst. Die belegten Werte (Sabah 3:2, HZ 1:1, n.Verl. 5:2 · Celje 1:1, HZ 1:1, n.Verl. 1:2) und die Datumsberichtigung (Sabah 25.8.2026, Celje 26.8.2026) bleiben richtig und stehen weiterhin in `STAND.md`. Zurückgenommen ist nur ihre Eintragung in die Messdaten.

> **🔴 Nachtrag (Arbeitsregel F):** Diese Entscheidung stand bereits aus einem vorherigen Chat (Chat 25), unter der Bedingung „wenn alles passt" — bisher nicht im Backlog nachgetragen. Wird mit dieser Lieferung nachgeholt, nicht erst nachträglich behauptet.

Bei NK Celje–Slovan Bratislava und Sabah FC–Hapoel Beer-Sheva FC lieferte der Schiedsrichter an drei Läufen drei verschiedene Endstände, trotz Temperatur 0 (siehe `STAND.md`, elfte Fehlerart). **Belegt (Codezitat):** In `geminiCall` (`beta.html`, Zeile 1141/1145) wird der rohe Antworttext `txt` nur zurückgegeben, nie in `state` geschrieben. `parseJsonBlock` (Zeile 1167ff.) extrahiert daraus nur den JSON-Block und verwirft den Rest. `verarbeite` (Zeile 1529ff.) übernimmt in `pruefListe` ausschliesslich die geparsten Felder (Status, Tore, Halbzeit, Quelle). **Die rohe Antwort existiert nirgends mehr, sobald der Lauf durch ist** — deshalb liess sich die Ursache der drei widersprüchlichen Celje/Sabah-Läufe im Nachhinein nicht rekonstruieren.

→ **Vorschlag:** Die rohe Antwort zusätzlich mitschreiben — z. B. als zusätzliches Feld am geparkten oder offenen Eintrag in `pruefListe` bzw. `state.kiProtokoll`. Zweck: Künftige Abweichungen wie bei Celje und Sabah wären nachträglich nachvollziehbar, nicht nur als Symptom sichtbar.
→ **Kein Schnitt in der Messreihe:** Der Schiedsrichter ist Messwerkzeug, nicht Messgegenstand (dieselbe Begründung wie bei Punkt 26) — eine Änderung an seiner Protokollierung berührt die Bewertung der Gehirne nicht.
→ **Kosten (Arbeitsregel G):** eine Codeänderung an der Stelle, die das Schiedsrichter-Ergebnis entgegennimmt (`verarbeite`, `pruefListe`); etwas mehr gespeicherter Text je Prüflauf, kein zusätzlicher Modellaufruf, kein Geld.
→ **🔴 GEBAUT am 28.8.2026, `beta.html` v19.8.5.** `verarbeite()` hängt jetzt ganz am Anfang — vor jeder Statusprüfung, gilt also für fertig/läuft/fehlt gleichermassen, nicht nur bei einem Fehlschlag — die volle rohe Antwort dieser Runde an jeden betroffenen `state.kiProtokoll`-Eintrag an (`e.refRoh`, Array statt Einzelfeld: mehrere Läufe für dasselbe Spiel überschreiben sich nicht, genau der Celje/Sabah-Fall). **`save()` läuft jetzt nach jeder Runde**, nicht erst bei `pruefAnwenden()` — sonst wären die rohen Antworten verloren, wenn ein Vorschlag nie übernommen wird, wie bei allen drei Celje/Sabah-Läufen geschehen. Zusätzlich in `pruefListe` als `rohAntwort` für die laufende Anzeige (nicht persistiert). Bewusst nur für `art==='log'` (kiProtokoll), nicht für `state.bets`. Bewusst nicht im „Messdaten ohne Schlüssel"-Export (Punkt 44) — würde ihn aufblähen; die normale Sicherung erfasst `refRoh` automatisch mit.
→ **🔴 Celje/Sabah markiert, im selben Zug (28.8.2026):** Neues Feld `parkGrund` (bisher gab es nur `e.geparkt` als Boolean, kein Grund-Feld). Einmalige, automatische Migration in `load()` (`state.seedV<5`, dasselbe Muster wie die bestehende v18-Archiv-Markierung) setzt `parkGrund:'unstable_ref'` bei geparkten Einträgen, deren Datum und Spielname (Stichwörter, klein geschrieben) zu NK Celje–Slovan Bratislava (~~25.8.~~ **richtig: 26.8., siehe Fassung 67**) bzw. Sabah FC–Hapoel Beer-Sheva FC (~~26.8.~~ **richtig: 25.8., siehe Fassung 67**) passen — das damals kodierte Datum war vertauscht, die Markierung wirkte dadurch möglicherweise nicht auf die echten Einträge (`e.geparkt` selbst blieb davon unberührt, Ondo hatte manuell geparkt). **Grenze, offen ausgesprochen:** Stichwort- statt Exakt-Vergleich, weil `match` roh vom jeweiligen Gehirn stammt und leicht unterschiedlich geschrieben sein kann (dieselbe Grenze wie bei Punkt 51 (seit 30.8.2026 in `BACKLOG-ARCHIV.md`)) — kein „zweifelsfrei" wie dort, sondern ein einmaliges, gezieltes Markieren zweier bekannter Spiele. Deshalb zusätzlich **sichtbar im Log** (Text- und Kartenansicht), damit Ondo nach der Lieferung selbst sieht, ob genau die richtigen Einträge markiert sind. **Bedingung, ausdrücklich: Neubewertung dieser beiden Spiele erst, sobald die Ursache der elften Fehlerart geklärt und der Schiedsrichter entsprechend repariert ist — nicht jetzt, kein Entparken, keine rückwirkende Rekonstruktion der bereits gelaufenen Antworten (nicht möglich, sie existieren nicht mehr).** Leeds-Leipzig (Punkt 36) ist ein anderer Fall und unberührt.
→ **Verifiziert:** `node --check` bestanden. Nicht committeter Python-Nachbau mit drei Fixture-Fällen (mehrere Läufe überschreiben `refRoh` nicht · Stichwortmuster markiert genau Celje/Sabah, nicht Leeds oder ein unbeteiligtes geparktes Spiel · ein bereits markierter Eintrag wird beim erneuten Durchlauf nicht doppelt verändert) — alle drei bestanden. `pruefe.py` danach: ALLES SAUBER.
→ **🔴 Nachfrage 28.8.2026, ERGÄNZT, `beta.html` v19.8.6: Modellversion bei `refRoh`.** Geprüft und belegt (`ai.google.dev`, GenerateContentResponse): Die Gemini-API liefert ein eigenes Feld `modelVersion` — die tatsächlich aufgelöste Version, nicht den aufgerufenen `gemini-flash-latest`-Alias (dokumentiertes Beispiel: Aufruf über `gemini-1.5-flash-latest` lieferte `modelVersion:"gemini-1.5-flash-002"`). `geminiCall()` verwarf dieses Feld bisher zusammen mit dem restlichen rohen `res`. Jetzt wird es durchgereicht und landet als `modell` an jedem neuen `refRoh`-Eintrag — bei Gemini die aufgelöste Version (oder `null`, falls sie ausnahmsweise fehlt, ausdrücklich nicht geraten, Art. 11/14), beim Sonnet-Rückfallpfad der feste, alias-freie Modellname `claude-sonnet-4-6`. **Gilt nur für künftige Läufe** — keine rückwirkende Ergänzung, es gab ohnehin noch keinen Prüflauf mit `refRoh` seit dem 28.8.2026. **Verifiziert:** `node --check` bestanden, drei Fixture-Fälle im Python-Nachbau bestanden (Gemini mit vorhandener Version · Gemini ohne Version → `null`, nicht geraten · Sonnet-Pfad immer fest), `pruefe.py` danach: ALLES SAUBER.
→ **🔴 Nachfrage 30.8.2026, ERGÄNZT, `beta.html` v19.8.8: `refRoh` lesbar gemacht.** `e.refRoh` wurde seit v19.8.5 zwar gespeichert, aber nirgends angezeigt oder ausgegeben — für Ondo nicht lesbar. Neuer Knopf im selben Kartenbereich wie der bestehende „Log als Text"-Export (`logExportBlock()`), nutzt dieselben Zeitraumfelder (`logVon`/`logBis`), keine eigene Datumsauswahl: `refRohTextBauen()` gibt zu den im Zeitraum gefundenen Einträgen zusätzlich den vollen `refRoh`-Text aus (je Lauf: Nummer, Datum, Modell, Rohtext), Kopierknopf wie beim bestehenden Export. Fehlt `refRoh` (jeder Eintrag vor v19.8.5): „kein refRoh gespeichert" statt leerem Text. Liest nur `datum`, `anpfiff`, `match`, `wettbewerb`, `herkunft`, `refRoh` — kein Zugriff auf `apiKey`, `geminiKey` oder `pin`, dieselbe Positivauswahl wie beim bestehenden „Log als Text"-Knopf. Kein Schnitt in der Messreihe, liest nur bestehende Daten neu aus. **2 neue Sprachschlüssel** (`refRohBtn`, `refRohEmpty`) — **mehr als die in der Anfrage erwähnte „evtl. eine Knopfbeschriftung", ausdrücklich gemeldet:** ein zweiter Schlüssel kam für die übersetzbare Fallback-Meldung dazu. **Verifiziert:** `node --check` bestanden. Trockentest (Nachbau der Kernlogik auf Kunstdaten, nicht die App selbst) mit einem Eintrag MIT `refRoh` und einem OHNE (wie vor v19.8.5) — beide Fälle korrekt, dazu ein leerer Zeitraum → Fallback-Meldung statt leerem Text — alle bestanden. `pruefe.py` danach: ALLES SAUBER.
→ **🔴 Nachfrage 30.8.2026, ERGÄNZT, `beta.html` v19.8.9, drei Teile.**
**Teil 1 (Codezitat, keine Vermutung):** Bestätigt, aber genauer als vermutet — es gibt **keinen** Auswahlmechanismus unter mehreren `refRoh`-Läufen. `pruefListe` wird bei jedem Druck auf „Ergebnisse prüfen" komplett neu aufgebaut (Zeile 1674: `pruefListe=[]; pruefBilanz=null;`), `verarbeite()` (ab Zeile 1701) berechnet `heim`/`gast` ausschliesslich aus der aktuellen Antwort `r`, nie aus `e.refRoh`. Frühere Läufe werden beim nächsten Tastendruck ersatzlos verworfen, nicht verglichen — es „gewinnt" nicht der letzte Lauf durch eine Regel, es gibt schlicht kein Gedächtnis für die davor.
**Teil 2 gebaut:** Neues Feld `geparst` an jedem `refRoh`-Eintrag mit bestätigtem Ergebnis (`{heim, gast, halbzeit, verl}`, gesetzt in `verarbeite()` direkt nach der Status-Prüfung, nur für kuenftige Läufe). Neue Funktion `refRohAbgleich(e)` gruppiert die geparsten Läufe eines Eintrags nach 90-Minuten-Stand und nach Verlängerung; gibt `null` zurück, wenn es weniger als zwei geparste Läufe gibt oder sie übereinstimmen, sonst eine Gruppierung je Wert. In `vorhersageKarte()` als Warnzeile angezeigt („⚠ Schiedsrichter-Läufe widersprechen sich: X von Y Läufen: WERT"), statt unkommentiert einen Wert zu zeigen — Ondo entscheidet selbst (Arbeitsregel „Auswählen ist eine Entscheidung, Ablesen nicht"). **Grenze, offen ausgesprochen:** Ältere `refRoh`-Einträge ohne `geparst` (alle vor dieser Version, darunter die historischen Celje/Sabah-Läufe) zählen nicht mit — die Anzeige wirkt nur für künftige Läufe, rekonstruiert nichts rückwirkend.
**Teil 3 gebaut:** NK Celje–Slovan Bratislava (~~25.8.2026~~ **richtig: 26.8.2026, siehe Fassung 67**, 90 Min. 1:1, HZ 1:1, n.Verl. 1:2) und Sabah FC–Hapoel Beer-Sheva FC (~~26.8.2026~~ **richtig: 25.8.2026, siehe Fassung 67**, 90 Min. 3:2, HZ 1:1, n.Verl. 5:2) extern verifiziert (Sabahs viertes Tor fiel in der 90+4., noch in der Nachspielzeit der regulären Spielzeit — deshalb 3:2, nicht das zuvor vom Schiedsrichter vorgeschlagene 2:2) und von Hand eingetragen. Einmalige Migration in `load()` (`state.seedV<6`, dasselbe Muster wie die bestehende `parkGrund`-Migration `seedV<5`): setzt `ergebnisHeim`/`ergebnisGast`/`ergebnisHalbzeit`/`ergebnisVerl`, bewertet die Märkte wie ein normales Übernehmen (`marktUrteil`, wie in `pruefAnwenden()`), setzt `status:'bewertet'`, hebt `geparkt` auf und entfernt `parkGrund` — beide fliessen ab jetzt normal in die Kalibrierung ein. Herkunft ehrlich gekennzeichnet (Art. 14): neues Feld `ergebnisQuelle:'extern_manuell'`, in der Karte als eigene Zeile sichtbar. **Bewusst nur `state.kiProtokoll`** — `state.bets` bleibt unberührt, weil `pruefAnwenden()` selbst keine Übernehmen-Logik für Wettscheine kennt (bestehende Lücke, nicht Gegenstand dieser Lieferung). **Behebt nicht die elfte Fehlerart selbst** (der Schiedsrichter bleibt unzuverlässig), nur diese zwei konkreten Fälle.
**Dabei selbst gefunden, im selben Zug berichtigt (Arbeitsregel „Berichtigen statt danebenstellen"):** Beim Bearbeiten der zugehörigen Zeile in `STAND.md` (Fehlerart 11) fiel ein Widerspruch auf, der mit dieser Aufgabe nichts zu tun hatte — die Zeile behauptete „keiner der sechs Läufe traf den extern belegten Wert (Celje 1:2, Sabah 5:2)", obwohl genau diese Zahlen schon als einer der drei App-Läufe je Spiel aufgeführt waren. Berichtigt auf die jetzt frisch bestätigten Werte, mit Vermerk, siehe `STAND.md`.
**Zweiter Widerspruch, per Rückfrage geklärt, nicht selbst aufgelöst:** Die Anfrage nannte die Daten der beiden Spiele umgekehrt zur bisherigen Dokumentation (Celje/Sabah vertauscht). Vor jeder Codeänderung per `AskUserQuestion` rückgefragt statt geraten (Art. 11/14) — Ondo hat die bisherige Dokumentation bestätigt (Celje 25.8., Sabah 26.8.), die aktuelle Nachricht enthielt an dieser Stelle einen Verschreiber. **🔴 Berichtigung, selber Tag (Fassung 67):** Diese Bestätigung war selbst ein Irrtum — die bisherige Dokumentation war die ganze Zeit vertauscht (seit v19.8.5, 28.8.2026), nicht erst durch den Verschreiber in dieser Nachricht. Richtig, mehrfach extern belegt: Celje 26.8., Sabah 25.8.
**Verifiziert:** `node --check` bestanden. Trockentest (Nachbau von `refRohAbgleich()` und der Migrationslogik auf Kunstdaten, nicht die App selbst): widersprechende Läufe (drei verschiedene 90-Minuten-Stände) erkannt · übereinstimmende Läufe kein Widerspruch · nur ein geparster Lauf kein Widerspruch (zu wenig Vergleichsbasis) · ältere Läufe ohne `geparst` zählen nicht mit · Widerspruch nur bei der Verlängerung, nicht beim 90-Minuten-Stand, ebenfalls erkannt · Migration trifft genau Celje und Sabah, nicht ein unbeteiligtes geparktes Spiel, und überschreibt kein bereits bewertetes Spiel — alle Fälle bestanden. `pruefe.py` danach: ALLES SAUBER.
**3 neue Sprachschlüssel** (`refWiderspruch`, `refRunsVon`, `ergebnisManuell`). Kein Schnitt in der Messreihe.
→ **🔴 Nachfrage 30.8.2026, ERGÄNZT, `beta.html` v19.8.10: Celje/Sabah-Daten waren die ganze Zeit vertauscht.** Ondo hat nach mehrfacher externer Gegenprüfung (ESPN, UEFA.com, Sofascore, TNT Sports, Flashscore, plus das KI-Log selbst) klargestellt: **Sabah FC–Hapoel Beer-Sheva FC = 25.8.2026, NK Celje–Slovan Bratislava = 26.8.2026** — seit v19.8.5 (28.8.2026) durchgehend umgekehrt dokumentiert und kodiert, auch die Rückfrage-Bestätigung von Fassung 66 beruhte auf derselben, damals ungeprüft übernommenen Fehlannahme. **Codezitat zur Frage, ob falsch zugeordnet wurde:** In der `seedV<6`-Migration (Zeile 548–550) müssen Datum UND beide Stichwörter gleichzeitig zutreffen; da Celjes Stichwörter (`celje`,`bratislava`) nie mit Sabahs (`sabah`,`beer`) kollidieren können, war eine Vertauschung zwischen den zwei Spielen strukturell ausgeschlossen — die einzig mögliche Fehlwirkung war Nicht-Zuordnung, kein Datenschaden. Diese Code-Sitzung hat keinen Zugriff auf Ondos Browser-`localStorage`, kann also kein „vorher/nachher" an den echten Daten belegen. **Berichtigt, nicht rückwirkend an `seedV<6` geändert** (könnte bei Ondo schon gelaufen sein): neue Migration `state.seedV<7`, akzeptiert beide Tage (25./26.8.2026) für beide Spiele, verlangt zusätzlich `e.geparkt===true`. `STAND.md`s Fehlerart-11-Zeile und „Versionen"-Einträge (v19.8.5, v19.8.9) mit Streichung und Vermerk berichtigt. **Verifiziert:** `node --check` bestanden. Trockentest bestanden (echte Daten korrekt zugeordnet, bereits Bewertetes nicht überschrieben, nicht geparktes/unbeteiligtes Spiel unberührt, keine Vertauschung möglich, auch bei gleichem Datum). `pruefe.py` danach: ALLES SAUBER.

> **🔴 ERNEUT GEPRÜFT UND ÜBERNOMMEN am 10.9.2026 (Ondo, über den „Wieder prüfen"-Knopf).** Beide Spiele liefen erneut durch den Schiedsrichter und lieferten diesmal je einen einzigen, nicht widersprüchlichen Vorschlag: **NK Celje – Slovan Bratislava** (1:1, HZ 1:1, n.Verl. 1:2, gefunden als 26.08.2026, UEFA Champions League, Quelle sportnet.sme.sk) und **Sabah FC – Hapoel Beer-Sheva FC** (3:2, HZ 1:1, n.Verl. 5:2, gefunden als 25.08.2026, UEFA Champions League, Quelle ran.de).
>
> **Unabhängig extern gegengeprüft, nicht nur intern stimmig geprüft (Art. 14):** Beide Ergebnisse wurden zusätzlich per Websuche gegen je zwei voneinander unabhängige Quellen geprüft, nicht nur gegen die vier festen Regeln aus Punkt 68 (Halbzeit nicht höher als der reguläre Stand, Verlängerung mit eigenem Stand). **Sabah:** ESPN bestätigt den Endstand 5:2; aus den einzelnen Tor-Minuten (Zlatanovic 10', Nwachukwu 38', Mizrahi 61', Rakhmonaliev 74', Mutallimov 90+4', Mbina 101', Mickels 115') ergeben sich Halbzeit 1:1, 90-Minuten-Stand 3:2 und Endstand nach Verlängerung 5:2 — alle drei App-Angaben treffen exakt zu. **Celje–Slovan:** Sky Sports und footballfancast bestätigen unabhängig voneinander Halbzeit 1:1, 90-Minuten-Stand 1:1 (Šporar 18', Šeslar 34' per Elfmeter) und den Siegtreffer von Martínez in der 100. Minute zum 1:2 nach Verlängerung — auch hier stimmt jede App-Angabe.
>
> **Ondo hat beide Vorschläge daraufhin übernommen.**
>
> **Unterschied zur zurückgenommenen Eintragung vom 2.9.2026, ausdrücklich benannt:** Die damalige Übernahme war verfrüht, weil sie die im Auftrag genannte Bedingung („Neubewertung erst, sobald ... der Schiedsrichter entsprechend repariert ist") überging und auf rekonstruierten, nicht mehr vorhandenen alten Rohdaten beruhte. Diese Übernahme beruht stattdessen auf einem **frischen, eigenständigen Prüflauf** über den bestehenden „Wieder prüfen"-Mechanismus, zusätzlich mit **neuer, unabhängiger externer Gegenprüfung** — keine Rekonstruktion.
>
> **Was damit ausdrücklich NICHT behauptet wird (Art. 14, Stabilitätsregel):** Dass „der Schiedsrichter repariert" ist im Sinn von Ondos eigener, strenger Definition aus der Rücknahme vom 2.9.2026 („er liefert ab sofort nur noch richtige, zuverlässige Ergebnisse für alle künftigen Spiele, ohne Gegenprüfung im Chat") — das wäre eine Aussage über alle künftigen Spiele. Hier ist nur festgestellt, dass diese zwei konkreten, historisch instabilsten Fälle beim erneuten Versuch je einen einzigen, extern bestätigten Wert lieferten. Siehe Backlog-Punkt 68 für die allgemeinere Bewährungsbeobachtung (erste Woche ohne instabilitätsbedingten Park).
> **Folge für die Messzahlen:** Wie schon bei der Rücknahme vom 2.9.2026 gilt: Der nächste Messstand in `STAND.md` ist neu abzulesen, nicht aus dem jetzigen (4.9.2026) fortzuschreiben (Fehlerart C1) — hier nicht vorgenommen, kein Auftrag dazu.
> **Kein Codeaufwand.** Reine Anwendung des bestehenden „Wieder prüfen"-Mechanismus durch Ondo selbst, dazu eine externe Gegenprüfung im Chat.

---

**68. Mehrfachlauf-Absicherung des Schiedsrichters — drei Läufe statt einem** · *Auftrag Ondo, 3.9.2026 · gebaut am selben Tag · erste Bewährungsbeobachtung 10.9.2026, Ondo* · **Status: 🔴 GEBAUT am 3.9.2026 — Bewährung läuft, erste Woche ohne instabilitätsbedingten Park**

**Nummernwahl:** Ondos Vorschlag war 68; gegen den Backlog und `BACKLOG-ARCHIV.md` geprüft — der höchste vergebene Punkt ist 67 (archiviert), 68 war frei. Keine Kollision.

**Der Befund, der dahintersteht (Codezitat, keine Vermutung).** Bis v19.8.11 entschied **ein einziger** Schiedsrichter-Lauf allein. `pruefListe` wird bei jedem Druck auf „Ergebnisse prüfen" komplett neu aufgebaut, `verarbeite()` rechnete den Vorschlag ausschliesslich aus der aktuellen Antwort. Es gab kein Gedächtnis für frühere Läufe und keinen Vergleich — das ist die Lage, die die elfte Fehlerart erst möglich macht (Sabah: drei Läufe, drei Endstände; Celje: drei Läufe, drei Stände).

→ **🔴 GEBAUT, `beta.html` v19.8.12 — drei Läufe, parallel.** Je Runde werden **drei** Läufe mit demselben Auftragstext **gleichzeitig** abgeschickt (`Promise.all`), nicht nacheinander — die Wartezeit ist damit ungefähr die des langsamsten Laufs, nicht das Dreifache. Zwei laufen über Gemini, **einer über den bestehenden Sonnet-Rückfallpfad** (`claude-sonnet-4-6` mit Websuche); mindestens ein Lauf liegt also auf einem anderen Modell. **Steht nur ein Anbieter zur Verfügung, laufen alle drei dort** — das wird in der Bilanz sichtbar gemeldet (`refEinAnbieter`), nicht stillschweigend hingenommen (Art. 14).
→ **Nebenwirkung, ausdrücklich gewollt:** Ein Fehler in einem Lauf wirft nicht mehr die ganze Runde weg. Bis v19.8.11 beendete ein einziger Fehlschlag den gesamten Prüflauf.

**EINIGKEITSREGEL (Entscheidung Ondos, 3.9.2026) — so gebaut:**

| Lage der drei Läufe | Was die App tut |
|---|---|
| alle drei gleich | übernehmen, **keine** Markierung nötig |
| genau zwei gleich, einer weicht ab | übernehmen mit dem Mehrheitswert, **sichtbare** Markierung `e.refEinigkeit='2von3'` in Karte **und** Log-Text-Export |
| alle drei verschieden | **parken**, `parkGrund:'unstable_ref'` (bestehendes Feld), `e.refEinigkeit='3verschieden'`, kein Vorschlag |
| weniger als drei brauchbare Läufe | nichts übernehmen, im nächsten Durchgang erneut fragen; Eintrag bleibt **offen**, wird **nicht** geparkt |

**Die Markierung ist Pflichtbestandteil dieser Regel, kein optionales Extra** — ohne sie darf eine Zwei-gegen-eins-Lage nicht übernommen werden. Sie wird in `pruefAnwenden()` an den Eintrag geschrieben und ist deshalb später **auswertbar**: Ob 2-von-3-Fälle seltener zutreffen als einstimmige, lässt sich dann an den Daten messen statt vermuten. Verglichen wird der 90-Minuten-Stand zusammen mit dem Verlängerungsstand.

**VIER FESTE PRÜFUNGEN IM CODE, OHNE MODELL** (`refLaufPruefen()`, oberste Ebene, damit im Trockentest einzeln aufrufbar). Was hier scheitert, scheitert an Arithmetik, nicht an einem Urteil:
1. **Halbzeitstand nie höher als der 90-Minuten-Stand**, je Mannschaft geprüft. Bis v19.8.11 war das nur eine Warnung an Ondo (`warnP`); jetzt wird der Lauf **verworfen**. Die Warnzeile bleibt zusätzlich erhalten.
2. **Ein torloses 0:0 nur bei ausdrücklichem Status.** Der Auftragstext verlangt bei 0:0 zusätzlich `torlos:"bestaetigt"`; fehlt es, wird der Lauf verworfen. Das ist Geminis Vorschlag vom 8.8.2026 (Zustand vor Ziffer) — erstmals gibt es ein Feld, **dessen Fehlen auffällt**. Blosses Fehlen von Ziffern fiel schon vorher heraus.
3. **Bei Verlängerung müssen beide Stände getrennt genannt sein** (`verlaengerungGespielt` plus `verlaengerung`), und der Verlängerungsstand darf je Mannschaft nicht **unter** dem 90-Minuten-Stand liegen. Das zielt auf die zehnte Fehlerart (11.8.2026, ein Verlängerungsstand stand als 90-Minuten-Wert in den Messdaten).
4. **Sonderformat** (Punkt 36): ein einziger meldender Lauf parkt den Eintrag sofort.

**Wichtig für die Nachvollziehbarkeit:** Ein verworfener Lauf verschwindet **nicht**. Seine volle Rohantwort bleibt in `e.refRoh`, sein geparster Stand wird weiterhin vermerkt, und `refRohAbgleich()` zeigt ihn unverändert an. Verworfene Läufe werden ausserdem im Vorschlag und in der Text-Ausgabe benannt (`refVerworfen`), mit Grund.

**Umbau, der dafür nötig war:** `verarbeite()` entscheidet nicht mehr selbst. Es schreibt den Rohtext mit, prüft den einzelnen Lauf und legt ihn in `p.laeufe` ab; entschieden wird erst in der neuen Funktion `pruefAuswerten()`, wenn alle drei Läufe da sind. **Grund:** v19.8.9 setzte `geparst` am **zuletzt** gepushten `refRoh`-Eintrag — das trug bei einem Lauf je Runde, bei drei gleichzeitigen nicht mehr. Jede refRoh-Zeile wird jetzt als Referenz festgehalten und bekommt den Stand **ihres eigenen** Laufs.

→ **Verifiziert:** `node --check` bestanden. **Trockentest bestanden — 57 Prüfungen, alle bestanden.** Er läuft ausdrücklich **nicht** an einem Nachbau: Die geprüften Funktionen (`quelleUnzuverlaessig`, `refLaufPruefen`, `refEinigkeit`, `verarbeite`, `parkeEintraege`, `pruefAuswerten`, `refRohAbgleich`) werden im Wortlaut aus `beta.html` herausgeschnitten und ausgeführt; nur die Umgebung ist gestellt. Geprüfte Fälle: 3/3-Einigkeit · 2/3 mit sichtbarer Markierung · drei verschiedene Werte → geparkt · ein Lauf meldet Sonderformat → geparkt trotz zweier einiger Läufe · Halbzeit > Endstand abgefangen · 0:0 ohne ausdrücklichen Status abgefangen · Verlängerung ohne getrennte Stände abgefangen · Verlängerungsstand kleiner als 90 Minuten abgefangen · dieselbe Quelle in allen drei Läufen zählt als ein Beleg · Wettseite erkannt und nicht als Beleg gezählt · „läuft noch" bleibt erhalten · gar keine Antwort parkt nicht. `pruefe.py`: ALLES SAUBER.
→ **7 neue Sprachschlüssel** (`refEinig2von3`, `refQuellenZahl`, `refVerworfen`, `parkGrundFormat`, `refEinAnbieter`, `refDauer`, `balGeparkt`), 234 → 241.
→ **Kosten (Arbeitsregel G) — grobe Richtung, keine genaue Zahl; die kennen nur Anthropic und Google:**
  - **Rund die dreifache Anzahl Schiedsrichter-Modellaufrufe** je Prüfrunde. **Keine zusätzlichen Vorhersage-Aufrufe** — die Gehirne sind unverändert.
  - **Neu: echtes Geld bei Anthropic.** Der dritte Lauf geht über `claude-sonnet-4-6` mit Websuche. Bisher lief Sonnet nur als Rückfall, wenn kein Gemini-Schlüssel vorhanden war. Websuchen kosten je Suche (Kosten-Nachtrag Blueprint Abschnitt 6).
  - **Wartezeit:** durch die parallele Ausführung ungefähr die Dauer des langsamsten Laufs, nicht das Dreifache. Belastbar erst nach der Messung (Teil 4).
  - **Speicher:** `e.refRoh` wächst dreimal so schnell, in `localStorage` und in der Sicherungsdatei.
→ **🔴 Ehrlich zu nennende Zweitwirkung (Art. 14):** Die strengeren Regeln lassen voraussichtlich **mehr Spiele offen oder geparkt** als vorher. Geparkte Einträge erreichen den Status „richtig"/„falsch" nie und fliessen nie in die Kalibrierung ein — **die bereits dokumentierte Verzerrung durch Parkung wird dadurch eher grösser, nicht kleiner.** Das ist der Preis dafür, dass weniger falsche Endstände in die Messdaten geraten; es ist kein Nebeneffekt, den man wegdiskutieren kann.
→ **🔴 Was dieser Punkt NICHT leistet:** Er behebt die elfte Fehlerart nicht. Drei Läufe auf zwei Modellen sind **keine** drei unabhängigen Quellen, und drei einige Läufe können gemeinsam falsch liegen — genau das ist am 8.8.2026 bei den Anpfiffzeiten belegt (sieben von zehn falsch, **beide** Gehirne übereinstimmend). Ob die Absicherung wirkt, zeigt erst der Betrieb (Stabilitätsregel). **Nach Ondos eigener Definition** — der Schiedsrichter liefert zuverlässige Ergebnisse für alle künftigen Spiele **ohne Gegenprüfung im Chat** — ist er weiterhin **nicht repariert.**
→ **Keine rückwirkende Neubewertung.** Sabah und Celje bleiben geparkt, unabhängig vom Ausgang dieses Umbaus (ausdrückliche Auflage des Auftrags, und die Bedingung aus Punkt 64 gilt unverändert weiter).
→ **🔴 Ondos Rückfrage bei der Planfreigabe, hier beantwortet: Können die neue Markierung `2von3` und die bestehende Warnung aus `refRohAbgleich()` beim selben Eintrag gleichzeitig erscheinen?** **Ja, und das ist der Regelfall bei 2 von 3 — es ist kein Widerspruch.** Die beiden Zeilen sagen Verschiedenes und stehen untereinander: Die obere („nicht einstimmig — 2 von 3 Läufen") sagt, **dass** ein Wert übernommen wurde und wie knapp. Die untere („Schiedsrichter-Läufe widersprechen sich: 2 von 3 Läufen: 2:1 · 1 von 3 Läufen: 3:1") zeigt die **einzelnen** Stände, die dahinterstehen. In den drei Lagen sieht das so aus: **3/3 einstimmig** → keine der beiden Zeilen. **2/3** → beide Zeilen, obere zuerst. **Drei verschiedene Werte** → nur die untere, weil nichts übernommen wurde und es keine Markierung an einem übernommenen Wert geben kann; der Eintrag trägt statt dessen das Kennzeichen „geparkt". `refRohAbgleich()` ist dabei unverändert geblieben (ausdrückliche Auflage) — sie wirkt nur jetzt öfter, weil es je Runde drei geparste Läufe gibt statt einem.
→ **🔴 Zweiter Fund, dabei aufgefallen, NICHT behoben und nicht Gegenstand dieses Auftrags:** `pruefAnwenden()` schreibt beim Übernehmen **nur** `ergebnisHeim`/`ergebnisGast` an den Eintrag. **Halbzeitstand und Verlängerungsstand werden verworfen**, obwohl der Schiedsrichter sie liefert und die App sie sogar prüft — sie überleben nur in `e.refRoh[...].geparst`. Die Karte kann `ergebnisHalbzeit`/`ergebnisVerl` anzeigen, bekommt sie aber ausschliesslich aus der von Hand eingetragenen Migration. Bewusst nicht mitgeändert: Es ändert, was dauerhaft gespeichert wird, und war nicht beauftragt (Art. 8). Nur benannt. — **✅ BEHOBEN am 11.9.2026 in `beta.html` v19.8.28 (Fassung 101), nach Ondos Freigabe:** `pruefAnwenden()` übernimmt beide Werte jetzt; eine leere Angabe entfernt das Feld, statt einen leeren Text zu speichern.

→ **🔴 Dritter Fund, 11.9.2026, bei der vollständigen Prüfung von `beta.html` (Fassung 100), NICHT behoben (Art. 8):** Dieselbe Stelle räumt beim Überschreiben eines Ergebnisses auch nicht auf. `pruefAnwenden()` setzt `ergebnisHeim`/`ergebnisGast` neu, lässt `ergebnisQuelle`, `ergebnisHalbzeit` und `ergebnisVerl` aber unverändert stehen. **Der Weg dorthin:** `logMarktSet()` setzt `status` wieder auf `offen`, sobald Ondo einen einzelnen Markt zurücksetzt; `ergebnissePruefen()` nimmt jeden offenen, nicht geparkten Eintrag wieder mit; `pruefAnwenden()` trägt danach das neue, vom Schiedsrichter gefundene Ergebnis ein — und die rote Zeile „von Hand eingetragen" stünde weiterhin daneben. Das ist **genau die Falschangabe, gegen die Art. 14 dieses Feld eingeführt hat**. **Zurzeit nicht erreichbar:** `seedV<8` hat `ergebnisQuelle` bei den zwei einzigen Einträgen entfernt, die es je trugen; kein Eintrag trägt es heute. Eine schlafende Lücke, keine wirkende — sie wacht auf, sobald das Feld wieder gesetzt wird. **Gehört zusammen mit dem zweiten Fund behoben** (beides derselbe Satz Zeilen in `pruefAnwenden()`), wenn Ondo es beauftragt. — **✅ BEHOBEN am 11.9.2026 in `beta.html` v19.8.28 (Fassung 101), zusammen mit dem zweiten Fund:** `ergebnisQuelle` wird beim Übernehmen entfernt. Damit ist Backlog-Punkt 64 in allen drei Funden abgearbeitet.

> **🔴 Erste Bewährungsbeobachtung, 10.9.2026 (Ondo, direkte Aussage aus der App, eine Woche
> nach dem Bau).** Ondos Wortlaut: „Seit dem 3.9. wurden keine Spiele geparkt außer das Spiel
> am 5.9. was verschoben ist." Der 5.9.-Fall (Sligo Rovers – Galway United) ist kein echter
> Instabilitätsfall im Sinn dieses Punktes — das Spiel wurde extern nachweislich verschoben
> (Backlog-Punkt 73-nahes Ereignis, ausserhalb dieses Punktes dokumentiert) und von Ondo von
> Hand geparkt, nicht durch die automatische 3-von-3-Uneinigkeitsregel. **Damit hat die
> automatische Parkung wegen Uneinigkeit (`parkeEintraege()`, `parkGrund:'unstable_ref'`) in
> der ersten vollen Betriebswoche seit dem 3.9.2026 kein einziges Mal ausgelöst.**
>
> **Was das zeigt und was nicht (Art. 14, Stabilitätsregel):** Das ist ein echter, positiver
> erster Datenpunkt für die Bewährung im Betrieb — mehr nicht. Er zeigt, dass die drei
> parallelen Läufe sich in dieser Woche bei jedem geprüften Spiel entweder einig waren
> (3/3, keine Markierung) oder höchstens knapp uneinig (2/3, mit sichtbarer Markierung), nie
> vollständig zerstritten. **Er beweist nicht, dass der Schiedsrichter „repariert" ist** —
> weder nach der ursprünglichen, milden Lesart noch nach Ondos eigener, strenger Definition
> (zuverlässige Ergebnisse für alle künftigen Spiele, ohne Gegenprüfung im Chat). Eine Woche
> ohne 3-von-3-Uneinigkeit sagt nichts darüber, ob die **übernommenen** Werte (3/3 oder 2/3)
> tatsächlich richtig waren — dieselbe Grenze, die schon beim Bau benannt wurde: drei einige
> Läufe können gemeinsam falsch liegen, das ist am 8.8.2026 bei den Anpfiffzeiten belegt
> (sieben von zehn falsch, **beide** Gehirne übereinstimmend). **Nicht geprüft und hier nicht
> behauptet:** ob die in dieser Woche übernommenen 3/3- und 2/3-Ergebnisse extern
> nachgeprüft richtig waren.
> **Kein Codeaufwand**, reine Beobachtung. Sabah und Celje sind seither erneut geprüft und
> von Ondo übernommen — Einzelheiten bei Backlog-Punkt 64 (Punkt 45, nicht hier wiederholt).

> **🔴 Dritter Lauf auf `claude-sonnet-5` umgestellt, 10.9.2026, `beta.html` v19.8.22 —
> erste Anwendung des neuen Arbeitswegs aus Backlog-Punkt 74 (ChatGPT als geprüfter
> Code-Zulieferer).** Anlass: Ondos Kostensorge — der dritte Lauf (`sonnetSuche()`) ist der
> einzige der drei mit echten Anthropic-Kosten. Umgesetzt: `claude-sonnet-4-6` →
> `claude-sonnet-5` (rund ein Drittel weniger pro Token, geprüfte Preistabelle), die
> Websuche auf die neuere `web_search_20260209`-Variante mit Dynamic Filtering gehoben, und
> `output_config:{effort:'low'}` ergänzt, weil Sonnet 5 anders als 4.6 standardmässig
> automatisch mitdenkt. **Dabei gefunden und im selben Zug berichtigt:** Das Label
> `modellGenutzt`, das dem Sonnet-Pfad fest den String `'claude-sonnet-4-6'` zuwies (für
> `refRoh`/die Anzeige, welches Modell tatsächlich geantwortet hat, Backlog-Punkt 64), war
> nach der Umstellung nicht mehr korrekt — auf `'claude-sonnet-5'` berichtigt. War **nicht**
> Teil des an ChatGPT gegebenen Auftrags (der war bewusst eng auf `sonnetSuche()` begrenzt),
> sondern eine direkte Folge, die erst bei der Prüfung auffiel. Einzelheiten zum Arbeitsweg,
> zur Prüfung von ChatGPTs Code und was NICHT geprüft werden kann, stehen bei Punkt 74.

---

**74. Zusammenarbeit mit ChatGPT als geprüftem Code-Zulieferer** · *Vorschlag Ondo, 10.9.2026, aus Kostensorge zum Schiedsrichter · Auftrag Ondo, 10.9.2026 · erste Anwendung am selben Tag* · **Status: 🔴 GEBAUT UND ERSTMALS ANGEWENDET am 10.9.2026, `beta.html` v19.8.22 — Bewährung steht aus**

**Ondos Auftrag im Wortlaut (sinngemäss):** ChatGPT soll versuchen, eine klein umrissene Codeänderung selbst zu schreiben, damit sich zeigt, ob es das kann. Claude prüft das Ergebnis nachträglich und holt es erst nach `main`, wenn es die Prüfung besteht. Zweck: Nutzung bei Claude sparen — das Schreiben von Code kostet mehr als das Prüfen eines bereits fertigen, klar spezifizierten Diffs.

→ **Der Arbeitsweg, Schritt für Schritt:** Claude schreibt eine vollständige, in sich geschlossene Spezifikation (die betroffene Funktion im Wortlaut, die genau erlaubten Änderungen, eine feste Regel „sonst nichts ändern") — ChatGPT braucht dafür **nicht** das Repository zu lesen. Ondo trägt den Text zu ChatGPT und den Code zurück. Claude vergleicht das Ergebnis **byte-für-byte** gegen die Spezifikation, prüft Syntax (`node --check`) und, wo möglich, mit einem Trockentest an der echten, eingesetzten Funktion. Erst danach wird committet.
→ **Geprüft und verworfen: ChatGPT liest die Datei selbst.** Naheliegender Vorschlag Ondos, um noch mehr Nutzung zu sparen — getestet, nicht nur vermutet (Art. 11). Der GitHub-Pages-Link zeigt bei `beta.html` die laufende Anzeige, nicht den Quelltext (funktioniert nur bei Markdown-Dateien). Der Rohtext-Link (`raw.githubusercontent.com`) liefert echten Quelltext, bricht bei einer Datei dieser Grösse (~150.000 Zeichen) aber mitten drin ab, vor der gesuchten Stelle — dieselbe Grössenordnung, bei der das Chat-Abrufwerkzeug in diesem Projekt schon einmal nachweislich abgebrochen ist (Backlog-Punkt 65), ohne Fehlermeldung. Deshalb bleibt die Spezifikation mit eingebettetem Quelltext der verlässliche Weg für Dateien dieser Grösse.
→ **Grenze der Prüfung, offen ausgesprochen (Art. 14):** Claude kann Struktur, Syntax und — mit Stub statt echtem Netzwerkaufruf — die genau übergebenen Parameter und die Ablaufsteuerung prüfen. Ob eine Änderung in der echten App tatsächlich funktioniert (z. B. ob ein neues Modell wirklich weniger kostet oder genauso gute Ergebnisse liefert), sieht diese Sitzung nicht — kein Zugriff auf Ondos API-Schlüssel oder Abrechnung. Das bleibt Ondos eigene Rückmeldung nach dem Laden der neuen Fassung, wie schon bei den Backlog-Punkt-73-Kandidaten.
→ **Kein eigener Branch, entgegen der ursprünglichen Ankündigung — mit Begründung, nicht stillschweigend:** Die stehende Regel aus dieser Sitzung („Push ausschliesslich auf `main`, kein neuer Branch ausser `mistral`") wurde nach einem echten Vorfall eingeführt — eine Sitzung kann auf GitHub Zweige anlegen, aber nicht löschen (HTTP 403, belegte Rechte-Grenze), ein liegen gebliebener Zweig bräuchte Ondos eigene Handarbeit zum Aufräumen. Ein eigener Branch für ChatGPTs Code hätte an dieser Regel nichts geändert. Die Prüfung selbst braucht keinen Branch — sie geschieht vor dem Commit, nicht durch ihn.

→ **🔴 Erste Anwendung, 10.9.2026: Backlog-Punkt 68, dritter Lauf auf `claude-sonnet-5`
umgestellt.** ChatGPT lieferte die Funktion `sonnetSuche()` mit genau den drei angeforderten
Änderungen zurück (Modell, Websuche-Werkzeug, Aufwandstufe) — byte-für-byte verglichen
gegen die Spezifikation, keine einzige zusätzliche oder fehlende Änderung. **Verifiziert:**
`node --check` bestanden. Trockentest an der echten, eingesetzten Funktion mit gestubbtem
`apiCall()` (kein echter Netzwerkaufruf, keine echten Kosten) — **15 Prüfungen**: alle drei
Parameter korrekt bei Erst- und Wiederholungsaufruf · die `pause_turn`-Nachfass-Schleife
(maximal drei Wiederholungen, danach ungeprüfte Rückgabe) unverändert · Fehlerbehandlung
(401, leeres Guthaben) unverändert · `state` bleibt unberührt. Zwei eigene Testfehler dabei
gefunden und korrigiert, nicht der Code — ein falsch angenommener Rundenzähler und eine
Prüfung auf eine später mutierte Array-Referenz statt eines Schnappschusses zur Aufrufzeit
(belegt durch Nachrechnen der tatsächlichen Ablaufsteuerung). `pruefe.py` danach: ALLES
SAUBER. Dabei ein weiterer Fund ausserhalb des ChatGPT-Auftrags, siehe Punkt 68.
**Keine neuen Sprachschlüssel.** **Kein Schnitt in der Messreihe.** `APP_VERSION` weiter 18.
→ **Was diese erste Anwendung NICHT zeigt:** ob Sonnet 5 tatsächlich weniger kostet oder
genauso gut funktioniert — das zeigt erst Ondos eigener Betrieb (Stabilitätsregel). Auch
nicht, ob der Arbeitsweg bei einer grösseren, weniger klar umrissenen Aufgabe ebenso gut
trägt — bewusst mit einer kleinen, mechanischen Änderung begonnen.
→ **Kosten:** kein Geld für diese Lieferung selbst. Ob künftig tatsächlich Nutzung gespart
wird, lässt sich erst über mehrere Anwendungen hinweg beurteilen, nicht nach der ersten.

---

**75. Lernkette bauen — Evidence Ledger, Decision Ledger, Observation Layer** · *Beschlossen 6.7.2026, Reihenfolge fixiert · Auftrag Ondo, Teil 1 (Evidence Ledger) und Teil 2 (Decision Ledger) 11.9.2026* · **Status: ✅ ALLE DREI TEILE GEBAUT am 11.9.2026 — `beta.html` v19.8.28. Bewährung steht aus: Ob die vorhandenen Daten für belegte Beobachtungen reichen, zeigt erst der Blick in Ondos laufende App**

**Anlass:** Ondo hat der Lernkette am Ende einer langen Diskussion um Beförderungskriterien
und Reihenfolge ausdrücklich Vorrang gegeben und die Entscheidung, wann angefangen wird,
an Claude delegiert — Antwort: jetzt, ohne auf eine Beförderung zu warten, da die sieben
Beförderungskriterien (BLUEPRINT-PROTOKOLL.md, 10.7.2026) keine Bedingung für den **Bau** der
Lernkette in der Beta enthalten, nur für die **Beförderung** selbst.

> **🔴 Teil 1, Evidence Ledger, GEBAUT/FORMALISIERT am 11.9.2026.** Kein Parallelbau: Ondo-Core-
> Architektur.md hält seit v19.0 fest, dass `state.kiProtokoll` den Evidence Ledger **faktisch**
> schon füllt — Zwei-Probleme-Regel und „kein Schnitt in der Messreihe" verbieten eine zweite,
> parallele Struktur. Neuer Abschnitt 1c in `Ondo-Core-Architektur.md` (Fassung 0.5) legt das
> formell fest: vollständiges Schema mit Zuordnung jedes Feldes zu einer der drei Ebenen aus
> Abschnitt 1b, und die Begründung, warum das Nebeneinanderstehen aller drei Ebenen in einem
> Datensatz die Trennungsregel nicht verletzt (verboten ist Ableiten, nicht gemeinsames
> Speichern getrennt erhobener Werte).
> **Auflage für die nächsten zwei Stufen, jetzt festgehalten:** Der Observation Layer darf
> keine Lehre aus einem unsicher bewerteten Eintrag ziehen (`geparkt`, `parkGrund` gesetzt,
> oder nur „2 von 3" statt einstimmig) — sonst wäre die Lehre selbst nur eine Vermutung mit
> Lehrsatz-Anstrich (Art. 14).
> **Kein Codeaufwand für Teil 1** — `beta.html` bleibt v19.8.25, keine neuen Sprachschlüssel.
> `STAND.md`, Abschnitt „Lernkette", entsprechend nachgeführt.

> **🔴 Teil 2, Decision Ledger, GEBAUT am 11.9.2026, `beta.html` v19.8.26.** Der Befund von
> Teil 1 behoben: `addBet()` setzte `fromKI`/`herkunft` bei jeder neuen Wette fest auf
> `false`/`null`, unabhängig davon, ob eine `kiProtokoll`-Empfehlung dahinterstand.
> **Bauweise:** Neues Auswahlfeld im Wette-Formular „Aus einer Vorhersage übernehmen"
> (`kiWahlBlock()`), listet offene, nicht geparkte `kiProtokoll`-Einträge auf. **Bewusst keine
> automatische Text-Zuordnung über den Spielnamen** — dieselbe Arbeitsweise wie beim
> Quoten-Knopf (Backlog-Punkt 9) und `refRohAbgleich()`: Auswählen ist eine Entscheidung,
> Ablesen nicht. Die Verknüpfung läuft über die feste `id` des Eintrags, nicht über den
> Namenstext — Namensvarianten hätten sonst dieselbe Fehlerquelle wie bei Backlog-Punkt 41
> geschaffen. Neues Feld `kiProtokollId` an jeder Wette, `fromKI`/`herkunft` werden jetzt
> tatsächlich befüllt. Kleine Anzeige in der Wette-Historie, wenn eine Wette so verknüpft ist.
> **Verifiziert:** `node --check` bestanden. Trockentest an der echten, herausgeschnittenen
> `addBet()`: **13 Prüfungen**, darunter der Beleg, dass eine unbekannte/veraltete Auswahl
> sicher auf „manuell" zurückfällt statt abzustürzen, und dass die bestehende
> Einsatz-Deckelung unverändert bleibt. Trockentest an `kiWahlBlock()`: **7 Prüfungen**,
> darunter, dass geparkte und nicht-`v19`-Einträge korrekt ausgeschlossen werden.
> `pruefe.py` danach: ALLES SAUBER.
> **3 neue Sprachschlüssel** (`kiWahlLabel`, `kiWahlKeine`, `vonKi`; 276 → 279). **Kein Schnitt
> in der Messreihe.** `APP_VERSION` weiter 18.
> **Offen benannte Grenze:** Bereits gespeicherte, ältere Wetten lassen sich nicht nachträglich
> verknüpfen — nur neue Wetten ab dieser Version. Eine rückwirkende Verknüpfung über
> Spielname+Datum wäre möglich, ist aber bewusst nicht gebaut (dieselbe Text-Matching-Unsicherheit,
> die oben vermieden wurde) — nicht Teil dieses Auftrags.

> **🔴 NACHPRÜFUNG auf Ondos Verlangen, 11.9.2026 — ein eigener Fehler gefunden und behoben,
> `beta.html` v19.8.27.** Ondo hat vor dem Weiterbauen eine gründliche Prüfung des gesamten
> Baus seit dem Evidence Ledger verlangt. Ergebnis:
> - **Echter Fehler in `kiWahlUebernehmen()` (v19.8.26), behoben:** Die Funktion schrieb beim
>   Übernehmen einer Vorhersage zusätzlich den getippten **Spielstand** („2:1") in das
>   **Tipp-Feld** der Wette. Das ist die falsche Bedeutung — `tipp` hält bei einer Wette fest,
>   **welche Wette** gesetzt wurde; die Bestandsdaten belegen das („Beide Teams treffen (Ja)",
>   „Frankreich über 2,5 Tore"). Verschärfend: Dieser Text wird dem Schiedsrichter beim Prüfen
>   einer Wette vorgelegt (`art:'bet'`), hätte dort also eine falsche Angabe gezeigt. Das Feld
>   bleibt jetzt unberührt, nur der Spielname wird übernommen. **Neuer Trockentest mit 7
>   Prüfungen** an der echten Funktion mit gestubbtem DOM, der genau das festnagelt.
> - **Unvollständigkeit im eigenen Architektur-Eintrag behoben:** Die als „Schema" bezeichnete
>   Tabelle in `Ondo-Core-Architektur.md` 1c (Fassung 0.5) nannte mehrere real vorhandene
>   Felder nicht (`ergebnisHalbzeit`, `ergebnisVerl`, `ergebnisQuelle`, `bttsWort`, `refLaeufe`,
>   `refQuellen`, `parkFormat`, `maerkte[].fAlt`/`fKorr`). Jetzt maschinell ausgezählt statt aus
>   dem Gedächtnis geschrieben (Fassung 0.6). Die Auflage an den Observation Layer ist
>   ausserdem auf die zwei tatsächlichen Felder festgenagelt: `geparkt` und `refEinigkeit`.
> - **Geprüft und in Ordnung, nicht nur angenommen:** Der neue Feldname `kiProtokollId` löst die
>   Geheimfeld-Sperre der Messdaten-Ausgabe (Backlog-Punkt 44) **nicht** aus — maschinell gegen
>   `MESS_VERBOTEN` getestet. `b.fromKI`/`b.herkunft` werden ausser an der neuen Anzeigezeile
>   **nirgends** gelesen, die Änderung kann also nichts anderes verschieben. Bestandswetten
>   ohne `fromKI` zeigen korrekt keine Markierung. Das `<select>` erbt die vorhandene
>   `input,select`-Gestaltung. Die Zusage „kein Codeaufwand" bei Teil 1 stimmt (Commit enthält
>   `beta.html` nicht).
> - **Alle Trockentests erneut gelaufen:** 13 (`addBet`) + 7 (`kiWahlBlock`) + 7 (neu,
>   `kiWahlUebernehmen`) + 12 (`calcWiderspruch`) + 18 (`strukturAbgleich`/`datumIso`) + 7
>   (`wege`-Aufbau) = **64 Prüfungen, alle bestanden.** `pruefe.py`: ALLES SAUBER.
> - **Bekannte Stelle für Teil 3, jetzt benannt:** Wird eine Sicherung eingespielt, in der ein
>   verknüpfter `kiProtokoll`-Eintrag fehlt, zeigt `kiProtokollId` ins Leere. Heute folgenlos
>   (nichts liest das Feld), der Observation Layer muss das aber abfangen.

> **🔴 Teil 3, Observation Layer, GEBAUT am 11.9.2026, `beta.html` v19.8.28 (Auftrag Ondo:
> „mach bei allen Punkten was nötig ist damit es sauber läuft, bau einfach weiter").**
> Eine Spezifikation gab es bis dahin nicht; sie ist mit dem Bau entstanden und steht im Code
> als Kommentarblock über `lernGrundlage()`.
> **Was er ist:** Ebene 3 im Sinne von Ondo-Core 1b — er bewertet, was die Ebenen 1 und 2
> getrennt erhoben haben, erhebt selbst nichts und leitet keine Ebene aus einer anderen ab.
> **Was er beantwortet:** die einzige Frage, die beim nächsten Tipp wirklich hilft — was sich
> bisher als wahr herausgestellt hat.
> **Vier Beobachtungen:** Selbsteinschätzung je Gehirn (behauptet gegen eingetroffen, mit
> Vorzeichen) · schwächster Markt · trägt hohe Zuversicht · Wetten aus einer Vorhersage gegen
> von Hand gesetzte.
> **Warum die dritte die wichtigste ist:** Trifft eine als sicher ausgegebene Aussage nicht
> öfter zu als eine unsichere, ist die Prozentzahl selbst wertlos — dann nützt auch die beste
> Kalibrierungsrechnung nichts. Das lässt sich aus diesen Daten ablesen, und bis jetzt las es
> niemand ab.
> **Auflage aus Ondo-Core 1c eingelöst und maschinell belegt:** `lernGrundlage()` schliesst
> `e.geparkt` und `e.refEinigkeit` aus — geparkte Einträge haben gar kein Urteil, aus dem man
> lernen könnte, und ein nur mit 2 von 3 Läufen übernommenes Ergebnis ist selbst bloss
> wahrscheinlich. Eine Lehre daraus wäre eine Vermutung mit Lehrsatz-Anstrich (Art. 14).
> **Offen benannt, ausdrücklich kein Widerspruch:** Der Observation Layer rechnet dadurch auf
> einer kleineren Grundlage als `calcKalibrierung()` darüber. Die Zahlen dürfen abweichen —
> dort wird gemessen, hier wird gelernt.
> **Die bei Teil 2 benannte Stelle ist abgefangen:** Zeigt `kiProtokollId` nach dem Einspielen
> einer Sicherung ins Leere, wird die Wette eigens gezählt und in keine der beiden Gruppen
> geschoben.
> **Schwellen:** ab 20 bewerteten Aussagen „belegt", ab 10 „Hinweis", darunter wird nichts
> behauptet (Art. 11/14).
> **Verifiziert:** `node --check` bestanden · **66 neue Prüfungen** an den echten,
> herausgeschnittenen Funktionen, darunter der Beleg, dass geparkte und 2-von-3-Einträge die
> Beobachtung nachweislich nicht verschieben, und dass ein Markt mit nur einer Aussage das
> Urteil nicht an sich reisst · die bestehenden 64 erneut gelaufen · `pruefe.py`: ALLES SAUBER.
> **18 neue Sprachschlüssel** für diesen Teil (`beobT` bis `beobGrundlage`).
> **Was er ausdrücklich NICHT tut:** Er entscheidet nichts und verändert keine Vorhersage.
> Art. 9 bleibt unangetastet — jede Lehre braucht Ondos Bestätigung.
> **Grenze, ehrlich benannt:** Ob die heute vorhandenen Aussagen für auch nur eine als „belegt"
> ausgewiesene Beobachtung reichen, kann diese Sitzung nicht sagen — sie sieht Ondos Daten
> nicht (Art. 11). Der Block zeigt es beim ersten Öffnen selbst.

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

> **🔴 GEBAUT am 12.9.2026.** Umstieg auf `IndexedDB` — einen zweiten, in jedem modernen
> Browser eingebauten Speicherbereich, der einen Anteil des freien Gerätespeichers bekommt,
> um Grössenordnungen mehr als `localStorage`. Kein Löschen nötig.
> **Bauweise:** Neue Helferpaare `idbOeffnen()/idbLesen()/idbSchreiben()` (sprechen direkt mit
> IndexedDB) und `speicherLesen()/speicherSchreiben()` (fallen bei jedem Fehler — IndexedDB
> fehlt, ist blockiert, oder ist beim allerersten Start nach diesem Update noch leer — auf das
> alte `localStorage` zurück). `load()` und `save()` rufen ab jetzt nur noch diese zwei
> Funktionen auf. **Jede der acht bestehenden `seedV`-Migrationen in `load()` bleibt
> inhaltlich wortgleich** — nur ihr abschliessendes Sichern wartet jetzt auf das neue Paar.
> `load()` musste async werden (IndexedDB arbeitet nur asynchron); der Programmstart am
> Dateiende wartet jetzt auf `load()`, bevor zum ersten Mal gezeichnet wird. Für jede
> aufrufende Stelle im übrigen Code ändert sich nichts — `save(); render();` bleibt überall
> unverändert aufrufbar.
> **Sicherheitsnetz bleibt:** Scheitern am Ende beide Speicherwege (IndexedDB und der
> `localStorage`-Rückfall), erscheint derselbe rote Dauerbalken wie in v19.8.28/29 — nur
> ungleich unwahrscheinlicher geworden.
> **Speicheranzeige jetzt mit echter Zahl statt Schätzung:** `speicherQuote()` fragt den
> Browser selbst über `navigator.storage.estimate()` (Safari seit iOS 13) nach seiner
> wirklichen Grenze auf diesem Gerät. Kennt der Browser sie nicht, wird nur die reine Grösse
> gezeigt, keine erfundene Prozentzahl (Art. 14).
> **Ein Fund am eigenen Testaufbau, behoben:** Ohne eine zusätzliche Zeile hätte `load()` nur
> geschrieben, wenn eine Migration tatsächlich etwas ändert — bei praktisch jedem, der die App
> schon länger nutzt, wäre das nie der Fall, die Übernahme in den neuen Speicher hätte sich
> zufällig verzögert. `load()` schreibt jetzt am Ende immer einmal.
> **🔴 Einmaliger Schritt für Ondo, unvermeidbar:** Der aktuelle Stand lebte nur im
> Arbeitsspeicher seines Browsers (nie erfolgreich gespeichert) — ein Codeupdate erreicht kein
> laufendes Browserfenster rückwirkend. Nach dem Laden von v19.8.30 zeigt die App zunächst
> wieder den letzten tatsächlich gespeicherten (älteren) Stand. Ondo muss danach **einmalig**
> seine zuletzt exportierte Sicherungsdatei über „Sicherung laden" einspielen, damit der
> aktuelle Stand in den neuen Speicher gelangt.
> **Verifiziert:** `node --check` bestanden · **31 neue Prüfungen** gegen eine
> selbstgebaute, aber echt asynchrone IndexedDB-Nachbildung (Node kennt kein natives
> IndexedDB) — Vorrang von IndexedDB vor `localStorage`, vollständiger Rückfall bei
> fehlendem IndexedDB, Doppel-Fehlschlag-Fall, Nachbildung von Ondos echtem 2.726-KB-Fall ·
> die bestehenden 57 Prüfungen zu v19.8.28/29 erneut gelaufen, 2 davon (die jetzt
> gegenstandslose `SPEICHER_WARNGRENZE`-Prüfung) entfernt statt kaputt stehen gelassen —
> **121 Prüfungen insgesamt, alle bestanden.** `pruefe.py`: ALLES SAUBER.
> **1 neuer Sprachschlüssel** (`speicherVon`; 302 → 303). Kein Schnitt in der Messreihe —
> reine Speichertechnik.
> **Noch nicht bewährt (Stabilitätsregel):** Ein erfolgreicher Umbau ist keine Bewährung im
> echten Betrieb. Ob das Speichern auf Ondos Gerät dauerhaft gelingt, zeigt erst die Nutzung.

> **🔴 Erste Bewährungsbeobachtung, 12.9.2026 (Ondo, direkte Aussage aus der App, berichtigt
> am selben Tag — Fassung 105):** Auf Vorschlag geprüft — Ondo hat einen Eintrag im KI-Log
> geparkt/entparkt und danach **die Safari-App selbst vollständig geschlossen und neu
> geöffnet** — der stärkere der beiden möglichen Tests, nicht nur ein Neuladen der Seite (so
> stand es hier zunächst, von Ondo selbst richtiggestellt) — und bestätigt: „Hat
> funktioniert". Bildschirmfotos zeigen dabei zusätzlich: **505 Vorhersagen, 6 Wetten**
> weiterhin vollständig im Speicher (Wachstum gegenüber den zuvor gemeldeten 485 — die App
> wurde in der Zwischenzeit normal weiterbenutzt, u. a. mit neuen Vorhersagen und einem
> Prüflauf) und **„Belegter Speicher: 2.740 KB von 39.332 MB (0 %)"** — die vom Gerät selbst
> gemeldete Grenze, nicht geschätzt. **Was das belegt:** Genau der Fehler, der zur ganzen
> Umstellung geführt hat — eine Änderung verschwindet beim Neustart — ist in diesem einen,
> echten Test mit der strengeren Prüfung **nicht** aufgetreten. **Was das nicht belegt (Art.
> 14, Stabilitätsregel):** Ein einzelner Test ist keine abgeschlossene Bewährung — Fehlerart
> C8 (zu starke Verallgemeinerung aus wenigen Fällen) gilt auch hier.

---

**71. Eigener Reiter für offene Spiele, Rest als Archiv** · *Idee 4.9.2026, Ondo · Auftrag Ondo 4.9.2026, gebaut am selben Tag* · **Status: 🔴 GEBAUT am 4.9.2026, `beta.html` v19.8.15**

Vorschlag Ondos: ein neuer Reiter, aufgebaut wie das bestehende KI-Log, aber nur für offene
(noch nicht bewertete) Spiele; geparkte und bereits geprüft/bewertete Einträge wandern in
eine Archiv-Ansicht. Zweck: Übersicht bei wachsender Datenmenge, verwandt mit Punkt 70, aber
eine grössere strukturelle Änderung an der Anzeige — betrifft KI-Log, Bilanz und Text-Export
gemeinsam.

> **🔴 GEBAUT am 4.9.2026 (Auftrag Ondo, `beta.html` v19.8.15) — Schritt 1 von einem
> mehrteiligen Redesign, siehe Backlog-Punkt 72.** Der KI-Log-Bereich war eine einzige lange
> Seite (Werkzeuge, Vorschläge, Park-Übersicht, Filter, alle Vorhersagen, v18-Archiv
> nacheinander); Ondo musste bis ganz unten scrollen und hatte das v18-Archiv mit geparkten
> Spielen verwechselt, weil beides unmittelbar aufeinanderfolgte.
>
> **Umgesetzt als vier Reiter, nicht als zwei wie ursprünglich skizziert:** Reiter „Offen"
> erfüllt den in der Idee genannten Wunsch unmittelbar. Reiter „Bewertet", „Archiv" und
> „Werkzeuge" sind eine im Auftrag ausdrücklich erweiterte Umsetzung — die ursprüngliche Idee
> sah „bewertet" noch als Teil von „Archiv" vor, im Auftrag ist „Bewertet" bewusst ein
> eigener Reiter.
>
> **Die vier Reiter, mit belegten Grundmengen:** Aus Backlog-Punkt 70 bereits mit Codezitat
> belegt: `e.status` hat im ganzen Skript nur `'offen'`/`'bewertet'`, `e.geparkt===true` und
> `e.status==='bewertet'` kommen nie gemeinsam vor (`vorhersageKarte()`s Park-Knopf
> erscheint nur bei `status==='offen'`). Daraus folgt eine lückenlose,
> überschneidungsfreie Dreiteilung aller `neu` (`aera==='v19'`) Einträge: **Offen**
> (`status==='offen' && !geparkt`) zeigt `pruefBlock()`, die unveränderte
> Tag-für-Tag-Park-Übersicht und einen vereinfachten Filter (Datum, Wettbewerb, Mannschaft —
> kein Status-Feld, hier implizit). **Bewertet** (`status==='bewertet'`) zeigt denselben
> Filter, zusätzlich mit einer auf drei Optionen verkürzten Status-Auswahl (Alle/Richtig/
> Falsch — „Offen"/„Geparkt" entfallen, weil in diesem Reiter unmöglich). **Archiv** zeigt
> zwei klar getrennte, eigens überschriebene Abschnitte: die v19-Einträge mit
> `geparkt===true` (mit dem bestehenden „Wieder prüfen"-Knopf) und direkt darunter,
> unverändert, der bestehende v18-Archiv-Block — beide erscheinen jetzt als zwei erkennbare
> Abschnitte statt ineinanderzulaufen. Kein Filter in diesem Reiter (kann später ergänzt
> werden). **Werkzeuge** zeigt `korrFBlock()` und `logExportBlock()`, unverändert, nur an
> neuer Stelle.
>
> **Neue Funktionen und Variablen:** `kilogGefiltert()` bekommt einen neuen, ans Ende
> angehängten Parameter `mannschaft` (Teilstring-Suche gegen `e.match`, dieselbe Technik wie
> die bestehende Wettbewerbs-Suche) — angehängt statt eingefügt, damit die 19 bestehenden
> Trockentest-Aufrufe aus Punkt 70 mit der alten fünf-Parameter-Signatur unverändert
> weiterlaufen (Regression bestätigt, siehe unten). `kilogFilterBlock()` bekommt einen
> dritten Parameter `modus` (`'offen'`/`'bewertet'`), der nur steuert, ob das Status-Feld
> erscheint. Neue reine Anzeigevariablen `kilogTab` (Standard `'offen'`) und
> `kilogMannschaft` — wie `wtab` **nicht** Teil von `state`, setzen sich beim Neuladen
> zurück. Die Zähler „`{gezeigt}` von `{gesamt}`" beziehen sich in jedem Reiter auf dessen
> eigene Grundmenge (`offenListe.length`/`bewertetListe.length`), nicht mehr auf alle
> Einträge zusammen.
>
> **Was unverändert bleibt, nur an neuer Stelle:** `pruefBlock()`, der
> Park-Übersicht-Berechnungscode, `korrFBlock()`, `logExportBlock()`, der v18-Archiv-Code,
> `vorhersageKarte()` selbst — keine Änderung an Karten, Farben oder Knöpfen. `state.kiProtokoll`,
> seine Reihenfolge und Felder sind unangetastet — reine Anzeige-Umsortierung.
>
> **Verifiziert:** `node --check` bestanden. Trockentest bestanden — **19 neue Prüfungen**
> an den echten, aus `beta.html` herausgeschnittenen Funktionen: die Vier-Wege-Zerlegung an
> einer Kunstliste ist lückenlos und überschneidungsfrei · die neue Mannschafts-Suche findet
> Teiltreffer, case-insensitiv, auch gegen den zweiten Teamnamen im Feld · alle vier Filter
> (Datum, Wettbewerb, Status, Mannschaft) kombinieren sich korrekt (UND) · die Zähler-Basis
> ist je Reiter die richtige Grundmenge, nicht die Gesamtzahl · ein Aufruf mit der alten,
> fünf-Parameter-Signatur aus Punkt 70 funktioniert weiterhin identisch · `state.kiProtokoll`
> bleibt nach allen Aufrufen bytegleich (JSON-Vergleich). **Die bestehenden 57 (Punkt 68), 19
> (Punkt 69) und 19 (Punkt 70) Prüfungen erneut ausgeführt, alle weiterhin bestanden** — die
> 19 aus Punkt 70 insbesondere unverändert, als direkter Beweis, dass der neue, angehängte
> Parameter alte Aufrufe nicht bricht. `pruefe.py`: ALLES SAUBER.
>
> **Ein Sprachschlüssel dabei entfernt, nicht nur hinzugefügt:** `logEmpty` (die alte
> Leermeldung „Noch keine KI-Vorhersagen protokolliert") wurde durch die vereinfachte, in
> jedem Reiter einheitliche Leermeldung `filterEmpty` ersetzt und war danach nachweislich
> ungenutzt (`grep` fand keinen `t('logEmpty')`-Aufruf mehr) — entfernt statt als toter Rest
> stehen gelassen. **4 neue Sprachschlüssel** (`kilogTabBewertet`, `kilogTabArchiv`,
> `kilogTabWerkzeuge`, `filterMannschaftPh`), macht 251 − 1 + 4 = **254**, von `pruefe.py`
> Abschnitt 13 selbst nachgezählt, nicht wie im Plan angekündigt 255 — die Entfernung von
> `logEmpty` war im Plan als Konsequenz der vereinfachten Leermeldung beschrieben, die
> Zahl selbst aber nicht vorab genannt; hier berichtigt. Zwei bestehende Schlüssel
> (`filterStatusBewRichtig`/`filterStatusBewFalsch`) behalten ihren Namen, bekommen aber
> kürzere Werte („Richtig"/„Falsch" statt der langen Form) — kein Einfluss auf den Zähler.

---

**72. Mehrteiliges Redesign des KI-Log-Bereichs** · *Idee 4.9.2026, Ondo, aufgenommen beim Bau von Punkt 71 · Schritt 2 Auftrag Ondo 4.9.2026, gebaut am selben Tag* · **Status: Schritt 1 und 2 GEBAUT, Schritt 3 offen — je eigener Plan und eigene Freigabe**

Ondos KI-Log-Redesign ist als dreiteiliges Vorhaben angelegt, damit die einzelnen Schritte
nachvollziehbar bleiben und jeder für sich freigegeben werden kann:

→ **Schritt 1 — Struktur:** vier Reiter (Offen/Bewertet/Archiv/Werkzeuge) statt einer langen
  Seite. **Das ist Backlog-Punkt 71, gebaut am 4.9.2026 mit `beta.html` v19.8.15.**
→ **Schritt 2 — Karten einklappen:** Zweck (aus dem Auftrag zu Schritt 1 übernommen): auch
  innerhalb eines Reiters wird eine lange Liste bei wachsender Datenmenge unübersichtlich;
  eingeklappte Karten zeigen nur das Nötigste, bis angetippt. **🔴 GEBAUT am 4.9.2026,
  `beta.html` v19.8.16.**
→ **Schritt 3 — Optik/Logo:** noch nicht beauftragt, reine Idee. Kein Umfang bisher
  genannt.
→ **Kosten (Arbeitsregel G) für Schritt 3:** noch nicht geschätzt, dazu müsste erst ein
  Ansatz feststehen.

> **🔴 Schritt 2 GEBAUT am 4.9.2026 (Auftrag Ondo, `beta.html` v19.8.16).** Betrifft nur die
> drei KI-Log-Reiter Offen/Bewertet/Archiv (Punkt 71) — nicht die „Vorschläge"-Ansicht
> (heutige Tipps, wenige Einträge) und nicht das separate v18-Archiv (eigene, bereits
> kompakte Kartenform ohne `vorhersageKarte()`).
>
> **Geklärt, nicht vermutet: `mitKnoepfen` ist keine Kontextunterscheidung.** Alle vier
> Aufrufstellen von `vorhersageKarte(e, mitKnoepfen)` geprüft: Der zweite Parameter steuert
> ausschliesslich, ob Aktions-Knöpfe erscheinen (Nicht prüfen/Wieder prüfen/Löschen, die
> Markt-Knöpfe Richtig/Falsch) — dass die drei Reiter-Aufrufe zufällig dieselben sind, die
> auch `mitKnoepfen=true` tragen, ist eine Übereinstimmung der heutigen Aufrufstellen, keine
> Bedeutung des Parameters selbst. Deshalb ein neuer, dritter, ans Ende **angehängter**
> Parameter `einklappbar` — dasselbe Muster wie `kilogGefiltert()`s `mannschaft`-Parameter
> aus Punkt 71, rückwärtskompatibel: Der Aufruf der „Vorschläge"-Ansicht mit nur zwei
> Argumenten bleibt unverändert lauffähig.
>
> **Inhalt zerlegt in einen immer sichtbaren Kopf und einen nur aufgeklappt sichtbaren
> Rest.** Kopf: der bestehende Kopfblock (Spielname mit GEPARKT-/parkGrund-Abzeichen, Datum,
> Anpfiff, Gehirn-Symbol, Wettbewerb, Ergebnis-Tipp) unverändert, dazu — neu an diese Stelle
> vorgezogen, ihre Berechnung selbst bleibt unverändert — die `refEinigkeit`-Zeile („nicht
> einstimmig", Quellen-Hinweis) und der `refRohAbgleich()`-Widerspruchshinweis. Rest:
> Markt-Zeilen mit Prozentzahlen, BTTS-Wort-Zeile, Begründung, der tatsächliche Endstand
> (zu unterscheiden vom Ergebnis-Tipp, der im Kopf bleibt), die Knopf-Zeile. **Ehrlich
> benannt:** Weil die beiden Warn-Zeilen jetzt vor statt hinter dem aufklappbaren Teil
> stehen, ändert sich im aufgeklappten Zustand ihre Position gegenüber vorher — notwendige
> Folge davon, dass sie beim Einklappen sichtbar bleiben sollen. Am Inhalt der Markt-Zeilen,
> Prozentzahlen, Begründung und Knöpfe ändert sich nichts.
>
> **Natives `<details>`/`<summary>` statt eigener Klapplogik** — die bestehende
> `.card`-Formatierung ist eine reine CSS-Klasse ohne Bindung an ein Element und gilt
> unverändert weiter; der Browser liefert dabei von selbst den verlangten Pfeil, keine neue
> Optik. Der Auf-/Zu-Zustand liegt aber **nicht** allein im DOM: `render()` baut bei jeder
> Änderung irgendwo in der App das komplette `innerHTML` neu auf, ein rein natives
> `<details>` würde dabei bei jedem Rendern wieder zuklappen. Deshalb eine neue, reine
> Anzeigevariable `kilogAufgeklappt` (ein Objekt, Eintrags-Id als Schlüssel) — wie `kilogTab`
> nicht Teil von `state`, Standard leer (alles eingeklappt). Ein `ontoggle`-Handler
> (`kilogToggle()`) schreibt bei jedem Öffnen/Schliessen den tatsächlichen Zustand dorthin
> zurück, **ohne** `render()` aufzurufen — das Auf-/Zuklappen selbst löst kein komplettes
> Neuzeichnen aus. Ein gemeinsames Objekt genügt für alle drei Reiter, weil jede Id aus
> Punkt 71 belegt genau einem Reiter angehört.
>
> **Verifiziert:** `node --check` bestanden. Trockentest bestanden — **20 neue Prüfungen**
> an der echten, aus `beta.html` herausgeschnittenen Funktion `vorhersageKarte()` (kein
> Nachbau): eine Karte ohne Eintrag in `kilogAufgeklappt` hat kein `open`-Attribut · ein
> Eintrag erzeugt das `open`-Attribut · alle vier Warn-Markierungen (GEPARKT,
> parkGrund-Abzeichen, `refEinig2von3`-Zeile, `refWiderspruch`-Zeile) stehen im `<summary>`,
> nicht dahinter · Markt-Zeilen, Begründung, Endstand und die Knopf-Zeile stehen weiterhin im
> aufklappbaren Rest · ein Aufruf mit nur zwei Argumenten liefert weiterhin genau ein `<div>`,
> nicht `<details>` · der übergebene Eintrag bleibt nach mehreren Aufrufen bytegleich (reine
> Anzeigefunktion) · `kilogToggle()` schreibt den tatsächlichen `open`-Zustand korrekt
> zurück. **Die bestehenden 57 (Punkt 68), 19 (Punkt 69), 19 (Punkt 70) und 19 (Punkt 71)
> Prüfungen erneut ausgeführt, alle weiterhin bestanden** — keine Regression. `pruefe.py`:
> ALLES SAUBER. **Keine neuen Sprachschlüssel** (254 unverändert — der native Pfeil braucht
> keine Beschriftung).

---

**73. iOS-Datumsfelder im KI-Log-Filter** · *Fund 3.9.2026, bisher nicht untersucht · Auftrag Ondo 4.9.2026, Kandidat 1 gebaut am selben Tag · 🔴 von Ondo am echten Gerät geprüft und ERNEUT GEÖFFNET am 5.9.2026 · Kandidat 2 gebaut 6.9.2026, von Ondo am echten Gerät geprüft — WEITERHIN WIRKUNGSLOS · Kandidat 3 gebaut 7.9.2026, Ondos eigene Wahl, 🔴 von Ondo am echten Gerät geprüft — ERNEUT WIRKUNGSLOS · Kandidat 4 gebaut 7.9.2026, auf Ondos eigenen Vorschlag, 🔴 von Ondo am echten Gerät geprüft — ERNEUT WIRKUNGSLOS · nach vorab vereinbarter Regel auf den Stand vor Punkt 73 ZURÜCKGESETZT, 7.9.2026* · **Status: 🔴 OFFEN, ZURÜCKGESETZT — vier CSS-Kandidaten hintereinander wirkungslos, kein fünfter Versuch ohne neuen Auftrag. `kilogFilterBlock()`s Datumsreihe ist wieder codegleich mit `logExportBlock()`s unverändert gebliebener Reihe — derselbe ursprüngliche Überlauf-Fehler besteht wieder, bewusst in Kauf genommen**

Die von/bis-Datumsfelder (`logExportBlock()`, `kilogFilterBlock()` aus Punkt 70/71) tragen
`text-align:center` inline im Code, erscheinen auf iOS trotzdem nicht zentriert.

> **🔴 Der tatsächliche Fehler ist ein anderer als der bis zum 5.9.2026 verfolgte (Ondo,
> 6.9.2026, am echten iPhone beobachtet und mit Bildschirmfoto belegt).** Nicht die
> Zentrierung des Textes ist das Problem, sondern die Breite des Feldes: In
> `kilogFilterBlock()` (KI-Log, Filterkarte) **ragt das rechte der beiden Datumsfelder
> („bis") über den Kartenrand hinaus** und sitzt nicht in derselben Flucht wie die Felder
> darunter (Wettbewerb, Mannschaft, Alle). **Beobachtet bei LEEREN Feldern.** Die
> Zentrierungsregel aus v19.8.16 (Kandidat 1) hat damit ein anderes Problem behoben als das
> tatsächliche — sie bleibt stehen, sie schadet nicht, aber sie war nie die Antwort auf
> diesen Befund.

> **🔴 Untersucht und behoben am 4.9.2026.** Ursache: eine dokumentierte WebKit-Eigenheit —
> `input[type="date"]` rendert seinen sichtbaren Inhalt über ein eigenes, browser-internes
> Element (`::-webkit-date-and-time-value`), auf das `text-align` am `input` selbst nicht
> wirkt. Der dafür vorgesehene, seit Langem gebräuchliche und nebenwirkungsfreie CSS-Weg:
> eine eigene Regel auf genau dieses interne Element, `input[type="date"]::-webkit-date-and-time-value{text-align:center;}`.
> Ändert nichts an Wert, Verhalten oder Bedienung des Feldes, nur an der Textausrichtung; in
> Browsern ohne dieses interne Element wirkt sie einfach gar nicht (keine Fehlermeldung,
> kein Schaden). Keine gebastelte Notlösung, sondern die für dieses Problem vorgesehene
> Standardlösung — deshalb angewendet statt nur als bekannte Grenze dokumentiert.
> **Ehrliche Grenze der eigenen Prüfung (Art. 11):** Diese Umgebung hat keinen Safari-/
> WebKit-Renderer (nur Chromium ist vorinstalliert) — die tatsächliche, sichtbare Zentrierung
> auf einem echten iPhone lässt sich von hier aus nicht selbst beobachten, nur dass die Regel
> syntaktisch korrekt ist und nichts an der bestehenden Funktion der Felder ändert. Ondo
> wird gebeten, nach der Lieferung kurz zu bestätigen, ob die Zentrierung jetzt greift.
> **Verifiziert:** `node --check` bestanden. Keine automatisierte Prüfung möglich (reine
> Bildschirmdarstellung ohne eigene Logik). `pruefe.py`: ALLES SAUBER. Keine neuen
> Sprachschlüssel, kein Schnitt in der Messreihe.

> **🔴 ERNEUT GEÖFFNET am 5.9.2026 (Ondo, am echten Gerät geprüft).** Ondo bestätigt: Die
> Regel zeigt auf seinem echten iPhone **keine sichtbare Wirkung** — die Datumsfelder
> erscheinen weiterhin nicht zentriert, obwohl der Code syntaktisch korrekt ist und genau
> die dafür dokumentierte WebKit-Eigenschaft anspricht. **Ausdrücklich NICHT in dieser
> Sitzung untersucht oder neu gebaut** (Auftrag Ondo, reine Dokumentpflege) — als offene,
> wieder aufgemachte Fehlerstelle für den Nachfolgechat festgehalten. **Mögliche nächste
> Schritte, unbearbeitet, nur als Vorschlag:** Browser-/Seiten-Cache auf dem Gerät prüfen
> (die Regel könnte technisch korrekt ausgeliefert, aber durch eine alte zwischengespeicherte
> Fassung von `beta.html` nicht angekommen sein) · Platzbedarf des kleinen Kalender-Icons
> im Feld prüfen (`::-webkit-date-and-time-value` zentriert den Text, das native Icon selbst
> nimmt aber eigenen Platz ein und könnte den sichtbaren Eindruck trotz korrekt zentriertem
> Text wieder verschieben) · Unterschiede zwischen iOS-/Safari-Versionen (die Pseudo-Klasse
> ist nicht in jeder WebKit-Version gleich implementiert, möglich, dass Ondos iOS-Version
> sie anders behandelt oder ignoriert). **Keiner dieser Wege ist geprüft — reine Vorschläge,
> kein Befund.**

> **🔴 UNTERSUCHT UND KANDIDAT 2 GEBAUT am 6.9.2026 (Auftrag Ondo, `beta.html` v19.8.17).**
> Der Auftrag verlangte ausdrücklich, vor jeder Änderung nach einem strukturellen Unterschied
> zwischen der Filterkarte im KI-Log und der Exportkarte zu suchen, der erklären könnte, warum
> nur eine der beiden sichtbar überläuft. **Zwei Funde, beide mit Codezitat belegt
> (Arbeitsregel H):**
>
> **Fund A — die im Auftrag vermutete Ursache scheidet aus, weil ihre Voraussetzung nicht mehr
> stimmt.** Der Auftrag verortet `logExportBlock()` im Mehr-Tab und erwägt eine „abweichende
> Kartenbreite zwischen Wetten- und Mehr-Tab". **Seit v19.8.15 (Punkt 71) steht
> `logExportBlock()` nicht mehr im Mehr-Tab**, sondern im KI-Log-Reiter „Werkzeuge"
> (`beta.html`, einzige Aufrufstelle: `body = korrFBlock()+logExportBlock();` im Zweig
> `kilogTab==='werkzeuge'`). Der Mehr-Tab ruft `messExportBlock()` auf — und das hat **gar
> keine Datumsfelder**. Beide Datumsreihen liegen damit im selben Reiter, im selben Container
> `#view` innerhalb derselben `.wrap` (`max-width:700px`) und in derselben `.card`
> (`padding:15px`). **Es gibt keinen Breitenunterschied.** Die im Auftrag erwogene Erklärung
> ist damit nicht nur unbelegt, sondern ausgeschlossen.
>
> **Fund B — der einzige inhaltliche Unterschied zwischen den beiden Reihen ist der Feldwert,
> und er deckt sich genau mit Ondos Beobachtung „bei LEEREN Feldern".** `logExportBlock()`
> setzt `value="'+heute+'"` an **beiden** Feldern — sie sind nie leer. `kilogFilterBlock()`
> setzt `value="'+esc(kilogVon)+'"` bzw. `esc(kilogBis)`, und beide Variablen sind mit
> `var kilogVon='', kilogBis=''` initialisiert — die Filterfelder **starten leer** und bleiben
> es, bis Ondo etwas einträgt. Ein leeres `input[type="date"]` zeigt auf iOS statt eines Werts
> einen Platzhalter. **Als Vermutung gekennzeichnet, ausdrücklich nicht als Befund (Art. 11,
> Arbeitsregel H):** dass dieser Platzhalter breiter ausfällt als ein formatiertes Datum und
> so die intrinsische Mindestbreite des Feldes erhöht, ist eine begründete Annahme — diese
> Umgebung hat keinen WebKit-Renderer und kann keine Breite messen.
>
> **Zweitwirkung von Fund B, die auch erklärt, warum Kandidat 1 wirkungslos blieb — ebenfalls
> Vermutung, nicht Befund:** `::-webkit-date-and-time-value` ist das interne Element, das den
> **Wert** rendert. Bei leerem Feld gibt es keinen Wert; die Regel hätte dort nichts zu
> zentrieren. Das würde zusammenpassen mit dem, was Ondo am Gerät gesehen hat, beweist aber
> nichts.
>
> **Warum Fund B den Bau von Schritt 3 nicht ersetzt, sondern stützt.** Der Auftrag stellt
> Schritt 3 unter die Bedingung „nur wenn Schritt 2 keinen spezifischeren Fund ergibt". Fund B
> ist spezifischer als die im Auftrag erwogene Kartenbreite — er erklärt die Asymmetrie —,
> **führt aber zu keiner anderen Abhilfe**: Gegen eine zu grosse intrinsische Mindestbreite,
> gleich ob sie vom Platzhalter oder vom nativen Kalender-Icon herrührt, ist genau
> `minmax(0,1fr)` der Riegel. Deshalb ist Schritt 3 wie beauftragt ausgeführt, und Fund B ist
> hier festgehalten statt gebaut. **Keine ungefragte zusätzliche Änderung** (Art. 8) — es wäre
> naheliegend, den Filterfeldern einen Vorbelegungswert zu geben, damit sie nie leer sind; das
> ist ausdrücklich **nicht** getan, weil es das Verhalten des Filters ändern würde (ein
> vorbelegtes Datumsfeld filtert sofort) und nicht beauftragt ist.
>
> **Was gebaut ist, nur an dieser einen Stelle:** Die Datumsfeld-Reihe in `kilogFilterBlock()`
> ist von Flexbox auf CSS-Grid umgestellt — `display:grid;grid-template-columns:minmax(0,1fr)
> minmax(0,1fr);gap:10px` statt `display:flex;gap:10px`, die beiden Container-Divs ohne
> `flex:1`, die Inputs mit `width:100%;box-sizing:border-box;text-align:center` statt nur
> `min-width:0`. **`min-width:0` bleibt an den Container-Divs stehen** — ein Grid-Item hat von
> sich aus `min-width:auto` und könnte die Spalte sonst trotz `minmax(0,1fr)` aufblähen; der
> Auftrag verlangte nur den Wegfall von `flex:1`. Warum Grid stärker ist als der bisherige
> Weg: Bei Flexbox setzt `flex-basis` auf der Inhaltsbreite auf, `min-width:0` erlaubt das
> Schrumpfen nur, erzwingt es nicht; `minmax(0,1fr)` legt die Spaltenbreite dagegen fest,
> unabhängig vom Inhalt.
>
> **`logExportBlock()` ist bewusst NICHT mitgeändert** (Auftrag Schritt 4), aus zwei Gründen:
> Erstens sind seine Felder nach Fund B nie leer, und genau bei leeren Feldern ist der
> Überlauf gemeldet — dieselbe Ursache liegt dort also nicht belegt vor. Zweitens ist eine
> unveränderte Stelle die **Vergleichsgrundlage**: Meldet Ondo nach dieser Lieferung, dass die
> Filterkarte sitzt und die Exportkarte weiterhin nicht, ist das der Beleg, dass die
> Grid-Umstellung wirkt. Ohne einen unveränderten Kontrollwert wäre das nicht unterscheidbar.
>
> **Verifiziert:** `node --check` bestanden. **Trockentest bestanden — 30 Prüfungen, alle
> bestanden**, an der echten, aus `beta.html` im Wortlaut herausgeschnittenen Funktion
> `kilogFilterBlock()` (kein Nachbau), zusammen mit `logExportBlock()` als Kontrollwert: der
> Container ist Grid und trägt beide `minmax(0,1fr)` · kein `flex:1` und kein `display:flex`
> mehr in der Datumsreihe · beide Container-Divs behalten `min-width:0` · beide Inputs tragen
> `width:100%;box-sizing:border-box;text-align:center` · beide bleiben `type="date"` mit
> unveränderten Ids und `onchange`-Handlern · leerer wie gefüllter Filterzustand wird korrekt
> durchgereicht · Wettbewerb-, Mannschaft-, Zurücksetzen- und Zählerzeile unverändert · der
> `modus`-Parameter aus Punkt 71 wirkt unverändert (kein Status-Feld bei „offen", genau drei
> Optionen bei „bewertet") · die Ausgabe ist tag-balanciert · `logExportBlock()` trägt
> weiterhin `display:flex` und `flex:1;min-width:0` und **kein** Grid, seine Felder sind nie
> leer · der Filterzustand bleibt nach mehreren Aufrufen unverändert (reine Anzeigefunktion) ·
> zwei gleiche Aufrufe liefern identische Ausgabe · die Regel aus Kandidat 1 steht weiterhin
> im Dokument. **Ein Fehlschlag im ersten Lauf war ein Messfehler der Prüfung selbst** (das
> Ausschnittfenster schnitt das öffnende Container-Div ab) — vor der Änderung an der Prüfung
> die tatsächliche Ausgabe der Funktion angesehen und belegt, dass der Code richtig ist; die
> Prüfung wurde präziser gemacht, **nicht gelockert** (Fehlerart C6 vermieden).
> `pruefe.py` ohne Argument: ALLES SAUBER.
>
> **Bericht zur Trockentest-Frage des Auftrags: Keine bestehende Trockentest-Prüfung berührt
> diese Anzeigefunktion.** Auf `main` liegt überhaupt keine committete Trockentest-Datei — die
> 57 (Punkt 68), 19 (Punkt 69), 19 (Punkt 70), 19 (Punkt 71) und 20 (Punkt 72) Prüfungen waren
> nicht committete Ad-hoc-Skripte früherer Sitzungen und stehen nicht mehr zur Verfügung.
> `selbsttest.py` (Punkt 47) existiert, liegt aber **nur auf dem Branch `mistral`**, nicht auf
> `main`; es prüft Syntax, Sprachschlüssel-Abgleich und `marktUrteil` — **keine
> Anzeigefunktion**, `kilogFilterBlock()` kommt darin nicht vor. **Trotzdem ausgeführt, gegen
> den neuen Stand:** Syntaxprüfung bestanden, Rechenproben bestanden, **Sprachschlüssel-Abgleich
> fehlgeschlagen — und zwar vorbestehend, nicht durch diese Lieferung.** Gegenprobe gegen den
> unveränderten `origin/main`-Stand von `beta.html` gelaufen: **identisches Ergebnis**, also
> keine Regression. Ursache: Das Regex-Muster des Skripts erkennt in der heutigen `beta.html`
> nur 67 DE-, 67 FR- und 0 EN-Schlüssel statt der tatsächlichen 254 je Sprache — das Skript
> stammt aus einem älteren Stand und ist nie nachgeführt worden. **Dieselbe Art Werkzeuglücke
> wie in Punkt 66 und in den Funden der Fassungen 69, 70 und 73: der Prüfer prüft eine
> Schreibweise, nicht eine Tatsache.** Massgeblich bleibt `pruefe.py` Abschnitt 13, der die
> Schlüssel selbst zählt und Gleichheit über DE/FR/EN prüft. **Nur festgehalten, nichts daran
> geändert** — das Skript liegt auf `mistral`, und dieser Branch ist ohne ausdrücklichen
> Auftrag nicht anzufassen.
>
> **Nicht angetastet, wie im Auftrag verlangt:** `kilogGefiltert()`, `state`, die Datenhaltung,
> `logExportBlock()`, `messExportBlock()`, die CSS-Regel aus Kandidat 1. Keine neuen
> Sprachschlüssel (254 unverändert). Kein Schnitt in der Messreihe — reine Anzeigefunktion.
> `APP_VERSION` weiter 18.
>
> **🔴 Der Punkt bleibt OFFEN.** Dies ist ein Kandidat, keine bestätigte Lösung. Ondo wird
> gebeten, am echten iPhone zu prüfen, ob das „bis"-Feld jetzt innerhalb des Kartenrandes
> sitzt und in derselben Flucht wie die Felder darunter — **und dabei die Exportkarte im
> Reiter „Werkzeuge" mit anzusehen**, die als unveränderter Vergleichswert stehen geblieben
> ist. Vorlaeufig durch Kandidat 3 abgeloest, siehe unten — dieser Absatz bleibt als
> Codehistorie stehen, nicht rueckwirkend veraendert.

> **🔴 KANDIDAT 2 AM ECHTEN GERÄT GEPRÜFT UND WIDERLEGT, 6.9.2026 (Ondo, Bildschirmfoto
> belegt, v19.8.17 bereits über GitHub Pages ausgeliefert).** Kandidat 2 hat **weder das
> Herausragen noch ein zusätzlich beobachtetes Überlappen der beiden Felder behoben** — der
> zweite Fehlschlag in Folge bei einer Nebeneinander-Aufteilung, nach unterschiedlichen
> CSS-Mechanismen (Flexbox mit `min-width:0` in Kandidat 1/2-Vorstufe, dann Grid mit
> `minmax(0,1fr)` in Kandidat 2 selbst). **Die Erklärung aus Fund B (leeres Feld → breiterer
> Platzhalter → `minmax(0,1fr)` als Riegel) war damit nicht die vollständige oder nicht die
> richtige Erklärung** — rein rechnerisch hätte der Grid-Umbau die Spaltenbreite unabhängig
> vom Feldinhalt erzwingen müssen; dass er es sichtbar nicht tut, spricht für eine Ursache
> **unterhalb** der CSS-Boxberechnung.
>
> **Neue, weiterhin ausdrücklich ungeprüfte Vermutung:** iOS/WebKit zeichnet das eingebaute
> Kalender-Symbol samt Platzhalter/Wert des nativen `input[type="date"]` womöglich
> **unabhängig von der berechneten Spaltenbreite** — die Layout-Box wäre dann korrekt schmal
> berechnet, aber die sichtbare Zeichnung ignoriert das und malt in voller nativer Grösse.
> Das würde beide von Ondo beschriebenen Symptome gleichzeitig erklären (Überlappen, weil
> beide Felder in voller Grösse zeichnen; Herausragen, weil die Zeichnung einfach dort endet,
> wo der Platz zu Ende ist) — **nicht verifiziert, diese Umgebung kann das nicht rendern.**
>
> **🔴 KANDIDAT 3 GEBAUT am 7.9.2026 (Ondos eigene Wahl zwischen zwei vorgeschlagenen Wegen —
> `overflow:hidden` als kleiner Zusatz, oder die Felder untereinander statt nebeneinander;
> Ondo hat sich für Letzteres entschieden), `beta.html` v19.8.18.** Die Datumsfeld-Reihe in
> `kilogFilterBlock()` steht jetzt **untereinander statt nebeneinander** — jedes Feld ein
> eigener Block, das zweite mit `margin-top:10px`, genau das Muster, das die Felder
> Wettbewerb/Mannschaft in derselben Karte bereits benutzen. Kein eigenes `width` mehr am
> Input nötig: `input,select{width:100%}` gilt bereits global (`beta.html` Zeile 33), wie bei
> den Feldern darunter auch. `min-width:0` an den Containern ist entfallen — ausserhalb eines
> Flex-/Grid-Kontexts ohne Wirkung, dieselbe Vereinfachung wie beim Rest der Karte.
> **Warum das strukturell sicherer ist als Kandidat 1/2:** Beide vorigen Kandidaten haben
> versucht, zwei Felder verlässlich auf eine gemeinsame Zeile mit fester Breitenteilung zu
> zwingen — das ist genau die Konstellation, in der eine native Kontrolle mit eigenem
> Platzbedarf mit ihrem Nachbarn kollidieren kann. Bei einer Zeile je Feld gibt es **keinen
> Nachbarn mehr, mit dem ein Feld um Breite konkurrieren müsste**, und die Kartenbreite bietet
> deutlich mehr Raum als ein einzelnes Datumsfeld braucht — ein Überlappen ist damit
> geometrisch ausgeschlossen, ein Herausragen nur noch denkbar, wenn ein einzelnes Feld breiter
> wäre als die ganze Karte, was bei keinem der bisherigen Funde beobachtet wurde.
> **Sichtbare Änderung, keine verborgene Fehlerbehebung:** Die Filterkarte wird zwei Zeilen
> höher als vorher — Ondo hat diesen Weg ausdrücklich gewählt, in Kenntnis dieser Folge.
> **`logExportBlock()` weiterhin bewusst NICHT mitgeändert**, aus demselben Grund wie bei
> Kandidat 2: Es ist die einzige Stelle, die seit v19.8.14 durchgehend unverändert blieb und
> damit die einzige verlässliche Vergleichsgrundlage für Ondos nächste Prüfung am Gerät.
> **Verifiziert:** `node --check` bestanden. **Trockentest bestanden — 32 Prüfungen, alle
> bestanden**, an der echten, aus `beta.html` im Wortlaut herausgeschnittenen
> `kilogFilterBlock()`, mit `logExportBlock()` weiterhin als Kontrollwert: kein `display:grid`,
> kein `display:flex` und kein `grid-template-columns` mehr in der Datumsreihe · kein
> `min-width` mehr an den Containern · das Von-Feld steht strukturell vor dem Bis-Feld, jedes
> in einem eigenen Block, der zweite mit `margin-top:10px` · beide Inputs ohne eigenes
> `width`/`box-sizing`, `text-align:center` bleibt erhalten · beide bleiben `type="date"` mit
> unveränderten Ids und `onchange`-Handlern · leerer wie gefüllter Filterzustand wird korrekt
> durchgereicht · Wettbewerb-, Mannschaft-, Zurücksetzen- und Zählerzeile unverändert · der
> `modus`-Parameter aus Punkt 71 wirkt unverändert, auch im Modus „bewertet" stehen die Felder
> untereinander · die Ausgabe ist tag-balanciert · `logExportBlock()` bleibt unverändert bei
> `display:flex` und `flex:1;min-width:0`, weiterhin nebeneinander · der Filterzustand bleibt
> nach mehreren Aufrufen unverändert, zwei gleiche Aufrufe liefern identische Ausgabe · die
> CSS-Regel aus Kandidat 1 steht weiterhin unverändert im Dokument. `pruefe.py` ohne Argument:
> ALLES SAUBER. Keine neuen Sprachschlüssel (254 unverändert). Kein Schnitt in der Messreihe —
> reine Anzeigefunktion. `APP_VERSION` weiter 18.
>
> **🔴 Der Punkt bleibt weiterhin OFFEN.** Auch das ist ein Kandidat, keine bestätigte Lösung —
> die dritte Vermutung in Folge, wieder ohne die Möglichkeit, sie hier selbst zu prüfen. Ondo
> wird gebeten, am echten iPhone zu bestätigen, ob die Datumsfelder jetzt innerhalb der Karte
> bleiben, ohne sich zu überlappen — und, falls auch das nicht wirkt, festzuhalten, ob das
> Symptom sich verändert hat (z. B. ragt jetzt gar nichts mehr heraus, aber der Text bleibt
> unlesbar, oder Ähnliches), weil das die nächste Vermutung eingrenzen würde. Der zweite,
> nicht gewählte Weg (`overflow:hidden` als kleinerer Zusatz statt der Umstellung auf
> untereinander) bleibt unverbraucht, falls Kandidat 3 ebenfalls nicht wirkt oder Ondo das
> Aussehen zweizeiliger Felder nicht behalten möchte. Ebenfalls unverbraucht bleibt der
> Cache-Verdacht aus der Wiedereröffnung vom 5.9.2026 — er ist bis heute weder geprüft noch
> ausgeschlossen.

> **🔴 KANDIDAT 3 AM ECHTEN GERÄT GEPRÜFT UND WIDERLEGT, 7.9.2026 (Ondo, drei Bildschirmfotos
> belegt, v19.8.18 über GitHub Pages ausgeliefert).** Auch die Umstellung auf untereinander
> hat das Überlaufen nicht behoben — **dritter Fehlschlag in Folge**, nach drei verschiedenen
> CSS-Mechanismen (Flexbox, Grid, Blockstapel). Ondos eigene Nachfrage war der entscheidende
> Hinweis: „Warum die Grösse nicht auf die von Wettbewerb (Teiltext) und Mannschaft (Teiltext)
> gleichsetzen?"
>
> **Nachgeprüft, mit Codezitat (Arbeitsregel H) — zwei Funde:**
> 1. **Es gibt keine versteckte CSS-Regel, die das erklären könnte.** Das gesamte Stylesheet
>    enthält für `input[type="date"]` nur zwei Regeln: die globale `input,select{width:100%;
>    …}` (Zeile 33, gilt für **alle** Inputs gleichermassen) und
>    `input[type="date"]::-webkit-date-and-time-value{text-align:center;}` aus Kandidat 1
>    (betrifft nur die Textausrichtung, nicht die Breite). Keine dritte, spezifischere Regel
>    überschreibt die Breite nur bei Datumsfeldern.
> 2. **Kandidat 3 hatte die Behandlung bereits exakt gleichgesetzt.** Die Datumsfelder tragen
>    seit v19.8.18 kein eigenes `width` mehr, genau wie `#kilogWettbewerb`/`#kilogMannschaft` —
>    beide Feldarten erben ausschliesslich dieselbe globale Regel, in derselben Karte, in
>    derselben Struktur (`<div><label>…</label><input…/></div>`). **Trotzdem überläuft nur das
>    Datumsfeld.** Das ist kein Vermutungsfund mehr, sondern ein direkter Vergleich: Die
>    einzige verbliebene Variable zwischen einem funktionierenden und einem nicht
>    funktionierenden Feld in derselben Karte, mit identischer CSS-Behandlung, ist das
>    Attribut `type="date"` selbst.
>
> **Was das bedeutet:** Nicht unsere CSS ist falsch — Safaris eigene, browserinterne
> Darstellung des nativen Datumsfelds ignoriert die von uns gesetzte `width:100%`
> offensichtlich für ihre eigene minimale Breite (Kalender-Symbol plus Platzhalter/Wert). Das
> ist ein bekanntes Verhaltensmuster bei nativen Formularelementen: Browser geben solchen
> Elementen oft eine eigene, interne `min-width`, die eine Autoren-`width`-Angabe allein nicht
> aussticht — dagegen hilft nur ein **eigenes, explizites `min-width:0` am `<input>` selbst**.
> **Das wurde bisher nie versucht:** Kandidat 2 setzte `min-width:0` nur an der umschliessenden
> Spalte (dem Grid-Item), nie am Input; Kandidat 3 hat `min-width:0` überall entfernt, weil es
> ausserhalb von Flex/Grid als wirkungslos eingeschätzt wurde — genau diese Einschätzung war
> vermutlich der Fehler, wenn die Ursache tatsächlich eine browsereigene `min-width` direkt am
> Element ist, nicht am umschliessenden Layout.
>
> **Kandidat 4, vorgeschlagen, NICHT gebaut:** `min-width:0` direkt an beiden
> `<input type="date">`-Elementen ergänzen, sonst nichts an Kandidat 3 verändern (Struktur,
> `width:100%` aus der globalen Regel, `text-align:center` bleiben). Eine einzelne, kleine,
> risikoarme Ergänzung — keine Rückkehr zu Grid oder Flex. **Zweiter, nicht ausgeschlossener
> Weg:** `overflow:hidden` an den Feld-Containern (aus Kandidat 3s eigener Vorlage weiterhin
> unverbraucht) — würde eine überschiessende Zeichnung abschneiden, statt sie zu verhindern;
> Risiko: bei sehr wenig Platz könnte der sichtbare Text selbst beschnitten wirken.
> **Dritter, deutlich grösserer Weg, nur benannt:** Den nativen Datumspicker ganz ersetzen
> (z. B. durch reinen Text mit eigener Validierung oder zwei `<select>`-Felder) — würde das
> Problem an der Wurzel umgehen, ist aber ein echter Eingriff in Bedienung und Verhalten, kein
> reiner Layout-Fix mehr, und deutlich teurer.
>
> **🔴 Nicht ungefragt weitergebaut.** Nach drei Fehlschlägen in Folge, jeder ohne die
> Möglichkeit, ihn vor der Auslieferung selbst zu prüfen, wartet Claude diesmal auf Ondos
> Entscheidung, bevor ein vierter Versuch geliefert wird — Kandidat 4 ist vorgeschlagen, aber
> **nicht** gebaut. **Kein Codeaufwand in dieser Lieferung**, `beta.html` bleibt v19.8.18.

> **🔴 KANDIDAT 4 GEBAUT am 7.9.2026 (auf Ondos eigenen Vorschlag — genau der vorgeschlagene
> Weg, ohne Abweichung), `beta.html` v19.8.19.** Einzige Änderung gegenüber Kandidat 3:
> `min-width:0` steht jetzt direkt an beiden `<input type="date">`-Elementen selbst
> (`style="min-width:0;text-align:center"`), nicht mehr nur — wie in Kandidat 2 — an einer
> umschliessenden Spalte, und nicht mehr — wie in Kandidat 3 — nirgends. Struktur, Reihenfolge,
> `width` (aus der globalen Regel), `text-align:center` und alles andere aus Kandidat 3
> unverändert. `logExportBlock()` weiterhin bewusst unverändert, als Kontrollwert.
>
> **Verifiziert:** `node --check` bestanden. **Trockentest bestanden — 29 Prüfungen, alle
> bestanden**, an der echten, im Wortlaut aus `beta.html` herausgeschnittenen
> `kilogFilterBlock()`, mit `logExportBlock()` weiterhin als Kontrollwert: beide Inputs tragen
> `min-width:0` direkt am Element · `text-align:center` bleibt erhalten · kein `display:grid`
> mehr, wie zuvor · Von-Feld steht strukturell vor Bis-Feld, beide in eigenen Blöcken, der
> zweite mit `margin-top:10px` · beide bleiben `type="date"` mit unveränderten Ids und
> `onchange`-Handlern · leerer wie gefüllter Filterzustand wird korrekt durchgereicht ·
> Wettbewerb-, Mannschaft-, Zurücksetzen- und Zählerzeile unverändert · der `modus`-Parameter
> aus Punkt 71 wirkt unverändert, auch im Modus „bewertet" tragen beide Felder `min-width:0` ·
> die Ausgabe ist tag-balanciert · `logExportBlock()` bleibt unverändert bei `display:flex` und
> `flex:1;min-width:0` · der Filterzustand bleibt nach mehreren Aufrufen unverändert, zwei
> gleiche Aufrufe liefern identische Ausgabe · die CSS-Regel aus Kandidat 1 steht weiterhin
> unverändert im Dokument. **Ein Fehlschlag im ersten Lauf war erneut ein Messfehler der
> Prüfung selbst** (eine zu strikte Positionsannahme, nicht die tatsächliche Struktur betreffend)
> — vor der Korrektur an der tatsächlichen Ausgabe belegt, die Prüfung präziser gemacht statt
> gelockert (Fehlerart C6 vermieden). `pruefe.py` ohne Argument: ALLES SAUBER.
>
> **🔴 Rücksetz-Regel vorab vereinbart, Ondos eigene Vorgabe: „Wenn es nicht klappt, dann
> alles zurücksetzen auf den ursprünglichen Stand."** Damit ist für den Fall eines vierten
> Fehlschlags bereits jetzt entschieden, was zu tun ist — kein weiterer Rückfrage-Zyklus nötig.
> **„Ursprünglicher Stand" ist damit festgelegt als:** die Flexbox-Struktur, die
> `kilogFilterBlock()`s Datumsfeld-Reihe vor Backlog-Punkt 73 hatte und die `logExportBlock()`
> bis heute unverändert trägt — `display:flex;gap:10px` am Container, `flex:1;min-width:0` an
> den beiden Feld-Divs, `min-width:0;text-align:center` an den Inputs. **Ausdrücklich NICHT
> zurückgesetzt würde dabei** die CSS-Regel aus Kandidat 1
> (`::-webkit-date-and-time-value{text-align:center;}`) — sie ist harmlos, hat nie eine
> Nebenwirkung gezeigt und war nie Teil des Überlauf-Problems. Meldet Ondo, dass Kandidat 4
> ebenfalls nicht wirkt, wird diese Rücksetzung ohne weitere Rückfrage ausgeführt, und Punkt 73
> geht dann in die grössere, nicht mehr reine Layout-Frage über (nativen Datumspicker ersetzen
> oder `overflow:hidden` als letzter, noch unversuchter kleiner Schritt).
>
> **Keine neuen Sprachschlüssel** (254 unverändert). **Kein Schnitt in der Messreihe.**
> `APP_VERSION` weiter 18. **🔴 Der Punkt bleibt weiterhin OFFEN** — die vierte Vermutung in
> Folge, wieder ohne die Möglichkeit, sie hier selbst zu prüfen.

> **🔴 KANDIDAT 4 AM ECHTEN GERÄT GEPRÜFT UND WIDERLEGT, 7.9.2026 (Ondo, zwei Bildschirmfotos
> belegt, v19.8.19 über GitHub Pages ausgeliefert) — VIERTER FEHLSCHLAG IN FOLGE.** Auch
> `min-width:0` direkt am `<input>` hat den Überlauf nicht behoben. Ondos eigener Auftrag,
> unmittelbar und ohne weitere Rückfrage: „Zurücksetzen."
>
> **🔴 ZURÜCKGESETZT am 7.9.2026, `beta.html` v19.8.20 — nach der vorab vereinbarten
> Rücksetz-Regel, ohne neuen Rückfrage-Zyklus.** `kilogFilterBlock()`s Datumsfeld-Reihe trägt
> jetzt wieder exakt den Aufbau, den sie vor Backlog-Punkt 73 hatte: `display:flex;gap:10px`
> am Container, `flex:1;min-width:0` an beiden Feld-Divs, `min-width:0;text-align:center` an
> beiden Inputs — **byte-für-byte derselbe Aufbau wie `logExportBlock()`s seit v19.8.14
> unveränderte Datumsreihe**, nur mit den eigenen Ids, `onchange`-Handlern und Werten. Alle
> vier Kandidaten (Zentrierung/v19.8.16, Grid/v19.8.17, untereinander/v19.8.18,
> `min-width:0` am Input/v19.8.19) sind damit rückgängig gemacht. **Bewusst NICHT
> zurückgesetzt:** die CSS-Regel aus Kandidat 1
> (`input[type="date"]::-webkit-date-and-time-value{text-align:center;}`) — sie war nie Teil
> des Überlauf-Problems, hat nie eine Nebenwirkung gezeigt, und Rückgängigmachen hätte hier
> nur ein zusätzliches, unbeteiligtes Detail verändert.
>
> **Ehrlich benannt: Der ursprüngliche Fehler besteht damit wieder** — das rechte Datumsfeld
> ragt bei leeren Feldern über den Kartenrand, genau wie vor dem ersten Auftrag zu Punkt 73
> am 4.9.2026. Das ist keine neue Regression, sondern die bewusste Rückkehr zum Ausgangspunkt,
> nachdem vier unterschiedliche, unabhängig begründete CSS-Ansätze am echten Gerät alle
> gescheitert sind.
>
> **Verifiziert:** `node --check` bestanden. **Trockentest bestanden — 25 Prüfungen, alle
> bestanden**, an der echten, im Wortlaut aus `beta.html` herausgeschnittenen
> `kilogFilterBlock()`, mit `logExportBlock()` als Kontrollwert — darunter, als direktester
> Beleg: Die Datumsreihe ist nach Normalisierung von Id, `onchange` und `value` **byte-genau
> identisch** mit `logExportBlock()`s Reihe. `pruefe.py` ohne Argument: ALLES SAUBER.
>
> **Kein fünfter CSS-Versuch ohne neuen Auftrag** — wie vorab vereinbart. **Zwei Wege bleiben
> unverbraucht, falls Ondo das Thema erneut aufnehmen möchte:** `overflow:hidden` an den
> Feld-Containern (nie ausprobiert, würde eine überschiessende Zeichnung abschneiden statt sie
> zu verhindern) · den nativen Datumspicker ganz ersetzen (grösserer Eingriff in Bedienung,
> nicht nur Layout). **Kein Eingriff an `kilogGefiltert()`, `state` oder der Datenhaltung.**
> Keine neuen Sprachschlüssel (254 unverändert). Kein Schnitt in der Messreihe. `APP_VERSION`
> weiter 18.

---

**65. Harte Leselängen-Grenze im Chat-Bereich bei rund 120.000 Zeichen** · *Fund 29.8.2026, Claude, bei der Übergabe an Chat 27 · Weg C als Dauerregel gewählt 11.9.2026, Ondo* · **Status: 🔴 Weg C als STEHENDE REGEL eingeführt am 11.9.2026 — Grenze weiterhin überschritten, wirkt aber jetzt dauerhaft statt einmalig**

Ein Raw-Link-Abruf im Chat-Bereich liefert nicht die ganze Datei, sondern bricht **exakt bei 120.000 Zeichen** ab — kein ungefährer Rand, eine feste Grenze. Zweifach geprüft: derselbe Abbruch an derselben Stelle, mit zwei verschieden angehängten Zahlen zum Umgehen der Zwischenspeicherung (Backlog-Punkt 53, Fund vom 22.8.).

**Betroffen ist der Backlog selbst**, eines der vier Pflichtdokumente: 150.591 Zeichen — **rund ein Fünftel fehlt** bei einem Abruf im Chat-Bereich, ohne dass eine Fehlermeldung erscheint. Nachgemessen über alle Commits: Der Backlog lag am 27.8.2026 abends bei 119.812 Zeichen, knapp unter der Grenze. **Mit Fassung 48 am 28.8.2026 (127.660 Zeichen) ist er darüber, und jede weitere Fassung seither noch weiter darüber.**

Auch betroffen, ausserhalb der Pflichtlektüre: `CHRONIK-2026-08.md` (164.036 Zeichen), `BACKLOG-ARCHIV.md` (122.003), `archiv/PROJEKT-STATUS.md` (199.347), `beta.html` (148.695 — wird ohnehin nicht ganz gelesen, siehe Ausnahme in `STAND.md`). `STAND.md`, `Blueprint.md` und `Ondo-Core-Architektur.md` liegen mit 60.896 / 43.501 / 11.302 Zeichen deutlich darunter.

→ **Nicht betroffen: der Code-Bereich.** Eine Sitzung dort liest Dateien direkt aus dem Repository, nicht über das Abrufwerkzeug des Chat-Bereichs — die Grenze tritt dort nicht auf. Gefunden hat sie folgerichtig eine Code-Sitzung, nicht ein Chat.
→ **Folge, solange nichts entschieden ist:** Jede Chat-Übergabe muss den fehlenden Teil eigens erkennen und nachliefern, wie am 29.8.2026 bei Chat 27 geschehen — sonst arbeitet ein neuer Chat mit einem Fünftel weniger Pflichtlektüre, ohne es zu merken.

**Drei Wege, mit Kosten (Arbeitsregel G):**
→ **A — Ganze Datei als Anhang hochladen.** Umgeht das Abrufwerkzeug, bewährtes Verfahren seit dem 3.8. Kosten: rund 150 KB Speicher in der jeweiligen Sitzung, bei jeder künftigen Übergabe erneut.
→ **B — Nur den fehlenden Teil gezielt nachliefern**, mit vorher gemessener, überlappender Nahtstelle. Kosten: gering (rund 30 KB), aber Handarbeit bei jeder betroffenen Übergabe, kein struktureller Fix.
→ **C — Backlog kürzen**, nach dem Vorbild von Punkt 18: Die gestapelten Abschnitte „Was Fassung N ändert" (48.553 Zeichen, knapp ein Drittel der Datei) ins Archiv verschieben. Kosten: eine Code-Sitzung, kein Geld. **Zwei Haken:** `BACKLOG-ARCHIV.md` liegt mit 122.003 Zeichen selbst schon über der Grenze — das Ziel wäre auch nicht vollständig lesbar. Und der maschinelle Verlustbeweis für den Backlog ist seit dem 27.8. übersprungen (Punkt 52, seit 30.8.2026 in `BACKLOG-ARCHIV.md`); eine neue Trennung bräuchte eine neue Vergleichsgrundlage, sonst gäbe es keinen Beweis, dass nichts verlorengeht.

→ **🔴 DRITTE BESTÄTIGUNG UND RÜCKFALL, 2.9.2026 — die Grenze ist wieder überschritten.** Bei der Übergabe an den Nachfolgechat brach der Backlog-Abruf erneut ab. **Der Nachfolger hat es von selbst gemeldet**, ohne danach gefragt worden zu sein, und den letzten empfangenen Text im Wortlaut genannt: `| **Wie un` — die Zeile nach dem „Fail Safe"-Eintrag in der Tabelle „Für Blueprint und Ondo-Core vorgemerkt". **Nachgemessen in der Code-Sitzung, nicht geschätzt:** Diese Stelle liegt bei **exakt Zeichen 120.000**. Damit ist die feste Grenze zum dritten Mal unabhängig belegt, diesmal mit einer von aussen gemeldeten und im Repo nachgerechneten Bruchstelle. **Der Backlog stand zu diesem Zeitpunkt bei 132.289 Zeichen — 12.289 darüber, rund ein Zehntel fehlte.** Ursache des Rückfalls: Weg C (Fassung 60) hatte den Backlog auf 108.699 Zeichen gebracht; die Fassungen 61 bis 69 haben ihn wieder darüber wachsen lassen, vor allem durch ausführliche Punkte, die im Haupttext stehen bleiben (genau der Fund, der in Fassung 60 schon benannt und nicht behoben wurde). **Weg C wirkt also, hält aber nicht** — er verschafft Luft, ohne die Ursache zu beseitigen. Der fehlende Rest ist nach Weg B nachgeliefert worden (12.299 Zeichen mit überlappender Nahtstelle). **Keine Entscheidung, kein neuer Weg** — nur der Beleg, dass die Wahl zwischen A, B und C ansteht, und dass B bei jeder Übergabe erneut Handarbeit kostet.
→ **Empfehlung Claude: B für die jeweils nächste anstehende Übergabe, C als spätere, von Ondo zu entscheidende Strukturfrage.** B behebt nichts dauerhaft, ist aber sofort verfügbar und günstig. C behebt die Ursache, ist aber nicht so dringend, dass sie vorgezogen werden müsste.
→ **Kein Schnitt in der Messreihe, kein Eingriff in `beta.html`.** Reine Dokument- und Arbeitsablauffrage.

> **🔴 ENTSCHIEDEN am 11.9.2026 (Ondo): Weg C, aber als stehende Regel statt Einmalaktion.**
> Genau der 2.9.2026 belegte Rückfall („Weg C wirkt, hält aber nicht") ist damit ausdrücklich
> adressiert — eine Regel im Dokument selbst (Regel 5, Abschnitt „Regeln für dieses
> Dokument") verschiebt jetzt bei jeder künftigen Lieferung automatisch den sechstältesten
> Fassungsabschnitt ins Archiv, ohne dass jemand erneut daran denken muss. Sofort angewendet:
> 28 Abschnitte (87 bis 60) verschoben, Backlog von 269.086 auf 192.220 Zeichen.
> **Die zwei ursprünglich genannten Haken bleiben unverändert bestehen, hier nicht gelöst:**
> `BACKLOG-ARCHIV.md` liegt selbst über der Grenze (jetzt noch weiter darüber), und ein
> automatischer Verlustbeweis für die Verschiebung fehlt weiterhin — beides wie beim
> ursprünglichen Weg C am 30.8.2026. **Wege A und B bleiben für den Chat-Bereich weiterhin
> nötig**, solange der Backlog selbst über der 120.000-Zeichen-Grenze liegt — Regel 5 senkt
> das Wachstum, behebt die Grenze selbst nicht.

---

**66. `pruefe.py` prüft Querverweise auf Existenz, nicht auf Fundort-Angabe** · *Fund 30.8.2026, ChatGPT beim Gegenlesen von PR #1, gemeldet über Chat 27* · **Status: Fund — nicht zu bauen, nur festgehalten**

`pruefe.py` Abschnitt 3 prüft, ob eine erwähnte Punktnummer irgendwo existiert — im Backlog oder in `BACKLOG-ARCHIV.md`, weil die Prüfung beide Dateien zusammen durchsucht. **Das ist eine andere Frage als die, ob ein Text mitteilt, WO der Punkt gerade steht.** Nach der Archivierung von zehn Punkten (Fassung 61) zeigten mehrere Querverweise im Backlog weiterhin nur auf die nackte Punktnummer, ohne zu sagen, dass der Punkt inzwischen im Archiv liegt — `pruefe.py` meldete dabei ALLES SAUBER, weil die Nummer ja auffindbar war.

→ **Belegt:** ChatGPTs Gegenlesen zu PR #1 fand vier solche Stellen (Backlog); eine anschliessende vollständige Nachsuche über Backlog, `STAND.md` und Blueprint fand **26 weitere**, darunter fünf allein zu Punkt 47 — beim ersten Durchgang komplett übersehen, obwohl dieselbe Sorgfalt galt. Alle 30 sind mit Fassung 62 nachgetragen (gezählt an der tatsächlichen Zeilenzahl mit der neuen Fundort-Angabe, nicht geschätzt).
→ **Warum das keine Kleinigkeit ist:** Ein Prüflauf, der „ALLES SAUBER" meldet, obwohl Fundort-Angaben fehlen, erzeugt genau die falsche Sicherheit, vor der Fehlerart C6 warnt — der Prüfer prüft nur, was er zu prüfen gelernt hat, nicht das eigentliche Problem.
→ **Vorschlag, nicht gebaut:** Abschnitt 3 könnte zusätzlich prüfen, ob ein Verweis auf einen ausschliesslich im Archiv stehenden Punkt in unmittelbarer Nähe (gleicher Satz oder gleiche Zeile) einen Hinweis auf `BACKLOG-ARCHIV.md` oder das Wort „archiviert" trägt. Nicht trivial: Der Prüfer bräuchte eine Regel dafür, wie nah „in unmittelbarer Nähe" sein muss, und liefe sonst Gefahr, selbst wieder nur eine formale Bedingung zu prüfen statt der eigentlichen Verständlichkeit.
→ **Kosten:** eine Codeänderung an `pruefe.py`, die vermutlich neue eigene Randfälle mitbringt (z. B. mehrere Punktnummern im selben Satz, wie in mehreren der jetzt gefundenen Stellen). Nicht jetzt zu bauen — erst wenn eine zweite, unabhängige Archivierung zeigt, ob das Problem wiederkehrt oder ob die manuelle Nachsuche ausreicht (Arbeitsregel D: ein Einzelfall beweist keine Notwendigkeit).
→ **🔴 Ergänzung 30.8.2026, Fassung 63 — die manuelle Nachsuche selbst stösst nachweislich an Grenzen:** Trotz der als „vollständig" bezeichneten Nachsuche zu Fassung 62 fand Ondo beim eigenen Gegenlesen noch eine 31. Stelle (`STAND.md`, „Beta zuvor: v19.8.3" — Punkt 2 ohne Fundort). Bei der daraufhin verlangten erneuten, unabhängigen Suche in `Blueprint.md` fand die Code-Sitzung dabei einen eigenen Fehler in ihrer ersten Suchmethode: Das verwendete Muster erkannte Genitiv-Formen wie „Punkt 51s" nicht, weil zwischen einer Ziffer und einem folgenden Buchstaben keine Wortgrenze liegt. **Folgenlos in diesem Fall** — jede so verpasste Stelle stand zufällig im selben Satz wie eine bereits korrekte Angabe —, aber ein zweiter, unabhängiger Beleg dafür, dass Mensch und Ad-hoc-Skript bei drei Dokumenten und zehn Nummern beide je eigene, unterschiedliche Lücken übersehen. **Stützt den oben genannten Vorschlag stärker, als ein Einzelfall es könnte — bleibt aber aus denselben Kostengründen unentschieden.**

---

### Als v19.7 gebaut am 3.8.: A · 0a · 1 · D — Bewährungszeit läuft


**E. „Prüfen statt suchen"** · *Idee 25.7., ChatGPT · Beschluss Ondo 25.7., Bau bestätigt 27.8.* · **Status: 🔴 GEBAUT am 27.8.2026, mit Rückfall-Zusage**

> **🔴 GEBAUT am 27.8.2026:** Zwei Änderungen am Schiedsrichter-Auftragstext in `beta.html` (v19.8.3). Erstens die eigentliche Umformulierung von ChatGPT: Wettbewerb wird jetzt an den Schiedsrichter mitgegeben (vorher nur Spielname, Datum, Anpfiff), und der Auftrag beginnt mit „Deine Aufgabe ist BESTAETIGEN, nicht frei suchen" — ein Ergebnis zählt nur, wenn Wettbewerb, Datum und beide Teams übereinstimmen, sonst „nicht_gefunden". Zweitens Geminis Ergänzung vom 8.8.: eine vierte Regel in der Fehlerliste, die ein torloses 0:0 ausdrücklich von einer Verlegenheitsantwort abgrenzt — Ziffern nur bei konkret bestätigtem 0:0. **Ondos Auflage:** Funktioniert es nicht, wird eine andere Lösung gesucht oder der Schritt rückgängig gemacht.
> **Weiterhin gültig (Claude, Art. 14):** Das senkt die Wahrscheinlichkeit erfundener Ergebnisse, schliesst sie nicht aus. Ob es wirkt, zeigt erst der nächste Prüflauf.

**⚠ NICHT MEHR BLOCKIERT (8.8.).** Geminis Rückfrage vom 4.8. — wie ein Prüf-Auftragstext ein **echtes** 0:0 von einem „nicht gefunden" unterscheidet — ist im Bericht nach Arbeitsregel K vom 8.8., 06:35 Uhr gestellt und **von Gemini selbst beantwortet worden**. Sein Vorschlag: Das Modell muss den **Zustand** klassifizieren, bevor es Ziffern ausgeben darf — sinngemäss „Status: beendet, Ergebnis 0:0" gegen „Status: nicht gefunden", und Ziffern ausschliesslich bei bestätigtem torlosem Unentschieden.
*Vermerk 28.8.2026: Gemini (Urheber der Rückfrage) ist seither nicht mehr am Projekt beteiligt. Die Frage und sein eigener Vorschlag dazu bleiben unverändert gültig — der Beteiligtenwechsel ändert nichts an der Sachfrage.*

→ **ChatGPT widerspricht** und antwortet auf dieselbe Frage „nein, ohne externe Quelle nicht". **Die Prüfer sind hier uneins.**
→ **Einordnung Claudes (Art. 14):** Geminis Formulierung trennt Zustand und Ergebnis und ist dadurch eine echte Verbesserung. **Sie beseitigt die neunte Fehlerart nicht.** Ein Modell, das ein Ergebnis erfindet, kann ebenso gut den Status erfinden. Sie senkt die Wahrscheinlichkeit, sie schliesst nichts aus.
→ **Kein Schnitt in der Messreihe:** Der Punkt ändert den Auftragstext des **Schiedsrichters**, nicht den der Gehirne. Arbeitsregel J greift hier nicht — dieselbe Begründung wie bei Punkt 26.
→ **Prüfbar wäre er:** Ein erfundenes 0:0 fällt heute nicht auf, weil Halbzeit 0:0 zu Endstand 0:0 passt. Mit Status-Kennzeichnung gäbe es zum ersten Mal ein Feld, dessen Fehlen auffällt.
→ **Status: entscheidungsreif. Ondo entscheidet, ob gebaut wird. Beide Prüfer raten, jetzt nichts zu bauen, sondern erst die Entscheidungen festzuhalten.**

ChatGPTs Umformulierung, im Blueprint unter dem 25.7. protokolliert: **Der Schiedsrichter soll nicht suchen, sondern prüfen.** Nicht „finde Spiel X", sondern „hier sind Wettbewerb, Datum, Heim, Gast — bestätige nur, wenn alle vier übereinstimmen".

**Stand im Code:** Der Auftrag beginnt bis heute mit „Ermittle per Websuche … den ENDSTAND". Übergeben werden nur Spielname, Datum und Anpfiffzeit — **der Wettbewerb gar nicht.** Die Wettbewerbspflicht aus v19.2 wirkt erst hinterher, als Warnung an Ondo.

**Vermutete Folge:** die erfundenen 0:0 vom 31.7. Ein Modell, das suchen soll, liefert irgendetwas; ein Modell, das bestätigen soll, kann „nein" sagen. **Vermutung, nicht bewiesen (Art. 13).**

→ **Beide Prüfer, 4.8.: „Prüfen statt suchen trifft den Kern."** Die Aufgabe zu schärfen ist mächtiger, als ein größeres Modell auf einen unscharfen Auftrag zu werfen. Nach der Rücknahme von 0a ist E der einzige verbliebene Ansatz gegen erfundene Ergebnisse.
→ **🔴 Berichtigt (27.8., Fehlerart C4 — Widerspruch im selben Dokument):** Hier stand weiterhin „Offene Rückfrage von Gemini, bisher unbeantwortet" — das war seit dem 8.8. nicht mehr richtig, siehe die Notiz „NICHT MEHR BLOCKIERT" oben: Gemini hat die eigene Rückfrage selbst beantwortet (Zustand vor Ziffer). Die Frage ist damit **beantwortet, nicht mehr offen** — was fehlt, ist Ondos Entscheidung, ob Geminis Antwort (gegen ChatGPTs Widerspruch) übernommen wird. Hängt zusammen mit ChatGPTs offener Frage vom 30.7.: Darf der Schiedsrichter überhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten? Diese Frage gehört in den Blueprint.
→ *Warum es drei Tage unentdeckt blieb: Der Beschluss stand nur im Blueprint-Protokoll, nie im Backlog. Genau der Fall, gegen den Arbeitsregel F gemacht wurde.*

---

**0b. Widersprüche messen statt korrigieren** · *Idee 29.7., Ondo · Wiederaufnahme ENTSCHIEDEN 7.9.2026, Ondo · Umsetzungsfrage ENTSCHIEDEN und GEBAUT 11.9.2026, Ondo* · **Status: 🔴 GEBAUT am 11.9.2026, `beta.html` v19.8.25 — Widerspruchsquote je Markt (Sieger bewusst ausgenommen)**

Ursprünglich: Widersprüche zwischen Ergebnis-Tipp und Marktaussage bekommen eine eigene Kennzahl je Gehirn.

**Warum zurückgestellt:** Nach dem Befund unter Punkt A würde eine Widerspruchsquote keine Eigenschaft der Gehirne messen, sondern eine unklare Formulierung im Auftragstext. Eine Kennzahl, die dem Gehirn anlastet, was die Frage verursacht hat, wäre selbst ein Messfehler.

**Zwei Korrekturen am ursprünglichen Beschluss, falls er wiederaufgenommen wird:**
1. Die Quote ist **rückwirkend** aus den vorhandenen Daten auslesbar (`gedreht`-Vermerk), ohne neue Messung.
2. Der Vorsatz „die betroffene Aussage fließt nicht in die Kalibrierung ein" ist **falsch herum**. Die umgedrehte Aussage ist die, an die das Gehirn glaubt. Sie herauszunehmen entfernt ehrliche Daten.

→ *Wiederaufnahme nach Test A.* Test A ist am 5.8. abgeschlossen; die Voraussetzung war damit erfüllt.

> **🔴 Widerspruch im Punkt selbst behoben (7.9.2026, gefunden von Chat 29 beim Beantworten
> der Frage — die Kopfzeile sagte „zurückgestellt", der Schlusssatz „Entscheidung Ondos steht
> aus", ein Fehlerart-C4-Fall, den `STAND.md`s Entscheidungstabelle bereits als offen benannt
> hatte).** Ondo hat entschieden: **ja, wieder aufnehmen.**
>
> **Neuer Fund, mit Codezitat, bevor gebaut wird (Arbeitsregel H):** Der ursprüngliche Grund
> für die Zurückstellung — Punkt A, die Ambiguität der Frage „beide treffen" — ist **inzwischen
> für genau diesen Markt behoben.** Bis v19.8.0 wurde die BTTS-Behauptung aus dem getippten
> Ergebnis **abgeleitet**, statt das Gehirn direkt zu fragen; das erzeugte Widersprüche, die
> nicht am Gehirn lagen, sondern an unserer eigenen Ableitungslogik (belegt in
> `Ondo-Core-Architektur.md`, Abschnitt 1b, als einer von zwei dokumentierten Verstössen gegen
> die Drei-Ebenen-Trennung). **Seit v19.8.0 wird das Gehirn beim Markt „beide treffen" direkt
> gefragt** — für diesen Markt misst eine Widerspruchsquote jetzt wieder etwas Echtes.
>
> **Was noch nicht geprüft ist, ausdrücklich als offene Frage benannt, nicht als Befund:** Der
> Markt „Sieger" (1x2) wird weiterhin **aus dem Tipp abgeleitet**, nicht separat erfragt — dort
> kann es strukturell keinen Widerspruch geben (die Ableitung stimmt mit sich selbst immer
> überein). Ob beim Markt „Über/Unter 2,5 Tore" (seit jeher direkt erfragt, nie von der
> Ableitungs-Ambiguität aus Punkt A betroffen) eine andere, unbehobene Ambiguität besteht, ist
> **nicht untersucht.** **Deshalb, vor dem Bau zu klären:** Eine Widerspruchsquote sollte
> vermutlich **je Markt getrennt** ausgewiesen werden statt als eine gemeinsame Zahl über alle
> drei Märkte — sonst würde ein sauberer Markt („beide treffen") mit einem womöglich noch
> unsauberen vermischt. Das ist eine Umsetzungsfrage, keine Grundsatzfrage, und heute nicht
> entschieden.

> **🔴 Umsetzungsfrage entschieden und gebaut, 11.9.2026 (Ondo: „ja bau das so").** Getrennt je
> Markt, nicht als eine gemeinsame Zahl — Begründung: Der Markt „Sieger" wird in
> `maerkteBauen()` immer direkt aus dem Tipp abgeleitet, nie eigens gefragt, kann also
> strukturell nie einen Widerspruch zeigen. Eine gemeinsame Zahl hätte echte Widersprüche bei
> „Tore" und „beide treffen" künstlich verwässert — selbst eine Art Scheinpräzision (Art. 14).
> **Rückwirkend aus vorhandenen Daten, keine neue Messung** (wie ursprünglich vorgesehen): Neue
> reine Funktion `calcWiderspruch(quelle)` zählt das seit jeher gesetzte Kennzeichen
> `m.gedreht` — es markiert bereits genau den Fall, dass die eigens gefragte Prozentzahl der
> vom Tipp implizierten Seite widerspricht (unter 50 %, bezogen auf die Tipp-Seite).
> **Bewusst kein Status-Filter**, anders als bei Kalibrierung/Brier/Streuung: Der Widerspruch
> entsteht beim Vorhersagen selbst, nicht erst beim späteren Prüfen des Ergebnisses — auch
> offene oder geparkte Aussagen zählen mit, eine Einschränkung auf bewertete Aussagen hätte die
> Stichprobe nur ohne inhaltlichen Grund verkleinert. Anzeige in der bestehenden
> Kalibrierungstabelle, je Gehirn.
> **Verifiziert:** `node --check` bestanden. Trockentest mit **12 Prüfungen** an der echten,
> herausgeschnittenen `calcWiderspruch()` — unter anderem der Beleg, dass der Markt „Sieger"
> selbst bei irrtümlich gesetztem `gedreht` nicht mitgezählt wird, und dass Einträge von vor
> der v19-Grenze aussen vor bleiben. `pruefe.py` danach: ALLES SAUBER.
> **1 neuer Sprachschlüssel** (`widersprT`; 275 → 276). **Kein Schnitt in der Messreihe.**
> `APP_VERSION` weiter 18.

---

**0c. Amtliche Quellen bevorzugen** · *Idee 30.7., Claude · als Negativliste gebaut 3.9.2026* · **Status: 🔴 TEILWEISE GEBAUT am 3.9.2026 — als NEGATIVliste, nicht als Positivliste. Die ursprüngliche Idee einer bevorzugten Quelle je Wettbewerbsfamilie bleibt ausdrücklich unerledigt und wurde bewusst NICHT gebaut**

Beim UEFA-Abgleich am 30.7. benutzte keine Schiedsrichter-Antwort `uefa.com`. Die falschen Ergebnisse stammten von `terrikon.com` und `flashfussball.de`. Am 31.7. kamen vier 0:0 in Folge aus derselben Quelle.

→ *Vorschlag: pro Wettbewerbsfamilie eine bevorzugte Quelle vorgeben. Die bestehende Quellenpflicht verlangt nur, **dass** eine Quelle genannt wird, nicht **welche**.*
→ *ChatGPT (30.7.) hält diesen Punkt für billiger als eine zweite unabhängige Quelle.*

> **🔴 GEBAUT am 3.9.2026 als Teil 3 des Schiedsrichter-Auftrags, `beta.html` v19.8.12 — aber ausdrücklich anders als oben vorgeschlagen.**
>
> **Ondos Begründung gegen die Positivliste:** Eine Liste „amtlicher" Quellen deckt Wettbewerbe ausserhalb Europas (z. B. Gabun, Indien) nicht ab und würde eine Vollständigkeit vortäuschen, die nicht besteht. Gebaut ist deshalb eine kurze **Negativliste** in `quelleUnzuverlaessig()`:
> - **Belegt falsch (30./31.7.2026):** `terrikon.com`, `flashfussball.de`.
> - **Wett- und Buchmacherseiten** (`tipico`, `bet365`, `bwin`, `interwetten` und weitere): **Blueprint Grenze 5** belegt technisch, dass solche Seiten ihre Zahlen erst im Browser per JavaScript nachladen — ein Abruf sieht nur Werbetext.
>
> **Jede andere genannte Quelle zählt neutral, ohne Sonderstellung und ohne Rangfolge untereinander** — auch OneFootball, Flashscore, Sofascore und UEFA.com. Es gibt **keine** Pflicht zu drei verschiedenen Quellen; bei unterklassigen Wettbewerben kann es nur eine geben (Blueprint Grenze 6/7).
>
> **Wirkung (Entscheidung Ondos, 3.9.2026):** Ein Lauf mit einer Quelle von der Negativliste bleibt **vollständig sichtbar** (`refRoh`, Vorschlag, Text-Ausgabe) und wird benannt — er zählt aber bei der Einigkeitsprüfung aus Punkt 68 **nicht als Beleg**. Bleiben dadurch weniger als drei brauchbare Läufe, wird nichts übernommen und im nächsten Durchgang erneut gefragt.
>
> **Nennen alle drei Läufe dieselbe Quelle, zählt das als EIN Beleg, nicht als drei unabhängige.** Der Eintrag wird übernommen und trägt sichtbar „3 Läufe, 1 Quelle" (`e.refLaeufe`/`e.refQuellen`), in Karte und Log-Text-Export.
>
> **🔴 Zwei Grenzen, ausdrücklich benannt (Art. 14):**
> 1. **Die Liste erkennt nur, was auf ihr steht.** Eine unbekannte Wettseite fällt durch. Das ist der Preis dafür, keine Erkennung zu bauen, die auf Wortmustern rät und dabei echte Quellen fälschlich aussortiert.
> 2. **Der Beleg zu Grenze 5 wurde mit WETTQUOTEN geführt, nicht mit Endständen.** Dieselbe technische Ursache träfe vermutlich auch den Endstand auf derselben Seite — **bewiesen ist das für Endstände nicht.** Die Einstufung dieser Seiten beruht insoweit auf einer begründeten Annahme, nicht auf einer Messung.
>
> **Was offen bleibt:** die ursprüngliche Idee dieses Punktes, je Wettbewerbsfamilie eine bevorzugte Quelle vorzugeben. Sie ist nicht gebaut und nicht abgelehnt — sie ist durch die Negativliste nur weniger dringlich geworden.

---

**B. Regressionstest mit den 13 Ergebnissen als feste Prüfbibliothek** · *Idee 30.7., ChatGPT* · **Status: Idee, zur Entscheidung Ondos**

Die 13 Ergebnisse vom 29./30.7. mit den amtlichen UEFA-Werten als dauerhafte Prüfgrundlage festhalten. Jede künftige Änderung am Schiedsrichter wird daran gemessen.

→ **Bedingung: Die 13 Ergebnisse dürfen NICHT übernommen werden.** Ein Übernehmen zerstört den Vergleich und schreibt zwei falsche Endstände dauerhaft in die Messdaten.
→ *Empfehlung Claude (31.7.): als reines Dokument anlegen, nicht als Code. Kosten: null, kein API-Aufruf, eine Tabelle. Nutzen: Die Werte überleben, falls die App-Daten je verloren gehen, und die technische Schuld „kein automatischer Test" bekommt ihren ersten Gegenpunkt.*

---

**C. Vertrauensklassen statt binär gefunden/nicht gefunden** · *Idee 30.7., ChatGPT* · **Status: Idee**

Kern von ChatGPTs Architekturantwort: **Formvalidierung statt Inhaltsvalidierung.** Die sechs Absicherungen prüfen die Bauform der Antwort, nicht ihre Wahrheit. Bei Lech Poznań 3:4 meldeten alle „in Ordnung" — das Ergebnis war trotzdem falsch. Bei den erfundenen 0:0 vom 31.7. ebenso.

→ *Vorschlag: mehr als zwei Zustände, abgestuft nach Verlässlichkeit der Quelle und Übereinstimmung.*

---

**3. Such-Experiment** · *Idee 23.7., Claude* · **Status: 🔴 überholt (Ondo, 12.9.2026)**

Vier Wochen ohne Websuche messen, dann Suche zuschalten, Kalibrierung vergleichen. Die Messung ohne Suche läuft seit dem 23. Juli — **vier Wochen sind am 20. August um.**

→ **🔴 Berichtigt (27.8.):** Hier stand „die Pause bricht den zweiten Teil", weil ein Vergleich mit Suche neue Vorhersagen brauche und die Pause seit 14.8. keine liefere. **Das war ab dem 25.8. nicht mehr richtig** — laut KI-Log gibt es am 25.8. (24 offene) und 26.8. (10 offene) neue Vorhersagen. Der zweite Teil ist also technisch wieder möglich, eine kleine Messreihe könnte jederzeit gestartet werden.
→ **Ondos Entscheidung (27.8.): trotzdem vorerst ruhen lassen.** Keiner der drei Wege ist damit ausgeschlossen, nur bewusst noch nicht gewählt.
→ **Kosten:** Ruhenlassen und Streichen kosten nichts. Zusätzliche Läufe kosten Modellaufrufe in unbekannter Höhe, weil die Zahl der nötigen Läufe nicht feststeht.
→ *Hier stand bis heute „Empfehlung Claude weiterhin: ruhen lassen" — vorherige Einschätzung, durch Ondos Entscheidung vom 12.9.2026 ersetzt, nicht stillschweigend überschrieben.*
→ **🔴 Ondos Entscheidung (12.9.2026): kein Mehrwert, endgültig nicht weiterverfolgt.** Wörtlich: „Wir würden weiterhin eine Endlose Schleife drehen." Ondo hat im selben Zug einen Ersatzvorschlag gemacht — siehe Punkt 77 (Trainingsraum), der dasselbe Ziel (mehr Messdaten für Kalibrierung/Entschlossenheit) auf einem anderen Weg verfolgt.

---

**77. Trainingsraum — Gehirne an bereits ausgewerteten Spielen testen, ohne Erinnerung/Websuche** · *Idee Ondo, 12.9.2026 (Ersatzvorschlag für Punkt 3) · Auftrag Ondo 12.9.2026: „nicht einfach Auftrag erledigen und fertig, sondern vorher wirklich durchdenken, absichern und zukunftsfähig konzipieren" · Plan geprüft und für tragfähig befunden, Bau ohne weitere Rückfrage ausdrücklich freigegeben* · **Status: ✅ GEBAUT 12.9.2026, `beta.html` v19.9.0**

Ondo wörtlich (Grundidee): „Es gibt die Möglichkeit einen Trainingsraum zu bauen … mit den bereits ausgewerteten Spielen, wo die Gehirne diese Tests durchlaufen könnten ohne Zugriff auf Erinnerung und Websuche … Das würde uns viel Zeit sparen." Beide Wege sollen von Anfang an vorgesehen sein: **Weg (a)** bereits ausgewertete App-Spiele (aktiv genutzt), **Weg (b)** öffentlich bekannte historische Spiele (Datenstruktur steht, „müssen wir jetzt noch nicht aktiv nutzen").

**Vollständiger Plan, Selbstkritik und Architektur-Einordnung: `Ondo-Core-Architektur.md`, Abschnitt 1d** (Punkt 45 — hier nur die Kurzfassung, nicht doppelt geführt).

> **Kern der Lösung:** `vorhersageGehirn()` unverändert wiederverwendet — sie ruft beide Gehirne bereits **ohne Websuche** auf, dafür musste nichts Neues gebaut werden. Eine **Zulassungsregel nach Trainings-Stichtag** (`TRAININGSRAUM_STICHTAG`, von Claude gepflegt, Werte im ISO-Format) verhindert, dass ein Modell ein Ergebnis aus seinen Trainingsdaten „kennt" — ohne geprüftes Datum **null zulässige Spiele**, keine geratene Grenze (Art. 11). Da das Ergebnis bei Weg (a)/(b) immer schon bekannt ist, liegt die Bewertung **sofort** vor — kein Schiedsrichter-Schritt, kein Warten. Eigenes Protokoll `state.trainingsraumProtokoll`, streng getrennt vom Evidence Ledger (`state.kiProtokoll`).
> **Zwei echte Fehlerquellen selbst gefunden und vor der Auslieferung behoben** (keine von Ondo genannt): (1) `new Date()` auf einem deutschen Datumstext ist unzuverlässig — beim eigenen Trockentest aufgefallen, behoben durch feste ISO-Daten. (2) Ein Wettlauf-Risiko in der geteilten Variable `zuletztModell.gehirn` bei zwei potenziell gleichzeitigen Aufrufern (Live-Vorhersage und Trainingsraum) — behoben durch das ohnehin vorhandene, je Aufruf eigene Antwortfeld `modelVersion` statt der geteilten Variable; ein Sperr-Flag `kiAnfrageAktiv` verhindert zusätzlich überlappende Läufe.
> **Ein Fund bei der Selbstkritik, noch vor dem ersten Lauf korrigiert:** Die erste Fassung der „schon gesehen"-Regel hätte den Weg-(a)-Vorrat für beide Gehirne fast leergeräumt (weil `vorhersagen()` beide Gehirne meist gemeinsam auf dieselbe Liste ansetzt). Korrigiert auf die tatsächliche Leckquelle: nur die letzten sechs eigenen Vorhersagen erscheinen im `fruehere`-Kontext — nur die zählen als „schon gesehen", nicht jede Vorhersage, die dieses Gehirn je abgegeben hat.
> **„Kader, Verletzte" (Ondos Beispiel für nötige Informationen) sind NICHT Teil von v1** — die App sammelt diese Felder heute für keine Vorhersage, weder live noch im Trainingsraum. Eine eigene, neue Datenquelle mit eigenen Kosten, offen als spätere Erweiterung vermerkt.
> **Verifiziert:** `node --check` bestanden · **40 neue Prüfungen** an den echten, herausgeschnittenen Funktionen, darunter ein Regressionstest für den Wettlauf-Fund (zwei „gleichzeitige" Aufrufe mit unterschiedlicher Auflösungsreihenfolge) · die bestehenden 121 (IndexedDB) und 45 (v19.8.28) Prüfungen erneut gelaufen, alle weiterhin bestanden · `pruefe.py`: ALLES SAUBER.
> **12 neue Sprachschlüssel** (306 → 318). Kein Schnitt in der Messreihe. `APP_VERSION` weiter 18.

→ **ChatGPT-Rückfrage vom 12.9.2026 bestätigt den gewählten Weg** (Zulassung nach Trainings-/Wissensstand des Modells) — kein Widerspruch zwischen Claude und ChatGPT, beide Prüfer trugen zur endgültigen Lösung bei.
→ **Bewährung steht aus:** Der Trainingsraum ist gebaut und geprüft, aber solange `TRAININGSRAUM_STICHTAG` für kein Modell-Literal einen geprüften Wert trägt, liefert er **null zulässige Spiele** — er läuft erst scharf, sobald ein echter Stichtag nachgetragen ist. Das ist Absicht (Art. 11), nicht ein offener Fehler.

---

**78. Kombi-Wette mit mehreren Vorhersagen verbinden** · *Fund Ondo, 12.9.2026 (Wetten per Foto hochgeladen, „Ich habe Kombi gespielt. Wie lässt sich das mit den aktuellen Vorhersagen verbinden?")* · **Status: Idee — offene Design-Frage, an Claude delegiert („da musst du dir was einfallen lassen")**

→ **Beleg aus dem Code (Art. H, belegt statt hergeleitet):** `fotoLesen()` legt für eine Kombi ausdrücklich **einen einzigen** Eintrag an (Gesamtquote = möglicher Gewinn ÷ Einsatz, so im eigenen KI-Prompt der Funktion verlangt) — und setzt dabei **weder `fromKI` noch `herkunft` noch `kiProtokollId`**. Eine per Foto eingelesene Kombi-Wette landet damit komplett ausserhalb der Lernkette (Decision Ledger, Backlog-Punkt 75 Teil 2), unabhängig davon, ob es sich um eine Kombi oder eine Einzelwette handelt. Auch der manuelle Weg (`kiWahlBlock()`/`kiWahlUebernehmen()`) kennt nur **eine** verknüpfte `kiProtokoll`-Vorhersage je Wette — eine Kombi aus mehreren Spielen, von denen jedes eine eigene Vorhersage hat, lässt sich damit an keiner Stelle im heutigen Code abbilden.
→ **Warum das schwieriger ist als eine Einzelwette:** Eine Kombi-Wette hat einen Einsatz und einen Ausgang (gewonnen/verloren), aber mehrere zugrundeliegende Spiele mit je eigener Vorhersage und je eigenem Ausgang. Die Lernkette rechnet heute in „eine Wette = eine Vorhersage" — eine Kombi bräuchte entweder „eine Wette = mehrere Vorhersagen" (neues Datenfeld, `state.bets[].kiProtokollIds` als Liste statt `kiProtokollId` als einzelner Wert) oder eine Aufteilung in mehrere Teil-Einträge (verändert aber Einsatz/Quote-Rechnung, die heute je Wette gilt).
→ **Noch nicht entworfen, nur die Lücke belegt.** Eine Lösung braucht eine Entscheidung über die Datenform (Liste vs. Aufteilung) — das ist eine Architekturfrage (Ondo-Core-Architektur.md, Ebenen-Trennung 1b), nicht nur ein Anzeigefeld, deshalb hier als offene Design-Frage vermerkt statt sofort gebaut.
→ **Kosten:** noch nicht bezifferbar, hängt von der gewählten Datenform ab.
→ **🔴 ChatGPT-Rückfrage beantwortet (12.9.2026):** „Eine Kombi sollte eine einzige Wette bleiben und mehrere kiProtokollId-Verknüpfungen speichern. Sie in Teilwetten aufzuteilen wäre sachlich falsch: Einsatz, Gesamtquote, Gewinn/Verlust und Abrechnung gehören zur gesamten Kombi, nicht zu den einzelnen Legs. […] Technisch würde ich später eher eine strukturierte Liste der Legs vorsehen als nur nackte IDs, aber die Grundentscheidung lautet eindeutig: eine Wette → mehrere KI-Protokoll-Verknüpfungen." **Deckt sich mit Claudes Einschätzung (Liste statt Aufteilung) — kein Widerspruch.** Die von ChatGPT vorgeschlagene Verfeinerung (strukturierte Liste der Legs statt nackter IDs — z. B. je Leg auch Einsatz-Anteil oder Quote separat) ist eine spätere Ausbaustufe, nicht Teil der Grundentscheidung.
→ **Nächster Schritt (Art. 8):** Grundentscheidung von beiden Prüfern getragen — `state.bets[].kiProtokollIds` als Liste. Soll das jetzt gebaut werden?

---

## 🟡 Prio 2 — wichtig, aber später

**4. Daten-Export in die stabile Version** · *Idee Chat 1, erneut 28.7.* · **Status: beschlossen — 🔴 von Ondo freigegeben (12.9.2026), unabhängig vom Stand der Beförderung**
**Nicht zu verwechseln mit „Datensicherung" (gebaut in v19.1).** Die Sicherung schützt vor Datenverlust; dieser Punkt überträgt die Messdaten aus der Beta in die stabile Version. Ohne ihn geht bei der Beförderung alles Gesammelte verloren.
→ *Hier stand bis heute „Unmittelbar vor der Beförderung" — eine reine Reihenfolge-Festlegung, kein technischer Blocker (siehe Antwort an Ondo, 12.9.2026: die Beförderung selbst ist laut letztem Stand vom 31.7. weiterhin gesperrt, Kriterium (f) und (c) offen, siehe Punkt 5).*
→ **🔴 Ondos Entscheidung (12.9.2026):** „Wenn du jetzt Punkt 3 gelöst hast mit dem Trainingsraum, ist für mich Punkt 4 freigeschaltet." Mit der Trainingsraum-Lösung bei Punkt 77 (Zulassungsregel nach Datum, Wiederverwendung von `vorhersageGehirn()`) ist diese Bedingung erfüllt — **Punkt 4 ist damit unabhängig vom Stand der Beförderung freigegeben**, kann jederzeit gebaut werden.
→ **Noch offen, vor dem Bau zu klären:** Genauer Umfang (welche Daten wohin — `state.kiProtokoll`, `state.bets`, oder beides; wie mit den unterschiedlichen Datenformen von Beta und `OndoControl.html` umgegangen wird, falls diese abweichen). Das ist bisher nicht entworfen, nur der Grundsatz freigegeben.

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

→ **Vorabrechnung von Chat 12 aus dem KI-Log, je 180 bewertete Aussagen:** Sonnet **0,2593**
(schlechter als Raten), Flash **0,2471** (knapp besser). Vergleichswert **0,2500** = wer immer
50 % sagt.
→ **🔴 Berichtigung des Funds:** Er behauptet, die Berichtigung von Punkt F ändere die Zahl
nicht. **Falsch** — Sonnet springt auf **0,2418** und damit von *schlechter als Raten* auf
*besser als Raten*. **Der Brier-Score ist damit ein zusätzliches Argument für die
Berichtigung.**
→ **Zwei-Probleme-Regel erfüllt:** macht die Gehirne trotz unterschiedlicher Entschlossenheit
vergleichbar **und** schliesst die selbst benannte 50-%-Lücke.
→ **Kosten: keine.** Aus vorhandenen Daten rechenbar, keine neue Messung, kein Modellaufruf,
kein Schnitt.
→ **Die Zahlen von 14.8. sind eine Vorabrechnung, kein Ergebnis** — bei 330/327 Aussagen
gerechnet, heute stehen 501/504. Vor der Übernahme in die Dokumente neu gegen die App rechnen.

> **🔴 ENTSCHIEDEN am 7.9.2026 (Ondo, delegiert an Claudes Einschätzung: „wenn du das als
> nützlich findest, dann ja"). Claudes Einschätzung, mit Begründung:** Ja — aus drei Gründen.
> **Erstens** ist der Brier-Score kein Duplikat der bestehenden Kalibrierungsabweichung: Die
> Abweichung mittelt über sechs feste Bänder (1–49 % usw.), der Brier-Score wird je
> Einzelaussage gebildet und leidet deshalb nicht an der „zu wenige Aussagen im Band"-Grenze,
> die STAND.md bei kleinen Bändern (z. B. Sonnets 90–99 %) ausdrücklich benennt. **Zweitens**
> ist er bereits zweimal von Hand gerechnet worden und beide Male aussagekräftig — die
> auffälligste Erkenntnis („kein Gehirn ist nachweislich besser als immer 50 %") steht bisher
> in keinem laufend aktualisierten Dokument, nur in dieser archivierten Fassungsnotiz.
> **Drittens die Kosten:** reine Rechnung aus bereits vorhandenen Daten (`state.kiProtokoll`),
> kein neuer Modellaufruf, kein Geld, keine neue Messung, kein Schnitt in der Messreihe —
> dieselbe Kostenklasse wie die bestehende Kalibrierungs-/Entschlossenheits-Anzeige im
> Finanzen-Tab. **Was heute NICHT entschieden ist:** die genaue Umsetzung (Anzeigeort,
> Rundung, ob als eigene Zeile oder in der bestehenden Kalibrierungstabelle) — das ist ein
> eigener, noch nicht beauftragter Bauschritt.

> **🔴 GEBAUT am 10.9.2026, `beta.html` v19.8.21.** Neue reine Funktion `calcBrierScore(quelle)`
> — eigene, unveränderte Sammelschleife wie `calcKalibrierung()` (dieselbe Datengrundlage:
> `m.p`, `m.status`), rechnet je bewerteter Aussage `(p/100 − Treffer)²` und mittelt über alle
> Aussagen des Gehirns. `calcKalibrierung()` selbst bleibt unangetastet (Arbeitsregel H).
> **Umsetzungsfragen aus dem Beschluss jetzt entschieden:** Anzeigeort — in der bestehenden
> Kalibrierungstabelle (Finanzen-Tab), nicht als eigene Zeile, damit beide Kennzahlen an einem
> Ort stehen (Punkt 45). Rundung — vier Nachkommastellen, wie in den bisherigen Handrechnungen
> (0,2429 usw.), damit alte und neue Werte vergleichbar bleiben.
> **Verifiziert:** `node --check` bestanden. Trockentest an der echten, aus `beta.html`
> herausgeschnittenen Funktion (kein Nachbau), **11 Prüfungen**: von Hand nachgerechnetes
> Beispiel trifft exakt · „immer 50 %, halb richtig" ergibt exakt den App-Vergleichswert 0,25 ·
> hohe Zuversicht mit ausschliesslich richtig liegt nahe 0, mit ausschliesslich falsch nahe 1 ·
> trennt nach Gehirn · zählt nur `status` richtig/falsch, nicht offen · zählt nur `aera==='v19'`,
> nicht das v18-Archiv · fehlendes `p` fällt wie bei `calcKalibrierung()` auf 50 zurück · `p`
> wird auf 1–99 geklemmt, nicht auf einen ausserhalb liegenden Wert gerechnet. `pruefe.py`
> danach: ALLES SAUBER.
> **2 neue Sprachschlüssel** (`calibBrier`, `calibSpread` — Letzterer für Punkt 35, in derselben
> Lieferung mitgezählt, 254 → 256). **Kein Schnitt in der Messreihe** — reine Anzeigefunktion,
> liest nur vorhandene Daten neu aus. `APP_VERSION` weiter 18.

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

→ **Nachgerechnet von Chat 12** (Bootstrap, 600 Ziehungen über die 180 Aussagen): Sonnet 7,6 %
mit einem 90-%-Bereich von **3,9 bis 14,7** · Flash 8,1 % mit **4,9 bis 14,5**.
→ **Folge:** Der Unterschied „5 gegen 9" lag **vollständig im Rauschen**. Die Kennzahl ist bei
dieser Datenmenge auf mehrere Prozentpunkte genau, nicht auf einen.
→ **Kosten:** keine für die Entscheidung; die Anzeige in der App wäre eine kleine
Codeänderung ohne Schnitt.

> **🔴 ENTSCHIEDEN am 7.9.2026 (Ondo, delegiert an Claudes Einschätzung).** Ja, aus demselben
> Grund wie bei Punkt 34, mit einem zusätzlichen, konkreten Nutzen: **In `STAND.md` steht bei
> praktisch jedem Messstand von Hand der Satz „die Zahlen sind auf mehrere Prozentpunkte
> genau, nicht auf einen" — eine Absicherung ohne Zahl.** Eine echte Streuungsangabe würde
> diesen wiederkehrenden, handgeschriebenen Vorbehalt durch eine tatsächliche Zahl ersetzen,
> statt ihn bei jedem Messstand neu zu formulieren (Punkt 45 — ein Ort je Tatsache gälte dann
> auch hier). **Kosten wie bei Punkt 34:** keine neue Messung, kein Geld. **Offene
> Umsetzungsfrage, heute nicht entschieden:** ob Bootstrap (wie Chat 12s Nachrechnung) oder ein
> geschlossenes Rechenverfahren (Standardfehler) verwendet wird — das ist eine Detailfrage des
> Bauschritts, nicht der Grundsatzentscheidung.

> **🔴 GEBAUT am 10.9.2026, `beta.html` v19.8.21.** Offene Umsetzungsfrage entschieden:
> **Bootstrap**, nicht Standardfehler — dasselbe Verfahren wie Chat 12s Nachrechnung vom
> 14.8.2026, damit alte und neue Werte vergleichbar bleiben. Neue reine Funktion
> `calcStreuung(quelle)`: 600 Ziehungen mit Zurücklegen aus den bewerteten Aussagen des
> Gehirns, je Ziehung die Kalibrierungsabweichung neu gerechnet (neue, eigene Hilfsfunktion
> `abwAusPunkten()` — `calcKalibrierung()` selbst bleibt unangetastet), 90-%-Bereich als
> 5./95. Perzentil der 600 Werte. Weniger als zwei Punkte: kein Bootstrap möglich, `null` statt
> geraten. Anzeigeort — in derselben Kalibrierungstabelle wie Punkt 34, direkt neben der
> Abweichung.
> **Ehrlich benannt:** Das ist die einzige Rechenfunktion im Projekt, die echten Zufall nutzt,
> wie ein Bootstrap es verlangt — im Unterschied zu jeder anderen, deterministischen
> Anzeigefunktion. Der Trockentest prüft deshalb Kennwerte (gültiger, geordneter Bereich, Nähe
> zum Punktschätzer aus `calcKalibrierung()`), nicht exakte Zahlen — kein Schein-Determinismus
> vorgetäuscht.
> **Verifiziert:** `node --check` bestanden. Trockentest an der echten, aus `beta.html`
> herausgeschnittenen Funktion (kein Nachbau), **9 Prüfungen**: `null` ohne Daten · `null` bei
> nur einem Punkt · liefert ein Ergebnis bei genug Daten · Bereich geordnet (unten ≤ oben) ·
> Bereich nicht negativ · Bereich liegt nah am Punktschätzer aus `calcKalibrierung()` · dieselbe
> Punktzahl wie `calcKalibrierung()` · `calcKalibrierung()` liefert nach Aufruf der neuen
> Funktionen weiterhin dasselbe (Regressionsbeweis, dass sie unangetastet bleibt) ·
> `state.kiProtokoll` bleibt nach allen Aufrufen unverändert. **Fünf Wiederholungen des ganzen
> Trockentests hintereinander, wegen des echten Zufalls in `calcStreuung()`** — alle fünf ohne
> Fehlschlag. `pruefe.py` danach: ALLES SAUBER.
> **Sprachschlüssel: 0 neue in dieser Lieferung** (beide für Punkt 34/35 nötigen Schlüssel
> wurden bereits bei Punkt 34 mitgezählt). **Kein Schnitt in der Messreihe.** `APP_VERSION`
> weiter 18.

---

**5. Beförderungskriterium (c) neu fassen** · *Idee 23.7., ChatGPT* · **Status: Idee**
15 Bewertungen sind statistisch zu wenig, 100 dauern Monate. Vorschlag Claude: Beförderung nach Stabilität und Fehlerfreiheit entscheiden, die Messung läuft danach weiter. **Inhalt gehört in den Blueprint.**
→ *Vermerk 31.7.: Die Beförderung ist derzeit ohnehin gesperrt — Kriterium (f) verlangt Null-Fehler-Toleranz beim Schiedsrichter. Einzelheiten in `PROJEKT-STATUS.md`.*

**9. Echte Quoten automatisch (Knopfdruck gebaut, Zeitsteuerung teilweise gebaut) — Ausbau: eigene Ergebnis-Datenquelle für den Schiedsrichter** · *Idee 23.7., Claude · Verfassungsfrage teilweise geklärt 7.9.2026 · Knopfdruck-Teil Auftrag Ondo und gebaut 10.9.2026 · Zeitsteuerung/Ergebnis-Automatik Auftrag Ondo 11.9.2026 · Knopfdruck-Kopplung Auftrag Ondo und gebaut 11.9.2026* · **Status: 🔴 Knopfdruck-Teil (Quoten) GEBAUT 10.9.2026 — Zeitgesteuerte Ergebnis-Automatik GEBAUT 11.9.2026, wegen API-Football-Sperre nur mit football-data.org scharf — Knopfdruck-Ergebnisabgleich (API-Football + football-data.org, gekoppelt an den Prüflauf) GEBAUT und geprüft 11.9.2026**
Offene Vorfrage (Gemini, weiterhin unbeantwortet): Deckt ein kostenloser Dienst überhaupt Ondos Spiele ab? **🔴 Verfassungsfrage teilweise geklärt (Ondo, 7.9.2026, Blueprint 0.83, Abschnitt 10):** Eine durch Knopfdruck in der App ausgelöste Aktualisierung verletzt „kein Server" nicht — ein Knopfdruck ist die von der Regel verlangte Aufforderung. Eine zeitgesteuerte, unbeaufsichtigte Ausführung bleibt weiterhin offen und ist eine andere Variante. **Ungeprüft, technische Einordnung:** Ob dafür überhaupt GitHub Actions nötig wäre (ein reiner Abruf im Browser bei Knopfdruck bräuchte gar keine Actions-Infrastruktur, wie die bestehenden Knöpfe es schon vormachen) oder ob ein dauerhaft im Repo gespeichertes Ergebnis einen manuell auslösbaren `workflow_dispatch` mit einem neuen, eigens abzusicherndem GitHub-Zugriffsschlüssel bräuchte, ist nicht untersucht.

> **🔴 Vorfrage zur Quotenabdeckung teilweise beantwortet, 10.9.2026 (per Websuche geprüft, nicht
> nur behauptet):** „The Odds API" (the-odds-api.com) deckt nachweislich League of Ireland und
> Allsvenskan namentlich ab — genau die Ligen, die zuletzt in Ondos eigenen Spielen vorkamen.
> Kostenloses Kontingent: 500 Abrufe/Monat. **Nicht vollständig geprüft:** ob jede einzelne
> Liga, die Ondo je verfolgt, abgedeckt ist — nur eine Stichprobe, keine erschöpfende Liste.
>
> **🔴 Technische Einordnung aufgelöst, mit Beleg statt Vermutung:** Der Knopfdruck-Teil
> braucht KEIN GitHub Actions — ein reiner Browser-Abruf reicht, genau wie die bestehenden
> Gemini-/Anthropic-Aufrufe. GitHub Actions bliebe nur für die Zeitsteuerung nötig, weil die
> auch laufen muss, wenn Ondos Handy aus ist.
>
> **🔴 GEBAUT am 10.9.2026 (Auftrag Ondo), `beta.html` v19.8.23 — nur der Knopfdruck-Teil.**
> Neues Schlüsselfeld `state.oddsKey` (gleiches Muster wie `apiKey`/`geminiKey`, bleibt NUR
> auf dem Gerät). Neue Funktion `oddsLigenLaden()` — lädt die Ligenliste einmalig und hebt sie
> in `state.oddsLigen` auf, um das knappe Kontingent zu schonen, kein automatischer erneuter
> Abruf. Neue reine Funktion `oddsListeAufbereiten(events)` — bereitet die von der API
> gelieferten Ereignisse zu einer kurzen Liste auf, **bewusst ohne automatische Auswahl** eines
> Spiels oder Buchmachers (Ondo sieht die Liste und wählt selbst, dieselbe Arbeitsweise wie bei
> `refRohAbgleich()` — Auswählen ist eine Entscheidung, Ablesen nicht). Neue Funktion
> `oddsAbrufen(ligaKey)` — ruft die Quoten der gewählten Liga ab. Im Wette-Formular: ein
> Liga-Auswahlfeld und ein „Quoten abrufen"-Knopf (nur sichtbar, wenn ein Schlüssel gespeichert
> ist); anklickbare Ergebnisse füllen das Quote-Feld, ohne das restliche, bereits Getippte im
> Formular zu verwerfen (gezielte `innerHTML`-Änderung statt `render()`, dieselbe Überlegung
> wie bei Backlog-Punkt 70).
> **Verifiziert:** `node --check` bestanden. Trockentest an der echten, herausgeschnittenen
> `oddsListeAufbereiten()` (kein Nachbau), **13 Prüfungen**: Quoten korrekt den drei
> Ausgängen zugeordnet · Quelle sichtbar mitgegeben · kein h2h-Markt beim einzigen Buchmacher
> erkannt, kein Absturz · Buchmacher ganz ohne Markt-Daten erkannt · ein Buchmacher ohne
> h2h-Markt wird übersprungen, der nächste mit h2h genommen · fehlende Quote wird als `null`
> geführt, nicht erfunden · reine Funktion, Eingabe bleibt unverändert. **Ausdrücklich nicht
> testbar von hier aus:** der echte Netzwerkabruf selbst — dieselbe Grenze wie bei
> `geminiCall()`/`sonnetSuche()`, kein Zugriff auf einen echten Schlüssel oder Netz in dieser
> Umgebung. `pruefe.py` danach: ALLES SAUBER.
> **11 neue Sprachschlüssel** (`oddsKeyT` bis `oddsQuelle`; 256 → 267). **Kein Schnitt in der
> Messreihe** — reine Werkzeugfunktion, ändert nichts an Auftragstexten oder Bewertung.
> `APP_VERSION` weiter 18.
> **Bewusst nicht gebaut, eigener Schritt:** die Zeitsteuerung (mit einstellbarer Häufigkeit
> und Ausschalter, wie von Ondo verlangt) — die braucht GitHub Actions und einen dort
> abzusichernden Zugriffsschlüssel, nicht Teil dieser Lieferung.
> **🔴 `pruefe.py` selbst angepasst, mit Begründung, nicht stillschweigend (Arbeitsregel M):**
> Punkt 12 des Prüfers vergleicht die erkannten geheimen Eingabefelder gegen eine feste Liste
> — `state.oddsKey` ist ein echtes viertes Schlüsselfeld (`type="password"`, bleibt NUR auf
> dem Gerät, wie die bestehenden drei) und war dort nicht eingetragen, der erste Lauf meldete
> deshalb zu Recht FEHL. **Keine Lockerung der Prüfung** — die eigentliche Schutzlogik (kein
> geheimes Feld in `MESS_FELDER`, zweite Prüfstufe `messGeheimFund()` im Code vorhanden) blieb
> unverändert scharf und wurde für alle vier Felder neu bestanden. Nur die feste Liste der
> *erwarteten* geheimen Felder wurde um `oddsKey` ergänzt — dieselbe Art Nachführung wie bei
> der Sprachschlüsselzahl, keine inhaltliche Aufweichung.

> **🔴 Fund, 11.9.2026 (Ondo, per eigenem Test) — bestätigt, warum eine KI-Suche als Ersatz
> abgelehnt bleibt.** Google-KI-Modus lieferte auf Anfrage scheinbar exakte Tipico-Quoten
> (1: 2,25 · X: 3,60 · 2: 3,00), deckungsgleich mit der echten Tipico-Anzeige. Derselbe Test
> mit Gemini direkt (strenger Auftragstext: Quelle nennen, nichts erfinden) fand die Zahlen
> **nicht**, nannte nur X: 3,60 als belegt und auf Nachfrage gestand Gemini, die erste,
> scheinbar korrekte Antwort **frei erfunden** zu haben. **Der eigentliche Befund:** Ob diese
> Entschuldigung selbst stimmt, ist unbeweisbar — eine KI kann nicht zuverlässig sagen, ob sie
> gerade erfunden hat, auch nicht im Nachhinein. Bestätigt die neunte Fehlerart (erfundene
> Ergebnisse) an einem neuen, konkreten Beispiel — diesmal bei Quoten, nicht Spielständen.
> Kein Codeaufwand, reine Beobachtung, Gegenprüfung mit The Odds API bleibt der richtige Weg.

> **🔴 Ausbau, Auftrag Ondo 11.9.2026: eigene, unabhängige Ergebnis-Datenquelle statt reiner
> KI-Suche, als Antwort auf den Quoten-Fabrikations-Fund oben.** Erst geprüft, dann gebaut,
> in dieser Reihenfolge:
>
> **Geprüft, mit echtem Schlüssel, nicht geraten:** `openfootball/football.json` (Github,
> kostenlos) scheidet aus — Ergebnis-Nachführung für Irland/Schweden/Island seit Mai 2025 tot,
> keine 2026er-Datei. API-Football (kostenlos, 100 Abrufe/Tag) deckt dagegen nachweislich alle
> 16 Stufe-1-Länder (erste/zweite Liga, Pokal), alle Stufe-2-Ligen (League of Ireland,
> Allsvenskan, Úrvalsdeild eingeschlossen), UEFA-Wettbewerbe und Länderspiele **weltweit ohne
> Kontinent-Einschränkung** ab (WM, alle Qualifikationszonen, Afrika-Cup-Qualifikation usw. —
> das deckt den früher diskutierten Gabun-Fall). **Einschränkung, erst beim echten Abruf
> gefunden, nicht in der Beschreibung:** Saison-basierte Abfragen nur für 2022–2024 erlaubt,
> `last`-Parameter gesperrt, Datums-Abfragen nur in einem schmalen Fenster (bestätigt:
> gestern/heute/morgen) — für den eigentlichen Zweck (heutige/nahe Ergebnisse) ausreichend.
> football-data.org (kostenlos, 10 Abrufe/Minute) deckt nur 12 grosse Wettbewerbe ab (WM, CL,
> Bundesliga, Eredivisie, Campeonato Brasileiro Série A, Primera División, Ligue 1,
> Championship, Primeira Liga, EM, Serie A, Premier League) — als zweite, unabhängige
> Gegenprobe für genau diese 12 sinnvoll, kein Ersatz für die kleineren Ligen.
>
> **Entscheidung zur Bauweise (Ondo, 11.9.2026):** Negativlisten-Geist wie beim Schiedsrichter
> selbst — die Liga-Auswahl behauptet keine Vollständigkeit, ein nicht gelisteter Wettbewerb
> fällt einfach auf die bestehende KI-Suche zurück, wird nicht stillschweigend übersprungen.
> Ergebnisse werden **nicht live** im Browser abgerufen (das schmale Zeitfenster reicht dafür
> nicht zuverlässig), sondern **täglich um 08:00 Uhr UTC** durch eine GitHub-Actions-Automatik
> geholt und in eine **Monatsdatei** unter `daten/schiri-ergebnisse/JJJJ-MM.json` geschrieben,
> die der Schiedsrichner künftig direkt liest (dieser Lese-Anschluss ist ein eigener, noch
> nicht gebauter Schritt, bewusst getrennt von dieser Lieferung). Größe geprüft, nicht
> geschätzt: rund 65 Spiele/Tag im Stufen-Bereich, rund 10.000 Zeichen/Tag, rund 300.000
> Zeichen/Monat — GitHub warnt erst ab 50 Millionen, blockiert erst ab 100 Millionen Zeichen je
> Datei. Monatsaufteilung statt einer ewig wachsenden Datei, wie von Ondo vorgeschlagen. Jeder
> Lauf holt „gestern" (jetzt sicher vollständig, auch für die spätesten Spiele an der
> US-Westküste) und „heute" (so weit gespielt) — ein verspätetes Spiel wird am Folgetag
> automatisch nachgetragen, kein Datenverlust.
>
> **Gebaut:** `skripte/schiri-ergebnisse-holen.js` (Node, läuft nur in der Automatik, nie im
> Browser — die Schlüssel bleiben serverseitig) und `.github/workflows/schiri-ergebnisse.yml`
> (täglicher Cron-Lauf, `workflow_dispatch` für Bedarfsläufe). Zwei echte, per Testabruf
> gefundene Fehler noch vor der Auslieferung selbst behoben: (1) ein bereits fertiges
> Spielergebnis wird durch einen späteren, noch unfertigen Treffer aus derselben Quelle nicht
> mehr überschrieben. (2) football-data.org lieferte im echten Test ein Copa-Libertadores-Spiel
> — **weder in den 12 zugesicherten Wettbewerben noch in Stufe 1/2 enthalten.** Eigener Filter
> auf genau die 12 Wettbewerbs-Kürzel ergänzt, damit der Zugang nicht stillschweigend über den
> vereinbarten Bereich hinauswächst.
> **Verifiziert:** `node --check` bestanden, echter Testlauf mit beiden echten Schlüsseln
> durchgeführt (nicht nur Syntax) — football-data.org lieferte echte, korrekt aufbereitete
> Ergebnisse, Datei wurde real geschrieben und geprüft, danach als Testartefakt wieder entfernt
> (die erste echte Datei soll die Automatik selbst erzeugen, belegbar über den Lauf-Verlauf).
> `pruefe.py` danach: ALLES SAUBER.
>
> **🔴 Offene Störung, ungeklärt, nicht von hier aus behebbar:** Während des Testlaufs meldete
> API-Football „Your account is suspended" — bei rund 9 von 100 Tagesabrufen, weit unter jedem
> Kontingent. Ursache unbekannt, das Konto zeigt vermutlich einen Grund
> (dashboard.api-football.com), das kann nur Ondo einsehen. **Bis das geklärt ist, liefert die
> tägliche Automatik nur die 12 football-data.org-Wettbewerbe** — sichtbar an `quelle` in jedem
> Eintrag, kein stiller Ausfall. Sobald API-Football wieder läuft, ergänzt der nächste Lauf die
> restlichen Ligen von selbst nach.
> **🔴 Terminierung, Ondo, 12.9.2026:** Die Sperre „kann erst am Montag behandelt werden" — Ondo
> steht in Kontakt mit dem API-Football-Support, Einzelheiten im dortigen Gesprächsverlauf, nicht
> hier wiederholt (Punkt 45). Bis dahin bleibt der oben beschriebene Zustand unverändert: Der
> Knopfdruck-Ergebnisabgleich und die tägliche Automatik laufen ausschliesslich mit
> football-data.org. Keine Codeänderung nötig — nichts zu tun von dieser Seite, bis Ondo sich
> meldet.
> **Bekannte, offen benannte Wartungslücke:** Die Liga-ID-Liste im Skript ist von Hand aus
> STUFEN (`beta.html`) abgeleitet, nicht automatisch verknüpft — ändert sich STUFEN künftig,
> muss die Liste im Skript von Hand nachgezogen werden, sonst laufen beide still auseinander.
> **Noch nicht gebaut:** die Lese-Funktion für die Monatsdateien selbst (eigener, andersartiger
> Weg, siehe unten — durch die Knopfdruck-Kopplung weniger dringend geworden).

> **🔴 Ausbau, Auftrag Ondo 11.9.2026, `beta.html` v19.8.24: API-Football und football-data.org
> per Knopfdruck mit dem bestehenden Prüflauf gekoppelt.** Anlass: API-Football sperrte die
> GitHub-Automatik wegen geteilter Cloud-Adresse (siehe oben); der Support bestätigte
> schriftlich, dass das strukturell an GitHub Actions selbst liegt, nicht an der Menge. Ondos
> Idee: vom eigenen Gerät aus abrufen, wie beim Quoten-Knopf — dort ist es keine geteilte
> Adresse, also kein Sperr-Risiko.
>
> **Bauweise:** Zwei neue Schlüsselfelder `state.apiFootballKey`/`state.footballDataKey`,
> gleiches Muster wie die bestehenden vier. Im „Ergebnisse prüfen"-Lauf (Backlog-Punkt 68,
> `wege`-Liste) gehen beide strukturierten Quellen jetzt den KI-Läufen voran, wenn ein
> Schlüssel gespeichert ist — fehlt ein Spiel bei beiden (falscher Wettbewerb, keine Angabe),
> füllt die bestehende KI-Suche den verbleibenden Platz, genau wie bisher.
> **`refLaufPruefen()` und `refEinigkeit()` (Backlog-Punkt 68) bleiben unverändert** — neue
> Funktion `strukturAbgleich()` liefert Ergebnisse in exakt demselben Format, das die
> Einigkeitsregel von einem KI-Lauf erwartet; sie sieht keinen Unterschied. Neue reine
> Funktionen `datumIso()` (Datumsformat wandeln) und `strukturAbgleich()` (Team- und
> Datumsabgleich, bewusst ohne Heim/Gast-Vertauschung — das wäre ein Fehler in der Spielliste
> selbst, nicht hier zu heilen), dazu `apiFootballLauf()`/`footballDataLauf()` für den
> eigentlichen Abruf. football-data.org mit demselben Filter auf die 12 zugesicherten
> Wettbewerbe wie bei der GitHub-Automatik (derselbe Fund: die Schnittstelle liefert auch
> Spiele ausserhalb der Liste).
> **Verifiziert:** `node --check` bestanden. Trockentest an der echten, herausgeschnittenen
> `strukturAbgleich()`/`datumIso()`: **18 Prüfungen**, darunter ein echtes 0:0 (wird als
> bestätigt markiert, kein Rateverdacht), ein Spiel drei Tage neben dem Zieldatum (wird NICHT
> als Treffer gewertet), eine echte Verlängerung. Zusätzlicher Trockentest an der echten
> `wege`-Aufbaulogik: **7 Prüfungen**, darunter der Beleg, dass sich ohne die zwei neuen
> Schlüssel **exakt das bisherige Verhalten** ergibt (drei gleiche oder gemischte KI-Läufe,
> `einAnbieter` unverändert). `pruefe.py` danach: ALLES SAUBER.
> **8 neue Sprachschlüssel** (`afKeyT` bis `fdOff`; 267 → 275). **Kein Schnitt in der
> Messreihe.** `APP_VERSION` weiter 18.
> **Bekannte, offen benannte Grenze:** Solange nur ein oder gar kein strukturierter Schlüssel
> gespeichert ist, bleibt die vorherige, reine KI-Lösung unverändert aktiv — kein Rückschritt.
> Solange API-Football gesperrt bleibt, liefert dieser Weg ebenfalls nur football-data.org
> zuverlässig; die KI-Suche bleibt dann öfter der entscheidende dritte Lauf, mit entsprechend
> mehr KI-Aufrufen als im Idealfall.

**10. Value-Rechnung zurückholen** · *Idee 22.7., Gemini* · **Status: Idee** · hängt an Punkt 9

**11. Rollenmodell in den Blueprint** · *Idee 23.7., ChatGPT · GEBAUT 7.9.2026, Ondo* · **Status: 🔴 GEBAUT — bewusst minimal, eine Konfliktregel bleibt unaufgelöst**
Zwei Ergänzungen von Claude offen: Architekt und unabhängiger Prüfer sollten nicht dieselbe Rolle sein; Geminis Doppelrolle (Duell-Teilnehmer und Schiedsrichter) muss benannt werden.
→ **🔴 Vermerk 28.8.2026:** Die zweite Ergänzung (Geminis Doppelrolle) ist mit seinem Ausscheiden aus dem Projekt gegenstandslos — als erledigt vermerkt, nicht gelöscht. **Die erste Ergänzung bleibt offen und betrifft jetzt ChatGPT:** Architekt und unabhängiger Prüfer sollten nicht dieselbe Rolle sein, und ChatGPT ist seit 27.8./28.8. beides — Architekt (seit Projektbeginn) und Prüfer (Rollen-Zeile in `STAND.md`).

> **🔴 GEBAUT am 7.9.2026 (Ondo: „wenn du das für richtig hältst, dann ja nach deiner
> Empfehlung").** Neuer Abschnitt 2e im Blueprint — bewusst knapp gehalten, angesichts Ondos
> ausdrücklicher Sorge, zu viele Regeln erschwerten schon die Arbeit: nur die bereits in
> `STAND.md` stehenden Rollen, an einem zweiten, verfassungsnahen Ort, plus die eine noch
> wirksame Konfliktregel (Architekt ≠ unabhängiger Prüfer, betrifft ChatGPT). **Die
> Konfliktregel selbst bleibt bewusst unaufgelöst** — was aus ChatGPTs Doppelrolle folgen
> sollte, ist nicht heute entschieden, nur benannt. Wer die Rollen festlegt: Ondo (Art. 8),
> ausdrücklich im neuen Abschnitt festgehalten. Kein Codeaufwand.

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

→ **⚠ 6.8.:** ChatGPT und Gemini raten übereinstimmend davon ab, diese Kennzahl jetzt zu bauen — ChatGPT unter Verweis auf die Zwei-Probleme-Regel, Gemini mit dem Argument, sie bekämpfe das Symptom statt der Ursache. **Zuerst Punkt 26 (Temperatur), dann neu bewerten.** Bemerkenswert: Gemini rät von seiner eigenen Idee ab.
Ein getrenntes, kleines Skript — **nicht** im Hauptprogramm. Es nimmt einige bereits abgeschlossene Spiele und stellt beiden Gehirnen mehrfach hintereinander denselben Auftragstext. Die Antworten landen in einem reinen Textprotokoll, fern der Kalibrierungsdaten. So bleibt die Hauptmessreihe unberührt.
→ **Anlass:** Am 4.8. antwortete Flash auf dieselbe Paarung zweimal verschieden, Sonnet zweimal gleich.
→ **⚠ Verschärft am 6.8.:** Bei Salzburg – Pafos schwankten **beide** Gehirne — Flash bei allen drei Märkten, Sonnet bei zwei von drei; der Ergebnis-Tipp blieb bei beiden gleich. Damit betrifft Geminis Einwand nicht mehr nur Flash.
→ **Geminis weiterreichende Aussage:** Kalibrierung setzt eine stabile Wahrscheinlichkeitsverteilung voraus. Schwankt ein Gehirn bei identischem Auftrag, ist die Prozentzahl teilweise willkürlich. **Vor jedem Korrekturfaktor braucht es deshalb eine vorgeschaltete Kennzahl für Antwortstabilität.** Das stellt die Hauptkennzahl des Projekts erstmals grundsätzlich infrage.
→ **Kosten: nicht null.** Mehrere Läufe je Spiel verbrauchen echte Anfragen. Vor dem Bauen zu beziffern.
→ *Hängt eng mit dem Temperatur-Fund zusammen: Ein Schattenlauf bei unbekannter Temperatur misst womöglich nur die Standardeinstellung des Anbieters.*

---

**50. Verworfen-und-warum-Liste im Blueprint** · *Vorschlag 15.8., Gemini (abgeschwächt von Claude)* · **Status: 🔴 NICHT GEBAUT (Claude, 27.8., Entscheidung an Claude delegiert) — bleibt sichtbar, nicht gestrichen**

> Gemini wollte das ganze Entscheidungs-Protokoll zurück in die Pflichtlektüre, damit ein frischer Chat keine geschlossenen Debatten neu eröffnet. **Das wären 48 KB und die Trennung rückgängig.** Stattdessen eine kurze Liste im Blueprint: was verworfen wurde, je ein Satz warum, Verweis ins Protokoll für Einzelheiten.
>
> **🔴 Entscheidung (Claude, 27.8., von Ondo ausdrücklich delegiert):** nicht gebaut. Die Liste bräuchte bei jeder künftig verworfenen Idee eine eigene Pflege — genau die Art Doku-Aufwand, gegen den Ondo sich wandte —, ohne dass bisher ein echter Fall aufgetreten ist, in dem ein Chat eine geschlossene Debatte neu aufgemacht hätte. Der Nutzen ist unbelegt, die laufenden Kosten sind sicher. **Sollte künftig tatsächlich einmal eine alte Debatte unnötig neu aufgemacht werden, ist das der Beleg, der die Liste doch rechtfertigt** — bis dahin bleibt es bei Blueprint-Protokoll und Backlog als alleinigen Fundorten.

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

