import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
 

import './Navbar.scss';

import { PiGitlabLogoFill } from "react-icons/pi";
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    })
  },[])

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div className='logo'><PiGitlabLogoFill/></div>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Blog</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Suchen</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>Über uns</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>FAQ</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Kontakte</Link></li>
        </ul>
        <img src={menu_icon} alt="menu_icon" className='menu-icon' onClick={toggleMenu} />
    </nav> 
  )
}

export default Navbar; 