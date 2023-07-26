import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  // Get the current state of expenses
  // We use the brackets so that we can destructure the property we want from
  //  the state object
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: £{totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
