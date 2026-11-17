/* Merkmale fuer kommende Spiele: identisch mit den Merkmalen, die der Rücktest fuer dasselbe Spiel berechnet haette,
   und kein Einbuchen (kein Ergebnis, keine Zukunft). */
var u=require('./umgebung.js'), fs=require('fs'), path=require('path'), L=require('../core/model/lauf.js'), LA=require('../core/model/lagen.js');
var REPO=path.join(__dirname,'..'), lies=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); };
var par=lies(path.join(REPO,'core/model/generated/modell.json')).parameter;
var b=L.bestandLaden(path.join(REPO,'core/data/generated'), lies(path.join(REPO,'core/data/aliases.json')));
var ref=LA.zeilenBauen(b, par, null);
/* Tag mit mehreren Spielen in einem Land waehlen, nahe am Ende des Bestands */
var tage={}; ref.forEach(function(z){ var k=z.r.liga.split('.')[0]+'|'+z.r.datum; (tage[k]=tage[k]||[]).push(z); });
var kand=Object.keys(tage).filter(function(k){ return tage[k].length>=3 && tage[k][0].r.datum<'2026-08-01' && tage[k][0].r.datum>'2024-08-01'; }).sort().pop();
var soll=tage[kand], land=kand.split('|')[0], tag=kand.split('|')[1];
u.block('Merkmale kommender Spiele ('+kand+', '+soll.length+' Spiele)');
var bAbgeschnitten={ jeLand:{}, namen:b.namen, heute:b.heute, europa:b.europa, stadien:b.stadien, wetter:b.wetter }; Object.keys(b.jeLand).forEach(function(l){ bAbgeschnitten.jeLand[l]=b.jeLand[l].filter(function(r){ return !(l===land && r.datum>=tag); }); });
var fx=soll.map(function(z){ return { liga:z.r.liga, saison:z.r.saison, datum:z.r.datum, heimKey:z.r.heimKey, gastKey:z.r.gastKey }; });
var k=LA.zeilenKommend(bAbgeschnitten, par, fx);
var namen=Object.keys(k[0].x);
u.pruef('alle Zeilen sind als kommend markiert, ohne Ergebnis', k.length===soll.length && k.every(function(z){ return z.kommend===true && z.y===-1; }));
u.pruef('Merkmale identisch mit dem Rücktest fuer dasselbe Spiel (alle '+namen.length+' Merkmale)', k.every(function(z,i){ return namen.every(function(n){ return Math.abs(z.x[n]-soll[i].x[n])<1e-9; }); }));
u.pruef('Gegenprobe: mit dem Spiel selbst im Bestand (Leck) waeren die Merkmale anders', (function(){ var leck=LA.zeilenKommend(b, par, fx); return leck.some(function(z,i){ return namen.some(function(n){ return Math.abs(z.x[n]-soll[i].x[n])>1e-9; }); }); })());
u.pruef('Einbuchen findet nicht statt: zweimal rechnen gibt dasselbe', JSON.stringify(LA.zeilenKommend(bAbgeschnitten, par, fx).map(function(z){ return z.x; }))===JSON.stringify(k.map(function(z){ return z.x; })));
process.exit(u.bilanz()?1:0);
