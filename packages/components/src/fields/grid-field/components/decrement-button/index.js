import classNames from 'classnames'
import { minus } from '../../../../icons/index.js'

import './style.scss'

function DecrementButton( {
	onClick = () => {},
	disabled = false,
} ) {
	return (
		<div
			className={ classNames( 'blueprint-blocks:grid-field-minus', { 'is-disabled': disabled } ) }
			onClick={ onClick }
		>
			<div dangerouslySetInnerHTML={ { __html: minus } }/>
		</div>
	)
}

export default DecrementButton