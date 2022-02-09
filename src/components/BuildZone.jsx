import React, { useState, useCallback } from "react";
import { useDrop } from "react-dnd";
import uniqid from "uniqid";
import update from "immutability-helper";

// Import field components
import {
	NameElement,
	PasswordElement,
	EmailElement,
	TextareaElement,
	AddressElement,
	PhoneElement,
	DateElement,
	TimeElement,
	WebsiteElement,
	FileElement,
	CheckboxElement,
	RadioElement,
	DropdownElement,
	RatingElement,
	SubmitElement,
} from "./elements";

function BuildZone() {
	// Track the list of fields in the build zone for rendering
	const [fields, setFields] = useState([]);

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

	// name <-> components
	const Map = {
		nameElement: NameElement,
		passwordElement: PasswordElement,
		emailElement: EmailElement,
		textareaElement: TextareaElement,
		addressElement: AddressElement,
		phoneElement: PhoneElement,
		dateElement: DateElement,
		timeElement: TimeElement,
		websiteElement: WebsiteElement,
		fileElement: FileElement,
		checkboxElement: CheckboxElement,
		radioElement: RadioElement,
		dropdownElement: DropdownElement,
		ratingElement: RatingElement,
		submitElement: SubmitElement,
	};

	// Pass down to BuildZone component for fields UI rendering
	const renderElements = (field, index, moveField, deleteField) => {
		// Dynamic component name
		const FieldElement = Map[field.name];
		return (
			<FieldElement
				onBuild={true}
				key={field.id}
				id={field.id}
				index={index}
				type="sortable"
				moveField={moveField}
				deleteField={deleteField}
			/>
		);
	};

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

	// Delete function
	const deleteField = (id) => {
		const newFields = fields.filter((field) => {
			return field.id !== id;
		});
		setFields(newFields);
	};

	const backgroundColor = isOver ? "bg-warning" : "bg-light";
	const emptyField = fields.length === 0 ? true : false;

	return (
		<div
			ref={dropRef}
			className={`build-zone mx-auto border rounded ${backgroundColor} shadow-sm`}>
			<div className="container " style={{ padding: "20px 50px" }}>
				{
					// Conditionally render the build zone
					emptyField ? (
						<p className="text-muted lead text-center">Add Fields Here</p>
					) : (
						// Render the UI fields
						fields.map((field, index) =>
							renderElements(field, index, moveField, deleteField)
						)
					)
				}
			</div>
		</div>
	);
}

export default BuildZone;
