import classNames from 'classnames'
import memoize from 'micro-memoize'
import { useBlockProps } from '@wordpress/block-editor'
import { delimiterize, replaceTokens } from '@blueprint-blocks/utility'

const selfClosingTagNames = [
	'area',
	'base',
	'br',
	'col',
	'embed',
	'hr',
	'img',
	'input',
	'link',
	'meta',
	'param',
	'source',
	'track',
	'wbr',
]

const fieldClassNames = memoize(( { blockName, name, type = '' } ) => {
    return classNames(
		`block:${ name }`,
		`${ blockName }:${ name }`
    )
})

function save( { 
	attributes,
	blockName,
	name,
	label,
	children = [], 
	innerHtml = '',
	className = '', 
	tagName = 'div', 
	type = 'field', 
	...props 
} ) {
	
	const Component = tagName

	props = Object.fromEntries(
		Object.entries(props).map( ( [ attributeName, attributeValue ] ) => ( [
			attributeName,
			replaceTokens( attributeValue, { block: attributes, field: {} } )
		] ) )
	)

	if ( selfClosingTagNames.includes(tagName) === true || children.length === 0 || props.dangerouslySetInnerHTML ) {
		<Component
			{ ...props }
			className={ classNames(
				fieldClassNames( { blockName, name, type } ),
				...( Array.isArray( className ) && className || [ className ] )
			) }
		/>
	}

	return (
		<Component
			{ ...props }
			className={ classNames(
				fieldClassNames( { blockName, name, type } ),
				...( Array.isArray( className ) && className || [ className ] )
			) }
			children={ children }
		/>
	)

}

export default save
