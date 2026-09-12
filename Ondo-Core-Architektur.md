# ONDO CORE v1 — Architektur-Entwurf
*Antwort auf die Architektur-Anfrage von ChatGPT (5.7.2026). Autor: Claude. Status: Entwurf zur gemeinsamen Prüfung.*
*Fassung 0.4 — 13.8.2026, 16:32 Uhr: Abschnitt 1b „Drei-Ebenen-Trennung" ergänzt (Backlog-Punkt 6, beschlossen am 23.7., 21 Tage offen).*
*Fassung 0.5 — 11.9.2026: Abschnitt 1c „Lernkette: der Evidence Ledger" ergänzt (Backlog-Punkt 75, Auftrag Ondo 11.9.2026).*
*Fassung 0.6 — 11.9.2026: Schema in Abschnitt 1c vervollständigt und die Auflage an den Observation Layer auf die zwei tatsächlichen Felder festgenagelt — bei Ondos Nachprüfung fiel auf, dass die als „Schema" bezeichnete Tabelle in Fassung 0.5 mehrere real vorhandene Felder nicht nannte (`ergebnisHalbzeit`, `ergebnisVerl`, `ergebnisQuelle`, `bttsWort`, `refLaeufe`, `refQuellen`, `parkFormat`, `maerkte[].fAlt`/`fKorr`). Jetzt maschinell aus `beta.html` ausgezählt statt aus dem Gedächtnis geschrieben.*
*Fassung 0.7 — 11.9.2026: Berichtigung in derselben Tabelle. Fassung 0.6 zählte zwar die Feldnamen maschinell aus, beschrieb aber weiterhin aus der Annahme heraus, **wer** sie schreibt — und behauptete für `ergebnisHalbzeit`/`ergebnisVerl` „vom Schiedsrichter nachgetragen". Der Code widerlegt das: `pruefAnwenden()` schreibt ausschliesslich `ergebnisHeim`/`ergebnisGast`. Der Backlog führte diesen Befund bereits (Punkt 64, zweiter Fund) — die Tabelle widersprach damit dem Backlog (Fehlerart C4). Zeile berichtigt, Fund bei Punkt 64 verlinkt.*
*Fassung 0.8 — 12.9.2026: Abschnitt 4 „Memory" berichtigt (Backlog-Punkt 76, `beta.html` v19.8.30). Stufe 1 nannte weiterhin `localStorage` als aktuellen Stand — seit v19.8.30 ist das `IndexedDB` (die feste, kleine `localStorage`-Grenze hatte bei Ondo real bei 2.726 KB zugeschlagen, v19.8.29). Erste, positive Bewährungsbeobachtung ergänzt: Ondo hat eine Änderung im KI-Log gesetzt, die Safari-App selbst vollständig geschlossen und neu geöffnet (nicht nur die Seite neu geladen — von Ondo selbst am 12.9.2026 richtiggestellt) und bestätigt „Hat funktioniert" — ein Beleg, keine abgeschlossene Bewährung (Stabilitätsregel, Art. 14: ein einzelner Fall ist kein Beweis).*
*Fassung 0.9 — 12.9.2026: Neuer Abschnitt 1d „Trainingsraum — isolierte Testumgebung" (Backlog-Punkt 77, Auftrag Ondo 12.9.2026). Plan vor dem Bau festgehalten, wie vom Auftrag verlangt: Wiederverwendung von `vorhersageGehirn()` (bereits ohne Websuche), Zulassungsregel nach Trainings-Stichtag statt Raten, ein zusätzlich gefundenes Wettlauf-Risiko in `zuletztModell` und dessen Behebung über das bereits vorhandene `modelVersion`-Feld, getrennte Ablage vom Evidence Ledger. Kein Verfassungsartikel geändert.*
*(Name: Der Besitzer hat "Ondo Control" festgelegt; ChatGPT nutzt "ORION". Technisch irrelevant — hier "Ondo Core" für den Kern.)*

---

## 0. Grundsatzantwort auf die Kernfrage

> "Wie würdest du die Trennung zwischen ORION und dem LLM technisch umsetzen?"

**Durch einen einzigen Berührungspunkt.** Das gesamte System darf das Sprachmodell nur über EINE Funktion erreichen:

```
askBrain(anfrage) → antwort
```

- `anfrage` ist ein strukturiertes Objekt: { aufgabe, kontext, regeln, modus, erwartetes_format }
- `antwort` ist ein strukturiertes Objekt: { ergebnis, fakten, annahmen, gegenargumente, risiken, vertrauen, quellen }
- Dahinter liegt ein **Provider-Register**: heute Anthropic, morgen OpenAI, Gemini oder ein lokales Modell — jeweils ~30 Zeilen Adapter-Code, der die Anfrage ins jeweilige API-Format übersetzt.

Kein Modul, kein Button, keine Funktion ruft jemals direkt eine KI-API auf. Wer das Modell wechseln will, tauscht den Adapter — der Rest von Ondo Control merkt nichts. **Das ist die ganze Magie der Modellunabhängigkeit: eine schmale Tür statt vieler Löcher in der Wand.**

Im heutigen Einzeldatei-Prototyp ist das realistisch umsetzbar: `kiAnalyse()` und `fotoLesen()` rufen bereits eine gemeinsame Hilfsfunktion (`apiCall`) auf. Der Schritt zu einem Provider-Register ist eine kleine, risikoarme Umbauarbeit — kein Neuanfang.

---

## 1. Schichten-Architektur

```
┌─────────────────────────────────────────┐
│  OBERFLÄCHE (heute: HTML/Tabs)          │  austauschbar (später App)
├─────────────────────────────────────────┤
│  MODULE (Wetten, Finanzen, Orga, …)     │  sprechen NUR mit dem Core
├─────────────────────────────────────────┤
│  ONDO CORE                              │
│   ├─ Rule Engine   (Verfassung + Admin) │
│   ├─ Reasoning-Vertrag (Denkprozess)    │
│   ├─ Qualitätsprüfung (Schema-Check)    │
│   ├─ Memory-Schnittstelle               │
│   └─ Data Layer (Quellen-Register)      │
├─────────────────────────────────────────┤
│  BRAIN-ADAPTER (askBrain + Provider)    │  ← einzige Tür zum LLM
├─────────────────────────────────────────┤
│  LLM (Claude / GPT / Gemini / lokal)    │  austauschbarer Baustein
└─────────────────────────────────────────┘
```

Modul-Vertrag (ChatGPTs Forderung, übernommen): **Modul → Core → Brain → Core → Modul.** Nie Modul → Brain direkt.

---

## 1b. Drei-Ebenen-Trennung (ChatGPT, 23.7.2026 — eingetragen 13.8.2026)

*Die Schichten in Abschnitt 1 beschreiben, **wo** Code liegt. Die Drei-Ebenen-Trennung beschreibt, **welcher Art** eine Aussage ist. Beides ist nötig: Ein Fehler lässt sich nur zuordnen, wenn klar ist, auf welcher Ebene er entstanden ist.*

**Ebene 1 — Daten.** Was ist der Fall? Spielliste, Anpfiffzeit, Wettbewerb, Endstand, Halbzeitstand. Herkunft: Modellantwort oder Websuche. **Auf dieser Ebene gibt es richtig und falsch, aber keine Meinung.**

**Ebene 2 — Denken.** Was hält ein Gehirn für wahrscheinlich? Tipp, Prozentangabe je Markt, Begründung. Herkunft: ausschliesslich die Antwort des jeweiligen Gehirns. **Auf dieser Ebene gibt es keine Wahrheit, nur eine Behauptung.**

**Ebene 3 — Bewertung.** Traf die Behauptung zu? Vergleich der Ebene 2 gegen die Ebene 1, Kalibrierungsabweichung, Trefferquote, Brier-Score. Herkunft: **fester Code, kein Modell.** *Das ist der Kern des Richtungswechsels vom 23. Juli: Die Bewertung wurde einem Modell weggenommen und in Code gelegt.*

**Die Regel, die daraus folgt:** Eine Ebene darf nie aus einer anderen abgeleitet werden.

**Zwei belegte Verstösse gegen diese Regel:**

1. **Punkt F (bis v19.8.0).** Der Marktanspruch „beide treffen" wurde aus dem getippten Ergebnis **abgeleitet**, statt das Gehirn direkt zu fragen. Damit erzeugte Ebene 3 sich ihre eigene Ebene 2. Folge: 16 falsch bewertete Sonnet-Aussagen und ein Schnitt in der Messreihe.
2. **Die Positionsverschiebung (belegt am 13.8.).** Anpfiffzeit und Wettbewerb aus Ebene 1 wurden über die laufende Nummer an einen Spielnamen aus Ebene 2 geheftet. Weichen beide in Zahl oder Reihenfolge ab, hängt eine Ebene-1-Angabe am falschen Ebene-2-Eintrag.

**Was die Trennung leistet und was nicht (Art. 14):** Sie ordnet Fehler zu und macht sichtbar, welche Messung ein Fehler berührt und welche nicht — bei der Positionsverschiebung blieb Ebene 2 unversehrt, deshalb ist die Kalibrierungsmessung unversehrt. **Sie verhindert keinen Fehler.** Sie ist ein Prüfraster, kein Bauteil.

---

## 1c. Lernkette: der Evidence Ledger (Backlog-Punkt 75, Auftrag Ondo 11.9.2026)

*Die Lernkette ist am 6.7.2026 beschlossen, ihre Reihenfolge festgelegt: **Evidence Ledger** (warum wurde empfohlen) → **Decision Ledger** (was machte Ondo daraus) → **Observation Layer** (Muster erkennen). `STAND.md` hält seit v19.0 fest: „Der Evidence Ledger wird faktisch gefüllt." Dieser Abschnitt macht daraus eine formale Festlegung, statt es bei einer beiläufigen Tatsache zu belassen — kein neuer Code für die Sammlung selbst, die läuft bereits.*

**Der Evidence Ledger IST `state.kiProtokoll` (Einträge mit `aera:'v19'`).** Kein Parallelbau, keine zweite Struktur — Zwei-Probleme-Regel und Arbeitsregel „kein Schnitt in der Messreihe" verlangen, die bestehende, seit v19.0 laufende Sammlung zu benennen und zu vervollständigen, nicht zu verdoppeln.

**Schema, mit Zuordnung zu den drei Ebenen aus Abschnitt 1b.** Vollständig, nicht nur die wichtigsten Felder — die Liste ist am 11.9.2026 **maschinell aus `beta.html` ausgezählt** (alle Zuweisungen an einen Eintrag, nicht aus dem Gedächtnis zusammengestellt):

| Feld | Ebene | Bedeutung |
|---|---|---|
| `id`, `datum`, `codeVersion`, `aera` | — | Unveränderliche Kennung, wann und unter welchem Codestand die Aussage entstand |
| `match`, `wettbewerb`, `anpfiff`, `stufe` | 1 (Daten) | Was angesetzt war, aus der Spielliste |
| `herkunft`, `modell` | — | Welches Gehirn, unter welcher tatsächlichen Modellversion geantwortet hat |
| `heim`, `gast` (Tipp), `maerkte[].p`, `maerkte[].code`/`label`/`typ`, `maerkte[].gedreht`, `bttsWort`, `begruendung` | 2 (Denken) | Was das Gehirn für wahrscheinlich hielt und warum — die eigentliche „Evidence". `gedreht` hält fest, dass die eigens gefragte Prozentzahl der vom Tipp implizierten Seite widersprach (Backlog-Punkt 0b) |
| `ergebnisHeim`, `ergebnisGast` | 1 (Daten) | Der 90-Minuten-Stand. Das Einzige, was `pruefAnwenden()` beim Übernehmen an den Eintrag schreibt — und das Einzige, woran `marktUrteil()` die Märkte misst |
| `ergebnisHalbzeit`, `ergebnisVerl` | 1 (Daten) | Halbzeit- und Verlängerungsstand. **Werden vom Schiedsrichter geliefert, geprüft und vor dem Übernehmen angezeigt, beim Übernehmen aber verworfen** — `pruefAnwenden()` schreibt sie nicht. Dauerhaft gesetzt hat sie bisher allein die Migration `seedV<6`/`seedV<7`, und `seedV<8` hat auch die wieder entfernt. Sie überleben nur in `e.refRoh[…].geparst`. Offener Befund, siehe Backlog-Punkt 64, zweiter Fund |
| `ergebnisQuelle` | 1 (Daten) | Herkunft des Ergebnisses, wenn es **nicht** vom Schiedsrichter kam (`'extern_manuell'` bei Eintrag von Hand, Art. 14). Trägt zurzeit kein Eintrag mehr — `seedV<8` hat die zwei einzigen entfernt |
| `status`, `maerkte[].status` | 3 (Bewertung) | Traf die Behauptung zu — `offen` / `richtig` / `falsch`, am Eintrag `offen` / `bewertet` |
| `refRoh[]`, `refLaeufe`, `refQuellen`, `refEinigkeit` | 3 (Bewertung) | Wie sicher die Bewertung selbst ist: rohe Schiedsrichter-Antworten, Zahl der brauchbaren Läufe, Zahl **verschiedener** Quellen, und die Markierung „nicht einstimmig" (gesetzt nur bei 2-von-3, siehe `pruefAnwenden()`) |
| `geparkt`, `parkGrund`, `parkFormat` | 3 (Bewertung) | Bewertung bewusst ausgesetzt — kein Ergebnis übernommen, nichts bewertet |
| `maerkte[].fAlt`, `maerkte[].fKorr` | — | Ursprungswerte der einmaligen Berichtigung aus Backlog-Punkt F, damit sie umkehrbar bleibt |

**Warum diese Vermischung aller drei Ebenen in einem Datensatz Abschnitt 1b nicht widerspricht:** Die Regel dort verbietet, **eine Ebene aus einer anderen abzuleiten** (z. B. Ebene 2 aus Ebene 1 zu erschliessen, wie beim Punkt-F-Fehler). Sie verbietet nicht, alle drei **getrennt erhobenen** Werte im selben Protokolleintrag zu **speichern** — im Gegenteil, ein Ledger-Eintrag ist genau deshalb nützlich, weil er Behauptung, Tatsache und Bewertung nebeneinanderstellt, ohne sie zu vermengen. Jedes Feld bleibt einzeln seiner Quelle zurechenbar.

**Auflage für den noch nicht gebauten Observation Layer, festgehalten jetzt statt erst beim Bauen:** Er darf keine Lehre aus einem Eintrag ziehen, dessen Bewertung selbst unsicher ist. **Maschinell prüfbar an genau zwei bestehenden Feldern**, am 11.9.2026 am Code nachgesehen, nicht angenommen: `geparkt:true` (Bewertung bewusst ausgesetzt) und `refEinigkeit` gesetzt (`pruefAnwenden()` schreibt dieses Feld **nur** bei „2 von 3", bei Einstimmigkeit wird es gelöscht). Ein Muster, das aus einer unsicheren Bewertung gelernt würde, wäre selbst nur eine Vermutung mit Lehrsatz-Anstrich (Art. 14). Diese Auflage ist keine neue Wartezeit — sie gilt dem Bau der nächsten Stufe, nicht dieser.

**Was als Nächstes fehlt, nicht Teil dieser Festlegung:** Der **Decision Ledger** — was Ondo aus einer Empfehlung tatsächlich gemacht hat (Wette platziert, Höhe, Zeitpunkt) — existiert bisher nur lose über `state.bets`, ohne belegte Verknüpfung zu einem `kiProtokoll`-Eintrag. Der **Observation Layer** existiert noch gar nicht. Beide sind eigene, künftige Bauaufgaben (Backlog-Punkt 75, Teil 2 und 3), nicht durch diesen Abschnitt vorweggenommen.

---

## 1d. Trainingsraum — isolierte Testumgebung (Backlog-Punkt 77, Auftrag Ondo 12.9.2026)

*Ersatzvorschlag für das ruhende „Such-Experiment" (Punkt 3): Statt vier Wochen auf neue,
offene Spiele zu warten, testet der Trainingsraum die Gehirne an Spielen, deren Ergebnis
bereits bekannt ist — ohne dass sie darauf zugreifen können. Auftrag Ondo, wörtlich: „nicht
einfach Auftrag erledigen und fertig, sondern vorher wirklich durchdenken, absichern und
zukunftsfähig konzipieren." Dieser Abschnitt ist der durchdachte Plan; die Selbstkritik dazu
steht am Ende. Eine eigene Freigabe nach dem Plan ist laut Auftrag nicht mehr nötig.*

**Zweck:** Ein vom Live-Betrieb getrennter Testraum, in dem Sonnet, Flash und künftig weitere
Gehirne Spiele mit bereits bekanntem Ergebnis blind vorhersagen. Ergebnis liegt sofort vor
(kein Warten auf den Schiedsrichter) — mehr Kalibrierungs-/Entschlossenheits-Datenpunkte in
kürzerer Zeit, ohne die echte, laufende Messreihe (Abschnitt 1c) zu verändern.

**Grundprinzip: Wiederverwendung statt Parallelbau, wie schon in Abschnitt 1c.**
`vorhersageGehirn()` wird **unverändert** wiederverwendet — sie ruft heute schon beide Gehirne
**ohne Websuche** auf (belegt: `apiCall()` für Sonnet trägt kein `tools`-Feld; `geminiCall()`
hängt das Google-Suche-Werkzeug nur bei `opts.useSearch===true` an, laut eigenem Code-Kommentar
„NUR fuer den Schiedsrichter"). Der Trainingsraum ist damit ab dem ersten Tag genauso isoliert
wie eine echte Vorhersage — dafür musste nichts Neues gebaut werden. Nur die **Eingabe**
(welche Spiele) und die **Ablage** (wohin mit dem Ergebnis) sind neu.

**Zwei Wege zu einer gemeinsamen Struktur, beide von Anfang an vorgesehen (Ondo: „Weg (b)
müssen wir jetzt noch nicht aktiv nutzen, aber die Architektur soll ihn von Anfang an sauber
vorsehen").** Ein „Trainingsraum-Spiel" ist unabhängig vom Weg dieselbe Form:
`{quelle:'app'|'extern', match, wettbewerb, anpfiff, ergebnisHeim, ergebnisGast}`.

- **Weg (a) `quelle:'app'`:** Spiele aus `state.kiProtokoll`, gefiltert auf
  `status==='bewertet' && !geparkt && !refEinigkeit` — **dieselbe Auflage wie beim Observation
  Layer** (Abschnitt 1c, Absatz „Auflage") — plus `ergebnisHeim`/`ergebnisGast` gesetzt. Kein
  neuer Filter, nur eine zweite Anwendung eines bereits bestehenden, begründeten Massstabs.
- **Weg (b) `quelle:'extern'`:** öffentlich bekannte, historische Spiele, von Hand gepflegt
  (`state.trainingsraumSpiele`, analog zu den 13 gesperrten Referenz-Ergebnissen vom 29./30.7.,
  die als Muster für „von Hand gepflegte Prüfbibliothek" bereits existieren). **Kein
  automatischer Import, keine Websuche zum Sammeln** — das wäre selbst ein neuer Kostenpunkt
  und ein neues Risiko (siehe Selbstkritik). In v1 bleibt die Liste **leer**; die Datenstruktur
  steht, damit ein späteres Befüllen keine Schemaänderung braucht.

**Zulassungsregel gegen Trainingsdaten-Kontamination (für BEIDE Wege gleichermassen — Ondos
eigene Berichtigung: „Genauso wie bei Weg (b) musste das Gehirn hier nicht auf Erinnerung...
zurückgreifen können").** Ein Sprachmodell kann ein Ergebnis nur „kennen", wenn das Spiel vor
seinem Trainings-Stichtag lag. Der genaue Stichtag jeder eingesetzten Modellversion ist nicht
bekannt und wird nicht geraten (Art. 11) — stattdessen eine explizite, von Claude gepflegte
Zulassungstabelle:

```js
var TRAININGSRAUM_STICHTAG = {
  'claude-sonnet-4-6': null   // noch nicht geprueft -> gesperrt, siehe unten
  // Gemini-Modell-Literale wechseln haeufiger; hier je nach beobachtetem modelVersion ergaenzen
  // Werte im Format JJJJ-MM-TT (ISO) -- new Date() liest ein deutsches d.m.yyyy falsch
  // (new Date('1.9.2026') wird als 9. Januar gelesen, new Date('20.8.2026') als "Invalid
  // Date"), Fund beim Trockentest zu trainingsraumZugelassen(), noch vor der Auslieferung behoben.
};
```

Ein Modell-Literal ohne geprüftes Datum liefert **null zulässige Spiele** — sichtbar als „Stichtag
nicht geprüft" in der Anzeige, nicht als stillschweigend geratene Grenze. Das Nachtragen eines
echten Datums ist eine bewusste, belegte Handlung, kein Automatismus.

**Zweite Isolationsbedingung, aus Ondos eigener Formulierung abgeleitet und beim Selbstkritik-Schritt
präzisiert:** „Spiele … die noch nicht von den jeweiligen Gehirnen vorhergesagt wurden" gilt **je
Gehirn getrennt**. Grund, selbst gefunden, nicht von Ondo genannt: `vorhersageGehirn()` gibt jedem
Gehirn seine **letzten sechs eigenen Vorhersagen** als Kontext mit (`fruehere`, Filter
`aera==='v19' && herkunft===gehirn`, `.slice(0,6)`). Hätte dasselbe Gehirn das Testspiel bereits
beantwortet und stünde dieser Eintrag noch in diesem Fenster, könnte genau diese frühere Antwort
in `fruehere` auftauchen — ein konkretes Datenleck, kein theoretisches.
**🔴 Beim Trockentest korrigiert:** Eine erste Fassung schloss dafür **jedes** Spiel aus, zu dem
das Gehirn *jemals* einen Eintrag hat — live oder im Trainingsraum. Da `vorhersagen()` beide
Gehirne routinemässig gemeinsam auf dieselbe Spielliste ansetzt, wäre der Weg-(a)-Vorrat damit für
beide Gehirne fast immer leer gewesen — die von Ondo verlangte Zeitersparnis wäre grösstenteils
verpufft. Der eigentliche Leckweg ist enger: Nur die **exakt selben letzten sechs** Einträge
können über­haupt in `fruehere` auftauchen. Die Regel prüft deshalb **dasselbe Fenster** (dieselbe
Filterung, dieselbe Fensterbreite `.slice(0,6)`) statt „jemals" — ein Spiel ausserhalb dieses
Fensters kann über `fruehere` nicht mehr durchsickern, gleich ob es irgendwann live beantwortet
wurde. Zusätzlich bleibt ausgeschlossen, was für dieses Gehirn bereits **im Trainingsraum selbst**
getestet wurde (`trainingsraumProtokoll`), um keinen doppelten, nicht unabhängigen Testpunkt zu
zählen.

**Bewusst NICHT verändert, mit Begründung:** `fruehere` bleibt für Trainingsraum-Aufrufe
unverändert aktiv (die letzten sechs Vorhersagen **anderer** Spiele desselben Gehirns), ebenso
die Flash-spezifische Kalibrierungs-Koaching-Zeile. Beide verraten nichts über das Ergebnis des
Testspiels selbst — sie zu entfernen würde den Trainingsraum von der Live-Methodik entfernen und
die Vergleichbarkeit verschlechtern, die Ondo ausdrücklich verlangt („vergleichbar,
reproduzierbar"). Ein methodischer Kompromiss bleibt: Bei Weg (b) zeigt `fruehere` Einträge, die
zeitlich **nach** dem Testspiel liegen (Anachronismus, kein Ergebnis-Leck) — offen benannt in der
Selbstkritik, nicht verschwiegen.

**Ablage: eigenes Protokoll, keine Vermischung mit dem Evidence Ledger.**
`state.trainingsraumProtokoll` — ausdrücklich **nicht** `state.kiProtokoll`. Grund: `kiProtokoll`
speist `fruehere` (Kontext künftiger **echter** Vorhersagen), `calcKalibrierung()`,
`lernGrundlage()`, `beobachtungenBlock()`, `gepaartBlock()` — jede Vermischung würde die reale
Messreihe verändern, ohne dass Ondo das entschieden hätte (Arbeitsregel „kein Schnitt in der
Messreihe" gilt sinngemäss). Ein Trainingsraum-Eintrag ist strukturell einem
`kiProtokoll`-Eintrag nachgebildet (`match, wettbewerb, anpfiff, herkunft, heim, gast, modell,
maerkte, ergebnisHeim, ergebnisGast, status`), ergänzt um `quelle` und `getestetAm`. Da das
Ergebnis schon feststeht, wird `status` **sofort** auf `'bewertet'` gesetzt (`maerkteBauen()` und
`marktUrteil()` unverändert wiederverwendet) — kein Schiedsrichter-Schritt, das ist der
Zeitgewinn, den Ondo wollte.

**Auswertung, ebenfalls durch Wiederverwendung:** `trainingsraumGrundlage(quelle, typ)` ist die
Filterlogik von `lernGrundlage()`, angewandt auf `state.trainingsraumProtokoll` statt
`kiProtokoll`. Ihr Ergebnis läuft durch die **unveränderte** `lernAbweichung()` — dieselbe
Kennzahl (behauptet/echt/diff/n) wie die Live-Kalibrierung, direkt vergleichbar, weil aus
derselben Rechenfunktion.

**Ein zusätzlicher Fund beim Bauen, unabhängig von Ondos Auftrag: ein Wettlauf-Risiko in
`zuletztModell`.** `zuletztModell.gehirn` ist eine geteilte Variable, die `geminiCall()` bei
jeder Antwort überschreibt; bisher gibt es nur einen Aufrufer (`vorhersagen()`), daher folgenlos.
Mit dem Trainingsraum als zweitem, potenziell gleichzeitig laufendem Aufrufer wird daraus ein
echtes Risiko: Liefe ein Trainingsraum-Lauf parallel zu einer echten Vorhersage, könnte das
`modell`-Feld am falschen Protokoll landen. **Behoben, ohne die geteilte Variable anzufassen:**
`geminiCall()` liefert bereits `modelVersion` — ein von Google dokumentiertes, **je Aufruf
eigenes** Antwortfeld (seit der Nachfrage zu Punkt 64, 28.8.2026) — im Rückgabewert selbst.
`vorhersageGehirn()` liest ab jetzt dieses Feld statt der geteilten Variable; das behebt das
Risiko an der Wurzel und macht nebenbei auch die **echten** Live-Einträge genauer (die
tatsächlich aufgelöste Modellversion statt nur des zuletzt gewählten Alias). Zusätzlich verhindert
ein einfaches, geteiltes Sperr-Flag (`kiAnfrageAktiv`), dass ein Trainingsraum-Lauf startet,
während eine echte Vorhersage läuft, und umgekehrt — spart nebenbei Budget, weil nie zwei
Modell-Batches gleichzeitig nötig sind.

**Kosten (Arbeitsregel G):** Kein neuer, laufender Kostentyp — jeder Testlauf verbraucht dieselbe
Art Modellaufruf wie eine echte Vorhersage, aus demselben Budget. Weg (b) hat in v1 keine Kosten
(leere Liste). Bauzeit real, aber kein Dauerkostenpunkt.

**Erweiterbarkeit, wie von Ondo verlangt, ohne die aktuelle Lösung zu überkomplizieren:**
- *Weitere Gehirne:* brauchen einen eigenen Aufrufpfad wie Sonnet/Flash heute — ein grösserer
  Umbau (`GEHIRNE`-Registry statt fester `if(gehirn==='flash')`-Verzweigungen), **nicht Teil
  dieser Lieferung**. Die Trainingsraum-Datenstruktur selbst ist bereits Gehirn-agnostisch
  (`herkunft`-String + `modell`-Literal, keine feste Liste).
- *Weitere Datenquellen:* `quelle` ist ein offener String — ein dritter Wert braucht nur einen
  neuen Eintragstyp, keine Strukturänderung.
- *Weitere Messgrössen:* `trainingsraumGrundlage()`/`lernAbweichung()` sind bereits generisch
  über `typ` (Markttyp) parametrisiert — ein neuer Markt braucht keine neue Funktion.

**Selbstkritik (Schritt 3 des Auftrags, vor dem Bauen durchdacht):**
- *Liefert die Zulassungstabelle mit `null` nicht einfach „kein Trainingsraum"?* Ja, das ist
  beabsichtigt: lieber sichtbar null zulässige Spiele als eine geratene, möglicherweise falsche
  Grenze. Der Preis von Art. 11. Die echten Stichtage nachzutragen ist eine eigene, spätere,
  belegte Handlung.
- *Ist `state.trainingsraumProtokoll` Datenverdopplung?* Nein — es referenziert keine
  `kiProtokoll`-Einträge, sondern ist eine eigene Messreihe mit eigenem Zweck (Test statt
  Live-Betrieb). Die Trennung selbst ist das Sicherheitsmerkmal, keine Redundanz.
- *Wächst `state.trainingsraumProtokoll` unbegrenzt?* Ja, prinzipiell — aber IndexedDB
  (Backlog-Punkt 76) hat seit v19.8.30 grosszügigen Spielraum, und ein Trainingsraum-Eintrag ist
  kleiner als ein Live-Eintrag (kein `refRoh`, keine mehrfachen Schiedsrichter-Läufe). Kein
  Blocker für v1, als Beobachtungspunkt vermerkt.
- *Ist die „kein Eintrag dieses Gehirns zu diesem Spiel"-Regel zu streng und erschöpft den
  Weg-(a)-Vorrat zu schnell?* Möglich. Sicherer als das Alternativrisiko (Selbst-Erinnerung über
  `fruehere`). Kann später gelockert werden, falls der Vorrat zu klein wird — bewusste Wahl,
  nicht in Stein gemeisselt.
- *Warum kein automatischer Import für Weg (b)?* Ein automatischer Import bräuchte entweder
  Websuche (widerspricht der Isolation direkt) oder eine bezahlte externe Quelle (neuer,
  unbezifferter Kostenpunkt) — beides vermeidet die von Hand gepflegte Liste.
- *Soll `trainingsraumProtokoll` in den Messdaten-Export (`MESS_FELDER`, Backlog-Punkt 44)?* Ja
  — reine Messdaten ohne Geheimfelder, konsistent mit dem bestehenden Exportzweck.

**Was dadurch NICHT entschieden ist:** Die genauen Trainings-Stichtage der eingesetzten Modelle
(Tabelle bleibt bis zur Prüfung leer/gesperrt); ob und wann Weg (b) mit echten Einträgen befüllt
wird; ob ein N-Gehirne-Umbau (`GEHIRNE`-Registry) je gebaut wird.

---

## 2. Reasoning Engine — als "Prompt-Vertrag", nicht als Code

Ehrliche Architektenaussage: Die Denkarbeit (verstehen, analysieren, Gegenargumente) passiert **im LLM** — sie lässt sich nicht ohne LLM in JavaScript nachbauen. Was Ondo Core besitzen kann und soll, ist der **Vertrag**, der jedes LLM zwingt, nach unserem Prozess zu denken:

1. **Der Core baut die Anfrage:** Aufgabe + Pflichtprozess (Verständnis → Datenlage → Analyse → interner Kritiker → Risiko) + Pflicht-Ausgabeformat (JSON-Schema mit fakten / annahmen / gegenargumente / risiken / vertrauen / empfehlung).
2. **Das LLM liefert** in genau diesem Schema.
3. **Der Core prüft die Antwort maschinell:** Sind alle Pflichtfelder da? Sind Gegenargumente nicht leer? Ist ein Vertrauensgrad angegeben? → Wenn nein: automatische Nachforderung oder Ablehnung der Antwort.

Damit gehört der Denkprozess Ondo Control — egal welches Modell dahinter arbeitet. Ein neues Modell erbt den Prozess automatisch, weil der Vertrag ihn erzwingt.

**Denkmodi:** ChatGPT schlägt fünf vor (Schnell/Präzise/Wissenschaftlich/Kritisch/Kreativ). Empfehlung: **zwei zum Start** — "Schnell" und "Tiefenanalyse". Begründung: Jeder Modus ist ein eigener Prompt-Vertrag, der gepflegt und getestet werden muss; fünf ungetestete Modi sind schlechter als zwei bewiesene. Weitere Modi (inkl. ChatGPTs "Perspektiven"-Idee: finanziell/statistisch/strategisch/langfristig) sind im Design vorgesehen und werden nach Bewährung ergänzt. Perspektiven passen als Bestandteil der Tiefenanalyse.

---

## 3. Vertrauensanzeige — mit einem Artikel-14-Einwand

ChatGPTs Vorschlag "Vertrauen: 82 %" widerspricht in dieser Form **Artikel 14 der Verfassung** (keine Scheinüberlegenheit/Scheinpräzision): Eine KI kann ihr Vertrauen nicht auf den Prozentpunkt genau beziffern — "82 %" sieht wissenschaftlich aus, ist aber selbst eine Schätzung mit Unsicherheit.

**Gegenvorschlag:** Drei ehrliche Stufen — HOCH / MITTEL / NIEDRIG — plus die Begründungszeilen (die an ChatGPTs Vorschlag stark sind und übernommen werden):

```
Vertrauen: MITTEL
+ mehrere übereinstimmende Quellen
+ Quoten aktuell geprüft
− Aufstellung noch nicht bestätigt
− nur 1 Quelle zur Verletzung
```

Das liefert denselben Nutzen ohne falsche Präzision. Diskussionspunkt für ChatGPT.

---

## 4. Memory

Heute: IndexedDB (ein Gerät) — *bis 12.9.2026 localStorage, siehe Berichtigung unten.*
Architekturziel: eine **Memory-Schnittstelle** mit drei Operationen (lesen / schreiben /
auflisten), hinter der der Speicherort austauschbar ist:

- Stufe 1a (bis 12.9.2026): localStorage — feste, kleine Grenze je Browser/Website
  (belegt: Fehlschlag bei 2.726 KB auf Ondos iPhone, v19.8.29).
- **Stufe 1b (jetzt, v19.8.30, Backlog-Punkt 76):** IndexedDB — ein Anteil des freien
  Gerätespeichers statt einer festen Website-Grenze (belegt: 39.332 MB Grenze bei 0 %
  Belegung auf demselben Gerät). `speicherLesen()`/`speicherSchreiben()` fallen bei jedem
  Fehler auf `localStorage` zurück, dieselbe Stufe bleibt also als Sicherheitsnetz bestehen.
  Weiterhin ein einziges Gerät — Stufe 2/3 sind davon unberührt.
- Stufe 2: Export/Import als Datei (Backup + Gerätewechsel; auch Lösung für das iOS-Problem "getrennte Speicher Safari vs. Homescreen")
- Stufe 3 (bei Bedarf): Cloud-Sync (dann mit Verschlüsselung)

Inhaltstypen: Entscheidungen (mit Datum + Begründung), Erfahrungen (Wette → Ausgang → Lehre), Strategien (versioniert), Präferenzen. Versionierung: Jede Strategie-Änderung wird als neuer Eintrag angehängt, nie überschrieben — das ist ChatGPTs "kontrolliertes Lernen", technisch erzwungen.

---

## 5. Rule Engine

Regeln sind **Daten, nicht Code**: eine Liste von Regel-Objekten { id, text, typ, wert, aktiv }. Der Core prüft sie an zwei Stellen:

1. **Vor** jeder Brain-Anfrage (Regeln wandern in den Prompt-Vertrag: "max. Einsatz 20 €")
2. **Nach** jeder Antwort und vor jeder Aktion (Code-Prüfung: Einsatz > Limit → kappen; kritische Aktion → Freigabe-Dialog)

Heute existiert genau eine Regel (maxEinsatz) — hart verdrahtet, aber bereits an beiden Stellen durchgesetzt. Der Umbau zu einer Regel-Liste ist der natürliche nächste Schritt und ermöglicht die Vision "Regeln in normaler Sprache": Der Besitzer formuliert einen Satz, das Brain übersetzt ihn in ein Regel-Objekt, der Besitzer bestätigt, der Core setzt durch. (Wichtig: Durchsetzung im Code, nicht im Prompt allein — Prompts kann man überreden, Code nicht.)

---

## 6. Data Layer

Quellen-Register statt fest verdrahteter URLs:

```
QUELLEN = [
  { name: "Brain-Websuche",  typ: "llm",  vertrauen: hoch,   kosten: Cent },
  { name: "TheStatsAPI",     typ: "json", vertrauen: mittel, kosten: 0, rolle: "Fallback Spielplan" },
  { name: "openfootball",    typ: "json", vertrauen: mittel, kosten: 0, rolle: "Fallback 2" },
]
```

Der Core fragt Quellen in Vertrauens-/Kosten-Reihenfolge, kennzeichnet die Herkunft im Ergebnis und fällt bei Ausfall auf die nächste zurück. Ehrliche Anmerkung aus der Praxis (getestet 5.7.2026): Die kostenlosen JSON-Quellen liefern in der K.o.-Phase nur Platzhalter — die Brain-Websuche ist derzeit die einzige vollwertige Quelle. Das Register ändert daran nichts, macht aber den Ausfall-Fall sauber und dokumentiert die Grenze im System selbst.

---

## 7. Decision Layer

Jede Empfehlung, die den Besitzer erreicht, hat Pflichtfelder (vom Qualitäts-Check erzwungen): Empfehlung · Begründung · Chance · Risiko · Alternativen · Vertrauensstufe · Quellenlage. Fehlt ein Feld, wird die Antwort nicht angezeigt, sondern nachgefordert. Das ist ChatGPTs Qualitätscheckliste — nicht als Vorsatz, sondern als Türsteher im Code.

---

## 8. Migrationsplan (kein Neuanfang — Überführung)

Beschluss beider Architekten: auf dem Prototyp aufbauen. Reihenfolge, jede Stufe einzeln testbar:

1. **v14:** apiCall → askBrain mit Provider-Register (Anthropic als Provider #1). Risiko: klein. Nutzen: Tür zur Modellunabhängigkeit steht.
2. **v15:** Antwort-Schema + maschineller Qualitäts-Check + Vertrauensstufen in der Analyse-Ausgabe.
3. **v16:** Regel-Liste statt Einzelregel; Freigabe-Dialog für kritische Aktionen.
4. **v17:** Memory-Export/Import (löst nebenbei Backup + iOS-Doppelspeicher).
5. **später:** zweiter Provider (OpenAI) als Beweis der Austauschbarkeit; Datei-Aufteilung erst, wenn die Einzeldatei unhandlich wird (gemeinsamer Beschluss).

Pro Version: bauen → maschinell prüfen → vom Besitzer real testen → erst dann weiter. ("Verbesserung vor Perfektion" — ChatGPTs Prinzip 3, übernommen.)

---

## 9. Zu ChatGPTs drei Grundprinzipien

"Wahrheit vor Geschwindigkeit" · "Verständnis vor Antwort" · "Verbesserung vor Perfektion" — **übernommen.** Sie decken sich mit Verfassung Art. 1, 6, 13/14 und werden als Präambel-Ergänzung ins Blueprint aufgenommen.

## 10. Offene Diskussionspunkte an ChatGPT

1. Vertrauens-**Stufen** statt Prozent (Artikel-14-Argument, Abschnitt 3) — einverstanden?
2. **Zwei** Denkmodi zum Start statt fünf (Test-Disziplin-Argument, Abschnitt 2) — einverstanden?
3. Reasoning als **Prompt-Vertrag + maschinelle Schema-Prüfung** statt "echte" Denk-Engine im Code (ehrliche Grenze, Abschnitt 2) — trägt diese Umsetzung deine Vision, oder siehst du einen robusteren Weg, der ohne Server auskommt?
