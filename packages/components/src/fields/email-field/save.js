import Field from '../field/index.js'

function save( { 
	placeholder = '', 
	pattern = '', 
	disabled = false, 
	multiple = false, 
	required = false, 
	value, 
	...props 
} ) {

	return (
		<Field.save
			{ ...props }
			type="email"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save