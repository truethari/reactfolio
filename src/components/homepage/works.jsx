import React from "react";

const Timeline = () => {
	const timelineData = [
		{
			date: "August 2023 - Present",
			Company: "Kiran Media Inc",
			title: "Website Developer",
			description: [
				"Expertly develop and maintain websites, combining technical prowess in HTML, CSS, and JavaScript with a keen eye for UI/UX design principles.",
				"Apply user-centered design methodologies to create intuitive and visually appealing interfaces, enhancing user satisfaction and driving increased engagement by 20%.",
				"Led a team in enhancing an e-commerce platform using TypeScript and React, focusing on improving user experience and performance.",
			],
		},
		{
			date: "August 2023 - October 2023",
			Company: "Arcturus Technologies, Inc.",
			title: "Software Intern",
			description: [
				"Demonstrated technical leadership both internally and within external communities, contributing valuable insights and solutions to technical challenges.",
				"Leveraged Node.js expertise to develop scalable backend services and APIs, resulting in a 30% improvement in server response time.",
				"Debugged issues and produced high-quality code fixes, ensuring reliability and stability of software applications.",
			],
		},
		{
			date: "June 2023 - August 2023",
			Company: "Neolytix",
			title: "Junior Cyber Security Analyst",
			description: [
				"Assisted in developing and refining incident response plans to ensure swift and effective response to security incidents.",
				"Conducted regular vulnerability assessments to identify and prioritize potential security risks.",
			],
		},
		{
			date: "January 2020 - March 2020",
			Company: "Exlservice Philippines, Inc",
			title: "Intern",
			description: [
				"Efficiently handle customer inquiries and concerns, leveraging strong communication skills to ensure a positive caller experience.",
				"Collaborate with senior team members to enhance call center software interfaces, applying frontend development skills to streamline navigation and improve usability.",
				"Implement interface enhancements resulting in a 75% increase in call ratio, optimizing user interactions and driving greater efficiency in call handling processes.",
			],
		},
	];

	// Sort timelineData based on date
	timelineData.sort((a, b) => {
		const dateA = new Date(a.date.split(" - ")[0]);
		const dateB = new Date(b.date.split(" - ")[0]);
		return dateA - dateB;
	});

	return (
		<div className="flex flex-col items-center">
			{timelineData.map((item, index) => (
				<div
					key={index}
					className={`flex items-start w-full ${
						index % 2 === 0 ? "flex-row" : "flex-row-reverse"
					} my-4`}
				>
					<div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
						<div className="font-bold mb-1">{item.title}</div>
						<ul className="list-disc pl-6">
							{item.description.map((desc, index) => (
								<li key={index}>{desc}</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col items-start mx-4">
						<div className="bg-gray-300 text-gray-700 py-1 px-3 rounded-lg text-sm cursor-pointer">
							{item.date}
						</div>
						<div className="relative mt-2">
							<div className="absolute w-3 h-3 bg-gray-300 rounded-full"></div>
							<div className="relative bg-white rounded-lg shadow-md px-4 py-2 cursor-pointer">
								<p className="text-sm font-semibold text-gray-800">
									{item.Company}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Timeline;
