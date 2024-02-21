import React from 'react'
import HeadingSection from "../UI/HeadingSection"
import AboutSection from "../Features/Home/About/About"
import Testilmonials from "../Features/Home/Testimonials/Testimonials"

const About = () => {
    
    return (
        <div className='w-full'>
            
            <HeadingSection heading={"about us"} subHeading={"Home > about"}/>

            <AboutSection/>
            <Testilmonials/>

        </div>
    )
}

export default About