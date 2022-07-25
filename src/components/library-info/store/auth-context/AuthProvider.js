import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
	console.log(`L3 -inside AuthProvider`);

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const history = useHistory();

	const loginHandler = () => {
		console.log(`L3 -inside isLoggedIn fn ... triggers component re-execution`);
		setIsLoggedIn(true);
		sessionStorage.setItem("isAuthenticated", "1");
	};

	const logoutHandler = () => {
		console.log(
			`L3 -inside logoutHandler fn ... triggers component re-execution`
		);
		setIsLoggedIn(false);
		sessionStorage.setItem("isAuthenticated", "0");
		history.replace("/library-info");
	};

	useEffect(() => {
		console.log(
			`L3 - inside useEffect ?... doesn't trigger component rexecution but runs only once i.e. during intialization only, with empty dependecy`
		);
		const isAuthenticated = sessionStorage.getItem("isAuthenticated");
		if (isAuthenticated === "1") {
			console.log(
				`L3 - inside status validation fn via sessionstorage ... triggers component re-execution`
			);
			setIsLoggedIn(true);
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn: isLoggedIn,
				onLogin: loginHandler,
				onLogout: logoutHandler,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
