# socialcontent

Repositorio de trabajo para el contenido social: guiones, posts, carruseles y el calendario editorial.

> Primer commit para habilitar el repo. La estructura de abajo es una propuesta de arranque — ajústala conforme el flujo real lo pida.

## Estructura propuesta

```
.
├── calendario/        # plan editorial por semana o mes
├── drafts/            # piezas en proceso
├── publicado/         # piezas ya publicadas, con fecha y canal
├── assets/            # imágenes, portadas, recursos gráficos ligeros
└── guias/             # voz y tono, guías de marca, plantillas
```

`docs/` no es para borradores: es el sitio estático publicado del Brand Studio (`docs/index.html`).

## Convenciones

**Nombres de archivo:** `YYYY-MM-DD-canal-tema.md`

```
2026-09-21-linkedin-liderazgo-sin-autoridad.md
2026-09-24-instagram-carrusel-feedback.md
```

**Frontmatter sugerido** al inicio de cada pieza:

```yaml
---
titulo: Liderazgo sin autoridad
canal: linkedin        # linkedin | instagram | youtube | newsletter
formato: post          # post | carrusel | reel | guion | newsletter
estado: draft          # idea | draft | revision | listo | publicado
fecha_objetivo: 2026-09-21
---
```

**Flujo:** `idea` → `draft` → `revision` → `listo` → `publicado`

Cuando una pieza se publica, se mueve a `publicado/` y su `estado` cambia a `publicado`.

## Trabajo diario

```bash
git pull
# editar o crear piezas
git add .
git commit -m "Agrega post de LinkedIn sobre liderazgo sin autoridad"
git push
```

## Brand Studio

App web estática de Design Leaders en [`apps/brand-studio/`](apps/brand-studio/): vistas **Plantillas · Editor · Biblioteca · Discurso**. Logos, ilustraciones, fuentes y html2canvas van versionados en esa carpeta (offline-first).

```bash
cd apps/brand-studio
npm install
npm run dev       # http://127.0.0.1:5173/
npm run build     # genera dist/ para hosting estático
npm run preview   # sirve dist/
```

Cómo agregar una plantilla o un asset, y las reglas de marca que no se tocan: [`apps/brand-studio/README.md`](apps/brand-studio/README.md).

URL: `https://leonides.github.io/socialcontent/`.

El build que tiene que servir esa URL está en [`docs/`](docs/) (`docs/index.html` y los assets del `npm run build`). `apps/brand-studio/dist/` no se commitea. `docs/.nojekyll` evita que Jekyll oculte assets cuyo nombre empieza con `_`.

Pages está en **Deploy from a branch**, rama `main`, carpeta **`/` (root)**. La API de Pages responde 403 (`pages=write` y `administration=write`) al intentar pasar la carpeta a `/docs` o el origen a GitHub Actions, así que la misma copia del build también vive en la raíz del repo (`index.html`, `assets/`, `fonts/`, `vendor/` y `.nojekyll`). Con la carpeta `/`, `https://leonides.github.io/socialcontent/` sirve ese `index.html` (título **Design Leaders · Brand Studio · Woven Systems**, CSS `./assets/...`). `docs/` queda igual, por si más adelante la carpeta de Pages pasa a `/docs`.

Si más adelante se puede usar **Source: GitHub Actions**, el workflow [`.github/workflows/brand-studio-pages.yml`](.github/workflows/brand-studio-pages.yml) publica solo `apps/brand-studio/dist` y no hace falta la copia en `docs/`. Hoy ese cambio de origen no está disponible desde la integración.

Para regenerar `docs/` después de un cambio en el Studio:

```bash
cd apps/brand-studio
npm run build
cd ../..
rm -rf docs
mkdir docs
cp -a apps/brand-studio/dist/. docs/
touch docs/.nojekyll
```

## Notas

- El repo es **público**. `docs/` es el sitio: no pongas borradores editoriales ahí.
- Los archivos pesados (video en bruto, exports grandes) no van al repo — se quedan en almacenamiento externo y aquí solo se referencian por enlace.
