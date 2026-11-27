/* ===================================================================================
   ONDO CORE - Trainerwechsel (Idee 19, 27.11.2026). Quelle: Wikidata (CC0, frei, ohne Schluessel).
   Je Verein aus unseren sieben Laendern: Cheftrainer (Eigenschaft P286) mit Beginn (P580) und Ende (P582).
   Ergebnis: core/data/generated/trainer.json = { teams:{ Mannschaftsschluessel:[ [beginn, ende|null], ... ] } } - nur Amtszeiten.
   Zuordnung wie bei den Stadien nur bei EINDEUTIGEM Verein (gleicher normalisierter Name oder Mannschaftsschluessel).
   Amtszeiten ohne Beginn werden verworfen. Im Merkmal gilt: unbekannt = 0 (neutral).
   Abruf (je Land wie stadien_bauen.js) ueber https://query.wikidata.org/sparql mit ABFRAGE; Rechenteil ohne Netz.
   Aufruf: node core/data/trainer_bauen.js --wd <Ordner mit wd_<land>.json>
   =================================================================================== */
var fs=require('fs'), path=require('path'), ident=require('./identity.js');
var ABFRAGE='SELECT ?c ?lab ?alt ?coach ?start ?end WHERE { ?c wdt:P31 wd:Q476028; wdt:P17 wd:<LAND>; p:P286 ?st. ?st ps:P286 ?coach. OPTIONAL{?st pq:P580 ?start.} OPTIONAL{?st pq:P582 ?end.} ?c rdfs:label ?lab. FILTER(LANG(?lab) IN ("en","de","es","fr","it","nl","pt")) OPTIONAL{ ?c skos:altLabel ?alt. FILTER(LANG(?alt) IN ("en","de","es","fr","it","nl","pt")) } }';
function tag(v){ var m=/^(\d{4}-\d{2}-\d{2})T/.exec(v||''); return m?m[1]:null; }

/* bindungenJeLand: { land:[Zeilen] }; mannschaften: [{ land, name, key }] -> { teams, nichtZugeordnet } */
function bauen(bindungenJeLand, mannschaften){
  var vereine={}, idx={}, idx2={};
  Object.keys(bindungenJeLand).forEach(function(land){
    var a=idx[land]=idx[land]||{}, b=idx2[land]=idx2[land]||{};
    bindungenJeLand[land].forEach(function(x){
      var id=x.c.value, v=vereine[id]=vereine[id]||{};
      var s=tag(x.start&&x.start.value), e=tag(x.end&&x.end.value);
      if(s) v[x.coach.value+'|'+s]=[s, e];
      [x.lab&&x.lab.value, x.alt&&x.alt.value].forEach(function(n){ if(!n) return;
        (a[ident.fxNorm(n)]=a[ident.fxNorm(n)]||{})[id]=1; (b[ident.teamSchluessel(n)]=b[ident.teamSchluessel(n)]||{})[id]=1; });
    });
  });
  function eindeutig(t){ var l=Object.keys(t||{}); return l.length===1?l[0]:null; }
  var teams={}, nicht=[];
  mannschaften.forEach(function(t){
    var id=eindeutig((idx[t.land]||{})[ident.fxNorm(t.name)]) || eindeutig((idx2[t.land]||{})[ident.teamSchluessel(t.name)]);
    var amt=id?Object.keys(vereine[id]).map(function(k){ return vereine[id][k]; }):[];
    if(amt.length){ teams[t.key]=amt.sort(function(p,q){ return p[0]<q[0]?-1:p[0]>q[0]?1:0; }); }
    else nicht.push(t.land+': '+t.name);
  });
  return { teams:teams, nichtZugeordnet:nicht.sort() };
}
/* Amtszeit am Datum d: die juengste mit beginn <= d und (ohne Ende oder ende >= d; der Endtag ist der letzte Amtstag). null = unbekannt */
function amtszeit(liste, d){
  var best=null; (liste||[]).forEach(function(a){ if(a[0]<=d && (!a[1] || a[1]>=d) && (!best || a[0]>best[0])) best=a; });
  return best;
}
module.exports={ bauen:bauen, amtszeit:amtszeit, ABFRAGE:ABFRAGE };

if(require.main===module){
  var a=process.argv, wd=a[a.indexOf('--wd')+1]; if(!wd||wd==='--wd'){ console.error('Aufruf: node trainer_bauen.js --wd <Ordner>'); process.exit(1); }
  var gen=path.join(__dirname,'generated'), aliases=JSON.parse(fs.readFileSync(path.join(__dirname,'aliases.json'),'utf8')), aufl=ident.aliasIndex(aliases);
  var jeLand={}, dateien=fs.existsSync(wd)?fs.readdirSync(wd).filter(function(f){ return /^wd_.*\.json$/.test(f); }):[];
  dateien.forEach(function(f){ var land=f.replace(/^wd_|\.json$/g,'').replace(/2$/,'');
    try{ (jeLand[land]=jeLand[land]||[]).push.apply(jeLand[land], JSON.parse(fs.readFileSync(path.join(wd,f),'utf8')).results.bindings); }catch(e){ console.log('Datei unlesbar, uebersprungen: '+f); } });
  var laender=Object.keys(jeLand);
  if(laender.length<7){ console.log('Trainer: nur '+laender.length+' von 7 Laendern geholt - trainer.json bleibt unveraendert.'); process.exit(0); }
  var kat=JSON.parse(fs.readFileSync(path.join(gen,'katalog.json'),'utf8')), seen={}, ms=[];
  kat.dateien.forEach(function(k){ var d=JSON.parse(fs.readFileSync(path.join(gen,k.datei),'utf8')), land=d.liga.split('.')[0];
    d.teams.forEach(function(n){ var key=aufl(land,n).schluessel, id=land+'|'+key; if(!seen[id]){ seen[id]=1; ms.push({ land:land, name:n, key:key }); } }); });
  var e=bauen(jeLand, ms), n=Object.keys(e.teams).length;
  fs.writeFileSync(path.join(gen,'trainer.json'), JSON.stringify({ schema:1, quelle:'Wikidata (CC0): Cheftrainer P286 mit Beginn P580 und Ende P582', mannschaften:ms.length, zugeordnet:n, nichtZugeordnet:e.nichtZugeordnet, teams:e.teams })+'\n');
  console.log('Trainer: '+n+' von '+ms.length+' Mannschaften zugeordnet; unzugeordnet: '+e.nichtZugeordnet.length);
}
