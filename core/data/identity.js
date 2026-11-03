'use strict';

/* Paritaetsmodul zu beta.html: fachlich reine Identitaetsfunktionen, ohne DOM/state. */
function normName(str){ return String(str||'').toLowerCase().replace(/[^a-z0-9]/g,''); }
function teamsAus(match){
  var p = String(match||'').split(/\s+[-–]\s+/);
  return { heim:(p[0]||'Heim').trim(), gast:(p[1]||'Gast').trim() };
}
function datumIso(dmj){
  var m=String(dmj||'').match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if(!m) return '';
  return m[3]+'-'+('0'+m[2]).slice(-2)+'-'+('0'+m[1]).slice(-2);
}
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
var FX_ISO3166 = ('AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW').split(' ');
var FX_LAND_INDEX = null;
function fxLandNorm(s){
  return fxNorm(s).split(' ').filter(function(w){ return w!=='und' && w!=='and'; }).join(' ');
}
function fxLandIndex(){
  if(FX_LAND_INDEX!==null) return FX_LAND_INDEX;
  var idx={};
  FX_LAND_INDEX=idx;
  if(typeof Intl==='undefined' || typeof Intl.DisplayNames!=='function') return idx;
  try{
    var de=new Intl.DisplayNames(['de'],{type:'region'});
    var en=new Intl.DisplayNames(['en'],{type:'region'});
    FX_ISO3166.forEach(function(code){
      [de.of(code),en.of(code)].forEach(function(name){
        if(!name) return;
        var n=fxNorm(name), kurz=fxLandNorm(name);
        if(n) idx[n]=code;
        if(kurz) idx[kurz]=code;
      });
    });
  }catch(e){}
  return idx;
}
function fxLandCode(name){
  var n=fxNorm(name), kurz=fxLandNorm(name);
  var idx=fxLandIndex();
  return n ? (idx[n]||idx[kurz]||'') : '';
}
function fxLaenderPaarGleich(meinHeim, meinGast, quellHeim, quellGast){
  var mh=fxLandCode(meinHeim), mg=fxLandCode(meinGast);
  var qh=fxLandCode(quellHeim), qg=fxLandCode(quellGast);
  return !!(mh && mg && qh && qg && mh===qh && mg===qg);
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
function fxFixtureLesen(x){
  var wb = (x && (x.providerCompetitionName || x.wettbewerb)) || '';
  var utc = (x && x.kickoffUtc) ? String(x.kickoffUtc)
          : (x && x.datum && x.anpfiff) ? (x.datum+'T'+x.anpfiff+':00Z') : '';
  var b = utc ? fxBerlin(utc) : null;
  return {
    roh:x,
    heim:(x&&x.heim)||'', gast:(x&&x.gast)||'',
    wettbewerb:wb,
    datumBerlin: b ? b.datum : ((x&&x.datum)||''),
    zeitBerlin: b ? b.zeit : '',
    heimTok:fxTokens((x&&x.heim)||''), gastTok:fxTokens((x&&x.gast)||'')
  };
}
function fxId(datumBerlinIso, heim, gast){
  var h=fxTokens(heim).slice().sort().join('');
  var g=fxTokens(gast).slice().sort().join('');
  var basis=String(datumBerlinIso||'').replace(/-/g,'')+'_'+h+'_'+g;
  return 'fx'+basis.replace(/[^a-z0-9_]/g,'').slice(0,60);
}
function fxGemeinsam(a,b){ return a.filter(function(w){ return b.indexOf(w)>=0; }); }
function fxGleich(a,b){
  if(a.length!==b.length) return false;
  var x=a.slice().sort().join('|'), y=b.slice().sort().join('|');
  return x===y;
}
function fxWbKompatibel(a,b){
  var x=fxNorm(a), y=fxNorm(b);
  if(!x || !y) return false;
  return x===y;
}
function fxZeitDiff(pZeit, f){
  if(!pZeit || !f.zeitBerlin) return false;
  return pZeit!==f.zeitBerlin;
}
function fxMehrdeutig(liste, pZeit, stufe){
  if(pZeit){
    var genau=liste.filter(function(f){ return f.zeitBerlin===pZeit; });
    if(genau.length===1) return { stufe:(stufe||1), fixture:genau[0], zeitAbweichung:false, ueberZeit:true };
  }
  return { mehrdeutig:true, kandidaten:liste };
}
function fxAufloesen(p, fx, alleOffenen){
  var pIso=datumIso(p.datum);
  if(!pIso) return null;
  var pTeams=teamsAus(p.match);
  var pHeim=fxTokens(pTeams.heim), pGast=fxTokens(pTeams.gast);
  var pZeit=String(p.anpfiff||'').match(/(\d{1,2})[:.](\d{2})/);
  pZeit = pZeit ? (('0'+pZeit[1]).slice(-2)+':'+pZeit[2]) : '';
  var tages=fx.filter(function(f){
    return f.datumBerlin===pIso && String(f.roh.status||'')==='FT';
  });
  if(!tages.length) return null;
  var s1=tages.filter(function(f){
    return fxLaenderPaarGleich(pTeams.heim,pTeams.gast,f.heim,f.gast)
        || (fxGleich(pHeim,f.heimTok) && fxGleich(pGast,f.gastTok));
  });
  if(s1.length===1) return { stufe:1, fixture:s1[0], zeitAbweichung:fxZeitDiff(pZeit,s1[0]) };
  if(s1.length>1)  return fxMehrdeutig(s1, pZeit, 1);
  var s2=tages.filter(function(f){
    return fxGemeinsam(pHeim,f.heimTok).length>0 && fxGemeinsam(pGast,f.gastTok).length>0;
  });
  if(s2.length===1) return { stufe:2, fixture:s2[0], zeitAbweichung:fxZeitDiff(pZeit,s2[0]) };
  if(s2.length>1)  return fxMehrdeutig(s2, pZeit, 2);
  if(!pZeit) return null;
  function tokenEindeutig(tok, seite){
    var traeger=[];
    tages.forEach(function(f){
      var toks = (seite==='heim') ? f.heimTok : f.gastTok;
      var name = (seite==='heim') ? fxNorm(f.heim) : fxNorm(f.gast);
      if(toks.indexOf(tok)>=0 && traeger.indexOf(name)<0) traeger.push(name);
    });
    return traeger.length===1;
  }
  function ankerTokens(meine, f, seite){
    return fxGemeinsam(meine, (seite==='heim')?f.heimTok:f.gastTok)
      .filter(function(tk){ return tokenEindeutig(tk, seite); });
  }
  var s3=tages.filter(function(f){
    if(!f.zeitBerlin || f.zeitBerlin!==pZeit) return false;
    if(!fxWbKompatibel(p.wettbewerb, f.wettbewerb)) return false;
    var ankerHeim=ankerTokens(pHeim,f,'heim').length>0;
    var ankerGast=ankerTokens(pGast,f,'gast').length>0;
    return (ankerHeim || ankerGast);
  });
  if(!s3.length) return null;
  if(s3.length>1) return fxMehrdeutig(s3, pZeit, 3);
  var k=s3[0];
  var ankerIstHeim=ankerTokens(pHeim,k,'heim').length>0;
  var quelleAnder = ankerIstHeim ? k.gastTok : k.heimTok;
  var meinAnder   = ankerIstHeim ? pGast : pHeim;
  var kollision=(alleOffenen||[]).some(function(q){
    if(q===p || q.id===p.id) return false;
    if(datumIso(q.datum)!==pIso) return false;
    var qT=teamsAus(q.match);
    return fxGemeinsam(quelleAnder, fxTokens(qT.heim)).length>0
        || fxGemeinsam(quelleAnder, fxTokens(qT.gast)).length>0;
  });
  if(kollision) return null;
  var kollision2=tages.some(function(f){
    if(f===k) return false;
    return fxGemeinsam(meinAnder, f.heimTok).length>0
        || fxGemeinsam(meinAnder, f.gastTok).length>0;
  });
  if(kollision2) return null;
  var aTok = ankerIstHeim ? ankerTokens(pHeim,k,'heim')[0] : ankerTokens(pGast,k,'gast')[0];
  return { stufe:3, fixture:k, zeitAbweichung:false,
           anker: aTok || (ankerIstHeim ? fxLandCode(pTeams.heim) : fxLandCode(pTeams.gast)) };
}

module.exports={
  normName,teamsAus,datumIso,FX_SCHWACH,fxNorm,fxTokens,fxLandNorm,fxLandCode,
  fxLaenderPaarGleich,fxBerlin,fxFixtureLesen,fxId,fxGemeinsam,fxGleich,
  fxWbKompatibel,fxAufloesen,fxZeitDiff,fxMehrdeutig
};
