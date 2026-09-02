import { footerLinks } from '@/data/footer'

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
