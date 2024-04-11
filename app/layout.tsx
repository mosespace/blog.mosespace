import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Announcement from '@/components/announcement'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kisakye Moses | Software developer Kampala Uganda',
  description:
    "I'm fine-tuning my freelancing business, sharing more online, leveling up my design skill. I also experiment more with side projects, try to ship more. Crafting UIs with React since 2023. Passionate about interface design and attention to detail, striving to create great experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navLinks = [
    { label: 'All courses', href: '/all-courses' },
    { label: 'New courses', href: '/new-courses' },
    { label: 'Free courses', href: '/free-courses' },
  ]

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar path='/' pathName='mosespace.com' navLinks={navLinks} />
        <Announcement
          buttonInfo='Support on Youtube!'
          description='Launched on Youtube! If you like the content we give here, please support me by subscribing to my youtube @codewithmoses today.'
        />
        {children}
      </body>
    </html>
  )
}
