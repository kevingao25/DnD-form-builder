import React from "react";
import { Container } from "react-bootstrap";
import AppHeader from "./AppHeader";

// Import components
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
	SelectElement,
	SubmitElement,
} from "./elements";

function Builder() {
	return (
		<div className="main vh-100">
			<AppHeader />
			<div className="container-fluid">
				<div className="row">
					{/* Draggable field elements for form building */}
					<div className="col-4 bg-light pt-3">
						<div className="container">
							<span className="fs-4">Elements</span>
							<hr />

							<div className="row no-gutters">
								<div className="col-6">
									<EmailElement />
								</div>
								<div className="col-6">
									<PasswordElement />
								</div>
								<div className="col-6">
									<TextareaElement />
								</div>
								<div className="col-6">
									<PhoneElement />
								</div>
								<div className="col-6">
									<DateElement />
								</div>
								<div className="col-6">
									<TimeElement />
								</div>
								<div className="col-6">
									<WebsiteElement />
								</div>
								<div className="col-6">
									<FileElement />
								</div>
								<div className="col-6">
									<CheckboxElement />
								</div>
								<div className="col-6">
									<RadioElement />
								</div>
								<div className="col-6">
									<DropdownElement />
								</div>
								<div className="col-6">
									<RatingElement />
								</div>
								<div className="col-6">
									<SelectElement />
								</div>
								<div className="col-6">
									<SubmitElement />
								</div>
								<div className="col-6">
									<AddressElement />
								</div>
							</div>
						</div>
					</div>

					{/* Form building space */}
					<div className="col-8 fill-height">
						<div className="mx-auto bg-light build-space border border-info rounded">
							<p className="text-muted lead">Add Fields Here</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Builder;
