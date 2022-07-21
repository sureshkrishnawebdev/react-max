import React, { Fragment } from 'react';
import MealList from '../meal-list/MealList';

// Components
import MealSummary from '../meal-summary/MealSummary';

const Meals = () => {

    const DUMMY_DATA = [
        { id: 1, name: 'Idly', description: 'A white heaven', price: 34.567 },
        { id: 2, name: 'Dosa', description: 'A emmy flying saucer', price: 50.047 },
        { id: 3, name: 'Vadai', description: 'More than a donught', price: 28.80 },
        { id: 4, name: 'Pongal', description: 'Pleasent way to go to sleep', price: 40.80 },
    ];

    return (
        <Fragment>
            <MealSummary />
            <MealList meals={DUMMY_DATA} />
        </Fragment>
    )
}

export default Meals;