/* Pokal-Kalender (Fassung 191): Einleser (beide Dateiformate), Abdeckungspruefung, Merkmale (Handrechnung), kein Blick in die Zukunft.
   Gegenproben: ohne Daten = 0 (neutral), nicht abgedeckte Saison = 0 trotz vorhandener Tage, Zweite Liga = 0, Gruppe gilt fuer ALLE Spiele
   (steht in GRUPPEN), jede Zeile eines Landes bleibt erhalten (keine Spiele fallen weg). */
var fs=require('fs'), os=require('os'), path=require('path');
var u=require('./umgebung.js'), LA=require('../core/model/lagen.js'), P=require('../core/data/pokal_bauen.js');

u.block('Einleser');
var f1='= DFB Pokal 2024/25\n\n# Date       Fri Aug 16 2024 - Sat May 24 2025 (281d)\n# Teams      4\n# Matches    3\n\n\n▪ Round 1\n  Fri Aug 16 2024\n    18:00  Wuerzburg            v 1899 Hoffenheim          3-5 pen. 2-2 a.e.t. (1-1, 1-1)\n           SV Wehen Wiesbaden   v 1. FSV Mainz 05          1-3 a.e.t. (1-1, 1-0)\n  Wed Feb 5 2025\n    20:45  SSV Ulm 1846         v Bayern München           0-4 (0-2)\n';
var e1=P.lesen(f1, 2024);
u.pruef('Format 1: 3 Spiele, Kopfzeile 3', e1.spiele.length===3 && e1.kopf===3);
u.pruef('Format 1: Datum und Namen (Handlesung)', e1.spiele[0].datum==='2024-08-16' && e1.spiele[0].heim==='Wuerzburg' && e1.spiele[0].gast==='1899 Hoffenheim' && e1.spiele[1].gast==='1. FSV Mainz 05');
u.pruef('Format 1: Jahreswechsel ohne Jahr -> Datum im Folgejahr (Feb)', e1.spiele[2].datum==='2025-02-05' && e1.spiele[2].gast==='Bayern München');
var f2='= DFB Pokal 2021/22\n\n# Teams      4\n# Matches    3\n\n▪ Round 1\nFri Aug 6\n  20:45  TSV 1860 München         5-4 pen. 1-1 a.e.t. (1-1, 0-0)  SV Darmstadt 98\n         Dynamo Dresden           2-1 (0-0)  SC Paderborn 07\nSat Jan 15\n  15:30  Weiche Flensburg 08      2-4 a.e.t. (0-0)  Holstein Kiel\n';
var e2=P.lesen(f2, 2021);
u.pruef('Format 2: 3 Spiele, Heim, Gast, Datum', e2.spiele.length===3 && e2.spiele[0].heim==='TSV 1860 München' && e2.spiele[0].gast==='SV Darmstadt 98' && e2.spiele[0].datum==='2021-08-06' && e2.spiele[1].gast==='SC Paderborn 07' && e2.spiele[2].datum==='2022-01-15');
u.pruef('Gegenprobe: Kopf-, Titel- und Rundenzeilen sind keine Spiele', P.lesen('= Titel\n# Matches 9\n▪ Round 1\n', 2024).spiele.length===0);
u.pruef('Gegenprobe: Spielzeile ohne Datum davor wird nicht gezaehlt', P.lesen('  A    v B   1-0\n', 2024).spiele.length===0);

u.block('Abdeckungspruefung');
var tmp=fs.mkdtempSync(path.join(os.tmpdir(),'pokal-')), de=path.join(tmp,'de');
var namen='ABCDEFGHIJ'.split(''), schl=namen.map(function(n){ return n.toLowerCase()+'team'; });   /* Schluessel wie identity.teamSchluessel('Team A') */
var aliases={ aliases:[] };
function saisonDatei(saison, kopf, paare){
  fs.mkdirSync(path.join(de,saison),{recursive:true});
  var z='= Test\n\n'+(kopf===null?'':'# Matches    '+kopf+'\n')+'\n▪ Round 1\n  Fri Aug 16 2024\n';
  paare.forEach(function(p){ z+='    18:00  Team '+p[0]+'   v Team '+p[1]+'   1-0 (0-0)\n'; });
  fs.writeFileSync(path.join(de,saison,'cup.txt'), z);
}
var alle=[['A','B'],['C','D'],['E','F'],['G','H'],['I','J']];
saisonDatei('2024-25', 5, alle);                    /* vollstaendig */
saisonDatei('2025-26', 10, alle);                   /* nur 5 von 10 Spielen */
saisonDatei('2023-24', null, alle);                 /* keine Kopfzeile */
saisonDatei('2022-23', 3, alle.slice(0,3));         /* Spiele vollstaendig, aber nur 6 von 10 Erstligisten haben einen Pokaltag */
var erst={ de:{} }, bekannt={ de:{} };
['2022-23','2023-24','2024-25','2025-26'].forEach(function(s){ erst.de[s]={}; schl.forEach(function(k){ erst.de[s][k]=true; }); });
schl.forEach(function(k){ bekannt.de[k]=true; });
var res=P.bauen({ de:de }, aliases, erst, bekannt);
u.pruef('2024-25 vollstaendig -> abgedeckt', res.abgedeckt.de.indexOf('2024-25')>=0 && res.pruefung['de|2024-25'].abgedeckt===true);
u.pruef('Gegenprobe: nur 50 % der Spiele -> NICHT abgedeckt', res.abgedeckt.de.indexOf('2025-26')<0 && res.pruefung['de|2025-26'].anteilSpiele===0.5);
u.pruef('Gegenprobe: ohne Kopfzeile -> NICHT abgedeckt', res.abgedeckt.de.indexOf('2023-24')<0);
u.pruef('Gegenprobe: Spiele vollstaendig, aber 6 von 10 Erstligisten -> NICHT abgedeckt', res.abgedeckt.de.indexOf('2022-23')<0 && res.pruefung['de|2022-23'].mitPokaltag===6);
u.pruef('Tage nur aus abgedeckten Saisons', res.teams.ateam.length===1 && res.teams.ateam[0]==='2024-08-16');
fs.rmSync(tmp,{recursive:true,force:true});

u.block('Merkmale (Handrechnung)');
u.pruef('Gruppe pokal hat drei Merkmale und steht in GRUPPEN (gilt fuer alle Spiele) und GRUPPEN_AUFST', LA.MERKMALE.pokal.length===3 && LA.GRUPPEN.indexOf('pokal')>=0 && LA.GRUPPEN_AUFST.indexOf('pokal')>=0);
var par=JSON.parse(fs.readFileSync(__dirname+'/../core/model/generated/modell.json','utf8')).parameter;
function sp(h,g,d,liga,saison){ return { liga:liga||'de.1', saison:saison||'2024-25', datum:d, heimKey:h, gastKey:g, heim:h, gast:g, th:1, tg:0, rolle:'lernen' }; }
var pokal={ teams:{ a:['2024-08-05','2024-08-08','2024-08-09'], b:['2024-07-20'] }, abgedeckt:{ de:{ '2024-25':true } } };
var z=LA.zeilenFuerLand([sp('a','b','2024-08-08')], par, null, null, null, pokal)[0];
u.pruef('Heim hat 3 Tage vorher ein Pokalspiel: dPo7 = 1, dPo14 = 1', z.x.dPo7===1 && z.x.dPo14===1);
u.pruef('Ruhe: Heim 3 Tage, Gast 14 (Pokal vor 19 Tagen zaehlt nicht): (3-14)/7', Math.abs(z.x.dPoRuhe-(3-14)/7)<1e-9);
u.pruef('Gegenprobe: Pokalspiel am selben Tag (08-08) und danach (08-09) zaehlt NICHT', z.x.dPo7===1);
var z2=LA.zeilenFuerLand([sp('b','a','2024-08-08')], par, null, null, null, pokal)[0];
u.pruef('Heim/Gast vertauscht: Vorzeichen dreht sich', z2.x.dPo7===-1 && Math.abs(z2.x.dPoRuhe-(14-3)/7)<1e-9);

u.block('Neutral ohne belegte Daten, kein Spiel faellt weg');
var o=LA.zeilenFuerLand([sp('a','b','2024-08-08')], par, null, null, null, null)[0];
u.pruef('ohne pokal.json: alle drei Merkmale 0', o.x.dPo7===0 && o.x.dPo14===0 && o.x.dPoRuhe===0);
var n=LA.zeilenFuerLand([sp('a','b','2025-08-08','de.1','2025-26')], par, null, null, null, pokal)[0];
u.pruef('nicht abgedeckte Saison: 0 TROTZ vorhandener Pokaltage (kein falsches "kein Pokalspiel" als Signal)', n.x.dPo7===0 && n.x.dPo14===0 && n.x.dPoRuhe===0);
var l2=LA.zeilenFuerLand([sp('a','b','2024-08-08','de.2')], par, null, null, null, pokal)[0];
u.pruef('Zweite Liga (Abdeckung nicht geprueft): 0', l2.x.dPo7===0 && l2.x.dPoRuhe===0);
var viele=[sp('a','b','2024-08-01'), sp('a','c','2024-08-08'), sp('a','b','2025-08-08','de.1','2025-26'), sp('a','b','2024-08-15','de.2')];
u.pruef('Alle Spiele bleiben: gleiche Zahl Zeilen mit und ohne Pokaldaten', LA.zeilenFuerLand(viele, par, null, null, null, pokal).length===viele.length && LA.zeilenFuerLand(viele, par, null, null, null, null).length===viele.length);
var a1=LA.zeilenFuerLand(viele, par, null, null, null, pokal), a2=LA.zeilenFuerLand(viele, par, null, null, null, null);
u.pruef('Pokaldaten aendern KEIN anderes Merkmal (Basis lnH/lnD/lnA und Form identisch)', a1.every(function(zz,i){ return zz.x.lnH===a2[i].x.lnH && zz.x.lnD===a2[i].x.lnD && zz.x.lnA===a2[i].x.lnA && zz.x.dPpg5===a2[i].x.dPpg5 && zz.x.dLast14===a2[i].x.dLast14; }));
var zk=LA.zeilenFuerLand([sp('a','b','2024-08-01'), sp('a','b','2024-08-08')], par, null, null, null, { teams:{ a:['2024-08-06'] }, abgedeckt:{ de:{ '2024-25':true } } });
u.pruef('Kein Blick in die Zukunft: Pokalspiel am 06.08. zaehlt am 01.08. nicht, am 08.08. schon', zk[0].x.dPo7===0 && zk[1].x.dPo7===1);

u.block('Ideen-Zaehler');
var ideen=JSON.parse(fs.readFileSync(__dirname+'/../core/model/ideen.json','utf8')).ideen;
var i16=ideen.filter(function(i){ return i.nr===16; })[0];
u.pruef('Idee 16 vorab eingetragen: L-v8-alle-pokal, NL-alle-v8, NL-mitAufstellung-v8 und der verworfene erste Lauf', !!i16 && ['L-v8-alle-pokal','NL-alle-v8','NL-mitAufstellung-v8','L-v8-verworfen-mitPokal'].every(function(k){ return i16.namen.indexOf(k)>=0; }) && i16.versuche===i16.namen.length);
process.exit(u.bilanz()?1:0);
