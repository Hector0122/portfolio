# Portafolio — Héctor Páramo Velásquez

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build step) con dos páginas:

- `index.html` — portafolio de evidencia (sobre mí, stack, experiencia, proyectos, educación, contacto)
- `cv.html` — CV imprimible/descargable a PDF (botón "Imprimir" usa el diálogo de impresión del navegador → "Guardar como PDF")

## Pendientes antes de publicar

- [x] Reemplazar el link `href="#"` de GitHub en `index.html` (sección Contacto) y en `cv.html` (encabezado) — ahora apunta a `https://github.com/Hector0122`.
- [ ] Reemplazar el link `href="#"` de LinkedIn en `index.html` (sección Contacto) y en `cv.html` (encabezado) con tu URL real.
- [ ] Confirmar que el teléfono (664 125 9700) y la ubicación (Tijuana, México) siguen siendo correctos.
- [ ] Si tienes capturas de pantalla o demos de G-Nex, Varo, Vaulta, Velody, Vellum o Viva2026, considera agregarlas como imágenes dentro de cada `project-card` en `index.html` — ahora mismo las tarjetas son solo texto.
- [ ] Revisar si G-Nex/Anexo 24 es información confidencial de un cliente antes de publicar el sitio públicamente (no incluye nombres de clientes ni datos sensibles, pero confírmalo).
- [ ] Poner nombre final al proyecto de Unity si ya lo tienes (actualmente aparece como "Viva2026").
- [ ] Si cambias a un dominio propio, actualizar la URL de producción hardcodeada en `robots.txt`, `sitemap.xml`, y en las meta tags `og:url`/`og:image`/`twitter:image`/`canonical` de `index.html` (actualmente todas apuntan a `https://portfolio-delta-ruddy-33.vercel.app/`).
- [ ] `og-image.svg` es un placeholder generado por IA con tu nombre/stack; reemplázalo por una captura o foto real cuando quieras (X/Twitter no rasteriza bien SVG en `og:image`, considera exportarlo a PNG si te importa esa plataforma).

## Cómo verlo localmente

Solo abre `index.html` con doble clic, o desde una terminal:

```
start index.html
```

## Cómo publicarlo (recomendado: Netlify o Vercel, gratis)

**Netlify (drag & drop, el más simple):**
1. Ve a https://app.netlify.com/drop
2. Arrastra esta carpeta completa (`Portafolio-Hector`) a la página.
3. Netlify te da una URL pública al instante. Puedes conectar un dominio propio después.

**Vercel:**
1. Crea una cuenta en https://vercel.com
2. `npm i -g vercel` y luego, dentro de esta carpeta, `vercel` (sigue las instrucciones).

**GitHub Pages:**
1. Crea un repo en GitHub y sube estos archivos.
2. En Settings → Pages, selecciona la rama `main` y carpeta raíz `/`.
3. Tu sitio queda en `https://tu-usuario.github.io/nombre-repo`.

**¿Por qué no Railway?** Railway está pensado para procesos que corren (APIs, bases de datos, workers).
Para servir archivos estáticos necesitarías mantener un contenedor vivo (Nginx/serve), lo cual
consume tu cuota del plan Hobby por algo que Netlify/Vercel resuelven gratis y sin servidor.
Vale la pena reservar Railway para tus backends (G-Nex, Varo, etc.) y usar Netlify/Vercel solo para
este sitio estático.

## Estructura

```
Portafolio-Hector/
├── index.html      Portafolio (landing)
├── cv.html         CV imprimible
├── styles.css      Estilos del portafolio (tema claro/oscuro)
├── cv.css          Estilos del CV (optimizado para impresión)
├── script.js       Menú móvil + toggle de tema + año dinámico
└── README.md       Este archivo
```
