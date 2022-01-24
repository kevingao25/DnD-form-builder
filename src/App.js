import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./App.css";

import Builder from "./components/Builder";

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
	faSignature,
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
	faAddressCard,
	faSignature
);

function App() {
	return (
		<div className="App">
			<Builder></Builder>
		</div>
	);
}

export default App;
