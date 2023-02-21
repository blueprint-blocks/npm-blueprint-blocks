import { URLInput } from '@wordpress/block-editor'
import Field from '../field'

//import './style.css'

function edit( { attributes, name, onInput, placeholder, disabled = false, tagName = 'div', value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			name={ name }
			tagName={ tagName }
			type="number"
			value={ value }
		>
			<URLInput
				disabled={ disabled }
				onChange={ onInput }
				placeholder={ placeholder }
				value={ value }
			/>
		</Field.edit>
	)
}

export default edit
