import npmClassNames from "classnames";
import evaluateConditionalString from "./evaluate-conditional-string.js";
import replaceTokens from "./replace-tokens";

/**
 * Wraps the default classNames function to provide
 * contextual token replacement
 */
function classNames(_classNames = [], context = {}) {
	let classNameArray = (Array.isArray(_classNames) && _classNames) || [
		_classNames,
	];

	classNameArray = classNameArray.map((className) => {
		if (Array.isArray(className)) {
			return classNames(className, context);
		} else if (typeof className === "object") {
			return Object.fromEntries(
				Object.entries(className).map(([key, value]) => [
					replaceTokens(key, context),
					typeof value === "boolean"
						? value
						: evaluateConditionalString(value, context),
				])
			);
		}

		return className;
	});

	return replaceTokens(npmClassNames(...classNameArray), context);
}

export default classNames;
