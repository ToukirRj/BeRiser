import React from 'react'
import Shades from '/img/elements/shade.webp'
import Circle from '/img/elements/circle.svg'
import serviceData from '../datas/serviceData'


const Expertises = () => {
  return (
    <div>
        <section className='sm:pt-24 pt-10 sm:pb-20 pb-10 relative'>
            <div className='sm:h-[900px] h-[500px] sm:w-[900px] w-[500px] absolute opacity-70 inset-0 mx-auto my-auto'>
                <img className="h-full w-full" src={Shades} alt='shades'/>
            </div>
            <div className="pb-8 px-[20px] max-w-7xl mx-auto relative z-1 text-center">
                <h2 className="sm:text-[43px] text-[21px] my-3 font-[500] text-white sm:leading-[60px] leading-[30px]">
                    What We Do
                    <span className="block sm:text-[59px] text-[23px] font-[600] text-[#ED8267] tracking-tighter">With Interactive Capabilities</span>
                </h2>
                <span className="sm:text-[18px] text-[14px] font-[300] text-[#fff]/[0.5]"> Constantly feeling the pulse of the digital world. We offer quality UI design, development, <br/>branding and more for forward-looking industries. Helping businesses grow and <br/>delivering exciting web experience.</span>
            </div>
            <div className='relative mx-auto max-w-7xl w-full z-10'>
                <div className='flex flex-wrap justify-center'>
                    {serviceData.map((service) => (
                        <div className='relative mt-10 xl:w-1/3 md:w-1/2 w-full' key={service.id}>
                            <img src={Circle} alt='circle' className='mx-auto max-w-full w-16 h-16 absolute left-0 right-0 top-[-20px]'/>
                            <div className='px-5'>
                                <div className='mt-3 sm:px-10 px-6 py-10 bg-[#fff]/[0.05] rounded-[30px]'>
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
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Expertises