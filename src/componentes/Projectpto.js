import React from 'react';
import "../componentes/Projectimg.css";
import pimg from "../assets/photo23.jpg"

const Projectpto = () => {
  return (
    <div className='project'>
      <div className='projectcon'>
      <img className='pimg' src={pimg} alt="pto"/>
      </div>

      <div className='content'>
        <h1>projects</h1>
        <p>
          some of my most recent works
        </p>
      </div>


    </div>
  )
}

export default Projectpto;
