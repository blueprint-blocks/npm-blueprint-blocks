import Field from '../field/index.js'

function save( { value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="anchor"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save