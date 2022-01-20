import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DropdownElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="caret-square-down" fixedWidth />
			<span className="field-text">Dropdown</span>
		</div>
	);
}

export default DropdownElement;
