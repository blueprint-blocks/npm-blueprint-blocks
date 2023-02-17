import Field from '../field'

//import './style.css'

function edit( { attributes, name, onInput, min = 0, max = null, step = 1, disabled = false, tagName = 'div', value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			name={ name }
			tagName={ tagName }
			type="number"
			value={ value }
		>
			<input
				type="number"
				disabled={ disabled }
				min={ min }
				max={ max }
				step={ step }
				value={ value }
				onChange={ ( event ) => onInput( Number( event.target.value ) ) }
			/>
		</Field.edit>
	)
}

export default edit
