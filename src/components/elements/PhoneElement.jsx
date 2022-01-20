import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PhoneElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="phone" fixedWidth />
			<span className="field-text">Phone</span>
		</div>
	);
}

export default PhoneElement;
