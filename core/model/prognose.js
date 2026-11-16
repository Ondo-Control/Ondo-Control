/* ===================================================================================
   ONDO CORE - Prognose je Spiel (Backlog-Punkt 94). Kostenlos, ohne Netz im Rechenteil, ohne Uhr.
   Liest die Spielplaene aus OpenFootball (CC0; die Action holt sie schon taeglich) und die aktuellen
   Staerken aus generated/modell.json. Fuer jedes noch nicht gespielte Spiel der naechsten Tage:
     Ergebnis-Tipp, Wahrscheinlichkeiten fuer Heimsieg/Remis/Gastsieg, erwartete Tore,
     haeufigste Toranzahl-Kombination, und die Position.
   Position: "keine Wette", solange keine Quote mit Quelle und Zeitstempel vorliegt. Vorteil gegen die
   Quote ist nicht belegt (Pinnacle schlaegt das alte Modell, siehe STAND).
   Der Lernstand MIT Aufstellung wird nur benutzt, wenn eine Aufstellung mit Vorab-Zeitstempel,
   Spiel-ID und 11 Startern je Mannschaft vorliegt (vorhersageGeprueft). Heute gibt es keine solche
   Quelle: der Rueckfall auf den Lernstand OHNE Aufstellung ist der Normalfall und wird je Spiel vermerkt.
   "Heute" kommt als Argument (--ab JJJJ-MM-TT), nie aus der Systemuhr.
   Aufruf: node core/model/prognose.js --of <football.json-Ordner> --ab JJJJ-MM-TT [--tage 7]
   =================================================================================== */
var fs=require('fs'), path=require('path');
var ident=require('../data/identity.js'), schema=require('../data/schema.js'), quellen=require('../data/quellen.js');
var P=require('./poisson.js'), LA=require('./lagen.js');

function tageDazu(d,n){ var x=new Date(d+'T00:00:00Z'); x.setUTCDate(x.getUTCDate()+n); return x.toISOString().slice(0,10); }
function r3(x){ return Math.round(x*1000)/1000; }
function poissonP(k,l){ var f=1; for(var i=2;i<=k;i++) f*=i; return Math.pow(l,k)*Math.exp(-l)/f; }
function haeufigstes(lh,la){ var b={ p:-1, h:0, a:0 }; for(var h=0;h<=6;h++) for(var a=0;a<=6;a++){ var p=poissonP(h,lh)*poissonP(a,la); if(p>b.p) b={ p:p, h:h, a:a }; } return b.h+':'+b.a; }

/* opt: { ofWurzel, ab, tage, aliases, modell, lagen } -> { ...Datei } */
function prognose(opt){
  var aufloesen=ident.aliasIndex(opt.aliases), tage=opt.tage||7, bis=tageDazu(opt.ab, tage), spiele=[], ohne=0;
  var mit=opt.lagen && (opt.lagen.mengen||[]).filter(function(m){ return m.menge==='mitAufstellung'; })[0];
  var lsMit=mit&&mit.lernstand&&mit.gewaehlt.length?mit.lernstand:{ namen:LA.namenVon(['aufst']), standardisierung:{ mittel:{}, streuung:{} }, gewichte:[[0,0,0],[0,0,0],[0,0,0]] };
  var lsOhne={ namen:LA.namenVon([]), standardisierung:{ mittel:{lnH:0,lnD:0,lnA:0}, streuung:{lnH:1,lnD:1,lnA:1} }, gewichte:[[1,0,0],[0,1,0],[0,0,1]] }, lagenStand='L0 (keine Gruppe)';
  /* Produktionspfad: taeglich neu trainierte Gewichte der Menge 'alle' (Kalibrierung); ohne Datei bleibt L0 */
  var pa=opt.produktion && (opt.produktion.mengen||[]).filter(function(m){ return m.menge==='alle' && m.namen && m.gewichte; })[0];
  if(pa){ lsOhne={ namen:pa.namen, standardisierung:pa.standardisierung, gewichte:pa.gewichte }; lagenStand='Produktion alle '+pa.pruefsumme+' ('+pa.trainingsspiele+' Spiele bis '+pa.bis+')'+(pa.merkmalsgewinn?'':', kein Merkmalsgewinn'); }
  schema.LIGEN.forEach(function(l){
    var s=quellen.openfootballSaisons(opt.ofWurzel, l.id); if(!s.length) return;
    quellen.openfootballLesen(opt.ofWurzel, l.id, s[s.length-1]).forEach(function(r){
      if(r.hatErgebnis || r.datum<opt.ab || r.datum>bis) return;
      var hk=aufloesen(l.land, r.heim).schluessel, gk=aufloesen(l.land, r.gast).schluessel;
      var v=P.vorhersage(opt.modell, l.id, hk, gk);
      var eintrag={ liga:l.id, ligaName:l.name, datum:r.datum, heim:r.heim, gast:r.gast, schluessel:{ heim:hk, gast:gk } };
      if(!v.ok){ eintrag.prognose=null; eintrag.grund=v.grund; eintrag.position={ empfehlung:'keine Wette', grund:'keine Prognose moeglich' }; ohne++; spiele.push(eintrag); return; }
      var x={ lnH:Math.log(v.p.sieg_heim), lnD:Math.log(v.p.remis), lnA:Math.log(v.p.sieg_gast) };
      var q=LA.vorhersageMitFallback(lsMit, lsOhne, x, {});      /* keine Aufstellung vorhanden -> Rueckfall */
      var p=q.p, tipp=p[0]>=p[1]&&p[0]>=p[2]?'Heimsieg':(p[2]>=p[1]?'Auswaertssieg':'Remis');
      eintrag.prognose={ heimsieg:r3(p[0]), remis:r3(p[1]), auswaertssieg:r3(p[2]) };
      eintrag.tipp=tipp; eintrag.erwarteteTore={ heim:r3(v.lh), gast:r3(v.la) }; eintrag.haeufigsteTorfolge=haeufigstes(v.lh, v.la);
      eintrag.modell={ lagenStand:lagenStand, quelle:q.quelle, belastbar:v.belastbar, hinweis:v.belastbar?'':v.grund };
      eintrag.position={ empfehlung:'keine Wette', grund:'keine Quote mit Quelle und Zeitstempel; Vorteil gegen die Quote nicht belegt' };
      spiele.push(eintrag);
    });
  });
  spiele.sort(function(a,b){ return a.datum<b.datum?-1:a.datum>b.datum?1:(a.liga+a.heim<b.liga+b.heim?-1:1); });
  return { schema:1, ab:opt.ab, bis:bis, anzahl:spiele.length, ohnePrognose:ohne,
    hinweis:'Prozentzahlen sind die Rechnung des Modells, keine Garantie. Das Modell ist auf Pruefspielen schlechter als die Pinnacle-Quote (STAND). Position: keine Wette, solange keine Quote mit Quelle und Zeitstempel und kein belegter Vorteil vorliegen.',
    spiele:spiele };
}
module.exports={ prognose:prognose, haeufigstes:haeufigstes };

if(require.main===module){
  var a=process.argv, wert=function(k){ var i=a.indexOf(k); return i>=0?a[i+1]:null; };
  var of=wert('--of'), ab=wert('--ab'), tage=Number(wert('--tage')||7);
  if(!of || !/^\d{4}-\d{2}-\d{2}$/.test(ab||'')){ console.error('Aufruf: node core/model/prognose.js --of <Ordner> --ab JJJJ-MM-TT [--tage 7]'); process.exit(2); }
  var hier=__dirname, lies=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); };
  var e=prognose({ ofWurzel:of, ab:ab, tage:tage, aliases:lies(path.join(hier,'..','data','aliases.json')), modell:lies(path.join(hier,'generated','modell.json')), lagen:lies(path.join(hier,'generated','lagen.json')), produktion:fs.existsSync(path.join(hier,'generated','lagen_produktion.json'))?lies(path.join(hier,'generated','lagen_produktion.json')):null });
  fs.writeFileSync(path.join(hier,'generated','prognose.json'), JSON.stringify(e,null,1)+'\n');
  console.log('Prognose '+e.ab+' bis '+e.bis+': '+e.anzahl+' Spiele, ohne Prognose '+e.ohnePrognose);
}
