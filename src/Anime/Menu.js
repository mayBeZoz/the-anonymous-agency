import gsap from "gsap"


const enableMenuBtns = (tl) => {
    tl.set("#menu-close-btn",{
        pointerEvents:"initial"
    })

    tl.set("#menu-close-btn",{
        pointerEvents:"initial"
    })
}



const disableMenuBtns = (tl) => {
    tl.set("#menu-close-btn",{
        pointerEvents:"none"
    })

    tl.set("#menu-close-btn",{
        pointerEvents:"none"
    })
}

export const animateMenuOnOpen = () => {
    
    const tl = gsap.timeline()
    
    disableMenuBtns(tl)

    tl.to("#menu-overlay",{
        scale:200,
        duration:2,
        ease:"expo",

    })
    
    tl.to("#menu-content",{
        display:"block",
        opacity:1,
    })

    tl.fromTo(".menu-item",{yPercent:200,},{yPercent:0,})

    enableMenuBtns(tl)

}



export const animateMenuOnClose = () => {

    const tl = gsap.timeline()

    disableMenuBtns(tl)


    tl.fromTo(".menu-item",{yPercent:0},{yPercent:200})

    tl.to("#menu-content",{
        opacity:0,
        display:"none",
    })

    
    tl.to("#menu-overlay",{
        scale:0,
        duration:1.5,
        ease:"expo"
    })

    enableMenuBtns(tl)

}
