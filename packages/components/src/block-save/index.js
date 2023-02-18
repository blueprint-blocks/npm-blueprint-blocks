import classNames from 'classnames'

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
import NumberField from '../number-field';
import RichTextField from '../rich-text-field';
import SelectField from '../select-field';
import TextField from '../text-field';
import UrlField from '../url-field';

const Components = {
	'number-field': NumberField,
	'rich-text-field': RichTextField,
	'select-field': SelectField,
	'text-field': TextField,
	'url-field': UrlField,
}

/**
 * Renders an array of JSX objects
 * 
 * @param {array} jsx 
 */
function renderJsxArray( { attributes, jsx = [] } ) {

	return jsx.map( ( { children = [], className = [], name = '', attributeName = '', type = '', tagName = 'div', ...props } ) => {

		let Component = tagName

		if ( type in Components && Components[type] ) {
			Component = Components[type].save

			return (
				<Component
					{ ...props }
					className={ classNames(...className) }
					name={ name }
					tagName={ tagName }
					attributes={ attributes }
					value={ attributes?.[attributeName] }
				>
					{ renderJsxArray( { attributes, jsx: children } ) }
				</Component>
			)
		}

		return (
			<Component { ...props } className={ classNames(...className) }>
				{ renderJsxArray( { attributes, jsx: children } ) }
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
function BlockSave( blueprintMetadata ) {
	
	return ( { attributes } ) => {

		const blockProps = useBlockProps.save()
		const blockSave = (blueprintMetadata.blockSave !== null && blueprintMetadata.blockSave || blueprintMetadata.blockEdit || {})

		return renderJsxArray( {
			attributes,
			jsx: [ {
				...blockProps,
				...blockSave,
				className: [
					...(Array.isArray(blockProps.className) && blockProps.className || [blockProps.className]),
					...(Array.isArray(blockSave.className) && blockSave.className || [blockSave.className])
				]
			} ]
		} )

	}

}

export default BlockSave
