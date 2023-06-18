import './main.css'
import logo from '.././logo.svg';
import { Link } from "react-router-dom";
import Pop from './popup';
import rules from '.././image-rules.svg'
import close from '.././icon-close.svg'
import { useState } from 'react';

function Main(){
    const [ope,setOpen]=useState(false)
   
    return (
        <>
           <div className="sc">
             <img  src={logo} />
             <div className="Score">
                <h1>Score</h1>
             </div>
           </div>
                    
           <Link onClick={()=>setOpen(true)} className="Rules" ><h>Rules</h> </Link>
           <Pop trigger={ope}><img  onClick={()=>setOpen(false)} className='close' src={close} /><img  className='ru' src={rules} /></Pop>
        
        </>
    )
}


export default Main