import Field from '../field'
import IncrementField from '../increment-field'

import MARGIN_DEFINITIONS from './data/definitions.json'
import MARGIN_SIZES from './data/sizes.json'

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
			type="margin"
			value={ value }
		>
			{ definitions.map( ( definition ) => {
				const { label } = ( definition in MARGIN_DEFINITIONS && MARGIN_DEFINITIONS[ definition ] || definition )
				return (
					<IncrementField.edit
						disabled={ disabled }
						label={ label }
						options={ sizes.map( ( size ) => (
							size in MARGIN_SIZES && MARGIN_SIZES[ size ] || size 
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