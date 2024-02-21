import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import services from "../../../Constants/services"
import ServiceCard from './components/ServiceCard';

const ServicesHolder = () => {
    
    
    
    return (
        <section className=' w-full my-11'>
            
            <div className='container'>
                <Swiper 
                    spaceBetween={40}
                    slidesPerView={window.innerWidth >= 700 ? 2 :1}
                    loop={true}
                >

                    {
                        services.map((srv,idx) => (
                            <SwiperSlide key={idx}>
                                <ServiceCard index={idx} service={srv}/>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>


        </section>
    )
}

export default ServicesHolder