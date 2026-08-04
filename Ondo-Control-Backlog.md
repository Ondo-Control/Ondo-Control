# ONDO CONTROL — Rückstand-Verzeichnis (Backlog)
**Gepflegt von Claude · Stand 3.8.2026, Fassung 6 · jede Idee mit Datum, Urheber und Status**

## Regeln für dieses Dokument

1. **Abgrenzung (ChatGPT, 23.7.):** Architektur lebt ausschließlich in `Blueprint.md` und `Ondo-Core-Architektur.md`. Dieses Dokument enthält **nur Aufgaben, Ideen und deren Status** — keine Architekturregeln.
2. Claude schlägt Punkte von sich aus zum passenden Zeitpunkt vor. Ondo entscheidet, was und wann gebaut wird (Art. 8).
3. Nichts wird gelöscht. Abgelehnt und überholt bleiben sichtbar.

**Status-Werte:** `Idee` · `beschlossen` · `gebaut` · `bewährt` (im Alltag getestet) · `überholt` · `abgelehnt`

**Übergabe an die Prüfer — GEÄNDERT am 30.7.:** Der Eintrag vom 23.7. („Raw-Links funktionieren nur bei Claude, ChatGPT und Gemini brauchen Anhänge") ist **überholt**. GitHub Pages wandelt Markdown in HTML um; diese Adressform funktioniert bei ChatGPT:
`https://ondo-control.github.io/Ondo-Control/PROJEKT-STATUS.html` (entsprechend für Backlog, Blueprint, Ondo-Core-Architektur). Einzelheiten und Folgen stehen in `PROJEKT-STATUS.md`.

**Dateinamen von Berichten an die Prüfer (28.7., Ondo):** Beginnen mit Datum und Uhrzeit — `2026-07-31_1430_Ondo-Control_Thema.md`.

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
| **0a** — zweite Modellliste für den Schiedsrichter (stärkere Modelle), Rückfall auf Flash, Anfragen-Zähler | 29.7. | Gemini/ChatGPT, Beschluss Ondo | gebaut · **noch nicht bewährt** |
| **1** — Kennzahl „Entschlossenheit" (Ø Abstand von 50, Anteil ab 60 %), rein zur Anzeige | 27.7. | Claude, Beschluss Ondo 31.7. | gebaut · **noch nicht bewährt** |
| **D** — Rückblick-Block mit getipptem und echtem Endstand, „Ergebnis noch offen" wo keiner vorliegt | 31.7. | Claude, Beschluss Ondo | gebaut · **noch nicht bewährt** |

**Beim Bauen gefunden (0a): Die App fragt das Google-Konto gar nicht nach stärkeren Modellen.** Der Filter in `gLadeModelle` ließ ausschließlich Modelle mit „flash" im Namen zu. Der Schiedsrichter benutzte dasselbe Modell wie das zweite Gehirn — nicht aus Absicht, sondern weil kein anderes je in die Liste kam. 0a war deshalb kein Schalter, sondern eine zweite Liste.

**Trockentest an Ondos Sicherung vom 3.8.** (138 Vorhersagen): Kalibrierung unverändert Sonnet 5 % / Flash 10 % bei je 87 bewerteten Aussagen — die alte Rechnung ist nachweislich nicht angefasst worden. Entschlossenheit: Sonnet Ø 4,8 und 6 % ab 60 % (5/87) · Flash Ø 8,6 und 38 % (33/87).

**Syntax-Check bestanden. Sprachschlüssel jetzt 175 in DE, FR und EN, identisch** (167 plus acht neue).

---

## 🔴 Prio 1 — als Nächstes dran

### Als v19.7 gebaut am 3.8.: A · 0a · 1 · D — Bewährungszeit läuft

**A. Test A: Eindeutigkeit der Frage „beide treffen"** · *Fund 30./31.7., Claude · Beschluss Ondo 31.7.* · **Status: GEBAUT (v19.7, 3.8.) — Auswertung offen**

Der Auftragstext fragt: „wie sicher in Prozent, dass *beide Teams treffen* **so ausgeht wie in deinem Ergebnis**?" Das ist eine Frage über die eigene Vorhersage. **Flash beantwortet sie so. Sonnet beantwortet die schlichte Frage „wie wahrscheinlich treffen beide?".** Weil die App beide Zahlen gleich liest, dreht sie Sonnets Angabe ins Gegenteil.

Beleg: Bei Sonnet wird ausschließlich dann umgedreht, wenn das getippte Ergebnis eine Null enthält — sieben von sieben. Bei Flash kein einziges Mal bei fünf solchen Ergebnissen. Vollständige Tabelle in `PROJEKT-STATUS.md`.

**Was gebaut wird:** Die Gehirne geben zusätzlich das Wort **ja** oder **nein** aus — ihre eigene Antwort auf „treffen beide?". Nur speichern und anzeigen, kein Eingriff ins Rechnen. Ein Tag Vorhersagen reicht für die Antwort.

**Warum erst messen statt gleich ändern (Ondos Entscheidung):** Das Projekt ist mehrfach von plausiblen Herleitungen in die Irre geführt worden. Weg A (erst prüfen) wurde gegenüber Weg B (sofort ändern) gewählt.

→ **Vorbehalt bei der Auswertung (Ondo/Claude, 3.8.):** Es ist möglich, dass die zusätzliche Frage das Gehirn zum Nachdenken bringt und es daraufhin auch seine Prozentzahl anders wählt. Dann misst der Test nicht mehr das alte Verhalten. Ein Warnzeichen wäre, wenn Sonnets bisher scharfes Muster bricht (umgedreht ausschließlich bei einer Null im Tipp, sieben von sieben). **Ehrlich: Die beiden Fälle lassen sich nicht sicher trennen.** Das Ergebnis ist deshalb nicht ungeprüft für bare Münze zu nehmen.
→ *Entlastender Befund: Die bisherigen Daten sind nicht verloren. `gedreht:true` und der Endstand werden mitgespeichert; Rohwerte und Bewertungen lassen sich nachträglich neu rechnen, sobald die Deutung feststeht. Nicht umkehrbar ist nur ein falsch übernommener Endstand.*

---

**0a. Schiedsrichter fest an das stärkere Gemini-Modell koppeln** · *Idee 29.7., Gemini (ChatGPT gleichlautend)* · **Status: GEBAUT (v19.7, 3.8.)**

Der Schiedsrichter ist ein Messwerkzeug, kein Duell-Teilnehmer. Er darf ein anderes Modell benutzen als die Vorhersage, ohne dass die Messreihe leidet. Im Code wird für den Schiedsrichter-Lauf das stärkere Modell erzwungen, unabhängig von der Einstellung für die Vorhersage. **Die Vorhersage bleibt unverändert.**

→ **Dringlichkeit erhöht (31.7.):** Nach den erfundenen 0:0 ist dies der einzige beschlossene Punkt, der den Fehler unmittelbar angeht, der die Messung stoppt. Solange nichts übernommen werden darf, wächst kein Datensatz.

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

### Ebenfalls Prio 1, noch nicht für v19.7 eingeplant

**E. „Prüfen statt suchen" — beschlossen am 25.7., bis heute nicht gebaut** · *Idee 25.7., ChatGPT · Beschluss Ondo 25.7.* · **Status: beschlossen, noch nicht gebaut — NEU eingetragen 31.7.**

ChatGPTs Umformulierung, im Blueprint unter dem 25.7. protokolliert: **Der Schiedsrichter soll nicht suchen, sondern prüfen.** Nicht „finde Spiel X", sondern „hier sind Wettbewerb, Datum, Heim, Gast — bestätige nur, wenn alle vier übereinstimmen".

**Stand im Code:** Der Auftrag beginnt bis heute mit „Ermittle per Websuche … den ENDSTAND". Übergeben werden nur Spielname, Datum und Anpfiffzeit — **der Wettbewerb gar nicht.** Die Wettbewerbspflicht aus v19.2 wirkt erst hinterher, als Warnung an Ondo.

**Vermutete Folge:** die erfundenen 0:0 vom 31.7. Ein Modell, das suchen soll, liefert irgendetwas; ein Modell, das bestätigen soll, kann „nein" sagen. **Vermutung, nicht bewiesen (Art. 13).**

→ Hängt zusammen mit ChatGPTs offener Frage vom 30.7.: Darf der Schiedsrichter überhaupt selbst Ergebnisse lesen, oder nur verifizierte Fakten bewerten? Diese Frage gehört in den Blueprint.
→ *Warum es drei Tage unentdeckt blieb: Der Beschluss stand nur im Blueprint-Protokoll, nie im Backlog. Genau der Fall, gegen den Arbeitsregel F gemacht wurde.*

---

**0b. Widersprüche messen statt korrigieren** · *Idee 29.7., Ondo* · **Status: ZURÜCKGESTELLT (31.7.), war beschlossen**

Ursprünglich: Widersprüche zwischen Ergebnis-Tipp und Marktaussage bekommen eine eigene Kennzahl je Gehirn.

**Warum zurückgestellt:** Nach dem Befund unter Punkt A würde eine Widerspruchsquote keine Eigenschaft der Gehirne messen, sondern eine unklare Formulierung im Auftragstext. Eine Kennzahl, die dem Gehirn anlastet, was die Frage verursacht hat, wäre selbst ein Messfehler.

**Zwei Korrekturen am ursprünglichen Beschluss, falls er wiederaufgenommen wird:**
1. Die Quote ist **rückwirkend** aus den vorhandenen Daten auslesbar (`gedreht`-Vermerk), ohne neue Messung.
2. Der Vorsatz „die betroffene Aussage fließt nicht in die Kalibrierung ein" ist **falsch herum**. Die umgedrehte Aussage ist die, an die das Gehirn glaubt. Sie herauszunehmen entfernt ehrliche Daten.

→ *Wiederaufnahme nach Test A.*

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
→ **Beschlossen (Ondo, 31.7.): als ausdrücklich OFFENE Frage an ChatGPT und Gemini geben.** Bericht folgt.

---

**3. Such-Experiment** · *Idee 23.7., Claude* · **Status: beschlossen**

Vier Wochen ohne Websuche messen, dann Suche zuschalten, Kalibrierung vergleichen. Die Messung ohne Suche läuft seit dem 23. Juli — **vier Wochen sind am 20. August um.**

---

## 🟡 Prio 2 — wichtig, aber später

**4. Daten-Export in die stabile Version** · *Idee Chat 1, erneut 28.7.* · **Status: beschlossen**
**Nicht zu verwechseln mit „Datensicherung" (gebaut in v19.1).** Die Sicherung schützt vor Datenverlust; dieser Punkt überträgt die Messdaten aus der Beta in die stabile Version. Ohne ihn geht bei der Beförderung alles Gesammelte verloren.
→ *Unmittelbar vor der Beförderung.*

**5. Beförderungskriterium (c) neu fassen** · *Idee 23.7., ChatGPT* · **Status: Idee**
15 Bewertungen sind statistisch zu wenig, 100 dauern Monate. Vorschlag Claude: Beförderung nach Stabilität und Fehlerfreiheit entscheiden, die Messung läuft danach weiter. **Inhalt gehört in den Blueprint.**
→ *Vermerk 31.7.: Die Beförderung ist derzeit ohnehin gesperrt — Kriterium (f) verlangt Null-Fehler-Toleranz beim Schiedsrichter. Einzelheiten in `PROJEKT-STATUS.md`.*

**6. Drei-Ebenen-Trennung in die Architektur schreiben** · *Idee 23.7., ChatGPT* · **Status: beschlossen, noch nicht ausgeführt**
Ebene 1 Daten · Ebene 2 Denken · Ebene 3 Bewertung. Gehört nach `Ondo-Core-Architektur.md`. *Steht seit 23.7. aus.*

**7. Übergaberegel in einer Fassung für ChatGPT** · *Fund 30.7.* · **Status: beschlossen, noch nicht geschrieben**
ChatGPT kann keinen neuen Chat öffnen; er erzeugt die Übergabemappe nur als Nachricht. Die Übergaberegel braucht dafür eine angepasste Fassung. **Inhalt gehört in den Blueprint.**
*Namenskonflikt erledigt (Ondo, 31.7., eingetragen 3.8.): Die Vorschrift zur Chat-Übergabe heißt jetzt **Übergaberegel**; „Arbeitsregel G" meint ausschließlich die Kostenregel. (Frühere Fassung: nicht zu verwechseln mit der Arbeitsregel G „Kostenregel" — die Buchstaben überschneiden sich, weil „Regel G" bisher die Chat-Übergabe meinte. Bei der nächsten Blueprint-Fassung zu entwirren.)*

**8. Claude Code auf dem Windows-Tablet über das Pro-Abo** · *Idee 9./10.7., Claude* · **Status: Idee**
Statt API-Guthaben zu verbrauchen, könnte das bezahlte Pro-Abo die Arbeit leisten. Haken: läuft nur, wenn Ondo es am Tablet anstößt; Einrichtung etwa 45 Minuten; zehrt am Wochen-Limit.
→ *Nach der Beförderung neu bewerten.*

**9. Echte Quoten automatisch (GitHub Actions + Quotendienst)** · *Idee 23.7., Claude* · **Status: Idee**
Offene Vorfrage (Gemini): Deckt ein kostenloser Dienst überhaupt Ondos Spiele ab? Verfassungsfrage offen: Der Actions-Wecker ist ein winziger Server, der Blueprint sagt „kein Server". **Die Entscheidung gehört in den Blueprint.**

**10. Value-Rechnung zurückholen** · *Idee 22.7., Gemini* · **Status: Idee** · hängt an Punkt 9

**11. Rollenmodell in den Blueprint** · *Idee 23.7., ChatGPT* · **Status: Idee**
Zwei Ergänzungen von Claude offen: Architekt und unabhängiger Prüfer sollten nicht dieselbe Rolle sein; Geminis Doppelrolle (Duell-Teilnehmer und Schiedsrichter) muss benannt werden.

**12. Gegenprobe mit Gemini zum GitHub-Pages-Zugriff** · *Fund 30.7.* · **Status: offen**
Für ChatGPT bestätigt. Ob Gemini die `.html`-Adressform ebenfalls lesen kann, ist ungeprüft.

**18. Die Dokumente selbst auf Diät setzen** · *Idee 31.7., Ondo* · **Status: Idee — NEU**
`PROJEKT-STATUS.md` ist kein Onboarding-Dokument mehr, sondern eine Chronik. Jeder Vorfall erzeugt einen neuen Abschnitt, nichts schrumpft. Folge: Das Einlesen kostet einen neuen Chat etwa die Hälfte seines Arbeitsspeichers, bevor die erste Aufgabe beginnt — was übrig bleibt, reicht für eine Lieferung, dann ist Übergabe. Der nächste Chat liest dieselben, inzwischen größeren Dokumente.
→ *Vorschlag: `PROJEKT-STATUS.md` auf das kürzen, was ein neuer Chat wirklich braucht; die Chronik in eine Archivdatei auslagern, die beim Start **nicht** gelesen wird.*
→ *Die Zwei-Probleme-Regel ist bisher nie auf die Verwaltung angewandt worden. Sie sollte es werden.*

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

---

## 📋 Für Blueprint und Ondo-Core vorgemerkt

*Diese Punkte gehören in die Architektur- und Verfassungsdokumente und sind hier nur geparkt, bis sie dort stehen.*

| Punkt | Herkunft | Ziel | Stand |
|---|---|---|---|
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
| **Dasselbe Spiel doppelt in der Spielliste** — am 2.8. standen „Bohemians – Galway United FC" (Anpfiff 20:00) und „Bohemians Dublin – Galway United" (Anpfiff 19:00) als zwei Spiele in derselben Liste. Sonnet hat es selbst bemerkt: „Gleiche Paarung wie heute früher" | 3.8. | Claude, aus Ondos Sicherung | **NEU.** Die Doppelten-Sperre in `spielListeHolen` vergleicht Namen buchstabenweise; zwei Schreibweisen sind für sie zwei Spiele. Folge: **sechs Aussagen je Gehirn aus einem einzigen Spiel**, und eine der beiden Anpfiffzeiten ist falsch — die geht in die 2,5-Stunden-Regel des Schiedsrichters ein. Ob das eine zehnte Fehlerart ist oder ein Beobachtungspunkt bleibt, **entscheidet Ondo**. Nichts gebaut |
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
| **Doppelter Code** — `beta.html` und `OndoControl.html` sind zwei vollständige Kopien | Jede Korrektur muss zweimal gemacht werden | hoch, sobald v19 befördert wird |
| **Bekannte Lücke im Schiedsrichter** — ein einmal als *fertig* gemeldetes Ergebnis wird nie wieder hinterfragt | Ein falsch abgelesener Endstand bleibt dauerhaft falsch, sobald übernommen wurde | **hoch** — durch die erfundenen 0:0 vom 31.7. weiter verschärft |
| **Der Schiedsrichter sucht, statt zu prüfen** | Ein Modell, das suchen soll, liefert irgendetwas statt „nicht gefunden" | **hoch** → Punkt E |
| **`APP_VERSION = 18` in `beta.html`**, während der Kopf v19.6 anzeigt | Heute folgenlos. Wird `version.json` bei der Beförderung auf 19 gesetzt, zeigt die Beta ein Update-Banner, das aus der Beta herausführt | vor der Beförderung klären |
| **Rückblick auf eigene Tipps enthält Vermutungen, keine Tatsachen** | Ein falscher Tipp kann Grundlage des nächsten werden | **wird mit v19.7 behoben** → Punkt D |
| **Nur lokale Speicherung** (localStorage) | Sicherung seit v19.1 gebaut; offen bleibt die Übertragung in die stabile Version | → Prio 2, Punkt 4 |
| **Eine lange JS-Datei** (keine Module) | Änderungen werden mit der Zeit riskanter | mittel |
| **Sprachdateien von Hand** (167 Schlüssel × 3 Sprachen) | Dreifache Pflege bei jeder neuen Beschriftung | niedrig |
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

*Fassung 6, geschrieben am 3.8.2026 von Chat 6, zusammen mit der Lieferung von v19.7. Alle Punkte aus Teil E der Übergabemappe Chat 5 → Chat 6 sind eingetragen — hier und in `PROJEKT-STATUS.md` und `Blueprint.md`. **Die Übergabemappe darf jetzt gelöscht werden.***

*Nächste Aktualisierung: bei der nächsten Entscheidung oder Lieferung — nach Arbeitsregel F sofort, nicht später.*
