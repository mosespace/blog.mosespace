'use client'
import localFont from 'next/font/local'

const myFont = localFont({ src: '../public/fonts/Space_Grotesk.woff2' })

export default function Home() {
  return (
    <main className='bg-blacks flex w-full justify-center'>
      <div className='absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
      <div className='container flex max-w-5xl flex-col items-center justify-center text-center sm:py-20 md:py-32'>
        <span className={myFont.className}>
          <h1 className='font-heading mb-2 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl'>
            Building hackin’ cool digital products around the world 🌴.
          </h1>
        </span>
      </div>
    </main>
  )
}
