import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import HeadLine from './headline'
import { IProjects, IBlogs } from '@/types/infoType'

const projects: IProjects[] = [
  {
    title: 'Elite Jobs',
    href: 'https://www.mosespace.com/',
    image: '/placeholder.svg',
    description:
      "💰 Welcome to 'Elite Jobs' 💡: Explore Jobs With State, a dynamic feature in Next.js 13.5, React, and Tailwind CSS. Seamlessly toggle between monthly and yearly pricing options.",
  },
  {
    title: 'Avail GPT',
    href: 'https://www.mosespace.com/',
    image: '/placeholder.svg',
    description:
      "🚀 Presenting 'Avail GPT' 🔥: My portfolio's latest addition! A Full-Stack chartGPT clone crafted with Next.js, Tailwind CSS, Prisma, and Rapid API. Experience seamless integration and dynamic",
  },
  {
    title: 'Invoice Generator',
    href: 'https://www.mosespace.com/',
    image: '/placeholder.svg',
    description:
      "💼 Introducing 'Invoice Generator' 💰: A powerful SAAS tool built with Next.js 14.0, NextAuth React, and Tailwind CSS. Simplify invoice creation for businesses of all sizes. Seamlessly manage",
  },
  {
    title: 'Code With Moses',
    href: 'https://www.mosespace.com/',
    image: '/placeholder.svg',
    description:
      "👨‍💻 Welcome to 'Code With Moses'! 🚀 Dive into the world of online learning with Next.js 14.1, NextAuth, Stripe React, and Tailwind CSS. 💡 Empower your students to pay and enroll",
  },
]

const blogs: IBlogs[] = [
  {
    title: 'The Falling Of Solar-Eclipse',
    image: '/placeholder.svg',
    isSponsored: true,
    description:
      "Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio",
  },
  {
    title: 'Why You Should Be Using Next Js 14.5',
    image: '/placeholder.svg',
    isSponsored: false,
    description:
      "Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio",
  },
]

export default function Blog() {
  return (
    <>
      <div className='mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        <HeadLine
          title='Recent On My Blogs'
          description='Stay in the know with insights from industry experts.'
        />

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {blogs.map((blog, i) => {
            return (
              <Link
                className='group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                href={`d/blog/${i}`}
              >
                <div className='relative overflow-hidden rounded-xl pt-[50%] sm:pt-[70%]'>
                  <img
                    className='absolute start-0 top-0 h-full w-full rounded-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                    src={blog.image}
                    alt={`Uploaded on blog.mosespace: ${blog.title}`}
                  />
                  {blog.isSponsored && (
                    <span className='absolute end-0 top-0 rounded-es-xl rounded-se-xl bg-gray-900 px-3 py-1.5 text-xs font-medium text-white'>
                      Sponsored
                    </span>
                  )}
                </div>

                <div className='mt-7'>
                  <h3 className='text-xl font-semibold  text-gray-200 group-hover:text-lime-600'>
                    {blog.title}
                  </h3>
                  <p className='mt-3 line-clamp-2 text-gray-800 dark:text-gray-200'>
                    {blog.description}
                  </p>
                  <p className='mt-5 inline-flex items-center gap-x-1 font-medium text-blue-600 decoration-2 group-hover:underline'>
                    Read more
                    <ChevronRight className='h-4 w-4 flex-shrink-0' />
                  </p>
                </div>
              </Link>
            )
          })}

          {/* paid Add */}
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
                <ChevronRight className='h-4 w-4 flex-shrink-0' />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className='mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        <HeadLine
          title='Recent projects'
          description='Crafting UIs with React since 2023. Passionate about interface design and attention to detail, striving to create great experiences.'
        />
        {/* <!-- Grid -->s */}
        <div className='grid gap-10 lg:grid-cols-2 lg:gap-y-16'>
          {/* <!-- Card -->s */}
          {projects.map((blog, i) => (
            <Link
              key={i}
              className='group overflow-hidden rounded-xl border border-lime-800 p-4 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              href={blog.href}
              target='_blank'
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
                  <h3 className='text-xl font-semibold  text-gray-300 group-hover:text-lime-600 dark:group-hover:text-white'>
                    {blog.title}
                  </h3>
                  <p className='mt-3 line-clamp-3 text-gray-600 dark:text-gray-400'>
                    {blog.description}
                  </p>
                  <p className='mt-4 inline-flex items-center gap-x-1 font-medium text-green-600 decoration-2 hover:underline'>
                    Visit site
                    <ChevronRight className='h-4 w-4 flex-shrink-0' />
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
