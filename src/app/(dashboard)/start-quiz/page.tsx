'use client'

import { useState } from 'react'

export default function StartQuizPage() {
  const [score, setScore] = useState(0)
  return (
    <div className='p-48'>
      <h1 className='text-5xl'>Score: {score}</h1>
    </div>
  )
}
