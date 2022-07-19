import React from "react";
import { Route } from "react-router-dom";
import ExpenseTracker from "./pages/ExpenseTracker";
import FoodApp from "./pages/FoodApp";
import Home from "./pages/Home";

function App() {
	return (
		<React.Fragment>
			<Route path="/home">
				<Home />
			</Route>
			<Route path="/expense-tracker">
				<ExpenseTracker />
			</Route>
			<Route path="/food-app">
				<FoodApp />
			</Route>
		</React.Fragment>
	);
}

export default App;
