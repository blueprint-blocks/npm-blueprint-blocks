function convertStyleStringToObject(style = "") {
	if (typeof style !== "string") {
		return {};
	}

	return Object.fromEntries(
		style
			.split(";")
			.filter((property) => !!property)
			.map((property) => property.split(":"))
	);
}

export default convertStyleStringToObject;
