/* ===================================================================================
   ONDO CORE - Anfrage an die KIs: "Welche Information fehlt dir?" (Backlog-Punkt 94). Rein offline: baut die Frage, prueft die Antwort,
   nimmt Vorschlaege als Status "offen" in den Katalog auf. Der Aufruf der KI selbst laeuft in der App (Schluessel liegen nur dort);
   dieses Modul ruft nichts auf. Eine KI-Antwort ist DATEN, kein Auftrag: nur Name, Quelle (https), Lizenz, kostenlos/historisch/Merkmal
   werden uebernommen, alles andere verworfen. Nichts wird aktiv: jeder Vorschlag muss danach die Huerde bestehen und zaehlt als Versuch.
   =================================================================================== */
var MAX_VORSCHLAEGE=10, MAX_LAENGE=300;
function norm(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim(); }
/* katalog: kriterien.json, luecken: luecken.json -> Fragetext */
function frage(katalog, luecken){
  var bekannt=katalog.kriterien.map(function(k){ return '- '+k.name+' ['+k.status+']'; }).join('\n');
  var fl=(luecken&&luecken.funde||[]).slice(0,5).map(function(f){ return '- '+f.schnitt+' / '+f.ergebnis+': '+f.abweichungProzentpunkte+' Prozentpunkte'; }).join('\n')||'- keine bestaetigte Luecke';
  return 'Ein Fussball-Prognosemodell (1X2) liegt mit seinen Zahlen 0,027 Log-Loss hinter den Pinnacle-Schlussquoten. Es nutzt nur Ergebnisdaten, Aufstellungen, Tabelle, Terminlast, Reise und Wetter.\n'+
    'Bekannte Kriterien (nicht erneut vorschlagen):\n'+bekannt+'\nBekannte Luecken des Modells:\n'+fl+'\n'+
    'Nenne bis zu '+MAX_VORSCHLAEGE+' ANDERE Informationen, die ein besseres Urteil erlauben koennten. Bedingung: dauerhaft kostenlos, rechtmaessig nutzbar, fuer ALTE Spiele (mind. 2015) verfuegbar.\n'+
    'Antworte NUR mit JSON: [{"name":"...","quelle":"https://...","lizenz":"...","kostenlos":true,"historisch":true,"merkmal":"wie als Zahl je Spiel"}]';
}
/* Antworttext -> { neu:[...], abgelehnt:[{name,grund}] } */
function auswerten(text, katalog){
  var m=/\[[\s\S]*\]/.exec(String(text||'')), liste=null;
  try{ liste=m?JSON.parse(m[0]):null; }catch(e){}
  if(!Array.isArray(liste)) return { neu:[], abgelehnt:[{ name:'(Antwort)', grund:'kein lesbares JSON' }] };
  var bekannt={}; katalog.kriterien.forEach(function(k){ bekannt[norm(k.name)]=1; });
  var neu=[], abg=[];
  liste.slice(0,MAX_VORSCHLAEGE).forEach(function(v){
    var name=v&&typeof v.name==='string'?v.name.trim().slice(0,MAX_LAENGE):'';
    var no=function(g){ abg.push({ name:name||'(ohne Name)', grund:g }); };
    if(!name) return no('kein Name');
    if(bekannt[norm(name)]) return no('schon im Katalog');
    if(typeof v.quelle!=='string' || !/^https:\/\/[^\s]+$/.test(v.quelle)) return no('keine https-Quelle');
    if(v.kostenlos!==true) return no('nicht als dauerhaft kostenlos bestaetigt');
    if(v.historisch!==true) return no('nicht fuer alte Spiele');
    if(typeof v.lizenz!=='string' || !v.lizenz.trim()) return no('keine Lizenzangabe');
    bekannt[norm(name)]=1;
    neu.push({ name:name, quelle:v.quelle.slice(0,MAX_LAENGE), lizenz:v.lizenz.trim().slice(0,100), merkmal:typeof v.merkmal==='string'?v.merkmal.trim().slice(0,MAX_LAENGE):'' });
  });
  return { neu:neu, abgelehnt:abg };
}
/* nimmt Vorschlaege als "offen" auf (nie aktiv, nie mit Messung) */
function einarbeiten(katalog, neu){
  neu.forEach(function(n){ katalog.kriterien.push({ name:n.name, gruppe:null, quelle:'KI-Vorschlag, ungeprueft: '+n.quelle+' ('+n.lizenz+')', status:'offen', ki:true, messung:{}, merkmale:[], huerde:katalog.huerde }); });
  var z={}; katalog.kriterien.forEach(function(e){ z[e.status]=(z[e.status]||0)+1; }); katalog.anzahl=z;
  return katalog;
}
module.exports={ frage:frage, auswerten:auswerten, einarbeiten:einarbeiten, MAX_VORSCHLAEGE:MAX_VORSCHLAEGE };
