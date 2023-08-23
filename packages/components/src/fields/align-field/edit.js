import ToolbarField from '../toolbar-field/index.js'

import ALIGN_CONTROLS from './data/controls.json'

function edit( { onInput, controls = [ 'left', 'center', 'right' ], value, ...props } ) {

	return (
		<ToolbarField.edit
			{ ...props }
			type="align"
			value={ value }
			options={ controls.map( ( control ) => (
				control in ALIGN_CONTROLS && ALIGN_CONTROLS[ control ] || control 
			) ) }
			onInput={ onInput }
		/>
	)

}

export default edit