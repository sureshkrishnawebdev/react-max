import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import classes from "./Header.module.css";

const Header = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink activeClassName={classes.active} to="/library-info/basic">
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
		</header>
	);
};

export default Header;
