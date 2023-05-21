import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../componentes/Navbar.css';
import{FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [click,setclick]=useState(false);
    const [normal,setnormal]=useState(false);

     function Changer (){
      if(window.scrollY >=1){
           setnormal(true);
      }
      else{
        setnormal(false);
      }
     }

    window.addEventListener("scroll",Changer)     
    function Clicker(){
         setclick(!click)
    }
  return (
    <div className={normal ? ("Header Headerbg") : ("Header")}>
      <div className='nav-pto'>
      <Link to="/"><h1>portfolio.</h1></Link>
      </div>
      <ul  className={click ? ("nav-menu"):("nav-menu active")}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Project">Project</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      
    
      <div className='icon' onClick={Clicker}>
        {click?(<FaTimes size={40}/>):(<FaBars size={40}/>)}
        
      </div>
    </div>
  )
}

export default Navbar
