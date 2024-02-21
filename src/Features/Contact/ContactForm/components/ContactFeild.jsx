import React from 'react'

const ContactFeild = () => {
    return (
        <div className='w-full p-7 gap-7 bg-zinc-800 h-[80vh] flex flex-col'>

            <h4 className='text-3xl font-bold'>leave a message</h4>

            <div className='flex-1 justify-between w-full flex flex-col'>
                
                <input placeholder='name' type="text" className='h-[60px] focus:border-white border-0 placeholder:text-zinc-500 text-xl placeholder:text-xl placeholder:capitalize border-b-2 border-solid border-zinc-500 bg-transparent w-full' />
                <input placeholder='email' type="email" className='h-[60px] focus:border-white border-0 placeholder:text-zinc-500 text-xl placeholder:text-xl placeholder:capitalize border-b-2 border-solid border-zinc-500 bg-transparent w-full' />
                <textarea placeholder='message' type="text" className='h-[180px] focus:border-white resize-none border-0 placeholder:text-zinc-500 text-xl placeholder:text-xl placeholder:capitalize border-b-2 border-solid border-zinc-500 bg-transparent w-full' />

                <button className=' rounded-none w-fit px-5'>send</button>
            </div>
        </div>
    )
}

export default ContactFeild