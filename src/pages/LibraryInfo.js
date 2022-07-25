import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

// ----- Components ----
// Layout
import Header from "../components/library-info/layout/header/Header";
// Functional
import Category from "../components/library-info/components/category/Category";

// context
import AuthContext from "../components/library-info/store/auth-context/auth-context";
import AuthProvider from "../components/library-info/store/auth-context/AuthProvider";

const LibraryInfo = () => {
	console.log(`L2 - inside LibraryInfo compt`);

	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const history = useHistory();

	// useEffect(() => {
	// 	console.log(
	// 		`L2 - inside useEffect ?... doesn't trigger component rexecution but runs only once i.e. during intialization only, with empty dependecy`
	// 	);
	// 	const isAuthenticated = sessionStorage.getItem("isAuthenticated");
	// 	if (isAuthenticated === "1") {
	// 		console.log(
	// 			`inside status validation fn via sessionstorage ... triggers component re-execution`
	// 		);
	// 		setIsLoggedIn(true);
	// 	}
	// }, []);

	// const loginHandler = () => {
	// 	console.log(`L2 -inside isLoggedIn fn ... triggers component re-execution`);
	// 	setIsLoggedIn(true);
	// 	sessionStorage.setItem("isAuthenticated", "1");
	// };

	// const logoutHandler = () => {
	// 	console.log(
	// 		`L2 -inside logoutHandler fn ... triggers component re-execution`
	// 	);
	// 	setIsLoggedIn(false);
	// 	sessionStorage.setItem("isAuthenticated", "0");
	// 	history.replace("/library-info");
	// };

	return (
		<Fragment>
			<AuthProvider>
				<Header
				// isAuthenticated={isLoggedIn}
				// onLoginHandler={loginHandler}
				// onLogoutHandler={logoutHandler}
				/>

				<main>
					<Switch>
						<Route path="/library-info/:category">
							<Category />
						</Route>
					</Switch>
				</main>
			</AuthProvider>
		</Fragment>
	);
};

export default LibraryInfo;
