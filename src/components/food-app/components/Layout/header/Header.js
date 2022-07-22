import React, { Fragment } from "react";

// Component
import HeaderCartButton from "../header-cart-btn/HeaderCartButton";

// Styles
import classes from "./Header.module.css";
import mealsImg from "../../../assets/main-meals.jpg";

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1> Soru a.k.a Meals </h1>
				<HeaderCartButton onDisplayCartHandler={props.onDisplayCartHandler} />
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImg} alt="Delicious food" />
			</div>
		</Fragment>
	);
};

export default Header;
