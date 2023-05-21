import '../componentes/prizecard.css'
import React from 'react';
import { Link } from "react-router-dom"

const Prizecard = () => {

    const data = [
        {
            h3: "--Basic--",
            btc: "$ 100",
            days: "-3 days-",
            pages: "-3 pages-",
            dd: "featured",
            des: "Responsive Design"
        },
        {
            h3: "--Normal--",
            btc: "$ 300",
            days: "-5 days-",
            pages: "-5 pages-",
            dd: "Medium",
            des: "Awesome Design"
        },
        
        {
            h3: "--Top--",
            btc: "$ 500",
            days: "-7 days-",
            pages: "-7 pages-",
            dd: "Topper",
            des: "Altimate Design"
        },
    ]
    return (
        <div classname="outer">
            <div className='card-container'>
        {data.map((value, index) => {
            
            return(<>
               < div className='card'>
            <h3>{value.h3}</h3>
            <span className='bar'></span>
            <p className='btc'>{value.btc}</p>
            <p>{value.days}</p>
            <p>{value.pages}</p>
            <p>{value.dd}</p>
            <p>{value.des}</p>
            <Link to="/contact" className='btn'>PURCHASE NOW</Link>
        </div>
               </>)
            }
            )
        }

    
      </div>
    </div >
  )
}

export default Prizecard;
