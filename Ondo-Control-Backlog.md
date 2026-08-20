# ONDO CONTROL — Rückstand-Verzeichnis (Backlog)
**Nur offene Punkte. Gepflegt von Claude · Stand 20.8.2026, 05:39 Uhr, Fassung 30 · jede Idee mit Datum, Urheber und Status**
*Erledigtes, alte Fassungsnotizen und Prueflaeufe stehen in `BACKLOG-ARCHIV.md` — nur auf Zuruf zu lesen.*

## Regeln für dieses Dokument

1. **Abgrenzung (ChatGPT, 23.7.):** Architektur lebt ausschließlich in `Blueprint.md` und `Ondo-Core-Architektur.md`. Dieses Dokument enthält **nur Aufgaben, Ideen und deren Status** — keine Architekturregeln.
2. Claude schlägt Punkte von sich aus zum passenden Zeitpunkt vor. Ondo entscheidet, was und wann gebaut wird (Art. 8).
3. Nichts wird gelöscht. Abgelehnt und überholt bleiben sichtbar.

**Status-Werte:** `Idee` · `beschlossen` · `gebaut` · `bewährt` (im Alltag getestet) · `überholt` · `abgelehnt`

**Übergabe an die Prüfer — GEÄNDERT am 30.7.:** Der Eintrag vom 23.7. („Raw-Links funktionieren nur bei Claude, ChatGPT und Gemini brauchen Anhänge") ist **überholt**. GitHub Pages wandelt Markdown in HTML um; diese Adressform funktioniert bei ChatGPT:
`https://ondo-control.github.io/Ondo-Control/PROJEKT-STATUS.html` (entsprechend für Backlog, Blueprint, Ondo-Core-Architektur). Einzelheiten und Folgen stehen in `PROJEKT-STATUS.md`.

**Dateinamen von Berichten an die Prüfer (28.7., Ondo):** Beginnen mit Datum und Uhrzeit — `2026-07-31_1430_Ondo-Control_Thema.md`.

---

## ⚠ Was Fassung 30 ändert (20.8., morgens)

**Punkt 54 untersucht und beschlossen. Raw-Link-Block dauerhaft in Teil A der Übergabemappe verankert.**

- **Punkt 54:** Name, Ort und Umfang von `CLAUDE.md` geklärt anhand der offiziellen Dokumentation. Ondo hat beide vorgeschlagenen Bausteine beschlossen — Selbsterzeugung durch Claude Code, plus ein Auslöser bei Sitzungsstart, der nur bei geänderten Pflichtdokumenten an eine Erneuerung erinnert. Gebaut wird das nicht im Chat, sondern auf dem Tablet oder in einer Cloud-Sitzung. Einzelheiten bei Punkt 54.
- **Raw-Link-Block:** In `STAND.md`, Abschnitt „Chat-Übergabe ist Claudes Pflicht, nicht Ondos", jetzt ausdrücklich festgehalten: Teil A jeder Übergabe enthält den Raw-Link-Block für alle vier Pflichtdokumente, als Text der Nachricht, nicht als Anhang. Begründung und Fund von Chat 19 direkt dort vermerkt.
- **Nebenbefund, gehört zu Punkt 53, dort nicht abschliessend behandelt:** Ein Testabruf am 16.8. hat bestätigt, dass ein Raw-Link, der als Text der Nachricht steht, im Chat-Bereich abrufbar ist — ein Link, der nur im Text einer angehängten Datei steht, dagegen nicht. Ausserdem: Der Code-Bereich der Claude-App kann laut offizieller Dokumentation Cloud-Sitzungen starten, die unabhängig von jedem eigenen Gerät auf das Repo zugreifen — zu unterscheiden von „Fernsteuerung", die an ein eingeschaltetes Gerät gebunden bleibt. Live am 16.8. bestätigt: Die vorhandene Sitzung „Ondo Control: Code 1" ist als Fernsteuerung gekennzeichnet, keine Cloud-Sitzung. Einrichtung einer Cloud-Sitzung steht noch aus, Ondo prüft das auf seinem Gerät.
- **Zeitsprung vermerkt:** Zwischen dem Beginn dieser Chat-Sitzung (16.8.) und dieser Lieferung liegen laut frisch abgelesener Uhr tatsächlich vier Tage (20.8.). Kein Fehler, nur festgehalten, weil Zeitangaben in diesem Projekt nie geschätzt werden.
- **🔴 Beschlossen und nicht gebaut: neun** — **E, 2, 3, 4, 47, 49, 50, 51, 54.**

---

## ⚠ Was Fassung 29 ändert (16.8., nachmittags)

**🔴 Widerspruch zum ersten Hochladen berichtigt. Ondo hat entschieden: Die Gruppe „Chats und Arbeitsstruktur" geht für diesen Chat vor Arbeitsregel L.**

- **Der Befund:** Punkt 46 trug seit der Übergabe an Chat 19 zwei sich widersprechende Angaben zum ersten Hochladen — „noch nicht stattgefunden" in der Statuszeile hier und im entsprechenden Abschnitt von `STAND.md`, „hat funktioniert" in Chat 18s Abnahme an Chat 19. `STAND.md` trug beide Angaben sogar im selben Abschnitt nebeneinander. **Fehlerart C4**, wörtlich: eine neue Aussage wurde neben eine ältere, widersprechende gestellt, statt sie im selben Durchgang zu berichtigen.
- **Berichtigt:** Das erste Hochladen vom Tablet hat am 16.8. stattgefunden und funktioniert. **Beleg:** Ondo bestätigt, Repo, Tablet und Projektkopien seien seither auf demselben Stand — gezeigt am GitHub-Screenshot, Commits auf `main` zuletzt vor 3 Stunden. **Bewährt ist Punkt 46 damit weiterhin nicht** — ein geglückter erster Versuch ist kein Nachweis von Zuverlässigkeit.
- **Klargestellt:** Das Hochladen von Hand entfällt nur für den Weg zu GitHub. Der Projektordner der App läuft weiterhin von Hand — dafür steht Punkt 53.
- **🔴 Entscheidung Ondo (16.8., nachmittags):** Auf die Frage, ob die Gruppe „Chats und Arbeitsstruktur" für diesen Chat vor Arbeitsregel L geht — Ondos Antwort: „Vorrang hat Chat und Arbeitsstruktur." Der nächste beschlossene Punkt (47) wartet damit für diesen Chat; Claude hat ihn nicht von sich aus zurückgestellt.
- **🔴 Beschlossen und nicht gebaut: acht** — **E, 2, 3, 4, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 28 ändert (16.8., vormittags)

**🔴 Punkt 46 ist gebaut. Claude Code arbeitet auf dem Surface Go.**

- **Was steht:** die Desktop-App mit dem Bereich „Code" · Git 2.55.0 · Python 3.14.7 · ein frisch von GitHub geholter Ordner `Claude-Ondo-Control-Repo`, der mit dem Verzeichnis verbunden ist.
- **Der Abgleich war sauber.** Ondos Handkopie und das Verzeichnis waren bei allen vierzehn gemeinsamen Dateien Byte für Byte gleich. **Damit ist zugleich belegt, dass der Raw-Link diesem Chat eine veraltete Zwischenkopie geliefert hat und nicht das Repo veraltet war.**
- **Was aussteht:** Das erste Hochladen vom Tablet hat noch nicht stattgefunden. Punkt 46 gilt als gebaut, nicht als bewährt. **🔴 Berichtigt in Fassung 29:** Das erste Hochladen hat inzwischen stattgefunden und funktioniert. Weiterhin richtig bleibt: Punkt 46 gilt nicht als bewährt.
- **🔴 Drei Angaben in Punkt 46 waren falsch** und sind dort mit Vermerk berichtigt, nicht überschrieben: das Terminalfenster, die 16 GB für die Desktop-App und „unter 1 GB Platte".
- **Ein neuer Fund, noch offen:** Liegt `pruefe.py` außerhalb des Repo-Ordners, meldet sein Abschnitt 2 die eigene Datei als fehlend. Zu klären, bevor das Tablet zum ersten Mal eine Datei ausgibt.
- **Sechs neue Punkte aus Ondos Fragen vom 16.8.: 52 bis 58.** Alle mit Status Idee. Punkt 53 und 54 tragen Ondos Vorgaben im Wortlaut.
- **🔴 Neue Gruppe „Chats und Arbeitsstruktur" ganz oben, auf Ondos Anweisung vom 16.8.:** 54 · 53 · 55 · 56 · 58 · 57. Sie steht **vor Prio 1 und damit vor allen App-Punkten**. Punkt 52 bleibt bei den App-nahen Punkten stehen, weil er das Prüfskript betrifft und nicht die Arbeitsstruktur.
- **Damit ist offen, ob Punkt 47 wartet.** Er ist beschlossen und der nächste in der alten Reihenfolge, gehört aber zur App. **Die Entscheidung liegt bei Ondo; Claude hat nichts von sich aus zurückgestellt.**
- **🔴 Beschlossen und nicht gebaut: acht** — **E, 2, 3, 4, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 27 ändert (15.8., spätabends)

**🔴 `STAND.md` enthielt eine am 14.8. widerlegte Aussage — gefunden über das Kontrollexamen von Chat 18.**

- **Der Befund:** Im Abschnitt „Die Spielliste" stand weiterhin, die Verzerrung durch geparkte Einträge treffe **nur eines** der beiden Gehirne, dazu die überholten Zahlen 50 von 190. Die Rohdaten-Auswertung vom 14.8. hatte beides berichtigt: **beide Gehirne betroffen, 54 geparkt, Bestand 330/327.** Berichtigt mit Vermerk, nicht überschrieben.
- **Die Ursache liegt bei der Trennung.** Der Abschnitt wurde am 15.8. unverändert übernommen. **„Nichts löschen, nur verschieben" sichert die Vollständigkeit, nicht die Gültigkeit** — und `STAND.md` soll nur Gültiges enthalten.
- **Chat 18 hat den Fehler nicht gemacht, sondern sichtbar gemacht.** Er hat korrekt wiedergegeben, was dastand.
- **`pruefe.py` prüft jetzt ganz `STAND.md` auf überholte Zahlen**, nicht nur den Messstand-Abschnitt.
- **🔴 Punkt 49 ist damit belegt, nicht mehr nur empfohlen.** ChatGPTs Warnung war richtig: Ein neuer Chat leitet aus richtig gelesenen Dokumenten eine falsche Aussage ab, wenn die Grenzen nicht danebenstehen. **Punkt 49 wird trotzdem nicht vorgezogen** — die Reihenfolge bleibt (Ondo, 15.8.).
- **🔴 Beschlossen und nicht gebaut: neun** — **E, 2, 3, 4, 46, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 26 ändert (15.8., abends)

**🔴 Punkt 48 ist gebaut. Vier neue Punkte aufgenommen. Drei Entscheidungen Ondos berichtigen Annahmen, die Claude gemacht hatte.**

- **Punkt 48 gebaut:** `pruefe.py` Abschnitt 9b beweist zusätzlich zur Vollständigkeit die **Struktur und die Reihenfolge**. Der Zeilenbeweis zeigte nur, dass nichts fehlt — nicht, dass der Text noch dort steht, wo er hingehört. **ChatGPT und Gemini haben diese Lücke unabhängig voneinander gefunden; Claude hatte sie nicht gesehen.** Der neue Beweis fand sofort zwei Befunde, einer davon echt.
- **🔴 Der 20. August ist keine Frist (Ondo, 15.8.).** Claude hat ihn zweimal als Termin behandelt und daraus eine Dringlichkeit abgeleitet. **Eine Zeitspanne sagt nicht, wie viele Messungen nötig sind.** Punkt 3 wird nicht nach Ablaufdatum entschieden.
- **🔴 Die Reihenfolge der Arbeiten bleibt, wie sie ist (Ondo, 15.8.).** Neue Punkte werden aufgenommen, nicht vorgezogen. **Zuerst werden die Probleme mit Chats und Nutzungsgrenzen gelöst** — Punkt 46 —, damit später überhaupt besser gearbeitet werden kann. Punkt 48 war die einzige Ausnahme, weil er einen Beweis absichert, auf den sich alles Weitere stützt.
- **🔴 Entparken ist Claudes Arbeit, nicht Ondos (Ondo, 15.8.).** Ondo hat die wahren Parkgründe zweimal selbst aufgedeckt — 45-Minuten-Testspiele, doppelte Vorhersagen —, weil Claude nur die Anzahl geprüft hatte, nicht den Grund. **Vor jedem Entparken wird jeder Eintrag einzeln auf seinen Grund geprüft, maschinell und nachvollziehbar.** Wird das geleistet, dürfen die geeigneten Spiele entparkt werden.
- **🔴 Beschlossen und nicht gebaut: neun** — **E, 2, 3, 4, 46, 47, 49, 50, 51.**

---

## ⚠ Was Fassung 25 ändert (15.8., nachmittags)

**🔴 Punkt 18 ist fertig. Backlog und Blueprint sind getrennt.**

- **Der Backlog enthält nur noch offene Punkte** (43 KB statt 164 KB). Erledigtes, alte Fassungsnotizen, Prüfläufe und Prüferantworten stehen in `BACKLOG-ARCHIV.md`.
- **Der Blueprint enthält nur noch, was gilt** (28 KB statt 76 KB): Verfassung, Charta, Arbeitsregeln, Übergaberegel, Grenzen, Architektur, offene Fragen. Das Entscheidungs-Protokoll steht in `BLUEPRINT-PROTOKOLL.md`.
- **Pflichtlektüre beim Start: 116 KB statt 452 KB.** `STAND.md` 35 · Backlog 43 · Blueprint 28 · Ondo-Core 12. **Verfassung und Arbeitsregeln bleiben Pflicht** — sie wandern ausdrücklich nicht ins Archiv.
- **Nichts gelöscht, nur verschoben.** `pruefe.py` Abschnitt 9 beweist alle drei Trennungen gegen die Originale.
- **`pruefe.py` ist Fassung 2 und chatübergreifend.** Die von Hand gepflegte Zusagenliste des jeweiligen Chats ist ersatzlos weg. An ihre Stelle treten Prüfungen, die ihren Sollwert aus den Dokumenten ziehen — darunter der Abgleich der Status jedes Punktes gegen die Liste der offenen Punkte. Genau dieser Fehler ist Chat 15 unterlaufen.
- **Beschluss Ondo 15.8.: künftig alle Fangfragen im Kontrollexamen**, keine feste Zahl. Die beschlossene Kürzung auf „vier" war nicht abgezählt — die Mappe vom 15.8. kennzeichnet fünf.
- **Beschlossen und nicht gebaut — die massgebliche Zahl steht im neuesten Fassungsabschnitt oben.**

---

## ⚠ Was Fassung 24 ändert (15.8., mittags)

**🔴 Punkt 18 ist zur Hälfte gebaut und Punkt 45 ist gebaut. Arbeitsregel L ist erfüllt.**

- **`PROJEKT-STATUS.md` ist getrennt.** Aus 199 KB wurden `STAND.md` (34 KB), `CHRONIK-2026-08.md` und `CHRONIK-2026-07.md`. **Nichts gelöscht, nur verschoben** — der Beweis läuft maschinell in `pruefe.py`, Abschnitt 10, und sein Sollwert kommt aus dem Original.
- **🔴 Punkt 18 ist NICHT vollständig.** Der zweite Teil — den Backlog in offene Punkte und ein Erledigt-Archiv trennen — steht noch aus. **Er ist der nächste Arbeitsblock.**
- **Punkt 45 gebaut:** `pruefe.py` Abschnitt 11 schlägt an, sobald eine Standsangabe zweimal in `STAND.md` vorkommt. Eine Doppelung war da und ist beseitigt — die Sprachschlüsselzahl stand in „Versionen" **und** im Arbeitsablauf; im Arbeitsablauf steht jetzt ein Verweis.
- **Neu in `STAND.md`: eine vollständige Liste der Entscheidungen, die bei Ondo liegen.** Sechzehn Punkte, jeweils mit Fundstelle, ohne den Inhalt zu wiederholen. Sie war bisher über Backlog, Blueprint und die Übergabemappen verstreut.
- **Drei Funde gegen Chat 16, alle belegt:** Der Backlog ist Fassung 23, nicht 24 — `pruefe.py` verlangte eine Fassung 24, die es nicht gab, und kann deshalb nicht „ALLES SAUBER" gemeldet haben · die Protokollzeile Chat 16 → Chat 17 fehlte in der Buchführung · die neuen Blueprint-Einträge standen in falscher Reihenfolge, und die Zeile „auf 0.21 gehoben" trug den 14.8. statt den 15.8.
- **🔴 Beschlossen und nicht gebaut: sechs** — **E, 2, 3, 4, 46, 47.** Das ist die massgebliche Stelle für diese Zahl; andere Dokumente verweisen hierher, statt sie zu wiederholen.

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

> **🔴 BERICHTIGT am 16.8.2026, nachmittags (Chat 19).** Hier stand bis heute in der Statuszeile: „GEBAUT 16.8. — Bewährung steht aus, erstes Hochladen noch nicht erfolgt." **Das erste Hochladen hat inzwischen stattgefunden und funktioniert** — laut Ondo sind Repo, Tablet und Projektkopien seither auf demselben Stand. **Ursache des Fehlers (Fehlerart C4):** Chat 18 hatte den Satz zum offenen Hochladen geschrieben, bevor Ondo hochgeladen hat, und den späteren Erfolg in der Abnahme daneben vermerkt, statt die ältere Aussage im selben Durchgang zu berichtigen. **Weiterhin unverändert: Punkt 46 gilt nicht als bewährt** — ein geglückter erster Versuch ist kein Nachweis von Zuverlässigkeit.

---

**47. Selbsttest für die App** · *Vorschlag 14.8., Claude · beschlossen 14.8., Ondo* · **Status: BESCHLOSSEN — nach Punkt 44**

Vor jeder Codelieferung: Syntaxprüfung von `beta.html`, Sprachschlüssel-Abgleich DE/FR/EN, und feste Rechenproben — eine bekannte Eingabe muss die bekannte Bewertung ergeben.

→ **Warum:** `pruefe.py` prüft nur Dokumente. Nichts prüft, ob die App nach einer Änderung noch läuft. Ein Codefehler fällt heute erst im Betrieb auf.
→ **Kosten:** ein halber Arbeitsblock, kein Geld.

---

## 🔴 CHATS UND ARBEITSSTRUKTUR — VOR ALLEN APP-PUNKTEN (Ondo, 16.8.)

**Ondos Vorgabe:** Zuerst werden die Probleme mit Chats, Nutzungsgrenzen und Arbeitsstruktur gelöst, dann geht es an der App weiter. Diese Gruppe steht deshalb vor **Prio 1**.

**Das gilt auch gegenüber der Reihenfolge der beschlossenen Punkte.** Der nächste beschlossene ist Punkt 47, und der gehört zur App. **Ondo entscheidet, ob er wartet** — Claude zieht nichts von sich aus vor und stellt nichts von sich aus zurück.

**Reihenfolge innerhalb der Gruppe, Vorschlag Claudes:** 54 zuerst, weil ohne sie der Bereich „Code" ohne Pflichtlektüre arbeitet · dann 53 · dann 55 · dann 56 · dann 58 · dann 57.

---

**54. `CLAUDE.md` für den Code-Bereich** · *Frage 16.8., Ondo · untersucht 16.8., Chat 19 · beschlossen 16.8., Ondo* · **Status: beschlossen, noch nicht gebaut**

Wer im Bereich „Code" arbeitet, hat die Pflichtlektüre nicht gelesen. Er kennt weder die Arbeitsregeln noch die Fehlerarten. **Damit fällt genau der Schutz weg, für den das Kontrollexamen gebaut wurde.**

Claude Code liest beim Start eine Datei mit diesem Namen aus dem Arbeitsordner. Darin könnten die Regeln stehen, ohne dass Ondo sie einfügt.

→ **Geklärt (16.8., anhand der offiziellen Dokumentation, nicht aus dem Gedächtnis):** Der Name steht fest — `CLAUDE.md`, nicht `AGENTS.md`. Ort: im Repo, unter `./CLAUDE.md`, passend zu Punkt 45 (ein Ort je Tatsache, mitversioniert). Umfang: unter 200 Zeilen empfohlen — die vier Pflichtdokumente selbst gehören nicht per `@Import` hinein, das würde bei jedem Sitzungsstart alle rund 120 KB neu laden. Stattdessen eine feste Anweisung, die vier Dokumente vor inhaltlicher Arbeit vollständig zu lesen.
→ **Beschlossen (Ondo, 16.8.), zwei Bausteine:** (1) Claude Code liest die vier Pflichtdokumente auf Anweisung vollständig und erzeugt oder erneuert `CLAUDE.md` daraus. (2) Ein Auslöser bei Sitzungsstart prüft, ob sich die vier Dokumente seit der letzten Erzeugung geändert haben, und erinnert nur dann an eine Erneuerung.
→ **Grenze, die dabei bleibt:** `CLAUDE.md` ist Kontext, keine erzwungene Einstellung — keine Garantie, dass Claude Code die Anweisung befolgt, ähnlich wie eine Regel im Prompt sich anders verhält als eine Regel im Code. Eine dem Kontrollexamen entsprechende Prüfung gibt es dafür nicht.
→ **Hängt zusammen mit Punkt 55.** Ohne diese Datei ist die Arbeitsteilung nicht sicher zu betreiben. Gebaut wird beides auf dem Tablet oder in einer Cloud-Sitzung (Punkt 53), nicht im Chat-Bereich.
→ **Kosten:** keine ausser Zeit, und dem Kontext, den das Lesen der vier Dokumente bei jeder betroffenen Sitzung kostet.

---

**53. Erzeugte Dateien ohne Handarbeit an den richtigen Ort** · *Vorgabe 16.8., Ondo* · **Status: Idee — Ondos Vorgabe steht, der Weg ist offen**

**Ondos Vorgabe im Wortlaut:** Er will nicht mehr von Hand hochladen. Erzeugte Dateien sollen auf dem Tablet in den richtigen Ordnern landen — **im Repo und im Projektordner der App**. Er arbeitet parallel am Handy. Ziel ist, das Tablet zu Hause laufen zu lassen. **Es kann aber aus sein**, etwa nach einem Windows-Update. Er will mit **einem Klick** entscheiden, wohin gespeichert wird — Handy, Tablet, Repo, Projektordner — und welche Dateien. **Einmal eingestellt, danach immer automatisch, wenn er es auslöst.**

→ **Was belegt ist:** Der Projektordner der App liegt bei Anthropic, nicht auf dem Tablet. Claude Code schreibt nur auf die Platte des Geräts.
→ **Was NICHT bekannt ist (Art. 11):** ob es überhaupt einen Weg in den Projektordner gibt · was geschieht, wenn das Tablet aus ist · ob der Weg vom Handy aus anstossbar ist. **Claude hat keine dieser Fragen geprüft.**
→ **Vor jedem Vorschlag ist zu untersuchen, nicht zu vermuten.** Punkt 46 hat am 16.8. gezeigt, was eine Angabe aus dem Gedächtnis kostet.
→ **Kosten:** unbekannt, bis die Untersuchung vorliegt.

---

**55. Arbeitsteilung zwischen Chat, Code und Cowork festlegen** · *Frage 16.8., Ondo* · **Status: Idee — Vorschlag Claudes liegt vor, Entscheidung offen**

Ondos Frage: Wer erstellt und prüft künftig die Dateien, wer lädt hoch, wo wird besprochen?

→ **Vorschlag Claude (16.8.):** Besprechen und entscheiden im Chat · erstellen, ändern, prüfen und hochladen im Bereich „Code" · Cowork vorerst nicht, weil Claude es zu wenig kennt, um es einzuordnen.
→ **Der Haken:** siehe Punkt 54.
→ **Kosten:** keine.

---

**56. Nutzungsgrenzen — welche Wege gibt es?** · *Frage 16.8., Ondo* · **Status: Idee — Claude hat KEINE belastbare Auskunft gegeben**

Ondos Frage: API, grösseres Abo oder etwas anderes? Was kostet es, brauchen wir es jetzt?

→ **Claude hat am 16.8. ausdrücklich keine Zahlen genannt**, weil sie aus dem Gedächtnis stammen würden. Die API rechnet nach Verbrauch statt nach Woche und kostet echtes Geld; alles Weitere ist ungeprüft.
→ **Auflage:** Die Antwort wird aus der offiziellen Preisseite geholt, nicht erinnert.
→ **Kosten der Untersuchung:** wenige Abrufe, kein Geld.

---

**58. Die Sammlung im Chat hat keinen Ablageort** · *Fund 16.8., Claude, auf Ondos Frage* · **Status: Idee — die Ursache ist benannt, die Abhilfe nicht**

Ondos Frage war, ob `pruefe.py` den Chat prüfen kann, damit Beschlossenes nicht verlorengeht. **Das kann es nicht** — es liest Dateien, nicht Gespräche.

**Der eigentliche Fund liegt darunter:** Was Claude im Lauf eines Arbeitsblocks sammelt, liegt ausschliesslich im Gespräch. Es gibt keinen zweiten Ort. Geht der Speicher zur Neige oder kommt etwas dazwischen, ist alles weg, was nicht in einer Datei steht.

→ **Das ist ein belegbarer Teil der Ursache** für die neunte Fehlerart und für vergessene Zusagen. **Nicht die ganze Ursache** — die ist weiterhin unbekannt (Art. 11).
→ **Zur Entscheidung:** ein mitlaufender Merkzettel als Datei, in den jeder Beschluss sofort wandert? Das wäre wieder eine Lieferung je Beschluss — genau das, was Ondo am 16.8. beanstandet hat. **Der Widerspruch ist ungelöst; Claude legt ihn offen, statt ihn zu überspielen.**
→ **Kosten:** keine, solange nicht entschieden wird.

---

**57. Weitere Werkzeuge — Connectors und anderes** · *Frage 16.8., Ondo* · **Status: Idee — ungeprüft**

Ondos Frage: Es gibt Chat und Code. Gibt es weitere Möglichkeiten, die Arbeit zu erleichtern?

→ **Claude weiss es nicht.** Nichts davon ist geprüft.
→ **Nachrangig gegenüber 53 bis 56**, weil dort konkrete Vorgaben vorliegen und hier nur eine offene Frage.
→ **Kosten:** unbekannt.

---

## 🔴 Prio 1 — als Nächstes dran

**41. 🔴 Zuordnung der Listenangaben über den Spielnamen statt über die laufende Nummer** · *Spur Chat 13 (12.8.), am 13.8. von Chat 14 am Log BEWIESEN* · **Status: Idee, Ondo vorzulegen — die URSACHE ist belegt, die Abhilfe ist es nicht**

**Der Befund.** In `vorhersagen()` kommt der Spielname aus der Antwort des Gehirns, aber **Anpfiffzeit, Wettbewerb und Stufe kommen aus der Spielliste an derselben Zählstelle**:

```
vorher.forEach(function(v, idx){
  var match = String(v.match||'');                                  /* aus der Antwort */
  wettbewerb:(paket.liste[idx]&&paket.liste[idx].wettbewerb)||'',   /* aus der LISTE  */
  anpfiff:(paket.liste[idx]&&paket.liste[idx].anpfiff)||'',
  stufe:(paket.liste[idx]&&paket.liste[idx].stufe)||null,
```

Liefert ein Gehirn mehr, weniger oder anders geordnete Vorhersagen als die Liste Spiele hat, hängen Zeit und Wettbewerb am falschen Spiel. **Eine Kennung, die das verhindern würde, gibt es im Auftragstext der Gehirne nicht** — nur der Schiedsrichter arbeitet mit `id`.

**Der Beweis (13.8., aus dem KI-Log ausgezählt).** An vierzehn von fünfzehn Vorhersagetagen stimmen Anpfiffzeit und Wettbewerb bei beiden Gehirnen überein. Am **10. August** weichen vier von sieben Paaren ab. An diesem Tag lieferte Sonnet **neun** Vorhersagen für eine Liste mit **acht** Spielen (Pendikspor doppelt), und der letzte Eintrag hat **gar keine Anpfiffzeit und gar keinen Wettbewerb** — `paket.liste[9]` existiert nicht. Die verschobenen Werte sind eine Vertauschung innerhalb desselben Tages.

**Vorschlag zur Vorlage:** Die Listenangaben nicht über `idx` holen, sondern über den Spielnamen aus der Antwort in der Liste nachschlagen. Findet sich kein passendes Spiel, bleiben Zeit und Wettbewerb leer — sichtbar leer statt falsch belegt.

→ **Kosten:** kein Geld, keine neuen Sprachschlüssel, eine Änderung an einer Stelle im Code.
→ **Kein Schnitt in der Messreihe (Art. J zu prüfen):** Der Punkt ändert weder den Auftragstext der Gehirne noch die Bewertung. Prozentangaben, Tipps und Märkte stammen aus der Antwort des Gehirns selbst und sind unberührt.
→ **⚠ Grenze — was dieser Punkt NICHT löst:** Er erklärt den 10. August. Er erklärt **nicht** den 8. August, an dem sieben von zehn Zeiten falsch waren und **beide Gehirne übereinstimmten**. **Es sind zwei Probleme.** Die Ursache der falschen Zeiten in der Liste selbst bleibt unbekannt (Art. 11).
→ **Aufgenommen erst, nachdem die beschlossenen Punkte 6 und 7 gebaut waren** (Arbeitsregel L).

---

### Als v19.7 gebaut am 3.8.: A · 0a · 1 · D — Bewährungszeit läuft

**36. Verlängerte Spielformate schliessen — die andere Hälfte von Weg A** · *Fund 9.8., Claude beim Prüflauf* · **Status: Idee, Ondo vorzulegen**

Weg A (Beschluss Ondo 6.8.) schliesst aus der Spielliste **verkürzte** Formate aus: „Turniere mit verkuerzter Spielzeit (Vorbereitungsturniere mit 45- oder 60-Minuten-Partien)" und verlangt „Jedes aufgenommene Spiel muss ueber die vollen 90 Minuten gehen."

**Verlängerte Formate fallen nicht darunter.** Leeds – RB Leipzig war am 8.8. auf **120 Minuten** angesetzt, zwei Hälften zu 60 Minuten. Der offizielle Endstand ist 2:0, das zweite Tor fiel in der 109. Minute. Die App misst den Stand nach 90 Minuten und meldete 1:0.

→ **Nicht bestimmbar, ob der Schiedsrichter falsch gelesen hat** (Art. 11). Kein Anbieter veröffentlicht einen Zwischenstand bei Minute 90. Es ist wie beim Como Cup **keine Fehlerart des Schiedsrichters, sondern eine Lücke in der Spielliste**.
→ **Erledigt für diesen Fall:** Beide Leeds-Einträge sind auf Ondos Entscheidung **geparkt**.
→ **Vorschlag zur Vorlage:** Der Satz „Jedes aufgenommene Spiel muss ueber die vollen 90 Minuten gehen" wird zu „genau 90 Minuten plus Nachspielzeit — weder verkürzt noch verlängert". Eine Zeile, keine neuen Sprachschlüssel, kein Geld.
→ **Grenze der Wirkung:** Das schliesst nur aus, was die Spielliste als solches erkennt. Ein Modell, das das Format nicht kennt, nimmt es trotzdem auf. Senkt die Wahrscheinlichkeit, schliesst nichts aus.
→ **🔴 ZWEITER, STÄRKERER FALL (13.8.): 1. FC Union Berlin – Aris Limassol (9.8.), dreimal 45 Minuten.** Der Endstand 3:2 ist gesichert, der **Stand nach 90 Minuten nicht bestimmbar** — der Vereinsbericht legt alle fünf Tore in die ersten 90 Minuten (3:2 nach 90, Halbzeit 2:1), Flashscore nennt dieselben Torschützen mit 44./49./55./90./110. Minute (3:1 nach 90, Halbzeit 1:0). Beide Quellen widersprechen sich auch darin, wer zuerst traf. **Der Eintrag ist geparkt.**
→ **Warum dieser Fall stärker ist als Leeds:** Bei Leeds fehlte nur die Angabe. Hier liegen **zwei gleichwertige Quellen mit unvereinbaren Angaben** vor. Das Spiel ist nicht falsch gefunden, es ist mit der Messregel **nicht messbar**.
→ **Status jetzt: entscheidungsreif.** Es liegen zwei belegte Fälle in fünf Tagen vor.

---

**37. Kein Schutz gegen einen zweiten Vorhersagelauf am selben Tag** · *Fund 9.8., Claude* · **Status: Idee, Ondo vorzulegen**

`vorhersagen()` legt jeden zurückgegebenen Eintrag ungeprüft an. Es gibt **keine Prüfung**, ob ein Spiel für denselben Tag bereits im Log steht.

**🔴 Nachtrag 9.8., mittags — es ist bereits passiert.** Im KI-Log steht am **6. August** dasselbe Spiel zweimal:

```
6.8.2026 18:00 · Red Bull Salzburg - Pafos FC     [UEFA Europa League Qualifikation]
6.8.2026 19:00 · FC Red Bull Salzburg - Pafos FC  [UEFA Europa League]
```

**Ein Spiel, zwei Einträge, zwei verschiedene Anpfiffzeiten.** Der Doppelschutz in `spielListeHolen` vergleicht `String(s.match).toLowerCase().replace(/[^a-z0-9]/g,'')` — das vorangestellte „FC" macht aus `redbullsalzburgpafosfc` ein `fcredbullsalzburgpafosfc`, und die Prüfung schlägt fehl. **Der Punkt ist damit belegt, nicht mehr nur befürchtet, und er betrifft zwei Vorhersagen je Gehirn im Bestand.**

→ **Folge für den Bauvorschlag:** Ein Vergleich auf exakte Zeichengleichheit reicht nicht. Er muss auch Namensvarianten erfassen, oder der Vergleich läuft über Datum und Wettbewerb mit.

Am 9.8. lieferte der erste Lauf nur zwei Spiele. Ondo drückte ein zweites Mal und bekam fünf **andere** — keine Doppeleinträge. **Das war Glück.** Bei gleicher Spielliste stünden dieselben Spiele zweimal im Bestand und zählten zweimal in die Kalibrierung.

→ **Vorschlag zur Vorlage:** Vor dem Anlegen prüfen, ob Spielname und Datum schon vorhanden sind, und den Eintrag dann überspringen. Wenige Zeilen.
→ **Zu klären, bevor gebaut wird:** Ob ein bewusst zweiter Lauf am selben Tag ein zulässiger Anwendungsfall ist — etwa wenn der erste zu wenige Spiele lieferte. Dann wäre Überspringen richtig, Blockieren falsch.
→ **Kein Schnitt.** Betrifft weder den Auftragstext der Gehirne noch den des Schiedsrichters.
→ Hängt zusammen mit Frage 2 („Doppelter Spieleintrag als zehnte Fehlerart?").

---

**E. „Prüfen statt suchen" — beschlossen am 25.7., bis heute nicht gebaut** · *Idee 25.7., ChatGPT · Beschluss Ondo 25.7.* · **Status: beschlossen, noch nicht gebaut — NEU eingetragen 31.7.**

**⚠ NICHT MEHR BLOCKIERT (8.8.).** Geminis Rückfrage vom 4.8. — wie ein Prüf-Auftragstext ein **echtes** 0:0 von einem „nicht gefunden" unterscheidet — ist im Bericht nach Arbeitsregel K vom 8.8., 06:35 Uhr gestellt und **von Gemini selbst beantwortet worden**. Sein Vorschlag: Das Modell muss den **Zustand** klassifizieren, bevor es Ziffern ausgeben darf — sinngemäss „Status: beendet, Ergebnis 0:0" gegen „Status: nicht gefunden", und Ziffern ausschliesslich bei bestätigtem torlosem Unentschieden.

→ **ChatGPT widerspricht** und antwortet auf dieselbe Frage „nein, ohne externe Quelle nicht". **Die Prüfer sind hier uneins.**
→ **Einordnung Claudes (Art. 14):** Geminis Formulierung trennt Zustand und Ergebnis und ist dadurch eine echte Verbesserung. **Sie beseitigt die neunte Fehlerart nicht.** Ein Modell, das ein Ergebnis erfindet, kann ebenso gut den Status erfinden. Sie senkt die Wahrscheinlichkeit, sie schliesst nichts aus.
→ **Kein Schnitt in der Messreihe:** Der Punkt ändert den Auftragstext des **Schiedsrichters**, nicht den der Gehirne. Arbeitsregel J greift hier nicht — dieselbe Begründung wie bei Punkt 26.
→ **Prüfbar wäre er:** Ein erfundenes 0:0 fällt heute nicht auf, weil Halbzeit 0:0 zu Endstand 0:0 passt. Mit Status-Kennzeichnung gäbe es zum ersten Mal ein Feld, dessen Fehlen auffällt.
→ **Status: entscheidungsreif. Ondo entscheidet, ob gebaut wird. Beide Prüfer raten, jetzt nichts zu bauen, sondern erst die Entscheidungen festzuhalten.**

ChatGPTs Umformulierung, im Blueprint unter dem 25.7. protokolliert: **Der Schiedsrichter soll nicht suchen, sondern prüfen.** Nicht „finde Spiel X", sondern „hier sind Wettbewerb, Datum, Heim, Gast — bestätige nur, wenn alle vier übereinstimmen".

**Stand im Code:** Der Auftrag beginnt bis heute mit „Ermittle per Websuche … den ENDSTAND". Übergeben werden nur Spielname, Datum und Anpfiffzeit — **der Wettbewerb gar nicht.** Die Wettbewerbspflicht aus v19.2 wirkt erst hinterher, als Warnung an Ondo.

**Vermutete Folge:** die erfundenen 0:0 vom 31.7. Ein Modell, das suchen soll, liefert irgendetwas; ein Modell, das bestätigen soll, kann „nein" sagen. **Vermutung, nicht bewiesen (Art. 13).**

→ **Beide Prüfer, 4.8.: „Prüfen statt suchen trifft den Kern."** Die Aufgabe zu schärfen ist mächtiger, als ein größeres Modell auf einen unscharfen Auftrag zu werfen. Nach der Rücknahme von 0a ist E der einzige verbliebene Ansatz gegen erfundene Ergebnisse.
→ **Offene Rückfrage von Gemini, bisher unbeantwortet:** Wie soll der neue Auftragstext ein **echtes** 0:0 von einem „nicht gefunden" wasserdicht unterscheiden? Ohne Antwort darauf ersetzt E die neunte Fehlerart womöglich nur durch eine zehnte. **Diese Frage muss vor dem Bauen beantwortet sein.**
→ Hängt zusammen mit ChatGPTs offener Frage vom 30.7.: Darf der Schiedsrichter überhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten? Diese Frage gehört in den Blueprint.
→ *Warum es drei Tage unentdeckt blieb: Der Beschluss stand nur im Blueprint-Protokoll, nie im Backlog. Genau der Fall, gegen den Arbeitsregel F gemacht wurde.*

---

**0b. Widersprüche messen statt korrigieren** · *Idee 29.7., Ondo* · **Status: ZURÜCKGESTELLT (31.7.), war beschlossen**

Ursprünglich: Widersprüche zwischen Ergebnis-Tipp und Marktaussage bekommen eine eigene Kennzahl je Gehirn.

**Warum zurückgestellt:** Nach dem Befund unter Punkt A würde eine Widerspruchsquote keine Eigenschaft der Gehirne messen, sondern eine unklare Formulierung im Auftragstext. Eine Kennzahl, die dem Gehirn anlastet, was die Frage verursacht hat, wäre selbst ein Messfehler.

**Zwei Korrekturen am ursprünglichen Beschluss, falls er wiederaufgenommen wird:**
1. Die Quote ist **rückwirkend** aus den vorhandenen Daten auslesbar (`gedreht`-Vermerk), ohne neue Messung.
2. Der Vorsatz „die betroffene Aussage fließt nicht in die Kalibrierung ein" ist **falsch herum**. Die umgedrehte Aussage ist die, an die das Gehirn glaubt. Sie herauszunehmen entfernt ehrliche Daten.

→ *Wiederaufnahme nach Test A.* **Test A ist am 5.8. abgeschlossen; die Voraussetzung ist damit erfüllt. Entscheidung Ondos steht aus.**

---

**0c. Amtliche Quellen bevorzugen** · *Idee 30.7., Claude* · **Status: Idee**

Beim UEFA-Abgleich am 30.7. benutzte keine Schiedsrichter-Antwort `uefa.com`. Die falschen Ergebnisse stammten von `terrikon.com` und `flashfussball.de`. Am 31.7. kamen vier 0:0 in Folge aus derselben Quelle.

→ *Vorschlag: pro Wettbewerbsfamilie eine bevorzugte Quelle vorgeben. Die bestehende Quellenpflicht verlangt nur, **dass** eine Quelle genannt wird, nicht **welche**.*
→ *ChatGPT (30.7.) hält diesen Punkt für billiger als eine zweite unabhängige Quelle.*

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

**2. Erster Lernschritt** · *Idee 6.7., ChatGPT (Lernkette) · Art. 9* · **Status: beschlossen, Termin offen**

Jedes Gehirn bekommt seine eigene Kalibrierung mitgeteilt, Ondo bestätigt die Lehre, dann gilt sie.

Für **Flash** ist die Lehre klar benennbar: 29 Aussagen im Bereich 60–69 %, behauptet 62 %, eingetroffen 45 %.

**Warnung (Claude, verschärft 31.7.):** Für **Sonnet** gibt es insgesamt **fünf** bewertete Aussagen oberhalb von 60 %. Die 87 Aussagen stammen überwiegend aus Testspielen und ausgeglichenen Partien; die sieben CL-Vorhersagen vom 29.7. sind nicht darunter, weil sie nie übernommen wurden. Eine Lehre auf dieser Grundlage misst vor allem, wie schwer die Spiele waren.

**Zweiter Grund zum Verschieben (31.7.):** Ein Lernschritt ist nach Art. 9 eine bestätigte Lehre. Eine Lehre auf ungeklärter Datengrundlage wieder zurückzunehmen ist teurer, als sie später zu geben. Solange Test A offen ist, weiß niemand, was ein Teil dieser Zahlen bedeutet.

→ *Empfehlung Claude: verschieben. **Entscheidung Ondos steht aus.***
→ **⚠ Neu am 6.8.: Die Schwelle ist überschritten.** *(Verlaufsangabe vom 6.8. — der heutige Messstand steht in `STAND.md` und nur dort.)* Nachgerechnet aus dem KI-Log-Text und gegen die App geprüft: **je 135 bewertete Aussagen**. Der belegte Maßstab „rund 100 je Gehirn" ist damit erreicht, und der **erste** Grund zum Verschieben ist weggefallen.
→ **Der zweite Grund besteht fort:** Sonnet hat über 60 % nur **10 von 135** Aussagen. Über Sonnets Verhalten bei Zuversicht wissen wir weiterhin fast nichts.
→ **Flashs Lehre ist jetzt sehr solide belegt:** 49 Aussagen im Bereich 60–69 %, behauptet 63 %, eingetroffen 49 %. Dazu dasselbe Muster nach unten: unter 50 % behauptet 43, eingetroffen 32.
→ Das deckt sich mit der Antwort beider Prüfer vom 4.8.: im ersten Durchgang nur Flash korrigieren. **Ondos Entscheidung steht weiterhin aus.**
→ **Beschlossen (Ondo, 31.7.): als ausdrücklich OFFENE Frage an ChatGPT und Gemini geben.** Bericht gestellt am 4.8., 06:15 Uhr.
→ **Antwort beider Prüfer (4.8.): ja, im ersten Durchgang nur Flash korrigieren, Sonnet unangetastet lassen.** Begründung: Sonnet ist mit 5 % solide; zu mehr Entschlossenheit zu drängen, erzöge ein ehrliches Modell zu falscher Sicherheit. **Entscheidung Ondos steht weiterhin aus** — eine Prüferantwort ist ein Vorschlag, kein Auftrag (Art. 8).
→ **⚠ Zahlenberichtigung (4.8., gefunden von Chat 5):** Der Bericht vom 4.8. behauptet, eine „150er-Schwelle" für den Lernschritt sei mit 174 Aussagen überschritten. **Beides ist falsch.** Eine 150er-Schwelle steht in keiner Projektdatei; belegt ist ausschliesslich „rund 100 **pro Gehirn**" (PROJEKT-STATUS, Abschnitt Richtungswechsel 23.7.). Und 87 + 87 zu addieren ist unsinnig, weil der Lernschritt je Gehirn gilt. **Nach dem belegten Maßstab ist die Schwelle nicht erreicht.** Eine berichtigte Fassung ist den Prüfern nachzureichen.

---

**3. Such-Experiment** · *Idee 23.7., Claude* · **Status: beschlossen — 🔴 seit dem 14.8. BLOCKIERT, Ondo vorzulegen**

Vier Wochen ohne Websuche messen, dann Suche zuschalten, Kalibrierung vergleichen. Die Messung ohne Suche läuft seit dem 23. Juli — **vier Wochen sind am 20. August um.**

→ **🔴 Die Pause bricht den zweiten Teil.** Ondo hat am 14.8. entschieden, die Sammlung nach dem nächsten Prüflauf zu pausieren. Der erste Teil ist damit erfüllt, der zweite nicht: Ein Vergleich **mit** Suche verlangt neue Vorhersagen, und die gibt es in einer Pause nicht.
→ **Drei Wege, alle Ondos Entscheidung:** den Punkt bis auf Weiteres ruhen lassen · für den Vergleich eine begrenzte Zahl zusätzlicher Läufe ausnehmen · den Punkt streichen und die vier Wochen ohne Suche als alleinigen Befund führen.
→ **Kosten:** Ruhenlassen und Streichen kosten nichts. Zusätzliche Läufe kosten Modellaufrufe in unbekannter Höhe, weil die Zahl der nötigen Läufe nicht feststeht.
→ **Empfehlung Claude: ruhen lassen.** Der Punkt ist nicht verdorben, nur vertagt — die Messreihe ohne Suche bleibt vollständig erhalten und wäre jederzeit die Vergleichsgrundlage.

---

**43. Punkt 29 ist gebaut und nirgends ausgewertet** · *Fund 13.8., Chat 14 in der Abnahme · aufgenommen 14.8.* · **Status: Aufgabe, nicht entschieden — auszuführen, sobald ein frischer KI-Log vorliegt**

Die eigene Rolle für die Spielliste (`rolle:'liste'`, `gemini-flash-latest`) wurde am 9.8. **ausdrücklich als diagnostischer Test** gebaut, nicht als Abhilfe: Läuft die Liste auf dem grösseren Modell und werden die Zeiten richtig, war das Modell die Ursache; bleiben sie falsch, liegt sie woanders. **Beides wäre ein Ergebnis.**

Seither sind mehrere Vorhersagetage vergangen. **Ob die Anpfiffzeiten seit dem 10. August besser geworden sind, steht in keinem Dokument.**

→ **Warum es zählt:** Es ist der einzige noch offene Weg zur **zweiten, unbekannten** Ursache — der, die Punkt 41 ausdrücklich nicht löst.
→ **Was gebraucht wird:** ein frischer KI-Log-Text ab dem 10. August. Claude gleicht die Anpfiffzeiten per Websuche gegen die Wettbewerbe ab, die im Log stehen.
→ **Grenze, vorab benannt (Art. 14):** Ein einzelner sauberer Tag beweist nichts, ein einzelner falscher auch nicht. Es ist zu sagen, was gemessen wurde — und zu sagen, wenn es nicht reicht.
→ **Zusätzliche Grenze:** Mit der Pause kommen keine neuen Tage mehr dazu. Was jetzt im Log steht, ist alles, was es je geben wird.
→ **Kosten:** einige Websuchen, kein Geld, kein Eingriff in Code oder Messreihe.

---

## 🟡 Prio 2 — wichtig, aber später

**4. Daten-Export in die stabile Version** · *Idee Chat 1, erneut 28.7.* · **Status: beschlossen**
**Nicht zu verwechseln mit „Datensicherung" (gebaut in v19.1).** Die Sicherung schützt vor Datenverlust; dieser Punkt überträgt die Messdaten aus der Beta in die stabile Version. Ohne ihn geht bei der Beförderung alles Gesammelte verloren.
→ *Unmittelbar vor der Beförderung.*

**5. Beförderungskriterium (c) neu fassen** · *Idee 23.7., ChatGPT* · **Status: Idee**
15 Bewertungen sind statistisch zu wenig, 100 dauern Monate. Vorschlag Claude: Beförderung nach Stabilität und Fehlerfreiheit entscheiden, die Messung läuft danach weiter. **Inhalt gehört in den Blueprint.**
→ *Vermerk 31.7.: Die Beförderung ist derzeit ohnehin gesperrt — Kriterium (f) verlangt Null-Fehler-Toleranz beim Schiedsrichter. Einzelheiten in `PROJEKT-STATUS.md`.*

**9. Echte Quoten automatisch (GitHub Actions + Quotendienst)** · *Idee 23.7., Claude* · **Status: Idee**
Offene Vorfrage (Gemini): Deckt ein kostenloser Dienst überhaupt Ondos Spiele ab? Verfassungsfrage offen: Der Actions-Wecker ist ein winziger Server, der Blueprint sagt „kein Server". **Die Entscheidung gehört in den Blueprint.**

**10. Value-Rechnung zurückholen** · *Idee 22.7., Gemini* · **Status: Idee** · hängt an Punkt 9

**11. Rollenmodell in den Blueprint** · *Idee 23.7., ChatGPT* · **Status: Idee**
Zwei Ergänzungen von Claude offen: Architekt und unabhängiger Prüfer sollten nicht dieselbe Rolle sein; Geminis Doppelrolle (Duell-Teilnehmer und Schiedsrichter) muss benannt werden.

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

**48. Struktur- und Reihenfolgebeweis** · *Vorschlag 15.8., ChatGPT und Gemini unabhängig · beschlossen 15.8., Ondo* · **Status: 🔴 GEBAUT am 15.8.2026 (Chat 17)**

> Der Zeilenbeweis zeigt, dass nichts fehlt. Er zeigt nicht, dass der Text noch an seinem Platz steht. `pruefe.py` Abschnitt 9b prüft jetzt zusätzlich, dass jeder Block **am Stück** in **genau einer** Zieldatei steht und dass die **Reihenfolge** erhalten ist. Eine bewusst geänderte Reihenfolge zählt nur, wenn sie **in der Datei selbst** erklärt ist — sonst liesse sich jede Unordnung nachträglich zur Absicht erklären.

**49. Messmethodik und Interpretationsgrenzen in `STAND.md`** · *Vorschlag 15.8., ChatGPT* · **Status: BESCHLOSSEN — Reihenfolge unverändert, nach Punkt 46**

> Ein neuer Chat kann heute aus richtigen Zahlen eine falsche Empfehlung ableiten, weil die Zahlen dastehen und ihre Grenzen nicht. In die Pflichtlektüre gehören: Definition der drei Märkte · wie Brier-Score und Kalibrierung gerechnet werden · was in den Nenner zählt und was nicht · dass geparkte Einträge **kein** Ergebnis haben · welcher Rohdatenstand ausgewertet wurde · der Schnitt bei „beide treffen" · die ungeklärten Anpfiffzeiten. **Und als Kern eine Liste: „Was darf aus diesem Messstand NICHT geschlossen werden?"**

**50. Verworfen-und-warum-Liste im Blueprint** · *Vorschlag 15.8., Gemini (abgeschwächt von Claude)* · **Status: BESCHLOSSEN — Reihenfolge unverändert, zuletzt**

> Gemini wollte das ganze Entscheidungs-Protokoll zurück in die Pflichtlektüre, damit ein frischer Chat keine geschlossenen Debatten neu eröffnet. **Das wären 48 KB und die Trennung rückgängig.** Stattdessen eine kurze Liste im Blueprint: was verworfen wurde, je ein Satz warum, Verweis ins Protokoll für Einzelheiten.

**51. Gepaarter Vergleich Sonnet gegen Flash** · *Vorschlag 15.8., ChatGPT* · **Status: BESCHLOSSEN — Reihenfolge unverändert, nach Punkt 46**

> Zwei getrennt betrachtete Unsicherheitsbereiche sind der schwächere Weg; **überlappende Bereiche beweisen nicht, dass die Gehirne gleich gut sind.** Beide bekommen dieselbe Spielliste — deshalb ist ein Vergleich Spiel für Spiel aussagekräftiger. **Die Rohdaten liegen vor; es braucht keine einzige neue Vorhersage.**
>
> **🔴 Voraussetzung (Ondo, 15.8.): sauberes Entparken durch Claude.** Jeder geparkte Eintrag wird einzeln auf seinen **Grund** geprüft — 45-Minuten-Testspiele, doppelte Vorhersagen, erfundene Paarungen —, maschinell und nachvollziehbar, nicht nach Anzahl. Ondo prüft nichts von Hand nach.

---

**52. Der Verlustbeweis braucht ein Ende** · *Fund 16.8., Claude* · **Status: Idee — Entscheidung Ondos steht aus**

Der Beweis aus Punkt 48 vergleicht `STAND.md` gegen `PROJEKT-STATUS.md`. **Jede Pflege einer Zeile, die von dort stammt, bricht ihn** — auch eine richtige. Am 16.8. traf es die Zeile mit der letzten Sicherung; sie musste in die Ausnahmeliste. **Die Liste wächst damit mit jeder Pflege, und eine wachsende Ausnahmeliste beweist immer weniger.**

Das Skript sieht selbst vor, dass der Beweis entfällt, sobald das Original nicht mehr im Ordner liegt — „nach der Bewährungszeit gewollt". Wann diese Bewährungszeit endet, hat niemand festgelegt.

→ **Zur Entscheidung:** Wird eine Frist gesetzt, nach der `PROJEKT-STATUS.md` aus dem Ordner genommen wird? **Claude schlägt nichts vor, bevor Ondo den Zweck bestimmt hat** — der Beweis sichert die Trennung vom 15.8., nicht die laufende Pflege.
→ **Kosten:** keine, solange nicht entschieden wird.

---


## 📋 Für Blueprint und Ondo-Core vorgemerkt

*Diese Punkte gehören in die Architektur- und Verfassungsdokumente und sind hier nur geparkt, bis sie dort stehen.*

| Punkt | Herkunft | Ziel | Stand |
|---|---|---|---|
| Arbeitsregel **K — Bericht statt Datei**: *Prüfer bekommen nur die geänderten Stellen mit Zeilennummer, altem und neuem Text und Begründung — davor ein fester Zusammenhangsblock, jedes Mal neu aus den Dokumenten geschrieben.* | **Claude 7.8., beschlossen von Ondo 7.8.** | Blueprint 2c | **eingetragen** (Blueprint 0.9, Abschnitt 2c) |
| Arbeitsregel **J — Korrekturfaktor gilt nur für sein Modell**: *Wechselt das Modell, verfällt der Faktor und muss neu gemessen werden.* | **Ondos Frage, 4.8.** | Blueprint 2c | **eingetragen** (Blueprint 0.6, Abschnitt 2c) |
| **„Fail Safe" bei unbekannten Fehlern** — nicht automatisch wechseln, sondern anhalten und als Unklarheit melden | ChatGPT, 4.8. | Blueprint 2c | **offen — Ondos Entscheidung steht aus** |
| **Wie unterscheidet der Auftragstext ein echtes 0:0 von „nicht gefunden"?** (Geminis Rückfrage) | Gemini, 4.8. | Blueprint / Punkt E | offen |
| **Darf der Schiedsrichter überhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten?** (offene Frage) | ChatGPT, 30.7. | Blueprint | offen |
| Arbeitsregel **G — Kostenregel**: *Jeder Vorschlag nennt seine Kosten — Geld, Zeit, Nutzungslimit — oder sagt ausdrücklich, dass er keine hat.* Ein Satz, kein Formular | **Ondo, 31.7., angenommen** | Blueprint 2c | **eingetragen** (Blueprint 0.4, Abschnitt 2c) |
| Arbeitsregel: **Belegen statt herleiten** — Codezeilen zitieren, nicht beschreiben | Ondo, 31.7. | Blueprint 2c | **eingetragen** (Arbeitsregel H) |
| Arbeitsregel: **Prüfen, bevor behauptet wird, ein Dokument sei veraltet** | 31.7. | Blueprint 2c | **eingetragen** (Arbeitsregel I) |
| **Übergabe-Protokoll** als Tabelle (wer an wen, welches Verfahren, wie viele Kontrollfragen richtig) | **Ondo, 31.7.** | PROJEKT-STATUS | **eingetragen** (Abschnitt Übergabe-Protokoll) |
| Drei-Ebenen-Trennung | ChatGPT, 23.7. | Ondo-Core | beschlossen |
| Übergaberegel (Chat-Übergabe) in einer Fassung für ChatGPT | 30.7. | Blueprint | beschlossen |
| Beförderungskriterium (c) | ChatGPT, 23.7. | Blueprint | offen |
| Verfassungsfrage GitHub Actions („kein Server") | 23.7. | Blueprint | offen |
| Rollenmodell | ChatGPT, 23.7. | Blueprint | offen |

**Hinweis für den nächsten Chat (31.7.):** Prozentzahlen in der Messphase widersprechen **nicht** dem Beschluss vom 5.7. über Vertrauensstufen HOCH/MITTEL/NIEDRIG. Die Stufen gelten für **Empfehlungen an Ondo**, die Prozentzahlen für **Messwerte** — Kalibrierung ist ohne Prozentzahlen nicht messbar. Das ist kein Fehler und nicht zu reparieren.

---

## 👁 Beobachtungspunkte — nichts bauen, nur mitschreiben

| Beobachtung | Gefunden | Von wem | Stand |
|---|---|---|---|
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
| **Sprachdateien von Hand** (217 Schlüssel × 3 Sprachen, gezählt am 14.8. abends — maschinell abgeglichen, identisch) | Dreifache Pflege bei jeder neuen Beschriftung. Rückgriff bleibt Punkt 19 | niedrig |
| **Seed-Daten fest im Code** (WM-Wetten vom Juli) | Ballast bei jedem Start | niedrig |
| **Kein automatischer Test** | Jede Änderung wird nur von Hand geprüft | mittel → Punkt B wäre der erste Schritt |
| **Gemini-Kaskade komplex** | Funktioniert, aber schwer zu durchschauen bei Fehlern | niedrig |
| **Die Dokumente selbst** | Das Einlesen kostet einen neuen Chat etwa die Hälfte seines Arbeitsspeichers | **NEU 31.7.** → Punkt 18 |

---

## 🟢 Prio 3 — notiert, kein Termin

**13. Sportarten-Erweiterung** · *Idee 20.7., Ondo* · **Status: Idee** — Kandidat 1: Tennis. Pro Sportart eigene Abrechnungsregel und **getrennte Statistik**. Fußball liefert bis Ende September genug Spiele.

**14. Tiefenanalyse-Knopf** · *Idee Chat 1, Claude* · **Status: Idee** — zurückgestellt zugunsten Einfachheit

**15. Vier-Chat-Werkzeug (Poe)** · *Idee 23.7., Claude* · **Status: Idee** — Gratis-Tarif reicht nicht, realistisch ab ~5 $/Monat

**16. Wettarten ausschreiben oder erklären** · *Idee 10.7., Claude* · **Status: Idee** — Anlass war Ondos Frage „Was heißt BTTS?". Heute geringer Bedarf, weil nur drei feste Märkte in Klartext angezeigt werden

**17. DeerFlow-artiger Harness als Backend** · *Idee 15.7., Ondo* · **Status: Idee, Zukunftsregal** — Braucht einen dauerhaft laufenden Rechner, fällt heute durch die Zwei-Probleme-Regel

---

