import Field from '../field/index.js'

function save( { placeholder = '', value, ...props } ) {

	return (
		<Field.save
			{ ...props }
			type="range"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save