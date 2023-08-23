import { classNames } from '@blueprint-blocks/utility'

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { PanelBody } from '@wordpress/components';
import { BlockControls, InspectorControls, useBlockProps } from '@wordpress/block-editor';

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
function renderJsxArray( { blockName, attributes, setAttributes, jsx = [] } ) {

	return jsx.map( ( { children = [], className = [], name = '', attributeName = '', type = '', tagName = 'div', ...props } ) => {

		let Component = tagName

		if ( type in Components && Components[type] ) {
			Component = Components[type].edit

			if ( typeof attributes?.[attributeName] !== 'undefined' ) {
				props.value = attributes?.[attributeName]
			}

			return (
				<Component
					{ ...props }
					blockName={ blockName }
					className={ classNames( className, { block: attributes } ) }
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
					{ renderJsxArray( { blockName, attributes, setAttributes, jsx: children } ) }
				</Component>
			)
		}

		return (
			<Component
				{ ...props }
				blockName={ blockName }
				className={ classNames( className, { block: attributes } ) }
			>
				{ renderJsxArray( { blockName, attributes, setAttributes, jsx: children } ) }
			</Component>
		)

	} )

}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function BlockEdit( blueprintMetadata ) {

	return ( { attributes, setAttributes } ) => {

		const blockProps = useBlockProps()
		const blockName = blockProps['data-type']

		const blockSidebar = Array.isArray(blueprintMetadata.blockSidebar) && blueprintMetadata.blockSidebar || [blueprintMetadata.blockSidebar]
		const blockToolbar = Array.isArray(blueprintMetadata.blockToolbar) && blueprintMetadata.blockToolbar || [blueprintMetadata.blockToolbar]
		
		const { children = [], tagName = 'div', ...blockEdit } = ( blueprintMetadata.blockEdit || {} )
		const Component = tagName

		const blockClassNames = [
			...(Array.isArray(blockProps.className) && blockProps.className || [blockProps.className]),
			...(Array.isArray(blockEdit.className) && blockEdit.className || [blockEdit.className])
		]

		return (
			<Component
				{ ...blockProps }
				{ ...blockEdit }
				className={ classNames( blockClassNames, { block: attributes } ) }
			>
				{ renderJsxArray( {
					blockName,
					attributes,
					setAttributes,
					jsx: children,
				} ) }
				{ blockSidebar.map( ( { label, ...props } ) => (
					<InspectorControls>
						<PanelBody title={ label }>
							{ renderJsxArray( {
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