import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// ----- Components ----
// Layout
import Header from "../components/library-info/layout/header/Header";
// Functional
import Category from "../components/library-info/components/category/Category";

// context
import AuthProvider from "../components/library-info/store/auth-context/AuthProvider";

const LibraryInfo = () => {
	console.log(`L2 - inside LibraryInfo compt`);

	return (
		<Fragment>
			<AuthProvider>
				<Header />

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
