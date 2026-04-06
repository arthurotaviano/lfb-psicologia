import Container from '../Container'
import FooterLinks from './FooterLinks'

export default function Footer() {
  return (
    <footer className='py-5 md:py-10 text-sm'>
      <Container className='flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-10'>
        <div>LFB Consultório de Psicologia - {new Date().getFullYear()}</div>
        <FooterLinks />
      </Container>
    </footer>
  )
}
