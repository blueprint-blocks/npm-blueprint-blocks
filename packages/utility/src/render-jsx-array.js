import classNames from './class-names.js'
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

	return jsx.map( ( {
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

		const jsxClassNames = classNames( [
			...( Array.isArray( className ) && className || [ className ] ),
			...( context?.mode === 'edit' && (
				Array.isArray( editorClassName ) && editorClassName || [ editorClassName ]
			) || [] ),
			...( context?.mode === 'save' && (
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

}

export default renderJsxArray
