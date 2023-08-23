import Field from '../field/index.js'

function save( { value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="select"
			dangerouslySetInnerHTML={ { __html: (Array.isArray(value) && value || [ value ]).join(',') } }
		/>
	)
}

export default save