import React from "react";
import Modal from "react-modal";

const customStyles = {
	content: {
		bottom: "auto",
		width: "75vw",
		height: "75vh",
		margin: "auto",
		overflow: "scroll",
	},
};

Modal.setAppElement("#root");

function ConfigWrapper(props) {
	const { focused } = props;

	let subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = "#f00";
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className={focused ? "show-action-group" : "hide-action-group"}>
			<button
				className="btn btn-success btn-sm rounded edit"
				onMouseDown={openModal}
				type="button"
				data-toggle="tooltip"
				data-placement="top"
				title=""
				data-original-title="Edit">
				<i className="fa fa-cog"></i>
			</button>

			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal">
				{/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
				
				<div>I am a modal</div>
				<form></form> */}
				<button onClick={closeModal}>close</button>
				{/* <div className="container">
					<h2>Component</h2>
					<div className="form-group">
						<label htmlFor="component label">Label</label>
						<input type="text" className="form-control" placeholder="Text Field" />
					</div>
				</div> */}
				{props.children}
			</Modal>
		</div>
	);
}

export default ConfigWrapper;
