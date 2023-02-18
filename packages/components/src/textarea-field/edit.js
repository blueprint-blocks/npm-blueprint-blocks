import { TextareaControl } from '@wordpress/components'
import Field from '../field'

//import './style.css'

function edit( { attributes, name, onInput, placeholder, disabled = false, rows = 8, tagName = 'div', value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			name={ name }
			tagName={ tagName }
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