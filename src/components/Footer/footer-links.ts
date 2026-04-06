import { type IconType } from 'react-icons'
import { SiInstagram, SiWhatsapp } from 'react-icons/si'

interface FooterLinksProps {
  label: string
  href: string
  icon: IconType
}

export const footerLinks: FooterLinksProps[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/lfbpsicologia/', icon: SiInstagram },
  { label: 'WhatsApp', href: 'https://wa.me/5521991316177', icon: SiWhatsapp },
]
