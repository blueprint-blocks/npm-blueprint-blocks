function isFragmentUrl( url ) {
	if ( url.indexOf('#') === 0 ) {
		return true
	}

	return false
}

export default isFragmentUrl
