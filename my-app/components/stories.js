import React from 'react'
import StoryCard from './StoryCard'
// const profile_data = [
//   {
//     name:'Bill clinton',
//     src: 'https://images.unsplash.com/photo-1580128637411-80206ae868e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlsbCUyMGdhdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
//     profile: 'https://images.unsplash.com/photo-1559629819-638a8f0a4303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'

//   },
//  { 
//   name:'Ramesh Poudel',
//   src: 'https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
//   profile:'https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
// },
// {
// name:'Hari Adhikari',
// src:'https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
// profile:'https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',

// },
// {
//   name: 'Sunita Adhikari',
//   src: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
//   profile:'https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',

// },
// // {
// //   name:'Rashmee',
// //   src:'https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
// //   profile:'https://images.unsplash.com/photo-1599457382197-820d65b8bbdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
// // }


// ]
const Stories = ({profile , src}) => {
  return (
    <div className='flex   relative  hover:transition-all'>
      <div className=' hidden lg:inline-flex absolute top-1  left-1  b object-cover'>
        <img src={src} alt="" className='h-10 w-10 rounded-full border-2 border-blue-600'/>
      </div>
      <div className='flex  object-cover '>
      
      <img src={profile} alt="" className=' rounded-full border-2 border-blue-400 h-14 w-14 lg:h-44 lg:w-28 space-x-3 object-cover lg:rounded-md '/>
    </div>
      
    </div>
  )
}

export default Stories