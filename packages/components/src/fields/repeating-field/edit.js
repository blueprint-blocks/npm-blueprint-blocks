import classNames from 'classnames'
import { minus, plus } from '../../icons/index.js'
import Field from '../field/index.js'

import './style.css'

function edit( { onInput, children, min = 0, max = null, value = [], ...props } ) {

	return (
		<Field.edit
			{ ...props }
			type="repeating"
		>
			{ value.map( ( row, index ) => (
				children.map( ( { props, type } ) => {
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
							value={ row?.[ props.attributeName ] }
						/>
					)
				} )
			) ) }

			<div
				className={ classNames(
					'blueprint-blocks:repeating-field-minus', 
					{ 'is-disabled': value.length <= min } 
				) } 
				onClick={ () => {
					onInput( value.slice( 0, -1 ) )
				} }
			>
				<img src={ minus }/>
			</div>
			<div
				className={ classNames(
					'blueprint-blocks:repeating-field-minus', 
					{ 'is-disabled': max !== null && value.length >= max } 
				) } 
				onClick={ () => {
					onInput( [ ...value, {} ] )
				} }
			>
				<img src={ plus }/>
			</div>
		</Field.edit>
	)
}

export default edit
