import React from 'react'

const DirectMsg = () => {
   
    return (
        <div className='w-full flex flex-col gap-5'>
            <p className='text-xl'>send us a meseage</p>

            <div className='flex flex-col gap-3'>

                <input type="text" className='bg-transparent text-xl h-12 border-white border border-solid' />

                <button className='!text-md h-12 w-1/2 !border !rounded-none'>send</button>
            </div>
        </div>
    )
}

export default DirectMsg