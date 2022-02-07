import React, { useState, useCallback } from "react";
import { useDrop } from "react-dnd";
import uniqid from "uniqid";
import update from "immutability-helper";

function BuildZone({ renderElements }) {
	// Track the list of fields in the build zone for rendering
	const [fields, setFields] = useState([]);

	// const handleDrop = (newField) => {
	// 	setFields((oldFields) => [...oldFields, newField]);
	// };

	// useDrop hook
	const [{ isOver }, dropRef] = useDrop({
		accept: "field",
		drop: (item, monitor) => {
			// Append the dropped elements to the state
			const newField = {
				name: monitor.getItem().name,
				id: uniqid("field-"),
			};
			setFields((oldFields) => [...oldFields, newField]);
		},
		// Detect whether the element is hovering over the build zone
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	});

	const backgroundColor = isOver ? "bg-warning" : "bg-light";
	const emptyField = fields.length === 0 ? true : false;

	// Helper function for sortable fields
	const moveField = useCallback((dragIndex, hoverIndex) => {
		setFields((prevFields) =>
			update(prevFields, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevFields[dragIndex]],
				],
			})
		);
	}, []);

	return (
		<div ref={dropRef} className={`build-zone mx-auto border rounded ${backgroundColor}`}>
			<div className="container " style={{ padding: "20px 50px" }}>
				{
					// Conditionally render the build zone
					emptyField ? (
						<p className="text-muted lead text-center">Add Fields Here</p>
					) : (
						// Render the UI fields
						fields.map((field, index) => renderElements(field, index, moveField))
					)
				}
			</div>
		</div>
	);
}

export default BuildZone;
