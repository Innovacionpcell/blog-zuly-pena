import type { ImageMetadata } from 'astro';
import { book } from './book';
import guiaValor from '../assets/covers/guia-valor-profesional.png';
import pdfSupervivencia from '../assets/covers/pdf-modo-supervivencia.png';

/**
 * Recursos digitales. Para añadir uno nuevo:
 * 1. Agrega su portada en src/assets/covers/ (ideal 1200×800, o 800×1200 si es libro).
 * 2. Añade un objeto al array `resources`. No hay que tocar componentes.
 */
export type ResourceType = 'Libro' | 'Ebook' | 'Guía' | 'PDF' | 'Curso' | 'Mentoría' | 'Plantilla';
export type ResourceBadge = 'Gratis' | 'Nuevo' | 'Próximamente' | 'Destacado';

export interface Resource {
  id: string;
  type: ResourceType;
  category: string;
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Portada vertical (libros/ebooks) para ajustar el encuadre en la card. */
  portrait?: boolean;
  badges?: ResourceBadge[];
  cta: string;
  /** URL interna (/libro) o externa (Amazon, Hotmart, etc.). Vacío = "Próximamente". */
  href: string;
  external?: boolean;
  featured?: boolean;
}

export const resources: Resource[] = [
  {
    id: 'libro-limpieza-rima-con-riqueza',
    type: 'Libro',
    category: 'Crecimiento y dinero',
    title: book.title,
    description: book.short,
    image: book.cover,
    imageAlt: book.coverAlt,
    portrait: true,
    badges: ['Destacado'],
    cta: 'Ver libro',
    href: '/libro',
    featured: true,
  },
  {
    id: 'guia-valor-profesional',
    type: 'Guía',
    category: 'Profesionalización',
    title: 'Guía para reconocer tu valor profesional',
    description:
      'Un paso a paso para identificar tus fortalezas, nombrar tu experiencia y hablar de tu trabajo con seguridad.',
    image: guiaValor,
    imageAlt: 'Portada de la guía para reconocer tu valor profesional',
    badges: ['Gratis', 'Nuevo'],
    cta: 'Descargar guía',
    /** ⚠️ PLACEHOLDER: enlace al PDF (p. ej. /descargas/guia-valor-profesional.pdf). */
    href: '',
    featured: true,
  },
  {
    id: 'pdf-modo-supervivencia',
    type: 'PDF',
    category: 'Mentalidad',
    title: '7 señales de que estás viviendo en modo supervivencia',
    description:
      'Un recurso breve para reconocer las señales del agotamiento y elegir el primer cambio que sí puedes hacer hoy.',
    image: pdfSupervivencia,
    imageAlt: 'Portada del PDF 7 señales de que estás viviendo en modo supervivencia',
    badges: ['Gratis'],
    cta: 'Ver recurso',
    /** ⚠️ PLACEHOLDER: enlace al PDF. */
    href: '',
    featured: true,
  },
];

export const featuredResources = resources.filter((r) => r.featured);
