import React from "react";
// import './ExpenseItem.css';     // no external library required
import "./ExpenseItem.scss"; // external library required

const ExpenseItem = (props) => {
	return (
		<div className="expense-item">
			<div> {props.date.toISOString()} </div>
			<div className="expense-item__description">
				<h2> {props.title} </h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
