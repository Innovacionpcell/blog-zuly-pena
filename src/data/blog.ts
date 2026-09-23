import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Configuración y utilidades del blog.
 * Los artículos viven en src/content/blog/*.md (ver content.config.ts).
 */
export const BLOG = {
  title: 'Historias, consejos y herramientas',
  description:
    'Artículos de Zuly Peña sobre crecimiento personal, valor propio, límites, bienestar y desarrollo profesional para mujeres que trabajan en limpieza.',
  postsPerHome: 3,
  categories: ['Mentalidad', 'Bienestar', 'Profesionalización', 'Dinero', 'Historias'],
};

export type Post = CollectionEntry<'blog'>;

/** Artículos publicados, del más reciente al más antiguo. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Destacados primero, luego los más recientes. */
export async function getFeaturedPosts(limit = BLOG.postsPerHome): Promise<Post[]> {
  const posts = await getPublishedPosts();
  const featured = posts.filter((p) => p.data.featured);
  const rest = posts.filter((p) => !p.data.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

/** Minutos de lectura aproximados (200 palabras/min). */
export function readingTime(body = ''): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}
