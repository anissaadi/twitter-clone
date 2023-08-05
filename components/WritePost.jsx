import { IconBase } from 'react-icons'
import {CgProfile} from 'react-icons/cg'

export default function WritePost() {
  return (
    <div className='mt-10'>
        <div className='flex gap-5 align-center'>
            <CgProfile size="30"/>
            <form action="" method="post">
              <input type="text" className='w-full bg-slate-900 text-white text-lg rounded-lg border-none outline-none' placeholder="what's happening ?"/>
            </form>
        </div>
        <div>
            <IconBase/>
        </div>
    </div>
  )
}
