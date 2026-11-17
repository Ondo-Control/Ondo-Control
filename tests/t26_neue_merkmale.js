/* Neue Merkmalsgruppen (Fassung v3: Serie, Spiele in 7/14/21 Tagen, Angriff/Abwehr, Duelle, Saisonfortschritt):
   (1) Handrechnung an einem kleinen Spielplan, (2) kein Blick in die Zukunft: Ergebnisse des Spiels selbst und aller spaeteren Spiele
   zu ändern ändert seine Merkmale nicht (Gegenprobe: die Merkmale eines SPAETEREN Spiels ändern sich dann sehr wohl). */
var u=require('./umgebung.js'), fs=require('fs'), path=require('path'), L=require('../core/model/lauf.js'), LA=require('../core/model/lagen.js');
var REPO=path.join(__dirname,'..'), lies=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); };
var par=lies(path.join(REPO,'core/model/generated/modell.json')).parameter;
var NEU=['dSerieU','dSerieS','dLast7','dLast14','dLast21','dGf10','dGa10','dDuell','saisonFortschritt'];
u.block('Handrechnung am kleinen Spielplan');
function sp(id,datum,h,g,th,tg){ return { id:id, liga:'de.1', saison:'2025-26', datum:datum, heimKey:h, gastKey:g, th:th, tg:tg, hatErgebnis:true }; }
var klein=[ sp('1','2025-08-01','A','B',2,0), sp('2','2025-08-05','C','A',1,1), sp('3','2025-08-09','B','C',0,3), sp('4','2025-08-20','A','C',1,0), sp('5','2025-08-27','B','A',1,2) ];
var z=LA.zeilenFuerLand(klein, par), x4=z[3].x, x5=z[4].x;
/* Spiel 4 (A gegen C am 20.8.): A hat 2 Spiele (1.8. Sieg, 5.8. Remis) -> ungeschlagen 2, sieglos 1; C hat (5.8. Remis, 9.8. Sieg) -> ungeschlagen 2, sieglos 0 */
u.pruef('Serie: A ungeschlagen 2, C ungeschlagen 2 -> 0; A sieglos 1, C sieglos 0 -> 0.1', Math.abs(x4.dSerieU-0)<1e-9 && Math.abs(x4.dSerieS-0.1)<1e-9);
/* Spiele in den letzten 14 Tagen vor dem 20.8.: A 5.8. -> (6.8. liegt 15 Tage zurueck: 5.8. ist 15 Tage her, 1.8. 19) -> 0; C 9.8. (11 Tage) und 5.8. (15) -> 1 */
u.pruef('Spiele in 14 Tagen: A 0, C 1 -> -1; in 21 Tagen: A 2, C 2 -> 0', x4.dLast14===-1 && x4.dLast21===0);
u.pruef('Spiele in 7 Tagen: beide 0 -> 0', x4.dLast7===0);
/* Duell A gegen C vor Spiel 4: Spiel 2 (C-A 1:1): A holt 1 Punkt -> (1+1.4*3)/(1+3)-1.4 */
u.pruef('Duell: ein Remis aus dem direkten Duell', Math.abs(x4.dDuell-((1+1.4*3)/4-1.4))<1e-9);
u.pruef('Duell vor dem allerersten Spiel ohne Vorgeschichte ist 0', Math.abs(z[0].x.dDuell)<1e-12);
u.pruef('Saisonfortschritt wächst mit den gespielten Spielen', z[4].x.saisonFortschritt>z[3].x.saisonFortschritt && z[0].x.saisonFortschritt===0);

u.block('Kein Blick in die Zukunft (echter Bestand)');
var b=L.bestandLaden(path.join(REPO,'core/data/generated'), lies(path.join(REPO,'core/data/aliases.json')));
var land='de'; var liste=b.jeLand[land], i0=Math.floor(liste.length*0.6);
function mitAenderung(){ var neu={ jeLand:{}, namen:b.namen, heute:b.heute }; Object.keys(b.jeLand).forEach(function(l){ neu.jeLand[l]=b.jeLand[l]; });
  neu.jeLand[land]=liste.map(function(r,i){ if(i<i0) return r; var c=Object.assign({},r); c.th=r.tg+3; c.tg=r.th; return c; }); return neu; }
var a=LA.zeilenBauen(b, par, null).filter(function(q){ return q.r.liga.split('.')[0]===land; }), c=LA.zeilenBauen(mitAenderung(), par, null).filter(function(q){ return q.r.liga.split('.')[0]===land; });
var ziel=a.findIndex(function(q){ return q.r.id===liste[i0].id; });
u.pruef('Merkmale des Spiels i0 sind gleich, obwohl sein Ergebnis und alle späteren verändert wurden', NEU.every(function(n){ return Math.abs(a[ziel].x[n]-c[ziel].x[n])<1e-12; }));
var spaeter=ziel+60;
u.pruef('Gegenprobe: ein späteres Spiel ändert sich (die Änderung wirkt also nur nach vorn)', NEU.some(function(n){ return Math.abs(a[spaeter].x[n]-c[spaeter].x[n])>1e-9; }));
u.pruef('alle Neuen Merkmale sind endlich', a.every(function(q){ return NEU.every(function(n){ return isFinite(q.x[n]); }); }));
process.exit(u.bilanz()?1:0);
