import Head from 'next/head'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import { Feed } from '@mui/icons-material'
import Feeds from '../../components/feeds'
import RightSide from '../../components/rightside'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    < div className='bg-gray-100 h-auto '>
      <Head>
        <title>Facebook </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"  />
      </Head>
      
        {/* navbar */}
      
      <Navbar/>

      <div className='flex h-full relative top-10 '>
        <div className=' '>
          <Sidebar/>
        </div>
        <div className=' flex grow justify-start  bg-gray-100 mb-2'>
          {/* bg-green-100 */}
          <Feeds/>
          
        </div>

        {/* sponsored and online section */}
        <div className='flex hidden flex-col md:inline-flex mt-2 ml-20'>
          <RightSide/>
        </div>
      </div>      
        
        
    </div>
  )
}
