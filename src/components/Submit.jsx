import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const Submit = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        message: '',
    });

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rek8807', 'template_03sysb8', form.current, 'tv8xnt7iej0jTskmQ')
        .then((result) => {
            console.log(result.text);
            toast.success('Form Submitted Successfully!');
            setFormData({
            full_name: '',
            email: '',
            phone: '',
            message: '',
            });
        })
        .catch((error) => {
            console.log(error.text);
            toast.error('Unable to send! Please try again.');
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


  return (
    <>
        <section className="sm:pb-28 pb-10 sm:pt-0 pt-8 px-[15px]">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 isolate bg-gradientdown ring-2 ring-white/[.06] rounded-[30px] px-3 sm:py-8 py-3 sm:px-16 xl:flex lg:gap-x-12 lg:px-24 lg:pt-0">
                    <div className="mx-auto max-w-md text-center xl:mx-0 lg:flex-auto lg:py-24 xl:text-left sm:mt-0 mt-5"> 
                        <span className="relative rounded-full px-3 py-1 text-[12px] font-[500] tracking-wide leading-6 text-[#fff]/[0.7] ring-2 ring-white/10 bg-[#0E2130] uppercase"> Let's start to build</span>
                        <h2 className="sm:text-[49px] text-[34px] sm:leading-[51px] leading-[40px] mt-6 tracking-tighter font-[600] text-[#13B780]">
                            Have A Project?
                        </h2>
                        <p className="mt-4 text-[14px] text-white/[0.5] tracking-wide">
                            Do you have a project and you want to work on it? Let us know what services do you need.
                            Our team will promptly get in touch with you, providing an enablement to your specific requirements.
                        </p>
                        <p className='text-[#ED8267] text-[14px] leading-[22px] my-4 tracking-wide'>You can direct talk with our Expert Talent on WhatsApp also</p>
                        <Link to="https://wa.me/8801753778070" target='_blank' className='bg-[#13B780] rounded-[10px] h-[46px] w-[180px] flex items-center justify-center'>
                            <p className='text-white text-[14px] uppercase font-[600] me-2'>Start Chat</p>
                            <Icon icon="logos:whatsapp-icon" width="26" height="26" />
                        </Link>
                    </div>
                    <ToastContainer
                        position="top-center"
                        autoClose={8000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition: Zoom
                    />
                    <div className="sm:mt-16 mt-5 lg:-mt-24 w-full mx-auto">
                        <form ref={form} onSubmit={sendEmail} className="bg-[#142D40] rounded-3xl sm:px-10 px-5 sm:py-10 py-8 overflow-hidden shadow-xl">
                            <div className="space-y-5">
                                <div className="w-full"> 
                                    <label className="block mb-2 text-[13px] font-[400] text-white/[0.65] tracking-wider">Full Name</label> 
                                    <input 
                                        placeholder="Type Full Name" 
                                        type="text" 
                                        className="block w-full px-3 py-3 border-2 border-[#fff]/[0.12] rounded-[10px] appearance-none text-white text-[13px] tracking-wider placeholder-white/20 bg-[#000]/[.25] focus:border-[#13B780] focus:bg-[#000]/[.35] focus:outline-none" 
                                        id="full_name" 
                                        name="full_name" 
                                        autoComplete="given-name" 
                                        value={formData.full_name}
                                        onChange={handleChange}
                                        required
                                    /> 
                                </div>
                                <div className="w-full"> 
                                    <label className="block mb-2 text-[13px] font-[400] text-white/[0.65] tracking-wider">Email Address</label> 
                                    <input 
                                        placeholder="Type Email Address" 
                                        type="text" 
                                        className="block w-full px-3 py-3 border-2 border-[#fff]/[0.12] rounded-[10px] appearance-none text-white text-[13px] tracking-wider placeholder-white/20 bg-[#000]/[.25] focus:border-[#13B780] focus:bg-[#000]/[.35] focus:outline-none" 
                                        id="email" 
                                        name="email" 
                                        autoComplete="given-email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    /> 
                                </div>
                                <div className="w-full"> 
                                    <label className="block mb-2 text-[13px] font-[400] text-white/[0.65] tracking-wider">Phone Number</label> 
                                    <input 
                                        placeholder="Type Phone Number" 
                                        type="text" 
                                        className="block w-full px-3 py-3 border-2 border-[#fff]/[0.12] rounded-[10px] appearance-none text-white text-[13px] tracking-wider placeholder-white/20 bg-[#000]/[.25] focus:border-[#13B780] focus:bg-[#000]/[.35] focus:outline-none" 
                                        id="phone" 
                                        name="phone" 
                                        autoComplete="given-email" 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    /> 
                                </div>
                                <div className="w-full"> 
                                    <label className="block mb-2 text-[13px] font-[400] text-white/[0.65] tracking-wider">Your Message</label> 
                                    <textarea 
                                        placeholder="Type Your Message" 
                                        type="text" 
                                        rows={4} 
                                        className="block w-full px-3 py-3 border-2 border-[#fff]/[0.12] rounded-[10px] appearance-none text-white text-[13px] tracking-wider placeholder-white/20 bg-[#000]/[.25] focus:border-[#13B780] focus:bg-[#000]/[.35] focus:outline-none" 
                                        id="message" 
                                        name="message" 
                                        autoComplete="given-message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="w-full">
                                    <button type='submit' value="Send" className="mt-1 py-[15px] px-[30px] inline-flex relative before:absolute before:inset-0 before:rounded-full before:transition-transform before:duration-500 hover:before:scale-105 before:bg-gradient-to-r from-[#0FB880] to-[#ff9075]">
                                        <span className="relative text-[14px] tracking-wider font-medium text-white inline-flex items-center">
                                            Submit
                                            <svg className='ms-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10M7 17L17 7"/>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Submit