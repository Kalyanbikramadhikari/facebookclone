import React from 'react'
import Image from 'next/image'

const StoryCard = ({name, src, profile}) => {
  return (
    <div className='flex  object-cover h-14 w-14 rounded-full lg:rounded lg:h-40 lg:w-24 bg-red-400'>
      <img src={profile} alt="" className='h-40 w-24 space-x-3 object-cover '/>
    </div>
    

  )
}

export default StoryCard