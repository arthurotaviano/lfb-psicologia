import { footerLinks } from './footer-links'

export default function FooterLinks() {
  return (
    <ul className='flex items-center gap-4' aria-label='Redes Sociais'>
      {footerLinks.map(({ label, href, icon: Icon }) => (
        <li key={href}>
          <a className='group inline-flex items-center gap-1' href={href} target='_blank'>
            <Icon className='size-3' aria-hidden='true' />
            <span className='group-hover:underline'>{label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
