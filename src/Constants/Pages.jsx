import Home from "../Pages/Home"
import Services from "../Pages/Services"
import About from "../Pages/About"
import Projects from "../Pages/Projects"
import Contact from "../Pages/Contact"

const pages = [

    {
        name:"home",
        href:"/",
        component:<Home/>
    },
    {
        name:"services",
        href:"/services",
        component:<Services/>
    },
    {
        name:"about",
        href:"/about",
        component:<About/>
    },
    {
        name:"projects",
        href:"/projects",
        component:<Projects/>
    },
    {
        name:"contact",
        href:"/contact",
        component:<Contact/>
    },

]


export default pages