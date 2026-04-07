interface NavbarMenuLinksProps {
  label: string
  href: string
}

export const links: NavbarMenuLinksProps[] = [
  { label: 'Início', href: '/' },
  { label: 'Blog', href: '/blog' },
]

export const button: NavbarMenuLinksProps = { label: 'Contato', href: 'https://wa.me/5521991316177' }
