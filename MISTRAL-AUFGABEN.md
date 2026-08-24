# Offene Aufgaben fuer Mistral
*Gepflegt von Claude. Mistral aendert diese Datei nicht.*

## Aufgabe 2 — Selbsttest fuer beta.html (Backlog-Punkt 47)

Ziel: ein Pruefskript, das beta.html auf drei Arten prueft, bevor eine
Codelieferung als sauber gilt.

1. SYNTAXPRUEFUNG: Extrahiere den JavaScript-Inhalt aus beta.html und
   pruefe ihn mit "node --check" (oder gleichwertig) auf Syntaxfehler.

2. SPRACHSCHLUESSEL-ABGLEICH: Finde die drei Sprachobjekte (DE, FR,
   EN) in beta.html. Vergleiche die Menge der Schluessel in allen
   drei. Melde jeden Schluessel, der nicht in allen drei vorkommt.

3. FESTE RECHENPROBEN: Finde in beta.html die Funktion(en), die aus
   einem Spielergebnis die drei Marktbewertungen ableiten (Sieger,
   Ueber/Unter 2,5 Tore, Beide Teams treffen). Pruefe sie gegen zwei
   von Hand nachvollziehbare Faelle:

   Fall A — Endstand 2:1 (Heimsieg):
     Sieger = Heim, Ueber/Unter = Ueber (3 Tore gesamt),
     Beide treffen = Ja

   Fall B — Endstand 0:0 (Unentschieden):
     Sieger = Unentschieden, Ueber/Unter = Unter (0 Tore),
     Beide treffen = Nein

   Weicht ein berechnetes Ergebnis vom erwarteten ab: das woertlich
   melden, nicht stillschweigend uebergehen.

Baue das Skript so, dass es eigenstaendig lauffaehig ist (z.B.
selbsttest.py oder aehnlich), NICHT nur als Beschreibung. Fuehre es
einmal aus und melde die vollstaendige Ausgabe.

WICHTIG: main NICHT anfassen, keine Aenderung an beta.html selbst -
nur ein neues, separates Pruefskript auf dem Branch "mistral". Findet
das Skript einen echten Fehler in beta.html: melden, nicht selbst
reparieren.

Trage das Ergebnis wie gewohnt vollstaendig in MISTRAL-ERLEDIGT.md
ein.
