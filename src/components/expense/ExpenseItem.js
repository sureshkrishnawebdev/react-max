import React from 'react';
// import './ExpenseItem.css';     // no external library required
import './ExpenseItem.scss';    // external library required

const ExpenseItem = () => {

    const expenseDate = new Date(7, 7, 2022).toISOString();
    const expenseTitle = 'React - The Complete Guide (incl Hooks, React Router, Redux)';
    const expenseAmount = 450;

    return (
        <div className="expense-item">
            <div> { expenseDate } </div>
            <div className="expense-item__description">
                <h2> { expenseTitle } </h2>
                <div className="expense-item__price"> ${ expenseAmount } </div>
            </div>
        </div>
    )
}

export default ExpenseItem;