import memoize from 'micro-memoize'

const valueByIdentifier = memoize( ( identifier = '', context = {} ) => {
    let value = { ...context }
	let parts = identifier.split( '.' )

	if ( parts.length === 0 ) {
		return ''
	}

	let key = parts.shift()

	if ( !( key in context ) ) {
		return ''
	}

	if ( parts.length === 0 ) {
		return value[ key ]
	}

	return valueByIdentifier( parts.join( '.' ), value[ key ] )
} )

function replaceTokens( string = '', context = {} ) {
	if ( typeof string !== 'string' ) {
		return string
	}
	
	return string.replaceAll( /\{\{\s(.*?)\s\}\}/g, ( match, p1 ) => {
		return valueByIdentifier( p1, context )
	} )
}

export default replaceTokens