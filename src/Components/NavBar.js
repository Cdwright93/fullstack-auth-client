import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";

const NavBar = (props) => {
	const { user, logout } = useAuth();

	return (
		<div>
			<nav>
				<h3>NavBar</h3>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/admin">Admin</Link>
					</li>
					{!user && (
						<>
							<li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/registration">Registration</Link>
							</li>
						</>
					)}
				</ul>
				{user && (
					<>
						<span>
							<strong>You Are Logged In</strong>
						</span>
						<button
							onClick={async () => {
								await logout();
							}}
						>
							Logout
						</button>
					</>
				)}
			</nav>
			<Outlet />
		</div>
	);
};

export default NavBar;
