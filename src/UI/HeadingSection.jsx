import React from 'react'
import SubTitle from './SubTitle'

const HeadingSection = ({heading,subHeading}) => {
    
    return (
        <section className='w-full pb-8 pt-[100px]'>
            
            <div className="container justify-center items-center min-h-[50vh] flex md:flex-row flex-col gap-5">

                <div className='flex-col w-full flex-1'>
                    <h2 className='text-5xl mb-9 uppercase'>{heading}</h2>

                    <SubTitle text={subHeading}/>
                </div>

                <p className='flex-1 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil maxime quibusdam cumque possimus voluptas distinctio laboriosam fuga sapiente expedita nostrum, ad velit earum dolores dolorum ut? Veniam nulla eum cum?</p>

            </div>
        
        </section>
    )
}

export default HeadingSection