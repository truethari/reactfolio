import React from "react";

import "./styles/logo.css";

const Logo = (props) => {
	const { width } = props;

	return (
		<React.Fragment>
			<img src="logo.png" alt="logo" className="logo" width={width} />
		</React.Fragment>
	);
};

export default Logo;
