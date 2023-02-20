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

function edit( { attributes, name, onInput, options = [], multiple = false, disabled = false, tagName = 'div', value, ...props } ) {

	const index = activeIndex(options, value)

	return (
		<Field.edit
			{ ...props }
			name={ name }
			tagName={ tagName }
			type="increment"
			value={ value }
		>
			<div
				className={ classNames(
					'blueprint-blocks:increment-field-minus', 
					{ 'is-disabled': index === 0 } 
				) } 
				onClick={ () => {
					if ( index > 0 ) { 
						onInput(options?.[ index - 1 ]?.value)
					}
				} }
			/>

			<div className={ classNames(
				'blueprint-blocks:increment-field-label'
			) }>
				{ options?.[ index ]?.label }
			</div>

			<div
				className={ classNames(
					'blueprint-blocks:increment-field-plus',
					{ 'is-disabled': index === options.length - 1 }
				) }
				onClick={ () => {
					if ( index < options.length - 1 ) { 
						onInput(options?.[ index + 1 ]?.value)
					}
				} }
			/>
		</Field.edit>
	)

}

export default edit
