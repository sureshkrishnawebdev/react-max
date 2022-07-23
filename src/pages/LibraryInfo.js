import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// ----- Components ----
// Layout
import Header from '../components/library-info/layout/header/Header';
// Functional
import Category from '../components/library-info/components/category/Category';

const LibraryInfo = () => {
    return (
        <Fragment>
            <Header />     
        <main>
           <Switch>
           <Route path="/library-info/:category">
                <Category />
            </Route>
           </Switch>
        </main>
    </Fragment>
    )
}

export default LibraryInfo;