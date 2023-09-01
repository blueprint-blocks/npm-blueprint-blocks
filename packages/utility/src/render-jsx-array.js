import classNames from './class-names.js'
import replaceTokens from './replace-tokens.js'
import styles from './styles.js'

/**
 * Renders an array of JSX objects
 * 
 * @param {array} jsx 
 */
function renderJsxArray( { blockName, attributes, setAttributes = null, jsx = [], context = {} }, Components = {} ) {

	return jsx.map( ( { children = [], className = [], style = {}, name = '', attributeName = '', type = '', tagName = 'div', ...props } ) => {

		const attributeValue = attributes?.[ attributeName ]

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

		const jsxClassNames = classNames( className, { ...context, attribute: { value: attributeValue } } )

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
					blockName={ blockName }
					name={ name }
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
							} )
						},
					} ) }
				>
					{ renderJsxArray( {
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