import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/">Articles</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					© 2023 Tharindu.dev. All Rights Reserved.
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
