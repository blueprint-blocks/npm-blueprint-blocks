import { classNames, replaceTokens, styles } from '@blueprint-blocks/utility'

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
 * React hook for retrieving props from registered selectors.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useselect
 */
import { useSelect } from '@wordpress/data'

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
	Object.values(Fields).map( ( { name, edit, save } ) => [
		name, 
		{ edit, save },
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
 * Renders an array of JSX objects
 * 
 * @param {array} jsx 
 */
function renderJsxArray( { clientId, blockName, attributes, setAttributes, jsx = [] } ) {

	return jsx.map( ( { children = [], className = [], style = {}, name = '', attributeName = '', type = '', tagName = 'div', ...props } ) => {

		const jsxAttributes = Object.fromEntries( Object.entries( props ).map( ( [ name, value ] ) => {
			if ( typeof value === 'string' ) {
				return [
					name,
					replaceTokens( value, getBlockContext( clientId ) ),
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
			Component = Components[type].edit

			if ( typeof attributes?.[attributeName] !== 'undefined' ) {
				props.value = attributes?.[attributeName]
			}

			return (
				<Component
					{ ...jsxAttributes }
					blockName={ blockName }
					className={ classNames( className, getBlockContext( clientId ) ) }
					style={ styles( style, getBlockContext( clientId ) ) }
					name={ name }
					attributeName={ attributeName }
					tagName={ tagName }
					attributes={ attributes }
					setAttributes={ setAttributes }
					onInput={ ( value ) => {
						if ( !attributeName ) {
							return
						}
						setAttributes( { 
							[attributeName]: value,
						} )
					} }
				>
					{ renderJsxArray( { clientId, blockName, attributes, setAttributes, jsx: children } ) }
				</Component>
			)
		}

		return (
			<Component
				{ ...jsxAttributes }
				blockName={ blockName }
				className={ classNames( className, getBlockContext( clientId ) ) }
				styles={ styles( style, getBlockContext( clientId ) ) }
			>
				{ renderJsxArray( { clientId, blockName, attributes, setAttributes, jsx: children } ) }
			</Component>
		)

	} )

}

/**
 * Returns the block context with properties formatted
 */
function getBlockContext( clientId, context = {} ) {

	const attributes = getBlockAttributes( clientId )
	const innerBlocks = getInnerBlocks( clientId ) || []
	const index = 1 + (attributes?._index || 0)

	return {
		...context,
		block: {
			index: index,
			...attributes,
		},
		innerBlocks: innerBlocks,
	}

}

function getBlockIndex( clientId ) {
	const { getBlockIndex } = useSelect( ( select ) => ( {
		getBlockIndex: select( 'core/editor' ).getBlockIndex
	} ) )
	return getBlockIndex( clientId ) || 0
}

function getBlockAttributes( clientId ) {
	const { getBlockAttributes } = useSelect( ( select ) => ( {
		getBlockAttributes: select( 'core/block-editor' ).getBlockAttributes
	} ) )
	return getBlockAttributes( clientId ) || []
}

function getInnerBlocks( clientId ) {
	const { getBlocks } = useSelect( ( select ) => ( {
		getBlocks: select( 'core/block-editor' ).getBlocks
	} ) )
	return getBlocks( clientId ) || []
}

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

		const blockSidebar = Array.isArray(blueprint.blockSidebar) && blueprint.blockSidebar || [blueprint.blockSidebar]
		const blockToolbar = Array.isArray(blueprint.blockToolbar) && blueprint.blockToolbar || [blueprint.blockToolbar]
		
		const { children = [], tagName = 'div', ...blockEdit } = ( blueprint.blockEdit || {} )
		const Component = tagName

		const blockClassNames = [
			...(Array.isArray(blockProps.className) && blockProps.className || [blockProps.className]),
			...(Array.isArray(blockEdit.className) && blockEdit.className || [blockEdit.className])
		]

		const blockStyles = Object.assign( {}, ( blockProps.style || {} ), ( blockEdit.style || {} ) )

		const blockAttributes = Object.fromEntries( Object.entries( blockEdit ).map( ( [ name, value ] ) => {
			if ( typeof value === 'string' ) {
				return [
					name,
					replaceTokens( value, getBlockContext( clientId ) ),
				]
			} else {
				return [
					name,
					value,
				]
			}
		} ) )

		setAttributes( {
			_index: getBlockIndex( clientId ),
			_innerBlocksLength: ( getInnerBlocks( clientId )?.length || 0 ),
		} )

		return (
			<Component
				{ ...blockProps }
				{ ...blockAttributes }
				className={ classNames( blockClassNames, getBlockContext( clientId ) ) }
				style={ styles( blockStyles, getBlockContext( clientId ) ) }
			>
				{ renderJsxArray( {
					clientId,
					blockName,
					attributes,
					setAttributes,
					jsx: children,
				} ) }
				{ blockSidebar.map( ( { label, ...props } ) => (
					<InspectorControls>
						<PanelBody title={ label }>
							{ renderJsxArray( {
								clientId,
								blockName,
								attributes, 
								setAttributes, 
								jsx: [ props ],
							} ) }
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
						} ) }
					</BlockControls>
				) ) }
			</Component>
		)
		
	}
	
}

export default BlockEdit