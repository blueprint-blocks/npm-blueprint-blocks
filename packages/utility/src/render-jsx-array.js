import classNames from './class-names.js'
import evaluateConditionalString from './evaluate-conditional-string.js'
import replaceTokens from './replace-tokens.js'
import styles from './styles.js'

/**
 * Renders an array of JSX objects
 *
 * @param {array} jsx
 */
function renderJsxArray( {
	clientId,
	blockName,
	attributes,
	setAttributes = null,
	jsx = [],
	context = {}
}, Components = {} ) {

	if ( Array.isArray( jsx ) === false || jsx.length === 0 ) {
		return null
	}

	const jsxComponents = jsx.map( ( {
		children = [],
		className = [],
		editorClassName = [],
		viewClassName = [],
		style = {},
		attributeName = '',
		type = '',
		tagName = 'div',
		persist = true,
		...props
	} ) => {

		let attributeValue = attributes?.[ attributeName ]

		if ( attributeValue === undefined ) {
			attributeValue = props?.value
		}

		const jsxAttributes = Object.fromEntries( Object.entries( props ).map( ( [ name, value ] ) => {
			if ( typeof value === 'string' ) {
				return [
					name,
					replaceTokens( value, { ...context, attribute: { value: attributeValue } } ),
				]
			} else {
				return [
					name,
					value,
				]
			}
		} ) )

		if ( 'display' in jsxAttributes ) {
			jsxAttributes.display = evaluateConditionalString( props.display, context )
		}

		const jsxClassNames = classNames( [
			...( Array.isArray( className ) && className || [ className ] ),
			...( context?.context === 'edit' && (
				Array.isArray( editorClassName ) && editorClassName || [ editorClassName ]
			) || [] ),
			...( context?.context === 'save' && (
				Array.isArray( viewClassName ) && viewClassName || [ viewClassName ]
			) || [] ),
		], { ...context, attribute: { value: attributeValue } } )

		if ( jsxClassNames ) {
			jsxAttributes.className = jsxClassNames
		}

		const jsxStyles = styles( style, { ...context, attribute: { value: attributeValue } } )

		if ( Object.values( jsxStyles ).length > 0 ) {
			jsxAttributes.style = jsxStyles
		}

		let Component = tagName

		if ( type in Components && Components[ type ] ) {
			Component = Components[ type ]

			return (
				<Component
					{ ...jsxAttributes }
					clientId={ clientId }
					blockName={ blockName }
					tagName={ tagName }
					attributes={ attributes }
					{ ...( attributeValue !== undefined && {
						value: attributeValue,
					} ) }
					{ ...( setAttributes !== null && {
						attributeName,
						setAttributes,
						onInput: ( value ) => {
							if ( !attributeName ) {
								return
							}
							setAttributes( {
								[attributeName]: value,
							}, persist )
						},
					} ) }
				>
					{ renderJsxArray( {
						clientId,
						blockName,
						attributes,
						setAttributes,
						jsx: children,
						context,
					}, Components ) }
				</Component>
			)
		}

		return (
			<Component
				{ ...jsxAttributes }
				blockName={ blockName }
			>
				{ renderJsxArray( {
					clientId,
					blockName,
					attributes,
					setAttributes,
					jsx: children,
					context,
				}, Components ) }
			</Component>
		)

	} )

	if ( jsxComponents.length === 1 ) {
		return jsxComponents[ 0 ]
	}

	return jsxComponents

}

export default renderJsxArray
