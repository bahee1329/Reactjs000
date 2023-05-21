import '../componentes/Aboutimg.css';
import React from 'react';

const Aboutimg = (props) => {
  return (
    <div className='project'>
      <div className='projectcon'>
      <img className='pimg' src={props.imgs} alt="pto"/>
      </div>

      <div className='contentx'>
        <h1>{props.heading}</h1>
        <p>
          {props.para}
        </p>
      </div>
    </div>
  )
}

export default Aboutimg
