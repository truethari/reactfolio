import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">Projects</div>

						<div className="subtitle projects-subtitle">
							Here, you'll find a curated list of projects I've
							developed using the{" "}
							<strong>
								MERN (MongoDB, Express.js, React.js, Node.js)
								stack
							</strong>
							. These projects showcase my proficiency in building
							full-stack web applications, employing modern
							technologies and best practices. One of the notable
							projects is my{" "}
							<strong>Capstone project, "Time Master"</strong>,
							which demonstrates my skills in creating
							user-centric applications for efficient time
							management.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
						<br></br>
						<br></br>
						<a
							href={INFO.socials.github}
							className="view-more-link"
						>
							View More <FontAwesomeIcon icon={faGithub} />
						</a>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
