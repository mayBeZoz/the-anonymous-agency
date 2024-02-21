import React from 'react'

import SkillsHolder from './components/SkillsHolder'
import ImgsHolder from './components/ImgsHolder'

const About = () => {
    
    
    
    return (
        <section className='bg-dark-grey'>

            <div className='container gap-8 flex md:flex-row flex-col py-24 '>

                <ImgsHolder/>

                <SkillsHolder/>

            </div>

        </section>

    )
}

export default About