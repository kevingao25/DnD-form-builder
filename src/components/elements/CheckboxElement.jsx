import { useRef, useState, useEffect, Fragment } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag, useDrop } from "react-dnd";

function CheckboxElement(props) {
	// Deconstruct props
	const { onBuild, type, moveField, index, id, deleteField } = props;

	// --------------------------------------------------------------------
	// *** Drag implementation of fields in element titles ***

	const [{ titleDragging }, titleDrag] = useDrag({
		type: type,
		item: { name: "checkboxElement", index },
		collect: (monitor) => ({
			titleDragging: monitor.isDragging(),
		}),
	});

	// --------------------------------------------------------------------
	// *** Drag and drop implementation of fields in build zone ***

	const [focused, setFocused] = useState(false);
	const sortableRef = useRef(null);

	// Sortable list
	const [{ handlerID }, drop] = useDrop({
		accept: "sortable",
		collect(monitor) {
			return {
				handlerID: monitor.getHandlerId(),
			};
		},
		hover(item, monitor) {
			if (!sortableRef.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;

			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}

			// Determine rectangle on screen
			const hoverBoundingRect = sortableRef.current?.getBoundingClientRect();
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			const clientOffset = monitor.getClientOffset();
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;

			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}

			// Time to move the field
			moveField(dragIndex, hoverIndex);
			item.index = hoverIndex;
		},
	});

	// useDrag hook
	const [{ isDragging }, drag] = useDrag({
		type: type,
		item: { name: "nameElement", index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	drag(drop(sortableRef));

	// Hide and display control widget
	useEffect(() => {
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [sortableRef]);

	function handleClickOutside(event) {
		if (sortableRef.current && !sortableRef.current.contains(event.target)) {
			setFocused(false);
		} else if (sortableRef.current && sortableRef.current.contains(event.target)) {
			setFocused(true);
		}
	}

	// --------------------------------------------------------------------
	// *** Rendering ***

	// CSS properties
	let opacity;

	// Conditionally rendering the element
	if (onBuild !== true) {
		opacity = titleDragging ? 0.4 : 1;
		return (
			<div
				ref={titleDrag}
				style={{ opacity }}
				className="field-element"
				data-handler-id={handlerID}
				id={{ id }}>
				<FontAwesomeIcon icon="check-square" fixedWidth />
				<span className="field-text">Checkboxes</span>
			</div>
		);
	} else {
		opacity = isDragging ? 0 : 1;
		return (
			<Fragment>
				{/* Edit UI field here */}
				<div
					ref={sortableRef}
					style={{ opacity }}
					className={`form-group ${focused ? "border-left" : ""}`}>
					<div className="form-check">
						<input
							className="form-check-input"
							type="checkbox"
							value=""
							id="defaultCheck1"
						/>
						<label className="form-check-label" htmlFor="defaultCheck1">
							<input placeholder="Checkbox" className="form-control-sm" />
						</label>
					</div>
				</div>

				<div className={focused ? "show-action-group" : "hide-action-group"}>
					<button
						className="btn btn-danger btn-sm rounded delete"
						type="button"
						data-toggle="tooltip"
						data-placement="top"
						title=""
						onMouseDown={() => deleteField(id)}
						data-original-title="Delete">
						<i className="fa fa-trash"></i>
					</button>

					<button
						className="btn btn-success btn-sm rounded edit"
						type="button"
						data-toggle="tooltip"
						data-placement="top"
						title=""
						data-original-title="Edit">
						<i className="fa fa-cog"></i>
					</button>
				</div>
			</Fragment>
		);
	}
}

export default CheckboxElement;
