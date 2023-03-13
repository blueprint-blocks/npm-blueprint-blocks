import classNames from 'classnames'
import memoize from 'micro-memoize'
import Field from '../field'

import './style.css'

const activeIndex = memoize( ( options, activeValue ) => {
	for ( let i = 0; i < options.length; i++ ) {
		if ( options[i]?.value === activeValue ) {
			return i
		}
	}

	return 0
} )

function edit( { onInput, options = [], multiple = false, disabled = false, value, ...props } ) {

	return (
		<Field.edit
			{ ...props }
			className={ [ { 'is-true': !!value, 'is-false': !value }, ...( props.className || [] ) ] }
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
			</div>
		</Field.edit>
	)

}

export default edit
