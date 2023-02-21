import Field from '../field'

function save( { placeholder = '', value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="range"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save