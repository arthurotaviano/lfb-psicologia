import { type IconType } from 'react-icons'
import { SiInstagram, SiWhatsapp } from 'react-icons/si'
import { Container } from './container'

interface FooterLinksProps {
  label: string
  href: string
  icon: IconType
}

export const footerLinks: FooterLinksProps[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/lfbpsicologia/', icon: SiInstagram },
  { label: 'WhatsApp', href: 'https://wa.me/5521991316177', icon: SiWhatsapp },
]

export function Footer() {
  return (
    <footer className='border-t border-taupe-300 py-5 md:py-10 text-sm'>
      <Container className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-10'>
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
      </Container>
    </footer>
  )
}
