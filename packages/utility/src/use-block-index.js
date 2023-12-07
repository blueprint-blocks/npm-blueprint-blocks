/**
 * React hook for retrieving props from registered selectors.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-data/#useselect
 */
import { useSelect } from '@wordpress/data'

/**
 *
 * @param {*} clientId
 * @returns
 */
function useBlockIndex( clientId ) {
	const { getBlockIndex } = useSelect( ( select ) => ( {
		getBlockIndex: select( 'core/block-editor' )?.getBlockIndex
	} ) )
	return getBlockIndex( clientId ) || 0
}

export default useBlockIndex
