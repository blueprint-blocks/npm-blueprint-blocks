import { TextControl } from '@wordpress/components'
import Field from '../field'

//import './style.css'

function edit( { onInput, placeholder, disabled = false, value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			type="text"
			value={ value }
		>
			<TextControl
                disabled={ disabled }
                onChange={ onInput }
                placeholder={ placeholder }
                value={ value }
            />
		</Field.edit>
	)
}

export default edit
