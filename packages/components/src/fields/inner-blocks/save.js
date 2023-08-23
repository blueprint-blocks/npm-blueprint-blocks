import { InnerBlocks } from '@wordpress/block-editor'
import Field from '../field/index.js'

function save( { template = [], templateLock = false, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="inner-blocks"
		>
			<InnerBlocks.Content />
		</Field.save>
	)

}

export default save