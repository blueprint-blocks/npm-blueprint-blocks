import { TextareaControl } from '@wordpress/components'
import Field from '../field'

//import './style.css'

function edit( { onInput, placeholder, disabled = false, rows = 8, value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			type="text"
			value={ value }
		>
			<TextareaControl
                disabled={ disabled }
                onChange={ onInput }
                placeholder={ placeholder }
				rows={ rows }
                value={ value }
            />
		</Field.edit>
	)
}

export default edit