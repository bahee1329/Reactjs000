import React from "react";
import p1 from "../src/assets/p1.jpg";
import p3 from "../src/assets/p3.jpg";
import p0 from "../src/assets/p0.jpg";

const data =[
    {
        imgs : p1 ,
        heading:"REACT JS" ,
        para:"The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript." ,
    },
    {
        imgs :p3 ,
        heading: "PYTHON",
        para: "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to programs and isnt specialized for any specific problems." ,
    },
    {
        imgs : p0,
        heading: "JAVASCRIPT" ,
        para:"avaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.it is very usefull language so many comanies use the javascript and javascript frame works" ,
    },

]
console.log(data);

export default data;
