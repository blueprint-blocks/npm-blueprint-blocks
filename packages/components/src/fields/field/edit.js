import classNames from 'classnames'
import { useBlockProps } from '@wordpress/block-editor'
import { createRef } from '@wordpress/element'
import { delimiterize, replaceTokens } from '@blueprint-blocks/utility'
import getFieldClassNames from './functions/get-field-class-names'

import './style.css'

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

function preventEventPropagation( event ) {
	event.stopPropagation()
	event.nativeEvent.stopPropagation()
	event.nativeEvent.stopImmediatePropagation()
}

function edit( { 
	attributes = {},
	blockName, 
	name, 
	children = [], 
	dangerouslySetInnerHTML,
	innerHtml = '', 
	className = [], 
	label = '',
	tagName = 'div', 
	type = 'field', 
	onInput,
	...props
} ) {

	const blockProps = useBlockProps()
	const Component = tagName
	const ref = createRef()

	props = Object.fromEntries(
		Object.entries(props).map( ( [ attributeName, attributeValue ] ) => ( [
			attributeName,
			replaceTokens( attributeValue, { block: attributes, field: {} } )
		] ) )
	)

	if ( selfClosingTagNames.includes(tagName) === false && dangerouslySetInnerHTML ) {
		return (
			<Component
				{ ...props }
				ref={ ref }
				className={ classNames(
					getFieldClassNames( {
						blockName,
						name,
						type,
						value: props?.value,
					} ),
					...( Array.isArray( className ) && className || [ className ] )
				) }
				onClick={ preventEventPropagation }
				onInput={ preventEventPropagation }
				onKeydown={ preventEventPropagation }
				dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
			/>
		)
	}

	if ( selfClosingTagNames.includes(tagName) === true || (children.length === 0 && label.length === 0) ) {
		return (
			<Component
				{ ...props }
				ref={ ref }
				className={ classNames(
					getFieldClassNames( {
						blockName,
						name,
						type,
						value: props?.value,
					} ),
					...( Array.isArray( className ) && className || [ className ] )
				) }
				onClick={ preventEventPropagation }
				onInput={ preventEventPropagation }
				onKeydown={ preventEventPropagation }
			/>
		)
	}

	return (
		<Component
			{ ...props }
			ref={ ref }
			className={ classNames(
				getFieldClassNames({ 
					blockName,
					name, 
					type, 
					value: props?.value,
				}),
				...( Array.isArray( className ) && className || [ className ] )
			) }
			onClick={ preventEventPropagation }
			onInput={ preventEventPropagation }
			onKeydown={ preventEventPropagation }
		>
			{ label && (
				<div className="blueprint-blocks:field-label">{ label }</div>
			) }
			{ children }
		</Component>
	)

}

export default edit
