import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  // Get the current state of expenses
  // We use the brackets so that we can destructure the property we want from
  //  the state object
    const { budget, currency, remaining } = useContext(AppContext);
    const totalExpenses = budget - remaining;

  return (
    <div className="alert alert-primary">
      <span>Spent so far: {currency.symbol}{totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
