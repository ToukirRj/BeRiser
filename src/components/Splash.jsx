import React from 'react'
import Banner from '/img/elements/hero.webp'
import element1 from '/img/elements/analytics.webp'
import element2 from '/img/elements/task.webp'
import element3 from '/img/elements/profile.webp'
import element4 from '/img/elements/nav.webp'
import Shades from '/img/elements/shade.webp'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { userData , sectionData } from '../datas/splashData'

const Splash = () => {
  return (
    <div>
        <section className='sm:pt-48 pt-32 sm:pb-16 pb-5 relative'>
            <div className='h-[900px] w-[900px] absolute left-0 -top-[350px] right-0 mx-auto'>
                <img className="h-full w-full" src={Shades} alt='shades'/>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center max-w-7xl mx-auto relative z-10 px-3'>
                <div className='col-span-1'>
                    <h1 className='splash xl:text-[61px] sm:text-[55px] text-[30px] font-[700] text-[#ED8267] sm:leading-[64px] leading-[39px] tracking-tight lg:text-start text-center'>Be riser of your Business through Web Tech & Design.</h1>
                    <p className='py-6 sm:text-[19px] text-[17px] font-light text-[#fff]/[0.6] tracking-wide lg:text-start text-center'>By combining strategy, design, and technology, we develop experiences that bridge the gap between you and your users.</p>
                    <Link to='/contact' className="py-[15px] px-[30px] lg:mx-0 mx-auto lg:inline-flex table relative before:absolute before:inset-0 before:rounded-full before:transition-transform before:duration-500 hover:before:scale-105 before:bg-gradient-to-r from-[#0FB880] to-[#ff9075]" href="#">
                        <span className="relative text-[14px] tracking-wider font-medium text-white inline-flex items-center">
                            Let's Start Now
                            <svg className='ms-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10M7 17L17 7"/>
                            </svg>
                        </span>
                    </Link>
                    <div className="mt-10 flex items-center justify-center lg:justify-start space-x-[15px]">
                        <div className="flex -space-x-3">
                        {userData.userImages.map((userImage, index) => (
                            <img key={index} alt={`user${index + 1}`} className="inline-block h-[40px] w-[40px] rounded-full ring-[2px] ring-white" src={userImage}/>
                        ))}
                        </div>
                        <div>
                            <div className="text-[#FFC107] space-x-[3px] text-[16px] flex mb-1">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <Icon key={index} icon="ph:star-fill" color="#ed8267" width={16} height={16} />
                                ))}
                            </div>
                            <p className="text-[14px] text-white">Review 4.9 / 5.0</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <div className='flex justify-center'>
                        <div className="text-center xl:text-end relative pt-10 pb-0 sm:px-16 px-5 max-w-xl w-full lg:mt-0 mt-10">
                            <img className="relative z-1" src={Banner} alt="Hero Banner"/>
                            <img className="animate-pulse absolute left-12 top-5 -z-50 sm:w-[180px] w-[90px]" alt="Hero Banner" width="180" src={element1}/>
                            <img className="animate-pulse absolute right-12 sm:top-[-5px] top-[10px] -z-50 sm:w-[200px] w-[120px]" width="200" src={element2} alt='element'/>
                            <img className="animate-pulse absolute left-5 top-[45%] z-1 sm:w-[200px] w-[120px]" width="200" src={element3} alt='element'/>
                            <img className="animate-pulse absolute right-5 bottom-[30%] z-1 sm:w-[210px] w-[130px]" width="210" src={element4} alt='element'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center sm:mt-32 mt-10 bg-[#162F42]/[.35] shadow backdrop-blur-lg relative z-10'>
                <div className='flex md:flex-row flex-col items-center justify-center max-w-7xl mx-auto relative sm:py-5 py-0 w-full'>
                    {sectionData.map((section, index) => (
                        <div key={index} className='flex flex-col justify-center items-center gap-2 px-7 md:border-r md:border-b-0 border-b md:py-0 py-5 border-[#021727] md:w-auto w-full'>
                            <Icon icon={section.icon} color='#ed8267' width="40" height="40" />
                            <h3 className='text-[14px] font-[400] text-[#fff]/[0.6] tracking-wider text-center'>{section.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Splash