import React from 'react'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';


const Sidebar = () => {
  return (
    <div className='flex flex-col ' >
        <div className='flex  items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer '>
        <img className='h-8 w-8 rounded-full' src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
            <p className=" hidden md:inline-flex">Kalyan Bikram Adhikari</p>
        </div>
        <div className='flex  items-center  space-x-4 p-3 hover:bg-gray-200 cursor-pointer px-2 '>
            
            <i class="fa-solid fa-user-group ml-1"></i>
            <p className=" hidden md:inline-flex">Friends</p>
            
        </div>
        <div className='flex items-center space-x-4 ml-2 p-3 hover:bg-gray-200 cursor-pointer px-2 '>
            <i className='far fa-clock'></i>
            <p className=" hidden md:inline-flex">Most Recent</p>
            
        </div>
        <div className='flex items-center space-x-3 p-3 hover:bg-gray-200 cursor-pointer  '>
        <GroupsRoundedIcon/>
            <p className=" hidden md:inline-flex">Groups</p>
        </div>
        <div className='flex items-center space-x-4 ml-1 p-3 hover:bg-gray-200 cursor-pointer '>
         <i class="fa-sharp fa-solid fa-store"></i>
            <p className=" hidden md:inline-flex">Marketplace</p>
        </div>
        <div className='flex items-center space-x-4 p-3 hover:bg-gray-200 cursor-pointer ml-1 '>
        <i class="fa-solid fa-tv"></i>
            <p className=" hidden md:inline-flex">Watch</p>
        </div>
        <div className='flex  items-center space-x-4 p-3 hover:bg-gray-200 cursor-pointer ml-2 '>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p className=" hidden md:inline-flex">Memories</p>
        </div>
        <div className='flex items-center space-x-5 ml-2 p-3 hover:bg-gray-200 cursor-pointer '>
            <i class="fa-solid fa-bookmark"></i>
            <p className=" hidden md:inline-flex">Saved</p>
        </div>
        <div className='flex items-center space-x-3 ml-1 p-3 hover:bg-gray-200 cursor-pointer '>
            <i class="fa-solid fa-angle-down rounded-full bg-gray-300 p-1 flex items-center"></i>
            <p className=" hidden md:inline-flex">See more</p>
        </div>
    </div>
  )
}

export default Sidebar