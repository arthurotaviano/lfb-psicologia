import { BlogList } from '../blog-list'
import { ButtonLink } from '../button'
import { Container } from '../container'
import { Heading } from '../heading'

export function HomeLatestPosts() {
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
