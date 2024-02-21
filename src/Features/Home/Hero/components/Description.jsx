import React from 'react'

const Description = () => {
    return (
        <div className='flex-1 flex flex-col gap-20 w-full sm:w-2/3'>
                            
            <p className='text-xl opacity-70'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam possimus cupiditate dicta aliquid esse perspiciatis adipisci sit quas voluptates nihil.
            </p>

            <div className='flex gap-5'>
                <div className='flex-1'>
                    <p className='text-xl mb-3'>more than 2k clintes</p>
                    <p className='text-sm mb-5 opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, architecto.</p>
                </div>
                <div className='flex-1'>
                    <p className='text-xl mb-3'>more than 1000 project</p>
                    <p className='text-sm mb-5 opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, architecto.</p>
                </div>
            </div>
        
        </div>
    )
}

export default Description