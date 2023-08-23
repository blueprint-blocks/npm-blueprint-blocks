import Field from '../field/index.js'

function save( { 
	placeholder = '', 
	pattern = '', 
	disabled = false, 
	required = false, 
	value, 
	...props 
} ) {

	return (
		<Field.save
			{ ...props }
			type="text"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save