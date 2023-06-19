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
        <Link to="/choosed" onClick={()=> {setIm("paper1");
        setImage(paper)}} className="cisors">
            
           <div className="paper1"></div>
           <img  className="pl" src={paper} />
        </Link>

       <Link to="/choosed" onClick={()=>{setIm("cisors1");
    setImage(cisors)}} className="rock">
          <div className="cisors1"></div>
         <img   className="pl" src={cisors} />
       </Link>

       <Link to="/choosed" onClick={()=>{setIm("rock1");
    setImage(rock)}} className="paper">
        <div className="rock1"></div>  
         <img  className="pl" src={rock} />
       </Link>
       
      </div>
    );
}

export default  Start;