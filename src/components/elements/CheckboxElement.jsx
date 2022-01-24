import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CheckboxElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="check-square" fixedWidth />
			<span className="field-text">Checkboxes</span>
		</div>
	);
}

/*
<div class="form-check">
	<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
	<label class="form-check-label" for="defaultCheck1">
		<input />
	</label>
</div>
*/


export default CheckboxElement;
