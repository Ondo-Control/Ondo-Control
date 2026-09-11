# ONDO CORE v1 — Architektur-Entwurf
*Antwort auf die Architektur-Anfrage von ChatGPT (5.7.2026). Autor: Claude. Status: Entwurf zur gemeinsamen Prüfung.*
*Fassung 0.4 — 13.8.2026, 16:32 Uhr: Abschnitt 1b „Drei-Ebenen-Trennung" ergänzt (Backlog-Punkt 6, beschlossen am 23.7., 21 Tage offen).*
*Fassung 0.5 — 11.9.2026: Abschnitt 1c „Lernkette: der Evidence Ledger" ergänzt (Backlog-Punkt 75, Auftrag Ondo 11.9.2026).*
*Fassung 0.6 — 11.9.2026: Schema in Abschnitt 1c vervollständigt und die Auflage an den Observation Layer auf die zwei tatsächlichen Felder festgenagelt — bei Ondos Nachprüfung fiel auf, dass die als „Schema" bezeichnete Tabelle in Fassung 0.5 mehrere real vorhandene Felder nicht nannte (`ergebnisHalbzeit`, `ergebnisVerl`, `ergebnisQuelle`, `bttsWort`, `refLaeufe`, `refQuellen`, `parkFormat`, `maerkte[].fAlt`/`fKorr`). Jetzt maschinell aus `beta.html` ausgezählt statt aus dem Gedächtnis geschrieben.*
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
| `ergebnisHeim`, `ergebnisGast`, `ergebnisHalbzeit`, `ergebnisVerl` | 1 (Daten) | Was wirklich geschah, vom Schiedsrichter nachgetragen |
| `ergebnisQuelle` | 1 (Daten) | Herkunft des Ergebnisses, wenn es **nicht** vom Schiedsrichter kam (`'extern_manuell'` bei Eintrag von Hand, Art. 14) |
| `status`, `maerkte[].status` | 3 (Bewertung) | Traf die Behauptung zu — `offen` / `richtig` / `falsch`, am Eintrag `offen` / `bewertet` |
| `refRoh[]`, `refLaeufe`, `refQuellen`, `refEinigkeit` | 3 (Bewertung) | Wie sicher die Bewertung selbst ist: rohe Schiedsrichter-Antworten, Zahl der brauchbaren Läufe, Zahl **verschiedener** Quellen, und die Markierung „nicht einstimmig" (gesetzt nur bei 2-von-3, siehe `pruefAnwenden()`) |
| `geparkt`, `parkGrund`, `parkFormat` | 3 (Bewertung) | Bewertung bewusst ausgesetzt — kein Ergebnis übernommen, nichts bewertet |
| `maerkte[].fAlt`, `maerkte[].fKorr` | — | Ursprungswerte der einmaligen Berichtigung aus Backlog-Punkt F, damit sie umkehrbar bleibt |

**Warum diese Vermischung aller drei Ebenen in einem Datensatz Abschnitt 1b nicht widerspricht:** Die Regel dort verbietet, **eine Ebene aus einer anderen abzuleiten** (z. B. Ebene 2 aus Ebene 1 zu erschliessen, wie beim Punkt-F-Fehler). Sie verbietet nicht, alle drei **getrennt erhobenen** Werte im selben Protokolleintrag zu **speichern** — im Gegenteil, ein Ledger-Eintrag ist genau deshalb nützlich, weil er Behauptung, Tatsache und Bewertung nebeneinanderstellt, ohne sie zu vermengen. Jedes Feld bleibt einzeln seiner Quelle zurechenbar.

**Auflage für den noch nicht gebauten Observation Layer, festgehalten jetzt statt erst beim Bauen:** Er darf keine Lehre aus einem Eintrag ziehen, dessen Bewertung selbst unsicher ist. **Maschinell prüfbar an genau zwei bestehenden Feldern**, am 11.9.2026 am Code nachgesehen, nicht angenommen: `geparkt:true` (Bewertung bewusst ausgesetzt) und `refEinigkeit` gesetzt (`pruefAnwenden()` schreibt dieses Feld **nur** bei „2 von 3", bei Einstimmigkeit wird es gelöscht). Ein Muster, das aus einer unsicheren Bewertung gelernt würde, wäre selbst nur eine Vermutung mit Lehrsatz-Anstrich (Art. 14). Diese Auflage ist keine neue Wartezeit — sie gilt dem Bau der nächsten Stufe, nicht dieser.

**Was als Nächstes fehlt, nicht Teil dieser Festlegung:** Der **Decision Ledger** — was Ondo aus einer Empfehlung tatsächlich gemacht hat (Wette platziert, Höhe, Zeitpunkt) — existiert bisher nur lose über `state.bets`, ohne belegte Verknüpfung zu einem `kiProtokoll`-Eintrag. Der **Observation Layer** existiert noch gar nicht. Beide sind eigene, künftige Bauaufgaben (Backlog-Punkt 75, Teil 2 und 3), nicht durch diesen Abschnitt vorweggenommen.

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

Heute: localStorage (ein Gerät). Architekturziel: eine **Memory-Schnittstelle** mit drei Operationen (lesen / schreiben / auflisten), hinter der der Speicherort austauschbar ist:

- Stufe 1 (jetzt): localStorage
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
