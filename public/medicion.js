/*
 * El Abogado del Freelancer · Medición y consentimiento (nov-2026)
 * Archivo nuevo, común a www.elabogadodelfreelancer.com y a sesion.elabogadodelfreelancer.com.
 * La copia de la web principal (public/medicion.js del repo legal-for-freelancers) tiene que ser
 * IDÉNTICA a esta: si se cambia una, se cambia la otra.
 *
 * Qué hace:
 * 1. Consentimiento. A quien entra desde Europa (zona horaria Europe/*, Canarias, Madeira, Azores,
 *    Ceuta) le muestra un aviso de cookies; el píxel de Meta, Microsoft Clarity y el identificador
 *    del visitante NO se activan hasta que acepta. Al resto no le aparece nada. La elección queda en
 *    la cookie eadf_consent ('si' / 'no', 12 meses) en todo *.elabogadodelfreelancer.com, así vale
 *    para las dos páginas. Para probar el aviso desde fuera de Europa: ?ue=1. Un 'no' se respeta venga
 *    de donde venga (el enlace "Preferencias de cookies" abre el aviso en cualquier país).
 * 2. Visitante. eadf_vid (13 meses) y eadf_origen (primer toque: UTM, anuncio o "web:<sitio>") en
 *    cookie de todo el dominio: la web y la landing ven al MISMO visitante. eadf_sid = esta visita.
 * 3. Registro propio: C.medir(evento, detalle, una_vez) → /api/t de la landing (tabla eventos).
 *    Las visitas de la web quedan con pagina = "www/...".
 * 4. Meta: C.alPixel(fn) corre fn cuando el píxel está cargado (enseguida, o al aceptar el aviso).
 *    C.meta(tipo, nombre, params) manda el evento al píxel con un eventID y, si es PageView,
 *    ViewContent, InitiateCheckout o Contact, también por la API de conversiones (/api/m), con el
 *    mismo eventID: Meta lo cuenta una vez y no lo pierde por bloqueadores o iPhone.
 * 5. Microsoft Clarity (grabaciones y mapas de calor), si C.clarity tiene el ID del proyecto.
 *
 * Se configura con window.EADF ANTES de cargar este archivo:
 *   pixel, dominio (RegExp), sitio ('web' | 'landing'), api (origen de /api/t y /api/m; vacío = el
 *   mismo sitio), clarity (ID del proyecto; vacío = no se carga), privacidad (URL de la política),
 *   staging (true = no mide nada).
 */
(function(){
  var C = window.EADF = window.EADF || {};
  var host = location.hostname;
  var real = !!(C.dominio && C.dominio.test(host));
  C.api = C.api || '';
  C.sitio = C.sitio || 'landing';
  C.privacidad = C.privacidad || '/privacidad';
  /* fuera del dominio real (vistas previas de Vercel) no se mide nada, salvo con ?medir=1 */
  if (C.staging === undefined) C.staging = /[?&]nopixel=1/.test(location.search);
  if (!real && !/[?&]medir=1/.test(location.search)) C.staging = true;
  C.prod = !!C.pixel && real && !C.staging;

  /* ---------- cookies de todo el dominio ---------- */
  function leer(n){ var m = document.cookie.match('(?:^|; )' + n + '=([^;]*)'); try { return m ? decodeURIComponent(m[1]) : ''; } catch(e){ return ''; } }
  function escribir(n, v, dias){
    document.cookie = n + '=' + encodeURIComponent(v) + '; Max-Age=' + Math.round(dias * 86400) + '; Path=/; SameSite=Lax' +
      (location.protocol === 'https:' ? '; Secure' : '') + (real ? '; Domain=.elabogadodelfreelancer.com' : '');
  }
  function borrar(n){ escribir(n, '', -1); }
  C.cookie = { leer: leer, escribir: escribir, borrar: borrar };

  /* ---------- quién tiene que dar consentimiento ---------- */
  var zona = ''; try { zona = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch(e){}
  /* Europa, Canarias, Madeira, Azores, Ceuta, Chipre, regiones francesas de ultramar; y los navegadores que
     esconden la zona (UTC), por las dudas. El servidor (/api/m y /api/analisis) vuelve a mirar el país de la IP. */
  C.ue = /^Europe\//.test(zona) || /^(Atlantic\/(Canary|Madeira|Azores|Reykjavik|Faroe)|Africa\/Ceuta|Arctic\/Longyearbyen|Asia\/(Nicosia|Famagusta)|Indian\/(Reunion|Mayotte)|America\/(Guadeloupe|Martinique|Cayenne|Marigot|St_Barthelemy)|Etc\/(UTC|UCT|GMT|Universal|Zulu)|UTC|GMT)$/.test(zona) ||
    !zona || /[?&]ue=1/.test(location.search);
  C.consentimiento = leer('eadf_consent');   /* 'si' | 'no' | '' */
  /* desde Europa hace falta un 'si'; desde cualquier lado, un 'no' se respeta */
  C.permitido = C.consentimiento === 'si' || (!C.ue && C.consentimiento !== 'no');

  /* ---------- visitante, visita y origen ---------- */
  function id(){ return Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); }
  function tmp(x){ return /^tmp-/.test(x || ''); }
  var q = new URLSearchParams(location.search), llegada = {};
  ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid','ad_id','adset_id','campaign_id','ref'].forEach(function(k){ if (q.get(k)) llegada[k] = q.get(k).slice(0, 200); });
  C.llegada = llegada;
  C.sid = ''; try { C.sid = sessionStorage.getItem('eadf_sid') || ''; } catch(e){}
  C.vid = ''; C.origen = {};
  function identidad(){
    if (!C.permitido) {
      /* sin consentimiento: un id de esta página que no se guarda en ningún lado, y se borra lo que
         hubiera quedado guardado en este sitio (versiones anteriores, o un rechazo hecho en el otro sitio) */
      try { localStorage.removeItem('eadf_vid'); localStorage.removeItem('eadf_origen'); sessionStorage.removeItem('eadf_sid'); } catch(e){}
      C.vid = C.vid || 'tmp-' + id(); C.sid = (C.sid && tmp(C.sid)) ? C.sid : C.vid; C.origen = llegada; return;
    }
    var ls = ''; try { ls = localStorage.getItem('eadf_vid') || ''; } catch(e){}
    /* al aceptar, el id temporal de esta página pasa a ser el definitivo: lo medido antes sigue siendo la misma persona */
    var vid = leer('eadf_vid') || ls || (C.vid ? C.vid.replace(/^tmp-/, '') : '') || id();
    C.vid = vid;
    escribir('eadf_vid', vid, 395); try { localStorage.setItem('eadf_vid', vid); } catch(e){}
    if (!C.sid) C.sid = id(); else if (tmp(C.sid)) C.sid = C.sid.replace(/^tmp-/, '');
    try { sessionStorage.setItem('eadf_sid', C.sid); } catch(e){}
    var o = {}; try { o = JSON.parse(leer('eadf_origen') || localStorage.getItem('eadf_origen') || '{}') || {}; } catch(e){ o = {}; }
    /* el primer toque manda; pero si ese primer toque fue una visita sin etiquetas a la web y ahora llega
       por un anuncio o un enlace con UTM, gana el anuncio (si no, toda la pauta quedaria como "web") */
    function etiquetado(x){ return !!(x.utm_source || x.utm_medium || x.utm_campaign || x.fbclid || x.ad_id || x.campaign_id); }
    if (o.llegada && /^web:/.test(o.ref || '') && !etiquetado(o) && etiquetado(llegada)) o = {};
    if (!o.llegada) {
      var nuevo = {}, k;
      for (k in llegada) nuevo[k] = String(llegada[k]).slice(0, 100);
      if (C.sitio === 'web' && !nuevo.ref) {
        var r = ''; try { r = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, '') : ''; } catch(e){}
        nuevo.ref = 'web:' + (r && !/elabogadodelfreelancer\.com$/.test(r) ? r : 'directo');
      }
      if (Object.keys(nuevo).length) { nuevo.llegada = new Date().toISOString(); o = nuevo; }
    }
    C.origen = o;
    if (o.llegada) { var t = JSON.stringify(o); escribir('eadf_origen', t, 395); try { localStorage.setItem('eadf_origen', t); } catch(e){} }
  }
  identidad();
  C.ref = function(){ return tmp(C.vid) ? '' : String(C.vid || '').replace(/^sin-/, '').slice(0, 6); };

  /* ---------- registro propio (tabla eventos) ---------- */
  var movil = matchMedia('(max-width: 760px)').matches, enviados = {};
  function enviar(ruta, obj){
    var cuerpo = JSON.stringify(obj), url = C.api + ruta;
    try {
      if (!(navigator.sendBeacon && navigator.sendBeacon(url, new Blob([cuerpo], {type: 'text/plain;charset=UTF-8'}))))
        fetch(url, {method: 'POST', body: cuerpo, keepalive: true, mode: C.api ? 'no-cors' : 'same-origin', headers: {'Content-Type': 'text/plain;charset=UTF-8'}});
    } catch(e){}
  }
  C.pagina = function(){ return (C.sitio === 'web' ? 'www' : '') + location.pathname; };
  C.medir = function(e, d, una){
    if (C.staging) return;
    if (una) { if (enviados[e]) return; enviados[e] = 1; }
    enviar('/api/t', { v: C.vid, s: C.sid, t: C.tema || document.documentElement.getAttribute('data-tema') || 'clara', o: C.origen, p: C.pagina(), m: movil, e: e, d: d || {} });
  };

  /* ---------- Meta: píxel + API de conversiones ---------- */
  var colaPixel = [], pixelListo = false, CAPI = { PageView: 1, ViewContent: 1, InitiateCheckout: 1, Contact: 1 };
  C.fb = function(){
    if (!C.permitido) return {};
    var fbp = leer('_fbp'), fbc = leer('_fbc'), clid = q.get('fbclid');
    if (!fbc && clid) fbc = 'fb.1.' + Date.now() + '.' + clid;
    var r = {}; if (fbp) r.fbp = fbp; if (fbc) r.fbc = fbc; return r;
  };
  C.cargarPixel = function(){
    if (pixelListo || !C.prod || !C.permitido) return;
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', C.pixel, C.vid && !tmp(C.vid) ? { external_id: C.vid } : {});
    pixelListo = true;
    while (colaPixel.length) { try { colaPixel.shift()(); } catch(e){} }
  };
  C.alPixel = function(fn){ if (pixelListo) { try { fn(); } catch(e){} } else colaPixel.push(fn); };
  C.meta = function(tipo, nombre, params){
    if (!pixelListo || !window.fbq) return '';
    var eid = nombre.toLowerCase() + '_' + id();
    try { fbq(tipo, nombre, params || {}, { eventID: eid }); } catch(e){}
    if (tipo === 'track' && CAPI[nombre]) {
      var x = C.fb();
      enviar('/api/m', { e: nombre, id: eid, url: location.href.split('#')[0], v: C.vid, fbp: x.fbp || '', fbc: x.fbc || '',
        c: (params && params.content_ids) || [], ok: C.permitido ? 1 : 0 });
    }
    return eid;
  };

  /* ---------- Microsoft Clarity ---------- */
  var clarityListo = false;
  C.cargarClarity = function(){
    if (clarityListo || !C.clarity || !real || C.staging || !C.permitido) return;
    clarityListo = true;
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", C.clarity);
    window.clarity('consentv2', { ad_Storage: 'granted', analytics_Storage: 'granted' });
    if (C.vid && !tmp(C.vid)) window.clarity('identify', C.vid);
    window.clarity('set', 'sitio', C.sitio);
  };

  function activar(){ identidad(); C.cargarPixel(); C.cargarClarity(); }
  activar();

  /* ---------- aviso de cookies (solo Europa) ---------- */
  function cerrarAviso(){ var a = document.getElementById('eadf-aviso'); if (a) a.parentNode.removeChild(a); }
  C.aceptar = function(){
    escribir('eadf_consent', 'si', 365); C.consentimiento = 'si'; C.permitido = true; cerrarAviso();
    activar(); C.medir('consentimiento', { r: 'si' });
  };
  C.rechazar = function(){
    var estaba = C.permitido;
    escribir('eadf_consent', 'no', 365); C.consentimiento = 'no'; C.permitido = false; cerrarAviso();
    if (estaba) {
      /* la medición estaba activa: se borran las cookies propias y las de Meta y Clarity, y se recarga */
      ['eadf_vid', 'eadf_origen', '_fbp', '_fbc', '_clck', '_clsk'].forEach(function(n){ borrar(n); document.cookie = n + '=; Max-Age=0; Path=/'; });
      try { localStorage.removeItem('eadf_vid'); localStorage.removeItem('eadf_origen'); sessionStorage.removeItem('eadf_sid'); } catch(e){}
      if (window.clarity) try { window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' }); } catch(e){}
      C.vid = C.sid = 'tmp-' + id();
    }
    C.medir('consentimiento', { r: 'no' });
    if (estaba) location.reload();
  };
  C.mostrarAviso = function(){
    if (document.getElementById('eadf-aviso')) return;
    var est = document.createElement('style');
    est.textContent =
      '#eadf-aviso{position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483000;max-width:760px;margin:0 auto;' +
      'background:#FFFFFF;color:#151515;border:1px solid rgba(21,21,21,.18);border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.22);' +
      'padding:16px 18px;font:14px/1.5 Inter,system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif;text-align:left}' +
      '#eadf-aviso p{margin:0 0 12px;color:#151515}#eadf-aviso a{color:#151515;text-decoration:underline}' +
      '#eadf-aviso .b{display:flex;gap:10px;flex-wrap:wrap}' +
      '#eadf-aviso button{font:inherit;font-weight:600;font-size:14px;min-height:42px;padding:0 22px;border-radius:999px;cursor:pointer;' +
      'border:1px solid #151515;background:#151515;color:#FFFFFF;flex:1 1 140px}' +
      '#eadf-aviso button + button{background:#FFFFFF;color:#151515}';
    var a = document.createElement('div');
    a.id = 'eadf-aviso'; a.setAttribute('role', 'dialog'); a.setAttribute('aria-label', 'Cookies');
    a.innerHTML = '<p>Este sitio usa cookies propias y de terceros (Meta y Microsoft Clarity) para medir las visitas y mejorar los anuncios. ' +
      'Se pueden aceptar o rechazar, y la elección se puede cambiar cuando se quiera. <a href="' + C.privacidad + '#cookies">Más información</a></p>' +
      '<div class="b"><button type="button" data-r="si">Aceptar</button><button type="button" data-r="no">Rechazar</button></div>';
    a.addEventListener('click', function(e){
      var r = e.target.getAttribute && e.target.getAttribute('data-r');
      if (r === 'si') C.aceptar(); else if (r === 'no') C.rechazar();
    });
    document.head.appendChild(est); document.body.appendChild(a);
  };
  function alCargar(){
    if (C.ue && !C.consentimiento) C.mostrarAviso();
    /* cualquier enlace con data-cookies reabre el aviso (por ejemplo, "Preferencias de cookies") */
    document.addEventListener('click', function(e){
      var el = e.target.closest && e.target.closest('[data-cookies]');
      if (el) { e.preventDefault(); C.mostrarAviso(); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', alCargar); else alCargar();
})();
