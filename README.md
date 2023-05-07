<center>
	<h1>Reactfolio V1</h1>
    
</center>

Under development 🚧🚧 Not ready to use.

-   [Features](#features)
-   [Getting started](#getting-started)
-   [Installation and Setup Instructions](#installation-and-setup-instructions)
-   [Folder structure](#Folder-structure)
-   [Configurations](#Configurations)
-   [Contribution](#Contribution)

## 📙 Features

-   📖 Multi-Page Layout
    -   Home
    -   About
    -   Projects
    -   Articles
    -   Contact
-   📱 Fully Responsive
-   🛠 Easy configurations

## 📚 Getting started

Clone down this repository. You will need `NodeJS` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. Run the project: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## 📁 Folder structure

-   `/public`: publicly accessible contents (ex: images, media).
-   `/src`: all the components used in this project.
    -   `/src/components/`: each reusable components of each pages.
    -   `/src/data`: configurations of the web app.
    -   `/src/pages`: pages that include in the web app.

## ⚙️ Configurations

Since this is a public and open source project, you can make any changes to it. If you are a ReactJS developer you can do it easily. But if you are a beginner, I have extracted the configurable data into a single directory, so you can edit the files in that directory to configure the entire web application.

Directory: `/src/data/`

-   `articles.js`

    From this you can add your articles to the web application.

    Instructions:

    -   Add new article

        1. Create a new function starts with `article_`. For example you can add new function named `article_3`.

        2. Then add the data accordingly.

            - Add `<React.Fragment>` tag and it's closing tags in body.
            - In React there has no keyword `class`, so you should use `className` to define html classes.

        3. In the last lines you will see an array to which you need to add your new `articles` function.

```js
function article_3() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
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
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}
```

```js
const myArticles = [article_1, article_2, article_3];
```

-   `styles.css`

    From this you can change the font colors and font families of the web application.

```css
:root {
	/* ------- colors ------- */
	--primary-color: #27272a;
	--secondary-color: #65656d;
	--tertiary-color: #acacb4;
	--quaternary-color: #e4e4e7;
	--link-color: #14b8a6;
	/* ---------------------- */

	/* ------- fonts ------- */
	--primary-font: "Heebo", sans-serif;
	--secondary-font: "Roboto", sans-serif;
	/* --------------------- */
}
```

-   `user.js`

    From this you can change the content of each page of the web application.

## 🌱 Contribution

If you have any suggestions on what to improve in Reactfolio and would like to share them, feel free to leave an issue or fork project to implement your own ideas
