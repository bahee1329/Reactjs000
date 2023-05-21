import { Link } from "react-router-dom";
import "../componentes/Aboutcontent.css";
import React from 'react';
import r1 from '../assets/react1.jpg';
import r2 from '../assets/react2.jpg'

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a react front end developer.i create
                responsive secure websides for my clients
            </p>

            <Link to="/contact" className="btn">CONTACT</Link>

        </div>

        <div className="right">
            <div className="con">
           <div className="up">
             <img src={r2} className="img" alt="Rs"/>
           </div>
           <div className="down">
             <img src={r1} className="img" alt="Rs"/>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Aboutcontent