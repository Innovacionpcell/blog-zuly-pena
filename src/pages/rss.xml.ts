import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../config/site';
import { BLOG, getPublishedPosts } from '../data/blog';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: `Blog de ${SITE.name}`,
    description: BLOG.description,
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
      categories: [p.data.category, ...p.data.tags],
    })),
    customData: '<language>es</language>',
  });
}
