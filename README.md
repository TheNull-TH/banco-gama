# Banco Gama

Panel estático hecho con HTML, CSS y JavaScript. No requiere Node.js, pnpm ni un paso de compilación.

## Publicar en Cloudflare Pages

Al conectar el repositorio en Cloudflare Pages, configura:

- **Framework preset:** None
- **Build command:** vacío (si es obligatorio, usa `exit 0`)
- **Build output directory:** `public`
- **Root directory:** `/` (raíz del repositorio)

Cloudflare publicará `public/index.html` y sus archivos estáticos. No agregues comandos `pnpm install`, `npm install` ni `wrangler deploy` al build.