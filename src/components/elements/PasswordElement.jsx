import React from "react";
import { Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrop } from "react-dnd";

function PasswordElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="unlock" fixedWidth />
			<span className="field-text">Password</span>
		</div>

		/* <form>
				<div class="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
				</div>
			</form>
		*/

		// <Form className="border mb-3 cursor">
		// 	<Form.Group controlId="formBasicPassword">
		// 		<Form.Label>Password</Form.Label>
		// 		<Form.Control type="password" placeholder="Password" />
		// 	</Form.Group>
		// </Form>
	);
}

export default PasswordElement;
