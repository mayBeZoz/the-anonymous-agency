import { useEffect, useRef } from 'react'
import heroImg from "../../../../Assets/Images/HomeHero.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/all'


gsap.registerPlugin(ScrollTrigger)

const AnimeImage = () => {

    const image = useRef()

    useEffect(()=>{
        gsap.to(image.current,{
            scale:2,
            opacity:.3,

            scrollTrigger:{
                trigger:"#home-hero",
                scrub:1,
                start:"top top",
                end:"bottom top"
            }
        })
    },[])
    
    return (
        
        <img ref={image} className='absolute w-[300px] sm:right-0 sm:block hidden md:right-1/5 -translate-y-1/2 top-1/2 aspect-square object-contain' src={heroImg} alt="" />

    )
}

export default AnimeImage