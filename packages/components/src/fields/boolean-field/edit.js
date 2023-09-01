import { useState } from '@wordpress/element'
import Field from '../field/index.js'
import Tooltip from '../../tooltip/index.js'

const elStyle = {
	'--padding': '2px',
	'--size': '22px',
}

const elSmallStyle = {
	'--size': '14px',
}

const wrapStyle = {
	border: '1px solid #8d96a0',
    borderRadius: 'calc(2px + var(--size) + (var(--padding) * 2))',
	boxSizing: 'border-box',
	cursor: 'pointer',
    display: 'grid',
	gridGap: 'var(--padding)',
	gridTemplateColumns: 'var(--size) var(--size)',
    height: 'calc(2px + var(--size) + (var(--padding) * 2))',
	padding: 'var(--padding)',
    position: 'relative',
    userSelect: 'none',
	width: 'calc((var(--size) * 2) + (var(--padding) * 3) + 2px)',
}

const toggleSizeStyle = {
	alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: 'var(--size)',
    width: 'var(--size)',
}

const toggleFalsePositionStyle = {
	gridColumn: '1',
	gridRow: '1',
}

const toggleTruePositionStyle = {
	gridColumn: '2',
	gridRow: '1',
}

const toggleStyle = {
	background: '#8d96a0',
	borderRadius: 'var(--size)',
}

const toggleTrueStyle = {
	background: 'var(--wp-admin-theme-color)',
}

function edit( { onInput, options = [], multiple = false, disabled = false, size = 'normal', tooltip, tooltipPosition = 'center', value, ...props } ) {

	const [ hasHover, setHasHover ] = useState( false )
	
	return (
		<Field.edit
			{ ...props }
			type="boolean"
			value={ value }
			style={ {
				...elStyle,
				...( size === 'small' && elSmallStyle ),
			} }
			onMouseEnter={ () => setHasHover( true ) }
			onMouseLeave={ () => setHasHover( false ) }
		>
			<div 
				style={ wrapStyle }
				onClick={ () => onInput(!value) }
			>
				<div 
					style={ {
						...toggleSizeStyle,
						...toggleFalsePositionStyle,
					} }
				/>
				<div 
					style={ {
						...toggleSizeStyle,
						...toggleTruePositionStyle,
					} }
				/>
				<div 
					style={ {
						...toggleStyle,
						...toggleSizeStyle,
						...( value === true && toggleTrueStyle ),
						...( value === true && toggleTruePositionStyle ),
						...( value === false && toggleFalsePositionStyle ),
					} }
				/>
				{ tooltip && (
					<Tooltip label={ tooltip } show={ hasHover }/>
				) }
			</div>
		</Field.edit>
	)

}

export default edit
