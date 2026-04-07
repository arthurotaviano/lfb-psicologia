import Link from 'next/link'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

const styles = 'rounded-full px-4 py-2 bg-accent hover:bg-accent-hover text-white font-medium cursor-pointer'

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({ href, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={styles} href={href} {...props}>
      {children}
    </Link>
  )
}
