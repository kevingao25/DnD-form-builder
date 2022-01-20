import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TimeElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="clock" fixedWidth />
			<span className="field-text">Time</span>
		</div>
	);
}

export default TimeElement;
