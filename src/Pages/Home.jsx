import React from 'react'
import Hero from '../Features/Home/Hero/Hero'
import About from '../Features/Home/About/About'
import Services from '../Features/Home/Services/Services'
import Testimonials from '../Features/Home/Testimonials/Testimonials'

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Services/>
            <Testimonials/>
        </div>
    )
}

export default Home