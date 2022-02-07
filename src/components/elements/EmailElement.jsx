import { useRef } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag, useDrop } from "react-dnd";

function EmailElement({ onBuild, type, moveField, index }) {
	const ref = useRef(null);

	// useDrop hook
	const [{ handlerID }, drop] = useDrop({
		accept: "sortable",
		collect(monitor) {
			return {
				handlerID: monitor.getHandlerId(),
			};
		},
		hover(item, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.index;
			const hoverIndex = index;

			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}

			// Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
			// Get vertical middle
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
			// Determine mouse position
			const clientOffset = monitor.getClientOffset();
			// Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
			// Only perform the move when the mouse has crossed half of the items height
			// When dragging downwards, only move when the cursor is below 50%
			// When dragging upwards, only move when the cursor is above 50%
			// Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
			// Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
			// Time to actually perform the action
			moveField(dragIndex, hoverIndex);
			// Note: we're mutating the monitor item here!
			// Generally it's better to avoid mutations,
			// but it's good here for the sake of performance
			// to avoid expensive index searches.
			item.index = hoverIndex;
		},
	});

	// useDrag hook
	const [{ isDragging }, dragRef] = useDrag({
		type,
		item: { name: "emailElement", index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	dragRef(drop(ref));

	let opacity = 1;
	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		opacity = isDragging ? 0.4 : 1;
		return (
			<div
				ref={ref}
				style={{ opacity }}
				className="field-element"
				data-handler-id={handlerID}>
				<FontAwesomeIcon icon="envelope" fixedWidth />
				<span className="field-text">Email</span>
			</div>
		);
	} else {
		// Build rendering
		opacity = isDragging ? 0 : 1;
		return (
			<div ref={ref} style={{ opacity }} className="form-group" data-handler-id={handlerID}>
				<form>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email Address</label>
						<input
							type="email"
							className="form-control"
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
