import { createRef } from '@wordpress/element'
import Field from '../field/index.js'

const inputStyle = {
	background: '#fff',
	border: '1px solid #8c8f94',
	borderRadius: '4px',
	color: '#2c3338',
	display: 'block',
	fontFamily: 'var(--wp--preset--font-family--system-font)',
	fontSize: '14px',
	fontWeight: 'normal',
	height: '30px',
	lineHeight: '28px',
	maxWidth: '400px',
	padding: '0 8px',
    textAlign: 'inherit',
    transition: 'none',
	width: '100%',
}

function edit( { 
	onInput, 
	placeholder, 
	pattern = '', 
	customValidity = '',
	disabled = false, 
	required = false, 
	value, 
	...props
} ) {

	const ref = createRef()

	return (
		<Field.edit
			{ ...props }
			type="text"
			value={ value }
		>
			<input
				ref={ ref }
				type="text"
				onInput={ ( { target } ) => {
					if (target?.validity?.patternMismatch && customValidity) {
						target?.setCustomValidity(customValidity)
					} else {
						target?.setCustomValidity('')
					}
					target?.reportValidity()
					onInput(target.value)
				} }
                placeholder={ placeholder }
				pattern={ pattern }
                disabled={ disabled }
				required={ required }
                value={ value }
				style={ inputStyle }
            />
		</Field.edit>
	)
}

export default edit
