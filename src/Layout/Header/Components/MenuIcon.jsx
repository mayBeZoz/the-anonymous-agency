import React, { useEffect, useRef } from 'react'
import { animateMenuOnClose, animateMenuOnOpen } from '../../../Anime/Menu'

const MenuIcon = () => {
    
    const menuIcon = useRef()

    useEffect(()=>{

        menuIcon.current.onclick = () => {
            animateMenuOnOpen()
        }
    })

    return (
        <>
            
            <div ref={menuIcon} className='h-full relative flex justify-center items-center aspect-square'>

                <div id='menu-open-btn' className='w-4/5 clickable border-2 cursor-pointer border-white border-solid rounded-full aspect-square flex justify-center items-center' >

                    <div className='rounded-full clickable bg-white aspect-square h-[15px]'>

                    </div>

                </div>

            </div>

            
        </>
    )
}

export default MenuIcon