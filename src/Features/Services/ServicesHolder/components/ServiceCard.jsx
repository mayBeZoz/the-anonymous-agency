import React from 'react'
import SubTitle from '../../../../UI/SubTitle'

const ServiceCard = ({service,index}) => {
    
    
    return (
        <div className=' p-6 bg-dark-grey border-4 border-zinc-800 self-stretch min-h-[350px]'>
            <SubTitle text={`0${index+1}`}/>

            <h5 className='md:text-4xl text-3xl my-4 uppercase'>{service.name}</h5>

            <ul className='flex gap-4 ml-4 flex-col'>

                {
                    service.words.map((word,idx) => (
                        <li className='md:text-xl text-md' key={idx}> - {word} </li>
                    ))
                }

            </ul>

        </div>
    )
}

export default ServiceCard