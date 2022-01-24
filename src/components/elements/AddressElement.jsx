import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddressElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="address-card" fixedWidth />
			<span className="field-text">Address</span>
		</div>
	);

	/*
	<div class="form-group">
    	<label for="inputAddress">Address</label>
    	<input type="text" class="form-control" id="inputAddress" placeholder="123 Main St" />
	</div>
	*/

}

export default AddressElement;
