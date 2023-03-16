import { createRef } from '@wordpress/element'
import Field from '../field'

//import './style.css'

function edit( { 
	onInput, 
	placeholder, 
	pattern = '', 
	disabled = false, 
	multiple = false, 
	required = false, 
	value, 
	...props
} ) {

	const ref = createRef()

	return (
		<Field.edit
			{ ...props }
			type="email"
			value={ value }
		>
			<input
				ref={ ref }
				type="email"
				onBlur={ () => ref?.current?.reportValidity() }
                onChange={ ( { target } ) => onInput(target.value) }
                placeholder={ placeholder }
				pattern={ pattern }
                disabled={ disabled }
				multiple={ multiple }
				required={ required }
                value={ value }
            />
		</Field.edit>
	)
}

export default edit
