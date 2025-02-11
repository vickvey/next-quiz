import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex flex-col lg:flex-row items-center lg:justify-between px-16 text-white/60 font-bold font-monteserrat text-xs lg:text-lg lg:mt-60 mt-36 gap-1'>
      <div>copyright 2025</div>
      <div className='hover:bg-slate-800 hover:text-white/80 p-1 lg:p-2 transition'>
        <Link href={'https://vickvey.github.io/'}>Vivek Kumar</Link>
      </div>
    </footer>
  )
}
