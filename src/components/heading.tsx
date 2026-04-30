import { ReactNode } from 'react'

interface HeadingProps {
  variant: 1 | 2 | 3 | 4
  children: ReactNode
}

const variantClasses: Record<HeadingProps['variant'], string> = {
  1: 'text-accent text-4xl md:text-5xl',
  2: 'text-accent text-4xl md:text-5xl',
  3: 'text-2xl md:text-3xl',
  4: 'text-accent text-2xl',
}

export function Heading({ variant, children }: HeadingProps) {
  const Tag = `h${variant}` as 'h1' | 'h2' | 'h3' | 'h4'

  return <Tag className={`font-serif ${variantClasses[variant]}`}>{children}</Tag>
}
