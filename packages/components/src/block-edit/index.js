import {
	classNames,
	getBlockContext,
	normalizeComponentList,
	renderJsxArray,
	replaceTokens,
	styles,
	throttle,
	useBlockIndex,
	useInnerBlocks,
} from "@blueprint-blocks/utility";

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { PanelBody } from "@wordpress/components";
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
} from "@wordpress/block-editor";
import { ToolbarGroup } from "@wordpress/components";

/**
 * React hooks for managing elements.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-element/#usestate
 */
import { useLayoutEffect, useState } from "@wordpress/element";

/**
 * WordPress hooks for filtering or adding actions.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-hooks/
 */
import { addFilter } from "@wordpress/hooks";

/**
 * Field components from Blueprint Blocks
 *
 * @see https://www.blueprint-blocks.com/docs/
 */
import * as Fields from "../fields/index.js";

const Components = Object.fromEntries(
	Object.values(Fields).map(({ name, edit }) => [name, edit])
);

/**
 * Filters the default attributes of blocks to provide attributes
 * for index and length.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-hooks/
 */
addFilter(
	"blocks.registerBlockType",
	"blueprint-blocks/default-attributes",
	(settings, name) => {
		if (settings?.attributes && typeof settings?.attributes === "object") {
			settings.attributes["_index"] = {
				type: "number",
				default: 0,
			};
			settings.attributes["_innerBlocksLength"] = {
				type: "number",
				default: 0,
			};
		}

		return settings;
	}
);

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function BlockEdit(blueprint) {
	return ({ clientId, ...props }) => {
		const [attributes, setStateAttributes] = useState(
			props?.attributes || {}
		);

		const blockIndex = useBlockIndex(clientId);
		const innerBlocks = useInnerBlocks(clientId);

		/**
		 * Sets the default block attributes for index and length. This is
		 * throttled to prevent recursive updates.
		 */
		useLayoutEffect(() => {
			throttle(() => {
				if (
					attributes?._index !== blockIndex ||
					attributes._innerBlocksLength !== innerBlocks.length
				) {
					props?.setAttributes({
						_index: blockIndex,
						_innerBlocksLength: innerBlocks.length,
					});
				}
			}, 500)();
		}, [blockIndex, innerBlocks]);

		/**
		 * Overrides the default setAttributes to also save attributes in
		 * the state of the component for state change when not saved to
		 * the block attributes.
		 *
		 * @param {object} newAttributeValues
		 */
		const setAttributes = (newAttributeValues, persist = true) => {
			if (props?.setAttributes && persist === true) {
				props.setAttributes(newAttributeValues);
			}

			setStateAttributes(
				Object.assign({}, attributes, newAttributeValues)
			);
		};

		const blockProps = useBlockProps();
		const blockName = blockProps["data-type"];

		const blockContext = getBlockContext({
			context: "edit",
			attributes,
			innerBlocks: new Array(attributes?._innerBlocksLength || 0).fill(
				null
			),
		});

		const _blockEdit = normalizeComponentList(blueprint?.blockEdit);
		const blockSidebar = normalizeComponentList(blueprint?.blockSidebar);
		const blockToolbar = normalizeComponentList(blueprint?.blockToolbar);

		const {
			children = [],
			tagName = "div",
			...blockEdit
		} = _blockEdit?.[0] || {};

		const blockAttributes = Object.fromEntries(
			Object.entries(blockEdit).map(([name, value]) => {
				if (typeof value === "string") {
					return [name, replaceTokens(value, blockContext)];
				} else {
					return [name, value];
				}
			})
		);

		const blockClassNames = classNames(
			[
				...((Array.isArray(blockProps.className) &&
					blockProps.className) || [blockProps.className]),
				...((Array.isArray(blockEdit.className) &&
					blockEdit.className) || [blockEdit.className]),
				...((Array.isArray(blockEdit.editorClassName) &&
					blockEdit.editorClassName) || [blockEdit.editorClassName]),
			],
			blockContext
		);

		if (blockClassNames) {
			blockAttributes.className = blockClassNames;
		}

		const blockStyles = Object.assign(
			{},
			blockProps.style || {},
			blockEdit.style || {}
		);

		if (Object.values(blockStyles).length > 0) {
			blockAttributes.style = styles(blockStyles, blockContext);
		}

		const Component = tagName;

		return (
			<Component {...blockProps} {...blockAttributes}>
				{renderJsxArray(
					{
						clientId,
						blockName,
						attributes,
						setAttributes,
						jsx: children,
						context: blockContext,
					},
					Components
				)}
				{blockSidebar.map(({ label, ...props }) => (
					<InspectorControls>
						<PanelBody title={label}>
							{renderJsxArray(
								{
									clientId,
									blockName,
									attributes,
									setAttributes,
									jsx: [props],
									context: blockContext,
								},
								Components
							)}
						</PanelBody>
					</InspectorControls>
				))}
				{blockToolbar.map((props) => (
					<BlockControls>
						<ToolbarGroup>
							{renderJsxArray(
								{
									clientId,
									blockName,
									attributes,
									setAttributes,
									jsx: [props],
									context: blockContext,
								},
								Components
							)}
						</ToolbarGroup>
					</BlockControls>
				))}
			</Component>
		);
	};
}

export default BlockEdit;
