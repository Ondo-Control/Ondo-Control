/* ===================================================================================
   ONDO CORE - Quotenabruf (Odds API, Gratis-Tarif). Nur im GitHub-Lauf, Schluessel aus ODDS_API_KEY (Secret).
   Ohne Schluessel: Hinweis, Ausstieg ohne Fehler, prognose.json bleibt "keine Wette" ohne Quote.
   Rohquoten werden NICHT gespeichert (AGB: keine Weitergabe als Datei). Gespeichert wird nur je Spiel,
   ob eine geprueft Quote vorlag (ja/nein) und die daraus folgende Position, plus eine Abdeckungszahl.
   Kosten: 1 Abruf je Liga und Tag, unter 500 Credits im Monat.
   =================================================================================== */
var fs=require('fs'), path=require('path'), https=require('https');
var ident=require('../data/identity.js'), Q=require('./quoten.js');
var SPORT={ 'en.1':'soccer_epl','en.2':'soccer_efl_champ','en.3':'soccer_england_league1','en.4':'soccer_england_league2','de.1':'soccer_germany_bundesliga','de.2':'soccer_germany_bundesliga2','de.3':'soccer_germany_liga3',
  'es.1':'soccer_spain_la_liga','es.2':'soccer_spain_segunda_division','fr.1':'soccer_france_ligue_one','fr.2':'soccer_france_ligue_two','it.1':'soccer_italy_serie_a','it.2':'soccer_italy_serie_b','nl.1':'soccer_netherlands_eredivisie','pt.1':'soccer_portugal_primeira_liga' };
function holen(url){ return new Promise(function(ok,nein){ https.get(url,function(r){ var d=''; r.on('data',function(c){ d+=c; }); r.on('end',function(){ r.statusCode===200?ok(JSON.parse(d)):nein(new Error('HTTP '+r.statusCode)); }); }).on('error',nein); }); }
function bestQuote(ev, abgerufen){
  var bm=(ev.bookmakers||[]).slice().sort(function(a,b){ return (a.key==='pinnacle'?0:1)-(b.key==='pinnacle'?0:1); });
  for(var i=0;i<bm.length;i++){ var m=(bm[i].markets||[]).filter(function(x){ return x.key==='h2h'; })[0]; if(!m) continue;
    var o={}; (m.outcomes||[]).forEach(function(x){ o[x.name]=x.price; });
    var h=o[ev.home_team], g=o[ev.away_team], d=o['Draw'];
    var q={ quelle:'the-odds-api/'+bm[i].key, markt:'h2h', abgerufenUtc:abgerufen, anstossUtc:ev.commence_time, heim:h, remis:d, gast:g };
    if(Q.quoteGeprueft(q).ok) return q; }
  return null;
}
(async function(){
  var key=process.env.ODDS_API_KEY, hier=__dirname, pf=path.join(hier,'generated','prognose.json');
  if(!key){ console.log('ODDS_API_KEY nicht gesetzt - keine Quoten abgerufen, Position bleibt "keine Wette".'); return; }
  var pr=JSON.parse(fs.readFileSync(pf,'utf8')), al=ident.aliasIndex(JSON.parse(fs.readFileSync(path.join(hier,'..','data','aliases.json'),'utf8')));
  var ligen={}; pr.spiele.forEach(function(s){ ligen[s.liga]=1; });
  var mitQuote=0, fehler=[];
  for(var lg in ligen){ if(!SPORT[lg]) continue;
    try{
      var abgerufen=new Date().toISOString().replace(/\.\d+Z$/,'Z');
      var evs=await holen('https://api.the-odds-api.com/v4/sports/'+SPORT[lg]+'/odds?regions=eu&markets=h2h&oddsFormat=decimal&apiKey='+encodeURIComponent(key));
      var land=lg.split('.')[0], idx={};
      evs.forEach(function(ev){ idx[al(land,ev.home_team).schluessel+'|'+al(land,ev.away_team).schluessel+'|'+ev.commence_time.slice(0,10)]=ev; });
      pr.spiele.forEach(function(s){ if(s.liga!==lg||!s.prognose) return;
        var ev=idx[al(land,s.heim).schluessel+'|'+al(land,s.gast).schluessel+'|'+s.datum]; var q=ev&&bestQuote(ev,abgerufen);
        var p=[s.prognose.heimsieg,s.prognose.remis,s.prognose.auswaertssieg];
        s.position=Q.position(p,q||null); if(q){ mitQuote++; s.position.quelle=q.quelle; s.position.abgerufenUtc=q.abgerufenUtc; } });
    }catch(e){ fehler.push(lg+': '+e.message); }
  }
  pr.quoten={ spieleMitGeprueftQuote:mitQuote, spieleGesamt:pr.spiele.length, fehler:fehler, hinweis:'Rohquoten werden nicht gespeichert (AGB der Odds API). Vorteil gegen die Quote ist nicht belegt.' };
  fs.writeFileSync(pf,JSON.stringify(pr,null,1)+'\n');
  console.log('Quoten: '+mitQuote+' von '+pr.spiele.length+' Spielen mit geprueft Quote; Fehler: '+fehler.length);
})();
