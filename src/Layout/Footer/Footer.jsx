import React from 'react'
import Logo from './Components/Logo'
import Discover from './Components/Discover'
import Anchors from './Components/Anchors'
import DirectMsg from './Components/DirectMsg'

const Footer = () => {
    
    return (
        <div className=' bg-dark-grey py-20 w-full'>

            <div className='container grid gap-10 grid-cols-[repeat(auto-fit,minmax(150px,1fr))]'>

                <Logo/>

                <Discover/>

                <Anchors/>

                <DirectMsg/>

            </div>
            
        </div>
    )
}

export default Footer