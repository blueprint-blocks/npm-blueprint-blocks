import classNames from 'classnames'
import memoize from 'micro-memoize'
import * as Icons from '../../icons/index.js'
import Field from '../field/index.js'

import BOTH_AXES_OPTIONS from './data/both-axes.json'
import X_AXIS_OPTIONS from './data/x-axis.json'
import Y_AXIS_OPTIONS from './data/y-axis.json'

import './style.scss'

const getActiveIndex = memoize( ( axis = 'both', activeValue ) => {
	const values = axisValues( axis )

	for ( let i = 0; i < values.length; i++ ) {
		if ( activeValue?.[0] === values[i]?.[0] && ( activeValue?.[1] === values[i]?.[1] || ( activeValue?.[1] === 'stretch' && values[i]?.[1] === 'center' ) ) ) {
			return i
		}
	}

	return 0
} )

const axisOptions = memoize( ( axis = 'both' ) => {
	if ( axis === 'x' ) {
		return X_AXIS_OPTIONS
	} else if ( axis === 'y' ) {
		return Y_AXIS_OPTIONS
	}

	return BOTH_AXES_OPTIONS
} )

const axisValues = memoize( ( axis = 'both' ) => (
	axisOptions( axis ).map( ( { value } ) => value )
) )

function edit( { onInput, axis = 'both', stretch = true, value, ...props } ) {

	const activeIndex = getActiveIndex( 'both', value )

	const onChange = ( [ horizontal, vertical ] ) => {
		if ( axis === 'both' && stretch === true && value?.[0] === horizontal && value?.[1] === vertical ) {
			onInput( [ horizontal, 'stretch' ] )
		} else {
			onInput( [ horizontal, vertical ] )
		}
	}

	return (
		<Field.edit
			{ ...props }
			type="position"
			value={ value }
		>
			<div
				className={ classNames(
					'blueprint-blocks:position-field-wrap', 
					{
						'can-stretch': ( axis === 'both' && stretch === true ),
						'is-stretch': ( axis === 'both' && stretch === true && value?.[1] === 'stretch' ),
						'is-both-axes': axis === 'both',
						[`is-${ axis }-axis`]: axis !== 'both', 
					}
				) }
			>
				{ axisOptions( axis ).map( ( { icon, label, value }, index ) => (
					<div
						onClick={ () => onChange( value ) }
						title={ label }
						className={ classNames( { 'is-active': index === activeIndex } ) }
					>
						<div dangerouslySetInnerHTML={ { __html: Icons[ icon ] } }/>
					</div>
				) ) }
			</div>
		</Field.edit>
	)

}

export default edit
