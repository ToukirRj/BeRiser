import React from 'react'
import Shades from '/img/elements/shade.webp'
import loginSc from '/img/elements/login-sc.webp'
import { Link } from 'react-router-dom'

const Manage = () => {
  return (
    <div>
        <section className="sm:pt-20 pt-10 sm:pb-16 pb-5 relative">
            <div className="mx-auto max-w-7xl px-[20px]">
                <h2 className="sm:text-[29px] text-[18px] font-[600] text-white text-center">Start Managing Your Company</h2>
                <h1 className="sm:text-[73px] text-[39px] sm:leading-[80px] leading-[51px] font-bold text-[#ED8267] text-center">Smarter Today</h1>
                <div className="sm:mt-10 mt-5">
                    <div className="relative rounded-3xl bg-[#113147]/[.35] shadow-gray-600/20 transition duration-500 overflow-hidden">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="text-center md:w-5/12 sm:p-10 p-5">
                                <h3 className="sm:text-[25px] text-[15px] font-[600] text-white">A management panel by the business need, 
                                Go beyond with value of things</h3>
                                <p className="my-4 sm:text-[14px] text-[12px] leading-[26px] font-[400] text-[#fff]/[0.6] tracking-wider">
                                    Admin panels allow you to manage your site or app's content quickly and easily to make changes, you can add, edit, and delete content on your own.
                                </p>
                                <div className="flex justify-center">
                                    <Link to="/expertise" className="mt-2 py-[15px] px-[30px] inline-flex relative before:absolute before:inset-0 before:rounded-full before:transition-transform before:duration-500 hover:before:scale-105 before:bg-gradient-to-r from-[#0FB880] to-[#ff9075]">
                                        <span className="relative text-[14px] tracking-wider font-medium text-white inline-flex items-center">Our Expertise
                                            <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10M7 17L17 7"></path>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative md:w-7/12 overflow-hidden">
                                <div className='h-[800px] w-[800px] absolute left-0 -top-[100px] right-0 mx-auto'>
                                    <img className="h-full w-full" src={Shades} alt='shades'/>
                                </div>
                                <img className="w-full relative z-10" src={loginSc} alt="safety icon illustration"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Manage