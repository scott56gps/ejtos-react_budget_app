import React, { useContext, useState } from "react";
import { CHG_CURRENCY } from "../ActionNames";
import { DOLLAR, EURO, POUND, RUPPEE } from "../constants/Currencies";
import { AppContext } from "../context/AppContext";

const CurrencyChanger = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);

    const changeCurrencyState = (newCurrency) => {
        dispatch({
            type: CHG_CURRENCY,
            payload: newCurrency
        });
    };

    return (
        <div className="alert alert-secondary">
            <div className="dropdown show">
              <a className="btn btn-success dropdown-toggle" style={{backgroundColor: "lightgreen"}} role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                    Currency ({currency.symbol} {currency.name})
                </a>

              <div className={isOpen ? 'dropdown-menu show' : 'dropdown-menu'} style={{color: "black", backgroundColor: "lightgreen"}}aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" onClick={() => changeCurrencyState(DOLLAR)}>{DOLLAR.symbol} {DOLLAR.name}</a>
                    <a className="dropdown-item" onClick={() => changeCurrencyState(POUND)}>{POUND.symbol} {POUND.name}</a>
                    <a className="dropdown-item" onClick={() => changeCurrencyState(EURO)}>{EURO.symbol} {EURO.name}</a>
                    <a className="dropdown-item" onClick={() => changeCurrencyState(RUPPEE)}>{RUPPEE.symbol} {RUPPEE.name}</a>
                </div>
            </div>
        </div>
    );
};

export default CurrencyChanger;
