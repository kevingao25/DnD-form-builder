import React from "react";
import BuildZone from "./BuildZone";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import AddFields from "./AddFields";
import ListForms from "./ListForms";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box sx={{ pt: 3 }}>
					<div>{children}</div>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

function Builder() {
	const theme = useTheme();
	const [value, setValue] = React.useState(1);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = (index) => {
		setValue(index);
	};

	return (
		<div className="main vh-100">
			<DndProvider backend={HTML5Backend}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-4 pt-3 shadow-sm">
							<div className="container px-4">
								{/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
									<Tabs
										value={value}
										onChange={handleChange}
										aria-label="basic tabs example">
										<Tab label="List Forms" {...a11yProps(0)} />
										<Tab label="Add fields" {...a11yProps(1)} />
									</Tabs>
								</Box>
								<SwipeableViews
									axis={theme.direction === "rtl" ? "x-reverse" : "x"}
									index={value}
									onChangeIndex={handleChangeIndex}>
									<TabPanel value={value} index={0} dir={theme.direction}>
										<ListForms />
									</TabPanel>
									<TabPanel value={value} index={1} dir={theme.direction}> */}
								<AddFields />
								{/* </TabPanel>
								</SwipeableViews> */}
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
