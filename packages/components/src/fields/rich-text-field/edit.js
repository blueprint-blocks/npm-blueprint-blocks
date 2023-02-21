import { RichText } from '@wordpress/block-editor'
import Field from '../field'

//import './style.css'

function edit( { attributes, name, onInput, placeholder, allowedFormats = [], multiLine = false, disabled = false, tagName = 'p', value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			name={ name }
			tagName={ tagName }
			type="rich-text"
			value={ value }
		>
			{ disabled === true && (
				<div dangerouslySetInnerHTML={ { __html: value } }/>
			) }
			{ disabled === false && (
				<RichText
					onChange={ onInput }
					tagName="div"
					allowedFormats={ allowedFormats }
					multiline={ multiLine }
					keepPlaceholderOnFocus={ true }
					placeholder={ placeholder }
					value={ value }
				/>
			) }
		</Field.edit>
	)
}

export default edit