import { Button } from '@wordpress/components'
import { createRef, useState } from '@wordpress/element'
import { useClickOutside } from '@blueprint-blocks/utility'

import './style.scss'

const elStyle = {
	alignItems: 'start',
	display: 'inline-grid',
	height: '16px',
	justifyContent: 'center',
	position: 'relative',
	width: '16px',
}

const toggleStyle = {
	boxShadow: 'none',
	color: 'currentColor',
	cursor: 'pointer',
	display: 'block',
	height: '16px',
	minWidth: '16px',
	outline: 'none',
	padding: '0',
	width: '16px',
}

const wrapStyle = {
	background: '#fff',
    boxShadow: 'var(--blueprint-blocks-box-shadow)',
    borderRadius: '4px',
	bottom: 'calc(100% + 7px)',
	left: '50%',
    padding: '8px',
	position: 'absolute',
	transform: 'translateX(-50%)',
	width: 'min(240px, calc(100vw - 16px))',
	zIndex: '100',
}

const wrapAfterStyle = {
	borderLeft: '6px solid transparent',
	borderRight: '6px solid transparent',
	borderTop: '6px solid #fff',
	bottom: '-6px',
	content: '',
	display: 'block',
	left: '50%',
	position: 'absolute',
	transform: 'translateX(-50%)',
}

function Dialog( { icon, label, children = [], style = {}, ...props } ) {

	const ref = createRef()
	const [ isDialogOpen, openDialog ] = useState( false )

	useClickOutside( ref, ( event ) => openDialog( false ) )

	return (
		<div style={ { ...elStyle, ...style } } ref={ ref }>
			<Button 
				icon={ icon }
				style={ toggleStyle }
				label={ label }
				onClick={ () => openDialog( !isDialogOpen ) }
			/>
			{ isDialogOpen && (
				<div style={ wrapStyle }>
					{ children }
					<div style={ wrapAfterStyle }/>
				</div>
			) }
		</div>
	)

}

export default Dialog
