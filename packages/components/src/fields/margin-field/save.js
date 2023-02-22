import Field from '../field'

function save( { value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="margin"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save