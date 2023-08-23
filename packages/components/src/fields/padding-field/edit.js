import Field from '../field/index.js'
import IncrementField from '../increment-field/index.js'

import PADDING_DEFINITIONS from './data/definitions.json'
import PADDING_SIZES from './data/sizes.json'

function edit( { 
	onInput, 
	definitions = [ 'top', 'bottom' ], 
	sizes = [ 'none', 'small', 'medium', 'large' ], 
	disabled = false, 
	value = {}, 
	...props 
} ) {

	return (
		<Field.edit
			{ ...props }
			type="padding"
			value={ value }
		>
			{ definitions.map( ( definition ) => {
				const { label } = ( definition in PADDING_DEFINITIONS && PADDING_DEFINITIONS[ definition ] || definition )
				return (
					<IncrementField.edit
						disabled={ disabled }
						label={ label }
						options={ sizes.map( ( size ) => (
							size in PADDING_SIZES && PADDING_SIZES[ size ] || size 
						) ) }
						value={ value?.[definition] }
						onInput={ ( newValue ) => onInput( { ...value, [definition]: newValue } ) }
					/>
				)
			} ) }
		</Field.edit>
	)

}

export default edit