import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AddressElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="address-card" fixedWidth />
			<span className="field-text">Address</span>
		</div>
	);
}

export default AddressElement;
