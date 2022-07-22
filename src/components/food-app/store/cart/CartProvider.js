import React from 'react';

// Context
import CartContext from './cart-context';


const addCartItemHandler = (item) => { }

const removeCartItemHandler = (id) => { }

const DUMMY_DATA = {
    item: [],
    totalAmount: 0,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler
}


const CartProvider = (props) => {
    return (
        <CartContext.Provider value={DUMMY_DATA}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;