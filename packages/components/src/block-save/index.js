import { classNames, replaceTokens, styles } from '@blueprint-blocks/utility'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor'

/**
 * Field components from Blueprint Blocks
 *
 * @see https://www.blueprint-blocks.com/docs/
 */
import * as Fields from '../fields/index.js'

const Components = Object.fromEntries(
	Object.values(Fields).map( ( { name, edit, save } ) => [
		name, 
		{ edit, save },
	] )
)

/**
 * Returns the block context with private attributes formatted.
 * 
 * Note: The length of the inner blocks is saved as an attribute because 
 * they can not be directly referenced upon initial save.
 */
function getBlockContext( { attributes = {}, innerBlocks = [], ...context } ) {

	const index = 1 + (attributes?._index || 0)
	const length = (attributes?._innerBlocksLength || 0)

	return {
		...context,
		block: {
			index: index,
			...attributes,
		},
		innerBlocks: innerBlocks?.length && innerBlocks || (new Array(length)).fill(null),
	}

}

/**
 * Renders an array of JSX objects
 * 
 * @param {array} jsx 
 */
function renderJsxArray( { blockName, attributes, innerBlocks, jsx = [] } ) {

	return jsx.map( ( { children = [], className = [], style = {}, name = '', attributeName = '', type = '', tagName = 'div', ...props } ) => {

		const jsxAttributes = Object.fromEntries( Object.entries( props ).map( ( [ name, value ] ) => {
			if ( typeof value === 'string' ) {
				return [
					name,
					replaceTokens( value, getBlockContext( { attributes, innerBlocks } ) ),
				]
			} else {
				return [
					name,
					value,
				]
			}
		} ) )

		let Component = tagName

		if ( type in Components && Components[type] ) {
			Component = Components[type].save

			if ( typeof attributes?.[attributeName] !== 'undefined' ) {
				props.value = attributes?.[attributeName]
			}

			return (
				<Component
					{ ...jsxAttributes }
					blockName={ blockName }
					className={ classNames( className, getBlockContext( { attributes, innerBlocks } ) ) }
					style={ styles( style, getBlockContext( { attributes, innerBlocks } ) ) }
					name={ name }
					tagName={ tagName }
					attributes={ attributes }
				>
					{ renderJsxArray( { blockName, attributes, innerBlocks, jsx: children } ) }
				</Component>
			)
		}

		return (
			<Component
				{ ...jsxAttributes } 
				blockName={ blockName }
				className={ classNames( className, getBlockContext( { attributes, innerBlocks } ) ) }
				styles={ styles( style, getBlockContext( { attributes, innerBlocks } ) ) }
			>
				{ renderJsxArray( { blockName, attributes, innerBlocks, jsx: children } ) }
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
	
	return ( { attributes, innerBlocks } ) => {

		const blockProps = useBlockProps.save()
		const blockName = blockProps.className

		const { children = [], tagName = 'div', ...blockSave } = (blueprint.blockSave !== null && blueprint.blockSave || blueprint.blockEdit || {})
		const Component = tagName

		const blockClassNames = [
			...(Array.isArray(blockProps.className) && blockProps.className || [blockProps.className]),
			...(Array.isArray(blockSave.className) && blockSave.className || [blockSave.className])
		]

		const blockStyles = Object.assign( {}, ( blockProps.style || {} ), ( blockSave.style || {} ) )

		const blockAttributes = Object.fromEntries( Object.entries( blockSave ).map( ( [ name, value ] ) => {
			if ( typeof value === 'string' ) {
				return [
					name,
					replaceTokens( value, getBlockContext( { attributes, innerBlocks } ) ),
				]
			} else {
				return [
					name,
					value,
				]
			}
		} ) )

		return (
			<Component
				{ ...blockProps }
				{ ...blockAttributes }
				className={ classNames( blockClassNames, getBlockContext( { attributes, innerBlocks } ) ) }
				style={ styles( blockStyles, getBlockContext( { attributes, innerBlocks } ) ) }
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
