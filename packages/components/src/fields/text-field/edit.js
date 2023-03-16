import { TextControl } from '@wordpress/components'
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

	return (
		<Field.edit
			{ ...props }
			type="text"
			value={ value }
		>
			<input
				type="text"
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
