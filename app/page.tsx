'use client'
import Blog from '@/components/blog'
import { blogSection } from '@/types/infoType'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/fonts/Space_Grotesk.woff2' })

export default function Home() {
  return (
    <main className='flex w-full flex-col items-center justify-center bg-zinc-950 px-4 md:px-20'>
      <div className='container flex flex-col items-center justify-center text-center sm:py-20 md:max-w-5xl md:pt-32'>
        <span className={myFont.className}>
          <h1 className='font-heading mb-2 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl'>
            Building hackin’ cool digital products around the world 🌴.
          </h1>
        </span>
      </div>
      <div className='flex  h-full w-full flex-col'>
        <Blog />
      </div>
    </main>
  )
}
