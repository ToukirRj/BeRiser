import React from 'react'
import MOBDesign from '/img/elements/designs.webp'
import { Link } from 'react-router-dom'

const Brief = () => {
  return (
    <div>
        <section className='sm:pt-14 pt-0 sm:pb-24 pb-10 relative'>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mt-6 flex items-center md:flex-row flex-col gap-10 px-[20px]">  
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className='p-5 relative w-full bg-[#fff]/[0.07] rounded-[50px]'>
                            <img className="w-full mx-auto animate-pulse" src={MOBDesign} width="540" height="520" alt="Design"/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:text-start text-center">
                        <h1 className='sm:text-[55px] text-[34px] sm:leading-[59px] leading-[37px] font-[600] text-[#ED8267] tracking-tighter'>We share our<br/>thoughts on design</h1>
                        <p className='my-4 sm:text-[14px] text-[12px] leading-[23px] font-[400] text-[#fff]/[0.6] tracking-wider'>
                            Think of the world's most iconic and successful brands. They are easily recognizable, findable, and impactful. 
                            That's not by accident - visibility and trust are the superpowers of exceptional design.<br/><br/>

                            We believe that the human dimensions essential to start any successful project and that is where splendid 
                            emotional relationships between the company.
                        </p>
                        <Link to='/projects' className="mt-2 py-[15px] px-[30px] inline-flex relative before:absolute before:inset-0 before:rounded-full before:transition-transform before:duration-500 hover:before:scale-105 before:bg-gradient-to-r from-[#0FB880] to-[#ff9075]" href="#">
                            <span className="relative text-[14px] tracking-wider font-medium text-white inline-flex items-center">
                                Our Portfolio
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

export default Brief