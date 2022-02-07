import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function TextareaElement({ onBuild, type }) {
	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type,
		item: { name: "textareaElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="font" fixedWidth />
				<span className="field-text">Text</span>
			</div>
		);
	} else {
		// Build rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="form-group">
				<label for="comment">Textarea:</label>
				<textarea className="form-control" rows="5" id="comment"></textarea>
			</div>
		);
	}
}

export default TextareaElement;
