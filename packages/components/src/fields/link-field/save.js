import Field from "../field/index.js";

function save({ allowedFormats = null, placeholder, value, ...props }) {
	const { href = "", target = "", label = "" } = value || {};

	return (
		<Field.save
			{...props}
			{...(target === "_blank" && { target })}
			href={href}
			tagName="a"
			type="link"
		>
			{label}
		</Field.save>
	);
}

export default save;
