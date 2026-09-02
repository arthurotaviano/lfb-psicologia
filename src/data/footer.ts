import { CONTACT_LINKS } from '@/constants/contact'
import { type IconType } from 'react-icons'
import { SiInstagram, SiWhatsapp } from 'react-icons/si'

type LinkProps = {
  label: string
  href: string
  icon: IconType
}

export const footerLinks: LinkProps[] = [
  { label: 'Instagram', href: CONTACT_LINKS.INSTAGRAM, icon: SiInstagram },
  { label: 'WhatsApp', href: CONTACT_LINKS.WHATSAPP, icon: SiWhatsapp },
]
