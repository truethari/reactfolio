import React from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import "./styles/about.css";

const About = () => {
	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									I’m Tharindu N. I live in Sri Lanka, where I
									design the future.
								</div>

								<div className="subtitle about-subtitle">
									I've worked on a variety of projects over
									the years and I'm proud of the progress I've
									made. Many of these projects are open-source
									and available for others to explore and
									contribute to. If you're interested in any
									of the projects I've worked on, please feel
									free to check out the code and suggest any
									improvements or enhancements you might have
									in mind. Collaborating with others is a
									great way to learn and grow, and I'm always
									open to new ideas and feedback.
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
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

export default About;
