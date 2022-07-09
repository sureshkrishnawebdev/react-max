import React from "react";
// import './ExpenseItem.css';     // no external library required
import "./ExpenseItem.scss"; // external library required
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2> {props.title} </h2>
				<div className="expense-item__price">
					{" "}
					<span>&#8377;</span> {props.amount}
				</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
