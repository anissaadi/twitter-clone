import './globals.css'
import { Inter } from 'next/font/google'

import {FaTwitter} from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {PiBellRinging} from 'react-icons/pi'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import {RiFileList2Line} from "react-icons/ri"
import {BsFillBookmarkFill} from 'react-icons/bs'
import {BsFillPeopleFill} from 'react-icons/bs'
import {LuVerified} from 'react-icons/lu'
import {CgProfile} from 'react-icons/cg'
import {CiCircleMore} from 'react-icons/ci'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Twitter by Anis',
  description: 'Twitter clone by Anis Saadi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 h-full w-full mx-auto` } >
        <div className='flex h-full w-[1200px] align-center mx-auto'>
          <header className='flex flex-col gap-6 justify-start align-start w-[260px] p-3 relative'>
            <div className='flex gap-3 align-start text-white'>
              <FaTwitter size="30" />
            </div>
            <br/>


            <div className='flex gap-3 align-center text-white pl-2'>
              <AiOutlineHome size="30" />
              <h2 className='text-md text-sm'>Home</h2>
            </div>
          

            <div className='flex gap-3 align-center text-white pl-2'>
              <BsSearch size="30" />
              <h2 className='text-md text-sm bold'>Explore</h2>
            </div>


            <div className='flex gap-3 align-center text-white pl-2'>
              <PiBellRinging size="30" />
              <h2 className="text-md text-sm bold">Notification</h2>
            </div>

            <div className='flex gap-3 align-center text-white pl-2'>
              <BsFillEnvelopeFill size="30" className='text-white'/>
              <h2 className="text-md text-sm bold">Messages</h2>
            </div>

             <div className='flex gap-3 align-center text-white pl-2'>
              <RiFileList2Line size="30" className='text-white'/>
              <h2 className="text-md text-sm bold">List</h2>
            </div>

             <div className='flex gap-3 align-center text-white pl-2'>
              <BsFillBookmarkFill size="30" className='text-white'/>
              <h2 className="text-md text-sm bold">Bookmarks</h2>
            </div>

             <div className='flex gap-3 align-center text-white pl-2'>
              <BsFillPeopleFill size="30" className='text-white'/>
              <h2 className="text-md text-sm bold">Communities</h2>
            </div>

             <div className='flex gap-3 align-center text-white pl-2'>
              <LuVerified size="30" className='text-white'/>
              <h2 className="text-md text-sm bold">Verified</h2>
            </div>


            <div className='flex gap-3 align-center text-white pl-2'>
              <CgProfile size="30" className='text-white'/>
              <h2 className="text-md text-sm bold">Profile</h2>
            </div>


            <div className='flex gap-3 align-center text-white pl-2'>
              <CiCircleMore size="30" className='text-white'/>
              <h2 className="text-md text-sm bold">More</h2>
            </div>


            <button className='w-full rounded-lg bg-blue-600 text-white text-lg h-12 cursor-pointer'>Post</button>



            <div className='justify-self-end w-[60%] h-16 flex justify-between align-center absolute bottom-0'>
                <div className='flex gap-2 align-center'>
                     <CgProfile size="30" className='text-white'/>
                     <div className='flex flex-col align-center'>
                      <h3 className='text-xl font-bold text-white'>Anis Saadi</h3>
                      <p className='text-sm text-gray-400'>anissaadi2002@gmail.com</p>
                     </div>
                </div>
                <div> <CiCircleMore size="30" className='text-white'/> </div>
            </div>

          </header>
        {children}
        </div>
        </body>
    </html>
  )
}
