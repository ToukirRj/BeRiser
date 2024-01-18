
import FooterLogo from '/img/elements/white-logo.webp'
import { Link } from 'react-router-dom';
import { footerData } from '../datas/footerData';

const Footer = () => {
    return (
        <>
            <div className='bg-[#142D40] sm:py-12 py-10'>
                <div className='mx-auto max-w-7xl px-3 w-full'>
                    <div className='flex items-center justify-center mb-5'>
                        <img src={FooterLogo} width='200' alt="logo"/>
                    </div>
                    <div className='flex items-center justify-center space-x-3'>
                        {footerData.map((socialMedia, index) => (
                            <Link key={index} to={socialMedia.link} target="_blank" className='w-10 h-10 bg-slate-600 rounded-full shadow flex items-center justify-center hover:bg-[#0a131b] transition-all duration-500 ease-in-out'>
                                {socialMedia.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-[#0e2130] py-7'>
                <div className='mx-auto max-w-7xl px-3 w-full'>
                    <div className='flex md:flex-row flex-col items-center justify-between md:gap-0 gap-3'>
                        <p className='text-[12px] text-white/[0.45] md:text-start text-center tracking-wider w-full'>© 2023 - 2026 Copyright</p>
                        <p className='text-[12px] text-white/[0.45] text-center tracking-wider w-full'>All Rights Reserved</p>
                        <p className='text-[12px] text-white/[0.45] md:text-end text-center tracking-wider w-full'>Designed & Developed by 
                            <Link to="/" className='text-white font-[500]'> BeRiser</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer