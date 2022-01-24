import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function DateElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="calendar-alt" fixedWidth />
			<span className="field-text">Date</span>
		</div>
	);
}

export default DateElement;
