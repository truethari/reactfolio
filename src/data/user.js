const INFO = {
	main: {
		title: "Ravkeerat Singh",
		name: "Ravkeerat Singh",
		email: "ravkeerat_singh@outlook.com",
	},

	socials: {
		github: "https://github.com/Ravkeerat02",
		linkedin: "https://www.linkedin.com/in/ravkeeratsingh/",
	},

	homepage: {
		title: "Front End Developer",
		description:
			"Motivated front-end developer with expertise in HTML, CSS, and JavaScript. Seeking opportunities to contribute creative solutions and enhance skills in a professional, collaborative environment.",
	},

	about: {
		title: "Ravkeerat Singh",
		description:
			"I'm Ravkeerat Singh, a recent graduate passionate about front-end development. Proficient in HTML, CSS, and React.js, I bring a keen eye for design and a drive for creating engaging user experiences. Eager to apply my skills in real-world projects, I thrive in collaborative environments and am committed to delivering polished, innovative solutions. Let's connect and explore how I can contribute to your team!",
	},

	projects: [
		{
			title: "Time Master Application",
			description: `
				Created a user-centric application for employees to manage schedules, clock in/out, and request time off.
				Enriched functionality by implementing manager features for efficient employee management.`,
			linkText: "Time Master",
			languages: "ExpressJS , NodeJs , MongoDb",
			link: "https://time-master.herokuapp.com/",
		},

		{
			title: "CarHub",
			description: `
				Developed a web-based application enabling users to sort, filter, and search for specific cars by year and fuel mileage. 
				Results feature detailed descriptions and images for enhanced user engagement.`,
			languages: "NodeJS , Express , ReactJS , NextJS",
			linkText: "Car Hub",
			link: "https://car-hub-nine-rust.vercel.app/",
		},
		{
			title: "Anime Vault",
			description: `
				Developed a web-based application that utilizes the <a href="https://shikimori.one/api/doc" target="_blank" rel="noopener noreferrer">Shikimori API</a> to display anime shows.
				Implemented smooth animations for seamless scrolling.`,
			languages: "TypeScript , JavaScript ",
			linkText: "Anime Vault",
			link: "https://anime-vault-try.vercel.app/",
		},
		{
			title: "Quote Generator",
			description: `
				Randomly Generated Quotes with the help of <a href="https://api.quotable.io/random" target="_blank" rel="noopener noreferrer">Quotable API</a>.
				Ability to share the quote on twitter. 
				Ability to speak the quote `,
			languages: "JavaScript , HTML , CSS",
			linkText: "Quote Generator",
			link: "https://ravkeerat02.github.io/Quote-generator/",
		},
		{
			title: "Traveligo - Landing Page Only",
			description: `
				Crafted using the power of TypeScript, Next.js, and ReactJS, ensuring robustness and efficiency.
				Delivers a contemporary and adaptive interface, elevating the user journey to new heights of convenience and satisfaction. `,
			languages: "TypeScript , ReactJS , NextJs ",
			linkText: "Traveligo",
			link: "https://traveligo-n8bwg4z2h-ravkeerat02.vercel.app/",
		},
		{
			title: "Tic Tac Toe",
			description: `
				Developed using HTML, CSS, and JavaScript for a lightweight and browser-compatible gaming experience.
				Implements features like automatic game reset upon completion, ensuring continuous enjoyment without interruptions.
				Enhances user engagement by dynamically displaying the score and announcing the winner at the conclusion of each game, fostering a competitive and immersive atmosphere.`,
			languages: "HTML , CSSS , JS ",
			linkText: "Tic Tac Toe",
			link: "https://tic-tac-toe-liard-zeta.vercel.app/",
		},
	],
};

function replaceAPIText(description) {
	// Replace both specific HTML tags with the desired text
	return description.replace(
		/<a [^>]*href="(?:https:\/\/shikimori\.one\/api\/doc|https:\/\/api\.quotable\.io\/random)"[^>]*>[^<]*<\/a>/gi,
		"API"
	);
}

INFO.projects.forEach((project) => {
	project.description = replaceAPIText(project.description);
});

export default INFO;
