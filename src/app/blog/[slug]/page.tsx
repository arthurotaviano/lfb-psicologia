import { Container } from '@/components/container'
import { Heading } from '@/components/heading'
import { Metadata } from 'next'

const title = 'Título do Post - LFB Consultório de Psicologia'
const description = 'Leia na íntegra o artigo "Título do Post", publicado por Nome da Autora em 01/01/2016.'

export const metadata: Metadata = {
  metadataBase: new URL('https://lfbpsicologia.com.br'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/blog/titulo-do-post',
  },
}

export default function BlogPost() {
  return (
    <article>
      <Container className='flex flex-col gap-8 md:gap-10 max-w-3xl'>
        <div className='flex flex-col gap-4'>
          <span className='text-sm'>01/01/2026</span>
          <Heading variant={1}>Título do Post</Heading>
          <div className='flex items-center gap-2 text-sm' aria-hidden='true'>
            <span className='rounded-full border border-taupe-300 w-5 h-5 bg-accent/5'></span>
            <span>Nome da Autora</span>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi totam laboriosam doloremque, magnam voluptatibus inventore perferendis. Culpa, ipsam unde, cupiditate natus amet nihil sint odio maxime accusamus excepturi vero impedit.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis illum, fugiat quidem doloremque asperiores voluptatibus labore, expedita minus facilis fugit nam, error dolorem dolor sapiente. Nesciunt magnam hic sit totam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid, libero magnam numquam, in alias iusto delectus expedita tempore corporis non voluptatibus blanditiis vitae porro consequatur. Dolor deserunt adipisci temporibus.</p>
        </div>
      </Container>
    </article>
  )
}
