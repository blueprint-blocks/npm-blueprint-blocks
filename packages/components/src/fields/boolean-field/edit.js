import classNames from 'classnames'
import Field from '../field'
import Tooltip from '../../tooltip'

import './style.css'

function edit( { onInput, options = [], multiple = false, disabled = false, size = 'normal', tooltip, tooltipPosition = 'center', value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			className={ [ { 'is-true': !!value, 'is-false': !value, 'is-small': ( size === 'small' ) }, ...( props.className || [] ) ] }
			type="boolean"
			value={ value }
		>
			<div 
				className="blueprint-blocks:boolean-field-wrap" 
				onClick={ () => onInput(!value) }
			>
				<div className={ classNames('blueprint-blocks:boolean-field-false') }/>
				<div className={ classNames('blueprint-blocks:boolean-field-true') } />
				<div className={ classNames('blueprint-blocks:boolean-field-toggle') }/>
				{ tooltip && (
					<Tooltip label={ tooltip }/>
				) }
			</div>
		</Field.edit>
	)

}

export default edit
