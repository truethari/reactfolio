import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Footer from "../common/footer";

const Project = (props) => {
	const { title, description, linkText, link, languages } = props;

	return (
		<div className="mb-8">
			<Link to={link} className="block no-underline">
				<div className="border border-gray-200 rounded-lg p-8">
					<div className="text-xl font-bold mb-2">{title}</div>
					<p className="text-gray-700 mb-4">{description}</p>
					<div className="flex items-center">
						<span className="text-gray-600">
							Languages: {languages}
						</span>
					</div>
					<div className="flex items-center mt-2">
						<FontAwesomeIcon icon={faLink} className="mr-2" />
						<span className="text-blue-500 hover:underline">
							{linkText}
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Project;
