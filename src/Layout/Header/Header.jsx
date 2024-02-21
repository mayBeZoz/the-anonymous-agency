import React, { useEffect, useRef } from 'react'
import Logo from './Components/Logo'
import MenuIcon from './Components/MenuIcon'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {

    const header = useRef()

    useEffect(()=>{
        gsap.to(header.current,{
            background:"#000",
            scrollTrigger:{
                scrub:1,
                start:"top+=100",
                end:"+=1",
            }
        })
    },[])

    let lastScroll = 0
    let currScroll = 0

    window.addEventListener("scroll",() => {
        
        currScroll = scrollY

        if (currScroll > lastScroll) {
            gsap.to("header",{
                yPercent:-100
            })
            
        } else {
            gsap.to("header",{
                yPercent:0
            })
        }
 
        lastScroll = currScroll
    })

    return (
        <header ref={header} className='w-full p-2 border- h-[100px] fixed top-0 left-0 z-[100]'>
            <div className='container h-full relative flex justify-between items-center'>
                <Logo/>
                <MenuIcon/>
            </div>
        </header>
    )
}

export default Header