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

export function Footer() {
  return (
    <footer className='border-t border-taupe-300 py-5 md:py-10 text-sm'>
      <div className='content flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-10'>
        <div>LFB Consultório de Psicologia - {new Date().getFullYear()}</div>
        <ul className='flex items-center gap-4' aria-label='Redes Sociais'>
          {footerLinks.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <a className='group inline-flex items-center gap-1' href={href} target='_blank'>
                <Icon className='size-3 text-accent' aria-hidden='true' />
                <span className='group-hover:underline'>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
