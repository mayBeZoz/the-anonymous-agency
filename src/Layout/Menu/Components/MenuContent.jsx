import React from 'react'
import pages from '../../../Constants/Pages'
import { Link } from 'react-router-dom'
import closeIcon from "../../../Assets/Icons/close.svg"
import { animateMenuOnClose } from '../../../Anime/Menu'

const MenuContent = () => {
    
    return (
        <div id='menu-content' className='w-full opacity-0 z-[200] pt-[100px] top-0 left-0 h-screen hidden fixed'>

            <div className="contianer h-full">
                <ul className='flex flex-col w-full h-full'>
                    {
                        pages.map((page,idx) => (
                            <li className='flex-1 flex justify-center overflow-hidden items-center text-5xl uppercase' key={idx}>
                                <Link onClick={animateMenuOnClose} className='menu-item' to={page.href}>{page.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            
            <img id='menu-close-btn' onClick={animateMenuOnClose} src={closeIcon} className='clickable absolute top-[50px] right-[50px] w-[50px] aspect-square' alt="" />
                
        </div>
    )
}

export default MenuContent