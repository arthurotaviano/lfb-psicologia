'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ButtonLink } from '../Button'
import { button, links } from './links'

export function NavbarMenuDesktop() {
  const pathname = usePathname()
  const isCurrent = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <ul className='hidden md:inline-flex items-center gap-10'>
      {links.map(({ label, href }) => (
        <li key={href}>
          <Link className={`hover:text-accent ${isCurrent(href) && 'text-accent'} font-medium`} href={href}>
            {label}
          </Link>
        </li>
      ))}
      <li>
        <ButtonLink href={button.href} target='_blank' rel='noopener noreferrer' role='button'>
          {button.label}
        </ButtonLink>
      </li>
    </ul>
  )
}

export function NavbarMenuMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const isCurrent = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  useEffect(() => {
    if (!isOpen) return

    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleBreakpoint = (evt: MediaQueryListEvent) => {
      if (evt.matches) setIsOpen(false)
    }

    mediaQuery.addEventListener('change', handleBreakpoint)
    return () => mediaQuery.removeEventListener('change', handleBreakpoint)
  }, [isOpen])

  const handleKeyDown = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Escape') {
      buttonRef.current?.focus()
      setIsOpen(false)
      return
    }

    if (evt.key !== 'Tab' || !menuRef.current) return

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>('a, button')
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (evt.shiftKey && document.activeElement === firstElement) {
      setIsOpen(false)
    } else if (!evt.shiftKey && document.activeElement === lastElement) {
      setIsOpen(false)
    }
  }

  return (
    <div className='inline-block md:hidden' onKeyDown={handleKeyDown} ref={menuRef}>
      <button className='md:hidden relative z-30 flex justify-center items-center -mr-2 w-8 h-8 pointer-events-auto cursor-pointer' type='button' ref={buttonRef} aria-expanded={isOpen} aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setIsOpen(!isOpen)}>
        <svg className='overflow-visible h-3.5 w-3.5 stroke-accent pointer-events-none' fill='none' strokeWidth='2' strokeLinecap='round' aria-hidden='true'>
          <path className={`origin-center ${isOpen ? 'scale-90 opacity-0' : 'scale-100 opacity-100'} duration-150`} d='M0 1H14M0 7H14M0 13H14'></path>
          <path className={`origin-center ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} duration-150`} d='M2 2L12 12M12 2L2 12'></path>
        </svg>
      </button>
      <div className={`${!isOpen ? 'invisible opacity-0 pointer-events-none' : 'visible opacity-100'} fixed inset-0 z-10 bg-background/50 backdrop-blur-xs duration-150`} aria-hidden='true' onClick={() => setIsOpen(false)} />
      <ul className={`${!isOpen ? 'invisible opacity-0 scale-95' : 'visible opacity-100 scale-100'} absolute top-20 right-5 left-5 z-20 flex flex-col origin-top rounded-2xl border border-taupe-300 p-4 bg-white text-foreground text-lg tracking-tight duration-150`} aria-hidden={!isOpen}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link className={`block p-2 hover:text-accent ${isCurrent(href) && 'text-accent'} font-medium`} href={href} onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          </li>
        ))}
        <hr className='mx-2 my-2 border-taupe-300' aria-hidden='true' />
        <li>
          <Link className='block p-2 hover:text-accent font-medium' href={button.href} target='_blank' rel='noopener noreferrer' role='button'>
            {button.label}
          </Link>
        </li>
      </ul>
    </div>
  )
}
