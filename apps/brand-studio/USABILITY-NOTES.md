# Usability + contraste — Design Leaders Brand Studio

> **Integración en `apps/brand-studio/`:** el rail se mantiene en ~140px con labels Fira (no se revirtió a 88px mono). El empty state del Editor (“Elegí una plantilla”) quedó en código. El contraste de blanco / `.r` sobre `#FF0033` y cream **no se cambió** — TODO de Visual Design / UX & Product Design.

**Fecha:** 2026-09-21 (America/Mexico_City)  
**Preview:** `http://127.0.0.1:5173/`  
**Alcance:** pass enfocado (nav overlap, navegación, contraste tokens, checklist teclado/mobile).  
**No es** rediseño visual completo — propuestas para Visual Design + fixes mínimos aplicados.

---

## 1. Diagnóstico nav (overlap / cramped)

### Causa raíz (histórica / por qué se veía roto)

Con la geometría anterior típica de rail estrecho:

| Token / regla | Valor problemático |
|---|---|
| `--nav-w` | `88px` |
| `.nav-btn` width | `64px` |
| Tipografía | JetBrains Mono · `16px` · `uppercase` · `letter-spacing: .04em` |
| Labels | Plantillas / Biblioteca (~10 glifos) |

Estimación de ancho de texto (mono uppercase):

- `PLANTILLAS` / `BIBLIOTECA` ≈ **~100–102px**
- `DISCURSO` ≈ **~81px**
- `EDITOR` ≈ **~61px** (casi al límite del content box)

Con botón `64px` y padding horizontal `4px`, el texto **desbordaba** el hit-box y visualmente chocaba con el icono / rail → sensación de overlap + cramped.

### Estado vivo medido (post-ajuste ya en CSS)

Medición CDP en preview (desktop 1440×900):

| Métrica | Valor vivo |
|---|---|
| `--nav-w` | **140px** |
| `.nav` padding / gap | `16px 12px` / `10px` |
| `.nav-btn` | `width:100%` → **116px**; `min-height:72px`; pad `12px 8px 11px`; gap icon↔label **8px** |
| Font | Fira Sans `16px` / weight 500 / `text-transform:none` / `letter-spacing:.02em` |
| Labels | `<span class="nav-label">` — Plantillas ~71px, Biblioteca ~76px, Discurso ~64px, Editor ~45px |
| Overflow | **no** (`scrollWidth === clientWidth`) |

Conclusión: **ya no hay overflow de labels**. Lo que queda es percepción de “cramped” (gap 8px + barra activa con barra lateral) — tema de composición Visual Design, no bug de clipping.

### Propuesta CSS (para Visual Design — no aplicada como redesign)

Opción A — rail icon+label holgado (recomendada):

```css
:root { --nav-w: 152px; } /* o 160px si se quiere aire */
.nav { padding: 16px 14px; gap: 12px; }
.nav-btn {
  min-height: 76px;
  padding: 14px 10px 12px;
  gap: 10px; /* icon ↔ label */
}
.nav-btn svg { width: 24px; height: 24px; }
.nav-btn .nav-label { font-size: 16px; line-height: 1.25; }
```

Opción B — rail icon-only (compacto mobile-first):

```css
:root { --nav-w: 72px; }
.nav-btn { min-height: 56px; padding: 12px 0; }
.nav-btn .nav-label {
  /* sr-only: accesible, no visible */
  position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0);
}
/* labels vía title + aria-label */
```

Opción C — híbrido: label visible ≥900px; icon-only debajo.

**No tocar** color de acento `#FF0033`, charcoal `#0D0F10`, cream `#F7F4EF`, ni reintroducir mono uppercase en nav (rompe el floor de legibilidad).

---

## 2. Navegación — verificación de vistas / handlers

| Flujo | Resultado |
|---|---|
| Nav → Plantillas | OK — `view-plantillas` + crumb `PLANTILLAS` |
| Nav → Editor | OK — vista activa; **canvas vacío** si no se abrió plantilla (ver P1) |
| Nav → Biblioteca | OK |
| Nav → Discurso | OK |
| Brand mark → home | OK → Plantillas |
| Card plantilla → Editor | OK — campos + canvas (`Story charcoal` probado) |
| ← Plantillas | OK |
| Tema (UI) | OK — toggle `data-theme` light ↔ dark |
| Presentar | Handler OK (`requestFullscreen`); depende de gesto/permiso del browser |
| Tema pieza | OK — toast `Tema pieza: woven` |
| Export PNG | OK — `html2canvas` cargado; toast `PNG descargado` |
| Imprimir / PDF | Handler `window.print()` cableado |
| Generar discurso | OK — 5 bloques de salida offline |

No se encontraron botones “muertos” en chrome principal. El vacío del Editor vía nav directa es el principal hueco UX.

---

## 3. Contraste (pares con hex + ratio ≈ WCAG AA)

Fórmula: luminancia relativa WCAG 2.x. AA normal ≥ **4.5**; large ≥ **3.0**.  
Pills / UI a 16px bold **no** califican como large text (large ≈ 18.66px bold).

### Tokens base

| Par | FG | BG | Ratio | AA normal |
|---|---|---|---|---|
| Texto on cream | `#141414` | `#F7F4EF` | **16.79** | PASS |
| Texto on bg | `#141414` | `#F5F2ED` | **16.50** | PASS |
| Muted on cream | `#666666` | `#F7F4EF` | **5.23** | PASS |
| Muted on bg | `#666666` | `#F5F2ED` | **5.14** | PASS |
| On-dark on bg-dark | `#F7F4EF` | `#0D0F10` | **17.51** | PASS |
| Nav inactive (blend α0.58 de `#F7F4EF` over `#0D0F10` → `#959491`) | `#959491` | `#0D0F10` | **6.33** | PASS |
| Nav active `#FAFAFA` on dark | `#FAFAFA` | `#0D0F10` | **18.41** | PASS |
| Active on red-wash (α0.22 accent) | `#FAFAFA` | ~`#390c16`–darker | ≥16 | PASS |
| White on purple pill | `#FFFFFF` | `#5B2C8A` | **9.67** | PASS |
| Tan pill text | `#141414` | `#C4A882` | **8.13** | PASS |
| **White on accent pill** | `#FFFFFF` | `#FF0033` | **3.96** | **FAIL** |
| **`#FAFAFA` on accent** | `#FAFAFA` | `#FF0033` | **3.80** | **FAIL** |
| **Accent text on cream** (`.r`, hooks) | `#FF0033` | `#F7F4EF` | **3.61** | **FAIL** (PASS large) |
| Dark-theme muted on dark cream | `#8A8D91` | `#16181A` | **5.34** | PASS |
| Accent on dark cream | `#FF0033` | `#16181A` | **4.49** | FAIL (borde) |

Notas cualitativas:

- Iconos stroke 1.6px en nav inactiva: ratio de color pasa, pero el **trazo fino** reduce contraste percibido (no inventar métricas de stroke).
- Borders de `.tbtn` (`rgba(20,20,20,.28)`): contraste de borde bajo → controles parecen “fantasma” en cream.

---

## 4. Checklist usabilidad

| Check | Estado |
|---|---|
| Tab llega a nav | **PASS** — orden: brand → nav-btns → Tema → Presentar → tcards… |
| Focus visible | **PASS** en `.nav-btn:focus-visible` (2px `#FF0033`); **añadido** `.tbtn:focus-visible` |
| Toast / errores | Toast funciona (tema pieza, PNG). Sin banner de error genérico. |
| Mobile / narrow | Rail fijo 140px come ~1/3 del viewport; **topbar overflow** (`scrollWidth` > `clientWidth`); botones Tema/Presentar se recortan. Sin media-query de colapso de nav. |
| Floor Fira ≥16px | Captions Biblioteca estaban a **14px** → **corregidos a 16px** |

---

## 5. Hallazgos priorizados

### P0
_(ninguno bloqueante de uso básico en desktop)_

### P1
1. **Empty Editor vía nav** — al ir a Editor sin plantilla: canvas negro vacío + Campos/Validador vacíos. Sugerencia: empty state (“Elegí una plantilla”) o redirigir a Plantillas.
2. **White / cream text on `#FF0033` pills** — ratio ~3.8–4.0 &lt; 4.5 AA. Opciones VD: texto `#F7F4EF` no basta; bajar saturación del fill, o usar outline pill, o tipografía ≥18.66px bold si se mantiene fill.
3. **`#FF0033` on cream** para énfasis inline (`.r`) — 3.61 FAIL AA normal. OK en títulos grandes; riesgoso en body.
4. **Topbar / toolbar overflow en viewport angosto** — Tema/Presentar y chrome del editor se cortan. Necesita composición responsive (hide `wm-sub`, menú overflow, nav colapsable).

### P2
1. Nav visualmente “apretada” (gap 8px) — ver propuesta Opción A.
2. Sin `:focus-visible` global en inputs/select del Discurso (browser default puede bastar; unificar con accent).
3. Presentar depende de Fullscreen API + gesto; sin feedback si el browser bloquea.
4. Borders `.tbtn` de bajo contraste — subir a `--border-strong` más opaco o hover más evidente.
5. Dark theme: accent on `#16181A` ~4.49 (borde FAIL).

---

## 6. Qué se fijó vs qué espera Visual Design

### Fijado en este pass (mínimo / brand floor / a11y)
- `index.html`: **12×** `font-size:14px` → `16px` (captions Biblioteca / logo system).
- `src/styles.css`: `.tbtn:focus-visible{outline:2px solid var(--accent);outline-offset:2px}`.

### Ya estaba en el CSS (otro ajuste previo; documentado, no revertido)
- Rail `--nav-w:140px`, Fira sentence-case, `.nav-label`, `focus-visible` en nav, active bar `#FF0033`.

### Espera Visual Design (composición)
- Ancho final del rail / densidad / icon-only mobile.
- Empty state del Editor.
- Estrategia de contraste para pills rojas y `.r` on cream.
- Responsive topbar + colapso de nav.
- Refino de padding activo (barra ::before vs balance vertical).

---

## 7. Archivos tocados

- `/workspace/dl-brand-studio/USABILITY-NOTES.md` *(este archivo)*
- `/workspace/dl-brand-studio/index.html` (floor tipográfico 14→16)
- `/workspace/dl-brand-studio/src/styles.css` (`.tbtn:focus-visible`)
- Evidencia local (no product): `/workspace/dl-brand-studio/audit-shots/*.png`

---

## 8. Brand guardrails respetados

- Fira UI ≥16px (tras fix).
- Acento `#FF0033` · charcoal `#0D0F10` · cream `#F7F4EF`.
- Mark sin recuadro gradient en chrome.
- Sin chrome UserFirst.
