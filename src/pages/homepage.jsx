import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="keywords" />
			</Helmet>

			<div className="mt-8 min-h-screen flex flex-col">
				<NavBar active="home" />
				<div className="flex-1">
					<div className="content-wrapper mt-10">
						<div className="homepage-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							{/* Move the title below the navigation bar */}
							<div className="text-4xl font-bold text-center my-10">
								{INFO.homepage.title}
							</div>

							<div className="flex flex-col md:flex-row">
								<div className="w-full md:w-1/2 mb-8 md:mb-0">
									<div className="text-lg mb-4">
										{INFO.homepage.description}
									</div>
									{/* Social links */}
									<div className="flex justify-center">
										<a
											href={INFO.socials.github}
											target="_blank"
											rel="noreferrer"
											className="mr-4"
										>
											<FontAwesomeIcon
												icon={faGithub}
												className="text-2xl text-gray-500 hover:text-gray-700"
											/>
										</a>
										<a
											href={`mailto:${INFO.main.email}`}
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon
												icon={faMailBulk}
												className="text-2xl text-gray-500 hover:text-gray-700"
											/>
										</a>
									</div>
								</div>
							</div>

							{/* Works */}
							<div className="mt-12">
								<Works />
							</div>
						</div>
					</div>
				</div>
				<div className="page-footer mt-auto">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Homepage;
