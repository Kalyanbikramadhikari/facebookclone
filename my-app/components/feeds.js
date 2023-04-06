import React from 'react'
import Stories from './stories'
import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';


const profile_data = [
  {
    name:'Bill clinton',
    src: 'https://images.unsplash.com/photo-1580128637411-80206ae868e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlsbCUyMGdhdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
    profile: 'https://images.unsplash.com/photo-1559629819-638a8f0a4303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'

  },
 { 
  name:'Ramesh Poudel',
  src: 'https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  profile:'https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
},
{
name:'Hari Adhikari',
src:'https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
profile:'https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',

},
{
  name: 'Sunita Adhikari',
  src: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  profile:'https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',

},
{
  name:'Rashmee',
  src:'https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  profile:'https://images.unsplash.com/photo-1599457382197-820d65b8bbdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
}


]

const Feeds = () => {
  return (
    <div className='ml-4 lg:ml-0'>
    
      <div className=' flex-grow-0  flex-col lg:h-64 relative  lg:ml-28 mt-3 bg-white rounded-md'>
        
          {/* stories and reels text */}
          <div className='flex  h-14   p-3 rounded-t-md '>
          
            <div className='bg-blue-50 flex-grow px-0 text-blue-500 flex items-center space-x-2 justify-center text-lg border-b-2 border-blue-500'>
              <i class="fa-solid fa-book-open"></i> 
              <span>Stories</span>
            </div>
            <div className='bg-blue-50 flex-grow   text-gray-500 flex items-center space-x-2 justify-center text-lg hover:border-b-2 hover:border-blue-500'>
            <i class="fa-brands fa-playstation"></i>
            <span>Reels</span>
            </div>
          </div>

        {/* stories section */}
          <div className="flex flex-grow-0 p-3  space-x-3 ">
            
            
          {
          profile_data.map((item)=>(
            <Stories name = {item.name} src = {item.src} profile={item.profile}/>
          ))
        }
            
          </div>
          
      </div>

      <div className=' flex-grow-0 p-2 px-3  flex-col h-24 relative flex lg:ml-28 mt-3 bg-white rounded-md'>
        <div className='flex   space-x-3'>
          <img className='h-10 w-10 rounded-full' src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
          <input className='bg-gray-100 px-4 flex grow rounded-full' type="text" placeholder="What's on your mind, Kalyan?" name="" value=""/>
        </div>
        <hr className='mt-2'/>
        <div className='flex items-center justify-center mt-1'>
          <div className='flex grow justify-center space-x-1 items-center '>
          <VideoCameraFrontRoundedIcon className='text-3xl text-red-600'/>
          <span className='hidden lg: inline-flex text-gray-400 text-sm '><b>Live video</b></span>
          </div>
          
          <div className='flex grow justify-center items-center space-x-1 '>
          <PhotoLibraryRoundedIcon className='text-3xl text-green-600'/>
          <span className='hidden lg: inline-flex text-gray-400 text-sm '><b>Photo/video</b></span>

          </div>
          <div className='flex grow justify-center items-center space-x-1 '>
          <EmojiEmotionsOutlinedIcon className='text-3xl text-yellow-500'/>
          <span className='hidden lg: inline-flex text-gray-400 text-sm '><b>Feeling/activity</b></span>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Feeds