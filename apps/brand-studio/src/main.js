(function () {
  "use strict";

  /* Official logo system — NEVER monogram inside gradient box/recuadro.
     Paths go through BASE so static deploys work from any subpath. */
  var BASE = import.meta.env.BASE_URL;
  function pub(path) {
    return BASE + String(path).replace(/^\//, "");
  }
  var MARK_BLACK_SM = pub("assets/logos/dl-mark-black-sm.png");
  var MARK_BLACK_LG = pub("assets/logos/dl-mark-black-lg.png");
  var MARK_WHITE_SM = pub("assets/logos/dl-mark-white-sm.png");
  var MARK_WHITE_LG = pub("assets/logos/dl-mark-white-lg.png");
  var MARK_GRADIENT = pub("assets/logos/dl-mark-gradient.png");
  var MARK_GRADIENT_HERO = pub("assets/logos/dl-mark-gradient.png");
  var MARK_LOCKUP_H_LIGHT = pub("assets/logos/dl-lockup-h-light.png");
  var MARK_LOCKUP_H_DARK = pub("assets/logos/dl-lockup-h-dark.png");
  var MARK_LOCKUP_STACKED = pub("assets/logos/dl-lockup-stacked.png");
  /* Aliases used by older helpers */
  var MARK_WHITE = MARK_WHITE_SM;
  var MARK_WHITE_HERO = MARK_WHITE_LG;
  var MARK_FULL = MARK_BLACK_LG; /* was white-on-gradient box — FORBIDDEN */
  var MARK_FULL_HERO = MARK_GRADIENT_HERO;
  var MARK = MARK_WHITE_SM;

  var ILLO_REFS = {
    'quote-lineart': pub('assets/illustrations/quote-lineart-autoridad.jpg'),
    'sketchnote': pub('assets/illustrations/sketchnote-compitas.jpg'),
    'field-rojo': pub('assets/illustrations/field-rojo-roadmap.jpg'),
    // Historical reference retained outside the canonical template gallery.
    'sketchnote-light': pub('assets/illustrations/sketchnote-light-compliance-ux.jpg'),
  };

  var TEMPLATES = [
    /* ~30% dark charcoal */
    { id: "quote-dark", cat: "quote", name: "Quote charcoal", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "dark", layout: "quote", thumb: "quote",
      defaults: { hook: "De disenar soluciones a disenar condiciones", accent: "condiciones",
        body: "Mira, el liderazgo no empieza cuando te dan un titulo. Empieza cuando dejas de resolver todo tu y empiezas a crear las condiciones para que otras personas, el producto y la organizacion puedan avanzar sin que tu estes en cada decision.",
        foot: "design leaders", series: "Manifiesto" } },
    { id: "ig-story", cat: "redes", name: "Story charcoal", fmt: "1080 x 1920", w: 1080, h: 1920, theme: "dark", layout: "story", thumb: "story",
      defaults: { hook: "Tu siguiente nivel no es otro titulo", accent: "titulo",
        body: "Si estas ahi: el salto no es otro cargo ni otro curso aspiracional. Es otra forma de trabajar — pasar de disenar soluciones a disenar condiciones, con practica real y gente que ya esta en el mismo camino.",
        foot: "design leaders", series: "LATAM" } },
    { id: "metric", cat: "tactico", name: "Métrica / caso split", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "dark", layout: "metric", thumb: "metric",
      defaults: { hook: "Verbalizaciones analizadas", accent: "verbalizaciones",
        body: "No es un numero para presumir: es evidencia de que la autoridad fundadora se convierte en metodo transferible. Lo que aprendimos en campo lo empaquetamos para que otros equipos puedan usarlo sin reinventar el oficio cada sprint.",
        num: "+800K", foot: "leonides delgado", series: "Caso" } },
    { id: "deck", cat: "deck", name: "Deck cover charcoal", fmt: "1920 x 1080", w: 1920, h: 1080, theme: "dark", layout: "deck", thumb: "deck",
      defaults: { hook: "Liderar tambien se disena", accent: "disena",
        body: "Somos una plataforma de liderazgo practico para disenadores de producto y experiencia en LATAM: conocimiento, practica y acompanamiento — no una escuela convencional ni coaching vacio.",
        foot: "design leaders · woven systems", series: "Narrativa" } },
    /* ~30% woven gradient */
    { id: "ig-post-woven", cat: "woven", name: "IG post · Woven", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "woven", layout: "quote", thumb: "woven",
      defaults: { hook: "Liderar tambien se disena", accent: "disena",
        body: "De disenar soluciones a disenar condiciones: esa es la conversacion que estamos teniendo con líderes de producto y experiencia en LATAM. Misma filosofia que UserFirst, otra capa de valor.",
        foot: "design leaders · latam", series: "Mantra" } },
    { id: "quote-woven", cat: "woven", name: "Quote · Woven field", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "woven", layout: "quote", thumb: "woven",
      defaults: { hook: "De disenar soluciones a disenar condiciones", accent: "condiciones",
        body: "Herramientas, conversaciones y practica para transformar experiencia de diseno en capacidad de liderazgo. No te pedimos que abandones el oficio: te pedimos que lo uses para mover equipos e influencia.",
        foot: "design leaders", series: "Woven Systems" } },
    { id: "story-woven", cat: "woven", name: "Story · Woven", fmt: "1080 x 1920", w: 1080, h: 1920, theme: "woven", layout: "story", thumb: "woven-story",
      defaults: { hook: "Liderar tambien se disena", accent: "disena",
        body: "Si lideras un squad o respondes por la practica: aqui hay playbooks, comunidad y acompanamiento pensados desde LATAM para organizaciones reales — no para un feed aspiracional.",
        foot: "design leaders", series: "WOVEN" } },
    { id: "li-woven", cat: "woven", name: "LinkedIn · Woven", fmt: "1200 x 627", w: 1200, h: 627, theme: "woven", layout: "li", thumb: "woven-li",
      defaults: { hook: "Misma filosofia. Otra capa de valor.", accent: "capa",
        body: "UserFirst disena mejores experiencias, productos y sistemas. Design Leaders desarrolla a las personas capaces de hacer que ese diseno avance dentro de las organizaciones: Personas / Equipos / Influencia.",
        foot: "design leaders latam", series: "Posicionamiento" } },
    { id: "deck-woven", cat: "woven", name: "Deck cover · Woven", fmt: "1920 x 1080", w: 1920, h: 1080, theme: "woven", layout: "deck", thumb: "woven-deck",
      defaults: { hook: "Liderar tambien se disena", accent: "disena",
        body: "Plataforma de liderazgo practico para disenadores de producto y experiencia en LATAM. Extensión de UserFirst — no replica. Woven Systems: el liderazgo se teje conectando experiencia, conocimiento y accion.",
        foot: "design leaders · woven systems", series: "Narrativa" } },
    /* ~15% cream */
    { id: "ig-caro", cat: "redes", name: "IG carrusel · cream", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "light", layout: "caro", thumb: "caro",
      defaults: { hook: "Tres pilares de la practica", accent: "practica",
        body: "Conocimiento que puedes aplicar manana, practica con gente que ya esta en el mismo problema, y acompanamiento cuando el salto de oficio a influencia se pone serio. Asi armamos la plataforma — sin promesas vacias.",
        foot: "design leaders", series: "Frame 01 / 05", label: "CARRUSEL" } },
    { id: "tactical", cat: "tactico", name: "Tactical grid cream", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "light", layout: "grid", thumb: "grid",
      defaults: { hook: "De oficio a influencia", accent: "influencia", label: "TRANSICION",
        item1t: "Ejecutar → Dirigir", item1b: "De entregar tu a orquestar al equipo — sin perder el criterio de diseno",
        item2t: "Colaborar → Influir", item2b: "Stakeholders, narrativa y negociacion: el trabajo politico que nadie te enseno",
        item3t: "Resolver → Condiciones", item3b: "Crear el sistema para que otros avancen, no solo apagar el fuego de hoy",
        take: "La carrera te preparo para hacer el trabajo — no siempre para liderarlo. Eso se disena.", foot: "design leaders", series: "Framework" } },
    { id: "onepager", cat: "deck", name: "One-pager Letter", fmt: "Letter · 8.5x11", w: 816, h: 1056, theme: "light", layout: "letter", thumb: "letter",
      defaults: { hook: "Designed Leadership · 6 capacidades", accent: "Leadership",
        body: "Convertir experiencia profesional en liderazgo aplicable — desde LATAM, para organizaciones reales. Un marco practico, no un slogan.",
        item1t: "Self · People · Practice", item1b: "Criterio, feedback, calidad de sistemas y de relaciones",
        item2t: "Influence · Business", item2b: "Stakeholders, narrativa, metricas de valor que la org entiende",
        item3t: "Future", item3b: "IA, carrera y transformacion sin perder el oficio",
        foot: "design leaders latam", series: "One-pager" } },
    /* ~25% light wash · illustration-friendly */
    { id: "ig-wash", cat: "wash", name: "IG · light wash", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "wash-lavender", layout: "quote", thumb: "wash", wash: "lavender",
      defaults: { hook: "Liderar tambien se disena", accent: "disena",
        body: "Te lo decimos sin caja roja ni gancho de moda: si tu equipo se queda callado en el sprint, el problema casi nunca es “falta de ideas”. Es falta de condiciones. Ahi es donde entra el liderazgo practico.",
        foot: "design leaders · latam", series: "Light wash", cta: "Entra a la practica — guardalo para tu 1:1" } },
    { id: "quote-wash", cat: "wash", name: "Quote · light gradient", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "wash-mist", layout: "quote", thumb: "wash", wash: "mist",
      defaults: { hook: "De disenar soluciones a disenar condiciones", accent: "condiciones",
        body: "Hay un momento en la carrera en que entregar una gran pieza ya no alcanza. El siguiente nivel es sostener un entorno donde otras personas puedan entregar — y eso tambien se disena, con metodo y conversacion.",
        foot: "design leaders", series: "Manifiesto wash" } },
    { id: "story-wash", cat: "wash", name: "Story · light wash", fmt: "1080 x 1920", w: 1080, h: 1920, theme: "wash-violet", layout: "story", thumb: "wash-story", wash: "violet",
      defaults: { hook: "Espacio para la ilustracion — y para la conversacion", accent: "conversacion",
        body: "Usamos campos claros (lavender, mist, violet, coral) para que el arte respire. El copy sigue siendo yapping: te contamos el shift con calma, no con couplets de dos lineas.",
        foot: "design leaders", series: "STORY · WASH" } },
    { id: "li-wash", cat: "wash", name: "LinkedIn · light field", fmt: "1200 x 627", w: 1200, h: 627, theme: "wash-coral", layout: "li", thumb: "wash-li", wash: "coral",
      defaults: { hook: "Extensión de UserFirst. No replica.", accent: "Extensión",
        body: "Misma filosofia de diseno centrado en personas; otra capa: Personas / Equipos / Influencia. Si vienes del oficio y sientes que el titulo no te enseño a liderar, este es el territorio.",
        foot: "design leaders latam", series: "Posicionamiento" } },

    /* Sketchnote DL · LEO illustration refs */
    { id: "illo-quote-lineart", cat: "illo", name: "Illo · Quote + lineart", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "dark", layout: "illo-ref", thumb: "illo-ref", ref: "quote-lineart",
      defaults: { hook: "AUTORIDAD no es el titulo — es la forma en que creas condiciones", accent: "AUTORIDAD",
        body: "", foot: "@leonidesdelgado · sketchnote dl", series: "Quote + lineart", label: "Quote + lineart" } },
    { id: "illo-sketchnote", cat: "illo", name: "Illo · Whiteboard sketchnote", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "dark", layout: "illo-ref", thumb: "illo-ref", ref: "sketchnote",
      defaults: { hook: "Compitas: lo que el equipo necesita ver en el whiteboard", accent: "whiteboard",
        body: "", foot: "@designleaders · sketchnote dl", series: "Whiteboard", label: "Whiteboard sketchnote" } },
    { id: "illo-field-rojo", cat: "illo", name: "Illo · Field rojo", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "field-rojo", layout: "illo-ref", thumb: "illo-ref", ref: "field-rojo",
      defaults: { hook: "De caos a roadmap — before / after en campo rojo", accent: "roadmap",
        body: "", foot: "#DesignLeadersLATAM · sketchnote dl", series: "Field rojo", label: "Field rojo" } },
    { id: "illo-wash", cat: "wash", name: "Illustration frame · light gradient", fmt: "1080 x 1080", w: 1080, h: 1080, theme: "wash-lavender", layout: "illo", thumb: "illo", wash: "lavender",
      defaults: { hook: "Cuando el diseno tiene que avanzar en la org", accent: "avanzar",
        body: "Deja aqui la ilustracion — el campo light wash esta pensado para eso. Abajo, el yapping: no se trata de otro titulo; se trata de crear condiciones para que el producto y las personas se muevan juntos.",
        foot: "design leaders · woven systems", series: "Illo frame",
        cta: "Explorar playbooks · entrar a la practica", label: "Zona de ilustracion" } }
  ];

  // Restore Spanish accents in defaults (ASCII placeholders above for safe heredoc)
  var ACCENT_FIX = [
    ["tambien", "también"], ["disena", "diseña"], ["disenar", "diseñar"],
    ["practica", "práctica"], ["Practica", "Práctica"], ["Acompanamiento", "Acompañamiento"],
    ["acompanamiento", "acompañamiento"], ["titulo", "título"], ["filosofia", "filosofía"],
    ["organizacion", "organización"], ["TRANSICION", "TRANSICIÓN"], ["negociacion", "negociación"],
    ["preparo", "preparó"], ["Metrica", "Métrica"], ["metodo", "método"], ["practico", "práctico"],
    ["disenadores", "diseñadores"], ["metricas", "métricas"], ["transformacion", "transformación"],
    ["tu a", "tú a"], ["enseno", "enseñó"], ["Extension", "Extensión"], ["Extensión", "Extensión"],
    ["replica", "réplica"], ["lideres", "líderes"], ["lineas", "líneas"], ["manana", "mañana"],
    ["accion", "acción"], ["diseno", "diseño"], ["aqui", "aquí"], ["ilustracion", "ilustración"],
    ["esta pensado", "está pensado"], ["enseño", "enseñó"]
  ];
  function fixEs(s) {
    if (!s) return s;
    ACCENT_FIX.forEach(function (p) { s = s.split(p[0]).join(p[1]); });
    return s;
  }
  TEMPLATES.forEach(function (t) {
    Object.keys(t.defaults).forEach(function (k) {
      if (typeof t.defaults[k] === "string") t.defaults[k] = fixEs(t.defaults[k]);
    });
  });

  var state = {
    view: "plantillas",
    tpl: null,
    zoom: 0.42,
    zoomLocked: false,
    fontScale: 1,
    pieceTheme: "dark",
    fields: {},
    bgImage: null,
    bgUrl: "",
    bgName: "",
    bgComposed: "",
    bgComposeKey: ""
  };

  var crumbs = { plantillas: "PLANTILLAS", editor: "EDITOR", biblioteca: "BIBLIOTECA", discurso: "DISCURSO" };

  function $(id) { return document.getElementById(id); }

  function toast(msg) {
    var t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._tm);
    toast._tm = setTimeout(function () { t.classList.remove("show"); }, 3200);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function accentize(text, accent) {
    var t = escapeHtml(text || "");
    var a = (accent || "").trim();
    if (!a) return t;
    var re = new RegExp("(" + a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "i");
    return t.replace(re, function (m) { return '<span class="acc">' + m + "</span>"; });
  }

  function isWashTheme(theme) {
    return !!(theme && String(theme).indexOf("wash") === 0);
  }

  function isLightTheme(theme) {
    return theme === "light" || theme === "cream" || theme === "sketchnote-light" || isWashTheme(theme);
  }

  function markSrc(theme, size) {
    // Logo rules (LEO): never monogram inside gradient box.
    // Small UI → simplified black (or white on dark). Large → woven black/gradient alone or lockup.
    size = size || "sm";
    if (theme === "woven") {
      // Full-bleed woven field: white line mark (no nested box)
      return size === "lg" || size === "hero" ? MARK_WHITE_LG : MARK_WHITE_SM;
    }
    if (theme === "dark" || theme === "charcoal" || theme === "field-rojo") {
      return size === "lg" || size === "hero" ? MARK_WHITE_LG : MARK_WHITE_SM;
    }
    // Light wash / cream / light: black mark — never gradient-in-box
    if (size === "lg" || size === "hero") return MARK_BLACK_LG;
    return MARK_BLACK_SM;
  }

  function markHtml(opts) {
    opts = opts || {};
    var theme = opts.theme || state.pieceTheme || "dark";
    var size = opts.center ? "hero" : (opts.size || "sm");
    var src;
    if (opts.center) {
      // Large hero moments: gradient mark alone, or white lines on woven, or black lg on light
      if (theme === "woven") src = MARK_WHITE_LG;
      else if (theme === "dark" || theme === "charcoal") src = MARK_GRADIENT_HERO; // gradient on charcoal OK (no box)
      else if (theme === "field-rojo") src = MARK_WHITE_LG;
      else src = MARK_BLACK_LG; // light wash: black lg — never gradient box
    } else {
      src = markSrc(theme, size);
    }
    var cls = opts.center ? "p-mark flat hero-center" : "p-mark flat";
    return '<div class="' + cls + '"><img src="' + src + '" alt="Design Leaders"/></div>';
  }

  function thumbHtml(t) {
    if (t.thumb === "woven" || t.thumb === "woven-story" || t.thumb === "woven-li" || t.thumb === "woven-deck") {
      var label = t.thumb === "woven-deck" ? "DECK · WOVEN" : t.thumb === "woven-li" ? "LINKEDIN" : t.thumb === "woven-story" ? "STORY" : "WOVEN";
      return '<div class="mini-woven-mark"><img src="' + MARK_WHITE + '" alt=""/></div>' +
        '<div class="mini-quote" style="position:relative;z-index:1;justify-content:flex-end;padding-bottom:4px">' +
        '<div class="ft" style="opacity:.85">' + label + '</div></div>';
    }
    if (t.thumb === "illo-ref" && t.ref && ILLO_REFS[t.ref])
      return '<img class="mini-illo-ref" src="' + ILLO_REFS[t.ref] + '" alt="' + escapeHtml(t.name) + '"/>';
    if (t.thumb === "illo")
      return '<div class="mini-illo"><div class="zone">Ilustración</div><div class="cap">Yapping + soft CTA · light wash</div></div>';
    if (t.thumb === "wash" || t.thumb === "wash-story" || t.thumb === "wash-li")
      return '<div class="mini-quote" style="color:#141414"><div class="h">Liderar también se <span style="color:#FF0033">diseña</span></div><div class="ft">LIGHT WASH</div></div>';
    if (t.thumb === "quote")
      return '<div class="mini-quote"><div class="h">Liderar también se <span style="color:#FF0033">diseña</span></div><div class="ft">design leaders</div></div>';
    if (t.thumb === "story")
      return '<div class="mini-story">Tu siguiente nivel no es otro <span style="color:#FF0033">título</span></div>';
    if (t.thumb === "li")
      return '<div class="mini-li"><strong>Misma filosofía.<br/>Otra <span style="color:#FF0033">capa</span>.</strong></div>';
    if (t.thumb === "grid")
      return '<div class="mini-grid"><span class="n">01</span> Ejecutar→Dirigir<br/><span class="n">02</span> Colaborar→Influir<br/><span class="n">03</span> Condiciones</div>';
    if (t.thumb === "metric")
      return '<div class="mini-metric"><div class="num">+800K</div><div style="font-size:16px;margin-top:6px">método transferible</div></div>';
    if (t.thumb === "deck")
      return '<div class="mini-deck"><div class="m">Liderar también se <span style="color:#FF0033">diseña</span></div><div style="font-size:16px;opacity:.6;margin-top:8px">WOVEN SYSTEMS</div></div>';
    if (t.thumb === "letter")
      return '<div class="mini-letter"><strong>Designed Leadership</strong><br/>Self · People · Practice<br/>Influence · Business · Future</div>';
    if (t.thumb === "caro")
      return '<div class="mini-caro"><span style="color:#FF0033;font-family:var(--mono);font-size:16px">01/05</span><br/><strong>Conocimiento · Práctica · Acompañamiento</strong></div>';
    return "";
  }

  function cardAspect(t) {
    if (t.layout === "story") return "9/16";
    if (t.layout === "li" || t.layout === "deck") return "16/9";
    if (t.layout === "letter") return "8.5/11";
    return "1";
  }

  function renderGallery() {
    var groups = { redes: "gal-redes", quote: "gal-quote", woven: "gal-woven", tactico: "gal-tactico", deck: "gal-deck", wash: "gal-wash", illo: "gal-illo" };
    Object.keys(groups).forEach(function (k) { if ($(groups[k])) $(groups[k]).innerHTML = ""; });
    TEMPLATES.forEach(function (t) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tcard";
      var wash = isWashTheme(t.theme);
      var themeCls = t.theme === "light" ? " light" : (t.theme === "woven" ? " woven" : (t.theme === "field-rojo" ? " field-rojo" : (t.theme === "sketchnote-light" ? " sketchnote-light" : (wash ? " wash " + t.theme : ""))));
      if (t.layout === "illo-ref") themeCls += " illo-ref";
      var badgeSrc = (t.theme === "woven" || t.theme === "dark" || t.theme === "charcoal" || t.theme === "field-rojo")
        ? MARK_WHITE_SM
        : MARK_BLACK_SM;
      var showCorner = true; /* small mark alone — never gradient box */
      btn.innerHTML =
        '<div class="prev' + themeCls + '" style="aspect-ratio:' + cardAspect(t) + '">' +
          (showCorner ? '<div class="mark-badge"><img src="' + badgeSrc + '" alt=""/></div>' : "") +
          thumbHtml(t) +
        "</div>" +
        '<div class="meta"><strong>' + escapeHtml(t.name) + "</strong><span>" + escapeHtml(t.fmt) + " · " + escapeHtml(t.theme) + "</span></div>";
      btn.addEventListener("click", function () { openTemplate(t.id); });
      var g = groups[t.cat] || "gal-redes";
      if ($(g)) $(g).appendChild(btn);
    });
  }

  function syncEditorMode() {
    var hasTpl = !!state.tpl;
    var empty = $("editorEmpty");
    var work = $("editorWorkspace");
    if (empty) empty.hidden = hasTpl;
    if (work) work.hidden = !hasTpl;
  }

  function setView(name) {
    state.view = name;
    document.querySelectorAll(".view").forEach(function (v) { v.classList.remove("active"); });
    document.querySelectorAll(".nav-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-view") === name);
    });
    var el = $("view-" + name);
    if (el) el.classList.add("active");
    $("crumb").textContent = crumbs[name] || name.toUpperCase();
    if (name === "editor") syncEditorMode();
  }

  function preferredZoom(t) {
    if (t.layout === "deck") return 0.32;
    if (t.layout === "story") return 0.28;
    if (t.layout === "letter") return 0.48;
    return 0.42;
  }

  function defaultZoom(t) {
    var preferred = preferredZoom(t);
    var wrap = document.querySelector(".canvas-wrap");
    var avail = wrap && wrap.clientWidth > 80 ? wrap.clientWidth - 32 : window.innerWidth - 48;
    var fit = avail / t.w;
    return Math.max(0.12, Math.min(preferred, Math.round(fit * 100) / 100));
  }

  function openTemplate(id) {
    var t = TEMPLATES.find(function (x) { return x.id === id; });
    if (!t) return;
    state.tpl = t;
    state.fields = Object.assign({}, t.defaults);
    state.pieceTheme = t.theme;
    state.zoomLocked = false;
    $("edTitle").textContent = t.name;
    setView("editor");
    state.zoom = defaultZoom(t);
    buildFields();
    renderCanvas();
    runValidator();
    updateZoomLabel();
  }

  function fieldDefs(t) {
    var base = [
      { key: "hook", label: "Hook / título", type: "textarea" },
      { key: "accent", label: "Palabra acento (roja)", type: "text" },
      { key: "body", label: "Cuerpo (yapping)", type: "textarea" },
      { key: "cta", label: "CTA suave (sin caja)", type: "text" },
      { key: "label", label: "Label / tag", type: "text" },
      { key: "series", label: "Serie / meta", type: "text" },
      { key: "foot", label: "Footer / firma", type: "text" },
      { key: "num", label: "Métrica", type: "text" },
      { key: "take", label: "Takeaway", type: "text" },
      { key: "item1t", label: "Item 1 · título", type: "text" },
      { key: "item1b", label: "Item 1 · cuerpo", type: "text" },
      { key: "item2t", label: "Item 2 · título", type: "text" },
      { key: "item2b", label: "Item 2 · cuerpo", type: "text" },
      { key: "item3t", label: "Item 3 · título", type: "text" },
      { key: "item3b", label: "Item 3 · cuerpo", type: "text" }
    ];
    return base.filter(function (f) {
      if (f.key === "num") return t.layout === "metric";
      if (f.key === "take" || f.key.indexOf("item") === 0) return t.layout === "grid" || t.layout === "letter";
      if (f.key === "label") return t.layout === "grid" || t.layout === "caro" || t.layout === "illo";
      if (f.key === "cta") return t.layout === "illo" || !!t.defaults.cta;
      return true;
    });
  }

  function buildFields() {
    var box = $("fields");
    box.innerHTML = "";
    if (!state.tpl) return;
    fieldDefs(state.tpl).forEach(function (f) {
      var wrap = document.createElement("div");
      wrap.className = "field";
      var lab = document.createElement("label");
      lab.textContent = f.label;
      var input = f.type === "textarea" ? document.createElement("textarea") : document.createElement("input");
      input.value = state.fields[f.key] || "";
      input.dataset.key = f.key;
      input.addEventListener("input", function () {
        state.fields[f.key] = input.value;
        renderCanvas();
        runValidator();
      });
      wrap.appendChild(lab);
      wrap.appendChild(input);
      box.appendChild(wrap);
    });
  }

  function syncBgUi() {
    var clearBtn = $("btnClearBg");
    var name = $("bgName");
    if (clearBtn) clearBtn.hidden = !state.bgImage;
    if (name) {
      name.hidden = !state.bgName;
      name.textContent = state.bgName || "";
    }
  }

  function cssAngleGradient(ctx, w, h, angleDeg, stops) {
    var angle = ((angleDeg % 360) * Math.PI) / 180;
    var dx = Math.sin(angle);
    var dy = -Math.cos(angle);
    var cx = w / 2;
    var cy = h / 2;
    var half = (Math.abs(w * dx) + Math.abs(h * dy)) / 2;
    var g = ctx.createLinearGradient(cx - dx * half, cy - dy * half, cx + dx * half, cy + dy * half);
    stops.forEach(function (stop) { g.addColorStop(stop[0], stop[1]); });
    return g;
  }

  function readThemePaint(frame) {
    var cs = getComputedStyle(frame);
    var image = cs.backgroundImage || "";
    if (image.indexOf("linear-gradient") !== -1) {
      var angleMatch = image.match(/linear-gradient\(\s*([\d.]+)deg/);
      var stops = [];
      var re = /(rgba?\([^)]+\))\s+([\d.]+)%/g;
      var m;
      while ((m = re.exec(image))) stops.push([parseFloat(m[2]) / 100, m[1]]);
      if (angleMatch && stops.length >= 2) {
        return { type: "gradient", angle: parseFloat(angleMatch[1]), stops: stops };
      }
    }
    return { type: "solid", color: cs.backgroundColor || "#0D0F10" };
  }

  function drawCover(ctx, img, w, h) {
    var iw = img.naturalWidth || img.width;
    var ih = img.naturalHeight || img.height;
    if (!iw || !ih) return;
    var scale = Math.max(w / iw, h / ih);
    var dw = iw * scale;
    var dh = ih * scale;
    ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh);
  }

  /* Bake color × photo so preview and PNG match. html2canvas drops mix-blend-mode. */
  function composeMultiply(frame, img, w, h, theme) {
    var key = theme + "|" + w + "|" + h + "|" + (state.bgUrl || "");
    if (key === state.bgComposeKey && state.bgComposed) return state.bgComposed;
    var canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext("2d");
    var paint = readThemePaint(frame);
    if (paint.type === "gradient") ctx.fillStyle = cssAngleGradient(ctx, w, h, paint.angle, paint.stops);
    else ctx.fillStyle = paint.color;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = "multiply";
    drawCover(ctx, img, w, h);
    state.bgComposed = canvas.toDataURL("image/png");
    state.bgComposeKey = key;
    return state.bgComposed;
  }

  function applyBackground(frame) {
    var layer = frame.querySelector(".bg-multiply");
    if (!state.bgImage || !state.tpl) {
      frame.classList.remove("has-bg");
      if (layer) layer.remove();
      return;
    }
    var url = composeMultiply(frame, state.bgImage, state.tpl.w, state.tpl.h, state.pieceTheme);
    frame.classList.add("has-bg");
    if (!layer) {
      layer = document.createElement("img");
      layer.className = "bg-multiply";
      layer.alt = "";
      frame.insertBefore(layer, frame.firstChild);
    }
    if (layer.getAttribute("src") !== url) layer.src = url;
  }

  function clearBackground() {
    if (state.bgUrl) URL.revokeObjectURL(state.bgUrl);
    state.bgImage = null;
    state.bgUrl = "";
    state.bgName = "";
    state.bgComposed = "";
    state.bgComposeKey = "";
    var input = $("bgFile");
    if (input) input.value = "";
    syncBgUi();
    if (state.tpl) renderCanvas();
  }

  function onBackgroundFile(file) {
    if (!file || String(file.type || "").indexOf("image/") !== 0) {
      toast("Elegí un archivo de imagen.");
      return;
    }
    if (state.bgUrl) URL.revokeObjectURL(state.bgUrl);
    var url = URL.createObjectURL(file);
    var img = new Image();
    img.onload = function () {
      state.bgImage = img;
      state.bgUrl = url;
      state.bgName = file.name || "imagen";
      state.bgComposed = "";
      state.bgComposeKey = "";
      syncBgUi();
      if (state.tpl) renderCanvas();
      toast("Fondo en multiply con el color del tema");
    };
    img.onerror = function () {
      URL.revokeObjectURL(url);
      toast("No se pudo leer la imagen.");
    };
    img.src = url;
  }

  function footerHtml(f) {
    var series = f.series ? '<div style="opacity:.7;margin-bottom:4px">' + escapeHtml(f.series) + "</div>" : "";
    return series + "<div>" + escapeHtml(f.foot || "") + "</div>";
  }

  function renderCanvas() {
    var t = state.tpl;
    if (!t) return;
    var f = state.fields;
    var frame = $("canvasFrame");
    var sizer = $("canvasSizer");
    var inner = $("canvasInner");
    frame.setAttribute("data-piece", state.pieceTheme);
    frame.style.width = t.w + "px";
    frame.style.height = t.h + "px";
    frame.style.transform = "scale(" + state.zoom + ")";
    sizer.style.width = Math.round(t.w * state.zoom) + "px";
    sizer.style.height = Math.round(t.h * state.zoom) + "px";
    inner.style.fontSize = (100 * state.fontScale) + "%";

    var html = "";
    var softCta = f.cta ? '<div class="cta-soft" contenteditable="true" data-k="cta">' + escapeHtml(f.cta) + "</div>" : "";
    if (t.layout === "quote") {
      html = '<div class="p-inner p-quote">' + markHtml({ theme: state.pieceTheme }) +
        '<div class="hook" contenteditable="true" data-k="hook">' + accentize(f.hook, f.accent) + "</div>" +
        (f.body ? '<div class="body" contenteditable="true" data-k="body">' + escapeHtml(f.body) + "</div>" : "") +
        softCta +
        '<div class="foot" contenteditable="true" data-k="foot">' + footerHtml(f) + "</div></div>";
    } else if (t.layout === "story") {
      html = '<div class="p-inner p-story">' + markHtml({ theme: state.pieceTheme }) +
        '<div class="hook" contenteditable="true" data-k="hook">' + accentize(f.hook, f.accent) + "</div>" +
        '<div class="body" contenteditable="true" data-k="body">' + escapeHtml(f.body || "") + "</div>" +
        softCta +
        '<div class="foot">' + escapeHtml(f.foot || "") + "</div></div>";
    } else if (t.layout === "li") {
      html = '<div class="p-inner p-li">' + markHtml({ theme: state.pieceTheme }) +
        '<div class="hook" contenteditable="true" data-k="hook">' + accentize(f.hook, f.accent) + "</div>" +
        '<div class="body" contenteditable="true" data-k="body">' + escapeHtml(f.body || "") + "</div>" +
        softCta +
        '<div class="foot">' + escapeHtml(f.foot || "") + "</div></div>";
    } else if (t.layout === "grid") {
      html = '<div class="p-inner p-grid">' + markHtml({ theme: state.pieceTheme }) +
        '<div class="label">' + escapeHtml(f.label || "FRAMEWORK") + "</div>" +
        '<div class="hook" contenteditable="true" data-k="hook">' + accentize(f.hook, f.accent) + "</div>" +
        '<div class="items">' +
        [1, 2, 3].map(function (i) {
          return '<div class="item"><div class="num">0' + i + '</div><div class="it"><strong contenteditable="true" data-k="item' + i + 't">' +
            escapeHtml(f["item" + i + "t"] || "") + '</strong><span contenteditable="true" data-k="item' + i + 'b">' +
            escapeHtml(f["item" + i + "b"] || "") + "</span></div></div>";
        }).join("") +
        "</div>" +
        '<div class="take" contenteditable="true" data-k="take">' + escapeHtml(f.take || "") + "</div></div>";
    } else if (t.layout === "metric") {
      html = '<div class="p-metric">' +
        '<div class="left"><div class="num" contenteditable="true" data-k="num">' + escapeHtml(f.num || "") +
        '</div><div class="hook" contenteditable="true" data-k="hook">' + accentize(f.hook, f.accent) + "</div></div>" +
        '<div class="right" style="position:relative">' + markHtml({ theme: state.pieceTheme }) +
        '<div class="body" contenteditable="true" data-k="body">' + escapeHtml(f.body || "") + "</div>" +
        '<div class="foot">' + escapeHtml(f.foot || "") + "</div></div></div>";
    } else if (t.layout === "deck") {
      html = '<div class="p-inner p-deck">' + markHtml({ theme: state.pieceTheme }) +
        '<div class="series">' + escapeHtml(f.series || "NARRATIVA") + "</div>" +
        '<div class="hook" contenteditable="true" data-k="hook">' + accentize(f.hook, f.accent) + "</div>" +
        '<div class="shift">De diseñar soluciones a diseñar condiciones.</div>' +
        '<div class="body" contenteditable="true" data-k="body">' + escapeHtml(f.body || "") + "</div>" +
        '<div class="foot">' + escapeHtml(f.foot || "") + "</div></div>";
    } else if (t.layout === "caro") {
      html = '<div class="p-inner p-caro">' + markHtml({ theme: state.pieceTheme }) +
        '<div class="frame-tag">' + escapeHtml(f.series || "01 / 05") + "</div>" +
        '<div class="hook" contenteditable="true" data-k="hook">' + accentize(f.hook, f.accent) + "</div>" +
        '<div class="body" contenteditable="true" data-k="body">' + escapeHtml(f.body || "") + "</div>" +
        '<div class="foot">' + escapeHtml(f.foot || "") + "</div></div>";
    } else if (t.layout === "letter") {
      html = '<div class="p-inner p-letter">' + markHtml({ theme: state.pieceTheme }) +
        '<div class="hook" contenteditable="true" data-k="hook">' + accentize(f.hook, f.accent) + "</div>" +
        '<div class="body" contenteditable="true" data-k="body">' + escapeHtml(f.body || "") + "</div>" +
        '<div class="items">' +
        [1, 2, 3].map(function (i) {
          return '<div class="item"><strong contenteditable="true" data-k="item' + i + 't">' + escapeHtml(f["item" + i + "t"] || "") +
            '</strong><span contenteditable="true" data-k="item' + i + 'b">' + escapeHtml(f["item" + i + "b"] || "") + "</span></div>";
        }).join("") +
        '</div><div class="foot">' + escapeHtml(f.foot || "") + "</div></div>";
    
    } else if (t.layout === "illo-ref") {
      var refSrc = (t.ref && ILLO_REFS[t.ref]) ? ILLO_REFS[t.ref] : "";
      var lightOverlay = (state.pieceTheme === "sketchnote-light" || t.theme === "sketchnote-light" || t.ref === "sketchnote-light");
      var markTheme = state.pieceTheme || t.theme;
      var refHtml = state.bgImage
        ? ""
        : (refSrc ? '<img class="ref" src="' + refSrc + '" alt="Sketchnote DL"/>' : '<div class="art-zone">Sketchnote DL</div>');
      html = '<div class="p-inner p-illo-ref' + (lightOverlay ? " light" : "") + '">' +
        refHtml +
        markHtml({ theme: markTheme }) +
        '<div class="overlay">' +
        '<div class="mode-tag">' + escapeHtml(f.label || t.name || "Sketchnote DL") + "</div>" +
        '<div class="hook" contenteditable="true" data-k="hook">' + accentize(f.hook, f.accent) + "</div>" +
        '<div class="foot" contenteditable="true" data-k="foot">' + escapeHtml(f.foot || "") + "</div>" +
        "</div></div>";

    } else if (t.layout === "illo") {
      html = '<div class="p-inner p-illo">' + markHtml({ theme: state.pieceTheme }) +
        '<div class="art-zone">' + escapeHtml(f.label || "Zona de ilustración") + "</div>" +
        '<div class="hook" contenteditable="true" data-k="hook">' + accentize(f.hook, f.accent) + "</div>" +
        '<div class="body" contenteditable="true" data-k="body">' + escapeHtml(f.body || "") + "</div>" +
        (f.cta ? '<div class="cta-soft" contenteditable="true" data-k="cta">' + escapeHtml(f.cta) + "</div>" : "") +
        '<div class="foot">' + escapeHtml(f.foot || "") + "</div></div>";
    }

    inner.innerHTML = html;
    applyBackground(frame);
    bindContentEdit();
  }

  function bindContentEdit() {
    $("canvasInner").querySelectorAll("[contenteditable]").forEach(function (el) {
      el.addEventListener("input", function () {
        var k = el.getAttribute("data-k");
        if (!k) return;
        if (k === "hook") state.fields.hook = el.innerText;
        else state.fields[k] = el.innerText;
        runValidator();
      });
      el.addEventListener("blur", function () {
        if (el.getAttribute("data-k") === "hook") renderCanvas();
      });
    });
  }

  function runValidator() {
    var f = state.fields || {};
    var accent = (f.accent || "").trim();
    var hook = f.hook || "";
    var body = f.body || "";
    var hasAccent = !!(accent && hook.toLowerCase().indexOf(accent.toLowerCase()) !== -1);
    var accentMsg = hasAccent
      ? ("Una palabra acento en rojo (" + accent + ")")
      : "Define palabra acento presente en el hook";
    var isIg = state.tpl && (state.tpl.w === 1080 && (state.tpl.layout === "quote" || state.tpl.layout === "story" || state.tpl.layout === "caro" || state.tpl.layout === "illo"));
    var yappingOk = !body || body.length >= 80;
    var checks = [
      { ok: true, text: "Paleta DL · charcoal / Woven / cream / light wash — NUNCA monograma en caja gradient" },
      { ok: hasAccent, text: accentMsg },
      { ok: true, text: "Tipo Fira Sans + JetBrains Mono · floor ≥16px (UI + meta)" },
      { ok: true, text: isIg ? "IG 1080: títulos ~56–72 · body ≥28px (CSS floor)" : "Canvas body/labels ≥16px (CSS floor)" },
      { ok: yappingOk, text: yappingOk ? "Yapping: cuerpo fluido (≥80 chars)" : "Yapping: alarga el cuerpo — evita couplets cortos" },
      { ok: true, text: "Sin caja CTA sólida roja · soft CTA OK (underline)" },
      { ok: true, text: "Sin barra vertical roja a la izquierda" },
      { ok: true, text: "Mark limpio: white-sm/lg en Woven/dark · black-sm/lg o gradient solo en light — sin recuadro" }
    ];
    var ul = $("validator");
    ul.innerHTML = checks.map(function (c) {
      return '<li><span class="' + (c.ok ? "ok" : "bad") + '">' + (c.ok ? "OK" : "!") + "</span> " + escapeHtml(c.text) + "</li>";
    }).join("");
  }

  function updateZoomLabel() {
    $("zoomLab").textContent = Math.round(state.zoom * 100) + "%";
  }

  function renderSwatches() {
    var colors = [
      ["Accent Red", "#FF0033", "Key word / KPI / pills"],
      ["Purple", "#5B2C8A", "Woven start · pill"],
      ["Magenta", "#C2185B", "Woven mid"],
      ["Charcoal", "#0D0F10", "Fondos dark / deck"],
      ["Cream", "#F7F4EF", "Cards / light canvas"],
      ["Text", "#141414", "Primario light"],
      ["Muted", "#666666", "Secundario"],
      ["Elev", "#1A1D1F", "Bloque métrica"],
      ["Tan pill", "#C4A882", "Acompañamiento"]
    ];
    $("swatches").innerHTML = colors.map(function (c) {
      return '<div class="swatch"><i style="background:' + c[1] + '"></i><span>' + c[0] + "<br/>" + c[1] + "</span></div>";
    }).join("");
  }

  function genDiscurso() {
    var tema = ($("dTema").value || "").trim() || "diseñar condiciones";
    var aud = $("dAud").value;
    var insight = ($("dInsight").value || "").trim() ||
      "el oficio individual ya no alcanza cuando el diseño tiene que avanzar en la org";
    var msg = $("dMsg").value;

    var audLine = {
      designers: "si diseñas producto o experiencia",
      leads: "si lideras un squad de diseño",
      heads: "si respondes por la práctica de diseño en la org",
      product: "si trabajas en la frontera product–design"
    }[aud];

    var msgLine = {
      condiciones: "De diseñar soluciones a diseñar condiciones — ahí empieza el liderazgo: no cuando te dan el cargo, sino cuando el sistema deja de depender de que tú lo apagues todo.",
      leadership: "Design Leaders es plataforma de liderazgo práctico LATAM: conocimiento que aplica mañana, práctica con pares, y acompañamiento cuando el salto de oficio a influencia se pone serio.",
      capa: "Somos extensión de UserFirst, no réplica. Misma filosofía de diseño; otra capa de valor: Personas / Equipos / Influencia — para que el diseño avance dentro de la org.",
      practica: "La invitación no es coaching aspiracional vacío: es entrar a la práctica — playbooks, comunidad y programas pensados desde LATAM para organizaciones reales."
    }[msg];

    var hook = "Liderar también se diseña. Lo que vimos con " + tema + " es esto: " + insight + ". Y no es un tip de LinkedIn — es el síntoma de que el oficio individual ya no alcanza solo.";
    var beat1 = "Cómo se ve en el día a día: " + audLine + ", el salto casi nunca es otro título. Es pasar de resolver personalmente a crear condiciones para que el equipo y el producto avancen sin que estés en cada decisión.";
    var beat2 = msgLine + " En corto: Producto / Servicio / Sistema → Personas / Equipos / Influencia. Esa es la capa que estamos construyendo.";
    var beat3 = "Aprendizaje que pedimos pagar: cada “nosotros” se sostiene con métrica o caso. Sin eso, el discurso se diluye en aspiración y la gente lo siente. Por eso hablamos con evidencia — verbalizaciones, sprints, 1:1s — no con slogans.";
    var cta = "Si esto te suena, el siguiente paso es concreto: conocimiento, práctica o acompañamiento. Entra a la práctica — guárdalo para tu próximo 1:1. Sin caja roja; solo la invitación.";

    $("discOut").innerHTML =
      "<h3>Salida · narrativa DL + CPD v2 (offline · yapping)</h3>" +
      '<div class="disc-block"><div class="label">Hook · mantra</div><p>' + escapeHtml(hook) + "</p></div>" +
      '<div class="disc-block"><div class="label">Beat 01 · shift</div><p>' + escapeHtml(beat1) + "</p></div>" +
      '<div class="disc-block"><div class="label">Beat 02 · posicionamiento</div><p>' + escapeHtml(beat2) + "</p></div>" +
      '<div class="disc-block"><div class="label">Beat 03 · evidencia</div><p>' + escapeHtml(beat3) + "</p></div>" +
      '<div class="disc-block"><div class="label">CTA suave (sin caja)</div><p>' + escapeHtml(cta) + "</p></div>" +
      '<p class="muted mono" style="font-size:16px;margin:0">Sin API · yapping hablado LATAM · brand book = nueva dirección (no hero mentoría del live site)</p>';
  }

  function exportPng() {
    if (!state.tpl) {
      toast("Elegí una plantilla primero.");
      return;
    }
    var frame = $("canvasFrame");
    var sizer = $("canvasSizer");
    var scale = state.zoom;
    var t = state.tpl;
    frame.style.transform = "scale(1)";
    if (sizer && t) {
      sizer.style.width = t.w + "px";
      sizer.style.height = t.h + "px";
    }
    function restore() {
      frame.style.transform = "scale(" + scale + ")";
      if (sizer && t) {
        sizer.style.width = Math.round(t.w * scale) + "px";
        sizer.style.height = Math.round(t.h * scale) + "px";
      }
    }
    if (typeof html2canvas !== "function") {
      restore();
      toast("html2canvas no cargo. Usa Imprimir / PDF.");
      return;
    }
    toast("Generando PNG…");
    html2canvas(frame, {
      backgroundColor: state.pieceTheme === "dark" ? "#0D0F10" : (state.pieceTheme === "woven" || isWashTheme(state.pieceTheme) ? null : "#F7F4EF"),
      scale: 1,
      useCORS: true,
      logging: false
    }).then(function (canvas) {
      restore();
      var a = document.createElement("a");
      a.download = "design-leaders-" + (state.tpl && state.tpl.id) + ".png";
      a.href = canvas.toDataURL("image/png");
      a.click();
      toast("PNG descargado");
    }).catch(function () {
      restore();
      toast("Fallo PNG — prueba Imprimir / PDF");
    });
  }

  document.querySelectorAll(".nav-btn").forEach(function (btn) {
    btn.addEventListener("click", function () { setView(btn.getAttribute("data-view")); });
  });
  $("brandHome").addEventListener("click", function (e) { e.preventDefault(); setView("plantillas"); });
  $("btnTheme").addEventListener("click", function () {
    var root = document.documentElement;
    root.setAttribute("data-theme", root.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
  $("btnPresent").addEventListener("click", function () {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(function () {});
    else document.exitFullscreen();
  });
  $("btnBack").addEventListener("click", function () { setView("plantillas"); });
  $("btnEmptyPick").addEventListener("click", function () { setView("plantillas"); });
  $("btnZoomIn").addEventListener("click", function () {
    state.zoomLocked = true;
    state.zoom = Math.min(1, state.zoom + 0.05); updateZoomLabel(); renderCanvas();
  });
  $("btnZoomOut").addEventListener("click", function () {
    state.zoomLocked = true;
    state.zoom = Math.max(0.12, state.zoom - 0.05); updateZoomLabel(); renderCanvas();
  });
  $("btnFontUp").addEventListener("click", function () {
    state.fontScale = Math.min(1.4, state.fontScale + 0.05); renderCanvas();
  });
  $("btnFontDown").addEventListener("click", function () {
    state.fontScale = Math.max(0.75, state.fontScale - 0.05); renderCanvas();
  });
  $("bgFile").addEventListener("change", function () {
    var file = $("bgFile").files && $("bgFile").files[0];
    if (file) onBackgroundFile(file);
  });
  $("btnClearBg").addEventListener("click", clearBackground);
  $("btnPieceTheme").addEventListener("click", function () {
    var order = ["dark", "woven", "light", "wash-lavender", "wash-mist", "wash-violet", "wash-coral", "field-rojo"];
    var i = order.indexOf(state.pieceTheme);
    if (i < 0) i = isWashTheme(state.pieceTheme) ? 3 : 0;
    state.pieceTheme = order[(i + 1) % order.length];
    toast("Tema pieza: " + state.pieceTheme);
    renderCanvas();
  });
  $("btnPrint").addEventListener("click", function () {
    if (!state.tpl) {
      toast("Elegí una plantilla primero.");
      return;
    }
    window.print();
  });
  $("btnPng").addEventListener("click", exportPng);
  $("btnGenDisc").addEventListener("click", genDiscurso);

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (!state.tpl || state.zoomLocked || state.view !== "editor") return;
      var next = defaultZoom(state.tpl);
      if (Math.abs(next - state.zoom) < 0.01) return;
      state.zoom = next;
      updateZoomLabel();
      renderCanvas();
    }, 120);
  });

  renderGallery();
  renderSwatches();
})();
