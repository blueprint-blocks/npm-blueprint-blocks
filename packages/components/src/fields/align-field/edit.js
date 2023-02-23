import ToolbarField from '../toolbar-field'

import ALIGN_CONTROLS from './data/controls.json'

function edit( { onInput, controls = [ 'left', 'center', 'right' ], value, ...props } ) {

	return (
		<ToolbarField.edit
			{ ...props }
			type="align"
			value={ value }
			options={ controls.map( ( align ) => (
				align in ALIGN_CONTROLS && ALIGN_CONTROLS[ align ] || align 
			) ) }
			onInput={ onInput }
		/>
	)

}

export default edit