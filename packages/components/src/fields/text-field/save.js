import Field from '../field'

function save( { placeholder = '', value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="text"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save