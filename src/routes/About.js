import React from 'react';
import Navbar from '../componentes/Navbar';
import Fooder from '../componentes/Fooder';
import Aboutimg from '../componentes/Aboutimg';
import imgs from '../assets/about.jpg';
import Aboutcontent from '../componentes/Aboutcontent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Aboutimg heading="About Us"
                para="I am a friendly-frontend developer"
                imgs={imgs}/>
                <Aboutcontent/>
      <Fooder/>
    </div>
  )
}

export default About
