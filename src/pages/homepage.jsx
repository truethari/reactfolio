import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
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

			<div className="min-h-screen flex flex-col bg-gray-100">
				<NavBar active="home" />
				<div className="flex-1">
					<div className="content-wrapper mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-4xl font-bold text-center my-10 text-gray-900 mt-20">
							{INFO.homepage.title}
						</div>

						<div className="md:flex md:justify-between items-center">
							<div className="md:w-1/2 md:mb-0">
								<div className="text-lg mb-4 text-center md:text-left text-gray-800">
									<p className="md:text-lg md:w-full">
										{INFO.homepage.description}
									</p>
								</div>
								{/* Social links */}
								<div className="flex justify-center md:justify-start">
									<a
										href={INFO.socials.github}
										target="_blank"
										rel="noreferrer"
										className="mr-4 text-gray-700 hover:text-gray-900"
									>
										<FontAwesomeIcon
											icon={faGithub}
											className="text-2xl"
										/>
									</a>
									<a
										href={INFO.socials.linkedin}
										target="_blank"
										rel="noreferrer"
										className="mr-4 text-gray-700 hover:text-gray-900"
									>
										<FontAwesomeIcon
											icon={faLinkedin}
											className="text-2xl"
										/>
									</a>
									<a
										href={`mailto:${INFO.main.email}`}
										target="_blank"
										rel="noreferrer"
										className="text-gray-700 hover:text-gray-900"
									>
										<FontAwesomeIcon
											icon={faMailBulk}
											className="text-2xl"
										/>
									</a>
								</div>
							</div>
						</div>

						{/* Work */}
						<div className="mt-12">
							<Works />
						</div>
					</div>
				</div>
				<hr
					className="border-t border-gray-300 mx-auto"
					style={{ width: "90%" }}
				/>{" "}
				{/* Line before footer */}
				<Footer />
			</div>
		</>
	);
};

export default Homepage;
