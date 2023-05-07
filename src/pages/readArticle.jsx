import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import "./styles/readArticle.css";

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									May 6, 2023
								</div>
							</div>

							<div className="title read-article-title">
								How to build a REST API with Node.js and Express
							</div>

							<div className="read-article-body">
								Lorem markdownum, bracchia in redibam! Terque
								unda puppi nec, linguae posterior in utraque
								respicere candidus Mimasque formae; quae
								conantem cervice. Parcite variatus, redolentia
								adeunt. Tyrioque dies, naufraga sua adit
								partibus celanda torquere temptata, erit maneat
								et ramos, iam ait dominari potitus! Tibi litora
								matremque fumantia condi radicibus opusque. Deus
								feram verumque, fecit, ira tamen, terras per
								alienae victum. Mutantur levitate quas ubi arcum
								ripas oculos abest. Adest commissaque victae in
								gemitus nectareis ire diva dotibus ora, et findi
								huic invenit; fatis? Fractaque dare
								superinposita nimiumque simulatoremque sanguine,
								at voce aestibus diu! Quid veterum hausit tu nil
								utinam paternos ima, commentaque.
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
