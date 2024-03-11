import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const currentSEO = SEO.find((item) => item.page === "home");
		// You can perform any side effects or data fetching here
		// For example:
		// fetchSomeData();
	}, []); // This useEffect runs only once when the component mounts

	return (
		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="keywords" />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-container">
						{/* Move the title below the navigation bar */}
						<div className="title homepage-title">
							{INFO.homepage.title}
						</div>

						<div className="homepage-first-area flex">
							<div className="homepage-first-area-left-side w-full md:w-1/2">
								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side w-full md:w-1/2">
								<div className="homepage-image-container"></div>
							</div>
						</div>
						{/* home page */}
						<div className="homepage-socials flex justify-center mt-8">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
								className="mr-4"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-works">
							<Works />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
