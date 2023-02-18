import Field from '../field'

function save( { attributes, name, tagName = 'div', value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			name={ name }
			tagName={ tagName }
			type="textarea"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save