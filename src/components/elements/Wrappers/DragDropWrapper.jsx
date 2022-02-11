import { useRef, useState, useEffect, Fragment } from "react";
import React from "react";
import { useDrag, useDrop } from "react-dnd";

function DragDropWrapper(props) {
	const { sortableRef, index, moveField, id, fieldName, setFocused } = props;

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
		type: "sortable",
		item: { name: { fieldName }, index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	drag(drop(sortableRef));

	// Hide and display control widget
	useEffect(() => {
		function handleClickOutside(event) {
			if (sortableRef.current && !sortableRef.current.contains(event.target)) {
				setFocused(false);
			} else if (sortableRef.current && sortableRef.current.contains(event.target)) {
				setFocused(true);
			}
		}

		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [sortableRef, setFocused]);

	const opacity = isDragging ? 0 : 1;
	return (
		<div ref={sortableRef} style={{ opacity }} data-handler-id={handlerID} id={id}>
			{props.children}
		</div>
	);
}

export default DragDropWrapper;
