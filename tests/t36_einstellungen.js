/* Einstellungen des Grundmodells aus den Spielen lernen (Idee 17, 27.11.2026): Sperre, Suche, Bericht.
   Gegenproben: Spiel ab Stichtag bricht ab, Holdout/spaeter werden nicht benutzt, Suche findet ein bekanntes Minimum. */
var fs=require('fs'), u=require('./umgebung.js'), E=require('../core/model/einstellungen_lernen.js');

u.block('Sperre');
var b={ jeLand:{ de:[ { rolle:'lernen', datum:'2020-01-01' }, { rolle:'holdout', datum:'2025-01-01' }, { rolle:'spaeter', datum:'2026-09-01' }, { rolle:'pruefen', datum:'2024-01-01' } ] } };
var f=E.bestandFuerWahl(b, '2026-08-01');
u.pruef('Holdout und spaeter fallen weg, lernen und pruefen bleiben', f.jeLand.de.length===2 && f.jeLand.de.every(function(r){ return r.rolle==='lernen'||r.rolle==='pruefen'; }));
var wurf=false; try{ E.bestandFuerWahl({ jeLand:{ de:[ { rolle:'lernen', datum:'2026-08-01', id:'x' } ] } }, '2026-08-01'); }catch(e){ wurf=/SPERRE/.test(e.message); }
u.pruef('Gegenprobe: Lernspiel am Stichtag bricht mit SPERRE ab', wurf);

u.block('Suche');
var nm=E.nelderMead(function(v){ return Math.pow(v[0]-0.7,2)+Math.pow(v[1]+0.2,2)+1; }, [0,0], [0.1,0.1], 400);
u.pruef('findet bekanntes Minimum (0,7 / -0,2)', Math.abs(nm.bester[0]-0.7)<1e-3 && Math.abs(nm.bester[1]+0.2)<1e-3);
u.pruef('Gegenprobe: bricht nicht vorzeitig ab (mehr als 20 Rechnungen)', nm.auswertungen>20);

u.block('Bericht');
var e=JSON.parse(fs.readFileSync(__dirname+'/../core/model/generated/einstellungen.json','utf8'));
var p=e.pruefsaisons;
u.pruef('z = Vorsprung / Standardfehler', Math.abs(p.z-p.vorsprung/p.standardfehler)<0.2 && p.spiele>5000);
u.pruef('bestanden nur bei z >= Huerde', e.bestanden===(p.z>=e.huerde));
u.pruef('acht Einstellungen, alle innerhalb der Grenzen', E.NAMEN.length===8 && E.NAMEN.every(function(n){ var g=E.GRENZEN[n], w=e.einstellungen[n].gelernt; return w>=g[0]&&w<=g[1]; }));
var ideen=JSON.parse(fs.readFileSync(__dirname+'/../core/model/ideen.json','utf8')).ideen, i17=ideen.filter(function(i){ return i.nr===17; })[0];
u.pruef('Idee 17 vorab eingetragen, inkl. abgebrochenem Lauf', !!i17 && i17.namen.indexOf('E-v1-einstellungen')>=0 && i17.namen.indexOf('E-v1-einstellungen-abgebrochen')>=0 && i17.versuche===i17.namen.length);
var k=JSON.parse(fs.readFileSync(__dirname+'/../core/model/kandidaten.json','utf8'));
u.pruef('laufendes Modell unveraendert: kandidaten.json hat weiter K1-K8 vom 14.11.', k.kandidaten.length===8 && k.festgelegt==='2026-11-14');
process.exit(u.bilanz()?1:0);
