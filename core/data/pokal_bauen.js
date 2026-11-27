/* ===================================================================================
   ONDO CORE - Pokal-Kalender (Backlog-Punkt 94, Kriterium "Nationale Pokalspiele"). Liest die nationalen Pokale aus
   OpenFootball (CC0): DFB-Pokal (deutschland), FA Cup + EFL Cup (england), Copa del Rey (espana), Coppa Italia (italy).
   Ergebnis: core/data/generated/pokal.json = je Mannschaft die Spieltage im Pokal, plus je Land die Saisons, deren Daten
   belegt vollstaendig sind. Keine Ergebnisse (der Kalender braucht nur den Tag), kein Netz im Rechenteil.

   Warum die Abdeckungspruefung: die Quelle ist ungleich vollstaendig. "Kein Pokalspiel eingetragen" darf nie als
   "kein Pokalspiel gespielt" gelesen werden. Eine Land-Saison gilt nur als abgedeckt, wenn
   (a) die gelesenen Spiele mindestens 98 % der Kopfzeile "# Matches" entsprechen UND
   (b) mindestens 90 % der Erstligisten dieser Saison (aus unserem Bestand) mindestens einen Pokaltag haben.
   Tage nicht abgedeckter Saisons werden NICHT gespeichert. Der Core bewertet trotzdem ALLE Spiele: wo keine belegten
   Pokaldaten vorliegen, hat das Merkmal den neutralen Wert 0 (siehe lagen.js).
   Aufruf: node core/data/pokal_bauen.js --de <deutschland> --en <england> --es <espana> --it <italy> [--wp <Ordner mit gespeicherten Wikipedia-Seiten>]
   =================================================================================== */
var fs=require('fs'), path=require('path');
var ident=require('./identity.js');
var MON={ Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12 };
var DATUM=/^\s*(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)\s+([A-Z][a-z]{2})\s+(\d{1,2})(?:\s+(\d{4}))?\s*$/;
var SPIEL=/^\s*(?:\d{1,2}:\d{2}\s+)?(.+?)\s+v\s+(.+?)(?:\s+\d+-\d+.*)?\s*$/;                 /* Format 1: Heim v Gast  Ergebnis */
var ERGEB=/^\s*(?:\d{1,2}:\d{2}\s+)?(.+?)\s+\d+-\d+\b.*?\)\s+(\S.*?)\s*$/;                   /* Format 2: Heim  Ergebnis (Halbzeit)  Gast */
var KOPF=/^#\s+Matches\s+(\d+)/;
var QUELLEN={ de:['cup.txt'], en:['facup.txt','eflcup.txt'], es:['cup.txt'], it:['cup.txt'] };
var MIND_SPIELE=0.98, MIND_TEAMS=0.9, MIND_ERSTLIGA=10;
function p2(n){ return (n<10?'0':'')+n; }
/* ---------- Wikipedia (englisch, Parsoid-HTML wie von /api/rest_v1/page/html): Spiele aus beiden Spielvorlagen ----------
   "Football box collapsible" (div.vevent, Mannschaften in span.fn.org) und "Football box" (div.footballbox, itemprop homeTeam/awayTeam).
   Datum je Spiel aus span.bday (ISO). Teamzahl aus der Infobox ("Teams 64"). Nur Fakten (Datum, Paarung), keine Texte uebernommen. */
var WP_WETTBEWERBE={ de:function(){ return ['DFB-Pokal']; }, en:function(j){ return ['FA Cup', j>=2016?'EFL Cup':'Football League Cup']; },
  es:function(){ return ['Copa del Rey']; }, it:function(){ return ['Coppa Italia']; }, fr:function(){ return ['Coupe de France']; },
  nl:function(){ return ['KNVB Cup']; }, pt:function(){ return ['Taça de Portugal']; } };
function wpTitel(saison, wettbewerb){ var j=Number(saison.slice(0,4)); return j+'–'+saison.slice(5)+' '+wettbewerb; }
function wpDateiname(land, saison, wettbewerb){ return land+'_'+saison+'_'+wettbewerb.replace(/[^A-Za-z0-9]+/g,'-')+'.html'; }
function entities(t){ return t.replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#0*39;/g,"'").replace(/&#(\d+);/g,function(_,n){ return String.fromCharCode(Number(n)); }); }
function klar(t){ return entities(t.replace(/<[^>]+>/g,'')).replace(/\s+/g,' ').trim(); }
function lesenHtml(html){
  var spiele=[], bday=/class="bday dtstart[^"]*">(\d{4}-\d{2}-\d{2})</, m;
  var rc=/<div class="vevent"[^>]*>([\s\S]*?)<\/table>/g;
  while((m=rc.exec(html))){
    var d=bday.exec(m[1]), t=[], r2=/<span class="fn org">([\s\S]*?)<\/span>/g, x;
    while((x=r2.exec(m[1]))) t.push(klar(x[1]));
    if(d && t.length===2 && t[0] && t[1]) spiele.push({ datum:d[1], heim:t[0], gast:t[1] });
  }
  var rb=/<div[^>]*class="footballbox"[^>]*>([\s\S]*?)<\/tbody><\/table>/g;
  while((m=rb.exec(html))){
    var d2=bday.exec(m[1]), h=/itemprop="homeTeam"[\s\S]*?<span itemprop="name">([\s\S]*?)<\/span>/.exec(m[1]), a=/itemprop="awayTeam"[\s\S]*?<span itemprop="name">([\s\S]*?)<\/span>/.exec(m[1]);
    if(d2 && h && a && klar(h[1]) && klar(a[1])) spiele.push({ datum:d2[1], heim:klar(h[1]), gast:klar(a[1]) });
  }
  var tm=/<th[^>]*>\s*Teams\s*<\/th>\s*<td[^>]*>\s*(\d+)/.exec(html);
  return { spiele:spiele, teams:tm?Number(tm[1]):null };
}
/* Text einer Pokaldatei -> { spiele:[{datum,heim,gast}], kopf:Zahl|null } */
function lesen(text, startJahr){
  var aus=[], datum=null, kopf=null;
  text.split(/\r?\n/).forEach(function(z){
    var k=KOPF.exec(z); if(k){ kopf=Number(k[1]); return; }
    if(/^\s*[#=▪]/.test(z)) return;                 /* Kommentar, Titel, Rundenueberschrift */
    var d=DATUM.exec(z);
    if(d){ var m=MON[d[1]], j=d[3]?Number(d[3]):(m>=7?startJahr:startJahr+1); datum=j+'-'+p2(m)+'-'+p2(Number(d[2])); return; }
    var s=SPIEL.exec(z)||ERGEB.exec(z); if(s && datum) aus.push({ datum:datum, heim:s[1].trim(), gast:s[2].trim() });
  });
  return { spiele:aus, kopf:kopf };
}
/* quellen = { de:<Ordner>, ... }; aliases wie in aliases.json; ersteLiga = { land:{ saison:{ schluessel:true } } }; bekannt = { land:{ schluessel:.. } } */
function bauen(quellen, aliases, ersteLiga, bekannt){
  var aufl=ident.aliasIndex(aliases), teams={}, pruefung={}, abgedeckt={}, gelesen=0;
  Object.keys(QUELLEN).forEach(function(land){
    var ordner=quellen[land]; if(!ordner) return;
    abgedeckt[land]=[];
    fs.readdirSync(ordner).filter(function(n){ return /^\d{4}-\d{2}$/.test(n); }).sort().forEach(function(saison){
      var jahr=Number(saison.slice(0,4)), dateien=QUELLEN[land].filter(function(f){ return fs.existsSync(path.join(ordner,saison,f)); });
      if(dateien.length!==QUELLEN[land].length) return;           /* nicht alle Pokale der Saison vorhanden: nicht abgedeckt */
      var kopf=0, anzahl=0, kopfFehlt=false, tage={};
      dateien.forEach(function(f){
        var e=lesen(fs.readFileSync(path.join(ordner,saison,f),'utf8'), jahr);
        if(e.kopf===null) kopfFehlt=true; else kopf+=e.kopf;
        anzahl+=e.spiele.length; gelesen+=e.spiele.length;
        e.spiele.forEach(function(m){
          [m.heim,m.gast].forEach(function(n){
            var k=aufl(land,n).schluessel;
            if(bekannt[land] && bekannt[land][k]) (tage[k]=tage[k]||{})[m.datum]=1;
          });
        });
      });
      var erst=Object.keys((ersteLiga[land]||{})[saison]||{}), mit=erst.filter(function(k){ return tage[k]; }).length;
      var anteilSpiele=kopf?anzahl/kopf:0, anteilTeams=erst.length?mit/erst.length:0;
      var ok=!kopfFehlt && anteilSpiele>=MIND_SPIELE && erst.length>=MIND_ERSTLIGA && anteilTeams>=MIND_TEAMS;
      pruefung[land+'|'+saison]={ spielePokal:anzahl, spieleKopf:kopf, anteilSpiele:Math.round(anteilSpiele*1000)/1000, erstligisten:erst.length, mitPokaltag:mit, anteilTeams:Math.round(anteilTeams*1000)/1000, abgedeckt:ok };
      if(ok){
        abgedeckt[land].push(saison);
        Object.keys(tage).forEach(function(k){ var t=teams[k]=teams[k]||{}; Object.keys(tage[k]).forEach(function(d){ t[d]=1; }); });
      }
    });
  });
  /* Zweite Quelle: gespeicherte Wikipedia-Seiten (nur fuer Land-Saisons, die OpenFootball nicht belegt abdeckt). Abdeckung hier: je Wettbewerb
     mindestens 98 % von (Teams - 1) Spielen (K.-o.-Wettbewerb: jedes Ausscheiden braucht mindestens ein Spiel) UND >= 90 % der Erstligisten. */
  if(quellen.wp && fs.existsSync(quellen.wp)){
    var dateien=fs.readdirSync(quellen.wp).filter(function(f){ return /^[a-z]{2}_\d{4}-\d{2}_.+\.html$/.test(f); }).sort(), gruppen={};
    dateien.forEach(function(f){ var m=/^([a-z]{2})_(\d{4}-\d{2})_/.exec(f); (gruppen[m[1]+'|'+m[2]]=gruppen[m[1]+'|'+m[2]]||[]).push(f); });
    Object.keys(gruppen).sort().forEach(function(k){
      var land=k.split('|')[0], saison=k.split('|')[1], jahr=Number(saison.slice(0,4)); if(!WP_WETTBEWERBE[land]) return;
      abgedeckt[land]=abgedeckt[land]||[];
      if(abgedeckt[land].indexOf(saison)>=0) return;                       /* OpenFootball belegt die Saison schon */
      var erwartet=WP_WETTBEWERBE[land](jahr).map(function(w){ return wpDateiname(land,saison,w); });
      if(erwartet.some(function(f){ return gruppen[k].indexOf(f)<0; })) return;
      var tage={}, anzahl=0, ok=true, spieleGes=0;
      erwartet.forEach(function(f){
        var e=lesenHtml(fs.readFileSync(path.join(quellen.wp,f),'utf8'));
        if(e.teams===null || e.spiele.length<MIND_SPIELE*(e.teams-1)) ok=false;
        anzahl+=e.spiele.length; spieleGes+=e.teams===null?0:e.teams-1; gelesen+=e.spiele.length;
        e.spiele.forEach(function(m){ [m.heim,m.gast].forEach(function(n){ var kk=aufl(land,n).schluessel; if(bekannt[land] && bekannt[land][kk]) (tage[kk]=tage[kk]||{})[m.datum]=1; }); });
      });
      var erst=Object.keys((ersteLiga[land]||{})[saison]||{}), mit=erst.filter(function(kk){ return tage[kk]; }).length, anteilTeams=erst.length?mit/erst.length:0;
      ok=ok && erst.length>=MIND_ERSTLIGA && anteilTeams>=MIND_TEAMS;
      pruefung[k]={ quelle:'wikipedia', spielePokal:anzahl, spieleMindestens:spieleGes, erstligisten:erst.length, mitPokaltag:mit, anteilTeams:Math.round(anteilTeams*1000)/1000, abgedeckt:ok };
      if(ok){ abgedeckt[land].push(saison); Object.keys(tage).forEach(function(kk){ var t=teams[kk]=teams[kk]||{}; Object.keys(tage[kk]).forEach(function(d){ t[d]=1; }); }); }
    });
  }
  var aus={}; Object.keys(teams).sort().forEach(function(k){ aus[k]=Object.keys(teams[k]).sort(); });
  return { schema:1, quelle:'OpenFootball deutschland/england/espana/italy (CC0 1.0) und, wo dort nicht belegt vollstaendig, Wikipedia (Spieldaten als Fakten; Wettbewerbe: DFB-Pokal, FA Cup, EFL Cup, Copa del Rey, Coppa Italia, Coupe de France, KNVB Cup, Taça de Portugal); Tage nur aus belegt vollstaendigen Land-Saisons',
           regel:'Abdeckung: gelesene Spiele >= 98 % der Kopfzeile UND >= 90 % der Erstligisten mit mindestens einem Pokaltag',
           spieleGelesen:gelesen, mannschaften:Object.keys(aus).length, abgedeckt:abgedeckt, pruefung:pruefung, teams:aus };
}
module.exports={ lesen:lesen, lesenHtml:lesenHtml, bauen:bauen, QUELLEN:QUELLEN, WP_WETTBEWERBE:WP_WETTBEWERBE, wpTitel:wpTitel, wpDateiname:wpDateiname };
if(require.main===module){
  var a=process.argv, arg=function(n){ var i=a.indexOf(n); return i>=0?a[i+1]:null; };
  var q={ de:arg('--de'), en:arg('--en'), es:arg('--es'), it:arg('--it'), wp:arg('--wp') };
  if(!q.de||!q.en||!q.es||!q.it){ console.error('Aufruf: node core/data/pokal_bauen.js --de <Ordner> --en <Ordner> --es <Ordner> --it <Ordner>'); process.exit(2); }
  var hier=__dirname, lies=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); };
  var L=require('../model/lauf.js'), b=L.bestandLaden(path.join(hier,'generated'), lies(path.join(hier,'aliases.json')));
  var bekannt={}, erst={};
  Object.keys(b.namen).forEach(function(l){ bekannt[l]=b.namen[l]; });
  Object.keys(b.jeLand).forEach(function(l){
    erst[l]={};
    b.jeLand[l].forEach(function(r){ if(r.liga===l+'.1'){ var s=erst[l][r.saison]=erst[l][r.saison]||{}; s[r.heimKey]=true; s[r.gastKey]=true; } });
  });
  var e=bauen(q, lies(path.join(hier,'aliases.json')), erst, bekannt);
  fs.writeFileSync(path.join(hier,'generated','pokal.json'), JSON.stringify(e)+'\n');
  var ab=Object.keys(e.abgedeckt).map(function(l){ return l+': '+(e.abgedeckt[l].join(', ')||'keine'); }).join(' | ');
  console.log('Pokal: '+e.spieleGelesen+' Spiele gelesen, '+e.mannschaften+' Mannschaften; abgedeckt -> '+ab);
}
