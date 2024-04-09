import React from "react";

const Timeline = () => {
	const timelineData = [
		{
			date: "2021 - 2021",
			title: "Intern",
			description: [
				"Worked on various projects",
				"Gained valuable insights into the industry",
			],
		},
		{
			date: "2023 - 2023",
			title: "Intern",
			description: [
				"Gained hands-on experience in software development",
				"Learned about industry best practices",
			],
		},
		{
			date: "2023 - Present",
			title: "Website Developer",
			description: [
				"Responsible for developing and maintaining websites",
				"Used modern web technologies",
			],
		},
	];

	const reversedTimelineData = timelineData.slice().reverse();

	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-row justify-center items-center">
				<div className="w-1/2 h-1 bg-gray-300"></div>
				{reversedTimelineData.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center mx-4"
					>
						<div className="bg-gray-300 text-gray-700 py-1 px-3 rounded-lg text-sm">
							{item.date}
						</div>
						<div className="bg-white shadow-md border border-gray-200 rounded-lg p-4 mt-4">
							<div className="font-bold mb-1">{item.title}</div>
							<ul className="list-disc pl-6">
								{item.description.map((desc, index) => (
									<li key={index}>{desc}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Timeline;
