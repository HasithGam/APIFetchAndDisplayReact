import React from "react";
import './NamesProps.css'

export default function NameProps(props){
    return (
        <>
            <li className="list-group-item">
                <div className="row align-items-center">
                    <div className="col-2">
                        <img src={props.avatar} alt={props.name} className="border rounded-circle border-secondary shadow"></img>
                        
                    </div>
                    <div className="col-10">
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