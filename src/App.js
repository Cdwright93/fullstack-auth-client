import { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AdminPage from "./Pages/AdminPage";
import NavBar from "./Components/NavBar";
import { useAuth } from "./Hooks/Auth";
import "./App.css";

const urlEndpoint = "http://localhost:4000";

function App() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const { login, logout, register, token, userId } = useAuth();

	useEffect(() => {
		if (token) {
			fetch(`${urlEndpoint}/users/${userId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setUser(data);
					setLoading(false);
				});
		} else {
			setLoading(false);
		}
	}, [token, userId]);

	return (
		<div className="App">
			<NavBar user={user} logout={logout} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register register={register} />} />
				<Route path="/login" element={<Login login={login} />} />
				<Route path="/admin" element={<AdminPage user={user} />} />
			</Routes>
		</div>
	);
}

export default App;
