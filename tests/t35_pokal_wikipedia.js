/* Pokal-Kalender aus Wikipedia-Saisonseiten (Fassung 192): Einleser beider Spielvorlagen, Abdeckungspruefung, Auftragsliste.
   Gegenproben: fehlende Teamzahl, zu wenige Spiele, zu wenige Erstligisten, von OpenFootball belegte Saison wird nicht doppelt gezaehlt. */
var fs=require('fs'), os=require('os'), path=require('path');
var u=require('./umgebung.js'), P=require('../core/data/pokal_bauen.js'), W=require('../core/data/wikipedia_holen.js');

function kasten1(d,h,g){ return '<div class="vevent" typeof="x"><table><tr><td><span class="bday dtstart published updated itvstart">'+d+'</span></td></tr><tr><th><span class="fn org"><a href="./X">'+h+'</a></span></th><td>1–0</td><th><span class="fn org">'+g+'</span></th></tr></table>'; }
function kasten2(d,h,g){ return '<div class="footballbox"><table><tbody><tr><td><span class="bday dtstart published updated">'+d+'</span></td></tr><tr><th><span itemprop="homeTeam" itemscope=""><span itemprop="name"><a>'+h+'</a></span></span></th><td>2–1</td><th><span itemprop="awayTeam" itemscope=""><span itemprop="name">'+g+'</span></span></th></tr></tbody></table></div>'; }
function seite(teams, kaesten){ return '<html><body><table class="infobox"><tr><th>Teams</th><td>'+teams+'</td></tr></table><h2 id="Matches">Matches</h2>'+kaesten.join('')+'<h2 id="Bracket">Bracket</h2>'+'x'.repeat(2000)+'</body></html>'; }

u.block('Einleser (beide Spielvorlagen)');
var e=P.lesenHtml(seite(6,[kasten1('2024-08-16','Team A','Team B'), kasten1('2024-08-17','Team C &amp; Co','Team D'), kasten2('2024-08-18','Team E','Team F')]));
u.pruef('3 Spiele aus beiden Vorlagen, Teamzahl 6', e.spiele.length===3 && e.teams===6);
u.pruef('Datum und Namen (Handlesung), Verlinkung und &amp; bereinigt', e.spiele[0].datum==='2024-08-16' && e.spiele[0].heim==='Team A' && e.spiele[1].heim==='Team C & Co' && e.spiele[2].gast==='Team F' && e.spiele[2].datum==='2024-08-18');
u.pruef('Gegenprobe: Kasten ohne Datum oder mit nur einer Mannschaft zaehlt nicht', P.lesenHtml(seite(2,['<div class="vevent"><table><span class="fn org">A</span></table>', kasten2('','A','B').replace('<span class="bday dtstart published updated"></span>','')])).spiele.length===0);
u.pruef('Gegenprobe: Seite ohne Infobox -> Teamzahl null (nicht abgedeckt)', P.lesenHtml('<html><div class="vevent"><table><span class="bday dtstart">2024-01-01</span><span class="fn org">A</span><span class="fn org">B</span></table></html>').teams===null);

u.block('Dateinamen und Auftraege');
u.pruef('Titel mit Gedankenstrich wie auf Wikipedia', P.wpTitel('2016-17','DFB-Pokal')==='2016–17 DFB-Pokal' && P.wpTitel('2009-10','FA Cup')==='2009–10 FA Cup');
u.pruef('England: bis 2015 Football League Cup, ab 2016 EFL Cup', P.WP_WETTBEWERBE.en(2015)[1]==='Football League Cup' && P.WP_WETTBEWERBE.en(2016)[1]==='EFL Cup');
var l=W.auftraege({ de:['2018-19'] }, 2017, 2018);
u.pruef('Von OpenFootball belegte Land-Saison wird nicht geholt, andere schon', !l.some(function(x){ return x.land==='de'&&x.saison==='2018-19'; }) && l.some(function(x){ return x.land==='de'&&x.saison==='2017-18'; }));
u.pruef('Alle sieben Laender, England mit zwei Wettbewerben', ['de','en','es','fr','it','nl','pt'].every(function(c){ return l.some(function(x){ return x.land===c; }); }) && l.filter(function(x){ return x.land==='en'&&x.saison==='2017-18'; }).length===2);

u.block('Abdeckung Wikipedia');
var tmp=fs.mkdtempSync(path.join(os.tmpdir(),'wp-')), wp=path.join(tmp,'wp'); fs.mkdirSync(wp);
var namen='ABCDEFGHIJ'.split(''), schl=namen.map(function(n){ return n.toLowerCase()+'team'; });
function paare(n){ var r=[]; for(var i=0;i<n;i++) r.push([namen[i%10],namen[(i+1)%10]]); return r; }
function schreibe(saison, teams, anzahl, d){ fs.writeFileSync(path.join(wp,P.wpDateiname('de',saison,'DFB-Pokal')), seite(teams, paare(anzahl).map(function(p,i){ return kasten1(d||'2016-08-1'+(i%9),'Team '+p[0],'Team '+p[1]); }))); }
schreibe('2016-17', 10, 9);       /* 10 Teams -> mindestens 9 Spiele, alle da */
schreibe('2015-16', 10, 5);       /* nur 5 von 9 */
schreibe('2014-15', 10, 3);       /* 3 Spiele: nur 6 von 10 Erstligisten */
schreibe('2013-14', 10, 9);       /* wird von OpenFootball belegt gemeldet -> nicht doppelt */
fs.writeFileSync(path.join(wp,'de_2012-13_DFB-Pokal.html'), '<html>'+'x'.repeat(3000)+'</html>');  /* ohne Teamzahl */
var erst={ de:{} }, bekannt={ de:{} };
['2012-13','2013-14','2014-15','2015-16','2016-17'].forEach(function(s){ erst.de[s]={}; schl.forEach(function(k){ erst.de[s][k]=true; }); });
schl.forEach(function(k){ bekannt.de[k]=true; });
var of=path.join(tmp,'de'); fs.mkdirSync(path.join(of,'2013-14'),{recursive:true});
var z='= T\n# Matches 5\n▪ Round 1\n  Fri Aug 16 2013\n'; [['A','B'],['C','D'],['E','F'],['G','H'],['I','J']].forEach(function(p){ z+='    18:00  Team '+p[0]+'   v Team '+p[1]+'   1-0 (0-0)\n'; });
fs.writeFileSync(path.join(of,'2013-14','cup.txt'), z);
var res=P.bauen({ de:of, wp:wp }, { aliases:[] }, erst, bekannt);
u.pruef('2016-17 aus Wikipedia vollstaendig -> abgedeckt', res.abgedeckt.de.indexOf('2016-17')>=0 && res.pruefung['de|2016-17'].quelle==='wikipedia' && res.pruefung['de|2016-17'].abgedeckt===true);
u.pruef('Gegenprobe: 5 von mindestens 9 Spielen -> NICHT abgedeckt', res.abgedeckt.de.indexOf('2015-16')<0 && res.pruefung['de|2015-16'].abgedeckt===false);
u.pruef('Gegenprobe: genug Spiele-Zahl fehlt und nur 6 von 10 Erstligisten -> NICHT abgedeckt', res.abgedeckt.de.indexOf('2014-15')<0);
u.pruef('Gegenprobe: Seite ohne Teamzahl -> NICHT abgedeckt', res.abgedeckt.de.indexOf('2012-13')<0);
u.pruef('Von OpenFootball belegte Saison bleibt OpenFootball (nur einmal gezaehlt, Wikipedia-Datei ignoriert)', res.abgedeckt.de.filter(function(s){ return s==='2013-14'; }).length===1 && !res.pruefung['de|2013-14'] || (res.pruefung['de|2013-14'] && res.pruefung['de|2013-14'].quelle!=='wikipedia'));
u.pruef('Tage nur aus abgedeckten Saisons (Wikipedia 2016-17 ja, 2015-16 nein)', res.teams.ateam.indexOf('2016-08-10')>=0 && res.teams.ateam.every(function(d){ return d<'2015-01-01' || d>='2016-01-01'; }));
var mit=P.bauen({ de:of }, { aliases:[] }, erst, bekannt);
u.pruef('Ohne --wp bleibt alles wie zuvor (2016-17 nicht abgedeckt)', mit.abgedeckt.de.indexOf('2016-17')<0 && mit.abgedeckt.de.indexOf('2013-14')>=0);
fs.rmSync(tmp,{recursive:true,force:true});

var real='/tmp/wa/seite.html';
if(fs.existsSync(real)){ u.block('Echte Beispielseite (DFB-Pokal 2016-17)'); var r=P.lesenHtml(fs.readFileSync(real,'utf8')); u.pruef('63 Spiele bei 64 Teams (= Teams - 1), Anpfiff 19.08.2016 bis Finale 27.05.2017', r.spiele.length===63 && r.teams===64 && r.spiele[0].datum==='2016-08-19' && r.spiele[62].datum==='2017-05-27'); }
process.exit(u.bilanz()?1:0);
