import "../App.css";
import { useState, useRef } from "react";
import AuthProvider from "../Hooks/Auth.js";

const Home = (props) => (
	<div>
		<h3>Home Page</h3>
		<p>
			Welcome to the home page. This is a protected route. You must be logged in
			to view this page.
		</p>
	</div>
	
);

export default Home;
