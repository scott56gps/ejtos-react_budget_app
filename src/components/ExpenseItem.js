import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { DELETE_EXPENSE, ADD_EXPENSE } from "../ActionNames";

const ExpenseItem = (props) => {
    // It appears that this component will need to be able to modify the
    //  application state, so we need to use dispatch to dispatch actions.
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        // We send an Action to dispatch.
        dispatch({
            type: DELETE_EXPENSE,
            payload: props.id,
        });
    };

    const increaseAllocation = (name, amount) => {
        const expense = {
            name: name,
            cost: amount,
        };

        dispatch({
            type: ADD_EXPENSE,
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td>
              <button onClick={() => increaseAllocation(props.name, 10)}>+</button>
            </td>
            <td>
                <TiDelete onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
