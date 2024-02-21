import React from 'react'
import pages from '../../../Constants/Pages'
import { Link } from 'react-router-dom'

const Anchors = () => {
    return (
        <ul className='w-full flex flex-col gap-2'>

            <h5 className='text-2xl uppercase'>Navigate</h5>

            {
                pages.map((page,idx) => (
                    <li className='w-full opacity-60 text-xl' key={idx} >
                        <Link to={page.href}>{page.name}</Link>
                    </li>
                ))
            }

        </ul>
    )
}

export default Anchors