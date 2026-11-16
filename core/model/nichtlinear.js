/* ===================================================================================
   ONDO CORE - nichtlineares Verfahren (Backlog-Punkt 94): kleines neuronales Netz (eine verdeckte Schicht, tanh)
   mit Direktverbindung vom linearen Anteil. Startet exakt als L0 (altes Modell K6), dann Lernen in Runden mit
   eingefrorenem Lernstand je Runde: erst Vorhersage aller Lernspiele ohne Ergebnis, dann Fehler und Schritt (Adam),
   Stopp ueber die getrennte Stoppmenge. Findet Wechselwirkungen, die das lineare Modell nicht findet.
   Wird NUR uebernommen, wenn es auf den Pruefspielen die Huerde gegen das lineare Modell besteht (lagen_lauf.js, gezaehlter Versuch).
   Deterministisch (fester Startwert), kein Netz, keine Uhr.
   =================================================================================== */
function rng(seed){ var s=seed>>>0; return function(){ s=(s*1664525+1013904223)>>>0; return s/4294967296; }; }
function softmax(z){ var m=Math.max(z[0],z[1],z[2]), e=[Math.exp(z[0]-m),Math.exp(z[1]-m),Math.exp(z[2]-m)], t=e[0]+e[1]+e[2]; return [e[0]/t,e[1]/t,e[2]/t]; }

/* d: [{v:[...], y}], Netz: { L:[3][D] linear, W1:[H][D], b1:[H], W2:[3][H], b2:[3] } */
function vor(net, v){
  var H=net.b1.length, D=v.length, h=new Array(H), z=[net.b2[0],net.b2[1],net.b2[2]];
  for(var j=0;j<H;j++){ var s=net.b1[j]; for(var i=0;i<D;i++) s+=net.W1[j][i]*v[i]; h[j]=Math.tanh(s); }
  for(var k=0;k<3;k++){ for(var i2=0;i2<D;i2++) z[k]+=net.L[k][i2]*v[i2]; for(var j2=0;j2<H;j2++) z[k]+=net.W2[k][j2]*h[j2]; }
  return { h:h, p:softmax(z) };
}
function verluste(net, d){ return d.map(function(r){ return -Math.log(Math.max(1e-12, vor(net, r.v).p[r.y])); }); }
function mittel(a){ var s=0; a.forEach(function(x){ s+=x; }); return s/a.length; }

function neu(namen, H, seed){
  var D=namen.length, R=rng(seed), L=[[],[],[]], W1=[], b1=[], W2=[[],[],[]];
  for(var k=0;k<3;k++) namen.forEach(function(n){ L[k].push((n==='lnH'&&k===0)||(n==='lnD'&&k===1)||(n==='lnA'&&k===2)?1:0); });
  for(var j=0;j<H;j++){ var r=[]; for(var i=0;i<D;i++) r.push((R()-0.5)*0.5); W1.push(r); b1.push(0); }
  for(var k2=0;k2<3;k2++) for(var j2=0;j2<H;j2++) W2[k2].push(0);          /* Netzanteil startet bei 0: Start = L0 */
  return { L:L, W1:W1, b1:b1, W2:W2, b2:[0,0,0] };
}
function klon(o){ return JSON.parse(JSON.stringify(o)); }
function flach(net){ return { L:net.L, W1:net.W1, b1:net.b1, W2:net.W2, b2:net.b2 }; }

/* Ein Schritt mit Adam ueber alle Lernspiele (Gesamtlauf = eine Runde). */
function runde(net, d, st, opt){
  var H=net.b1.length, D=d[0].v.length, N=d.length;
  var g={ L:[[],[],[]], W1:[], b1:new Array(H).fill(0), W2:[[],[],[]], b2:[0,0,0] };
  for(var k=0;k<3;k++){ g.L[k]=new Array(D).fill(0); g.W2[k]=new Array(H).fill(0); }
  for(var j=0;j<H;j++) g.W1.push(new Array(D).fill(0));
  d.forEach(function(r){
    var f=vor(net, r.v), dz=[f.p[0],f.p[1],f.p[2]]; dz[r.y]-=1;
    for(var k2=0;k2<3;k2++){
      g.b2[k2]+=dz[k2];
      for(var i=0;i<D;i++) g.L[k2][i]+=dz[k2]*r.v[i];
      for(var j2=0;j2<H;j2++) g.W2[k2][j2]+=dz[k2]*f.h[j2];
    }
    for(var j3=0;j3<H;j3++){
      var dh=0; for(var k3=0;k3<3;k3++) dh+=dz[k3]*net.W2[k3][j3];
      dh*=(1-f.h[j3]*f.h[j3]); g.b1[j3]+=dh;
      for(var i2=0;i2<D;i2++) g.W1[j3][i2]+=dh*r.v[i2];
    }
  });
  st.t++; var b1=0.9, b2=0.999, lr=opt.lernrate, e=1e-8;
  function schritt(w, gr, m, v, idx, zuNetz){
    var gg=gr/N+(zuNetz?opt.bremse*w:0);
    m[idx]=b1*(m[idx]||0)+(1-b1)*gg; v[idx]=b2*(v[idx]||0)+(1-b2)*gg*gg;
    return w-lr*(m[idx]/(1-Math.pow(b1,st.t)))/(Math.sqrt(v[idx]/(1-Math.pow(b2,st.t)))+e);
  }
  var idx=0;
  for(var k4=0;k4<3;k4++){ for(var i3=0;i3<D;i3++) net.L[k4][i3]=schritt(net.L[k4][i3], g.L[k4][i3], st.m, st.v, idx++, false); net.b2[k4]=schritt(net.b2[k4], g.b2[k4], st.m, st.v, idx++, false); for(var j4=0;j4<H;j4++) net.W2[k4][j4]=schritt(net.W2[k4][j4], g.W2[k4][j4], st.m, st.v, idx++, true); }
  for(var j5=0;j5<H;j5++){ net.b1[j5]=schritt(net.b1[j5], g.b1[j5], st.m, st.v, idx++, false); for(var i4=0;i4<D;i4++) net.W1[j5][i4]=schritt(net.W1[j5][i4], g.W1[j5][i4], st.m, st.v, idx++, true); }
}

/* lernen/stopp/pruefen: Zeilen { x, y, r }; namen und st (mittel/streuung) vom linearen Modell derselben Gruppen. opt: { maxRunden, geduld, lernrate, bremse, versteckt } */
function trainieren(lernen, stopp, namen, st, opt){
  function vek(z){ return namen.map(function(n){ return (z.x[n]-st.mittel[n])/st.streuung[n]; }); }
  var dl=lernen.map(function(z){ return { v:vek(z), y:z.y }; }), ds=stopp.map(function(z){ return { v:vek(z), y:z.y }; });
  var net=neu(namen, opt.versteckt||8, 12345), state={ t:0, m:{}, v:{} }, beste=null, ohne=0, versionen=[];
  for(var r=0;r<=opt.maxRunden;r++){
    var vl=mittel(verluste(net,dl)), vs=mittel(verluste(net,ds));
    versionen.push({ runde:r, lernstand:'N'+r, verlustLernen:vl, verlustStopp:vs });
    if(!beste || vs<beste.vs-1e-7){ beste={ vs:vs, vl:vl, runde:r, net:klon(flach(net)) }; ohne=0; } else if(++ohne>=opt.geduld) break;
    runde(net, dl, state, opt);
  }
  return { namen:namen, standardisierung:st, netz:beste.net, runde:beste.runde, verlustLernen:beste.vl, verlustStopp:beste.vs, versionen:versionen,
    verlusteAuf:function(zeilen){ return verluste(beste.net, zeilen.map(function(z){ return { v:vek(z), y:z.y }; })); },
    vorhersage:function(x){ return vor(beste.net, vek({ x:x })).p; } };
}
module.exports={ trainieren:trainieren };
