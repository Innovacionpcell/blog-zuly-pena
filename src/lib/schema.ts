import { SITE } from '../config/site';
import { sameAs } from '../data/socials';
import { book } from '../data/book';

const base = SITE.url.replace(/\/$/, '');
export const ids = {
  person: `${base}/#zuly-pena`,
  website: `${base}/#website`,
  blog: `${base}/blog/#blog`,
  book: `${base}/libro/#libro`,
};

export function personSchema(image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': ids.person,
    name: SITE.author.name,
    url: `${base}/`,
    jobTitle: SITE.author.jobTitle,
    description: SITE.author.description,
    ...(image ? { image: new URL(image, base).href } : {}),
    knowsAbout: [
      'Crecimiento personal',
      'Desarrollo profesional',
      'Mentoría para mujeres',
      'Mujeres que trabajan en limpieza',
      'Educación financiera',
    ],
    sameAs,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': ids.website,
    url: `${base}/`,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.locale,
    publisher: { '@id': ids.person },
  };
}

export function bookSchema(coverSrc: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': ids.book,
    name: `${book.title}: ${book.subtitle}`,
    alternateName: book.title,
    author: { '@id': ids.person, '@type': 'Person', name: book.author },
    inLanguage: book.inLanguage,
    isbn: book.isbn || undefined,
    image: new URL(coverSrc, base).href,
    description: book.description.join(' '),
    url: `${base}/libro/`,
    bookFormat: ['https://schema.org/Paperback', 'https://schema.org/EBook'],
    offers: {
      '@type': 'Offer',
      url: book.amazonUrl,
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Amazon' },
    },
  };
}

export function blogSchema(posts: { url: string; title: string; date: Date }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': ids.blog,
    url: `${base}/blog/`,
    name: `Blog de ${SITE.name}`,
    inLanguage: SITE.locale,
    author: { '@id': ids.person },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: new URL(p.url, base).href,
      datePublished: p.date.toISOString(),
    })),
  };
}

export function articleSchema(p: {
  url: string;
  title: string;
  description: string;
  image: string;
  date: Date;
  updated?: Date;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    image: new URL(p.image, base).href,
    datePublished: p.date.toISOString(),
    dateModified: (p.updated ?? p.date).toISOString(),
    inLanguage: SITE.locale,
    mainEntityOfPage: new URL(p.url, base).href,
    author: { '@id': ids.person, '@type': 'Person', name: SITE.author.name },
    publisher: { '@id': ids.person },
    isPartOf: { '@id': ids.blog },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.url, base).href,
    })),
  };
}
