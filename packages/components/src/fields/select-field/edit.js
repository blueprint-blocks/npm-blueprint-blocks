import { SelectControl } from '@wordpress/components'
import Field from '../field'

//import './style.css'

function edit( { onInput, options = [], multiple = false, disabled = false, value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			type="select"
			value={ value }
		>
			<SelectControl
				disabled={ disabled }
                onChange={ onInput }
                options={ options }
                multiple={ multiple }
                value={
					multiple && (Array.isArray(value) && value || [ value ]) ||
					(Array.isArray(value) && value || [ value ])?.[0]
                }
            />
		</Field.edit>
	)

}

export default edit
