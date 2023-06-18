import React ,{useState} from "react";
import triangle from '.././bg-triangle.svg'
import cisors from '.././icon-scissors.svg'
import paper from '.././icon-paper.svg'
import rock from '.././icon-rock.svg';
import { Link } from "react-router-dom";

function Start({im,setIm,setImage}){
       
    return(
        <div className="play">
        <img src={triangle} />
        <Link to="/choosed" onClick={()=> {setIm("InnerCircle1");
        setImage(paper)}} className="cisors">
            
           <div className="InnerCircle1"></div>
           <img  className="pl" src={paper} />
        </Link>

       <Link to="/choosed" onClick={()=>{setIm("InnerCircle2");
    setImage(cisors)}} className="rock">
          <div className="InnerCircle2"></div>
         <img   className="pl" src={cisors} />
       </Link>

       <Link to="/choosed" onClick={()=>{setIm("InnerCircle3");
    setImage(rock)}} className="paper">
        <div className="InnerCircle3"></div>  
         <img  className="pl" src={rock} />
       </Link>
       
      </div>
    );
}

export default  Start;