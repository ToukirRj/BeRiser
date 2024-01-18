import React from 'react'
import { Link } from 'react-router-dom'

const Started = () => {
  return (
    <div>
        <section className='sm:pt-10 pt-0 sm:pb-20 pb-10 relative'>
            <div className="mx-auto max-w-7xl w-full px-[20px]">
                <div className='w-full sm:p-12 p-6 bg-gradient-to-r from-[#0FB880] to-[#ff9075] rounded-[30px]'>
                    <h1 className='sm:text-[57px] text-[24px] text-[#0E2130] font-bold text-center tracking-tight sm:leading-[65px] leading-[31px]'>Get started with most flexible User-Centric team BeRiser</h1>
                    <Link className="mt-5 py-[15px] px-[30px] table mx-auto relative before:absolute before:inset-0 before:rounded-full before:transition-transform before:duration-500 hover:before:scale-105 before:bg-[#0E2130]" to="/contact">
                        <span className="relative text-[14px] tracking-wider font-medium text-white inline-flex items-center">
                            Let's Start Now
                            <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10M7 17L17 7"></path>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Started