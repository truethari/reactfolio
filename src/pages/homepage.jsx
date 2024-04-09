import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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

			<div className="min-h-screen flex flex-col">
				<div>
					<NavBar active="home" />
				</div>
				<div className="flex-1">
					<div className="content-wrapper mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-4xl font-bold text-center my-10">
							{INFO.homepage.title}
						</div>

						<div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
							<div className="w-full md:w-1/2 mb-8 md:mb-0">
								<div className="text-lg mb-4 text-center md:text-left">
									{INFO.homepage.description}
								</div>
								{/* Social links */}
								<div className="flex justify-center md:justify-start">
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

						{/* Work */}
						<div className="mt-12">
							<Works />
						</div>
					</div>
				</div>
				<hr className="border-t border-gray-300" />{" "}
				{/* Line before footer */}
				<div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Homepage;
