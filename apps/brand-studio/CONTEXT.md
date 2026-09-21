# Design Leaders · Brand Studio + Specimen — Contexto

> **En este repo (`socialcontent`):** la app desplegable está en `apps/brand-studio/`. Logos en `public/assets/logos/`, ilustraciones en `public/assets/illustrations/`, fuentes en `public/fonts/`, html2canvas en `public/vendor/`. Las rutas históricas de abajo describen el origen del sistema; no son paths de este repositorio.

> **Fuente de verdad (sep 2026):** narrativa PDF *Design Leaders LATAM — Narrativa esencial* + *Woven Systems* mark.  
> Skills `design-leaders` (voz CPD v2) + `design-leaders-visual` siguen vigentes para voz/social — overrides de abajo si el skill aún muestra CTA box rojo / barra izq.  
> Estructura: Plantillas · Editor · Biblioteca · Discurso — **sin** paleta/tipo/logos UserFirst.

---

## 0. Entregables en esta carpeta

| Archivo | Qué es |
|---|---|
| `Studio-Design-Leaders.html` | **Brand Studio** — plantillas, editor, biblioteca (Woven + light wash + narrativa), discurso offline |
| `Studio-Design-Leaders.prev.html` | Backup del studio MVP anterior (~50KB, social Fira-only) |
| `Estudio-de-Marca-DESIGN-LEADERS.html` | Specimen / brand book de lectura (puede quedar desfasado vs narrativa nueva) |
| `CONTEXT.md` | Este archivo |
| `new-ref/` | PDFs + `pages/` (narrativa-*, woven-full-*) + `marks/official/` (logo system) |
| `illustrations/refs/` | Sketchnote DL refs (quote-lineart, whiteboard dark, field-rojo; light whiteboard en archivo histórico) |
| `LookFeel-Design-Leaders.html` | Look & feel board (paleta, tipo, logo, plantillas, **ilustración**) |

**Studio path canónico:** `/workspace/design-leaders/brand/Studio-Design-Leaders.html`  
Un solo HTML, Google Fonts CDN (Fira Sans + JetBrains Mono), html2canvas CDN opcional para PNG. Monograma **embebido base64** (offline). Sin backend. Verificar scripts con `node --check`.

---

## 1. Narrativa esencial (extract · brand book)

### Mantra
**Liderar también se diseña.**

### Shift
**De diseñar soluciones a diseñar condiciones.**

### Posicionamiento
- **EXTENSIÓN DE USERFIRST · NO RÉPLICA**
- Misma filosofía. Otra capa de valor.
- Producto / Servicio / Sistema → **Personas / Equipos / Influencia**
- UserFirst diseña mejores experiencias, productos y sistemas.  
  Design Leaders desarrolla a las personas capaces de hacer que ese diseño avance dentro de las organizaciones.

### Territorio / pilares de plataforma
No escuela convencional · no comunidad genérica · no coaching aspiracional.  
**Plataforma de liderazgo práctico** construida desde LATAM para organizaciones reales.

| Pilar | Color pill (deck) | Contenido |
|---|---|---|
| **Conocimiento** | Rojo `#FF0033` | Playbooks · podcast · herramientas |
| **Práctica** | Púrpura `#5B2C8A` | Comunidad · workshops · conversaciones |
| **Acompañamiento** | Tan `#C4A882` | Programas · mentoría · advisory |

### Creencia / promesa
- **Creencia:** El liderazgo no comienza con un título. Comienza cuando eres capaz de crear condiciones para que otras personas, el producto y la organización avancen.
- **Promesa:** Herramientas, conversaciones y práctica para transformar experiencia de diseño en capacidad de liderazgo.
- **Cierre copy:** Tu siguiente nivel no comienza con otro título. Comienza con otra forma de trabajar.
- **CTAs brand book (suaves):** Entrar a la práctica · Explorar playbooks — **sin** caja CTA sólida roja

### Framework (IP)
**Designed Leadership** — seis capacidades: Self · People · Practice · Influence · Business · Future.

### Contraste vs live site
> **design-leaders.co** aún lidera con *“Co-diseñemos tu yo del futuro”* (ángulo mentoría).  
> El **brand book / esta Studio** es la **nueva dirección**: plataforma de liderazgo práctico, no réplica de la home actual. Documentado en Biblioteca del Studio.

Páginas ref: `new-ref/pages/narrativa-01.png` … `05.png` (+ PDF narrativa 10 págs. con benchmark, framework, arquitectura web, dirección visual, copy esencial).

---

## 2. Woven Systems (logo system)

El monograma **DL** entrelaza D + L con líneas paralelas/concéntricas (“woven”): el liderazgo no se construye individual ni linealmente, sino conectando experiencia, conocimiento, comunidad, herramientas y acción. Expresa el paso de *hacer diseño* a *liderar a través del diseño*.

**Gradiente del mark / campo Woven (saturado):** purple `#5B2C8A` → magenta `#C2185B` → red `#FF0033`

### Reglas de uso (LEO · sep 2026) — memoria

| Situación | Asset | Notas |
|---|---|---|
| **Small / nav / UI** | `dl-mark-black-sm` (o `dl-mark-white-sm` en dark) | Simplified: D y L **separadas**. Nunca gradient. |
| **Large / hero mark** | `dl-mark-black-lg` **o** `dl-mark-gradient` | Integrated woven. Mark **solo** — sin caja detrás. |
| **Name lockup** | `dl-lockup-h-light` / `dl-lockup-h-dark` / `dl-lockup-stacked` | Wordmark **“Design Leaders”** (+ **LATAM** cuando hay espacio). |
| **Woven full-bleed** | Campo = gradiente saturado + **white line mark** (o gradient mark sin caja anidada) | Wordmark “Design Leaders” en white/cream si hace falta. |
| **Light wash / cream** | Black mark o black lockup | **Nunca** monograma dentro de recuadro gradient. |
| **Charcoal** | White sm/lg **o** gradient mark solo | Sin badge/pill detrás. |

**PROHIBIDO (recuadro / cuadro / badge):** monograma blanco (o de color) metido dentro de un rectángulo/pill con fill gradient sobre fondo claro u oscuro. Ese tratamiento es el anti-ejemplo de LEO — no debe aparecer en Studio ni en entregables.

**No usar como default:** la variante negra densa “filled rectangle” (1ª de `woven-full-1.png`).

### Assets oficiales (transparent PNG)

Carpeta: `new-ref/marks/official/`

1. `dl-mark-black-lg.png` — integrated DL, black  
2. `dl-mark-black-sm.png` — D\|L separated, black (small)  
3. `dl-mark-gradient.png` — woven color mark, no box (from `woven-full-4`)  
4. `dl-lockup-h-light.png` — mark + Design Leaders LATAM (from `woven-full-2`)  
5. `dl-lockup-h-dark.png` — on charcoal lockup extract (from `woven-full-5`)  
6. `dl-lockup-stacked.png` — stacked (from `woven-full-7`)  
Extras: `dl-mark-white-sm.png` · `dl-mark-white-lg.png` (inversiones para dark/woven).

Fuentes raster: `new-ref/pages/woven-full-1.png` … `7.png`.

---

## 3. Tokens visuales (locked · deck language)

| Nombre | HEX | Uso |
|---|---|---|
| Accent Red | `#FF0033` | Key word, KPIs, pills Conocimiento, underlines / soft CTA |
| Woven Purple | `#5B2C8A` | Inicio gradiente mark · pill Práctica |
| Woven Magenta | `#C2185B` | Medio gradiente mark |
| Charcoal / Dark | `#0D0F10` | Fondos quote/deck/story; nunca `#000` |
| Cream | `#F7F4EF` | Cards / canvas light (deck language); nunca `#FFF` puro |
| Card | `#FAF8F4` | Superficies UI |
| Text | `#141414` | Texto primario light |
| Muted | `#666666` | Secundario |
| Elev | `#1A1D1F` | Bloque métrica / elev dark |
| Tan pill | `#C4A882` | Pill Acompañamiento |
| Mid Gray | `#8A8D91` | UI muted |
| Grid Line | `#E5E5E5` | Retícula |

### Light wash gradients (ilustración · tokens CSS)

Campos suaves full-bleed o soft field — **no** plates negros sólidos detrás de illos:

| Token | Dirección aproximada |
|---|---|
| `--wash-lavender` | soft lavender → blush → warm white (`#E8E0F0` → `#F5E6EB` → `#FAF8F4`) |
| `--wash-mist` | mist gray → cream → soft rose |
| `--wash-violet` | pale violet → soft pink → `#FAFAFA` |
| `--wash-coral` | airy coral wash → cream (sutil, no neon) |

Uso: dejar **zona vacía / dashed art zone** para ilustración + caption yapping debajo. Soft CTA = underline acento, **nunca** caja roja sólida.

### Tipo — floors (LEO sep 2026)

| Contexto | Floor |
|---|---|
| Studio UI chrome (body, labels, meta, nav, bib, discurso) | **≥ 16px** (`--type-floor`) |
| Canvas body / labels / meta (cualquier plantilla) | **≥ 16px** |
| IG 1080 template canvases | Títulos **~56–72** · body **≥ 28** (`--type-body-ig`) |

**Familias:** Fira Sans 300/400/500/700/900 · JetBrains Mono 400/700 (números/KPIs/meta).  
**Wordmarks:** `design leaders` · `design leaders LATAM` · `leonides delgado` (firma casos).

**Reglas social (siguen):**
- Máx. 3 colores/pieza · una palabra/número en rojo  
- **No** cajas CTA sólidas rojas en Instagram / social  
- **No** barra vertical roja a la izquierda  
- Tipo **grande** en IG (floors arriba)  
- Gradiente Woven saturado **o** light wash — monograma limpio **sin recuadro**; small→black-sm; large→black-lg o gradient solo  
- Sin stock, shadows, glass · sin `#000`/`#FFF`  
- **Yapping** LATAM natural — hablado, fluido, párrafos; **no** couplets cortos punchy ni hooks de moda

---

---

## 3b. Ilustración · Sketchnote DL

Sistema de ilustración de LEO (también **línea blanca** / **visual thinking**). Tres superficies canónicas; light-wash templates **host** illustrations — charcoal y field-rojo son **campos de la illo**.

| Mode | Field | Line | Accent | Typo in art | Cuándo |
|---|---|---|---|---|---|
| **Quote + lineart** | Charcoal `#0D0F10` + faint grid | White thin monoline | Red on keywords + 1–2 doodle accents | Bold condensed caps (Fira 800/900), white/red | Quote social, autoridad, scroll-stop |
| **Whiteboard sketchnote** | Charcoal/navy elev | White chalk/hand line | Red icons/underlines **only** | Hand-lettered feel OR Fira irregular; caps headers | Teaching carousel, multi-panel |
| **Field rojo** | `#FF0033` (o brand red / `#E32B1E`) | White monoline only | Red IS the field — casi sin fill rojo extra | White hand labels; clean sans footer strip opcional | Campaign field, before→after, roadmap |

### Reglas
- No photorealism, no heavy fills, no gradients **inside** the doodles
- Red is scarce accent (**except** field-rojo mode, where red IS the field)
- Characters: simple friendly figures (glasses, bun OK)
- Icons: lightbulb, star, gear, chart, puzzle, megaphone, tangle=chaos
- Mark: still **no gradient recuadro**; small white/black mark corner OK
- Light-wash templates remain the place to *host* illustrations on soft fields; Sketchnote DL fields are illustration *surfaces*

**Light whiteboard — archivo/ref histórica, no canónica:** `sketchnote-light-compliance-ux.jpg` se conserva en `illustrations/refs/` únicamente para consulta histórica. **No usar para trabajo nuevo.**

### Refs (LEO originals)
`illustrations/refs/`
1. `quote-lineart-autoridad.jpg` — Quote + lineart
2. `sketchnote-compitas.jpg` — Whiteboard sketchnote (dark)
3. `field-rojo-roadmap.jpg` — Field rojo
4. `sketchnote-light-compliance-ux.jpg` — Light whiteboard (**archivo/ref histórica, no canónica; no usar para trabajo nuevo**)

Studio plantillas canónicas: `illo-quote-lineart` · `illo-sketchnote` · `illo-field-rojo`

`illo-sketchnote-light` queda archivada: no usar para trabajo nuevo.

---

## 4. Studio — módulos

Chrome: nav izquierdo (Plantillas | Editor | Biblioteca | Discurso) · topbar wordmark + Woven Systems · tema UI · Presentar · labels ES LATAM · mark **white-sm** en nav (sin pill) · logo system embebido · **tipo UI ≥16px**.

### 4.1 Plantillas (~30% charcoal / ~30% woven / ~15% cream / ~25% light wash)

**Dark charcoal**
- Quote charcoal · Story charcoal · Métrica split · Deck cover charcoal  

**Woven gradient**
- IG post · Quote · Story · LinkedIn · Deck cover (white-line mark, sin cuadro)  

**Cream**
- IG carrusel · Tactical grid · One-pager Letter  

**Light wash (ilustración)** — ~25–30% del gallery
- IG · light wash  
- Quote · light gradient  
- Story · light wash  
- LinkedIn · light field  
- Illustration frame · light gradient (zona abierta + yapping + soft CTA)

Tema pieza cicla: dark → woven → light → wash-lavender → wash-mist → wash-violet → wash-coral.

### 4.2 Editor
Campos editables · zoom · tipo ± · tema pieza · validador (acento, Fira, **min type 16 / IG floors**, yapping length, sin CTA box, sin barra izq., mark limpio) · Export Imprimir/PDF + PNG (html2canvas CDN).

### 4.3 Biblioteca
**Sistema de logo** (black lg/sm, gradient, lockups h/stacked + reglas sin recuadro) · light wash · narrativa / pilares · paleta · tipo + **16px floor** · Sketchnote DL (3 modos canónicos) · do/don’t · live site vs brand book · copy + yapping.

### 4.4 Discurso
Inputs → hook con mantra + beats (shift / posicionamiento / evidencia) en **yapping hablado** + CTA suave offline (sin caja roja). Mensajes núcleo: condiciones · liderazgo práctico · capa UF · entrar a la práctica.

---

## 5. Voz (CPD v2) — recordatorio

Colaborativo + Pragmático + Directo · abrir con dato/caso · cada “nosotros” se paga · “tú” = responsabilidad como hecho · cerrar con invitación concreta · credenciales reales del skill si se citan — **no inventar**.  
**Yapping:** párrafos fluidos en español LATAM; defaults de plantilla y salida Discurso deben sonar hablados, no slogans de dos líneas.

---

## 6. Gaps conocidos

| Ideal | Studio actual |
|---|---|
| Proyectos / versiones / multi-página | No — una pieza a la vez |
| Export PNG/PPTX nativo offline | PNG vía CDN html2canvas; print/PDF browser; **sin PPTX** |
| IA / Brand Experience live | Discurso rule-based offline |
| Specimen HTML sincronizado 1:1 con narrativa | Specimen puede quedar viejo; Studio + CONTEXT son SoT |
| SVG vector del woven mark | PNG oficiales en `marks/official/` + base64 en Studio; no SVG path-perfect |
| Drop-in de ilustración real en illo frame | Sketchnote DL: 3 plantillas canónicas `illo-*`; la ref light whiteboard queda archivada y el wash frame sigue para host |

---

## 7. Fuentes

- `new-ref/` narrativa + woven PDFs/pages/marks  
- `/home/box/agent-data/workflows/design-leaders/SKILL.md` (+ BODY)  
- `/home/box/agent-data/workflows/design-leaders-visual/SKILL.md` (+ BODY)  
- Inventario estructural UF: `PROMPT_CLAUDE_DESIGN_USERFIRST.md` (arquitectura, no visual UF)

---

*Version studio · logo system official (no recuadro) + Woven + Light wash + **Sketchnote DL** (3 modos canónicos; light whiteboard archivado) + 16px floor + yapping · Sep 2026 · LEO*
