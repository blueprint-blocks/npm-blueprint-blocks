function convertStyleStringToObject(style = "") {
	if (typeof style !== "string") {
		return {};
	}

	return Object.fromEntries(
		style.split(";").map((property) => property.split(":"))
	);
}

export default convertStyleStringToObject;
