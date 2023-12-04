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
						<img
								src="./bubble.png"
								alt="bubble"
								className="work-image"
							/>
							<div className="work-title">Bubble</div>
							<div className="work-subtitle">
								Senior User Researcher
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
						<img
								src="./coinbase.png"
								alt="coinbase"
								className="work-image"
							/>
							<div className="work-title">Coinbase</div>
							<div className="work-subtitle">
								UX Researcher
							</div>
							<div className="work-duration">2021 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./capitalone.png"
								alt="capitalone"
								className="work-image"
							/>
							<div className="work-title">Capital One</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">2018 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
