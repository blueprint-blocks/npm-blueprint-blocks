import Field from '../field/index.js'

function save( { value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="number"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save