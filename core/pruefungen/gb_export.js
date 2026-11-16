/* Schreibt die Lagen-Zeilen (Spiele vor dem Stichtag, Rolle lernen/pruefen, ohne Aufstellungsmerkmale) als CSV fuer gb_vergleich.py.
   Aufruf: node core/pruefungen/gb_export.js <Zieldatei.csv>. Keine Rohdaten Dritter, nur eigene berechnete Merkmale. Nicht im Repo ablegen. */
var fs=require('fs'), path=require('path'), L=require('../model/lauf.js'), LA=require('../model/lagen.js');
var M=path.join(__dirname,'..','model'), D=path.join(__dirname,'..','data');
var par=JSON.parse(fs.readFileSync(path.join(M,'generated','modell.json'),'utf8')).parameter, vers=JSON.parse(fs.readFileSync(path.join(M,'versiegelt.json'),'utf8'));
var b=L.bestandLaden(path.join(D,'generated'),JSON.parse(fs.readFileSync(path.join(D,'aliases.json'),'utf8')));
var z=LA.zeilenBauen(b,par,null).filter(function(x){ return !x.r.zusatz && x.r.datum<vers.stichtag && (x.r.rolle==='lernen'||x.r.rolle==='pruefen'); });
var keys=Object.keys(z[0].x).filter(function(k){ return !/^dLn|dFehlt/.test(k); }), rows=[keys.concat(['y','rolle']).join(',')];
z.forEach(function(x){ rows.push(keys.map(function(k){ return x.x[k]; }).concat([x.y,x.r.rolle]).join(',')); });
fs.writeFileSync(process.argv[2],rows.join('\n')); console.log(z.length+' Zeilen nach '+process.argv[2]);
