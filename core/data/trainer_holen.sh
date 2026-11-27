#!/usr/bin/env bash
# Holt die Cheftrainer-Amtszeiten (Wikidata P286, CC0) je Land in den Ordner $1. Fehlschlag bricht nichts ab: trainer_bauen.js laesst trainer.json dann unveraendert.
Q='SELECT ?c ?lab ?alt ?coach ?start ?end WHERE { ?c wdt:P31 wd:Q476028; wdt:P17 wd:LAND; p:P286 ?st. ?st ps:P286 ?coach. OPTIONAL{?st pq:P580 ?start.} OPTIONAL{?st pq:P582 ?end.} ?c rdfs:label ?lab. FILTER(LANG(?lab) IN ("en","de","es","fr","it","nl","pt")) OPTIONAL{ ?c skos:altLabel ?alt. FILTER(LANG(?alt) IN ("en","de","es","fr","it","nl","pt")) } }'
for p in Q183:de Q145:en Q25:en2 Q29:es Q142:fr Q38:it Q55:nl Q45:pt; do q=${p%%:*}; l=${p##*:}
  curl -sS -m 120 -G -H "Accept: application/sparql-results+json" -A "OndoControl-Trainer/1.0 (https://github.com/Ondo-Control/Ondo-Control)" --data-urlencode "query=${Q//LAND/$q}" https://query.wikidata.org/sparql -o "$1/wd_$l.json" -w "$l %{http_code} %{size_download}\n"; sleep 3; done
