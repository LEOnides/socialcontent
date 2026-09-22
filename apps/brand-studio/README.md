# Design Leaders · Brand Studio

App estática para armar piezas de **Design Leaders LATAM** (Woven Systems). Corre en cualquier browser: dev local con Vite, o el `dist/` en un host estático.

Vistas: **Plantillas · Editor · Biblioteca · Discurso**.

Sin backend. Fuentes locales y `html2canvas` vendoreado (no hay Google Fonts ni CDN).

## Requisitos

- Node.js 18+ y npm

## Instalar, desarrollar, build

Desde la raíz del repo:

```bash
cd apps/brand-studio
npm install
npm run dev
```

Abrí `http://127.0.0.1:5173/`.

Build de producción y preview del estático:

```bash
npm run build
npm run preview
```

`npm run build` escribe `apps/brand-studio/dist/`. Ese folder se puede subir a cualquier hosting estático (raíz o subpath): las URLs del build son relativas (`base: './'`).

`dist/` y `node_modules/` no se commitean. La copia que ve GitHub está en `docs/` en la raíz del repo (incluye `docs/.nojekyll`).

## URL pública (GitHub Pages)

El sitio queda en:

`https://leonides.github.io/socialcontent/`

El repo ya es público y Pages ya está activo, pero el origen es **Deploy from a branch → `main` / `/` (root)**. Ahí no hay `index.html`: se publica el README de la raíz, no el Studio. El build commiteado está en `docs/index.html`.

La API para cambiar Pages respondió 403. Hace falta este clic:

1. Abrí https://github.com/LEOnides/socialcontent/settings/pages
2. **Build and deployment → Source: Deploy from a branch**
3. Branch: **main** · Folder: **/docs**
4. **Save**

Cuando el build de Pages termine, el título de la página es **Design Leaders · Brand Studio · Woven Systems**.

Alternativa (no deja el build en git): en la misma pantalla, **Source: GitHub Actions**. El workflow publica solo `apps/brand-studio/dist`. Ese cambio de origen tampoco se pudo hacer por API.

## Qué está versionado

```
apps/brand-studio/
  index.html                 # shell: Plantillas, Editor, Biblioteca, Discurso
  src/main.js                # plantillas, editor, validador, discurso offline
  src/styles.css             # chrome + layouts de pieza
  src/fonts.css              # @font-face locales
  public/assets/logos/       # sistema de logo (PNG oficiales)
  public/assets/illustrations/  # Sketchnote DL
  public/fonts/              # Fira Sans + JetBrains Mono
  public/vendor/html2canvas.min.js
  CONTEXT.md                 # narrativa y reglas (referencia)
  Brand.md                   # índice de marca
  USABILITY-NOTES.md         # pass 2026-09-21
```

Los PNG de logo e ilustración coinciden con el set canónico (marks oficiales + refs de illo). El light whiteboard (`sketchnote-light-compliance-ux.jpg`) queda en el repo como archivo histórico: no se usa para trabajo nuevo.

## Cómo agregar una plantilla

1. Abrí `src/main.js` y buscá el arreglo `TEMPLATES`.
2. Copiá un objeto de la misma familia (`dark` / `woven` / `light` / `wash` / `illo`).
3. Cambiá `id`, `cat`, `name`, `fmt`, `w`, `h`, `theme`, `layout`, `thumb` y `defaults` (textos editables).
4. `cat` tiene que mapear a una galería que ya existe: `redes`, `quote`, `woven`, `tactico`, `deck`, `wash`, `illo`.
5. Si la pieza es `layout: "illo-ref"`, registrá la clave en `ILLO_REFS` y el archivo en `public/assets/illustrations/`.
6. Recargá el dev server. La tarjeta aparece en **Plantillas**.

No inventes métricas. El copy de ejemplo es yapping en español LATAM. Sin caja CTA roja sólida y sin barra vertical roja a la izquierda. Mark sin recuadro gradient.

## Cómo agregar un asset

**Logo oficial**

1. Copiá el PNG a `public/assets/logos/` con nombre `dl-mark-*` o `dl-lockup-*`.
2. Si es un mark nuevo, actualizá las constantes `MARK_*` al inicio de `src/main.js` (pasan por `pub()`, así el build estático sigue resolviendo).
3. Si tiene que verse en Biblioteca, sumá la tarjeta en `index.html` usando `%BASE_URL%assets/logos/…`.

**Ilustración**

1. Copiá el archivo a `public/assets/illustrations/`.
2. Registrá la ruta en `ILLO_REFS` dentro de `src/main.js` con `pub('assets/illustrations/…')`.
3. El light whiteboard histórico no entra a la galería canónica.

En dev y en `dist/` se sirven como:

- `assets/logos/…`
- `assets/illustrations/…`
- `fonts/…`
- `vendor/html2canvas.min.js`

## Marca (bloqueada)

- UI en Fira Sans, piso **≥ 16px**.
- Acento `#FF0033` · charcoal `#0D0F10` · cream `#F7F4EF`.
- Mark Woven **sin** recuadro gradient. En nav, mark white-sm (D y L separadas), nunca el gradient.
- Rail de navegación **~140px**, labels Fira en sentence case. No volver a un rail de 88px con mono en mayúsculas: los labels se cortan.
- Español LATAM. Sin métricas inventadas. Sin chrome de UserFirst (no caja CTA roja sólida en las piezas).

Detalle: `CONTEXT.md` y `Brand.md`.

## Usabilidad aplicada (2026-09-21)

- Nav legible: `--nav-w: 140px` y `.nav-label` en Fira. Se dejó así a propósito.
- **Editor vacío:** si entrás a Editor sin abrir una plantilla, ves el empty state “Elegí una plantilla” en lugar del lienzo negro.
- **Contraste del rojo de marca:** blanco sobre `#FF0033` y `.r` sobre cream no llegan a WCAG AA en texto normal. **No se cambió** el hex. Queda como TODO de Visual Design / UX & Product Design (`USABILITY-NOTES.md`).

## Vistas

| Vista | Qué hace |
|---|---|
| Plantillas | Galería. Una tarjeta abre esa pieza en el Editor. |
| Editor | Campos, zoom, tipo, tema de la pieza, validador, imprimir/PDF y PNG. |
| Biblioteca | Logo system, paleta, tipo, Sketchnote DL, do/don’t, copy. |
| Discurso | Generador offline (5 bloques). Sin API. |
