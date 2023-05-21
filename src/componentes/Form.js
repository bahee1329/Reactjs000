import "../componentes/form.css";
import React from 'react'

const Form = () => {
  return (
     <>
     <form className="form ">
        
            <label htmlFor="fullname">your Name</label>
            <input type="text" id="fullname"/>
        

        
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
        

        
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject"/>
        

        
            <label htmlFor="Message">Message</label>
            <textarea id="Message" rows={5} placeholder="Type your message here"/>
        

             <button className="btn">SUBMIT</button>
     </form>
     </>
  )
}

export default Form;