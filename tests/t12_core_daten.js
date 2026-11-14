/* ===================================================================================
   t12 - Datenfundament des Ondo Core (Backlog-Punkt 94).
   A  Paritaet: die nachgebauten Funktionen in core/data/identity.js liefern auf echten
      Namen und Zeiten dasselbe wie die Originale in beta.html (ueber tests/umgebung.js,
      also der echte <script>-Block - mit ONDO_BETA auch gegen eine andere Fassung).
   B  Schema: ein gueltiger Datensatz besteht, jede einzelne Verletzung faellt durch.
   C  Saisonpruefung: vollstaendig / laufend / unvollstaendig, Zusatzspiele.
   D  Aufteilung: Lernen, Pruefen und Holdout sind getrennt und zeitlich geordnet.
   E  Alias-Tabelle: Aufloesung, Geltungsbereich Land, verbotene Ketten.
   F  Bauen auf einem kleinen, hier erzeugten Bestand: ergaenzen, bestaetigen, Widerspruch,
      geparkt, unaufgeloest, Dublette, gleiche Eingabe = gleiche Ausgabe.
   G  Der wirklich im Repo liegende Bestand: jede Saisondatei gueltig, Katalog stimmt,
      Groessengrenzen, eingefrorene Aufteilung eingehalten.
   Dieser Test laedt beta.html nur zum Vergleichen und aendert dort nichts.
   =================================================================================== */
var fs=require('fs'), path=require('path'), os=require('os');
var u=require('./umgebung.js');
var ident=require('../core/data/identity.js'), schema=require('../core/data/schema.js'),
    validate=require('../core/data/validate.js'), quellen=require('../core/data/quellen.js'),
    bau=require('../core/data/bauen.js');
var REPO=path.join(__dirname,'..'), GEN=path.join(REPO,'core','data','generated');
var c=u.neueUmgebung();
function gleich(a,b){ return JSON.stringify(a)===JSON.stringify(b); }

c.bereit.then(function(){

/* ═══ A. Paritaet mit beta.html ═══ */
u.block('A. Paritaet der nachgebauten Funktionen mit beta.html');
var namen={}, zeiten=[];
fs.readdirSync(path.join(REPO,'daten','espn-ergebnisse')).forEach(function(n){
  JSON.parse(fs.readFileSync(path.join(REPO,'daten','espn-ergebnisse',n),'utf8')).spiele.forEach(function(v){
    namen[v.heim]=1; namen[v.gast]=1; if(v.kickoffUtc) zeiten.push(v.kickoffUtc);
  });
});
var katalog=JSON.parse(fs.readFileSync(path.join(GEN,'katalog.json'),'utf8'));
katalog.dateien.forEach(function(k){
  JSON.parse(fs.readFileSync(path.join(GEN,k.datei),'utf8')).teams.forEach(function(t){ namen[t]=1; });
});
['', '  ', 'FC', 'PSV', '1. FC Köln', 'Bor. Mönchengladbach', 'Ærø Ødense Åls', 'Łódź Đakovo', 'SV 07',
 'Straße ß', 'São Paulo', 'İstanbul Başakşehir', 'A.C. Milan!!', '1899', null, undefined, 42].forEach(function(x){ namen[x]=1; });
var liste=Object.keys(namen), abwN=0, abwT=0, abwI=0;
liste.forEach(function(n){
  if(c.fxNorm(n)!==ident.fxNorm(n)) abwN++;
  if(!gleich(Array.from(c.fxTokens(n)), ident.fxTokens(n))) abwT++;
});
u.pruef('genug echte Namen im Vergleich (mindestens 1000)', liste.length>=1000, liste.length+' Namen');
u.pruef('fxNorm: keine Abweichung', abwN===0, abwN+' Abweichungen');
u.pruef('fxTokens: keine Abweichung', abwT===0, abwT+' Abweichungen');
for(var i=0;i+1<liste.length;i+=2){
  var d='2026-'+('0'+(1+i%12)).slice(-2)+'-'+('0'+(1+i%28)).slice(-2);
  if(c.fxId(d, liste[i], liste[i+1])!==ident.fxId(d, liste[i], liste[i+1])) abwI++;
}
u.pruef('fxId: keine Abweichung', abwI===0, abwI+' Abweichungen');
u.pruef('fxId: leere Eingaben gleich', c.fxId('', '', '')===ident.fxId('', '', '') && c.fxId(null,'A','B')===ident.fxId(null,'A','B'));
var abwB=0;
zeiten.concat(['2026-03-29T00:30Z','2026-03-29T01:30Z','2026-10-25T00:30Z','2026-10-25T01:30Z','2026-12-31T23:30Z','unsinn','']).forEach(function(z){
  var a=c.fxBerlin(z), b=ident.fxBerlin(z);
  if(!gleich(a?{datum:a.datum,zeit:a.zeit}:null, b)) abwB++;
});
u.pruef('fxBerlin: keine Abweichung (inkl. Zeitumstellung und Jahreswechsel)', abwB===0, abwB+' Abweichungen bei '+zeiten.length+' Zeiten');
var abwM=0, codes=['sieg_heim','sieg_gast','remis','ueber','unter','btts_ja','btts_nein','gibtsnicht'];
codes.forEach(function(code){ for(var h=0;h<=6;h++) for(var g=0;g<=6;g++){
  if(c.marktUrteil(code,h,g)!==ident.marktUrteil(code,h,g)) abwM++; } });
u.pruef('marktUrteil: keine Abweichung ueber 8 Codes x 49 Endstaende', abwM===0, abwM+' Abweichungen');
u.pruef('FX_SCHWACH: dieselben Kuerzel', gleich(Object.keys(c.FX_SCHWACH).sort(), Object.keys(ident.FX_SCHWACH).sort()));

/* ═══ B. Schema ═══ */
u.block('B. Schema eines Spiels');
function gut(){ return { id:'fx20240823_a_b', liga:'de.1', saison:'2024-25', datum:'2024-08-23', heim:'A', gast:'B',
  heimKey:'a', gastKey:'b', th:2, tg:3, hz:[0,2], quellen:['of'], beleg:{}, zusatz:false }; }
u.pruef('gueltiger Datensatz besteht', schema.pruefeRecord(gut()).length===0);
[['id',''],['liga','xx.9'],['saison','2024'],['datum','2024-13-40'],['heim',''],['gastKey','a'],['th',-1],['tg',2.5],
 ['th','2'],['hz',[3,0]],['hz',[0]],['quellen',[]],['quellen',['kicker']]].forEach(function(m){
  var r=gut(); r[m[0]]=m[1];
  u.pruef('ungueltig erkannt: '+m[0]+' = '+JSON.stringify(m[1]), schema.pruefeRecord(r).length>0);
});
u.pruef('Halbzeit darf fehlen', (function(){ var r=gut(); r.hz=null; return schema.pruefeRecord(r).length===0; })());
var aufl0=ident.aliasIndex({aliases:[]});
var packt=schema.packen({liga:'de.1',saison:'2024-25',status:'vollstaendig'}, [gut()]);
var zurueck=schema.entpacken(packt, ident, aufl0, 'de')[0];
u.pruef('packen/entpacken erhaelt Datum, Namen, Tore, Halbzeit, Quelle',
  zurueck.datum==='2024-08-23' && zurueck.heim==='A' && zurueck.gast==='B' && zurueck.th===2 && zurueck.tg===3 &&
  gleich(zurueck.hz,[0,2]) && gleich(zurueck.quellen,['of']) && zurueck.zusatz===false);
u.pruef('15 Ligen, jede Kennung eindeutig', schema.LIGEN.length===15 &&
  Object.keys(schema.LIGEN.reduce(function(a,l){ a[l.id]=1; return a; },{})).length===15);

/* ═══ C. Saisonpruefung ═══ */
u.block('C. Saisonpruefung');
function runde(n){ var a=[]; for(var i=0;i<n;i++) for(var j=0;j<n;j++) if(i!==j)
  a.push({ heimKey:'t'+i, gastKey:'t'+j, datum:'2024-09-'+('0'+(1+((i*n+j)%28))).slice(-2), hatErgebnis:true }); return a; }
var v=validate.saisonStatus(runde(4), false);
u.pruef('vollstaendige Doppelrunde (4 Teams, 12 Spiele)', v.status==='vollstaendig' && v.soll===12 && v.zusatz===0);
var f1=runde(4); f1[5].hatErgebnis=false;
u.pruef('ein fehlendes Ergebnis → unvollstaendig', validate.saisonStatus(f1,false).status==='unvollstaendig');
u.pruef('ein fehlendes Ergebnis in der aktuellen Saison → laufend', validate.saisonStatus(f1,true).status==='laufend');
var f2=runde(4); f2.splice(3,1);
u.pruef('eine fehlende Paarung → unvollstaendig', validate.saisonStatus(f2,false).status==='unvollstaendig');
var f3=runde(4).concat([{heimKey:'t0',gastKey:'t1',datum:'2025-05-30',hatErgebnis:true}]);
var v3=validate.saisonStatus(f3,false);
u.pruef('ein Zusatzspiel bleibt vollstaendig und wird gezaehlt', v3.status==='vollstaendig' && v3.zusatz===1);
var f4=runde(4); for(var z=0;z<13;z++) f4.push({heimKey:'t0',gastKey:'t1',datum:'2025-05-30',hatErgebnis:true});
u.pruef('13 Zusatzspiele → unvollstaendig', validate.saisonStatus(f4,false).status==='unvollstaendig');
var f5=runde(4); f5.push({heimKey:'t2',gastKey:'t2',datum:'2025-01-01',hatErgebnis:true});
u.pruef('Mannschaft gegen sich selbst → unvollstaendig', validate.saisonStatus(f5,false).status==='unvollstaendig');
u.pruef('leere Saison → unvollstaendig', validate.saisonStatus([],true).status==='unvollstaendig');
u.pruef('vollstaendig schlaegt laufend (fertige aktuelle Saison)', validate.saisonStatus(runde(4),true).status==='vollstaendig');
var zr=[{heimKey:'a',gastKey:'b',datum:'2025-05-30'},{heimKey:'a',gastKey:'b',datum:'2024-09-01'},{heimKey:'b',gastKey:'a',datum:'2024-10-01'}];
validate.zusatzMarkieren(zr);
u.pruef('Zusatz ist das SPAETERE Spiel derselben Paarung', zr[0].zusatz===true && zr[1].zusatz===false && zr[2].zusatz===false);

/* ═══ D. Aufteilung ═══ */
u.block('D. Aufteilung Lernen / Pruefen / Holdout');
var zs={'2019-20':'vollstaendig','2020-21':'unvollstaendig','2021-22':'vollstaendig','2022-23':'vollstaendig',
        '2023-24':'vollstaendig','2024-25':'vollstaendig','2025-26':'unvollstaendig','2026-27':'laufend'};
var sp={lernenBis:'2022-23',pruefen:'2023-24',holdout:'2024-25'};
var ap=validate.aufteilungPruefen(sp, zs);
u.pruef('gueltige Aufteilung ohne Fehler', ap.fehler.length===0);
u.pruef('Rollen wie erwartet', gleich(ap.rollen, {'2019-20':'lernen','2020-21':'aus','2021-22':'lernen','2022-23':'lernen',
  '2023-24':'pruefen','2024-25':'holdout','2025-26':'spaeter','2026-27':'spaeter'}));
u.pruef('Holdout nicht vollstaendig → Fehler',
  validate.aufteilungPruefen(sp, Object.assign({},zs,{'2024-25':'unvollstaendig'})).fehler.length>0);
u.pruef('Pruefsaison fehlt → Fehler', validate.aufteilungPruefen({lernenBis:'2022-23',pruefen:'2030-31',holdout:'2031-32'}, zs).fehler.length>0);
u.pruef('Reihenfolge verletzt (Holdout vor Pruefen) → Fehler',
  validate.aufteilungPruefen({lernenBis:'2022-23',pruefen:'2024-25',holdout:'2023-24'}, zs).fehler.length>0);
u.pruef('Lernen reicht in die Pruefsaison → Fehler',
  validate.aufteilungPruefen({lernenBis:'2023-24',pruefen:'2023-24',holdout:'2024-25'}, zs).fehler.length>0);
u.pruef('fehlende Aufteilung → Fehler', validate.aufteilungPruefen(null, zs).fehler.length>0);

/* ═══ E. Alias-Tabelle ═══ */
u.block('E. Alias-Tabelle');
var al=ident.aliasIndex({aliases:[{land:'de',von:'Bayern Munich',nach:'FC Bayern München'},{land:'es',von:'Deportivo',nach:'RC Deportivo La Coruña'}]});
u.pruef('Alias loest auf', al('de','Bayern Munich').schluessel===ident.teamSchluessel('FC Bayern München') && al('de','Bayern Munich').alias===true);
u.pruef('Schreibweise ohne Alias behaelt eigenen Schluessel', al('de','Bayern München').alias===false &&
  al('de','Bayern München').schluessel===ident.teamSchluessel('FC Bayern München'));
u.pruef('Alias gilt nur im eigenen Land', al('it','Bayern Munich').alias===false && al('de','Deportivo').alias===false);
u.pruef('keine Fehler bei sauberer Tabelle', al.fehler.length===0);
u.pruef('Kette wird als Fehler gemeldet',
  ident.aliasIndex({aliases:[{land:'de',von:'A Stadt',nach:'B Stadt'},{land:'de',von:'B Stadt',nach:'C Stadt'}]}).fehler.length>0);
u.pruef('widerspruechlicher Doppeleintrag wird gemeldet',
  ident.aliasIndex({aliases:[{land:'de',von:'A Stadt',nach:'B Stadt'},{land:'de',von:'A Stadt',nach:'C Stadt'}]}).fehler.length>0);
u.pruef('unvollstaendige Zeile wird gemeldet', ident.aliasIndex({aliases:[{land:'de',von:'A Stadt'}]}).fehler.length>0);
var echt=JSON.parse(fs.readFileSync(path.join(REPO,'core','data','aliases.json'),'utf8'));
var alE=ident.aliasIndex(echt);
u.pruef('echte Alias-Tabelle: keine Fehler, keine Ketten', alE.fehler.length===0, echt.aliases.length+' Zeilen');
u.pruef('echte Alias-Tabelle: jede Zeile wirkt (kein toter Eintrag)',
  echt.aliases.every(function(a){ return ident.teamSchluessel(a.von)!==ident.teamSchluessel(a.nach); }));
u.pruef('Saison aus Datum: Juli beginnt die neue Saison',
  ident.saisonAusDatum('2026-06-30')==='2025-26' && ident.saisonAusDatum('2026-07-01')==='2026-27' &&
  ident.saisonAusDatum('1999-12-01')==='1999-00' && ident.saisonAusDatum('x')==='');

/* ═══ F. Bauen auf einem kleinen eigenen Bestand ═══ */
u.block('F. Bauen: zusammenfuehren, pruefen, melden');
var tmp=fs.mkdtempSync(path.join(os.tmpdir(),'t12-'));
function schreib(p, obj){ fs.mkdirSync(path.dirname(p),{recursive:true}); fs.writeFileSync(p, JSON.stringify(obj)); }
var T=['Alpha FC','Beta 04','Gamma SV','Delta United'];
function ofSaison(ohne){ var m=[], tag=1;
  T.forEach(function(a){ T.forEach(function(b){ if(a===b) return; tag++;
    var x={ date:'S-'+('0'+(8+(tag%4))).slice(-2)+'-'+('0'+(1+tag)).slice(-2), team1:a, team2:b };
    if(!(ohne&&ohne(a,b))) x.score={ ft:[2,1], ht:[1,0] };
    m.push(x); }); });
  return m; }
function mitJahr(m, j){ return { matches:m.map(function(x){ var y=JSON.parse(JSON.stringify(x));
  y.date=y.date.replace('S', String(Number(x.date.slice(2,4))>=7?j:j+1)); return y; }) }; }
var LIGA_ALLE=schema.LIGEN.map(function(l){ return l.id; });
LIGA_ALLE.forEach(function(lg){
  [2021,2022,2023].forEach(function(j){ schreib(path.join(tmp,'of',j+'-'+String(j+1).slice(2),lg+'.json'), mitJahr(ofSaison(),j)); });
});
/* de.1 2024-25: aktuelle Saison, drei Spiele ohne Ergebnis */
schreib(path.join(tmp,'of','2024-25','de.1.json'), mitJahr(ofSaison(function(a,b){
  return (a==='Alpha FC'&&b==='Beta 04')||(a==='Gamma SV'&&b==='Delta United')||(a==='Beta 04'&&b==='Gamma SV'); }),2024));
function espn(id, heim, gast, th, tg, extra){ return Object.assign({ provider:'espn', providerEventId:id,
  providerCompetitionSlug:'ger.1', datum:'2024-09-10', kickoffUtc:'2024-09-10T18:30Z', heim:heim, gast:gast,
  torHeim:th, torGast:tg, status:'FT', verlaengerungGespielt:false, halbzeit:'1:0',
  beleg:{ completed:true, statusTyp:'STATUS_FULL_TIME' } }, extra||{}); }
schreib(path.join(tmp,'espn','2024-09.json'), { hinweis:'Test', spiele:[
  espn('e1','Alpha','Beta',3,1),                               /* fuellt ein fehlendes Ergebnis */
  espn('e2','Alpha FC','Gamma SV',2,1),                        /* bestaetigt OpenFootball */
  espn('e3','Alpha FC','Delta United',0,0),                    /* widerspricht OpenFootball (2:1) */
  espn('e4','Gamma SV','Delta United',1,1,{ status:'POSTPONED', beleg:{ completed:false, statusTyp:'STATUS_POSTPONED' } }),
  espn('e5','Beta 04','Unbekannt 1900',1,0),                   /* Name nicht aufloesbar */
  espn('e2','Alpha FC','Gamma SV',2,1),                        /* dieselbe ESPN-ID zweimal */
  espn('e6','Beta 04','Gamma SV',4,4,{ verlaengerungGespielt:true }),   /* Ligaspiel mit Verlaengerung: geparkt */
  espn('e7','Team X','Team Y',1,0,{ providerCompetitionSlug:'bra.1' })  /* Liga ausserhalb des Bestands */
]});
var spl={ ligen:{} }; LIGA_ALLE.forEach(function(lg){ spl.ligen[lg]={lernenBis:'2021-22',pruefen:'2022-23',holdout:'2023-24'}; });
var eing={ ofWurzel:path.join(tmp,'of'), espnOrdner:path.join(tmp,'espn'), aliases:{aliases:[]}, splits:spl };
var e1=bau.bauen(eing), e2=bau.bauen(eing);
u.pruef('Bauen ohne Fehler', e1.fehler.length===0, e1.fehler.slice(0,2).join(' | '));
u.pruef('gleiche Eingabe → gleiche Ausgabe', gleich(e1,e2));
var z=e1.coverage.espn.verarbeitet, s2425=e1.coverage.ligen['de.1'].saisons['2024-25'];
u.pruef('ESPN fuellt genau ein fehlendes Ergebnis', z.gefuellt===1);
u.pruef('ESPN bestaetigt genau ein Ergebnis', z.bestaetigt===1);
u.pruef('Widerspruch wird gemeldet und das Spiel nicht gespeichert', z.konflikt===1 && s2425.konflikte.length===1 &&
  s2425.konflikte[0].of==='2:1' && s2425.konflikte[0].espn==='0:0');
u.pruef('zwei Spiele geparkt (verlegt, Verlaengerung)', e1.coverage.espn.geparkt===2);
u.pruef('unaufgeloester Name wird genannt, nicht geraten', z.unaufgeloest===1 &&
  e1.coverage.ligen['de.1'].espnUnaufgeloest['Unbekannt 1900']===1);
u.pruef('doppelte ESPN-ID zaehlt nur einmal', z.doppelt===1);
u.pruef('Liga ausserhalb des Bestands wird gezaehlt, nicht verarbeitet', e1.coverage.espn.ohneLiga['bra.1']===1);
u.pruef('aktuelle Saison ist laufend', s2425.status==='laufend' && e1.coverage.aktuelleSaison==='2024-25');
/* 12 angesetzt - 3 ohne Ergebnis + 1 von ESPN gefuellt - 1 Widerspruch = 9 gespeichert */
u.pruef('gespeichert: 9 von 12 Spielen der laufenden Saison', s2425.gespeichert===9, String(s2425.gespeichert));
var sh=e1.dateien['spiele/de.1/2024-25.json'];
var gef=schema.entpacken(sh, ident, ident.aliasIndex({aliases:[]}), 'de').filter(function(r){ return r.heim==='Alpha FC' && r.gast==='Beta 04'; })[0];
u.pruef('gefuelltes Spiel traegt ESPN-Ergebnis, ESPN-Datum (Berlin) und Quelle espn',
  gef && gef.th===3 && gef.tg===1 && gef.datum==='2024-09-10' && gleich(gef.quellen,['espn']));
u.pruef('Rollen im Katalog: lernen, pruefen, holdout, spaeter', gleich(
  e1.katalog.dateien.filter(function(k){ return k.liga==='de.1'; }).map(function(k){ return k.rolle; }),
  ['lernen','pruefen','holdout','spaeter']));
u.pruef('Lernbestand zaehlt nur die Lernsaison (15 Ligen x 12 Spiele)', e1.coverage.summen.lernbestand===180);
var eKaputt=bau.bauen(Object.assign({},eing,{ splits:{ ligen:Object.assign({},spl.ligen,{'de.1':{lernenBis:'2022-23',pruefen:'2023-24',holdout:'2024-25'}}) } }));
u.pruef('Holdout auf laufender Saison → Bauen meldet Fehler', eKaputt.fehler.some(function(x){ return /de\.1: holdout-Saison 2024-25/.test(x); }));
var eAlias=bau.bauen(Object.assign({},eing,{ aliases:{aliases:[{land:'de',von:'Unbekannt 1900',nach:'Delta United'}]} }));
u.pruef('mit Alias-Zeile wird derselbe Name aufgeloest', eAlias.coverage.espn.verarbeitet.unaufgeloest===0);
u.pruef('Saisondatei: ein Spiel je Zeile, gueltiges JSON',
  gleich(JSON.parse(bau.shardText(sh)), sh) && bau.shardText(sh).split("\n").length===sh.spiele.length+5);
u.pruef('ESPN-Positivregel: nur FT + completed + FULL_TIME ohne Verlaengerung',
  quellen.espnNormalBeendet(espn('x','A','B',1,0))===true &&
  quellen.espnNormalBeendet(espn('x','A','B',1,0,{beleg:{completed:true,statusTyp:'STATUS_FINAL_PEN'}}))===false &&
  quellen.espnNormalBeendet(espn('x','A','B',1,0,{beleg:{completed:false,statusTyp:'STATUS_FULL_TIME'}}))===false &&
  quellen.espnNormalBeendet(espn('x','A','B',null,0))===false);
fs.rmSync(tmp,{recursive:true,force:true});

/* ═══ G. Der Bestand im Repo ═══ */
u.block('G. Der im Repo liegende Bestand');
var cov=JSON.parse(fs.readFileSync(path.join(GEN,'coverage.json'),'utf8'));
var splitsEcht=JSON.parse(fs.readFileSync(path.join(REPO,'core','data','splits.json'),'utf8'));
var ungueltig=0, zahlFalsch=0, zuGross=0, summe=0, idDoppelt=0, rolleFalsch=0, statusFalsch=0;
var holdoutIds={}, lernIds={}, pruefIds={}, ueberlappung=0, zeitFehler=0;
katalog.dateien.forEach(function(k){
  var p=path.join(GEN,k.datei);
  if(fs.statSync(p).size>500*1024) zuGross++;
  var d=JSON.parse(fs.readFileSync(p,'utf8'));
  var recs=schema.entpacken(d, ident, alE, schema.liga(d.liga).land), ids={};
  if(recs.length!==k.spiele) zahlFalsch++;
  if(d.status!==k.status || d.status!==cov.ligen[d.liga].saisons[d.saison].status) statusFalsch++;
  summe+=recs.length;
  var sp2=splitsEcht.ligen[d.liga];
  var soll = d.saison===sp2.holdout?'holdout' : d.saison===sp2.pruefen?'pruefen' : d.saison>sp2.holdout?'spaeter' :
             (d.status==='vollstaendig' && d.saison<=sp2.lernenBis)?'lernen':'aus';
  if(soll!==k.rolle) rolleFalsch++;
  recs.forEach(function(r){
    if(schema.pruefeRecord(r).length) ungueltig++;
    if(ids[r.id]) idDoppelt++; ids[r.id]=1;
    var kk=d.liga+'|'+r.id;
    if(k.rolle==='lernen'){ lernIds[kk]=1; if(r.datum.slice(0,4)>sp2.pruefen.slice(0,4)) zeitFehler++; }
    if(k.rolle==='pruefen') pruefIds[kk]=1;
    if(k.rolle==='holdout') holdoutIds[kk]=1;
  });
});
Object.keys(holdoutIds).forEach(function(x){ if(lernIds[x]||pruefIds[x]) ueberlappung++; });
Object.keys(pruefIds).forEach(function(x){ if(lernIds[x]) ueberlappung++; });
u.pruef('Katalog nennt mindestens 150 Saisondateien', katalog.dateien.length>=150, String(katalog.dateien.length));
u.pruef('jede Saisondatei: Anzahl wie im Katalog', zahlFalsch===0);
u.pruef('jede Saisondatei: Zustand wie in Katalog und Coverage', statusFalsch===0);
u.pruef('jedes Spiel besteht die Schemapruefung', ungueltig===0, summe+' Spiele');
u.pruef('keine doppelte Spiel-ID innerhalb einer Saison', idDoppelt===0);
u.pruef('Summe der Spiele = Katalogsumme = Coveragesumme', summe===katalog.summen.spiele && summe===cov.summen.spiele);
u.pruef('Rollen folgen der eingefrorenen Aufteilung', rolleFalsch===0);
u.pruef('Lernen, Pruefen und Holdout teilen kein Spiel', ueberlappung===0,
  Object.keys(lernIds).length+' / '+Object.keys(pruefIds).length+' / '+Object.keys(holdoutIds).length);
u.pruef('kein Lernspiel liegt zeitlich nach Beginn der Pruefsaison', zeitFehler===0);
u.pruef('Holdout und Pruefsaison jeder Liga sind vollstaendig', schema.LIGEN.every(function(l){
  var sp3=splitsEcht.ligen[l.id], ss=cov.ligen[l.id].saisons;
  return sp3 && ss[sp3.holdout].status==='vollstaendig' && ss[sp3.pruefen].status==='vollstaendig' &&
         sp3.lernenBis<sp3.pruefen && sp3.pruefen<sp3.holdout; }));
u.pruef('keine Saisondatei ueber 500 KB', zuGross===0);
u.pruef('Katalog und Coverage je unter 250 KB',
  fs.statSync(path.join(GEN,'katalog.json')).size<250*1024 && fs.statSync(path.join(GEN,'coverage.json')).size<250*1024);
u.pruef('kein Widerspruch zwischen den Quellen im Bestand', cov.espn.verarbeitet.konflikt===0);
u.pruef('Lernbestand mindestens 40.000 Spiele', cov.summen.lernbestand>=40000, String(cov.summen.lernbestand));
var dateienAufPlatte=0;
(function zaehl(o){ fs.readdirSync(o).forEach(function(n){ var p=path.join(o,n);
  if(fs.statSync(p).isDirectory()) zaehl(p); else dateienAufPlatte++; }); })(path.join(GEN,'spiele'));
u.pruef('keine verwaiste Saisondatei neben dem Katalog', dateienAufPlatte===katalog.dateien.length);

process.exit(u.bilanz()?1:0);
}).catch(function(e){ console.error(e); process.exit(1); });
