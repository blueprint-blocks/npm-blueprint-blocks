import { InnerBlocks } from '@wordpress/block-editor'
import { useSelect } from '@wordpress/data'

function edit( {
	name = 'inner-blocks',
	allowedBlocks,
	orientation = 'vertical',
	template = [],
	templateLock = false,
	max = null,
	...props
} ) {

	const { clientId } = props
	const innerBlocksLength = useSelect( ( select ) => (
		select( 'core/block-editor' ).getBlock( clientId ).innerBlocks.length
	) )

	return (
		<InnerBlocks
			allowedBlocks={ allowedBlocks }
			orientation={ orientation === 'horizontal' && 'horizontal' || 'vertical' }
			template={ template }
			templateLock={ templateLock }
			renderAppender={ () => (
				( max === null || innerBlocksLength < max ) && <InnerBlocks.DefaultBlockAppender/> || false
			) }
			{ ...props }
		/>
	)

}

export default edit
