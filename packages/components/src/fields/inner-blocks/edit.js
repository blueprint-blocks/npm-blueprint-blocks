import { InnerBlocks } from '@wordpress/block-editor'
import Field from '../field/index.js'

function edit( {
	name = 'inner-blocks',
	allowedBlocks,
	orientation = 'vertical',
	template = [],
	templateLock = false,
	max = null,
	className = [],
	...props
} ) {

	const innerBlocksLength = props.attributes?._innerBlocksLength || 0
	const fieldProps = Object.assign( {}, props )

	if ( className ) {
		fieldProps.className = className
	}

	if ( props?.tagName === false ) {
		return (
			<InnerBlocks
				allowedBlocks={ allowedBlocks }
				orientation={ orientation === 'horizontal' && 'horizontal' || 'vertical' }
				template={ template }
				templateLock={ templateLock }
				renderAppender={ () => (
					( max === null || innerBlocksLength < max ) && <InnerBlocks.DefaultBlockAppender/> || false
				) }
			/>
		)
	}

	return (
		<Field.edit
			{ ...fieldProps }
			type="inner-blocks"
		>
			<InnerBlocks
				allowedBlocks={ allowedBlocks }
				orientation={ orientation === 'horizontal' && 'horizontal' || 'vertical' }
				template={ template }
				templateLock={ templateLock }
				renderAppender={ () => (
					( max === null || innerBlocksLength < max ) && <InnerBlocks.DefaultBlockAppender/> || false
				) }
			/>
		</Field.edit>
	)

}

export default edit
