import React, { useState, useEffect } from "react";

import NavBar from "../../components/navBar";
import Logo from "./../../components/logo";

import "./homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize]);

	const handleScroll = () => {
		let scroll = Math.round(window.pageYOffset, 2);

		let newLogoSize = 80 - (scroll * 4) / 10;

		if (newLogoSize < oldLogoSize) {
			if (newLogoSize > 40) {
				setLogoSize(newLogoSize);
				setOldLogoSize(newLogoSize);
				setStayLogo(false);
			} else {
				setStayLogo(true);
			}
		} else {
			setLogoSize(newLogoSize);
			setStayLogo(false);
		}
	};

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
	};

	return (
		<React.Fragment>
			<div className="page-content">
				<div className="content-wrapper">
					<NavBar />

					<div className="logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} />
						</div>
					</div>

					<div className="homepage-container">
						<h1>Homepage</h1>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
