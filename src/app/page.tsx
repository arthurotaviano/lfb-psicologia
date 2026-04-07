import About from '@/components/Home/About/About'
import LatestPosts from '@/components/Home/LatestPosts'
import Location from '@/components/Home/Location'

export default function Home() {
  return (
    <>
      <h1 className='sr-only'>LFB Consultório de Psicologia</h1>
      <About />
      <Location />
      <LatestPosts />
    </>
  )
}
