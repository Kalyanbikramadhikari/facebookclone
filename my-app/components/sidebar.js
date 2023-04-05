import React from 'react'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';


const Sidebar = () => {
  return (
    <div className='flex flex-col bg-gray-100 relative top-14'>
        <div className='flex  items-center space-x-3 p-3 '>
            <PersonRoundedIcon/>
            <p>Kalyan Bikram Adhikari</p>
        </div>
        <div className='flex  items-center space-x-4 p-3 px-2 '>
            
            <i class="fa-solid fa-user-group ml-1"></i>
            <p>Friends</p>
            
        </div>
        <div className='flex items-center space-x-4 ml-2 p-3 px-2 '>
            <i className='far fa-clock'></i>
            <p>Most Recent</p>
            
        </div>
        <div className='flex items-center space-x-3 p-3  '>
        <GroupsRoundedIcon/>
            <p>Groups</p>
        </div>
        <div className='flex items-center space-x-4 ml-1 p-3 '>
         <i class="fa-sharp fa-solid fa-store"></i>
            <p>Marketplace</p>
        </div>
        <div className='flex items-center space-x-4 p-3 ml-1 '>
        <i class="fa-solid fa-tv"></i>
            <p>Watch</p>
        </div>
        <div className='flex  items-center space-x-4 p-3 ml-2 '>
            <i class="fa-solid fa-clock-rotate-left"></i>
            <p>Memories</p>
        </div>
        <div className='flex items-center space-x-5 ml-2 p-3 '>
            <i class="fa-solid fa-bookmark"></i>
            <p>Saved</p>
        </div>
        <div className='flex items-center space-x-3 ml-1 p-3 '>
            <i class="fa-solid fa-angle-down rounded-full bg-gray-300 p-1 flex items-center"></i>
            <p>See more</p>
        </div>
    </div>
  )
}

export default Sidebar