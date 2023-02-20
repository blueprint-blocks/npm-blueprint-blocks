import Field from '../field'

//import './style.css'

function edit( { attributes, name, onInput, min = 0, max = 100, step = 1, disabled = false, tagName = 'div', value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			name={ name }
			tagName={ tagName }
			type="text"
			value={ value }
		>
			<input
				type="range"
				min={ Number( min ) }
				max={ Number( max ) }
				step={ Number( step ) }
				value={ value }
				onChange={ ( event ) => onInput( Number( event.target.value ) ) }
			/>
			<input
				type="number"
				min={ Number( min ) }
				max={ Number( max ) }
				step={ Number( step ) }
				value={ value }
				onChange={ ( event ) => onInput( Number( event.target.value ) ) }
			/>
		</Field.edit>
	)
}

export default edit