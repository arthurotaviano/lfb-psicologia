import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Container({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={twMerge('mx-auto max-w-7xl px-5 md:px-10', className)} {...props}>
      {children}
    </div>
  )
}
