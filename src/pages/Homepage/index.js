import React, { useState, useEffect } from "react";

import NavBar from "../../components/navBar";

import "./homepage.css";

const Homepage = () => {
	return (
		<React.Fragment>
			<div className="page-content">
				<div className="content-wrapper">
					<NavBar />

					<div className="homepage-container">
						<h1>Homepage</h1>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
