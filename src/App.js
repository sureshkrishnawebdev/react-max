import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

// Components
import Home from './pages/Home';
import ExpenseTracker from './pages/ExpenseTracker';
import FoodApp from './pages/FoodApp';
import MainHeader from './components/Layout/MainHeader';

function App() {
	return (
	  <Fragment>
		  	<MainHeader />
		<main>
			<Route path="/home">
				<Home />
			</Route>
			<Route path="/expense-tracker">
				<ExpenseTracker />
			</Route>
			<Route path="/food-app">
				<FoodApp />
			</Route>
		</main>
	  </Fragment>
	);
  }
  
  export default App;
  