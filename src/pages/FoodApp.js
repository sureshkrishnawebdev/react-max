import React, { Fragment, useState } from "react";

// ------ Component ----------
// Layout
import Header from "../components/food-app/components/Layout/header/Header";
// Feature
import Meals from "../components/food-app/components/Meals/meals/Meals";
import Cart from "../components/food-app/components/Cart/cart/Cart";

const FoodApp = () => {
	let [isDisplayCart, setIsDisplayCart] = useState(false);

	const displayCartHandler = () => {
		setIsDisplayCart(true);
		console.log(`displayCartHandler, isDisplayCart: ${isDisplayCart}`);
	};

	const hideCartHandler = () => {
		setIsDisplayCart(false);
		console.log(`hideCartHandler, isDisplayCart: ${isDisplayCart}`);
	};

	return (
		<Fragment>
			<Header onDisplayCartHandler={displayCartHandler} />
			{isDisplayCart && <Cart onHideCartHandler={hideCartHandler} />}
			<main>
				<Meals />
			</main>
		</Fragment>
	);
};

export default FoodApp;
