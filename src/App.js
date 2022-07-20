import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MainHeader from './components/Layout/MainHeader';
import ExpenseTracker from "./pages/ExpenseTracker";
import FoodApp from "./pages/FoodApp";
import Home from "./pages/Home";

function App() {
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
}

export default App;
