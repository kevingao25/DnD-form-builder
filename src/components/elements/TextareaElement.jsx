import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TextareaElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="font" fixedWidth />
			<span className="field-text">Text</span>
		</div>
	);
}

/*
<div class="form-group">
  <label for="comment">Text:</label>
  <textarea class="form-control" rows="5" id="comment"></textarea>
</div>
*/

export default TextareaElement;
