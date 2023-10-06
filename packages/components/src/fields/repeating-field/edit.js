import classNames from 'classnames'
import { minus, plus } from '../../icons/index.js'
import Field from '../field/index.js'

import './style.scss'

function edit( { onInput, children = [], count = null, min = 0, max = null, value = [], ...props } ) {

	let rowCount = value.length

	if ( count !== null ) {
		rowCount = parseInt( count )
	}

	return (
		<Field.edit
			{ ...props }
			type="repeating"
		>
			{ [ ...Array( rowCount ).keys() ].map( ( index ) => (
				( Array.isArray( children ) && children || [ children ] ).map( ( { props, type } ) => {
					const Component = type
					return (
						<Component
							{ ...props }
							onInput={ ( childValue ) => {
								if ( !props?.attributeName ) {
									return
								}

								const newValue = [ ...value ]
								newValue[ index ][ props.attributeName ] = childValue

								onInput( newValue )
							} }
							value={ value?.[ index ]?.[ props.attributeName ] }
						/>
					)
				} )
			) ) }

			{ count === null && (
				<div
					className={ classNames(
						'blueprint-blocks-repeating-field-minus',
						{ 'is-disabled': value.length <= min }
					) }
					onClick={ () => {
						onInput( value.slice( 0, -1 ) )
					} }
				>
					<div dangerouslySetInnerHTML={ { __html: minus } }/>
				</div>
			) }
			{ count === null && (
				<div
					className={ classNames(
						'blueprint-blocks:repeating-field-plus',
						{ 'is-disabled': max !== null && value.length >= max }
					) }
					onClick={ () => {
						onInput( [ ...value, {} ] )
					} }
				>
					<div dangerouslySetInnerHTML={ { __html: plus } }/>
				</div>
			) }
		</Field.edit>
	)
}

export default edit
