
import React from 'react'
import { portfolioData } from '../datas/portfolioData'

const Portfolio = () => {
    return (
        <div>
            <div className='md:py-24 py-10 w-full max-w-7xl mx-auto relative z-10 px-[15px]'>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2 relative'>
                    {portfolioData.map((project, index) => (
                        <div key={index} className='group relative bg-[#fff]/[0.06] p-6 my-3 rounded-[30px]'>
                            <div className='bg-transparent h-auto w-full rounded-[13px] shadow-lg overflow-hidden'>
                                <img src={project.image} alt={`project-${index + 1}`} className='w-full h-auto hover:scale-125 transition-all'/>
                            </div>
                            <h4 className='text-[17px] font-[600] text-[#f1f1f1] leading-[20px] mt-[22px] group-hover:text-[#ED8267]'>{project.title}</h4>
                            <h6 className='text-[14px] font-[400] text-[#888] leading-[20px] mt-[5px] group-hover:text-[#999]'>{project.description}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio