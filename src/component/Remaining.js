import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";
import App from "../App";

const Remaining=()=>{
    const {expenses,budget}=useContext(AppContext);
    const totalExpense=expenses.reduce((total, item)=>{
        return total=(total+item.cost);
    },0);

    return(
        <div className="alert alert-success">
            <span>Remaining: ${budget-totalExpense}</span>
            </div>
    )
}

export default Remaining;