import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function DropdownElement(props) {
	// Deconstruct props
	const { onBuild, type, moveField, index, id, deleteField } = props;

	return (
		<div className="field-element">
			<FontAwesomeIcon icon="caret-square-down" fixedWidth />
			<span className="field-text">Dropdown</span>
		</div>
	);
}

export default DropdownElement;
