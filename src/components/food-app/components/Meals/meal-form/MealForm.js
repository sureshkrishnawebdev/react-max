import React from "react";

// Styles
import classes from './MealForm.module.css';

const MealForm = (props) => {

	return (
		<form className={classes.form}>
            <label htmlFor={`amount_${props.id}`}>Amount</label>
			<input
				type="number"
				id={`amount_${props.id}`}
				min="1"
				max="5"
				step="1"
				defaultValue="1"
			/>
			<button> + Add </button>
		</form>
	);
};

export default MealForm;
