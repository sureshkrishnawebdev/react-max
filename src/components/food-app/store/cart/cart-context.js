import React from 'react';

const defaultCartItem = {
	item: [],
	totalAount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
};

const CartContext = React.createContext(defaultCartItem);

export default CartContext;