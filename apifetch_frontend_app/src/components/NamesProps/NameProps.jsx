import React from "react";
import './NamesProps.css'

export default function NameProps(props){
    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm">
                        <img src={props.avatar} alt={props.name}></img>
                        
                    </div>
                    <div className="col-sm">
                        {/* imported  CSS from external file */}
                        <h3 className="gray">{props.name}</h3>
                        {/* Inline styl */}
                        <p style ={{color: "green"}}>City: {props.location}</p>
                        
                        <p>email: {props.email}</p>
                        <p>Birthday: {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday)) }</p>
                    </div>
                </div>
                
                
                
            </li>
        </>
    )
}