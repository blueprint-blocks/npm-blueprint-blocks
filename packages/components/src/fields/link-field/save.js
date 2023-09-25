import Field from '../field/index.js'

function save( { placeholder, value, ...props } ) {

	const {
		href,
		target,
		label,
	} = value

	return (
		<Field.save
			{ ...props }
			href={ href }
			target={ target }
			tagName="a"
			type="link"
		>
			{ label }
		</Field.save>
	)
}

export default save
