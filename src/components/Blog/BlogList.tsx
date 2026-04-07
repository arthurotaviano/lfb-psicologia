export default function BlogList() {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8'>
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i}>
          <a className='hover:scale-105 transition-transform flex flex-col gap-2 rounded-2xl border border-taupe-300 px-6 py-4 bg-white' href='/blog/titulo-do-post' aria-label='Título do post'>
            <span className='text-accent font-heading text-2xl'>Título do post</span>
            <span className='text-sm' aria-hidden='true'>
              01/01/2026
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
