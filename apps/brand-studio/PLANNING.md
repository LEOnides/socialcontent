# Plan — Design Leaders · Brand Studio

**Estado:** solo planificación. Este incremento no está construido.

El Brand Studio actual queda como MVP. Sigue siendo la app estática de hoy. Este documento describe el paso siguiente.

## Qué es el MVP hoy

- App estática (Vite) en `apps/brand-studio/`.
- En vivo en https://leonides.github.io/socialcontent/.
- Sin backend.
- Exportar PNG descarga el archivo en la máquina de quien usa el studio.
- No hay carga de archivos. Logos e ilustraciones son archivos estáticos del repositorio.
- Narrativa y reglas visuales viven en `CONTEXT.md` y `Brand.md`. Este plan no las modifica.

## Siguiente incremento

Cuando se construya, el producto suma tres capacidades. Hasta entonces, el studio sigue estático y offline.

### Cuentas con usuario y contraseña

Cada persona tiene una cuenta con usuario y contraseña. El espacio deja de ser anónimo y compartido solo en el navegador.

### Base de datos del producto

El producto tiene una base de datos. Ahí viven las cuentas y lo que cada persona registra. Hoy esa base no existe.

### Registrar imágenes y guardarlas en el espacio

Cada persona puede registrar imágenes y guardarlas dentro de su espacio. Son piezas y assets persistidos, no solo la descarga local del PNG.

La biblioteca oficial (logos e ilustraciones versionados en el repo) sigue siendo el set de marca. El espacio de cada persona es aparte: ahí quedan las imágenes que esa persona registra.

## Qué permanece igual

- El MVP publicado sigue estático, sin cuentas y sin base de datos, hasta que este incremento se construya.
- Exportar PNG puede seguir existiendo. Lo nuevo es persistir la imagen en el espacio de la persona.
- Colores, navegación, narrativa y reglas de uso del mark no entran en este incremento.
- Este archivo no implementa autenticación, base de datos ni carga de archivos.

## Exploración de stack (no decidido)

Notas de exploración. Ninguna opción está elegida:

- Autenticación con usuario y contraseña. El proveedor queda por definir.
- Base de datos del producto, por ejemplo Postgres. No decidido.
- Dónde se guardan los archivos de imagen (en la base o en un almacén aparte). No decidido.

No hay precios, métricas ni capacidad definidos en este plan.
