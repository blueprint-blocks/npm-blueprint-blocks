import { InnerBlocks } from "@wordpress/block-editor";
import Field from "../field/index.js";

function save({
	allowedBlocks,
	orientation,
	template,
	templateLock,
	max,
	...props
}) {
	if (props?.tagName === false) {
		return <InnerBlocks.Content />;
	}

	return (
		<Field.save {...props} type="inner-blocks">
			<InnerBlocks.Content />
		</Field.save>
	);
}

export default save;
