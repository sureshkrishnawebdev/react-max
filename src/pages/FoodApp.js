import React, { Fragment } from 'react';

// ------ Component ----------
// Layout
import Header from '../components/food-app/components/Layout/header/Header';
// Feature
import Meals from '../components/food-app/components/Meals/meals/Meals';
import Cart from '../components/food-app/components/Cart/cart/Cart';

const FoodApp = () => {
    return (
        <Fragment>
            <Header />
            <Cart />
            <main>
                <Meals />
            </main>
        </Fragment>
    )
}

export default FoodApp;