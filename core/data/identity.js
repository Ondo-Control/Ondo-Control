/* Core Stufe 1, Teil 1 — reine, DOM-/State-freie Identitaetsfunktionen.
   Die unten markierten Funktionen sind wortgetreu aus beta.html main 2fa48c3213c6a361aa6b4a834e6e7ff7135417ed
   uebernommen. beta.html selbst wird nicht geaendert; tests/t12_core_daten.js prueft die Paritaet. */

function teamsAus(match){
  var p = String(match||'').split(/\s+[-–]\s+/);
  return { heim:(p[0]||'Heim').trim(), gast:(p[1]||'Gast').trim() };
}

function normName(str){ return String(str||'').toLowerCase().replace(/[^a-z0-9]/g,''); }

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
  }catch(e){ /* Fehlt DisplayNames, bleibt der bisherige Resolver unveraendert aktiv. */ }
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
    var s=f.format(d);                       /* sv-SE liefert "JJJJ-MM-TT HH:MM" */
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

function fxGemeinsam(a,b){
  return a.filter(function(w){ return b.indexOf(w)>=0; });
}

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

function fxAufloesen(p, fx, alleOffenen){
  var pIso=datumIso(p.datum);
  if(!pIso) return null;
  var pTeams=teamsAus(p.match);
  var pHeim=fxTokens(pTeams.heim), pGast=fxTokens(pTeams.gast);
  var pZeit=String(p.anpfiff||'').match(/(\d{1,2})[:.](\d{2})/);
  pZeit = pZeit ? (('0'+pZeit[1]).slice(-2)+':'+pZeit[2]) : '';
  /* Kandidatenmenge: alle Fixtures derselben Quelle am selben Berlin-Datum mit Endstand. */
  var tages=fx.filter(function(f){
    return f.datumBerlin===pIso && String(f.roh.status||'')==='FT';
  });
  if(!tages.length) return null;

  /* --- Stufe 1: starke Identitaet beider Mannschaften ---
     Bei einem vollstaendigen Nationalmannschaftspaar zaehlt zusaetzlich dieselbe ISO-Paarung
     als starke Identitaet. Der bisherige Tokenvergleich bleibt fuer alle anderen Faelle
     unveraendert. */
  var s1=tages.filter(function(f){
    return fxLaenderPaarGleich(pTeams.heim,pTeams.gast,f.heim,f.gast)
        || (fxGleich(pHeim,f.heimTok) && fxGleich(pGast,f.gastTok));
  });
  if(s1.length===1) return { stufe:1, fixture:s1[0], zeitAbweichung:fxZeitDiff(pZeit,s1[0]) };
  if(s1.length>1)  return fxMehrdeutig(s1, pZeit, 1);

  /* --- Stufe 2: zwei unabhaengige Anker ---
     Unveraendert: Nationalmannschaftspaare mit zwei passenden ISO-Codes sind bereits in
     Stufe 1 stark identifiziert; alles andere bleibt beim bisherigen Tokenvergleich. */
  var s2=tages.filter(function(f){
    return fxGemeinsam(pHeim,f.heimTok).length>0 && fxGemeinsam(pGast,f.gastTok).length>0;
  });
  if(s2.length===1) return { stufe:2, fixture:s2[0], zeitAbweichung:fxZeitDiff(pZeit,s2[0]) };
  if(s2.length>1)  return fxMehrdeutig(s2, pZeit, 2);

  /* --- Stufe 3: EIN Anker + Wettbewerb + exakte Zeit + Eindeutigkeit --- */
  /* Bedingung 2: Anstosszeit muss auf BEIDEN Seiten vorhanden sein. */
  if(!pZeit) return null;
  /* Bedingung 1 verlangt einen EINDEUTIGEN Anker-Token. Die Begriffsbestimmung steht wortgleich
     im Auftrag (Abschnitt 8a, Vorbereitung): "Ein 'eindeutiger Anker-Token' ist ein Token, das
     in der Kandidatenmenge dieses Tages und dieser Heim-/Gast-Seite nur zu einem Team passt."
     Hier gezaehlt ueber genau diese Kandidatenmenge (alle Fixtures derselben Quelle mit
     Endstand an diesem nach Europe/Berlin umgerechneten Datum), getrennt nach Heim- und
     Gastseite. Beispiel aus Ondos echtem Datenbestand vom 12.9.2026: 'athletic' steht auf der
     Heimseite bei ZWEI Vereinen (Athletic Club und Charlton Athletic FC) und ist dort deshalb
     KEIN eindeutiger Anker - 'lazio' und 'auxerre' stehen je nur bei einem und sind es. Auf
     Stufe 1 und 2 wird die Eindeutigkeit dagegen ueber die vollstaendige PAARUNG entschieden
     (genau ein Kandidat, siehe oben) - so verlangt es der Auftrag, und so bleibt
     Athletic Bilbao - FC Elche auf Stufe 2 loesbar, obwohl 'athletic' fuer sich nicht
     eindeutig ist. */
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
    if(!f.zeitBerlin || f.zeitBerlin!==pZeit) return false;                    /* Bedingung 2 */
    if(!fxWbKompatibel(p.wettbewerb, f.wettbewerb)) return false;              /* Bedingung 4 */
    var ankerHeim=ankerTokens(pHeim,f,'heim').length>0;
    var ankerGast=ankerTokens(pGast,f,'gast').length>0;
    return (ankerHeim || ankerGast);                                           /* Bedingung 1 */
  });
  if(!s3.length) return null;
  if(s3.length>1) return fxMehrdeutig(s3, pZeit, 3);
  var k=s3[0];
  /* Bedingung 5: Gehoert die ANDERE Mannschaft der Quelle eindeutig zu einem anderen offenen
     Spiel desselben Tages in Ondos Liste? Dann ist die Paarung nicht glaubwuerdig. */
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
  /* Bedingung 6: Gehoert MEINE andere Mannschaft eindeutig zu einem anderen Fixture des Tages? */
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

function fxZeitDiff(pZeit, f){
  if(!pZeit || !f.zeitBerlin) return false;
  return pZeit!==f.zeitBerlin;
}

function fxMehrdeutig(liste, pZeit, stufe){
  /* Mehrere Kandidaten derselben Stufe: Nur wenn die Anstosszeit sie eindeutig aufloest, darf
     zugeordnet werden (Abschnitt 8a). Sonst mehrdeutig - kein Raten.
     BERICHTIGT im eigenen Trockentest (21.9.2026): Hier stand fest stufe:1, auch wenn die
     Mehrdeutigkeit aus Stufe 2 oder 3 kam. Der Vorschlag haette dann eine staerkere Zuordnung
     ausgewiesen, als tatsaechlich bewiesen war - und bei Stufe 3 waere ausserdem die
     Provider-ID sofort gebunden worden, obwohl Abschnitt 8a das erst nach Ondos Uebernehmen
     erlaubt. Die aufrufende Stufe wird jetzt durchgereicht. */
  if(pZeit){
    var genau=liste.filter(function(f){ return f.zeitBerlin===pZeit; });
    if(genau.length===1) return { stufe:(stufe||1), fixture:genau[0], zeitAbweichung:false, ueberZeit:true };
  }
  return { mehrdeutig:true, kandidaten:liste };
}


/* Core-eigene stabile ID fuer Liga-Daten. Anders als beta.fxId enthaelt sie bewusst KEIN
   Datum: Ansetzungen koennen verschoben werden. In einer Liga-Saison ist die geordnete
   Heim/Gast-Paarung eindeutig; validate.js verwirft eine Saison bei doppelter ID. */
function coreMatchId(league, season, heim, gast){
  var h=fxTokens(heim).slice().sort().join('');
  var g=fxTokens(gast).slice().sort().join('');
  var basis=String(league||'')+'_'+String(season||'')+'_'+h+'_'+g;
  return 'm'+basis.replace(/[^a-z0-9_]/g,'').slice(0,100);
}

module.exports={coreMatchId:coreMatchId,FX_SCHWACH:FX_SCHWACH,FX_ISO3166:FX_ISO3166,teamsAus:teamsAus,normName:normName,datumIso:datumIso,fxNorm:fxNorm,fxTokens:fxTokens,fxLandNorm:fxLandNorm,fxLandIndex:fxLandIndex,fxLandCode:fxLandCode,fxLaenderPaarGleich:fxLaenderPaarGleich,fxBerlin:fxBerlin,fxFixtureLesen:fxFixtureLesen,fxId:fxId,fxGemeinsam:fxGemeinsam,fxGleich:fxGleich,fxWbKompatibel:fxWbKompatibel,fxAufloesen:fxAufloesen,fxZeitDiff:fxZeitDiff,fxMehrdeutig:fxMehrdeutig};
