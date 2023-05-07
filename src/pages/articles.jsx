import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Article from "../components/articles/article";

import myArticles from "../data/articles";

import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		document.title = "Articles";
	}, []);

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
								{myArticles.map((article, index) => (
									<div
										className="articles-article"
										key={(index + 1).toString()}
									>
										<Article
											key={(index + 1).toString()}
											date={article().date}
											title={article().title}
											description={article().description}
											link={"/article/" + (index + 1)}
										/>
									</div>
								))}
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
