import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";
import INFO from "../data/user";
import SEO from "../data/seo";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<NavBar active="about" />

			<div className="flex flex-col min-h-screen">
				<div className="mt-20 flex-grow">
					<div className="content-wrapper">
						<div className="about-container">
							<div className="about-main flex">
								<div className="about-right-side flex flex-col">
									<div className="title about-title">
										{INFO.about.title}
									</div>
									<div className="subtitle about-subtitle">
										{INFO.about.description}
									</div>
								</div>
								<div className="about-left-side">
									<div className="about-socials">
										<button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
											<a
												href="https://drive.google.com/file/d/1BebjjGFYzl-FyIufBPcpiZ2m-NUTLVir/view?usp=drive_link"
												target="_blank"
												rel="noreferrer"
											>
												Download Resume
											</a>
										</button>
										<Socials />
									</div>
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
				</div>
				<div className="page-footer">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
