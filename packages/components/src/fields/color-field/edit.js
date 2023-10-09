import memoize from 'micro-memoize'
import { useSetting } from '@wordpress/block-editor'
import { ColorPalette } from '@wordpress/components'
import { replaceTokens } from '@blueprint-blocks/utility'
import Field from '../field/index.js'

const getColor = memoize( ( { color, name, slug }, colors = [] ) => {
	for ( let i = 0; i < colors.length; i++ ) {
		if ( colors[ i ]?.color === color || colors[ i ]?.name === name || colors[ i ]?.slug === slug ) {
			return colors[ i ]
		}
	}

	return {
		color: color,
		name: name || 'Custom',
		slug: slug || 'custom',
	}
} )

const getSavedAsToken = memoize( ( saveAs ) => {
	if ( saveAs.indexOf( '{{ color.slug }}' ) !== -1 ) {
		return [
			'slug',
			saveAs.indexOf( '{{ color.slug }}' )
		]
	} else if ( saveAs.indexOf( '{{ color.color }}' ) !== -1 ) {
		return [
			'color',
			saveAs.indexOf( '{{ color.color }}' )
		]
	} else if ( saveAs.indexOf( '{{ color.name }}' ) !== -1 ) {
		return [
			'name',
			saveAs.indexOf( '{{ color.name }}' )
		]
	}

	return [
		null,
		null
	]
} )

const getColorFromSavedAsValue = memoize( ( value, saveAs, colors = [] ) => {
	const [ key, index ] = getSavedAsToken( saveAs )

	if ( key === null ) {
		return null
	}

	for ( let i = 0; i < colors.length; i++ ) {
		if ( value.indexOf( colors[ i ][ key ] ) !== -1 ) {
			return colors[ i ]
		}
	}

	return value
} )

function edit( {
	blockName,
	name,
	colors = null,
	clearable = true,
	disableCustomColors = false,
	enableAlpha = false,
	value,
	saveAs = '{{ color.color }}',
	onInput,
	...props
} ) {

	const palette = ( colors === null && useSetting( 'color.palette' ) || colors ) || []
	let colorValue = value

	if ( saveAs !== '{{ color.color }}' ) {
		colorValue = getColorFromSavedAsValue( value, saveAs, palette )
	}

	return (
		<Field.edit
			{ ...props }
			type="color"
			value={ value }
		>
			<ColorPalette
				colors={ palette }
				clearable={ clearable }
				disableCustomColors={ disableCustomColors }
				enableAlpha={ enableAlpha }
				value={ colorValue?.color || colorValue }
				onChange={ ( hex ) => {
					const color = getColor( { color: hex }, palette )
					return onInput( color?.slug === "custom" && color.color || replaceTokens( saveAs, { color } ) )
				} }
			/>
		</Field.edit>
	)
}

export default edit
