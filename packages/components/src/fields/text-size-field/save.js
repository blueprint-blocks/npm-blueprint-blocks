import Field from '../field/index.js'

function save( { value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="text-size"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save