import React from 'react';

import './Programs.scss';

import per1 from '../../assets/per1.jpg';
import per2 from '../../assets/per2.jpg';
import per3 from '../../assets/per3.jpg';

const Programs = () => {
  return (
    <div className='programs '>
        <div className="program">
            <img src={per1} alt="program_1" />
            <div className="caption">
                <p>Erfahrung & Expertise</p>
            </div>
        </div>
        <div className="program">
            <img src={per2} alt="program_2" />
            <div className="caption">
                <p>Kundenorientierung</p>
            </div>
        </div>
        <div className="program">
            <img src={per3} alt="program_3" />
            <div className="caption">
                <p>Innovative Lösungen</p>
            </div>
        </div>
    </div>
  )
}

export default Programs;