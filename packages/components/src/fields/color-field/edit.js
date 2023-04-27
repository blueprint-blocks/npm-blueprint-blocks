import memoize from 'micro-memoize'
import { ColorPalette } from '@wordpress/components'
import Field from '../field'

const getColor = memoize( ( slug, colors = [] ) => {
	for ( let i = 0; i < colors.length; i++ ) {
		if ( colors[i].slug === slug ) {
			return colors[i].color
		}
	}
	return slug
} )

const getSlug = memoize( ( color, colors = [] ) => {
	for ( let i = 0; i < colors.length; i++ ) {
		if ( colors[i].color === color ) {
			return colors[i].slug
		}
	}
	return color
} )

function edit( { 
	blockName,
	name,
	colors = [],
	clearable = true,
	enableCustomColors = true,
	enableAlpha = false,
	value, 
	onInput, 
	...props
} ) {
	return (
		<Field.edit
			{ ...props }
			type="color"
			value={ value }
		>
			<ColorPalette
				colors={ colors }
				clearable={ clearable }
				disableCustomColors={ !enableCustomColors }
				enableAlpha={ enableAlpha }
				value={ getColor( value, colors ) }
				onChange={ ( value ) => onInput( getSlug( value, colors ) ) }
			/>
		</Field.edit>
	)
}

export default edit