import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Search from './components/Search/Search';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';

import { Link } from 'react-scroll';

import { IoIosArrowUp } from "react-icons/io";

function App() {

  const [cookie, setCookie] = useState(false);
 

  useEffect(() => {
    setTimeout(() => {
      setCookie(true);
    }, 5000)
  }, [])

  const closeModal = () => {
    setCookie((prev) => !prev)
  } 

  // const scrollTop = () => {
  //   window.scrollTo(0,0)
  // }

  return (
    <>
      <div className="App">
        {cookie && (
          <div className='cookieModal'>
            <p>
              Diese Website verwendet Cookies, um das Benutzererlebnis zu verbessern.
            </p>
            <div className='btnBlock'>
              <button onClick={closeModal}>Accept</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
        </div>
        )}
        
        <Navbar />
        <Hero />
        <div className='container'>
          <Title subtitle='Vorteile' title='Was wir anbieten' />
          <Programs />
          <Title subtitle='Suchen' title='Tippe um zu suchen' />
          <Search />
          <About />
          <Title subtitle='FAQ' title='Häufig gestellte Fragen' />
          <Testimonials />
          <Title subtitle='KONTAKTIERE UNS' title='In Kontakt kommen' />
          <Contact />
          <Map />
          <Footer />
        </div>
        <div className='arrow' > 
           <Link  to='hero' smooth={true} offset={0} duration={500}>
            <IoIosArrowUp/>
           </Link>
        </div>
      </div>
    </>

  );
}

export default App;
