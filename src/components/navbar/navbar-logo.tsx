import Image from 'next/image'
import Link from 'next/link'

export function NavbarLogo() {
  return (
    <Link className='block w-9 md:w-68.5 h-10 md:h-15 overflow-hidden' href='/'>
      <Image className='w-auto h-full object-cover object-left pointer-events-none select-none' src='/lfb-logo.svg' alt='Logo LFB Consultório de Psicologia' width={274} height={60} loading='eager' />
      <span className='sr-only'>LFB Consultório de Psicologia</span>
    </Link>
  )
}
