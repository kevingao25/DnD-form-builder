import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Builder from "./components/Builder";
import "./App.css";

// Font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faFont,
	faUnlock,
	faEnvelope,
	faPhone,
	faCalendarAlt,
	faClock,
	faLink,
	faFileUpload,
	faCheckSquare,
	faCircle,
	faCaretSquareDown,
	faStar,
	faHandPointer,
	faCheck,
	faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

library.add(
	faFont,
	faUnlock,
	faEnvelope,
	faPhone,
	faCalendarAlt,
	faClock,
	faLink,
	faFileUpload,
	faCheckSquare,
	faCircle,
	faCaretSquareDown,
	faStar,
	faHandPointer,
	faCheck,
	faAddressCard
);

function App() {
	return (
		<div className="App">
			<Builder></Builder>
		</div>
	);
}

export default App;
