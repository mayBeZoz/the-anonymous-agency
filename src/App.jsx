import { BrowserRouter, Route, Routes } from "react-router-dom"
import pages from "./Constants/Pages"
import Header from "./Layout/Header/Header"
import AnimeCursor from "./Layout/AnimeCursor"
import MainBG from "./Layout/MainBG"
import { useEffect } from "react"
import Lenis from '@studio-freight/lenis'
import Menu from "./Layout/Menu/Menu"
import Footer from "./Layout/Footer/Footer"

function App() {



    useEffect(()=>{
        const lenis = new Lenis()
        
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    },[])

    return (
        <BrowserRouter>

            <AnimeCursor/>
            <Header/>
            <MainBG/>
            <Menu/>

            <Routes>


              {
                  pages.map((page,idx) =>(
                      <Route
                          path={page.href}
                          element={page.component}
                          key={idx}
                      />
                  ))
              }
                

            </Routes>

            <Footer/>

        </BrowserRouter>
    )
}

export default App
