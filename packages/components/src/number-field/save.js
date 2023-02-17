import Field from '../field'

function save( { name, tagName = 'div', value } ) {

	return (
		<Field.save
			name={ name }
			tagName={ tagName }
			type="number"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save