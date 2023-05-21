import '../componentes/Homeimg.css';
import React from 'react';
import photo1 from '../assets/photo1.jpg'
import { Link } from 'react-router-dom';

const Homeimg = () => {
  return (
    
    <div className='hero'>
      <div className='mask'>
      <img className='imges' src={photo1} />
      </div>
      <div className='content'>
        <p>HI I'M A FREELANCER</p>
        <h1>React <br></br> Developer</h1>
        <Link to="/project" className='btn'>Project</Link>
        <Link to="/contact" className='btn btn-light'>contact</Link>
      </div>
    </div>
    
  )
}

export default Homeimg
