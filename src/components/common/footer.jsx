import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<hr className="border-t border-gray-300 my-6 md:hidden" />{" "}
			{/* Line before footer on smaller devices */}
			<div className="bg-gray-900 text-gray-300 py-6">
				<div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
					<div className="footer-links mb-4 md:mb-0">
						<ul className="footer-nav-link-list flex">
							<li className="footer-nav-link-item mr-4">
								<Link to="/" className="hover:text-white">
									Home
								</Link>
							</li>
							<li className="footer-nav-link-item mr-4">
								<Link to="/about" className="hover:text-white">
									About
								</Link>
							</li>
							<li className="footer-nav-link-item mr-4">
								<Link
									to="/projects"
									className="hover:text-white"
								>
									Projects
								</Link>
							</li>
							<li className="footer-nav-link-item">
								<Link
									to="/contact"
									className="hover:text-white"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className="footer-credits text-sm text-gray-500">
						© 2024 Ravkeerat S. All Rights Reserved.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
