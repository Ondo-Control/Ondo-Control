/* Kriterienkatalog: Status wird aus lagen.json gerechnet; Widersprueche werden erkannt (Gegenprobe). */
var u=require('./umgebung.js'), K=require('../core/model/kriterien.js'), LA=require('../core/model/lagen.js'), fs=require('fs');
var lagen=JSON.parse(fs.readFileSync(__dirname+'/../core/model/generated/lagen.json','utf8')), kat=K.bauen(lagen);
u.block('Katalog');
u.pruef('jede waehlbare Gruppe steht im Katalog', LA.GRUPPEN_AUFST.every(function(g){ return kat.kriterien.some(function(k){ return k.gruppe===g; }); }));
u.pruef('Katalog ist mit lagen.json widerspruchsfrei', K.pruefe(kat, lagen).length===0);
u.pruef('"aktiv" genau fuer gewaehlte Gruppen', kat.kriterien.filter(function(k){ return k.status==='aktiv'; }).map(function(k){ return k.gruppe; }).sort().join()===(function(){ var s={}; lagen.mengen.forEach(function(m){ m.gewaehlt.forEach(function(g){ s[g]=1; }); }); return Object.keys(s).sort().join(); })());
u.pruef('verworfene Kriterien bleiben im Katalog (Status geprueft, mit Messung)', kat.kriterien.some(function(k){ return k.status==='geprueft' && k.gruppe && Object.keys(k.messung).length>0; }));
u.pruef('offene und quellenlose Kriterien sind enthalten', kat.kriterien.some(function(k){ return k.status==='offen'; }) && kat.kriterien.some(function(k){ return k.status==='ohne_quelle'; }));
u.block('Gegenproben');
var kaputt=JSON.parse(JSON.stringify(kat)); kaputt.kriterien.filter(function(k){ return k.status==='geprueft' && k.gruppe; })[0].status='aktiv';
u.pruef('falscher Status "aktiv" fuer nicht gewaehlte Gruppe wird erkannt', K.pruefe(kaputt, lagen).length>0);
var kaputt2=JSON.parse(JSON.stringify(kat)); kaputt2.kriterien=kaputt2.kriterien.filter(function(k){ return k.gruppe!=='wetter'; });
u.pruef('fehlende Gruppe im Katalog wird erkannt', K.pruefe(kaputt2, lagen).some(function(x){ return /wetter/.test(x); }));
var kaputt3=JSON.parse(JSON.stringify(kat)); kaputt3.kriterien.filter(function(k){ return !k.gruppe; })[0].messung={ alle:{ z:5 } };
u.pruef('offenes Kriterium mit erfundener Messung wird erkannt', K.pruefe(kaputt3, lagen).length>0);
process.exit(u.bilanz()?1:0);
