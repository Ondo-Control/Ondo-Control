/* ===================================================================================
   ONDO CORE - Europapokal-Kalender (Backlog-Punkt 94). Liest die Spielplaene aus OpenFootball/champions-league (CC0):
   Champions League, Europa League, Conference League und ihre Qualifikationen, Saisons 2011/12 bis heute.
   Ergebnis: core/data/generated/europa.json = je Mannschaft (nur Vereine aus unseren Ligen) die Spieltage im Europapokal.
   Nur Daten und Mannschaftsschluessel, KEINE Ergebnisse (die braucht der Kalender nicht). Kein Netz im Rechenteil.
   Aufruf: node core/data/europa_bauen.js --ep <Ordner champions-league>
   =================================================================================== */
var fs=require('fs'), path=require('path');
var ident=require('./identity.js');
var LAND={ GER:'de', ENG:'en', ESP:'es', FRA:'fr', ITA:'it', NED:'nl', POR:'pt' };
var MON={ Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12 };
var DATUM=/^\s+(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s+([A-Z][a-z]{2})\s+(\d{1,2})(?:\s+(\d{4}))?\s*$/;
var SPIEL=/^\s*(?:\d{1,2}:\d{2}\s+)?(.+?)\s+\(([A-Z]{3})\)\s+v\s+(.+?)\s+\(([A-Z]{3})\)(?:\s|$)/;
function p2(n){ return (n<10?'0':'')+n; }
/* Text einer Datei -> [{datum, heim, heimLand, gast, gastLand}] */
function lesen(text, startJahr){
  var aus=[], datum=null;
  text.split(/\r?\n/).forEach(function(z){
    var d=DATUM.exec(z);
    if(d){ var m=MON[d[1]], j=d[3]?Number(d[3]):(m>=7?startJahr:startJahr+1); datum=j+'-'+p2(m)+'-'+p2(Number(d[2])); return; }
    var s=SPIEL.exec(z); if(s && datum) aus.push({ datum:datum, heim:s[1].trim(), heimLand:s[2], gast:s[3].trim(), gastLand:s[4] });
  });
  return aus;
}
/* ep = Ordner mit Saisonordnern (2011-12 ...); bekannt = { land:{ schluessel:true } }; aliases wie in aliases.json */
function bauen(ep, aliases, bekannt){
  var aufl=ident.aliasIndex(aliases), teams={}, ohneZuordnung={}, spiele=0;
  fs.readdirSync(ep).filter(function(n){ return /^\d{4}-\d{2}$/.test(n); }).sort().forEach(function(saison){
    var jahr=Number(saison.slice(0,4));
    fs.readdirSync(path.join(ep,saison)).filter(function(f){ return /^(cl|clq|el|elq|conf|confq)\.txt$/.test(f); }).sort().forEach(function(f){
      lesen(fs.readFileSync(path.join(ep,saison,f),'utf8'), jahr).forEach(function(m){
        spiele++;
        [[m.heim,m.heimLand],[m.gast,m.gastLand]].forEach(function(x){
          var land=LAND[x[1]]; if(!land) return;
          var k=aufl(land, x[0]).schluessel;
          if(bekannt[land] && bekannt[land][k]){ (teams[k]=teams[k]||{ land:land, tage:{} }).tage[m.datum]=1; }
          else { var n=land+'|'+x[0]; ohneZuordnung[n]=(ohneZuordnung[n]||0)+1; }
        });
      });
    });
  });
  var aus={}; Object.keys(teams).sort().forEach(function(k){ aus[k]=Object.keys(teams[k].tage).sort(); });
  return { schema:1, quelle:'OpenFootball/champions-league (CC0 1.0): Champions League, Europa League, Conference League inkl. Qualifikation, ab 2011/12', spieleGelesen:spiele, mannschaften:Object.keys(aus).length, teams:aus, ohneZuordnung:ohneZuordnung };
}
module.exports={ lesen:lesen, bauen:bauen };
if(require.main===module){
  var a=process.argv, i=a.indexOf('--ep'), ep=i>=0?a[i+1]:null;
  if(!ep){ console.error('Aufruf: node core/data/europa_bauen.js --ep <Ordner>'); process.exit(2); }
  var hier=__dirname, lies=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); };
  var L=require('../model/lauf.js'), b=L.bestandLaden(path.join(hier,'generated'), lies(path.join(hier,'aliases.json')));
  var bekannt={}; Object.keys(b.namen).forEach(function(l){ bekannt[l]=b.namen[l]; });
  var e=bauen(ep, lies(path.join(hier,'aliases.json')), bekannt);
  /* die nicht zugeordneten Namen werden nur gezaehlt, nicht gespeichert (Vereine ausserhalb unserer Ligen sind erwartet) */
  var gross=Object.keys(e.ohneZuordnung).length; delete e.ohneZuordnung; e.nichtZugeordnetNamen=gross;
  fs.writeFileSync(path.join(hier,'generated','europa.json'), JSON.stringify(e)+'\n');
  console.log('Europapokal: '+e.spieleGelesen+' Spiele gelesen, '+e.mannschaften+' Mannschaften aus unseren Ligen, '+gross+' Namen ohne Zuordnung');
}
