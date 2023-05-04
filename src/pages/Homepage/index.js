import React, { useState, useEffect } from "react";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

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
						<div className="homepage-title">
							Full-stack web app and mobile developer, and amateur
							astronaut.
						</div>

						<div className="homepage-subtitle">
							I am a backend developer with expertise in Node.js.
							I have experience in building scalable, secure and
							reliable web applications using various frameworks
							and technologies. I enjoy solving complex problems
							and learning new skills. I am passionate about
							creating high-quality code that follows best
							practices and industry standards. I am always
							looking for new challenges and opportunities to grow
							as a developer.
						</div>

						<div className="homepage-socials">
							<FontAwesomeIcon
								icon={faTwitter}
								className="homepage-social-icon"
							/>
							<FontAwesomeIcon
								icon={faGithub}
								className="homepage-social-icon"
							/>
							<FontAwesomeIcon
								icon={faStackOverflow}
								className="homepage-social-icon"
							/>
							<FontAwesomeIcon
								icon={faInstagram}
								className="homepage-social-icon"
							/>
							<FontAwesomeIcon
								icon={faMailBulk}
								className="homepage-social-icon"
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
