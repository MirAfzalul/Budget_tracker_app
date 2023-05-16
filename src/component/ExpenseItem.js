import React from "react";
import {MdDeleteForever} from "react-icons/md";


const ExpenseItem=(props)=>{
    console.log(props.cost);
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge bg-primary mr-3">
                ${props.cost}
                   
                </span>
                <MdDeleteForever size="1.5em"></MdDeleteForever> 
            </div>
        </li>
    )
}
export default ExpenseItem;