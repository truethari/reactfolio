const INFO = {
	main: {
		title: "Piyush Dongre Portfolio",
		name: "Piyush Dongre",
		email: "dongre.p@northeastern.edu",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/dongrep",
		linkedin: "https://linkedin.com/in/dongre-piyush",
	},

	homepage: {
		title: "Full-stack web and mobile app developer, and amateur skateboarder.",
		description:
			"As a seasoned software engineer, I bring extensive experience primarily in front-end development. Eager to broaden my expertise, I've successfully transitioned to the backend, augmenting my skills with a proficiency in DevOps practices. This dynamic combination enables me to contribute holistically to software development life cycles. I am adept at crafting robust and scalable solutions, seamlessly integrating both front-end and back-end technologies. My multifaceted skill set positions me as a versatile professional ready to tackle the challenges of today's ever-evolving tech landscape.",
	},

	about: {
		title: "I’m Piyush Dongre, Grad Software engineering student at Northeastern",
		description:
			"I've engaged in a diverse range of projects throughout my professional journey, and I take pride in the substantial progress I've achieved. Presently, I am dedicated to enhancing my skill set to align with the dynamic demands of the contemporary tech industry. My overarching goal is to identify and excel in a role that resonates best with my capabilities and aspirations.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Image Processor",
			description:
				"ImageEditor is a Java-based image editing application following the MVC architecture. It provides versatile image manipulation, including loading, editing, saving, and exporting. The application offers multiple operation methods, accommodating user preferences. With efficient image processing and robust error handling, it's suitable for casual users and developers alike.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/dongrep/image-editor-showcase",
		},

		{
			title: "HuskyEvents",
			description:
				"Husky Events: A React.js-based university event management app with tailwind CSS, Express.js, MongoDB, and Node.js. Features intuitive interfaces, a robust API for seamless user and event management, and strong software design principles. (Sept - Dec 2023).",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://huskyevents.onrender.com/",
		},
	],

	work: [
		{
			title: "Hopstack",
			subtitle: "Frontend Engineer",
			logo: "./hopstack_logo.jpeg",
			alt: "hopstack",
			duration: "Sept 22 - July 23",
			desc: [
				"Revamped front-end architecture using functional programming, reducing engineer onboarding by 36% and new feature addition by 60%. Improved user interface and experience by leveraging popular libraries such as React Context, React Query, and React MUI, resulting in a 42% increase in customer retention",
				"Executed rapid prototyping for a responsive Flowchart Conversion software with a GraphQL backend in under 2months. Reduced client onboarding time by 87% and achieved up to 24% cost savings",
			],
		},
		{
			title: "Mobiux",
			subtitle: "Software Engineer",
			logo: "./mobiux.jpeg",
			alt: "mobiux",
			duration: "Apr 21 - June 22",
			desc: [
				"Revamped front-end architecture using functional programming, reducing engineer onboarding by 36% and new feature addition by 60%. Improved user interface and experience by leveraging popular libraries such as React Context, React Query, and React MUI, resulting in a 42% increase in customer retention",
				"Accelerated development of a dynamic Flutter application, seamlessly integrating real-time data APIs, all within a remarkable timeframe of under 2 months. Demonstrated capability to rapidly produce top-quality solutions while maintaining a focus on efficiency and innovation",
				"Collaborated closely with the design team to enhance user experience and interface design",
			],
		},
		{
			title: "Recibo",
			subtitle: "Application Engineer",
			logo: "./recibo.jpeg",
			alt: "recibo",
			duration: "Apr 21 - June 22",
			desc: [
				"Designed, devised, and launched an application to showcase intuitive charts and analytical data, all while adhering to a fundamental Software Development Life Cycle (SDLC) approach. Leveraging the power of Flutter, GraphQL, and Firebase to optimize scalability and performance, resulting in significant efficiency gains of 35% within the team",
			],
		},
	],
};

export default INFO;
