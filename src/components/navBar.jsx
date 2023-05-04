import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./navBar.css";

const NavBar = () => {
	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li className="nav-item">
								<Link to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link to="/">About</Link>
							</li>
							<li className="nav-item">
								<Link to="/">Projects</Link>
							</li>
							<li className="nav-item">
								<Link to="/">Articles</Link>
							</li>
							<li className="nav-item">
								<Link to="/">Contact</Link>
							</li>
						</ul>
					</div>
					<div className="nav-icon">
						<FontAwesomeIcon icon={faBars} />
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
