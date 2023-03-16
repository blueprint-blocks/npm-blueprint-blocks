import { TextControl } from '@wordpress/components'
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

	return (
		<Field.edit
			{ ...props }
			type="email"
			value={ value }
		>
			<input
				type="email"
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
