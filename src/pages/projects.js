import React from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

const Projects = () => {
	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
