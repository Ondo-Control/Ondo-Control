/* ===================================================================================
   ONDO CORE - das eigene Rechenmodell (Backlog-Punkt 94, Teil 2), Teil "Rechnen".
   Reine Funktionen, kein Netz, kein Schluessel, kein Zufall. Laeuft in Node und spaeter
   unveraendert im Browser.

   Idee in einem Satz: Jede Mannschaft hat eine Angriffs- und eine Abwehrstaerke, jede Liga
   ein Tor-Grundniveau und einen Heimvorteil. Daraus folgen erwartete Tore beider Seiten und
   - ueber die Poisson-Verteilung - Wahrscheinlichkeiten fuer jeden Endstand.

     erwartete Heimtore = exp(niveau + heimvorteil + angriff[Heim] - abwehr[Gast])
     erwartete Gasttore = exp(niveau               + angriff[Gast] - abwehr[Heim])

   Gelernt wird nach JEDEM Spiel in kleinen Schritten: hat eine Mannschaft mehr Tore
   geschossen als erwartet, steigt ihr Angriff und sinkt die Abwehr des Gegners - und
   umgekehrt. Vor jedem Spiel wird erst vorhergesagt, dann gelernt.
   =================================================================================== */
(function(root, factory){
  if(typeof module==='object' && module.exports) module.exports=factory();
  else root.OndoCoreModell=factory();
})(this, function(){

  var MAX_TORE = 15;                 /* Endstaende bis 15:15 werden einzeln gerechnet */
  var TOR_DECKEL = 6;                /* beim Lernen zaehlt ein Kantersieg hoechstens als 6 Tore */
  var LAMBDA_MIN = 0.15, LAMBDA_MAX = 5;

  function poissonReihe(lambda){
    var p=[Math.exp(-lambda)];
    for(var k=1;k<=MAX_TORE;k++) p.push(p[k-1]*lambda/k);
    return p;
  }
  function klemme(x){ return Math.max(LAMBDA_MIN, Math.min(LAMBDA_MAX, x)); }

  /* Wahrscheinlichkeiten der sieben Aussagen der App aus den erwarteten Toren.
     dc = Korrektur fuer torarme Endstaende (0:0, 1:0, 0:1, 1:1) nach Dixon und Coles;
     0 = keine Korrektur. */
  function wahrscheinlichkeiten(lh, la, dc){
    lh=klemme(lh); la=klemme(la); dc=dc||0;
    var ph=poissonReihe(lh), pa=poissonReihe(la);
    var s={ sieg_heim:0, remis:0, sieg_gast:0, ueber:0, btts_ja:0 }, summe=0;
    for(var x=0;x<=MAX_TORE;x++) for(var y=0;y<=MAX_TORE;y++){
      var p=ph[x]*pa[y];
      if(dc){
        if(x===0&&y===0) p*=Math.max(0, 1-lh*la*dc);
        else if(x===0&&y===1) p*=Math.max(0, 1+lh*dc);
        else if(x===1&&y===0) p*=Math.max(0, 1+la*dc);
        else if(x===1&&y===1) p*=Math.max(0, 1-dc);
      }
      summe+=p;
      if(x>y) s.sieg_heim+=p; else if(x===y) s.remis+=p; else s.sieg_gast+=p;
      if(x+y>2.5) s.ueber+=p;
      if(x>0&&y>0) s.btts_ja+=p;
    }
    Object.keys(s).forEach(function(k){ s[k]/=summe; });
    s.unter=1-s.ueber; s.btts_nein=1-s.btts_ja;
    return s;
  }

  /* Zustand eines Landes: Mannschaften (ueber Ligen hinweg) und Ligen. */
  function neuerZustand(){ return { teams:{}, ligen:{} }; }
  function ligaZustand(z, ligaId, par){
    if(!z.ligen[ligaId]) z.ligen[ligaId]={ niveau:par.startNiveau, heim:par.startHeim, spiele:0 };
    return z.ligen[ligaId];
  }
  function stufe(ligaId){ return Number(String(ligaId).split('.')[1])||1; }

  /* Mannschaft fuer ein Spiel bereitstellen: neu anlegen, Ligawechsel und Saisonwechsel
     beruecksichtigen. Wird VOR der Vorhersage aufgerufen und veraendert den Zustand. */
  function teamBereit(z, key, ligaId, saison, par){
    var t=z.teams[key], ligaNeu=!z.ligen[ligaId] || z.ligen[ligaId].spiele===0;
    if(!t){
      /* In einer Liga, die das Modell zum ersten Mal sieht, starten alle bei 0. Wer spaeter
         neu dazukommt, ist in aller Regel ein Aufsteiger und startet etwas schwaecher. */
      var start=ligaNeu ? 0 : par.neuStart;
      t=z.teams[key]={ a:start, d:start, liga:ligaId, saison:saison, spiele:0, zuletzt:'' };
      return t;
    }
    if(t.liga!==ligaId){
      /* Staerken gelten relativ zur Liga. Aufstieg = staerkere Gegner = Abschlag, Abstieg = Zuschlag. */
      var diff=stufe(t.liga)-stufe(ligaId);            /* >0: aufgestiegen */
      t.a-=diff*par.stufenSprung; t.d-=diff*par.stufenSprung;
      t.liga=ligaId;
    }
    if(t.saison!==saison){
      t.a*=par.saisonBehalt; t.d*=par.saisonBehalt;   /* zur Mitte ziehen: Kader aendern sich */
      t.saison=saison;
    }
    return t;
  }

  function erwartung(lz, th, tg){
    return { lh:klemme(Math.exp(lz.niveau+lz.heim+th.a-tg.d)), la:klemme(Math.exp(lz.niveau+tg.a-th.d)) };
  }

  /* Ein Spiel verarbeiten: erst Vorhersage, dann (wenn lernen!==false) lernen.
     spiel: { liga, saison, datum, heimKey, gastKey, th, tg }  ->  { lh, la, p } */
  function schritt(z, spiel, par, lernen){
    var lz=ligaZustand(z, spiel.liga, par);
    var H=teamBereit(z, spiel.heimKey, spiel.liga, spiel.saison, par);
    var G=teamBereit(z, spiel.gastKey, spiel.liga, spiel.saison, par);
    var e=erwartung(lz, H, G);
    var aus={ lh:e.lh, la:e.la, p:wahrscheinlichkeiten(e.lh, e.la, par.dc),
              heimSpiele:H.spiele, gastSpiele:G.spiele };
    if(lernen!==false){
      var fh=Math.min(spiel.th, TOR_DECKEL)-e.lh, fg=Math.min(spiel.tg, TOR_DECKEL)-e.la;
      H.a+=par.lernrate*fh; G.d-=par.lernrate*fh;
      G.a+=par.lernrate*fg; H.d-=par.lernrate*fg;
      lz.niveau+=par.lernrateLiga*(fh+fg)/2;
      lz.heim+=par.lernrateLiga*(fh-fg)/2;
      lz.spiele++; H.spiele++; G.spiele++; H.zuletzt=spiel.datum; G.zuletzt=spiel.datum;
    }
    return aus;
  }

  /* Vorhersage fuer eine beliebige Paarung aus der gespeicherten Modelldatei (modell.json).
     Veraendert nichts. belastbar=false, wenn eine Mannschaft dem Modell kaum bekannt ist. */
  function vorhersage(modell, ligaId, heimKey, gastKey){
    var land=String(ligaId).split('.')[0], L=modell.laender && modell.laender[land];
    if(!L || !L.ligen[ligaId]) return { ok:false, grund:'Liga dem Modell unbekannt' };
    var H=L.teams[heimKey], G=L.teams[gastKey];
    if(!H || !G) return { ok:false, grund:'Mannschaft dem Modell unbekannt: '+(!H?heimKey:gastKey) };
    function inLiga(t){
      var diff=stufe(t.liga)-stufe(ligaId);
      return { a:t.a-diff*modell.parameter.stufenSprung, d:t.d-diff*modell.parameter.stufenSprung };
    }
    var e=erwartung(L.ligen[ligaId], inLiga(H), inLiga(G));
    var min=modell.mindestSpiele||0;
    return { ok:true, lh:e.lh, la:e.la, p:wahrscheinlichkeiten(e.lh, e.la, modell.parameter.dc),
             belastbar:(H.spiele>=min && G.spiele>=min),
             grund:(H.spiele>=min && G.spiele>=min)?'':'zu wenige Spiele einer Mannschaft im Bestand' };
  }

  return { MAX_TORE:MAX_TORE, TOR_DECKEL:TOR_DECKEL, wahrscheinlichkeiten:wahrscheinlichkeiten,
           neuerZustand:neuerZustand, schritt:schritt, vorhersage:vorhersage, stufe:stufe };
});
