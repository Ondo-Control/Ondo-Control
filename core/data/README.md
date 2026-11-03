# Core Stufe 1 – Datenfundament

Dieser Ordner ist **nicht** der App-State und wird nicht in IndexedDB geladen. Er bildet eine
quellenneutrale Datenebene fuer spaetere Core-Modelle.

## Quellen

- **OpenFootball / football.json** – CC0-1.0 (Public Domain). Der Workflow checkt das oeffentliche
  Repository separat aus und protokolliert den verwendeten Upstream-Commit in `generated/coverage.json`.
- **ESPN-Archiv** – ausschliesslich die bereits im ONDO-Control-Repository gesammelten Dateien unter
  `daten/espn-ergebnisse/`. Keine neuen ESPN-Netzaufrufe in diesem Datenfundament.
- **football-data.co.uk wird hier nicht abgerufen oder verwendet.**

## Harte Grenzen dieser Stufe

Kein Modell, kein Backtest, keine Quoten, keine LLM-Aufrufe, keine Schluessel, keine privaten Daten.
Ausgabedateien unter `generated/` bleiben jeweils unter 250 KB. Rohdaten werden nicht dupliziert.

`team-aliases.json` ist eine explizite, nachvollziehbare Quellen-Kanonisierung. Neue unbekannte Namen
werden im Coverage-Bericht als `unresolved` sichtbar statt unscharf geraten.
