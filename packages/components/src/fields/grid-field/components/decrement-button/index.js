import classNames from 'classnames'
import { minus } from '../../../../icons/index.js'

import './style.css'

function DecrementButton( {
	onClick = () => {},
	disabled = false,
} ) {
	return (
		<div
			className={ classNames( 'blueprint-blocks:grid-field-minus', { 'is-disabled': disabled } ) }
			onClick={ onClick }
		>
			<img src={ minus }/>
		</div>
	)
}

export default DecrementButton