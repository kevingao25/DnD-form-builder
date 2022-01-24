import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function AddressElement({ onBuild, type }) {
	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type,
		item: { name: "addressElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="address-card" fixedWidth />
				<span className="field-text">Address</span>
			</div>
		);
	} else {
		// Build rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="form-group">
				<label for="inputAddress">Address</label>
				<input
					type="text"
					class="form-control"
					id="inputAddress"
					placeholder="123 Main St"
				/>
			</div>
		);
	}
}

export default AddressElement;
