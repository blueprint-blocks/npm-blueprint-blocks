import { useEffect } from '@wordpress/element'

function useClickOutside( ref, callback ) {
	useEffect( () => {
		const handleClickOutside = ( event ) => {
			if ( ref.current && !ref.current.contains( event.target ) ) {
				callback && callback( event )
			}
		}

		document.addEventListener( 'mousedown', handleClickOutside )
	  
		return () => {
			document.removeEventListener( 'mousedown', handleClickOutside )
		}
	}, [ ref ] )
}

export default useClickOutside