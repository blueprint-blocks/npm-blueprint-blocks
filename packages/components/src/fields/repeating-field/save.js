import Field from '../field/index.js'

function save( { value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="repeating"
		/>
	)
}

export default save