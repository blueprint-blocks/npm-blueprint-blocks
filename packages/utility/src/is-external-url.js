function isExternalUrl( url ) {
	if ( url.length === 0 || url.indexOf('#') === 0 || ( url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0 ) ) {
		return false
	}

	try {
		new URL( url )
	} catch( error ) {
		return false
	}

	return ( new URL( url ).origin !== location.origin )
}

export default isExternalUrl
