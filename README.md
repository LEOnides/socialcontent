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
└── docs/              # voz y tono, guías de marca, plantillas
```

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

URL prevista: `https://leonides.github.io/socialcontent/`. Hoy responde 404. El workflow publica solo el `dist/` del Studio. Para dejarlo público: marcar el PR como listo, mergear a `main` y, en **Settings → Pages**, elegir **Source: GitHub Actions**. En GitHub Pro el sitio puede ser público con el repo privado. En GitHub Free hay que pasar el repo a público en **Settings → General → Danger Zone → Change repository visibility**; eso publica también el código (borradores). El detalle está en [`apps/brand-studio/README.md`](apps/brand-studio/README.md).

## Notas

- El repo sigue **privado** hasta que se cambie la visibilidad a mano. Aquí van borradores y notas de trabajo, no material final para terceros.
- Los archivos pesados (video en bruto, exports grandes) no van al repo — se quedan en almacenamiento externo y aquí solo se referencian por enlace.
