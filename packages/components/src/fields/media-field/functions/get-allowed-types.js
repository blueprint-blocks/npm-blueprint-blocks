import memoize from 'micro-memoize'

import ALL_TYPES from '../data/types.json'

const getAllowedTypes = memoize( ( allowedTypes = [] ) => {
	if ( !allowedTypes || allowedTypes?.length === 0 ) {
		return ALL_TYPES
	}
	
	return allowedTypes.filter( ( type ) => (
		ALL_TYPES.includes( type ) 
	) )
} )

export default getAllowedTypes
