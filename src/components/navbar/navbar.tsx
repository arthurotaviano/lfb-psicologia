import { Logo } from './logo'
import { MenuDesktop, MenuMobile } from './menu'

export function Navbar() {
  return (
    <nav className='py-5 md:py-10'>
      <div className='content flex justify-between items-center gap-5 md:gap-10'>
        <Logo />
        <MenuDesktop />
        <MenuMobile />
      </div>
    </nav>
  )
}
