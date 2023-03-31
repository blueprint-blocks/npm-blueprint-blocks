import memoize from 'micro-memoize'

const hasValue = memoize( ( value ) => {
	if ( Array.isArray( value ) && value.length > 0 ) {
		return true
	}
	return !value
} )

export default hasValue
