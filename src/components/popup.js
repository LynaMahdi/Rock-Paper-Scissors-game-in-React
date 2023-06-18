import React from "react";
import './popup.css'
function Pop(props){
    return(props.trigger)?(
        <div className="Pop">
            <div className="PopI">
                <h3>Rules</h3>
                {props.children}
            </div>

        </div>
    ):"";
}

export default Pop