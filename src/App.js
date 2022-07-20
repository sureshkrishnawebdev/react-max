import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// Components - pages
import Home from './pages/Home';
import ExpenseTracker from './pages/ExpenseTracker';
import FoodApp from './pages/FoodApp';
// Components - Navigation
import MainHeader from './components/Layout/MainHeader';

function App() {
	return (
	  <Fragment>
		  	<MainHeader />
		<main>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/home" />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/expense-tracker">
					<ExpenseTracker />
				</Route>
				<Route path="/food-app">
					<FoodApp />
				</Route>
			</Switch>
		</main>
	  </Fragment>
	);
  }
  
  export default App;
  