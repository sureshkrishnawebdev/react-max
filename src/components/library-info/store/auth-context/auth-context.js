import React from "react";

const authStoreObj = {
	isLoggedIn: false,
	onLogin: () => {},
	onLogout: () => {},
};

const AuthContext = React.createContext(authStoreObj);

export default AuthContext;
