
import React from 'react'
import Shades from '/img/elements/shade.webp'
import Brief from '../components/Brief'
import Intro from '../components/Intro'
import Video from '../components/Video'
import Focus from '../components/Focus'
import Clients from '../components/Clients'
import Started from '../components/Started'

const About = () => {
    return (
        <>
            <div className='sm:pt-36 pt-28 sm:pb-20 pb-12 relative overflow-hidden'>
                <div className="sm:h-[900px] h-[600px] sm:w-[900px] w-[600px] absolute left-0 top-0 right-0 mx-auto">
                    <img className="h-full w-full" src={Shades} alt="shades"/>
                </div>
                <div className='w-full max-w-7xl mx-auto relative z-10 px-[15px]'>
                    <h1 className='sm:text-[75px] text-[36px] font-[600] text-[#ED8267] sm:leading-[75px] leading-[40px] tracking-tight lg:text-start text-center'>About Us</h1>
                    <p className='sm:py-4 py-2 sm:text-[19px] text-[14px] sm:leading-[25px] font-light leading-[16px] text-[#fff]/[0.6] tracking-wide lg:text-start text-center'>
                        Be a riser on the web universe, let's know about us.
                    </p>
                </div>
            </div>
            <Brief/>
            <Intro/>
            <Video/>
            <Focus/>
            <Clients/>
            <Started/>
        </>
    )
}

export default About