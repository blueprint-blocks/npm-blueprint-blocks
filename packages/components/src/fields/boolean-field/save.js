import Field from '../field/index.js'

function save( { value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="select"
			dangerouslySetInnerHTML={ { __html: (value && 'true') || 'false' } }
		/>
	)
	
}

export default save