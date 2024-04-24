import React, { useRef } from 'react';

import './Testimonials.scss';

import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="next_icon" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="back_icon" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">

                                <div>
                                    <h3>
                                        Frage: Wie lange dauert die Lieferung?
                                    </h3>

                                </div>
                            </div>
                            <p>Antwort: Die Lieferzeit beträgt in der Regel 2-3 Werktage.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <div>
                                    <h3>
                                        Frage: Welche Zahlungsmethoden akzeptieren Sie?
                                    </h3>

                                </div>
                            </div>
                            <p>Antwort: Wir akzeptieren Zahlungen per Kreditkarte, PayPal und Banküberweisung.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <div>
                                    <h3>
                                        Frage: Gibt es eine Garantie auf Ihre Produkte?
                                    </h3>

                                </div>
                            </div>
                            <p> Antwort: Ja, alle unsere Produkte haben eine 12-monatige Garantie.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <div>
                                    <h3>
                                        Frage: Wie kann ich den Kundendienst kontaktieren?
                                    </h3>

                                </div>
                            </div>
                            <p>Antwort: Sie können uns per E-Mail oder telefonisch kontaktieren. Unsere Kontaktdaten finden Sie auf unserer Website.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials;