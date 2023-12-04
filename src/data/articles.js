import React from "react";

function article_1() {
	return {
		date: "June 2022",
		title: "Adapting Engineering Practices for Research Process",
		description:
			"My talk from UXRConf22 discussing engineering traditions and rituals that set up research practices for success.",
		abstract:
		"Abstract: As a relatively young institution in product, isn't it time we started thinking about what traditions and rituals we implement to set up our research practices for success? A few years back, Chelsea was working as a software engineer before transitioning to research, and she brought some key rituals from her time as an engineer with her. These new institutions have been a bedrock for her practice, and she's going to share them with the community in this talk.",	
		link: "https://joinlearners.com/talk/adapting-engineering-practices-for-research-process",
			keywords: [
			"Adapting Engineering Practices for Research Process",
			"Chelsea Yip",
			"UXRConf",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		// body: (
		// 	<React.Fragment>
		// 		<div className="article-content">
		// 			<div className="paragraph">Content of article 1</div>
		// 			<img
		// 				src="https://picsum.photos/200/300"
		// 				alt="random"
		// 				className="randImage"
		// 			/>
		// 		</div>
		// 	</React.Fragment>
		// ),
	};
}

const myArticles = [article_1];

export default myArticles;
