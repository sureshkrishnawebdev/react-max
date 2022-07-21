import React  from "react";

// Components
import MealItem from "../meal-item/MealItem";

// Styles
import classes from './MealList.module.css';
import Card from '../../UI/card/Card';

const MealList = (props) => {
	const mealList = props.meals.map((meal) => {
		return (
			<MealItem
				key={meal.id}
				id={meal.id}
				name={meal.name}
				description={meal.description}
				price={meal.price.toFixed(2)}
			/>
		);
	});
	return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
};

export default MealList;
