import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='mt-14'>
      <div className='relative mx-auto w-full border-b bg-slate-900 px-10'>
        <div className='relative mx-auto flex w-full flex-col p-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8'>
          <div className='flex flex-row items-center justify-between lg:justify-start'>
            <Link
              href='/'
              className='text-lg tracking-tight text-white focus:outline-none focus:ring lg:text-2xl'
            >
              <span className='font-bold focus:ring-0 lg:text-lg'>
                mosespace.com
              </span>
            </Link>
            <button className='inline-flex items-center justify-center p-2 text-gray-400 hover:text-orange-500 focus:text-black focus:outline-none md:hidden'>
              <Menu className='h-6 w-6' />
            </button>
          </div>
          <nav className='hidden flex-grow flex-col py-10 md:flex md:flex-row md:justify-end lg:py-0'>
            <ul className='list-none space-y-2 md:inline-flex md:items-center md:space-y-0'>
              <li>
                <Link
                  href='#'
                  className='border-b-2 border-transparent px-2 py-8 text-sm text-gray-300 hover:border-orange-600 hover:text-orange-500 md:px-3 lg:px-6'
                >
                  All
                  <span className='hidden lg:inline'>courses</span>
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='border-b-2 border-transparent px-2 py-8 text-sm text-gray-300 hover:border-orange-600 hover:text-orange-500 md:px-3 lg:px-6'
                >
                  New courses
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='border-b-2 border-transparent px-2 py-8 text-sm text-gray-300 hover:border-orange-600 hover:text-orange-500 md:px-3 lg:px-6'
                >
                  Free
                  <span className='hidden lg:inline'>Courses</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
