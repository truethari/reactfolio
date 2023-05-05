import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Projects from "./pages/projects";

import "./app.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</div>
	);
}

export default App;
