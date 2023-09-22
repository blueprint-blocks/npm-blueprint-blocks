import { createRef } from '@wordpress/element'

import './style.scss'

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
	clientId,
	blockName,
	name,
	attributeName,
	children = [],
	dangerouslySetInnerHTML,
	innerHtml = '',
	className = [],
	label = '',
	tagName = 'div',
	type = 'field',
	value,
	onInput,
	...props
} ) {

	const ref = createRef()

	const fieldProps = Object.assign( {}, props )

	if ( className ) {
		fieldProps.className = className
	}

	const Component = tagName

	if ( selfClosingTagNames.includes(tagName) === false && dangerouslySetInnerHTML ) {
		return (
			<Component
				{ ...props }
				ref={ ref }
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
