import { BlogList } from '@/components/blog-list'
import { ButtonLink } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'

export function LatestPosts() {
  return (
    <section>
      <div className='content'>
        <div className='flex flex-col gap-8 md:gap-10'>
          <Heading variant={2}>Últimos posts</Heading>
          <BlogList />
        </div>
        <div className='mt-8 md:mt-10'>
          <ButtonLink href='/blog'>Ver todos</ButtonLink>
        </div>
      </div>
    </section>
  )
}
