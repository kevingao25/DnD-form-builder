import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SubmitElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="check" fixedWidth />
			<span className="field-text">Submit</span>
		</div>
	);
}

export default SubmitElement;
