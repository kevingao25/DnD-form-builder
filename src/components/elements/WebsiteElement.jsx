import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function WebsiteElement({ onBuild, type }) {
	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type,
		item: { name: "websiteElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="link" fixedWidth />
				<span className="field-text">Web/URL</span>
			</div>
		);
	} else {
		// Build rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="form-group">
				<label for="url">Website Link/URL: </label>
				<input
					type="url"
					name="url"
					id="url"
					placeholder="https://example.com"
					pattern="https://.*"
					size="30"
				/>
			</div>
		);
	}
}

/*
<div className="field-element">
<label for="url">Website Link/URL</label>
<input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" size="30"/>
</div>
*/

export default WebsiteElement;
