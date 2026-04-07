import Container from '@/components/Container'
import BlogList from '../Blog/BlogList'
import { ButtonLink } from '../Button'
import Heading from '../Headings'

export default function LatestPosts() {
  return (
    <section>
      <Container>
        <div className='flex flex-col gap-8 md:gap-10'>
          <Heading variant={2}>Últimos posts</Heading>
          <BlogList />
        </div>
        <div className='mt-8 md:mt-10'>
          <ButtonLink href='/blog'>Ver todos</ButtonLink>
        </div>
      </Container>
    </section>
  )
}
