import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Kiran Media Inc</div>
							<div className="work-subtitle">
								Website Developer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<div className="work-title">
								Arcturus Technologies
							</div>
							<div className="work-subtitle">Intern</div>
							<div className="work-duration">2023 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
