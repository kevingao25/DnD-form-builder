import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function EmailElement({ onBuild, type }) {
	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type,
		item: { name: "emailElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1, // Styling purpose
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="envelope" fixedWidth />
				<span className="field-text">Email</span>
			</div>
		);
	} else {
		// Build rendering
		return (
			<div ref={dragRef} style={{ opacity }} class="form-group">
				<form>
					<div class="form-group">
						<label for="exampleInputEmail1">Email Address</label>
						<input
							type="email"
							class="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default EmailElement;
