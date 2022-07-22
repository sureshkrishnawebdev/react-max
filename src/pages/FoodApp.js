import React, { useState } from "react";

// ------ Component ----------
// Layout
import Header from "../components/food-app/components/Layout/header/Header";
// Feature
import Meals from "../components/food-app/components/Meals/meals/Meals";
import Cart from "../components/food-app/components/Cart/cart/Cart";
// Providers
import CartProvider from "../components/food-app/store/cart/CartProvider";

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
		<CartProvider>
			<Header onDisplayCartHandler={displayCartHandler} />
			{isDisplayCart && <Cart onHideCartHandler={hideCartHandler} />}
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
};

export default FoodApp;
