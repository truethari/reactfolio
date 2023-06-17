import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import jpmorgan from "./jpmorganchase.jfif";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={jpmorgan}

								alt="jpmorgan"
								className="work-image"
							/>
							<div className="work-title">JPMorgan Chase & Co.</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
