import { createRef } from '@wordpress/element'
import Field from '../field/index.js'

//import './style.css'

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
            />
		</Field.edit>
	)
}

export default edit
