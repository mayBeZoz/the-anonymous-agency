import React from 'react'
import ContactFeild from "./components/ContactFeild"
import ContactLocation from "./components/ContactLocation"

const ContactForm = () => {
    
    return (
        <div className='w-full bg-dark-grey'>
            <div className="container py-10 gap-7 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">

                <ContactLocation/>

                <ContactFeild/>

            </div>
        </div>
    )
}

export default ContactForm