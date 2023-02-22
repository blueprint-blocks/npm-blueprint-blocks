import classNames from 'classnames'
import { ToolbarGroup, ToolbarButton } from '@wordpress/components'

function edit( { onInput, options = [], multiple = false, disabled = false, value, ...props } ) {

	return (
		<ToolbarGroup className={ classNames(
			'PatternsFields_ToolbarField',
		) }>
			{ options.map( ( { icon, subscript, label, ...option } ) => (
				<ToolbarButton
					icon={ icon || <div className="label">{ label }</div> }
					subscript={ subscript }
					className="PatternsFields_ToolbarField-item"
					title={ label }
					isActive={ option.value === value }
					onClick={ () => onInput( option.value ) }
				/>
			) ) }
		</ToolbarGroup>
	)

}

export default edit