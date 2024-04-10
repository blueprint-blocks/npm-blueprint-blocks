import Field from "../field/index.js";

function save({
	allowedFormats = [],
	multiline = false,
	preserveWhiteSpace = false,
	placeholder = "",
	tagName = "p",
	value,
	...props
}) {
	if (value === "" || value === null) {
		return;
	}

	return (
		<Field.save
			{...props}
			tagName={tagName}
			type="rich-text"
			dangerouslySetInnerHTML={{ __html: value }}
		/>
	);
}

export default save;
