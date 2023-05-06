import React from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import "./styles/articles.css";

const Articles = () => {
	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							I'm passionate about pushing the boundaries of
							what's possible and inspiring the next generation of
							innovators.
						</div>

						<div className="subtitle articles-subtitle">
							Chronological collection of my long-form thoughts on
							programming, leadership, product design, and more.
						</div>

						<div className="articles-container">
							<div className="articles-wrapper">
								<div className="articles-article">
									<Article
										date={"May 6, 2023"}
										title={
											"How to build a REST API with Node.js and Express"
										}
										description={
											"How to build a REST API with Node.js and Express How to build a REST API with Node.js and Express"
										}
										link={"https://google.com"}
									/>
								</div>
								<div className="articles-article">
									<Article
										date={"January 6, 2023"}
										title={
											"How to build a REST API with Node.js and Express"
										}
										description={
											"How to build a REST API with Node.js and Express How to build a REST API with Node.js and Express How to build a REST API with Node.js and Express How to build a REST API with Node.js and Express"
										}
										link={"https://google.com"}
									/>
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

export default Articles;
