/**
 * Configuración global del sitio.
 * Todo lo que tenga "PLACEHOLDER" debe reemplazarse antes de publicar.
 */
export const SITE = {
  name: 'Zuly Peña',
  tagline: 'Mentora · Autora · Creadora',
  /** ⚠️ PLACEHOLDER: dominio definitivo en Hostinger. Se usa para canonical, sitemap, OG y schema. */
  url: 'https://zulypena.com',
  locale: 'es',
  ogLocale: 'es_ES',
  title: 'Zuly Peña | Mentora de mujeres que trabajan en limpieza',
  description:
    'Mentoría, recursos y contenido de Zuly Peña para mujeres que trabajan en limpieza y quieren crecer, profesionalizarse, reconocer su valor y construir una vida con propósito.',
  defaultOgImage: '/og-zuly-pena.jpg',
  /** ⚠️ PLACEHOLDER: correo de contacto público (déjalo vacío para no mostrarlo). */
  contactEmail: '',
  author: {
    name: 'Zuly Peña',
    jobTitle: 'Mentora y autora',
    description:
      'Mentora, autora y creadora de contenido para mujeres que trabajan en limpieza y desean transformar su profesión, su mentalidad y su relación con el dinero.',
  },
} as const;

/**
 * Newsletter: estructura lista para conectar un proveedor.
 * provider: 'none' | 'mailerlite' | 'brevo' | 'mailchimp' | 'custom'
 * - 'none'      → valida y muestra confirmación, no envía datos a ningún lado.
 * - 'custom'    → POST JSON { name, email } a `endpoint` (tu API / dashboard propio).
 * - 'mailerlite'| 'brevo' | 'mailchimp' → usa `endpoint` (form action / webhook del proveedor).
 * Ver src/lib/newsletter.ts
 */
export const NEWSLETTER = {
  provider: 'none' as 'none' | 'mailerlite' | 'brevo' | 'mailchimp' | 'custom',
  /** ⚠️ PLACEHOLDER: URL del endpoint cuando se conecte el proveedor. */
  endpoint: '',
};
