import Field from '../field/index.js'

//import './style.scss'

function edit( { onInput, min = 0, max = null, step = 1, disabled = false, value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			type="number"
			value={ value }
		>
			<input
				type="number"
				disabled={ disabled }
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
