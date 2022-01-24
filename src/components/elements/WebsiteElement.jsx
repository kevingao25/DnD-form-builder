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

/*
<div className="field-element">
<label for="url">Website Link/URL</label>
<input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30"/>
</div>
*/

export default WebsiteElement;
