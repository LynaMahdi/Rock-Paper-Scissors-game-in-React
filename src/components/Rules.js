import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pop from './popup';
import rules from '.././image-rules.svg'
import close from '.././icon-close.svg'

function Rules(){
    const [ope,setOpen]=useState(false)
    return(<>
            <Link onClick={()=>setOpen(true)} className="Rules" ><h>Rules</h> </Link>
           <Pop trigger={ope}><img  onClick={()=>setOpen(false)} className='close' src={close} /><img  className='ru' src={rules} /></Pop>
    </>);
}


export default Rules