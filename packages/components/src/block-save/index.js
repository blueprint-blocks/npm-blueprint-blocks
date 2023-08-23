import { classNames } from '@blueprint-blocks/utility'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Field components from Blueprint Blocks
 *
 * @see https://www.blueprint-blocks.com/docs/
 */
import * as Fields from '../fields/index.js';

 const Components = Object.fromEntries(
	Object.values(Fields).map( ( { name, edit, save } ) => [
		name, 
		{ edit, save },
	] )
)

/**
 * Renders an array of JSX objects
 * 
 * @param {array} jsx 
 */
function renderJsxArray( { blockName, attributes, jsx = [] } ) {

	return jsx.map( ( { children = [], className = [], name = '', attributeName = '', type = '', tagName = 'div', ...props } ) => {

		let Component = tagName

		if ( type in Components && Components[type] ) {
			Component = Components[type].save

			if ( typeof attributes?.[attributeName] !== 'undefined' ) {
				props.value = attributes?.[attributeName]
			}

			return (
				<Component
					{ ...props }
					blockName={ blockName }
					className={ classNames( className, { block: attributes } ) }
					name={ name }
					tagName={ tagName }
					attributes={ attributes }
				>
					{ renderJsxArray( { blockName, attributes, jsx: children } ) }
				</Component>
			)
		}

		return (
			<Component
				{ ...props } 
				blockName={ blockName }
				className={ classNames( className, { block: attributes } ) }
			>
				{ renderJsxArray( { blockName, attributes, jsx: children } ) }
			</Component>
		)

	} )

}

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function BlockSave( blueprint ) {
	
	return ( { attributes } ) => {

		const blockProps = useBlockProps.save()
		const blockName = blockProps.className

		const { children = [], className = [], tagName = 'div', ...blockSave } = (blueprint.blockSave !== null && blueprint.blockSave || blueprint.blockEdit || {})
		const Component = tagName

		const blockClassNames = [
			...(Array.isArray(blockProps.className) && blockProps.className || [blockProps.className]),
			...(Array.isArray(blockSave.className) && blockSave.className || [blockSave.className])
		]

		return (
			<Component
				{ ...blockProps }
				{ ...blockSave }
				className={ classNames( blockClassNames, { block: attributes } ) }
			>
				{ renderJsxArray( {
					blockName,
					attributes,
					jsx: children,
				} ) }
			</Component>
		)

	}

}

export default BlockSave
