import Link from "next/link"

export default function Header() {
    return (
        <div className="flex justify-evenly p-4 bg-sky-500 text-white sm:hover:bg-sky-400 sm:hover:text-amber-100">
            <div className="quiz-icon">
                quiz-logo-here
            </div>
            <ul className="flex gap-x-10 font-thin text-2xl">
                <li key={'home'}><Link href={'/'}>Home</Link></li>
                <li key={'how-to-play'}><Link href={'/how-to-play'}>How to Play</Link></li>
                <li key={'about-me'}><Link href={'/about-me'}>AboutMe</Link></li>
            </ul>
        </div>
    )
}