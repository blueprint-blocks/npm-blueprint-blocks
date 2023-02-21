import Field from '../field'

function save( { multiLine = false, placeholder = '', tagName = 'p', value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			tagName={ tagName }
			type="rich-text"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save