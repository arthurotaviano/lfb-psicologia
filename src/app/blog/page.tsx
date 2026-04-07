import BlogList from '@/components/Blog/BlogList'
import Container from '@/components/Container'
import Heading from '@/components/Headings'

export default function Blog() {
  return (
    <section>
      <Container className='flex flex-col gap-8 md:gap-10'>
        <Heading variant={1}>Blog</Heading>
        <BlogList />
      </Container>
    </section>
  )
}
