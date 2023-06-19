import React ,{useEffect, useState} from "react";
import './choosed.css'
import cisors from '.././icon-scissors.svg'
import paper from '.././icon-paper.svg'
import rock from '.././icon-rock.svg';
import { Link } from "react-router-dom";
function Choosed({im , image , setScore,score}){ 
    
    const [count,setCount]=useState(3)
    const [house, setHouse] = useState("");
    const[imagehouse,setImageHouse]=useState("")
    const[win,setWin]=useState("")
    

    const winner=()=>{
    
        if (im === "rock1" && imagehouse === "cisors1") {
            setWin("win");
            setScore(score + 1);
          } else if (im === "rock1" && imagehouse === "paper1") {
            setWin("lose");
            setScore(score - 1);
          } else if (im === "cisors1" && imagehouse === "paper1") {
            setWin("win");
            setScore(score + 1);
          } else if (im === "cisors1" && imagehouse === "rock1") {
            setWin("lose");
            setScore(score - 1);
          } else if (im === "paper1" && imagehouse === "rock1") {
            setWin("win");
            setScore(score + 1);
          } else if (im === "paper1" && imagehouse === "cisors1") {
            setWin("lose");
            setScore(score - 1);
          }else{
            setWin("draw");
          }


          console.log("winne "+win)
          console.log("image house : "+imagehouse)
          console.log("me: "+im)

    }
    const newHousePick = () => {
        let i=Math.floor(Math.random() * 3) + 1;
        const choices = ["paper1","cisors1","rock1"];
        const imChoosed=[paper,cisors,rock]
        setHouse(imChoosed[i]);
        setImageHouse(choices[i])

      };
      useEffect(() => {
        newHousePick();
      }, []);


    useEffect(()=>{
        const timer=count>0? setInterval(()=>{
            setCount(count-1)
        
        },1000):winner();

       console.log(count) 


       return () => {
        clearInterval(timer);
      };
    },[count])

    console.log("winne "+win)

  return (
    <>
    
         <div  className="chosed">
           <h4>YOU PICKED</h4>
           <div  id="color"  className={im}></div>
            <img   className="p1" src={image} />
        </div>

        {win == "win" && (
        <div className="game__play">
          <span className="text">You Win</span>
          <Link to="/" className="play-again" onClick={() => setHouse("")}>
            Play Again
          </Link>
        </div>
      )}

        {win == "lose" && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/" className="play-again" onClick={() => setHouse("")}>
            Play Again
          </Link>
        </div>
        
      )}

        {win == "draw" && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}

        <div  className="chosed1">
           <h4>THE HOUSE PICKED</h4>
           {count == 0 ? (
            <>
              <div  className={imagehouse} ></div>
              <img   className="p1" src={house} />
          </>
        ) : (
          <div></div>
        )}
          
          
        </div>
    </>
  );
}

export default Choosed