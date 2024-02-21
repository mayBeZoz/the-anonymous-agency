import React from 'react'
import WorkStep from './components/WorkStep'
import "../../../Styles/workStepsHolder.css"

const steps = [
    {
        percent:"25%",
        name:"ui design"
    },
    {
        percent:"50%",
        name:"ux design"
    },
    {
        percent:"75%",
        name:"front end"
    },
    {
        percent:"100%",
        name:"back end"
    },
]

const WorkStepsHolder = () => {
    
    return (
        <section className='w-full overflow-hidden bg-dark-grey'>



            <div className="container  bt-[50px] py-[200px]">

                <h2 className='text-5xl uppercase'>our working steps</h2>


                {
                    steps.map((step,idx) => (
                        <WorkStep key={idx} name={step.name} percent={step.percent}/>
                    ))
                }

            </div>

        </section>
    )
}

export default WorkStepsHolder