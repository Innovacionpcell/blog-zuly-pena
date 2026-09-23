import cover from '../assets/covers/libro-limpieza-rima-con-riqueza.png';

/**
 * Datos del libro. Todo el contenido del libro se edita aquí.
 * ⚠️ La portada actual es una maqueta provisional con la identidad de marca.
 *    Reemplaza el archivo src/assets/covers/libro-limpieza-rima-con-riqueza.png
 *    por la portada oficial (misma ruta y nombre) y listo.
 */
export const book = {
  slug: 'limpieza-rima-con-riqueza',
  title: 'Limpieza rima con riqueza',
  subtitle: 'Barre tus limitaciones y monetiza tu valor',
  author: 'Zuly Peña',
  cover,
  coverAlt: 'Portada del libro Limpieza rima con riqueza de Zuly Peña',
  /** Enlace oficial de compra (Linktree de Zuly). */
  amazonUrl: 'https://a.co/d/0i7E8DFB',
  /** Video de presentación del libro en YouTube (Linktree de Zuly). */
  youtubeId: 'Khq6PMrnEuE',
  youtubeTitle: 'Limpieza rima con riqueza, para heroínas de la vida cotidiana',
  /** ⚠️ Verificar con Zuly: ISBN-10 de la edición impresa según Amazon.es. */
  isbn: '2839945983',
  inLanguage: 'es',
  formats: ['Tapa blanda', 'Kindle'],
  short:
    'Un libro para las heroínas de la vida cotidiana: mujeres que sostienen hogares, empresas y familias con su trabajo, y que merecen verlo con otros ojos.',
  description: [
    'Trabajar en limpieza no te hace menos. Este libro nace para acompañar a las mujeres que dedican su vida al servicio y quieren dejar de vivir en modo supervivencia.',
    'Con una mirada cercana y práctica, Zuly Peña invita a barrer las creencias que limitan, reconocer el valor real del propio trabajo y dar los primeros pasos para convertirlo en orgullo, estabilidad y prosperidad.',
  ],
  /** Ideas principales (editar con Zuly si se quiere ajustar al índice real). */
  highlights: [
    {
      title: 'Tu trabajo tiene valor',
      text: 'Mirar tu oficio con orgullo y dignidad, más allá de las tareas que realizas.',
    },
    {
      title: 'Barre tus limitaciones',
      text: 'Identificar las creencias que te mantienen pequeña y empezar a soltarlas.',
    },
    {
      title: 'Monetiza tu valor',
      text: 'Una relación más sana con el dinero y con el precio de tu experiencia.',
    },
    {
      title: 'De sobrevivir a crecer',
      text: 'Límites, descanso y decisiones que construyen una vida con propósito.',
    },
  ],
} as const;
