import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Container({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={twMerge('mx-auto px-5 md:px-10 max-w-7xl', className)} {...props}>
      {children}
    </div>
  )
}
