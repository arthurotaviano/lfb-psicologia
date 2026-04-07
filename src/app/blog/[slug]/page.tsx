import Container from '@/components/Container'
import Heading from '@/components/Headings'

export default function Blog() {
  return (
    <section>
      <Container className='flex flex-col gap-8 md:gap-10 max-w-3xl'>
        <div className='flex flex-col gap-4'>
          <span>01/01/2026</span>
          <Heading variant={1}>Título do Post</Heading>
        </div>
        <div className='flex flex-col gap-4'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi totam laboriosam doloremque, magnam voluptatibus inventore perferendis. Culpa, ipsam unde, cupiditate natus amet nihil sint odio maxime accusamus excepturi vero impedit!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis illum, fugiat quidem doloremque asperiores voluptatibus labore, expedita minus facilis fugit nam, error dolorem dolor sapiente! Nesciunt magnam hic sit totam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid, libero magnam numquam, in alias iusto delectus expedita tempore corporis non voluptatibus blanditiis vitae porro consequatur? Dolor deserunt adipisci temporibus.</p>
        </div>
      </Container>
    </section>
  )
}
