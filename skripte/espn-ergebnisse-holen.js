/* ================= ESPN-ERGEBNISSE HOLEN (Backlog-Punkt 84, Auftrag Ondo 18.9.2026)
   "ESPN-Sammelautomatik" — GANZ GETRENNT von skripte/schiri-ergebnisse-holen.js/
   daten/schiri-ergebnisse/ (Ondos ausdrueckliche Vorgabe: nicht vermischen). Laeuft ueber
   .github/workflows/espn-ergebnisse.yml, ausserhalb der App, und schreibt in eine eigene
   Monatsdatei unter daten/espn-ergebnisse/. Die App selbst liest diese Dateien nur (siehe
   espnArchivLesen() in beta.html) - schreibt NIE selbst ins Repo (Ondos Entscheidung vom
   13.9.2026, Backlog-Punkt 81, weiterhin gueltig, gilt hier unveraendert).

   SCHRITT 0 (Live-Verifikation, 18.9.2026, VOR diesem Skript durchgefuehrt):
   1. ESPN-Discovery-Endpunkt gefunden und live abgerufen:
      https://sports.core.api.espn.com/v2/sports/soccer/leagues?limit=1000 - liefert 219
      tatsaechlich bei ESPN gefuehrte Liga-Slugs (kein Raten auf Vorrat).
   2. soccer/all/scoreboard live geprueft (16.8.2025 und andere Tage): liefert KEIN
      vollstaendiges "alle Wettbewerbe"-Bild, sondern eine harte Obergrenze von 100 Ereignissen
      ohne Seitennummerierung, mit einer erkennbaren US-Schlagseite (MLS, Liga MX, sogar
      US-Unterligen wie USL) - deutsche Bundesliga-Spiele desselben Tages fehlten komplett,
      obwohl sie stattfanden. FALL B: dieser Sammelendpunkt ist NICHT ausreichend, die
      bestehende, bereits verifizierte Slug-fuer-Slug-Abfrage (wie espnLauf() in beta.html)
      bleibt der Weg, hier nur als taeglich laufende Automatik statt Live-Aufruf.
   3. Jeder unten verwendete Slug wurde live gegen echte scoreboard-Antworten geprueft
      (HTTP 200 vs. 400, siehe VERIFIED_SLUGS unten fuer das Ergebnis je Gruppe). Getestet an
      zwei echten Tagen (6.9.2026 und 13.9.2026 UTC-Datumswerte 20250906/20250913 -
      Laenderspielfenster bzw. normales Ligawochenende). Alle 59 unten gelisteten Slugs lieferten
      HTTP 200 (existierender, von ESPN erkannter Slug) - Cup-Wettbewerbe zeigten an diesen Tagen
      teils 0 Spiele (Cups laufen nicht woechentlich), das ist normal und kein Fehlschlag.
   4. STUFEN-Abdeckungsluecken, ehrlich benannt (Art. 11, nichts geraten): ESPNs
      Discovery-Liste kennt KEINEN Slug fuer Schweiz, Tschechien, Polen, Kroatien (komplett
      fehlend - kein sui./cze./pol./cro.-Praefix unter 219 Slugs). Portugal und Belgien haben
      nur die 1. Liga (kein por.2/bel.2 auffindbar), Oesterreich/Tuerkei/Griechenland nur die
      1. Liga (keine 2. Liga, kein Pokal-Slug auffindbar), Schottland hat keinen eindeutigen
      "Scottish Cup"-Slug (nur sco.tennents/sco.cis, historische Sponsorennamen des LIGA-Pokals).
      Bei den "Laenderspielen" (Scope aus schiri-ergebnisse-holen.js API_FOOTBALL_LIGEN
      abgeleitet, nicht neu erfunden): keine eigene Asian-Cup-Qualifikation gefunden (nur
      afc.asian.cup selbst). Bei den 12 genannten Stufe-2-Wettbewerben: Finnland, Irland,
      Island, Suedkorea fehlen komplett (kein fin./irl./isl./kor.-Praefix). Ein Wettbewerb aus
      dieser Luecke faellt wie bisher ohne Zeitverlust an den KI-Notnagel - dieselbe
      Negativlisten-Disziplin wie bei espnSlugFuer()/ESPN_SLUG_REGELN in beta.html.

   ZEITFENSTER: "gestern" und "heute" (UTC) je Lauf - dieselbe Begruendung wie in
   skripte/schiri-ergebnisse-holen.js (spaeteste Spiele der US-Westkueste erst am naechsten
   Morgen sicher abgepfiffen). Cron-Zeiten im Workflow-Kopf bewusst identisch zur bestehenden
   Automatik (08:00 + 23:30 UTC) - dieselbe, bereits begruendete Zeitwahl wiederverwendet statt
   neu erfunden: 08:00 UTC holt "gestern" vollstaendig nach, 23:30 UTC erfasst europaeische
   Abendspiele mit Verlaengerung/Elfmeterschiessen noch am selben Tag.

   KEIN EIGENES ELFMETER-FELD: torHeim/torGast sind immer der 90-Minuten-Stand (linescores[0]+[1],
   identische Formel wie espnLauf() in beta.html), verlaengerung (falls gespielt) der Stand nach
   Verlaengerung (linescores[0..3]) - das Elfmeterergebnis wird NIE gelesen und NIE gespeichert,
   exakt wie bei espnLauf(). Keine neuen Felder elfmeterGespielt/elfmeter (Ondos ausdrueckliches
   Verbot).

   BEGRENZTE GLEICHZEITIGKEIT: Alle HTTP-Aufrufe laufen NACHEINANDER (kein Promise.all ueber
   Dutzende Abfragen), mit einer kleinen Pause zwischen den Aufrufen - kein Retry-Sturm, keine
   automatischen Wiederholungsversuche bei Fehlern (ein einzelner Fehlschlag ergibt fuer diesen
   einen Aufruf einfach kein Ergebnis, der Lauf laeuft weiter). */

const fs = require('fs');
const path = require('path');

const ZIELORDNER = path.join(__dirname, '..', 'daten', 'espn-ergebnisse');
const PAUSE_MS = 150;

/* Slug-Liste, live verifiziert (Schritt 0, siehe Kopf-Kommentar). Jede Gruppe entspricht einem
   Abschnitt aus Ondos Auftrag. "_TEILWEISE" markiert Laender, bei denen ESPN nachweislich nur
   einen Teil des STUFEN-Bereichs (1. Liga, kein Pokal/keine 2. Liga) fuehrt - siehe Luecken oben. */
var VERIFIED_SLUGS = [
  // Stufe 1 — vollstaendig (1./2. Liga + Pokal von ESPN gefuehrt)
  'eng.1','eng.2','eng.fa',
  'ger.1','ger.2','ger.dfb_pokal',
  'esp.1','esp.2','esp.copa_del_rey',
  'ita.1','ita.2','ita.coppa_italia',
  'fra.1','fra.2','fra.coupe_de_france',
  'ned.1','ned.2','ned.cup',
  // Stufe 1 — TEILWEISE (nur 1. Liga bei ESPN auffindbar, siehe Luecken oben)
  'por.1','bel.1','sco.1','sco.2','aut.1','tur.1','gre.1',
  // UEFA — 3 Hauptwettbewerbe + Qualifikation
  'uefa.champions','uefa.champions_qual',
  'uefa.europa','uefa.europa_qual',
  'uefa.europa.conf','uefa.europa.conf_qual',
  // Laenderspiele (Scope aus schiri-ergebnisse-holen.js API_FOOTBALL_LIGEN abgeleitet)
  'fifa.world','fifa.worldq.uefa','fifa.worldq.afc','fifa.worldq.caf',
  'fifa.worldq.concacaf','fifa.worldq.conmebol','fifa.worldq.ofc',
  'uefa.euro','uefa.euroq',
  'caf.nations','caf.nations_qual',
  'conmebol.america',
  'concacaf.gold','concacaf.gold_qual',
  'fifa.friendly',
  'uefa.nations','concacaf.nations.league',
  'afc.asian.cup',
  // Stufe 2 — die 12 in API_FOOTBALL_LIGEN genannten Wettbewerbe (Finnland/Irland/Island/
  // Suedkorea fehlen bei ESPN, siehe Luecken oben)
  'usa.1','usa.open','bra.1','bra.2','arg.1','nor.1','swe.1','den.1','jpn.1',
  // Stufe 3 — Testspiele auf Vereinsebene
  'club.friendly'
];

function heuteUtc(offsetTage){
  var d = new Date();
  d.setUTCDate(d.getUTCDate() + offsetTage);
  return d.toISOString().slice(0,10).replace(/-/g,''); // JJJJMMTT
}

function pause(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }

/* Reine Funktionen, wortgleich mit der Formel aus espnLauf() (beta.html) uebernommen - der
   90-Minuten-Stand ist IMMER nur linescores[0]+[1], unabhaengig von der Gesamtlaenge des
   Arrays (Elfmeter-/Verlaengerungs-Sicherheit, siehe Kopf-Kommentar bei espnLauf()). */
function linescoreZahl(ls, i){
  var e = (ls||[])[i];
  var n = e ? Number(e.displayValue) : NaN;
  return isNaN(n) ? 0 : n;
}

async function scoreboardHolen(slug, ymd){
  var url = 'https://site.web.api.espn.com/apis/site/v2/sports/soccer/'+slug+'/scoreboard?dates='+ymd;
  try{
    var res = await fetch(url);
    if(!res.ok) return [];
    var d = await res.json();
    return Array.isArray(d.events) ? d.events : [];
  }catch(e){
    console.error('scoreboard fehlgeschlagen ('+slug+' '+ymd+'):', e.message);
    return [];
  }
}

async function summaryHolen(slug, eventId){
  var url = 'https://site.web.api.espn.com/apis/site/v2/sports/soccer/'+slug+'/summary?event='+eventId;
  try{
    var res = await fetch(url);
    if(!res.ok) return null;
    return await res.json();
  }catch(e){
    console.error('summary fehlgeschlagen ('+slug+' '+eventId+'):', e.message);
    return null;
  }
}

/* Baut EINEN Datensatz aus einem beendeten Scoreboard-Ereignis + seiner Summary-Antwort.
   Liefert null, wenn irgendein noetiges Feld fehlt - ein unvollstaendiger Fund wird verworfen,
   nicht mit Luecken gespeichert (derselbe Geist wie beim Laden einer kaputten Bestandsdatei
   unten: kein stiller Datenverlust, aber auch kein halbgarer neuer Eintrag). */
function datensatzBauen(slug, ev, sum){
  var comp = sum && sum.header && (sum.header.competitions||[])[0];
  if(!comp) return null;
  var cs = comp.competitors || [];
  var heimC = cs.filter(function(c){ return c.homeAway==='home'; })[0];
  var gastC = cs.filter(function(c){ return c.homeAway==='away'; })[0];
  if(!heimC || !gastC) return null;
  var lsH = heimC.linescores || [], lsG = gastC.linescores || [];
  var torHeim = linescoreZahl(lsH,0) + linescoreZahl(lsH,1);
  var torGast = linescoreZahl(lsG,0) + linescoreZahl(lsG,1);
  var halbzeit = linescoreZahl(lsH,0)+':'+linescoreZahl(lsG,0);
  var verlaengerung = '';
  if(lsH.length>=4 || lsG.length>=4){
    var vH = torHeim + linescoreZahl(lsH,2) + linescoreZahl(lsH,3);
    var vG = torGast + linescoreZahl(lsG,2) + linescoreZahl(lsG,3);
    verlaengerung = vH+':'+vG;
  }
  var evComp = (ev.competitions||[])[0] || {};
  var datensatz = {
    providerEventId: String(ev.id),
    wettbewerbSlug: slug,
    wettbewerb: evComp.altGameNote || (ev.season && ev.season.slug) || slug,
    datum: String(ev.date||'').slice(0,10),
    anpfiff: String(ev.date||'').slice(11,16),
    heim: (heimC.team && heimC.team.displayName) || '',
    gast: (gastC.team && gastC.team.displayName) || '',
    torHeim: torHeim, torGast: torGast,
    status: 'FT',
    quelle: 'espn'
  };
  // Halbzeitstand wird IMMER mitgegeben, wenn ueberhaupt linescores vorlagen - exakt wie
  // espnLauf() in beta.html, das dieses Feld ebenfalls unbedingt setzt (kein Nachbau-Abweichen).
  if(lsH.length || lsG.length) datensatz.halbzeit = halbzeit;
  if(verlaengerung) datensatz.verlaengerung = verlaengerung;
  if(!datensatz.datum || !datensatz.heim || !datensatz.gast) return null;
  return datensatz;
}

function dateiPfad(monat){
  return path.join(ZIELORDNER, monat+'.json');
}

function laden(pfad){
  if(!fs.existsSync(pfad)) return {};
  try{
    var d = JSON.parse(fs.readFileSync(pfad,'utf8'));
    var karte = {};
    (d.spiele||[]).forEach(function(e){ if(e.providerEventId) karte[e.providerEventId]=e; });
    return karte;
  }catch(e){
    console.error('Bestehende Datei nicht lesbar, wird NICHT ueberschrieben ohne Pruefung:', pfad, e.message);
    throw e; // kein stiller Datenverlust - Lauf bricht ab, Ondo sieht den Fehler
  }
}

/* Merge-Regel (Ondos Schema): providerEventId ist der Primaerschluessel. fetchedAt wird beim
   ERSTEN Schreiben eines Ereignisses gesetzt und danach NIE veraendert - es haelt fest, wann
   dieser Automatik-Lauf das Ergebnis zum ersten Mal sah, unabhaengig davon, wie oft es seither
   erneut bestaetigt wurde. Eine bestehende, vollstaendige Zeile wird durch einen neuen Fund NUR
   ersetzt, wenn der neue Fund selbst vollstaendig ist (torHeim/torGast Zahlen, keine leeren
   Team-Namen) - ein leerer oder fehlgeschlagener Folgeversuch kann eine bereits gespeicherte,
   gute Zeile nie mit Luecken ueberschreiben. */
function einfuegenOderAktualisieren(karte, neu){
  var vorhanden = karte[neu.providerEventId];
  var neuVollstaendig = typeof neu.torHeim==='number' && typeof neu.torGast==='number' &&
    !isNaN(neu.torHeim) && !isNaN(neu.torGast) && neu.heim && neu.gast;
  if(!neuVollstaendig) return; // unvollstaendiger Fund wird nie gespeichert, auch nicht neu
  if(!vorhanden){
    neu.fetchedAt = new Date().toISOString();
    karte[neu.providerEventId] = neu;
    return;
  }
  // Faktische Korrektur zulassen (z.B. ESPN aendert nachtraeglich einen Endstand), fetchedAt
  // bleibt dabei UNVERAENDERT - es beschreibt den ersten Fund, nicht die letzte Aenderung.
  var fetchedAt = vorhanden.fetchedAt;
  karte[neu.providerEventId] = neu;
  karte[neu.providerEventId].fetchedAt = fetchedAt;
}

function speichern(pfad, karte){
  fs.mkdirSync(path.dirname(pfad), { recursive: true });
  var spiele = Object.keys(karte).sort().map(function(id){ return karte[id]; });
  var inhalt = {
    hinweis: 'Automatisch erzeugt, Backlog-Punkt 84 (ESPN-Sammelautomatik). Nicht von Hand bearbeiten.',
    spiele: spiele
  };
  fs.writeFileSync(pfad, JSON.stringify(inhalt, null, 1));
  return spiele.length;
}

async function hauptlauf(){
  var tage = [heuteUtc(-1), heuteUtc(0)]; // gestern, heute (UTC)
  var gefundenGesamt = 0;
  var geaenderteMonate = {};
  var kartenJeMonat = {}; // wird bei Bedarf lazy geladen, damit derselbe Monat nicht zweimal gelesen wird

  for(var i=0;i<VERIFIED_SLUGS.length;i++){
    var slug = VERIFIED_SLUGS[i];
    for(var t=0;t<tage.length;t++){
      var ymd = tage[t];
      var events = await scoreboardHolen(slug, ymd);
      await pause(PAUSE_MS);
      for(var e=0;e<events.length;e++){
        var ev = events[e];
        var comp = (ev.competitions||[])[0];
        if(!comp || !comp.status || !comp.status.type || comp.status.type.completed!==true) continue;
        var sum = await summaryHolen(slug, ev.id);
        await pause(PAUSE_MS);
        var datensatz = datensatzBauen(slug, ev, sum);
        if(!datensatz) continue;
        var monat = datensatz.datum.slice(0,7);
        if(!monat) continue;
        if(!kartenJeMonat[monat]) kartenJeMonat[monat] = laden(dateiPfad(monat));
        var vorherGab = !!kartenJeMonat[monat][datensatz.providerEventId];
        einfuegenOderAktualisieren(kartenJeMonat[monat], datensatz);
        if(kartenJeMonat[monat][datensatz.providerEventId]){
          geaenderteMonate[monat] = true;
          if(!vorherGab) gefundenGesamt++;
        }
      }
    }
    console.log('Slug geprueft ('+(i+1)+'/'+VERIFIED_SLUGS.length+'):', slug);
  }

  Object.keys(geaenderteMonate).forEach(function(monat){
    var n = speichern(dateiPfad(monat), kartenJeMonat[monat]);
    console.log('Geschrieben:', dateiPfad(monat), '-', n, 'Spiele insgesamt in diesem Monat');
  });
  console.log('Neu in diesem Lauf:', gefundenGesamt, 'Spiele');
}

hauptlauf().catch(function(e){
  console.error('Lauf abgebrochen:', e);
  process.exit(1);
});
