import React from 'react'
import Gallery from './components/Gallery'
import Infos from './components/Infos'

const Services = () => {
    return (
        <section className='w-full overflow-hidden'>
            
            <div className='flex py-16 gap-10 container md:flex-row flex-col'>
                <Infos/>
                <Gallery/>
            </div>


        </section>
    )
}

export default Services