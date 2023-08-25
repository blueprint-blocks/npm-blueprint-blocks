import Field from '../field/index.js'

import './style.scss'

function edit( { 
	onInput, 
	placeholder, 
	required = false, 
	value, 
	...props 
} ) {

	return (
		<Field.edit
			{ ...props }
			type="url"
			value={ value }
		>
			<input
				type="text"
				onBlur={ () => ref?.current?.reportValidity() }
                onChange={ ( { target } ) => onInput(target.value) }
                placeholder={ placeholder }
				required={ required }
                value={ value }
            />
		</Field.edit>
	)
}

export default edit
