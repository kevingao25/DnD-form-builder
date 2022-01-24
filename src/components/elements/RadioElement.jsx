import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RadioElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="circle" fixedWidth />
			<span className="field-text">Radio Buttons</span>
		</div>
	);
}

/*
<div class="form-check">
	<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
	<label class="form-check-label" for="exampleRadios1">
		<input/>
	</label>
</div>
*/

export default RadioElement;
