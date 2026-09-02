import { CONTACT_LINKS } from '@/constants/contact'

type NavbarMenuLinkProps = {
  label: string
  href: string
}

export const links: NavbarMenuLinkProps[] = [
  { label: 'Início', href: '/' },
  { label: 'Blog', href: '/blog' },
]

export const button: NavbarMenuLinkProps = {
  label: 'Contato',
  href: CONTACT_LINKS.WHATSAPP,
}
