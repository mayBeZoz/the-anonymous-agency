import React from 'react'
import SubTitle from '../../../UI/SubTitle'
import services from '../../../Constants/services'
import SrvBox from './components/SrvBox'

const ToggleServices = () => {
    
    return (
        <section className='w-full bg-dark-grey pt-10 mt-32'>
            <div className="container">
            
                <div className='w-full flex flex-col items-center'>
                    <SubTitle text={"UX Process"}/>

                    <h3 className='text-6xl font-bold text-center my-4'>working ux process</h3>
                
                </div>
            

                <div className='flex mt-10 border-t border-zinc-700 flex-col w-full'>
                    {
                        services.map((srv,idx) => (
                            <SrvBox service={srv} idx={idx} key={idx}/>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default ToggleServices