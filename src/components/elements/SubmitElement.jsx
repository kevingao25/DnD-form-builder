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

/*
<button type="button" class="btn btn-outline-dark">Submit</button>
*/

export default SubmitElement;
