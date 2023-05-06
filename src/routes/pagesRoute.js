import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Articles from "../pages/articles";
import Article from "../pages/article";
import Projects from "../pages/projects";
import About from "../pages/about";

const pagesRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/articles" element={<Articles />} />
			<Route path="/articles/:slug" element={<Article />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/about" element={<About />} />
		</Routes>
	);
};

export default pagesRoute;
