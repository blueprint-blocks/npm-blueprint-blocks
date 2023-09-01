import { createRef } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { link, upRightFromSquare } from '../../icons/index.js'
import Field from '../field/index.js'
import BooleanField from '../boolean-field/index.js'
import RichTextField from '../rich-text-field/index.js'
import Dialog from '../../dialog/index.js'

const wrapStyle = {
	position: 'relative',
}

const propertiesStyle = {
	alignItems: 'center',
	display: 'grid',
	gridGap: '8px',
	gridTemplateColumns: '1fr 12px 34px',
	rowGap: '4px',
}

const propertiesAfterStyle = {
	background: 'gray',
	content: '',
	display: 'block',
	height: '2px',
	gridColumn: '1 / span 3',
}

const urlInputStyle = {
	border: '0',
	color: 'black',
	display: 'block',
	fontSize: '12px !important',
	height: '32px !important',
	lineHeight: '32px !important',
	padding: '0',
    textAlign: 'inherit',
    transition: 'none',
    width: '100% !important',
}

const urlInputFocusStyle = {
	border: '0',
	boxShadow: 'none',
	outline: 'none',
}

function edit( { onInput, className = [], placeholder, value = {}, ...props } ) {

	const ref = createRef()

	return (
		<Field.edit
			{ ...props }
			type="link"
			value={ value }
		>
			<div style={ wrapStyle }>
				<RichTextField.edit
					tagName="span"
					placeholder={ placeholder }
					value={ value?.label || '' }
					onInput={ ( label ) => onInput(
						Object.assign( {}, value, { label } )
					) }
				/>
				<Dialog
					icon={ <div dangerouslySetInnerHTML={ { __html: link } }/> }
					label={ __( 'Edit Link Properties' ) }
					style={ { marginLeft: '4px' } }
				>
					<div style={ propertiesStyle }>
						<input
							type="text"
							onBlur={ () => ref?.current?.reportValidity() }
							onChange={ ( { target } ) => onInput(
								Object.assign( {}, value, { href: target.value } )
							) }
							placeholder="https://"
							value={ value?.href }
							ref={ ref }
							style={ urlInputStyle }
						/>
						<div dangerouslySetInnerHTML={ { __html: upRightFromSquare } }/>
						<BooleanField.edit
							options={ [
								{
									label: 'Same Window',
									value: '_self',
								},
								{
									label: 'New Window',
									value: '_blank',
								},
							] }
							tooltip="Open in new window?"
							tooltipPosition="left"
							size="small"
							value={ value?.target === '_blank' }
							onInput={ ( newWindow ) => onInput(
								Object.assign( {}, value, { 
									target: ( newWindow && '_blank' || '_self' ),
								} )
							) }
						/>
						<div style={ propertiesAfterStyle }/>
					</div>
				</Dialog>
			</div>
		</Field.edit>
	)

}

export default edit
