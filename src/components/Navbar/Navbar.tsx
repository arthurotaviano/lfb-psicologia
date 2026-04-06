import Container from '../Container'
import NavbarLogo from './NavbarLogo'
import { NavbarMenuDesktop, NavbarMenuMobile } from './NavbarMenu'

export default function Navbar() {
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
