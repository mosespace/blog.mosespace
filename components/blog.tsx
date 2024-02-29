import { blogSection } from '@/types/infoType'
import { CalendarDays, Timer } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const blogs: blogSection[] = [
  {
    title: 'Studio by mosespace',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
    description:
      "Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio",
  },
  {
    title: 'Studio by mosespace texsting on two',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
    description:
      "Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio",
  },
  {
    title: 'Desishub Coding',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
    description:
      "Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio",
  },
  {
    title: 'On Site',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
    description:
      "Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio",
  },
]

export default function Blog() {
  return (
    <>
      <div className='mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        <div className='mx-auto mb-10 max-w-2xl text-start md:text-center lg:mb-14'>
          <h2 className='text-2xl font-bold md:text-4xl md:leading-tight dark:text-white'>
            Insights
          </h2>
          <p className='mt-1 text-gray-600 dark:text-gray-400'>
            Stay in the know with insights from industry experts.
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          <Link
            className='group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='#'
          >
            <div className='relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]'>
              <img
                className='absolute start-0 top-0 h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                src='https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
                alt='Image Description'
              />
              <span className='absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-800 px-3 py-1.5 text-xs font-medium text-white dark:bg-gray-900'>
                Sponsored
              </span>
            </div>

            <div className='mt-7'>
              <h3 className='text-xl font-semibold text-gray-800 group-hover:text-lime-600 dark:text-gray-200'>
                Studio by Preline
              </h3>
              <p className='mt-3 text-gray-800 dark:text-gray-200'>
                Produce professional, reliable streams easily leveraging
                Preline's innovative broadcast studio
              </p>
              <p className='mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 decoration-2 group-hover:underline'>
                Read more
                <svg
                  className='h-4 w-4 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </p>
            </div>
          </Link>

          <Link
            className='group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='#'
          >
            <div className='relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]'>
              <img
                className='absolute start-0 top-0 h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                src='https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                alt='Image Description'
              />
            </div>

            <div className='mt-7'>
              <h3 className='text-xl font-semibold text-gray-800 group-hover:text-lime-600 dark:text-gray-200'>
                Onsite
              </h3>
              <p className='mt-3 text-gray-800 dark:text-gray-200'>
                Optimize your in-person experience with best-in-className
                capabilities like badge printing and lead retrieval
              </p>
              <p className='mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 decoration-2 group-hover:underline'>
                Read more
                <svg
                  className='h-4 w-4 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </p>
            </div>
          </Link>

          <Link
            className="group relative flex min-h-[15rem] w-full flex-col rounded-xl bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80')] bg-cover bg-center transition hover:shadow-lg dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href='#'
          >
            <div className='flex-auto p-4 md:p-6'>
              <h3 className='text-xl text-white/[.9] group-hover:text-white'>
                <span className='font-bold'>Preline</span> Press publishes books
                about economic and technological advancement.
              </h3>
            </div>
            <div className='p-4 pt-0 md:p-6'>
              <div className='inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-white/[.7]'>
                Visit the site
                <svg
                  className='h-4 w-4 flex-shrink-0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path d='m9 18 6-6-6-6' />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className='mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        {/* <!-- Grid -->s */}
        <div className='grid gap-10 lg:grid-cols-2 lg:gap-y-16'>
          {/* <!-- Card -->s */}
          {blogs.map((blog, i) => (
            <Link
              key={i}
              className='group overflow-hidden rounded-xl border border-lime-500 p-4 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href={`${blog.href}`}
            >
              <div className='sm:flex'>
                <div className='relative h-44 w-full flex-shrink-0 overflow-hidden rounded-xl sm:w-56'>
                  <img
                    className='absolute start-0 top-0 h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                    src={blog.image}
                    alt='Image Description'
                  />
                </div>

                <div className='mt-4 grow px-4 sm:ms-6 sm:mt-0 sm:px-0'>
                  <h3 className='text-xl font-semibold text-gray-800 group-hover:text-lime-600 dark:text-gray-300 dark:group-hover:text-white'>
                    {blog.title}
                  </h3>
                  <p className='mt-3 text-gray-600 dark:text-gray-400'>
                    {blog.description}
                  </p>
                  <p className='mt-4 inline-flex items-center gap-x-1 font-medium text-blue-600 decoration-2 hover:underline'>
                    Read more
                    <svg
                      className='h-4 w-4 flex-shrink-0'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='m9 18 6-6-6-6' />
                    </svg>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
