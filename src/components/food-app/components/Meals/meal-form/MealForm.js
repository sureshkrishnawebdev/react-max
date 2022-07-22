import React from "react";

// Components
import Input from "../../UI/input/Input";

// Styles
import classes from "./MealForm.module.css";

const MealForm = (props) => {
	return (
		<form className={classes.form}>
			<Input
				label="Amount"
				input={{
					id: `amount_${props.id}`,
					type: "number",
					min: "1",
					max: "5",
					step:"1",
					defaultValue:"1",					
				}}
			/>
			<button> + Add </button>
		</form>
	);
};

export default MealForm;
