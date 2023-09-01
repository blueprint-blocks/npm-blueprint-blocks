import { 
	classNames, 
	getBlockContext, 
	getBlockIndex,
	getInnerBlocks, 
	renderJsxArray, 
	replaceTokens, 
	styles,
} from '@blueprint-blocks/utility'

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { PanelBody } from '@wordpress/components'
import { BlockControls, InspectorControls, useBlockProps } from '@wordpress/block-editor'

/**
 * WordPress hooks for filtering or adding actions.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-hooks/
 */
import { addFilter } from '@wordpress/hooks'

/**
 * Field components from Blueprint Blocks
 *
 * @see https://www.blueprint-blocks.com/docs/
 */
import * as Fields from '../fields/index.js'

const Components = Object.fromEntries(
	Object.values(Fields).map( ( { name, edit } ) => [
		name, 
		edit,
	] )
)

/**
 * Filters the default attributes of blocks to provide attributes
 * for index and length.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-hooks/
 */
addFilter( 'blocks.registerBlockType', 'blueprint-blocks/default-attributes', ( settings, name ) => {

	if ( settings?.attributes && typeof settings?.attributes === 'object' ) {
		settings.attributes[ '_index' ] = {
			type: 'number',
			default: 0,
		}
		settings.attributes[ '_innerBlocksLength' ] = {
			type: 'number',
			default: 0,
		}
	}

	return settings

} )

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function BlockEdit( blueprint ) {

	return ( { attributes, setAttributes, clientId } ) => {
		
		const blockProps = useBlockProps()
		const blockName = blockProps['data-type']

		const blockContext = getBlockContext( {
			attributes,
			innerBlocks: getInnerBlocks( clientId ) || [],
		} )
		blockContext.mode = 'edit'

		const blockSidebar = Array.isArray(blueprint.blockSidebar) && blueprint.blockSidebar || [blueprint.blockSidebar]
		const blockToolbar = Array.isArray(blueprint.blockToolbar) && blueprint.blockToolbar || [blueprint.blockToolbar]
		
		const { children = [], tagName = 'div', ...blockEdit } = ( blueprint.blockEdit || {} )
		const Component = tagName

		const blockAttributes = Object.fromEntries( Object.entries( blockEdit ).map( ( [ name, value ] ) => {
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
			...( Array.isArray( blockEdit.className ) && blockEdit.className || [ blockEdit.className ] )
		], blockContext )

		if ( blockClassNames ) {
			blockAttributes.className = blockClassNames
		}

		const blockStyles = Object.assign( {}, ( blockProps.style || {} ), ( blockEdit.style || {} ) )

		setAttributes( {
			_index: getBlockIndex( clientId ),
			_innerBlocksLength: ( getInnerBlocks( clientId )?.length || 0 ),
		} )

		return (
			<Component
				{ ...blockProps }
				{ ...blockAttributes }
				style={ styles( blockStyles, blockContext ) }
			>
				{ renderJsxArray( {
					clientId,
					blockName,
					attributes,
					setAttributes,
					jsx: children,
					context: blockContext,
				}, Components ) }
				{ blockSidebar.map( ( { label, ...props } ) => (
					<InspectorControls>
						<PanelBody title={ label }>
							{ renderJsxArray( {
								clientId,
								blockName,
								attributes, 
								setAttributes, 
								jsx: [ props ],
								context: blockContext,
							}, Components ) }
						</PanelBody>
					</InspectorControls>
				) ) }
				{ blockToolbar.map( ( { label, ...props } ) => (
					<BlockControls>
						{ renderJsxArray( {
							clientId,
							blockName,
							attributes, 
							setAttributes, 
							jsx: [ props ],
							context: blockContext,
						}, Components ) }
					</BlockControls>
				) ) }
			</Component>
		)
		
	}
	
}

export default BlockEdit