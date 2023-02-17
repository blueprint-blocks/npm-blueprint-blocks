import Field from '../field'

//import './style.css'

function edit( { name, onInput, min = 0, max = null, step = 1, disabled = false, tagName = 'div', value } ) {

	return (
		<Field.edit
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
