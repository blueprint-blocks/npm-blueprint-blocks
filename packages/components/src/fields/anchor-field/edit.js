import classNames from 'classnames'
import { __ } from '@wordpress/i18n'
import Field from '../field/index.js'
import TextField from '../text-field/index.js'

import './style.css'

function edit( { 
	onInput, 
	className = [], 
	customValidity = '', 
	placeholder = '#anchor-name', 
	value = {}, 
	...props 
} ) {

	return (
		<Field.edit
			{ ...props }
			description={ props?.description || __('Enter an id for the anchor to this element on the page.') }
			className={ classNames( Array.isArray( className ) && className || [ className ] ) }
			type="anchor"
			value={ value }
		>
			<div className="blueprint-blocks:anchor-field-wrap">
				<TextField.edit
					placeholder={ placeholder }
					pattern="#?[A-Za-z0-9_-]+"
					customValidity={ customValidity || __('Anchors must be formatted with a # followed by letters, numbers, dashes, or underscores.') }
					value={ value }
					onInput={ ( value ) => {
						if ( value.slice(0, 1) !== '#' ) {
							onInput( `#${value}` )
						} else {
							onInput( value )
						}
					} }
				/>
			</div>
		</Field.edit>
	)

}

export default edit
