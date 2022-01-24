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

	// Pass down to BuildZone component for fields rendering
	const renderElements = (field, index) => {
		// Dynamic component name
		const FieldElement = Map[field];
		return <FieldElement onBuild={true} key={index} type="sortable" />;
	};

	return (
		<div className="main vh-100">
			<AppHeader />
			<DndProvider backend={HTML5Backend}>
				<div className="container-fluid">
					<div className="row">
						{/* Field elements */}
						<div className="col-4 pt-3">
							<div className="container">
								<span className="fs-4">Elements</span>
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
						<div className="col-8 fill-height">
							<BuildZone renderElements={renderElements} />
						</div>
					</div>
				</div>
			</DndProvider>
		</div>
	);
}

export default Builder;
