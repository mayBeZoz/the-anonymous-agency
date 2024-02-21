import React from 'react'
import HeadingSection from '../UI/HeadingSection'
import ProjectsCardsHolder from "../Features/Projects/ProjectsCardsHolder/ProjectsCardsHolder"
import WorkStepsHolder from '../Features/Projects/WorkSteps/WorkStepsHolder'
import WorkInfos from '../Features/Projects/WorkInfos'

const Projects = () => {
    
    return (
        <div>
            <HeadingSection heading={"Our Projects"} subHeading={"Home > Projects"}/>


            <ProjectsCardsHolder/>

            <WorkStepsHolder/>

            <WorkInfos/>

        </div>
    )
}

export default Projects