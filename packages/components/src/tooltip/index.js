import classNames from 'classnames'

import './style.scss'

function Tooltip( { label } ) {

	return (
		<div className={ classNames( 'blueprint-blocks:tooltip' ) }>
			{ label }
		</div>
	)

}

export default Tooltip
