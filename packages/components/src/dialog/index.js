import classNames from 'classnames'
import { Button } from '@wordpress/components'
import { createRef, useState } from '@wordpress/element'
import { useClickOutside } from '@blueprint-blocks/utility'

import './style.scss'

function Dialog( { icon, label, children = [], ...props } ) {

	const ref = createRef()
	const [ isDialogOpen, openDialog ] = useState( false )

	useClickOutside( ref, ( event ) => openDialog( false ) )

	return (
		<div className={ classNames( 'blueprint-blocks:dialog', { 'is-open': isDialogOpen } ) } ref={ ref }>
			<Button
				className={ classNames( 'blueprint-blocks:dialog-toggle' ) }
				icon={ icon }
				label={ label }
				onClick={ () => openDialog( true ) }
			/>
			{ isDialogOpen && (
				<div className={ classNames( 'blueprint-blocks:dialog-wrap' ) }>
					{ children }
				</div>
			) }
		</div>
	)

}

export default Dialog
