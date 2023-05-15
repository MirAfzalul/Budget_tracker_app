import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList=()=>{
    const expenses=[
        {id:1, name: "Shopping", cost: 50},
        {id:2, name: "Holiday", cost: 300},
        {id:3, name: "Gas", cost: 70},
        {id:4, name: "Transportation", cost: 40},
        {id:5, name: "Child care", cost: 500}
    ];

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