import React from 'react';
import { Link } from 'react-router-dom';

const MainHeader1 = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/home"> Home </Link>
                    </li>
                    <li>
                        <Link to="/expense-tracker"> ExpenseTracker </Link>
                    </li>
                    <li>
                        <Link to="/food-app"> FoodApp </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader1;