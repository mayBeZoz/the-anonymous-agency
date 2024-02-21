import React from 'react'

const ProjectCard = ({name,img}) => {
    return (
        <div className='project-card items-center justify-between flex flex-col w-full md:w-[300px] px-2 h-[400px] md:h-full border-x border-zinc-600'>
            <img src={img} className='w-[300px] md:w-full object-cover aspect-square' alt="img" />
        
            <h2 className='text-3xl font-bold uppercase'>{name}</h2>

        </div>
    )
}

export default ProjectCard