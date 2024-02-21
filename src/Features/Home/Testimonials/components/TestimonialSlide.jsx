import React from 'react'

const TestimonialSlide = ({img,name,job}) => {



    return (
        <div className='h-[70%] gap-20 w-full items-center sm:flex-row flex-col flex'>

            <img src={img} className='sm:w-1/3 sm:block hidden aspect-square object-contain' alt="image"/>

            <div className='w-full relative flex flex-col sm:w-2/3'>

                <div className='h-[100px] aspect-square mt-[-10%]'>
                    <span className='text-[15em]'>''</span>
                </div>

                <p className='text-xl sm:text-2xl mt-[17%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum delectus exercitationem tenetur eum? Totam nemo labore beatae tempore fuga similique, neque iure odio minus quia saepe nobis recusandae possimus laborum!</p>
                 
                <h5 className='mt-5 text-4xl uppercase'>{name}</h5>
                <span className='text-md opacity-70 mt-2'>{job}</span>

            </div>

        </div>
    )
}

export default TestimonialSlide