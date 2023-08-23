import classNames from 'classnames'
import { ToolbarGroup, ToolbarButton } from '@wordpress/components'

import './style.scss'

function edit( { onInput, options = [], multiple = false, disabled = false, value, ...props } ) {

	return (
		<ToolbarGroup className={ classNames( 'blueprint-blocks:toolbar-field' ) }>
			{ options.map( ( { icon, subscript, label, ...option } ) => (
				<ToolbarButton
					icon={ icon || <div className="label">{ label }</div> }
					subscript={ subscript }
					className="blueprint-blocks:toolbar-field-button"
					title={ label }
					isActive={ option.value === value }
					onClick={ () => onInput( option.value ) }
				/>
			) ) }
		</ToolbarGroup>
	)

}

export default edit