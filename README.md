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

Pages ya está activo con **Deploy from a branch**, rama `main`, carpeta **`/` (root)**. En la raíz del repo no hay `index.html`, así que el sitio muestra este `README.md` y no el Studio. La API de Pages respondió 403 al intentar cambiar el origen a GitHub Actions, así que el origen tiene que quedar en la rama, carpeta `/docs`:

1. Abrí https://github.com/LEOnides/socialcontent/settings/pages
2. **Build and deployment → Source: Deploy from a branch**
3. Branch: **main** · Folder: **/docs**
4. **Save**

Cuando ese build termine, el HTML de `https://leonides.github.io/socialcontent/` lleva el título **Design Leaders · Brand Studio · Woven Systems**.

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
