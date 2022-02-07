import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function SubmitElement({ onBuild, type }) {
	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type,
		item: { name: "submitElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="check" fixedWidth />
				<span className="field-text">Submit</span>
			</div>
		);
	} else {
		// Build rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="form">
				<button type="button" className="btn btn-outline-dark">
					Submit
				</button>
			</div>
		);
	}
}

export default SubmitElement;
