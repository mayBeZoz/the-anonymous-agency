import React, { useEffect, useRef } from 'react'
import img from "../../../../Assets/Images/Codie.jpg"
import gsap from 'gsap'


const activateWorkStep = (e,workSteps) => {
    const target = e.target

    workSteps.forEach(workStep => workStep.classList.remove("active"))
    target.classList.add("active")
}

const moveWorkStepImg = (e,image) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; 

    gsap.to(image,{left:x})
}

const WorkStep = ({name,percent}) => {
    
    const image = useRef()
    const workStep = useRef()

    useEffect(()=>{
        const workSteps = document.querySelectorAll(".work-step")

        workSteps.forEach(workStep => {
            workStep.onmouseenter = (e) => activateWorkStep(e,workSteps)
        })

        workStep.current.onmousemove = (e) => moveWorkStepImg(e,image.current)
    },[])

    return (
        <div ref={workStep} className={`work-step relative w-full  h-[50vh] p-4 md:w-[48%] inline-flex flex-col `}>
            
            <div className='flex-1 flex justify-end'>
                
                <div className='h-full flex items-center flex-col w-[60px]'>
                    
                    <span className='w-full  rounded-full flex justify-center items-center text-xl text-black bg-white aspect-square'>{percent}</span>
                
                    <span className='w-[1px] percent-stick ease-06 bg-white flex-0'></span>
                
                </div>
            
            </div>
            
            <div className='h-[60px] ease-06 step-name relative overflow-hidden flex items-center px-5 uppercase text-2xl w-full border-dashed border-zinc-500 border rounded-full bg-blck'>
                
                <span className='h-full via-zinc-800 -translate-x-full ease-06 w-full absolute top-0 left-0 bg-gradient-to-r from-zinc-400 to-transparent'></span>
            
                <p className='ease-06 relative z-10'>{name}</p>

            </div>
        
            <img ref={image} src={img} className='absolute pointer-events-none -translate-x-1/2 opacity-0 h-[70px] w-3/4 rounded-full object-cover bottom-[-100px]' alt="img" />

        </div>
    )
}

export default WorkStep