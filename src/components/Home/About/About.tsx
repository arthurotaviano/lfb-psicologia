import Container from '@/components/Container'
import AboutHead from './AboutHead'
import AboutProfile from './AboutProfile'

export default function About() {
  return (
    <section className='text-center'>
      <Container className='flex flex-col gap-8 md:gap-10'>
        <AboutHead />
        <div className='flex flex-col md:flex-row md:justify-center gap-8 md:gap-10'>
          <AboutProfile name='Luana de Freitas Beligote' crp='05/55344' />
          <AboutProfile name='Loara de Freitas Beligote' crp='05/61567' />
        </div>
      </Container>
    </section>
  )
}
