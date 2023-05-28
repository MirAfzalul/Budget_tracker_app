import React,{useContext} from "react";
import {MdDeleteForever} from "react-icons/md";
import { AppContext } from "../context/AppContext";
import{TiDelete}from "react-icons/ti";

const ExpenseItem=(props)=>{
    const{dispatch}= useContext(AppContext);
    const handleDeleteExpense=()=>{
        dispatch({
            type:'DELETE_EXPENSE',
            payload:props.id,  
        });
    };
    console.log(props.cost);
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge bg-primary mr-3">
                ${props.cost}
                   
                </span>
                <MdDeleteForever size="1.5em" onClick={handleDeleteExpense}></MdDeleteForever> 
            </div>
        </li>
    )
}
export default ExpenseItem;