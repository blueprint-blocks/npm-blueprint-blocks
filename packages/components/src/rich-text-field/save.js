import { RichText } from '@wordpress/block-editor'
import Field from '../field'

function save( { name, multiLine = false, tagName = 'p', value } ) {

	return (
		<Field.save
			name={ name }
			tagName={ tagName }
			type="rich-text"
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	)
}

export default save