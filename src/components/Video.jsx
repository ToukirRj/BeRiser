import React from 'react'
import Shades from '/img/elements/shade.webp'
import { videoDatas } from '../datas/videoData'

const Video = () => {
  return (
    <div>
        <section className="lg:p-8 relative">
            <div className='h-[1100px] w-[1100px] absolute left-0 -top-[50px] right-0 mx-auto z-10'>
                <img className="h-full w-full" src={Shades} alt='shades'/>
            </div>
            <div className="mx-auto 2xl:max-w-[1600px] sm:pt-24 pt-12 sm:pb-24 pb-4 items-center lg:py-24 relative w-full bg-gradientup lg:rounded-[3rem]">
                <div className="lg:text-center mx-auto max-w-7xl relative z-10 px-[20px] md:text-start text-center">
                    <span className="relative rounded-full px-3 py-1 text-sm leading-6 text-[#fff]/[0.6] ring-2 ring-white/10 bg-[#0E2130] uppercase">
                        Check the UI design
                    </span>
                    <h2 className="sm:text-[55px] text-[27px] mt-3 font-[500] text-white sm:leading-[75px] leading-[45px]">
                        Everyone Deserves a <span className="block sm:text-[71px] text-[28px] font-[600] text-[#ED8267] tracking-tight">Clear & Distinct Design</span>
                    </h2>
                    <p className="mt-3 text-[16px] font-light text-[#fff]/[0.6] tracking-wide">
                        For 88% of users, lack of ease to use may be the main<br/>reason to never return to a site again.
                    </p>
                    <div className="mt-8 flex items-center md:flex-row flex-col px-0 gap-8">  
                        <div className="w-full lg:w-1/4 md:w-1/3">
                            <div className="flex flex-col sm:px-12 lg:px-10 py-4 bg-[#fff]/[0.045] rounded-[50px] divide-y divide-[#080d11]">
                                {videoDatas.map(statistic => (
                                    <div key={statistic.id} className="statis flex flex-col snap-center items-center gap-2 py-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke='#10B880' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: statistic.iconPath }} />
                                        <h2 className="sm:text-5xl text-3xl font-bold text-[#ED8267] text-center">{statistic.value}</h2>
                                        <span className="block w-max text-[13px] text-[#fff] font-[500] uppercase tracking-wider text-center">{statistic.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-3/4 md:w-2/3 w-full">
                            <div className="sm:rounded-[50px] rounded-[10px] h-fit z-10 overflow-hidden w-full relative">
                                <video className="w-full" autoPlay loop muted playsInline src="./videos/main-video.mp4" type="video/mp4"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Video