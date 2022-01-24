import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TextareaElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="font" fixedWidth />
			<span className="field-text">Text</span>
		</div>
	);
}

export default TextareaElement;