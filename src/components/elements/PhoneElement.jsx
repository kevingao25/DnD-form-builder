import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function PhoneElement({ onBuild, type }) {
	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type,
		item: { name: "phoneElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="phone" fixedWidth />
				<span className="field-text">Phone</span>
			</div>
		);
	} else {
		// Build rendering
		return (
			<form>
				<div ref={dragRef} style={{ opacity }} className="form-group">
					<label for="phone">Phone Number:</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						placeholder="123-456-7890"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
					/>
				</div>
			</form>
		);
	}
}

export default PhoneElement;
