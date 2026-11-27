/* ===================================================================================
   ONDO CORE - Merkmale aus der Nachrichtenlage (Idee 20, 27.11.2026). Reine Funktionen, kein Netz.
   Je Mannschaft nur Tage VOR dem Spieltag: letzte 7 Tage gegen die 8 Wochen davor.
     ton:     mittlerer Ton der Berichte der letzten 7 Tage (nach Artikelzahl gewichtet), geteilt durch 5
     spitze:  ln((1 + Artikel letzte 7 Tage) / (1 + Wochenschnitt der 8 Wochen davor))   - ungewoehnlich viel Berichterstattung
     unruhe:  dasselbe nur fuer Artikel mit Unruhe-Themen (Festnahme, Skandal, Prozess, Krankheit, Protest)
   Bekannt nur, wenn fuer die Mannschaft Daten vorliegen und der Spieltag mindestens 9 Wochen nach Beginn der Reihe liegt.
   Merkmal = Heim minus Gast, und nur wenn BEIDE bekannt sind; sonst 0 (neutral).
   =================================================================================== */
var BEGINN='2017-01-01';
function tagDazu(d,n){ var x=new Date(d+'T00:00:00Z'); x.setUTCDate(x.getUTCDate()+n); return x.toISOString().slice(0,10); }
function lage(eintrag, d){
  if(!eintrag || !eintrag.tage || tagDazu(BEGINN,63)>d) return null;
  var t=eintrag.tage, v7=0, tw=0, n7=0, vb=0, nb=0, nOk=true;
  for(var i=1;i<=63;i++){ var x=t[tagDazu(d,-i)]; if(!x) continue;
    if(i<=7){ v7+=x[0]; tw+=x[0]*x[1]; if(x[2]===null) nOk=false; else n7+=x[2]; }
    else { vb+=x[0]; if(x[2]!==null) nb+=x[2]; } }
  return { ton:v7?tw/v7/5:0, spitze:Math.log((1+v7)/(1+vb/8)), unruhe:nOk?Math.log((1+n7)/(1+nb/8)):0 };
}
function merkmale(nachrichten, H, G, d){
  var a=nachrichten&&lage(nachrichten[H], d), b=nachrichten&&lage(nachrichten[G], d);
  if(!a||!b) return { dNaTon:0, dNaSpitze:0, dNaUnruhe:0 };
  return { dNaTon:a.ton-b.ton, dNaSpitze:a.spitze-b.spitze, dNaUnruhe:a.unruhe-b.unruhe };
}
module.exports={ lage:lage, merkmale:merkmale, BEGINN:BEGINN };
