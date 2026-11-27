/* ===================================================================================
   ONDO CORE - Kriterienkatalog (Backlog-Punkt 94). Eine Liste ALLER Kriterien, die der Core kennt - auch der verworfenen.
   Status: aktiv (hat die Huerde bestanden und wird abgerufen) | geprueft (Huerde nicht bestanden; bleibt im Katalog, wird NICHT abgerufen,
   kann bei Bedarf gezielt wieder angefragt werden) | offen (Quelle benannt, noch nicht gebaut/geprueft) | ohne_quelle (keine freie erlaubte Quelle).
   Status "aktiv"/"geprueft" und alle Messwerte werden aus lagen.json GERECHNET, nicht von Hand gepflegt; von Hand stehen nur Name, Quelle und Notiz.
   Wiederpruefung nur bei (a) deutlich mehr Daten, (b) neuer Luecke aus der Fehleranalyse (luecken.json), (c) neuer Kombination.
   Jede Wiederpruefung ist ein neuer Versuch in ideen.json und hebt die Huerde. Reine Funktion, kein Netz, keine Uhr.
   =================================================================================== */
var LA=require('./lagen.js');
var GRUPPEN_INFO={
  form:['Form (Punkte und Tordifferenz letzte 3/5/10 Spiele)','Ergebnisdaten'], ort:['Heim-/Auswaertsform','Ergebnisdaten'], ruhe:['Ruhetage seit letztem Spiel (nur Liga)','Ergebnisdaten'],
  saison:['Saisonstand (Punkte, Tordifferenz)','Ergebnisdaten'], staerke:['Staerke (Elo)','Ergebnisdaten'], tempo:['Torniveau der letzten Spiele','Ergebnisdaten'],
  aufst:['Aufstellung und Marktwert der Startelf, Ausfaelle','Transfermarkt-Datensatz (CC0), nur 7 Ligen bis 6.7.2026'],
  serie:['Serien (ohne Niederlage / ohne Sieg)','Ergebnisdaten'], last:['Spiele in 7/14/21 Tagen','Ergebnisdaten'], angriff:['Tore und Gegentore getrennt','Ergebnisdaten'],
  duell:['Direkte Duelle (letzte 5)','Ergebnisdaten'], kalender:['Saisonfortschritt','Ergebnisdaten'], termin:['Terminlast mit Europapokal','OpenFootball champions-league (CC0)'],
  motiv:['Motivation: Naehe zu Titel, Europa-Rang, Abstieg aus der Tabelle','Ergebnisdaten (Tabelle)'], reise:['Reise der Gastmannschaft (Entfernung)','Wikidata (CC0), 405 von 428 Stadien'],
  wetter:['Wetter am Spieltag (Regen, Wind, Temperatur)','NASA POWER (offene Daten)'],
  pokal:['Nationale Pokalspiele (DFB-Pokal, FA Cup, EFL Cup, Copa del Rey, Coppa Italia)','OpenFootball (CC0) und Wikipedia, Tage nur aus belegt vollstaendigen Land-Saisons; sonst neutral 0'],
  trainer:['Trainerwechsel (neuer Trainer, Amtsdauer)','Wikidata (CC0), Amtszeiten P286; unbekannt = neutral 0']
};
var OFFEN=[
  ['xG / Schussqualitaet','offen','Wyscout-Open-Data (CC BY), nur ca. 1.900 Spiele 2017/18: zu wenig fuer die Huerde; StatsBomb/IMPECT: Lizenz ungeklaert'],
  ['Schiedsrichter (Strenge, Heimneigung)','offen','keine freie Quelle fuer alle Ligen gefunden'],
  ['Verletzte und Sperren ueber die ganze Geschichte','ohne_quelle','availability-data: Lizenz nur "research and analysis" -> nicht verwendet; BSD liefert nur laufende Spiele'],
  ['Aufstellung vor Anstoss fuer kommende Spiele','offen','BSD: 83-89 h vor Anstoss nur "predicted"; "confirmed" kurz vor Anstoss ungeprueft'],
  ['Quoten als Merkmal','offen','TipsAudit (CC-BY): nur 872 zugeordnete Spiele; eigenes Archiv waechst taeglich'],
  ['Sharp Money / Wettvolumen','ohne_quelle','nicht frei verfuegbar'],
  ['Wettervorhersage fuer kommende Spiele','offen','Voraussetzung, damit die Gruppe Wetter in der Prognose nutzbar wird'],
  ['Hoehe des Stadions','ohne_quelle','Wikidata kennt sie nur fuer 1 von 428 Stadien'],
  ['Laenderspiel-Pausen je Mannschaft','offen','martj42 nur ligaweit (kein Unterschied Heim/Gast); keine Quelle je Mannschaft'],
  ['Trainerwechsel','offen','keine geprueft freie Quelle'],
  ['Derby / Rivalitaet','offen','ohne eigene Quelle nur von Hand; nicht gebaut'],
  ['Anstosszeit und Wochentag','geprueft','Fehleranalyse: kein bestaetigter Fund nach Wochentag oder Monat']
];
/* lagen: Inhalt von generated/lagen.json -> Katalog */
function bauen(lagen){
  var eintraege=[];
  LA.GRUPPEN_AUFST.forEach(function(g){
    var info=GRUPPEN_INFO[g]||[g,'unbekannt'], mengen={}, aktiv=false;
    lagen.mengen.forEach(function(m){
      var v=(m.versuche||[]).filter(function(x){ return x.gruppe===g && x.schritt===1; })[0];
      if(v) mengen[m.menge]={ z:v.z, vorsprung:v.vorsprung, besteHuerde:v.besteHuerde };
      if((m.gewaehlt||[]).indexOf(g)>=0) aktiv=true;
    });
    eintraege.push({ name:info[0], gruppe:g, quelle:info[1], status:aktiv?'aktiv':'geprueft', messung:mengen, merkmale:LA.MERKMALE[g], huerde:lagen.huerde });
  });
  OFFEN.forEach(function(o){ eintraege.push({ name:o[0], gruppe:null, quelle:o[2], status:o[1], messung:{}, merkmale:[], huerde:lagen.huerde }); });
  var zaehl={}; eintraege.forEach(function(e){ zaehl[e.status]=(zaehl[e.status]||0)+1; });
  return { schema:1, huerde:lagen.huerde, zaehlerVersuche:lagen.zaehlerVersuche, anzahl:zaehl,
    regel:'Verworfene Kriterien bleiben im Katalog (Status geprueft) und werden nicht abgerufen. Wiederpruefung nur bei deutlich mehr Daten, neuer Luecke (luecken.json) oder neuer Kombination; jede Wiederpruefung ist ein neuer Versuch in ideen.json.',
    kriterien:eintraege };
}
/* Konsistenz: Status passt zu lagen.json; jede waehlbare Gruppe steht im Katalog; offene haben keine Messung. Rueckgabe: Liste der Fehler. */
function pruefe(katalog, lagen){
  var f=[], gew={}; lagen.mengen.forEach(function(m){ (m.gewaehlt||[]).forEach(function(g){ gew[g]=1; }); });
  LA.GRUPPEN_AUFST.forEach(function(g){ var e=katalog.kriterien.filter(function(k){ return k.gruppe===g; })[0]; if(!e) f.push('Gruppe fehlt im Katalog: '+g); else if((e.status==='aktiv')!==!!gew[g]) f.push('Status passt nicht zu lagen.json: '+g); });
  katalog.kriterien.forEach(function(k){ if(!k.gruppe && Object.keys(k.messung).length) f.push('offenes Kriterium mit Messung: '+k.name); });
  return f;
}
module.exports={ bauen:bauen, pruefe:pruefe, OFFEN:OFFEN, GRUPPEN_INFO:GRUPPEN_INFO };
if(require.main===module){
  var fs=require('fs'), path=require('path'), g=path.join(__dirname,'generated'), lagen=JSON.parse(fs.readFileSync(path.join(g,'lagen.json'),'utf8')), k=bauen(lagen), f=pruefe(k,lagen);
  if(f.length){ console.error('Kriterienkatalog FEHL: '+f.join('; ')); process.exit(1); }
  fs.writeFileSync(path.join(g,'kriterien.json'), JSON.stringify(k,null,1)+'\n');
  console.log('Kriterienkatalog: '+JSON.stringify(k.anzahl)+', Huerde '+k.huerde);
}
