import React from 'react'
import HeadingSection from "../UI/HeadingSection"
import ContactForm from '../Features/Contact/ContactForm/ContactForm'

const Contact = () => {
    
    return (
        <div className='w-full'>
            
            <HeadingSection heading={"contact us"} subHeading={"Home > contact"}/>

            <ContactForm/>

        </div>
    )
}

export default Contact