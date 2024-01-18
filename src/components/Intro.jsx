import React from 'react'
import Shades from '/img/elements/shade.webp'
import About from '/img/elements/ab.webp'
import { Link } from 'react-router-dom'


const Intro = () => {
  return (
    <div>
        <section className='sm:pt-24 pt-10 sm:pb-32 pb-14 relative'>
            <div className='sm:h-[900px] h-[600px] sm:w-[900px] w-[600px] absolute left-0 top-0 right-0 mx-auto'>
                <img className="h-full w-full" src={Shades} alt='shades'/>
            </div>
            <div className="max-w-7xl lg:mx-auto relative z-10">
                <h1 className='mb-1 sm:text-[37px] text-[22px] text-white sm:leading-[52px] leading-[30px] font-[500] w-full text-center tracking-tight'>Why are we on your side?</h1>
                <h1 className='sm:text-[61px] text-[39px] text-[#ED8267] sm:leading-[65px] leading-[43px] font-[600] w-full text-center tracking-tight'>To becoming you the topper <br/>on web universe</h1>
            </div>
            <div className="max-w-7xl lg:mx-auto relative z-10">
                <div className="mt-6 flex items-center md:flex-row flex-col gap-10 px-[20px]">  
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className='relative max-w-[500px] w-full'>
                            <img className="w-full mx-auto" src={About} width="540" height="520" alt="Features illustration"/>
                            <svg className="max-w-full h-auto mx-auto inset-0 absolute block align-middle" width="540" height="520" viewBox="0 0 540 520" xmlns="http://www.w3.org/2000/svg">
                                <g className="text-[#DC7B63] fill-current">
                                    <circle className="cmorz" cx="270" cy="260" r="64"></circle>
                                    <circle className="ckwdi cmorz" cx="270" cy="260" r="64"></circle>
                                    <circle className="cit2a cmorz" cx="270" cy="260" r="64"></circle>
                                    <circle className="ceowt cmorz" cx="270" cy="260" r="64"></circle>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:text-start text-center">
                        <h4 className='text-[15px] font-[600] text-[#36A269] tracking-wider uppercase'>You have a great Business, Product or Service</h4>
                        <h4 className='mt-3 sm:text-[24px] text-[18px] text-white leading-[30px] font-[500] w-full'>But need a perfect Website or Software to presenting or carring your brand properly?</h4>
                        <p className='my-4 sm:text-[14px] text-[12px] sm:leading-[26px] leading-[22px] font-[400] text-[#fff]/[0.6] tracking-wider'>
                            Together we bring ideas to life! From concept to production, we create compelling digital experiences that tell your brand’s unique story. 
                            No challenge is too small or too big, and we love them all, but most of all, we love creating cool stuff that people enjoy using.<br/><br/>

                            Whether you’re a world-famous brand looking for a new approach or an independent coffee brewer - we want to work with you!
                        </p>
                        <Link to='/expertise' className="mt-2 py-[15px] px-[30px] inline-flex relative before:absolute before:inset-0 before:rounded-full before:transition-transform before:duration-500 hover:before:scale-105 before:bg-gradient-to-r from-[#0FB880] to-[#ff9075]" href="#">
                            <span className="relative text-[14px] tracking-wider font-medium text-white inline-flex items-center">
                                Our Services
                                <svg className='ms-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10M7 17L17 7"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Intro