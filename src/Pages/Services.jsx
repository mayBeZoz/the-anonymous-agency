import React from 'react'
import HeadingSection from '../UI/HeadingSection'
import ServicesHolder from '../Features/Services/ServicesHolder/ServicesHolder'
import ToggleServices from '../Features/Services/ToggleServices/ToggleServices'

const Services = () => {
    return (
        <div>
            
            <HeadingSection heading={"our services"} subHeading={"Home > Services"}/>

            <ServicesHolder/>
        
            <ToggleServices/>
        
        </div>
    )
}

export default Services