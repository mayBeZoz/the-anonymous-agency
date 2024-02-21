import React from 'react'
import SubTitle from '../../../../UI/SubTitle'


const skills = [
    {
        name:"JavaScript",
        percent:"90",
    },
        {
        name:"Redux JS",
        percent:"75",
    },
    {
        name:"React JS",
        percent:"95",
    },
    {
        name:"GSAP",
        percent:"70",
    },
 
    
    
]

const SkillsHolder = () => {
    
    return (
        <div className='w-full md:w-1/2 md:min-h-screen flex flex-col'>

            <SubTitle text={"welcome"}/>

            <h3 className='text-3xl mt-8 sm:text-5xl mb-12 font-extrabold '>we are an anonymous digital agency</h3>

            <p className=' text-md '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, beatae quidem. Cupiditate a mollitia porro, error quaerat voluptatem perferendis minus deserunt voluptate nihil libero dolor molestias dolorum magnam fuga aut?</p>

            <div className=' mt-16 flex flex-col gap-5 w-full'>
                
                {
                    skills.map((skill,idx) => (
                        <div key={idx} className='w-full flex flex-col'>
                            <p className='text-2xl mb-3'>{skill.name}</p>
        
                            <div className='w-full bg-zinc-700 h-3 '>
                                <span className={`  w-[${skill.percent}%] block bg-slate-100 h-full`}></span>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default SkillsHolder