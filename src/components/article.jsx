import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./article.css";

const Article = (props) => {
	const { title, description, date, link } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-content">
					<div className="article-date">
						|&nbsp;&nbsp;&nbsp;{date}
					</div>
					<div className="article-title">{title}</div>
					<div className="article-description">{description}</div>
					<div className="article-link">
						<Link to={link}>
							Read article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Article;
