import Heading from '@/components/Headings'
import AboutModal from './AboutModal'
import type { AboutProfileProps } from './types'

export default function AboutProfile({ name, crp }: AboutProfileProps) {
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='rounded-full border border-taupe-300 bg-white/30 w-40 md:w-50 h-40 md:h-50'></div>
      <Heading variant={4}>{name}</Heading>
      <p className='font-semibold'>CRP {crp}</p>
      <AboutModal name={name} crp={crp} />
    </div>
  )
}
