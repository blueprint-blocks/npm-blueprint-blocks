import Field from '../field/index.js'

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