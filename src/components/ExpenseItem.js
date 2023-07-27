import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { DELETE_EXPENSE, ADD_EXPENSE, RED_EXPENSE } from "../ActionNames";

const ExpenseItem = (props) => {
    // It appears that this component will need to be able to modify the
    //  application state, so we need to use dispatch to dispatch actions.
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        // We send an Action to dispatch.
        dispatch({
            type: DELETE_EXPENSE,
            payload: props.id,
        });
    };

    const changeAllocation = (name, type, amount) => {
        const expense = {
            name: name,
            cost: amount,
        };

        dispatch({
            type: type,
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency.symbol}{props.cost}</td>
            <td>
                <input type="image" onClick={() => changeAllocation(props.name, ADD_EXPENSE, 10)} src="green-plus.png" />
            </td>
            <td>
              <input type="image" onClick={() => changeAllocation(props.name, RED_EXPENSE, 10)} src="red-minus.png" />
            </td>

            <td>
                <TiDelete onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
