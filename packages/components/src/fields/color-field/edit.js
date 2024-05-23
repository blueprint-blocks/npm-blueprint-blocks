import memoize from "micro-memoize";
import { useSetting } from "@wordpress/block-editor";
import { ColorPalette } from "@wordpress/components";
import Field from "../field/index.js";

const getColor = memoize((color, colors = []) => {
	for (let i = 0; i < colors.length; i++) {
		if (
			colors[i]?.color === color ||
			colors[i]?.name === color ||
			colors[i]?.slug === color
		) {
			return {
				color: colors[i]?.color,
				slug: colors[i]?.slug,
			};
		}
	}

	return {
		color: color,
		slug: "custom",
	};
});

function edit({
	blockName,
	name,
	colors = null,
	clearable = true,
	disableCustomColors = false,
	enableAlpha = false,
	value,
	onInput,
	...props
}) {
	const palette =
		(colors === null && useSetting("color.palette")) || colors || [];

	return (
		<Field.edit {...props} type="color" value={value}>
			<ColorPalette
				colors={palette}
				clearable={clearable}
				disableCustomColors={disableCustomColors}
				enableAlpha={enableAlpha}
				value={value?.color}
				onChange={(hex) => onInput(getColor(hex, palette))}
			/>
		</Field.edit>
	);
}

export default edit;
