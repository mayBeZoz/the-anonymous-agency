import React, { useEffect } from 'react'
import ProjectCard from "./components/ProjectCard"
import projects from "../../../Constants/Projects"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


const animateCards = (tl) => {

    const projectCards = gsap.utils.toArray("#projects-cards-holder > .project-card")

    tl.to(projectCards,{
        xPercent: -100 * (projectCards.length - 1),
        scrollTrigger: {
            trigger:"#projects-section",
            scrub:1,
            pin:true,
            start:"top top",
            end:"+=2000"
        }
    })
}

const HorizontalSlideProjects = () => {
    
    useEffect(()=>{
        const tl = gsap.timeline()

        if (window.innerWidth > 768) {
            animateCards(tl)
        }

        return () => tl.revert()
    },[])

    return (
        <section id='projects-section' className='w-full bg-dark-grey py-20 overflow-hidden md:h-screen'>

            <div className="container gap-7 flex flex-col h-full">

                <h3 className='text-5xl uppercase'>see our work</h3>

                <div id='projects-cards-holder' className='flex w-full items-center flex-col md:flex-row gap-3 md:w-max flex-1'>
                    
                    {
                        projects.map((proj,idx)=> (
                            <ProjectCard name={proj.name} key={idx} img={proj.href}/>
                        ))
                    }
                
                </div>

            </div>

        </section>
    )
    
}

export default HorizontalSlideProjects