import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";

// Context
import AuthContext from "../../store/auth-context/auth-context";

// Styles
import classes from "./Header.module.css";

const Header = () => {
	console.log(`L4 - inside Header compt`);

	const authCtx = useContext(AuthContext);

	let content = (
		<Fragment>
			<h2> LibraryInfo </h2>
			<div className={classes.actions}>
				<button className="btn" onClick={authCtx.onLogin}>
					Login
				</button>
			</div>
		</Fragment>
	);

	if (authCtx.isLoggedIn) {
		content = (
			<Fragment>
				<nav>
					<ul>
						<li>
							<NavLink
								activeClassName={classes.active}
								to="/library-info/basic"
							>
								Basic
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={classes.active}
								to="/library-info/intermediate"
							>
								Intermediate
							</NavLink>
						</li>
						<li>
							<NavLink
								activeClassName={classes.active}
								to="/library-info/advanced"
							>
								Advanced
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className={classes.actions}>
					<button className="btn" onClick={authCtx.onLogout}>
						Logout
					</button>
				</div>
			</Fragment>
		);
	}

	return <header className={classes.header}>{content}</header>;
};

export default Header;
