import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Project from "../components/projects/project";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		document.title = "Projects";
	}, []);

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

						<div className="subtitle projects-subtitle">
							I've worked on a variety of projects over the years
							and I'm proud of the progress I've made. Many of
							these projects are open-source and available for
							others to explore and contribute to. If you're
							interested in any of the projects I've worked on,
							please feel free to check out the code and suggest
							any improvements or enhancements you might have in
							mind. Collaborating with others is a great way to
							learn and grow, and I'm always open to new ideas and
							feedback.
						</div>

						<div className="projects-list">
							<div className="projects-project">
								<Project
									logo={
										"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
									}
									title="Portfolio"
									description="This website is a portfolio of my work and a place for me to share my thoughts and ideas."
									linkText="View Project"
									link="https://github.com"
								/>
							</div>
							<div className="projects-project">
								<Project
									logo={
										"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"
									}
									title="Portfolio"
									description="This website is a portfolio of my work and a place for me to share my thoughts and ideas."
									linkText="View Project"
									link="https://github.com"
								/>
							</div>
							<div className="projects-project">
								<Project
									logo={
										"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
									}
									title="Portfolio"
									description="This website is a portfolio of my work and a place for me to share my thoughts and ideas."
									linkText="View Project"
									link="https://github.com"
								/>
							</div>
							<div className="projects-project">
								<Project
									logo={
										"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
									}
									title="Portfolio"
									description="This website is a portfolio of my work and a place for me to share my thoughts and ideas."
									linkText="View Project"
									link="https://github.com"
								/>
							</div>
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
