import { ComponentProps } from 'react'

export default function Container({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={`mx-auto max-w-7xl px-5 md:px-10 ${className ?? ''}`} {...props}>
      {children}
    </div>
  )
}
