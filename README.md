# Portafolio — Héctor Páramo Velásquez

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build step) con dos páginas:

- `index.html` — portafolio de evidencia (sobre mí, stack, proyectos). Diseño "Blueprint": tipografía Archivo Black + IBM Plex Mono (self-hosted en `fonts/`, sin peticiones a CDNs externos), tema navy oscuro / crema claro, sin bordes redondeados.
- `cv.html` — CV imprimible/descargable a PDF (botón "Imprimir" usa el diálogo de impresión del navegador → "Guardar como PDF"). Mantiene su estilo propio, distinto del sitio — tiene el historial completo de experiencia y educación que ya no está duplicado en `index.html`.

## Pendientes antes de publicar

- [x] Reemplazar el link `href="#"` de GitHub en `index.html` (footer) y en `cv.html` (encabezado) — ahora apunta a `https://github.com/Hector0122`.
- [ ] Reemplazar el link `href="#"` de LinkedIn en `index.html` (footer) y en `cv.html` (encabezado) con tu URL real.
- [ ] Confirmar que el teléfono (664 125 9700, solo visible en `cv.html`) y la ubicación (Tijuana, México) siguen siendo correctos.
- [ ] Reemplazar los 6 logos placeholder (`logo_gnex.svg`, `logo_varo.svg`, `logo_vaulta.svg`, `logo_velody.svg`, `logo_vellum.svg`, `logo_viva2026.svg`) por los logos reales cuando los tengas — es un swap de archivo, no hace falta tocar el HTML.
- [ ] Revisar si G-Nex/Anexo 24 y el proyecto de SITT tienen información confidencial de cliente antes de publicar el sitio públicamente (ninguno de los dos nombra al cliente/empleador, pero confírmalo).
- [ ] Poner nombre final al proyecto de Unity si ya lo tienes (actualmente aparece como "Viva2026").
- [ ] Si cambias a un dominio propio, actualizar la URL de producción hardcodeada en `robots.txt`, `sitemap.xml`, y en las meta tags `og:url`/`og:image`/`twitter:image`/`canonical` de `index.html` (actualmente todas apuntan a `https://portfolio-delta-ruddy-33.vercel.app/`).
- [ ] `og-image.svg` es un placeholder generado por IA con tu nombre/stack; reemplázalo por una captura o foto real cuando quieras (X/Twitter no rasteriza bien SVG en `og:image`, considera exportarlo a PNG si te importa esa plataforma).
- [ ] Si algún día quieres actualizar los diagramas de arquitectura de G-Nex/Velody en `index.html` (los `<svg>` dentro de cada `<details>`), recuerda que son dibujados a mano — si la arquitectura real cambia, el diagrama no se actualiza solo.

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
├── index.html          Portafolio (landing) — diseño "Blueprint"
├── cv.html             CV imprimible (estilo propio, sin tocar)
├── 404.html            Página 404 personalizada
├── styles.css          Estilos del portafolio (tema blueprint/blueline)
├── cv.css              Estilos del CV (optimizado para impresión)
├── script.js           Menú móvil + toggle de tema + año + contacto ofuscado
├── fonts/              Archivo Black + IBM Plex Mono (self-hosted, .woff2)
├── logo_*.svg           Logos placeholder por proyecto (swap de archivo)
├── og-image.svg         Imagen para previews al compartir el link
├── robots.txt / sitemap.xml   SEO/crawlability
├── vercel.json          Headers de seguridad (CSP, X-Frame-Options, etc.)
└── README.md            Este archivo
```
