
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


import TestimonialSlide from "./components/TestimonialSlide"
import testimonials from '../../../Constants/Testimonials';




const Testimonials = () => {
    
   

    return (
        <section className='h-screen mt-11 w-full'>
            <div className="container h-full">

                <h3 className='sm:text-5xl text-4xl uppercase'> Testimonials</h3>
            
                <Swiper
                    loop={true}
                >
                    
                    {
                        testimonials.map((slide,idx) => (
                            <SwiperSlide key={idx}>
                                <TestimonialSlide name={slide.name} job={slide.job} img={slide.img}/>
                            </SwiperSlide>
                        ))
                    }               
            
                </Swiper>

            </div>
        </section>
    )
}

export default Testimonials