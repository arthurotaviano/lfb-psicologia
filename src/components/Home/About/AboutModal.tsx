'use client'

import { Button } from '@/components/Button'
import Heading from '@/components/Headings'
import { useEffect, useRef, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import type { AboutProfileProps } from './types'

export default function AboutModal({ name, crp }: AboutProfileProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    dialogRef.current?.showModal()
    setIsOpen(true)
  }

  const closeModal = () => {
    dialogRef.current?.close()
    setIsOpen(false)
  }

  const handleBackdropClick = (evt: React.MouseEvent<HTMLDialogElement>) => {
    if (evt.target === dialogRef.current) closeModal()
  }

  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  return (
    <>
      <Button type='button' onClick={openModal}>
        Saiba mais
      </Button>
      <dialog ref={dialogRef} onClick={handleBackdropClick} onClose={() => setIsOpen(false)} className='rounded-2xl border border-taupe-300 m-auto p-6 max-w-[calc(100vw-40px)] md:max-w-2xl max-h-[calc(100vh-40px)] bg-white backdrop:bg-background/50 backdrop:backdrop-blur-xs text-foreground' aria-label={name}>
        <div className='flex flex-col justify-center gap-2 mb-4'>
          <div className='rounded-full border border-taupe-300 mx-auto w-40 md:w-50 h-40 md:h-50'></div>
          <Heading variant={'modal'}>{name}</Heading>
          <p className='font-semibold'>CRP {crp}</p>
        </div>
        <p className='text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa numquam neque earum iusto inventore voluptatibus commodi nesciunt cumque modi. Sequi voluptates, temporibus aliquam illo aspernatur ipsum. Exercitationem, delectus cupiditate.</p>
        <button className='absolute top-4 right-4 rounded-full flex justify-center items-center w-8 h-8 bg-accent hover:bg-accent-hover active:bg-accent-active text-white cursor-pointer' type='button' aria-label='Fechar' onClick={closeModal}>
          <IoClose className='size-5' />
        </button>
      </dialog>
    </>
  )
}
