import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export default function Button({ href, children, className = '', ...props }: ButtonProps) {
  return (
    <Link href={href} className={`rounded-full px-4 py-2 bg-accent hover:bg-accent-hover text-white font-medium ${className}`} {...props}>
      {children}
    </Link>
  )
}
