import Field from '../field'

function save( { attributes, name, tagName = 'div', value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			name={ name }
			tagName={ tagName }
			type="select"
			dangerouslySetInnerHTML={ { __html: (Array.isArray(value) && value || [ value ]).join(',') } }
		/>
	)
}

export default save