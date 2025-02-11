'use client'

import { useEffect, useState } from 'react'

export default function TagRotation() {
  const [tagIndex, setTagIndex] = useState(0)
  const excitingTexts = [
    'Are you ready to test your mind ?',
    'Are you genius enough to tackle these questions ??',
    'Guess the topic of the quiz ??',
    'Excited about playing a fun quiz game ??!',
  ]

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTagIndex(prev => (prev + 1) % excitingTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [excitingTexts.length])

  return (
    <p className='text-base lg:text-2xl text-white/50 font-sansita'>
      {excitingTexts[tagIndex]}
    </p>
  )
}
