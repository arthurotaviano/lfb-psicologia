import { CONTACT_LINKS } from '@/constants/contact'

type LinkProps = {
  label: string
  href: string
}

export const links: LinkProps[] = [
  { label: 'Início', href: '/' },
  { label: 'Blog', href: '/blog' },
]

export const button: LinkProps = {
  label: 'Contato',
  href: CONTACT_LINKS.WHATSAPP,
}
