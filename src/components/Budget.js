import React, { useContext, useState } from "react";
import { SET_BUDGET } from "../ActionNames";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const { dispatch, budget, currency, remaining } = useContext(AppContext);
    const [changedBudget, setChangedBudget] = useState(budget);
    const MAX_BUDGET_VALUE = 20000;

    const handleChangeBudget = () => {
        if (changedBudget > MAX_BUDGET_VALUE) {
            alert("The new budget cannot exceed 20,000");
            return;
        }
        const spent = budget - remaining;
        if (changedBudget < spent) {
            alert(`You cannot reduce the budget value lower than the spending.  Please select a value greater than ${spent}.`);
            return;
        }
        dispatch({
            type: SET_BUDGET,
            payload: changedBudget
        });
    };

    return (
        <div className="alert alert-secondary" style={{display: "flex", alignItems: "center"}}>
          <div style={{display: "flex", alignItems: "center"}}>
        <span>Budget: {currency.symbol}</span>
            <input type="number" step="10" min="0" max={MAX_BUDGET_VALUE} style={{width: "75%", flex: 1}}
                   value={changedBudget} onChange={(event) => setChangedBudget(event.target.value)} />
          </div>
          {changedBudget !== budget ? (
                <button className="btn btn-primary" style={{ width: "40%", marginLeft: "6px"}} onClick={handleChangeBudget}>Change Budget</button>
                ) : null}
        </div>
    );
};

export default Budget;
