import Field from '../field'

function save( { attributes, name, placeholder = '', tagName = 'div', value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			name={ name }
			tagName={ tagName }
			type="range"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save