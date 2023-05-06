import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<div className="social-icon">
					<FontAwesomeIcon icon={faTwitter} className="social-icon" />
				</div>
				<div className="social-text">Follow on Twitter</div>
			</div>
			<div className="social">
				<div className="social-icon">
					<FontAwesomeIcon icon={faGithub} className="social-icon" />
				</div>
				<div className="social-text">Follow on GitHub</div>
			</div>
			<div className="social">
				<div className="social-icon">
					<FontAwesomeIcon
						icon={faLinkedin}
						className="social-icon"
					/>
				</div>
				<div className="social-text">Follow on LinkedIn</div>
			</div>
			<div className="social">
				<div className="social-icon">
					<FontAwesomeIcon
						icon={faInstagram}
						className="social-icon"
					/>
				</div>
				<div className="social-text">Follow on Instagram</div>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<div className="social-icon">
						<FontAwesomeIcon icon={faEnvelope} />
					</div>

					<div className="social-text">example@example.com</div>
				</div>
			</div>
		</div>
	);
};

export default Socials;
