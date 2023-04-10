import React from 'react'
import Image from 'next/image'
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Navbar = () => {
  return (
    <div className='  px-2 flex shadow-md fixed w-full bg-white z-50' >
        {/* left */}
        <div className="flex space-x-2 ">
          <div className=' flex cursor-pointer '>
            <i className="fa-brands fa-facebook text-4xl text-blue-600"></i>
          </div>
         
          <div className="flex items-center p-2 space-x-1 rounded-3xl bg-gray-100 hidden sm:inline-flex">
            <i class="fa-sharp fa-solid fa-magnifying-glass text-gray-400 "></i>
            <input className='hidden md:inline-flex bg-transparent outline-none ' type="text" placeholder='Search Facebook' />
          </div>
        </div>

        {/* middle */}
        <div className='flex text-xl items-center justify-center grow shrink-0 p-0 hover:cursor-pointer '>
          <div className='text-blue-500 border-b-2 border-b-blue-400 px-4  lg:px-10 m-0 flex hover:border-b-2 border-b-blue-400 hover:text-blue-500'>
          <i class="fa-solid fa-house  text-2xl"></i>

          </div>
          <div className='text-gray-400 px-4  lg:px-10 flex hover:border-b-2 border-b-blue-400 hover:text-blue-500'>
          <i class="fa-sharp fa-solid fa-tv text-2xl"></i>

          </div>
          <div className='text-gray-400 px-4  lg:px-10 flex hover:border-b-2 border-b-blue-400 hover:text-blue-500 '>
          <i class="fa-sharp fa-solid fa-store text-2xl"></i>

          </div>
          <div className='text-gray-400 px-4  lg:px-10 flex hover:border-b-2 hover:border-b-blue-400 hover:text-blue-500 '>
          <i class="fa-solid fa-users text-2xl"></i>

          </div>
          <div className='text-gray-400 px-4  lg:px-10 flex hover:border-b-2 hover:border-b-blue-400 hover:text-blue-500'>
          <i class="fa-solid fa-gamepad text-2xl"></i>
          </div>
        </div>
        {/* right */}
        <div className='flex text-xl lg:basis-1/4 items-center  justify-end lg:px-3 sm:space-x-2 text-gray-500 hover:cursor-pointer'>
          {/*  bg-yellow-100 */}
        <p className='text-black inline-flex'>Kalyan <span className='hidden lg:inline-flex'>Bikram</span> </p>
          <div>
        <AppsRoundedIcon  className='hidden lg:inline-flex text-3xl flex  rounded-full px-1 bg-gray-200'/>

          </div>
          <div>
          <i class="hidden lg:inline-flex fa-brands fa-facebook-messenger text-2xl px-1 rounded-full bg-gray-200"></i>

          </div>
          <div>
          <i class="hidden lg:inline-flex fa-solid fa-bell text-2xl px-1 rounded-full bg-gray-200"></i>

          </div>
          <div className='flex items-end'>
          <i class=" hidden lg:inline-flex  fa-solid fa-angle-down text-2xl px-1.5  rounded-full bg-gray-200"></i>
          </div>
      
        </div>
    </div>

  )
}

export default Navbar