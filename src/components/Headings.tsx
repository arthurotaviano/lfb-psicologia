type HeadingVariant = 1 | 2 | 3 | 4 | 'modal'

interface HeadingProps {
  variant?: HeadingVariant
  children: React.ReactNode
}

const variants: Record<HeadingVariant, { tag: React.ElementType; className: string; ariaLevel?: number }> = {
  1: { tag: 'h1', className: 'text-accent text-4xl md:text-5xl' },
  2: { tag: 'h2', className: 'text-accent text-4xl md:text-5xl' },
  3: { tag: 'h3', className: 'text-2xl md:text-3xl' },
  4: { tag: 'h4', className: 'text-accent text-2xl' },
  modal: { tag: 'div', className: 'text-accent text-2xl md:text-3xl', ariaLevel: 2 },
}

export default function Heading({ variant = 1, children }: HeadingProps) {
  const { tag: Tag, className, ariaLevel } = variants[variant]
  const aria = ariaLevel ? { role: 'heading', 'aria-level': ariaLevel } : {}

  return (
    <Tag className={`font-heading ${className}`} {...aria}>
      {children}
    </Tag>
  )
}
