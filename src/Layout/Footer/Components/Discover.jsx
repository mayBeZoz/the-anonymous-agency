import React from 'react'
import socials from "../../../Constants/Socials"
import { Link } from 'react-router-dom'

const Discover = () => {
    
    return (
        <ul className='w-full flex flex-col gap-2'>

            <h5 className='text-2xl uppercase'>discover</h5>

            {
                socials.map((social,idx) => (
                    <li key={idx} className='w-full opacity-60 text-xl'>
                        <Link to={social.href}>{social.name}</Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Discover