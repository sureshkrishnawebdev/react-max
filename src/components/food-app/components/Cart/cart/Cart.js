import React, { Fragment } from "react";

// Component
import Modal from "../../UI/modal/Modal";

// Styles
import classes from "./Cart.module.css";
import { FaRupeeSign } from "react-icons/fa";

const Cart = (props) => {
	const DUMMY_DATA = [
		{ id: 1, name: "Idly", description: "A white heaven", price: 34.567 },
		{ id: 3, name: "Vadai", description: "More than a donught", price: 28.8 },
	];

	const cartItems = DUMMY_DATA.map((item) => {
		return <li key={item.id}> {item.name} </li>;
	});

	return (
		<Modal onHideCartHandler={props.onHideCartHandler}>
			<Fragment>
				<ul className={classes["cart-items"]}>{cartItems}</ul>
				<div className={classes.total}>
					<span> Total Amount </span>
					<span>
						{" "}
						<FaRupeeSign /> 40{" "}
					</span>
				</div>
			</Fragment>
			<div className={classes.actions}>
				<button
					className={classes["button--alt"]}
					onClick={props.onHideCartHandler}
				>
					{" "}
					Close{" "}
				</button>
				<button> Submit </button>
			</div>
		</Modal>
	);
};

export default Cart;
