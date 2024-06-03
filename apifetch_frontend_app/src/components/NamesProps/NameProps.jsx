import React from "react";
import './NamesProps.css'

export default function NameProps(props){
    return (
        <>
            <li>
                {/* imported  CSS from external file */}
                <p className="redText"><img src={props.avatar} alt={props.name}></img>"{props.name}</p>
                
                {/* Inline styl */}
                <p style ={{color: "green"}}>City: {props.location}</p>
                
                <p>email: {props.email}</p>
                <p>Birthday: {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday)) }</p>
            </li>
        </>
    )
}