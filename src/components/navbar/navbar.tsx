import { Container } from '../container'
import { NavbarLogo } from './navbar-logo'
import { NavbarMenuDesktop, NavbarMenuMobile } from './navbar-menu'

export function Navbar() {
  return (
    <nav className='py-5 md:py-10'>
      <Container className='flex justify-between items-center gap-5 md:gap-10'>
        <NavbarLogo />
        <NavbarMenuDesktop />
        <NavbarMenuMobile />
      </Container>
    </nav>
  )
}
