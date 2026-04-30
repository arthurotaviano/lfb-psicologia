import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import { Button } from '../button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

interface HomeAboutProfileProps {
  name: string
  crp: string
}

function HomeAboutModal({ name, crp }: HomeAboutProfileProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type='button'>Saiba mais</Button>
      </DialogTrigger>
      <DialogContent>
        <div className='no-scrollbar overflow-y-auto -m-6 p-6 min-h-0 text-center'>
          <DialogHeader className='items-center mb-4'>
            <div className='rounded-full border border-taupe-300 mx-auto w-30 md:w-40 h-30 md:h-40 bg-accent/5'></div>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>Sobre a psicóloga {name}</DialogDescription>
            <p className='font-semibold'>CRP {crp}</p>
          </DialogHeader>
          <p className='text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa numquam neque earum iusto inventore voluptatibus commodi nesciunt cumque modi. Sequi voluptates, temporibus aliquam illo aspernatur ipsum. Exercitationem, delectus cupiditate.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function HomeAboutProfile({ name, crp }: HomeAboutProfileProps) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='rounded-full border border-taupe-300 w-40 md:w-50 h-40 md:h-50 bg-white/30'></div>
      <Heading variant={4}>{name}</Heading>
      <p className='font-semibold'>CRP {crp}</p>
      <HomeAboutModal name={name} crp={crp} />
    </div>
  )
}

export function HomeAbout() {
  return (
    <section className='text-center'>
      <Container className='flex flex-col gap-8 md:gap-10'>
        <div className='flex flex-col gap-2 md:gap-4'>
          <Heading variant={2}>Quem somos</Heading>
          <Heading variant={3}>
            Pós-graduadas em Terapia <span className='whitespace-nowrap'>Cognitivo-Comportamental</span>
          </Heading>
          <p className='text-balance'>
            Atendimento online e presencial em <span className='whitespace-nowrap'>Paracambi-RJ</span> para adolescentes, adultos e idosos.
          </p>
        </div>
        <div className='flex flex-col md:flex-row md:justify-center gap-8 md:gap-10'>
          <HomeAboutProfile name='Luana de Freitas Beligote' crp='05/55344' />
          <HomeAboutProfile name='Loara de Freitas Beligote' crp='05/61567' />
        </div>
      </Container>
    </section>
  )
}
