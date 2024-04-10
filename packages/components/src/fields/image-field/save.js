import { styles } from "@blueprint-blocks/utility";
import Field from "../field/index.js";

function save({ allowedTypes = [], value, ...props }) {
	const { height = null, url = null, width = null } = value || {};

	const fieldProps = {};
	const fieldStyle = {};

	if (height && width) {
		fieldProps.height = height;
		fieldProps.width = width;
		fieldStyle["aspect-ratio"] = `${props?.width || width} / ${
			props?.height || height
		}`;
		fieldStyle.height = "auto";
	}

	return (
		<Field.save
			{...fieldProps}
			{...props}
			src={url}
			style={{
				...fieldStyle,
				...styles(props?.style),
			}}
			tagName="img"
			type="image"
		/>
	);
}

export default save;
