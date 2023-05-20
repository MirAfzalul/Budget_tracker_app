import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
const ExpenseList=()=>{
    const {expenses}=useContext(AppContext);
    

    return(
        <React.Fragment key={expenses.id}>
            <ul className="list-group">
                {expenses.map((expense)=>(
                    <ExpenseItem name={expense.name} cost={expense.cost}/>
                )

                )}
            </ul>

        </React.Fragment>
        
    );
};
export default ExpenseList;