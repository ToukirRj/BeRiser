import React from 'react'
import Shades from '/img/elements/shade.webp'
import { Link } from 'react-router-dom'

const Focus = () => {
  return (
    <div>
        <section className='sm:pt-10 pt-0 pb-12 relative'>
            <div className='h-[900px] w-[900px] absolute left-0 -top-24 opacity-70 right-0 mx-auto'>
                <img className="h-full w-full" src={Shades} alt='shades'/>
            </div>
            <div className="mx-auto max-w-7xl w-full sm:py-24 py-10 items-center lg:py-24 relative lg:rounded-[3rem]">
                <div className="lg:text-center mx-auto max-w-7xl relative z-10 px-[20px] md:text-start text-center">
                    <span className="relative rounded-full px-3 py-1 text-sm leading-6 text-[#fff]/[0.6] ring-2 ring-white/10 bg-[#0E2130] uppercase">
                        Check the Process
                    </span>
                    <h2 className="sm:text-[55px] text-[23px] mt-3 font-[400] text-white sm:leading-[75px] leading-[48px]">
                        We are focusing on<span className="block sm:text-[71px] text-[36px] sm:leading-[75px] leading-[41px] font-[600] text-[#ED8267] tracking-tight">Require, Analysis & Develop</span>
                    </h2>
                    <p className="mx-auto max-w-5xl w-full my-5 sm:text-[23px] text-[14px] sm:leading-[40px] leading-[24px] font-light text-[#fff]/[0.6] tracking-wide">
                        We provide exceptional customer service and strive to build long-term relationships with our clients
                        based on trust, transparency, and mutual respect.
                    </p>
                </div>
                <Link to='/contact' className="mt-5 py-[15px] px-[30px] table mx-auto relative before:absolute before:inset-0 before:rounded-full before:transition-transform before:duration-500 hover:before:scale-105 before:bg-gradient-to-r from-[#0FB880] to-[#ff9075]" href="#">
                    <span className="relative text-[14px] tracking-wider font-medium text-white inline-flex items-center">
                        Let's Start Now
                        <svg className='ms-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10M7 17L17 7"/>
                        </svg>
                    </span>
                </Link>
            </div>
        </section>
    </div>
  )
}

export default Focus