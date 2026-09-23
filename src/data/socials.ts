/**
 * Redes y canales del ecosistema de Zuly Peña.
 * Fuente: https://linktr.ee/zp_coach (verificado).
 * Para ocultar una red, deja `url` vacío: los componentes la omiten automáticamente.
 * WhatsApp NO se incluye por decisión de marca.
 */
export type SocialId = 'instagram' | 'tiktok' | 'youtube' | 'facebook' | 'linkedin' | 'amazon';

export interface Social {
  id: SocialId;
  label: string;
  handle: string;
  url: string;
  /** Texto corto para la sección "Conecta conmigo". */
  cta: string;
}

export const socials: Social[] = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@soyzulypena',
    url: 'https://www.instagram.com/soyzulypena/',
    cta: 'Reflexiones y día a día',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    handle: '@zulymentoralimpiadoras',
    url: 'https://tiktok.com/@zulymentoralimpiadoras',
    cta: 'Consejos en video corto',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: 'Zuly Peña',
    url: 'https://www.youtube.com/channel/UCpwm2HbsWWkpx328aa2VAVg',
    cta: 'Charlas y contenido largo',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'Soy Zuly Peña Coach',
    url: 'https://www.facebook.com/soyzulypenacoach',
    cta: 'Comunidad y novedades',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'Zuly Peña',
    /** ⚠️ PLACEHOLDER: no aparece en Linktree. Pega aquí la URL del perfil cuando exista. */
    url: '',
    cta: 'Perfil profesional',
  },
  {
    id: 'amazon',
    label: 'Amazon',
    handle: 'Limpieza rima con riqueza',
    url: 'https://a.co/d/0i7E8DFB',
    cta: 'Consigue el libro',
  },
];

/** Solo las redes con URL configurada. */
export const activeSocials = socials.filter((s) => s.url.trim() !== '');

/** Perfiles para schema.org `sameAs`. */
export const sameAs = activeSocials.filter((s) => s.id !== 'amazon').map((s) => s.url);
