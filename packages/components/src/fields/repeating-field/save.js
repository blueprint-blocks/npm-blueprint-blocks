import Field from '../field/index.js'

function save( { children, count = null, min = 0, max = null, value = [], ...props } ) {

	let rowCount = value.length

	if ( count !== null ) {
		rowCount = parseInt( count )
	}

	return (
		<Field.save
			{ ...props }
			type="repeating"
		>
			{ [ ...Array( rowCount ).keys() ].map( ( index ) => (
				( Array.isArray( children ) && children || [ children ] ).map( ( { props, type } ) => {
					const Component = type
					return (
						<Component
							{ ...props }
							value={ value?.[ index ]?.[ props?.attributeName ] }
						/>
					)
				} )
			) ) }
		</Field.save>
	)
}

export default save
