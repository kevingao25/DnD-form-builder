import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WebsiteElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="link" fixedWidth />
			<span className="field-text">Web/URL</span>
		</div>
	);
}

export default WebsiteElement;
