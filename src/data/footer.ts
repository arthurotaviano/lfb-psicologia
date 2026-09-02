import { CONTACT_LINKS } from '@/constants/contact'
import { type IconType } from 'react-icons'
import { SiInstagram, SiWhatsapp } from 'react-icons/si'

type FooterLinkProps = {
  label: string
  href: string
  icon: IconType
}

export const footerLinks: FooterLinkProps[] = [
  { label: 'Instagram', href: CONTACT_LINKS.INSTAGRAM, icon: SiInstagram },
  { label: 'WhatsApp', href: CONTACT_LINKS.WHATSAPP, icon: SiWhatsapp },
]
