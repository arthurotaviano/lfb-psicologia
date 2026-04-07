import Container from '@/components/Container'
import { FiMapPin } from 'react-icons/fi'
import Heading from '../Headings'

export default function Location() {
  return (
    <section>
      <Container className='grid md:grid-cols-2 gap-8 md:gap-10'>
        <div className='rounded-2xl border border-taupe-300 bg-white/30 aspect-video'></div>
        <div className='flex flex-col gap-2 md:gap-4'>
          <Heading variant={2}>Localização</Heading>
          <p className='text-balance'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita culpa nostrum eaque unde ea voluptatum illum exercitationem vel, labore hic soluta, consequuntur fugiat iste iure qui praesentium vero blanditiis veniam.</p>
          <div className='flex gap-2'>
            <FiMapPin className='mt-1 size-4 text-accent' aria-hidden='true' />
            <div className='flex flex-col'>
              <span>Av. dos Operários, 54, sala 103</span>
              <span>Centro - Paracambi - RJ</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
