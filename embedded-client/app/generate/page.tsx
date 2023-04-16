import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const data = [
  {
    role: 'user',
    message: 'Luke Skywalker',
  },
  {
    role: 'user',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    role: 'assistant',
    message: 'Loster',
  },
  {
    role: 'assistant',
    message: 'Andrew',
  },
  {
    role: 'assistant',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    role: 'assistant',
    message: 'Loster',
  },
  {
    role: 'assistant',
    message: 'Loster',
  },
  {
    role: 'user',
    message: 'Luke Skywalker',
  },
  {
    role: 'user',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    role: 'assistant',
    message: 'Loster',
  },
  {
    role: 'assistant',
    message: 'Andrew',
  },
  {
    role: 'assistant',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    role: 'assistant',
    message: 'Loster',
  },
  {
    role: 'assistant',
    message: 'Loster',
  },
]

export default function Home() {
  return (
    <main className='flex flex-col bg-white mb-8 relative'>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={`chat ${
              item.role === 'user' ? 'chat-end' : 'chat-start'
            }  p-4`}
          >
            {/* <div className='chat-image avatar bg-neutral rounded-md'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='48'
                viewBox='0 96 960 960'
                width='48'
                className='flex p-1 items-center justify-center fill-white	'
                // fill='currentColor'
              >
                <path d='M385 936q-51 0-86.5-38T258 812q-59-5-98.5-49.5T120 654q0-22 5.5-42.5T142 572q-11-18-16.5-38t-5.5-43q0-60 41.5-103t98.5-50q2-51 38.5-86.5T386 216q29 0 51.5 10.5T480 257q20-20 42-30.5t51-10.5q50 0 86 35.5t39 86.5q58 5 100 48.5T840 491q0 23-6 43.5T817 573q11 20 17 42t6 43q0 64-39.5 106.5T702 812q-5 48-41 86t-86 38q-30 0-52-10t-43-30q-21 20-43 30t-52 10Zm125-600v480q0 25 19.5 42.5T576 876q26 0 45-23t21-47q-23-8-43-21.5T565 751q-8-11-6-22.5t13-19.5q11-8 22.5-6t19.5 13q13 18 32 27.5t42 9.5q38 0 65-26t27-69q0-9-2-18.5t-4-19.5q-18 13-39.5 19.5T690 646q-13 0-21.5-8.5T660 616q0-13 8.5-21.5T690 586q38 0 64-28t26-67q0-38-28-65t-64-29q-10 24-28.5 42.5T617 467q-12 5-23-.5T579 449q-4-12 1-23.5t17-15.5q18-6 29.5-24t11.5-41q0-29-19-49t-45-20q-26 0-45 17.5T510 336Zm-60 480V336q0-25-18.5-42.5T386 276q-26 0-45.5 20T321 345q0 23 11 40.5t29 23.5q12 4 17.5 15.5T380 447q-5 12-16.5 18t-23.5 1q-24-8-42-26.5T270 397q-35 3-62.5 29.5T180 491q0 39 26 67t64 28q13 0 21.5 8.5T300 616q0 13-8.5 21.5T270 646q-23 0-44.5-7T186 620q-3 8-4.5 17t-1.5 18q0 43 26.5 70.5T271 753q22 0 41.5-10t32.5-27q8-10 20-12.5t22 5.5q10 8 12.5 20t-5.5 22q-14 20-33.5 33.5T318 806q2 24 21 47t46 23q27 0 46-17.5t19-42.5Zm30-240Z' />
              </svg>
            </div> */}
            <div
              className={`chat-bubble ${
                item.role === 'assistant' ? '' : 'bg-blue-500'
              }`}
            >
              {item.message}
            </div>
          </div>
        )
      })}

      <div className='flex flex-col items-center justify-center fixed bottom-0 w-full bg-white p-8'>
        <div className='btn-group m-2 w-[90vw]'>
          <button className='btn btn-active'>Generate Flash Cards</button>
          <button className='btn'>Button</button>
          <button className='btn'>Button</button>
        </div>
        <div className='form-control'>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Send a message…'
              className='input input-bordered w-[90vw]'
            />
            <button className='btn btn-square'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
