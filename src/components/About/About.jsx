import React from 'react';

import './About.scss';

import kons from '../../assets/kons.jpg'



const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={kons} alt="about_img" className='img' />
        </div>
        <div className="about-right">
            <h3>Über uns</h3>
            <h2>Partnerschaft für Ihren Erfolg: Unser Engagement für Excellence</h2>
            <p>Unser Unternehmen ist mehr als nur eine Unternehmensberatung. Wir sind Ihr strategischer Partner, der bereit ist, Ihr Wachstum und Ihren Erfolg zu fördern. Mit unserem fundierten Fachwissen und unserem tiefen Verständnis für Ihr Geschäft helfen wir Ihnen, Ihre Ziele durch die Entwicklung und Umsetzung effektiver Strategien zu erreichen.</p>
            <p>Unser Ansatz besteht darin, eng mit Ihnen zusammenzuarbeiten, als Teil Ihres Teams. Wir glauben an Interaktion und gemeinsame Entscheidungsfindung, um optimale Ergebnisse zu erzielen. Unsere Berater sind bereit, Ihnen zuzuhören, Ihre Bedürfnisse zu berücksichtigen und innovative Lösungen vorzuschlagen.</p>
            <p>Unser Ziel ist Ihr Erfolg. Wir arbeiten an jedem Projekt mit großer Aufmerksamkeit für Details und dem Wunsch, herausragende Ergebnisse zu erzielen. Wenn Sie sich an uns wenden, können Sie sicher sein, dass Sie einen personalisierten und qualitativ hochwertigen Ansatz zur Bewältigung Ihrer Aufgaben und zur Erreichung Ihrer Ziele erhalten.</p>
        </div>
    </div>
  )
}

export default About;