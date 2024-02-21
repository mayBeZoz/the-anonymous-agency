import React from 'react'
import img from "../../Assets/Images/Codie.jpg"

const WorkInfos = () => {
    
    return (
        <div className='w-full bg-dark-grey pb-[70px] pt-[150px]'>

            <div className="container overflow-hidden relative rounded-xl">

                <div className='absolute z-20 w-full h-full bg-black opacity-50'/>
                <img src={img} className='w-full absolute h-full object-cover z-10' alt="img" />

                <div className='relative justify-between p-10 flex flex-col min-h-[400px] z-30'>

                    <div className='flex items-center gap-3 md:flex-row flex-col'>
                        <h3 className='text-5xl font-bold flex-1'>ready to work with us ?</h3>
                        <button className='p-5'>lets work</button>
                    </div>

                    <p className='text-3xl'>call : +103132544334</p>
                    <p className='text-3xl'>email : dummy@dummy.dummy</p>
                    <p className='text-3xl'>instagram : the_anonymous_agency</p>

                </div>

            </div>

        </div>
    )
}

export default WorkInfos