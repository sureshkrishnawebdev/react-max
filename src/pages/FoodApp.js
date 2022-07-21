import React, { Fragment } from 'react';

// ------ Component ----------
// Layout
import Header from '../components/food-app/components/Layout/header/Header';
// Feature
import Meals from '../components/food-app/components/Meals/meals/Meals';

const FoodApp = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Meals />
            </main>
        </Fragment>
    )
}

export default FoodApp;