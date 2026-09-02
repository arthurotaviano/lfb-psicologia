import { HomeAbout } from '@/features/home/components/about'
import { HomeLatestPosts } from '@/features/home/components/latest-posts'
import { HomeLocation } from '@/features/home/components/location'

export default function Home() {
  return (
    <>
      <HomeAbout />
      <HomeLocation />
      <HomeLatestPosts />
    </>
  )
}
