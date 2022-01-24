import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function EmailElement({ onBuild }) {
	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type: "field",
		item: { name: "emailElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1, // Styling purpose
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="envelope" fixedWidth />
				<span className="field-text">Email</span>
			</div>
		);
	} else {
		return (
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
		);
	}
}

export default EmailElement;
