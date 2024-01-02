import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/currentUser";
import axios from "axios";

function Logout() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const handleLogout = async () => {
			try {
				// Make a request to the server to logout
				await axios.post("http://localhost:5000/logout");

				// Dispatch logout action
				dispatch(logout());

				// Clear session storage
				sessionStorage.clear();

				// Redirect to the home page or display a message
				navigate("/login");
			} catch (err) {
				// Handle errors or display an error message
				console.error("Logout error:", err);
			}
		};

		// Call the handleLogout function when the component mounts
		handleLogout();
	}, [dispatch, navigate]);

	return (
		<div>
			{/* You can add a logout message or UI here if needed */}
			Logging out...
		</div>
	);
}

export default Logout;
