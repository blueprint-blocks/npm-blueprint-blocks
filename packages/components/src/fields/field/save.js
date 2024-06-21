import { isExternalUrl, isFragmentUrl } from "@blueprint-blocks/utility";

const selfClosingTagNames = [
	"area",
	"base",
	"br",
	"col",
	"embed",
	"hr",
	"img",
	"input",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr",
];

function save({
	attributes,
	blockName,
	attributeName,
	label,
	children = [],
	clientId,
	innerHtml = "",
	className = "",
	htmlType = null,
	tagName = "div",
	type = "field",
	display = true,
	...props
}) {
	if (display !== true && Boolean(display) === false) {
		return;
	}

	const fieldProps = Object.assign({}, props);

	if (className) {
		fieldProps.className = className;
	}

	if (htmlType !== null) {
		fieldProps.type = htmlType;
	}

	if (
		tagName === "a" &&
		"href" in fieldProps &&
		!("rel" in fieldProps) &&
		(isExternalUrl(fieldProps.href) ||
			isFragmentUrl(fieldProps.href) ||
			"target" in fieldProps)
	) {
		fieldProps.rel = "noopener";
	}

	const Component = tagName || "div";

	if (
		selfClosingTagNames.includes(tagName) === true ||
		(children?.length || 0) === 0 ||
		props.dangerouslySetInnerHTML
	) {
		<Component {...fieldProps} />;
	}

	return <Component {...fieldProps} children={children} />;
}

export default save;
