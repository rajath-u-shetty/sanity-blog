import Link from 'next/link'
import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid'

const StudioNavbar = (props :any) => {
  return (
    <div>
        <div className='flex justify-between items-center p-5'>
            <Link href="/" className='flex gap-4 items-center text-[#F7AB0A]'>
                <ArrowUturnLeftIcon className="h-6 w-6 mr-2"/>
                 Go to website
            </Link>
        </div>
        {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar