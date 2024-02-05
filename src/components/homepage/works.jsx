import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import INFO from "../../data/user";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={INFO.work.map((work, index) => (
					<div id={index} className="works-body">
						<div className="work">
							<div className="work-header">
								<img
									src={work.logo}
									alt={work.alt}
									className="work-image"
								/>
								<div className="work-title">{work.title}</div>
							</div>
							<div className="work-info">
								<div className="work-subtitle">
									{work.subtitle}
								</div>
								<div className="work-duration">
									{work.duration}
								</div>
							</div>
							<div className="work-subtitle">
								<ul>
									{work.desc.map((desc, index) => (
										<li key={index}>{desc}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			/>
		</div>
	);
};

export default Works;
