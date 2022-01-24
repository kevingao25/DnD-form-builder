import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./rating.css";


function RatingElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="star" fixedWidth />
			<span className="field-text">Rating</span>

		</div>
	);
}

export default RatingElement;
