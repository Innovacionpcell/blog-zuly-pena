# Zuly Peña — sitio web

Ecosistema digital de **Zuly Peña**, mentora de mujeres que trabajan en limpieza y autora de
*Limpieza rima con riqueza*. Astro 7 · 100 % estático · sin frameworks de UI en cliente (JS mínimo).

## Comandos

| Comando           | Acción                                  |
| ----------------- | --------------------------------------- |
| `npm install`     | Instala dependencias (Node ≥ 22.12)     |
| `npm run dev`     | Servidor local en `http://localhost:4321` |
| `npm run build`   | Genera el sitio en `dist/`              |
| `npm run preview` | Sirve `dist/` para revisar el build     |
| `npm run check`   | Verificación de tipos (TypeScript/Astro) |

## Dónde se edita cada cosa (sin tocar componentes)

| Qué                            | Archivo                                   |
| ------------------------------ | ----------------------------------------- |
| Dominio, títulos, SEO, email   | `src/config/site.ts`                      |
| Newsletter (proveedor/endpoint)| `src/config/site.ts` → `NEWSLETTER`, lógica en `src/lib/newsletter.ts` |
| Redes sociales                 | `src/data/socials.ts`                     |
| Recursos (libros, guías, PDFs) | `src/data/resources.ts` + portada en `src/assets/covers/` |
| Datos del libro / enlace Amazon| `src/data/book.ts`                        |
| Menús                          | `src/data/navigation.ts`                  |
| Artículos del blog             | `src/content/blog/*.md` (config en `src/data/blog.ts`) |

### Nuevo artículo
Crea `src/content/blog/mi-articulo.md` con este frontmatter (URL: `/blog/mi-articulo/`):

```md
---
title: 'Título'
description: 'Meta description 140–160 caracteres'
excerpt: 'Resumen para la card'
category: 'Mentalidad'
date: 2026-10-01
cover: '../../assets/covers/mi-portada.png'
coverAlt: 'Descripción de la imagen'
featured: false
draft: false
---
```

### Nuevo recurso
Añade un objeto en `src/data/resources.ts`. Tipos: Libro, Ebook, Guía, PDF, Curso, Mentoría, Plantilla.
Badges: Gratis, Nuevo, Próximamente, Destacado. Si `href` está vacío se muestra "Disponible muy pronto".
Los PDFs descargables pueden ir en `public/descargas/`.

## Pendientes marcados como PLACEHOLDER
- `src/config/site.ts` → `url` (dominio definitivo) y `contactEmail`.
- `src/data/socials.ts` → LinkedIn (no aparece en Linktree).
- `src/data/resources.ts` → enlaces de la guía y del PDF.
- `src/assets/covers/libro-limpieza-rima-con-riqueza.png` → portada oficial del libro (misma ruta).
- `src/data/book.ts` → verificar ISBN.
- `src/pages/privacidad.astro` y `terminos.astro` → revisión legal.

## Despliegue en Hostinger
**Automático (recomendado):** `.github/workflows/deploy.yml` compila y sube `dist/` a `public_html/`
por FTP al hacer push a `main`. Solo hay que crear los secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

**Manual:** `npm run build` y subir el contenido de `dist/` (incluido `.htaccess`) a `public_html/`.

`public/.htaccess` ya incluye HTTPS, barra final, caché de assets, compresión, cabeceras de seguridad y 404.

## Decisiones
- Sin WhatsApp en ningún lugar del sitio (decisión de marca).
- Tipografía Montserrat autoalojada (sustituto web de Gotham, la fuente de marca).
- Video de YouTube con fachada ligera: el iframe solo carga al pulsar reproducir.
- SEO: canonical, Open Graph, Twitter Cards, sitemap, RSS y schema.org (Person, WebSite, Blog, BlogPosting, Book, BreadcrumbList).
