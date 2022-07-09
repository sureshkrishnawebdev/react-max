import React from "react";
// import './ExpenseItem.css';     // no external library required
import "./ExpenseItem.scss"; // external library required

const ExpenseItem = (props) => {
	const day = props.date.toLocaleString("en-IN", { day: "2-digit" });
	const month = props.date.toLocaleString("en-IN", { month: "long" });
	const year = props.date.getFullYear();

	return (
		<div className="expense-item">
			<div>
				<div> {day} </div>
				<div> {month} </div>
				<div> {year} </div>
			</div>
			<div className="expense-item__description">
				<h2> {props.title} </h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
