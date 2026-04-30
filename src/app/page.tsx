import { HomeAbout } from '@/components/home/about'
import { HomeLatestPosts } from '@/components/home/latest-posts'
import { HomeLocation } from '@/components/home/location'

export default function Home() {
  return (
    <>
      <HomeAbout />
      <HomeLocation />
      <HomeLatestPosts />
    </>
  )
}
