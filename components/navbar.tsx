import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { NavigationSection } from '@/types/infoType'

export default function Navbar({
  path,
  pathName,
  navLinks,
}: NavigationSection) {
  return (
    <div className='mt-14'>
      <div className='bg-primary relative mx-auto w-full px-10'>
        <div className='relative mx-auto flex w-full flex-col p-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8'>
          <div className='flex flex-row items-center justify-between lg:justify-start'>
            <Link
              href={path}
              className='text-lg tracking-tight text-white focus:outline-none focus:ring lg:text-2xl'
            >
              <span className='font-bold focus:ring-0 lg:text-lg'>
                {pathName}
              </span>
            </Link>
            <button className='inline-flex items-center justify-center p-2 text-gray-400 hover:text-lime-500 focus:text-black focus:outline-none md:hidden'>
              <Menu className='h-6 w-6' />
            </button>
          </div>
          <nav className='hidden flex-grow flex-col py-10 md:flex md:flex-row md:justify-end lg:py-0'>
            <ul className='list-none space-y-2 md:inline-flex md:items-center md:space-y-0'>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className='border-b-2 border-transparent px-2 py-8 text-sm text-gray-300 hover:border-lime-600 hover:text-lime-500 md:px-3 lg:px-6'
                  >
                    <span className='hidden lg:inline'>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
