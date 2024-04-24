import React from 'react';
import { Link } from 'react-router-dom';

import './Contact.scss';

import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
  setResult('Senden...');

  setTimeout(() => {
    window.location= '/submit'
  }, 3000);
   
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Schick uns eine Nachricht <img src={msg_icon} alt="msg_icon" /></h3>
            <p>Kontaktieren Sie uns gerne über das Kontaktformular oder finden Sie unten unsere Kontaktinformationen. Ihr Feedback, Ihre Fragen und Vorschläge sind uns wichtig, da wir bestrebt sind, unserer Universitätsgemeinschaft einen außergewöhnlichen Service zu bieten.</p>
            <ul>
                <li><img src={mail_icon} alt="mail" />timong2acomp@gmail.com</li>
                <li><img src={phone_icon} alt="phone" />+380-97-70-74-726</li>
                <li><img src={location_icon} alt="location" />Ternopilska oblast Kremenets city <br /> Ukraine</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Ihr Name</label>
                <input type="text" name="name" placeholder='Gib deinen Namen ein' required/>
                <label>Telefonnummer</label>
                <input type="tel" name="phone" placeholder='Geben Sie Ihre Mobiltelefonnummer ein' required/>
                <label>Schreiben Sie hier Ihre Nachrichten</label>
                <textarea name="message" rows="6" placeholder='Gib deine Nachricht ein' required></textarea>
                <button type='submit' className='btn dark-btn'>Jetzt Absenden<img src={white_arrow} alt="white_arrow" /></button>
            </form>      
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact;