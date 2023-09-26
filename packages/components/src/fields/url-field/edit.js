import { URLInput } from '@wordpress/block-editor'
import Field from '../field/index.js'

import './style.scss'

function edit( {
	onInput,
	placeholder,
	value,
	...props
} ) {

	return (
		<Field.edit
			{ ...props }
			type="url"
			value={ value }
		>
			<URLInput
				onChange={ ( url ) => onInput( url ) }
                placeholder={ placeholder }
                value={ value }
            />
		</Field.edit>
	)
}

export default edit
