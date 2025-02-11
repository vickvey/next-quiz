import Link from 'next/link'

export default function Header() {
  return (
    <div className='bg-gradient-to-r from-slate-700 via-gray-700 to-slate-700 bg-opacity-5 px-4 py-3 lg:px-16 lg:py-4 flex justify-between  lg:text-2xl text-base'>
      <div className='p-2 font-bold font-sansita text-white/50 hover:text-white/80 transition cursor-pointer'>
        <Link href={'/'}>Quiz App</Link>
      </div>
      <ul className='flex lg:gap-12 gap-2 text-white/40'>
        <li className='p-2 hover:bg-slate-600 hover:text-white/80 bg-opacity-10 transition  cursor-pointer'>
          Home
        </li>
        <li className='p-2 hover:bg-slate-600 hover:text-white/80 bg-opacity-10 transition cursor-pointer'>
          About Us
        </li>
      </ul>
    </div>
  )
}
