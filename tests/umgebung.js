/* ===================================================================================
   TESTUMGEBUNG fuer Backlog-Punkt 86.
   Grundsatz (Auftrag Abschnitt 12): "mit den ECHTEN Funktionen ... nicht nur einen
   losgeloesten Nachbau". Deshalb wird hier NICHTS nachgebaut: Der komplette <script>-Block
   aus beta.html wird wortgleich in einen Node-vm-Kontext geladen und dort ausgefuehrt.
   Nachgebildet ist ausschliesslich das, was ein Browser mitbringt und Node nicht hat:
   document, window, localStorage, fetch, alert. IndexedDB fehlt bewusst - der Code faellt
   dann auf localStorage zurueck (eingebauter, dokumentierter Weg, siehe speicherSchreiben).
   =================================================================================== */
var fs=require('fs'), vm=require('vm'), path=require('path');
var BETA = require('path').join(__dirname, '..', 'beta.html');

/* Der Skript-Block wird wortgleich uebernommen - mit GENAU EINER dokumentierten Ausnahme:
   Die allerletzte Zeile des Programmstarts, load().then(...), wird einem globalen Namen
   zugewiesen, damit der Test auf das Ende des Startvorgangs warten kann. Im Browser wartet
   nichts darauf, weil dort nichts danach kommt; im Test muss feststehen, WANN der gespeicherte
   Zustand geladen ist, sonst laeuft ein zweiter, spaeter Ladevorgang in einen halb fertigen
   Zustand hinein. Es wird keine Zeile Logik veraendert, nur das erzeugte Promise festgehalten -
   und die Ersetzung wird geprueft, damit sie nicht eines Tages stillschweigend ausfaellt. */
var START_ALT = 'load().then(function(){\n  pruefRunEntsperren();';
function skriptText(){
  var s=fs.readFileSync(BETA,'utf8');
  var m=s.match(/<script>([\s\S]*)<\/script>/);
  if(!m) throw new Error('kein <script>-Block in beta.html');
  var t=m[1];
  if(t.indexOf(START_ALT)<0) throw new Error('Programmstart-Zeile nicht gefunden - Testumgebung anpassen');
  return t.replace(START_ALT, 'this.__start = ' + START_ALT);
}

/* --- winziger DOM-Ersatz. Jedes Element merkt sich, was hineingeschrieben wurde. --- */
function machElement(id){
  var el={
    id:id, _text:'', innerHTML:'', value:'', disabled:false, dataset:{},
    style:{}, children:[],
    classList:{ add:function(){}, remove:function(){}, toggle:function(){}, contains:function(){return false;} },
    addEventListener:function(){}, removeEventListener:function(){},
    appendChild:function(k){ el.children.push(k); return k; },
    removeChild:function(){}, setAttribute:function(){}, getAttribute:function(){return null;},
    remove:function(){}, focus:function(){}, blur:function(){}, click:function(){},
    scrollIntoView:function(){}, querySelectorAll:function(){ return []; },
    querySelector:function(){ return null; }
  };
  Object.defineProperty(el,'textContent',{ get:function(){return el._text;}, set:function(v){ el._text=String(v); } });
  return el;
}

function neueUmgebung(opt){
  opt=opt||{};
  var elemente={};
  /* Ein bereits vorhandener Speicherstand wird VOR dem Start gesetzt - genau wie im Browser,
     wo die Daten schon da sind, wenn die Seite geladen wird. Damit laeuft load() genau einmal. */
  var speicher={};
  if(opt.save) speicher['ondo-control-v1'] = (typeof opt.save==='string') ? opt.save : JSON.stringify(opt.save);
  var protokoll={ alerts:[], fetches:[], listener:{} };

  var document={
    visibilityState:'visible',
    getElementById:function(id){ if(!elemente[id]) elemente[id]=machElement(id); return elemente[id]; },
    querySelectorAll:function(){ return []; },
    querySelector:function(){ return null; },
    createElement:function(tag){ var e=machElement('neu_'+tag); e.tagName=String(tag).toUpperCase(); return e; },
    addEventListener:function(n,f){ (protokoll.listener[n]=protokoll.listener[n]||[]).push(f); },
    removeEventListener:function(){},
    body: machElement('body'),
    documentElement: machElement('html'),
    execCommand:function(){ return true; }
  };
  var localStorage={
    getItem:function(k){ return Object.prototype.hasOwnProperty.call(speicher,k)? speicher[k] : null; },
    setItem:function(k,v){ speicher[k]=String(v); },
    removeItem:function(k){ delete speicher[k]; },
    clear:function(){ speicher={}; }
  };

  var ctx = {
    console:console, Promise:Promise, JSON:JSON, Math:Math, Date:Date, Intl:Intl,
    setTimeout:setTimeout, clearTimeout:clearTimeout, setInterval:function(){return 0;},
    clearInterval:function(){}, isNaN:isNaN, parseInt:parseInt, parseFloat:parseFloat,
    encodeURIComponent:encodeURIComponent, decodeURIComponent:decodeURIComponent,
    String:String, Number:Number, Object:Object, Array:Array, Boolean:Boolean,
    RegExp:RegExp, Error:Error, TypeError:TypeError, Map:Map, Set:Set,
    document:document, localStorage:localStorage,
    navigator:{ userAgent:'node-test', clipboard:{ writeText:function(){ return Promise.resolve(); } } },
    location:{ href:'https://test/beta.html', search:'', reload:function(){} },
    alert:function(m){ protokoll.alerts.push(String(m)); },
    confirm:function(){ return true; },
    prompt:function(){ return null; },
    /* fetch wird je Test gesetzt; der Standard scheitert laut, damit kein Test versehentlich
       ins echte Netz greift und dabei "gruen" wird. */
    fetch:function(u){ protokoll.fetches.push(String(u));
      return Promise.reject(new Error('kein Netz im Test: '+u)); },
    AbortController: (typeof AbortController!=='undefined') ? AbortController : function(){ this.signal=null; this.abort=function(){}; },
    _protokoll: protokoll, _speicher: speicher
  };
  ctx.window = ctx;
  ctx.globalThis = ctx;
  ctx.self = ctx;
  ctx.window.addEventListener = function(n,f){ (protokoll.listener[n]=protokoll.listener[n]||[]).push(f); };
  ctx.addEventListener = ctx.window.addEventListener;
  ctx.removeEventListener = function(){};
  /* window.indexedDB bleibt ABSICHTLICH undefiniert: speicherSchreiben/-Lesen fallen dann auf
     localStorage zurueck, genau wie im Browser ohne IndexedDB (Art. 6, dokumentierter Weg). */

  vm.createContext(ctx);
  vm.runInContext(skriptText(), ctx, { filename:'beta.html:<script>' });
  ctx._elemente = elemente;
  /* Auf das Ende des Programmstarts warten - erst danach steht der geladene Zustand. */
  ctx.bereit = Promise.resolve(ctx.__start).then(function(){ return ctx; });
  return ctx;
}

/* --- kleine Testhilfen --- */
var zaehler={ ok:0, fehl:0 };
var aktuellerBlock='';
function block(name){ aktuellerBlock=name; console.log('\n── '+name+' '+'─'.repeat(Math.max(2,62-name.length))); }
function pruef(name, bedingung, zusatz){
  if(bedingung){ zaehler.ok++; console.log('  ✓ '+name+(zusatz?('  ['+zusatz+']'):'')); }
  else { zaehler.fehl++; console.log('  ✗ FEHL: '+name+(zusatz?('  ['+zusatz+']'):'')); }
}
function bilanz(){
  console.log('\n════════════════════════════════════════════════════════════════');
  console.log('  '+zaehler.ok+' Pruefungen bestanden, '+zaehler.fehl+' fehlgeschlagen');
  console.log('════════════════════════════════════════════════════════════════');
  return zaehler.fehl;
}

module.exports={ neueUmgebung:neueUmgebung, pruef:pruef, block:block, bilanz:bilanz, zaehler:zaehler, BETA:BETA };
