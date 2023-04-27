import Field from '../field'

function save( { value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="gradient"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save