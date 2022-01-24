import React, { useState } from "react";
import { useDrop } from "react-dnd";

function BuildZone({ renderElements }) {
	// Track the list of fields in the build zone for rendering
	const [fields, setFields] = useState([]);

	// const handleDrop = (newField) => {
	// 	setFields((oldFields) => [...oldFields, newField]);
	// };

	// useDrop hook
	const [{ isOver }, dropRef] = useDrop({
		accept: "field",
		// Append the dropped elements to the state
		drop: (item, monitor) => {
			const newField = monitor.getItem().name;
			setFields((oldFields) => [...oldFields, newField]);
		},
		// Detect whether the element is hovering over the build zone
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	});

	const backgroundColor = isOver ? "bg-warning" : "bg-light";
	const emptyField = fields.length === 0 ? true : false;

	return (
		<div ref={dropRef} className={`build-zone mx-auto border rounded ${backgroundColor}`}>
			<div className="container" style={{ padding: "20px 50px" }}>
				{
					// Conditionally render the build zone
					emptyField ? (
						<p className="text-muted lead text-center">Add Fields Here</p>
					) : (
						fields.map((field, index) => renderElements(field, index))
					)
				}
			</div>
		</div>
	);
}

export default BuildZone;
