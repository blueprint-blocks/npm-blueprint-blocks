import classNames from './class-names.js'
import replaceTokens from './replace-tokens.js'
import styles from './styles.js'

/**
 * Renders an array of JSX objects
 * 
 * @param {array} jsx 
 */
function renderJsxArray( { blockName, attributes, setAttributes, jsx = [], context = {} }, Components = {} ) {

	return jsx.map( ( { children = [], className = [], style = {}, name = '', attributeName = '', type = '', tagName = 'div', ...props } ) => {

		const jsxAttributes = Object.fromEntries( Object.entries( props ).map( ( [ name, value ] ) => {
			if ( typeof value === 'string' ) {
				return [
					name,
					replaceTokens( value, context ),
				]
			} else {
				return [
					name,
					value,
				]
			}
		} ) )

		const jsxClassNames = classNames( className, context )

		if ( jsxClassNames ) {
			jsxAttributes.className = jsxClassNames
		}

		let Component = tagName

		if ( type in Components && Components[ type ] ) {
			Component = Components[ type ]

			if ( typeof attributes?.[ attributeName ] !== 'undefined' ) {
				props.value = attributes?.[ attributeName ]
			}

			return (
				<Component
					{ ...jsxAttributes }
					blockName={ blockName }
					style={ styles( style, context ) }
					name={ name }
					tagName={ tagName }
					attributes={ attributes }
					{ ...( context?.mode !== 'save' && {
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
				styles={ styles( style, context ) }
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