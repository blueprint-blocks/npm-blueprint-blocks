import Field from '../field'
import ToolbarField from '../toolbar-field'

import TEXT_SIZES from './data/text-sizes.json'

function edit( { onInput, textSizes = [ 'h1', 'h2', 'h3', 'h4' ], value, ...props } ) {

	return (
		<ToolbarField.edit
			options={ textSizes.map( ( textSize ) => (
				textSize in TEXT_SIZES && TEXT_SIZES[ textSize ] || textSize 
			) ) }
			value={ value }
			onInput={ onInput }
		/>
	)

}

export default edit