function isExternalUrl( url ) {
	return ( new URL( url ).origin !== location.origin )
}

export default isExternalUrl