import AnimatedCursor from "react-animated-cursor"

const AnimeCursor = () => {


 
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={60}
            color='225,225,225'
            outerAlpha={1}
            innerScale={1}
            outerScale={2.5}
            outerStyle={{mixBlendMode:"difference"}}
            innerStyle={{mixBlendMode:"difference"}}
            trailingSpeed={15}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                ".clickable",
            ]}
        />
        
        
    )
}

export default AnimeCursor