import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./component/Budget";
import Remaining from "./component/Remaining";
import SpentSoFar from "./component/SpentSoFar";
import ExpenseList from "./component/ExpenseList";

const App=()=>{
  return (
    <div className="container">
      <h1 className="mt-3">Buget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget/>
        </div>
        <div className="col-sm">
          <Remaining/>
        </div>
        <div className="col-sm">
          <SpentSoFar/>
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList/>
        </div>
      </div>
    </div>
  )


}

export default App;