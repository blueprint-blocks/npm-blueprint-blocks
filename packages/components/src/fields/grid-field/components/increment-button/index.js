import classNames from 'classnames'
import { plus } from '../../../../icons/index.js'

import './style.scss'

function IncrementButton( {
	onClick = () => {},
	disabled = false,
} ) {
	return (
		<div
			className={ classNames( 'blueprint-blocks:grid-field-plus', { 'is-disabled': disabled } ) }
			onClick={ onClick }
		>
			<div dangerouslySetInnerHTML={ { __html: plus } }/>
		</div>
	)
}

export default IncrementButton