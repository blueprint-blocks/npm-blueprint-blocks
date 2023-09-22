import Field from '../field/index.js'

import getAllowedTypes from './functions/get-allowed-types.js'

function save( {
	allowedTypes = [],
	multiple = false,
	value = [],
	...props
} ) {

	if ( getAllowedTypes( allowedTypes ).includes( 'image' ) === false ) {
		return null
	}

	return (
		<Field.save
			{ ...props }
			type="media"
		>
			{ (value || []).filter( ( { type } ) => type === 'image' ).map( ( { url } ) => (
				<img src={ url }/>
			) ) }
		</Field.save>
	)
}

export default save
