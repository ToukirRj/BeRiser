import React from 'react'
import { Icon } from '@iconify/react'
import { clientData1, clientData2 } from '../datas/clientData'


const Clients = () => {
  return (
    <div>
        <section className="sm:pt-10 pt-0 sm:pb-20 pb-10 relative">
            <div className='mx-auto 2xl:max-w-[1600px] items-center relative w-full bg-gradientdown lg:rounded-[3rem] sm:pb-20 pb-10'>
                <div className="mx-auto max-w-7xl w-full px-[20px]">
                    <div className="relative flex flex-col">
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:border-b items-end border-white/10 py-6 md:text-start text-center">
                            <h2 className="sm:text-[43px] text-[24px] font-[500] text-white sm:leading-[60px] leading-[31px]">
                                Our wall of love
                                <span className="block sm:text-[59px] text-[36px] sm:leading-[60px] leading-[39px] font-[600] text-[#ED8267] tracking-tight">We keep making peoples life better</span>
                            </h2>
                            <p className="sm:text-[18px] text-[14px] text-[#fff]/[.7] font-[300] lg:text-end md:text-start text-center mt-6 tracking-wide">
                                We are loved by many global business sectors. Don't just take our word. Hear from some of our fabulous customers who are getting more leads with BeRiser.
                            </p>
                        </div>
                        <div className="relative mx-auto">
                            <div className="items-center h-[54rem] space-x-6 pb-12 lg:pb-0 lg:space-x-8 overflow-y-hidden relative lg:px-4 mx-auto grid grid-cols-1 lg:grid-cols-2">
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 lg:animate-scroller">
                                    {clientData1.map((client) => (
                                        <div key={client.id} className="rounded-3xl p-4 bg-white/5 lg:p-8 lg:block">
                                            <div className="relative flex flex-row items-center gap-4 pb-3 mb-4 border-b border-white/10">
                                                <img alt="avatar" src={client.avatar} className="object-cover rounded-full h-14 w-14 shrink-0 border-[5px] border-transparent ring-2 ring-[#fff]/[0.15]"/>
                                                <div className="relative">
                                                    <h2 className="sm:text-[17px] text-[14px] font-[500] text-white tracking-wide mb-1">{client.name}</h2>
                                                    <h4 className="sm:text-[14px] text-[12px] text-[#14B780] font-[400] tracking-wider" href="#">{client.role}</h4>
                                                </div>
                                            </div>
                                            <div className="flex mb-3">
                                                <div className="text-[#FFC107] space-x-[3px] text-[16px] flex">
                                                    {[...Array(Math.floor(client.rating))].map((_, index) => (
                                                        <Icon key={index} icon="ph:star-fill" color="#ed8267" width="18" height="18" />
                                                    ))}
                                                </div>
                                                <h5 className='text-[16px] font-[400] text-[#fff] leading-[21px] ms-2'>{client.rating.toFixed(1)}</h5>
                                            </div>
                                            <p className="sm:text-[15px] text-[12px] text-[#fff]/[0.7] sm:leading-[24px] leading-[18px] font-[300] tracking-wider mt-2">
                                                "{client.feedback}"
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 lg:animate-scroller3 lg:opacity-100 opacity-0">
                                    {clientData2.map((client) => (
                                        <div key={client.id} className="rounded-3xl p-4 bg-white/5 lg:p-8 lg:block">
                                            <div className="relative flex flex-row items-center gap-4 pb-3 mb-4 border-b border-white/10">
                                                <img alt="avatar" src={client.avatar} className="object-cover rounded-full h-14 w-14 shrink-0 border-[5px] border-transparent ring-2 ring-[#fff]/[0.15]"/>
                                                <div className="relative">
                                                    <h2 className="sm:text-[17px] text-[14px] font-[500] text-white tracking-wide mb-1">{client.name}</h2>
                                                    <h4 className="sm:text-[14px] text-[12px] text-[#14B780] font-[400] tracking-wider" href="#">{client.role}</h4>
                                                </div>
                                            </div>
                                            <div className="flex mb-3">
                                                <div className="text-[#FFC107] space-x-[3px] text-[16px] flex">
                                                    {[...Array(Math.floor(client.rating))].map((_, index) => (
                                                        <Icon key={index} icon="ph:star-fill" color="#ed8267" width="18" height="18" />
                                                    ))}
                                                </div>
                                                <h5 className='text-[16px] font-[400] text-[#fff] leading-[21px] ms-2'>{client.rating.toFixed(1)}</h5>
                                            </div>
                                            <p className="sm:text-[15px] text-[12px] text-[#fff]/[0.7] sm:leading-[24px] leading-[18px] font-[300] tracking-wider mt-2">
                                                "{client.feedback}"
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Clients