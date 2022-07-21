import React, { Fragment } from 'react';

// Styles
import { FaCartPlus } from 'react-icons/fa';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    return (
        <Fragment>
            <button className={classes.button}>
                <span className={classes.icon}> 
                    <FaCartPlus />
                </span>
                <span> Your Cart </span>
                <span className={classes.badge}> 4 </span>
            </button>
        </Fragment>
    )
}

export default HeaderCartButton;