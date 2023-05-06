import React from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import "./styles/projects.css";

const Projects = () => {
	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I’ve made trying to put my dent in the
							universe.
						</div>
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
