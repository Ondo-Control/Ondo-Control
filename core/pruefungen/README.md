# Pruefungen des Lernverfahrens (einmalig, nicht im Tageslauf)

`gb_export.js` schreibt die Lagen-Zeilen als CSV, `gb_vergleich.py` rechnet darauf ein einfaches Verfahren und Gradient Boosting
auf derselben Aufteilung (lernen/pruefen, Spiele vor dem Stichtag, ohne Aufstellungsmerkmale). Ergebnis 16.11.2026 (Log-Loss auf Pruefspielen):
nur K6-Grundzahlen 1,0267 · alle Merkmale einfach 1,0252 · Gradient Boosting 1,0274 und 1,0272 (lr 0,05/300 Iter. und lr 0,03/600 Iter.).
Aufruf: `node gb_export.js rows.csv && python3 -I gb_vergleich.py` (im Ordner der CSV). Die CSV selbst gehoert nicht ins Repo.
Der Lerntest mit versteckter Regel steht in `tests/t22_lerntest_versteckt.js`.
