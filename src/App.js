import React from "react";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/AppHeader";
import Builder from "./components/Builder";
import "./App.css";

function App() {
	return (
		<div className="App">
			<AppHeader></AppHeader>
			<Builder></Builder>
		</div>
	);
}

export default App;
