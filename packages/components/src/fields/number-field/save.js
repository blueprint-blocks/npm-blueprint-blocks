import Field from '../field'

function save( { attributes, name, tagName = 'div', value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			name={ name }
			tagName={ tagName }
			type="number"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save