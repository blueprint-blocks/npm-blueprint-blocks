import { styles } from "@blueprint-blocks/utility";
import Field from "../field/index.js";

function save({ allowedTypes = [], value = [], ...props }) {
	const fieldProps = {};
	const fieldStyle = {};

	if (value?.height && value?.width) {
		fieldProps.height = value?.height;
		fieldProps.width = value?.width;
		fieldStyle["aspect-ratio"] = `${props?.width || value?.width} / ${
			props?.height || value?.height
		}`;
		fieldStyle.height = "auto";
	}

	return (
		<Field.save
			{...fieldProps}
			{...props}
			src={value?.url}
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
