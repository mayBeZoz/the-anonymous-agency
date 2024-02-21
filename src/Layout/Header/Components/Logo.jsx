import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='h-full'>
            <h1 className='flex h-full justify-center items-end flex-col'>
                
                <Link to="/" className=' text-md  self-start'>
                    the
                </Link>
                
                <Link to="/" className='w-full block text-2xl -mt-3 uppercase'>
                    anonymous
                </Link>
                
                <Link to="/" className='  text-md -mt-3'>
                    agency
                </Link>
            </h1>
        </div>
    )
}

export default Logo