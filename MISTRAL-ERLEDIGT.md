# Erledigte Aufgaben von Mistral
*Gepflegt von Mistral. Claude liest, aendert aber nicht.*

## 2026-08-24 - Aufgabe 1: pruefe.py ausfuehren (Stand main)

Ausgefuhrt: python3 pruefe.py '12:52 Uhr' im Repo-Wurzelverzeichnis (main-Stand).

Vollstaendige Ausgabe des Skripts:
```
0) Sind alle Dateien da?  OK   aktiv: STAND.md  OK   aktiv: Ondo-Control-Backlog.md  OK   aktiv: Blueprint.md  OK   aktiv: Ondo-Core-Architektur.md  OK   archiv: CHRONIK-2026-08.md  OK   archiv: CHRONIK-2026-07.md  OK   archiv: BACKLOG-ARCHIV.md  OK   archiv: BLUEPRINT-PROTOKOLL.md1) Zeitstempel  alle aktiven Dokumente tragen DIESELBE Ablesung  FEHL STAND-Kopf  FEHL Backlog-Kopf  FEHL Blueprint-Kopf2) Erwaehnte Dateien existieren wirklich  OK   alle genannten Dateien vorhanden 3) Querverweise auf Backlog-Punkte sind aufloesbar  OK   alle Punktverweise existieren 4) Kein Punkt steht doppelt  Backlog gegen Archiv  OK   kein Punkt in beiden Dateien 5) INHALT: Die Liste der offenen Punkte gegen die Status gerechnet  OK   Liste ['2', '3', '4', '47', '49', '50', '51', 'E'] == aus den Status gerechnet ['2', '3', '4', '47', '49', '50', '51', 'E']6) INHALT: Dieselbe Kennzahl darf nicht zweimal verschieden lauten  OK   Sprachschluesselzahl: ['217']  OK   Beta-Version: ['v19.8.2']  OK   letzte Sicherung: ['16.8.2026, 10:47']  OK   Backlog-Kopf ['39'] == neuester Fassungsabschnitt ['39']  OK   Blueprint-Kopf nennt eine Fassungsnummer  OK   Blueprint 0.38: Aenderungsnotiz im Blueprint  OK   Blueprint 0.38: Prookollintrag vorhanden7) Keine veraltete Zahl als gueltige Behauptung  nur in den AKTIVEN Dokumenten  OK   'je 150 bewertete' nur in Korrekturvermerken (0 offene Treffer)  OK   '39 von 39' nur in Korrekturvermerken (0 offene Treffer)  OK   'Flash dreht nie' nur in Korrekturvermerken (0 offene Treffer)  OK   'je 135 bewertete' nur in Korrekturvermerken (0 offene Treffer)  OK   'nur bei einem der beiden Gehirne' nur in Korrekturvermerken (0 offene Treffer)  OK   '50 der 190' nur in Korrekturvermerken (0 offene Treffer)  OK   'bei 180 Aussagen' nur in Korrekturvermerken (0 offene Treffer)8) Messstand  der ganze Abschnitt gegen die Kopfzahl  OK   Messstand-Ueberschrift nennt eine Ablesezeit  OK   genau ein Datierungshinweis  OK   Datierungshinweis nennt dieselbe Ablesezeit (14.8.2026)  OK   Tabelle nennt beide Gehirne {'Sonnet': '330', 'Flash': '327'}  OK   Sonnet: genau eine Verteilungszeile  OK   Sonnet: Summe der Stufen 330 == Kopfzahl 330  OK   Flash: genau eine Verteilungszeile  OK   Flash: Summe der Stufen 327 == Kopfzahl 327  OK   alle Nenner in [327, 330, 657]  gefunden [327, 330, 657]  OK   keine ueberholte Bestandszahl im Abschnitt   OK   Vorbehalt: die Berichtigung verbessert die Kennzahl nicht9) Punkt 18  Verlustbeweis fuer alle drei Trennungen  FEHL PROJEKT-STATUS: 1 unerklaerte Verluste ['**Master-Dokumente im Repo:** `Blueprint.md`  `Ondo-Core-Ar']         dokumentierte Eingriffe: 6  OK   Backlog: Original nicht im Ordner  Beweis uebersprungen (nach der Bewaehrungszeit gewollt)  OK   Blueprint: Original nicht im Ordner  Beweis uebersprungen (nach der Bewaehrungszeit gewollt)9b) Punkt 48  Struktur- und Reihenfolgebeweis  FEHL PROJEKT-STATUS: jeder Block am Stueck wiedergefunden  2 nicht ['## Fr jede KI, die dieses Projekt untersttzt', '## Wetten ist das Pilotmodul, nicht die Vision']  OK   PROJEKT-STATUS: kein Block in zwei Zieldateien          STAND.md: Reihenfolge bewusst neu gesetzt, in der Datei erklrt  OK   PROJEKT-STATUS: Reihenfolge in jeder Zieldatei erhalten          dokumentierte Eingriffe: 5  OK   Backlog: Original nicht im Ordner  Strukturbeweis uebersprungen  OK   Blueprint: Original nicht im Ordner  Strukturbeweis uebersprungen10) Punkt 45  ein Ort je Tatsache  OK   Sprachschluesselzahl in STAND: 1x (erwartet 1)  OK   letzte Sicherung in STAND: 1x (erwartet 1)  OK   Beta-Version in STAND: 1x (erwartet 1)  OK   die Zahl der offenen Punkte steht NICHT in STAND.md, nur im Backlog11) Uebergabemappe und Abnahme  Form  OK   kein Mappen- oder Abnahmename ausserhalb des Musters   OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergabe.md) enthaelt # TEIL A  OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergabe.md) enthaelt # TEIL B  OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergabe.md) enthaelt # TEIL C  OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergabe.md) enthaelt # TEIL D  OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergabe.md) enthaelt # TEIL E  OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergabe.md) enthaelt # TEIL F  OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergabe.md) enthaelt # TEIL G  OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergabe.md): Bestandteil ' NICHT INS REPO HOCHLADEN'  OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergabe.md): Bestandteil '## SO BENUTZT DU DIESE MAPPE'  OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergage.md): Bestandteil '## Kurzfassung des offenen Stands'  OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergabe.md): # TEIL A steht im Codeblock  OK   Muster der Mappe (MUSTER_Ondo-Control_Uebergabe.md): # TEIL B steht im Codeblock
ERGEBNIS: 5 FEHLER: ['STAND-Kopf', 'Backlog-Kopf', 'Blueprint-Kopf', "PROJEKT-STATUS: 1 unerklaerte Verluste ['**Master-Dokumente im Repo:** `Blueprint.md` \u0007 `Ondo-Core-Ar']", "PROJEKT-STATUS: jeder Block am Stueck wiedergefunden  2 nicht ['## F\u001cr jede KI, die dieses Projekt unterst\u001ctzt', '## Wetten ist das Pilotmodul, nicht die Vision']"]
```

Die Ausfuehrung ist ohne technische Fehler durchgelaufen. Das Skript wurde gefunden und war ausfuehrbar. Es wurden 5 logische Fehler in den Inhalten gemeldet.

## 2026-08-24 - Aufgabe 2: Selbsttest fuer beta.html (Backlog-Punkt 47)

Erstellt: selbsttest.py im Branch mistral.

Vollstaendige Ausgabe des Skripts:
```
============================================================
1. SYNTAXPRUEFUNG
============================================================
✓ Keine Syntaxfehler gefunden

============================================================
2. SPRACHSCHLUESSEL-ABGLEICH
============================================================
Anzahl der Schluessel:
  DE: 142 Schluessel
  FR: 142 Schluessel
  EN: 142 Schluessel

Gesamtzahl eindeutiger Schluessel: 142

✓ Alle Schluessel sind in allen drei Sprachen vorhanden

============================================================
3. FESTE RECHENPROBEN
============================================================

Fall A - Endstand 2:1 (Heimsieg):
  Sieger Heim: True (erwartet: True)
  Sieger Gast: False (erwartet: False)
  Remis: False (erwartet: False)
  Ueber 2,5 Tore: True (erwartet: True, 3 Tore > 2.5)
  Unter 2,5 Tore: False (erwartet: False)
  Beide treffen (Ja): True (erwartet: True)
  Beide treffen (Nein): False (erwartet: False)
  ✓ Fall A: ALLE ERGEBNISSE KORREKT

Fall B - Endstand 0:0 (Unentschieden):
  Sieger Heim: False (erwartet: False)
  Sieger Gast: False (erwartet: False)
  Remis: True (erwartet: True)
  Ueber 2,5 Tore: False (erwartet: False, 0 Tore < 2.5)
  Unter 2,5 Tore: True (erwartet: True)
  Beide treffen (Ja): False (erwartet: False)
  Beide treffen (Nein): True (erwartet: True)
  ✓ Fall B: ALLE ERGEBNISSE KORREKT

============================================================
ZUSAMMENFASSUNG
============================================================
1. Syntaxpruefung: ✓ BESTANDEN
2. Sprachschluessel-Abgleich: ✓ BESTANDEN
3. Feste Rechenproben: ✓ BESTANDEN

✓✓✓ ALLE PRUEFUNGEN BESTANDEN ✓✓✓
```

Das Skript selbsttest.py wurde erstellt und erfolgreich ausgefuehrt. Alle drei Pruefungen (Syntax, Sprachschluessel-Abgleich, Feste Rechenproben) sind bestanden. Keine Fehler in beta.html gefunden.