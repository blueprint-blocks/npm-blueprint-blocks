import {
	classNames,
	getBlockContext,
	normalizeComponentList,
	renderJsxArray,
	replaceTokens,
	styles,
} from '@blueprint-blocks/utility'

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
	Object.values(Fields).map( ( { name, save } ) => [
		name,
		save,
	] )
)

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

		const blockContext = getBlockContext( {
			context: 'save',
			attributes,
			innerBlocks,
		} )

		const _blockEdit = normalizeComponentList( blueprint?.blockEdit )
		const _blockSave = normalizeComponentList( blueprint?.blockSave, _blockEdit[ 0 ] )

		const {
			children = [],
			tagName = 'div',
			...blockSave
		} = ( _blockSave?.[ 0 ] || {} )

		const blockAttributes = Object.fromEntries( Object.entries( blockSave ).map( ( [ name, value ] ) => {
			if ( typeof value === 'string' ) {
				return [
					name,
					replaceTokens( value, blockContext ),
				]
			} else {
				return [
					name,
					value,
				]
			}
		} ) )

		const blockClassNames = classNames( [
			...( Array.isArray( blockProps.className ) && blockProps.className || [ blockProps.className ] ),
			...( Array.isArray( blockSave.className ) && blockSave.className || [ blockSave.className ] ),
			...( Array.isArray( blockSave.viewClassName ) && blockSave.viewClassName || [ blockSave.viewClassName ] )
		], blockContext )

		if ( blockClassNames ) {
			blockAttributes.className = blockClassNames
		}

		const blockStyles = Object.assign( {}, ( blockProps.style || {} ), ( blockSave.style || {} ) )

		if ( Object.values( blockStyles ).length > 0 ) {
			blockAttributes.style = styles( blockStyles, blockContext )
		}

		const Component = tagName

		return (
			<Component
				{ ...blockProps }
				{ ...blockAttributes }
			>
				{ renderJsxArray( {
					blockName,
					attributes,
					jsx: children,
					context: blockContext,
				}, Components ) }
			</Component>
		)

	}

}

export default BlockSave
