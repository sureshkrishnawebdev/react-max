import React from 'react';
import { NavLink } from 'react-router-dom';
// styles
import classes from './MainHeader.module.css';

const MainHeader1 = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink  activeClassName={classes.active} to="/home"> Home </NavLink>
                    </li>
                    <li>
                        <NavLink  activeClassName={classes.active} to="/expense-tracker"> ExpenseTracker </NavLink>
                    </li>
                    <li>
                        <NavLink  activeClassName={classes.active} to="/food-app"> FoodApp </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader1;