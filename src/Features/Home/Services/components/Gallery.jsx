import React from 'react'
import img1 from "../../../../Assets/Images/About1.png"
import img2 from "../../../../Assets/Images/Codie.jpg"
import img3 from "../../../../Assets/Images/Table.jpg"

import SubTitle from "../../../../UI/SubTitle"
import gsap from 'gsap'

const services = [
    {
        name:"ui / ux experience",
        href:img1,
    },
    {
        name:"Web Development",
        href:img2,
    },
    {
        name:"graphic design",
        href:img3,
    }
]

const Gallery = () => {

    const moveImg = (e) => {
        const imgOrder = e.currentTarget.getAttribute("imgorder")
    
        const x = e.clientX - e.currentTarget.getBoundingClientRect().left
        const y  = e.clientY - e.currentTarget.getBoundingClientRect().top

        gsap.to(`#srv-img-${imgOrder}`,{
            left:x,
            top:y,
            duration:1,
            ease:"power2"
        })
    }

    const activeImg = (e) => {
        const imgOrder = e.currentTarget.getAttribute("imgorder")

        gsap.fromTo(`#srv-img-${imgOrder}`,{
            opacity:0,
            rotate:0
        },{
            opacity:1,
            rotate:25
        })
    }

    const unactiveImg = (e) => {
        const imgOrder = e.currentTarget.getAttribute("imgorder")

        gsap.fromTo(`#srv-img-${imgOrder}`,{
            opacity:1,
            rotate:25
        },{
            opacity:0,
            rotate:0
        })
    }
 

    return (
        <div className=' md:w-1/2 relative z-10 w-full gap-16 flex flex-col'>
            
            {
                services.map((srv,idx) => (
                    <div
                        onMouseEnter={activeImg}
                        onMouseLeave={unactiveImg}
                        imgorder={idx+1}
                        onMouseMove={moveImg}
                        className='flex opacity-50 relative ease-06 hover:opacity-100 gap-5 flex-col' 
                        key={idx}
                    >

                        <SubTitle text={`0${idx + 1}`}/>

                        <p className='text-4xl uppercase'>{srv.name}</p>

                        <img id={`srv-img-${idx+1}`} className='absolute pointer-events-none opacity-0 -translate-x-1/2 -translate-y-1/2 z-[-1] top-0 left-0 h-80 w-44 opacty-0 object-cover' src={srv.href} alt="" />
                    </div>
                ))
            }

        </div>
    )
}

export default Gallery