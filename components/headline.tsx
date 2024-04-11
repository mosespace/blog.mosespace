import React from 'react'

export default function HeadLine({ title, description }: any) {
  return (
    <div className='mx-autos mb-10 max-w-2xl text-start  lg:mb-14'>
      <h2 className='text-2xl font-bold text-white md:text-4xl md:leading-tight'>
        {title}
      </h2>
      <p className='mt-1 text-gray-600 dark:text-gray-400'>{description}</p>
    </div>
  )
}
