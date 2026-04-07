import Heading from '@/components/Headings'

export default function AboutHead() {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
      <Heading variant={2}>Quem somos</Heading>
      <Heading variant={3}>
        Pós-graduadas em Terapia <span className='whitespace-nowrap'>Cognitivo-Comportamental</span>
      </Heading>
      <p className='text-balance'>
        Atendimento online e presencial em <span className='whitespace-nowrap'>Paracambi-RJ</span> para adolescentes, adultos e idosos.
      </p>
    </div>
  )
}
