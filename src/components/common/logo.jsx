import React from "react";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	const { width } = props;

	return (
		<React.Fragment>
			<img
				src={INFO.main.logo}
				alt="logo"
				className="logo"
				width={width}
			/>
		</React.Fragment>
	);
};

export default Logo;
