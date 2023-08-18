import classNames from 'classnames'
import { plus } from '@blueprint-blocks/icons'

import './style.css'

function IncrementButton( {
	onClick = () => {},
	disabled = false,
} ) {
	return (
		<div
			className={ classNames( 'blueprint-blocks:grid-field-plus', { 'is-disabled': disabled } ) }
			onClick={ onClick }
		>
			<img src={ plus }/>
		</div>
	)
}

export default IncrementButton