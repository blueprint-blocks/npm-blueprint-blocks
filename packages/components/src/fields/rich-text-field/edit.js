import classNames from 'classnames'
import { RichText } from '@wordpress/block-editor'
import getFieldClassNames from '../field/functions/get-field-class-names.js'

function edit( {
	blockName,
	attributeName,
	placeholder,
	allowedFormats = null,
	disabled = false,
	tagName = 'p',
	className = [],
	display = true,
	value,
	onInput,
	...props
} ) {

	if ( display !== true && Boolean( display ) === false ) {
		return
	}

	const fieldProps = Object.assign( {}, props )

	if ( className ) {
		fieldProps.className = className
	}

	if ( disabled === true ) {
		const Component = tagName
		return <Component
			{ ...fieldProps }
			dangerouslySetInnerHTML={ { __html: value } }
		/>
	}

	return (
		<RichText
			{ ...fieldProps }
			onChange={ onInput }
			tagName={ tagName }
			allowedFormats={ allowedFormats }
			keepPlaceholderOnFocus={ true }
			placeholder={ placeholder }
			value={ value }
		/>
	)
}

export default edit
