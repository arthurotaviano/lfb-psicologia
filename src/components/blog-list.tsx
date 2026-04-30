import Link from 'next/link'

export function BlogList() {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i}>
          <Link className='hover:scale-105 transition-transform duration-300 flex flex-col gap-2 rounded-2xl border border-taupe-300 px-6 py-4 bg-white' href='/blog/titulo-do-post' aria-label='Título do post'>
            <span className='text-xs' aria-hidden='true'>
              01/01/2026
            </span>
            <span className='text-accent font-heading text-2xl'>Título do post</span>
            <span className='flex items-center gap-2 text-xs' aria-hidden='true'>
              <span className='rounded-full border border-taupe-300 w-5 h-5 bg-accent/5'></span>
              <span>Nome da Autora</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
