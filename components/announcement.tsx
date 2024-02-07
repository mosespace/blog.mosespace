import React from 'react'
import { MoveRight, Rocket } from 'lucide-react'

export default function Announcement({
  description = 'Launched on Youtube! If you like the content we give here, please support me by subscribing to my youtube @codewithmoses today.',
  buttonInfo = 'Support on Youtube!',
}: {
  description: string
  buttonInfo: string
}) {
  return (
    <>
      <div className='borderk border-b-slate-900k fixed inset-x-0 top-0 z-10 bg-white px-4 py-[0.50rem] text-slate-900 shadow-md'>
        <div className='flex justify-center'>
          <span className='flex items-center justify-center gap-4 text-sm font-medium'>
            <div className='flex gap-2'>
              <Rocket />
              <p>
                <span className='font-bold'>{description}</span>
              </p>
            </div>
            <button className='flex items-center gap-1 bg-slate-900 px-5 py-2 text-white'>
              {buttonInfo}
              <MoveRight />
            </button>
          </span>
        </div>
      </div>
    </>
  )
}
