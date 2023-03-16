import { createRef } from '@wordpress/element'
import Field from '../field'

//import './style.css'

function edit( { 
	onInput, 
	placeholder, 
	pattern = '', 
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
				type="text"
				onBlur={ () => ref?.current?.reportValidity() }
                onChange={ ( { target } ) => onInput(target.value) }
                placeholder={ placeholder }
				pattern={ pattern }
                disabled={ disabled }
				required={ required }
                value={ value }
            />
		</Field.edit>
	)
}

export default edit
