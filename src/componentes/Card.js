import React from 'react';
import '../componentes/Card.css';
import bb from '../assets/react1.jpg';
import data from '../data';


const Card = () => {
  return (
    <div >
      <h1 className='heading'>projects</h1>
    <div className='cardcon'>

        {data.map((details,index)=>{
            return(
                <div className='cards' >
                <img src={details.imgs} alt='photo' style={{height:300,width:390}}/>
                <h1>{details.heading}</h1>
                <p>{details.para}</p>
                <div className='buttons'>
                <button className='btn'>view</button>
                <button className='btn'>source</button>
                </div>
            </div>
            )
        })}
        
    </div>
    </div>

  )
}

export default Card