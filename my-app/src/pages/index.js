import Head from 'next/head'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"  />
      </Head>
      
        {/* navbar */}
      
      <Navbar/>

      {/* sidebar */}
      <Sidebar/>
      
    </>
  )
}
