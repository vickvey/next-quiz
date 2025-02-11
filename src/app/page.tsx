import TagRotation from '@/components/TagRotation'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='px-6 py-40 lg:py-48 flex flex-col lg:justify-center lg:items-center items-start text-[#fff] gap-6'>
      <h1 className='font-bold font-poppins text-5xl lg:text-8xl text-gray-400/60'>
        Quiz App in NextJS
      </h1>
      <TagRotation />
      <div className=' hover:bg-gray-700 hover:bg-transparent hover:rounded-xl hover:transition'>
        <Link href={'/start-quiz'}>
          <p className='italic text-xl font-monteserrat text-blue-100/60 hover:underline hover:bg-gray-800/60 hover:text-white/90 lg:p-2 rounded'>
            Start the Quiz to find out
          </p>
        </Link>
      </div>
    </div>
  )
}
