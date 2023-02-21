import { URLInput } from '@wordpress/block-editor'
import Field from '../field'

//import './style.css'

function edit( { onInput, placeholder, disabled = false, value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
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
