import React from "react";
import AppHeader from "./AppHeader";
import BuildZone from "./BuildZone";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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

function Builder() {
	return (
		<div className="main vh-100">
			<AppHeader />
			<DndProvider backend={HTML5Backend}>
				<div className="container-fluid">
					<div className="row">
						{/* Field elements */}
						<div className="col-4 pt-3 shadow-sm">
							<div className="container px-4">
								<span className="fs-5">Elements</span>
								<hr />

								<div className="row no-gutters">
									<div className="col-xl-6">
										<NameElement type="field" />
									</div>
									<div className="col-xl-6">
										<EmailElement type="field" />
									</div>
									<div className="col-xl-6">
										<PasswordElement type="field" />
									</div>
									<div className="col-xl-6">
										<TextareaElement type="field" />
									</div>
									<div className="col-xl-6">
										<PhoneElement type="field" />
									</div>
									<div className="col-xl-6">
										<DateElement type="field" />
									</div>
									<div className="col-xl-6">
										<TimeElement type="field" />
									</div>
									<div className="col-xl-6">
										<WebsiteElement type="field" />
									</div>
									<div className="col-xl-6">
										<FileElement type="field" />
									</div>
									<div className="col-xl-6">
										<CheckboxElement type="field" />
									</div>
									<div className="col-xl-6">
										<RadioElement type="field" />
									</div>
									<div className="col-xl-6">
										<DropdownElement type="field" />
									</div>
									<div className="col-xl-6">
										<RatingElement type="field" />
									</div>
									<div className="col-xl-6">
										<SubmitElement type="field" />
									</div>
									<div className="col-xl-6">
										<AddressElement type="field" />
									</div>
								</div>
							</div>
						</div>

						{/* Build zone */}
						<div className="col-8 fill-height scroll shadow-sm">
							<BuildZone />
						</div>
					</div>
				</div>
			</DndProvider>
		</div>
	);
}

export default Builder;
