import classNames from 'classnames'
import memoize from 'micro-memoize'
import { useBlockProps } from '@wordpress/block-editor'
import { createRef } from '@wordpress/element'
import { delimiterize, replaceTokens } from '@blueprint-blocks/utility'

//import './style.css'

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

const fieldClassNames = memoize(( { blockName, type = '', name, value = '' } ) => {
    return classNames(
        'blueprint-blocks:component',
        `blueprint-blocks:${ type }-field`,
		`${ delimiterize(blockName) }:${ name }`,
		{ 'has-value': value }
    )
})

function preventEventPropagation( event ) {
	event.stopPropagation()
	event.nativeEvent.stopPropagation()
	event.nativeEvent.stopImmediatePropagation()
}

function edit( { 
	attributes,
	blockName, 
	name, 
	children = [], 
	dangerouslySetInnerHTML,
	innerHtml = '', 
	className = '', 
	tagName = 'div', 
	type = 'field', 
	value ='', 
	...props
} ) {

	const blockProps = useBlockProps()
	const Component = tagName
	const ref = createRef()

	if ( selfClosingTagNames.includes(tagName) === false && dangerouslySetInnerHTML ) {
		return (
			<Component
				{ ...props }
				ref={ ref }
				className={ classNames(
					fieldClassNames( {
						blockName: blockProps['data-type'], 
						type,
						name,
						value,
					} ),
					...(Array.isArray(className) && className || [className])
				) }
				onClick={ preventEventPropagation }
				onInput={ preventEventPropagation }
				onKeydown={ preventEventPropagation }
				dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
			/>
		)
	}

	if ( selfClosingTagNames.includes(tagName) === true || children.length === 0 ) {
		return (
			<Component
				{ ...props }
				ref={ ref }
				className={ classNames(
					fieldClassNames( {
						blockName: blockProps['data-type'], 
						type,
						name,
						value,
					} ),
					...(Array.isArray(className) && className || [className])
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
				fieldClassNames({ 
					blockName: blockProps['data-type'], 
					type, 
					name, 
					value,
				}),
				...(Array.isArray(className) && className || [className])
			) }
			onClick={ preventEventPropagation }
			onInput={ preventEventPropagation }
			onKeydown={ preventEventPropagation }
			children={ children }
		/>
	)

}

export default edit
