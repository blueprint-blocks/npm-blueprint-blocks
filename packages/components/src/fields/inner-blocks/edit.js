import { InnerBlocks } from '@wordpress/block-editor'
import Field from '../field'

function edit( { template = [], templateLock = false, ...props } ) {
	
	return (
		<Field.edit
			{ ...props }
			type="inner-blocks"
		>
			<InnerBlocks
				template={ template }
				templateLock={ templateLock }
				{ ...props }
			/>
		</Field.edit>
	)

}

export default edit
