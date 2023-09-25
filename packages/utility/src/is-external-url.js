function isExternalUrl( url ) {
	if ( url.indexOf('#') === 0 || ( url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0 ) ) {
		return false
	}

	return ( new URL( url ).origin !== location.origin )
}

export default isExternalUrl
