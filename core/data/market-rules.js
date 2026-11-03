'use strict';
/* Paritaetsmodul; in Teil 1 nur getestet, nicht fuer Modell/Backtest benutzt. */
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
module.exports={marktUrteil};
