
import Logo from '/img/elements/white-logo.webp'
import { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Header() {
    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle(
        "responsive_nav"
      );
    };
    return (
        <header>
            <div className='main-head'>
                <Link to='/'><img src={Logo} width='180' alt="logo"/></Link>
                <div className='flex items-center'>
                    <nav ref={navRef}>
                        <NavLink to="/" activeclassname="active" onClick={showNavbar}>Home</NavLink>
                        <NavLink to="/About" activeclassname="active" onClick={showNavbar}>About</NavLink>
                        <NavLink to="/Expertise" activeclassname="active" onClick={showNavbar}>Expertise</NavLink>
                        <NavLink to="/Projects" activeclassname="active" onClick={showNavbar}>Projects</NavLink>
                        <button onClick={showNavbar} className='nav-btn nav-close-btn'>
                            <Icon icon="uit:times-circle" color="red" width="32" height="32"/>
                        </button>
                    </nav>
                    <div className='flex items-center'>
                        <Link className="contact-btn" to="/Contact">
                            <span className="relative text-[14px] tracking-wider font-medium text-white">Get Start</span>
                        </Link>
                        <button className="nav-btn" onClick={showNavbar}>
                            <Icon icon="heroicons:bars-3-bottom-left-solid" color="white" width="32" height="32"/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header