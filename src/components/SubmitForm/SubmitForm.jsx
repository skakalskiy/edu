import React from 'react';

import './SubmitForm.scss';

import enot from '../../assets/enot.mp4';

const SubmitForm = () => {
  return (
    <div className='sb'>
      <video src={enot} autoPlay ></video>
    </div>
  )
}

export default SubmitForm;