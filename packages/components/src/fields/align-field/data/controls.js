import {
	objectsAlignBottom,
	objectsAlignCenterHorizontal,
	objectsAlignCenterVertical,
	objectsAlignLeft,
	objectsAlignRight,
	objectsAlignTop,
} from "../../../icons/index.js";

export default {
	left: {
		icon: <div dangerouslySetInnerHTML={{ __html: objectsAlignLeft }} />,
		label: "Align Left",
		value: "left",
	},
	center: {
		icon: (
			<div
				dangerouslySetInnerHTML={{
					__html: objectsAlignCenterHorizontal,
				}}
			/>
		),
		label: "Align Center",
		value: "center",
	},
	right: {
		icon: <div dangerouslySetInnerHTML={{ __html: objectsAlignRight }} />,
		label: "Align Right",
		value: "right",
	},
	top: {
		icon: <div dangerouslySetInnerHTML={{ __html: objectsAlignTop }} />,
		label: "Align Top",
		value: "top",
	},
	middle: {
		icon: (
			<div
				dangerouslySetInnerHTML={{ __html: objectsAlignCenterVertical }}
			/>
		),
		label: "Align Middle",
		value: "middle",
	},
	bottom: {
		icon: <div dangerouslySetInnerHTML={{ __html: objectsAlignBottom }} />,
		label: "Align Bottom",
		value: "bottom",
	},
};
