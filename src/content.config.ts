import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog: cada artículo es un archivo .md en src/content/blog/.
 * El nombre del archivo es la URL: mi-articulo.md → /blog/mi-articulo/
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(90),
      /** Meta description (SEO). Ideal 140–160 caracteres. */
      description: z.string().max(170),
      /** Extracto visible en las cards. */
      excerpt: z.string(),
      category: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      cover: image(),
      coverAlt: z.string(),
      author: z.string().default('Zuly Peña'),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
