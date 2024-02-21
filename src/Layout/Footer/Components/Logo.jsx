import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    
    const copyrightDate = new Date()

    return (

        <div className='w-full '>
            
            <div className='h-[100px] w-[181.2px]'>
                <h1 className='flex h-full justify-center items-end flex-col'>
                
                    <Link to="/" className=' text-md  self-start'>
                        the
                    </Link>
                    
                    <Link to="/" className='w-full block text-3xl -mt-3 uppercase'>
                        anonymous
                    </Link>
                    
                    <Link to="/" className='  text-md -mt-3'>
                        agency
                    </Link>
                </h1>
            </div>

            <p className='text-md opacity-50 '>
                all copyrights are preserved  

                {
                    " © " + copyrightDate.getFullYear()
                }
            </p>

        </div>

   
    )
}

export default Logo