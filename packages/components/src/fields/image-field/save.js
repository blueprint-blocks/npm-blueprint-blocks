import Field from '../field/index.js'

function save( {
	allowedTypes = [],
	value = [],
	...props
} ) {

	return (
		<Field.save
			{ ...props }
			tagName="img"
			type="image"
			src={ value?.url }
		/>
	)
}

export default save
