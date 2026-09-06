import { About } from '@/views/home/components/about'
import { LatestPosts } from '@/views/home/components/latest-posts'
import { Location } from '@/views/home/components/location'

export default function Home() {
  return (
    <>
      <About />
      <Location />
      <LatestPosts />
    </>
  )
}
