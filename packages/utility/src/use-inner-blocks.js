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
function useInnerBlocks( clientId ) {
	const { getBlocks } = useSelect( ( select ) => ( {
		getBlocks: select( 'core/block-editor' )?.getBlocks
	} ) )
	return getBlocks && getBlocks( clientId ) || []
}

export default useInnerBlocks
