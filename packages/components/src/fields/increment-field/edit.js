import classNames from 'classnames'
import memoize from 'micro-memoize'
import { angleLeft, angleRight } from '../../icons/index.js'
import Field from '../field/index.js'

import './style.scss'

const activeIndex = memoize( ( options, activeValue ) => {
	for ( let i = 0; i < options.length; i++ ) {
		if ( options[i]?.value === activeValue ) {
			return i
		}
	}

	return 0
} )

const getMinMaxOptions = memoize( ( min, max, step ) => {
	return Array.from( { length: ( 1 + parseInt( max ) - parseInt( min ) ) }, ( value, index ) => ( {
		value: ( ( index + parseInt( min ) ) * parseInt( step ) ),
	} ) )
} )

function edit( {
	onInput,
	label,
	options = [],
	min = 1,
	max = 1,
	step = 1,
	value,
	...props
} ) {

	let incrementOptions = options

	if ( options.length === 0 && parseInt( min ) !== parseInt( max ) ) {
		incrementOptions = getMinMaxOptions( parseInt( min ), parseInt( max ), parseInt( step ) )
	}

	const index = activeIndex( incrementOptions, value )

	return (
		<Field.edit
			{ ...props }
			type="increment"
			value={ value }
		>
			{ 'incrementfield34ewdsxa' }
			<div className="blueprint-blocks:increment-field-wrap">
				<div
					className={ classNames(
						'blueprint-blocks:increment-field-minus',
						{ 'is-disabled': index === 0 }
					) }
					onClick={ () => {
						if ( index > 0 ) {
							onInput( incrementOptions?.[ index - 1 ]?.value )
						}
					} }
				>
					<div dangerouslySetInnerHTML={ { __html: angleLeft } }/>
				</div>

				<div className={ classNames(
					'blueprint-blocks:increment-field-label'
				) }>
					{ label && <span>{ label } </span> }
					<span>{ incrementOptions?.[ index ]?.label || incrementOptions?.[ index ]?.value }</span>
				</div>

				<div
					className={ classNames(
						'blueprint-blocks:increment-field-plus',
						{ 'is-disabled': index === incrementOptions.length - 1 }
					) }
					onClick={ () => {
						if ( index < incrementOptions.length - 1 ) {
							onInput( incrementOptions?.[ index + 1 ]?.value )
						}
					} }
				>
					<div dangerouslySetInnerHTML={ { __html: angleRight } }/>
				</div>
			</div>
		</Field.edit>
	)

}

export default edit
