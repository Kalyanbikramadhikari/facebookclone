import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Posts = () => {
  return (
    <div className=''>
        
        
        <div className=' bg-white mb-4 rounded-lg'>
            
            {/* name  profile photo and time */}
            <div className="flex pt-2 px-3  space-x-2">
                <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1609609830354-8f615d61b9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpdmF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60 " alt=""/>
                <div className='flex-col '>
                <p className='  text-xs'><b>Shiva Bholenath</b></p>
                <span className='text-xs text-gray-400  mt-0'>1hr</span>
                </div>
            


            </div>
            {/* image */}
            <div className='flex-col mt-2'>
                <span className='px-3 '>Doing what I love doing. ❤️❤️</span>
                <img className='w-full h-96 object-cover' src="https://images.unsplash.com/photo-1642774667024-e9e2f37914d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hpdmF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            </div>
            <hr className='black mt-2'/>
            {/* like comment and share */}
            <div className="flex  pb-2 mt-2">
                <div className='flex grow items-center justify-center space-x-1 md:space-x-2'>
                <i class="fa-regular fa-thumbs-up"></i>
                <span>Like</span>
                </div>

                <div className='flex grow items-center justify-center space-x-1 md:space-x-2'>
                    <ChatBubbleOutlineIcon/>
                    <span>Comment</span>
                </div>

                <div className='flex grow items-center justify-center space-x-1 md:space-x-2'>
                <i class="fa-solid fa-share"></i>
                <span>Share</span>
                </div>
            </div>
            <hr className='black pb-2'/>

            {/* comment section */}

            <div className="flex items-center space-x-1 md:space-x-2 ml-2 mr-2">
                <img className='w-10 h-10 object-cover rounded-full' src="https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                <div className="flex items-center space-x-1 md:space-x-2 bg-gray-200 rounded-full p-1 pl-2">
                    <span className='text-blue-700 text-sm font-semibold'>John Doe</span>
                    <span className='text-sm'>Jay Bhole Nath. Always bless me.🙏🙏</span>
                </div>
                
            </div>

            <div className="div text-blue-500  ml-16 text-xs font-medium space-x-2 flex ">
                <span>Like</span>
                <span>Reply</span>
                <span>Share</span>
                <span className='text-gray-500'>Just now </span>
            </div>  

            <div className="flex space items-center md:space-x-2 ml-2 mr-2">
                <img className='h-10 w-10 object-cover rounded-full' src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                <div className="flex grow ">
                    <input className='rounded-full outline-none  h-8 flex grow justify-center bg-gray-200 px-2' type="text" name="" value="" placeholder='Write a comment'/>
                </div>
            </div>          
        </div>

        <div className=' bg-white mb-4 rounded-lg'>
            
        
            <div className="flex pt-2 px-3  space-x-2">
                <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                <div className='flex-col '>
                <p className='  text-xs'><b>Angela Shahi</b></p>
                <span className='text-xs text-gray-400  mt-0'>1d</span>
                </div>
            


            </div>
            <div className='flex-col mt-2 pb-4'>
                <span className='px-3 '>Mountain climbing? It flows in my DNA now.</span>
                <img className='w-full h-96 object-cover' src="https://images.unsplash.com/photo-1599457382197-820d65b8bbdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            </div>

            <hr className='black mt-2'/>
            {/* like comment and share */}
            <div className="flex  pb-2 mt-2">
                <div className='flex grow items-center justify-center space-x-1 md:space-x-2'>
                <i class="fa-regular fa-thumbs-up"></i>
                <span>Like</span>
                </div>

                <div className='flex grow items-center justify-center space-x-1 md:space-x-2'>
                    <ChatBubbleOutlineIcon/>
                    <span>Comment</span>
                </div>

                <div className='flex grow items-center justify-center space-x-1 md:space-x-2'>
                <i class="fa-solid fa-share"></i>
                <span>Share</span>
                </div>
            </div>
            <hr className='black pb-2'/>

            {/* comment section */}

            <div className="flex items-center space-x-1 xl:space-x-2 ml-2 mr-2">
                <img className='w-10 h-10 object-cover rounded-full' src="https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                <div className="flex items-center space-x-1 xl:space-x-2 bg-gray-200 rounded-full p-1 pl-2">
                    <span className='text-blue-700 text-sm font-semibold'>Selena Khadka</span>
                    <span className='text-sm'>U love yr passion and I love u seeing what u love doing.❤️❤️</span>
                </div>
                
            </div>

            <div className="div text-blue-500  ml-16 text-xs font-medium space-x-2 flex ">
                <span>Like</span>
                <span>Reply</span>
                <span>Share</span>
                <span className='text-gray-500'>Just now </span>
            </div>  

            <div className="flex space items-center md:space-x-2 ml-2 mr-2">
                <img className='h-10 w-10 object-cover rounded-full' src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                <div className="flex grow ">
                    <input className='rounded-full outline-none  h-8 flex grow justify-center bg-gray-200 px-2' type="text" name="" value="" placeholder='Write a comment'/>
                </div>
            </div>          
        </div>
        
    </div>
  )
}

export default Posts