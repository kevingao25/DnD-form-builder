import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FileElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="file-upload" fixedWidth />
			<span className="field-text">File Upload</span>
		</div>
	);
}

export default FileElement;
