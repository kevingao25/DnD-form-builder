import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

function Login(props) {
	const handleSubmit = () => {
		localStorage.setItem("access", "null");
	};
	if (!props.loggedIn) {
		return (
			<Button href="/" color="info">
				Login
			</Button>
		);
	} else {
		return (
			<Button onClick={handleSubmit} href="/" color="info">
				Logout
			</Button>
		);
	}
}

function AppHeader() {
	const [loggedIn, setLoggedIn] = useState(true);
	useEffect(() => {
		if (localStorage.getItem("access") === "null") {
			setLoggedIn(false);
		} else {
			axios({
				method: "get",
				url: "https://builder.fiyge.com/access_controls/users/index.json",
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: "Bearer " + localStorage.getItem("access"),
				},
			}).then((res) => {
				// Checking if user is logged in and redirecting them if they're not
				if (
					res.data.message.includes("Login failed") ||
					res.data.errors.includes("Client need to login to access this URL")
				) {
					localStorage.setItem("access", "null");
					setLoggedIn(false);
				} else {
					setLoggedIn(true);
				}
			});
		}
	});

	return (
		<div className="navbar navbar-dark bg-dark shadow p-4">
			<div className="container-fluid">
				<a href="/" className="navbar-brand text-warning">
					Drag-and-Drop Form Builder
				</a>
				{/* <Login loggedIn={loggedIn} /> */}
			</div>
		</div>
	);
}

export default AppHeader;
