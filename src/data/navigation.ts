export interface NavItem {
  label: string;
  href: string;
}

/** Menú principal (header). Los anclajes funcionan desde cualquier página. */
export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Zuly', href: '/#sobre-zuly' },
  { label: 'Recursos', href: '/#recursos' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Libro', href: '/libro/' },
  { label: 'Contacto', href: '/#contacto' },
];

export const footerNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Recursos', href: '/recursos/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Libro', href: '/libro/' },
  { label: 'Política de privacidad', href: '/privacidad/' },
  { label: 'Términos', href: '/terminos/' },
];
