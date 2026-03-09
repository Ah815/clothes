import Approach from '@/components/Approach'
import Collections from '@/components/Collections'
import Hero from '@/components/Hero'
import NewThisWeek from '@/components/NewThisWeek'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <NewThisWeek />
      <Collections />
      <Approach />
    </div>
  )
}

export default page
