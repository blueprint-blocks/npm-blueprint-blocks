import Field from '../field'

function save( { attributes, name, multiLine = false, tagName = 'p', value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			name={ name }
			tagName={ tagName }
			type="rich-text"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save