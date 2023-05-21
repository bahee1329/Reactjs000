import React from 'react'
import Navbar from '../componentes/Navbar';
import Fooder from '../componentes/Fooder';
import Projectpto from '../componentes/Projectpto';
import Prizecard from '../componentes/prizecard';
import Card from '../componentes/Card';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <Projectpto/>
      <Card/>
      <Prizecard/>
      <Fooder/>
    </div>
  )
}

export default Project
