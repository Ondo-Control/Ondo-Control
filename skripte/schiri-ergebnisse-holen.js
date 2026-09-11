/* ================= SCHIRI-ERGEBNISSE HOLEN (Backlog-Punkt 9, Ausbau 11.9.2026) =================
   Laeuft taeglich um 08:00 Uhr UTC ueber .github/workflows/schiri-ergebnisse.yml, ausserhalb
   der App. Holt Endstaende fuer den in STUFEN (beta.html, Zeile ~1762) festgelegten Bereich
   von zwei strukturierten Quellen (API-Football, football-data.org) und schreibt sie in eine
   Monatsdatei unter daten/schiri-ergebnisse/. Die App selbst liest diese Dateien nur, ruft
   hier nichts auf - das haelt die Schluessel aus dem Browser heraus.

   WICHTIG, Grenze ausdruecklich benannt: Diese Liga-Liste ist von Hand aus STUFEN abgeleitet
   und dort NICHT automatisch verknuepft. Aendert sich STUFEN in beta.html, muss diese Liste
   von Hand nachgezogen werden - sonst laeuft sie still auseinander. Kein automatischer
   Abgleich vorhanden (Fehlerart, die faellig waere zu pruefen, wenn STUFEN sich naechstens
   aendert).

   Konsistenzregel (Ondo, 11.9.2026, wie beim Schiedsrichter selbst): NEGATIVLISTE-Geist -
   diese Liste behauptet keine Vollstaendigkeit "amtlicher" Quellen, sie ist nur unser eigener,
   klar benannter Ausschnitt. Ein Wettbewerb, der hier fehlt, wird von der App wie bisher ueber
   die KI-Suche geprueft, nicht stillschweigend uebersprungen.

   Zeitfenster-Grenze (Fund 11.9.2026, echter Testabruf): Die kostenlose Stufe von API-Football
   erlaubt Datums-Abfragen nur in einem schmalen Fenster um "heute" (bestaetigt: gestern/heute/
   morgen). Deshalb holt dieses Skript IMMER "gestern" (jetzt sicher vollstaendig, auch fuer
   die spaetesten Spiele an der US-Westkueste) UND "heute" (so weit schon gespielt) - nichts
   geht verloren, ein verspaetetes oder verschobenes Spiel wird am naechsten Lauf automatisch
   als "gestern" nachgetragen. */

const fs = require('fs');
const path = require('path');

const API_FOOTBALL_KEY = process.env.API_FOOTBALL_KEY || '';
const FOOTBALL_DATA_ORG_KEY = process.env.FOOTBALL_DATA_ORG_KEY || '';
const ZIELORDNER = path.join(__dirname, '..', 'daten', 'schiri-ergebnisse');

/* Liga-IDs bei API-Football, Stand 11.9.2026, echt geprueft (nicht geraten) - siehe Hinweis
   oben. Je Land: erste Liga, zweite Liga (falls in STUFEN genannt), nationaler Pokal. */
var API_FOOTBALL_LIGEN = [
  // Stufe 1: 16 Laender, erste/zweite Liga + Pokal
  39,40,45,          // England: Premier League, Championship, FA Cup
  78,79,81,          // Deutschland: Bundesliga, 2. Bundesliga, DFB Pokal
  140,141,143,       // Spanien: La Liga, Segunda, Copa del Rey
  135,136,137,       // Italien: Serie A, Serie B, Coppa Italia
  61,62,66,          // Frankreich: Ligue 1, Ligue 2, Coupe de France
  88,89,90,          // Niederlande: Eredivisie, Eerste Divisie, KNVB Beker
  94,95,96,          // Portugal: Primeira Liga, Segunda Liga, Taca de Portugal
  144,145,147,       // Belgien: Jupiler Pro League, Challenger Pro League, Cup
  179,180,181,       // Schottland: Premiership, Championship, FA Cup
  218,219,220,       // Oesterreich: Bundesliga, 2. Liga, Cup
  207,208,209,       // Schweiz: Super League, Challenge League, Schweizer Cup
  203,204,206,       // Tuerkei: Sueper Lig, 1. Lig, Tuerkiye Kupasi
  197,494,199,       // Griechenland: Super League 1, Super League 2, Cup
  345,346,347,       // Tschechien: Czech Liga, FNL, Cup
  106,107,108,       // Polen: Ekstraklasa, I Liga, Cup
  210,211,212,       // Kroatien: HNL, First NL, Cup
  // UEFA-Wettbewerbe inkl. Qualifikation (in der Liga-ID selbst enthalten)
  2,3,848,           // Champions League, Europa League, Conference League
  // Laenderspiele, ohne geografische Einschraenkung (STUFEN nennt keine)
  1,29,30,31,32,33,34,37,   // WM + alle WM-Qualifikationszonen
  4,960,                    // Euro Championship + Qualifikation
  36,                       // Afrika-Cup-Qualifikation
  9,22,                     // Copa America, CONCACAF Gold Cup
  10,                       // Freundschaftsspiele (Laenderspiele)
  5,536,                    // UEFA Nations League, CONCACAF Nations League
  35,                       // Asian Cup Qualifikation
  // Stufe 2
  253,257,           // USA: MLS, US Open Cup
  71,72,             // Brasilien: Serie A, Serie B
  128,               // Argentinien: Liga Profesional
  103,               // Norwegen: Eliteserien
  113,               // Schweden: Allsvenskan
  119,               // Daenemark: Superliga
  244,               // Finnland: Veikkausliiga
  357,               // Irland: Premier Division
  164,               // Island: Urvalsdeild
  98,                // Japan: J1 League
  292                // Suedkorea: K League 1
];

function heuteUtc(offsetTage){
  var d = new Date();
  d.setUTCDate(d.getUTCDate() + offsetTage);
  return d.toISOString().slice(0,10); // JJJJ-MM-TT
}

function apiFootballHolen(datum){
  if(!API_FOOTBALL_KEY) return Promise.resolve([]);
  return fetch('https://v3.football.api-sports.io/fixtures?date=' + datum, {
    headers: { 'x-apisports-key': API_FOOTBALL_KEY }
  }).then(function(res){ return res.json(); }).then(function(d){
    if(d.errors && Object.keys(d.errors).length){
      console.error('API-Football Fehler ('+datum+'):', JSON.stringify(d.errors));
      return [];
    }
    var treffer = (d.response||[]).filter(function(m){
      return API_FOOTBALL_LIGEN.indexOf(m.league.id) >= 0;
    });
    return treffer.map(function(m){
      var fx=m.fixture, t=m.teams, g=m.goals, sc=m.score, lg=m.league;
      var eintrag = {
        datum: fx.date.slice(0,10),
        anpfiff: fx.date.slice(11,16),
        wettbewerb: lg.name,
        ligaId: lg.id,
        heim: t.home.name,
        gast: t.away.name,
        status: fx.status.short,
        torHeim: g.home,
        torGast: g.away,
        quelle: 'api-football'
      };
      if(sc.halftime && sc.halftime.home!=null){
        eintrag.halbzeit = sc.halftime.home+':'+sc.halftime.away;
      }
      if(sc.extratime && sc.extratime.home!=null){
        eintrag.verlaengerung = sc.extratime.home+':'+sc.extratime.away;
      }
      return eintrag;
    });
  }).catch(function(e){
    console.error('API-Football Abruf fehlgeschlagen ('+datum+'):', e.message);
    return [];
  });
}

/* football-data.org deckt laut Konto (11.9.2026) 12 grosse Wettbewerbe ab. Beim echten
   Testabruf kam trotzdem ein Copa-Libertadores-Spiel zurueck, das WEDER in dieser Liste NOCH
   in STUFEN steht - der Zugang liefert also mehr, als das Konto anzeigt. Deshalb hier ein
   eigener, expliziter Filter auf genau die 12 zugesicherten Wettbewerbe (Competition-Codes),
   statt der Kontoseite blind zu vertrauen. Alles andere faellt durch, auch wenn die
   Schnittstelle es liefern wuerde - kein stilles Erweitern des Bereichs (Ondo, 11.9.2026). */
var FOOTBALL_DATA_ORG_CODES = ['WC','CL','BL1','DED','BSA','PD','FL1','ELC','PPL','EC','SA','PL'];
function footballDataOrgHolen(vonDatum, bisDatum){
  if(!FOOTBALL_DATA_ORG_KEY) return Promise.resolve([]);
  return fetch('https://api.football-data.org/v4/matches?dateFrom='+vonDatum+'&dateTo='+bisDatum, {
    headers: { 'X-Auth-Token': FOOTBALL_DATA_ORG_KEY }
  }).then(function(res){ return res.json(); }).then(function(d){
    if(d.message){
      console.error('football-data.org Fehler:', d.message);
      return [];
    }
    return (d.matches||[])
      .filter(function(m){ return m.status==='FINISHED' && FOOTBALL_DATA_ORG_CODES.indexOf(m.competition.code)>=0; })
      .map(function(m){
      var ft = m.score.fullTime, ht = m.score.halfTime;
      var eintrag = {
        datum: m.utcDate.slice(0,10),
        anpfiff: m.utcDate.slice(11,16),
        wettbewerb: m.competition.name,
        heim: m.homeTeam.name,
        gast: m.awayTeam.name,
        status: 'FT',
        torHeim: ft.home,
        torGast: ft.away,
        quelle: 'football-data.org'
      };
      if(ht && ht.home!=null) eintrag.halbzeit = ht.home+':'+ht.away;
      return eintrag;
    });
  }).catch(function(e){
    console.error('football-data.org Abruf fehlgeschlagen:', e.message);
    return [];
  });
}

/* Schluessel fuer den Abgleich beim Zusammenfuehren: gleiches Datum + gleiche Teams gilt als
   dasselbe Spiel, unabhaengig von der Quelle. Normalisierung bewusst einfach gehalten
   (Kleinschreibung, Leerraum entfernt) - reicht fuer den Abgleich zweier strukturierter
   Quellen mit sauberen Teamnamen; die feinere normName()-Logik aus beta.html ist fuer den
   Abgleich mit KI-Text gedacht und wird erst beim Lesen in der App gebraucht. */
function schluessel(e){
  function knapp(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9]/g,''); }
  return e.datum+'|'+knapp(e.heim)+'|'+knapp(e.gast);
}

function zusammenfuehren(bestehend, neu){
  var karte = {};
  (bestehend||[]).forEach(function(e){ karte[schluessel(e)] = e; });
  neu.forEach(function(e){
    var k = schluessel(e);
    /* Ein bereits FT-Eintrag wird durch einen neuen NICHT-FT-Eintrag nicht ueberschrieben -
       das koennte sonst ein fertiges Ergebnis wieder auf "laeuft" zuruecksetzen, wenn zwei
       Quellen zu unterschiedlichen Zeitpunkten unterschiedlich weit sind. */
    if(karte[k] && karte[k].status==='FT' && e.status!=='FT') return;
    karte[k] = e;
  });
  return Object.keys(karte).sort().map(function(k){ return karte[k]; });
}

function dateiPfad(datum){
  var monat = datum.slice(0,7); // JJJJ-MM
  return path.join(ZIELORDNER, monat+'.json');
}

function laden(pfad){
  if(!fs.existsSync(pfad)) return [];
  try{
    var d = JSON.parse(fs.readFileSync(pfad,'utf8'));
    return d.spiele || [];
  }catch(e){
    console.error('Bestehende Datei nicht lesbar, wird NICHT ueberschrieben ohne Pruefung:', pfad, e.message);
    throw e; // bewusst kein stiller Datenverlust - Lauf bricht ab, Ondo sieht den Fehler
  }
}

function speichern(pfad, spiele){
  fs.mkdirSync(path.dirname(pfad), { recursive: true });
  var inhalt = { hinweis: 'Automatisch erzeugt, Backlog-Punkt 9. Nicht von Hand bearbeiten.',
                 spiele: spiele };
  fs.writeFileSync(pfad, JSON.stringify(inhalt, null, 1));
}

async function hauptlauf(){
  var tage = [heuteUtc(-1), heuteUtc(0)]; // gestern, heute
  var vonFdo = tage[0], bisFdo = tage[1];

  var afEintraege = [];
  for(var i=0;i<tage.length;i++){
    var t = await apiFootballHolen(tage[i]);
    afEintraege = afEintraege.concat(t);
  }
  var fdoEintraege = await footballDataOrgHolen(vonFdo, bisFdo);

  console.log('API-Football:', afEintraege.length, 'Treffer im Stufen-Bereich');
  console.log('football-data.org:', fdoEintraege.length, 'fertige Spiele (12-Wettbewerbe-Bereich)');

  /* Je betroffenem Monat (meist einer, an einem Monatswechsel zwei) einlesen, ergaenzen,
     schreiben. */
  var betroffeneMonate = {};
  afEintraege.concat(fdoEintraege).forEach(function(e){ betroffeneMonate[e.datum.slice(0,7)] = true; });

  Object.keys(betroffeneMonate).forEach(function(monat){
    var pfad = path.join(ZIELORDNER, monat+'.json');
    var bestehend = laden(pfad);
    var neuFuerMonat = afEintraege.concat(fdoEintraege).filter(function(e){ return e.datum.slice(0,7)===monat; });
    var zusammengefuehrt = zusammenfuehren(bestehend, neuFuerMonat);
    speichern(pfad, zusammengefuehrt);
    console.log('Geschrieben:', pfad, '-', zusammengefuehrt.length, 'Spiele insgesamt in diesem Monat');
  });
}

hauptlauf().catch(function(e){
  console.error('Lauf abgebrochen:', e);
  process.exit(1);
});
