import React from 'react';
import '../componentes/Fooder.css'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

const Fooder = () => {
  return (
    <div className='fooder'>
        <div className='foodercon'> 
        <div className='fooderleft'>
          <div className='location'>
            
            
                <FaHome size={30} style={{color : "#fff"}}/>
                <p>123 housing society<br></br>srilanka</p>
                
            
          </div>

          <div className='mobile'>
             
             <p><FaPhone  size={30} style={{color : "#fff"}}/>  1-2425-585-89</p>
          </div>

          <div className='email'>
          
             <p><FaMailBulk size={30} style={{color : "#fff"}}/> info@gmail.com</p>
          </div>
        </div>
        <div className='fooderright'>
           <h2>about the company</h2>
           <p>This is me Fahimul kassan.CEO and Founder of the company.<br></br>
           i enjoy dicussing new projects and design<br></br> challanges</p>
           <div className='social'><FaFacebook size={30} style={{color : "#fff"}}/>
           <FaTwitter size={30} style={{color : "#fff"}}/>
            <FaLinkedin size={30} style={{color : "#fff"}}/>
            </div>
        </div> 
        </div>
    </div>
  ) 
}

export default Fooder
