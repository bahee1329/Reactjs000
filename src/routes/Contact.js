import React from 'react';
import Navbar from '../componentes/Navbar';
import Fooder from '../componentes/Fooder';
import Aboutimg from '../componentes/Aboutimg';
import contact from '../assets/contact.jpg';
import Form from '../componentes/Form';



const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Aboutimg  heading="Contact"
                 para=" Lets have a chat"
                 imgs={contact}/>
      <Form/>
      <Fooder/>
    </div>
  )
}

export default Contact
