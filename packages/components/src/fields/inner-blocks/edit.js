import { InnerBlocks } from '@wordpress/block-editor'
import Field from '../field'

function edit( { name = 'inner-blocks', template = [], templateLock = false, ...props } ) {
	
	return (
		<Field.edit
			{ ...props }
			type="inner-blocks"
			name={ name }
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
