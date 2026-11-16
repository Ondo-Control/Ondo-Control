/* Test Produktionspfad: aendert versiegelt.json und lagen.json nicht; waechst mit neuen Spielen; kennzeichnet leere Wahl. */
var fs=require('fs'), path=require('path'), crypto=require('crypto'), u=require('./umgebung.js');
var REPO=path.join(__dirname,'..'), M=path.join(REPO,'core/model');
var LP=require('../core/model/lagen_produktion.js'), L=require('../core/model/lauf.js'), LA=require('../core/model/lagen.js');
var h=function(f){ return crypto.createHash('sha256').update(fs.readFileSync(path.join(M,f))).digest('hex'); };
var lies=function(p){ return JSON.parse(fs.readFileSync(p,'utf8')); };
var vor=[h('versiegelt.json'),h('generated/lagen.json')];
var par=lies(path.join(M,'generated/modell.json')).parameter, lagen=lies(path.join(M,'generated/lagen.json'));
var b=L.bestandLaden(path.join(REPO,'core/data/generated'), lies(path.join(REPO,'core/data/aliases.json')));
var z=LA.zeilenBauen(b, par, null);
var opt={ maxRunden:5, geduld:3, lernrate:1, bremse:0.0001 };
u.block('Produktionspfad');
var a=LP.produktion(z, lagen, '2026-06-30', opt), c=LP.produktion(z, lagen, '2026-11-15', opt);
u.pruef('mehr abgeschlossene Spiele -> mehr Trainingsspiele', c[0].trainingsspiele>a[0].trainingsspiele);
u.pruef('Gegenprobe: kein Spiel nach dem Datenstand im Training', LP.produktion(z, lagen, '1900-01-01', opt).length===0);
u.pruef('Menge ohne gewaehlte Gruppe ist als "kein Merkmalsgewinn" gekennzeichnet', c.filter(function(o){ return o.gruppen.length===0; }).every(function(o){ return o.merkmalsgewinn===false && /KEIN Merkmalsgewinn/.test(o.hinweis); }));
u.pruef('Gruppen stammen unveraendert aus lagen.json (keine neue Wahl)', c.every(function(o){ var m=lagen.mengen.filter(function(x){ return x.menge===o.menge; })[0]; return JSON.stringify(m.gewaehlt)===JSON.stringify(o.gruppen); }));
u.pruef('versiegelt.json und lagen.json bleiben byte-gleich', h('versiegelt.json')===vor[0] && h('generated/lagen.json')===vor[1]);
process.exit(u.bilanz()?1:0);
