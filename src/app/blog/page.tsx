import { BlogList } from '@/components/blog-list'
import { Heading } from '@/components/ui/heading'
import type { Metadata } from 'next'

const title = 'Blog - LFB Consultório de Psicologia'
const description =
  'Artigos e dicas sobre saúde mental e bem-estar, através do olhar da abordagem Terapia Cognitivo-Comportamental.'
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/blog',
  },
}

export default function Blog() {
  return (
    <section>
      <div className='content flex flex-col gap-8 md:gap-10'>
        <Heading variant={1}>Blog</Heading>
        <BlogList />
      </div>
    </section>
  )
}
