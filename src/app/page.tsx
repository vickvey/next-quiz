import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800 h-screen w-screen flex flex-col justify-center items-center text-[#fff] gap-6'>
      <h1 className='font-bold font-poppins text-6xl text-white/80'>
        Quiz App in NextJS
      </h1>
      <p className='text-2xl text-white/50'>
        Are you ready to test your mind?? Are you genius enough to tackle these
        questions??
      </p>
      <div className='p-4 hover:bg-gray-700 hover:bg-transparent hover:rounded-xl hover:transition'>
        <Link href={'/start-quiz'}>
          <p className='italic text-xl font-monteserrat text-blue-100/60 hover:underline'>
            Start the Quiz to find out
          </p>
        </Link>
      </div>
    </div>
  )
}
