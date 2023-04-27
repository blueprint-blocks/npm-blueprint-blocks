import memoize from 'micro-memoize'
import { GradientPicker } from '@wordpress/components'
import Field from '../field'

const getGradient = memoize( ( slug, gradients = [] ) => {
	for ( let i = 0; i < gradients.length; i++ ) {
		if ( gradients[i].slug === slug ) {
			return gradients[i].gradient
		}
	}
	return slug
} )

const getSlug = memoize( ( gradient, gradients = [] ) => {
	for ( let i = 0; i < gradients.length; i++ ) {
		if ( gradients[i].gradient === gradient ) {
			return gradients[i].slug
		}
	}
	return gradient
} )

function edit( { 
	blockName,
	name,
	gradients = [],
	clearable = true,
	enableCustomGradients = true,
	value, 
	onInput, 
	...props
} ) {
	return (
		<Field.edit
			{ ...props }
			type="gradient"
			value={ value }
		>
			<GradientPicker
				gradients={ gradients }
				clearable={ clearable }
				disableCustomGradients={ !enableCustomGradients }
				value={ getGradient( value, gradients ) }
				onChange={ ( value ) => onInput( getSlug( value, gradients ) ) }
			/>
		</Field.edit>
	)
}

export default edit