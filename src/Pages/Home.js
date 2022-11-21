import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./App.js";
import "./App.css";

const Home = () => (
	<Layout>
		<Home />
	</Layout>
);

Home = () => (
	<div className="home">
		<h1 className="home__title">Home</h1>
		<p className="home__description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
			quibusdam, voluptatum, quae, voluptas quod voluptates quidem
			accusantium voluptatibus quos quia voluptate. Quisquam, quae
			accusantium. Quisquam, quae accusantium. Quisquam, quae accusantium.
		</p>
	</div>
);

export default Home;