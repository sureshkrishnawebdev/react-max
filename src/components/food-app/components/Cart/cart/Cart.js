import React from 'react';

// Component
import Modal from '../../UI/modal/Modal';

// Styles
import classes from './Cart.module.css';
import { FaRupeeSign } from 'react-icons/fa';

const Cart = () => {

    const DUMMY_DATA = [
        { id: 1, name: 'Idly', description: 'A white heaven', price: 34.567 },
        { id: 3, name: 'Vadai', description: 'More than a donught', price: 28.80 },
    ];

    const cartItems = DUMMY_DATA.map( item => {
        return <li key={item.id}> {item.name} </li>
    });

    return (
        <Modal>
          <div>
              <ul className={classes['cart-items']}>
                  {cartItems}
              </ul>
              <div className={classes.total}>
                <span> Total Amount </span>
                <span> <FaRupeeSign /> 40 </span>
              </div>
          </div>
          <div className={classes.actions}>
              <button className={classes['button--alt']}> Close </button>
              <button> Submit </button>
          </div>
        </Modal>
    )
}

export default Cart;