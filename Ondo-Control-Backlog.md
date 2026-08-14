# ONDO CONTROL — Rückstand-Verzeichnis (Backlog)
**Gepflegt von Claude · Stand 14.8.2026, 22:41 Uhr, Fassung 22 · jede Idee mit Datum, Urheber und Status**

## Regeln für dieses Dokument

1. **Abgrenzung (ChatGPT, 23.7.):** Architektur lebt ausschließlich in `Blueprint.md` und `Ondo-Core-Architektur.md`. Dieses Dokument enthält **nur Aufgaben, Ideen und deren Status** — keine Architekturregeln.
2. Claude schlägt Punkte von sich aus zum passenden Zeitpunkt vor. Ondo entscheidet, was und wann gebaut wird (Art. 8).
3. Nichts wird gelöscht. Abgelehnt und überholt bleiben sichtbar.

**Status-Werte:** `Idee` · `beschlossen` · `gebaut` · `bewährt` (im Alltag getestet) · `überholt` · `abgelehnt`

**Übergabe an die Prüfer — GEÄNDERT am 30.7.:** Der Eintrag vom 23.7. („Raw-Links funktionieren nur bei Claude, ChatGPT und Gemini brauchen Anhänge") ist **überholt**. GitHub Pages wandelt Markdown in HTML um; diese Adressform funktioniert bei ChatGPT:
`https://ondo-control.github.io/Ondo-Control/PROJEKT-STATUS.html` (entsprechend für Backlog, Blueprint, Ondo-Core-Architektur). Einzelheiten und Folgen stehen in `PROJEKT-STATUS.md`.

**Dateinamen von Berichten an die Prüfer (28.7., Ondo):** Beginnen mit Datum und Uhrzeit — `2026-07-31_1430_Ondo-Control_Thema.md`.

---

## ⚠ Was Fassung 22 ändert (14.8., abends)

**🔴 Punkt 44 ist GEBAUT — `beta.html` v19.8.2, 22:36 Uhr. Arbeitsregel L ist erfüllt.**

- **Messdaten-Export ohne Schlüssel steht.** Neue Karte unter „Mehr", Text- und Dateiausgabe, ohne API-Schlüssel und ohne PIN. **Positivliste statt Sperrliste**, dazu eine zweite Prüfstufe auf den echten Daten. Alles ausgegeben, einschliesslich v18-Archiv (Entscheidung Ondo). Kein Schnitt in der Messreihe. Sprachschlüssel 211 → **217**.
- **Punkt 8 und Punkt 46 sind ZUSAMMENGELEGT** — es war derselbe Vorschlag. Punkt 46 führt ihn weiter, Punkt 8 verweist dorthin. **Die von Punkt 8 seit dem 9. Juli genannte Kostenangabe fehlte in Punkt 46 und ist ergänzt:** die Arbeit zehrt am Wochen-Limit des Pro-Abos.
- **Vier weitere Funde gegen Chat 15**, alle bestätigt: Blueprint führte Punkt 18 noch als offen · „drei Regeländerungen" sind zwei Änderungen und eine Bestätigung · drei veraltete Zahlen im Abschnitt „Aktueller Messstand" · **Punkt 18 fehlte in der Liste der beschlossenen, nicht gebauten Punkte.**
- **🔴 Beschlossen und nicht gebaut: acht** — **E, 2, 3, 4, 18, 45, 46, 47.** Das ist die massgebliche Stelle für diese Zahl; andere Dokumente verweisen hierher, statt sie zu wiederholen (Punkt 45, vorweggenommen).
- **`pruefe.py` auf Chat 16 umgestellt** — Abschnitt 7 vollständig ersetzt, Abschnitt 4b erweitert, neuer Abschnitt 9 zur Schlüsselprüfung.

---

## ⚠ Was Fassung 21 ändert (14.8., nachmittags)

**🔴 Die Grundsatzbesprechung. Fünf Beschlüsse, feste Reihenfolge: 44 → 18 + 45 → 46 → 47.**

- **Punkt 44 NEU und BESCHLOSSEN** — Messdaten-Export ohne Schlüssel. **Erster Bauauftrag des nächsten Chats.**
- **Punkt 18 ENDLICH ENTSCHIEDEN** — Dokumente trennen in Stand und Chronik. Lag seit dem 31.7. als unentschiedene Idee.
- **Punkt 45 NEU und BESCHLOSSEN** — ein Ort je Tatsache.
- **Punkt 46 NEU und BESCHLOSSEN** — Claude Code auf dem Surface Go, als Versuch.
- **Punkt 47 NEU und BESCHLOSSEN** — Selbsttest für die App.
- **Regeländerungen beschlossen**, wirksam erst nach Punkt 18: Lesepflicht schrumpft auf `STAND.md` plus offene Punkte, Kontrollexamen von neun auf vier Fragen.
- **Punkt 43 ausgewertet** — der 13. August ist sauber, zehn von zehn Anpfiffzeiten. Hinweis, kein Beweis.
- **Beschlossen und nicht gebaut: jetzt acht** (E, 2, 3, 4, 44, 45, 46, 47). **Arbeitsregel L in diesem Chat nicht erfüllt.**

---

## 🔴 DIE FÜNF BESCHLÜSSE DER GRUNDSATZBESPRECHUNG (14.8.)

**Ondos Rahmen:** Solange diese Probleme nicht gelöst sind, kommt das Projekt nicht vernünftig weiter. Regeln dürfen die Arbeit nicht erschweren; brauchbare Lösungen sollen nicht ausgeschlossen werden, wenn sie nichts kaputt machen.

---

**44. Messdaten-Export ohne Schlüssel** · *Vorschlag 14.8., Claude · beschlossen 14.8., Ondo* · **Status: 🔴 GEBAUT am 14.8.2026, 22:36 Uhr, `beta.html` v19.8.2 (Chat 16)**

Ein zweiter Knopf neben „Daten sichern", der **nur** Vorhersagen und Wetten ausgibt — **ohne API-Schlüssel, ohne PIN**. Der bestehende Sicherungsknopf bleibt unangetastet.

→ **Warum zuerst:** Die Messdaten liegen an genau einem Ort. Die vorhandene Sicherungsdatei enthält die Schlüssel und kann das Gerät nicht verlassen. **Das ist das größte Risiko im ganzen Projekt** — größer als jeder offene Fehler.
→ **Was es zusätzlich löst:** Claude bekommt zum ersten Mal die Rohdaten. Brier-Score, Unsicherheitsbereiche und die Rechnung zur Verzerrung durch geparkte Einträge werden damit erst möglich — drei offene Artikel-14-Lücken. Keine Bildschirmfotos mehr, keine abgetippten Zahlen.
→ **Bauhinweise:** Nur ausgeben, nichts speichern, nichts rechnen, nichts an ein Gehirn schicken. Vor der Lieferung ist zu prüfen, dass in der Ausgabe **kein** Schluesselfeld vorkommt — maschinell, nicht durch Hinsehen. Textknopf wie bei Log und Prüfliste, damit es vom iPhone aus verschickt werden kann.
→ **Kosten:** ein Baublock in `beta.html`, kein Geld, kein Modellaufruf, **kein Schnitt in der Messreihe**. Nächste Lieferung heißt v19.8.2.

**🔴 GEBAUT am 14.8.2026, 22:36 Uhr (Chat 16).** Fünf Stellen geändert: `CODE_VERSION` auf v19.8.2 · sechs neue Sprachschlüssel in DE/FR/EN (211 → **217**) · der Codeblock mit `MESS_FELDER`, `messGeheimFund`, `messDatenBauen`, `messTextBauen`, `messDatei` · die Anzeigefunktion `messExportBlock` · der Aufruf im Mehr-Tab unter der Datensicherung.

**Positivliste statt Sperrliste.** Ausgegeben wird ausschliesslich `kiProtokoll`, `bets`, `regeln`, `startSaldo`, `eingezahlt`, `ausgezahlt`, `korrekturF`, `letzteSicherung`, dazu ein Kopf mit Anzahl und eine Schlusszeile. Eine Sperrliste kennt nur Vorhergesehenes — der Bautyp, der am 4.8. dreimal gescheitert ist.

**Zwei Prüfstufen, keine holt ihren Sollwert vom Geprüften (C6).** `messGeheimFund` läuft über das erzeugte Ergebnis und schlägt an bei Feldnamen mit `key`, `pin`, `token`, `secret`, `passw` und bei Werten mit `sk-ant-` oder `AIza`. Dann wird **nichts** ausgegeben. `pruefe.py` Abschnitt 9 prüft die Positivliste zusätzlich gegen die drei Eingabefelder der Einstellungen.

**Entscheidung Ondo 14.8.: alles ausgeben, einschliesslich v18-Archiv.** Kein Zeitraum- und kein Aera-Filter — eine Sicherung mit Datumsbereich wäre keine Sicherung.

**Geprüft:** `node --check` sauber · 217 Schlüssel in DE/FR/EN identisch · **Trockentest mit drei Fällen**, darunter zwei, die beide Prüfstufen zum Anschlagen bringen. Einzelheiten in `PROJEKT-STATUS.md`, Abschnitt „Der 14. August", Unterpunkt 17.

**Was er NICHT löst (Art. 14):** Er erzeugt keine Sicherung von selbst. Solange Ondo den Knopf nicht drückt und die Ausgabe nicht ablegt, liegen die Daten weiterhin an einem Ort.

---

**45. Ein Ort je Tatsache** · *Vorschlag 14.8., Claude · beschlossen 14.8., Ondo* · **Status: BESCHLOSSEN — zusammen mit Punkt 18**

Jede Kennzahl steht künftig an **genau einer** Stelle. Überall sonst wird darauf verwiesen statt sie zu wiederholen. `pruefe.py` bekommt eine Prüfung, die anschlägt, sobald eine Standsangabe zweimal vorkommt.

→ **Warum:** Alle vier Buchführungsfehler des 13.8. waren derselbe Fehler — eine Stelle geändert, die anderen nicht. Die Sprachschlüsselzahl stand an vier Stellen, die letzte Sicherung an drei.
→ **Der Kern:** Das behebt die Fehlerart nicht durch mehr Sorgfalt, sondern dadurch, **dass es nichts mehr zu vergessen gibt**. Sorgfalt hat bisher nicht gereicht, bei keinem Chat.
→ **Kosten:** Teil von Punkt 18, keine zusätzlichen.

---

**46. Claude Code auf dem Surface Go** · *Idee 9./10.7., Claude (als Punkt 8) · neu vorgelegt 14.8. · beschlossen 14.8., Ondo* · **Status: BESCHLOSSEN als Versuch**

> **🔴 ZUSAMMENGELEGT am 14.8. abends (Chat 16).** Dies ist derselbe Vorschlag wie **Punkt 8** („Claude Code auf dem Windows-Tablet über das Pro-Abo", 9./10.7.). Chat 15 hat ihn als neuen Punkt aufgenommen, ohne den alten zu finden. **Punkt 8 verweist ab jetzt hierher; dieser Punkt führt ihn weiter.** Fund von Chat 16, bestätigt von Chat 15.

Ondos Gerät: Surface Go, Windows 10 Home 22H2, 64 Bit, 8 GB RAM, 110 GB frei, Pentium 4415Y.

→ **Es passt:** Unterstützt sind Windows 10 oder neuer, mindestens 4 GB RAM, unter 1 GB Platte. Der native Installer braucht **kein** Node.js. Nötig ist ein Claude-Konto ab Pro. Der schwache Prozessor stört wenig, weil die Rechenarbeit auf Anthropics Servern läuft.
→ **Was sich ändert:** Claude Code sitzt im Ordner mit den Projektdateien, liest eine Datei **erst wenn es sie braucht** und nur die nötige Stelle, ändert direkt, führt `pruefe.py` selbst aus und schickt die Änderung selbst zu GitHub. **Ondo lädt dann nichts mehr von Hand hoch.** Das Speicherproblem verschwindet weitgehend, weil nicht mehr alles vorher in den Chat geladen werden muss.
→ **Ehrlich zu den Hürden:** Es ist ein Terminalfenster, kein Fenster mit Knöpfen. Die Einrichtung ist einmalig, aber eine Hürde. Claude sieht das Tablet nicht und kann nur eine Schritt-für-Schritt-Anleitung liefern und bei Fehlern helfen.
→ **Zur Alternative Claude Desktop mit Cowork:** ausdrücklich für Leute ohne Programmierkenntnisse, aber für angenehmes Arbeiten werden 16 GB RAM als Untergrenze genannt. Auf 8 GB vermutlich zäh. **Claude Code ist der leichtere Weg.**
→ **Kosten:** kein zusätzliches Geld bei vorhandenem Pro-Konto. Ein Abend Einrichtung. **Risiko für das Projekt: keines** — das Repo bleibt wie es ist, und wenn es nicht klappt, geht es weiter wie bisher.
→ **🔴 Kostenangabe ergänzt am 14.8. abends, sie fehlte:** **Die Arbeit zehrt am Wochen-Limit des Pro-Abos.** Das steht seit dem 9./10. Juli in Punkt 8 und ist bei der Neuaufnahme untergegangen. „Kein zusätzliches Geld" ist damit richtig, aber unvollständig — ein Nutzungslimit ist nach Arbeitsregel G ausdrücklich mitzunennen. Zweiter Haken aus Punkt 8, ebenfalls weiterhin gültig: Es läuft nur, wenn Ondo es am Tablet anstösst.

---

**47. Selbsttest für die App** · *Vorschlag 14.8., Claude · beschlossen 14.8., Ondo* · **Status: BESCHLOSSEN — nach Punkt 44**

Vor jeder Codelieferung: Syntaxprüfung von `beta.html`, Sprachschlüssel-Abgleich DE/FR/EN, und feste Rechenproben — eine bekannte Eingabe muss die bekannte Bewertung ergeben.

→ **Warum:** `pruefe.py` prüft nur Dokumente. Nichts prüft, ob die App nach einer Änderung noch läuft. Ein Codefehler fällt heute erst im Betrieb auf.
→ **Kosten:** ein halber Arbeitsblock, kein Geld.

---

## ⚠ Was Fassung 20 ändert (14.8., früh)

- **🔴 `CODE_VERSION` ist entschieden** — von Claude, auf Ondos ausdrückliche Delegation. Sie ist ein reines **Lieferkennzeichen** und wird bei jeder Lieferung hochgezählt. Der Schnitt in der Messreihe wird am **Fehlen** des Feldes `codeVersion` erkannt, nicht an seinem Wert. Nicht rückwirkend umnummeriert; die nächste Codelieferung heißt **v19.8.2**. Eingetragen im Blueprint 0.17.
- **🔴 Ondos Entscheidung: Die Sammlung wird nach dem nächsten Prüflauf pausiert.** Genug Daten. **Folge: Punkt 3 (Such-Experiment) ist blockiert, nicht erledigt** — sein zweiter Teil verlangt neue Vorhersagen mit Websuche. Ondo vorzulegen.
- **Vier Buchführungsfehler des 13.8. geheilt:** Sprachschlüsselzahl **211 statt 201** · `CODE_VERSION` · Drei-Ebenen-Trennung im Blueprint an zwei Stellen noch als offen · Sicherungsangabe sechs Tage alt. Alle vier vom Nachfolger gefunden, alle vier vom abgebenden Chat bestätigt.
- **`pruefe.py` erweitert** um Abschnitt **4c**: Standsangaben werden gegen die jüngste Angabe derselben Art im selben Dokument geprüft. Dazu ist die **Ablesezeit des Messstands von der Schreibzeit entkoppelt**.
- **Punkt 29 ist gebaut und nirgends ausgewertet** — als eigener Punkt festgehalten, siehe unten. Der einzige noch offene Weg zur zweiten, unbekannten Ursache der falschen Anpfiffzeiten.
- **Beschlossen und nicht gebaut: weiterhin vier** (E, 2, 3, 4). **Arbeitsregel L ist für diesen Chat noch nicht erfüllt** — dieser Block ist Buchführung und Werkzeugpflege.

---

## ⚠ Was Fassung 19 ändert (13.8., abends)

- **🔴 Die rückwirkende Berichtigung ist beschlossen und ausgeführt.** Sie stand seit dem 5. August offen. Gebaut als zweistufiger Knopf in `beta.html`, umkehrbar über `fAlt`, einmalig über `state.korrekturF`. 28 Aussagen geändert — 16 bewertete und 11 geparkte vom Typ A, dazu Motherwell vom Typ B.
- **Wirkung:** Sonnets Trefferquote 52 → 55 Prozent. **Die Kalibrierungsabweichung bleibt bei 4 %** — der Fehler wurde verschoben, nicht beseitigt.
- **Neue stehende Regel (Punkt 42):** Vor jedem Entparken wird der **Grund** des Parkens geprüft, nicht die Anzahl.
- **Beschlossen und nicht gebaut: weiterhin vier** (E, 2, 3, 4).

---

## ⚠ Was Fassung 18 ändert (13.8., nachmittags)

- **Punkt 41 neu:** Zuordnung der Listenangaben über den Spielnamen statt über die laufende Nummer. **Die Ursache ist am KI-Log bewiesen**, die Abhilfe ist Ondo vorzulegen.
- **Punkt 6 gebaut** — Drei-Ebenen-Trennung, eingetragen in `Ondo-Core-Architektur.md` 0.4. Lag 21 Tage beschlossen und ungebaut.
- **Punkt 7 gebaut** — Übergaberegel in einer Fassung für ChatGPT, eingetragen in `Blueprint.md` 0.16, Abschnitt 2d. Lag 14 Tage beschlossen und ungebaut.
- **Punkt 36 erweitert und auf entscheidungsreif gesetzt** — zweiter, stärkerer Fall (Union – Aris, dreimal 45 Minuten).
- **Beschlossen und nicht gebaut: jetzt vier statt sechs** (E, 2, 3, 4). Arbeitsregel L ist für diesen Chat erfüllt.

---

## ⚠ Was Fassung 17 ändert (9.8., mittags)

- **🔴 Punkt 29 ist GEBAUT.** `beta.html` **v19.8.1**, 13:55 Uhr. Die Spielliste hat eine eigene Rolle und läuft auf `gemini-flash-latest`; die Stufe wird je Eintrag mitgeschrieben. **Zweiter Punkt nach Arbeitsregel L an einem Tag.** Bilanz: **40 Punkte, 9 gebaut, 6 beschlossen und nicht gebaut** (E, 2, 3, 4, 6, 7).
- **🔴 Punkt 27 ist in seiner bisherigen Form ÜBERHOLT.** Entscheidung Ondo: nicht das Prüffenster erweitern, sondern die Ursache suchen. Der Vorschlag hätte den 8.8. nicht erkannt — dort gab es keine Häufung auf einer runden Uhrzeit und trotzdem sieben falsche Zeiten von zehn.
- **Punkt 37 ist belegt, nicht mehr nur befürchtet.** Am 6.8. steht `Red Bull Salzburg - Pafos FC` (18:00) und `FC Red Bull Salzburg - Pafos FC` (19:00) im Log — ein Spiel, zwei Einträge, zwei Zeiten. Der Vergleichsschlüssel scheitert am vorangestellten „FC".
- **Neuer Punkt 38 — Sonnet als wählbares Modell für Schiedsrichter und Spielliste** (Entwurf Ondo, mit Kontrollkästchen). Zurückgestellt, weil er heute kein Problem löst.
- **Der Laufzeitpunkt je Eintrag wurde vorgeschlagen und NICHT gebaut** — Ondo hat die zugrundeliegende Vermutung widerlegt.

---

## ⚠ Was Fassung 16 ändert (9.8., früh)

- **Neuer Punkt 36 — verlängerte Spielformate.** Weg A schliesst **verkürzte** Formate aus (45/60 Minuten). Verlängerte sind nicht ausgeschlossen. Leeds – RB Leipzig ging am 8.8. über 120 Minuten; die Aussage der App und der offizielle Endstand gehen dadurch auseinander. **Spiegelbild des Como-Cup-Falls.**
- **Neuer Punkt 37 — kein Schutz gegen einen zweiten Vorhersagelauf.** `vorhersagen()` prüft nicht, ob ein Spiel für denselben Tag schon im Log steht. Am 9.8. ist es nur gut gegangen, weil der zweite Lauf andere Spiele lieferte.
- **Punkt 35 (Streuungsangabe) ist im Alltag bestätigt.** Sonnets Abweichung fiel an einem Tag von 8 % auf 5 %, Flashs stieg auf 6 % — der Vorsprung hat sich umgedreht. Der Sprung liegt im vorhergesagten Bereich 3,9 bis 14,7.
- **Punkt 26 hat einen dritten fehlerfreien Lauf.** Kein falscher Halbzeitstand am 8.8. Drei Läufe sind kein Urteil.
- **Punkt 30 hat erstmals Zahlen:** Von sechs Freundschaftsspielen am 8.8. waren **alle sechs** auffindbar. Die Befürchtung, sie seien schlechter dokumentiert, ist an diesem Tag nicht eingetreten. Ein Tag ist kein Urteil — aber „erst zählen, dann entscheiden" hat begonnen.

---

## ⚠ Was Fassung 15 ändert (9.8., nachts)

- **🔴 Punkt F ist GEBAUT.** `beta.html` **v19.8.0**, geliefert am 9.8.2026 um 04:15 Uhr. Beide Stellen geändert, Ursache statt Wirkung. **Damit ist der erste Punkt nach Arbeitsregel L abgearbeitet.** Bilanz: **39 Punkte, 8 gebaut, 6 beschlossen und nicht gebaut** (E, 2, 3, 4, 6, 7).
- **Die offene Prüffrage bei Punkt F ist beantwortet:** Die App speicherte die Version **nicht** je Vorhersage. Sie tut es ab v19.8.0 im neuen Feld `codeVersion`. Das vorhandene `aera` war zu grob.
- **Reihenfolge festgelegt: Schnitt → Prüflauf → Berichtigung**, jeweils mit eigener Sicherung. Im Blueprint 0.13 protokolliert.
- **Ondos Einwand hat den Bau vereinfacht:** Er schlug vor, für die Berichtigung nur die betroffenen Einträge einzeln zu markieren, statt eine Regel über den ganzen Bestand laufen zu lassen. Damit entfällt die Gefahr, dass eine Berichtigung neue, richtige Einträge beschädigt — Claudes Hauptargument für das Versionsfeld war damit entkräftet. Das Feld ist trotzdem gebaut, weil es die Grenze zwischen alter und neuer Frage eindeutig macht; das Datum wäre am 8.8. mehrdeutig gewesen.

---

## ⚠ Was Fassung 14 ändert (8.8., abends)

*Drei Funde aus einem frischen Claude-Chat, den Ondo geöffnet hat — **nicht von Chat 12 selbst gefunden**. Nach Arbeitsregel H nachgerechnet statt übernommen.*

- **Neuer Punkt 34 — Brier-Score.** Die Kalibrierung allein lässt sich durch Ausweichen auf 50 % schönen; der Brier-Score nicht. Vorabrechnung: Sonnet 0,2593, Flash 0,2471, Vergleichswert 0,2500. **Chat 12 hat den Fund an einer Stelle berichtigt:** Die Berichtigung von Punkt F ändert die Zahl sehr wohl — Sonnet springt auf 0,2418.
- **Neuer Punkt 35 — Streuungsangabe.** Die Hauptkennzahl ist auf mehrere Prozentpunkte genau, nicht auf einen. Der wochenlang berichtete Vorsprung „5 gegen 9" lag im Rauschen.
- **Geparkte Einträge als systematische Verzerrung** in den Messstand aufgenommen: Sonnets einzige Aussagen ab 80 % sind geparkt und werden nie bewertet.
- **Punkt 18 („Dokumente auf Diät") als Hinweis erhöht:** zwölf Chats in fünf Wochen; er bestimmt vermutlich die Übergabefrequenz.

---

## ⚠ Was Fassung 13 ändert (8.8.)

*Geschrieben von Chat 12. **Anmerkung zur Fassungsnummer:** Die Änderungen des 8. August wurden zunächst als sechs einzelne „Nachträge zu Fassung 12" angehängt, statt eine neue Fassung zu eröffnen. Das widerspricht der Handhabung der Fassungen 5 bis 12, bei denen jeder wesentliche Schritt eine eigene Nummer bekam. **Von Ondo beanstandet und hier berichtigt.** Die einzelnen Nachträge bleiben am Fuss des Dokuments als Aufzeichnung stehen; die drei vom Abend des 7.8. gehören weiterhin zu Fassung 12.*

- **🔴 Punkt F ist vollständig vermessen.** 15 betroffene bewertete Sonnet-Aussagen, netto **+9** (94/180 = 52 % statt 85/180 = 47 %), Flash unverändert. **Zwei Fehlerarten, nicht eine.** Auslöser ist die **Null im Tipp**, nicht das Kennzeichen `gedreht`. **Befund A ist widerlegt:** Sonnet ist nicht überzuversichtlich. Punkt F um den vollständigen Bauvorschlag und die Berichtigungsfrage ergänzt — **beschlossen, gemessen, auf Ondos Anweisung nicht gebaut.**
- **Punkt E ist nicht mehr blockiert.** Gemini hat seine eigene Rückfrage vom 4.8. beantwortet und eine Formulierung geliefert; ChatGPT widerspricht. **Entscheidungsreif.**
- **Punkt 27 auf entscheidungsreif** — viertes Auftreten falscher Anpfiffzeiten, zweiter Tag in Folge mit gleichmässig einer Stunde (App 12:00, tatsächlich 13:00, per Websuche belegt).
- **Punkt 28 vollständig entschieden:** Prüfer bekommen frische Chats ausserhalb des Projektordners.
- **Neue Punkte 29, 30, 31, 32, 33** — eigene Rolle für die Spielliste · Freundschaftsspiele · Core-Vertrag nicht gebaut (`askBrain` existiert nicht) · „gefunden" gegen „bestätigt" trennen · Doppel-Codebasis bei der Beförderung.
- **Bilanz des Verzeichnisses: 39 Punkte, 7 gebaut, 7 beschlossen und nicht gebaut** (F, E, 2, 3, 4, 6, 7), ältester vom 25. Juli.
- **Arbeitsregel L (Bauen vor Aufnehmen)** von Ondo beschlossen, eingetragen im Blueprint 0.11.

---

## ⚠ Was Fassung 12 ändert (7.8.)

- **v19.7.8 geliefert und hochgeladen.** Drei Punkte in einem Rundgang: Weg A (Spiellänge) · Punkt 25 (Vorschläge als Text) · Punkt 26 (Temperatur des Schiedsrichters auf 0,0). Keiner davon rührt den Auftragstext der Gehirne an — **kein Schnitt in der Messreihe.**
- **Die Spiellänge ist entschieden: Weg A.** Ein Satz in der bestehenden Verbotsliste der Spielliste, der Formate mit verkürzter Spielzeit ausschließt. Gefragt wird nach dem Format, nicht nach Minuten.
- **Prüflauf vom 7.8. früh: zehn von zehn Endständen richtig**, alle selbst per Websuche gegengeprüft. Der dritte fehlerfreie Lauf in Folge, gemessen am Endstand.
- **Aber: dritter Tag in Folge mit einem falschen Halbzeitstand** — und zwar im ersten Lauf **mit** Temperatur 0. Die Null hat es nicht behoben.
- **🔴 Neu und schwerwiegend: Die Spielliste hat am 7.8. Spiele erfunden.** Fünf Paarungen, die es nicht gibt oder die schon vorbei sind. Siehe eigener Abschnitt.
- **Punkt A hat geliefert:** Bei „beide treffen" widerspricht **Sonnet in drei von fünf Fällen** dem eigenen Anzeigewert, **Flash in null von fünf**. Punkt F ist damit nicht mehr Vermutung, sondern gemessen.
- **Ein Befund über Geminis Leseverhalten** ist eingetragen — es meldete Vollständigkeit und brach bei rund drei Vierteln ab.
- **Neuer Punkt 28:** Prüfern künftig nur die geänderten Stellen schicken, nicht die ganze Datei. **Am Abend des 7.8. von Ondo als Arbeitsregel K beschlossen** und um einen festen Zusammenhangsblock ergänzt.
- **Nachträge vom Abend des 7.8.:** Der Zeitfehler ist ein **gleichmäßiger Versatz von genau einer Stunde** bei fünf von fünf Spielen — damit ist die Erklärung „britische Ortszeit" **widerlegt**, die Ursache bleibt unbekannt. Dazu die **Berichtigung zum FA Cup**: Einzelne Partien der Extra-Vorrunde liefen bereits am Freitag.

---

## 🔴 Neue Beobachtung (7.8.): Die Spielliste hat Spiele erfunden

Der Vorhersagelauf vom 7.8. lieferte fünf Spiele, alle mit dem Vermerk „UEFA Conference League Qualifikation" und dem Datum 7.8.2026.

**Die dritte Qualifikationsrunde wurde am 6. August gespielt, das Rückspiel folgt am 13. August. Am 7. August findet in diesem Wettbewerb nichts statt.** (Quelle: UEFA, Terminübersicht der Conference-League-Qualifikation.)

Gegen den bestätigten Spielplan des 6.8. gehalten:

| In der App | Tatsächlich |
|---|---|
| Rapid Wien – SK Brann | Rapid Wien spielte bei Paide Linnameeskond (6.8.); Brann spielte gegen Apollon Limassol (5.8.) |
| Sparta Prag – FC Vaduz | Vaduz spielte bei Inter Turku (6.8.); Sparta Prag ist in dieser Runde nicht vertreten |
| Panathinaikos – NK Osijek | Panathinaikos spielte gegen CSKA 1948 Sofia (5.8.) |
| AZ Alkmaar – FK Vojvodina | beide in dieser Runde nicht vertreten |
| Ajax Amsterdam – Shelbourne | echte Paarung, aber **am 6.8. um 20:00 Uhr bereits gespielt** |

→ **Vier frei zusammengesetzte Paarungen und eine abgelaufene.** Das ist eine neue Fehlerart: nicht eine falsche Anpfiffzeit, nicht ein verkürztes Format, sondern **Spiele, die es nicht gibt.**
→ **Warum das gefährlich ist:** Zu solchen Spielen kann nie ein Ergebnis entstehen. Und der Schiedsrichter hätte danach gesucht — im schlechtesten Fall hätte er Endstände anderer Spiele gefunden und zugeordnet.
→ **Alle zehn Vorhersagen (fünf Spiele, zwei Gehirne) wurden geparkt** (Ondo, 7.8.). Sie gehen nicht in die Messung ein.
→ **Ursache unbekannt.** Ob die Liste das Datum verschiebt, aus dem Gedächtnis Paarungen bildet oder beides, ist offen. **Nichts gebaut. Erst beobachten, ob es sich wiederholt.**
→ **Nachtrag vom selben Tag:** Nach dem Parken lief die Suche erneut und lieferte **fünf belegte Spiele** (drei EFL-Cup-Erstrundenpartien, Club Brugge – Kortrijk, Bochum – Hertha; Quellen Sky Sports und ESPN). **Erst vier von fünf erfunden, dann fünf von fünf echt — Ursache des Unterschieds unbekannt.**
→ **Neuer Zeitfehler im zweiten Lauf:** Middlesbrough – Wrexham beginnt 20:00 Uhr **britischer** Zeit (21:00 deutscher), die App zeigt 20:00. Die englischen Spiele stehen in Ortszeit. **Drittes verschiedenes Muster an drei Tagen in Folge** — neun Stunden starr (5.8.), null bis drei Stunden ungleich (6.8.), eine Stunde durch Ortszeit (7.8.). Gemeinsam ist nur die Richtung: zu früh. **Ursache unbekannt, nichts gebaut.**
→ **Zur Frage nach dem FA Cup (Ondo, 7.8.):** Der neue Satz schließt ihn **nicht** aus. Stufe 1 verlangt ausdrücklich nationale Pokalwettbewerbe, und die drei EFL-Cup-Spiele belegen, dass Pokale durchkommen. **Die Extra Preliminary Round beginnt erst am Samstag, 8.8.2026** — und startet mit reinen Amateurvereinen, die die ältere Regel seit v19.6 ausschließt. Keine Entscheidung nötig.
→ **Nachtrag vom Abend des 7.8.:** Abgleich der fünf Spiele gegen ein gespeichertes Abbild von OneFootball (deutsche Zeiten) ergibt **fünf von fünf um genau eine Stunde zu früh** — Middlesbrough 21:00 statt 20:00, Wycombe / Wolverhampton / Brügge 20:45 statt 19:45, Bochum 20:30 statt 19:30. **Damit ist die Erklärung „britische Ortszeit" widerlegt: Bochum – Hertha ist ein deutsches Spiel und ebenso verschoben. Ursache weiter unbekannt.** Erster **gleichmäßiger** Versatz seit dem 5.8. Nichts gebaut.
→ **Berichtigung zum FA Cup:** Die Auskunft, er habe am 7.8. noch nicht begonnen, war **falsch** — einzelne Partien der Extra-Vorrunde liefen bereits am Freitag (Thornbury – Brislington, Sheffield FC – Parkgate, je 20:30). Richtig bleibt der zweite Teil: Die beteiligten Vereine sind Non-League und werden von der älteren Amateur-Regel seit v19.6 ausgeschlossen, nicht vom neuen Satz.
→ *Einordnung zu Weg A: In dieser Liste stand kein Turnier mit verkürzter Spielzeit. Das ist **kein Beleg**, dass der neue Satz wirkt — solche Formate wären an diesem Tag ohnehin unwahrscheinlich gewesen. Der Test steht aus.*

---

## 🆕 Neue Beobachtung (7.8.): Bei „beide treffen" widerspricht nur Sonnet sich selbst

Punkt A schreibt seit v19.7 das ausdrückliche Wort des Gehirns mit. Im Lauf vom 7.8. trat der Widerspruch dreimal auf, gekennzeichnet mit „≠ Anzeige oben".

| Spiel | Anzeige | Wort des Gehirns |
|---|---|---|
| AZ Alkmaar – Vojvodina (Sonnet) | Beide treffen: Ja, 72 % | **nein** |
| Sparta Prag – Vaduz (Sonnet) | Beide treffen: Ja, 78 % | **nein** |
| Ajax – Shelbourne (Sonnet) | Beide treffen: Ja, 75 % | **nein** |

**Sonnet: drei Widersprüche in fünf Vorhersagen. Flash: null in fünf.**

Im zweiten Lauf desselben Tages (Club Brugge und Wolverhampton, beide Sonnet) wiederholte es sich. **Über beide Läufe des 7.8.: Sonnet fünf von zehn, Flash null von zehn.**

→ **Der Befund bleibt gültig, obwohl die Spiele erfunden waren.** Er betrifft, wie das Gehirn antwortet, nicht ob das Spiel existiert.
→ **Folge für Punkt F:** Die Zweideutigkeit des Auftragstextes ist damit gemessen, nicht mehr vermutet — und sie trifft nur ein Gehirn. Punkt F bleibt beschlossen und ungebaut; er ist ein Schnitt und braucht eine eigene Lieferung mit frischer Sicherung davor.

---

## 🔎 Prüflauf vom 7. August, früh — zehn von zehn im Endstand

Geprüft wurden die zehn Vorhersagen vom 6.8. Alle zehn Endstände von Claude per Websuche gegengeprüft, keiner von Hand nachgeschlagen.

- **Zehn von zehn Endständen richtig.** Sieben Europa-League- und drei Conference-League-Spiele, alle Wettbewerbszuordnungen korrekt.
- **Neun von zehn Halbzeitständen richtig.** Falsch: **Lech Poznań – KÍ Klaksvík**, gemeldet 1:0, tatsächlich 0:0. Der Endstand 1:0 stimmt.
- **Auf die Messung wirkt sich das nicht aus** — alle drei Märkte werden aus dem Endstand gerechnet. Der Halbzeitstand dient nur der Plausibilitätsprüfung.
- **Die Prüfung konnte es nicht fangen**, weil 1:0 zur Pause und 1:0 am Ende in sich stimmig sind. Das ist ihre Grenze, keine Schwäche.
- **Dritter Tag in Folge mit falschem Halbzeitstand** (5.8., 6.8., 7.8.) — und der 7.8. war der **erste Lauf mit Temperatur 0** beim Schiedsrichter. **Ein Lauf ist kein Urteil** (Arbeitsregel B), aber die Erwartung „weniger Streuung beim Ablesen" ist im ersten Test nicht eingetreten.
- **Zwei Endstände waren zunächst nicht belegbar** (Braga – Dinamo Minsk, CFR Cluj – Tromsø). Claude hat sie ausdrücklich als *nicht bestätigt* gemeldet statt sie durchzuwinken; Ondo lieferte Belege nach. Beide waren richtig, einschließlich Halbzeitstand.
- **Kleinigkeit:** Zwei von zehn Quellenangaben lauteten `sportdaten-spiegel.de` mit Bindestrich statt `sportdaten.spiegel.de`. Eine Quellenangabe, die überprüfbar sein soll, muss stimmen. Beobachten, nichts bauen.

---

**28. Prüfern nur die geänderten Stellen schicken, nicht die ganze Datei** · *Idee 7.8., Claude · zugestimmt Ondo 7.8. · **als Arbeitsregel K beschlossen Ondo 7.8., abends*** · **Status: BESCHLOSSEN — Arbeitsregel K, eingetragen im Blueprint 0.9, Abschnitt 2c**

Beide Prüfer lesen ganze Dateien nachweislich unvollständig: ChatGPT über Suchtreffer, Gemini von vorn bis etwa drei Viertel. Beide melden das nicht von sich aus zuverlässig.

→ **Vorschlag:** Bei jeder Lieferung bekommen die Prüfer künftig nur die geänderten Stellen — mit Zeilennummer, altem und neuem Text und einer Begründung — dazu zwei bis drei geschlossene Fragen.
→ **Warum:** kürzer, prüfbar, und der Abbruch kann gar nicht mehr auftreten. Ihr Wert liegt im Urteil über eine klar gestellte Frage, nicht im vollständigen Lesen.
→ **Kosten:** keine.

**⚠ Lücke, gefunden durch Ondos Rückfrage am 7.8. abends — der Punkt war in dieser Form unbrauchbar.** Ondo fragte, ob er die Berichtsdatei in einen **neuen** Prüfer-Chat hochladen kann, ohne dass dieser die Dokumente gelesen hat. Antwort: nein. Ein Zeilendiff setzt stillschweigend voraus, dass der Prüfer den Gegenstand schon kennt. In einem frischen Chat kennt er ihn nicht — nicht die Umstellung zum Messgerät, nicht die Rollen der Gehirne, nicht die Bedeutung der Kalibrierung. Er würde raten.

→ **Zweite Hälfte, deshalb ergänzt:** Jeder Bericht beginnt mit einem festen **Zusammenhangsblock** von etwa einer halben Seite. Inhalt jedes Mal dasselbe Gerüst: was das Projekt ist und dass es misst statt zu beraten · die vier Beteiligten und ihre Rollen · die Hauptkennzahl · der Messstand in wenigen Zahlen · welche Version stabil und welche Beta ist · und ausdrücklich, was **nicht** Thema ist. Danach erst die geänderten Stellen, zuletzt die zwei bis drei geschlossenen Fragen.
→ **Ein Format für beide Prüfer, nicht zwei.** Gemini kann Links grundsätzlich nicht abrufen (Punkt 12, beantwortet am 4.8.), bei ihm muss der Zusammenhang in der Datei stehen. ChatGPT könnte verweisen, findet aber nur, wonach es sucht. Zwei Formate zu pflegen kostet mehr, als es einbringt.
→ **Zwei Bedingungen gegen den Beschluss vom 30.7.** („handgeschriebene Projektzusammenfassungen in Übergaben sind zu unterlassen"): Der Block wird bei **jedem** Bericht neu aus den Dokumenten geschrieben, nie aus dem Gedächtnis, und **jede Zahl darin steht auch im Bericht selbst**, damit ein Widerspruch sofort auffällt.
→ **Nicht als feste Datei ins Repo.** Eine solche Datei würde altern, ohne dass es jemand merkt — genau das ist ChatGPTs eigener Mappe am 30.7. passiert, sie war an sechs Stellen veraltet.
→ **Kosten der Ergänzung: keine.** Kein Geld, kein API-Aufruf, kein Eingriff in Auftragstext, Kalibrierung oder Messreihe. Aufwand eine halbe Seite je Bericht auf Claudes Seite; für Ondo ändert sich nichts.
→ **✅ ENTSCHIEDEN am 8.8. (Ondo): Prüfer bekommen frische Chats ausserhalb des Projektordners.** Begründung Ondos: In fortgeführten Chats greifen sie auf alte Angaben und alte Ideen zurück. Zweiter Grund, der bei Rückfragen zählt: In einem fortgeführten Chat verteidigt ein Prüfer seine eigene frühere Antwort. **Folge:** Der Zusammenhangsblock ist damit nicht mehr optional, sondern die einzige Grundlage, die der Prüfer hat — und Rückfragen dürfen die frühere Antwort nicht nennen.
→ **Erste Anwendung:** der Bericht nach dem Prüflauf vom Abend des 7.8.

---

## 🔍 Befund über Gemini (7.8.): meldet Vollständigkeit und bricht ab

Zu `beta.html` v19.7.8 schrieb Gemini, der Quellcode sei „vollständig geladen und analysiert" — und schloss denselben Beitrag mit der Feststellung, das Dokument breche bei `<div id="pruefStatus">` ab.

**Die Datei bricht nicht ab.** Sie ist 121.379 Zeichen lang, endet ordentlich und enthält 89 Funktionen; `pruefStatus` steht in Zeile 1480 von 2045. **Gemini hat rund 74 Prozent gelesen.**

→ **Zwei Begriffe seiner Beschreibung sind in keiner Projektdatei belegt:** „Local System Seed v4" (in der Datei steht `state.seedV = 2`, die Startbefüllung der Wettscheine) und „Duell-Protokoll-System". Beide **nicht** in die Dokumente übernommen — Arbeitsregel H, angewandt auf fremde Beiträge.
→ **Und eine Auslassung:** Punkt 26, die Temperatur 0, steht in Zeile 820 — mitten im gelesenen Teil — und wird nicht erwähnt, obwohl es Geminis eigener Vorschlag war.
→ **Muster, jetzt bei beiden Prüfern belegt:** ChatGPT liest über Suchtreffer und übersieht, wonach es nicht sucht (6.8.). Gemini liest von vorn und hört auf, meldet aber Vollständigkeit (7.8.). **Daraus folgt Punkt 28.**

---

## ✅ Gebaut in v19.7.8 (7.8.2026)

Drei Punkte in einem Rundgang, auf Ondos ausdrücklichen Wunsch. Begründung: Ein echter Nutzungstest war zum Lieferzeitpunkt für keinen der drei möglich, einzeln so wenig wie gemeinsam.

- **Weg A — Spiellänge.** Ein Satz in der bestehenden Verbotsliste im Auftragstext der Spielliste: keine Turniere mit verkürzter Spielzeit, jedes Spiel muss über die vollen 90 Minuten gehen, im Zweifel nicht aufnehmen. **Ausgeschlossen wird das Format, nicht nach Minuten gefragt** — das ist die leichtere Frage, weil der Wettbewerbsname ohnehin mitgeliefert wird. Löst Punkt „Spiellänge" aus der Beobachtung vom 5.8.
- **Punkt 26 — Temperatur des Schiedsrichters.** Eine Zeile in `geminiCall`: `if(opts.rolle==='ref') body.generationConfig = { temperature: 0 };`. Trockentest bestanden: bei `rolle:'ref'` steht 0, bei `rolle:'gehirn'` und ohne Rolle bleibt der Standardwert. **Offene Grenze:** Läuft der Schiedsrichter ausnahmsweise über Sonnet — nur ohne Gemini-Schlüssel — greift die Null nicht. Bewusst nicht angefasst.
- **Punkt 25 — Vorschläge als Text.** Unter „Ergebnisse prüfen" erscheint ein Textblock **über** den Übernehmen-Knöpfen: eine Zeile je Vorschlag mit Endstand, Halbzeit, gefundenem Datum, Wettbewerb, Quelle und den Warnungen der App. Reine Ausgabe — nichts gespeichert, nichts gerechnet, nichts an ein Gehirn geschickt. Ondos Vorschlag vom 6.8.
- **Zwei neue Sprachschlüssel**, damit **201 in DE, FR und EN** — maschinell abgeglichen, identisch. Syntax-Check bestanden.
- **`APP_VERSION` steht weiterhin auf 18.** Bewusst nicht mitgeändert, siehe Technische Schuld.

---

## ⚠ Was Fassung 11 ändert (6.8., nachmittags)

- **Der Bericht vom 6.8., 09:05 Uhr ist an beide Prüfer gegangen.** Beide haben geantwortet.
- **Beide Prüfer sagen Ja zur Spiellänge** und **Ja zur zehnten Fehlerart.** Damit sind beide Punkte entscheidungsreif. **Ondos Entscheidung steht aus.**
- **Beide Prüfer raten übereinstimmend davon ab, jetzt eine Kennzahl für Antwortstabilität zu bauen** (Punkt 23) — und beide nennen dieselbe Ursache: die nicht gesetzte Temperatur.
- **Neuer Punkt 26:** Temperatur des Schiedsrichters auf 0,0 setzen. Geminis Fund, und der erste Temperatur-Eingriff, der die laufende Messreihe **nicht** schneidet.
- **Übergabe an ChatGPT vollzogen** — vier von fünf, mit einem Befund über seine Arbeitsweise.
- **Ein Befund über Gemini** ist eingetragen: Seine erste Antwort berief sich auf Quellen, die es im Projekt nicht gibt.

---

## 📋 Prüferantworten vom 6. August

**Beide Prüfer haben den Bericht vom 6.8., 09:05 Uhr beantwortet.** Gemini erst im zweiten Anlauf, siehe unten.

### Frage 1 — Spiellänge in der Spielliste führen?

**ChatGPT: Ja.** Es löse nicht nur den Como-Fall, sondern verhindere grundsätzlich, dass Spiele bewertet werden, die nicht zur Definition des Messinstruments passen. Damit sei die Zwei-Probleme-Regel erfüllt.

**Gemini: Ja.** Die Erfassung verhindere die fehlerhafte Bewertung von Sonderformaten und schütze die Marktstatistik.

→ **Beide Ja. Entscheidungsreif. Ondos Entscheidung steht aus.**

### Frage 2 — Doppelter Spieleintrag als zehnte Fehlerart?

**ChatGPT: Ja.** Mehrfach beobachtet, und er verändert Messdaten — also keine Unschönheit der Oberfläche, sondern eine eigene Fehlerquelle.

**Gemini: Ja**, unter Bestätigung seiner Antwort vom 4.8. Doppelte Einträge verzerrten die Stichprobe; die Fehlerart mache spätere Bereinigungen nachvollziehbar.

→ **Beide Ja, Gemini zum zweiten Mal. Entscheidungsreif. Ondos Entscheidung steht aus.**

### Die offene Frage — was misst die Kalibrierung noch, wenn dieselbe Frage verschiedene Prozentzahlen liefert?

**ChatGPT berichtigt die Prämisse, und die Berichtigung ist richtig.** Die Kalibrierung misst weiterhin, ob Prozentangaben langfristig zur Wirklichkeit passen — sie misst nur nicht mehr ausschließlich das Modell, sondern zusätzlich die Streuung des Verfahrens. Eine große Stichprobe mittelt die Streuung heraus, aber sie verschwindet dadurch nicht, sie wird nur statistisch kleiner. Eine Kennzahl für Antwortstabilität sei fachlich sinnvoll, nach der Zwei-Probleme-Regel aber **noch nicht ausreichend belegt.**

**Gemini kommt zum selben Schluss über einen anderen Weg:** Gemessen werde eine Mischung aus Modellüberzeugung und Zufallsrauschen des Sampling-Verfahrens. Eine zusätzliche Kennzahl bekämpfe das Symptom statt der Ursache. **Zuerst die Temperatur setzen, dann weitersehen.**

→ **Beide Prüfer raten übereinstimmend davon ab, Punkt 23 jetzt zu bauen.** Das ist die erste Einstimmigkeit der beiden Prüfer gegen eine Idee, die von einem von ihnen selbst stammt.

### Wo die Prüfer auseinandergehen — und wo Claude widerspricht

**Gemini will die Temperatur auch bei den Vorhersage-Aufrufen auf 0,0 setzen.** Für den Schiedsrichter ist das unbedenklich; **für die Gehirne ist es ein Eingriff in die laufende Messung.** Alle 270 bisher bewerteten Aussagen sind unter dem Standardwert entstanden. Wird er geändert, sind die neuen Zahlen mit den alten nicht mehr vergleichbar — dasselbe Problem wie beim Auftragstext, nur ohne den Beleg, dass es sich lohnt. **Vorschlag Claude: Schiedsrichter ja, Gehirne vorerst nicht.**

**Gemini sagt außerdem, mit 0,0 erzeugten identische Fragen identische Prozentwerte.** Das ist zu stark formuliert. Eine niedrige Temperatur verringert die Streuung deutlich, beseitigt sie aber nicht zuverlässig. **Als Erwartung führen, nicht als Zusage.**

---

**26. Temperatur des Schiedsrichters auf 0,0 setzen** · *Idee 6.8., Gemini · Beschluss Ondo 7.8.* · **Status: GEBAUT (v19.7.8) · noch nicht bewährt**

Der Temperatur-Fund vom 4.8. steht unverändert: In `apiCall` und `geminiCall` wird kein Temperatur-Wert gesetzt, alle drei Rollen laufen auf dem Standardwert des Anbieters.

→ **Der Kern des Vorschlags, und er ist neu:** Für den Schiedsrichter ist Streuung ausschließlich schädlich, weil er nur ablesen soll. Und **Arbeitsregel J steht nicht entgegen, weil der Schiedsrichter Messwerkzeug ist und nicht Messgegenstand.** Ein Eingriff dort schneidet die Messreihe der Gehirne nicht.
→ Damit ist zum ersten Mal ein Temperatur-Eingriff denkbar, ohne die laufende Messung zu opfern.
→ **Umfang:** ein Wert in einem Aufruf, dort wo `rolle:'ref'` gesetzt ist.
→ **Kosten:** kein Geld, kein zusätzlicher Aufruf, kein Schnitt in der Messreihe.
→ **Erwartung, keine Zusage:** weniger Streuung beim Ablesen. Ob es die drei bekannten Abweichungen (Halbzeitstand, Datum, Heimmannschaft falsch herum) verringert, ist offen und wäre nach Arbeitsregel B über echte Nutzung zu bewerten.
→ *Zwei-Probleme-Regel: Es ist kein neuer Baustein, sondern ein gesetzter Wert in einem bestehenden Aufruf — die Regel greift nicht.*

---

**27. Anpfiffzeiten: Prüffenster erweitern, wenn die Liste unglaubwürdig ist** · *Idee 6.8., Gemini* · **Status: 🔴 ÜBERHOLT — Entscheidung Ondo 9.8.: nicht bauen, Ursache suchen**

**🔴 Entscheidung Ondo, 9.8.:** „Die Lösung für Punkt 27 ist nicht Prüffenster erweitern. Die Ursache für das Problem der falschen Zeiten muss gefunden werden. Erst wenn der Fehler aktiv gesucht und gefunden wird, kann man was machen, sonst nichts."

**Der Vorschlag hätte den 8. August nicht erkannt.** Er wollte auf Häufungen exakt derselben runden Uhrzeit reagieren. Am 8.8. gab es keine solche Häufung — die Zeiten waren 09:00, 12:00, 15:30, 17:00, 19:30, 20:00 — und trotzdem waren **sieben von zehn falsch**, davon zwei zu **spät**. Die Erkennungsregel hätte den Tag durchgewunken.

**Was die Suche ergeben hat, steht in `PROJEKT-STATUS.md`, Abschnitt „Der 9. August", Unterpunkt 11.** Kurz: nicht der Code · seit dem 28.7. mit v19.6 · vom kleinsten Gemini-Modell · in sich widersprüchlich. **Die Ursache bleibt unbekannt** (Art. 11). Der Test dazu ist Punkt 29, gebaut in v19.8.1.

---

*Der ursprüngliche Text des Punktes bleibt zur Nachvollziehbarkeit stehen:*

**⚠ Auslösebedingung erfüllt und übererfüllt.** Die Empfehlung lautete, bis zum dritten Auftreten zu warten. Am 8.8. ist es das **vierte** — und das **zweite in Folge mit gleichmässig einer Stunde** (2. Bundesliga: App 12:00, tatsächlich 13:00, per Websuche belegt über DFB-Datencenter). Damit wiederholt sich zum ersten Mal ein Muster. **Die Ursache bleibt unbekannt.** Ondos Entscheidung steht aus.

Fallen auffällig viele Spiele eines Tages auf exakt dieselbe runde Uhrzeit, ist die Spielliste unglaubwürdig. Für solche Tage sollte die 2,5-Stunden-Regel großzügiger rechnen, damit der Schiedsrichter nicht nach Endständen laufender Spiele sucht.

→ **Es behebt die Ursache nicht** — die kennt weiterhin niemand — sondern entschärft die gefährliche Richtung.
→ Am 6.8. trugen acht von zehn Spielen exakt 18:00 Uhr. Ein Tag ist kein Muster.
→ **Vorschlag Claude: zurückstellen**, bis der Fall ein drittes Mal auftritt. Die Sofortmaßnahme ohne Code — spätabends prüfen — wirkt heute schon und kostet nichts.

---

**29. Eigene Rolle für die Spielliste (`rolle:'liste'`)** · *Fund 7.8., Claude, aus Ondos Frage „wer liefert die Spielliste?" · zugestimmt Ondo 7.8.* · **Status: 🔴 GEBAUT am 9.8.2026, 13:55 Uhr, `beta.html` v19.8.1**

**🔴 GEBAUT (Chat 13).** Die frühere Empfehlung lautete „nicht bauen" — mit zwei Gründen: Punkt 26 sitzt in derselben Funktion und war unbewährt, und gegen eine unbekannte Ursache zu bauen war der Fehler vom 4. August.

**Was den Ausschlag gab:** Der Bau ist **kein Notbehelf, sondern ein Test.** Die Liste lief auf dem kleinsten verfügbaren Modell. Läuft sie auf dem grösseren und werden die Zeiten richtig, war das Modell die Ursache; bleiben sie falsch, liegt sie woanders. **Beides ist ein Ergebnis.** Das unterscheidet ihn vom 4. August, wo ein Notbehelf die Ursache verdeckt hätte.

**Sieben Stellen:** `gWahl` mit dritter Rolle `liste` (Voreinstellung `gemini-flash-latest`) · `stufeHolen` ruft `rolle:'liste'` · `stufe` je Eintrag mitgeschrieben · `modellFeld` und `modellWahl` erweitert · drittes Auswahlfeld in der Modellwahl · zwei neue Sprachschlüssel (201 → **203** in DE/FR/EN).

**Ausdrücklich NICHT geändert:** beide Gehirne · die **Temperatur** der Spielliste (sonst wäre das Ergebnis nicht lesbar) · der Rückfall auf Sonnet ohne Gemini-Schlüssel · `APP_VERSION` bleibt 18.

**Kein Schnitt in der Messreihe.** Begründung wie unten: die Spielliste ist Messwerkzeug, nicht Messgegenstand.

**Ablesbar ab dem nächsten Vorhersagelauf**, frühestens 10. August. Der Lauf des 9.8. war vor dem Bau.

---

*Der ursprüngliche Text des Punktes bleibt zur Nachvollziehbarkeit stehen:*

**Der Befund, im Code nachgesehen.** In `stufeHolen` steht:

```
var call = hatGemini()
  ? geminiCall({ prompt: prompt, useSearch: true, rolle:'gehirn' })
  : sonnetSuche(prompt, 5, 1500);
```

Die Spielliste läuft unter `rolle:'gehirn'`. In `gWahl` gibt es nur zwei Rollen — `var w = (rolle==='ref') ? state.gModellRef : state.gModellGehirn;`. **Die Spielliste teilt sich Modell und Einstellungen mit dem zweiten Gehirn**, also heute `gemini-3.1-flash-lite`, die kleinste Stufe.

**Folge:** Modell und Temperatur der Spielliste sind heute nicht änderbar, ohne das zweite Gehirn mitzuändern — und das wäre nach Arbeitsregel J ein Schnitt in der Messreihe. Frei steuerbar ist allein der Auftragstext in `stufeHolen`; Weg A (v19.7.8) war genau das.

→ **Vorschlag:** eine dritte Rolle `liste` einführen, damit Modell und Temperatur der Spielliste getrennt einstellbar sind.
→ **Die Begründung ist dieselbe wie bei Punkt 26:** Die Spielliste ist **Messwerkzeug, nicht Messgegenstand.** Sie liefert das Material, über das die Gehirne urteilen; sie urteilt nicht selbst. Arbeitsregel J steht einer Änderung dort deshalb nicht entgegen.
→ *Zwei-Probleme-Regel: löst zwei Blockaden auf einmal — Modellwahl und Temperatur. Erfüllt.*
→ **Grenze der Modellwahl, ehrlich (Art. 14):** „Frei wählbar" hieße heute **nur unter den Flash-Modellen**. `modellTaugt(name,false)` lässt ausschliesslich Namen mit „flash" durch, und `gWahl` prüft dieselbe Bedingung noch einmal. Ein stärkeres Modell für die Liste würde **Punkt 0a wieder aufmachen** — gestrichen, aber nicht widerlegt, und seit dem 4.8. läuft das Konto auf Preisstufe 1, unter der `gemini-2.5-pro` verfügbar wäre. Das ist eine eigene Entscheidung und gehört nicht in diesen Punkt.
→ **Was es NICHT tut:** Es repariert von sich aus **gar nichts**. Es nimmt nur die Sperre weg. Ob ein anderes Modell oder Temperatur 0 die drei Fehlerarten der Spielliste (S1 bis S3) verringert, ist ungemessen, und ihre Ursachen sind alle drei unbekannt.
→ **Kosten:** wenige Zeilen Code, kein Geld, kein zusätzlicher Aufruf, kein Schnitt in der Messreihe. Der eigentliche Preis: ein Eingriff in `geminiCall`, die einzige Stelle, an der alle Modellaufrufe zusammenlaufen — und Punkt 26 sitzt dort erst seit dem 7.8. und ist noch nicht bewährt.
→ **Empfehlung Claude: nicht bauen.** Erst Punkt 26 seine Bewährungszeit geben, und erst abwarten, ob die erfundenen Spiele wiederkehren. Gegen eine unbekannte Ursache zu bauen ist der Fehler vom 4. August.

---

**30. Freundschaftsspiele aus der Spielliste ausschliessen?** · *Beobachtung 8.8., Claude* · **Status: Idee — NEU, nicht entschieden**

**Der Befund.** Die Spielliste vom Morgen des 8.8. enthält **sechs Freundschaftsspiele von zehn Spielen** — Köln – Real Sociedad, Augsburg – Sassuolo, Schalke – Atalanta, Leeds – Leipzig, Real Betis – Bournemouth, Stuttgart – Everton. Zwölf der zwanzig Vorhersagen hängen damit an Testspielen.

Weg A (v19.7.8) verbietet nur Formate mit **verkürzter Spielzeit**. Gewöhnliche Freundschaftsspiele über 90 Minuten fallen nicht darunter, und das war bei der Formulierung auch so gemeint.

→ **Drei Bedenken, alle unbelegt und ausdrücklich als Bedenken geführt:** Aufstellungen wechseln zur Pause oft vollständig, was Over/Under und „beide treffen" anders wirken lässt · Ergebnisse von Testspielen sind schlechter dokumentiert, was das Risiko der neunten Fehlerart (erfundene 0:0) erhöht · beide Gehirne benennen die Unsicherheit selbst und liegen fast durchweg dicht an 50 %.
→ **Gegenargument, das ernst zu nehmen ist:** Gemessen wird **Kalibrierung**, nicht Trefferquote. Ein Gehirn, das bei einem Testspiel zurückhaltend antwortet und damit richtig liegt, liefert einen **guten** Messwert. Ein Ausschluss würde genau die Fälle entfernen, in denen Zurückhaltung angemessen ist — und damit möglicherweise das Bild verzerren statt es zu schärfen.
→ **Kosten eines Ausschlusses:** ein Satz im Auftragstext von `stufeHolen`, kein Schnitt in der Messreihe, kein Geld. Der Preis liegt in der Grösse der Stichprobe: An Sommertagen bliebe womöglich zu wenig übrig.
→ **Empfehlung Claude: nicht entscheiden, erst zählen.** Wie viele Spiele der Messreihe bisher Freundschaftsspiele waren, steht nirgends. Diese Zahl lässt sich aus den vorhandenen Daten rückwirkend bestimmen, ohne neue Messung und ohne Eingriff. Erst danach ist die Frage überhaupt beantwortbar.

---

**31. Ist-Soll-Abgleich: der Core-Vertrag ist nicht gebaut** · *Hinweis 8.8., ChatGPT · am Code belegt von Claude 8.8.* · **Status: Idee — NEU, kein Umbau, nur Abgleich**

`Ondo-Core-Architektur.md` beschreibt den Vertrag Modul → Core → Gehirn → Core → Modul mit **genau einer LLM-Tür** (`askBrain(anfrage) → antwort`).

**Nachgesehen in `beta.html` am 8.8.: `askBrain` kommt null Mal vor.** Stattdessen drei getrennte Türen — `apiCall`, `geminiCall`, `sonnetSuche` — an **18 Aufrufstellen**.

→ **Der Core-Vertrag ist ein Zielzustand, kein Ist-Zustand.** In den Dokumenten stand das bisher nicht; die Architektur liest sich, als wäre sie umgesetzt.
→ **ChatGPTs Formulierung:** Bevor weitere Funktionen wachsen, feststellen, welche Teile dem Vertrag entsprechen und welche nur konzeptionell so beschrieben sind. **Nicht umbauen. Nur festhalten.**
→ **Kosten:** keine. Ein Absatz in `Ondo-Core-Architektur.md`, der Ist und Soll trennt.

---

**32. Datenmodell: „gefunden" von „bestätigt" trennen** · *Hinweis 8.8., ChatGPT* · **Status: Idee — NEU**

Die App unterscheidet nicht zwischen einem Ergebnis, das **vorhanden**, einem, das **formal gültig**, und einem, das **als Tatsache bestätigt** ist. Genau daran hängt die neunte Fehlerart: Ein erfundenes 0:0 ist formal gültig und fällt durch keine Prüfung.

→ **Dies ist derselbe Punkt wie Punkt E aus der anderen Richtung.** Geminis Formulierung vom 8.8. („Status: beendet, Ergebnis 0:0" gegen „Status: nicht gefunden") führt genau diese Unterscheidung ein. **Wer Punkt E baut, baut Punkt 32 mit.**
→ **Kein Schnitt in der Messreihe** — betrifft nur den Schiedsrichter.
→ **Kosten:** noch nicht beziffert, weil an Punkt E hängend.

---

**33. Doppelte Codebasis: bei der Beförderung bewusst entscheiden** · *Hinweis 8.8., ChatGPT* · **Status: Idee — NEU, ergänzt die bestehende technische Schuld**

`beta.html` und `OndoControl.html` sind zwei vollständige Kopien; jede Korrektur muss zweimal gemacht werden. Als technische Schuld mit Priorität **hoch** bereits eingetragen.

→ **Neu ist nur die Forderung:** Bei der Beförderung **ausdrücklich entscheiden**, ob die Doppelung aufgelöst wird — oder begründen, warum sie bestehen bleibt. Nicht stillschweigend weiterlaufen lassen.
→ **Aufzunehmen in die Beförderungskriterien.**
→ **Kosten:** keine für die Entscheidung.

*ChatGPTs vierter Hinweis vom 8.8. — nicht auf Vorrat abstrahieren, erst bei einem real beobachteten Problem — **bestätigt** den bestehenden Architektur-Stopp und die Zwei-Probleme-Regel und wird nicht als eigener Punkt geführt.*

---

**34. Brier-Score als zweite Kennzahl neben der Kalibrierung** · *Fund 8.8., frischer Claude-Chat (nicht Chat 12) · nachgerechnet und in einem Punkt berichtigt von Chat 12* · **Status: Idee — NEU**

Die Dokumente enthalten seit Wochen den Satz „Ein perfekt kalibriertes Gehirn, das immer 50 % sagt, gewinnt kein Geld." **Die Grenze war benannt, aber nie gemessen.** Der Brier-Score verrechnet Kalibrierung und Entschlossenheit zu einer Zahl und lässt sich nicht durch Ausweichen auf 50 % schönen. Der Begriff kommt in keinem Projektdokument vor.

→ **Vorabrechnung von Chat 12 aus dem KI-Log, je 180 bewertete Aussagen:** Sonnet **0,2593** (schlechter als Raten), Flash **0,2471** (knapp besser). Vergleichswert **0,2500** = wer immer 50 % sagt.
→ **🔴 Berichtigung des Funds:** Er behauptet, die Berichtigung von Punkt F ändere die Zahl nicht. **Falsch** — Sonnet springt auf **0,2418** und damit von *schlechter als Raten* auf *besser als Raten*. **Der Brier-Score ist damit ein zusätzliches Argument für die Berichtigung.**
→ **Zwei-Probleme-Regel erfüllt:** macht die Gehirne trotz unterschiedlicher Entschlossenheit vergleichbar **und** schliesst die selbst benannte 50-%-Lücke.
→ **Kosten: keine.** Aus vorhandenen Daten rechenbar, keine neue Messung, kein Modellaufruf, kein Schnitt.
→ **Die Zahlen sind eine Vorabrechnung, kein Ergebnis.** Vor der Übernahme in die Dokumente gegen die App rechnen.

---

**35. Streuungsangabe für die Hauptkennzahl** · *Fund 8.8., frischer Claude-Chat · nachgerechnet von Chat 12* · **Status: Idee — NEU**

„Sonnet 5 %, Flash 9 %" galt wochenlang als Vorsprung; jetzt stehen beide bei 8 %. **Eine einzelne Prozentzahl ohne Streuungsangabe ist die Scheinpräzision, die Artikel 14 verbietet — angewandt auf die eigenen Kennzahlen.**

→ **Nachgerechnet von Chat 12** (Bootstrap, 600 Ziehungen über die 180 Aussagen): Sonnet 7,6 % mit einem 90-%-Bereich von **3,9 bis 14,7** · Flash 8,1 % mit **4,9 bis 14,5**.
→ **Folge:** Der Unterschied „5 gegen 9" lag **vollständig im Rauschen**. Die Kennzahl ist bei dieser Datenmenge auf mehrere Prozentpunkte genau, nicht auf einen.
→ **Offene Frage an Ondo:** Blueprint (Artikel 14 auf die eigenen Kennzahlen angewandt) oder Backlog (Aufgabe)?
→ **Kosten:** keine für die Entscheidung; die Anzeige in der App wäre eine kleine Codeänderung ohne Schnitt.

---

## ⚠ Was Fassung 10 ändert (6.8.)

- **Drei Entscheidungen vom Abend des 5.8. nachgetragen** — sie standen bis hierher in keiner Repo-Datei: Arbeitsregel J bestätigt · Auftragstext bei „beide treffen" wird umformuliert · Rückwirkung abgelehnt, stattdessen der Schnitt
- **Neuer Prio-1-Punkt F:** Auftragstext bei „beide treffen" eindeutig formulieren, mit Schnitt statt Rückwirkung
- **Neuer Punkt 25:** Textausgabe zeigt auch die noch nicht übernommenen Endstände
- **Messstand nachgerechnet:** je 135 bewertete Aussagen. **Die Schwelle für den ersten Lernschritt ist überschritten** — siehe Punkt 2
- **Zweiter fehlerfreier Prüflauf in Folge:** 5 von 5, alle per Websuche gegengeprüft
- **Test A steht bei 19 von 19**, und der Preis der Zweideutigkeit ist erstmals in beide Richtungen belegt
- **Drei neue Beobachtungen:** beide Gehirne schwanken bei identischer Frage · Anpfiffzeiten am zweiten Tag falsch, aber mit anderem Muster · Spielliste zweimal ausgefallen und beim dritten Anlauf wieder in Ordnung
- **Das veraltete Zitat des 0a-Codekommentars berichtigt** — es stand hier und in `PROJEKT-STATUS.md` noch in der Fassung vor dem 5.8.

---

## ✅ Nachgetragen: die drei Entscheidungen vom 5. August, abends

**a) Arbeitsregel J — von Ondo bestätigt** (5.8., 20:10 Uhr). Gilt damit nach Art. 9. Der offene Punkt „Arbeitsregel J bestätigen" entfällt. Vermerkt im Blueprint, Abschnitt 2c.

**b) Auftragstext bei „beide treffen" wird umformuliert** — Beschluss Ondos, siehe Punkt F.

**c) Rückwirkung abgelehnt, stattdessen der Schnitt.** Ondo wünschte zunächst eine rückwirkende Anpassung und hat die Entscheidung am 5.8. um 20:15 Uhr ausdrücklich an Claude delegiert. Entschieden wurde gegen das Umschreiben. Einzelheiten und Begründung stehen in `PROJEKT-STATUS.md`, Abschnitt „Der 6. August". **Nicht erneut zur Abstimmung stellen; umkehrbar, solange nichts gebaut ist.**

---

## 🔎 Prüflauf vom 6. August — der zweite fehlerfreie in Folge

**5 von 5 gefunden. Alle fünf von Claude per Websuche gegengeprüft. Alle fünf richtig**, einschließlich Wettbewerb und Datum.

Panathinaikos – CSKA 1948 Sofia 1:1 · SK Brann – Apollon Limassol 0:1 · Ferencváros – Górnik Zabrze 1:0 · Fenerbahçe – Sturm Graz 2:0 · AGF Aarhus – Sabah 2:1. Alle fünf übernommen.

**Eine Abweichung ohne Folgen für den Endstand:** Bei Fenerbahçe – Sturm Graz meldete die App Halbzeit 1:0, wirklich war es 2:0 — das zweite Tor fiel in der Nachspielzeit der ersten Halbzeit. Endstand und alle drei Marktbewertungen sind richtig.
→ **Zweiter Fall dieser Art**, nach AC Oulu – Ilves am 5.8. Der Halbzeitstand geht nur in die Vertauschungs-Kontrolle ein, nicht in die Messung. **Keine Fehlerart, Beobachtungspunkt. Nichts gebaut.**

---

## 🆕 Neue Beobachtung (6.8.): Beide Gehirne schwanken bei identischer Frage

Durch einen doppelten Eintrag wurde Salzburg – Pafos am 6.8. zweimal vorhergesagt, im Abstand einer Stunde, mit demselben Auftragstext:

| | Lauf 2 | Lauf 3 |
|---|---|---|
| Flash | 72 / 58 / 65 | 80 / 65 / 70 |
| Sonnet | 62 / 58 / 65 | 65 / 62 / 65 |

Der Ergebnis-Tipp blieb bei beiden gleich (Flash 3:0, Sonnet 2:0), die Prozentzahlen nicht — Flash bei allen drei Märkten, Sonnet bei zwei von drei.

→ **Erster dokumentierter Fall, in dem beide Gehirne schwanken.** Am 4.8. war es nur Flash.
→ **Es berührt die Hauptkennzahl unmittelbar:** Schwankt ein Gehirn bei gleicher Frage, misst die Kalibrierung teilweise Zufall. Genau darauf zielt Punkt 23, und es hängt am Temperatur-Fund vom 4.8.
→ Die Einträge aus Lauf 3 sind geparkt, die aus Lauf 2 zählen — sie tragen die richtige Anpfiffzeit. **Nichts gebaut.**

---

## 🆕 Neue Beobachtung (6.8.): Anpfiffzeiten am zweiten Tag falsch — anderes Muster

Am 5.8. ein starrer Versatz von neun Stunden bei fünf von fünf Spielen. Am 6.8. ein **unterschiedlich großer** Versatz zwischen null und drei Stunden, und acht von zehn Spielen tragen schlicht 18:00 Uhr.

| Spiel | App | wirklich (OneFootball) |
|---|---|---|
| Salzburg – Pafos | 19:00 | 19:00 ✓ |
| PAOK – Anderlecht | 18:45 | 19:45 |
| Lech Poznań – KÍ Klaksvík | 18:00 | 19:00 |
| Lincoln – Omonia | 18:00 | 19:00 |
| Hradec Králové – Beşiktaş | 18:00 | 19:00 |
| Thun – Víkingur Reykjavík | 18:00 | 20:00 |
| Benfica – Hearts | 18:00 | 21:00 |

→ **Die Zeitzonen-Vermutung vom 5.8. erklärt dieses Muster nicht.** Die Ursache bleibt unbekannt (Art. 11).
→ Gemeinsam ist beiden Tagen nur die Richtung: **die App führt die Spiele zu früh** — die gefährliche Richtung, weil die 2,5-Stunden-Regel dann zu früh „muss vorbei sein" sagt.
→ **Sofortmaßnahme ohne Code bleibt: an solchen Tagen erst spätabends prüfen. Nichts gebaut.**

---

## 🆕 Neue Beobachtung (6.8.): Die Spielliste fiel zweimal aus und erholte sich

Erster Vorhersagelauf: „Konnte keine Spiele laden". Zweiter Lauf: **ein einziges Spiel**, obwohl an diesem Donnerstag die dritte Qualifikationsrunde zweier UEFA-Wettbewerbe lief. Dritter Lauf: **zehn Spiele**.

→ **Die Spielliste ist nicht defekt, sondern unzuverlässig** — genau die Unterscheidung aus Arbeitsregel D. Ein Fehlschlag hätte hier zum Schluss „die zweistufige Liste ist kaputt" verführt.
→ Preis des dritten Laufs: ein Spiel doppelt in den Daten. Vier Einträge wurden geparkt, zwei davon wieder entparkt.
→ **Nichts gebaut, weiter beobachten.**

---

## ⚠ Was Fassung 9 ändert (5.8.)

- **v19.7.6 und v19.7.7 geliefert** — neuer Punkt 24 (Parken von Vorhersagen) gebaut, dazu drei Reparaturen
- **Test A ist ausgewertet und beantwortet** — der Befund vom 30./31. Juli ist damit bestätigt, nicht mehr Vermutung
- **Erster fehlerfreier Prüflauf des Projekts:** 14 von 14 Ergebnisse gefunden, alle 14 von Claude per Websuche nachgeprüft, alle 14 richtig
- **Zwei neue Beobachtungen:** Spiel kürzer als 90 Minuten (Como Cup) · Anpfiffzeiten systematisch neun Stunden zu früh
- **Beide Codefunde aus der Übergabe geklärt** — `state.geminiModel` gegen `gWahl` bestätigt und behoben, das 0a-Datum berichtigt
- **Sprachschlüssel: 199** in DE/FR/EN, maschinell abgeglichen

---

## ✅ Gebaut in v19.7.6 und v19.7.7 (5.8.2026)

*Anlass war Ondos Feststellung, dass die App seit Tagen nicht mehr benutzbar war. Die Ursache war keine Fehlfunktion, sondern eine fehlende Funktion — siehe Punkt 24.*

| Fassung | Was geändert wurde | Belegstelle |
|---|---|---|
| **v19.7.6** | **Punkt 24 gebaut** (Parken) · Datumsgrenzen beim Log-Text werden getauscht, wenn sie verkehrt herum stehen · Modellname je Vorhersage aus dem tatsächlich benutzten Modell · 0a-Kommentar berichtigt | `logParken`, `logParkenTag`, `zuletztModell`, `logTextBauen` |
| **v19.7.7** | Datumsfelder im Log-Text-Block bekommen `min-width:0`, damit das rechte Feld nicht über den Kartenrand ragt (iOS gibt dem Datumsfeld eine eigene Mindestbreite) | `logExportBlock` |

**Syntax-Check bestanden · Sprachschlüssel 199 in DE/FR/EN, maschinell abgeglichen und identisch · Trockentest an nachgebauten Daten bestanden** (Parken senkte die offenen Vorhersagen von 4 auf 1, die bewerteten Aussagen blieben unverändert, alle Einträge und der eine Endstand unberührt, Entparken stellte alles wieder her).

**Kosten: keine.** Kein API-Aufruf, kein Geld, kein Eingriff in Auftragstext oder Kalibrierung. Die Messreihe bricht nicht.

---

**24. Vorhersagen parken statt löschen** · *Idee 5.8., Claude · Beschluss Ondo 5.8.* · **Status: GEBAUT (v19.7.6) · noch nicht bewährt**

**Das Problem, das es löst:** Die gesperrten Ergebnisse vom 29./30. und 31. Juli dürfen nie übernommen werden und blieben deshalb dauerhaft offen. Jeder Prüflauf fragte sie erneut ab. Am 5.8. standen deshalb 58 offene Vorhersagen an, davon 30 aus den gesperrten Tagen. Richtiges Verhalten erzeugte dauerhafte Reibung, und es gab keine Möglichkeit, eine Vorhersage aus dem Prüflauf herauszunehmen, ohne ein Ergebnis einzutragen.

**Was gebaut wurde:** Unter „KI-Log" ein Block mit einer Zeile je Tag, an dem offene Vorhersagen liegen; ein Griff parkt den ganzen Tag. An jeder Karte zusätzlich ein einzelner Knopf. Geparkte Einträge werden in `ergebnissePruefen` übersprungen (`e.status==='offen' && !e.geparkt`), bleiben sichtbar, sind gekennzeichnet und jederzeit umkehrbar.

→ **Es wird kein Endstand gesetzt und kein Markt bewertet.** Die Prüfbibliothek bleibt unversehrt, die Kalibrierung ändert sich um keinen Punkt.
→ **Zwei-Probleme-Regel erfüllt:** beseitigt die Reibung **und** schützt die gesperrten Ergebnisse vor versehentlichem Übernehmen.
→ Am 5.8. geparkt: 29.7., 30.7., 31.7. sowie die beiden Bohemians-Einträge und die beiden Crystal-Palace-Spiele.

---

## ✅ Test A ist beantwortet (5.8.2026) — Punkt A abgeschlossen

**Der Befund vom 30./31. Juli ist bestätigt. Er ist keine Vermutung mehr.**

Am 5.8. lieferten beide Gehirne zehn Vorhersagen. Belege aus der Textausgabe:

| Gehirn | Tipp mit Null | angezeigte Btts-Aussage | Wort des Gehirns |
|---|---|---|---|
| **Sonnet** | Ferencváros 2:0 | Ja 65 % **[gedreht]** | **nein** |
| **Sonnet** | Panathinaikos 2:0 | Ja 65 % **[gedreht]** | **nein** |
| Flash | AGF 2:0 | Nein 60 % | nein |
| Flash | Ferencváros 2:0 | Nein 55 % | nein |
| Flash | Panathinaikos 3:0 | Nein 65 % | nein |

**Sonnet: zwei von zwei umgedreht, beide Male steht das Gegenteil des eigenen Wortes auf dem Bildschirm. Flash: drei von drei stimmig.** Der Rohwert war bei Sonnet jeweils 35 — die Antwort auf die schlichte Frage „wie wahrscheinlich treffen beide?", stimmig mit Tipp und Wort.

**Damit gilt:** Sonnet ist widerspruchsfrei, Flash ist widerspruchsfrei, **die Frage im Auftragstext ist zweideutig.**

→ **Der Vorbehalt vom 3.8. ist ebenfalls erledigt.** Die Sorge war, die zusätzliche Frage könnte Sonnets Antwortverhalten verändern. Das Muster ist unverändert scharf: umgedreht wird ausschließlich bei einer Null im Tipp — jetzt zwei von zwei, vorher sieben von sieben.
→ **Der Preis, benannt:** Bei diesen Spielen wird Sonnets Btts-Aussage gegen eine Behauptung gemessen, die Sonnet nie aufgestellt hat. Betroffen ist einer von drei Märkten.
→ **Nichts geändert.** Eine Umformulierung des Auftragstextes ist ein Eingriff in die laufende Messreihe und braucht Ondos Entscheidung (Art. 8). **Offen.**
→ *Entlastend: Rohwerte, der Vermerk `gedreht` und seit dem 3.8. auch das Wort sind gespeichert. Rückrechnen bleibt möglich.*
→ **Folge für Punkt 0b:** Die Voraussetzung für eine Wiederaufnahme ist erfüllt — Test A ist abgeschlossen. Entscheidung Ondos steht aus.

---

## 🔎 Prüflauf vom 5. August — der erste fehlerfreie des Projekts

**14 von 14 gefunden. Alle 14 von Claude per Websuche nachgeprüft. Alle 14 richtig.** Kein erfundenes 0:0, kein falscher Endstand.

Valur – Stjarnan 2:3 · Bohemians – Galway 1:1 (beide Einträge) · Silkeborg – FC København 1:3 · Waterford – Shelbourne 1:0 · ÍA Akranes – Víkingur 2:2 · AC Oulu – Ilves 1:0 · Brøndby – Viborg 1:0 · Ipswich – Osasuna 1:2 · Hull – Rizespor 2:1 · Everton – Stoke 0:1 · Crystal Palace – Famalicão 0:0 · Crystal Palace – Lens 0:3 · Aston Villa – Real Sociedad 2:4.

**Übernommen: 10 Spiele. Geparkt: 4 Einträge** (beide Bohemians wegen des Doppeleintrags, beide Crystal-Palace-Spiele wegen der 45-Minuten-Frage).

**Nebenbefund:** Der Zweifel an Valur – Stjarnan vom 4.8. ist ausgeräumt. Das Spiel fand am 3.8. statt, 2:3 ist echt. Der Verdacht auf ein erfundenes Ergebnis war unbegründet — ein Beleg für Arbeitsregel D.

**Drei Abweichungen, die den Endstand nicht betreffen:** Bei AC Oulu – Ilves fiel das Tor in der 55. Minute, der Halbzeitstand war also 0:0, gemeldet wurde 1:0 · Ipswich – Osasuna fand am 29.7. statt, gemeldet als 28.7. (die Datumswarnung greift erst ab mehr als einem Tag) · bei Everton – Stoke und Hull – Rizespor stimmen die Zahlen, aber die Heimmannschaft steht in der Spielliste falsch herum — **siebte Fehlerart, für genau diese beiden Spiele bereits dokumentiert.**

---

## 🆕 Neue Beobachtung (5.8.): Das Spiel war kürzer als die Messgrundlage

Crystal Palace gegen Lens und gegen Famalicão am 28.7. waren laut Sky Sports und ESPN ausdrücklich **45-Minuten-Spiele** im Gruppenmodus des Como Cup, Famalicão danach im Elfmeterschießen. Die App misst den **Endstand nach 90 Minuten**, und die Gehirne haben ein 90-Minuten-Ergebnis getippt.

**Warum das zählt:** „Unter 2,5 Tore" über 45 Minuten ist nicht dieselbe Aussage wie über 90. Der Endstand ist richtig abgelesen — die Messgrundlage stimmt trotzdem nicht. **Keine Fehlerart des Schiedsrichters**, sondern eine Lücke in der Spielliste: Sie kennt keine Spiellänge.

→ **Beide Spiele wurden geparkt, nicht übernommen** (Ondo, 5.8.).
→ **✅ ENTSCHIEDEN am 7.8. (Ondo): Weg A** — eine Bedingung für die Spielliste, keine eigene Fehlerart. **Gebaut in v19.7.8.** Ausgeschlossen wird das Format, nicht nach Minuten gefragt. Ob der Satz wirkt, ist offen; die Park-Funktion bleibt das Netz darunter.

---

## 🆕 Neue Beobachtung (5.8.): Anpfiffzeiten systematisch neun Stunden zu früh

Die Spielliste vom 5.8. nennt fünf UEFA-Qualifikationsspiele mit Anpfiff 09:30, 10:00, 11:00, 11:15 und 11:30 Uhr. Der Abgleich mit OneFootball (Bildschirmfotos vom 5.8., 07:41) ergibt:

| Spiel | App | wirklich | Abweichung |
|---|---|---|---|
| AGF Aarhus – Sabah | 09:30 | 18:30 | −9 h |
| SK Brann – Apollon Limassol | 10:00 | 19:00 | −9 h |
| Fenerbahçe – Sturm Graz | 11:00 | 20:00 | −9 h |
| Ferencváros – Górnik Zabrze | 11:15 | 20:15 | −9 h |
| Panathinaikos – CSKA 1948 | 11:30 | 20:30 | −9 h |

**Fünf von fünf, jedes Mal genau neun Stunden. Das ist kein Zufall, sondern ein systematischer Versatz.** Die Ursache ist **nicht bekannt** (Art. 11) — dass es wie eine Zeitzonenumrechnung aussieht, ist eine Vermutung, kein Befund.

**Warum das gefährlich ist:** Die Anpfiffzeit geht in die 2,5-Stunden-Regel des Schiedsrichters ein. Bei Anpfiff 09:30 gilt ein Spiel ab 12:00 Uhr als sicher beendet — gesucht würde dann der Endstand eines Spiels, das noch gar nicht angepfiffen ist. **Genau in dieser Lage sind am 31. Juli die erfundenen 0:0 entstanden.**

→ **Sofortmaßnahme ohne Code (5.8.): an solchen Tagen erst spätabends prüfen.**
→ Die Liste wird von `stufeHolen` erzeugt, also vom zweiten Gehirn (`gemini-3.1-flash-lite`). Ein einzelner Tag beweist nach Arbeitsregel D nichts über die Dauerhaftigkeit — **weiter beobachten, nichts gebaut.**
→ Hängt zusammen mit dem Beobachtungspunkt „Zuordnung über die Listenposition": Beide Wege führen dazu, dass an einem Spiel eine falsche Anpfiffzeit hängt.

---

## ✅ Die beiden Codefunde aus der Übergabe vom 4./5.8. sind geklärt

**Fund 1 — `state.geminiModel` gegen `gWahl`: BESTÄTIGT und behoben in v19.7.6.**
Der Aufruf benutzte das gewählte Modell, die Aufzeichnung nicht. In `geminiCall` wurde der Name nur beim allerersten Erfolg festgeschrieben — `else if(!state.geminiModel){ state.geminiModel = modell; save(); }` — und in `vorhersagen()` genau dieser Wert gespeichert. Zwei Folgen: Ein Gehirnwechsel änderte den gespeicherten Namen nicht, und seit der Rücknahme von 0a konnte ihn sogar der Schiedsrichter setzen, weil beide durch dieselbe Funktion laufen.
→ **Behoben:** Ein Merker `zuletztModell` hält je Rolle fest, welches Modell tatsächlich geantwortet hat. Trockentest: neu `gemini-3.1-flash-lite`, alt wäre `gemini-flash-latest` gewesen.
→ **⚠ Nicht rückwirkend.** Alle Vorhersagen vor v19.7.6 tragen weiterhin den womöglich falschen Namen; rückwirkend ist er nicht mehr feststellbar (Art. 11). Für die Kalibrierung folgenlos, für **Arbeitsregel J nicht.**

**Fund 2 — das Datum der 0a-Rücknahme: berichtigt.**
Der Codekommentar sagte 3.8., alle drei Dokumente sagen übereinstimmend 4.8. (v19.7.3). **Welches Datum stimmt, ließ sich nicht bestimmen** — ein Kommentar ist keine Quelle. Eindeutig ist nur die Versionsnummer. Der Kommentar lautet jetzt `0a zurueckgenommen in v19.7.3, siehe Backlog`; das unbelegte Datum ist entfernt statt geraten.

---

## ⚠ Was Fassung 8 ändert (4.8., abends)

- **v19.7.5 geliefert:** Backlog-Punkt 22 (KI-Log als Textausgabe) **gebaut**, dazu die drei kleinen Mängel behoben
- **Antworten der Prüfer auf den Bericht von 21:50 Uhr** eingetragen
- **Neuer Codefund: Der Temperatur-Wert ist nirgends gesetzt** — siehe eigenen Abschnitt. Der wichtigste Fund des Abends
- **Backlog-Punkt 12 beantwortet, negativ:** Gemini kann Links grundsätzlich nicht abrufen
- **Neuer Punkt 23** (Schattenlauf zur Antwortstabilität), Geminis Vorschlag
- **Sprachschlüssel: 193.** Dabei ist aufgefallen, dass die bisher dokumentierten 184 falsch waren — nachgezählt sind es vor dieser Lieferung **185**

---

## ⚠ Was Fassung 7 ändert (4.8.)

Der 4. August war der ereignisreichste Tag des Projekts. Alles ab dem Vormittag stand bis zu dieser Fassung in **keiner** Repo-Datei, sondern nur in einer Übergabemappe auf Ondos Gerät. Eingetragen sind jetzt:

- **Punkt 0a von „gebaut" auf „gescheitert und zurückgenommen"** — die wichtigste Berichtigung. Drei Anläufe, rund 30 vergebliche Anfragen, Rücknahme in v19.7.3. **Ausdrücklich festgehalten: gestrichen, aber nicht widerlegt** (siehe dort)
- **Vier Codefassungen v19.7.1 bis v19.7.4** vom 3. und 4. August, bisher nirgends verzeichnet
- **Modellwahl-Bedienfeld** (Ondos Vorschlag, gebaut in v19.7.4) — neu eingetragen als gebaut
- **Der Denkfehler „jeder unbekannte Fehler heißt: nimm das nächste Modell"** als eigener Eintrag, weil die Reparatur den Schaden vergrößert hat
- **Antworten beider Prüfer vom 4.8.** bei den betroffenen Punkten eingetragen (0a, Lernschritt, Punkt E, Fehlerart 10)
- **Falsche Zahl im Bericht vom 4.8. berichtigt:** Eine „150er-Schwelle" für den ersten Lernschritt steht in keiner Projektdatei. Belegt ist nur „rund 100 **pro Gehirn**" (PROJEKT-STATUS, Richtungswechsel 23.7.). Nach dem belegten Maßstab ist die Schwelle **nicht** erreicht
- **Punkt 21** (Korrekturfaktor ohne Wartezeit) und **Punkt 22** (KI-Log als Textausgabe) neu angelegt
- **Fehlerart 10** (doppelter Spieleintrag): Gemini empfiehlt ausdrücklich, sie als eigene Fehlerart zu führen. **Entscheidung Ondos steht aus**
- **Neuer Beobachtungspunkt:** Die Gehirne sind bei identischer Aufgabe unterschiedlich stabil — Flash antwortete zweimal verschieden, Sonnet zweimal gleich
- **Drei kleine Mängel** in die technische Schuld: `class="ghost"` statt `btn btn-ghost` · Warntext der Datensicherung erwähnt das Löschen des Browserverlaufs nicht · „zuletzt gesichert" zeigt nach dem Laden den vorherigen Zeitstempel
- **Sprachschlüssel jetzt 184**, nicht 175

---

## ⚠ Was Fassung 6 ändert (3.8.)

Erste Codelieferung seit dem 28. Juli: **v19.7 gebaut und ausgeliefert.** Geändert:

- **A, 0a, 1 und D** von „beschlossen" auf **gebaut** — in einer Lieferung, wie beschlossen
- **Punkt 19 (Sprachkürzung der Beta)** neu angelegt · **Status: Idee.** Ondo hat am 3.8. entschieden: *„solange es geht dreisprachig bauen; wenn es zu viel wird, können wir auf diese Idee zurückgreifen."* Ausdrücklich keine Ablehnung
- **Punkt 20 (Begründungszwang bei Seitenwechsel)** neu angelegt · Status: Idee. Auf Ondos Anweisung vom 3.8. aus dem Beobachtungsteil herausgehoben, damit er entscheidbar wird
- **Zwei neue Beobachtungspunkte:** dasselbe Spiel doppelt in der Spielliste · Zugangsschlüssel im Klartext in der Sicherungsdatei
- **Chat-Aufteilung** als abgelehnter Punkt eingetragen, mit der Rechnung
- **Vier Park-Einträge** auf „eingetragen" gesetzt — sie stehen inzwischen an ihrem Zielort
- **Namenskonflikt „Regel G" erledigt** (Punkt 7): Die Übergabevorschrift heißt jetzt **Übergaberegel**

---

## ⚠ Was Fassung 5 ändert (31.7., abends)

Sieben Funde vom 31.7. standen bisher nur in einer Übergabemappe auf Ondos Gerät und in keiner Repo-Datei. Sie sind hier eingetragen. Neu oder geändert:

- **Punkt D umgeschrieben** — der Vorschlag „Rückblick-Block entfernen" ist zurückgezogen, Ondo hat am 31.7. den anderen Weg beschlossen
- **Neuer Prio-1-Punkt E: „Prüfen statt suchen"** — am 25.7. beschlossen, bis heute nicht gebaut
- **Drei neue Beobachtungspunkte** aus Code-Funden: Zuordnung über die Listenposition · Wettbewerb wird dem Schiedsrichter nicht übergeben · Konsistenz-Absicherung zur Hälfte verschwunden
- **Neunte Fehlerart „erfundene 0:0"** — eingetragen in `PROJEKT-STATUS.md`, hier als Anlass von Punkt E vermerkt
- **Arbeitsregel G (Kostenregel)** — beschlossen, gehört in den Blueprint
- **Übergabe-Protokoll** — beschlossen, gehört in `PROJEKT-STATUS.md`
- Der Vermerk „der Chat vom 31.7. hatte Blueprint und Ondo-Core nicht gelesen" ist **entfallen**. Der Chat vom 31.7. abends hat alle sechs Dateien plus `version.json` vollständig gelesen.

---

## ⚠ Warum Fassung 3 nötig war (29.7.) — gilt weiter

Zwischen dem 23. und 28. Juli wurde mindestens sechsmal gesagt „notiere ich im Backlog" — die Datei wurde nie angefasst. Gerettet hat es allein Ondos PDF-Export.

**Gegenmaßnahme, von Ondo angenommen am 29.7. (Art. 9 erfüllt).** Die Regel steht als **Arbeitsregel F** im `Blueprint.md`, Abschnitt 2c:

> **Keine Lieferung ohne Buchführung.**
> - **Backlog:** jede Entscheidung — angenommen, abgelehnt, vertagt — **sofort**, in derselben Antwort. Nie „notiere ich später".
> - **PROJEKT-STATUS.md:** am Ende eines Arbeitstags mit Änderungen, und zwingend vor jeder Chat-Übergabe.
> - **Blueprint / Ondo-Core:** nur bei Verfassungs- und Architekturentscheidungen.
> - **Kontrollsatz des Besitzers nach jeder Lieferung: „Und die Dokumente?"**

**Nachtrag 31.7.:** Der Fehler ist am 30./31.7. beinahe erneut aufgetreten — acht Entscheidungen liefen auf, bevor eine Lieferung fällig war. Gefangen wurde es dadurch, dass Ondo den Punkt selbst ansprach. Die Regel funktioniert, aber der wirksame Teil bleibt Ondos Kontrollsatz.

**Zweiter Nachtrag 31.7. — die andere Richtung.** Ondo hat am Abend des 31.7. festgestellt: Seit dem 28.7. wurde keine einzige Codezeile geliefert, in denselben drei Tagen aber zwei vollständige Chat-Übergaben, vier Dokumentenfassungen und ein Prüferbericht erzeugt. **Arbeitsregel C („Aktivität ist nicht Fortschritt") gilt auch für Dokumente.** Die Zwei-Probleme-Regel ist bisher nur auf Funktionen angewandt worden, nie auf die Verwaltung. → Daraus Punkt 18.

---

## ✅ Gebaut in v19.0 (23.7.2026)

| Punkt | Idee vom | Von wem | Status |
|---|---|---|---|
| Begründung ins KI-Log speichern | 16.7. | Claude | gebaut · **bewährt** |
| Schiedsrichter: Ergebnis und Tipp nebeneinander prüfbar | 22.7. | Ondo | gebaut · **bewährt** |
| Schiedsrichter-Logik in festen Code | 22.7. | Gemini | gebaut · **bewährt** |
| Duell-Modus: beide Gehirne, gleiche Spielliste | Chat 1 | Claude | gebaut · **bewährt** |
| Herkunft (Sonnet/Flash) an jeder Karte | Chat 1 | Claude | gebaut · **bewährt** |
| Wahrscheinlichkeit statt erfundener Quote | 22.7. | Gemini | gebaut · **bewährt** |
| Ergebnis-Tipp als Zusatzfeature | 23.7. | Ondo | gebaut · **bewährt** |
| Ergebnis zuerst, Code leitet Märkte ab | 23.7. | Gemini | gebaut · **teilweise eingelöst — siehe Punkt A** |
| Kalibrierung als Hauptkennzahl | 23.7. | ChatGPT | gebaut · **bewährt** |
| Trefferquote als Nebenkennzahl behalten | 23.7. | ChatGPT | gebaut · **bewährt** |
| Duell-Reset / Alt-Daten als Archiv v18 | 22.7. | Gemini | gebaut · **bewährt** |

*Korrektur 31.7. bei „Ergebnis zuerst": Abgeleitet wird nur die **Richtung** des Marktes, nicht die Prozentzahl. Damit bleiben zwei Kanäle, die auseinanderlaufen können. Die Zusage vom 23.7. ist an dieser Stelle nicht vollständig eingelöst. `bewährt` zurückgenommen.*

---

## ✅ Gebaut in v19.1 bis v19.6 (23.–28.7.2026)

| Version | Punkt | Idee vom | Von wem | Status |
|---|---|---|---|---|
| v19.1 | **Datensicherung** (Export/Import) | Chat 1, neu bewertet 23.7. | Claude | gebaut · **bewährt** (Sicherung vom 31.7. 07:49 bestätigt, 120 Vorhersagen · 6 Wetten) |
| v19.1 | Ja/Nein-Aussagen unter 50 % automatisch umdrehen | 23.7. | Claude | gebaut · **in Prüfung, siehe Punkt A** |
| v19.2 | Schiedsrichter muss Datum und Wettbewerb mitliefern + Abweichungswarnung | 24.7. | Claude, nach Ondos Fund | gebaut · **nur zur Hälfte wirksam, siehe Beobachtungspunkte** |
| v19.2 | Zeitzonen-Warnung für Südamerika im Auftrag | 24.7. | Claude | gebaut |
| v19.3 | Spielliste-Rangfolge (Stufen, Reserveteams verboten) | 24.7. | **Ondo** | gebaut · **überholt durch v19.6** |
| v19.4 | **Automatisches Wiederholen** beim Ergebnisprüfen | 25.7. | **Ondo** | gebaut |
| v19.4 | Drei Zustände je Spiel + sichtbare Bilanz | 25.7. | **Ondo** | gebaut |
| v19.4 | Uhrzeit an den Listen-Ersteller übergeben | 25.7. | **Ondo** | gebaut |
| v19.4 | Quellenpflicht ab Durchgang drei | 25.7. | Gemini | gebaut |
| v19.5 | Anpfiffzeit speichern und anzeigen | 27.7. | **Ondo** | gebaut |
| v19.5 | 2,5-Stunden-Regel für „läuft noch" | 27.7. | Claude | gebaut |
| v19.6 | **Zweistufige Spielliste** — Reihenfolge erzwungen | 28.7. | ChatGPT und Gemini | gebaut · **Test bestanden 29. und 30.7.** |
| v19.6 | **Phasen-Pflicht** (Halbzeit · nach 90 Min. · ggf. Verlängerung) | 27./28.7. | **Ondo** | gebaut |
| v19.6 | Vertauschungs-Kontrolle im Code | 28.7. | Claude | gebaut |

*Nachtrag 3.8.: Die Lücke ist geschlossen — v19.7 wurde am 3.8. geliefert. Sie hat sechs Tage gedauert, vom 28.7. bis zum 3.8.*

---

## ✅ Gebaut in v19.7 (3.8.2026)

| Punkt | Idee vom | Von wem | Status |
|---|---|---|---|
| **A** — Gehirne geben zusätzlich das Wort ja/nein aus (`bttsWort`), nur speichern und anzeigen | 30./31.7. | Claude, Beschluss Ondo | gebaut · **noch nicht bewährt** |
| **0a** — zweite Modellliste für den Schiedsrichter (stärkere Modelle), Rückfall auf Flash, Anfragen-Zähler | 29.7. | Gemini/ChatGPT, Beschluss Ondo | gebaut · **am 4.8. in v19.7.3 ZURÜCKGENOMMEN** — siehe unten |
| **1** — Kennzahl „Entschlossenheit" (Ø Abstand von 50, Anteil ab 60 %), rein zur Anzeige | 27.7. | Claude, Beschluss Ondo 31.7. | gebaut · **noch nicht bewährt** |
| **D** — Rückblick-Block mit getipptem und echtem Endstand, „Ergebnis noch offen" wo keiner vorliegt | 31.7. | Claude, Beschluss Ondo | gebaut · **noch nicht bewährt** |

**Beim Bauen gefunden (0a): Die App fragt das Google-Konto gar nicht nach stärkeren Modellen.** Der Filter in `gLadeModelle` ließ ausschließlich Modelle mit „flash" im Namen zu. Der Schiedsrichter benutzte dasselbe Modell wie das zweite Gehirn — nicht aus Absicht, sondern weil kein anderes je in die Liste kam. 0a war deshalb kein Schalter, sondern eine zweite Liste.

**Trockentest an Ondos Sicherung vom 3.8.** (138 Vorhersagen): Kalibrierung unverändert Sonnet 5 % / Flash 10 % bei je 87 bewerteten Aussagen — die alte Rechnung ist nachweislich nicht angefasst worden. Entschlossenheit: Sonnet Ø 4,8 und 6 % ab 60 % (5/87) · Flash Ø 8,6 und 38 % (33/87).

**Syntax-Check bestanden. Sprachschlüssel jetzt 175 in DE, FR und EN, identisch** (167 plus acht neue). *(Nachtrag 4.8.: mit v19.7.4 sind es **184**.)*

---

## ✅ Gebaut in v19.7.1 bis v19.7.4 (3. und 4.8.2026)

*Vier Fassungen an anderthalb Tagen, alle ausgelöst durch Punkt 0a. Sie standen bis zur Fassung 7 in keiner Repo-Datei.*

| Fassung | Was geändert wurde | Ergebnis |
|---|---|---|
| **v19.7** (3.8.) | A, 0a, 1, D in einer Lieferung | 0a scheiterte an `deep-research-pro-preview-12-2025` — andere Schnittstelle. **Acht Anfragen. Der Rückfall auf Flash griff nicht**, weil die Fehlererkennung nur bekannte Meldungen kannte. Lauf abgebrochen, 0 von 30 geprüft |
| **v19.7.1** | Filter enger (`deep-research` ausgeschlossen); beim starken Modell zählt jeder Fehler als Modellproblem | Rückfall griff. Filter nicht: **eine einmal gespeicherte Modellliste wurde nie erneut geprüft**, der Filter lief nur im Ladevorgang. Wieder acht Anfragen |
| **v19.7.2** | Filter wirkt auch auf gespeicherte Listen; Listen älterer Fassungen werden verworfen | Wählte `lyria-3-pro-preview` — ein **Musikmodell**, hereingekommen über das Wort „pro" (sieben Anfragen). Danach ein Kontingentfehler → die Regel „jeder Fehler heißt nächstes Modell" jagte die App durch **alle 14 Flash-Modelle** |
| **v19.7.3** | **0a zurückgenommen**, Schiedsrichter wieder Flash · Kontingentfehler halten den Lauf sofort an · höchstens vier Modelle je Lauf · Filter nur `gemini-*` | Kein Kontingentfehler mehr, aber vier **veraltete** Modelle probiert (`gemini-2.0-flash-lite-001` ist abgeschaltet) |
| **v19.7.4** | **Modellwahl-Bedienfeld** unter „Mehr", getrennt für Gehirn und Schiedsrichter · Sortierung neu-vor-alt statt „stabil"-vor-„latest" · Modellname wird je Vorhersage mitgespeichert | **Läuft. 12 von 30 gefunden** — erster erfolgreicher Prüflauf seit dem 31. Juli |

**Modellwahl (v19.7.4)** · *Idee 4.8., **Ondo*** · **Status: gebaut · noch nicht bewährt**
Gehirn und Schiedsrichter sind getrennt einstellbar, statt still das erste funktionierende Modell zu nehmen und es nirgends anzuzeigen. Neue Modelle erscheinen von selbst in der Auswahl; kein fester Name im Code (Lehre 10.7. bleibt gewahrt).
→ Ondos Vorschlag war besser als der zuvor geplante Weg einer festen Namensliste im Code.
→ Einstellung am 4.8.: Gehirn `gemini-3.1-flash-lite`, Schiedsrichter `gemini-flash-latest`, 14 Modelle verfügbar.

**Sortierung berichtigt (v19.7.4).** Bis dahin standen „stabile" Namen vor „latest". Stabil hieß in Wirklichkeit **alt** — so landete die App auf abgeschalteten Modellen und im Juli dauerhaft auf einer Lite-Stufe. Jetzt: neuere Versionsnummer zuerst, `latest` ganz vorn.

**Version im Kopf: v19.7.4. `APP_VERSION` weiterhin 18.**

**v19.7.5 (4.8., abends)** — Backlog-Punkt 22 gebaut, dazu drei kleine Mängel behoben: `class="ghost"` → `class="btn btn-ghost"` · der Warntext der Datensicherung nennt jetzt auch das Löschen des Browserverlaufs · der Zeitstempel „zuletzt gesichert" wird **vor** dem Ausschreiben gesetzt, damit die Sicherungsdatei ihren eigenen Stand trägt statt den der vorigen.

**Sprachschlüssel: 193 in DE/FR/EN, identisch. Syntax-Check bestanden. Trockentest bestanden.**
*⚠ Zahlenberichtigung: Die zuvor dokumentierten 184 Schlüssel waren falsch. Nachgezählt waren es vor dieser Lieferung **185**, danach 193. Wer die 184 in älteren Fassungen liest, soll wissen, dass sie nie geprüft war.*

---

## 🌡 Der Temperatur-Fund (4.8., abends) — auf Geminis Rückfrage hin

Gemini hat gefragt, wie hoch der Temperatur-Wert in den API-Aufrufen eingestellt ist, weil dieser Wert massgeblich über Nichtdeterminismus entscheidet.

**Antwort, im Code nachgesehen: Er ist nirgends gesetzt.** In `apiCall` lautet der Rumpf `{model, max_tokens, messages}`, bei Bedarf plus `tools`. In `geminiCall` steht `var body = { contents:[{ parts: parts }] }`, plus `tools` bei Websuche. Kein `temperature`, kein `generationConfig`.

**Folge:** Beide Gehirne **und** der Schiedsrichter laufen auf dem Standardwert des Anbieters. Bei Anthropic ist das 1.0 — der Wert mit der grössten Streuung. Für Gemini ist der Standardwert hier nicht sicher bekannt (Art. 11).

**Warum das zählt:** Über Nichtdeterminismus wird seit dem 22. Juli geredet — Fehlerart 1 beim Schiedsrichter, seit dem 4.8. auch bei Flash. **Der Regler dafür ist nie angefasst worden.**

→ **Für den Schiedsrichter** wäre eine niedrige Temperatur naheliegend und billig: Er soll ablesen, nicht erfinden. Er ist Messwerkzeug, nicht Messgegenstand — eine Änderung dort bricht die Messreihe **nicht**.
→ **Für die Gehirne** ist es heikel: Eine Änderung greift mitten in die laufende Messreihe ein und wäre nach Arbeitsregel J ein Schnitt.
→ **Nichts gebaut. Entscheidung Ondos steht aus.**

---

## 🧠 Der Denkfehler vom 4. August — gehört protokolliert

Nach dem ersten Fehlschlag wurde formuliert: *„Eine Absicherung, die nur gegen vorhergesehene Störungen hilft, ist keine Absicherung."* Daraus wurde die Regel gebaut: **jeder unbekannte Fehler heißt „nimm das nächste Modell".**

Das war falsch, weil es Grundverschiedenes gleich behandelt:

| Fehlerart | Richtige Reaktion |
|---|---|
| Modell taugt hier nicht (falsche Schnittstelle, abgeschaltet) | nächstes Modell |
| **Kontingent erschöpft / Ratenbegrenzung** | **anhalten** — jedes weitere Modell verschlimmert es |
| Modell vorübergehend überlastet | warten oder ein Modell weiter |

Der Fehler war nicht, unbekannte Fehler zu behandeln. Der Fehler war, sie **pauschal** zu behandeln. Die Reparatur hat den Schaden vergrößert: rund 30 vergebliche Anfragen über drei Anläufe.

**Es ist derselbe Denkfehler, den wir dem Schiedsrichter vorwerfen:** eine unklare Lage in falsche Sicherheit übersetzen, statt sie als unklar zu melden.

**ChatGPTs Antwort dazu (4.8.): „Fail Safe".** Bei unbekannten Fehlern niemals automatisch wechseln, sondern anhalten und als Unklarheit melden. → Ob das als Arbeitsregel gilt, entscheidet Ondo; bis dahin ist es eine Prüferantwort, kein Beschluss (Art. 8, Art. 9).

**Unbequem und offen:** Der jetzige Filter (`beginnt mit gemini-`, keine Sonderformen, enthält „pro") ist wieder nur eine Liste vorhergesehener Ausschlüsse — **derselbe Bautyp, der dreimal gescheitert ist.** Das nächste unbekannte Modell mit „pro" im Namen bricht ihn erneut.

---

## 🔴 Prio 1 — als Nächstes dran

**42. Vor dem Entparken den Grund prüfen, nicht die Anzahl** · *Fund Ondo 13.8.2026, abends* · **Status: als stehende Regel beschlossen Ondo 13.8.**

**Anlass.** Claude empfahl, fünf Tage zu entparken, um elf Sonnet-Aussagen in die Messung zurückzuholen — und stützte die Empfehlung allein darauf, **wie viele** Einträge je Tag geparkt sind. **Ondo wies darauf hin, dass darunter Testspiele sind, die nicht über zweimal 45 Minuten gingen.** Genau die Fälle aus Punkt 36, die Claude am selben Tag bei Union – Aris selbst beschrieben hatte.

**Die Regel.** Ein geparkter Eintrag ist keine offene Aufgabe, sondern meistens eine getroffene Entscheidung. Vor einem Entparken wird je Eintrag geprüft, warum er geparkt wurde — Wettbewerb und Spielformat stehen in jeder Log-Zeile und sind maschinell auswertbar.

**Die Gegenseite, die dabei nicht untergehen darf.** Geparkte Einträge sind **nicht zufällig**: Es sind überwiegend Sonnets entschlossenste Aussagen. Die Verzerrung ist real und gehört in jede Aussage über die Messreihe — sie rechtfertigt nur kein pauschales Entparken.

**Nebenbefund vom selben Tag.** Am 6. August steht Salzburg – Pafos zweimal im Log: 19:00 Uhr [UEFA Europa League] bewertet, 18:00 Uhr [Qualifikation] geparkt. Ein Entparken dieses Tages nähme dasselbe Spiel doppelt in die Messung.

→ **Kosten:** keine. Die Regel verhindert Arbeit, sie verursacht keine.
→ **Ondos Entscheidung 13.8.:** Die geparkten Einträge bleiben, wie sie sind.

---

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

**A. Test A: Eindeutigkeit der Frage „beide treffen"** · *Fund 30./31.7., Claude · Beschluss Ondo 31.7.* · **Status: GEBAUT (v19.7, 3.8.) — AUSGEWERTET am 5.8., Befund bestätigt.** Einzelheiten im Abschnitt „Test A ist beantwortet". Offen bleibt allein, ob und wie der Auftragstext umformuliert wird — Entscheidung Ondos

Der Auftragstext fragt: „wie sicher in Prozent, dass *beide Teams treffen* **so ausgeht wie in deinem Ergebnis**?" Das ist eine Frage über die eigene Vorhersage. **Flash beantwortet sie so. Sonnet beantwortet die schlichte Frage „wie wahrscheinlich treffen beide?".** Weil die App beide Zahlen gleich liest, dreht sie Sonnets Angabe ins Gegenteil.

Beleg: Bei Sonnet wird ausschließlich dann umgedreht, wenn das getippte Ergebnis eine Null enthält — sieben von sieben. Bei Flash kein einziges Mal bei fünf solchen Ergebnissen. Vollständige Tabelle in `PROJEKT-STATUS.md`.

**Was gebaut wird:** Die Gehirne geben zusätzlich das Wort **ja** oder **nein** aus — ihre eigene Antwort auf „treffen beide?". Nur speichern und anzeigen, kein Eingriff ins Rechnen. Ein Tag Vorhersagen reicht für die Antwort.

**Warum erst messen statt gleich ändern (Ondos Entscheidung):** Das Projekt ist mehrfach von plausiblen Herleitungen in die Irre geführt worden. Weg A (erst prüfen) wurde gegenüber Weg B (sofort ändern) gewählt.

→ **Vorbehalt bei der Auswertung (Ondo/Claude, 3.8.):** Es ist möglich, dass die zusätzliche Frage das Gehirn zum Nachdenken bringt und es daraufhin auch seine Prozentzahl anders wählt. Dann misst der Test nicht mehr das alte Verhalten. Ein Warnzeichen wäre, wenn Sonnets bisher scharfes Muster bricht (umgedreht ausschließlich bei einer Null im Tipp, sieben von sieben). **Ehrlich: Die beiden Fälle lassen sich nicht sicher trennen.** Das Ergebnis ist deshalb nicht ungeprüft für bare Münze zu nehmen.
→ *Entlastender Befund: Die bisherigen Daten sind nicht verloren. `gedreht:true` und der Endstand werden mitgespeichert; Rohwerte und Bewertungen lassen sich nachträglich neu rechnen, sobald die Deutung feststeht. Nicht umkehrbar ist nur ein falsch übernommener Endstand.*

---

**0a. Schiedsrichter fest an das stärkere Gemini-Modell koppeln** · *Idee 29.7., Gemini (ChatGPT gleichlautend)* · **Status: GESCHEITERT UND ZURÜCKGENOMMEN (v19.7.3, 4.8.)**

Der Schiedsrichter ist ein Messwerkzeug, kein Duell-Teilnehmer. Er darf ein anderes Modell benutzen als die Vorhersage, ohne dass die Messreihe leidet. **Dass ein stärkeres Modell erfundene Ergebnisse seltener macht, war immer nur plausibel, nie belegt.**

**Belegstelle für die Rücknahme** — in `beta.html`, Funktion `ergebnissePruefen`, fehlt `stark:true`:

```
? geminiCall({ prompt: prompt, useSearch: true, rolle:'ref' })
  /* 0a zurueckgenommen in v19.7.3, siehe Backlog */
```

**Folgen im Betrieb:** Der Zähler `pruefStark.anfragen` bleibt bei null, Modellname und Anzahl der Anfragen erscheinen deshalb **nie** unter der Bilanz. Und die Auswahlliste für den Schiedsrichter zeigt nur Flash-Modelle, weil `gWahl` und `modellFeld` mit `modellTaugt(name,false)` filtern.

**Drei Anläufe, alle gescheitert** (Einzelheiten im Abschnitt „Gebaut in v19.7.1 bis v19.7.4"): falsche Schnittstelle bei `deep-research-pro-preview-12-2025` · Filter wirkte nicht auf gespeicherte Listen · ein **Musikmodell** (`lyria-3-pro-preview`) über das Wort „pro" hereingekommen · danach ein Kontingentfehler, der durch alle 14 Flash-Modelle jagte. Zusammen rund 30 vergebliche Anfragen.

**⚠ GESTRICHEN, ABER NICHT WIDERLEGT.** Das ist der wichtigste Satz dieses Eintrags. Beide Prüfer haben am 4.8. „ja, streichen" geantwortet — **ohne von der kostenlosen Preisstufe zu wissen**. Kein einziger Anlauf hat je ein starkes Modell tatsächlich antworten lassen; in Preisstufe 1 wäre `gemini-2.5-pro` verfügbar gewesen (150 Anfragen je Minute, mit Suchfundierung). **0a ist unter gestörten Bedingungen gescheitert, nicht an der Sache.** Wer diesen Eintrag später liest, darf daraus keine Gewissheit machen, die wir nicht haben (Art. 14).

**Antworten der Prüfer (4.8.):** Beide für Streichen — Begründung: Fehleranfälligkeit der Namensfilterung, Kaskadengefahr, unbewiesener Nutzen. Beide halten zugleich **Punkt E („Prüfen statt suchen") für den stärkeren Weg**: die Aufgabe schärfen ist mächtiger, als ein größeres Modell auf einen unscharfen Auftrag zu werfen.

→ **Geminis Auskunft zur Modellwahl (4.8.):** In der Antwort von `ListModels` gibt es **kein** Feld, an dem sich Werkzeug-Unterstützung, Kostenfreiheit oder Textmodell-Zugehörigkeit ablesen lässt — nur `supportedGenerationMethods`. Empfehlung: feste Positivliste. Damit ist die Ursache aller drei Fehlschläge benannt und nicht behebbar: Am Namen zu raten bleibt der einzige Weg.

---

**1. Kennzahl „Entschlossenheit"** · *Idee 27.7., Claude* · **Status: GEBAUT (v19.7, 3.8.)**

Wie oft legt sich ein Gehirn überhaupt fest? Ohne diese Zahl vergleichen wir Sonnets Vorsicht mit Flashs Mut und nennen es Qualität. Anlass: Von Sonnets 87 Aussagen liegen 66 im Bereich 50–59 %, und nur fünf oberhalb von 60 %.

→ *Muss **vor** dem ersten Lernschritt stehen, sonst misst der Lernschritt das Falsche.*
→ **Verfahrensvermerk (31.7.):** Ein früherer Chat hatte den Status eigenmächtig auf „beschlossen" gesetzt, ohne dass Ondo zugestimmt hatte — ein Verstoß gegen Art. 8. Der Status wurde am 31.7. auf „Idee" zurückgesetzt und erst nach Ondos ausdrücklicher Zustimmung wieder auf „beschlossen" gesetzt.

---

**D. Rückblick-Block auf eigene alte Tipps** · *Fund 31.7., Claude* · **Status: GEBAUT (v19.7, 3.8.)**

**Der Vorschlag „Block entfernen" ist zurückgezogen.** Grund: Der Block ist keine Schwachstelle, sondern eine Reparatur. Er ist das **Konsistenz-Gedächtnis vom 7.7.2026**, gebaut, nachdem **Ondo** willkürliche Empfehlungen nachgewiesen hatte — Seitenwechsel bei Schweiz–Kolumbien ohne ein Wort dazu, und Argentinien zu Quote 1.15, das tags zuvor selbst verworfen worden war. Quelle: `Blueprint.md`, Protokolleintrag 7.7.2026.

**Das Problem, das bleibt:** Der Block gibt jedem Gehirn seine letzten sechs eigenen Vorhersagen mit — darunter den **getippten**, nicht den echten Endstand. Sonnet hat das am 30.7. als geschehenes Ereignis behandelt („Víkingur nach Niederlage gestern geschwächt"). Ein falscher Tipp wird zur Grundlage des nächsten.

**Ursache, im Code nachgesehen:** Jeder Log-Eintrag hat vier Felder — `heim`/`gast` (der Tipp) und `ergebnisHeim`/`ergebnisGast` (der echte Endstand). Die Zeile, die den Block baut, benutzt nur die ersten beiden. Der echte Endstand liegt daneben und wird nicht abgefragt. Kein Beschluss, kein Versehen mit Absicht — beim Umbau am 23.7. ist es niemandem aufgefallen.

**Beschlossen (Ondo, 31.7.): Block behalten, echte Endstände einsetzen, wo sie vorliegen, und die Zeilenform ändern**, sodass der Unterschied in jeder Zeile steht statt nur in der Überschrift:

```
30.7.: Hapoel – Víkingur · getippt 2:0 · wirklich 2:0
31.7.: Breidablik – Drita · getippt 1:1 · Ergebnis noch offen
```

→ **Ehrliche Einschränkung (Art. 14):** Der echte Endstand steht erst drin, wenn übernommen wurde. Übernehmen ist zurzeit gesperrt, und die sechs jüngsten Vorhersagen sind naturgemäß die, bei denen am seltensten schon ein Ergebnis vorliegt. In den ersten Tagen wird bei vielen Zeilen „Ergebnis noch offen" stehen. Der Kreislauf hört trotzdem sofort auf: Eine Vermutung wird nicht mehr als Tatsache ausgegeben.
→ **Zweite Einschränkung:** Ob die Liste ohne den früher vorhandenen Begründungszwang überhaupt noch gegen Seitenwechsel wirkt, ist nicht gemessen. Siehe Beobachtungspunkt „Konsistenz-Absicherung halbiert".
→ *Gebaut am 3.8. zusammen mit A, 0a und 1 — eine Änderung am Auftragstext statt zweier, also ein Bruch in der Messreihe statt zweier.*
→ **Ehrlich zum Nutzen in den ersten Tagen (3.8.):** Übernehmen ist gesperrt, also steht bei nahezu jeder Zeile „Ergebnis noch offen". Der Kreislauf hört trotzdem sofort auf — eine Vermutung wird nicht mehr als Tatsache ausgegeben.
→ **Nicht mitgebaut:** der frühere Begründungszwang bei Seitenwechsel. Er wäre eine fünfte Änderung gewesen und verändert das Antwortverhalten stärker als alle vier v19.7-Punkte zusammen. → Punkt 20.

---

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

**38. Sonnet als wählbares Modell für Schiedsrichter und Spielliste** · *Entwurf Ondo 9.8.* · **Status: zurückgestellt von Ondo — nicht verworfen**

**Der Entwurf, in Ondos Worten.** Sonnet muss **nicht** in die vom Gemini-Konto geladene Auswahlliste hinein. Er bekommt ein **eigenes Feld**, und neben jedem Feld steht ein **Kontrollkästchen**, das das gewünschte Modell auf „aktiv" setzt:

```
Schiedsrichter
  Gemini-Flash-latest   [x] Aktiv
  Sonnet                [ ]

Spielliste
  Gemini-Flash-latest   [x] Aktiv
  Sonnet                [ ]
```

**Zusätzliche Regel von Ondo:** Gibt es **keinen Gemini-Schlüssel**, wird Sonnet automatisch aktiv. Das heutige Verhalten bleibt damit erhalten.

**Der Entwurf ist besser als Claudes erster Vorschlag.** Claude wollte Sonnet in die geladene Liste mischen und hätte dafür den Filter `modellTaugt(name,false)` aufbohren müssen, der nur Namen mit „flash" durchlässt. Ondos Lösung lässt Filter und Liste unberührt.

**Der Weg ist bereits gebaut, nur nicht wählbar.** In `stufeHolen` und beim Schiedsrichter steht heute schon `hatGemini() ? geminiCall(...) : sonnetSuche(prompt, 5, 1500)`. Es wird also kein neuer Aufrufweg gebaut, sondern ein vorhandener wählbar gemacht.

→ **Zurückgestellt, weil er heute kein Problem löst.** Ondo: „Jetzt für diese Phase reicht Flash vollkommen aus." Die Zwei-Probleme-Regel greift.
→ **Der Preis:** Sonnet mit Websuche ist deutlich teurer als Flash, beim Schiedsrichter mit mehreren Suchen je Prüfrunde spürbar. Eine bewusste Kostenentscheidung.
→ **Ein Bedenken, das nirgends dokumentiert war:** Sonnet ist eines der beiden **gemessenen** Gehirne. Als Schiedsrichter holt ein Gemessener die Ergebnisse für seine eigenen Vorhersagen. Die Bewertung rechnet fester Code, das Risiko ist begrenzt — aber nicht null.
→ **Der Eingriff sässe in `gWahl`**, der einen Stelle, an der alle Modellaufrufe zusammenlaufen. Punkt 26 sitzt dort seit dem 7.8. und ist noch nicht bewährt (Stabilitätsregel).
→ **Zweck aus Ondos Sicht:** „für die Zukunft die Möglichkeit haben zu wählen, falls es nötig wird" — je nach Aufgabe das passendere Modell.

---

### Ebenfalls Prio 1, noch nicht für v19.7 eingeplant

**F. Auftragstext bei „beide treffen" eindeutig formulieren** · *Fund 30./31.7., Beleg durch Test A · Beschluss Ondo 5.8.* · **Status: 🔴 GEBAUT am 9.8.2026, `beta.html` v19.8.0**

Der Auftragstext fragt heute: „wie sicher in Prozent, dass *beide Teams treffen* **so ausgeht wie in deinem Ergebnis**?" Test A hat bewiesen, dass Flash diese Frage beantwortet und Sonnet die schlichte Frage „wie wahrscheinlich treffen beide?". Die App liest beide Zahlen gleich und dreht Sonnets Angabe dadurch ins Gegenteil.

**Der Beleg steht bei 19 von 19** (sieben Fälle am 30.7., zwei am 5.8., neun am 6.8. — jedes Mal umgedreht, jedes Mal lautete das Wort „nein"; bei Tipps ohne Null nie umgedreht).

**Der Preis ist seit dem 5.8. in beide Richtungen belegt:** Bei Ferencváros – Górnik (1:0) hatte Sonnet mit „nein" recht und wurde als **falsch** gewertet. Bei Panathinaikos – CSKA (1:1) hatte Sonnet mit „nein" unrecht und wurde als **richtig** gewertet.

**Vor dem Bauen Ondo vorzulegen:** unter welcher Bedingung die App heute genau umdreht, und ob die Umdrehung bei eindeutiger Frage ersatzlos entfällt. *Im Code nachgesehen (Funktion `maerkteBauen`): Umgedreht wird, sobald die Prozentzahl unter 50 liegt; angezeigt werden dann die Gegenaussage und 100 minus der Wert.*

→ **Rückwirkung: der Schnitt.** Altdaten werden nicht verändert. Alles vor dem Umbau gilt als „alte Frage", alles danach als „neue Frage". Der Schnitt wird an der Versionsnummer festgemacht. **Vor dem Umbau eine frische Sicherung.**
→ **Zu prüfen:** ob die App die Version je Vorhersage speichert. Wenn nicht, ob sich das mit wenigen Zeilen ergänzen lässt; sonst genügt der Vermerk im Dokument.
→ **Kosten:** kein Geld, kein zusätzlicher Aufruf — aber ein **Schnitt in der laufenden Messreihe**. Das ist der eigentliche Preis.
→ Folge für Punkt 0b: Eine Widerspruchsquote wird nach dem Umbau erst sinnvoll messbar.


**✅ ERLEDIGT am 13.8.2026, abends (Chat 14): beschlossen von Ondo, gebaut als Knopf in `beta.html`, ausgeführt.** 28 Aussagen geändert (16 bewertete, 11 geparkte, 1 vom Typ B). Umkehrbar über `fAlt`, einmalig über `state.korrekturF`. Die zwei Zweifelsfälle vom 26.7. blieben auf Ondos Entscheidung unangetastet. *Der folgende Absatz beschreibt den Stand davor und bleibt zur Nachvollziehbarkeit stehen:*

**⚠ Stand am Ende von Chat 12 (8.8.): beschlossen, gemessen, NICHT gebaut.** Chat 12 hat den Umfang vollständig vermessen (15 betroffene Aussagen, netto +9 für Sonnet, Befund A widerlegt — Einzelheiten in `PROJEKT-STATUS.md`, Abschnitt „Der 8. August", Unterpunkte 7 und 19) und **auf Ondos Anweisung nicht gebaut**. Ondo: „Bauen macht der nächste Chat."

**Der von Chat 12 vorgeschlagene Bau — zwei Stellen in `beta.html`, zur Vorlage nach Artikel 8, nicht ausgeführt:**
- **Zeile 1033, Auftragstext:** heute „wie sicher in Prozent, dass ‚beide Teams treffen' **so ausgeht wie in deinem Ergebnis**" → neu: wie wahrscheinlich, dass **beide Mannschaften mindestens ein Tor erzielen**, ausdrücklich unabhängig vom eigenen Tipp.
- **Zeilen 614–618, `maerkteBauen`:** `var btts = (heim>0 && gast>0)` entfällt. Die Behauptung ist dann immer `btts_ja` mit der genannten Prozentzahl; die Umdrehung greift nur noch bei unter 50 — genau wie beim Tore-Markt, wo es seit Wochen fehlerfrei läuft.
- **Damit verschwindet die Ursache, nicht nur die Wirkung.** Das mitgeschriebene `bttsWort` bleibt als Gegenprobe und müsste danach immer übereinstimmen.
- **Keine neuen Sprachschlüssel** — der Auftragstext ist nicht übersetzt. **Kein Geld, kein zusätzlicher Aufruf.** Der Preis ist der Schnitt.
- **Günstiger Zeitpunkt:** Die 20 Vorhersagen vom 8.8. früh sind unter dem alten Text entstanden. Ein Bau davor oder danach legt den Schnitt auf eine Tagesgrenze.

**🔴 GEBAUT am 9.8.2026, 04:15 Uhr — `beta.html` v19.8.0 (Chat 13).** Der Bauvorschlag oben ist unverändert ausgeführt worden, ergänzt um zwei Punkte, die Chat 12 nicht vorgesehen hatte.

**Sechs Stellen geändert:**
1. **`maerkteBauen`:** `var btts = (heim>0 && gast>0)` entfernt. Die Behauptung ist jetzt immer `btts_ja`; die Umdrehung greift nur noch unter 50 Prozent.
2. **Auftragstext:** `pBtts` fragt jetzt nach der Wahrscheinlichkeit, dass **beide Mannschaften mindestens ein Tor erzielen**, ausdrücklich unabhängig vom eigenen Ergebnis. Damit fragen `pBtts` und `bttsWort` dasselbe — das Wort wird zur echten Gegenprobe.
3. **Neues Feld `codeVersion` je Log-Eintrag** (Antwort auf die offene Prüffrage oben: die App speicherte die Version bisher **nicht**).
4. **`CODE_VERSION` als einzige Stelle für die Versionsnummer**, von dort in Kopfzeile, Vision-Text und Log-Eintrag eingesetzt. Vorher standen zwei feste Nummern im Text.
5. Kopfzeile auf `v19.8.0`.
6. Vision-Text zieht die Nummer aus `CODE_VERSION` statt aus festem Text.

**`APP_VERSION` bleibt bei 18** — der gewollte Rückstand ist unangetastet.

**Geprüft vor der Lieferung:** `node --check` sauber · Sprachschlüssel 201 in DE/FR/EN, keiner neu, keiner fehlt · Trockentest mit sechs konstruierten Fällen (Tipp 2:0 bei 65 % ergibt jetzt „ja 65" statt „nein 65"; Tipps ohne Null verhalten sich unverändert).

**Der Altbestand ist nicht angefasst.** Die Berichtigung ist eine getrennte Sache und nicht entschieden.

**Claudes Grund gegen eine rückwirkende Berichtigung der Altdaten trägt nicht mehr** — vollständige Begründung in `PROJEKT-STATUS.md`, Abschnitt „Der 8. August", Unterpunkt 19. Kurzfassung: Von vier Gründen sind drei entkräftet; übrig bleibt, dass die Berichtigung auf einer sehr gut belegten **Schlussfolgerung** über Sonnets Frageverständnis beruht und ein Irrtum darin danach unsichtbar wäre. Das betrifft praktisch **zwei Einträge**. **Empfehlung: berichtigen; die zwei Altfälle Ondo einzeln vorlegen.** Entscheidung Ondos steht aus.

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
→ **⚠ Neu am 6.8.: Die Schwelle ist überschritten.** Nachgerechnet aus dem KI-Log-Text und gegen die App geprüft: **je 135 bewertete Aussagen**. Der belegte Maßstab „rund 100 je Gehirn" ist damit erreicht, und der **erste** Grund zum Verschieben ist weggefallen.
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

**6. Drei-Ebenen-Trennung in die Architektur schreiben** · *Idee 23.7., ChatGPT* · **Status: ✅ GEBAUT am 13.8.2026, 16:32 Uhr (Chat 14)**
Ebene 1 Daten · Ebene 2 Denken · Ebene 3 Bewertung. **Eingetragen in `Ondo-Core-Architektur.md`, Fassung 0.4, als eigener Abschnitt.** Lag seit dem 23.7. beschlossen und ungebaut — 21 Tage. Abgearbeitet nach Arbeitsregel L, bevor der neue Punkt 41 aufgenommen wurde.

**7. Übergaberegel in einer Fassung für ChatGPT** · *Fund 30.7.* · **Status: ✅ GEBAUT am 13.8.2026, 16:32 Uhr (Chat 14)** — eingetragen in `Blueprint.md` 0.16
ChatGPT kann keinen neuen Chat öffnen; er erzeugt die Übergabemappe nur als Nachricht. Die Übergaberegel braucht dafür eine angepasste Fassung. **Inhalt gehört in den Blueprint.**
*Namenskonflikt erledigt (Ondo, 31.7., eingetragen 3.8.): Die Vorschrift zur Chat-Übergabe heißt jetzt **Übergaberegel**; „Arbeitsregel G" meint ausschließlich die Kostenregel. (Frühere Fassung: nicht zu verwechseln mit der Arbeitsregel G „Kostenregel" — die Buchstaben überschneiden sich, weil „Regel G" bisher die Chat-Übergabe meinte. Bei der nächsten Blueprint-Fassung zu entwirren.)*

**8. Claude Code auf dem Windows-Tablet über das Pro-Abo** · *Idee 9./10.7., Claude* · **Status: 🔴 AUFGEGANGEN IN PUNKT 46 (14.8.2026)**
Statt API-Guthaben zu verbrauchen, könnte das bezahlte Pro-Abo die Arbeit leisten. Haken: läuft nur, wenn Ondo es am Tablet anstößt; Einrichtung etwa 45 Minuten; zehrt am Wochen-Limit.
→ *Nach der Beförderung neu bewerten.*
→ **🔴 Punkt 46 vom 14.8. ist derselbe Vorschlag.** Chat 15 hat ihn aufgenommen, ohne diesen Punkt zu finden; Chat 16 hat es bemerkt, Chat 15 hat es bestätigt. **Weitergeführt wird Punkt 46.** Dieser Eintrag bleibt stehen, weil nichts gelöscht wird — und weil die Kostenangabe zum Wochen-Limit hier seit dem 9. Juli richtig stand und in Punkt 46 fehlte.

**9. Echte Quoten automatisch (GitHub Actions + Quotendienst)** · *Idee 23.7., Claude* · **Status: Idee**
Offene Vorfrage (Gemini): Deckt ein kostenloser Dienst überhaupt Ondos Spiele ab? Verfassungsfrage offen: Der Actions-Wecker ist ein winziger Server, der Blueprint sagt „kein Server". **Die Entscheidung gehört in den Blueprint.**

**10. Value-Rechnung zurückholen** · *Idee 22.7., Gemini* · **Status: Idee** · hängt an Punkt 9

**11. Rollenmodell in den Blueprint** · *Idee 23.7., ChatGPT* · **Status: Idee**
Zwei Ergänzungen von Claude offen: Architekt und unabhängiger Prüfer sollten nicht dieselbe Rolle sein; Geminis Doppelrolle (Duell-Teilnehmer und Schiedsrichter) muss benannt werden.

**12. Gegenprobe mit Gemini zum GitHub-Pages-Zugriff** · *Fund 30.7.* · **Status: BEANTWORTET am 4.8. — negativ**
**Gemini kann Links grundsätzlich nicht abrufen.** Eigene Auskunft vom 4.8.: Es verarbeitet ausschliesslich Text, der im Verlauf übergeben wird — hineinkopiert oder als hochgeladene Datei. Es besitzt keinen Browser-Zugriff auf externe Server.
→ **Folge: Gemini bekommt Dateien, ChatGPT bekommt Links.** Die Annahme „Prüfer bekommen Links statt Anhänge" gilt nur zur Hälfte.
→ **Zweite offene Frage aus derselben Runde:** ChatGPT meldete am 4.8., die Pages-Seiten trügen noch den Stand vom 30. Juli. **Nicht nachgeprüft** — Claudes Abrufwerkzeug kam nicht an die Adresse heran, und der erneute Raw-Abruf lieferte die eigene zwischengespeicherte Kopie zurück. Zwei Erklärungen bleiben offen: die Pages-Seiten sind wirklich alt, **oder** ChatGPT hat nicht abgerufen, sondern aus dem Gedächtnis geantwortet. *Trennschärfer Test: nach dem Wortlaut von Arbeitsregel J und nach dem Namen `lyria-3-pro-preview` fragen — beides steht nur in der Fassung vom 4. August.*

**18. Dokumente kürzen und Chronik auslagern** · *Idee 31.7., Claude* · **Status: 🔴 BESCHLOSSEN am 14.8. — zweiter Bauauftrag, zusammen mit Punkt 45**

Lag seit dem 31. Juli als unentschiedene Idee. **Ondo hat sie am 14.8. zur Grundlage aller weiteren Arbeit gemacht.**

→ **Was getrennt wird:** `PROJEKT-STATUS.md` (rund 180 KB) wird zu **`STAND.md`** — nur die aktuelle Wahrheit, Ziel unter 25 KB — und **`CHRONIK-2026-07.md`** sowie **`CHRONIK-2026-08.md`**, die nur auf Zuruf gelesen werden. Der Backlog wird zu offenen Punkten und einem Erledigt-Archiv.
→ **Was das löst:** Ein neuer Chat liest dann etwa 50 KB statt 380 KB und hat fast seinen ganzen Speicher zum Arbeiten. **Das ist die Lösung für Ondos erstes Problem.**
→ **Was in `STAND.md` gehört:** Messstand · Versionen und Fassungen · letzte Sicherung · offene beschlossene Punkte · Entscheidungen, die bei Ondo liegen · die acht Fehlerarten · die Arbeitsregeln · bekannte offene Fehler. **Nichts, was ein Datum in der Vergangenheit als Überschrift trägt.**
→ **Regel beim Trennen:** **Es wird nichts gelöscht, nur verschoben.** Jeder Satz landet in genau einer der beiden Dateien.
→ **Kosten:** ein bis zwei Arbeitsblöcke, kein Geld. Risiko: Beim Trennen kann etwas verlorengehen — deshalb wird `pruefe.py` vorher um eine Zeilenzählung erweitert, die Verluste sichtbar macht.

---

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

**22. KI-Log als Textausgabe mit Datumsbereich** · *Idee 4.8., Ondo* · **Status: GEBAUT (v19.7.5, 4.8.) · noch nicht bewährt**
Ein Knopf, der die Log-Einträge eines wählbaren Zeitraums als reinen Text ausgibt, zum Kopieren.
→ **Zweck:** Er ersetzt Bildschirmfotos in Chats. Zwölf Ergebnisse als Text sind unter 3 KB, ein Bildschirmfoto kostet rund 15 KB je Stück und ein PDF-Ausdruck ein Vielfaches. Der Text ist zudem maschinell auswertbar, ein Bild nur lesbar.
→ **Kosten: keine.** Kein API-Aufruf, kein Geld, Aufwand gering.
→ *Empfehlung Claude: als nächste Lieferung, vor allem anderen — die Ersparnis wirkt ab dann in jedem folgenden Chat. Zwei-Probleme-Regel erfüllt: spart Speicher **und** macht die Daten auswertbar.*
→ **Gebaut am 4.8. als v19.7.5.** Unter „KI-Log": zwei Datumsfelder (vorbelegt mit heute), Knopf „Text erzeugen", Textfeld, Kopieren-Knopf. Eine Zeile je Vorhersage mit Datum, Anpfiff, Spiel, Wettbewerb, Gehirn, Modellname, getipptem und echtem Endstand, allen drei Märkten mit Prozentzahl und Urteil, dem Vermerk `[gedreht]`, dem Wort ja/nein und der Begründung. Das v18-Archiv bleibt aussen vor.
→ **Nichts gespeichert, nichts gerechnet, nichts an ein Gehirn geschickt** — reine Ausgabe. Kalibrierung, Auftragstext und Messreihe sind unberührt.
→ *Trockentest bestanden: Datumsgrenzen greifen, Sortierung aufsteigend, Archiv ausgeschlossen, leerer Zeitraum meldet sich.*

**25. Textausgabe zeigt auch die noch nicht übernommenen Endstände** · *Idee 6.8., Ondo · Beschluss Ondo 7.8.* · **Status: GEBAUT (v19.7.8) · noch nicht bewährt**

Der Textknopf gibt heute nur gespeicherte Vorhersagen aus. Die vom Schiedsrichter gefundenen Endstände stehen vor dem Übernehmen nur auf dem Bildschirm; für die Gegenprüfung durch Claude braucht Ondo deshalb weiterhin ein Bildschirmfoto.

→ **Zweck:** die letzte Stelle beseitigen, an der ein Bildschirmfoto nötig ist. Die Vorschläge liegen ohnehin schon im Arbeitsspeicher der Seite (`pruefListe`), sie werden nur nirgends als Text ausgegeben.
→ **Wichtig für die Reihenfolge:** Erst gegenprüfen, dann übernehmen. Ein falsch übernommener Endstand ist der einzige Schritt, der sich nicht einfach zurücknehmen lässt.
→ **Kosten: keine.** Kein API-Aufruf, kein Geld, kein Eingriff in Auftragstext, Kalibrierung oder Messreihe.
→ *Zwei-Probleme-Regel: spart Speicher in jedem Chat **und** macht die Gegenprüfung maschinell auswertbar. Erfüllt.*

**23. Schattenlauf zur Antwortstabilität** · *Idee 4.8., Gemini* · **Status: Idee — von beiden Prüfern am 6.8. ausdrücklich zurückgestellt**

→ **⚠ 6.8.:** ChatGPT und Gemini raten übereinstimmend davon ab, diese Kennzahl jetzt zu bauen — ChatGPT unter Verweis auf die Zwei-Probleme-Regel, Gemini mit dem Argument, sie bekämpfe das Symptom statt der Ursache. **Zuerst Punkt 26 (Temperatur), dann neu bewerten.** Bemerkenswert: Gemini rät von seiner eigenen Idee ab.
Ein getrenntes, kleines Skript — **nicht** im Hauptprogramm. Es nimmt einige bereits abgeschlossene Spiele und stellt beiden Gehirnen mehrfach hintereinander denselben Auftragstext. Die Antworten landen in einem reinen Textprotokoll, fern der Kalibrierungsdaten. So bleibt die Hauptmessreihe unberührt.
→ **Anlass:** Am 4.8. antwortete Flash auf dieselbe Paarung zweimal verschieden, Sonnet zweimal gleich.
→ **⚠ Verschärft am 6.8.:** Bei Salzburg – Pafos schwankten **beide** Gehirne — Flash bei allen drei Märkten, Sonnet bei zwei von drei; der Ergebnis-Tipp blieb bei beiden gleich. Damit betrifft Geminis Einwand nicht mehr nur Flash.
→ **Geminis weiterreichende Aussage:** Kalibrierung setzt eine stabile Wahrscheinlichkeitsverteilung voraus. Schwankt ein Gehirn bei identischem Auftrag, ist die Prozentzahl teilweise willkürlich. **Vor jedem Korrekturfaktor braucht es deshalb eine vorgeschaltete Kennzahl für Antwortstabilität.** Das stellt die Hauptkennzahl des Projekts erstmals grundsätzlich infrage.
→ **Kosten: nicht null.** Mehrere Läufe je Spiel verbrauchen echte Anfragen. Vor dem Bauen zu beziffern.
→ *Hängt eng mit dem Temperatur-Fund zusammen: Ein Schattenlauf bei unbekannter Temperatur misst womöglich nur die Standardeinstellung des Anbieters.*

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

## ⛔ Abgelehnt und zurückgestellt (bleibt dokumentiert)

| Punkt | Datum | Grund |
|---|---|---|
| **Getrennte Chats (Werkstatt / Bibliothek / Hauptquartier)** | **31.7.** | **Verworfen nach Durchrechnung.** Der Gewinn war kleiner als gedacht: Eine Werkstatt müsste `beta.html` einmal lesen und bei jeder Lieferung einmal ausschreiben — das reicht für zwei Lieferungen statt einer. Dagegen: doppelter Kopieraufwand für Ondo und Verlust an Codeaufsicht. Die drei nützlichsten Funde des 31.7. kamen daher, dass **derselbe** Chat Code und Dokumente kannte. *Nicht löschen — kann wiederkommen.* *(Nachtrag 3.8.: Am selben Tag hat sich ein billigerer Weg gezeigt — Dateien hochladen und bearbeiten statt ausschreiben. Siehe PROJEKT-STATUS, Speicher-Zahlen.)* |
| **Rückblick-Block entfernen** | **31.7.** | **Zurückgezogen.** Der Block ist eine belegte Reparatur vom 7.7., keine Schwachstelle. Stattdessen beschlossen: echte Endstände einsetzen → Punkt D |
| **Zweite unabhängige Quelle für den Schiedsrichter** | 30.7. | **Zurückgestellt**, nicht abgelehnt (ChatGPT): bricht die Zwei-Probleme-Regel; Quellenpriorität (0c) ist billiger |
| Council-Skill (fünf Berater-Rollen) | 21.7. | Alle fünf wären dasselbe Modell — simulierte statt echter Perspektivenvielfalt |
| Manuelle Quoteneingabe / Screenshot | 23.7. | Zu viel Aufwand für Ondo |
| Eingabefeld für den Endstand von Hand | 25.7. | **Ondo:** „Das ist nicht der Sinn der Sache." Ein besseres Eingabefeld macht den Besitzer zum Ersatzteil |
| **Ergebnisse von Hand nachschlagen** | 25.7. | Die Zuverlässigkeit des Schiedsrichters gehört zum Test, nicht in Ondos Freizeit. **Zwei Claude-Instanzen sind trotzdem darauf zurückgefallen — nicht empfehlen** |
| Doppelprüfung: dasselbe Spiel zweimal fragen | 28.7. | Dauerhafte Kosten für einen einmaligen Fehler; dasselbe Modell zweimal zu fragen kann zwei gleiche Fehler erzeugen |
| OpenLigaDB als Ergebnisquelle | 25.7. | Nur deutscher Fußball, von der Gemeinschaft bearbeitbar — für ein Messgerät ungeeignet |
| Sport-API statt KI-Suche | 9.7. | Real getestet am 5.7.: freie Quellen liefern Platzhalter statt Teamnamen |
| Lokale KI (Ollama) auf dem Tablet | 9.7. | Zu schwache Modelle, keine Websuche, erreicht die iPhone-App nicht ohne Server |
| Handgeschriebene Projektzusammenfassung in Übergaben | 30.7. | ChatGPTs Mappe war an sechs Stellen veraltet und hätte richtige Antworten als falsch gewertet |

---

## ❔ Überholt — zur Kontrolle

- **„Raw-Links funktionieren nur bei Claude"** (*23.7.*) · **überholt am 30.7.** — GitHub Pages liefert HTML, ChatGPT kann lesen
- **Log-Deduplizierung** (*16.7.*) · **überholt** — Prüftermin 6. August
- **Verworfen-Statistik** (*16.7.*) · **überholt** — es gibt keine Verworfenen mehr
- **Konsistenz-Anweisung schärfen** (*18.7.*) · **überholt durch Punkt A**
- **Spielliste-Rangfolge als Wunschliste im selben Auftrag** (*24.7., gebaut als v19.3*) · **überholt durch v19.6** — **Lehre:** Auswählen ist eine Entscheidung, Ablesen nicht
- **Quoten-Transparenz / Quoten-Realitätsabgleich** (*18.7.*) · **überholt** — kehrt mit Punkt 9 zurück

---

*Zu Fassung 13 — neunter und letzter Einzelnachtrag, eingetragen am 8.8.2026, 11:55 Uhr von Chat 12 — Abschluss-Buchführung: **Punkte 31, 32 und 33 neu** aus ChatGPTs Architekturhinweisen vom 8.8. (Core-Vertrag nicht gebaut · „gefunden" gegen „bestätigt" · Doppel-Codebasis bei der Beförderung). **Punkt 27 auf entscheidungsreif.** **Punkt F um den vollständigen Bauvorschlag und die Berichtigungsfrage ergänzt.** **Bilanz des Verzeichnisses: 39 Punkte, 7 gebaut, 7 beschlossen und nicht gebaut** (F, E, 2, 3, 4, 6, 7). Ondos Beschluss: **jeder Chat baut ab sofort mindestens einen beschlossenen Punkt** — als Arbeitsregel L im Blueprint 0.11.*

*Achter Nachtrag zu Fassung 12, eingetragen am 8.8.2026, 07:58 Uhr von Chat 12: **Der KI-Log seit 1.7. ist maschinell ausgezählt, Gegenprobe gegen die App bestanden.**

**Punkt F ist damit vollständig vermessen:** Betroffen sind **15 bewertete Sonnet-Aussagen**, nicht der ganze Bestand. Der Fehler tritt genau dann auf, wenn **Sonnets Tipp eine Null enthält** — nicht wenn `[gedreht]` gesetzt ist. Netto **+9** für Sonnet: 94/180 = 52 % statt 85/180 = 47 %. Flash unverändert bei 91/180.

**Es sind zwei Fehlerarten, nicht eine.** Bei 15 Einträgen ist das **Etikett** verdreht (Berichtigung: Etikett drehen, Zahl bleibt). Bei **einem** Eintrag — Motherwell, 23.7. — ist das Etikett richtig und die **Prozentzahl** der Gegenwert (42 % statt 58 %, Bewertung unverändert). **Eine pauschale Regel hätte diesen Eintrag zerstört.**

**Befund A ist widerlegt.** Die 15 falschen Aussagen liegen in den Stufen 50–59 % (1), 60–69 % (8) und 70–79 % (6) — genau dort, wo Sonnet überzuversichtlich aussah. Nach Berichtigung: 60–69 % behauptet 63, trifft **71**; 70–79 % behauptet 74, trifft **71**. Sonnet ist nicht überzuversichtlich, sondern in einer Stufe zurückhaltender als nötig.

**Der Einwand gegen den älteren Bestand ist weitgehend gegenstandslos:** Nur **zwei** der 15 Fälle stammen von vor dem 5. August. Die Frage „ganzer Bestand oder nur ab 5.8." betrifft zwei Einträge.

**Zwei Angaben in den Dokumenten sind zu berichtigen:** „Flash dreht nie" ist falsch — Flash wurde zweimal gedreht (24.7., 28.7.), **beide Male richtig**. Und die Regel „Sonnet dreht genau dann, wenn der Tipp eine Null enthält" hat drei Ausnahmen (Motherwell, América Mineiro, Remo), von denen keine sie schwächt.

**Neuer Beobachtungspunkt:** Der Schiedsrichter läuft unter dem **beweglichen Namen** `gemini-flash-latest`. Dahinter kann jederzeit ein anderes Modell stehen. Für die Bewährungszeit von Punkt 26 erheblich, weil eine Verhaltensänderung dann nicht mehr eindeutig der Temperatur zuzuordnen wäre. Nichts gebaut.

Einzelheiten in `PROJEKT-STATUS.md`, Abschnitt „Der 8. August", Unterpunkte 6 und 7.*

*Siebter Nachtrag zu Fassung 12, eingetragen am 8.8.2026, 07:10 Uhr von Chat 12: **Punkt 28 vollständig entschieden** — frische Prüfer-Chats, Beschluss Ondo. Dazu zwei Einwände Ondos zur rückwirkenden Berichtigung, die Teile der bisherigen Ablehnung entkräften: Der Schaden ist aus dem KI-Log **bestimmbar** (das Kennzeichen `[gedreht]` steht in jeder Zeile), und eine Berichtigung wäre **umkehrbar**, weil das Kennzeichen gespeichert bleibt und der Ursprungswert sich als `100 − gespeicherter Wert` ergibt. Einzelheiten in `PROJEKT-STATUS.md`, Abschnitt „Der 8. August", Unterpunkte 6 und 7.*

*Sechster Nachtrag zu Fassung 12, eingetragen am 8.8.2026, 06:55 Uhr von Chat 12: **Punkt E ist nicht mehr blockiert** — Gemini hat seine eigene Rückfrage vom 4.8. beantwortet und eine Formulierung geliefert; ChatGPT widerspricht. Die Prüferantworten zu allen drei Fragen stehen in `PROJEKT-STATUS.md`, Abschnitt „Der 8. August", Unterpunkt 5. **Frage 2 war unvollständig gestellt** und sollte in einer engen Rückfrage wiederholt werden.*

*Fünfter Nachtrag zu Fassung 12, eingetragen am 8.8.2026, 06:35 Uhr von Chat 12: **Punkt F ist der dringendste offene Punkt des Projekts.** Aus der App abgelesen: beide Gehirne stehen bei **8 %** Kalibrierungsabweichung, je 180 bewertete Aussagen. Sonnets dokumentierter Vorsprung (5 % gegen 9 %) besteht nicht mehr. Sonnet hat jetzt 35 Aussagen ab 60 %, und in den Stufen 60–79 % trifft es 52 % beziehungsweise 43 % — **genau die Stufen, in denen die umgedrehten „beide treffen"-Werte liegen.** Punkt F verfälscht damit nicht mehr nur die Anzeige, sondern die Hauptkennzahl. Einzelheiten in `PROJEKT-STATUS.md`, Abschnitt „Der 8. August", Unterpunkte 2 und 3. Ausserdem: Der Bericht an die Prüfer wurde am 8.8. um 06:35 Uhr erstmals nach **Arbeitsregel K** erstellt. Er enthält als Frage 2 Ondos Vorschlag, die betroffenen Einträge **rückwirkend zu berichtigen**, statt nur zu schneiden — das berührt den Beschluss vom 5.8. gegen rückwirkende Anpassungen und ist deshalb Ondos Entscheidung, nicht Claudes.*

*Vierter Nachtrag zu Fassung 12, eingetragen am 8.8.2026, 06:20 Uhr von Chat 12: **Punkt 30 neu angelegt** (Freundschaftsspiele), Status Idee, nicht entschieden — mit Gegenargument und der Empfehlung, erst zu zählen. Punkt F ist im Prüflauf vom 7.8. abends **erstmals messbar teuer geworden**: zwei Punkte an einem Abend, dokumentiert in `PROJEKT-STATUS.md`, Abschnitt „Der 8. August", Unterpunkt 3.*

*Dritter Nachtrag zu Fassung 12, eingetragen am 7.8.2026, 22:55 Uhr von Chat 12: **Punkt 29 neu angelegt** (eigene Rolle für die Spielliste), Status Idee, ausdrücklich nicht zu bauen. Entstanden aus Ondos Frage, wer die Spielliste liefert.*

*Zweiter Nachtrag zu Fassung 12, eingetragen am 7.8.2026, 22:40 Uhr von Chat 12: **Die Fehlerarten der Spielliste bekommen eine eigene Tabelle** (Beschluss Ondo, 7.8.) — S1 Doppeleintrag, S2 falsche Anpfiffzeiten, S3 erfundene Spiele, alle in `PROJEKT-STATUS.md`. Der Doppeleintrag wird damit **nicht** zur zehnten Schiedsrichter-Fehlerart; die Schiedsrichter-Tabelle bleibt bei neun. Der Beobachtungspunkt ist entsprechend geschlossen.*

*Nachtrag zu Fassung 12, eingetragen am 7.8.2026, 21:45 Uhr von Chat 12: Punkt 28 ist von Ondo als **Arbeitsregel K** beschlossen und um seine fehlende zweite Hälfte ergänzt — den festen Zusammenhangsblock. Die Lücke kam durch Ondos Rückfrage ans Licht, ob ein neuer Prüfer-Chat mit dem reinen Zeilendiff etwas anfangen kann. Eingetragen in die Vormerk-Tabelle und im Blueprint 0.9, Abschnitt 2c. Sonst nichts geändert.*

*Fassung 12, geschrieben am 7.8.2026 von Chat 11: v19.7.8 geliefert (Weg A, Punkt 25, Punkt 26) · Prüflauf vom 7.8. mit zehn von zehn Endständen · dritter falscher Halbzeitstand in Folge · die Spielliste hat am 7.8. Spiele erfunden, zehn Vorhersagen geparkt · Sonnet widerspricht sich bei „beide treffen" in drei von fünf Fällen · Punkt 28 neu · Befund über Geminis Leseverhalten.*

*Fassung 22, geschrieben am 14.8.2026, 22:41 Uhr von Chat 16 (Codelieferung 22:36 Uhr): **Punkt 44 GEBAUT** (`beta.html` v19.8.2, Messdaten-Export ohne Schluessel, Positivliste und zweistufige Schluesselpruefung, Sprachschluessel 217) — **Arbeitsregel L erfuellt.** **Punkt 8 und Punkt 46 zusammengelegt**, Kostenangabe zum Wochen-Limit ergaenzt. Vier weitere Funde gegen Chat 15 berichtigt. **Beschlossen und nicht gebaut: acht — E, 2, 3, 4, 18, 45, 46, 47**; diese Zahl steht ab jetzt nur noch hier. `pruefe.py` auf Chat 16 umgestellt. Backlog und Blueprint vor der Lieferung vollstaendig nachgelesen; `beta.html` hochgeladen und nur an den betroffenen Stellen geaendert; `OndoControl.html` nicht gelesen.*

*Fassung 21, geschrieben am 14.8.2026, 17:11 Uhr von Chat 15: Die fuenf Beschluesse der Grundsatzbesprechung — **Punkt 44** (Messdaten-Export ohne Schluessel, erster Bauauftrag), **Punkt 18 endlich entschieden** (Dokumente trennen), **Punkt 45** (ein Ort je Tatsache), **Punkt 46** (Claude Code auf dem Surface Go), **Punkt 47** (Selbsttest fuer die App). Reihenfolge 44 → 18+45 → 46 → 47. Regelaenderungen beschlossen, wirksam erst nach Punkt 18. Punkt 43 ausgewertet. Beschlossen und nicht gebaut: jetzt acht.*

*Fassung 20, geschrieben am 14.8.2026, 06:17 Uhr von Chat 15: `CODE_VERSION` entschieden (Lieferkennzeichen, ausnahmslos hochzaehlen; Schnitt am Fehlen des Feldes) · Ondos Pause der Sammlung eingetragen und Punkt 3 als blockiert gekennzeichnet · **Punkt 43 neu** (Punkt 29 gebaut, nie ausgewertet) · vier Buchfuehrungsfehler des 13.8. geheilt, darunter die Sprachschluesselzahl 211 statt 201 · `pruefe.py` um Abschnitt 4c erweitert. Vier Dokumente vollstaendig gelesen, `beta.html` in Teilen, `OndoControl.html` nicht — die Entscheidung samt Liste steht in `PROJEKT-STATUS.md`, Abschnitt „Der 14. August". Geaendert wurden nur die betroffenen Stellen.*

*Fassung 19, geschrieben am 13.8.2026, 22:20 Uhr von Chat 14: Punkt 42 neu, die rückwirkende Berichtigung als erledigt gefuehrt, Fassungsabschnitt 19 ergaenzt.*

*Fassung 18, geschrieben am 13.8.2026, 16:32 Uhr von Chat 14. **Punkt 41 neu** (Positionsverschiebung, Ursache belegt). **Punkt 6 und Punkt 7 gebaut** — beide lagen seit dem 23.7. beziehungsweise 30.7. beschlossen und ungebaut; damit ist Arbeitsregel L erfüllt und die Zahl der beschlossenen, nicht gebauten Punkte sinkt von sechs auf vier (E, 2, 3, 4). **Punkt 36 um den zweiten und stärkeren Fall erweitert** (Union – Aris, dreimal 45 Minuten, Stand nach 90 Minuten zwischen zwei Quellen strittig) und auf entscheidungsreif gesetzt. Alle sechs Dateien plus `version.json` wurden vor Arbeitsbeginn vollständig gelesen; geändert wurden nur die betroffenen Stellen.*

*Vorige Fassung: Fassung 11, geschrieben am 6.8.2026 von Chat 10, nachmittags: Prüferantworten zum Bericht vom 09:05 Uhr eingetragen, Punkte 26 und 27 neu, Punkt 23 zurückgestellt.*

*Vorige Fassung: Fassung 10, geschrieben am 6.8.2026 von Chat 10. Alle sechs Dateien plus `version.json` wurden vor Arbeitsbeginn vollständig gelesen. Nachgetragen: die drei Entscheidungen vom Abend des 5.8., der Prüflauf vom 6.8., der nachgerechnete Messstand, drei neue Beobachtungen, Punkt F und Punkt 25. **Die Übergabemappe vom 5.8. darf gelöscht werden, sobald Ondo diese Dateien hochgeladen hat — nicht früher.***

*Vorige Fassung: Fassung 9, geschrieben am 5.8.2026 von Chat 8, zusammen mit den Lieferungen v19.7.6 und v19.7.7. Alle sechs Dateien plus `version.json` wurden vor Arbeitsbeginn vollständig gelesen. **Die Übergabemappe vom 4.8. darf erst gelöscht werden, wenn Ondo die Dateien hochgeladen hat.***

*Nächste Aktualisierung: bei der nächsten Entscheidung oder Lieferung — nach Arbeitsregel F sofort, nicht später.*
