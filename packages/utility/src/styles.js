import convertStyleStringToObject from "./convert-style-string-to-object";
import replaceTokens from "./replace-tokens";

function styles(styles = [], context = {}) {
	let _styles = structuredClone(styles);

	if (typeof _styles === "string") {
		_styles = convertStyleStringToObject(_styles);
	}

	if (typeof _styles !== "object") {
		return {};
	}

	return Object.fromEntries(
		Object.entries(_styles).map(([property, value]) => [
			replaceTokens(property, context),
			replaceTokens(value, context),
		])
	);
}

export default styles;
