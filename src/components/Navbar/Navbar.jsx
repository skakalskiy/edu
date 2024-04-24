import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
 

import './Navbar.scss';

import { PiGitlabLogoFill } from "react-icons/pi";
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setSticky(true) : setSticky(false);
    })
  },[])

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  const onclickCategory = (index) => {
    setActiveIndex(index)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <div className='logo'><PiGitlabLogoFill/></div>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li className={activeIndex === 0 ? 'active' : ''}><Link to='hero' smooth={true} offset={0} duration={500}  onClick={() => onclickCategory(0)}>Blog</Link></li>
            <li className={activeIndex === 1 ? 'active' : ''}><Link to='program' smooth={true} offset={-260} duration={500}  onClick={() => onclickCategory(1)}>Suchen</Link></li>
            <li className={activeIndex === 2 ? 'active' : ''}><Link to='about' smooth={true} offset={-150} duration={500}  onClick={() => onclickCategory(2)}>Über uns</Link></li>
            <li className={activeIndex === 3 ? 'active' : ''}><Link to='testimonials' smooth={true} offset={-260} duration={500}  onClick={() => onclickCategory(3)}>FAQ</Link></li>
            <li className={activeIndex === 4 ? 'active' : ''}><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={() => onclickCategory(4)} >Kontakte</Link></li>
        </ul>
        <img src={menu_icon} alt="menu_icon" className='menu-icon' onClick={toggleMenu} />
    </nav> 
  )
}

export default Navbar; 