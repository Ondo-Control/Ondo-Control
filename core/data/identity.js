/* ===================================================================================
   ONDO CORE - Datenfundament (Backlog-Punkt 94), Teil "Identitaet".
   Reine Funktionen ohne Browser, ohne state, ohne Netz. Laeuft in Node (GitHub Action,
   Tests) und koennte spaeter unveraendert per <script> geladen werden.

   PARITAET: fxNorm, fxTokens, fxId, fxBerlin und marktUrteil sind wortgetreue Nachbauten
   der gleichnamigen Funktionen aus beta.html (Stand v19.22.2). beta.html wird NICHT
   veraendert und importiert diese Datei nicht. tests/t12_core_daten.js vergleicht beide
   Fassungen auf echten Namen aus dem Datenbestand - weicht eine ab, faellt der Test durch.
   Aendert sich die Logik in beta.html, muss sie hier bewusst nachgezogen werden.
   =================================================================================== */
(function(root, factory){
  if(typeof module==='object' && module.exports) module.exports=factory();
  else root.OndoCoreIdentity=factory();
})(this, function(){

  var FX_SCHWACH = {
    fc:1, afc:1, cf:1, cfc:1, sc:1, ssc:1, bc:1, ac:1, as:1, ss:1, sv:1, sg:1, tsg:1, tsv:1,
    vfb:1, vfl:1, rc:1, rcd:1, ca:1, cd:1, cr:1, se:1, fk:1, sk:1, ks:1, us:1, ud:1, aj:1,
    ogc:1, psv:1, bsc:1, msv:1, fsv:1, ec:1, fr:1, ad:1, club:1, calcio:1, futbol:1, fussball:1,
    football:1, cfr:1, afk:1, mfk:1, nk:1, hk:1, if:1, ff:1, bk:1, ik:1
  };

  function fxNorm(s){
    var t=String(s||'');
    try{ t=t.normalize('NFD').replace(/[̀-ͯ]/g,''); }catch(e){}
    t=t.toLowerCase()
       .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')
       .replace(/ø/g,'o').replace(/å/g,'a').replace(/æ/g,'ae').replace(/đ/g,'d').replace(/ł/g,'l')
       .replace(/[^a-z0-9]+/g,' ')
       .replace(/\s+/g,' ').trim();
    return t;
  }
  function fxTokens(s){
    var alle=fxNorm(s).split(' ').filter(Boolean);
    var stark=alle.filter(function(w){ return !FX_SCHWACH[w] && !/^\d+$/.test(w); });
    return stark.length ? stark : alle;
  }
  function fxId(datumBerlinIso, heim, gast){
    var h=fxTokens(heim).slice().sort().join('');
    var g=fxTokens(gast).slice().sort().join('');
    var basis=String(datumBerlinIso||'').replace(/-/g,'')+'_'+h+'_'+g;
    return 'fx'+basis.replace(/[^a-z0-9_]/g,'').slice(0,60);
  }
  function fxBerlin(utcIso){
    var d=new Date(utcIso);
    if(isNaN(d.getTime())) return null;
    try{
      var f=new Intl.DateTimeFormat('sv-SE',{ timeZone:'Europe/Berlin', year:'numeric',
        month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', hour12:false });
      var s=f.format(d);
      var m=s.match(/(\d{4})-(\d{2})-(\d{2})\D+(\d{2}):(\d{2})/);
      if(!m) return null;
      return { datum:m[1]+'-'+m[2]+'-'+m[3], zeit:m[4]+':'+m[5] };
    }catch(e){ return null; }
  }
  function marktUrteil(code, h, g){
    var ges = h + g;
    switch(code){
      case 'sieg_heim': return h > g;
      case 'sieg_gast': return g > h;
      case 'remis':     return h === g;
      case 'ueber':     return ges > 2.5;
      case 'unter':     return ges < 2.5;
      case 'btts_ja':   return (h > 0 && g > 0);
      case 'btts_nein': return !(h > 0 && g > 0);
    }
    return null;
  }

  /* ---- Ab hier NEU fuer den Core (kein Gegenstueck in beta.html) ---- */

  /* Mannschaftsschluessel: die sortierten starken Tokens. Dieselbe Bildung wie in fxId. */
  function teamSchluessel(name){
    return fxTokens(name).slice().sort().join('');
  }

  /* Alias-Index aus core/data/aliases.json bauen. Eine Alias-Zeile sagt: im Land X ist der
     Name "von" dieselbe Mannschaft wie "nach". Der Geltungsbereich ist das LAND, nicht die
     Liga, weil Mannschaften auf- und absteigen. Rueckgabe: Funktion (land, name) ->
     { schluessel, alias:true|false }. Ein Name ohne Alias behaelt seinen eigenen Schluessel.
     Ketten (a->b, b->c) sind verboten und werden beim Bauen als Fehler gemeldet. */
  function aliasIndex(aliasDatei){
    var idx={}, fehler=[];
    ((aliasDatei && aliasDatei.aliases) || []).forEach(function(a){
      var land=String(a.land||''), von=teamSchluessel(a.von), nach=teamSchluessel(a.nach);
      if(!land || !von || !nach){ fehler.push('unvollstaendige Alias-Zeile: '+JSON.stringify(a)); return; }
      if(von===nach) return;                       /* schon durch die Tokens gleich - harmlos */
      var k=land+'|'+von;
      if(idx[k] && idx[k]!==nach) fehler.push('Alias doppelt und widerspruechlich: '+a.von+' ('+land+')');
      idx[k]=nach;
    });
    Object.keys(idx).forEach(function(k){
      var land=k.split('|')[0];
      if(idx[land+'|'+idx[k]]) fehler.push('Alias-Kette verboten: '+k+' -> '+idx[k]+' -> '+idx[land+'|'+idx[k]]);
    });
    function aufloesen(land, name){
      var eigen=teamSchluessel(name), ziel=idx[land+'|'+eigen];
      return { schluessel: ziel || eigen, alias: !!ziel };
    }
    aufloesen.fehler=fehler;
    aufloesen.anzahl=Object.keys(idx).length;
    return aufloesen;
  }

  /* Saisonkennung "JJJJ-JJ" aus einem ISO-Datum. Europaeische Ligen: Juli bis Juni. */
  function saisonAusDatum(datumIso){
    var m=String(datumIso||'').match(/^(\d{4})-(\d{2})-(\d{2})/);
    if(!m) return '';
    var j=Number(m[1]), mon=Number(m[2]);
    var start = mon>=7 ? j : j-1;
    return start+'-'+('0'+((start+1)%100)).slice(-2);
  }

  return { FX_SCHWACH:FX_SCHWACH, fxNorm:fxNorm, fxTokens:fxTokens, fxId:fxId, fxBerlin:fxBerlin,
           marktUrteil:marktUrteil, teamSchluessel:teamSchluessel, aliasIndex:aliasIndex,
           saisonAusDatum:saisonAusDatum };
});
