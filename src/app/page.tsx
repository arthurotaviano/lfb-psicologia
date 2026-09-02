import { About } from '@/features/home/components/about'
import { LatestPosts } from '@/features/home/components/latest-posts'
import { Location } from '@/features/home/components/location'

export default function Home() {
  return (
    <>
      <About />
      <Location />
      <LatestPosts />
    </>
  )
}
