import { useRef } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag, useDrop } from "react-dnd";

function NameElement({ onBuild, type, moveField, index }) {
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
	const [{ isDragging }, drag] = useDrag({
		type,
		item: { name: "nameElement", index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	drag(drop(ref));

	// Debug
	// console.log("index is :", index);
	// console.log(handlerID);
	// console.log({ isDragging }, "nameElement");

	let opacity;
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
				<FontAwesomeIcon icon="signature" fixedWidth />
				<span className="field-text">Name</span>
			</div>
		);
	} else {
		// Build rendering
		opacity = isDragging ? 0 : 1;
		return (
			<div ref={ref} style={{ opacity }} className="form-group" data-handler-id={handlerID}>
				<div className="form-row">
					<div className="col">
						<label htmlFor="firstName">First name</label>
						<input type="text" className="form-control" placeholder="First name" />
					</div>
					<div className="col">
						<label htmlFor="lastName">Last name</label>
						<input type="text" className="form-control" placeholder="Last name" />
					</div>
				</div>

				{/* <div class="action-circle delete-circle">
					<span class="glyphicon glyphicon-trash delete-trash"></span>{" "}
					<span class="delete-text">Remove</span>
				</div> */}
			</div>
		);
	}
}

export default NameElement;
