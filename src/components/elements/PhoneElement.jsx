import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PhoneElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="phone" fixedWidth />
			<span className="field-text">Phone</span>
		</div>
	);

	/* <form>
			<div class="form-group">
				<label for="phone">Phone Number</label>
				<input ttype="tel" id="phone" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
			</div>
		</form>
	*/
}

export default PhoneElement;
