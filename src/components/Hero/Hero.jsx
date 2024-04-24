import React from 'react';

import './Hero.scss';

import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Partnerschaftliche Lösungen für Ihren Erfolg</h1>
            <button className='btn'>
                Erkunde mehr
                <img src={dark_arrow} alt="arrow" />
            </button>
        </div>
    </div>
  )
}

export default Hero;