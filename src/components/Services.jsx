import React from 'react'
import Shades from '/img/elements/shade.webp'
import Circle from '/img/elements/circle.svg'
import serviceData from '../datas/serviceData'

import { Navigation, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

const Services = () => {
  return (
    <div>
        <section className='sm:pt-24 pt-10 sm:pb-20 pb-10 relative'>
            <div className='sm:h-[900px] h-[500px] sm:w-[900px] w-[500px] absolute left-0 top-[30px] opacity-70 right-0 mx-auto'>
                <img className="h-full w-full" src={Shades} alt='shades'/>
            </div>
            <div className="pb-8 px-[20px] max-w-7xl mx-auto relative z-1 md:text-start text-center">
                <h2 className="sm:text-[43px] text-[21px] my-3 font-[500] text-white sm:leading-[60px] leading-[30px]">
                    What We Do
                    <span className="block sm:text-[59px] text-[23px] font-[600] text-[#ED8267] tracking-tighter">With Interactive Capabilities</span>
                </h2>
                <span className="sm:text-[18px] text-[14px] font-[300] text-[#fff]/[0.5]"> Constantly feeling the pulse of the digital world. We offer quality UI design, development, <br/>branding and more for forward-looking industries. Helping businesses grow and <br/>delivering exciting web experience.</span>
            </div>
            <div className='relative mx-auto w-full z-10'>
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween:0,
                        },
                        859: {
                            slidesPerView: 2,
                            spaceBetween:0,
                        },
                        991: {
                            slidesPerView: 2,
                            spaceBetween:0,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween:0,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween:0,
                        },
                        }}
                    >
                    {serviceData.map((service) => (
                        <SwiperSlide key={service.id}>
                            <div className='relative'>
                                <div className='h-[1px] w-full absolute top-[32px] left-0 bg-[#14B780]'></div>
                                <img src={Circle} alt='circle' className='mx-auto max-w-full w-16 h-16' />
                                <div className='px-5'>
                                    <div className='mt-3 sm:p-10 p-6 bg-[#fff]/[0.05] rounded-[30px]'>
                                        <img src={service.image} alt='circle' className='mx-auto max-w-full h-40' />
                                        <h1 className='mt-3 sm:text-[26px] text-[23px] sm:leading-[36px] leading-[28px] font-[500] text-[#fff] tracking-tighter text-center'>
                                            {service.title}
                                        </h1>
                                        <div className='mt-3 text-[14px] text-[#fff]/[0.55] font-[300] tracking-wider text-center border-t border-white/10 pt-3'>
                                            {service.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    </div>
  )
}

export default Services