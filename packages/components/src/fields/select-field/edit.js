import { SelectControl } from '@wordpress/components'
import Field from '../field/index.js'

const fieldStyle = {
	maxWidth: '400px',
}

function edit( { onInput, options = [], multiple = false, disabled = false, value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			type="select"
			value={ value }
			style={ fieldStyle }
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
