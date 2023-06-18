import React ,{useState} from "react";
import './choosed.css'
import cisors from '.././icon-scissors.svg'
import paper from '.././icon-paper.svg'
import rock from '.././icon-rock.svg';

function Choosed({im , image}){ 
    

    const circleColor=["InnerCircle1","InnerCircle2","InnerCircle3"]
    const imChoosed=[paper,cisors,rock]

    let i=Math.floor(Math.random() * 3) + 1;

  return (
    <>
    
         <div  className="chosed">
           <h4>YOU PICKED</h4>
           <div  id="color"  className={im}></div>
            <img id="imo"  className="p1" src={image} />
        </div>


        <div  className="chosed1">
           <h4>THE HOUSE PICKED</h4>
           <div id="color1" className={circleColor[i]}></div>
           <img  className="p1" src={imChoosed[i]} />
        </div>
    </>
  );
}

export default Choosed