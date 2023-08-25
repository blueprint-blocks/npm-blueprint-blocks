import memoize from 'micro-memoize'
import { useEffect, useState } from '@wordpress/element'

import Field from '../field/index.js'

const wrapStyle = {
	'--grid-columns': 2,
	background: '#fff',
	border: '1px solid #8d96a0',
	borderRadius: '2px',
	fontFamily: 'var(--wp--preset--font-family--system-font)',
	fontSize: '13px',
	lineHeight: '1.4',
	minHeight: '26px',
	maxWidth: '300px',
	overflow: 'hidden',
	position: 'relative',
	userSelect: 'none',
}

const itemsStyle = {
	display: 'grid',
	gap: '1px',
	gridTemplateColumns: 'repeat(var(--grid-columns), minmax(0, 1fr))',
	width: '100%',
}

const itemStyle = {
	alignItems: 'stretch',
	cursor: 'pointer',
	display: 'flex',
	flex: '1',
	justifyContent: 'stretch',
	height: '26px',
	outline: '1px solid #e2e4e7',
	padding: '2px',
}

const itemDivStyle = {
	borderColor: 'transparent',
	borderRadius: '2px',
	borderStyle: 'solid',
	borderWidth: '1px',
	alignItems: 'center',
	cursor: 'pointer',
	display: 'flex',
	flex: '1',
	justifyContent: 'center',
	textAlign: 'center',
	transition: 'background 0.4s, border 0.4s, colors 0.4s',
	whiteSpace: 'nowrap',
}

const itemDivHasImagesStyle = {
	flexDirection: 'column',
	height: 'auto',
	justifyContent: 'start',
	overflow: 'hidden',
	whiteSpace: 'normal',
}

const itemDivHoverStyle = {
	borderColor: 'var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba))',
    color: 'var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba))',
}

const itemDivFocusStyle = {
	background: 'var(--wp-components-color-gray-300, #ddd)',
	borderColor: 'var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba))',
    color: 'var(--wp-components-color-accent, var(--wp-admin-theme-color, #007cba))',
}

const itemDivActiveStyle = {
	background: '#0085ba',
	color: '#fff',
}

const imageStyle = { 
	display: 'block',
	gridColumn: 1,
	gridRow: 1,
	height: '100%',
	objectFit: 'contain',
	objectPosition: 'center',
	width: '100%',
}

const imageBeforeStyle = {
	content: '',
	display: 'block',
	gridColumn: 1,
	gridRow: 1,
	paddingBottom: 'calc(100% * (64 / 100))',
}

const imageDivStyle = {
	display: 'grid',
	width: '100%',
}

const iconStyle = {
	fontSize: '16px',
}

const iconHasImagesStyle = {
	fontSize: '32px',
}

const labelStyle = {}

const labelHasImagesStyle = {
	padding: '8px',
}

const optionsHaveImages = memoize( ( options ) => {
	return options.reduce( ( hasImages, { image } ) => (
		!!( hasImages || image )
	), false )
} )

function edit( { onInput, options = [], multiple = false, disabled = false, value = [], ...props } ) {

	const hasImages = optionsHaveImages( options )

	const [ focusIndex, setFocusIndex ] = useState( null )
	const [ hoverIndex, setHoverIndex ] = useState( null )

	const onChooseOption = ( index ) => {
		let newValue = [ ...value ];
		const optionValue = options?.[index]?.value;

		if ( multiple ) {
			if ( newValue.indexOf( optionValue ) === -1 ) {
				newValue.push( optionValue )
			} else {
				newValue = newValue.filter( ( value ) => (
					value !== optionValue
				) );
			}
		} else {
			newValue = [ options?.[index]?.value ];
		}

		onInput( newValue );
    };

	const onBlur = () => {
		setFocusIndex( null )
		window.removeEventListener( 'mouseup', onBlur )
	}

	useEffect( () => {
		if ( focusIndex !== null ) {
			window.addEventListener( 'mouseup', onBlur )
		}
	}, [ focusIndex ] )

	return (
		<Field.edit
			{ ...props }
			type="toggle"
			value={ value }
		>
			<div style={ wrapStyle }>
				<div style={ itemsStyle }>
					{ options.map( ( { icon, image, label, ...option }, index ) => (
						<div style={ itemStyle }>
							<div
								title={ !!icon && label }
								onClick={ () => onChooseOption( index ) }
								onMouseEnter={ () => setHoverIndex( index ) }
								onMouseDown={ () => setFocusIndex( index ) }
						        onMouseLeave={ () => setHoverIndex( null ) }
								style={ { 
									...itemDivStyle,
									...( hasImages && itemDivHasImagesStyle ),
									...( index === hoverIndex && itemDivHoverStyle ),
									...( index === focusIndex && itemDivFocusStyle ),
									...( ( value?.indexOf(option?.value) !== -1 ) && itemDivActiveStyle ),
								} }
							>
								{ !!image && (
									<div style={ imageDivStyle }>
										<div style={ imageBeforeStyle }/>
										<img src={ image } style={ imageStyle }/>
									</div>
								) }
								{ !!icon && !image && (
									<i
										className={ icon }
										style={ {
											...iconStyle,
											...( hasImages && iconHasImagesStyle ),
										} }
									/>
								) }
								{ ( !icon || hasImages ) && (
									<span
										style={ {
											...labelStyle,
											...( hasImages && labelHasImagesStyle ),
										} }
									>
										{ label }
									</span>
								) }
							</div>
						</div>
					) ) }
				</div>
			</div>
		</Field.edit>
	)

}

export default edit
