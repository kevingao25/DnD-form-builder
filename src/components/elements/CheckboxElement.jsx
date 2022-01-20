import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CheckboxElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="check-square" fixedWidth />
			<span className="field-text">Checkboxes</span>
		</div>
	);
}

export default CheckboxElement;
