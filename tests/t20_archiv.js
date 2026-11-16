/* Test Prognose-Archiv: nie ueberschreiben, nur Spiele ab Folgetag, Bewertung unveraenderlich, keine Zukunft. */
var u=require('./umgebung.js'), A=require('../core/model/prognose_archiv.js');
var sp=function(d,p){ return { liga:'de.1', datum:d, heim:'A', gast:'B', schluessel:{ heim:'a', gast:'b' }, prognose:{ heimsieg:p[0], remis:p[1], auswaertssieg:p[2] }, tipp:'Heimsieg' }; };
u.block('Aufnahme');
var ar={ eintraege:{} };
u.pruef('Spiel am Folgetag wird aufgenommen', A.aufnehmen(ar,{ ab:'2026-11-20', spiele:[sp('2026-11-21',[0.5,0.3,0.2])] },'s1')===1);
u.pruef('Gegenprobe: Spiel am selben Tag wird NICHT aufgenommen', A.aufnehmen({eintraege:{}},{ ab:'2026-11-20', spiele:[sp('2026-11-20',[0.5,0.3,0.2])] },'s1')===0);
u.pruef('Gegenprobe: schon abgelegter Tipp wird nie ueberschrieben', (function(){ A.aufnehmen(ar,{ ab:'2026-11-20', spiele:[sp('2026-11-21',[0.1,0.1,0.8])] },'s2'); var e=ar.eintraege[Object.keys(ar.eintraege)[0]]; return e.p[0]===0.5 && e.modellStand==='s1'; })());
u.pruef('Spiel ohne Prognose wird nicht aufgenommen', A.aufnehmen({eintraege:{}},{ ab:'2026-11-20', spiele:[{ liga:'de.1', datum:'2026-11-22', schluessel:{heim:'x',gast:'y'}, prognose:null }] },'s')===0);
u.block('Bewertung');
var z=[{ liga:'de.1', datum:'2026-11-21', heimKey:'a', gastKey:'b', th:2, tg:1 }];
u.pruef('Ergebnis wird bewertet (Heimsieg, Verlust = -ln 0,5)', A.bewerten(ar,z)===1 && Math.abs(ar.eintraege[Object.keys(ar.eintraege)[0]].ergebnis.verlust-0.6931)<0.0002);
u.pruef('Gegenprobe: bewerteter Eintrag aendert sich nie mehr', (function(){ var k=Object.keys(ar.eintraege)[0], v=ar.eintraege[k].ergebnis.verlust; A.bewerten(ar,[{ liga:'de.1', datum:'2026-11-21', heimKey:'a', gastKey:'b', th:0, tg:5 }]); return ar.eintraege[k].ergebnis.verlust===v; })());
u.pruef('Gegenprobe: Spiel ohne Ergebnis bleibt offen', A.bewerten({ eintraege:{ 'k':{ liga:'de.1', datum:'2026-11-30', p:[0.3,0.3,0.4] } } }, z)===0);
var s=A.zusammenfassung(ar); u.pruef('Zusammenfassung: 1 bewertet, Trefferquote 1', s.bewertet===1 && s.trefferquote===1);
process.exit(u.bilanz()?1:0);
