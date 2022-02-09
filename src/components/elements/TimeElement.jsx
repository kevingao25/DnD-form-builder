import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function TimeElement(props) {
	// Deconstruct props
	const { onBuild, type, moveField, index, id, deleteField } = props;

	return (
		<div className="field-element">
			<FontAwesomeIcon icon="clock" fixedWidth />
			<span className="field-text">Time</span>
		</div>
	);
}

export default TimeElement;
