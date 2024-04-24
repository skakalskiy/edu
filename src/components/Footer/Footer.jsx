import React from 'react';

import { PiGitlabLogoFill } from "react-icons/pi";

import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='logo'>
          <PiGitlabLogoFill/>
          <p className='tel'>
          +380-97-70-74-726
          </p>
        </div>
        <p>© 2024 Edusity. Alle Rechte vorbehalten.</p>
        <ul>
            <li>Nutzungsbedingungen</li>
            <li>Datenschutzrichtlinie</li>
        </ul>
    </div>
  )
}

export default Footer;