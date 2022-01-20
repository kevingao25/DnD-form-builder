import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SelectElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="hand-pointer" fixedWidth />
			<span className="field-text">Select</span>
		</div>
	);
}

export default SelectElement;
