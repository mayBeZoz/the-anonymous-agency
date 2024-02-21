import React from 'react'


import img1 from "../../../../Assets/Images/About1.png"
import img2 from "../../../../Assets/Images/About2.png"

const ImgsHolder = () => {
    return (
        
        <div className='w-full md:h-screen md:w-1/2 h-96 relative'>

            <img src={img1} className='w-4/5 object-cover h-4/5 block absolute top-0 left-0' alt="" />
            <img src={img2} className='w-4/5 object-cover h-4/5 block absolute bottom-0 right-0' alt="" />

        </div>
    )
}

export default ImgsHolder