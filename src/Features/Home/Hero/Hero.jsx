import Description from "./components/Description"
import Title from "./components/Title"
import AnimeImage from './components/AnimeImage'


const Hero = () => {
    


    return (

        <section id='home-hero' className='w-full !pt-[100px] relative overflow-hidden'>
            
            <div className='container'>
                <div className='pt-[18%] relative z-10 gap-5 flex flex-col'>
                    
                    <Title/>

                    <Description/>
                

                </div>
            </div>

            <AnimeImage/>
        
        </section>
        
    )
}

export default Hero