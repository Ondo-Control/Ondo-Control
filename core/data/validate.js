/* ===================================================================================
   ONDO CORE - Datenfundament (Backlog-Punkt 94), Teil "Pruefung einer Saison".
   Entscheidet, ob eine Liga-Saison als Lernbestand taugt. Drei Zustaende:
     vollstaendig    jede Mannschaft hat gegen jede andere einmal zu Hause und einmal
                     auswaerts gespielt, alle Ergebnisse liegen vor. Hoechstens
                     MAX_ZUSATZ weitere Spiele (Relegation/Playoff) sind erlaubt und
                     werden als "zusatz" markiert.
     laufend         die Saison ist die aktuelle (gemessen am juengsten Ergebnis im
                     gesamten Datenbestand) und noch nicht vollstaendig.
     unvollstaendig  alles andere - mit Grund. Zaehlt NICHT zum Lernbestand.
   "Datei vorhanden" ist ausdruecklich kein Beleg fuer Vollstaendigkeit: OpenFootball fuehrt
   auch abgeschlossene Saisons teils mit fehlenden Ergebnissen.
   =================================================================================== */
(function(root, factory){
  if(typeof module==='object' && module.exports) module.exports=factory();
  else root.OndoCoreValidate=factory();
})(this, function(){

  var MAX_ZUSATZ = 12;

  /* ansetzungen: [{heimKey, gastKey, datum, hatErgebnis}] - ALLE angesetzten Spiele der
     Saison, auch die ohne Ergebnis. istAktuelleSaison: true/false. */
  function saisonStatus(ansetzungen, istAktuelleSaison){
    var teams={}, paare={}, mit=0, selbst=0;
    ansetzungen.forEach(function(a){
      teams[a.heimKey]=1; teams[a.gastKey]=1;
      if(a.heimKey===a.gastKey) selbst++;
      if(a.hatErgebnis){
        mit++;
        var k=a.heimKey+'|'+a.gastKey;
        paare[k]=(paare[k]||0)+1;
      }
    });
    var n=Object.keys(teams).length, soll=n*(n-1);
    var verschiedenePaare=Object.keys(paare).length;
    var zusatz=mit-verschiedenePaare;                 /* Wiederholungen derselben Paarung */
    var ohne=ansetzungen.length-mit;
    var basis={ teams:n, soll:soll, angesetzt:ansetzungen.length, mitErgebnis:mit, zusatz:0 };
    function aus(status, grund){ basis.status=status; basis.grund=grund||''; return basis; }

    if(!ansetzungen.length) return aus('unvollstaendig','keine Spiele');
    if(selbst) return aus('unvollstaendig','Mannschaft gegen sich selbst: '+selbst);
    var rundeKomplett = (n>=2 && verschiedenePaare===soll);
    if(rundeKomplett && ohne===0 && zusatz<=MAX_ZUSATZ){
      basis.zusatz=zusatz;
      return aus('vollstaendig', zusatz?('mit '+zusatz+' Zusatzspielen'):'');
    }
    if(istAktuelleSaison) return aus('laufend', mit+' von '+soll+' Spielen der Doppelrunde');
    if(!rundeKomplett) return aus('unvollstaendig',
      verschiedenePaare+' von '+soll+' Paarungen mit Ergebnis'+(ohne?(' ('+ohne+' angesetzte ohne Ergebnis)'):''));
    if(ohne) return aus('unvollstaendig', ohne+' angesetzte Spiele ohne Ergebnis');
    return aus('unvollstaendig', zusatz+' Zusatzspiele (mehr als '+MAX_ZUSATZ+')');
  }

  /* Markiert in einer vollstaendigen Saison die Zusatzspiele: je Paarung gilt das zeitlich
     erste Spiel als Doppelrunde, jedes spaetere als Zusatz. Veraendert die Records. */
  function zusatzMarkieren(records){
    var gesehen={};
    records.slice().sort(function(a,b){ return a.datum<b.datum?-1:a.datum>b.datum?1:0; })
      .forEach(function(r){
        var k=r.heimKey+'|'+r.gastKey;
        r.zusatz = !!gesehen[k];
        gesehen[k]=1;
      });
    return records;
  }

  /* Prueft die eingefrorene Aufteilung (core/data/splits.json) gegen die Saisonzustaende
     EINER Liga. zustand: { "2023-24": "vollstaendig", ... }. Rueckgabe: { rollen, fehler }.
     Rollen: lernen · pruefen · holdout · spaeter (nach dem Holdout, nur Walk-forward) ·
     aus (nicht vollstaendig und deshalb in keiner Menge). */
  function aufteilungPruefen(split, zustand){
    var fehler=[], rollen={};
    if(!split || !split.lernenBis || !split.pruefen || !split.holdout){
      return { rollen:rollen, fehler:['Aufteilung fehlt oder ist unvollstaendig'] };
    }
    if(!(split.lernenBis < split.pruefen && split.pruefen < split.holdout))
      fehler.push('Reihenfolge verletzt: lernenBis < pruefen < holdout muss gelten');
    ['pruefen','holdout'].forEach(function(r){
      if(zustand[split[r]]!=='vollstaendig')
        fehler.push(r+'-Saison '+split[r]+' ist nicht vollstaendig ('+(zustand[split[r]]||'fehlt')+')');
    });
    Object.keys(zustand).sort().forEach(function(s){
      var rolle;
      if(s===split.holdout) rolle='holdout';
      else if(s===split.pruefen) rolle='pruefen';
      else if(s>split.holdout) rolle='spaeter';
      else if(zustand[s]!=='vollstaendig') rolle='aus';
      else if(s<=split.lernenBis) rolle='lernen';
      else rolle='aus';       /* vollstaendig, aber zwischen den Mengen - bewusst ungenutzt */
      rollen[s]=rolle;
    });
    return { rollen:rollen, fehler:fehler };
  }

  return { MAX_ZUSATZ:MAX_ZUSATZ, saisonStatus:saisonStatus, zusatzMarkieren:zusatzMarkieren,
           aufteilungPruefen:aufteilungPruefen };
});
