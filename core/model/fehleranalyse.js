/* ===================================================================================
   ONDO CORE - Fehleranalyse (Backlog-Punkt 94): Der Core sucht SELBST, wo er systematisch danebenliegt.
   Er zerlegt die Pruefspiele nach allen seinen Merkmalen (je fuenf Stufen), nach Liga, Land, Saison, Monat und Wochentag
   und prueft je Schnitt und je Ergebnis (Heim/Remis/Gast), ob die tatsaechliche Haeufigkeit von der vorhergesagten abweicht.
   Ein Fund zaehlt nur, wenn er (1) die Bonferroni-Huerde ueber ALLE geprueften Schnitte besteht UND (2) in beiden Haelften der
   Pruefsaisons (nach Datum) gleich gerichtet mit |z| >= 1,96 auftritt. Jeder Schnitt wird gezaehlt, nichts wird verschwiegen.
   Ein Fund heisst: "In dieser Lage fehlt dem Modell Information." Welche Information das ist, steht als Kandidatenliste dabei;
   der Name der fehlenden Information kommt aus dem Katalog (spaeter: Anfrage an die KIs ueber den Core), nicht aus den Zahlen.
   Reine Funktion, keine Uhr, kein Netz.
   =================================================================================== */
var LA=require('./lagen.js');
var KANDIDATEN={
  dPpg3:'Form', dPpg5:'Form', dPpg10:'Form', dGd5:'Form', dGd10:'Form', dOrt:'Heim-/Auswaertsstaerke', dRuhe:'Terminlast (Pausen)', dSaisonPpg:'Saisonstand', dSaisonGd:'Saisonstand',
  dElo:'Staerke', tempo10:'Torniveau', dSerieU:'Serien', dSerieS:'Serien', dLast7:'Terminlast', dLast14:'Terminlast', dLast21:'Terminlast', dGf10:'Angriff/Abwehr', dGa10:'Angriff/Abwehr',
  dDuell:'Direkte Duelle', saisonFortschritt:'Saisonphase, Motivation (Tabellenlage)', dEuLast7:'Terminlast mit Europapokal', dEuLast14:'Terminlast mit Europapokal', dEuLast21:'Terminlast mit Europapokal', dEuRuhe:'Terminlast mit Europapokal', dEu14:'Terminlast mit Europapokal',
  dLnStart:'Aufstellung', dLnBest:'Aufstellung', dFehlt:'Ausfaelle', lnH:'Kalibrierung Heimsieg', lnD:'Kalibrierung Remis', lnA:'Kalibrierung Auswaertssieg',
  liga:'Liga-Eigenschaften (Heimvorteil, Torschnitt)', land:'Liga-Eigenschaften', saison:'Zeitdrift (Spielweise aendert sich)', monat:'Saisonphase, Wetter, Motivation', wochentag:'Anstosszeit, Spielplan'
};
var ERG=['Heimsieg','Remis','Auswaertssieg'];
function phi(x){ var t=1/(1+0.2316419*Math.abs(x)), d=0.3989423*Math.exp(-x*x/2), p=d*t*(0.3193815+t*(-0.3565638+t*(1.781478+t*(-1.821256+t*1.330274)))); return x>0?1-p:p; }
function zFuer(alpha){ var lo=0, hi=10; for(var i=0;i<60;i++){ var m=(lo+hi)/2; if(1-phi(m)>alpha) lo=m; else hi=m; } return (lo+hi)/2; }
function r3(x){ return Math.round(x*1000)/1000; }

/* zeilen: Pruefspiele { r:{ datum, liga }, x, y }; lernstand: Gewichte (aus lagen.json). opt.stufen (5), opt.minN (200) */
function analysieren(zeilen, lernstand, opt){
  opt=opt||{}; var stufen=opt.stufen||5, minN=opt.minN||200;
  var vf=opt.vorhersage||function(z){ return LA.vorhersage(lernstand, z.x); };
  var sp=zeilen.map(function(z){ return { z:z, p:vf(z) }; });
  var daten=sp.map(function(s){ return s.z.r.datum; }).sort(), mitte=daten[Math.floor(daten.length/2)];
  var dims=[];                                          /* { name, art, schluessel(s)->Bucket-Name } */
  var zahlen=Object.keys(sp[0].z.x);
  zahlen.forEach(function(n){
    var w=sp.map(function(s){ return s.z.x[n]; }).sort(function(a,b){ return a-b; }), kanten=[];
    for(var i=1;i<stufen;i++) kanten.push(w[Math.floor(w.length*i/stufen)]);
    var eindeutig=kanten.filter(function(k,i){ return i===0||k!==kanten[i-1]; });
    dims.push({ name:n, art:'zahl', f:function(s){ var v=s.z.x[n], b=0; while(b<eindeutig.length && v>=eindeutig[b]) b++; return n+' Stufe '+(b+1)+'/'+(eindeutig.length+1)+(b===0?' (niedrigste)':b===eindeutig.length?' (hoechste)':''); } });
  });
  dims.push({ name:'liga', art:'kat', f:function(s){ return 'Liga '+s.z.r.liga; } });
  dims.push({ name:'land', art:'kat', f:function(s){ return 'Land '+s.z.r.liga.split('.')[0]; } });
  dims.push({ name:'saison', art:'kat', f:function(s){ return 'Saison '+s.z.r.saison; } });
  dims.push({ name:'monat', art:'kat', f:function(s){ return 'Monat '+s.z.r.datum.slice(5,7); } });
  dims.push({ name:'wochentag', art:'kat', f:function(s){ return 'Wochentag '+new Date(s.z.r.datum+'T00:00:00Z').getUTCDay(); } });
  var schnitte={};
  sp.forEach(function(s){ dims.forEach(function(d){ var k=d.name+'|'+d.f(s); (schnitte[k]=schnitte[k]||{ dim:d.name, name:d.f(s), s:[] }).s.push(s); }); });
  function stat(liste, k){ var S=0, V=0; liste.forEach(function(s){ var p=s.p[k]; S+=(s.z.y===k?1:0)-p; V+=p*(1-p); }); return { n:liste.length, mittel:S/liste.length, z:V>0?S/Math.sqrt(V):0 }; }
  var gepr=[], m=0;
  Object.keys(schnitte).forEach(function(k){
    var c=schnitte[k]; if(c.s.length<minN) return;
    var A=c.s.filter(function(s){ return s.z.r.datum<mitte; }), B=c.s.filter(function(s){ return s.z.r.datum>=mitte; });
    for(var e=0;e<3;e++){
      m++; var g=stat(c.s,e), a=A.length?stat(A,e):{ z:0 }, b=B.length?stat(B,e):{ z:0 };
      gepr.push({ dimension:c.dim, schnitt:c.name, ergebnis:ERG[e], n:g.n, abweichungProzentpunkte:r3(g.mittel*100), z:r3(g.z), zHaelfteA:r3(a.z), zHaelfteB:r3(b.z),
        bestaetigt:false, kandidaten:KANDIDATEN[c.dim]||'unbekannt' });
    }
  });
  var huerde=Math.round(zFuer(0.05/(2*m))*100)/100;           /* zweiseitig, Bonferroni ueber alle geprueften Schnitte x Ergebnisse */
  gepr.forEach(function(f){ f.bestaetigt=Math.abs(f.z)>=huerde && Math.abs(f.zHaelfteA)>=1.96 && Math.abs(f.zHaelfteB)>=1.96 && Math.sign(f.zHaelfteA)===Math.sign(f.zHaelfteB) && Math.sign(f.z)===Math.sign(f.zHaelfteA); });
  gepr.sort(function(a,b){ return Math.abs(b.z)-Math.abs(a.z); });
  return { schema:1, spielePruef:sp.length, halbierung:mitte, geprueft:m, huerdeZweiseitig:huerde,
    funde:gepr.filter(function(f){ return f.bestaetigt; }), auffaelligsteNichtBestaetigt:gepr.filter(function(f){ return !f.bestaetigt; }).slice(0,10),
    hinweis:'Fund = in dieser Lage weicht die tatsaechliche Haeufigkeit systematisch von der vorhergesagten ab (beide Haelften, Bonferroni ueber alle geprueften Schnitte). Es nennt die Lage, nicht die fehlende Information; die Kandidatenliste ist ein Vorschlag aus dem Katalog.' };
}
module.exports={ analysieren:analysieren, KANDIDATEN:KANDIDATEN };

if(require.main===module){
  var fs=require('fs'), path=require('path'), hier=__dirname, lies=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); };
  var L=require('./lauf.js'), aliases=lies(path.join(hier,'..','data','aliases.json')), vers=lies(path.join(hier,'versiegelt.json'));
  var par=lies(path.join(hier,'generated','modell.json')).parameter, lg=lies(path.join(hier,'generated','lagen.json'));
  var bestand=L.bestandLaden(path.join(hier,'..','data','generated'), aliases), zeilen=LA.zeilenBauen(bestand, par, null);
  var pruefen=zeilen.filter(function(z){ return z.r.rolle==='pruefen' && !z.r.zusatz && z.r.datum<vers.stichtag; });
  var alle=lg.mengen.filter(function(m){ return m.menge==='alle'; })[0];
  var e=analysieren(pruefen, alle.lernstand);
  e.modell='Menge alle, Lernstand '+alle.lernstand.pruefsumme+' (Gruppen: '+(alle.gewaehlt.join(',')||'keine; nur Kalibrierung des alten Modells')+')';
  fs.writeFileSync(path.join(hier,'generated','luecken.json'), JSON.stringify(e,null,1)+'\n');
  console.log('Fehleranalyse: '+e.spielePruef+' Pruefspiele, '+e.geprueft+' Schnitte x Ergebnis geprueft, Huerde z='+e.huerdeZweiseitig+', bestaetigte Funde: '+e.funde.length);
  e.funde.forEach(function(f){ console.log('  FUND '+f.schnitt+' | '+f.ergebnis+' | '+f.abweichungProzentpunkte+' Prozentpunkte | z='+f.z+' (A '+f.zHaelfteA+', B '+f.zHaelfteB+') | n='+f.n+' | Kandidat: '+f.kandidaten); });
  e.auffaelligsteNichtBestaetigt.slice(0,5).forEach(function(f){ console.log('  (nicht bestaetigt) '+f.schnitt+' | '+f.ergebnis+' | '+f.abweichungProzentpunkte+' pp | z='+f.z+' (A '+f.zHaelfteA+', B '+f.zHaelfteB+')'); });
}
