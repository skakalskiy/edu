import React from 'react';
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
import SubmitForm from './components/SubmitForm/SubmitForm';// Імпортуйте компонент SubmitForm
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Hero/>
        <div className='container'>
          <Title subtitle='Vorteile' title='Was wir anbieten'/>
          <Programs/>
          <Title subtitle='Suchen' title='Tippe um zu suchen'/>
          <Search/>
          <About/>
          <Title subtitle='FAQ' title='Häufig gestellte Fragen'/>
          <Testimonials/>
          <Title subtitle='KONTAKTIERE UNS' title='In Kontakt kommen'/>
          <Contact/>
          <Map/>
          <Footer/>  
        </div>
      </div>
  );
}

export default App;
