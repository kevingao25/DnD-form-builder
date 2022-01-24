import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FileElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="file-upload" fixedWidth />
			<span className="field-text">File Upload</span>
		</div>

		/*
		<form>
  			<div class="form-group">
    			<label for="exampleFormControlFile1">Example file input</label>
    			<input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  			</div>
		</form>
		*/

	);
}

export default FileElement;
