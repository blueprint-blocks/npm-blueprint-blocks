import Field from '../field/index.js'

function save( { children, count = null, min = 0, max = null, value = [], ...props } ) {

	let rowCount = ( value?.length || 0 )

	if ( count !== null ) {
		rowCount = parseInt( count )
	}

	return (
		<Field.save
			{ ...props }
			type="repeating"
		>
			{ rowCount > 0 && [ ...Array( rowCount ).keys() ].map( ( index ) => (
				<div>
					{ children !== null && ( Array.isArray( children ) && children || [ children ] ).map( ( { props, type } ) => {
						const Component = type
						return (
							<Component
								{ ...props }
								value={ value?.[ index ]?.[ props?.attributeName ] }
							/>
						)
					} ) }
				</div>
			) ) }
		</Field.save>
	)
}

export default save
