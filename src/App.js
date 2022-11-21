import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const Layout = ({ children }) => (
	<div className="app">
		<div className="app__header">
			<nav className="app__nav">
				<ul className="app__nav-list">
					<Link to="/" className="app__nav-link">
						Home
					</Link>
					<Link to="/register" className="app__nav-link">
						Register
					</Link>
					<Link to="/login" className="app__nav-link">
						Login
					</Link>
				</ul>
			</nav>
		</div>
		<div className="app__content">{children}</div>
	</div>
);

const App = () => (
	<Router>
		<Routes>
			<Route exact path="/" element={Home} />
			<Route path="/register" element={Register} />
			<Route path="/login" element={Login} />
		</Routes>
	</Router>
);

export default App;
