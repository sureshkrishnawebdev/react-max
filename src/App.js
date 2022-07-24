import React, { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// Components - pages
import Home from "./pages/Home";
import ExpenseTracker from "./pages/ExpenseTracker";
import FoodApp from "./pages/FoodApp";
import LibraryInfo from "./pages/LibraryInfo";
// Components - Navigation
import MainHeader from "./components/Layout/MainHeader";
import NotFound from "./pages/NotFound";

function App() {
	console.log(`L1 - inside App compt`);
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
					<Route path="/library-info">
						<LibraryInfo />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</main>
		</Fragment>
	);
}

export default App;
