'use client'

import { Dialog as DialogPrimitive } from 'radix-ui'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { XIcon } from 'lucide-react'

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot='dialog' {...props} />
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot='dialog-trigger' {...props} />
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot='dialog-portal' {...props} />
}

function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return <DialogPrimitive.Overlay data-slot='dialog-overlay' className={cn('fixed inset-0 isolate z-50 bg-background/50 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0', className)} {...props} />
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content data-slot='dialog-content' className={cn('fixed top-1/2 left-1/2 z-50 flex flex-col w-full max-w-[calc(100vw-40px)] md:max-w-2xl max-h-[calc(100vh-80px)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-2xl bg-popover p-6 text-popover-foreground border border-taupe-300 duration-100 outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95', className)} {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot='dialog-close' asChild>
            <button className='absolute top-4 right-4 rounded-full flex justify-center items-center w-8 h-8 bg-accent hover:bg-accent-hover active:bg-accent-active text-white cursor-pointer' type='button'>
              <XIcon className='size-5 pointer-events-none' />
              <span className='sr-only'>Fechar</span>
            </button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot='dialog-header' className={cn('flex flex-col gap-2', className)} {...props} />
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title data-slot='dialog-title' className={cn('font-heading text-accent text-2xl md:text-3xl', className)} {...props} />
}

function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description data-slot='dialog-description' className={cn('sr-only', className)} {...props} />
}

export { Dialog, DialogContent, DialogDescription, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger }
